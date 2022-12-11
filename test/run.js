const path = require('path')
const brregpro = require('../index.js')

async function run() {
  const config = require(path.join(process.cwd(), 'brreg.json'))
  const brreg = brregpro(config)
  const result = await brreg.fetch('enhet/hentBasisdataMini', {
    orgnr: '992616091'
  })
  console.log(JSON.stringify(result, null, 2))
}

run()
