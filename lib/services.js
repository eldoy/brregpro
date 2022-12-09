const enhet = {
  url: 'https://grunndata.brreg.no/grunndata/ErFr.wsdl',
  endpoints: {
    hentRollerFdato: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentOpplTilknRegister: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    sokEnhet: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        searchRequest: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentKonsern: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentProkuraSignatur: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentBasisdataMini: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentRoller: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentEnBedriftVirksomhet: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentBedrifterVirksomheter: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentSaerligeOpplysninger: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentProkuraSignaturFdato: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentRolleutskrift: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        requestId: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentBasisdata: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentBasisdataFdato: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    },
    hentEndringslogg: {
      input: { userid: 'xs:string', password: 'xs:string' },
      output: { return: 'xs:string' }
    },
    hentKontaktdata: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: { return: 'xs:string' }
    }
  }
}

const frivillighet = {
  url: 'https://grunndata.brreg.no/grunndata/Frivillighet.wsdl',
  endpoints: {
    hentFrivillighet: {
      input: {
        userid: 'xs:string',
        password: 'xs:string',
        orgnr: 'xs:string'
      },
      output: {
        return: 'xs:string'
      }
    }
  }
}

const historisk = {
  url: 'https://ws.brreg.no/grunndata-ws/GrunndataService?WSDL',
  endpoints: {
    hentHistoriskRegisterutskrift: {
      input: {
        orgnr: 'xsd:string',
        histDato: 'xsd:string',
        targetNSAlias: 'ns0',
        targetNamespace: 'http://grunndata.services.brreg.no'
      },
      output: {
        return: 'xsd:string',
        targetNSAlias: 'ns0',
        targetNamespace: 'http://grunndata.services.brreg.no'
      }
    },
    hentSaksopplysninger: {
      input: {
        orgnr: 'xsd:string',
        targetNSAlias: 'ns0',
        targetNamespace: 'http://grunndata.services.brreg.no'
      },
      output: {
        return: 'xsd:string',
        targetNSAlias: 'ns0',
        targetNamespace: 'http://grunndata.services.brreg.no'
      }
    },
    hentHistoriskRegisterutskriftMedFdato: {
      input: {
        orgnr: 'xsd:string',
        histDato: 'xsd:string',
        targetNSAlias: 'ns0',
        targetNamespace: 'http://grunndata.services.brreg.no'
      },
      output: {
        return: 'xsd:string',
        targetNSAlias: 'ns0',
        targetNamespace: 'http://grunndata.services.brreg.no'
      }
    }
  }
}

module.exports = { enhet, frivillighet, historisk }
