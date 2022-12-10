const soap = require('soap')
const xml2js = require('xml2js')
const parser = new xml2js.Parser({
  ignoreAttrs: true,
  explicitArray: false,
  includeWhiteChars: true,
  trim: true
})
const services = require('./lib/services.js')

module.exports = function brregpro(config = {}) {
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
