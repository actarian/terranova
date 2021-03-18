/**
 * @license more v1.0.0
 * (c) 2021 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?f(require('rxcomp'),require('rxjs/operators'),require('rxjs')):typeof define==='function'&&define.amd?define(['rxcomp','rxjs/operators','rxjs'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,f(g.rxcomp,g.rxjs.operators,g.rxjs));}(this,(function(rxcomp, operators, rxjs){'use strict';function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}var Templates = {
  Clients: "clients",
  Group: "group",
  Suite: "suite",
  Tabs: "tabs",
  TextCenter: "textCenter",
  TextGraph: "textGraph",
  TextLeft: "textLeft",
  TextMap: "textMap",
  TextRight: "textRight",
  TextTwoCols: "textTwoCols",
  Welcome: "welcome"
};
var DATA = [{
  "id": 1,
  "template": Templates.Welcome,
  "name": "Welcome"
}, {
  "id": 2,
  "template": Templates.Group,
  "name": "Chi Siamo",
  "items": [{
    "id": 21,
    "template": Templates.TextCenter,
    "name": "Chi Siamo",
    "title": "Chi Siamo"
  }, {
    "id": 22,
    "template": Templates.TextLeft,
    "name": "Core Values",
    "title": "Core Values",
    "abstract": "<p>I nostri Core Value tramandano la nostra cultura e definiscono il carattere della nostra Azienda.</p><p>Ogni giorno guidano il modo in cui ci comportiamo e con cui prendiamo decisioni.</p>",
    "list": [{
      "title": "Tenacia"
    }, {
      "title": "Centralità della Persona"
    }, {
      "title": "Integrità"
    }, {
      "title": "Qualità del Prodotto"
    }, {
      "title": "Responsabilità"
    }],
    "image": "img/slides/slide-2-1.jpg"
  }, {
    "id": 23,
    "template": Templates.TextCenter,
    "name": "La nostra mission",
    "title": "La nostra mission",
    "abstract": "Aiutare i nostri Clienti con Soluzioni di elevata qualità, che superino gli standard di mercato e creino valore nel tempo.",
    "image": "img/slides/slide-2-2.jpg"
  }, {
    "id": 24,
    "template": Templates.TextCenter,
    "name": "La nostra vision",
    "title": "La nostra vision",
    "abstract": "Diventare uno dei Leader del mercato, fornendo prodotti flessibili e integrati che anticipano le esigenze dei nostri Clienti sfruttando lo straordinario know how delle nostre persone.",
    "image": "img/slides/slide-2-3.jpg"
  }, {
    "id": 25,
    "template": Templates.TextGraph,
    "name": "Persone",
    "title": "Persone",
    "abstract": "Il nostro Presente ed il nostro Futuro.",
    "description": "<p>330 risorse in 10 sedi lavorano insieme per sviluppare e migliorare il prodotto leader per le aziende di Distribuzione e Vendita di Gas ed Energia Elettrica, per il Servizio Idrico, per l’Ambiente e in progetti di Smart Network.</p><p>248 area tecnica funzionale.</p><p>82 management e staff.</p>",
    "graph": {}
  }, {
    "id": 26,
    "template": Templates.TextGraph,
    "name": "Fatturato",
    "title": "La crescita",
    "abstract": "Negli ultimi anni, Terranova ha avuto una crescita costante sia in fatturato che in numero di risorse.",
    "description": "<p>Fatturato di oltre € 41 milioni<br>con Ambiente.it e Arcoda per l’anno fiscale 2020.</p>",
    "graph": {}
  }, {
    "id": 27,
    "template": Templates.TextMap,
    "name": "Le Sedi",
    "title": "Le Sedi",
    "abstract": "Presenti in Italia, Cina, Regno Unito e Uzbekistan.",
    "image": "img/slides/slide-2-6.png",
    "pins": [{
      "x": 0,
      "y": 0,
      "title": "Regno Unito",
      "abstract": "Birmingham"
    }, {
      "x": 0,
      "y": 0,
      "title": "Italia",
      "abstract": "HQ Firenze, Grosseto, Milano, Verona, Roma, Trento, Mestre"
    }, {
      "x": 0,
      "y": 0,
      "title": "Uzbekistan",
      "abstract": "Tashkent"
    }, {
      "x": 0,
      "y": 0,
      "title": "China",
      "abstract": "Shangai"
    }]
  }, {
    "id": 28,
    "template": Templates.TextRight,
    "name": "obiettivi futuri",
    "title": "obiettivi futuri",
    "abstract": "Continuo sviluppo della competenza multidisciplinare, del supporto normativo e l’automazione e digitalizzazione dei processi.",
    "description": "<p>Gli obiettivi sono fornire al mercato soluzioni software complete (end to end) dedicate al mercato della Distribuzione (quali la Misura, lo Smart Metering, il Settlement, la Work Force Management, attività di Back Office) e della Vendita.</p><p>Nuovi investimenti in tecnologie per lo sviluppo di progetti di Smart Metering, Smart Grid e Smart City.</p>",
    "list": [{
      "title": "Misura"
    }, {
      "title": "Settlement"
    }, {
      "title": "Work force Management"
    }, {
      "title": "Crm & Billing"
    }, {
      "title": "Smart Metering"
    }, {
      "title": "Smart grid"
    }, {
      "title": "Smart City"
    }],
    "image": "img/slides/slide-2-7.jpg"
  }]
}, {
  "id": 3,
  "template": Templates.Group,
  "name": "I Partner",
  "items": [{
    "id": 31,
    "template": Templates.TextCenter,
    "name": "I partner",
    "title": "I partner"
  }, {
    "id": 32,
    "template": Templates.TextLeft,
    "name": "Pietro Fiorentini",
    "title": "Pietro Fiorentini",
    "abstract": "",
    "list": [{
      "title": "Tenacia"
    }],
    "image": "img/slides/slide-3-1.jpg"
  }, {
    "id": 32,
    "template": Templates.TextLeft,
    "name": "Arcoda",
    "title": "Arcoda",
    "abstract": "",
    "list": [{
      "title": "Tenacia"
    }],
    "image": "img/slides/slide-3-1.jpg"
  }, {
    "id": 32,
    "template": Templates.TextLeft,
    "name": "Ambiente.it",
    "title": "Ambiente.it",
    "abstract": "",
    "list": [{
      "title": "Tenacia"
    }],
    "image": "img/slides/slide-3-1.jpg"
  }]
}, {
  "id": 4,
  "template": Templates.Group,
  "name": "Soluzioni",
  "items": [{
    "id": 41,
    "template": Templates.TextCenter,
    "name": "Soluzioni",
    "title": "Soluzioni"
  }, {
    "id": 42,
    "template": Templates.Tabs,
    "name": "Distribuzione",
    "items": [{
      "id": 421,
      "template": Templates.TextLeft,
      "name": "Distribuzione",
      "title": "Distribuzione",
      "abstract": "Il settore storico di Terranova, che la vede primeggiare a livello internazionale con un’importante quota di mercato.",
      "description": "Negli ultimi anni, inoltre, Terranova ha investito ingenti risorse nello sviluppo di soluzioni a supporto dell’area operations, delle attività di manutenzione, della cartografia e dell’automazione delle squadre di lavoro (Work Force Automation)."
    }, {
      "id": 422,
      "template": Templates.Suite,
      "name": "Suite Reti",
      "title": "Suite Reti",
      "suite": [{
        "title": "Suite Reti",
        "logo": "img/logos/suite-reti-1.png",
        "items": [{
          "x": 0,
          "y": 0,
          "color": "#ffffff",
          "title": "Reti Acqua",
          "logo": "img/logos/suite-reti-1-1.png"
        }, {
          "x": 0,
          "y": 0,
          "color": "#ffffff",
          "title": "Reti Wfa",
          "logo": "img/logos/suite-reti-1-2.png"
        }, {
          "x": 0,
          "y": 0,
          "color": "#ffffff",
          "title": "Reti Energia",
          "logo": "img/logos/suite-reti-1-3.png"
        }]
      }]
    }, {
      "id": 423,
      "template": Templates.Clients,
      "name": "Clienti",
      "title": "Clienti",
      "abstract": "Le nostre referenze",
      "clients": [{
        "title": "Acsm Agam",
        "logo": "img/suite/reti/clienti/acsm agam.png"
      }, {
        "title": "Adrigas",
        "logo": "img/suite/reti/clienti/adrigas.png"
      }, {
        "title": "Aemme Linea Distribuzione",
        "logo": "img/suite/reti/clienti/aemme-linea-distribuzione.png"
      }, {
        "title": "Amag Reti Gas",
        "logo": "img/suite/reti/clienti/amag reti gas.png"
      }, {
        "title": "Amc",
        "logo": "img/suite/reti/clienti/amc.png"
      }, {
        "title": "AP Reti Gas Nordest",
        "logo": "img/suite/reti/clienti/ap reti gas nordest.png"
      }, {
        "title": "AP Reti Gas Rovigo",
        "logo": "img/suite/reti/clienti/ap reti gas rovigo.png"
      }, {
        "title": "AP Reti Gas Vicenza",
        "logo": "img/suite/reti/clienti/ap reti gas vicenza.png"
      }, {
        "title": "AP Reti Gas",
        "logo": "img/suite/reti/clienti/ap reti gas.png"
      }, {
        "title": "Aquamet",
        "logo": "img/suite/reti/clienti/aquamet.png"
      }, {
        "title": "Asm Vigevano",
        "logo": "img/suite/reti/clienti/asm vigevano.png"
      }, {
        "title": "Asmt",
        "logo": "img/suite/reti/clienti/asmt.png"
      }, {
        "title": "Atr",
        "logo": "img/suite/reti/clienti/atr.png"
      }, {
        "title": "Azienda Energetica Valtellina Valchiavenna",
        "logo": "img/suite/reti/clienti/azienda energetica valtellina valchiavenna.png"
      }, {
        "title": "Blu Reti Gas",
        "logo": "img/suite/reti/clienti/blu reti gas.png"
      }, {
        "title": "Cbl Distribuzione Srl",
        "logo": "img/suite/reti/clienti/cbl distribuzione srl.png"
      }, {
        "title": "Centria Reti Gas",
        "logo": "img/suite/reti/clienti/centria reti gas.png"
      }, {
        "title": "Cosvim",
        "logo": "img/suite/reti/clienti/cosvim.png"
      }, {
        "title": "Cps",
        "logo": "img/suite/reti/clienti/cps.png"
      }, {
        "title": "Dea Distribuzione Elettrica Adriatica",
        "logo": "img/suite/reti/clienti/dea distribuzione elettrica adriatica.png"
      }, {
        "title": "Dgn",
        "logo": "img/suite/reti/clienti/dgn.png"
      }, {
        "title": "E-Dyna",
        "logo": "img/suite/reti/clienti/e-dyna.png"
      }, {
        "title": "E",
        "logo": "img/suite/reti/clienti/e.png"
      }, {
        "title": "Edilgas",
        "logo": "img/suite/reti/clienti/edilgas.png"
      }, {
        "title": "Edma Reti Gas",
        "logo": "img/suite/reti/clienti/edma reti gas.png"
      }, {
        "title": "Gei",
        "logo": "img/suite/reti/clienti/gei.png"
      }, {
        "title": "Gigas Rete",
        "logo": "img/suite/reti/clienti/gigas rete.png"
      }, {
        "title": "Gp Infrastrutture",
        "logo": "img/suite/reti/clienti/gp infrastrutture.png"
      }, {
        "title": "Gruppo Erogasmet",
        "logo": "img/suite/reti/clienti/gruppo erogasmet.png"
      }, {
        "title": "Gruppo Gesam",
        "logo": "img/suite/reti/clienti/gruppo gesam.png"
      }, {
        "title": "Infrastrutture Distribuzione Gas",
        "logo": "img/suite/reti/clienti/infrastrutture distribuzione gas.png"
      }, {
        "title": "IReti",
        "logo": "img/suite/reti/clienti/ireti.png"
      }, {
        "title": "Linea Ri",
        "logo": "img/suite/reti/clienti/linea ri.png"
      }, {
        "title": "M Reti",
        "logo": "img/suite/reti/clienti/m reti.png"
      }, {
        "title": "Mediterranea",
        "logo": "img/suite/reti/clienti/mediterranea.png"
      }, {
        "title": "Megareti",
        "logo": "img/suite/reti/clienti/megareti.png"
      }, {
        "title": "Meta Edil",
        "logo": "img/suite/reti/clienti/meta edil.png"
      }, {
        "title": "Mn",
        "logo": "img/suite/reti/clienti/mn.png"
      }, {
        "title": "Pescara Distribuzione Gas",
        "logo": "img/suite/reti/clienti/pescara distribuzione gas.png"
      }, {
        "title": "Prealpi Gas",
        "logo": "img/suite/reti/clienti/prealpi gas.png"
      }, {
        "title": "Reti Distribuzione",
        "logo": "img/suite/reti/clienti/reti distribuzione.png"
      }, {
        "title": "Reti Metano Territorio",
        "logo": "img/suite/reti/clienti/reti metano territorio.png"
      }, {
        "title": "Reti Più",
        "logo": "img/suite/reti/clienti/reti-più.png"
      }, {
        "title": "Salerno Energia Holding",
        "logo": "img/suite/reti/clienti/salerno energia holding.png"
      }, {
        "title": "Sar",
        "logo": "img/suite/reti/clienti/sar.png"
      }, {
        "title": "Società Impianti Metano",
        "logo": "img/suite/reti/clienti/società impianti metano.png"
      }, {
        "title": "Stadtwerke Asm",
        "logo": "img/suite/reti/clienti/stadtwerke asm.png"
      }, {
        "title": "Tea Sei",
        "logo": "img/suite/reti/clienti/tea sei.png"
      }, {
        "title": "Tecniconsul",
        "logo": "img/suite/reti/clienti/tecni consul.png"
      }]
    }]
  }, {
    "id": 43,
    "template": Templates.Tabs,
    "name": "Smart Network",
    "items": [{
      "id": 431,
      "template": Templates.TextTwoCols,
      "name": "Smart Network",
      "title": "Smart Network",
      "abstract": "Attraverso l’utilizzo congiunto di varie tecnologie, Terranova offre alle aziende di distribuzione uno strumento completo che supporti tutti i processi connessi allo <b>Smart Metering</b> e <b>Smart Grid</b>.",
      "description": "<p>Da quelle imposte o incentivate dalla costante regolamentazione dell’Autorità di settore a quelle di gestione dell’infrastruttura, dei dispositivi e dei dati.</p><p>Dopo una prima fase in cui ha supportato la propria clientela nell’implementazione di progetti di Smart Metering nei settori gas, acqua ed elettrico Terranova adesso è pronta ad affrontare la nuova sfida dello Smart Metering di seconda generazione in avvio nel settore elettrico.</p><p>In ambito Smart Grid sono state sviluppate soluzioni per i settori gas ed acqua per la digitalizzazione della rete finalizzata all’efficienza operativa e alla sostenibilità ambientale.</p><p>Negli ultimi anni, inoltre, Terranova ha investito ingenti risorse nello sviluppo di soluzioni a supporto dell’area operations, delle attività di manutenzione, della cartografia e dell’automazione delle squadre di lavoro (Work Force Automation).</p>"
    }]
  }, {
    "id": 44,
    "template": Templates.Tabs,
    "name": "Vendita",
    "items": [{
      "id": 431,
      "template": Templates.TextLeft,
      "name": "Vendita",
      "title": "Vendita",
      "abstract": "Terranova supporta società di Vendita, retail ed i grossisti, con una soluzione completa per CRM e Billing.",
      "description": "La nostra suite per il Mercato della Vendita ha un obiettivo chiaro e concreto: individuare sempre nuove soluzioni e strumenti digitali per consentire ai nostri Clienti di differenziarsi dai propri competitors. Una condizione necessaria per rispondere alle dinamiche di un mercato in movimento continuo."
    }]
  }, {
    "id": 45,
    "template": Templates.Tabs,
    "name": "Settore Idrico",
    "items": [{
      "id": 431,
      "template": Templates.TextLeft,
      "name": "Settore Idrico",
      "title": "Settore Idrico",
      "abstract": "La soluzione per gli operatori del Settore Idrico per soddisfare le necessità di efficienza e supporto simultaneo dei processi di Distribuzione e di Vendita di acqua.",
      "list": [{
        "title": "Completezza e specializzazione"
      }, {
        "title": "Efficienza operativa"
      }, {
        "title": "Efficacia tecnica"
      }, {
        "title": "Compliancy"
      }, {
        "title": "Flessibilità ed adattabilità"
      }, {
        "title": "Attenzione per l’utente"
      }]
    }]
  }, {
    "id": 46,
    "template": Templates.Tabs,
    "name": "Gestione Ambientale",
    "items": [{
      "id": 431,
      "template": Templates.TextLeft,
      "name": "Gestione Ambientale",
      "title": "Gestione Ambientale",
      "abstract": "Una gamma completa di soluzioni software per soddisfare le esigenze di tutta la filiera della gestione dei rifiuti.",
      "description": "<p>La suite ECOS è una collana di moduli software, sempre aggiornati secondo le normative vigenti, progettata per l’informatizzazione dei processi gestionali di tutte le aziende della filiera ambientale.</p>"
    }]
  }]
}, {
  "id": 5,
  "template": Templates.TextMap,
  "name": "Clienti",
  "title": "Clienti",
  "abstract": "I nostri principali Clienti nel Mondo",
  "image": "img/slides/slide-4.png",
  "pins": [{
    "x": 0,
    "y": 0,
    "title": "Acsm Agam",
    "logo": "img/suite/reti/clienti/acsm agam.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Adrigas",
    "logo": "img/suite/reti/clienti/adrigas.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Aemme Linea Distribuzione",
    "logo": "img/suite/reti/clienti/aemme-linea-distribuzione.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Amag Reti Gas",
    "logo": "img/suite/reti/clienti/amag reti gas.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Amc",
    "logo": "img/suite/reti/clienti/amc.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "AP Reti Gas Nordest",
    "logo": "img/suite/reti/clienti/ap reti gas nordest.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "AP Reti Gas Rovigo",
    "logo": "img/suite/reti/clienti/ap reti gas rovigo.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "AP Reti Gas Vicenza",
    "logo": "img/suite/reti/clienti/ap reti gas vicenza.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "AP Reti Gas",
    "logo": "img/suite/reti/clienti/ap reti gas.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Aquamet",
    "logo": "img/suite/reti/clienti/aquamet.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Asm Vigevano",
    "logo": "img/suite/reti/clienti/asm vigevano.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Asmt",
    "logo": "img/suite/reti/clienti/asmt.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Atr",
    "logo": "img/suite/reti/clienti/atr.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Azienda Energetica Valtellina Valchiavenna",
    "logo": "img/suite/reti/clienti/azienda energetica valtellina valchiavenna.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Blu Reti Gas",
    "logo": "img/suite/reti/clienti/blu reti gas.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Cbl Distribuzione Srl",
    "logo": "img/suite/reti/clienti/cbl distribuzione srl.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Centria Reti Gas",
    "logo": "img/suite/reti/clienti/centria reti gas.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Cosvim",
    "logo": "img/suite/reti/clienti/cosvim.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Cps",
    "logo": "img/suite/reti/clienti/cps.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Dea Distribuzione Elettrica Adriatica",
    "logo": "img/suite/reti/clienti/dea distribuzione elettrica adriatica.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Dgn",
    "logo": "img/suite/reti/clienti/dgn.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "E-Dyna",
    "logo": "img/suite/reti/clienti/e-dyna.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "E",
    "logo": "img/suite/reti/clienti/e.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Edilgas",
    "logo": "img/suite/reti/clienti/edilgas.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Edma Reti Gas",
    "logo": "img/suite/reti/clienti/edma reti gas.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Gei",
    "logo": "img/suite/reti/clienti/gei.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Gigas Rete",
    "logo": "img/suite/reti/clienti/gigas rete.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Gp Infrastrutture",
    "logo": "img/suite/reti/clienti/gp infrastrutture.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Gruppo Erogasmet",
    "logo": "img/suite/reti/clienti/gruppo erogasmet.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Gruppo Gesam",
    "logo": "img/suite/reti/clienti/gruppo gesam.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Infrastrutture Distribuzione Gas",
    "logo": "img/suite/reti/clienti/infrastrutture distribuzione gas.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "IReti",
    "logo": "img/suite/reti/clienti/ireti.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Linea Ri",
    "logo": "img/suite/reti/clienti/linea ri.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "M Reti",
    "logo": "img/suite/reti/clienti/m reti.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Mediterranea",
    "logo": "img/suite/reti/clienti/mediterranea.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Megareti",
    "logo": "img/suite/reti/clienti/megareti.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Meta Edil",
    "logo": "img/suite/reti/clienti/meta edil.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Mn",
    "logo": "img/suite/reti/clienti/mn.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Pescara Distribuzione Gas",
    "logo": "img/suite/reti/clienti/pescara distribuzione gas.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Prealpi Gas",
    "logo": "img/suite/reti/clienti/prealpi gas.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Reti Distribuzione",
    "logo": "img/suite/reti/clienti/reti distribuzione.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Reti Metano Territorio",
    "logo": "img/suite/reti/clienti/reti metano territorio.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Reti Più",
    "logo": "img/suite/reti/clienti/reti-più.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Salerno Energia Holding",
    "logo": "img/suite/reti/clienti/salerno energia holding.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Sar",
    "logo": "img/suite/reti/clienti/sar.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Società Impianti Metano",
    "logo": "img/suite/reti/clienti/società impianti metano.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Stadtwerke Asm",
    "logo": "img/suite/reti/clienti/stadtwerke asm.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Tea Sei",
    "logo": "img/suite/reti/clienti/tea sei.png"
  }, {
    "x": 0,
    "y": 0,
    "title": "Tecniconsul",
    "logo": "img/suite/reti/clienti/tecni consul.png"
  }]
}];var ApiService = /*#__PURE__*/function () {
  function ApiService() {}

  ApiService.data$ = function data$() {
    return rxjs.of(DATA);
  };

  return ApiService;
}();var DragPoint = function DragPoint() {
  this.x = 0;
  this.y = 0;
};
var DragEvent = function DragEvent(options) {
  if (options) {
    Object.assign(this, options);
  }
};
var DragDownEvent = /*#__PURE__*/function (_DragEvent) {
  _inheritsLoose(DragDownEvent, _DragEvent);

  function DragDownEvent(options) {
    var _this;

    _this = _DragEvent.call(this, options) || this;
    _this.distance = new DragPoint();
    _this.strength = new DragPoint();
    _this.speed = new DragPoint();
    return _this;
  }

  return DragDownEvent;
}(DragEvent);
var DragMoveEvent = /*#__PURE__*/function (_DragEvent2) {
  _inheritsLoose(DragMoveEvent, _DragEvent2);

  function DragMoveEvent(options) {
    var _this2;

    _this2 = _DragEvent2.call(this, options) || this;
    _this2.distance = new DragPoint();
    _this2.strength = new DragPoint();
    _this2.speed = new DragPoint();
    return _this2;
  }

  return DragMoveEvent;
}(DragEvent);
var DragUpEvent = /*#__PURE__*/function (_DragEvent3) {
  _inheritsLoose(DragUpEvent, _DragEvent3);

  function DragUpEvent(options) {
    return _DragEvent3.call(this, options) || this;
  }

  return DragUpEvent;
}(DragEvent);

var DragService = /*#__PURE__*/function () {
  function DragService() {}

  DragService.getPosition = function getPosition(event, point) {
    if (event instanceof MouseEvent) {
      point ? (point.x = event.clientX, point.y = event.clientY) : point = {
        x: event.clientX,
        y: event.clientY
      };
    } else if (event instanceof TouchEvent) {
      if (event.touches.length > 0) {
        point ? (point.x = event.touches[0].pageX, point.y = event.touches[0].pageY) : point = {
          x: event.touches[0].pageX,
          y: event.touches[0].pageY
        };
      }
    }

    return point;
  };

  DragService.down$ = function down$(target, events$) {
    var _this3 = this;

    var downEvent;
    return rxjs.merge(rxjs.fromEvent(target, 'mousedown'), rxjs.fromEvent(target, 'touchstart')).pipe(operators.map(function (event) {
      downEvent = downEvent || new DragDownEvent();
      downEvent.node = target;
      downEvent.target = event.target;
      downEvent.originalEvent = event;
      downEvent.down = _this3.getPosition(event, downEvent.down);

      if (downEvent.down) {
        downEvent.distance = new DragPoint();
        downEvent.strength = new DragPoint();
        downEvent.speed = new DragPoint();
        events$.next(downEvent);
        return downEvent;
      }
    }), operators.filter(function (event) {
      return event !== undefined;
    }));
  };

  DragService.move$ = function move$(target, events$, dismiss$, downEvent, mode) {
    var _this4 = this;

    var moveEvent;
    return rxjs.fromEvent(document, downEvent.originalEvent instanceof MouseEvent ? 'mousemove' : 'touchmove').pipe(operators.startWith(downEvent), operators.map(function (event) {
      moveEvent = moveEvent || new DragMoveEvent();
      moveEvent.node = target;
      moveEvent.target = event.target;
      moveEvent.originalEvent = event;
      moveEvent.position = _this4.getPosition(event, moveEvent.position);
      var dragging = downEvent.down !== undefined && moveEvent.position !== undefined;

      if (dragging) {
        moveEvent.distance.x = moveEvent.position.x - downEvent.down.x;
        moveEvent.distance.y = moveEvent.position.y - downEvent.down.y;
        moveEvent.strength.x = moveEvent.distance.x / window.innerWidth * 2;
        moveEvent.strength.y = moveEvent.distance.y / window.innerHeight * 2;
        moveEvent.speed.x = downEvent.speed.x + (moveEvent.strength.x - downEvent.strength.x) * 0.1;
        moveEvent.speed.y = downEvent.speed.y + (moveEvent.strength.y - downEvent.strength.y) * 0.1;
        downEvent.distance.x = moveEvent.distance.x;
        downEvent.distance.y = moveEvent.distance.y;
        downEvent.speed.x = moveEvent.speed.x;
        downEvent.speed.y = moveEvent.speed.y;
        downEvent.strength.x = moveEvent.strength.x;
        downEvent.strength.y = moveEvent.strength.y;
        events$.next(moveEvent);
        return moveEvent;
      }
      /*
      if ((mode === 'vertical' && Math.abs(event.distance.y) > 5) ||
      	(mode === 'horizontal' && Math.abs(event.distance.x) > 5)) {
      	DragService.current$.next(target);
      }
      */

    }), operators.filter(function (event) {
      // console.log(mode === 'vertical', event ? Math.abs(event.distance.y) > 5 : null);
      if (mode == null || !event) {
        return true;
      } else if (mode === 'vertical' && Math.abs(event.distance.y) > 20) {
        // console.log('DragService.current$.next(target)', target);
        DragService.current$.next(target);
        event.originalEvent.stopImmediatePropagation();
        return true;
      } else if (mode === 'horizontal' && Math.abs(event.distance.x) > 20) {
        DragService.current$.next(target);
        event.originalEvent.stopImmediatePropagation();
        return true;
      }
    }));
  };

  DragService.up$ = function up$(target, events$, dismiss$, downEvent, mode) {
    var _this5 = this;

    var upEvent;
    return rxjs.fromEvent(document, downEvent.originalEvent instanceof MouseEvent ? 'mouseup' : 'touchend').pipe(operators.map(function (event) {
      upEvent = upEvent || new DragUpEvent();
      events$.next(upEvent);
      dismiss$.next();

      _this5.current$.next(null); // console.log(downEvent.distance);


      if (mode === 'vertical') {
        if (Math.abs(downEvent.distance.y) > 10) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      } else if (Math.abs(downEvent.distance.x) > 10) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }

      return upEvent;
    }));
  };

  DragService.concurrent$ = function concurrent$(target, events$, dismiss$, downEvent, mode) {
    var upEvent;
    return DragService.current$.pipe(operators.filter(function (child) {
      return child != null && child !== target;
    }), operators.map(function (child) {
      // console.log('concurrent$', target);
      upEvent = upEvent || new DragUpEvent();
      events$.next(upEvent);
      dismiss$.next();
      return upEvent;
    }));
  };

  DragService.events$ = function events$(target, mode) {
    var _this6 = this;

    target = target || document;
    var events$ = new rxjs.ReplaySubject(1);
    var dismiss$ = new rxjs.Subject();
    return this.down$(target, events$).pipe(operators.switchMap(function (downEvent) {
      return rxjs.merge(_this6.move$(target, events$, dismiss$, downEvent, mode), _this6.up$(target, events$, dismiss$, downEvent, mode), _this6.concurrent$(target, events$, dismiss$, downEvent, mode)).pipe(operators.takeUntil(dismiss$));
    }), operators.switchMap(function () {
      return events$;
    }));
  };

  DragService.isChildOf = function isChildOf(parent, child) {
    var node = child ? child.parentNode : null;

    while (node != null) {
      console.log(node, parent, node === parent);

      if (node === parent) {
        return true;
      }

      node = node.parentNode;
    }

    return false;
  };

  return DragService;
}();

_defineProperty(DragService, "current$", new rxjs.ReplaySubject(1));var IntersectionService = /*#__PURE__*/function () {
  function IntersectionService() {}

  IntersectionService.observer = function observer() {
    var _this = this;

    if (!this.observer_) {
      this.readySubject_ = new rxjs.BehaviorSubject(false);
      this.observerSubject_ = new rxjs.Subject();
      this.observer_ = new IntersectionObserver(function (entries) {
        _this.observerSubject_.next(entries);
      });
    }

    return this.observer_;
  };

  IntersectionService.intersection$ = function intersection$(node) {
    if ('IntersectionObserver' in window) {
      var observer = this.observer();
      observer.observe(node);
      return this.observerSubject_.pipe( // tap(entries => console.log(entries.length)),
      operators.map(function (entries) {
        return entries.find(function (entry) {
          return entry.target === node;
        });
      }), operators.filter(function (entry) {
        return entry !== undefined;
      }), // tap(entry => console.log('IntersectionService.intersection$', entry)),
      operators.finalize(function () {
        return observer.unobserve(node);
      }));
    } else {
      return rxjs.of({
        target: node,
        isIntersecting: true
      });
    }
  };

  IntersectionService.firstIntersection$ = function firstIntersection$(node) {
    return this.intersection$(node).pipe(operators.filter(function (entry) {
      return entry.isIntersecting;
    }), // entry.intersectionRatio > 0
    operators.first());
  };

  return IntersectionService;
}();var KeyboardService = /*#__PURE__*/function () {
  function KeyboardService() {}

  KeyboardService.keydown$ = function keydown$() {
    if (!this.keydown$_) {
      this.keydown$_ = rxjs.fromEvent(window, 'keydown').pipe(operators.shareReplay(1));
    }

    return this.keydown$_;
  };

  KeyboardService.keyup$ = function keyup$() {
    if (!this.keyup$_) {
      this.keyup$_ = rxjs.fromEvent(window, 'keyup').pipe(operators.shareReplay(1));
    }

    return this.keyup$_;
  };

  KeyboardService.keys$ = function keys$() {
    var _this = this;

    if (!this.keys$_) {
      this.keys$_ = rxjs.merge(this.keydown$(), this.keyup$()).pipe(operators.map(function (event) {
        var keys = _this.keys;
        keys.originalEvent = event;

        if (event.type === 'keydown') {
          keys[event.key] = true;
        } else {
          delete keys[event.key];
        }

        return _this.keys;
      }), operators.startWith(this.keys), operators.shareReplay(1));
    }

    return this.keys$_;
  };

  KeyboardService.key$ = function key$() {
    if (!this.key$_) {
      var regexp = /\w/;
      this.key$_ = this.keydown$().pipe(operators.filter(function (event) {
        return event.key && event.key.match(regexp);
      }), operators.map(function (event) {
        return event.key;
      }), operators.shareReplay(1));
    }

    return this.key$_;
  };

  KeyboardService.typing$ = function typing$() {
    if (!this.typing$_) {
      var typing = '',
          to;
      this.typing$_ = this.key$().pipe(operators.map(function (key) {
        if (to) {
          clearTimeout(to);
        }

        typing += key;
        to = setTimeout(function () {
          typing = '';
        }, 1500);
        return typing;
      }), operators.shareReplay(1));
    }

    return this.typing$_;
  };

  return KeyboardService;
}();

_defineProperty(KeyboardService, "keys", {});var SliderAutoplayMode = {
  None: 0,
  Autoplay: 1,
  FocusAutoplay: 2
};

var SliderComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SliderComponent, _Component);

  function SliderComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SliderComponent.prototype;

  _proto.getCurrent = function getCurrent() {
    if (!this.state) {
      this.state = {
        current: 0
      };
    } // console.log('SliderComponent.get.current', this.state.current);


    return this.state.current;
  };

  _proto.setCurrent = function setCurrent(current) {
    if (current === void 0) {
      current = 0;
    }

    // console.log('SliderComponent.setCurrent', current);
    if (!this.state) {
      this.state = {
        current: 0
      };
    }

    if (this.state.current !== current) {
      this.state.current = current;
      this.change.next(current);
    }
  };

  _proto.onActivate = function onActivate() {
    // console.log('SliderComponent.onActivate');
    this.checkAutoplay();
  };

  _proto.onDeactivate = function onDeactivate() {
    // console.log('SliderComponent.onDeactivate');
    this.userGesture = false;
    this.disableAutoplay();
  };

  _proto.onInit = function onInit() {
    var _this = this;

    var _getContext = rxcomp.getContext(this),
        node = _getContext.node;

    this.container = node;
    this.wrapper = node.querySelector('.slider__wrapper');

    if (this.vertical) {
      this.wrapper.classList.add('.slider__wrapper--vertical');
    } else {
      this.wrapper.classList.add('.slider__wrapper--horizontal');
    }

    var items;

    if (node.hasAttribute('[items]')) {
      items = this.items || [];
    } else {
      items = Array.prototype.slice.call(node.querySelectorAll('.slider__slide'));
    }

    this.items = items; // console.log('SliderComponent.onInit', this.items);

    this.userGesture = false; // this.userGesture$ = new Subject();

    setTimeout(function () {
      // this.change.next(this.current);

      /*
      gsap.set(this.wrapper, {
      	x: -100 * this.current + '%',
      });
      */
      _this.slider$().pipe(operators.takeUntil(_this.unsubscribe$)).subscribe(function (event) {// console.log('dragService', event);
      });
    }, 1);
    this.changed$().pipe(operators.takeUntil(this.unsubscribe$)).subscribe();
    this.intersect$(node).pipe(operators.takeUntil(this.unsubscribe$)).subscribe(); // ).subscribe(() => console.log(this.active, node));

    if (typeof this.focusAutoplay === 'number') {
      rxjs.merge(this.resize$(), this.over$(node), this.leave$(node)).pipe(operators.takeUntil(this.unsubscribe$)).subscribe();
    }

    this.wheel$(node).pipe(operators.takeUntil(this.unsubscribe$)).subscribe();
    KeyboardService.keys$().pipe(operators.filter(function (_) {
      return _this.isVisible && !SliderComponent.disabled;
    }), operators.takeUntil(this.unsubscribe$)).subscribe(function (keys) {
      if (_this.vertical) {
        if (keys.ArrowDown) {
          if (_this.hasNext()) {
            _this.navTo(_this.current + 1);
          }
        } else if (keys.ArrowUp) {
          if (_this.hasPrev()) {
            _this.navTo(_this.current - 1);
          }
        }
      } else {
        if (keys.ArrowRight) {
          if (_this.hasNext()) {
            _this.navTo(_this.current + 1);
          }
        } else if (keys.ArrowLeft) {
          if (_this.hasPrev()) {
            _this.navTo(_this.current - 1);
          }
        }
      }
    });
    /*
    this.autoplay$().pipe(
    	takeUntil(this.unsubscribe$),
    ).subscribe(() => {
    	this.pushChanges();
    });
    */

    setTimeout(function () {
      _this.setActiveState();
    }, 500);
    this.init.next(this);
  };

  _proto.changed$ = function changed$() {
    var _this2 = this;

    return this.change.pipe(operators.tap(function () {
      _this2.setActiveState();

      _this2.checkAutoplay();
    }));
  };

  _proto.intersect$ = function intersect$(node) {
    var _this3 = this;

    return IntersectionService.intersection$(node).pipe(operators.tap(function (entry) {
      // console.log(entry);
      return _this3.active = entry.isIntersecting && entry.intersectionRatio > 0;
    }));
  };

  _proto.wheel$ = function wheel$(target) {
    var _this4 = this;

    return rxjs.fromEvent(target, 'wheel', {
      capture: false,
      passive: false
    }).pipe(operators.tap(function (event) {
      if (event.deltaY > 0) {
        if (_this4.hasNext()) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      } else {
        if (_this4.hasPrev()) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      }
    }), operators.filter(function (_) {
      return _this4.isVisible;
    }), operators.throttleTime(200), operators.tap(function (event) {
      if (event.deltaY > 0) {
        if (_this4.hasNext()) {
          _this4.navTo(_this4.current + 1);
        }
      } else {
        if (_this4.hasPrev()) {
          _this4.navTo(_this4.current - 1);
        }
      }
    }));
  };

  _proto.resize$ = function resize$() {
    var _this5 = this;

    return rxjs.fromEvent(window, 'resize').pipe(operators.tap(function () {
      return _this5.mobile = window.innerWidth < 768;
    }));
  };

  _proto.over$ = function over$(node) {
    var _this6 = this;

    return rxjs.fromEvent(node, 'mouseover').pipe(operators.tap(function () {
      return _this6.over = true;
    }));
  };

  _proto.leave$ = function leave$(node) {
    var _this7 = this;

    return rxjs.fromEvent(node, 'mouseleave').pipe(operators.tap(function () {
      return _this7.over = false;
    }));
  };

  _proto.setActiveState = function setActiveState() {
    var current = this.current;

    var _getContext2 = rxcomp.getContext(this),
        node = _getContext2.node;

    var slides = Array.prototype.slice.call(node.querySelectorAll('.slider__slide'));
    slides.forEach(function (slide, i) {
      if (i === current) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  };

  _proto.checkAutoplay = function checkAutoplay() {
    var _this8 = this;

    this.disableAutoplay();
    var mode = SliderAutoplayMode.None;
    var autoplay = 0;

    if (typeof this.autoplay === 'number') {
      autoplay = this.autoplay;
      mode = SliderAutoplayMode.Autoplay;
    }

    if (typeof this.focusAutoplay === 'number') {
      autoplay = this.focusAutoplay;
      mode = SliderAutoplayMode.FocusAutoplay;
    }

    if (mode === SliderAutoplayMode.None) {
      return;
    }

    var current = this.current;

    var _getContext3 = rxcomp.getContext(this),
        node = _getContext3.node;

    var slides = Array.prototype.slice.call(node.querySelectorAll('.slider__slide'));
    var currentSlide = slides[current]; // console.log('SliderComponent.checkAutoplay', mode, this.active_, autoplay, currentSlide, node);

    if (currentSlide) {
      var video = currentSlide.querySelector('video');

      if (video) {
        var onEnded = function onEnded() {
          video.removeEventListener('ended', onEnded);

          if (mode === SliderAutoplayMode.Autoplay && _this8.active_ || mode === SliderAutoplayMode.FocusAutoplay && (_this8.mobile_ && _this8.active_ || !_this8.mobile_ && _this8.over_)) {
            _this8.setCurrent((current + 1) % _this8.items.length);

            _this8.pushChanges();
          }
        };

        video.addEventListener('ended', onEnded);
        video.play();
      } else {
        if (mode === SliderAutoplayMode.Autoplay && this.active_ && !this.userGesture || mode === SliderAutoplayMode.FocusAutoplay && (this.mobile_ && this.active_ || !this.mobile_ && this.over_)) {
          this.to = setTimeout(function () {
            _this8.setCurrent((current + 1) % _this8.items.length);

            _this8.pushChanges();
          }, autoplay);
        }
      }
    }
  };

  _proto.disableAutoplay = function disableAutoplay() {
    if (this.to) {
      clearTimeout(this.to);
      this.to = null;
    }

    var _getContext4 = rxcomp.getContext(this),
        node = _getContext4.node;

    var videos = Array.prototype.slice.call(node.querySelectorAll('video'));
    videos.forEach(function (video) {
      if (!video.paused) {
        video.pause();
      }
    }); // console.log('SliderComponent.disableAutoplay', node);
  };

  _proto.checkFocusAutoplay = function checkFocusAutoplay() {
    if (this.mobile_) {
      if (this.active_) {
        this.checkAutoplay();
      } else {
        this.disableAutoplay();
      }
    } else {
      if (this.over_) {
        // this.checkAutoplay();
        // fire immediately !!!
        this.setCurrent((this.current + 1) % this.items.length);
        this.pushChanges();
      } else {
        this.disableAutoplay();
      }
    }
  };

  _proto.slider$ = function slider$() {
    var _this9 = this;

    var translation, dragDownEvent, dragMoveEvent;
    return DragService.events$(this.wrapper, this.vertical ? 'vertical' : 'horizontal').pipe(operators.tap(function (event) {
      if (event instanceof DragDownEvent) {
        translation = _this9.getTranslation(_this9.wrapper, _this9.container);
        dragDownEvent = event;
      } else if (event instanceof DragMoveEvent) {
        dragMoveEvent = _this9.onDragMoveEvent(dragDownEvent, event, translation); // console.log('DragMoveEvent');

        /*
        if (Math.abs(dragMoveEvent.distance.x) > Math.abs(dragMoveEvent.distance.y)) {
        	dragMoveEvent.originalEvent.preventDefault();
        	dragMoveEvent.originalEvent.stopImmediatePropagation();
        }
        */
      } else if (event instanceof DragUpEvent) {
        if (dragMoveEvent) {
          _this9.container.classList.remove('dragging');

          _this9.wrapper.style.transform = null;

          _this9.onDragUpEvent(dragDownEvent, dragMoveEvent, event);
        } // console.log('DragUpEvent');

      }
    }));
  }
  /*
  autoplay$() {
  	if (this.autoplay) {
  		const autoplay = typeof this.autoplay === 'number' ? this.autoplay : 4000;
  		return interval(autoplay).pipe(
  			takeUntil(this.userGesture$),
  			tap(() => {
  				this.setCurrent((this.current + 1) % this.items.length);
  			}),
  		);
  	} else {
  		return of(null);
  	}
  }
  */
  ;

  _proto.onDragMoveEvent = function onDragMoveEvent(dragDownEvent, dragMoveEvent, translation) {
    this.container.classList.add('dragging');

    if (this.vertical) {
      var transformY = translation.y + dragMoveEvent.distance.y;
      this.wrapper.style.transform = "translate3d(" + 0 + "px, " + transformY + "px, " + 0 + "px)";
      /*
      if (Math.abs(dragMoveEvent.distance.y) > 5) {
      	dragMoveEvent.originalEvent.preventDefault();
      	dragMoveEvent.originalEvent.stopImmediatePropagation();
      }
      */
    } else {
      var transformX = translation.x + dragMoveEvent.distance.x;
      this.wrapper.style.transform = "translate3d(" + transformX + "px, " + 0 + "px, " + 0 + "px)";
      /*
      if (Math.abs(dragMoveEvent.distance.x) > 5) {
      	dragMoveEvent.originalEvent.preventDefault();
      	dragMoveEvent.originalEvent.stopImmediatePropagation();
      }
      */
    }

    return dragMoveEvent;
  };

  _proto.onDragUpEvent = function onDragUpEvent(dragDownEvent, dragMoveEvent, dragUpEvent) {
    if (this.vertical) {
      var height = this.container.offsetHeight;

      if (dragMoveEvent.distance.y * -1 > height * 0.25 && this.hasNext()) {
        this.navTo(this.current + 1);
      } else if (dragMoveEvent.distance.y * -1 < height * -0.25 && this.hasPrev()) {
        this.navTo(this.current - 1);
      } else {
        this.wrapper.style.transform = "translate3d(0, " + -100 * this.current + "%, 0)";
      }
    } else {
      var width = this.container.offsetWidth;

      if (dragMoveEvent.distance.x * -1 > width * 0.25 && this.hasNext()) {
        this.navTo(this.current + 1);
      } else if (dragMoveEvent.distance.x * -1 < width * -0.25 && this.hasPrev()) {
        this.navTo(this.current - 1);
      } else {
        this.wrapper.style.transform = "translate3d(" + -100 * this.current + "%, 0, 0)";
      }
    }
  };

  _proto.navTo = function navTo(current) {
    current = (current > 0 ? current : this.items.length + current) % this.items.length;
    this.setCurrent(current);
    this.userGesture = true;
    this.pushChanges();
  };

  _proto.hasPrev = function hasPrev() {
    return this.current - 1 >= 0;
  };

  _proto.hasNext = function hasNext() {
    return this.current + 1 < this.items.length;
  };

  _proto.getTranslation = function getTranslation(node, container) {
    var x = 0,
        y = 0,
        z = 0;
    var transform = node.style.transform;

    if (transform) {
      var coords = transform.split('(')[1].split(')')[0].split(',');
      x = parseFloat(coords[0]);
      y = parseFloat(coords[1]);
      z = parseFloat(coords[2]);
      x = coords[0].indexOf('%') !== -1 ? x *= container.offsetWidth * 0.01 : x;
      y = coords[1].indexOf('%') !== -1 ? y *= container.offsetHeight * 0.01 : y;
    }

    return {
      x: x,
      y: y,
      z: z
    };
  };

  _createClass(SliderComponent, [{
    key: "current",
    get: function get() {
      return this.getCurrent();
    },
    set: function set(current) {
      this.setCurrent(current);
    }
  }, {
    key: "isVisible",
    get: function get() {
      var _getContext5 = rxcomp.getContext(this),
          node = _getContext5.node;

      var rect = node.getBoundingClientRect();
      return rect.left < window.innerWidth && rect.right > 0;
    }
  }, {
    key: "wrapperStyle",
    get: function get() {
      if (this.vertical) {
        return {
          'transform': "translate3d(0, " + -100 * this.current + "%, 0)"
        };
      } else {
        return {
          'transform': "translate3d(" + -100 * this.current + "%, 0, 0)"
        };
      }
    }
  }, {
    key: "innerStyle",
    get: function get() {
      if (this.vertical) {
        return {
          'height': 100 * this.items.length + "%"
        };
      } else {
        return {
          'width': 100 * this.items.length + "%"
        };
      }
    }
  }, {
    key: "active",
    get: function get() {
      return this.active_;
    },
    set: function set(active) {
      if (this.active_ !== active) {
        this.active_ = active;
        active ? this.onActivate() : this.onDeactivate();
      }
    }
  }, {
    key: "mobile",
    get: function get() {
      return this.mobile_;
    },
    set: function set(mobile) {
      if (this.mobile_ !== mobile) {
        this.mobile_ = mobile;
        this.checkFocusAutoplay();
      }
    }
  }, {
    key: "over",
    get: function get() {
      return this.over_;
    },
    set: function set(over) {
      if (this.over_ !== over) {
        this.over_ = over;
        this.checkFocusAutoplay();
      }
    }
  }]);

  return SliderComponent;
}(rxcomp.Component);
SliderComponent.meta = {
  selector: '[slider]',
  inputs: ['items', 'current', 'autoplay', 'focusAutoplay', 'vertical'],
  outputs: ['change', 'tween', 'init']
};var AppComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppComponent, _Component);

  function AppComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AppComponent.prototype;

  _proto.onInit = function onInit() {
    var _this = this;

    var _getContext = rxcomp.getContext(this),
        node = _getContext.node;

    node.classList.remove('hidden');
    this.showMenu = false;
    this.templates = Templates; // this.slides = DATA;
    // this.items = this.collectItems(this.slides);

    this.slides = [];
    this.items = [];
    ApiService.data$().pipe(operators.first()).subscribe(function (data) {
      _this.slides = data;
      _this.items = _this.collectItems(_this.slides);
    });
    /*
    this.slides = new Array(4).fill(0).map((_, i) => {
    	return {
    		id: 1,
    		template: Templates.Welcome,
    		category: 'Stand - Case study',
    		title: 'Keraglass industries Vitrum',
    		cta: 'Guarda il case study',
    		image: `https://source.unsplash.com/random/1920x1080?i=${i}`
    	}
    });
    */
  };

  _proto.collectItems = function collectItems(slides, items) {
    var _this2 = this;

    if (items === void 0) {
      items = [];
    }

    slides.forEach(function (slide) {
      items.push(slide);

      if (slide.items) {
        items = _this2.collectItems(slide.items, items);
      }
    });
    return items;
  };

  _proto.onSliderInit = function onSliderInit(slider) {
    console.log('AppComponent.onSliderInit', slider);
    this.slider = slider;
  };

  _proto.onSliderChange = function onSliderChange(index) {
    console.log('AppComponent.onSliderChange', index);
    this.showMenu = false;
    this.pushChanges();
  };

  _proto.onNextChapter = function onNextChapter() {
    if (this.slider.hasNext()) {
      this.slider.navTo(this.slider.current + 1);
    }
  };

  _proto.onNavToChapter = function onNavToChapter(index) {
    this.slider.navTo(index);
  };

  _proto.onMenuNav = function onMenuNav(nav) {
    console.log('AppComponent.onMenuNav', nav);
    this.slider.navTo(nav.chapterIndex);
  };

  _proto.onToggleMenu = function onToggleMenu() {
    this.showMenu = !this.showMenu;
    SliderComponent.disabled = this.showMenu;
    this.pushChanges();
  };

  _createClass(AppComponent, [{
    key: "currentChapter",
    get: function get() {
      if (this.slider) {
        return this.slides[this.slider.current];
      }
    }
  }, {
    key: "nextChapter",
    get: function get() {
      if (this.slider && this.slider.hasNext()) {
        return this.slides[this.slider.current + 1];
      }
    }
  }]);

  return AppComponent;
}(rxcomp.Component);
AppComponent.meta = {
  selector: '[app-component]'
};var environmentServed = {
  appKey: '8b0cae93d47a44e48e97e7fd0404be4e',
  channelName: 'BHere',
  flags: {
    production: true,
    useProxy: false,
    useToken: false,
    selfService: true,
    guidedTourRequest: true,
    editor: false,
    editorAssetScreen: false,
    ar: true,
    menu: true,
    chat: false,
    attendee: true,
    streamer: true,
    viewer: true,
    smartDevice: true,
    maxQuality: false
  },
  logo: null,
  background: {
    image: '/Modules/more/Client/docs/img/background.jpg',
    video: '/Modules/more/Client/docs/img/background.mp4'
  },
  colors: {
    menuBackground: '#000000',
    menuForeground: '#ffffff',
    menuOverBackground: '#0099ff',
    menuOverForeground: '#ffffff',
    menuBackBackground: '#0099ff',
    menuBackForeground: '#000000',
    menuBackOverBackground: '#0099ff',
    menuBackOverForeground: '#ffffff'
  },
  editor: {
    disabledViewTypes: ['waiting-room', 'room-3d'],
    disabledViewItemTypes: ['texture']
  },
  assets: '/Modules/more/Client/docs/',
  worker: '/Modules/more/Client/docs/js/workers/image.service.worker.js',
  githubDocs: 'https://raw.githubusercontent.com/actarian/more/more-ws-new/docs/',
  language: '/it',
  market: '/it',
  url: {
    index: '/',
    access: '/',
    editor: '/editor',
    selfServiceTour: '/self-service-tour',
    guidedTour: '/guided-tour',
    accessCode: '/access-code'
  },
  template: {
    tryInAr: '/template/modules/more/try-in-ar.cshtml?viewId=$viewId',
    modal: {
      controlRequest: '/template/modules/more/control-request-modal.cshtml',
      tryInAr: '/template/modules/more/try-in-ar-modal.cshtml',
      view: {
        'panorama': '/template/modules/more/panorama-modal.cshtml',
        'panorama-grid': '/template/modules/more/panorama-grid-modal.cshtml',
        'room-3d': '/template/modules/more/room-3d-modal.cshtml',
        'model': '/template/modules/more/model-modal.cshtml'
      },
      viewItem: {
        'nav': '/template/modules/more/nav-modal.cshtml',
        'plane': '/template/modules/more/plane-modal.cshtml',
        'curved-plane': '/template/modules/more/curved-plane-modal.cshtml',
        'texture': '/template/modules/more/texture-modal.cshtml',
        'model': '/template/modules/more/item-model-modal.cshtml'
      },
      remove: '/template/modules/more/remove-modal.cshtml'
    }
  },
  languages: ['en'],
  defaultLanguage: 'en'
};var environmentStatic = {
  appKey: '8b0cae93d47a44e48e97e7fd0404be4e',
  channelName: 'BHere',
  flags: {
    production: false,
    useProxy: true,
    useToken: false,
    selfService: true,
    guidedTourRequest: true,
    editor: true,
    editorAssetScreen: true,
    ar: true,
    menu: true,
    chat: true,
    attendee: true,
    streamer: true,
    viewer: true,
    smartDevice: true,
    maxQuality: false
  },
  logo: null,
  background: {
    image: '/more/img/background.jpg',
    video: '/more/img/background.mp4'
  },
  colors: {
    menuBackground: '#000000',
    menuForeground: '#ffffff',
    menuOverBackground: '#0099ff',
    menuOverForeground: '#ffffff',
    menuBackBackground: '#0099ff',
    menuBackForeground: '#000000',
    menuBackOverBackground: '#0099ff',
    menuBackOverForeground: '#ffffff'
  },
  editor: {
    disabledViewTypes: ['waiting-room', 'room-3d'],
    disabledViewItemTypes: ['texture']
  },
  assets: '/more/',
  worker: './js/workers/image.service.worker.js',
  githubDocs: 'https://raw.githubusercontent.com/actarian/more/more-ws-new/docs/',
  language: '',
  market: '',
  url: {
    index: '/',
    access: '/',
    editor: '/editor',
    selfServiceTour: '/self-service-tour',
    guidedTour: '/guided-tour',
    accessCode: '/access-code'
  },
  template: {
    tryInAr: '/try-in-ar.html?viewId=$viewId',
    modal: {
      controlRequest: '/control-request-modal.html',
      tryInAr: '/try-in-ar-modal.html',
      view: {
        'panorama': '/panorama-modal.html',
        'panorama-grid': '/panorama-grid-modal.html',
        'room-3d': '/room-3d-modal.html',
        'model': '/model-modal.html'
      },
      viewItem: {
        'nav': '/nav-modal.html',
        'plane': '/plane-modal.html',
        'curved-plane': '/curved-plane-modal.html',
        'texture': '/texture-modal.html',
        'model': '/item-model-modal.html'
      },
      remove: '/remove-modal.html'
    }
  },
  languages: ['en'],
  defaultLanguage: 'en'
};var Utils = /*#__PURE__*/function () {
  function Utils() {}

  Utils.merge = function merge(target, source) {
    var _this = this;

    if (typeof source === 'object') {
      Object.keys(source).forEach(function (key) {
        var value = source[key];

        if (typeof value === 'object' && !Array.isArray(value)) {
          target[key] = _this.merge(target[key], value);
        } else {
          target[key] = value;
        }
      });
    }

    return target;
  };

  return Utils;
}();var NODE = typeof module !== 'undefined' && module.exports;
var PARAMS = NODE ? {
  get: function get() {}
} : new URLSearchParams(window.location.search);
var DEBUG =  PARAMS.get('debug') != null;
var BASE_HREF = NODE ? null : document.querySelector('base').getAttribute('href');
var HEROKU = NODE ? false : window && window.location.host.indexOf('herokuapp') !== -1;
var STATIC = NODE ? false : HEROKU || window && (window.location.port === '41789' || window.location.port === '5000' || window.location.port === '6443' || window.location.host === 'actarian.github.io');
var DEVELOPMENT = NODE ? false : window && ['localhost', '127.0.0.1', '0.0.0.0'].indexOf(window.location.host.split(':')[0]) !== -1;
var PRODUCTION = !DEVELOPMENT;
var ENV = {
  STATIC: STATIC,
  DEVELOPMENT: DEVELOPMENT,
  PRODUCTION: PRODUCTION
};
var Environment = /*#__PURE__*/function () {
  var _proto = Environment.prototype;

  _proto.getAbsoluteUrl = function getAbsoluteUrl(path, params) {
    var url = "" + window.location.origin + path; // let url = `${window.location.protocol}//${window.location.host}${path}`;

    Object.keys(params).forEach(function (key) {
      url = url.replace("$" + key, params[key]);
    });
    return url;
  };

  _proto.getPath = function getPath(path) {
    return this.isLocal(path) ? this.href + path : path;
  };

  _proto.isLocal = function isLocal(path) {
    return path.indexOf('://') === -1;
  };

  _createClass(Environment, [{
    key: "STATIC",
    get: function get() {
      return ENV.STATIC;
    },
    set: function set(STATIC) {
      ENV.STATIC = STATIC === true || STATIC === 'true';
      console.log('Environment.STATIC.set', ENV.STATIC);
    }
  }, {
    key: "href",
    get: function get() {
      if (HEROKU) {
        return this.githubDocs;
      } else {
        return BASE_HREF;
      }
    }
  }]);

  function Environment(options) {
    if (options) {
      if (typeof options.url === 'object') {
        var language = options.language || '';
        var market = options.market || '';
        Object.keys(options.url).forEach(function (key) {
          options.url[key] = language + market + options.url[key];
        });
      }

      Object.assign(this, options);
    }
  }

  return Environment;
}();
var defaultOptions = {
  port: 5000,
  fontFamily: 'GT Walsheim, sans-serif',
  colors: {
    menuBackground: '#000000',
    menuForeground: '#ffffff',
    menuOverBackground: '#0099ff',
    menuOverForeground: '#ffffff',
    menuBackBackground: '#0099ff',
    menuBackForeground: '#000000',
    menuBackOverBackground: '#0099ff',
    menuBackOverForeground: '#ffffff'
  },
  editor: {
    disabledViewTypes: ['waiting-room', 'room-3d'],
    disabledViewItemTypes: ['texture']
  },
  renderOrder: {
    panorama: 0,
    model: 10,
    plane: 20,
    tile: 30,
    banner: 40,
    nav: 50,
    panel: 60,
    menu: 70,
    debug: 80,
    pointer: 90
  }
};
var defaultAppOptions = {
  channelName: 'BHere',
  flags: {
    production: false,
    useProxy: false,
    useToken: false,
    selfService: true,
    guidedTourRequest: true,
    editor: true,
    ar: true,
    menu: true,
    attendee: true,
    streamer: true,
    viewer: true,
    smartDevice: true,
    maxQuality: false,
    heroku: HEROKU
  }
};
var environmentOptions = window.STATIC ? environmentStatic : environmentServed;
var options = Object.assign(defaultOptions, defaultAppOptions, environmentOptions);
options = Utils.merge(options, window.bhere);
var environment = new Environment(options);
console.log('environment', environment);var FlagPipe = /*#__PURE__*/function (_Pipe) {
  _inheritsLoose(FlagPipe, _Pipe);

  function FlagPipe() {
    return _Pipe.apply(this, arguments) || this;
  }

  FlagPipe.transform = function transform(key) {
    var flags = environment.flags;
    return flags[key] || false;
  };

  return FlagPipe;
}(rxcomp.Pipe);
FlagPipe.meta = {
  name: 'flag'
};var FooterMenuComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FooterMenuComponent, _Component);

  function FooterMenuComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FooterMenuComponent.prototype;

  _proto.onInit = function onInit() {
    var _this = this;

    console.log('FooterMenuComponent.onInit');

    var _getContext = rxcomp.getContext(this),
        node = _getContext.node;

    node.focus();
    this.current = 0;
    this.slides.forEach(function (chapter) {
      chapter.current = 0;
    });
    KeyboardService.keys$().pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (keys) {
      if (keys.ArrowRight) {
        _this.nextChapter();
      } else if (keys.ArrowLeft) {
        _this.previousChapter();
      } else if (keys.ArrowDown) {
        _this.nextItem();
      } else if (keys.ArrowUp) {
        _this.previousItem();
      } else if (keys.Enter) {
        var currentChapter = _this.slides[_this.current];
        var currentItem = currentChapter.items ? currentChapter.items[currentChapter.current] : currentChapter;

        _this.onSelect(currentItem);
      }

      if (keys.originalEvent) {
        keys.originalEvent.preventDefault();
        keys.originalEvent.stopPropagation();
      }

      console.log(_this.current);
    });
    return this.wheel$(node).pipe(operators.takeUntil(this.unsubscribe$)).subscribe();
  };

  _proto.wheel$ = function wheel$(target) {
    var _this2 = this;

    return rxjs.fromEvent(target, 'wheel', {
      capture: false,
      passive: false
    }).pipe(operators.throttleTime(200), operators.tap(function (event) {
      if (event.deltaY > 0) {
        _this2.nextItem() || _this2.nextChapter();
      } else {
        _this2.previousItem() || _this2.previousChapter();
      }
    }));
  };

  _proto.nextChapter = function nextChapter() {
    if (this.current < this.slides.length - 1) {
      this.current++;
      this.pushChanges();
    }
  };

  _proto.previousChapter = function previousChapter() {
    if (this.current > 0) {
      this.current--;
      this.pushChanges();
    }
  };

  _proto.nextItem = function nextItem() {
    var chapter = this.slides[this.current];

    if (chapter.items && chapter.current < chapter.items.length - 1) {
      chapter.current++;
      this.pushChanges();
      return true;
    } else {
      return false;
    }
  };

  _proto.previousItem = function previousItem() {
    var chapter = this.slides[this.current];

    if (chapter.items && chapter.current > 0) {
      chapter.current--;
      this.pushChanges();
      return true;
    } else {
      return false;
    }
  };

  _proto.onSelect = function onSelect(item) {
    var chapterIndex = -1,
        index = -1;
    this.slides.forEach(function (slide, i) {
      if (slide === item) {
        chapterIndex = i;
      }

      if (slide.items) {
        slide.items.forEach(function (subItem, subIndex) {
          if (subItem === item) {
            chapterIndex = i;
            index = subIndex;
          }
        });
      }
    });
    console.log('FooterMenuComponent.onSelect', item, chapterIndex, index);
    this.nav.next({
      item: item,
      chapterIndex: chapterIndex,
      index: index
    });
  };

  _proto.navTo = function navTo(index) {
    this.current = index;
    this.pushChanges();
  };

  return FooterMenuComponent;
}(rxcomp.Component);
FooterMenuComponent.meta = {
  selector: '[footer-menu]',
  inputs: ['slides'],
  outputs: ['nav'],
  template:
  /* html */
  "\n\t\t<div class=\"circle\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"img/logo-lg.png\" />\n\t\t</div>\n\t\t<div class=\"listing--menu\" [style]=\"{ transform: 'translateX(' + -76 * current + 'rem)' }\">\n\t\t\t<div class=\"listing__item\" *for=\"let chapter of slides; let chapterIndex = index;\">\n\t\t\t\t<div class=\"listing--submenu\" [style]=\"{ transform: 'translateY(' + -25 * chapter.current + 'rem)' }\" *if=\"chapter.items && chapter.items.length\">\n\t\t\t\t\t<div class=\"listing__item\" *for=\"let item of chapter.items; let itemIndex = index;\">\n\t\t\t\t\t\t<div class=\"card--menu\" [class]=\"{ active: chapterIndex === current && itemIndex === chapter.current }\" (click)=\"onSelect(item)\">\n\t\t\t\t\t\t\t<span [innerHTML]=\"item.name\" ></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card--menu\" [class]=\"{ active: chapterIndex === current }\" (click)=\"onSelect(chapter)\" *if=\"!chapter.items || !chapter.items.length\">\n\t\t\t\t\t<span [innerHTML]=\"chapter.name\"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"slider__bullets\">\n\t\t\t<span class=\"slider__bullet\" [class]=\"{ active: index === current }\" *for=\"let item of slides; let index = index;\" (click)=\"navTo(index)\"></span>\n\t\t</div>\n\t"
};var SliderGalleryComponent = /*#__PURE__*/function (_SliderComponent) {
  _inheritsLoose(SliderGalleryComponent, _SliderComponent);

  function SliderGalleryComponent() {
    return _SliderComponent.apply(this, arguments) || this;
  }

  var _proto = SliderGalleryComponent.prototype;

  _proto.onInit = function onInit() {
    _SliderComponent.prototype.onInit.call(this);
  };

  _proto.navTo = function navTo(current) {
    _SliderComponent.prototype.navTo.call(this, current);
  };

  _proto.doClose = function doClose() {
    this.close.next();
  };

  _proto.toggleMode = function toggleMode() {
    this.mode.next();
  };

  _createClass(SliderGalleryComponent, [{
    key: "current",
    get: function get() {
      return _SliderComponent.prototype.getCurrent.call(this);
    },
    set: function set(current) {
      this.setCurrent(current);
    }
  }, {
    key: "wrapperStyle",
    get: function get() {
      return {
        'transform': 'translate3d(' + -100 * this.current + '%, 0, 0)'
      };
    }
  }, {
    key: "innerStyle",
    get: function get() {
      return {
        'width': 100 * this.items.length + '%'
      };
    }
  }]);

  return SliderGalleryComponent;
}(SliderComponent);
SliderGalleryComponent.meta = {
  selector: '[slider-gallery]',
  inputs: ['items', 'current', 'autoplay'],
  outputs: ['change', 'tween', 'close', 'mode']
};var SliderHeroComponent = /*#__PURE__*/function (_SliderComponent) {
  _inheritsLoose(SliderHeroComponent, _SliderComponent);

  function SliderHeroComponent() {
    return _SliderComponent.apply(this, arguments) || this;
  }

  var _proto = SliderHeroComponent.prototype;

  _proto.onInit = function onInit() {
    _SliderComponent.prototype.onInit.call(this);

    this.pagination$().pipe(operators.takeUntil(this.unsubscribe$)).subscribe();
    this.click$().pipe(operators.takeUntil(this.unsubscribe$)).subscribe();
  };

  _proto.raf$ = function raf$() {
    return rxjs.interval(0, rxjs.animationFrameScheduler);
  };

  _proto.mouse$ = function mouse$() {
    var event = {
      x: 0,
      y: 0
    };
    return rxjs.fromEvent(window, 'mousemove').pipe(operators.map(function (mouseEvent) {
      event.x = mouseEvent.clientX;
      event.y = mouseEvent.clientY;
      return event;
    }));
  };

  _proto.pagination$ = function pagination$() {
    var _this = this;

    var _getContext = rxcomp.getContext(this),
        node = _getContext.node;

    var position = {
      x: 0,
      y: 0
    };
    var pagination = node.querySelector('.slider__pagination');
    return rxjs.combineLatest([this.mouse$(), this.raf$()]).pipe(operators.tap(function (datas) {
      var mouse = datas[0];
      position.x += (mouse.x - position.x) / 20;
      position.y += (mouse.y - position.y) / 20; // const rect = node.getBoundingClientRect();

      _this.direction = mouse.x > window.innerWidth / 2 ? 1 : -1;
      pagination.style.transform = "translateX(" + position.x + "px) translateY(" + position.y + "px)";
    }));
  };

  _proto.click$ = function click$() {
    var _this2 = this;

    var _getContext2 = rxcomp.getContext(this),
        node = _getContext2.node;

    return rxjs.fromEvent(node, 'click').pipe(operators.map(function (event) {
      if (event.clientX > window.innerWidth / 2) {
        // if (this.hasNext()) {
        _this2.navTo(_this2.current + 1); // }

      } else {
        // if (this.hasPrev()) {
        _this2.navTo(_this2.current - 1); // }

      }
    }));
  };

  _proto.onContentOver = function onContentOver() {
    var _getContext3 = rxcomp.getContext(this),
        node = _getContext3.node;

    node.classList.add('content-over');
  };

  _proto.onContentOut = function onContentOut() {
    var _getContext4 = rxcomp.getContext(this),
        node = _getContext4.node;

    node.classList.remove('content-over');
  };

  _createClass(SliderHeroComponent, [{
    key: "current",
    get: function get() {
      return _SliderComponent.prototype.getCurrent.call(this);
    },
    set: function set(current) {
      this.setCurrent(current);
    }
  }, {
    key: "wrapperStyle",
    get: function get() {
      return {
        'transform': 'translate3d(' + -100 * this.current + '%, 0, 0)'
      };
    }
  }, {
    key: "innerStyle",
    get: function get() {
      return {
        'width': 100 * this.items.length + '%'
      };
    }
  }, {
    key: "direction",
    set: function set(direction) {
      if (this.direction_ !== direction) {
        this.direction_ = direction;

        var _getContext5 = rxcomp.getContext(this),
            node = _getContext5.node;

        var pagination = node.querySelector('.slider__pagination');

        if (direction == 1) {
          pagination.classList.remove('prev');
          pagination.classList.add('next');
        } else {
          pagination.classList.remove('next');
          pagination.classList.add('prev');
        }
      }
    }
  }]);

  return SliderHeroComponent;
}(SliderComponent);
SliderHeroComponent.meta = {
  selector: '[slider-hero]',
  inputs: ['items', 'current', 'autoplay'],
  outputs: ['change', 'tween']
};var SliderMainComponent = /*#__PURE__*/function (_SliderComponent) {
  _inheritsLoose(SliderMainComponent, _SliderComponent);

  function SliderMainComponent() {
    return _SliderComponent.apply(this, arguments) || this;
  }

  var _proto = SliderMainComponent.prototype;

  _proto.onInit = function onInit() {
    var _this = this;

    _SliderComponent.prototype.onInit.call(this);

    this.resize$().pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
      return _this.pushChanges();
    });
  };

  _proto.resize$ = function resize$() {
    return rxjs.fromEvent(window, 'resize');
  };

  _proto.onContentOver = function onContentOver() {
    var _getContext = rxcomp.getContext(this),
        node = _getContext.node;

    node.classList.add('content-over');
  };

  _proto.onContentOut = function onContentOut() {
    var _getContext2 = rxcomp.getContext(this),
        node = _getContext2.node;

    node.classList.remove('content-over');
  };

  _proto.navTo = function navTo(current) {
    _SliderComponent.prototype.navTo.call(this, current);
  };

  _createClass(SliderMainComponent, [{
    key: "current",
    get: function get() {
      return _SliderComponent.prototype.getCurrent.call(this);
    },
    set: function set(current) {
      this.setCurrent(current);
    }
  }, {
    key: "wrapperStyle",
    get: function get() {
      return {
        'transform': 'translate3d(' + -this.slideWidth * this.current + 'px, 0, 0)'
      };
    }
  }, {
    key: "innerStyle",
    get: function get() {
      return {
        'width': this.slideWidth * this.items.length + 'px'
      };
    }
  }, {
    key: "slideWidth",
    get: function get() {
      var _getContext3 = rxcomp.getContext(this),
          node = _getContext3.node; // const slides = Array.prototype.slice.call(node.querySelectorAll('.slider__slide'));


      var slideWidth = node.offsetWidth; // (window.innerWidth < 768 ? node.offsetWidth: (node.offsetWidth / 12 * 10)) + 40;

      return slideWidth;
    }
  }]);

  return SliderMainComponent;
}(SliderComponent);
SliderMainComponent.meta = {
  selector: '[slider-main]',
  inputs: ['items', 'current', 'autoplay', 'focusAutoplay', 'vertical'],
  outputs: ['change', 'tween', 'init']
};var SliderVerticalComponent = /*#__PURE__*/function (_SliderComponent) {
  _inheritsLoose(SliderVerticalComponent, _SliderComponent);

  function SliderVerticalComponent() {
    return _SliderComponent.apply(this, arguments) || this;
  }

  var _proto = SliderVerticalComponent.prototype;

  _proto.onInit = function onInit() {
    var _this = this;

    _SliderComponent.prototype.onInit.call(this);

    this.resize$().pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
      return _this.pushChanges();
    });
  };

  _proto.resize$ = function resize$() {
    return rxjs.fromEvent(window, 'resize');
  };

  _proto.onContentOver = function onContentOver() {
    var _getContext = rxcomp.getContext(this),
        node = _getContext.node;

    node.classList.add('content-over');
  };

  _proto.onContentOut = function onContentOut() {
    var _getContext2 = rxcomp.getContext(this),
        node = _getContext2.node;

    node.classList.remove('content-over');
  };

  _proto.navTo = function navTo(current) {
    _SliderComponent.prototype.navTo.call(this, current);
  };

  _createClass(SliderVerticalComponent, [{
    key: "current",
    get: function get() {
      return _SliderComponent.prototype.getCurrent.call(this);
    },
    set: function set(current) {
      this.setCurrent(current);
    }
  }, {
    key: "wrapperStyle",
    get: function get() {
      return {
        'transform': "translate3d(0, " + -this.slideHeight * this.current + "px, 0)"
      };
    }
  }, {
    key: "innerStyle",
    get: function get() {
      return {
        'height': this.slideHeight * this.items.length + 'px'
      };
    }
  }, {
    key: "slideHeight",
    get: function get() {
      var _getContext3 = rxcomp.getContext(this),
          node = _getContext3.node; // const slides = Array.prototype.slice.call(node.querySelectorAll('.slider__slide'));


      var slideHeight = node.offsetHeight; // (window.innerHeight < 768 ? node.offsetHeight: (node.offsetHeight / 12 * 10)) + 40;

      return slideHeight;
    }
  }]);

  return SliderVerticalComponent;
}(SliderComponent);
SliderVerticalComponent.meta = {
  selector: '[slider-vertical]',
  inputs: ['items', 'current', 'autoplay', 'focusAutoplay', 'vertical', 'disabled'],
  outputs: ['change', 'tween', 'init']
};var ViewClientsComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewClientsComponent, _Component);

  function ViewClientsComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewClientsComponent.prototype;

  _proto.onInit = function onInit() {
    console.log('ViewClientsComponent');
  };

  return ViewClientsComponent;
}(rxcomp.Component);
ViewClientsComponent.meta = {
  selector: '[view-clients]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\">\n\t\t\t<img loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<!--\n\t\t<div class=\"container\">\n\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t<div class=\"abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t</div>\n\t\t-->\n\t\t<div class=\"listing--clients\">\n\t\t\t<div class=\"listing__item\" *for=\"let client of item.clients\">\n\t\t\t\t<img [src]=\"client.logo\" [title]=\"client.title\" />\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewGroupComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewGroupComponent, _Component);

  function ViewGroupComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewGroupComponent.prototype;

  _proto.onInit = function onInit() {
    console.log('ViewGroupComponent');
    this.current = 0;
  };

  _proto.onChange = function onChange(index) {
    this.current = index;
    this.pushChanges();
  };

  _createClass(ViewGroupComponent, [{
    key: "isNegative",
    get: function get() {
      var currentItem = this.item.items[this.current];
      return currentItem.image != null && currentItem.template !== 'textMap';
    }
  }]);

  return ViewGroupComponent;
}(rxcomp.Component);
ViewGroupComponent.meta = {
  selector: '[view-group]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"slider__container slider--vertical\" [class]=\"{ 'negative': isNegative }\" (change)=\"onChange($event)\" slider-vertical [vertical]=\"true\" [items]=\"item.items\" *if=\"item.template == 'group'\">\n\t\t\t<div class=\"slider__wrapper\" [style]=\"wrapperStyle\">\n\t\t\t\t<div class=\"slider__inner\" [style]=\"innerStyle\">\n\t\t\t\t\t<div class=\"slider__slide\" *for=\"let slide of items; let index = index;\">\n\t\t\t\t\t\t<div class=\"view view--clients\" view-clients [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'clients'\"></div>\n\t\t\t\t\t\t<div class=\"view view--group\" view-group [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'group'\"></div>\n\t\t\t\t\t\t<div class=\"view view--suite\" view-suite [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'suite'\"></div>\n\t\t\t\t\t\t<div class=\"view view--tabs\" view-tabs [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'tabs'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-center\" view-text-center [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textCenter'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-graph\" view-text-graph [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textGraph'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-left\" view-text-left [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textLeft'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-map\" view-text-map [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textMap'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-right\" view-text-right [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textRight'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-two-cols\" view-text-two-cols [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textTwoCols'\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"slider__bullets\">\n\t\t\t\t<span class=\"slider__bullet\" [class]=\"{ active: index === current }\" *for=\"let slide of items; let index = index;\" (click)=\"navTo(index)\"></span>\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewSuiteComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewSuiteComponent, _Component);

  function ViewSuiteComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewSuiteComponent.prototype;

  _proto.onInit = function onInit() {
    console.log('ViewSuiteComponent');
  };

  return ViewSuiteComponent;
}(rxcomp.Component);
ViewSuiteComponent.meta = {
  selector: '[view-suite]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\">\n\t\t\t<img loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<div class=\"container-fluid\" [class]=\"{ 'negative': item.image != null }\" >\n\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t</div>\n\t"
};var ViewTabsComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTabsComponent, _Component);

  function ViewTabsComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTabsComponent.prototype;

  _proto.onInit = function onInit() {
    console.log('ViewTabsComponent');
    this.index = 0;
    this.slide = this.item.items[0];
  };

  _proto.setSlide = function setSlide(index) {
    this.index = index;
    this.slide = this.item.items[index];
    this.pushChanges();
  };

  return ViewTabsComponent;
}(rxcomp.Component);
ViewTabsComponent.meta = {
  selector: '[view-tabs]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<ul class=\"nav--tabs\">\n\t\t\t<li *for=\"let nav of item.items; let navIndex = index;\" (click)=\"setSlide(navIndex)\"><span [innerHTML]=\"nav.name\"></span></li>\n\t\t</ul>\n\t\t<div class=\"view view--clients\" view-clients [item]=\"slide\" *if=\"slide && !slide.hidden && slide.template == 'clients'\"></div>\n\t\t<div class=\"view view--group\" view-group [item]=\"slide\" *if=\"slide && !slide.hidden && slide.template == 'group'\"></div>\n\t\t<div class=\"view view--suite\" view-suite [item]=\"slide\" *if=\"slide && !slide.hidden && slide.template == 'suite'\"></div>\n\t\t<div class=\"view view--text-center\" view-text-center [item]=\"slide\" *if=\"slide && !slide.hidden && slide.template == 'textCenter'\"></div>\n\t\t<div class=\"view view--text-graph\" view-text-graph [item]=\"slide\" *if=\"slide && !slide.hidden && slide.template == 'textGraph'\"></div>\n\t\t<div class=\"view view--text-left\" view-text-left [item]=\"slide\" *if=\"slide && !slide.hidden && slide.template == 'textLeft'\"></div>\n\t\t<div class=\"view view--text-map\" view-text-map [item]=\"slide\" *if=\"slide && !slide.hidden && slide.template == 'textMap'\"></div>\n\t\t<div class=\"view view--text-right\" view-text-right [item]=\"slide\" *if=\"slide && !slide.hidden && slide.template == 'textRight'\"></div>\n\t\t<div class=\"view view--text-two-cols\" view-text-two-cols [item]=\"slide\" *if=\"slide && !slide.hidden && slide.template == 'textTwoCols'\"></div>\n\t"
};var ViewTextCenterComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTextCenterComponent, _Component);

  function ViewTextCenterComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTextCenterComponent.prototype;

  _proto.onInit = function onInit() {
    console.log('ViewTextCenterComponent');
  };

  return ViewTextCenterComponent;
}(rxcomp.Component);
ViewTextCenterComponent.meta = {
  selector: '[view-text-center]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\" *if=\"item.image\">\n\t\t\t<img loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<div class=\"circle\" *if=\"!item.image\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t<div class=\"container-fluid\" [class]=\"{ 'negative': item.image != null }\" >\n\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t</div>\n\t"
};var ViewTextGraphComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTextGraphComponent, _Component);

  function ViewTextGraphComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTextGraphComponent.prototype;

  _proto.onInit = function onInit() {
    console.log('ViewTextGraphComponent');
  };

  return ViewTextGraphComponent;
}(rxcomp.Component);
ViewTextGraphComponent.meta = {
  selector: '[view-text-graph]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\" *if=\"item.image\">\n\t\t\t<img loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<div class=\"circle\" [class]=\"{ dimmed: item.image }\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t<div class=\"container-fluid\" [class]=\"{ 'negative': item.image != null }\" >\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<ul class=\"listing--values\" *if=\"item.list && item.list.length\">\n\t\t\t\t\t\t<li class=\"listing__item\" *for=\"let listItem of item.list\"><span [innerHTML]=\"listItem.title\"></span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewTextLeftComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTextLeftComponent, _Component);

  function ViewTextLeftComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTextLeftComponent.prototype;

  _proto.onInit = function onInit() {
    console.log('ViewTextLeftComponent');
  };

  return ViewTextLeftComponent;
}(rxcomp.Component);
ViewTextLeftComponent.meta = {
  selector: '[view-text-left]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\" *if=\"item.image\">\n\t\t\t<img loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<div class=\"circle\" *if=\"!item.image\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t<div class=\"container-fluid\" [class]=\"{ 'negative': item.image != null }\" >\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<ul class=\"listing--values\" *if=\"item.list && item.list.length\">\n\t\t\t\t\t\t<li class=\"listing__item\" *for=\"let listItem of item.list\"><span [innerHTML]=\"listItem.title\"></span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewTextMapComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTextMapComponent, _Component);

  function ViewTextMapComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTextMapComponent.prototype;

  _proto.onInit = function onInit() {
    console.log('ViewTextMapComponent');
  };

  return ViewTextMapComponent;
}(rxcomp.Component);
ViewTextMapComponent.meta = {
  selector: '[view-text-map]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"circle\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t<div class=\"background\">\n\t\t\t<img loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t</div>\n\t"
};var ViewTextRightComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTextRightComponent, _Component);

  function ViewTextRightComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTextRightComponent.prototype;

  _proto.onInit = function onInit() {
    console.log('ViewTextRightComponent');
  };

  return ViewTextRightComponent;
}(rxcomp.Component);
ViewTextRightComponent.meta = {
  selector: '[view-text-right]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\" *if=\"item.image\">\n\t\t\t<img loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<!--\n\t\t<div class=\"circle\" [class]=\"{ dimmed: item.image }\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t-->\n\t\t<div class=\"container-fluid\" [class]=\"{ 'negative': item.image != null }\" >\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<ul class=\"listing--values\" *if=\"item.list && item.list.length\">\n\t\t\t\t\t\t<li class=\"listing__item\" *for=\"let listItem of item.list\"><span [innerHTML]=\"listItem.title\"></span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewTextTwoColsComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTextTwoColsComponent, _Component);

  function ViewTextTwoColsComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTextTwoColsComponent.prototype;

  _proto.onInit = function onInit() {
    console.log('ViewTextTwoColsComponent');
  };

  return ViewTextTwoColsComponent;
}(rxcomp.Component);
ViewTextTwoColsComponent.meta = {
  selector: '[view-text-two-cols]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\" *if=\"item.image\">\n\t\t\t<img loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<div class=\"circle\" *if=\"!item.image\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t<div class=\"container-fluid\" [class]=\"{ 'negative': item.image != null }\" >\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewWelcomeComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewWelcomeComponent, _Component);

  function ViewWelcomeComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewWelcomeComponent.prototype;

  _proto.onInit = function onInit() {
    console.log('ViewWelcomeComponent');
  };

  return ViewWelcomeComponent;
}(rxcomp.Component);
ViewWelcomeComponent.meta = {
  selector: '[view-welcome]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"circle\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"img/logo-lg.png\" />\n\t\t</div>\n\t"
};var AppModule = /*#__PURE__*/function (_Module) {
  _inheritsLoose(AppModule, _Module);

  function AppModule() {
    return _Module.apply(this, arguments) || this;
  }

  return AppModule;
}(rxcomp.Module);
AppModule.meta = {
  imports: [rxcomp.CoreModule],
  declarations: [FlagPipe, FooterMenuComponent, SliderComponent, SliderMainComponent, SliderVerticalComponent, SliderGalleryComponent, SliderHeroComponent, ViewClientsComponent, ViewGroupComponent, ViewSuiteComponent, ViewTabsComponent, ViewTextCenterComponent, ViewTextGraphComponent, ViewTextLeftComponent, ViewTextMapComponent, ViewTextRightComponent, ViewTextTwoColsComponent, ViewWelcomeComponent],
  bootstrap: AppComponent
};rxcomp.Browser.bootstrap(AppModule);})));