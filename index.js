const path = require('path')
const soap = require('soap')
const xml2js = require('xml2js')
const parser = new xml2js.Parser()

const url = 'https://grunndata.brreg.no/grunndata/ErFr.wsdl'
const config = require(path.join(process.cwd(), 'brreg.json'))

const query = { ...config, orgnr: '992616091' }

function fetch(url, query) {
  return new Promise(function (resolve, reject) {
    soap.createClient(url, {}, function (err, client) {
      if (err) {
        return reject(err)
      }
      client.hentBasisdataMini(query, function (err, data) {
        if (err) {
          return reject(err)
        }
        resolve(data.return)
      })
    })
  })
}

async function brregpro() {
  let data = await fetch(url, query)

  console.log(data)

  console.log(data)

  const json = await parser.parseStringPromise(data)
  console.log(json)
}

brregpro()
