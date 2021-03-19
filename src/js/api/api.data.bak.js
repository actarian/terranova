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
		"title": "Chi Siamo"/*,
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
			],
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
			],
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
	}],
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
					"logo": "img/logos/suite-reti-1-1.png",
				}, {
					"x": 0,
					"y": 0,
					"color": "#ffffff",
					"title": "Reti Wfa",
					"logo": "img/logos/suite-reti-1-2.png",
				}, {
					"x": 0,
					"y": 0,
					"color": "#ffffff",
					"title": "Reti Energia",
					"logo": "img/logos/suite-reti-1-3.png",
				}]
			}]
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
	"pins": [
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Acsm Agam", "logo": "img/suite/reti/clienti/acsm agam.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Adrigas", "logo": "img/suite/reti/clienti/adrigas.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Aemme Linea Distribuzione", "logo": "img/suite/reti/clienti/aemme-linea-distribuzione.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Amag Reti Gas", "logo": "img/suite/reti/clienti/amag reti gas.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Amc", "logo": "img/suite/reti/clienti/amc.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "AP Reti Gas Nordest", "logo": "img/suite/reti/clienti/ap reti gas nordest.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "AP Reti Gas Rovigo", "logo": "img/suite/reti/clienti/ap reti gas rovigo.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "AP Reti Gas Vicenza", "logo": "img/suite/reti/clienti/ap reti gas vicenza.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "AP Reti Gas", "logo": "img/suite/reti/clienti/ap reti gas.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Aquamet", "logo": "img/suite/reti/clienti/aquamet.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Asm Vigevano", "logo": "img/suite/reti/clienti/asm vigevano.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Asmt", "logo": "img/suite/reti/clienti/asmt.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Atr", "logo": "img/suite/reti/clienti/atr.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Azienda Energetica Valtellina Valchiavenna", "logo": "img/suite/reti/clienti/azienda energetica valtellina valchiavenna.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Blu Reti Gas", "logo": "img/suite/reti/clienti/blu reti gas.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Cbl Distribuzione Srl", "logo": "img/suite/reti/clienti/cbl distribuzione srl.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Centria Reti Gas", "logo": "img/suite/reti/clienti/centria reti gas.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Cosvim", "logo": "img/suite/reti/clienti/cosvim.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Cps", "logo": "img/suite/reti/clienti/cps.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Dea Distribuzione Elettrica Adriatica", "logo": "img/suite/reti/clienti/dea distribuzione elettrica adriatica.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Dgn", "logo": "img/suite/reti/clienti/dgn.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "E-Dyna", "logo": "img/suite/reti/clienti/e-dyna.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "E", "logo": "img/suite/reti/clienti/e.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Edilgas", "logo": "img/suite/reti/clienti/edilgas.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Edma Reti Gas", "logo": "img/suite/reti/clienti/edma reti gas.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Gei", "logo": "img/suite/reti/clienti/gei.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Gigas Rete", "logo": "img/suite/reti/clienti/gigas rete.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Gp Infrastrutture", "logo": "img/suite/reti/clienti/gp infrastrutture.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Gruppo Erogasmet", "logo": "img/suite/reti/clienti/gruppo erogasmet.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Gruppo Gesam", "logo": "img/suite/reti/clienti/gruppo gesam.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Infrastrutture Distribuzione Gas", "logo": "img/suite/reti/clienti/infrastrutture distribuzione gas.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "IReti", "logo": "img/suite/reti/clienti/ireti.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Linea Ri", "logo": "img/suite/reti/clienti/linea ri.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "M Reti", "logo": "img/suite/reti/clienti/m reti.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Mediterranea", "logo": "img/suite/reti/clienti/mediterranea.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Megareti", "logo": "img/suite/reti/clienti/megareti.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Meta Edil", "logo": "img/suite/reti/clienti/meta edil.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Mn", "logo": "img/suite/reti/clienti/mn.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Pescara Distribuzione Gas", "logo": "img/suite/reti/clienti/pescara distribuzione gas.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Prealpi Gas", "logo": "img/suite/reti/clienti/prealpi gas.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Reti Distribuzione", "logo": "img/suite/reti/clienti/reti distribuzione.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Reti Metano Territorio", "logo": "img/suite/reti/clienti/reti metano territorio.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Reti Più", "logo": "img/suite/reti/clienti/reti-più.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Salerno Energia Holding", "logo": "img/suite/reti/clienti/salerno energia holding.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Sar", "logo": "img/suite/reti/clienti/sar.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Società Impianti Metano", "logo": "img/suite/reti/clienti/società impianti metano.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Stadtwerke Asm", "logo": "img/suite/reti/clienti/stadtwerke asm.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Tea Sei", "logo": "img/suite/reti/clienti/tea sei.png" },
		{ "x": Math.random() * 1920 / 1920 * 100, "y": (400 + Math.random() * 710) / 1110 * 100, "title": "Tecniconsul", "logo": "img/suite/reti/clienti/tecni consul.png" }
	]
}];
