const countries = [
  {
    country: "albania",
    code: "al",
  },
  {
    country: "algeria",
    code: "dz",
  },
  {
    country: "americansamoa",
    code: "as",
  },
  {
    country: "andorra",
    code: "ad",
  },
  {
    country: "angola",
    code: "ao",
  },
  {
    country: "anguilla",
    code: "ai",
  },
  {
    country: "antarctica",
    code: "aq",
  },
  {
    country: "antiguaandbarbuda",
    code: "ag",
  },
  {
    country: "argentina",
    code: "ar",
  },
  {
    country: "armenia",
    code: "am",
  },
  {
    country: "aruba",
    code: "aw",
  },
  {
    country: "australia",
    code: "au",
  },
  {
    country: "austria",
    code: "at",
  },
  {
    country: "azerbaijan",
    code: "az",
  },
  {
    country: "bahamas",
    code: "bs",
  },
  {
    country: "bahrain",
    code: "bh",
  },
  {
    country: "bangladesh",
    code: "bd",
  },
  {
    country: "barbados",
    code: "bb",
  },
  {
    country: "belarus",
    code: "by",
  },
  {
    country: "belgium",
    code: "be",
  },
  {
    country: "belize",
    code: "bz",
  },
  {
    country: "benin",
    code: "bj",
  },
  {
    country: "bermuda",
    code: "bm",
  },
  {
    country: "bhutan",
    code: "bt",
  },
  {
    country: "bolivia",
    code: "bo",
  },
  {
    country: "bonairesinteustatiusandsaba",
    code: "bq",
  },
  {
    country: "bosnia-herzegovina",
    code: "ba",
  },
  {
    country: "botswana",
    code: "bw",
  },
  {
    country: "bouvetisland",
    code: "bv",
  },
  {
    country: "brazil",
    code: "br",
  },
  {
    country: "britishindianoceanterritory",
    code: "io",
  },
  {
    country: "bruneidarussalam",
    code: "bn",
  },
  {
    country: "bulgaria",
    code: "bg",
  },
  {
    country: "burkinafaso",
    code: "bf",
  },
  {
    country: "burundi",
    code: "bi",
  },
  {
    country: "caboverde",
    code: "cv",
  },
  {
    country: "cambodia",
    code: "kh",
  },
  {
    country: "cameroon",
    code: "cm",
  },
  {
    country: "canada",
    code: "ca",
  },
  {
    country: "caymanislands",
    code: "ky",
  },
  {
    country: "centralafricanrepublic",
    code: "cf",
  },
  {
    country: "chad",
    code: "td",
  },
  {
    country: "chile",
    code: "cl",
  },
  {
    country: "china",
    code: "cn",
  },
  {
    country: "christmasisland",
    code: "cx",
  },
  {
    country: "cocosislands",
    code: "cc",
  },
  {
    country: "colombia",
    code: "co",
  },
  {
    country: "comoros",
    code: "km",
  },
  {
    country: "congo",
    code: "cg",
  },
  {
    country: "congodemrepublic",
    code: "cd",
  },
  {
    country: "cookislands",
    code: "ck",
  },
  {
    country: "costarica",
    code: "cr",
  },
  {
    country: "côted'ivoire",
    code: "ci",
  },
  {
    country: "croatia",
    code: "hr",
  },
  {
    country: "cuba",
    code: "cu",
  },
  {
    country: "curaçao",
    code: "cw",
  },
  {
    country: "cyprus",
    code: "cy",
  },
  {
    country: "czechia",
    code: "cz",
  },
  {
    country: "denmark",
    code: "dk",
  },
  {
    country: "djibouti",
    code: "dj",
  },
  {
    country: "dominica",
    code: "dm",
  },
  {
    country: "dominicanrepublic",
    code: "do",
  },
  {
    country: "ecuador",
    code: "ec",
  },
  {
    country: "egypt",
    code: "eg",
  },
  {
    country: "elsalvador",
    code: "sv",
  },
  {
    country: "equatorialguinea",
    code: "gq",
  },
  {
    country: "eritrea",
    code: "er",
  },
  {
    country: "estonia",
    code: "ee",
  },
  {
    country: "eswatini",
    code: "sz",
  },
  {
    country: "ethiopia",
    code: "et",
  },
  {
    country: "europeanunion",
    code: "eu",
  },
  {
    country: "falklandislands",
    code: "fk",
  },
  {
    country: "faroeislands",
    code: "fo",
  },
  {
    country: "fiji",
    code: "fj",
  },
  {
    country: "finland",
    code: "fi",
  },
  {
    country: "france",
    code: "fr",
  },
  {
    country: "frenchguiana",
    code: "gf",
  },
  {
    country: "frenchpolynesia",
    code: "pf",
  },
  {
    country: "frenchsouthernterritories",
    code: "tf",
  },
  {
    country: "gabon",
    code: "ga",
  },
  {
    country: "gambia",
    code: "gm",
  },
  {
    country: "georgia",
    code: "ge",
  },
  {
    country: "germany",
    code: "de",
  },
  {
    country: "ghana",
    code: "gh",
  },
  {
    country: "gibraltar",
    code: "gi",
  },
  {
    country: "greece",
    code: "gr",
  },
  {
    country: "greenland",
    code: "gl",
  },
  {
    country: "grenada",
    code: "gd",
  },
  {
    country: "guadeloupe",
    code: "gp",
  },
  {
    country: "guam",
    code: "gu",
  },
  {
    country: "guatemala",
    code: "gt",
  },
  {
    country: "guernsey",
    code: "gg",
  },
  {
    country: "guinea",
    code: "gn",
  },
  {
    country: "guineabissau",
    code: "gw",
  },
  {
    country: "guyana",
    code: "gy",
  },
  {
    country: "haiti",
    code: "ht",
  },
  {
    country: "heardisland",
    code: "hm",
  },
  {
    country: "mcdonaldislands",
    code: "",
  },
  {
    country: "holysee",
    code: "va",
  },
  {
    country: "honduras",
    code: "hn",
  },
  {
    country: "hongkong",
    code: "hk",
  },
  {
    country: "hungary",
    code: "hu",
  },
  {
    country: "iceland",
    code: "is",
  },
  {
    country: "india",
    code: "in",
  },
  {
    country: "indonesia",
    code: "id",
  },
  {
    country: "iran",
    code: "ir",
  },
  {
    country: "iraq",
    code: "iq",
  },
  {
    country: "ireland",
    code: "ie",
  },
  {
    country: "isleofman",
    code: "im",
  },
  {
    country: "israel",
    code: "il",
  },
  {
    country: "italy",
    code: "it",
  },
  {
    country: "jamaica",
    code: "jm",
  },
  {
    country: "japan",
    code: "jp",
  },
  {
    country: "jersey",
    code: "je",
  },
  {
    country: "jordan",
    code: "jo",
  },
  {
    country: "kazakhstan",
    code: "kz",
  },
  {
    country: "kenya",
    code: "ke",
  },
  {
    country: "kiribati",
    code: "ki",
  },
  {
    country: "korea-north",
    code: "kp",
  },
  {
    country: "korea-south",
    code: "kr",
  },
  {
    country: "kuwait",
    code: "kw",
  },
  {
    country: "kyrgyzstan",
    code: "kg",
  },
  {
    country: "laos",
    code: "la",
  },
  {
    country: "latvia",
    code: "lv",
  },
  {
    country: "lebanon",
    code: "lb",
  },
  {
    country: "lesotho",
    code: "ls",
  },
  {
    country: "liberia",
    code: "lr",
  },
  {
    country: "libya",
    code: "ly",
  },
  {
    country: "liechtenstein",
    code: "li",
  },
  {
    country: "lithuania",
    code: "lt",
  },
  {
    country: "luxembourg",
    code: "lu",
  },
  {
    country: "macao",
    code: "mo",
  },
  {
    country: "madagascar",
    code: "mg",
  },
  {
    country: "malawi",
    code: "mw",
  },
  {
    country: "malaysia",
    code: "my",
  },
  {
    country: "maldives",
    code: "mv",
  },
  {
    country: "mali",
    code: "ml",
  },
  {
    country: "malta",
    code: "mt",
  },
  {
    country: "marshallislands",
    code: "mh",
  },
  {
    country: "martinique",
    code: "mq",
  },
  {
    country: "mauritania",
    code: "mr",
  },
  {
    country: "mauritius",
    code: "mu",
  },
  {
    country: "mayotte",
    code: "yt",
  },
  {
    country: "mexico",
    code: "mx",
  },
  {
    country: "micronesia",
    code: "fm",
  },
  {
    country: "moldova",
    code: "md",
  },
  {
    country: "monaco",
    code: "mc",
  },
  {
    country: "mongolia",
    code: "mn",
  },
  {
    country: "montenegro",
    code: "me",
  },
  {
    country: "montserrat",
    code: "ms",
  },
  {
    country: "morocco",
    code: "ma",
  },
  {
    country: "mozambique",
    code: "mz",
  },
  {
    country: "myanmar",
    code: "mm",
  },
  {
    country: "namibia",
    code: "na",
  },
  {
    country: "nauru",
    code: "nr",
  },
  {
    country: "nepal",
    code: "np",
  },
  {
    country: "netherlands",
    code: "nl",
  },
  {
    country: "newcaledonia",
    code: "nc",
  },
  {
    country: "newzealand",
    code: "nz",
  },
  {
    country: "nicaragua",
    code: "ni",
  },
  {
    country: "niger",
    code: "ne",
  },
  {
    country: "nigeria",
    code: "ng",
  },
  {
    country: "niue",
    code: "nu",
  },
  {
    country: "norfolkisland",
    code: "nf",
  },
  {
    country: "northmacedonia",
    code: "mk",
  },
  {
    country: "northernmarianaislands",
    code: "mp",
  },
  {
    country: "norway",
    code: "no",
  },
  {
    country: "oman",
    code: "om",
  },
  {
    country: "pakistan",
    code: "pk",
  },
  {
    country: "palau",
    code: "pw",
  },
  {
    country: "panama",
    code: "pa",
  },
  {
    country: "papuanewguinea",
    code: "pg",
  },
  {
    country: "paraguay",
    code: "py",
  },
  {
    country: "peru",
    code: "pe",
  },
  {
    country: "philippines",
    code: "ph",
  },
  {
    country: "pitcairnisland",
    code: "pn",
  },
  {
    country: "poland",
    code: "pl",
  },
  {
    country: "portugal",
    code: "pt",
  },
  {
    country: "puertorico",
    code: "pr",
  },
  {
    country: "qatar",
    code: "qa",
  },
  {
    country: "reunion",
    code: "re",
  },
  {
    country: "romania",
    code: "ro",
  },
  {
    country: "russia",
    code: "ru",
  },
  {
    country: "rwanda",
    code: "rw",
  },
  {
    country: "saintbarthélemy",
    code: "bl",
  },
  {
    country: "sainthelena",
    code: "sh",
  },
  {
    country: "saintkitts&nevisanguilla",
    code: "kn",
  },
  {
    country: "saintlucia",
    code: "lc",
  },
  {
    country: "saintmartin",
    code: "mf",
  },
  {
    country: "saintpierreandmiquelon",
    code: "pm",
  },
  {
    country: "saintvincent&grenadines",
    code: "vc",
  },
  {
    country: "samoa",
    code: "ws",
  },
  {
    country: "san marino",
    code: "sm",
  },
  {
    country: "saotomeandprincipe",
    code: "st",
  },
  {
    country: "saudiarabia",
    code: "sa",
  },
  {
    country: "senegal",
    code: "sn",
  },
  {
    country: "serbia",
    code: "rs",
  },
  {
    country: "seychelles",
    code: "sc",
  },
  {
    country: "sierraleone",
    code: "sl",
  },
  {
    country: "singapore",
    code: "sg",
  },
  {
    country: "sintmaarten",
    code: "sx",
  },
  {
    country: "slovakia",
    code: "sk",
  },
  {
    country: "slovenia",
    code: "si",
  },
  {
    country: "solomonislands",
    code: "sb",
  },
  {
    country: "somalia",
    code: "so",
  },
  {
    country: "southafrica",
    code: "za",
  },
  {
    country: "southgeorgia",
    code: "gs",
  },
  {
    country: "southsandwichislands",
    code: "",
  },
  {
    country: "southsudan",
    code: "ss",
  },
  {
    country: "spain",
    code: "es",
  },
  {
    country: "srilanka",
    code: "lk",
  },
  {
    country: "sudan",
    code: "sd",
  },
  {
    country: "suriname",
    code: "sr",
  },
  {
    country: "svalbardandjanmayenislands",
    code: "sj",
  },
  {
    country: "sweden",
    code: "se",
  },
  {
    country: "switzerland",
    code: "ch",
  },
  {
    country: "syria",
    code: "sy",
  },
  {
    country: "taiwan",
    code: "tw",
  },
  {
    country: "tajikistan",
    code: "tj",
  },
  {
    country: "tanzania",
    code: "tz",
  },
  {
    country: "thailand",
    code: "th",
  },
  {
    country: "timor-leste",
    code: "tl",
  },
  {
    country: "togo",
    code: "tg",
  },
  {
    country: "tokelau",
    code: "tk",
  },
  {
    country: "tonga",
    code: "to",
  },
  {
    country: "trinidadandtobago",
    code: "tt",
  },
  {
    country: "tunisia",
    code: "tn",
  },
  {
    country: "turkey",
    code: "tr",
  },
  {
    country: "turkmenistan",
    code: "tm",
  },
  {
    country: "turksandcaicosislands",
    code: "tc",
  },
  {
    country: "tuvalu",
    code: "tv",
  },
  {
    country: "uganda",
    code: "ug",
  },
  {
    country: "ukraine",
    code: "ua",
  },
  {
    country: "unitedarabemirates",
    code: "ae",
  },
  {
    country: "unitedkingdom",
    code: "gb",
  },
  {
    country: "(greatbritainandnireland)",
    code: "",
  },
  {
    country: "uruguay",
    code: "uy",
  },
  {
    country: "usa",
    code: "us",
  },
  {
    country: "unitedstates",
    code: "us",
  },
  {
    country: "unitedstatesofamerica",
    code: "us",
  },
  {
    country: "usaminoroutlyingislands",
    code: "um",
  },
  {
    country: "uzbekistan",
    code: "uz",
  },
  {
    country: "vanuatu",
    code: "vu",
  },
  {
    country: "venezuela",
    code: "ve",
  },
  {
    country: "vietnam",
    code: "vn",
  },
  {
    country: "virginislands",
    code: "vg",
  },
  {
    country: "virginislands",
    code: "vi",
  },
  {
    country: "wallisandfutunaislands",
    code: "wf",
  },
  {
    country: "westernsahara",
    code: "eh",
  },
  {
    country: "yemen",
    code: "ye",
  },
  {
    country: "zambia",
    code: "zm",
  },
];

module.exports = countries;
