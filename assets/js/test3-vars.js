

var categories = {
  EssenTrinken: ["migros", "coop", "prima","restaurant","rest","denner","confiseur","pastarazi","avia","burger","nespresso", "hotel", "aldi", "drinks","ristorante", "mcdonalds", "wirtshaus" ],
  Wohnen: ["miete", "ikea"],
  Bargeld: ["bancomat", "twint", "paymit", "six" ],
  VersicherungenVorsorge: ["progres", "helsana","vorsorge"],
  Shopping: ["we","textil"],
  Haushalt: ["bilag", "haushaltskonto", "gemeinsames"],
  Reisen: ["ferien"],
  Steuern: ["steuern", "steueramt"],
  FreizeitHobby: ["vonmoos", "digitec","metanet","sportcenter","kino", "data", "tennisclub"],
  Mobilitaet: ["vbl","migrol","velociped", "veloplus", "tamoil", "benzin", "metz", "shell"],
  GesundheitKoerper: ["coiffure","apotheke", "praxis"],
};



var bookings =[
  {
    "Buchungsdatum": "24.01.2017",
    "Valuta": "23.01.2017",
    "Buchungstext": "Warenbezug/Dienstleistung / 761623271",
    "Details": "Bezugsort: VONMOOS, SPORT + HOB\nTransaktionsdatum: 23.01.17 / 13:04:13\nKarten-Nr.: 76809406\nBetrag: CHF 29.10",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 29.1,
    "Saldo": 3433.8
  },
  {
    "Buchungsdatum": "24.01.2017",
    "Valuta": "23.01.2017",
    "Buchungstext": "Warenbezug/Dienstleistung / 761619994",
    "Details": "Bezugsort: VOCO AG\nTransaktionsdatum: 23.01.17 / 12:39:02\nKarten-Nr.: 76809406\nBetrag: CHF 37.10",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 37.1,
    "Saldo": 3462.9
  },
  {
    "Buchungsdatum": "23.01.2017",
    "Valuta": "23.01.2017",
    "Buchungstext": "Belastung Dauerauftrag / 761245709",
    "Details": "Geldübertrag\nReto Schürmann\nLauerzweg 5\n6010 Kriens\nInfo:Saldomanager",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 3157.2,
    "Saldo": 3500
  },
  {
    "Buchungsdatum": "20.01.2017",
    "Valuta": "20.01.2017",
    "Buchungstext": "Gutschrift / 760416578",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nOWKB",
    "Betrag Detail": "",
    "Gutschrift": 900,
    "Belastung": "",
    "Saldo": 6657.2
  },
  {
    "Buchungsdatum": "20.01.2017",
    "Valuta": "20.01.2017",
    "Buchungstext": "Gutschrift / 760365400",
    "Details": "Luzerner Kantonalbank AG\nFinanzen\nPilatusstrasse 12\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 5757.2
  },
  {
    "Buchungsdatum": "20.01.2017",
    "Valuta": "20.01.2017",
    "Buchungstext": "Belastung Dauerauftrag / 760335645",
    "Details": "Geldübertrag\nReto Schürmann\nLauerzweg 5\n6010 Kriens\nInfo:Vorsorge",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 757.2
  },
  {
    "Buchungsdatum": "19.01.2017",
    "Valuta": "18.01.2017",
    "Buchungstext": "Warenbezug/Dienstleistung / 760069950",
    "Details": "Bezugsort: WE MEN\nTransaktionsdatum: 18.01.17 / 18:27:27\nKarten-Nr.: 76809406\nBetrag: CHF 59.95",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 59.95,
    "Saldo": 1057.2
  },
  {
    "Buchungsdatum": "17.01.2017",
    "Valuta": "16.01.2017",
    "Buchungstext": "Warenbezug/Dienstleistung / 759522082",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 16.01.17 / 11:37:55\nKarten-Nr.: 76809406\nBetrag: CHF 100.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 100,
    "Saldo": 1117.15
  },
  {
    "Buchungsdatum": "16.01.2017",
    "Valuta": "16.01.2017",
    "Buchungstext": "Vergütung / 759511442",
    "Details": "Priska Herzog\nLauerzweg 5\n6010 Kriens",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 1187,
    "Saldo": 1217.15
  },
  {
    "Buchungsdatum": "16.01.2017",
    "Valuta": "16.01.2017",
    "Buchungstext": "Einzahlung Bancomat Münzen / 759510544",
    "Details": "Luzern 502   16.01.2017 10:36\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": 171.2,
    "Belastung": "",
    "Saldo": 2404.15
  },
  {
    "Buchungsdatum": "16.01.2017",
    "Valuta": "16.01.2017",
    "Buchungstext": "Einzahlung Bancomat Noten / 759509714",
    "Details": "Luzern 3   16.01.2017 10:31\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": 1100,
    "Belastung": "",
    "Saldo": 2232.95
  },
  {
    "Buchungsdatum": "06.01.2017",
    "Valuta": "04.01.2017",
    "Buchungstext": "Warenbezug/Dienstleistung / 757731086",
    "Details": "Bezugsort: Coiffure Team Graf\nTransaktionsdatum: 04.01.17 / 11:48:06\nKarten-Nr.: 76809406\nBetrag: CHF 64.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 64.8,
    "Saldo": 1132.95
  },
  {
    "Buchungsdatum": "06.01.2017",
    "Valuta": "05.01.2017",
    "Buchungstext": "Warenbezug/Dienstleistung / 757633165",
    "Details": "Bezugsort: GLOBUS LUZERN\nTransaktionsdatum: 05.01.17 / 17:31:27\nKarten-Nr.: 76809406\nBetrag: CHF 56.70",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 56.7,
    "Saldo": 1197.75
  },
  {
    "Buchungsdatum": "05.01.2017",
    "Valuta": "03.01.2017",
    "Buchungstext": "Warenbezug/Dienstleistung / 757411851",
    "Details": "Bezugsort: k kiosk Buobenmatt\nTransaktionsdatum: 03.01.17 / 15:17:12\nKarten-Nr.: 76809406\nBetrag: CHF 15.90",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 15.9,
    "Saldo": 1254.45
  },
  {
    "Buchungsdatum": "05.01.2017",
    "Valuta": "04.01.2017",
    "Buchungstext": "Warenbezug/Dienstleistung / 757411691",
    "Details": "Bezugsort: MIGROS M ALLMEND LUZ\nTransaktionsdatum: 04.01.17 / 18:06:34\nKarten-Nr.: 76809406\nBetrag: CHF 2.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 2,
    "Saldo": 1270.35
  },
  {
    "Buchungsdatum": "03.01.2017",
    "Valuta": "03.01.2017",
    "Buchungstext": "Vergütung / 756926284",
    "Details": "Zu Gunsten von Schürmann Reto &/o Herzog Priska, Kriens\nSchürmann Reto &/o Herzog Priska",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 1272.35
  },
  {
    "Buchungsdatum": "03.01.2017",
    "Valuta": "03.01.2017",
    "Buchungstext": "Vergütung / 756126435",
    "Details": "Digitec Galaxus AG\nPfingstweidstrasse 60\n8005 Zürich",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 85.5,
    "Saldo": 1472.35
  },
  {
    "Buchungsdatum": "03.01.2017",
    "Valuta": "03.01.2017",
    "Buchungstext": "Vergütung / 746531554",
    "Details": "Helsana Versicherungen AG\nZürichstrasse 130\n8600 Dübendorf\nSchweiz",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 272.45,
    "Saldo": 1557.85
  },
  {
    "Buchungsdatum": "31.12.2016",
    "Valuta": "31.12.2016",
    "Buchungstext": "Zinsen / 754835796",
    "Details": "Abrechnungsperiode: 30.06.2016 - 31.12.2016\nHabenzinsen: CHF 7.74\nVerrechnungssteuer (35 %): CHF -2.71",
    "Betrag Detail": "",
    "Gutschrift": 5.03,
    "Belastung": "",
    "Saldo": 1830.3
  },
  {
    "Buchungsdatum": "31.12.2016",
    "Valuta": "31.12.2016",
    "Buchungstext": "Gebühr BM Maestro Intern. / 754518345",
    "Details": "Abrechnungsperiode: 01.12.2016 - 31.12.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 5,
    "Saldo": 1825.27
  },
  {
    "Buchungsdatum": "30.12.2016",
    "Valuta": "30.12.2016",
    "Buchungstext": "Gutschrift / 754368482",
    "Details": "Im Auftrag von Schürmann Reto, Kriens",
    "Betrag Detail": "",
    "Gutschrift": 1500,
    "Belastung": "",
    "Saldo": 1830.27
  },
  {
    "Buchungsdatum": "30.12.2016",
    "Valuta": "30.12.2016",
    "Buchungstext": "Gutschrift / 754368366",
    "Details": "Im Auftrag von Schürmann Reto &/o Herzog Priska, Kriens Haelfte Bilag",
    "Betrag Detail": "",
    "Gutschrift": 225,
    "Belastung": "",
    "Saldo": 330.27
  },
  {
    "Buchungsdatum": "30.12.2016",
    "Valuta": "30.12.2016",
    "Buchungstext": "Belastung Dauerauftrag / 753607130",
    "Details": "Geldübertrag\nSchürmann Reto und/oder\nHerzog Priska\nLauerzweg 5\n6010 Kriens\nInfo:Haushaltskonto monatlich",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 105.27
  },
  {
    "Buchungsdatum": "30.12.2016",
    "Valuta": "30.12.2016",
    "Buchungstext": "Belastung Dauerauftrag / 753607087",
    "Details": "Geldübertrag\nSchürmann Reto und/oder\nHerzog Priska\nLauerzweg 5\n6010 Kriens\nInfo:MIETE LAUERZWEG",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 400,
    "Saldo": 405.27
  },
  {
    "Buchungsdatum": "30.12.2016",
    "Valuta": "30.12.2016",
    "Buchungstext": "Vergütung / 753313330",
    "Details": "Sandro Kopp\nBrunnenmattweg 1\n6037 Root\nInfo:Wein",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 165,
    "Saldo": 805.27
  },
  {
    "Buchungsdatum": "30.12.2016",
    "Valuta": "30.12.2016",
    "Buchungstext": "Belastung LSV / 753417602",
    "Details": "LSV EKB01\nVISECA CARD SERVICES SA\nHagenholzstrasse 56\nPostfach 7007\n8050 Zuerich\nRef: 950230100011075670083169194\n1107567008316919\nBELASTUNG GEMAESS RECHNUNG\nVOM 23.12.2016\nKARTENKONTO 1107 5670 0831 6919",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 450.15,
    "Saldo": 970.27
  },
  {
    "Buchungsdatum": "29.12.2016",
    "Valuta": "29.12.2016",
    "Buchungstext": "Vergütung / 748245933",
    "Details": "METANET AG\n8005 ZüRICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 21.5,
    "Saldo": 1420.42
  },
  {
    "Buchungsdatum": "29.12.2016",
    "Valuta": "29.12.2016",
    "Buchungstext": "Vergütung / 748245499",
    "Details": "METANET AG\n8005 ZüRICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 160.75,
    "Saldo": 1441.92
  },
  {
    "Buchungsdatum": "29.12.2016",
    "Valuta": "29.12.2016",
    "Buchungstext": "Vergütung / 742373314",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH-3050 BERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 40.4,
    "Saldo": 1602.67
  },
  {
    "Buchungsdatum": "28.12.2016",
    "Valuta": "27.12.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 752722401",
    "Details": "Bezugsort: M SPORTCENTER PILATU\nTransaktionsdatum: 27.12.16 / 16:03:47\nKarten-Nr.: 76809406\nBetrag: CHF 96.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 96,
    "Saldo": 1643.07
  },
  {
    "Buchungsdatum": "28.12.2016",
    "Valuta": "28.12.2016",
    "Buchungstext": "Vergütung / 750656554",
    "Details": "Sport Solution GmbH\nObergrundstrasse 42\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 220,
    "Saldo": 1739.07
  },
  {
    "Buchungsdatum": "27.12.2016",
    "Valuta": "27.12.2016",
    "Buchungstext": "Vergütung / 729225865",
    "Details": "BILLAG AG\nCASE POSTALE\nCH-1701 FRIBOURG",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 451.1,
    "Saldo": 1959.07
  },
  {
    "Buchungsdatum": "26.12.2016",
    "Valuta": "23.12.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 751777097",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 23.12.16 / 11:37:00\nKarten-Nr.: 76809406\nBetrag: CHF 100.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 100,
    "Saldo": 2410.17
  },
  {
    "Buchungsdatum": "26.12.2016",
    "Valuta": "23.12.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 751704375",
    "Details": "Bezugsort: MIGROL ARSENALSTR.\nTransaktionsdatum: 23.12.16 / 08:29:53\nKarten-Nr.: 76809406\nBetrag: CHF 6.39",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.39,
    "Saldo": 2510.17
  },
  {
    "Buchungsdatum": "23.12.2016",
    "Valuta": "23.12.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 751882249",
    "Details": "Luzern 9   23.12.2016 16:31\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 2516.56
  },
  {
    "Buchungsdatum": "23.12.2016",
    "Valuta": "21.12.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 750698960",
    "Details": "Bezugsort: Rest Helvetia\nTransaktionsdatum: 21.12.16 / 13:13:40\nKarten-Nr.: 76809406\nBetrag: CHF 210.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 210,
    "Saldo": 2596.56
  },
  {
    "Buchungsdatum": "23.12.2016",
    "Valuta": "22.12.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 751573922",
    "Details": "Bezugsort: CYSAT APOTHEKE\nTransaktionsdatum: 22.12.16 / 12:34:13\nKarten-Nr.: 76809406\nBetrag: CHF 18.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 18,
    "Saldo": 2806.56
  },
  {
    "Buchungsdatum": "23.12.2016",
    "Valuta": "23.12.2016",
    "Buchungstext": "Vergütung / 751337575",
    "Details": "Sven Hess\nHaldenstrasse\n6005 Luzern\nInfo:Dublin",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 235,
    "Saldo": 2824.56
  },
  {
    "Buchungsdatum": "22.12.2016",
    "Valuta": "21.12.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 750794555",
    "Details": "Bezugsort: DENNER KRIENS\nTransaktionsdatum: 21.12.16 / 17:53:26\nKarten-Nr.: 76809406\nBetrag: CHF 11.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 11,
    "Saldo": 3059.56
  },
  {
    "Buchungsdatum": "21.12.2016",
    "Valuta": "20.12.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 750453713",
    "Details": "Bezugsort: OCHSNER SPORT / 319\nTransaktionsdatum: 20.12.16 / 17:51:56\nKarten-Nr.: 76809406\nBetrag: CHF 187.10",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 187.1,
    "Saldo": 3070.56
  },
  {
    "Buchungsdatum": "21.12.2016",
    "Valuta": "20.12.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 750559532",
    "Details": "Bezugsort: MIGROS MM SCHWEIZERH\nTransaktionsdatum: 20.12.16 / 18:28:37\nKarten-Nr.: 76809406\nBetrag: CHF 26.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 26.8,
    "Saldo": 3257.66
  },
  {
    "Buchungsdatum": "20.12.2016",
    "Valuta": "20.12.2016",
    "Buchungstext": "Belastung Dauerauftrag / 750159407",
    "Details": "Geldübertrag\nReto Schürmann\nLauerzweg 5\n6010 Kriens\nInfo:Vorsorge",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 3284.46
  },
  {
    "Buchungsdatum": "16.12.2016",
    "Valuta": "16.12.2016",
    "Buchungstext": "Vergütung / 749136691",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nSchürmann Reto",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 7000,
    "Saldo": 3584.46
  },
  {
    "Buchungsdatum": "15.12.2016",
    "Valuta": "15.12.2016",
    "Buchungstext": "Gutschrift / 748843296",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nUEbertrag LUKB",
    "Betrag Detail": "",
    "Gutschrift": 4500,
    "Belastung": "",
    "Saldo": 10584.46
  },
  {
    "Buchungsdatum": "15.12.2016",
    "Valuta": "14.12.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 748765922",
    "Details": "Bezugsort: RESTAURANT BASILICO\nTransaktionsdatum: 14.12.16 / 11:54:39\nKarten-Nr.: 76809406\nBetrag: CHF 22.50",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 22.5,
    "Saldo": 6084.46
  },
  {
    "Buchungsdatum": "15.12.2016",
    "Valuta": "15.12.2016",
    "Buchungstext": "Gutschrift / 748750945",
    "Details": "Luzerner Kantonalbank AG\nFinanzen\nPilatusstrasse 12\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 6106.96
  },
  {
    "Buchungsdatum": "13.12.2016",
    "Valuta": "11.12.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 748169433",
    "Details": "Bezugsort: STREET-FOOD\nTransaktionsdatum: 11.12.16 / 14:44:04\nKarten-Nr.: 76809406\nBetrag: CHF 18.50",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 18.5,
    "Saldo": 1106.96
  },
  {
    "Buchungsdatum": "12.12.2016",
    "Valuta": "09.12.2016",
    "Buchungstext": "Geldbezug Bancomat Ausland / 747660286",
    "Details": "Bezugsort: ENIE0012\nTransaktionsdatum: 09.12.16 / 16:25:24\nKarten-Nr.: 76809406\nBetrag: CHF 234.24",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 234.24,
    "Saldo": 1125.46
  },
  {
    "Buchungsdatum": "06.12.2016",
    "Valuta": "06.12.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 746678168",
    "Details": "Luzern 9   06.12.2016 07:58\nKartennummer: 76809406\nEUR   400\nWechselkurs  1.0831",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 433.25,
    "Saldo": 1359.7
  },
  {
    "Buchungsdatum": "06.12.2016",
    "Valuta": "06.12.2016",
    "Buchungstext": "Vergütung / 746532237",
    "Details": "Wasser für Wasser\nBrünigstrasse 24\n6005 Luzern\nFakt.-Nr. 3160000000000000548",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 75,
    "Saldo": 1792.95
  },
  {
    "Buchungsdatum": "06.12.2016",
    "Valuta": "06.12.2016",
    "Buchungstext": "Vergütung / 746531818",
    "Details": "SCHWEIZER REISEKASSE BERN\n3001 BERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 400,
    "Saldo": 1867.95
  },
  {
    "Buchungsdatum": "05.12.2016",
    "Valuta": "02.12.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 746205231",
    "Details": "Bezugsort: CONFISEUR BACHMANN A\nTransaktionsdatum: 02.12.16 / 13:05:17\nKarten-Nr.: 76809406\nBetrag: CHF 50.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 50,
    "Saldo": 2267.95
  },
  {
    "Buchungsdatum": "01.12.2016",
    "Valuta": "01.12.2016",
    "Buchungstext": "Vergütung / 743835322",
    "Details": "Texpress Textilpflege GmbH\nRothenburgstrasse 2\n6020 Emmenbrücke",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 35.1,
    "Saldo": 2317.95
  },
  {
    "Buchungsdatum": "01.12.2016",
    "Valuta": "01.12.2016",
    "Buchungstext": "Vergütung / 736099829",
    "Details": "Helsana Versicherungen AG\nZürichstrasse 130\n8600 Dübendorf\nSchweiz",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 2353.05
  },
  {
    "Buchungsdatum": "01.12.2016",
    "Valuta": "01.12.2016",
    "Buchungstext": "Gutschrift / 744203040",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens",
    "Betrag Detail": "",
    "Gutschrift": 700,
    "Belastung": "",
    "Saldo": 2654.45
  },
  {
    "Buchungsdatum": "30.11.2016",
    "Valuta": "25.11.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 742236698",
    "Details": "Bezugsort: Des Balances\nTransaktionsdatum: 25.11.16 / 22:42:40\nKarten-Nr.: 76809406\nBetrag: CHF 332.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 332,
    "Saldo": 1954.45
  },
  {
    "Buchungsdatum": "30.11.2016",
    "Valuta": "30.11.2016",
    "Buchungstext": "Belastung Dauerauftrag / 743497552",
    "Details": "Geldübertrag\nSchürmann Reto und/oder\nHerzog Priska\nLauerzweg 5\n6010 Kriens\nInfo:Haushaltskonto monatlich",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 2286.45
  },
  {
    "Buchungsdatum": "30.11.2016",
    "Valuta": "30.11.2016",
    "Buchungstext": "Belastung Dauerauftrag / 743497503",
    "Details": "Geldübertrag\nSchürmann Reto und/oder\nHerzog Priska\nLauerzweg 5\n6010 Kriens\nInfo:MIETE LAUERZWEG",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 400,
    "Saldo": 2586.45
  },
  {
    "Buchungsdatum": "30.11.2016",
    "Valuta": "30.11.2016",
    "Buchungstext": "Vergütung / 737941718",
    "Details": "Texpress Textilpflege\nRothenburgerstrasse 2\n6020 Emmenbrücke",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 35.1,
    "Saldo": 2986.45
  },
  {
    "Buchungsdatum": "29.11.2016",
    "Valuta": "29.11.2016",
    "Buchungstext": "Vergütung / 732623919",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH-3050 BERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 40.4,
    "Saldo": 3021.55
  },
  {
    "Buchungsdatum": "29.11.2016",
    "Valuta": "29.11.2016",
    "Buchungstext": "Belastung LSV / 742848322",
    "Details": "LSV EKB01\nVISECA CARD SERVICES SA\nHagenholzstrasse 56\nPostfach 7007\n8050 Zuerich\nRef: 950230100011075670083169194\n1107567008316919\nBELASTUNG GEMAESS RECHNUNG\nVOM 23.11.2016\nKARTENKONTO 1107 5670 0831 6919",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 202.55,
    "Saldo": 3061.95
  },
  {
    "Buchungsdatum": "28.11.2016",
    "Valuta": "28.11.2016",
    "Buchungstext": "Vergütung / 742793683",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nSchürmann Reto",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 10000,
    "Saldo": 3264.5
  },
  {
    "Buchungsdatum": "28.11.2016",
    "Valuta": "25.11.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 742598490",
    "Details": "Bezugsort: PASTARAZZI GMBH\nTransaktionsdatum: 25.11.16 / 12:26:01\nKarten-Nr.: 76809406\nBetrag: CHF 25.50",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 25.5,
    "Saldo": 13264.5
  },
  {
    "Buchungsdatum": "28.11.2016",
    "Valuta": "28.11.2016",
    "Buchungstext": "Gutschrift / 742498274",
    "Details": "Priska Herzog\nLauerzweg 5\n6010 Kriens\n- - Info - -\nAuto",
    "Betrag Detail": "",
    "Gutschrift": 9090,
    "Belastung": "",
    "Saldo": 13290
  },
  {
    "Buchungsdatum": "28.11.2016",
    "Valuta": "28.11.2016",
    "Buchungstext": "Gutschrift / 742498270",
    "Details": "Priska Herzog\nLauerzweg 5\n6010 Kriens\n- - Info - -\niPhone",
    "Betrag Detail": "",
    "Gutschrift": 700,
    "Belastung": "",
    "Saldo": 4200
  },
  {
    "Buchungsdatum": "22.11.2016",
    "Valuta": "22.11.2016",
    "Buchungstext": "Belastung Dauerauftrag / 740938315",
    "Details": "Geldübertrag\nReto Schürmann\nLauerzweg 5\n6010 Kriens\nInfo:Saldomanager",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 2849.86,
    "Saldo": 3500
  },
  {
    "Buchungsdatum": "21.11.2016",
    "Valuta": "21.11.2016",
    "Buchungstext": "Gutschrift / 740753921",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nOWKB",
    "Betrag Detail": "",
    "Gutschrift": 900,
    "Belastung": "",
    "Saldo": 6349.86
  },
  {
    "Buchungsdatum": "21.11.2016",
    "Valuta": "21.11.2016",
    "Buchungstext": "Belastung Dauerauftrag / 740707818",
    "Details": "Geldübertrag\nReto Schürmann\nLauerzweg 5\n6010 Kriens\nInfo:Vorsorge",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 5449.86
  },
  {
    "Buchungsdatum": "18.11.2016",
    "Valuta": "18.11.2016",
    "Buchungstext": "Gutschrift / 740067853",
    "Details": "Luzerner Kantonalbank AG\n88 ZFB\niHK Abrechnungskonti\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 5749.86
  },
  {
    "Buchungsdatum": "17.11.2016",
    "Valuta": "15.11.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 739846593",
    "Details": "Bezugsort: RESTAURANT WEISSES S\nTransaktionsdatum: 15.11.16 / 13:03:04\nKarten-Nr.: 76809406\nBetrag: CHF 56.60",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 56.6,
    "Saldo": 749.86
  },
  {
    "Buchungsdatum": "15.11.2016",
    "Valuta": "14.11.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 739204153",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 14.11.16 / 09:08:27\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 806.46
  },
  {
    "Buchungsdatum": "14.11.2016",
    "Valuta": "11.11.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 738941916",
    "Details": "Bezugsort: AVIA OBERGRUNDSTR.\nTransaktionsdatum: 11.11.16 / 16:16:57\nKarten-Nr.: 76809406\nBetrag: CHF 5.95",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 5.95,
    "Saldo": 1006.46
  },
  {
    "Buchungsdatum": "10.11.2016",
    "Valuta": "10.11.2016",
    "Buchungstext": "Bardividende / 737043534",
    "Details": "N Akt Apple Inc USD 0.00001 nom (908440)",
    "Betrag Detail": "",
    "Gutschrift": 16.57,
    "Belastung": "",
    "Saldo": 1012.41
  },
  {
    "Buchungsdatum": "10.11.2016",
    "Valuta": "08.11.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 738549146",
    "Details": "Bezugsort: k kiosk Winkelried M\nTransaktionsdatum: 08.11.16 / 12:39:40\nKarten-Nr.: 76809406\nBetrag: CHF 5.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 5.8,
    "Saldo": 995.84
  },
  {
    "Buchungsdatum": "09.11.2016",
    "Valuta": "08.11.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 738181236",
    "Details": "Bezugsort: JEFF'S BURGER\nTransaktionsdatum: 08.11.16 / 12:01:27\nKarten-Nr.: 76809406\nBetrag: CHF 27.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 27,
    "Saldo": 1001.64
  },
  {
    "Buchungsdatum": "09.11.2016",
    "Valuta": "06.11.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 737776963",
    "Details": "Bezugsort: Ristorante La Grotta\nTransaktionsdatum: 06.11.16 / 19:40:05\nKarten-Nr.: 76809406\nBetrag: CHF 38.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 38,
    "Saldo": 1028.64
  },
  {
    "Buchungsdatum": "07.11.2016",
    "Valuta": "04.11.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 737473469",
    "Details": "Bezugsort: k kiosk Buobenmatt\nTransaktionsdatum: 04.11.16 / 13:02:29\nKarten-Nr.: 76809406\nBetrag: CHF 7.40",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 7.4,
    "Saldo": 1066.64
  },
  {
    "Buchungsdatum": "04.11.2016",
    "Valuta": "04.11.2016",
    "Buchungstext": "Vergütung / 737482253",
    "Details": "Philipp &/o Kristin Keist\nHergiswil",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 37.26,
    "Saldo": 1074.04
  },
  {
    "Buchungsdatum": "04.11.2016",
    "Valuta": "02.11.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 737351538",
    "Details": "Bezugsort: Coiffure Team Graf\nTransaktionsdatum: 02.11.16 / 12:03:30\nKarten-Nr.: 76809406\nBetrag: CHF 64.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 64.8,
    "Saldo": 1111.3
  },
  {
    "Buchungsdatum": "03.11.2016",
    "Valuta": "03.11.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 737262746",
    "Details": "Luzern 4   03.11.2016 19:39\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 1176.1
  },
  {
    "Buchungsdatum": "03.11.2016",
    "Valuta": "03.11.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 737154986",
    "Details": "Luzern 4   03.11.2016 11:30\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 1256.1
  },
  {
    "Buchungsdatum": "01.11.2016",
    "Valuta": "30.10.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 736413490",
    "Details": "Bezugsort: KINO CAPITOL\nTransaktionsdatum: 30.10.16 / 17:00:55\nKarten-Nr.: 76809406\nBetrag: CHF 32.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 32,
    "Saldo": 1336.1
  },
  {
    "Buchungsdatum": "01.11.2016",
    "Valuta": "01.11.2016",
    "Buchungstext": "Vergütung / 729225548",
    "Details": "Helsana Versicherungen AG\nZürichstrasse 130\n8600 Dübendorf\nSchweiz",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 1368.1
  },
  {
    "Buchungsdatum": "31.10.2016",
    "Valuta": "31.10.2016",
    "Buchungstext": "Gutschrift / 736068680",
    "Details": "Frischknecht Lucas\nKellerstrasse 30\n6005 Luzern\n- - Info - -\npizzen Lucas",
    "Betrag Detail": "",
    "Gutschrift": 11,
    "Belastung": "",
    "Saldo": 1669.5
  },
  {
    "Buchungsdatum": "28.10.2016",
    "Valuta": "28.10.2016",
    "Buchungstext": "Belastung Dauerauftrag / 734946484",
    "Details": "Geldübertrag\nSchürmann Reto und/oder\nHerzog Priska\nLauerzweg 5\n6010 Kriens\nInfo:Haushaltskonto monatlich",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 1658.5
  },
  {
    "Buchungsdatum": "28.10.2016",
    "Valuta": "28.10.2016",
    "Buchungstext": "Belastung Dauerauftrag / 734946450",
    "Details": "Geldübertrag\nSchürmann Reto und/oder\nHerzog Priska\nLauerzweg 5\n6010 Kriens\nInfo:MIETE LAUERZWEG",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 400,
    "Saldo": 1958.5
  },
  {
    "Buchungsdatum": "28.10.2016",
    "Valuta": "28.10.2016",
    "Buchungstext": "Vergütung / 722787429",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH-3050 BERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 35.6,
    "Saldo": 2358.5
  },
  {
    "Buchungsdatum": "27.10.2016",
    "Valuta": "26.10.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 734586408",
    "Details": "Bezugsort: MIGROS M ALLMEND LUZ\nTransaktionsdatum: 26.10.16 / 18:04:32\nKarten-Nr.: 76809406\nBetrag: CHF 0.60",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 0.6,
    "Saldo": 2394.1
  },
  {
    "Buchungsdatum": "27.10.2016",
    "Valuta": "27.10.2016",
    "Buchungstext": "Belastung LSV / 734434371",
    "Details": "LSV EKB01\nVISECA CARD SERVICES SA\nHagenholzstrasse 56\nPostfach 7007\n8050 Zuerich\nRef: 950230100011075670083169194\n1107567008316919\nBELASTUNG GEMAESS RECHNUNG\nVOM 21.10.2016\nKARTENKONTO 1107 5670 0831 6919",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 1086.75,
    "Saldo": 2394.7
  },
  {
    "Buchungsdatum": "24.10.2016",
    "Valuta": "21.10.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 732857693",
    "Details": "Bezugsort: MIGROL ARSENALSTR.\nTransaktionsdatum: 21.10.16 / 07:47:07\nKarten-Nr.: 76809406\nBetrag: CHF 6.20",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.2,
    "Saldo": 3481.45
  },
  {
    "Buchungsdatum": "24.10.2016",
    "Valuta": "20.10.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 733518461",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 20.10.16 / 17:58:49\nKarten-Nr.: 76809406\nBetrag: CHF 12.35",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 12.35,
    "Saldo": 3487.65
  },
  {
    "Buchungsdatum": "24.10.2016",
    "Valuta": "24.10.2016",
    "Buchungstext": "Belastung Dauerauftrag / 733461326",
    "Details": "Geldübertrag\nReto Schürmann\nLauerzweg 5\n6010 Kriens\nInfo:Saldomanager",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 3250.25,
    "Saldo": 3500
  },
  {
    "Buchungsdatum": "21.10.2016",
    "Valuta": "19.10.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 732826594",
    "Details": "Bezugsort: Mirch Masala Indian\nTransaktionsdatum: 19.10.16 / 13:11:00\nKarten-Nr.: 76809406\nBetrag: CHF 20.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 20,
    "Saldo": 6750.25
  },
  {
    "Buchungsdatum": "21.10.2016",
    "Valuta": "21.10.2016",
    "Buchungstext": "Vergütung / 732622867",
    "Details": "Texpress textilpflege GmbH\nRothenburgstrasse 2\n6020 Emmenbrücke",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 31.6,
    "Saldo": 6770.25
  },
  {
    "Buchungsdatum": "20.10.2016",
    "Valuta": "20.10.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 732750669",
    "Details": "Luzern 4   20.10.2016 17:41\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 6801.85
  },
  {
    "Buchungsdatum": "20.10.2016",
    "Valuta": "18.10.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 732198912",
    "Details": "Bezugsort: Goldschmiedeatel. Ku\nTransaktionsdatum: 18.10.16 / 11:22:50\nKarten-Nr.: 76809406\nBetrag: CHF 220.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 220,
    "Saldo": 6881.85
  },
  {
    "Buchungsdatum": "20.10.2016",
    "Valuta": "18.10.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 732564484",
    "Details": "Bezugsort: Velociped\nTransaktionsdatum: 18.10.16 / 11:33:43\nKarten-Nr.: 76809406\nBetrag: CHF 10.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 10,
    "Saldo": 7101.85
  },
  {
    "Buchungsdatum": "20.10.2016",
    "Valuta": "20.10.2016",
    "Buchungstext": "Gutschrift / 732557563",
    "Details": "DIGITEC GALAXUS AG\nPFINGSTWEIDSTRASSE 60\nCH-8005 ZURICH\n- - Info - -\nRUCKERSTATTUNG DIGITEC, AUFTRAG 743\n0709",
    "Betrag Detail": "",
    "Gutschrift": 894.3,
    "Belastung": "",
    "Saldo": 7111.85
  },
  {
    "Buchungsdatum": "20.10.2016",
    "Valuta": "20.10.2016",
    "Buchungstext": "Gutschrift / 732557202",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nOWKB",
    "Betrag Detail": "",
    "Gutschrift": 900,
    "Belastung": "",
    "Saldo": 6217.55
  },
  {
    "Buchungsdatum": "20.10.2016",
    "Valuta": "20.10.2016",
    "Buchungstext": "Gutschrift / 732549589",
    "Details": "Luzerner Kantonalbank AG\n88 ZFB\niHK Abrechnungskonti\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 5317.55
  },
  {
    "Buchungsdatum": "20.10.2016",
    "Valuta": "20.10.2016",
    "Buchungstext": "Belastung Dauerauftrag / 732512831",
    "Details": "Geldübertrag\nReto Schürmann\nLauerzweg 5\n6010 Kriens\nInfo:Vorsorge",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 317.55
  },
  {
    "Buchungsdatum": "19.10.2016",
    "Valuta": "17.10.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 732343159",
    "Details": "Bezugsort: DATA QUEST AG\nTransaktionsdatum: 17.10.16 / 16:23:56\nKarten-Nr.: 76809406\nBetrag: CHF 12.90",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 12.9,
    "Saldo": 617.55
  },
  {
    "Buchungsdatum": "19.10.2016",
    "Valuta": "17.10.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 732055174",
    "Details": "Bezugsort: Manor AG - 213\nTransaktionsdatum: 17.10.16 / 15:49:18\nKarten-Nr.: 76809406\nBetrag: CHF 9.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 9.8,
    "Saldo": 630.45
  },
  {
    "Buchungsdatum": "18.10.2016",
    "Valuta": "18.10.2016",
    "Buchungstext": "Vergütung / 732071421",
    "Details": "Digitec Galaxus AG\nPfingstweidstrasse 60\n8005 Zürich",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 894.3,
    "Saldo": 640.25
  },
  {
    "Buchungsdatum": "17.10.2016",
    "Valuta": "15.10.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 731946729",
    "Details": "Bezugsort: VONMOOS, SPORT + HOB\nTransaktionsdatum: 15.10.16 / 15:19:42\nKarten-Nr.: 76809406\nBetrag: CHF 28.60",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 28.6,
    "Saldo": 1534.55
  },
  {
    "Buchungsdatum": "12.10.2016",
    "Valuta": "12.10.2016",
    "Buchungstext": "Belastung Dauerauftrag / 731091208",
    "Details": "Geldübertrag\nSchürmann Reto",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 1,
    "Saldo": 1563.15
  },
  {
    "Buchungsdatum": "10.10.2016",
    "Valuta": "10.10.2016",
    "Buchungstext": "Vergütung / 730601251",
    "Details": "Veloplus AG\n8620 Wetzikon",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 56.6,
    "Saldo": 1564.15
  },
  {
    "Buchungsdatum": "07.10.2016",
    "Valuta": "07.10.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 730477314",
    "Details": "Luzern 9   07.10.2016 17:34\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 150,
    "Saldo": 1620.75
  },
  {
    "Buchungsdatum": "07.10.2016",
    "Valuta": "07.10.2016",
    "Buchungstext": "Vergütung / 724492258",
    "Details": "DIENSTSTELLE STEUERN\nBUNDESSTEUER\nBUOBENMATT 1\n6002 LUZERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 356.4,
    "Saldo": 1770.75
  },
  {
    "Buchungsdatum": "07.10.2016",
    "Valuta": "07.10.2016",
    "Buchungstext": "Vergütung / 724489238",
    "Details": "STEUERAMT KRIENS\nPOSTFACH 1247\n6010 KRIENS",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 2333.35,
    "Saldo": 2127.15
  },
  {
    "Buchungsdatum": "06.10.2016",
    "Valuta": "06.10.2016",
    "Buchungstext": "Gutschrift / 730013233",
    "Details": "Im Auftrag von Schürmann Reto, Kriens",
    "Betrag Detail": "",
    "Gutschrift": 2000,
    "Belastung": "",
    "Saldo": 4460.5
  },
  {
    "Buchungsdatum": "05.10.2016",
    "Valuta": "05.10.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 729886455",
    "Details": "Luzern 9   05.10.2016 11:38\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 2460.5
  },
  {
    "Buchungsdatum": "05.10.2016",
    "Valuta": "04.10.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 729557571",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 04.10.16 / 09:08:03\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 2540.5
  },
  {
    "Buchungsdatum": "03.10.2016",
    "Valuta": "03.10.2016",
    "Buchungstext": "Vergütung / 722739553",
    "Details": "PROGRES VERSICHERUNGEN AG\nDEBITORENMANAGEMENT\n8081  ZüRICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 2740.5
  },
  {
    "Buchungsdatum": "30.09.2016",
    "Valuta": "30.09.2016",
    "Buchungstext": "Belastung Dauerauftrag / 727957401",
    "Details": "Geldübertrag\nSchürmann Reto und/oder\nHerzog Priska\nLauerzweg 5\n6010 Kriens\nInfo:Haushaltskonto monatlich",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 3041.9
  },
  {
    "Buchungsdatum": "30.09.2016",
    "Valuta": "30.09.2016",
    "Buchungstext": "Belastung Dauerauftrag / 727957376",
    "Details": "Geldübertrag\nSchürmann Reto und/oder\nHerzog Priska\nLauerzweg 5\n6010 Kriens\nInfo:MIETE LAUERZWEG",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 400,
    "Saldo": 3341.9
  },
  {
    "Buchungsdatum": "30.09.2016",
    "Valuta": "29.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 728159014",
    "Details": "Bezugsort: AVIA TANKSTELLE\nTransaktionsdatum: 29.09.16 / 19:26:08\nKarten-Nr.: 76809406\nBetrag: CHF 6.60",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.6,
    "Saldo": 3741.9
  },
  {
    "Buchungsdatum": "29.09.2016",
    "Valuta": "28.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 727185869",
    "Details": "Bezugsort: NESTLE NESPRESSO SA\nTransaktionsdatum: 28.09.16 / 12:39:48\nKarten-Nr.: 76809406\nBetrag: CHF 181.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 181,
    "Saldo": 3748.5
  },
  {
    "Buchungsdatum": "29.09.2016",
    "Valuta": "29.09.2016",
    "Buchungstext": "Vergütung / 722755072",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH-3050 BERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 40.4,
    "Saldo": 3929.5
  },
  {
    "Buchungsdatum": "29.09.2016",
    "Valuta": "29.09.2016",
    "Buchungstext": "Belastung LSV / 727295787",
    "Details": "LSV EKB01\nVISECA CARD SERVICES SA\nHagenholzstrasse 56\nPostfach 7007\n8050 Zuerich\nRef: 950230100011075670083169194\n1107567008316919\nBELASTUNG GEMAESS RECHNUNG\nVOM 23.09.2016\nKARTENKONTO 1107 5670 0831 6919",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 174.5,
    "Saldo": 3969.9
  },
  {
    "Buchungsdatum": "28.09.2016",
    "Valuta": "27.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 727030575",
    "Details": "Bezugsort: SPIELKISTE SCHWEIZ A\nTransaktionsdatum: 27.09.16 / 13:29:45\nKarten-Nr.: 76809406\nBetrag: CHF 46.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 46.8,
    "Saldo": 4144.4
  },
  {
    "Buchungsdatum": "27.09.2016",
    "Valuta": "27.09.2016",
    "Buchungstext": "Vergütung / 726730704",
    "Details": "TWINT AG\nKONSUMSTRASSE 20\n3007 BERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 100,
    "Saldo": 4191.2
  },
  {
    "Buchungsdatum": "27.09.2016",
    "Valuta": "27.09.2016",
    "Buchungstext": "Gutschrift / 726670610",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nUEbertrag LUKB",
    "Betrag Detail": "",
    "Gutschrift": 1000,
    "Belastung": "",
    "Saldo": 4291.2
  },
  {
    "Buchungsdatum": "26.09.2016",
    "Valuta": "24.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 726344739",
    "Details": "Bezugsort: COOP-2491 KRIENS PIL\nTransaktionsdatum: 24.09.16 / 14:16:59\nKarten-Nr.: 76809406\nBetrag: CHF 25.90",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 25.9,
    "Saldo": 3291.2
  },
  {
    "Buchungsdatum": "26.09.2016",
    "Valuta": "25.09.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 726186088",
    "Details": "Kriens 2   25.09.2016 12:52\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 140,
    "Saldo": 3317.1
  },
  {
    "Buchungsdatum": "22.09.2016",
    "Valuta": "20.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 725465759",
    "Details": "Bezugsort: k kiosk Buobenmatt\nTransaktionsdatum: 20.09.16 / 16:12:37\nKarten-Nr.: 76809406\nBetrag: CHF 15.90",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 15.9,
    "Saldo": 3457.1
  },
  {
    "Buchungsdatum": "22.09.2016",
    "Valuta": "21.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 725464066",
    "Details": "Bezugsort: JEFF'S BURGER\nTransaktionsdatum: 21.09.16 / 11:55:45\nKarten-Nr.: 76809406\nBetrag: CHF 27.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 27,
    "Saldo": 3473
  },
  {
    "Buchungsdatum": "22.09.2016",
    "Valuta": "22.09.2016",
    "Buchungstext": "Belastung Dauerauftrag / 725418169",
    "Details": "Geldübertrag\nReto Schürmann\nLauerzweg 5\n6010 Kriens\nInfo:Saldomanager",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 3558.46,
    "Saldo": 3500
  },
  {
    "Buchungsdatum": "20.09.2016",
    "Valuta": "20.09.2016",
    "Buchungstext": "Gutschrift / 724965502",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nOWKB",
    "Betrag Detail": "",
    "Gutschrift": 900,
    "Belastung": "",
    "Saldo": 7058.46
  },
  {
    "Buchungsdatum": "20.09.2016",
    "Valuta": "20.09.2016",
    "Buchungstext": "Gutschrift / 724959051",
    "Details": "Luzerner Kantonalbank AG\n88 ZFB\niHK Abrechnungskonti\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 6158.46
  },
  {
    "Buchungsdatum": "20.09.2016",
    "Valuta": "20.09.2016",
    "Buchungstext": "Belastung Dauerauftrag / 724915164",
    "Details": "Geldübertrag\nReto Schürmann\nLauerzweg 5\n6010 Kriens\nInfo:Vorsorge",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 1158.46
  },
  {
    "Buchungsdatum": "19.09.2016",
    "Valuta": "16.09.2016",
    "Buchungstext": "Geldbezug Bancomat / 724112117",
    "Details": "Bezugsort: CS LU KAUFMANNW 3\nTransaktionsdatum: 16.09.16 / 20:39:57\nKarten-Nr.: 76809406\nBetrag: CHF 80.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 1458.46
  },
  {
    "Buchungsdatum": "19.09.2016",
    "Valuta": "19.09.2016",
    "Buchungstext": "Gutschrift / 724706858",
    "Details": "Im Auftrag von Schürmann Reto, Kriens",
    "Betrag Detail": "",
    "Gutschrift": 100,
    "Belastung": "",
    "Saldo": 1538.46
  },
  {
    "Buchungsdatum": "15.09.2016",
    "Valuta": "13.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 723695869",
    "Details": "Bezugsort: Coiffure Team Graf\nTransaktionsdatum: 13.09.16 / 12:46:48\nKarten-Nr.: 76809406\nBetrag: CHF 64.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 64.8,
    "Saldo": 1438.46
  },
  {
    "Buchungsdatum": "14.09.2016",
    "Valuta": "13.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 723245098",
    "Details": "Bezugsort: MIGROL ARSENALSTR.\nTransaktionsdatum: 13.09.16 / 07:10:34\nKarten-Nr.: 76809406\nBetrag: CHF 6.49",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.49,
    "Saldo": 1503.26
  },
  {
    "Buchungsdatum": "12.09.2016",
    "Valuta": "12.09.2016",
    "Buchungstext": "Belastung Dauerauftrag / 723003742",
    "Details": "Geldübertrag\nSchürmann Reto",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 1,
    "Saldo": 1509.75
  },
  {
    "Buchungsdatum": "12.09.2016",
    "Valuta": "12.09.2016",
    "Buchungstext": "Vergütung / 722895105",
    "Details": "Priska Herzog\nLauerzweg 5\n6010 Kriens",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 1,
    "Saldo": 1510.75
  },
  {
    "Buchungsdatum": "12.09.2016",
    "Valuta": "12.09.2016",
    "Buchungstext": "Vergütung / 722895091",
    "Details": "Reto Schürmann\nHimmelrichstrasse 13\n6003 Luzern\nInfo:übertrag auf PK OWKB",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 2,
    "Saldo": 1511.75
  },
  {
    "Buchungsdatum": "12.09.2016",
    "Valuta": "12.09.2016",
    "Buchungstext": "Vergütung / 722895089",
    "Details": "Reto Schürmann\nLauerzweg 5\n6010 Kriens",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 1,
    "Saldo": 1513.75
  },
  {
    "Buchungsdatum": "08.09.2016",
    "Valuta": "08.09.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 721945625",
    "Details": "Luzern 9   08.09.2016 18:00\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 1514.75
  },
  {
    "Buchungsdatum": "08.09.2016",
    "Valuta": "08.09.2016",
    "Buchungstext": "Vergütung / 721892072",
    "Details": "DIGITEC GALAXUS AG\nPFINGSTWEIDSTRASSE 60\n8005 ZUERICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 178,
    "Saldo": 1594.75
  },
  {
    "Buchungsdatum": "08.09.2016",
    "Valuta": "07.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 721809283",
    "Details": "Bezugsort: MIGROS FITNESSPARK L\nTransaktionsdatum: 07.09.16 / 19:57:24\nKarten-Nr.: 76809406\nBetrag: CHF 51.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 51,
    "Saldo": 1772.75
  },
  {
    "Buchungsdatum": "06.09.2016",
    "Valuta": "05.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 721130588",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 05.09.16 / 09:16:19\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 1823.75
  },
  {
    "Buchungsdatum": "06.09.2016",
    "Valuta": "03.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 720924579",
    "Details": "Bezugsort: Hotel Seerausch\nTransaktionsdatum: 03.09.16 / 23:13:26\nKarten-Nr.: 76809406\nBetrag: CHF 160.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 160,
    "Saldo": 2023.75
  },
  {
    "Buchungsdatum": "05.09.2016",
    "Valuta": "02.09.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 720608415",
    "Details": "Bezugsort: AVIA SEEBURGSTR.\nTransaktionsdatum: 02.09.16 / 17:50:23\nKarten-Nr.: 76809406\nBetrag: CHF 9.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 9.8,
    "Saldo": 2183.75
  },
  {
    "Buchungsdatum": "02.09.2016",
    "Valuta": "02.09.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 720477864",
    "Details": "Luzern 4   02.09.2016 07:42\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 2193.55
  },
  {
    "Buchungsdatum": "01.09.2016",
    "Valuta": "01.09.2016",
    "Buchungstext": "Vergütung / 720012731",
    "Details": "PROGRES VERSICHERUNGEN AG\nDEBITORENMANAGEMENT\n8081  ZUERICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 2273.55
  },
  {
    "Buchungsdatum": "31.08.2016",
    "Valuta": "31.08.2016",
    "Buchungstext": "Sammelbelastung / 719535410",
    "Details": "Auftrag vom 31.08.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 700,
    "Saldo": 2574.95
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "Zu Gunsten von Schürmann Reto &/o Herzog Priska, Kriens\nSchürmann Reto &/o Herzog Priska\nInfo:MIETE LAUERZWEG",
    "Betrag Detail": 400,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "Zu Gunsten von Schürmann Reto &/o Herzog Priska, Kriens\nSchürmann Reto &/o Herzog Priska\nInfo:HAUSHALTSKONTO MONATLICH",
    "Betrag Detail": 300,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "31.08.2016",
    "Valuta": "31.08.2016",
    "Buchungstext": "Vergütung / 719533515",
    "Details": "TEXPRESS TEXTILPFLEGE GMBH\nROTHENBURGSTRASSE 2\n6020 EMMENBRUECKE",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 38.6,
    "Saldo": 3274.95
  },
  {
    "Buchungsdatum": "31.08.2016",
    "Valuta": "30.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 719379725",
    "Details": "Bezugsort: HORNBACH BAUMARKT LI\nTransaktionsdatum: 30.08.16 / 18:22:39\nKarten-Nr.: 76809406\nBetrag: CHF 26.50",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 26.5,
    "Saldo": 3313.55
  },
  {
    "Buchungsdatum": "30.08.2016",
    "Valuta": "30.08.2016",
    "Buchungstext": "Vergütung / 718873099",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH 3050 BERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 35.4,
    "Saldo": 3340.05
  },
  {
    "Buchungsdatum": "29.08.2016",
    "Valuta": "27.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 718424455",
    "Details": "Bezugsort: COOP-2256 KRIENS S\nTransaktionsdatum: 27.08.16 / 10:22:13\nKarten-Nr.: 76809406\nBetrag: CHF 155.35",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 155.35,
    "Saldo": 3375.45
  },
  {
    "Buchungsdatum": "29.08.2016",
    "Valuta": "27.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 718291724",
    "Details": "Bezugsort: COOP-2256 KRIENS S\nTransaktionsdatum: 27.08.16 / 09:58:37\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 3530.8
  },
  {
    "Buchungsdatum": "29.08.2016",
    "Valuta": "27.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 718424390",
    "Details": "Bezugsort: ALDI SUISSE 30\nTransaktionsdatum: 27.08.16 / 10:10:54\nKarten-Nr.: 76809406\nBetrag: CHF 11.50",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 11.5,
    "Saldo": 3730.8
  },
  {
    "Buchungsdatum": "29.08.2016",
    "Valuta": "27.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 718421924",
    "Details": "Bezugsort: 773 COOP TS KRIENS\nTransaktionsdatum: 27.08.16 / 15:27:07\nKarten-Nr.: 76809406\nBetrag: CHF 68.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 68.8,
    "Saldo": 3742.3
  },
  {
    "Buchungsdatum": "29.08.2016",
    "Valuta": "27.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 718411419",
    "Details": "Bezugsort: ALDI SUISSE 30\nTransaktionsdatum: 27.08.16 / 09:30:52\nKarten-Nr.: 76809406\nBetrag: CHF 15.75",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 15.75,
    "Saldo": 3811.1
  },
  {
    "Buchungsdatum": "29.08.2016",
    "Valuta": "26.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 718232887",
    "Details": "Bezugsort: DENNER KRIENS\nTransaktionsdatum: 26.08.16 / 18:08:57\nKarten-Nr.: 76809406\nBetrag: CHF 65.30",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 65.3,
    "Saldo": 3826.85
  },
  {
    "Buchungsdatum": "29.08.2016",
    "Valuta": "29.08.2016",
    "Buchungstext": "Belastung LSV / 718218470",
    "Details": "LSV EKB01\nVISECA CARD SERVICES SA\nHagenholzstrasse 56\nPostfach 7007\n8050 Zuerich\nRef: 950230100011075670083169194\n1107567008316919\nBELASTUNG GEMAESS RECHNUNG\nVOM 23.08.2016\nKARTENKONTO 1107 5670 0831 6919",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 93.45,
    "Saldo": 3892.15
  },
  {
    "Buchungsdatum": "24.08.2016",
    "Valuta": "23.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 717184340",
    "Details": "Bezugsort: BP NEUENKIRCH OST\nTransaktionsdatum: 23.08.16 / 17:45:48\nKarten-Nr.: 76809406\nBetrag: CHF 14.40",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 14.4,
    "Saldo": 3985.6
  },
  {
    "Buchungsdatum": "23.08.2016",
    "Valuta": "23.08.2016",
    "Buchungstext": "Vergütung / 717018421",
    "Details": "TWINT AG\nKONSUMSTRASSE 20\n3007  BERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 100,
    "Saldo": 4000
  },
  {
    "Buchungsdatum": "22.08.2016",
    "Valuta": "22.08.2016",
    "Buchungstext": "Gutschrift / 716708432",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nOWKB",
    "Betrag Detail": "",
    "Gutschrift": 900,
    "Belastung": "",
    "Saldo": 4100
  },
  {
    "Buchungsdatum": "22.08.2016",
    "Valuta": "22.08.2016",
    "Buchungstext": "Belastung / 716653705",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nVORSORGE",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 3200
  },
  {
    "Buchungsdatum": "22.08.2016",
    "Valuta": "22.08.2016",
    "Buchungstext": "Sammelbelastung / 716653698",
    "Details": "Auftrag vom 22.08.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 5119.73,
    "Saldo": 3500
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nSchürmann Reto\nInfo:SALDOMANAGER",
    "Betrag Detail": 5119.73,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "19.08.2016",
    "Valuta": "18.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 716056076",
    "Details": "Bezugsort: 355.78 kkiosk\nTransaktionsdatum: 18.08.16 / 10:54:27\nKarten-Nr.: 76809406\nBetrag: CHF 8.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 8,
    "Saldo": 8619.73
  },
  {
    "Buchungsdatum": "19.08.2016",
    "Valuta": "17.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 716051876",
    "Details": "Bezugsort: KINO CAPITOL\nTransaktionsdatum: 17.08.16 / 18:27:38\nKarten-Nr.: 76809406\nBetrag: CHF 36.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 36,
    "Saldo": 8627.73
  },
  {
    "Buchungsdatum": "19.08.2016",
    "Valuta": "19.08.2016",
    "Buchungstext": "Gutschrift / 716042042",
    "Details": "Luzerner Kantonalbank AG\n88 ZFB\niHK Abrechnungskonti\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 8663.73
  },
  {
    "Buchungsdatum": "18.08.2016",
    "Valuta": "18.08.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 715876674",
    "Details": "Luzern 8   18.08.2016 10:45\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 3663.73
  },
  {
    "Buchungsdatum": "16.08.2016",
    "Valuta": "15.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 715374110",
    "Details": "Bezugsort: Arrival Duty Free 1\nTransaktionsdatum: 15.08.16 / 09:58:22\nKarten-Nr.: 76809406\nBetrag: CHF 57.10",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 57.1,
    "Saldo": 3863.73
  },
  {
    "Buchungsdatum": "15.08.2016",
    "Valuta": "17.08.2016",
    "Buchungstext": "Nennwertreduktion / 715249931",
    "Details": "N Akt Luzerner Kantonalbank CHF31 nom gesperrt 25.03.17 Mitarbeit\ner(116936014)",
    "Betrag Detail": "",
    "Gutschrift": 110,
    "Belastung": "",
    "Saldo": 3920.83
  },
  {
    "Buchungsdatum": "11.08.2016",
    "Valuta": "11.08.2016",
    "Buchungstext": "Bardividende / 713281710",
    "Details": "N Akt Apple Inc USD 0.00001 nom (908440)",
    "Betrag Detail": "",
    "Gutschrift": 16.33,
    "Belastung": "",
    "Saldo": 3810.83
  },
  {
    "Buchungsdatum": "10.08.2016",
    "Valuta": "09.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 714209530",
    "Details": "Bezugsort: COOP VITALITY KRIE\nTransaktionsdatum: 09.08.16 / 10:56:10\nKarten-Nr.: 76809406\nBetrag: CHF 13.90",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 13.9,
    "Saldo": 3794.5
  },
  {
    "Buchungsdatum": "10.08.2016",
    "Valuta": "09.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 714390449",
    "Details": "Bezugsort: COOP-2257\nTransaktionsdatum: 09.08.16 / 10:21:25\nKarten-Nr.: 76809406\nBetrag: CHF 4.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 4.8,
    "Saldo": 3808.4
  },
  {
    "Buchungsdatum": "10.08.2016",
    "Valuta": "09.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 714390332",
    "Details": "Bezugsort: COOP-2256 KRIENS S\nTransaktionsdatum: 09.08.16 / 10:54:42\nKarten-Nr.: 76809406\nBetrag: CHF 14.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 14.8,
    "Saldo": 3813.2
  },
  {
    "Buchungsdatum": "10.08.2016",
    "Valuta": "09.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 714386446",
    "Details": "Bezugsort: HORNBACH BAUMARKT LI\nTransaktionsdatum: 09.08.16 / 09:38:40\nKarten-Nr.: 76809406\nBetrag: CHF 25.85",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 25.85,
    "Saldo": 3828
  },
  {
    "Buchungsdatum": "09.08.2016",
    "Valuta": "06.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 714153378",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 06.08.16 / 13:54:22\nKarten-Nr.: 76809406\nBetrag: CHF 8.10",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 8.1,
    "Saldo": 3853.85
  },
  {
    "Buchungsdatum": "09.08.2016",
    "Valuta": "09.08.2016",
    "Buchungstext": "Vergütung / 714116082",
    "Details": "SANDRO KOPP\nBRUNNENMATTWEG 1\n6037 ROOT\nInfo:MALLORCA + TRINKGELD",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 195,
    "Saldo": 3861.95
  },
  {
    "Buchungsdatum": "08.08.2016",
    "Valuta": "06.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 713759618",
    "Details": "Bezugsort: AVIA LANDENBERGSTR.\nTransaktionsdatum: 06.08.16 / 09:43:47\nKarten-Nr.: 76809406\nBetrag: CHF 14.60",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 14.6,
    "Saldo": 4056.95
  },
  {
    "Buchungsdatum": "05.08.2016",
    "Valuta": "05.08.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 713708316",
    "Details": "Luzern 4   05.08.2016 17:22\nKartennummer: 76809406\nEUR   500\nWechselkurs  1.086",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 543,
    "Saldo": 4071.55
  },
  {
    "Buchungsdatum": "05.08.2016",
    "Valuta": "05.08.2016",
    "Buchungstext": "Belastung / 713703877",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 5000,
    "Saldo": 4614.55
  },
  {
    "Buchungsdatum": "05.08.2016",
    "Valuta": "05.08.2016",
    "Buchungstext": "Gutschrift / 713622569",
    "Details": "Priska Herzog\nLauerzweg 5\n6010 Kriens\n- - Info - -\nGELD ZURUECK",
    "Betrag Detail": "",
    "Gutschrift": 6000,
    "Belastung": "",
    "Saldo": 9614.55
  },
  {
    "Buchungsdatum": "05.08.2016",
    "Valuta": "03.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 713494584",
    "Details": "Bezugsort: k kiosk Airport Anku\nTransaktionsdatum: 03.08.16 / 18:21:30\nKarten-Nr.: 76809406\nBetrag: CHF 3.95",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 3.95,
    "Saldo": 3614.55
  },
  {
    "Buchungsdatum": "05.08.2016",
    "Valuta": "03.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 713492707",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 03.08.16 / 16:24:30\nKarten-Nr.: 76809406\nBetrag: CHF 20.40",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 20.4,
    "Saldo": 3618.5
  },
  {
    "Buchungsdatum": "04.08.2016",
    "Valuta": "01.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 713256049",
    "Details": "Bezugsort: Seehotel Schwert Che\nTransaktionsdatum: 01.08.16 / 20:40:45\nKarten-Nr.: 76809406\nBetrag: CHF 100.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 100,
    "Saldo": 3638.9
  },
  {
    "Buchungsdatum": "04.08.2016",
    "Valuta": "03.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 713253078",
    "Details": "Bezugsort: PARKHAUS 2\nTransaktionsdatum: 03.08.16 / 18:29:05\nKarten-Nr.: 76809406\nBetrag: CHF 6.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6,
    "Saldo": 3738.9
  },
  {
    "Buchungsdatum": "04.08.2016",
    "Valuta": "03.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 713252804",
    "Details": "Bezugsort: METZGEREI KAUFFMANN\nTransaktionsdatum: 03.08.16 / 16:07:23\nKarten-Nr.: 76809406\nBetrag: CHF 50.35",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 50.35,
    "Saldo": 3744.9
  },
  {
    "Buchungsdatum": "03.08.2016",
    "Valuta": "03.08.2016",
    "Buchungstext": "Gutschrift / 713033072",
    "Details": "Im Auftrag von Schürmann Reto, Kriens",
    "Betrag Detail": "",
    "Gutschrift": 3000,
    "Belastung": "",
    "Saldo": 3795.25
  },
  {
    "Buchungsdatum": "03.08.2016",
    "Valuta": "02.08.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 712781916",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 02.08.16 / 11:33:33\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 795.25
  },
  {
    "Buchungsdatum": "02.08.2016",
    "Valuta": "30.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 712309100",
    "Details": "Bezugsort: TAMOIL TANSKTELLE\nTransaktionsdatum: 30.07.16 / 16:21:15\nKarten-Nr.: 76809406\nBetrag: CHF 6.05",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.05,
    "Saldo": 995.25
  },
  {
    "Buchungsdatum": "02.08.2016",
    "Valuta": "02.08.2016",
    "Buchungstext": "Vergütung / 712575985",
    "Details": "PROGRES VERSICHERUNGEN AG\nDEBITORENMANAGEMENT\n8081  ZUERICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 1001.3
  },
  {
    "Buchungsdatum": "01.08.2016",
    "Valuta": "30.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 712360114",
    "Details": "Bezugsort: 905, LUZERN\nTransaktionsdatum: 30.07.16 / 12:30:11\nKarten-Nr.: 76809406\nBetrag: CHF 70.65",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 70.65,
    "Saldo": 1302.7
  },
  {
    "Buchungsdatum": "01.08.2016",
    "Valuta": "30.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 712295602",
    "Details": "Bezugsort: MIGROS MM SCHWEIZERH\nTransaktionsdatum: 30.07.16 / 12:59:50\nKarten-Nr.: 76809406\nBetrag: CHF 6.20",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.2,
    "Saldo": 1373.35
  },
  {
    "Buchungsdatum": "01.08.2016",
    "Valuta": "30.07.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 712329419",
    "Details": "Luzern 4   30.07.2016 23:42\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 1379.55
  },
  {
    "Buchungsdatum": "29.07.2016",
    "Valuta": "29.07.2016",
    "Buchungstext": "Belastung / 711935749",
    "Details": "Zu Gunsten von Schürmann Reto &/o Herzog Priska, Kriens\nMIETE LAUERZWEG",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 400,
    "Saldo": 1459.55
  },
  {
    "Buchungsdatum": "29.07.2016",
    "Valuta": "29.07.2016",
    "Buchungstext": "Belastung / 711928698",
    "Details": "Zu Gunsten von Schürmann Reto &/o Herzog Priska, Kriens\nMIETE NACHZAHLEN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 800,
    "Saldo": 1859.55
  },
  {
    "Buchungsdatum": "29.07.2016",
    "Valuta": "29.07.2016",
    "Buchungstext": "Belastung / 711743905",
    "Details": "Zu Gunsten von Schürmann Reto &/o Herzog Priska, Kriens\nHAUSHALTSKONTO MONATLICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 2659.55
  },
  {
    "Buchungsdatum": "28.07.2016",
    "Valuta": "27.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 711123200",
    "Details": "Bezugsort: DENNER SATELLIT 6519\nTransaktionsdatum: 27.07.16 / 18:21:10\nKarten-Nr.: 76809406\nBetrag: CHF 55.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 55,
    "Saldo": 2959.55
  },
  {
    "Buchungsdatum": "28.07.2016",
    "Valuta": "28.07.2016",
    "Buchungstext": "Belastung LSV / 710895101",
    "Details": "LSV EKB01\nVISECA CARD SERVICES SA\nHagenholzstrasse 56\nPostfach 7007\n8050 Zuerich\nRef: 950230100011075670083169194\n1107567008316919\nBELASTUNG GEMAESS RECHNUNG\nVOM 22.07.2016\nKARTENKONTO 1107 5670 0831 6919",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 353.7,
    "Saldo": 3014.55
  },
  {
    "Buchungsdatum": "28.07.2016",
    "Valuta": "28.07.2016",
    "Buchungstext": "Vergütung / 711041423",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH 3050 BERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 45.4,
    "Saldo": 3368.25
  },
  {
    "Buchungsdatum": "26.07.2016",
    "Valuta": "23.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 710381553",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 23.07.16 / 15:52:03\nKarten-Nr.: 76809406\nBetrag: CHF 30.10",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 30.1,
    "Saldo": 3413.65
  },
  {
    "Buchungsdatum": "25.07.2016",
    "Valuta": "22.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 710035114",
    "Details": "Bezugsort: k kiosk Buobenmatt\nTransaktionsdatum: 22.07.16 / 18:05:05\nKarten-Nr.: 76809406\nBetrag: CHF 7.40",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 7.4,
    "Saldo": 3443.75
  },
  {
    "Buchungsdatum": "25.07.2016",
    "Valuta": "20.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 709151221",
    "Details": "Bezugsort: DISCOUNT BENZIN\nTransaktionsdatum: 20.07.16 / 22:17:26\nKarten-Nr.: 76809406\nBetrag: CHF 6.70",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.7,
    "Saldo": 3451.15
  },
  {
    "Buchungsdatum": "25.07.2016",
    "Valuta": "25.07.2016",
    "Buchungstext": "Gutschrift / 709974783",
    "Details": "Im Auftrag von Schürmann Reto, Kriens",
    "Betrag Detail": "",
    "Gutschrift": 3000,
    "Belastung": "",
    "Saldo": 3457.85
  },
  {
    "Buchungsdatum": "22.07.2016",
    "Valuta": "20.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 709458877",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 20.07.16 / 18:28:53\nKarten-Nr.: 76809406\nBetrag: CHF 12.65",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 12.65,
    "Saldo": 457.85
  },
  {
    "Buchungsdatum": "22.07.2016",
    "Valuta": "20.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 709452784",
    "Details": "Bezugsort: Restaurant zur Werks\nTransaktionsdatum: 20.07.16 / 12:56:50\nKarten-Nr.: 76809406\nBetrag: CHF 29.50",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 29.5,
    "Saldo": 470.5
  },
  {
    "Buchungsdatum": "22.07.2016",
    "Valuta": "22.07.2016",
    "Buchungstext": "Vergütung / 709428793",
    "Details": "PRISKA HERZOG\nLAUERZWEG 5\n6010 KRIENS\nInfo:GELD FERIEN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 3000,
    "Saldo": 500
  },
  {
    "Buchungsdatum": "22.07.2016",
    "Valuta": "22.07.2016",
    "Buchungstext": "Belastung / 709405241",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nSALDOMANAGER",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 1642.85,
    "Saldo": 3500
  },
  {
    "Buchungsdatum": "21.07.2016",
    "Valuta": "21.07.2016",
    "Buchungstext": "Vergütung / 709247776",
    "Details": "PRISKA HERZOG\nLAUERZWEG 5\n6010 KRIENS\nInfo:GELD FERIEN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 3000,
    "Saldo": 5142.85
  },
  {
    "Buchungsdatum": "21.07.2016",
    "Valuta": "19.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 708828283",
    "Details": "Bezugsort: little istanbul GmbH\nTransaktionsdatum: 19.07.16 / 09:57:03\nKarten-Nr.: 76809406\nBetrag: CHF 9.90",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 9.9,
    "Saldo": 8142.85
  },
  {
    "Buchungsdatum": "20.07.2016",
    "Valuta": "20.07.2016",
    "Buchungstext": "Gutschrift / 709004637",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nOWKB",
    "Betrag Detail": "",
    "Gutschrift": 900,
    "Belastung": "",
    "Saldo": 8152.75
  },
  {
    "Buchungsdatum": "20.07.2016",
    "Valuta": "20.07.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 709004075",
    "Details": "Luzern 4   20.07.2016 07:29\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 7252.75
  },
  {
    "Buchungsdatum": "20.07.2016",
    "Valuta": "20.07.2016",
    "Buchungstext": "Gutschrift / 708964856",
    "Details": "Luzerner Kantonalbank AG\n88 ZFB\niHK Abrechnungskonti\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 7332.75
  },
  {
    "Buchungsdatum": "20.07.2016",
    "Valuta": "20.07.2016",
    "Buchungstext": "Belastung / 708942004",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nVORSORGE",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 2332.75
  },
  {
    "Buchungsdatum": "18.07.2016",
    "Valuta": "15.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 708544258",
    "Details": "Bezugsort: Coiffure Team Graf\nTransaktionsdatum: 15.07.16 / 13:21:12\nKarten-Nr.: 76809406\nBetrag: CHF 64.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 64.8,
    "Saldo": 2632.75
  },
  {
    "Buchungsdatum": "18.07.2016",
    "Valuta": "16.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 708540187",
    "Details": "Bezugsort: COOP TS KASERNENSTR.\nTransaktionsdatum: 16.07.16 / 16:57:49\nKarten-Nr.: 76809406\nBetrag: CHF 9.45",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 9.45,
    "Saldo": 2697.55
  },
  {
    "Buchungsdatum": "18.07.2016",
    "Valuta": "15.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 708033122",
    "Details": "Bezugsort: DRINKS OF THE WORLD\nTransaktionsdatum: 15.07.16 / 17:34:55\nKarten-Nr.: 76809406\nBetrag: CHF 18.40",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 18.4,
    "Saldo": 2707
  },
  {
    "Buchungsdatum": "18.07.2016",
    "Valuta": "15.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 708531697",
    "Details": "Bezugsort: OCHSNER SPORT / 319\nTransaktionsdatum: 15.07.16 / 17:25:57\nKarten-Nr.: 76809406\nBetrag: CHF 9.90",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 9.9,
    "Saldo": 2725.4
  },
  {
    "Buchungsdatum": "15.07.2016",
    "Valuta": "14.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 707884361",
    "Details": "Bezugsort: MIGROS M ALLMEND LUZ\nTransaktionsdatum: 14.07.16 / 18:43:59\nKarten-Nr.: 76809406\nBetrag: CHF 24.10",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 24.1,
    "Saldo": 2735.3
  },
  {
    "Buchungsdatum": "12.07.2016",
    "Valuta": "10.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 707130516",
    "Details": "Bezugsort: PARKHAUS 1\nTransaktionsdatum: 10.07.16 / 08:12:08\nKarten-Nr.: 76809406\nBetrag: CHF 4.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 4,
    "Saldo": 2759.4
  },
  {
    "Buchungsdatum": "08.07.2016",
    "Valuta": "07.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 706104744",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 07.07.16 / 09:06:31\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 2763.4
  },
  {
    "Buchungsdatum": "06.07.2016",
    "Valuta": "05.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 705698133",
    "Details": "Bezugsort: MIGROL ARSENALSTR.\nTransaktionsdatum: 05.07.16 / 20:35:32\nKarten-Nr.: 76809406\nBetrag: CHF 6.16",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.16,
    "Saldo": 2963.4
  },
  {
    "Buchungsdatum": "06.07.2016",
    "Valuta": "04.07.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 705775142",
    "Details": "Bezugsort: k kiosk Buobenmatt\nTransaktionsdatum: 04.07.16 / 16:17:47\nKarten-Nr.: 76809406\nBetrag: CHF 7.40",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 7.4,
    "Saldo": 2969.56
  },
  {
    "Buchungsdatum": "05.07.2016",
    "Valuta": "05.07.2016",
    "Buchungstext": "Gutschrift / 705526125",
    "Details": "Im Auftrag von Schürmann Reto &/o Herzog Priska, Kriens\nUSD",
    "Betrag Detail": "",
    "Gutschrift": 400,
    "Belastung": "",
    "Saldo": 2976.96
  },
  {
    "Buchungsdatum": "05.07.2016",
    "Valuta": "05.07.2016",
    "Buchungstext": "Kassentransaktion / 705519650",
    "Details": "Luzern 10:25",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 399.5,
    "Saldo": 2576.96
  },
  {
    "Buchungsdatum": "01.07.2016",
    "Valuta": "01.07.2016",
    "Buchungstext": "Vergütung / 704428603",
    "Details": "PROGRES VERSICHERUNGEN AG\nDEBITORENMANAGEMENT\n8081  ZUERICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 2976.46
  },
  {
    "Buchungsdatum": "30.06.2016",
    "Valuta": "30.06.2016",
    "Buchungstext": "Zinsen / 704311034",
    "Details": "Abrechnungsperiode: 31.12.2015 - 30.06.2016\nHabenzinsen: CHF 6.34\nSollzinsen: CHF -0.01\nVerrechnungssteuer (35 %): CHF -2.22",
    "Betrag Detail": "",
    "Gutschrift": 4.11,
    "Belastung": "",
    "Saldo": 3277.86
  },
  {
    "Buchungsdatum": "30.06.2016",
    "Valuta": "30.06.2016",
    "Buchungstext": "Belastung / 703673090",
    "Details": "Zu Gunsten von Schürmann Reto &/o Herzog Priska, Kriens\nHAUSHALTSKONTO MONATLICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 3273.75
  },
  {
    "Buchungsdatum": "29.06.2016",
    "Valuta": "29.06.2016",
    "Buchungstext": "Vergütung / 702875086",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH 3050 BERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 40.4,
    "Saldo": 3573.75
  },
  {
    "Buchungsdatum": "28.06.2016",
    "Valuta": "28.06.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 702769618",
    "Details": "Luzern 4   28.06.2016 17:09\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 100,
    "Saldo": 3614.15
  },
  {
    "Buchungsdatum": "28.06.2016",
    "Valuta": "28.06.2016",
    "Buchungstext": "Gutschrift / 702609207",
    "Details": "Darlehenskasse der Allg.\nBaugenossenschaft Luzern\nClaridenstrasse 1\n6003 Luzern\n- - Info - -\ngemüss auftrag",
    "Betrag Detail": "",
    "Gutschrift": 358.55,
    "Belastung": "",
    "Saldo": 3714.15
  },
  {
    "Buchungsdatum": "27.06.2016",
    "Valuta": "24.06.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 702113859",
    "Details": "Bezugsort: AVIA TANKSTELLE\nTransaktionsdatum: 24.06.16 / 21:30:47\nKarten-Nr.: 76809406\nBetrag: CHF 8.40",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 8.4,
    "Saldo": 3355.6
  },
  {
    "Buchungsdatum": "27.06.2016",
    "Valuta": "27.06.2016",
    "Buchungstext": "Vergütung / 701925841",
    "Details": "PRISKA HERZOG\nLAUERZWEG 5\n6010 KRIENS\nInfo:EINKAUFSABRECHNUNG",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 136,
    "Saldo": 3364
  },
  {
    "Buchungsdatum": "22.06.2016",
    "Valuta": "22.06.2016",
    "Buchungstext": "Belastung / 700772402",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nSALDOMANAGER",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 2950.23,
    "Saldo": 3500
  },
  {
    "Buchungsdatum": "20.06.2016",
    "Valuta": "20.06.2016",
    "Buchungstext": "Gutschrift / 700345909",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nOWKB",
    "Betrag Detail": "",
    "Gutschrift": 900,
    "Belastung": "",
    "Saldo": 6450.23
  },
  {
    "Buchungsdatum": "20.06.2016",
    "Valuta": "20.06.2016",
    "Buchungstext": "Gutschrift / 700337725",
    "Details": "Luzerner Kantonalbank AG\n88 ZFB\niHK Abrechnungskonti\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 5550.23
  },
  {
    "Buchungsdatum": "20.06.2016",
    "Valuta": "18.06.2016",
    "Buchungstext": "Geldbezug Bancomat / 700188291",
    "Details": "Bezugsort: UBS LUZERN-SBB-495\nTransaktionsdatum: 18.06.16 / 16:24:21\nKarten-Nr.: 76809406\nBetrag: CHF 100.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 100,
    "Saldo": 550.23
  },
  {
    "Buchungsdatum": "20.06.2016",
    "Valuta": "20.06.2016",
    "Buchungstext": "Belastung / 700251476",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nVORSORGE",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 650.23
  },
  {
    "Buchungsdatum": "17.06.2016",
    "Valuta": "17.06.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 699723104",
    "Details": "Luzern 9   17.06.2016 13:15\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 100,
    "Saldo": 950.23
  },
  {
    "Buchungsdatum": "16.06.2016",
    "Valuta": "16.06.2016",
    "Buchungstext": "Belastung / 699419034",
    "Details": "Zu Gunsten von Schürmann Reto & Herzog Priska, Kriens\nZUSTUPF FREDY",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 500,
    "Saldo": 1050.23
  },
  {
    "Buchungsdatum": "16.06.2016",
    "Valuta": "16.06.2016",
    "Buchungstext": "Einzahlung Bancomat Noten / 699411923",
    "Details": "Luzern 7   16.06.2016 08:13\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": 800,
    "Belastung": "",
    "Saldo": 1550.23
  },
  {
    "Buchungsdatum": "16.06.2016",
    "Valuta": "15.06.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 699239101",
    "Details": "Bezugsort: CONFISEUR BACHMANN A\nTransaktionsdatum: 15.06.16 / 13:30:52\nKarten-Nr.: 76809406\nBetrag: CHF 100.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 100,
    "Saldo": 750.23
  },
  {
    "Buchungsdatum": "15.06.2016",
    "Valuta": "14.06.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 699144312",
    "Details": "Bezugsort: DRINKS OF THE WORLD\nTransaktionsdatum: 14.06.16 / 12:46:20\nKarten-Nr.: 76809406\nBetrag: CHF 29.50",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 29.5,
    "Saldo": 850.23
  },
  {
    "Buchungsdatum": "15.06.2016",
    "Valuta": "14.06.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 698946436",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 14.06.16 / 09:35:47\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 879.73
  },
  {
    "Buchungsdatum": "14.06.2016",
    "Valuta": "12.06.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 698553122",
    "Details": "Bezugsort: SHELL TANKSTELLE\nTransaktionsdatum: 12.06.16 / 15:33:45\nKarten-Nr.: 76809406\nBetrag: CHF 14.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 14,
    "Saldo": 1079.73
  },
  {
    "Buchungsdatum": "13.06.2016",
    "Valuta": "11.06.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 698513885",
    "Details": "Bezugsort: OCHSNER SPORT / 456\nTransaktionsdatum: 11.06.16 / 11:48:39\nKarten-Nr.: 76809406\nBetrag: CHF 141.60",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 141.6,
    "Saldo": 1093.73
  },
  {
    "Buchungsdatum": "13.06.2016",
    "Valuta": "11.06.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 698648310",
    "Details": "Bezugsort: COOP-2849 KRIENS P\nTransaktionsdatum: 11.06.16 / 12:03:29\nKarten-Nr.: 76809406\nBetrag: CHF 26.10",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 26.1,
    "Saldo": 1235.33
  },
  {
    "Buchungsdatum": "10.06.2016",
    "Valuta": "08.06.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 698275580",
    "Details": "Bezugsort: Coiffure Team Graf\nTransaktionsdatum: 08.06.16 / 13:02:23\nKarten-Nr.: 76809406\nBetrag: CHF 64.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 64.8,
    "Saldo": 1261.43
  },
  {
    "Buchungsdatum": "08.06.2016",
    "Valuta": "07.06.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 697794270",
    "Details": "Bezugsort: ISTANBUL GRILL\nTransaktionsdatum: 07.06.16 / 12:38:37\nKarten-Nr.: 76809406\nBetrag: CHF 15.30",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 15.3,
    "Saldo": 1326.23
  },
  {
    "Buchungsdatum": "03.06.2016",
    "Valuta": "03.06.2016",
    "Buchungstext": "Vergütung / 696688321",
    "Details": "WORLDCUP.CH\nUNTERE DATTENBERGSTRASSE 18\n6005 LUZERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 20,
    "Saldo": 1341.53
  },
  {
    "Buchungsdatum": "02.06.2016",
    "Valuta": "02.06.2016",
    "Buchungstext": "Gutschrift / 696495102",
    "Details": "Progrüs Versicherungen AG\nZürichstrasse 130\n8600 Dübendorf\n- - Info - -\nU/Abr. vom 28.05.2016\n52913175\nLeistung vom 05.05.2016\nSchürmann Reto",
    "Betrag Detail": "",
    "Gutschrift": 200,
    "Belastung": "",
    "Saldo": 1361.53
  },
  {
    "Buchungsdatum": "01.06.2016",
    "Valuta": "01.06.2016",
    "Buchungstext": "Vergütung / 696087249",
    "Details": "PROGRES VERSICHERUNGEN AG\nDEBITORENMANAGEMENT\n8081  ZUERICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 1161.53
  },
  {
    "Buchungsdatum": "31.05.2016",
    "Valuta": "31.05.2016",
    "Buchungstext": "Gutschrift / 695763953",
    "Details": "Im Auftrag von Schürmann Reto, Kriens",
    "Betrag Detail": "",
    "Gutschrift": 1000,
    "Belastung": "",
    "Saldo": 1462.93
  },
  {
    "Buchungsdatum": "31.05.2016",
    "Valuta": "29.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 695592713",
    "Details": "Bezugsort: 773 COOP TS KRIENS\nTransaktionsdatum: 29.05.16 / 16:20:30\nKarten-Nr.: 76809406\nBetrag: CHF 20.75",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 20.75,
    "Saldo": 462.93
  },
  {
    "Buchungsdatum": "31.05.2016",
    "Valuta": "31.05.2016",
    "Buchungstext": "Belastung / 695525920",
    "Details": "Zu Gunsten von Schürmann Reto &/o Herzog Priska, Kriens\nHAUSHALTSKONTO MONATLICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 483.68
  },
  {
    "Buchungsdatum": "30.05.2016",
    "Valuta": "30.05.2016",
    "Buchungstext": "Vergütung / 694876851",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH 3050 BERN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 35.4,
    "Saldo": 783.68
  },
  {
    "Buchungsdatum": "30.05.2016",
    "Valuta": "30.05.2016",
    "Buchungstext": "Belastung LSV / 694590812",
    "Details": "LSV EKB01\nVISECA CARD SERVICES SA\nHagenholzstrasse 56\nPostfach 7007\n8050 Zuerich\nRef: 950230100011075670083169194\n1107567008316919\nBELASTUNG GEMAESS RECHNUNG\nVOM 23.05.2016\nKARTENKONTO 1107 5670 0831 6919",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 707.85,
    "Saldo": 819.08
  },
  {
    "Buchungsdatum": "27.05.2016",
    "Valuta": "26.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 694087826",
    "Details": "Bezugsort: MIGROL ARSENALSTR.\nTransaktionsdatum: 26.05.16 / 14:29:31\nKarten-Nr.: 76809406\nBetrag: CHF 6.82",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.82,
    "Saldo": 1526.93
  },
  {
    "Buchungsdatum": "27.05.2016",
    "Valuta": "26.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 694322728",
    "Details": "Bezugsort: COOP-3705\nTransaktionsdatum: 26.05.16 / 18:10:33\nKarten-Nr.: 76809406\nBetrag: CHF 25.10",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 25.1,
    "Saldo": 1533.75
  },
  {
    "Buchungsdatum": "26.05.2016",
    "Valuta": "26.05.2016",
    "Buchungstext": "Belastung / 694079187",
    "Details": "Zu Gunsten von Schürmann Reto &/o Herzog Priska, Kriens",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 1000,
    "Saldo": 1558.85
  },
  {
    "Buchungsdatum": "24.05.2016",
    "Valuta": "21.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 693262586",
    "Details": "Bezugsort: HOTEL RESTAURANT SEE\nTransaktionsdatum: 21.05.16 / 15:27:14\nKarten-Nr.: 76809406\nBetrag: CHF 16.60",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 16.6,
    "Saldo": 2558.85
  },
  {
    "Buchungsdatum": "24.05.2016",
    "Valuta": "21.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 693256840",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 21.05.16 / 10:08:35\nKarten-Nr.: 76809406\nBetrag: CHF 32.95",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 32.95,
    "Saldo": 2575.45
  },
  {
    "Buchungsdatum": "23.05.2016",
    "Valuta": "21.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 692818963",
    "Details": "Bezugsort: XAVER METZ\nTransaktionsdatum: 21.05.16 / 11:35:13\nKarten-Nr.: 76809406\nBetrag: CHF 891.60",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 891.6,
    "Saldo": 2608.4
  },
  {
    "Buchungsdatum": "23.05.2016",
    "Valuta": "23.05.2016",
    "Buchungstext": "Belastung / 692943049",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nSALDOMANAGER",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 3040.63,
    "Saldo": 3500
  },
  {
    "Buchungsdatum": "20.05.2016",
    "Valuta": "20.05.2016",
    "Buchungstext": "Gutschrift / 692344062",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nOWKB",
    "Betrag Detail": "",
    "Gutschrift": 900,
    "Belastung": "",
    "Saldo": 6540.63
  },
  {
    "Buchungsdatum": "20.05.2016",
    "Valuta": "19.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 692306811",
    "Details": "Bezugsort: VONMOOS, SPORT + HOB\nTransaktionsdatum: 19.05.16 / 18:18:47\nKarten-Nr.: 76809406\nBetrag: CHF 55.20",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 55.2,
    "Saldo": 5640.63
  },
  {
    "Buchungsdatum": "20.05.2016",
    "Valuta": "18.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 691974274",
    "Details": "Bezugsort: Media Markt Kriens\nTransaktionsdatum: 18.05.16 / 19:09:31\nKarten-Nr.: 76809406\nBetrag: CHF 566.85",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 566.85,
    "Saldo": 5695.83
  },
  {
    "Buchungsdatum": "20.05.2016",
    "Valuta": "20.05.2016",
    "Buchungstext": "Gutschrift / 692283932",
    "Details": "Luzerner Kantonalbank AG\n88 ZFA\niHK Abrechnungskonti\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 6262.68
  },
  {
    "Buchungsdatum": "20.05.2016",
    "Valuta": "20.05.2016",
    "Buchungstext": "Belastung / 692234584",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nVORSORGE",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 1262.68
  },
  {
    "Buchungsdatum": "19.05.2016",
    "Valuta": "18.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 691878253",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 18.05.16 / 09:15:53\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 1562.68
  },
  {
    "Buchungsdatum": "18.05.2016",
    "Valuta": "18.05.2016",
    "Buchungstext": "Gutschrift / 691852614",
    "Details": "Herzog Renate und\nKüchli Patrick\nEichenstrasse 21\n6015 Luzern\n- - Info - -\nMittagessen Schwabe & Suter",
    "Betrag Detail": "",
    "Gutschrift": 30,
    "Belastung": "",
    "Saldo": 1762.68
  },
  {
    "Buchungsdatum": "18.05.2016",
    "Valuta": "17.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 691671821",
    "Details": "Bezugsort: MOEVENPICK K'BANK\nTransaktionsdatum: 17.05.16 / 12:15:37\nKarten-Nr.: 76809406\nBetrag: CHF 11.40",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 11.4,
    "Saldo": 1732.68
  },
  {
    "Buchungsdatum": "18.05.2016",
    "Valuta": "14.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 691818380",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 14.05.16 / 15:18:13\nKarten-Nr.: 76809406\nBetrag: CHF 25.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 25.8,
    "Saldo": 1744.08
  },
  {
    "Buchungsdatum": "17.05.2016",
    "Valuta": "17.05.2016",
    "Buchungstext": "Bardividende / 690916838",
    "Details": "N Akt UBS Group AG CHF 0.1 nom (24476758)",
    "Betrag Detail": "",
    "Gutschrift": 127.5,
    "Belastung": "",
    "Saldo": 1769.88
  },
  {
    "Buchungsdatum": "17.05.2016",
    "Valuta": "16.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 691587039",
    "Details": "Bezugsort: COOP-3705\nTransaktionsdatum: 16.05.16 / 13:21:40\nKarten-Nr.: 76809406\nBetrag: CHF 53.45",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 53.45,
    "Saldo": 1642.38
  },
  {
    "Buchungsdatum": "17.05.2016",
    "Valuta": "17.05.2016",
    "Buchungstext": "Vergütung / 691533122",
    "Details": "TESPRESS TEXTILPFLEGE\nROTHENBURGSTRASSE 2\n6020 EMMENBRUECKE",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 31.6,
    "Saldo": 1695.83
  },
  {
    "Buchungsdatum": "16.05.2016",
    "Valuta": "13.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 691440079",
    "Details": "Bezugsort: Ristorante Due\nTransaktionsdatum: 13.05.16 / 13:12:27\nKarten-Nr.: 76809406\nBetrag: CHF 65.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 65,
    "Saldo": 1727.43
  },
  {
    "Buchungsdatum": "12.05.2016",
    "Valuta": "12.05.2016",
    "Buchungstext": "Bardividende / 689650071",
    "Details": "N Akt Apple Inc USD 0.00001 nom (908440)",
    "Betrag Detail": "",
    "Gutschrift": 16.28,
    "Belastung": "",
    "Saldo": 1792.43
  },
  {
    "Buchungsdatum": "12.05.2016",
    "Valuta": "11.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 690809512",
    "Details": "Bezugsort: VONMOOS, SPORT + HOB\nTransaktionsdatum: 11.05.16 / 18:23:05\nKarten-Nr.: 76809406\nBetrag: CHF 72.40",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 72.4,
    "Saldo": 1776.15
  },
  {
    "Buchungsdatum": "11.05.2016",
    "Valuta": "10.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 690648772",
    "Details": "Bezugsort: MIGROS FITNESSPARK N\nTransaktionsdatum: 10.05.16 / 22:17:09\nKarten-Nr.: 76809406\nBetrag: CHF 13.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 13,
    "Saldo": 1848.55
  },
  {
    "Buchungsdatum": "10.05.2016",
    "Valuta": "09.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 690430827",
    "Details": "Bezugsort: MIGROS FITNESSPARK L\nTransaktionsdatum: 09.05.16 / 19:21:37\nKarten-Nr.: 76809406\nBetrag: CHF 30.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 30,
    "Saldo": 1861.55
  },
  {
    "Buchungsdatum": "09.05.2016",
    "Valuta": "07.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 690191573",
    "Details": "Bezugsort: COOP TS BADENERSTR.\nTransaktionsdatum: 07.05.16 / 13:30:31\nKarten-Nr.: 76809406\nBetrag: CHF 55.30",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 55.3,
    "Saldo": 1891.55
  },
  {
    "Buchungsdatum": "09.05.2016",
    "Valuta": "06.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 689879501",
    "Details": "Bezugsort: MIGROS FITNESSPARK L\nTransaktionsdatum: 06.05.16 / 11:56:53\nKarten-Nr.: 76809406\nBetrag: CHF 1,420.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 1420,
    "Saldo": 1946.85
  },
  {
    "Buchungsdatum": "09.05.2016",
    "Valuta": "06.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 690168396",
    "Details": "Bezugsort: SPAR SUPERMARKT LUZE\nTransaktionsdatum: 06.05.16 / 17:43:16\nKarten-Nr.: 76809406\nBetrag: CHF 25.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 25,
    "Saldo": 3366.85
  },
  {
    "Buchungsdatum": "06.05.2016",
    "Valuta": "06.05.2016",
    "Buchungstext": "Gutschrift / 689822760",
    "Details": "SIX PAYMENT SERVICES AG\n8005 ZURICH\n- - Info - -\nPAYMIT AUSZAHLUNG",
    "Betrag Detail": "",
    "Gutschrift": 200,
    "Belastung": "",
    "Saldo": 3391.85
  },
  {
    "Buchungsdatum": "05.05.2016",
    "Valuta": "03.05.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 689619209",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 03.05.16 / 18:32:35\nKarten-Nr.: 76809406\nBetrag: CHF 23.95",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 23.95,
    "Saldo": 3191.85
  },
  {
    "Buchungsdatum": "02.05.2016",
    "Valuta": "02.05.2016",
    "Buchungstext": "Gutschrift / 688844969",
    "Details": "Im Auftrag von Schürmann Reto, Kriens",
    "Betrag Detail": "",
    "Gutschrift": 2500,
    "Belastung": "",
    "Saldo": 3215.8
  },
  {
    "Buchungsdatum": "02.05.2016",
    "Valuta": "02.05.2016",
    "Buchungstext": "Vergütung / 688610039",
    "Details": "PROGRES VERSICHERUNGEN AG\nDEBITORENMANAGEMENT\n8081  ZUERICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 715.8
  },
  {
    "Buchungsdatum": "29.04.2016",
    "Valuta": "28.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 687910578",
    "Details": "Bezugsort: MIGROS MM HOFMATT KR\nTransaktionsdatum: 28.04.16 / 18:23:15\nKarten-Nr.: 76809406\nBetrag: CHF 41.20",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 41.2,
    "Saldo": 1017.2
  },
  {
    "Buchungsdatum": "28.04.2016",
    "Valuta": "28.04.2016",
    "Buchungstext": "Gutschrift / 687275208",
    "Details": "Progrüs Versicherungen AG\nZürichstrasse 130\n8600 Dübendorf\n- - Info - -\nU/Abr. vom 23.04.2016\n52500513\nLeistung vom 16.03.2016\nSchürmann Reto",
    "Betrag Detail": "",
    "Gutschrift": 66.5,
    "Belastung": "",
    "Saldo": 1058.4
  },
  {
    "Buchungsdatum": "28.04.2016",
    "Valuta": "26.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 687218091",
    "Details": "Bezugsort: Coiffure Team Graf\nTransaktionsdatum: 26.04.16 / 13:13:57\nKarten-Nr.: 76809406\nBetrag: CHF 64.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 64.8,
    "Saldo": 991.9
  },
  {
    "Buchungsdatum": "28.04.2016",
    "Valuta": "28.04.2016",
    "Buchungstext": "Sammelbelastung / 687101074",
    "Details": "Auftrag vom 28.04.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 606.4,
    "Saldo": 1056.7
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "RETO SCHUERMANN\nLAUERZWEG 5\n6010 KRIENS\nInfo:GEMEINSAMES KONTO",
    "Betrag Detail": 150,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "RETO SCHUERMANN\nLAUERZWEG 5\n6010 KRIENS\nInfo:MIETE LAUERZWEG",
    "Betrag Detail": 400,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH 3050 BERN",
    "Betrag Detail": 56.4,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "28.04.2016",
    "Valuta": "28.04.2016",
    "Buchungstext": "Belastung LSV / 686987710",
    "Details": "LSV EKB01\nVISECA CARD SERVICES SA\nHagenholzstrasse 56\nPostfach 7007\n8050 Zuerich\nRef: 950230100011075670083169194\n1107567008316919\nBELASTUNG GEMAESS RECHNUNG\nVOM 22.04.2016\nKARTENKONTO 1107 5670 0831 6919",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 1607,
    "Saldo": 1663.1
  },
  {
    "Buchungsdatum": "27.04.2016",
    "Valuta": "27.04.2016",
    "Buchungstext": "Gutschrift / 686795032",
    "Details": "SANDRO KOPP\n6037 ROOT\n- - Info - -\nPARDDDDDDDY",
    "Betrag Detail": "",
    "Gutschrift": 90,
    "Belastung": "",
    "Saldo": 3270.1
  },
  {
    "Buchungsdatum": "27.04.2016",
    "Valuta": "26.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 686639034",
    "Details": "Bezugsort: MIGROL ARSENALSTR.\nTransaktionsdatum: 26.04.16 / 20:53:22\nKarten-Nr.: 76809406\nBetrag: CHF 6.75",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.75,
    "Saldo": 3180.1
  },
  {
    "Buchungsdatum": "26.04.2016",
    "Valuta": "23.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 686422921",
    "Details": "Bezugsort: DATA QUEST AG\nTransaktionsdatum: 23.04.16 / 09:45:05\nKarten-Nr.: 76809406\nBetrag: CHF 89.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 89,
    "Saldo": 3186.85
  },
  {
    "Buchungsdatum": "25.04.2016",
    "Valuta": "22.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 686082146",
    "Details": "Bezugsort: Rest Bar Ranch\nTransaktionsdatum: 22.04.16 / 20:23:36\nKarten-Nr.: 76809406\nBetrag: CHF 87.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 87,
    "Saldo": 3275.85
  },
  {
    "Buchungsdatum": "25.04.2016",
    "Valuta": "23.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 686080336",
    "Details": "Bezugsort: VONMOOS, SPORT + HOB\nTransaktionsdatum: 23.04.16 / 10:01:19\nKarten-Nr.: 76809406\nBetrag: CHF 12.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 12,
    "Saldo": 3362.85
  },
  {
    "Buchungsdatum": "25.04.2016",
    "Valuta": "23.04.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 685809372",
    "Details": "Pfistergasse Luzern   23.04.2016 10:06\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 100,
    "Saldo": 3374.85
  },
  {
    "Buchungsdatum": "22.04.2016",
    "Valuta": "21.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 685458917",
    "Details": "Bezugsort: OTTO'S AG 15, LITTAU\nTransaktionsdatum: 21.04.16 / 17:47:14\nKarten-Nr.: 76809406\nBetrag: CHF 25.15",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 25.15,
    "Saldo": 3474.85
  },
  {
    "Buchungsdatum": "22.04.2016",
    "Valuta": "22.04.2016",
    "Buchungstext": "Belastung / 685495167",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nSALDOMANAGER",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 4338.8,
    "Saldo": 3500
  },
  {
    "Buchungsdatum": "21.04.2016",
    "Valuta": "19.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 685307186",
    "Details": "Bezugsort: McDonald's Bern\nTransaktionsdatum: 19.04.16 / 22:52:19\nKarten-Nr.: 76809406\nBetrag: CHF 10.90",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 10.9,
    "Saldo": 7838.8
  },
  {
    "Buchungsdatum": "20.04.2016",
    "Valuta": "20.04.2016",
    "Buchungstext": "Gutschrift / 685100140",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nOWKB",
    "Betrag Detail": "",
    "Gutschrift": 700,
    "Belastung": "",
    "Saldo": 7849.7
  },
  {
    "Buchungsdatum": "20.04.2016",
    "Valuta": "19.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 684972456",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 19.04.16 / 15:05:26\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 7149.7
  },
  {
    "Buchungsdatum": "20.04.2016",
    "Valuta": "19.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 685076293",
    "Details": "Bezugsort: COOP-3705\nTransaktionsdatum: 19.04.16 / 17:51:41\nKarten-Nr.: 76809406\nBetrag: CHF 8.35",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 8.35,
    "Saldo": 7349.7
  },
  {
    "Buchungsdatum": "20.04.2016",
    "Valuta": "20.04.2016",
    "Buchungstext": "Gutschrift / 685061939",
    "Details": "Luzerner Kantonalbank AG\n88 ZFA\niHK Abrechnungskonti\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 7358.05
  },
  {
    "Buchungsdatum": "20.04.2016",
    "Valuta": "20.04.2016",
    "Buchungstext": "Belastung / 685029603",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nVORSORGE",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 2358.05
  },
  {
    "Buchungsdatum": "19.04.2016",
    "Valuta": "19.04.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 684909090",
    "Details": "Luzern 4   19.04.2016 10:31\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 100,
    "Saldo": 2658.05
  },
  {
    "Buchungsdatum": "19.04.2016",
    "Valuta": "19.04.2016",
    "Buchungstext": "Kassentransaktion / 684908706",
    "Details": "Luzern 10:29",
    "Betrag Detail": "",
    "Gutschrift": 454.6,
    "Belastung": "",
    "Saldo": 2758.05
  },
  {
    "Buchungsdatum": "19.04.2016",
    "Valuta": "19.04.2016",
    "Buchungstext": "Vergütung / 684819115",
    "Details": "SERGIO ROTH\nRENGGSTRASSE 8\n6014 LUZERN\nInfo:KSR 2016 FUER SANDRO UND RETO",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 180,
    "Saldo": 2303.45
  },
  {
    "Buchungsdatum": "18.04.2016",
    "Valuta": "16.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 684651698",
    "Details": "Bezugsort: VONMOOS, SPORT + HOB\nTransaktionsdatum: 16.04.16 / 10:46:55\nKarten-Nr.: 76809406\nBetrag: CHF 65.50",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 65.5,
    "Saldo": 2483.45
  },
  {
    "Buchungsdatum": "18.04.2016",
    "Valuta": "15.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 684651271",
    "Details": "Bezugsort: Bahnhofkiosk\nTransaktionsdatum: 15.04.16 / 17:26:51\nKarten-Nr.: 76809406\nBetrag: CHF 12.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 12,
    "Saldo": 2548.95
  },
  {
    "Buchungsdatum": "18.04.2016",
    "Valuta": "16.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 684640814",
    "Details": "Bezugsort: MIGROS M BRUCHSTRASS\nTransaktionsdatum: 16.04.16 / 15:35:34\nKarten-Nr.: 76809406\nBetrag: CHF 7.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 7,
    "Saldo": 2560.95
  },
  {
    "Buchungsdatum": "18.04.2016",
    "Valuta": "16.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 684640812",
    "Details": "Bezugsort: MIGROS M BRUCHSTRASS\nTransaktionsdatum: 16.04.16 / 15:34:26\nKarten-Nr.: 76809406\nBetrag: CHF 21.30",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 21.3,
    "Saldo": 2567.95
  },
  {
    "Buchungsdatum": "15.04.2016",
    "Valuta": "12.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 683420873",
    "Details": "Bezugsort: DISCOUNT BENZIN\nTransaktionsdatum: 12.04.16 / 18:47:25\nKarten-Nr.: 76809406\nBetrag: CHF 5.90",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 5.9,
    "Saldo": 2589.25
  },
  {
    "Buchungsdatum": "13.04.2016",
    "Valuta": "13.04.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 683640492",
    "Details": "Luzern 4   13.04.2016 19:33\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 50,
    "Saldo": 2595.15
  },
  {
    "Buchungsdatum": "13.04.2016",
    "Valuta": "12.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 683489069",
    "Details": "Bezugsort: JEFF'S BURGER\nTransaktionsdatum: 12.04.16 / 12:03:13\nKarten-Nr.: 76809406\nBetrag: CHF 27.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 27,
    "Saldo": 2645.15
  },
  {
    "Buchungsdatum": "12.04.2016",
    "Valuta": "12.04.2016",
    "Buchungstext": "Sammelbelastung / 683250537",
    "Details": "Auftrag vom 12.04.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 171.6,
    "Saldo": 2672.15
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "PRAXIS DRES. MED. DENT.\nH. BURKARD + K. TSCHUEMPERLIN\nHERTENSTEINSTRASSE 29\n6004 LUZERN",
    "Betrag Detail": 133,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "TEXPRESS TEXTILPFLEGE GMBH\nROTHENBURGSTRASSE 2\n6020 EMMENBRUECKE",
    "Betrag Detail": 38.6,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "11.04.2016",
    "Valuta": "08.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 683038501",
    "Details": "Bezugsort: AEROPORT DE BALE MUL\nTransaktionsdatum: 08.04.16 / 19:06:27\nKarten-Nr.: 76809406\nBetrag: CHF 86.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 86,
    "Saldo": 2843.75
  },
  {
    "Buchungsdatum": "11.04.2016",
    "Valuta": "08.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 682818400",
    "Details": "Bezugsort: DUFRY BASEL-MULHOUSE\nTransaktionsdatum: 08.04.16 / 19:02:46\nKarten-Nr.: 76809406\nBetrag: CHF 49.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 49,
    "Saldo": 2929.75
  },
  {
    "Buchungsdatum": "05.04.2016",
    "Valuta": "02.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 681842370",
    "Details": "Bezugsort: k kiosk Buobenmatt\nTransaktionsdatum: 02.04.16 / 11:42:41\nKarten-Nr.: 76809406\nBetrag: CHF 12.05",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 12.05,
    "Saldo": 2978.75
  },
  {
    "Buchungsdatum": "05.04.2016",
    "Valuta": "03.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 681840819",
    "Details": "Bezugsort: MIGROL OBERNAUSTR.\nTransaktionsdatum: 03.04.16 / 15:33:27\nKarten-Nr.: 76809406\nBetrag: CHF 50.35",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 50.35,
    "Saldo": 2990.8
  },
  {
    "Buchungsdatum": "04.04.2016",
    "Valuta": "01.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 681541348",
    "Details": "Bezugsort: NEUE LUZERNER ZEITUN\nTransaktionsdatum: 01.04.16 / 10:00:03\nKarten-Nr.: 76809406\nBetrag: CHF 96.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 96,
    "Saldo": 3041.15
  },
  {
    "Buchungsdatum": "04.04.2016",
    "Valuta": "01.04.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 681540794",
    "Details": "Bezugsort: GLOBUS LUZERN\nTransaktionsdatum: 01.04.16 / 19:30:22\nKarten-Nr.: 76809406\nBetrag: CHF 35.15",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 35.15,
    "Saldo": 3137.15
  },
  {
    "Buchungsdatum": "04.04.2016",
    "Valuta": "04.04.2016",
    "Buchungstext": "Gutschrift / 681495614",
    "Details": "Im Auftrag von Schürmann Reto, Kriens",
    "Betrag Detail": "",
    "Gutschrift": 3000,
    "Belastung": "",
    "Saldo": 3172.3
  },
  {
    "Buchungsdatum": "01.04.2016",
    "Valuta": "31.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 680404518",
    "Details": "Bezugsort: MIGROL ARSENALSTR.\nTransaktionsdatum: 31.03.16 / 07:35:44\nKarten-Nr.: 76809406\nBetrag: CHF 6.50",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.5,
    "Saldo": 172.3
  },
  {
    "Buchungsdatum": "01.04.2016",
    "Valuta": "01.04.2016",
    "Buchungstext": "Vergütung / 680875830",
    "Details": "PROGRES VERSICHERUNGEN AG\nDEBITORENMANAGEMENT\n8081  ZUERICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 178.8
  },
  {
    "Buchungsdatum": "31.03.2016",
    "Valuta": "31.03.2016",
    "Buchungstext": "Gutschrift / 680401967",
    "Details": "Progrüs Versicherungen AG\nZürichstrasse 130\n8600 Dübendorf\n- - Info - -\nU/Abr. vom 26.03.2016\n52132968\nLeistung vom 11.03.2015\nSchürmann Reto",
    "Betrag Detail": "",
    "Gutschrift": 45.6,
    "Belastung": "",
    "Saldo": 480.2
  },
  {
    "Buchungsdatum": "31.03.2016",
    "Valuta": "26.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 680355463",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 26.03.16 / 09:09:01\nKarten-Nr.: 76809406\nBetrag: CHF 28.55",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 28.55,
    "Saldo": 434.6
  },
  {
    "Buchungsdatum": "31.03.2016",
    "Valuta": "31.03.2016",
    "Buchungstext": "Belastung LSV / 679772734",
    "Details": "LSV EKB01\nVISECA CARD SERVICES SA\nHagenholzstrasse 56\nPostfach 7007\n8050 Zuerich\nRef: 950230100011075670083169194\n1107567008316919\nBELASTUNG GEMAESS RECHNUNG\nVOM 23.03.2016\nKARTENKONTO 1107 5670 0831 6919",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 373.75,
    "Saldo": 463.15
  },
  {
    "Buchungsdatum": "30.03.2016",
    "Valuta": "30.03.2016",
    "Buchungstext": "Sammelbelastung / 679446315",
    "Details": "Auftrag vom 30.03.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 768.85,
    "Saldo": 836.9
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "DIENSTSTELLE STEUERN\nBUNDESSTEUER\nBUOBENMATT 1\n6002  LUZERN",
    "Betrag Detail": 724.75,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH 3050 BERN",
    "Betrag Detail": 44.1,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "29.03.2016",
    "Valuta": "29.03.2016",
    "Buchungstext": "Sammelbelastung / 678989482",
    "Details": "Auftrag vom 29.03.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 443.9,
    "Saldo": 1605.75
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "DIGITEC GALAXUS AG\nPFINGSTWEIDSTRASSE 60\nDIGITEC GALAXUS AG PFINGSTWEIDSTRAS",
    "Betrag Detail": 129,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "DIGITEC GALAXUS AG\nPFINGSTWEIDSTRASSE 60\n8005 ZUERICH",
    "Betrag Detail": 314.9,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "28.03.2016",
    "Valuta": "26.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 678740877",
    "Details": "Bezugsort: VONMOOS, SPORT + HOB\nTransaktionsdatum: 26.03.16 / 10:01:35\nKarten-Nr.: 76809406\nBetrag: CHF 146.55",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 146.55,
    "Saldo": 2049.65
  },
  {
    "Buchungsdatum": "28.03.2016",
    "Valuta": "26.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 678809458",
    "Details": "Bezugsort: MIGROS M BRUCHSTRASS\nTransaktionsdatum: 26.03.16 / 09:31:35\nKarten-Nr.: 76809406\nBetrag: CHF 11.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 11,
    "Saldo": 2196.2
  },
  {
    "Buchungsdatum": "25.03.2016",
    "Valuta": "25.03.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 678700882",
    "Details": "Emmenbrücke 0   25.03.2016 16:01\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 2207.2
  },
  {
    "Buchungsdatum": "25.03.2016",
    "Valuta": "25.03.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 678700873",
    "Details": "Emmenbrücke 0   25.03.2016 16:00\nKartennummer: 76809406\nEUR   300\nWechselkurs  1.0927",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 327.8,
    "Saldo": 2287.2
  },
  {
    "Buchungsdatum": "24.03.2016",
    "Valuta": "24.03.2016",
    "Buchungstext": "Sammelbelastung / 678138169",
    "Details": "Auftrag vom 24.03.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 550,
    "Saldo": 2615
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "RETO SCHUERMANN\nLAUERZWEG 5\n6010 KRIENS\nInfo:MIETE LAUERZWEG",
    "Betrag Detail": 400,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "RETO SCHUERMANN\nLAUERZWEG 5\n6010 KRIENS\nInfo:GEMEINSAMES KONTO",
    "Betrag Detail": 150,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "23.03.2016",
    "Valuta": "19.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 677189582",
    "Details": "Bezugsort: Jumbo-Markt AG 1088\nTransaktionsdatum: 19.03.16 / 15:31:54\nKarten-Nr.: 76809406\nBetrag: CHF 335.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 335,
    "Saldo": 3165
  },
  {
    "Buchungsdatum": "22.03.2016",
    "Valuta": "22.03.2016",
    "Buchungstext": "Belastung / 677501364",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nSALDOMANAGER",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 8678.55,
    "Saldo": 3500
  },
  {
    "Buchungsdatum": "21.03.2016",
    "Valuta": "17.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 677284806",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 17.03.16 / 18:24:15\nKarten-Nr.: 76809406\nBetrag: CHF 21.20",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 21.2,
    "Saldo": 12178.55
  },
  {
    "Buchungsdatum": "21.03.2016",
    "Valuta": "21.03.2016",
    "Buchungstext": "Belastung / 677249649",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nVORSORGE",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 12199.75
  },
  {
    "Buchungsdatum": "21.03.2016",
    "Valuta": "21.03.2016",
    "Buchungstext": "Gutschrift / 677219546",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens",
    "Betrag Detail": "",
    "Gutschrift": 7000,
    "Belastung": "",
    "Saldo": 12499.75
  },
  {
    "Buchungsdatum": "18.03.2016",
    "Valuta": "17.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 676600727",
    "Details": "Bezugsort: METZGEREI KAUFFMANN\nTransaktionsdatum: 17.03.16 / 18:07:26\nKarten-Nr.: 76809406\nBetrag: CHF 23.45",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 23.45,
    "Saldo": 5499.75
  },
  {
    "Buchungsdatum": "18.03.2016",
    "Valuta": "18.03.2016",
    "Buchungstext": "Gutschrift / 676589640",
    "Details": "Luzerner Kantonalbank AG\n88 ZFA\niHK Abrechnungskonti\n6003 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 5523.2
  },
  {
    "Buchungsdatum": "16.03.2016",
    "Valuta": "15.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 675996787",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 15.03.16 / 11:55:30\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 523.2
  },
  {
    "Buchungsdatum": "15.03.2016",
    "Valuta": "13.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 675576329",
    "Details": "Bezugsort: MIGROL ARSENALSTR.\nTransaktionsdatum: 13.03.16 / 11:54:20\nKarten-Nr.: 76809406\nBetrag: CHF 5.95",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 5.95,
    "Saldo": 723.2
  },
  {
    "Buchungsdatum": "15.03.2016",
    "Valuta": "12.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 675907515",
    "Details": "Bezugsort: RESTAURANT LA STRADA\nTransaktionsdatum: 12.03.16 / 12:40:47\nKarten-Nr.: 76809406\nBetrag: CHF 80.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 729.15
  },
  {
    "Buchungsdatum": "14.03.2016",
    "Valuta": "12.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 675687088",
    "Details": "Bezugsort: DENNER KRIENS\nTransaktionsdatum: 12.03.16 / 14:01:56\nKarten-Nr.: 76809406\nBetrag: CHF 23.85",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 23.85,
    "Saldo": 809.15
  },
  {
    "Buchungsdatum": "14.03.2016",
    "Valuta": "11.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 675684686",
    "Details": "Bezugsort: Coiffure Team Graf\nTransaktionsdatum: 11.03.16 / 12:15:07\nKarten-Nr.: 76809406\nBetrag: CHF 64.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 64.8,
    "Saldo": 833
  },
  {
    "Buchungsdatum": "14.03.2016",
    "Valuta": "11.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 675380684",
    "Details": "Bezugsort: NESTLE NESPRESSO SA\nTransaktionsdatum: 11.03.16 / 12:20:30\nKarten-Nr.: 76809406\nBetrag: CHF 104.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 104,
    "Saldo": 897.8
  },
  {
    "Buchungsdatum": "11.03.2016",
    "Valuta": "10.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 675296675",
    "Details": "Bezugsort: ISTANBUL GRILL\nTransaktionsdatum: 10.03.16 / 11:52:38\nKarten-Nr.: 76809406\nBetrag: CHF 15.30",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 15.3,
    "Saldo": 1001.8
  },
  {
    "Buchungsdatum": "09.03.2016",
    "Valuta": "09.03.2016",
    "Buchungstext": "Vergütung / 674878957",
    "Details": "LUKAS SCHREUDER\nLOEWENSTRASSE 8\n6004 LUZERN\nInfo:TIGGETS AVENUE Q",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 138,
    "Saldo": 1017.1
  },
  {
    "Buchungsdatum": "08.03.2016",
    "Valuta": "08.03.2016",
    "Buchungstext": "Gutschrift / 674649009",
    "Details": "SIX PAYMENT SERVICES AG\n8005 ZURICH\n- - Info - -\nPAYMIT AUSZAHLUNG",
    "Betrag Detail": "",
    "Gutschrift": 161,
    "Belastung": "",
    "Saldo": 1155.1
  },
  {
    "Buchungsdatum": "08.03.2016",
    "Valuta": "08.03.2016",
    "Buchungstext": "Vergütung / 674479495",
    "Details": "TENNISCLUB NEUENKIRCH\nInfo:JAHRESBEITRAG",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 250,
    "Saldo": 994.1
  },
  {
    "Buchungsdatum": "07.03.2016",
    "Valuta": "04.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 674286503",
    "Details": "Bezugsort: k kiosk Winkelried M\nTransaktionsdatum: 04.03.16 / 18:16:24\nKarten-Nr.: 76809406\nBetrag: CHF 11.15",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 11.15,
    "Saldo": 1244.1
  },
  {
    "Buchungsdatum": "07.03.2016",
    "Valuta": "04.03.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 674032891",
    "Details": "Bezugsort: HOTEL CASCADA AG\nTransaktionsdatum: 04.03.16 / 19:49:44\nKarten-Nr.: 76809406\nBetrag: CHF 104.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 104,
    "Saldo": 1255.25
  },
  {
    "Buchungsdatum": "04.03.2016",
    "Valuta": "04.03.2016",
    "Buchungstext": "Gutschrift / 673858637",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens",
    "Betrag Detail": "",
    "Gutschrift": 400,
    "Belastung": "",
    "Saldo": 1359.25
  },
  {
    "Buchungsdatum": "01.03.2016",
    "Valuta": "27.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 672906380",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 27.02.16 / 10:32:26\nKarten-Nr.: 76809406\nBetrag: CHF 38.95",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 38.95,
    "Saldo": 959.25
  },
  {
    "Buchungsdatum": "01.03.2016",
    "Valuta": "01.03.2016",
    "Buchungstext": "Vergütung / 672848732",
    "Details": "PROGRES VERSICHERUNGEN AG\nDEBITORENMANAGEMENT\n8081  ZUERICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 998.2
  },
  {
    "Buchungsdatum": "29.02.2016",
    "Valuta": "27.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 671929044",
    "Details": "Bezugsort: WIRTSHAUS ZUM EICHHO\nTransaktionsdatum: 27.02.16 / 21:45:24\nKarten-Nr.: 76809406\nBetrag: CHF 220.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 220,
    "Saldo": 1299.6
  },
  {
    "Buchungsdatum": "29.02.2016",
    "Valuta": "29.02.2016",
    "Buchungstext": "Belastung LSV / 671650597",
    "Details": "LSV EKB01\nVISECA CARD SERVICES SA\nHagenholzstrasse 56\nPostfach 7007\n8050 Zuerich\nRef: 950230100011075670083169194\n1107567008316919\nBELASTUNG GEMAESS RECHNUNG\nVOM 23.02.2016\nKARTENKONTO 1107 5670 0831 6919",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 1740.35,
    "Saldo": 1519.6
  },
  {
    "Buchungsdatum": "26.02.2016",
    "Valuta": "26.02.2016",
    "Buchungstext": "Sammelbelastung / 671272711",
    "Details": "Auftrag vom 26.02.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 588.8,
    "Saldo": 3259.95
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "RETO SCHUERMANN\nLAUERZWEG 5\n6010 KRIENS\nInfo:MIETE LAUERZWEG",
    "Betrag Detail": 400,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH 3050 BERN",
    "Betrag Detail": 38.8,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "RETO SCHUERMANN\nLAUERZWEG 5\n6010 KRIENS\nInfo:GEMEINSAMES KONTO",
    "Betrag Detail": 150,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "24.02.2016",
    "Valuta": "23.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 670356505",
    "Details": "Bezugsort: MIGROL ARSENALSTR.\nTransaktionsdatum: 23.02.16 / 19:37:25\nKarten-Nr.: 76809406\nBetrag: CHF 6.25",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.25,
    "Saldo": 3848.75
  },
  {
    "Buchungsdatum": "22.02.2016",
    "Valuta": "22.02.2016",
    "Buchungstext": "Gutschrift / 669951658",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nOWKB",
    "Betrag Detail": "",
    "Gutschrift": 700,
    "Belastung": "",
    "Saldo": 3855
  },
  {
    "Buchungsdatum": "22.02.2016",
    "Valuta": "22.02.2016",
    "Buchungstext": "Vergütung / 669929451",
    "Details": "SCHWEIZER PARAPLEGIKER STIFTUNG\nGOENNER VEREINIGUNG\n6207  NOTTWIL",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 45,
    "Saldo": 3155
  },
  {
    "Buchungsdatum": "22.02.2016",
    "Valuta": "22.02.2016",
    "Buchungstext": "Belastung / 669919597",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nVORSORGE",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 3200
  },
  {
    "Buchungsdatum": "22.02.2016",
    "Valuta": "22.02.2016",
    "Buchungstext": "Sammelbelastung / 669919593",
    "Details": "Auftrag vom 22.02.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 2179.15,
    "Saldo": 3500
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nSchürmann Reto\nInfo:SALDOMANAGER",
    "Betrag Detail": 2179.15,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "19.02.2016",
    "Valuta": "19.02.2016",
    "Buchungstext": "Gutschrift / 669306799",
    "Details": "Hauptdirektion ZFA\n88 ZFA\nLuzerner Kantonalbank AG\n6002 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 5679.15
  },
  {
    "Buchungsdatum": "19.02.2016",
    "Valuta": "19.02.2016",
    "Buchungstext": "Vergütung / 669261157",
    "Details": "DATA QUEST AG\nMOOSMATTSTR. 30\nPOSTFACH\n8953 DIETIKON",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 315.6,
    "Saldo": 679.15
  },
  {
    "Buchungsdatum": "18.02.2016",
    "Valuta": "17.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 669087841",
    "Details": "Bezugsort: HOTEL KREUZ AG\nTransaktionsdatum: 17.02.16 / 20:13:56\nKarten-Nr.: 76809406\nBetrag: CHF 95.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 95,
    "Saldo": 994.75
  },
  {
    "Buchungsdatum": "18.02.2016",
    "Valuta": "18.02.2016",
    "Buchungstext": "Vergütung / 669048761",
    "Details": "TEXPRESS TEXTILPFLEGE GMBH\nROTHENBURGSTRASSE 2\n6020 EMMENBRUECKE",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 42.1,
    "Saldo": 1089.75
  },
  {
    "Buchungsdatum": "17.02.2016",
    "Valuta": "16.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 668890616",
    "Details": "Bezugsort: CYSAT APOTHEKE\nTransaktionsdatum: 16.02.16 / 10:32:51\nKarten-Nr.: 76809406\nBetrag: CHF 43.40",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 43.4,
    "Saldo": 1131.85
  },
  {
    "Buchungsdatum": "15.02.2016",
    "Valuta": "15.02.2016",
    "Buchungstext": "Gutschrift / 668532333",
    "Details": "Texpress AG\nBettenweg 12\n6233 Bueron\n- - Info - -\nDIESE ZAHLUNG WURDE MIT PROF\nFIX AUSGEFUHRT",
    "Betrag Detail": "",
    "Gutschrift": 50,
    "Belastung": "",
    "Saldo": 1175.25
  },
  {
    "Buchungsdatum": "15.02.2016",
    "Valuta": "13.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 668473944",
    "Details": "Bezugsort: MIGROS MM HOFMATT KR\nTransaktionsdatum: 13.02.16 / 16:01:10\nKarten-Nr.: 76809406\nBetrag: CHF 60.70",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 60.7,
    "Saldo": 1125.25
  },
  {
    "Buchungsdatum": "15.02.2016",
    "Valuta": "12.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 668189945",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 12.02.16 / 11:36:49\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 1185.95
  },
  {
    "Buchungsdatum": "11.02.2016",
    "Valuta": "11.02.2016",
    "Buchungstext": "Bardividende / 666686692",
    "Details": "N Akt Apple Inc USD 0.00001 nom (908440)",
    "Betrag Detail": "",
    "Gutschrift": 14.82,
    "Belastung": "",
    "Saldo": 1385.95
  },
  {
    "Buchungsdatum": "09.02.2016",
    "Valuta": "07.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 667480498",
    "Details": "Bezugsort: Backerei R. Hanggi\nTransaktionsdatum: 07.02.16 / 09:37:09\nKarten-Nr.: 76809406\nBetrag: CHF 18.70",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 18.7,
    "Saldo": 1371.13
  },
  {
    "Buchungsdatum": "09.02.2016",
    "Valuta": "06.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 667124173",
    "Details": "Bezugsort: Manor AG - 381/Food\nTransaktionsdatum: 06.02.16 / 14:41:05\nKarten-Nr.: 76809406\nBetrag: CHF 82.75",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 82.75,
    "Saldo": 1389.83
  },
  {
    "Buchungsdatum": "08.02.2016",
    "Valuta": "05.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 667258931",
    "Details": "Bezugsort: KINO CAPITOL\nTransaktionsdatum: 05.02.16 / 22:09:26\nKarten-Nr.: 76809406\nBetrag: CHF 13.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 13,
    "Saldo": 1472.58
  },
  {
    "Buchungsdatum": "08.02.2016",
    "Valuta": "06.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 667250055",
    "Details": "Bezugsort: SPAR SUPERMARKT LUZE\nTransaktionsdatum: 06.02.16 / 14:52:09\nKarten-Nr.: 76809406\nBetrag: CHF 19.35",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 19.35,
    "Saldo": 1485.58
  },
  {
    "Buchungsdatum": "08.02.2016",
    "Valuta": "08.02.2016",
    "Buchungstext": "Gutschrift / 667202059",
    "Details": "Priska Herzog\nLauerzweg 5\n6010 Kriens\n- - Info - -\nLUKB KONTO: EINKAUFSABRECHNUNG / FE\nRIEN RATSCHINGS",
    "Betrag Detail": "",
    "Gutschrift": 268,
    "Belastung": "",
    "Saldo": 1504.93
  },
  {
    "Buchungsdatum": "05.02.2016",
    "Valuta": "04.02.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 666792147",
    "Details": "Bezugsort: IKEA AG ROTHENBURG\nTransaktionsdatum: 04.02.16 / 17:13:24\nKarten-Nr.: 76809406\nBetrag: CHF 33.45",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 33.45,
    "Saldo": 1236.93
  },
  {
    "Buchungsdatum": "03.02.2016",
    "Valuta": "03.02.2016",
    "Buchungstext": "Vergütung / 666340261",
    "Details": "UPC CABELCOM GMBH\nDIGITAL PRODUCTS\n8304  WALLISELLEN",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 91,
    "Saldo": 1270.38
  },
  {
    "Buchungsdatum": "02.02.2016",
    "Valuta": "30.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 666119452",
    "Details": "Bezugsort: Prima Laden\nTransaktionsdatum: 30.01.16 / 10:05:53\nKarten-Nr.: 76809406\nBetrag: CHF 22.65",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 22.65,
    "Saldo": 1361.38
  },
  {
    "Buchungsdatum": "01.02.2016",
    "Valuta": "29.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 665752502",
    "Details": "Bezugsort: k kiosk Buobenmatt\nTransaktionsdatum: 29.01.16 / 13:14:09\nKarten-Nr.: 76809406\nBetrag: CHF 7.50",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 7.5,
    "Saldo": 1384.03
  },
  {
    "Buchungsdatum": "01.02.2016",
    "Valuta": "28.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 665720465",
    "Details": "Bezugsort: Falken Apotheke\nTransaktionsdatum: 28.01.16 / 17:56:58\nKarten-Nr.: 76809406\nBetrag: CHF 27.90",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 27.9,
    "Saldo": 1391.53
  },
  {
    "Buchungsdatum": "01.02.2016",
    "Valuta": "01.02.2016",
    "Buchungstext": "Vergütung / 665573751",
    "Details": "PROGRES VERSICHERUNGEN AG\nDEBITORENMANAGEMENT\n8081  ZUERICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 1419.43
  },
  {
    "Buchungsdatum": "29.01.2016",
    "Valuta": "29.01.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 665091627",
    "Details": "Luzern 4   29.01.2016 07:50\nKartennummer: 76809406\nEUR   400\nWechselkurs  1.1096",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 443.85,
    "Saldo": 1720.83
  },
  {
    "Buchungsdatum": "28.01.2016",
    "Valuta": "26.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 664253879",
    "Details": "Bezugsort: Coiffure Team Graf\nTransaktionsdatum: 26.01.16 / 12:56:00\nKarten-Nr.: 76809406\nBetrag: CHF 64.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 64.8,
    "Saldo": 2164.68
  },
  {
    "Buchungsdatum": "28.01.2016",
    "Valuta": "27.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 664245334",
    "Details": "Bezugsort: ISTANBUL GRILL\nTransaktionsdatum: 27.01.16 / 11:53:20\nKarten-Nr.: 76809406\nBetrag: CHF 18.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 18,
    "Saldo": 2229.48
  },
  {
    "Buchungsdatum": "28.01.2016",
    "Valuta": "28.01.2016",
    "Buchungstext": "Sammelbelastung / 664154448",
    "Details": "Auftrag vom 28.01.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 615.4,
    "Saldo": 2247.48
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "RETO SCHUERMANN\nLAUERZWEG 5\n6010 KRIENS\nInfo:MIETE LAUERZWEG",
    "Betrag Detail": 400,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "SWISSCOM (SCHWEIZ) AG\nCONTACT CENTER MOBILE\nCH 3050 BERN",
    "Betrag Detail": 65.4,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "RETO SCHUERMANN\nLAUERZWEG 5\n6010 KRIENS\nInfo:GEMEINSAMES KONTO",
    "Betrag Detail": 150,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "27.01.2016",
    "Valuta": "26.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 663671045",
    "Details": "Bezugsort: MIGROL ARSENALSTR.\nTransaktionsdatum: 26.01.16 / 18:05:13\nKarten-Nr.: 76809406\nBetrag: CHF 6.05",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.05,
    "Saldo": 2862.88
  },
  {
    "Buchungsdatum": "26.01.2016",
    "Valuta": "24.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 662929132",
    "Details": "Bezugsort: MIGROL OBERNAUSTR.\nTransaktionsdatum: 24.01.16 / 17:36:30\nKarten-Nr.: 76809406\nBetrag: CHF 12.95",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 12.95,
    "Saldo": 2868.93
  },
  {
    "Buchungsdatum": "25.01.2016",
    "Valuta": "21.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 663111333",
    "Details": "Bezugsort: k kiosk Buobenmatt\nTransaktionsdatum: 21.01.16 / 18:09:38\nKarten-Nr.: 76809406\nBetrag: CHF 10.75",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 10.75,
    "Saldo": 2881.88
  },
  {
    "Buchungsdatum": "25.01.2016",
    "Valuta": "22.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 662801509",
    "Details": "Bezugsort: CONFISEUR BACHMANN A\nTransaktionsdatum: 22.01.16 / 17:20:16\nKarten-Nr.: 76809406\nBetrag: CHF 14.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 14.8,
    "Saldo": 2892.63
  },
  {
    "Buchungsdatum": "20.01.2016",
    "Valuta": "20.01.2016",
    "Buchungstext": "Belastung / 662217464",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 2000,
    "Saldo": 2907.43
  },
  {
    "Buchungsdatum": "20.01.2016",
    "Valuta": "20.01.2016",
    "Buchungstext": "Belastung / 662217398",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 2000,
    "Saldo": 4907.43
  },
  {
    "Buchungsdatum": "20.01.2016",
    "Valuta": "20.01.2016",
    "Buchungstext": "Gutschrift / 662166519",
    "Details": "Reto Schuermann\nLauerzweg 5\n6010 Kriens\n- - Info - -\nOWKB",
    "Betrag Detail": "",
    "Gutschrift": 700,
    "Belastung": "",
    "Saldo": 6907.43
  },
  {
    "Buchungsdatum": "20.01.2016",
    "Valuta": "20.01.2016",
    "Buchungstext": "Gutschrift / 662126267",
    "Details": "Hauptdirektion ZFA\n88 ZFA\nLuzerner Kantonalbank AG\n6002 Luzern",
    "Betrag Detail": "",
    "Gutschrift": 5000,
    "Belastung": "",
    "Saldo": 6207.43
  },
  {
    "Buchungsdatum": "20.01.2016",
    "Valuta": "20.01.2016",
    "Buchungstext": "Belastung / 662104565",
    "Details": "Zu Gunsten von Schürmann Reto, Kriens\nVORSORGE",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 300,
    "Saldo": 1207.43
  },
  {
    "Buchungsdatum": "18.01.2016",
    "Valuta": "16.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 661704430",
    "Details": "Bezugsort: COOP-1826 WENGEN\nTransaktionsdatum: 16.01.16 / 11:35:56\nKarten-Nr.: 76809406\nBetrag: CHF 13.40",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 13.4,
    "Saldo": 1507.43
  },
  {
    "Buchungsdatum": "18.01.2016",
    "Valuta": "16.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 661702423",
    "Details": "Bezugsort: MIGROS M EXPRESS BAH\nTransaktionsdatum: 16.01.16 / 07:43:53\nKarten-Nr.: 76809406\nBetrag: CHF 13.90",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 13.9,
    "Saldo": 1520.83
  },
  {
    "Buchungsdatum": "15.01.2016",
    "Valuta": "14.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 661019414",
    "Details": "Bezugsort: COOP-1969 SARNEN\nTransaktionsdatum: 14.01.16 / 16:59:02\nKarten-Nr.: 76809406\nBetrag: CHF 52.35",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 52.35,
    "Saldo": 1534.73
  },
  {
    "Buchungsdatum": "12.01.2016",
    "Valuta": "12.01.2016",
    "Buchungstext": "Geldbezug Bancomat KB / 660387407",
    "Details": "Luzern 4   12.01.2016 11:51\nKartennummer: 76809406",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 80,
    "Saldo": 1587.08
  },
  {
    "Buchungsdatum": "12.01.2016",
    "Valuta": "10.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 659999879",
    "Details": "Bezugsort: SHELL TANKSTELLE\nTransaktionsdatum: 10.01.16 / 21:09:55\nKarten-Nr.: 76809406\nBetrag: CHF 94.10",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 94.1,
    "Saldo": 1667.08
  },
  {
    "Buchungsdatum": "11.01.2016",
    "Valuta": "08.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 660110487",
    "Details": "Bezugsort: k kiosk Buobenmatt\nTransaktionsdatum: 08.01.16 / 15:28:57\nKarten-Nr.: 76809406\nBetrag: CHF 7.50",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 7.5,
    "Saldo": 1761.18
  },
  {
    "Buchungsdatum": "11.01.2016",
    "Valuta": "11.01.2016",
    "Buchungstext": "Sammelbelastung / 660044978",
    "Details": "Auftrag vom 11.01.2016",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 193,
    "Saldo": 1768.68
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "PRISKA HERZOG\nLAUERZWEG 5\n6010 KRIENS\nInfo:GELD MUENCHEN",
    "Betrag Detail": 93,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "",
    "Valuta": "",
    "Buchungstext": "",
    "Details": "LUKAS SCHREUDER\nLOEWENSTRASSE\n6004 LUZERN\nInfo:ESSEN",
    "Betrag Detail": 100,
    "Gutschrift": "",
    "Belastung": "",
    "Saldo": ""
  },
  {
    "Buchungsdatum": "07.01.2016",
    "Valuta": "06.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 659448764",
    "Details": "Bezugsort: STOCKER BUCHERHAUS A\nTransaktionsdatum: 06.01.16 / 13:11:54\nKarten-Nr.: 76809406\nBetrag: CHF 32.80",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 32.8,
    "Saldo": 1961.68
  },
  {
    "Buchungsdatum": "06.01.2016",
    "Valuta": "05.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 658946791",
    "Details": "Bezugsort: MIGROL ARSENALSTR.\nTransaktionsdatum: 05.01.16 / 07:38:45\nKarten-Nr.: 76809406\nBetrag: CHF 6.35",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 6.35,
    "Saldo": 1994.48
  },
  {
    "Buchungsdatum": "06.01.2016",
    "Valuta": "06.01.2016",
    "Buchungstext": "Vergütung / 659123936",
    "Details": "RALF HENSELER\nSEEFELDSTRASSE 11\n6006 LUZERN\nInfo:CHUE LEE KONZERT",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 65,
    "Saldo": 2000.83
  },
  {
    "Buchungsdatum": "05.01.2016",
    "Valuta": "04.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 658677982",
    "Details": "Bezugsort: LUZERNER KANTONALBAN\nTransaktionsdatum: 04.01.16 / 11:36:15\nKarten-Nr.: 76809406\nBetrag: CHF 200.00",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 200,
    "Saldo": 2065.83
  },
  {
    "Buchungsdatum": "05.01.2016",
    "Valuta": "03.01.2016",
    "Buchungstext": "Warenbezug/Dienstleistung / 658388555",
    "Details": "Bezugsort: 773 COOP TS KRIENS\nTransaktionsdatum: 03.01.16 / 16:28:48\nKarten-Nr.: 76809406\nBetrag: CHF 27.60",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 27.6,
    "Saldo": 2265.83
  },
  {
    "Buchungsdatum": "04.01.2016",
    "Valuta": "30.12.2015",
    "Buchungstext": "Warenbezug/Dienstleistung / 655748613",
    "Details": "Bezugsort: BP TANKSTELLE LUZERN\nTransaktionsdatum: 30.12.15 / 08:09:08\nKarten-Nr.: 76809406\nBetrag: CHF 87.96",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 87.96,
    "Saldo": 2293.43
  },
  {
    "Buchungsdatum": "04.01.2016",
    "Valuta": "04.01.2016",
    "Buchungstext": "Vergütung / 658499070",
    "Details": "PROGRES VERSICHERUNGEN AG\nDEBITORENMANAGEMENT\n8081  ZUERICH",
    "Betrag Detail": "",
    "Gutschrift": "",
    "Belastung": 301.4,
    "Saldo": 2381.39
  }
]



