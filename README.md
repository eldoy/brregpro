# Brreg Pro

Fetch data from paid web services at the [Norwegian company registry.](https://www.brreg.no/produkter-og-tjenester/bestille-produkter/maskinlesbare-data-enhetsregisteret/begrenset-tilgang-enhetsregisteret/)

### Install

```
npm i brregpro
```

### Usage

```js
const gateway = require('brregpro')

// Init with credentials
const brreg = gateway({ user: 'usernumber', pw: 'password' })
```

MIT Licensed. Enjoy!
