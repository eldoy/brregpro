const path = require('path')
const soap = require('soap')
const url = 'https://grunndata.brreg.no/grunndata/ErFr.wsdl'
const config = require(path.join(process.cwd(), 'brreg.json'))

const args = { ...config, orgnr: '992616091' }

soap.createClient(url, config, function (err, client) {
  client.hentBasisdataMini(args, function (err, result) {
    console.log(result)
  })
})
