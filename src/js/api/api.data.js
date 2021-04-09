export const Templates = {
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
	Welcome: "welcome",
}

export const DATA = [{
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
		"title": "Chi Siamo",
		"image": "img/01-chi-siamo/slide-01-00.jpg"
	}, {
		"id": 22,
		"template": Templates.TextLeft,
		"name": "Core Values",
		"title": "Core Values",
		"abstract": "<p>I nostri Core Value tramandano la nostra cultura e definiscono il carattere della nostra Azienda.</p><p>Ogni giorno guidano il modo in cui ci comportiamo e con cui prendiamo decisioni.</p>",
		"image": "img/01-chi-siamo/slide-01-01.jpg",
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
		"image": "img/01-chi-siamo/slide-01-02.jpg"
	}, {
		"id": 24,
		"template": Templates.TextCenter,
		"name": "La nostra vision",
		"title": "La nostra vision",
		"abstract": "Diventare uno dei Leader del mercato, fornendo prodotti flessibili e integrati che anticipano le esigenze dei nostri Clienti sfruttando lo straordinario know how delle nostre persone.",
		"image": "img/01-chi-siamo/slide-01-03.jpg"
	}, {
		"id": 25,
		"template": Templates.TextGraph,
		"name": "Persone",
		"title": "Persone",
		"abstract": "Il nostro Presente ed il nostro Futuro.",
		"description": "<p>330 risorse in 10 sedi lavorano insieme per sviluppare e migliorare il prodotto leader per le aziende di Distribuzione e Vendita di Gas ed Energia Elettrica, per il Servizio Idrico, per l’Ambiente e in progetti di Smart Network.</p><p>248 area tecnica funzionale.</p><p>82 management e staff.</p>",
		"graph": {
			"format": "%",
			"url": "data/persone.csv",
			/*
			"data": [
				{ "name": '2009', "value": 25 },
				{ "name": '2010', "value": 39 },
				{ "name": '2011', "value": 69 },
				{ "name": '2012', "value": 85 },
				{ "name": '2013', "value": 97 },
				{ "name": '2014', "value": 111 },
				{ "name": '2015', "value": 125 },
				{ "name": '2016', "value": 220 },
				{ "name": '2017', "value": 250 },
				{ "name": '2018', "value": 260 },
				{ "name": '2019', "value": 305 },
				{ "name": '2020', "value": 330 }
			]
			*/
		}
	}, {
		"id": 26,
		"template": Templates.TextGraph,
		"name": "Fatturato",
		"title": "La crescita",
		"abstract": "Negli ultimi anni, Terranova ha avuto una crescita costante sia in fatturato che in numero di risorse.",
		"description": "<p>Fatturato di oltre € 41 milioni<br>con Ambiente.it e Arcoda per l’anno fiscale 2020.</p>",
		"graph": {
			"format": "%M",
			"url": "data/fatturato.csv",
			/*
			"data": [
				{ "name": '2010', "value": 6 },
				{ "name": '2011', "value": 9 },
				{ "name": '2012', "value": 11 },
				{ "name": '2013', "value": 12 },
				{ "name": '2014', "value": 13 },
				{ "name": '2015', "value": 16 },
				{ "name": '2016', "value": 20 },
				{ "name": '2017', "value": 27 },
				{ "name": '2018', "value": 29 },
				{ "name": '2019', "value": 36 },
				{ "name": '2020', "value": 41 }
			]
			*/
		}
	}, {
		"id": 27,
		"template": Templates.TextMap,
		"name": "Le Sedi",
		"title": "Le Sedi",
		"abstract": "Presenti in Italia, Cina, Regno Unito e Uzbekistan.",
		"image": "img/maps/eurasia.png",
		"pins": [{
			"x": 9.84375,
			"y": 36.58823529,
			"title": "Regno Unito",
			"abstract": "Birmingham"
		}, {
			"x": 19.47916667,
			"y": 47.52941176,
			"title": "Italia",
			"abstract": "HQ Firenze<br>Grosseto, Milano, Verona, Roma, Trento, Mestre"
		}, {
			"x": 47.03125,
			"y": 41.17647059,
			"title": "Uzbekistan",
			"abstract": "Tashkent"
		}, {
			"x": 86.82291667,
			"y": 50.70588235,
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
		"image": "img/01-chi-siamo/slide-01-07.jpg",
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
	}],
}, {
	"id": 3,
	"template": Templates.Group,
	"name": "I Partners",
	"items": [{
		"id": 31,
		"template": Templates.TextCenter,
		"name": "I partners",
		"title": "I partners",
		"image": "img/02-i-partners/slide-02-00.jpg"
	}, {
		"id": 32,
		"template": Templates.TextLeft,
		"name": "Pietro Fiorentini è partner di Terranova",
		"title": "Pietro Fiorentini è partner di Terranova",
		"abstract": "Dal 2011 385€ Milioni di fatturato e 74€ Milioni EBITDA.",
		"logo": "img/loghi/partners/pietro-fiorentini.png"
	}, {
		"id": 33,
		"template": Templates.TextMap,
		"name": "Pietro Fiorentini nel mondo",
		"logo": "img/loghi/partners/pietro-fiorentini.png",
		"image": "img/maps/world.png",
		"pins": []
	}, {
		"id": 34,
		"template": Templates.TextLeft,
		"name": "Arcoda",
		"title": "Terranova è partner di Arcoda",
		"abstract": "di cui detiene il 60% del capitale",
		"logo": "img/loghi/partners/arcoda.png",
		"description": "Arcoda sviluppa soluzioni tecnologiche vincenti, progettate per chi è chiamato a gestire quotidianamente forza lavoro sul territorio."
	}, {
		"id": 35,
		"template": Templates.TextLeft,
		"name": "Ambiente.it",
		"title": "Terranova è partner di Ambiente.it",
		"abstract": "di cui detiene il 60% del capitale",
		"logo": "img/loghi/partners/ambiente.it.png",
		"description": "<p>Ambiente.it da quasi trent’anni sviluppa software gestionali ed eroga servizi professionali per la filiera dei rifiuti speciali e urbani.</p><p>Si propone al mercato con un servizio completo per la informatizzazione gestionale di tutte le problematiche ambientali, offrendo ai propri clienti soluzioni software, informazione, formazione, consulenza e assistenza.</p><p>Ambiente.it supporta oltre mille clienti in tutta Italia; è presente in grandi realtà industriali così come nei Consorzi e nelle Utility di igiene urbana, ed in centinaia di medie e piccole imprese in tutta Italia, con migliaia di utenti che utilizzano giornalmente i suoi software.</p>"
	}/*, {
		"id": 32,
		"template": Templates.TextMap,
		"name": "Pietro Fiorentini",
		"logo": "img/loghi/partners/pietro-fiorentini.png",
		"title": "È partner di Terranova dal 2011",
		"abstract": "385€ Milioni di fatturato 74€ Milioni EBITDA.",
		"image": "img/maps/world.png",
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
	}*/]
}, {
	"id": 4,
	"template": Templates.Group,
	"name": "Soluzioni",
	"items": [{
		"id": 41,
		"template": Templates.TextCenter,
		"name": "Soluzioni",
		"title": "Soluzioni",
		"image": "img/03-le-soluzioni/slide-03-00.jpg"
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
			"description": "Negli ultimi anni, inoltre, Terranova ha investito ingenti risorse nello sviluppo di soluzioni a supporto dell’area operations, delle attività di manutenzione, della cartografia e dell’automazione delle squadre di lavoro (Work Force Automation).",
			// "image": "img/03-le-soluzioni/slide-03-01-01.jpg"
		}, {
			"id": 422,
			"template": Templates.Suite,
			"name": "Suite Reti",
			"title": "Suite Reti",
			"suite": {
				"title": "Suite<b>Reti</b>",
				"logo": "img/logos/suite-reti-1.png",
				"items": [{
					"x": 0.3,
					"y": 0.2,
					"color": "#0f53a1",
					"title": "Reti<b>Acqua</b>",
					"logo": "img/logos/suite-reti-1-1.png",
				}, {
					"x": 0.3,
					"y": 0.4,
					"color": "#724b7b",
					"title": "Reti<b>Wfa</b>",
					"logo": "img/logos/suite-reti-1-2.png",
				}, {
					"x": 0.3,
					"y": 0.6,
					"color": "#e31d2b",
					"title": "Reti<b>Energia</b>",
					"logo": "img/logos/suite-reti-1-3.png",
				}, {
					"x": 0.3,
					"y": 0.8,
					"color": "#d43b2d",
					"title": "Reti<b>Idm</b>",
					"logo": "img/logos/suite-reti-1-3.png",
				}, {
					"x": 0.7,
					"y": 0.2,
					"color": "#5abdeb",
					"title": "Reti<b>Gas</b>",
					"logo": "img/logos/suite-reti-1-3.png",
				}, {
					"x": 0.7,
					"y": 0.4,
					"color": "#94d4d4",
					"title": "Reti<b>Cdm</b>",
					"logo": "img/logos/suite-reti-1-3.png",
				}, {
					"x": 0.7,
					"y": 0.6,
					"color": "#a4cd4b",
					"title": "Reti<b>Bi</b>",
					"logo": "img/logos/suite-reti-1-3.png",
				}, {
					"x": 0.7,
					"y": 0.8,
					"color": "#c5af32",
					"title": "Reti<b>Map</b>",
					"logo": "img/logos/suite-reti-1-3.png",
				}]
			}
		}, {
			"id": 423,
			"template": Templates.Clients,
			"name": "Clienti",
			"title": "Clienti",
			"abstract": "Le nostre referenze",
			"clients": [
				{ "title": "Acsm Agam", "logo": "img/suite/reti/clienti/acsm agam.png" },
				{ "title": "Adrigas", "logo": "img/suite/reti/clienti/adrigas.png" },
				{ "title": "Aemme Linea Distribuzione", "logo": "img/suite/reti/clienti/aemme-linea-distribuzione.png" },
				{ "title": "Amag Reti Gas", "logo": "img/suite/reti/clienti/amag reti gas.png" },
				{ "title": "Amc", "logo": "img/suite/reti/clienti/amc.png" },
				{ "title": "AP Reti Gas Nordest", "logo": "img/suite/reti/clienti/ap reti gas nordest.png" },
				{ "title": "AP Reti Gas Rovigo", "logo": "img/suite/reti/clienti/ap reti gas rovigo.png" },
				{ "title": "AP Reti Gas Vicenza", "logo": "img/suite/reti/clienti/ap reti gas vicenza.png" },
				{ "title": "AP Reti Gas", "logo": "img/suite/reti/clienti/ap reti gas.png" },
				{ "title": "Aquamet", "logo": "img/suite/reti/clienti/aquamet.png" },
				{ "title": "Asm Vigevano", "logo": "img/suite/reti/clienti/asm vigevano.png" },
				{ "title": "Asmt", "logo": "img/suite/reti/clienti/asmt.png" },
				{ "title": "Atr", "logo": "img/suite/reti/clienti/atr.png" },
				{ "title": "Azienda Energetica Valtellina Valchiavenna", "logo": "img/suite/reti/clienti/azienda energetica valtellina valchiavenna.png" },
				{ "title": "Blu Reti Gas", "logo": "img/suite/reti/clienti/blu reti gas.png" },
				{ "title": "Cbl Distribuzione Srl", "logo": "img/suite/reti/clienti/cbl distribuzione srl.png" },
				{ "title": "Centria Reti Gas", "logo": "img/suite/reti/clienti/centria reti gas.png" },
				{ "title": "Cosvim", "logo": "img/suite/reti/clienti/cosvim.png" },
				{ "title": "Cps", "logo": "img/suite/reti/clienti/cps.png" },
				{ "title": "Dea Distribuzione Elettrica Adriatica", "logo": "img/suite/reti/clienti/dea distribuzione elettrica adriatica.png" },
				{ "title": "Dgn", "logo": "img/suite/reti/clienti/dgn.png" },
				{ "title": "E-Dyna", "logo": "img/suite/reti/clienti/e-dyna.png" },
				{ "title": "E", "logo": "img/suite/reti/clienti/e.png" },
				{ "title": "Edilgas", "logo": "img/suite/reti/clienti/edilgas.png" },
				{ "title": "Edma Reti Gas", "logo": "img/suite/reti/clienti/edma reti gas.png" },
				{ "title": "Gei", "logo": "img/suite/reti/clienti/gei.png" },
				{ "title": "Gigas Rete", "logo": "img/suite/reti/clienti/gigas rete.png" },
				{ "title": "Gp Infrastrutture", "logo": "img/suite/reti/clienti/gp infrastrutture.png" },
				{ "title": "Gruppo Erogasmet", "logo": "img/suite/reti/clienti/gruppo erogasmet.png" },
				{ "title": "Gruppo Gesam", "logo": "img/suite/reti/clienti/gruppo gesam.png" },
				{ "title": "Infrastrutture Distribuzione Gas", "logo": "img/suite/reti/clienti/infrastrutture distribuzione gas.png" },
				{ "title": "IReti", "logo": "img/suite/reti/clienti/ireti.png" },
				{ "title": "Linea Ri", "logo": "img/suite/reti/clienti/linea ri.png" },
				{ "title": "M Reti", "logo": "img/suite/reti/clienti/m reti.png" },
				{ "title": "Mediterranea", "logo": "img/suite/reti/clienti/mediterranea.png" },
				{ "title": "Megareti", "logo": "img/suite/reti/clienti/megareti.png" },
				{ "title": "Meta Edil", "logo": "img/suite/reti/clienti/meta edil.png" },
				{ "title": "Mn", "logo": "img/suite/reti/clienti/mn.png" },
				{ "title": "Pescara Distribuzione Gas", "logo": "img/suite/reti/clienti/pescara distribuzione gas.png" },
				{ "title": "Prealpi Gas", "logo": "img/suite/reti/clienti/prealpi gas.png" },
				{ "title": "Reti Distribuzione", "logo": "img/suite/reti/clienti/reti distribuzione.png" },
				{ "title": "Reti Metano Territorio", "logo": "img/suite/reti/clienti/reti metano territorio.png" },
				{ "title": "Reti Più", "logo": "img/suite/reti/clienti/reti-più.png" },
				{ "title": "Salerno Energia Holding", "logo": "img/suite/reti/clienti/salerno energia holding.png" },
				{ "title": "Sar", "logo": "img/suite/reti/clienti/sar.png" },
				{ "title": "Società Impianti Metano", "logo": "img/suite/reti/clienti/società impianti metano.png" },
				{ "title": "Stadtwerke Asm", "logo": "img/suite/reti/clienti/stadtwerke asm.png" },
				{ "title": "Tea Sei", "logo": "img/suite/reti/clienti/tea sei.png" },
				{ "title": "Tecniconsul", "logo": "img/suite/reti/clienti/tecni consul.png" }
			]
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
		}, {
			"id": 432,
			"template": Templates.Suite,
			"name": "Suite Smart Network",
			"title": "Suite Smart Network",
			"suite": {
				"title": "T<b>SN</b>",
				"items": [{
					"x": 0.3,
					"y": 0.2,
					"color": "#0f53a1",
					"title": "T<b>SG</b>",
					"abstract": "La soluzione per la gestione delle smart grid"
				}, {
					"x": 0.3,
					"y": 0.4,
					"color": "#724b7b",
					"title": "T<b>PS</b>",
					"abstract": "La soluzione per la gestione del prepagamento"
				}, {
					"x": 0.3,
					"y": 0.6,
					"color": "#e31d2b",
					"title": "T<b>AMM</b>",
					"abstract": "La soluzione per la telelettura e telegestione degli smart meter"
				}, {
					"x": 0.3,
					"y": 0.8,
					"color": "#5abdeb",
					"title": "T<b>WFM</b>",
					"abstract": "La soluzione per l’automazione delle squadre"
				}, {
					"x": 0.7,
					"y": 0.2,
					"color": "#94d4d4",
					"title": "Mbus<b>Library</b>"
				}, {
					"x": 0.7,
					"y": 0.3,
					"color": "#94d4d4",
					"title": "Sml<b>Library</b>"
				}, {
					"x": 0.7,
					"y": 0.4,
					"color": "#94d4d4",
					"title": "Dlms<b>Library</b>",
					"abstract": "La soluzione smart per implementare i protocolli di comunicazione"
				}, {
					"x": 0.7,
					"y": 0.6,
					"color": "#a4cd4b",
					"title": "T<b>SL</b>",
					"abstract": "La soluzione smart per l’illuminazione pubblica"
				}, {
					"x": 0.7,
					"y": 0.8,
					"color": "#a4cd4b",
					"title": "T<b>AMM Mobile</b>",
					"abstract": "La soluzione per la gestione on site degli smart meter"
				}]
			}
		}, {
			"id": 433,
			"template": Templates.Clients,
			"name": "Clienti",
			"title": "Clienti",
			"abstract": "Le nostre referenze",
			"clients": [
				{ "title": "Logo", "logo": "img/suite/reti/clienti/acsm agam.png" },
			]
		}]
	}, {
		"id": 44,
		"template": Templates.Tabs,
		"name": "Vendita",
		"items": [{
			"id": 441,
			"template": Templates.TextLeft,
			"name": "Vendita",
			"title": "Vendita",
			"abstract": "Terranova supporta società di Vendita, retail ed i grossisti, con una soluzione completa per CRM e Billing.",
			"description": "La nostra suite per il Mercato della Vendita ha un obiettivo chiaro e concreto: individuare sempre nuove soluzioni e strumenti digitali per consentire ai nostri Clienti di differenziarsi dai propri competitors. Una condizione necessaria per rispondere alle dinamiche di un mercato in movimento continuo."
		}, {
			"id": 442,
			"template": Templates.Suite,
			"name": "Suite per la vendita",
			"title": "Suite per la vendita",
			"suite": {
				"title": "4<b>Utility</b>",
				"items": [{
					"x": 0.3,
					"y": 0.2,
					"color": "#0f53a1",
					"title": "Customer<b>Next</b>",
				}, {
					"x": 0.3,
					"y": 0.35,
					"color": "#724b7b",
					"title": "<b>Trimp</b>",
				}, {
					"x": 0.3,
					"y": 0.5,
					"color": "#e31d2b",
					"title": "<b>Payments</b>",
				}, {
					"x": 0.3,
					"y": 0.65,
					"color": "#5abdeb",
					"title": "TC2<b>Next</b>",
				}, {
					"x": 0.3,
					"y": 0.8,
					"color": "#5abdeb",
					"title": "Partner<b>Next</b>",
				}, {
					"x": 0.7,
					"y": 0.2,
					"color": "#94d4d4",
					"title": "Datamax<b>Next</b>",
				}, {
					"x": 0.7,
					"y": 0.35,
					"color": "#a4cd4b",
					"title": "<b>Lybra</b>",
				}, {
					"x": 0.7,
					"y": 0.5,
					"color": "#a4cd4b",
					"title": "<b>Bit</b>",
				}, {
					"x": 0.7,
					"y": 0.65,
					"color": "#a4cd4b",
					"title": "4<b>Cash</b>",
				}, {
					"x": 0.7,
					"y": 0.8,
					"color": "#a4cd4b",
					"title": "Reseller<b>Next</b>",
				}]
			}
		}, {
			"id": 443,
			"template": Templates.Clients,
			"name": "Clienti",
			"title": "Clienti",
			"abstract": "Le nostre referenze",
			"clients": [
				{ "title": "Logo", "logo": "img/suite/reti/clienti/acsm agam.png" },
			]
		}]
	}, {
		"id": 45,
		"template": Templates.Tabs,
		"name": "Settore Idrico",
		"items": [{
			"id": 451,
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
		}, {
			"id": 452,
			"template": Templates.Suite,
			"name": "Reti Acqua",
			"title": "Reti Acqua",
			"suite": {
				"title": "Reti<b>Acqua</b>",
				"items": [{
					"x": 0.3,
					"y": 0.2,
					"color": "#0f53a1",
					"title": "Reti<b>Channel</b>",
				}, {
					"x": 0.3,
					"y": 0.4,
					"color": "#724b7b",
					"title": "Reti<b>Bi</b>",
				}, {
					"x": 0.3,
					"y": 0.6,
					"color": "#e31d2b",
					"title": "Reti<b>Wfa</b>",
				}, {
					"x": 0.7,
					"y": 0.2,
					"color": "#5abdeb",
					"title": "Reti<b>Amm</b>",
				}, {
					"x": 0.7,
					"y": 0.4,
					"color": "#5abdeb",
					"title": "Reti<b>Amm Mobile</b>",
				}, {
					"x": 0.7,
					"y": 0.6,
					"color": "#94d4d4",
					"title": "Reti<b>SmartGrid</b>",
				}, {
					"x": 0.7,
					"y": 0.8,
					"color": "#a4cd4b",
					"title": "Reti<b>Map</b>",
				}]
			}
		}, {
			"id": 453,
			"template": Templates.Clients,
			"name": "Clienti",
			"title": "Clienti",
			"abstract": "Le nostre referenze",
			"clients": [
				{ "title": "Logo", "logo": "img/suite/reti/clienti/acsm agam.png" },
			]
		}]
	}, {
		"id": 46,
		"template": Templates.Tabs,
		"name": "Gestione Ambientale",
		"items": [{
			"id": 461,
			"template": Templates.TextLeft,
			"name": "Gestione Ambientale",
			"title": "Gestione Ambientale",
			"abstract": "Una gamma completa di soluzioni software per soddisfare le esigenze di tutta la filiera della gestione dei rifiuti.",
			"description": "<p>La suite ECOS è una collana di moduli software, sempre aggiornati secondo le normative vigenti, progettata per l’informatizzazione dei processi gestionali di tutte le aziende della filiera ambientale.</p>"
		}, {
			"id": 462,
			"template": Templates.Suite,
			"name": "La Suite Ecos",
			"title": "La Suite Ecos",
			"suite": {
				"title": "Suite<b>Ecos</b>",
				"items": [{
					"x": 0.3,
					"y": 0.2,
					"color": "#0f53a1",
					"title": "<b>Commerciale Amministratico e Fatturazione</b>"
				}, {
					"x": 0.3,
					"y": 0.35,
					"color": "#724b7b",
					"title": "<b>Logistica</b>"
				}, {
					"x": 0.3,
					"y": 0.5,
					"color": "#e31d2b",
					"title": "<b>Sicurezza e Tools</b>"
				}, {
					"x": 0.3,
					"y": 0.65,
					"color": "#5abdeb",
					"title": "<b>Digitalizzazione</b>"
				}, {
					"x": 0.3,
					"y": 0.8,
					"color": "#94d4d4",
					"title": "<b>Movimentazione e Automazione Impianti</b>"
				}, {
					"x": 0.7,
					"y": 0.2,
					"color": "#94d4d4",
					"title": "<b>Tariffa</b>"
				}, {
					"x": 0.7,
					"y": 0.35,
					"color": "#94d4d4",
					"title": "<b>Crm</b>"
				}, {
					"x": 0.7,
					"y": 0.5,
					"color": "#a4cd4b",
					"title": "<b>Verticali</b>"
				}, {
					"x": 0.7,
					"y": 0.65,
					"color": "#a4cd4b",
					"title": "<b>Web</b>"
				}, {
					"x": 0.7,
					"y": 0.8,
					"color": "#a4cd4b",
					"title": "<b>Highlights</b>"
				}]
			}
		}, {
			"id": 463,
			"template": Templates.Clients,
			"name": "Clienti",
			"title": "Clienti",
			"abstract": "Le nostre referenze",
			"clients": [
				{ "title": "Logo", "logo": "img/suite/reti/clienti/acsm agam.png" },
			]
		}]
	}]
}, {
	"id": 5,
	"template": Templates.TextMap,
	"name": "Clienti",
	"title": "Clienti",
	"abstract": "I nostri principali Clienti nel Mondo",
	"image": "img/maps/world.png",
	"pinMode": "over",
	"pins": [
		{ "x": 49.47916667, "y": 21.75, "title": "Ace Gas", "logo": "img/loghi/clients/acegas.png" },
		{ "x": 43.02083333, "y": 25, "title": "Aclara", "logo": "img/loghi/clients/aclara.png" },
		{ "x": 52.29166667, "y": 23.625, "title": "Aem", "logo": "img/loghi/clients/aem.png" },
		{ "x": 47.70833333, "y": 24.125, "title": "Centria Gas", "logo": "img/loghi/clients/centria-gas.png" },
		{ "x": 44.32291667, "y": 18.875, "title": "Data Communication Company", "logo": "img/loghi/clients/data-communication-company.png" },
		{ "x": 47.65625, "y": 18.875, "title": "Devolo Network", "logo": "img/loghi/clients/devolo-network.png" },
		/*
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Devolo", "logo": "img/loghi/clients/devolo.png" },
		*/
		{ "x": 77.55208333, "y": 50.375, "title": "Edmi", "logo": "img/loghi/clients/edmi.png" },
		{ "x": 48.33333333, "y": 25, "title": "Enel", "logo": "img/loghi/clients/enel.png" },
		{ "x": 47.5, "y": 22.75, "title": "Erogasmet", "logo": "img/loghi/clients/erogasmet.png" },
		{ "x": 50.83333333, "y": 18, "title": "Eso", "logo": "img/loghi/clients/eso.png" },
		{ "x": 49.63541667, "y": 25.875, "title": "Gas Rete", "logo": "img/loghi/clients/gas-rete.png" },
		{ "x": 46.04166667, "y": 20.625, "title": "Grdf", "logo": "img/loghi/clients/grdf.png" },
		{ "x": 79.16666667, "y": 34.5, "title": "Holley", "logo": "img/loghi/clients/holley.png" },
		{ "x": 61.51041667, "y": 27.5, "title": "Hudugazta Minot", "logo": "img/loghi/clients/hudugazta-minot.png" },
		{ "x": 48.22916667, "y": 20.875, "title": "Infrastrutture Distribuzione Gas", "logo": "img/loghi/clients/infrastrutture-distribuzione-gas.png" },
		{ "x": 46.40625, "y": 23.625, "title": "IReti", "logo": "img/loghi/clients/ireti.png" },
		{ "x": 55.10416667, "y": 27.125, "title": "Kohler", "logo": "img/loghi/clients/kohler.png" },
		{ "x": 43.64583333, "y": 18.375, "title": "Landis Gyr", "logo": "img/loghi/clients/landis-gyr.png" },
		{ "x": 48.54166667, "y": 22, "title": "Megareti", "logo": "img/loghi/clients/megareti.png" },
		/*
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Metrogas", "logo": "img/loghi/clients/metrogas-2.png" },
		*/
		{ "x": 23.22916667, "y": 70, "title": "Metrogas", "logo": "img/loghi/clients/metrogas.png" },
		{ "x": 42.1875, "y": 26.625, "title": "Naturgy", "logo": "img/loghi/clients/naturgy.png" },
		/*
		{ "x": 0, "y": 0, "title": "Pietro Fiorentini", "logo": "img/loghi/clients/pietro-fiorentini.png" },
		*/
		{ "x": 47.13541667, "y": 23.25, "title": "RetiPiù", "logo": "img/loghi/clients/retipiu.png" },
		{ "x": 80.52083333, "y": 33.375, "title": "Shangai Fiorentini", "logo": "img/loghi/clients/shangai-fiorentini.png" },
		{ "x": 53.4375, "y": 22.375, "title": "Texnopark", "logo": "img/loghi/clients/texnopark.png" },
		{ "x": 44.89583333, "y": 19.75, "title": "Toshiba", "logo": "img/loghi/clients/toshiba.png" },
		{ "x": 81.40625, "y": 32.375, "title": "XXX", "logo": "img/loghi/clients/xxx.png" },
		{ "x": 79.16666667, "y": 27.125, "title": "YYY", "logo": "img/loghi/clients/yyy.png" },
	]
}];
