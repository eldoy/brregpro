const path = require('path')
const soap = require('soap')
const xml2js = require('xml2js')
const parser = new xml2js.Parser()
const services = require('./lib/services.js')

function brregpro(config = {}) {
  function fetch(uri, query) {
    const [name, endpoint] = uri.split('/')
    console.log({ name, endpoint })
    const { url } = services[name]

    console.log({ url })

    query = { ...config, ...query }

    console.log(query)

    return new Promise(function (resolve, reject) {
      soap.createClient(url, {}, function (err, client) {
        if (err) {
          return reject(err)
        }
        const desc = client.describe()
        console.log(JSON.stringify(desc, null, 2))
        client[endpoint](query, function (err, data) {
          if (err) {
            return reject(err)
          }
          console.log(data.return)
          parser
            .parseStringPromise(data.return)
            .then(function (json) {
              resolve(json)
            })
            .catch(function (err) {
              reject(err)
            })
        })
      })
    })
  }

  return { fetch }
}

async function run() {
  const config = require(path.join(process.cwd(), 'brreg.json'))
  const brreg = brregpro(config)
  const result = await brreg.fetch('enhet/hentBasisdataMini', {
    orgnr: '992616091'
  })
  console.log(JSON.stringify(result, null, 2))
}

run()
