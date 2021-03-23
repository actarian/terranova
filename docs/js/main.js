/**
 * @license more v1.0.0
 * (c) 2021 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?f(require('rxcomp'),require('rxjs'),require('rxjs/operators')):typeof define==='function'&&define.amd?define(['rxcomp','rxjs','rxjs/operators'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,f(g.rxcomp,g.rxjs,g.rxjs.operators));}(this,(function(rxcomp, rxjs, operators){'use strict';function _defineProperties(target, props) {
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
    /*,
    "image": "img/slides/slide-2-0.jpg"*/

  }, {
    "id": 22,
    "template": Templates.TextLeft,
    "name": "Core Values",
    "title": "Core Values",
    "abstract": "<p>I nostri Core Value tramandano la nostra cultura e definiscono il carattere della nostra Azienda.</p><p>Ogni giorno guidano il modo in cui ci comportiamo e con cui prendiamo decisioni.</p>",
    "image": "img/slides/slide-2-1.jpg",
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
    }]
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
    "graph": {
      "data": [{
        "name": '2009',
        "value": 25
      }, {
        "name": '2010',
        "value": 39
      }, {
        "name": '2011',
        "value": 69
      }, {
        "name": '2012',
        "value": 85
      }, {
        "name": '2013',
        "value": 97
      }, {
        "name": '2014',
        "value": 111
      }, {
        "name": '2015',
        "value": 125
      }, {
        "name": '2016',
        "value": 220
      }, {
        "name": '2017',
        "value": 250
      }, {
        "name": '2018',
        "value": 260
      }, {
        "name": '2019',
        "value": 305
      }, {
        "name": '2020',
        "value": 330
      }],
      "format": "%"
    }
  }, {
    "id": 26,
    "template": Templates.TextGraph,
    "name": "Fatturato",
    "title": "La crescita",
    "abstract": "Negli ultimi anni, Terranova ha avuto una crescita costante sia in fatturato che in numero di risorse.",
    "description": "<p>Fatturato di oltre € 41 milioni<br>con Ambiente.it e Arcoda per l’anno fiscale 2020.</p>",
    "graph": {
      "data": [{
        "name": '2010',
        "value": 6
      }, {
        "name": '2011',
        "value": 9
      }, {
        "name": '2012',
        "value": 11
      }, {
        "name": '2013',
        "value": 12
      }, {
        "name": '2014',
        "value": 13
      }, {
        "name": '2015',
        "value": 16
      }, {
        "name": '2016',
        "value": 20
      }, {
        "name": '2017',
        "value": 27
      }, {
        "name": '2018',
        "value": 29
      }, {
        "name": '2019',
        "value": 36
      }, {
        "name": '2020',
        "value": 41
      }],
      "format": "%M"
    }
  }, {
    "id": 27,
    "template": Templates.TextMap,
    "name": "Le Sedi",
    "title": "Le Sedi",
    "abstract": "Presenti in Italia, Cina, Regno Unito e Uzbekistan.",
    "image": "img/slides/slide-2-6.png",
    "pins": [{
      "x": 184 / 1920 * 100,
      "y": 553 / 1110 * 100,
      "title": "Regno Unito",
      "abstract": "Birmingham"
    }, {
      "x": 387 / 1920 * 100,
      "y": 751 / 1110 * 100,
      "title": "Italia",
      "abstract": "HQ Firenze, Grosseto, Milano, Verona, Roma, Trento, Mestre"
    }, {
      "x": 1102 / 1920 * 100,
      "y": 748 / 1110 * 100,
      "title": "Uzbekistan",
      "abstract": "Tashkent"
    }, {
      "x": 1612 / 1920 * 100,
      "y": 966 / 1110 * 100,
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
    "image": "img/slides/slide-2-7.jpg",
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
    }]
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
    "template": Templates.TextMap,
    "name": "Pietro Fiorentini",
    "logo": "img/loghi/partners/pietro-fiorentini.png",
    "title": "È partner di Terranova dal 2011",
    "abstract": "385€ Millioni di fatturato 74€ Millioni EBITDA.",
    "image": "img/slides/slide-4.png",
    "pins": []
  }, {
    "id": 32,
    "template": Templates.TextCenter,
    "name": "Arcoda",
    "title": "Terranova è partner di Arcoda",
    "abstract": "di cui detiene il 60% del capitale",
    "logo": "img/loghi/partners/arcoda.png",
    "description": "Arcoda sviluppa soluzioni tecnologiche vincenti, progettate per chi è chiamato a gestire quotidianamente forza lavoro sul territorio.",
    "list": [{
      "title": "Tenacia"
    }]
  }, {
    "id": 32,
    "template": Templates.TextCenter,
    "name": "Ambiente.it",
    "title": "Terranova è partner di Ambiente.it",
    "abstract": "di cui detiene il 60% del capitale",
    "logo": "img/loghi/partners/ambiente.it.png",
    "description": "<p>Ambiente.it da quasi trent’anni sviluppa software gestionali ed eroga servizi professionali per la filiera dei rifiuti speciali e urbani.</p><p>Si propone al mercato con un servizio completo per la informatizzazione gestionale di tutte le problematiche ambientali, offrendo ai propri clienti soluzioni software, informazione, formazione, consulenza e assistenza.</p><p>Ambiente.it supporta oltre mille clienti in tutta Italia; è presente in grandi realtà industriali così come nei Consorzi e nelle Utility di igiene urbana, ed in centinaia di medie e piccole imprese in tutta Italia, con migliaia di utenti che utilizzano giornalmente i suoi software.</p>",
    "list": [{
      "title": "Tenacia"
    }]
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
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Acsm Agam",
    "logo": "img/suite/reti/clienti/acsm agam.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Adrigas",
    "logo": "img/suite/reti/clienti/adrigas.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Aemme Linea Distribuzione",
    "logo": "img/suite/reti/clienti/aemme-linea-distribuzione.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Amag Reti Gas",
    "logo": "img/suite/reti/clienti/amag reti gas.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Amc",
    "logo": "img/suite/reti/clienti/amc.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "AP Reti Gas Nordest",
    "logo": "img/suite/reti/clienti/ap reti gas nordest.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "AP Reti Gas Rovigo",
    "logo": "img/suite/reti/clienti/ap reti gas rovigo.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "AP Reti Gas Vicenza",
    "logo": "img/suite/reti/clienti/ap reti gas vicenza.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "AP Reti Gas",
    "logo": "img/suite/reti/clienti/ap reti gas.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Aquamet",
    "logo": "img/suite/reti/clienti/aquamet.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Asm Vigevano",
    "logo": "img/suite/reti/clienti/asm vigevano.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Asmt",
    "logo": "img/suite/reti/clienti/asmt.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Atr",
    "logo": "img/suite/reti/clienti/atr.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Azienda Energetica Valtellina Valchiavenna",
    "logo": "img/suite/reti/clienti/azienda energetica valtellina valchiavenna.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Blu Reti Gas",
    "logo": "img/suite/reti/clienti/blu reti gas.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Cbl Distribuzione Srl",
    "logo": "img/suite/reti/clienti/cbl distribuzione srl.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Centria Reti Gas",
    "logo": "img/suite/reti/clienti/centria reti gas.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Cosvim",
    "logo": "img/suite/reti/clienti/cosvim.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Cps",
    "logo": "img/suite/reti/clienti/cps.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Dea Distribuzione Elettrica Adriatica",
    "logo": "img/suite/reti/clienti/dea distribuzione elettrica adriatica.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Dgn",
    "logo": "img/suite/reti/clienti/dgn.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "E-Dyna",
    "logo": "img/suite/reti/clienti/e-dyna.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "E",
    "logo": "img/suite/reti/clienti/e.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Edilgas",
    "logo": "img/suite/reti/clienti/edilgas.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Edma Reti Gas",
    "logo": "img/suite/reti/clienti/edma reti gas.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Gei",
    "logo": "img/suite/reti/clienti/gei.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Gigas Rete",
    "logo": "img/suite/reti/clienti/gigas rete.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Gp Infrastrutture",
    "logo": "img/suite/reti/clienti/gp infrastrutture.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Gruppo Erogasmet",
    "logo": "img/suite/reti/clienti/gruppo erogasmet.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Gruppo Gesam",
    "logo": "img/suite/reti/clienti/gruppo gesam.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Infrastrutture Distribuzione Gas",
    "logo": "img/suite/reti/clienti/infrastrutture distribuzione gas.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "IReti",
    "logo": "img/suite/reti/clienti/ireti.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Linea Ri",
    "logo": "img/suite/reti/clienti/linea ri.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "M Reti",
    "logo": "img/suite/reti/clienti/m reti.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Mediterranea",
    "logo": "img/suite/reti/clienti/mediterranea.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Megareti",
    "logo": "img/suite/reti/clienti/megareti.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Meta Edil",
    "logo": "img/suite/reti/clienti/meta edil.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Mn",
    "logo": "img/suite/reti/clienti/mn.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Pescara Distribuzione Gas",
    "logo": "img/suite/reti/clienti/pescara distribuzione gas.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Prealpi Gas",
    "logo": "img/suite/reti/clienti/prealpi gas.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Reti Distribuzione",
    "logo": "img/suite/reti/clienti/reti distribuzione.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Reti Metano Territorio",
    "logo": "img/suite/reti/clienti/reti metano territorio.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Reti Più",
    "logo": "img/suite/reti/clienti/reti-più.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Salerno Energia Holding",
    "logo": "img/suite/reti/clienti/salerno energia holding.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Sar",
    "logo": "img/suite/reti/clienti/sar.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Società Impianti Metano",
    "logo": "img/suite/reti/clienti/società impianti metano.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Stadtwerke Asm",
    "logo": "img/suite/reti/clienti/stadtwerke asm.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Tea Sei",
    "logo": "img/suite/reti/clienti/tea sei.png"
  }, {
    "x": Math.random() * 1920 / 1920 * 100,
    "y": (400 + Math.random() * 710) / 1110 * 100,
    "title": "Tecniconsul",
    "logo": "img/suite/reti/clienti/tecni consul.png"
  }]
}];var LocationService = /*#__PURE__*/function () {
  function LocationService() {}

  LocationService.has = function has(key) {
    var params = new URLSearchParams(window.location.search); // console.log('LocationService.has', params);

    return params.has(key);
  };

  LocationService.get = function get(key) {
    var params = new URLSearchParams(window.location.search); // console.log('LocationService.get', params);

    return params.get(key);
  };

  LocationService.set = function set(keyOrValue, value) {
    var params = new URLSearchParams(window.location.search);

    if (typeof keyOrValue === 'string') {
      params.set(keyOrValue, value);
    } else {
      params.set(keyOrValue, '');
    }

    this.pushState(params); // console.log('LocationService.set', params, keyOrValue, value);
  };

  LocationService.pushState = function pushState(params, hash) {
    if (window.history && window.history.pushState) {
      var title = document.title;
      var url = "" + window.location.origin + window.location.pathname + (params ? '?' + params.toString() : '') + (hash ? '#' + hash : '');
      var state = params ? params.toString() : hash ? {
        slug: hash
      } : null;
      window.history.pushState(state, title, url);
      console.log('pushState', params, hash, state, title, url);
    }
  };

  LocationService.replaceState = function replaceState(params, hash) {
    if (window.history && window.history.replaceState) {
      var title = document.title;
      var url = "" + window.location.origin + window.location.pathname + (params ? '?' + params.toString() : '') + (hash ? '#' + hash : ''); // console.log(url, hash);

      var state = params ? params.toString() : hash ? {
        slug: hash
      } : null;
      window.history.replaceState(state, title, url);
    }
  };

  LocationService.deserialize = function deserialize(key) {
    var encoded = this.get('params');
    return this.decode(key, encoded);
  };

  LocationService.serialize = function serialize(keyOrValue, value) {
    var params = this.deserialize();
    var encoded = this.encode(keyOrValue, value, params);
    this.set('params', encoded);
  };

  LocationService.decode = function decode(key, encoded) {
    var decoded = null;

    if (encoded) {
      var json = window.atob(encoded);
      decoded = JSON.parse(json);
    }

    if (key && decoded) {
      decoded = decoded[key];
    }

    return decoded || null;
  };

  LocationService.encode = function encode(keyOrValue, value, params) {
    params = params || {};
    var encoded = null;

    if (typeof keyOrValue === 'string') {
      params[keyOrValue] = value;
    } else {
      params = keyOrValue;
    }

    var json = JSON.stringify(params);
    encoded = window.btoa(json);
    return encoded;
  };

  LocationService.toSlug = function toSlug(text) {
    return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  };

  LocationService.onPopState = function onPopState(callback) {
    var stopBrowserBack = function stopBrowserBack(callback) {
      window.history.pushState(null, '', window.location.href);

      window.onpopstate = function () {
        window.history.pushState(null, '', window.location.href);
        callback();
      };
    };

    return stopBrowserBack(callback);
  };

  return LocationService;
}();var ApiService = /*#__PURE__*/function () {
  function ApiService() {}

  ApiService.data$ = function data$() {
    var _this = this;

    return rxjs.of(DATA).pipe(operators.map(function (data) {
      return _this.setSlugs(data);
    }));
  };

  ApiService.setSlugs = function setSlugs(items, parentSlug, parentDocumentTitle) {
    var _this2 = this;

    if (parentSlug === void 0) {
      parentSlug = '';
    }

    if (parentDocumentTitle === void 0) {
      parentDocumentTitle = '';
    }

    items.forEach(function (item) {
      item.slug = parentSlug + '/' + LocationService.toSlug(item.name);
      item.documentTitle = parentDocumentTitle + (parentDocumentTitle !== '' ? ' - ' : '') + item.name;

      if (item.items) {
        _this2.setSlugs(item.items, item.slug, item.documentTitle);
      }
    });
    return items;
  };

  return ApiService;
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
          // console.log(event.key, event.code);
          keys[event.code] = true;
        } else {
          delete keys[event.code];
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

_defineProperty(KeyboardService, "keys", {});var DragPoint = function DragPoint() {
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
      // console.log(node, parent, node === parent);
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
}();var SliderAutoplayMode = {
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

    if (!this.container) {
      this.state = {
        current: current
      };
    } else if (this.state.current !== current) {
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

    this.items = items;
    this.state.current = this.resolveInitialIndex(); // console.log('SliderComponent.onInit', this.items);

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
    }, 500); // console.log('Slider', this.current);

    this.init.next(this);
  };

  _proto.resolveInitialIndex = function resolveInitialIndex() {
    return 0;
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
    }), operators.throttleTime(1000), operators.tap(function (event) {
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

    var wrapper = node.firstElementChild;
    var inner = wrapper.firstElementChild;
    var slides = Array.prototype.slice.call(inner.children);
    slides.forEach(function (slide, i) {
      if (i === current) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    }); // console.log('setActiveState', current, node);
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

  _proto.navTo = function navTo(current, immediate) {
    current = (current > 0 ? current : this.items.length + current) % this.items.length;
    this.immediate = immediate;
    this.setCurrent(current);
    this.userGesture = true;
    this.pushChanges();
    this.immediate = false;
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
    key: "state",
    get: function get() {
      if (!this.state_) {
        this.state_ = {
          current: 0
        };
      }

      return this.state_;
    }
  }, {
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
      return rect.left < window.innerWidth && rect.right > 0 && rect.top < window.innerHeight && rect.bottom > 0;
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
  outputs: ['init', 'change']
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
    this.slider = null;
    this.subSlider = null;
    this.chapterIndex = 0;
    this.itemIndex = 0;
    this.showMenu = false;
    this.templates = Templates; // this.slides = DATA;
    // this.items = this.collectItems(this.slides);

    this.slides = [];
    this.items = [];
    ApiService.data$().pipe(operators.first()).subscribe(function (data) {
      _this.slides = data;
      _this.items = _this.collectItems(_this.slides);
      var html = document.querySelector('html');
      html.classList.add('resizing');
      setTimeout(function () {
        html.classList.remove('resizing');
      });
      console.log(_this.slides);
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

    KeyboardService.keys$().pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (keys) {
      if (keys.Space) {
        _this.onToggleMenu();
      }
    });
    this.resize$().pipe(operators.takeUntil(this.unsubscribe$)).subscribe();
    /*
    LocationService.onPopState((event) => {
    	console.log('onPopState', event);
    });
    */
  };

  _proto.updateLocation = function updateLocation() {
    var url = '',
        title = '';
    var currentItem = this.currentItem;

    if (currentItem) {
      url = currentItem.slug;
      title = currentItem.documentTitle;
    } else {
      var currentChapter = this.currentChapter;

      if (currentChapter) {
        url = currentChapter.slug;
        title = currentChapter.documentTitle;
      }
    }

    document.title = title;
    LocationService.replaceState(null, url);
    console.log('AppComponent.updateLocation', title, url);
  };

  _proto.resize$ = function resize$() {
    var html = document.querySelector('html');
    var t;
    return rxjs.fromEvent(window, 'resize').pipe(operators.throttleTime(200), operators.tap(function (_) {
      html.classList.add('resizing');

      if (t) {
        clearTimeout(t);
      }

      t = setTimeout(function () {
        html.classList.remove('resizing');
      }, 200);
    }));
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
    // console.log('AppComponent.onSliderInit', slider);
    this.slider = slider;
    this.chapterIndex = slider.current;
  };

  _proto.onSliderChange = function onSliderChange(index) {
    // console.log('AppComponent.onSliderChange', index);
    this.chapterIndex = index;
    var chapter = this.slides[index];

    if (chapter) {
      this.itemIndex = chapter.current;
    }

    this.showMenu = false;
    this.updateLocation();
    this.pushChanges();
  };

  _proto.onSubSliderChange = function onSubSliderChange(index) {
    // console.log('AppComponent.onSubSliderChange', index);
    this.itemIndex = index;
    this.showMenu = false;
    this.updateLocation();
    this.pushChanges();
  };

  _proto.onToggleMenu = function onToggleMenu() {
    this.showMenu = !this.showMenu;
    this.pushChanges();
  };

  _proto.onMenuNav = function onMenuNav(nav) {
    // console.log('AppComponent.onMenuNav', nav);
    this.slider.onMenuNav(nav);
    this.showMenu = false;
    this.pushChanges(); // this.slider.navTo(nav.chapterIndex);
  };

  _proto.onPreviousChapter = function onPreviousChapter() {
    if (this.slider.hasPrev()) {
      this.slider.navTo(this.slider.current - 1);
    }
  };

  _proto.onNextChapter = function onNextChapter() {
    if (this.slider.hasNext()) {
      this.slider.navTo(this.slider.current + 1);
    }
  };

  _proto.onNavToChapter = function onNavToChapter(index) {
    this.slider.navTo(index);
  };

  _createClass(AppComponent, [{
    key: "showMenu",
    get: function get() {
      return this.showMenu_;
    },
    set: function set(showMenu) {
      this.showMenu_ = showMenu;
      SliderComponent.disabled = showMenu;
    }
  }, {
    key: "previousChapter",
    get: function get() {
      if (this.slider && this.slider.hasPrev()) {
        return this.slides[this.slider.current - 1];
      }
    }
  }, {
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
  }, {
    key: "currentItem",
    get: function get() {
      var currentChapter = this.currentChapter;
      return currentChapter && currentChapter.items && currentChapter.current != null ? currentChapter.items[currentChapter.current] : null;
    }
  }]);

  return AppComponent;
}(rxcomp.Component);
AppComponent.meta = {
  selector: '[app-component]'
};var AppearStaggerDirective = /*#__PURE__*/function (_Directive) {
  _inheritsLoose(AppearStaggerDirective, _Directive);

  function AppearStaggerDirective() {
    return _Directive.apply(this, arguments) || this;
  }

  var _proto = AppearStaggerDirective.prototype;

  _proto.onInit = function onInit() {
    var _getContext = rxcomp.getContext(this),
        node = _getContext.node;

    node.classList.add('appear-stagger');
  };

  _proto.onChanges = function onChanges() {
    var _getContext2 = rxcomp.getContext(this),
        node = _getContext2.node;

    IntersectionService.firstIntersection$(node).pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (_) {
      node.classList.add('appeared');
    });
  };

  return AppearStaggerDirective;
}(rxcomp.Directive);
AppearStaggerDirective.meta = {
  selector: '[appear-stagger]'
};var environmentServed = {
  flags: {
    production: true
  },
  logo: null,
  background: {
    image: '/Client/docs/img/background.jpg',
    video: '/Client/docs/img/background.mp4'
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
  assets: '/Client/docs/',
  worker: '/Client/docs/js/workers/image.service.worker.js',
  githubDocs: 'https://raw.githubusercontent.com/actarian/terranova/main/docs/',
  url: {
    index: '/'
  },
  languages: ['en'],
  defaultLanguage: 'en'
};var environmentStatic = {
  flags: {
    production: false
  },
  logo: null,
  background: {
    image: '/terranova/img/background.jpg',
    video: '/terranova/img/background.mp4'
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
  assets: '/terranova/',
  worker: './js/workers/image.service.worker.js',
  githubDocs: 'https://raw.githubusercontent.com/actarian/terranova/main/docs/',
  url: {
    index: '/'
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
      ENV.STATIC = STATIC === true || STATIC === 'true'; // console.log('Environment.STATIC.set', ENV.STATIC);
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

    // console.log('FooterMenuComponent.onInit');
    var _getContext = rxcomp.getContext(this),
        node = _getContext.node;

    node.focus();
    this.current = 0;
    this.slides.forEach(function (chapter) {
      chapter.current = 0;
    });
    KeyboardService.keys$().pipe(operators.filter(function (_) {
      return _this.active;
    }), operators.takeUntil(this.unsubscribe$)).subscribe(function (keys) {
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
      } // console.log(this.current);

    });
    return this.wheel$(node).pipe(operators.filter(function (_) {
      return _this.active;
    }), operators.takeUntil(this.unsubscribe$)).subscribe();
  };

  _proto.onChanges = function onChanges() {
    this.current = this.chapterIndex;
    var chapter = this.slides[this.current];

    if (chapter) {
      chapter.current = this.itemIndex; // console.log('FooterMenuComponent.onChanges', this.current, chapter.current);
    }
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
    var _this3 = this;

    var chapterIndex = 0,
        index = 0,
        chapter;
    this.slides.forEach(function (slide, i) {
      if (slide === item) {
        chapterIndex = i;
        chapter = slide;
      }

      if (slide.items) {
        slide.items.forEach(function (subItem, subIndex) {
          if (subItem === item) {
            chapterIndex = i;
            index = subIndex;
            chapter = slide;
          }
        });
      }
    });

    if (this.current !== chapterIndex || chapter.current !== index) {
      this.current = chapterIndex;
      chapter.current = index;
      this.pushChanges();
      setTimeout(function () {
        // console.log('FooterMenuComponent.onSelect', item, chapterIndex, index);
        _this3.nav.next({
          item: item,
          chapterIndex: chapterIndex,
          index: index
        });
      }, 500);
    } else {
      // console.log('FooterMenuComponent.onSelect', item, chapterIndex, index);
      this.nav.next({
        item: item,
        chapterIndex: chapterIndex,
        index: index
      });
    }
  };

  _proto.navTo = function navTo(index) {
    this.current = index;
    this.pushChanges();
  };

  return FooterMenuComponent;
}(rxcomp.Component);
FooterMenuComponent.meta = {
  selector: '[footer-menu]',
  inputs: ['slides', 'active', 'chapterIndex', 'itemIndex'],
  outputs: ['nav'],
  template:
  /* html */
  "\n\t\t<div class=\"circle\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"img/logo-lg.png\" />\n\t\t</div>\n\t\t<div class=\"listing--menu\" [style]=\"{ transform: 'translateX(' + -76 * current + 'rem)' }\">\n\t\t\t<div class=\"listing__item\" *for=\"let chapter of slides; let c = index;\">\n\t\t\t\t<div class=\"listing--submenu\" [style]=\"{ transform: 'translateY(' + -25 * chapter.current + 'rem)' }\" *if=\"chapter.items && chapter.items.length\">\n\t\t\t\t\t<div class=\"listing__item\" *for=\"let item of chapter.items; let i = index;\">\n\t\t\t\t\t\t<div class=\"card--menu\" [class]=\"{ active: c === current && i === chapter.current }\" (click)=\"onSelect(item)\">\n\t\t\t\t\t\t\t<span [innerHTML]=\"item.name\" ></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card--menu\" [class]=\"{ active: c === current }\" (click)=\"onSelect(chapter)\" *if=\"!chapter.items || !chapter.items.length\">\n\t\t\t\t\t<span [innerHTML]=\"chapter.name\"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"slider__bullets\">\n\t\t\t<span class=\"slider__bullet\" [class]=\"{ active: index === current }\" *for=\"let item of slides; let index = index;\" (click)=\"navTo(index)\"></span>\n\t\t</div>\n\t"
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
    this.subSlider = null;
  };

  _proto.resolveInitialIndex = function resolveInitialIndex() {
    var initialIndex = 0;
    var hash = window.location.hash;

    if (hash) {
      var index = this.items.reduce(function (p, c, i) {
        if (p === -1) {
          if (hash.indexOf(c.slug) === 1) {
            return i;
          } else {
            return p;
          }
        } else {
          return p;
        }
      }, -1);

      if (index !== -1) {
        initialIndex = index;
      }

      console.log('SliderMainComponent.parseLocation.index', hash, initialIndex);
    }

    return initialIndex;
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

  _proto.navTo = function navTo(current, immediate) {
    _SliderComponent.prototype.navTo.call(this, current, immediate);
  };

  _proto.onSubSliderInit = function onSubSliderInit(subSlider, item) {
    // console.log('SliderMainComponent.onSubSliderInit', subSlider);
    item.subSlider = subSlider; // this.pushChanges();
  };

  _proto.onSubSliderChange = function onSubSliderChange(index) {
    // console.log('SliderMainComponent.onSubSliderChange', index);
    this.subChange.next(index); // this.pushChanges();
  };

  _proto.onMenuNav = function onMenuNav(nav) {
    // console.log('AppComponent.onMenuNav', nav);
    _SliderComponent.prototype.navTo.call(this, nav.chapterIndex, true);

    var item = this.items[nav.chapterIndex];

    if (item.subSlider) {
      item.subSlider.navTo(nav.index, true);
    }
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
      var style = {
        'transform': 'translate3d(' + -this.slideWidth * this.current + 'px, 0, 0)'
      };

      if (this.immediate) {
        style.transition = 'none';
      } // console.log('SliderMainComponent', style.transition);


      return style;
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
  outputs: ['init', 'change', 'subChange']
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

  _proto.resolveInitialIndex = function resolveInitialIndex() {
    var initialIndex = 0;
    var hash = window.location.hash;

    if (hash) {
      var index = this.items.reduce(function (p, c, i) {
        if (p === -1) {
          if (hash.indexOf(c.slug) === 1) {
            return i;
          } else {
            return p;
          }
        } else {
          return p;
        }
      }, -1);

      if (index !== -1) {
        initialIndex = index;
      }

      console.log('SliderVerticalComponent.parseLocation.index', hash, initialIndex);
    }

    return initialIndex;
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

  _proto.navTo = function navTo(current, immediate) {
    _SliderComponent.prototype.navTo.call(this, current, immediate);
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
      var style = {
        'transform': "translate3d(0, " + -this.slideHeight * this.current + "px, 0)"
      };

      if (this.immediate) {
        style.transition = 'none';
      } // console.log('SliderVerticalComponent', style.transition);


      return style;
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
  outputs: ['init', 'change']
};var ViewClientsComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewClientsComponent, _Component);

  function ViewClientsComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewClientsComponent.prototype;

  _proto.onInit = function onInit() {// console.log('ViewClientsComponent');
  };

  return ViewClientsComponent;
}(rxcomp.Component);
ViewClientsComponent.meta = {
  selector: '[view-clients]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\">\n\t\t\t<img data-loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<!--\n\t\t<div class=\"container\">\n\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t<div class=\"abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t</div>\n\t\t-->\n\t\t<div class=\"listing--clients\" appear-stagger>\n\t\t\t<div class=\"listing__item\" *for=\"let client of item.clients\">\n\t\t\t\t<img [src]=\"client.logo\" [title]=\"client.title\" />\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewGroupComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewGroupComponent, _Component);

  function ViewGroupComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewGroupComponent.prototype;

  _proto.onInit = function onInit() {
    this.current = 0;
  };

  _proto.onSliderChange = function onSliderChange(index) {
    this.current = index;
    this.pushChanges();
    this.change.next(index);
  };

  _proto.onSliderInit = function onSliderInit(slider) {
    this.init.next(slider);
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
  outputs: ['init', 'change'],
  template:
  /* html */
  "\n\t\t<div class=\"slider__container slider--vertical\" [class]=\"{ 'negative': isNegative }\" (init)=\"onSliderInit($event)\" (change)=\"onSliderChange($event)\" slider-vertical [vertical]=\"true\" [items]=\"item.items\" *if=\"item.template == 'group'\">\n\t\t\t<div class=\"slider__wrapper\" [style]=\"wrapperStyle\">\n\t\t\t\t<div class=\"slider__inner\" [style]=\"innerStyle\">\n\t\t\t\t\t<div class=\"slider__slide\" *for=\"let slide of items; let index = index;\">\n\t\t\t\t\t\t<div class=\"view view--clients\" view-clients [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'clients'\"></div>\n\t\t\t\t\t\t<div class=\"view view--group\" view-group [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'group'\"></div>\n\t\t\t\t\t\t<div class=\"view view--suite\" view-suite [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'suite'\"></div>\n\t\t\t\t\t\t<div class=\"view view--tabs\" view-tabs [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'tabs'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-center\" view-text-center [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textCenter'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-graph\" view-text-graph [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textGraph'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-left\" view-text-left [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textLeft'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-map\" view-text-map [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textMap'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-right\" view-text-right [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textRight'\"></div>\n\t\t\t\t\t\t<div class=\"view view--text-two-cols\" view-text-two-cols [item]=\"slide\" *if=\"!slide.hidden && slide.template == 'textTwoCols'\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"slider__bullets\">\n\t\t\t\t<span class=\"slider__bullet\" [class]=\"{ active: index === current }\" *for=\"let slide of items; let index = index;\" (click)=\"navTo(index)\"></span>\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewSuiteComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewSuiteComponent, _Component);

  function ViewSuiteComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewSuiteComponent.prototype;

  _proto.onInit = function onInit() {
    // console.log('ViewSuiteComponent');
    // [class]="{ 'negative': item.image != null }"
    if (this.item.image) {
      var _getContext = getContext(this),
          node = _getContext.node;

      node.querySelector('.container-fluid').classList.add('negative');
    }
  };

  return ViewSuiteComponent;
}(rxcomp.Component);
ViewSuiteComponent.meta = {
  selector: '[view-suite]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\">\n\t\t\t<img data-loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<div class=\"container-fluid\" appear-stagger>\n\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t</div>\n\t"
};var ViewTabsComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTabsComponent, _Component);

  function ViewTabsComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTabsComponent.prototype;

  _proto.onInit = function onInit() {
    // console.log('ViewTabsComponent');
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
    // console.log('ViewTextCenterComponent');
    // [class]="{ 'negative': item.image != null }"
    if (this.item.image) {
      var _getContext = rxcomp.getContext(this),
          node = _getContext.node;

      node.querySelector('.container-fluid').classList.add('negative');
    }
  };

  return ViewTextCenterComponent;
}(rxcomp.Component);
ViewTextCenterComponent.meta = {
  selector: '[view-text-center]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\" *if=\"item.image\">\n\t\t\t<img data-loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<!--\n\t\t<div class=\"circle\" *if=\"!item.image\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t-->\n\t\t<div class=\"container-fluid\" appear-stagger>\n\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t<div class=\"logo\" *if=\"item.logo\"><img [src]=\"item.logo\" /></div>\n\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t</div>\n\t"
};function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}function bisector(f) {
  let delta = f;
  let compare = f;

  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }

  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function ascendingComparator(f) {
  return (d, x) => ascending(f(d), x);
}function number(x) {
  return x === null ? NaN : +x;
}const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
const bisectCenter = bisector(number).center;var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    step = -step;
    start = Math.ceil(start * step);
    stop = Math.floor(stop * step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}var slice = Array.prototype.slice;function identity(x) {
  return x;
}var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + x + ",0)";
}

function translateY(y) {
  return "translate(0," + y + ")";
}

function number$1(scale) {
  return d => +scale(d);
}

function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round()) offset = Math.round(offset);
  return d => +scale(d) + offset;
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + offset,
        range1 = +range[range.length - 1] + offset,
        position = (scale.bandwidth ? center : number$1)(scale.copy(), offset),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient === right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d) + offset); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = slice.call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : slice.call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : slice.call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  axis.offset = function(_) {
    return arguments.length ? (offset = +_, axis) : offset;
  };

  return axis;
}

function axisBottom(scale) {
  return axis(bottom, scale);
}function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}const implicit = Symbol("implicit");

function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  initRange.apply(scale, arguments);

  return scale;
}function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return initRange.apply(rescale(), arguments);
}function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}var constant = x => () => x;function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}var interpolateRgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;

  return rgb$1;
})(1);function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: interpolateNumber(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}function interpolate(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? interpolateNumber
      : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
      : b instanceof color ? interpolateRgb
      : b instanceof Date ? date
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : interpolateNumber)(a, b);
}function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}var degrees = 180 / Math.PI;

var identity$1 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return identity$1;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");function constants(x) {
  return function() {
    return x;
  };
}function number$2(x) {
  return +x;
}var unit = [0, 1];

function identity$2(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisectRight(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate$1 = interpolate,
      transform,
      untransform,
      unknown,
      clamp = identity$2,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity$2) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number$2), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity$2, rescale()) : clamp !== identity$2;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity$2, identity$2);
}function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}var formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};function identity$3(x) {
  return x;
}var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$3 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity$3 : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}var locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear$1() {
  var scale = continuous();

  scale.copy = function() {
    return copy(scale, linear$1());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}var xhtml = "http://www.w3.org/1999/xhtml";

var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function creator(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}function none() {}

function selector(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}function selection_select(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
}function array(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}function empty() {
  return [];
}

function selectorAll(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}function arrayAll(select) {
  return function() {
    var group = select.apply(this, arguments);
    return group == null ? [] : array(group);
  };
}

function selection_selectAll(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
}function matcher(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

function selection_selectChild(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : childMatcher(match)));
}var filter = Array.prototype.filter;

function children() {
  return this.children;
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

function selection_selectChildren(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}function selection_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
}function sparse(update) {
  return new Array(update.length);
}function selection_enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};function constant$1(x) {
  return function() {
    return x;
  };
}function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

function selection_data(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant$1(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = array(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}function selection_exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}function selection_merge(selection) {
  if (!(selection instanceof Selection)) throw new Error("invalid merge");

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
}function selection_order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}function selection_sort(compare) {
  if (!compare) compare = ascending$1;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
}

function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}function selection_nodes() {
  return Array.from(this);
}function selection_node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}function selection_size() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}function selection_empty() {
  return !this.node();
}function selection_each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function selection_attr(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}function defaultView(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

function selection_style(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

function selection_property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function selection_classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function selection_html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function selection_raise() {
  return this.each(raise);
}function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function selection_lower() {
  return this.each(lower);
}function selection_append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}function constantNull() {
  return null;
}

function selection_insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function selection_remove() {
  return this.each(remove);
}function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

function selection_on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function selection_dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}function* selection_iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};function select(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
}function create(name) {
  return select(creator(name).call(document.documentElement));
}var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames$1(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}function timeout$1(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create$1(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get$1(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set$1(node, id) {
  var schedule = get$1(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get$1(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create$1(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return timeout$1(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    timeout$1(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}function interrupt(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set$1(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = set$1(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function transition_tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get$1(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set$1(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get$1(node, id).value[name];
  };
}function interpolate$1(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber
      : b instanceof color ? interpolateRgb
      : (c = color(b)) ? (b = c, interpolateRgb)
      : interpolateString)(a, b);
}function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant$1(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS$1(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction$1(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS$1(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate$1;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
      : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
}function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

function transition_delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get$1(this.node(), id).delay;
}function durationFunction(id, value) {
  return function() {
    set$1(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set$1(this, id).duration = value;
  };
}

function transition_duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get$1(this.node(), id).duration;
}function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set$1(this, id).ease = value;
  };
}

function transition_ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get$1(this.node(), id).ease;
}function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    set$1(this, id).ease = v;
  };
}

function transition_easeVarying(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}function transition_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}function transition_merge(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set$1;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

function transition_on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get$1(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}function transition_selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}var Selection$1 = selection.prototype.constructor;

function transition_selection() {
  return new Selection$1(this._groups, this._parents);
}function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant$1(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction$1(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = set$1(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove$1(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate$1;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove$1(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction$1(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant$1(name, i, value), priority)
      .on("end.style." + name, null);
}function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction$1(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction$1(tweenValue(this, "text", value))
      : textConstant$1(value == null ? "" : value + ""));
}function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}function transition_transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get$1(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}function transition_end() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = set$1(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return selection().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;var ViewTextGraphComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTextGraphComponent, _Component);

  function ViewTextGraphComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTextGraphComponent.prototype;

  _proto.onInit = function onInit() {
    var _this = this;

    // console.log('ViewTextGraphComponent');
    // data = Object.assign(d3.csvParse(await FileAttachment("alphabet.csv").text(), ({letter, frequency}) => ({name: letter, value: +frequency})).sort((a, b) => d3.descending(a.value, b.value)), {format: "%", y: "↑ Frequency"})
    this.loadChart$().pipe(operators.first()).subscribe(function (data) {
      _this.data = _this.item.graph.data;
    });
  };

  _proto.onChanges = function onChanges() {
    var _this2 = this;

    if (this.chart) {
      this.chart.remove();
    }

    if (this.to) {
      clearTimeout(this.to);
    }

    this.to = setTimeout(function () {
      if (_this2.isVisible) {
        var data = _this2.item.graph.data;
        var format = _this2.item.graph.format;

        var chart = _this2.chart = _this2.makeChart(data, format);

        var _getContext = rxcomp.getContext(_this2),
            node = _getContext.node;

        var graph = node.querySelector('.graph');
        graph.appendChild(chart);
      }
    }, 200);
  };

  _proto.loadChart$ = function loadChart$() {
    return rxjs.from(fetch('data/fatturato.csv').then(function (x) {
      return x.text();
    }).then(function (csv) {
      var rows = csv.split('\n');
      var keys = rows.shift().split(',').map(function (x) {
        return JSON.parse(x);
      });
      var data = rows.filter(function (row) {
        return row.length > 0;
      }).map(function (row) {
        var item = {};
        var values = row.split(',');
        keys.forEach(function (key, i) {
          item[key] = JSON.parse(values[i]);
        });
        return item;
      });
      return data;
    }));
  };

  _proto.getTransition = function getTransition() {
    return transition().duration(750).ease(quadInOut);
  };

  _proto.makeChart = function makeChart(data, format) {
    // const columns = ['letter', 'frequency'];
    // const format = '%';
    // const y = '↑ Frequency';
    var color = '#114895';
    var width = 600;
    var height = 500;
    var margin = {
      top: 30,
      right: 0,
      bottom: 30,
      left: 40
    };
    var x = band().domain(range(data.length)).range([margin.left, width - margin.right]).padding(0.1);
    var y = linear$1().domain([0, max(data, function (d) {
      return d.value;
    })]).nice().range([height - margin.bottom, margin.top]);

    var xAxis = function xAxis(g) {
      return g.attr('transform', "translate(0," + (height - margin.bottom) + ")").call(axisBottom(x).tickFormat(function (i) {
        return data[i].name;
      }).tickSizeOuter(0)).attr('font-size', '1.8rem').attr('font-weight', '700');
    };
    /*
    const yAxis = g => g.attr('transform', `translate(${margin.left},0)`)
    	.call(axisLeft(y).ticks(null, data.format))
    	.call(g => g.select('.domain').remove())
    	.call(g => g.append('text')
    		.attr('x', -margin.left)
    		.attr('y', 10)
    		.attr('fill', 'currentColor')
    		.attr('text-anchor', 'start')
    		.text(data.y))
    */


    var svg = create('svg').attr('viewBox', [0, 0, width, height]);
    svg.append('g').attr('fill', color).selectAll('rect').data(data).join('rect').attr('rx', 4.5).attr('x', function (d, i) {
      return x(i);
    }).attr('width', x.bandwidth()).attr('y', function (d) {
      return y(d.value) + y(0) - y(d.value);
    }).transition().duration(450).ease(quadInOut).delay(function (d, i) {
      return i * 50;
    }).attr('y', function (d) {
      return y(d.value);
    }).attr('height', function (d) {
      return y(0) - y(d.value);
    });
    svg.append('g').attr('fill', color).selectAll('text').data(data).join('text').attr('dy', '.75em').attr('x', function (d, i) {
      return x(i) + x.bandwidth() / 2;
    }).attr('y', function (d) {
      return y(d.value) - 30;
    }).attr('opacity', '0').attr('text-anchor', 'middle').attr('font-size', '1.8rem').attr('font-weight', '700').text(function (d) {
      return format.replace('%', d.value);
    }).transition().duration(350).ease(quadInOut).delay(function (d, i) {
      return 450 + i * 50;
    }).attr('y', function (d) {
      return y(d.value) - 20;
    }).attr('opacity', '1');
    svg.append('g').call(xAxis);
    /*
    svg.append('g')
    	.call(yAxis);
    */

    return svg.node();
  };

  _createClass(ViewTextGraphComponent, [{
    key: "isVisible",
    get: function get() {
      var _getContext2 = rxcomp.getContext(this),
          node = _getContext2.node;

      var rect = node.getBoundingClientRect();
      return rect.left < window.innerWidth && rect.right > 0 && rect.top < window.innerHeight && rect.bottom > 0;
    }
  }]);

  return ViewTextGraphComponent;
}(rxcomp.Component);
ViewTextGraphComponent.meta = {
  selector: '[view-text-graph]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\" *if=\"item.image\">\n\t\t\t<img data-loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<!--\n\t\t<div class=\"circle\" [class]=\"{ dimmed: item.image }\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t-->\n\t\t<div class=\"container-fluid\" [class]=\"{ 'negative': item.image != null }\" >\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\" appear-stagger>\n\t\t\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"graph\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewTextLeftComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTextLeftComponent, _Component);

  function ViewTextLeftComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTextLeftComponent.prototype;

  _proto.onInit = function onInit() {// console.log('ViewTextLeftComponent');
  };

  return ViewTextLeftComponent;
}(rxcomp.Component);
ViewTextLeftComponent.meta = {
  selector: '[view-text-left]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\" *if=\"item.image\">\n\t\t\t<img data-loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<!--\n\t\t<div class=\"circle\" *if=\"!item.image\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t-->\n\t\t<div class=\"container-fluid\" [class]=\"{ 'negative': item.image != null }\" >\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\" appear-stagger>\n\t\t\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<ul class=\"listing--values\" appear-stagger *if=\"item.list && item.list.length\">\n\t\t\t\t\t\t<li class=\"listing__item\" *for=\"let listItem of item.list\"><span [innerHTML]=\"listItem.title\"></span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewTextMapComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTextMapComponent, _Component);

  function ViewTextMapComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTextMapComponent.prototype;

  _proto.onInit = function onInit() {// console.log('ViewTextMapComponent');
  }
  /*
  getStyle(pin) {
  	return { left: pin.x + '%', top: pin.y + '%' };
  }
  */
  ;

  return ViewTextMapComponent;
}(rxcomp.Component);
ViewTextMapComponent.meta = {
  selector: '[view-text-map]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<!--\n\t\t<div class=\"circle\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t-->\n\t\t<div class=\"background\" appear-stagger>\n\t\t\t<img data-loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t\t<div class=\"pin\" [style]=\"{ left: pin.x + '%', top: pin.y + '%' }\" *for=\"let pin of item.pins;\">\n\t\t\t\t<div class=\"title\" *if=\"pin.title\" [innerHTML]=\"pin.title\"></div>\n\t\t\t\t<div class=\"abstract\" *if=\"pin.abstract\" [innerHTML]=\"pin.abstract\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container-fluid\" appear-stagger>\n\t\t\t<div class=\"logo\" *if=\"item.logo\"><img [src]=\"item.logo\" /></div>\n\t\t\t<div class=\"title\" *if=\"item.title\" [innerHTML]=\"item.title\"></div>\n\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t</div>\n\t"
};var ViewTextRightComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTextRightComponent, _Component);

  function ViewTextRightComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTextRightComponent.prototype;

  _proto.onInit = function onInit() {// console.log('ViewTextRightComponent');
  };

  return ViewTextRightComponent;
}(rxcomp.Component);
ViewTextRightComponent.meta = {
  selector: '[view-text-right]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\" *if=\"item.image\">\n\t\t\t<img data-loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<!--\n\t\t<div class=\"circle\" [class]=\"{ dimmed: item.image }\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t-->\n\t\t<div class=\"container-fluid\" [class]=\"{ 'negative': item.image != null }\" >\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<ul class=\"listing--values\" appear-stagger *if=\"item.list && item.list.length\">\n\t\t\t\t\t\t<li class=\"listing__item\" *for=\"let listItem of item.list\"><span [innerHTML]=\"listItem.title\"></span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" appear-stagger>\n\t\t\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewTextTwoColsComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewTextTwoColsComponent, _Component);

  function ViewTextTwoColsComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewTextTwoColsComponent.prototype;

  _proto.onInit = function onInit() {// console.log('ViewTextTwoColsComponent');
  };

  return ViewTextTwoColsComponent;
}(rxcomp.Component);
ViewTextTwoColsComponent.meta = {
  selector: '[view-text-two-cols]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<div class=\"background\" *if=\"item.image\">\n\t\t\t<img data-loading=\"lazy\" [src]=\"item.image\" ondragstart=\"return false;\" />\n\t\t</div>\n\t\t<!--\n\t\t<div class=\"circle\" *if=\"!item.image\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t-->\n\t\t<div class=\"container-fluid\" [class]=\"{ 'negative': item.image != null }\" >\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\" appear-stagger>\n\t\t\t\t\t<div class=\"title\" [innerHTML]=\"item.title\"></div>\n\t\t\t\t\t<div class=\"abstract\" *if=\"item.abstract\" [innerHTML]=\"item.abstract\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\" appear-stagger>\n\t\t\t\t\t<div class=\"description\" *if=\"item.description\" [innerHTML]=\"item.description\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
};var ViewWelcomeComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ViewWelcomeComponent, _Component);

  function ViewWelcomeComponent() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ViewWelcomeComponent.prototype;

  _proto.onInit = function onInit() {// console.log('ViewWelcomeComponent');
  };

  return ViewWelcomeComponent;
}(rxcomp.Component);
ViewWelcomeComponent.meta = {
  selector: '[view-welcome]',
  inputs: ['item'],
  template:
  /* html */
  "\n\t\t<!--\n\t\t<div class=\"circle\">\n\t\t\t<img src=\"img/circle.png\" />\n\t\t</div>\n\t\t-->\n\t\t<div class=\"logo\">\n\t\t\t<img src=\"img/logo-lg.png\" />\n\t\t</div>\n\t"
};var AppModule = /*#__PURE__*/function (_Module) {
  _inheritsLoose(AppModule, _Module);

  function AppModule() {
    return _Module.apply(this, arguments) || this;
  }

  return AppModule;
}(rxcomp.Module);
AppModule.meta = {
  imports: [rxcomp.CoreModule],
  declarations: [AppearStaggerDirective, FlagPipe, FooterMenuComponent, SliderComponent, SliderMainComponent, SliderVerticalComponent, SliderGalleryComponent, SliderHeroComponent, ViewClientsComponent, ViewGroupComponent, ViewSuiteComponent, ViewTabsComponent, ViewTextCenterComponent, ViewTextGraphComponent, ViewTextLeftComponent, ViewTextMapComponent, ViewTextRightComponent, ViewTextTwoColsComponent, ViewWelcomeComponent],
  bootstrap: AppComponent
};rxcomp.Browser.bootstrap(AppModule);})));