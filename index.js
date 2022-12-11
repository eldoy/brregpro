const soap = require('soap')
const xml2js = require('xml2js')
const parser = new xml2js.Parser({
  ignoreAttrs: true,
  explicitArray: false,
  includeWhiteChars: true,
  trim: true
})
const services = require('./lib/services.js')

const DEBUG = process.env.NODE_ENV != 'production'

function log(...args) {
  if (DEBUG) {
    console.info(...args)
  }
}

module.exports = function brregpro(config = {}) {
  function fetch(uri, query) {
    const [name, endpoint] = uri.split('/')
    const { url } = services[name]
    query = { ...config, ...query }
    return new Promise(function (resolve, reject) {
      soap.createClient(url, {}, function (err, client) {
        if (err) {
          return reject(err)
        }
        // Uncomment to see all end points
        // const desc = client.describe()
        client[endpoint](query, function (err, data) {
          if (err) {
            return reject(err)
          }
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
