import { Client } from '../client';
export interface ComplexTypeRange<T> {
    to: T;
    from: T;
}
export interface ComplexTypeSafeKeyValue<T> {
    key: string;
    value: T;
}
export interface ComplexTypeUnitAndValues<T> {
    values: T[];
    unit: string;
}
export declare enum CoreTypesCountryEnum {
    AC = "ac",
    AD = "ad",
    AE = "ae",
    AF = "af",
    AG = "ag",
    AI = "ai",
    AL = "al",
    AM = "am",
    AN = "an",
    AO = "ao",
    AQ = "aq",
    AR = "ar",
    AS = "as",
    AT = "at",
    AU = "au",
    AW = "aw",
    AX = "ax",
    AZ = "az",
    BA = "ba",
    BB = "bb",
    BD = "bd",
    BE = "be",
    BF = "bf",
    BG = "bg",
    BH = "bh",
    BI = "bi",
    BJ = "bj",
    BL = "bl",
    BM = "bm",
    BN = "bn",
    BO = "bo",
    BQ = "bq",
    BR = "br",
    BS = "bs",
    BT = "bt",
    BV = "bv",
    BW = "bw",
    BY = "by",
    BZ = "bz",
    CA = "ca",
    CC = "cc",
    CD = "cd",
    CF = "cf",
    CG = "cg",
    CH = "ch",
    CI = "ci",
    CK = "ck",
    CL = "cl",
    CM = "cm",
    CN = "cn",
    CO = "co",
    CR = "cr",
    CS = "cs",
    CU = "cu",
    CV = "cv",
    CW = "cw",
    CX = "cx",
    CY = "cy",
    CZ = "cz",
    DE = "de",
    DJ = "dj",
    DK = "dk",
    DM = "dm",
    DO = "do",
    DZ = "dz",
    EC = "ec",
    EE = "ee",
    EG = "eg",
    EH = "eh",
    ER = "er",
    ES = "es",
    ET = "et",
    FC = "fc",
    FD = "fd",
    FI = "fi",
    FJ = "fj",
    FK = "fk",
    FM = "fm",
    FO = "fo",
    FR = "fr",
    FX = "fx",
    GA = "ga",
    GB = "gb",
    GD = "gd",
    GE = "ge",
    GF = "gf",
    GG = "gg",
    GH = "gh",
    GI = "gi",
    GL = "gl",
    GM = "gm",
    GN = "gn",
    GP = "gp",
    GQ = "gq",
    GR = "gr",
    GS = "gs",
    GT = "gt",
    GU = "gu",
    GW = "gw",
    GY = "gy",
    HK = "hk",
    HM = "hm",
    HN = "hn",
    HR = "hr",
    HT = "ht",
    HU = "hu",
    ID = "id",
    IE = "ie",
    IL = "il",
    IM = "im",
    IN = "in",
    IO = "io",
    IQ = "iq",
    IR = "ir",
    IS = "is",
    IT = "it",
    JE = "je",
    JM = "jm",
    JO = "jo",
    JP = "jp",
    KE = "ke",
    KG = "kg",
    KH = "kh",
    KI = "ki",
    KM = "km",
    KN = "kn",
    KP = "kp",
    KR = "kr",
    KW = "kw",
    KY = "ky",
    KZ = "kz",
    LA = "la",
    LB = "lb",
    LC = "lc",
    LI = "li",
    LK = "lk",
    LR = "lr",
    LS = "ls",
    LT = "lt",
    LU = "lu",
    LV = "lv",
    LY = "ly",
    MA = "ma",
    MC = "mc",
    MD = "md",
    ME = "me",
    MF = "mf",
    MG = "mg",
    MH = "mh",
    MK = "mk",
    ML = "ml",
    MM = "mm",
    MN = "mn",
    MO = "mo",
    MP = "mp",
    MQ = "mq",
    MR = "mr",
    MS = "ms",
    MT = "mt",
    MU = "mu",
    MV = "mv",
    MW = "mw",
    MX = "mx",
    MY = "my",
    MZ = "mz",
    NA = "na",
    NC = "nc",
    NE = "ne",
    NF = "nf",
    NG = "ng",
    NI = "ni",
    NL = "nl",
    NO = "no",
    NP = "np",
    NR = "nr",
    NU = "nu",
    NZ = "nz",
    OM = "om",
    PA = "pa",
    PE = "pe",
    PF = "pf",
    PG = "pg",
    PH = "ph",
    PK = "pk",
    PL = "pl",
    PM = "pm",
    PN = "pn",
    PR = "pr",
    PS = "ps",
    PT = "pt",
    PW = "pw",
    PY = "py",
    QA = "qa",
    QC = "qc",
    RE = "re",
    RO = "ro",
    RS = "rs",
    RU = "ru",
    RW = "rw",
    SA = "sa",
    SB = "sb",
    SC = "sc",
    SD = "sd",
    SE = "se",
    SG = "sg",
    SH = "sh",
    SI = "si",
    SJ = "sj",
    SK = "sk",
    SL = "sl",
    SM = "sm",
    SN = "sn",
    SO = "so",
    SR = "sr",
    SS = "ss",
    ST = "st",
    SV = "sv",
    SX = "sx",
    SY = "sy",
    SZ = "sz",
    TC = "tc",
    TD = "td",
    TF = "tf",
    TG = "tg",
    TH = "th",
    TJ = "tj",
    TK = "tk",
    TL = "tl",
    TM = "tm",
    TN = "tn",
    TO = "to",
    TP = "tp",
    TR = "tr",
    TT = "tt",
    TV = "tv",
    TW = "tw",
    TZ = "tz",
    UA = "ua",
    UG = "ug",
    UK = "uk",
    UM = "um",
    US = "us",
    UY = "uy",
    UZ = "uz",
    VA = "va",
    VC = "vc",
    VE = "ve",
    VG = "vg",
    VI = "vi",
    VN = "vn",
    VU = "vu",
    WE = "we",
    WF = "wf",
    WS = "ws",
    YE = "ye",
    YT = "yt",
    YU = "yu",
    ZA = "za",
    ZM = "zm",
    ZW = "zw"
}
export declare enum CoreTypesTimeZoneEnum {
    AFRICA_ABIDJAN = "Africa/Abidjan",
    AFRICA_ACCRA = "Africa/Accra",
    AFRICA_ADDIS_ABABA = "Africa/Addis_Ababa",
    AFRICA_ALGIERS = "Africa/Algiers",
    AFRICA_ASMARA = "Africa/Asmara",
    AFRICA_BAMAKO = "Africa/Bamako",
    AFRICA_BANGUI = "Africa/Bangui",
    AFRICA_BANJUL = "Africa/Banjul",
    AFRICA_BISSAU = "Africa/Bissau",
    AFRICA_BLANTYRE = "Africa/Blantyre",
    AFRICA_BRAZZAVILLE = "Africa/Brazzaville",
    AFRICA_BUJUMBURA = "Africa/Bujumbura",
    AFRICA_CAIRO = "Africa/Cairo",
    AFRICA_CASABLANCA = "Africa/Casablanca",
    AFRICA_CEUTA = "Africa/Ceuta",
    AFRICA_CONAKRY = "Africa/Conakry",
    AFRICA_DAKAR = "Africa/Dakar",
    AFRICA_DAR_ES_SALAAM = "Africa/Dar_es_Salaam",
    AFRICA_DJIBOUTI = "Africa/Djibouti",
    AFRICA_DOUALA = "Africa/Douala",
    AFRICA_EL_AAIUN = "Africa/El_Aaiun",
    AFRICA_FREETOWN = "Africa/Freetown",
    AFRICA_GABORONE = "Africa/Gaborone",
    AFRICA_HARARE = "Africa/Harare",
    AFRICA_JOHANNESBURG = "Africa/Johannesburg",
    AFRICA_JUBA = "Africa/Juba",
    AFRICA_KAMPALA = "Africa/Kampala",
    AFRICA_KHARTOUM = "Africa/Khartoum",
    AFRICA_KIGALI = "Africa/Kigali",
    AFRICA_KINSHASA = "Africa/Kinshasa",
    AFRICA_LAGOS = "Africa/Lagos",
    AFRICA_LIBREVILLE = "Africa/Libreville",
    AFRICA_LOME = "Africa/Lome",
    AFRICA_LUANDA = "Africa/Luanda",
    AFRICA_LUBUMBASHI = "Africa/Lubumbashi",
    AFRICA_LUSAKA = "Africa/Lusaka",
    AFRICA_MALABO = "Africa/Malabo",
    AFRICA_MAPUTO = "Africa/Maputo",
    AFRICA_MASERU = "Africa/Maseru",
    AFRICA_MBABANE = "Africa/Mbabane",
    AFRICA_MOGADISHU = "Africa/Mogadishu",
    AFRICA_MONROVIA = "Africa/Monrovia",
    AFRICA_NAIROBI = "Africa/Nairobi",
    AFRICA_NDJAMENA = "Africa/Ndjamena",
    AFRICA_NIAMEY = "Africa/Niamey",
    AFRICA_NOUAKCHOTT = "Africa/Nouakchott",
    AFRICA_OUAGADOUGOU = "Africa/Ouagadougou",
    AFRICA_PORTO_NOVO = "Africa/Porto-Novo",
    AFRICA_SAO_TOME = "Africa/Sao_Tome",
    AFRICA_TRIPOLI = "Africa/Tripoli",
    AFRICA_TUNIS = "Africa/Tunis",
    AFRICA_WINDHOEK = "Africa/Windhoek",
    AMERICA_ADAK = "America/Adak",
    AMERICA_ANCHORAGE = "America/Anchorage",
    AMERICA_ANGUILLA = "America/Anguilla",
    AMERICA_ANTIGUA = "America/Antigua",
    AMERICA_ARAGUAINA = "America/Araguaina",
    AMERICA_ARGENTINA_BUENOS_AIRES = "America/Argentina/Buenos_Aires",
    AMERICA_ARGENTINA_CATAMARCA = "America/Argentina/Catamarca",
    AMERICA_ARGENTINA_CORDOBA = "America/Argentina/Cordoba",
    AMERICA_ARGENTINA_JUJUY = "America/Argentina/Jujuy",
    AMERICA_ARGENTINA_LA_RIOJA = "America/Argentina/La_Rioja",
    AMERICA_ARGENTINA_MENDOZA = "America/Argentina/Mendoza",
    AMERICA_ARGENTINA_RIO_GALLEGOS = "America/Argentina/Rio_Gallegos",
    AMERICA_ARGENTINA_SALTA = "America/Argentina/Salta",
    AMERICA_ARGENTINA_SAN_JUAN = "America/Argentina/San_Juan",
    AMERICA_ARGENTINA_SAN_LUIS = "America/Argentina/San_Luis",
    AMERICA_ARGENTINA_TUCUMAN = "America/Argentina/Tucuman",
    AMERICA_ARGENTINA_USHUAIA = "America/Argentina/Ushuaia",
    AMERICA_ARUBA = "America/Aruba",
    AMERICA_ASUNCION = "America/Asuncion",
    AMERICA_ATIKOKAN = "America/Atikokan",
    AMERICA_BAHIA = "America/Bahia",
    AMERICA_BAHIA_BANDERAS = "America/Bahia_Banderas",
    AMERICA_BARBADOS = "America/Barbados",
    AMERICA_BELEM = "America/Belem",
    AMERICA_BELIZE = "America/Belize",
    AMERICA_BLANC_SABLON = "America/Blanc-Sablon",
    AMERICA_BOA_VISTA = "America/Boa_Vista",
    AMERICA_BOGOTA = "America/Bogota",
    AMERICA_BOISE = "America/Boise",
    AMERICA_CAMBRIDGE_BAY = "America/Cambridge_Bay",
    AMERICA_CAMPO_GRANDE = "America/Campo_Grande",
    AMERICA_CANCUN = "America/Cancun",
    AMERICA_CARACAS = "America/Caracas",
    AMERICA_CAYENNE = "America/Cayenne",
    AMERICA_CAYMAN = "America/Cayman",
    AMERICA_CHICAGO = "America/Chicago",
    AMERICA_CHIHUAHUA = "America/Chihuahua",
    AMERICA_COSTA_RICA = "America/Costa_Rica",
    AMERICA_CRESTON = "America/Creston",
    AMERICA_CUIABA = "America/Cuiaba",
    AMERICA_CURACAO = "America/Curacao",
    AMERICA_DANMARKSHAVN = "America/Danmarkshavn",
    AMERICA_DAWSON = "America/Dawson",
    AMERICA_DAWSON_CREEK = "America/Dawson_Creek",
    AMERICA_DENVER = "America/Denver",
    AMERICA_DETROIT = "America/Detroit",
    AMERICA_DOMINICA = "America/Dominica",
    AMERICA_EDMONTON = "America/Edmonton",
    AMERICA_EIRUNEPE = "America/Eirunepe",
    AMERICA_EL_SALVADOR = "America/El_Salvador",
    AMERICA_FORTALEZA = "America/Fortaleza",
    AMERICA_GLACE_BAY = "America/Glace_Bay",
    AMERICA_GODTHAB = "America/Godthab",
    AMERICA_GOOSE_BAY = "America/Goose_Bay",
    AMERICA_GRAND_TURK = "America/Grand_Turk",
    AMERICA_GRENADA = "America/Grenada",
    AMERICA_GUADELOUPE = "America/Guadeloupe",
    AMERICA_GUATEMALA = "America/Guatemala",
    AMERICA_GUAYAQUIL = "America/Guayaquil",
    AMERICA_GUYANA = "America/Guyana",
    AMERICA_HALIFAX = "America/Halifax",
    AMERICA_HAVANA = "America/Havana",
    AMERICA_HERMOSILLO = "America/Hermosillo",
    AMERICA_INDIANA_INDIANAPOLIS = "America/Indiana/Indianapolis",
    AMERICA_INDIANA_KNOX = "America/Indiana/Knox",
    AMERICA_INDIANA_MARENGO = "America/Indiana/Marengo",
    AMERICA_INDIANA_PETERSBURG = "America/Indiana/Petersburg",
    AMERICA_INDIANA_TELL_CITY = "America/Indiana/Tell_City",
    AMERICA_INDIANA_VEVAY = "America/Indiana/Vevay",
    AMERICA_INDIANA_VINCENNES = "America/Indiana/Vincennes",
    AMERICA_INDIANA_WINAMAC = "America/Indiana/Winamac",
    AMERICA_INUVIK = "America/Inuvik",
    AMERICA_IQALUIT = "America/Iqaluit",
    AMERICA_JAMAICA = "America/Jamaica",
    AMERICA_JUNEAU = "America/Juneau",
    AMERICA_KENTUCKY_LOUISVILLE = "America/Kentucky/Louisville",
    AMERICA_KENTUCKY_MONTICELLO = "America/Kentucky/Monticello",
    AMERICA_KRALENDIJK = "America/Kralendijk",
    AMERICA_LA_PAZ = "America/La_Paz",
    AMERICA_LIMA = "America/Lima",
    AMERICA_LOS_ANGELES = "America/Los_Angeles",
    AMERICA_LOWER_PRINCES = "America/Lower_Princes",
    AMERICA_MACEIO = "America/Maceio",
    AMERICA_MANAGUA = "America/Managua",
    AMERICA_MANAUS = "America/Manaus",
    AMERICA_MARIGOT = "America/Marigot",
    AMERICA_MARTINIQUE = "America/Martinique",
    AMERICA_MATAMOROS = "America/Matamoros",
    AMERICA_MAZATLAN = "America/Mazatlan",
    AMERICA_MENOMINEE = "America/Menominee",
    AMERICA_MERIDA = "America/Merida",
    AMERICA_METLAKATLA = "America/Metlakatla",
    AMERICA_MEXICO_CITY = "America/Mexico_City",
    AMERICA_MIQUELON = "America/Miquelon",
    AMERICA_MONCTON = "America/Moncton",
    AMERICA_MONTERREY = "America/Monterrey",
    AMERICA_MONTEVIDEO = "America/Montevideo",
    AMERICA_MONTSERRAT = "America/Montserrat",
    AMERICA_NASSAU = "America/Nassau",
    AMERICA_NEW_YORK = "America/New_York",
    AMERICA_NIPIGON = "America/Nipigon",
    AMERICA_NOME = "America/Nome",
    AMERICA_NORONHA = "America/Noronha",
    AMERICA_NORTH_DAKOTA_BEULAH = "America/North_Dakota/Beulah",
    AMERICA_NORTH_DAKOTA_CENTER = "America/North_Dakota/Center",
    AMERICA_NORTH_DAKOTA_NEW_SALEM = "America/North_Dakota/New_Salem",
    AMERICA_OJINAGA = "America/Ojinaga",
    AMERICA_PANAMA = "America/Panama",
    AMERICA_PANGNIRTUNG = "America/Pangnirtung",
    AMERICA_PARAMARIBO = "America/Paramaribo",
    AMERICA_PHOENIX = "America/Phoenix",
    AMERICA_PORT_AU_PRINCE = "America/Port-au-Prince",
    AMERICA_PORT_OF_SPAIN = "America/Port_of_Spain",
    AMERICA_PORTO_VELHO = "America/Porto_Velho",
    AMERICA_PUERTO_RICO = "America/Puerto_Rico",
    AMERICA_RAINY_RIVER = "America/Rainy_River",
    AMERICA_RANKIN_INLET = "America/Rankin_Inlet",
    AMERICA_RECIFE = "America/Recife",
    AMERICA_REGINA = "America/Regina",
    AMERICA_RESOLUTE = "America/Resolute",
    AMERICA_RIO_BRANCO = "America/Rio_Branco",
    AMERICA_SANTA_ISABEL = "America/Santa_Isabel",
    AMERICA_SANTAREM = "America/Santarem",
    AMERICA_SANTIAGO = "America/Santiago",
    AMERICA_SANTO_DOMINGO = "America/Santo_Domingo",
    AMERICA_SAO_PAULO = "America/Sao_Paulo",
    AMERICA_SCORESBYSUND = "America/Scoresbysund",
    AMERICA_SITKA = "America/Sitka",
    AMERICA_ST_BARTHELEMY = "America/St_Barthelemy",
    AMERICA_ST_JOHNS = "America/St_Johns",
    AMERICA_ST_KITTS = "America/St_Kitts",
    AMERICA_ST_LUCIA = "America/St_Lucia",
    AMERICA_ST_THOMAS = "America/St_Thomas",
    AMERICA_ST_VINCENT = "America/St_Vincent",
    AMERICA_SWIFT_CURRENT = "America/Swift_Current",
    AMERICA_TEGUCIGALPA = "America/Tegucigalpa",
    AMERICA_THULE = "America/Thule",
    AMERICA_THUNDER_BAY = "America/Thunder_Bay",
    AMERICA_TIJUANA = "America/Tijuana",
    AMERICA_TORONTO = "America/Toronto",
    AMERICA_TORTOLA = "America/Tortola",
    AMERICA_VANCOUVER = "America/Vancouver",
    AMERICA_WHITEHORSE = "America/Whitehorse",
    AMERICA_WINNIPEG = "America/Winnipeg",
    AMERICA_YAKUTAT = "America/Yakutat",
    AMERICA_YELLOWKNIFE = "America/Yellowknife",
    ANTARCTICA_CASEY = "Antarctica/Casey",
    ANTARCTICA_DAVIS = "Antarctica/Davis",
    ANTARCTICA_DUMONTDURVILLE = "Antarctica/DumontDUrville",
    ANTARCTICA_MACQUARIE = "Antarctica/Macquarie",
    ANTARCTICA_MAWSON = "Antarctica/Mawson",
    ANTARCTICA_MCMURDO = "Antarctica/McMurdo",
    ANTARCTICA_PALMER = "Antarctica/Palmer",
    ANTARCTICA_ROTHERA = "Antarctica/Rothera",
    ANTARCTICA_SYOWA = "Antarctica/Syowa",
    ANTARCTICA_TROLL = "Antarctica/Troll",
    ANTARCTICA_VOSTOK = "Antarctica/Vostok",
    ARCTIC_LONGYEARBYEN = "Arctic/Longyearbyen",
    ASIA_ADEN = "Asia/Aden",
    ASIA_ALMATY = "Asia/Almaty",
    ASIA_AMMAN = "Asia/Amman",
    ASIA_ANADYR = "Asia/Anadyr",
    ASIA_AQTAU = "Asia/Aqtau",
    ASIA_AQTOBE = "Asia/Aqtobe",
    ASIA_ASHGABAT = "Asia/Ashgabat",
    ASIA_BAGHDAD = "Asia/Baghdad",
    ASIA_BAHRAIN = "Asia/Bahrain",
    ASIA_BAKU = "Asia/Baku",
    ASIA_BANGKOK = "Asia/Bangkok",
    ASIA_BEIRUT = "Asia/Beirut",
    ASIA_BISHKEK = "Asia/Bishkek",
    ASIA_BRUNEI = "Asia/Brunei",
    ASIA_CHITA = "Asia/Chita",
    ASIA_CHOIBALSAN = "Asia/Choibalsan",
    ASIA_COLOMBO = "Asia/Colombo",
    ASIA_DAMASCUS = "Asia/Damascus",
    ASIA_DHAKA = "Asia/Dhaka",
    ASIA_DILI = "Asia/Dili",
    ASIA_DUBAI = "Asia/Dubai",
    ASIA_DUSHANBE = "Asia/Dushanbe",
    ASIA_GAZA = "Asia/Gaza",
    ASIA_HEBRON = "Asia/Hebron",
    ASIA_HO_CHI_MINH = "Asia/Ho_Chi_Minh",
    ASIA_HONG_KONG = "Asia/Hong_Kong",
    ASIA_HOVD = "Asia/Hovd",
    ASIA_IRKUTSK = "Asia/Irkutsk",
    ASIA_JAKARTA = "Asia/Jakarta",
    ASIA_JAYAPURA = "Asia/Jayapura",
    ASIA_JERUSALEM = "Asia/Jerusalem",
    ASIA_KABUL = "Asia/Kabul",
    ASIA_KAMCHATKA = "Asia/Kamchatka",
    ASIA_KARACHI = "Asia/Karachi",
    ASIA_KATHMANDU = "Asia/Kathmandu",
    ASIA_KHANDYGA = "Asia/Khandyga",
    ASIA_KOLKATA = "Asia/Kolkata",
    ASIA_KRASNOYARSK = "Asia/Krasnoyarsk",
    ASIA_KUALA_LUMPUR = "Asia/Kuala_Lumpur",
    ASIA_KUCHING = "Asia/Kuching",
    ASIA_KUWAIT = "Asia/Kuwait",
    ASIA_MACAU = "Asia/Macau",
    ASIA_MAGADAN = "Asia/Magadan",
    ASIA_MAKASSAR = "Asia/Makassar",
    ASIA_MANILA = "Asia/Manila",
    ASIA_MUSCAT = "Asia/Muscat",
    ASIA_NICOSIA = "Asia/Nicosia",
    ASIA_NOVOKUZNETSK = "Asia/Novokuznetsk",
    ASIA_NOVOSIBIRSK = "Asia/Novosibirsk",
    ASIA_OMSK = "Asia/Omsk",
    ASIA_ORAL = "Asia/Oral",
    ASIA_PHNOM_PENH = "Asia/Phnom_Penh",
    ASIA_PONTIANAK = "Asia/Pontianak",
    ASIA_PYONGYANG = "Asia/Pyongyang",
    ASIA_QATAR = "Asia/Qatar",
    ASIA_QYZYLORDA = "Asia/Qyzylorda",
    ASIA_RANGOON = "Asia/Rangoon",
    ASIA_RIYADH = "Asia/Riyadh",
    ASIA_SAKHALIN = "Asia/Sakhalin",
    ASIA_SAMARKAND = "Asia/Samarkand",
    ASIA_SEOUL = "Asia/Seoul",
    ASIA_SHANGHAI = "Asia/Shanghai",
    ASIA_SINGAPORE = "Asia/Singapore",
    ASIA_SREDNEKOLYMSK = "Asia/Srednekolymsk",
    ASIA_TAIPEI = "Asia/Taipei",
    ASIA_TASHKENT = "Asia/Tashkent",
    ASIA_TBILISI = "Asia/Tbilisi",
    ASIA_TEHRAN = "Asia/Tehran",
    ASIA_THIMPHU = "Asia/Thimphu",
    ASIA_TOKYO = "Asia/Tokyo",
    ASIA_ULAANBAATAR = "Asia/Ulaanbaatar",
    ASIA_URUMQI = "Asia/Urumqi",
    ASIA_UST_NERA = "Asia/Ust-Nera",
    ASIA_VIENTIANE = "Asia/Vientiane",
    ASIA_VLADIVOSTOK = "Asia/Vladivostok",
    ASIA_YAKUTSK = "Asia/Yakutsk",
    ASIA_YEKATERINBURG = "Asia/Yekaterinburg",
    ASIA_YEREVAN = "Asia/Yerevan",
    ATLANTIC_AZORES = "Atlantic/Azores",
    ATLANTIC_BERMUDA = "Atlantic/Bermuda",
    ATLANTIC_CANARY = "Atlantic/Canary",
    ATLANTIC_CAPE_VERDE = "Atlantic/Cape_Verde",
    ATLANTIC_FAROE = "Atlantic/Faroe",
    ATLANTIC_MADEIRA = "Atlantic/Madeira",
    ATLANTIC_REYKJAVIK = "Atlantic/Reykjavik",
    ATLANTIC_SOUTH_GEORGIA = "Atlantic/South_Georgia",
    ATLANTIC_ST_HELENA = "Atlantic/St_Helena",
    ATLANTIC_STANLEY = "Atlantic/Stanley",
    AUSTRALIA_ADELAIDE = "Australia/Adelaide",
    AUSTRALIA_BRISBANE = "Australia/Brisbane",
    AUSTRALIA_BROKEN_HILL = "Australia/Broken_Hill",
    AUSTRALIA_CURRIE = "Australia/Currie",
    AUSTRALIA_DARWIN = "Australia/Darwin",
    AUSTRALIA_EUCLA = "Australia/Eucla",
    AUSTRALIA_HOBART = "Australia/Hobart",
    AUSTRALIA_LINDEMAN = "Australia/Lindeman",
    AUSTRALIA_LORD_HOWE = "Australia/Lord_Howe",
    AUSTRALIA_MELBOURNE = "Australia/Melbourne",
    AUSTRALIA_PERTH = "Australia/Perth",
    AUSTRALIA_SYDNEY = "Australia/Sydney",
    EUROPE_AMSTERDAM = "Europe/Amsterdam",
    EUROPE_ANDORRA = "Europe/Andorra",
    EUROPE_ATHENS = "Europe/Athens",
    EUROPE_BELGRADE = "Europe/Belgrade",
    EUROPE_BERLIN = "Europe/Berlin",
    EUROPE_BRATISLAVA = "Europe/Bratislava",
    EUROPE_BRUSSELS = "Europe/Brussels",
    EUROPE_BUCHAREST = "Europe/Bucharest",
    EUROPE_BUDAPEST = "Europe/Budapest",
    EUROPE_BUSINGEN = "Europe/Busingen",
    EUROPE_CHISINAU = "Europe/Chisinau",
    EUROPE_COPENHAGEN = "Europe/Copenhagen",
    EUROPE_DUBLIN = "Europe/Dublin",
    EUROPE_GIBRALTAR = "Europe/Gibraltar",
    EUROPE_GUERNSEY = "Europe/Guernsey",
    EUROPE_HELSINKI = "Europe/Helsinki",
    EUROPE_ISLE_OF_MAN = "Europe/Isle_of_Man",
    EUROPE_ISTANBUL = "Europe/Istanbul",
    EUROPE_JERSEY = "Europe/Jersey",
    EUROPE_KALININGRAD = "Europe/Kaliningrad",
    EUROPE_KIEV = "Europe/Kiev",
    EUROPE_LISBON = "Europe/Lisbon",
    EUROPE_LJUBLJANA = "Europe/Ljubljana",
    EUROPE_LONDON = "Europe/London",
    EUROPE_LUXEMBOURG = "Europe/Luxembourg",
    EUROPE_MADRID = "Europe/Madrid",
    EUROPE_MALTA = "Europe/Malta",
    EUROPE_MARIEHAMN = "Europe/Mariehamn",
    EUROPE_MINSK = "Europe/Minsk",
    EUROPE_MONACO = "Europe/Monaco",
    EUROPE_MOSCOW = "Europe/Moscow",
    EUROPE_OSLO = "Europe/Oslo",
    EUROPE_PARIS = "Europe/Paris",
    EUROPE_PODGORICA = "Europe/Podgorica",
    EUROPE_PRAGUE = "Europe/Prague",
    EUROPE_RIGA = "Europe/Riga",
    EUROPE_ROME = "Europe/Rome",
    EUROPE_SAMARA = "Europe/Samara",
    EUROPE_SAN_MARINO = "Europe/San_Marino",
    EUROPE_SARAJEVO = "Europe/Sarajevo",
    EUROPE_SIMFEROPOL = "Europe/Simferopol",
    EUROPE_SKOPJE = "Europe/Skopje",
    EUROPE_SOFIA = "Europe/Sofia",
    EUROPE_STOCKHOLM = "Europe/Stockholm",
    EUROPE_TALLINN = "Europe/Tallinn",
    EUROPE_TIRANE = "Europe/Tirane",
    EUROPE_UZHGOROD = "Europe/Uzhgorod",
    EUROPE_VADUZ = "Europe/Vaduz",
    EUROPE_VATICAN = "Europe/Vatican",
    EUROPE_VIENNA = "Europe/Vienna",
    EUROPE_VILNIUS = "Europe/Vilnius",
    EUROPE_VOLGOGRAD = "Europe/Volgograd",
    EUROPE_WARSAW = "Europe/Warsaw",
    EUROPE_ZAGREB = "Europe/Zagreb",
    EUROPE_ZAPOROZHYE = "Europe/Zaporozhye",
    EUROPE_ZURICH = "Europe/Zurich",
    INDIAN_ANTANANARIVO = "Indian/Antananarivo",
    INDIAN_CHAGOS = "Indian/Chagos",
    INDIAN_CHRISTMAS = "Indian/Christmas",
    INDIAN_COCOS = "Indian/Cocos",
    INDIAN_COMORO = "Indian/Comoro",
    INDIAN_KERGUELEN = "Indian/Kerguelen",
    INDIAN_MAHE = "Indian/Mahe",
    INDIAN_MALDIVES = "Indian/Maldives",
    INDIAN_MAURITIUS = "Indian/Mauritius",
    INDIAN_MAYOTTE = "Indian/Mayotte",
    INDIAN_REUNION = "Indian/Reunion",
    PACIFIC_APIA = "Pacific/Apia",
    PACIFIC_AUCKLAND = "Pacific/Auckland",
    PACIFIC_BOUGAINVILLE = "Pacific/Bougainville",
    PACIFIC_CHATHAM = "Pacific/Chatham",
    PACIFIC_CHUUK = "Pacific/Chuuk",
    PACIFIC_EASTER = "Pacific/Easter",
    PACIFIC_EFATE = "Pacific/Efate",
    PACIFIC_ENDERBURY = "Pacific/Enderbury",
    PACIFIC_FAKAOFO = "Pacific/Fakaofo",
    PACIFIC_FIJI = "Pacific/Fiji",
    PACIFIC_FUNAFUTI = "Pacific/Funafuti",
    PACIFIC_GALAPAGOS = "Pacific/Galapagos",
    PACIFIC_GAMBIER = "Pacific/Gambier",
    PACIFIC_GUADALCANAL = "Pacific/Guadalcanal",
    PACIFIC_GUAM = "Pacific/Guam",
    PACIFIC_HONOLULU = "Pacific/Honolulu",
    PACIFIC_JOHNSTON = "Pacific/Johnston",
    PACIFIC_KIRITIMATI = "Pacific/Kiritimati",
    PACIFIC_KOSRAE = "Pacific/Kosrae",
    PACIFIC_KWAJALEIN = "Pacific/Kwajalein",
    PACIFIC_MAJURO = "Pacific/Majuro",
    PACIFIC_MARQUESAS = "Pacific/Marquesas",
    PACIFIC_MIDWAY = "Pacific/Midway",
    PACIFIC_NAURU = "Pacific/Nauru",
    PACIFIC_NIUE = "Pacific/Niue",
    PACIFIC_NORFOLK = "Pacific/Norfolk",
    PACIFIC_NOUMEA = "Pacific/Noumea",
    PACIFIC_PAGO_PAGO = "Pacific/Pago_Pago",
    PACIFIC_PALAU = "Pacific/Palau",
    PACIFIC_PITCAIRN = "Pacific/Pitcairn",
    PACIFIC_POHNPEI = "Pacific/Pohnpei",
    PACIFIC_PORT_MORESBY = "Pacific/Port_Moresby",
    PACIFIC_RAROTONGA = "Pacific/Rarotonga",
    PACIFIC_SAIPAN = "Pacific/Saipan",
    PACIFIC_TAHITI = "Pacific/Tahiti",
    PACIFIC_TARAWA = "Pacific/Tarawa",
    PACIFIC_TONGATAPU = "Pacific/Tongatapu",
    PACIFIC_WAKE = "Pacific/Wake",
    PACIFIC_WALLIS = "Pacific/Wallis"
}
export declare enum NichandleGenderEnum {
    FEMALE = "female",
    MALE = "male"
}
export interface OrderContract {
    url: string;
    name: string;
    content: string;
}
export declare enum OrderCurrencyCodeEnum {
    AUD = "AUD",
    CAD = "CAD",
    CZK = "CZK",
    EUR = "EUR",
    GBP = "GBP",
    LTL = "LTL",
    MAD = "MAD",
    N_A = "N/A",
    PLN = "PLN",
    SGD = "SGD",
    TND = "TND",
    USD = "USD",
    XOF = "XOF",
    POINTS = "points"
}
export interface OrderPrice {
    currencyCode: OrderCurrencyCodeEnum;
    text: string;
    value: any;
}
export declare enum ServiceRenewalTypeEnum {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
export interface ServiceRenewType {
    manualPayment?: boolean;
    automatic: boolean;
    deleteAtExpiration: boolean;
    forced: boolean;
    period?: number;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export interface ServicesService {
    expiration: string;
    possibleRenewPeriod?: number[];
    status: ServiceStateEnum;
    contactTech: string;
    renewalType: ServiceRenewalTypeEnum;
    creation: string;
    engagedUpTo?: string;
    serviceId: number;
    renew?: ServiceRenewType;
    contactAdmin: string;
    canDeleteAtExpiration: boolean;
    contactBilling: string;
    domain: string;
}
export interface SparetelephonyTelephonySpare {
    macAddress: string;
    brand: string;
    protocol: TelephonyProtocolEnum;
}
export interface TelephonyAbbreviatedNumber {
    destinationNumber: any;
    abbreviatedNumber: number;
    surname: string;
    name: string;
}
export interface TelephonyAbbreviatedNumberGroup {
    destinationNumber: any;
    name: string;
    surname: string;
    abbreviatedNumber: number;
}
export interface TelephonyAccessoryOffer {
    name: string;
    url?: string;
    description?: string;
    price: OrderPrice;
}
export declare enum TelephonyAntihackActionEnum {
    AUTHORIZE_ALL = "AUTHORIZE_ALL",
    AUTHORIZE_ONE_NUMBER = "AUTHORIZE_ONE_NUMBER",
    BLOCK_ALL = "BLOCK_ALL",
    BLOCK_ONE_NUMBER = "BLOCK_ONE_NUMBER"
}
export interface TelephonyBannerAccess {
    id: number;
    url: string;
    creationDate: string;
}
export declare enum TelephonyBillDocument {
    CSV = "csv",
    PDF = "pdf",
    RECEIVED_CSV = "received.csv",
    XML = "xml"
}
export interface TelephonyBillingAccount {
    billingAccount: string;
    trusted: boolean;
    currentOutplan: OrderPrice;
    status: TelephonyBillingAccountStatusEnum;
    description: string;
    hiddenExternalNumber: boolean;
    overrideDisplayedNumber: boolean;
    securityDeposit: OrderPrice;
    creditThreshold: OrderPrice;
    allowedOutplan: OrderPrice;
}
export declare enum TelephonyBillingAccountStatusEnum {
    CLOSED = "closed",
    DELETED = "deleted",
    ENABLED = "enabled",
    EXPIRED = "expired"
}
export declare enum TelephonyBillStatusEnum {
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export interface TelephonyCallDiagnosticCallQuality {
    maxJitter: any;
    portDst: number;
    ipDst: string;
    timestamp: string;
    codec: TelephonyCallDiagnosticCodecEnum;
    packets: number;
    rtpLost: number;
    ipSrc: string;
    maxDelay: any;
    mos: number;
    portSrc: number;
    callId: string;
    flowId: number;
}
export declare type TelephonyCallDiagnosticCauseEnum = '1' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '1a' | '1b' | '1c' | '1d' | '1e' | '1f' | '2' | '22' | '26' | '27' | '28' | '29' | '2a' | '2b' | '2c' | '2e' | '2f' | '3' | '30' | '31' | '32' | '33' | '34' | '35' | '37' | '39' | '3a' | '3e' | '3f' | '4' | '41' | '42' | '45' | '46' | '4f' | '5' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '5a' | '5b' | '5f' | '6' | '60' | '61' | '62' | '63' | '64' | '65' | '66' | '67' | '6e' | '6f' | '7' | '7f' | '8' | '9';
export interface TelephonyCallDiagnosticCdrs {
    timestamp: string;
    basic: TelephonyCallDiagnosticCdrsBasic;
}
export interface TelephonyCallDiagnosticCdrsBasic {
    releaseLocation: TelephonyReleaseLocationEnum;
    causeDescription: string;
    cause: TelephonyCallDiagnosticCauseEnum;
}
export declare enum TelephonyCallDiagnosticCodecEnum {
    G722 = "G722",
    G729 = "G729",
    PCMA = "PCMA",
    PCMU = "PCMU"
}
export interface TelephonyCallDiagnosticReporting {
    message: string;
}
export interface TelephonyCallDiagnostics {
    reporting: TelephonyCallDiagnosticReporting[];
    sip: TelephonyCallDiagnosticSip[];
    callQuality: TelephonyCallDiagnosticCallQuality[];
    cdrs: TelephonyCallDiagnosticCdrs[];
    status: TelephonyCallDiagnosticStatusEnum;
}
export interface TelephonyCallDiagnosticSip {
    requestMethod?: string;
    timestamp: string;
    response?: string;
    headers: string;
}
export declare enum TelephonyCallDiagnosticStatusEnum {
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export interface TelephonyCallsGenerated {
    callee?: any;
    caller?: any;
    application?: string;
    callCreatedDatetime?: string;
    hangupDatetime?: string;
    callDuration?: number;
    uuid: string;
    billingNumber: any;
    hangupCause?: TelephonyCallsGeneratorHangupCauseEnum;
    dtmf?: string;
    answerDatetime?: string;
    transferFrom?: string;
    identifier: string;
    applicationResult?: string;
}
export declare enum TelephonyCallsGeneratorDialplanEnum {
    PLAYAUDIOFILE = "PlayAudioFile",
    PLAYAUDIOFILEANDTRANSFERCALL = "PlayAudioFileAndTransferCall",
    READTEXT = "ReadText",
    REQUESTAPPOINTMENTCONFIRMATION = "RequestAppointmentConfirmation",
    REQUESTAPPOINTMENTCONFIRMATIONWITHTRANSFER = "RequestAppointmentConfirmationWithTransfer"
}
export declare enum TelephonyCallsGeneratorHangupCauseEnum {
    ACCESSINFORMATIONDISCARDED = "AccessInformationDiscarded",
    ALLOTTEDTIMEOUT = "AllottedTimeout",
    ATTENDEDTRANSFER = "AttendedTransfer",
    BLINDTRANSFER = "BlindTransfer",
    CALLAWARDEDBEING = "CallAwardedbeing",
    CHANNELTYPENOTIMPLEMENTED = "ChannelTypeNotImplemented",
    CHANNELUNACCEPTABLE = "ChannelUnacceptable",
    CODESIP403BEARERCAPABILITYNOTAUTHORIZED = "CodeSip403BearerCapabilityNotAuthorized",
    CODESIP403INCOMINGCALLSBARRED = "CodeSip403IncomingCallsBarred",
    CODESIP403OUTGOINGCALLSBARRED = "CodeSip403OutgoingCallsBarred",
    CODESIP404NOROUTETODESTINATION = "CodeSip404NoRouteToDestination",
    CODESIP404NOROUTETOSPECIFIEDTRANSITNETWORK = "CodeSip404NoRouteToSpecifiedTransitNetwork",
    CODESIP404UNALLOCATEDNUMBER = "CodeSip404UnallocatedNumber",
    CODESIP408NOUSERRESPONDING = "CodeSip408NoUserResponding",
    CODESIP410NUMBERCHANGED = "CodeSip410NumberChanged",
    CODESIP410REDIRECTIONTONEWDESTINATION = "CodeSip410RedirectionToNewDestination",
    CODESIP480NOANSWERFROMUSER = "CodeSip480NoAnswerFromUser",
    CODESIP480NORMALUNSPECIFIED = "CodeSip480NormalUnspecified",
    CODESIP480SUBSCRIBERABSENT = "CodeSip480SubscriberAbsent",
    CODESIP483EXCHANGEROUTINGERROR = "CodeSip483ExchangeRoutingError",
    CODESIP484INVALIDNUMBERFORMATADDRESSINCOMPLETE = "CodeSip484InvalidNumberFormatAddressIncomplete",
    CODESIP486USERBUSY = "CodeSip486UserBusy",
    CODESIP487ORIGINATORCANCEL = "CodeSip487OriginatorCancel",
    CODESIP488INCOMPATIBLEDESTINATION = "CodeSip488IncompatibleDestination",
    CODESIP488BEARERCAPABILITYNOTIMPLEMENTED = "CodeSip488bearerCapabilityNotImplemented",
    CODESIP501FACILITIESREJECTED = "CodeSip501FacilitiesRejected",
    CODESIP501REQUESTEDFACILITYNOTIMPLEMENTED = "CodeSip501RequestedFacilityNotImplemented",
    CODESIP501SERVICEOROPTIONNOTIMPLEMENTEDUNSPECIFIED = "CodeSip501ServiceOrOptionNotImplementedUnspecified",
    CODESIP502DESTINATIONOUTOFORDER = "CodeSip502DestinationOutOfOrder",
    CODESIP503BEARERCAPABILITYNOTPRESENTLYAVAILABLE = "CodeSip503BearerCapabilityNotPresentlyAvailable",
    CODESIP503NETWORKOUTOFORDER = "CodeSip503NetworkOutOfOrder",
    CODESIP503NOCIRCUITCHANNELAVAILABLE = "CodeSip503NoCircuitChannelAvailable",
    CODESIP503REQUESTEDCIRCUITORCHANNELNOTAVAILABLE = "CodeSip503RequestedCircuitOrChannelNotAvailable",
    CODESIP503SWITCHINGEQUIPMENTCONGESTION = "CodeSip503SwitchingEquipmentCongestion",
    CODESIP503TEMPORARYFAILURE = "CodeSip503TemporaryFailure",
    CODESIP504RECOVERYONTIMEREXPIRY = "CodeSip504RecoveryOnTimerExpiry",
    CODESIP603CALLREJECTED = "CodeSip603CallRejected",
    CRASH = "Crash",
    GATEWAYDOWN = "GatewayDown",
    INFORMATIONELEMENTORPARAMETERNONEXISTENTORNOTIMPLEMENTED = "InformationElementOrParameterNonExistentOrNotImplemented",
    INTERWORKINGUNSPECIFIED = "InterworkingUnspecified",
    INVALIDCALLREFERENCEVALUE = "InvalidCallReferenceValue",
    INVALIDINFORMATIONELEMENTCONTENTS = "InvalidInformationElementContents",
    INVALIDMESSAGEUNSPECIFIED = "InvalidMessageUnspecified",
    LOSERACE = "LoseRace",
    MANAGERREQUEST = "ManagerRequest",
    MANDATORYINFORMATIONELEMENTISMISSING = "MandatoryInformationElementIsMissing",
    MEDIATIMEOUT = "MediaTimeout",
    MESSAGENOTCOMPATIBLEWITHCALLSTATE = "MessageNotCompatibleWithCallState",
    MESSAGENOTCOMPATIBLEWITHCALLSTATEORMESSAGETYPENONEXISTENTORNOTIMPLEMENTED = "MessageNotCompatibleWithCallStateOrMessageTypeNonExistentOrNotImplemented",
    MESSAGETYPENONEXISTENTORNOTIMPLEMENTED = "MessageTypeNonExistentOrNotImplemented",
    NORMALCALLCLEARING = "NormalCallClearing",
    PARAMETERNONEXISTENTORNOTIMPLEMENTEDPASSEDONNATIONALUSE = "ParameterNonExistentOrNotImplementedPassedOnNationalUse",
    PICKEDOFF = "PickedOff",
    PREEMPTED = "PreEmpted",
    PROGRESSTIMEOUT = "ProgressTimeout",
    PROTOCOLERRORUNSPECIFIED = "ProtocolErrorUnspecified",
    REQUESTEDFACILITYNOTSUBSCRIBED = "RequestedFacilityNotSubscribed",
    RESPONSETOSTATUSINQUIRY = "ResponseToStatusInquiry",
    SERVICEOROPTIONNOTAVAILABLEUNSPECIFIED = "ServiceOrOptionNotAvailableUnspecified",
    SYSTEMSHUTDOWN = "SystemShutdown",
    UNKNOWNORCALLUNFINISHED = "UnknownOrCallUnfinished",
    UNSPECIFIEDNOOTHERCAUSECODESAPPLICABLE = "UnspecifiedNoOtherCauseCodesApplicable",
    USERCHALLENGE = "UserChallenge",
    USERNOTREGISTERED = "UserNotRegistered"
}
export interface TelephonyCarrierSip {
    serviceType: TelephonyTypeServiceEnum;
    description: string;
    serviceName: string;
}
export interface TelephonyCarrierSipCustomerEndpoint {
    port: number;
    protocol: TelephonyCarrierSipEndpointProtocolEnum;
    ip: string;
    priority: number;
    id: number;
    weight: number;
}
export interface TelephonyCarrierSipDetails {
    maxCallsPerSecond: number;
    maxConcurrentCalls: number;
    description: string;
}
export declare enum TelephonyCarrierSipEndpointProtocolEnum {
    TCP = "tcp",
    TLS = "tls",
    UDP = "udp"
}
export interface TelephonyCity {
    administrationCode?: string;
    name: string;
    zipCode: string;
}
export interface TelephonyClick2CallUser {
    id: number;
    creationDateTime: string;
    login: string;
}
export interface TelephonyConference {
    serviceName: string;
    serviceType: TelephonyTypeServiceEnum;
    description: string;
    offers: string[];
}
export interface TelephonyConferenceHistory {
    id: number;
    dateBegin: string;
    recordUrl?: string;
    countParticipants: number;
    duration: number;
    events: TelephonyConferenceHistoryEvent[];
    dateEnd: string;
    countConnections: number;
}
export interface TelephonyConferenceHistoryEvent {
    date: string;
    type: string;
    callerid: string;
}
export interface TelephonyConferenceInformations {
    dateStart: string;
    membersCount: number;
    locked: boolean;
}
export declare enum TelephonyConferenceLanguageEnum {
    DE = "de",
    EN = "en",
    ES = "es",
    FR = "fr",
    IT = "it"
}
export interface TelephonyConferenceParticipants {
    arrivalDateTime: string;
    talking: boolean;
    speak: boolean;
    id: number;
    floor: boolean;
    callerName: string;
    hear: boolean;
    energy: number;
    callerNumber: string;
}
export interface TelephonyConferenceProperties {
    reportStatus: TelephonyConferenceReportStatusEnum;
    pin: string;
    announceSoundId?: number;
    reportEmail?: string;
    recordStatus: boolean;
    language: TelephonyConferenceLanguageEnum;
    eventsChannel: string;
    announceFilename?: string;
    enterMuted: boolean;
    anonymousRejection: boolean;
    announceFile: boolean;
    whiteLabelReport: boolean;
}
export declare enum TelephonyConferenceReportStatusEnum {
    CUSTOMER = "customer",
    NONE = "none",
    OTHER = "other"
}
export interface TelephonyConferenceWebAccess {
    id: number;
    type: TelephonyConferenceWebAccessTypeEnum;
    url: string;
}
export declare enum TelephonyConferenceWebAccessTypeEnum {
    READ = "read",
    WRITE = "write"
}
export interface TelephonyConsumptionThreshold {
    notifyEmail: string;
    percentage: any;
    id: number;
    block: TelephonyOutplanNotificationBlockEnum;
}
export interface TelephonyContact {
    city?: string;
    firstname?: string;
    email?: string;
    country?: CoreTypesCountryEnum;
    zip?: string;
    address?: string;
    name?: string;
    organisation?: string;
    phone?: string;
}
export declare enum TelephonyContactsExportFormatsEnum {
    CSV = "csv"
}
export interface TelephonyDatetimeAndIpvalue {
    datetime: string;
    ip?: string;
}
export interface TelephonyDdi {
    featureType: TelephonyTypeEnum;
    destination?: any;
    serviceName: string;
    description: string;
    serviceType: TelephonyTypeServiceEnum;
}
export interface TelephonyDefaultSipDomains {
    currentDomain: string;
    productType: TelephonySipDomainProductTypeEnum;
    list: string[];
    country: TelephonyNumberCountryEnum;
}
export interface TelephonyDetailedRateCodeInformation {
    effectiveDatetime?: string;
    updateRateCodePriceWithoutTax?: OrderPrice;
    cancelLimitDatetime?: string;
    repaymentPricePerMinuteWithoutTax: OrderPrice;
    repaymentPricePerCallWithoutTax: OrderPrice;
    pricePerCallWithoutTax: OrderPrice;
    rateCode: string;
    pricePerMinuteWithoutTax: OrderPrice;
}
export interface TelephonyDiagnosticReport {
    datetime: string;
    description: string;
    name: string;
    category: TelephonyDiagnosticReportCategoryEnum;
    report: string;
    level: TelephonyDiagnosticReportLevelEnum;
    callId: string;
}
export declare enum TelephonyDiagnosticReportCategoryEnum {
    DPI = "dpi",
    SIGNAL = "signal"
}
export declare type TelephonyDiagnosticReportIndexEnum = '2 days ago' | '3 days ago' | 'today' | 'yesterday';
export declare enum TelephonyDiagnosticReportLevelEnum {
    DEBUG = "debug",
    ERROR = "error",
    INFO = "info",
    WARN = "warn"
}
export interface TelephonyDirectoryHeadingPJ {
    apeDescription: string;
    directoryServiceDescription: string;
    directoryServiceCode: number;
    notification: string;
    apeCode: string;
}
export interface TelephonyDirectoryInfo {
    wayType: string;
    firstName: string;
    directoryServiceCode: string;
    socialNominationExtra: string;
    birthDate?: string;
    postBox: string;
    gender?: NichandleGenderEnum;
    address: string;
    number: string;
    status: string;
    modificationDate: string;
    displayUniversalDirectory: boolean;
    socialNomination: string;
    cedex: string;
    legalForm: string;
    name: string;
    country: string;
    email: string;
    PJSocialNomination: string;
    wayName: string;
    areaCode: number;
    urbanDistrict: string;
    wayNumber: string;
    ape: string;
    displayOnlyCity: boolean;
    displayMarketingDirectory: boolean;
    inseeCode: number;
    receivePJDirectory: boolean;
    addressExtra: string;
    siret: string;
    modificationType: string;
    displaySearchReverse: boolean;
    lineDescription: string;
    occupation: string;
    wayNumberExtra: string;
    postCode: string;
    city: string;
    displayFirstName: boolean;
}
export interface TelephonyDirectoryWayType {
    abbreviatedName: string;
    wayName: string;
}
export interface TelephonyEasyHunting {
    serviceName: string;
    showCallerNumber: TelephonyOvhPabxDialplanNumberPresentationEnum;
    description: string;
    toneOnClosing?: number;
    isCCS: boolean;
    toneOnHold?: number;
    toneOnOpening?: number;
    anonymousRejection: boolean;
    serviceType: TelephonyTypeServiceEnum;
    maxWaitTime: number;
    voicemail?: any;
    statusIvrEnabled: boolean;
    queueSize: number;
    strategy: TelephonyOvhPabxHuntingQueueStrategyEnum;
    featureType: TelephonyTypeEnum;
}
export interface TelephonyEasyHuntingScreenListsConditions {
    callerIdNumber?: string;
    conditionId: number;
    destinationNumber?: string;
    screenListType: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum;
}
export interface TelephonyEasyHuntingScreenListsConditionsSettings {
    status: TelephonyEasyHuntingScreenListsConditionsStatusEnum;
}
export declare enum TelephonyEasyHuntingScreenListsConditionsStatusEnum {
    DISABLED = "disabled",
    INCOMINGBLACKLIST = "incomingBlackList",
    INCOMINGWHITELIST = "incomingWhiteList"
}
export interface TelephonyEasyHuntingTimeConditions {
    weekDay: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum;
    policy: TelephonyTimeConditionsPolicyEnum;
    conditionId: number;
    timeTo: any;
    timeFrom: any;
}
export interface TelephonyEasyHuntingTimeConditionsSettings {
    enable: boolean;
    slot1Type?: TelephonyTimeConditionsSettingsForwardTypeEnum;
    slot1Number?: any;
    slot2Type?: TelephonyTimeConditionsSettingsForwardTypeEnum;
    slot2Number?: any;
    slot3Number?: any;
    unavailableNumber?: any;
    unavailableType?: TelephonyTimeConditionsSettingsForwardTypeEnum;
    slot3Type?: TelephonyTimeConditionsSettingsForwardTypeEnum;
}
export interface TelephonyEasyMiniPabxHuntingAgent {
    noReplyTimer: number;
    position: number;
    logged: boolean;
    agentNumber: any;
}
export declare enum TelephonyEasyMiniPabxHuntingPatternEnum {
    ALL_AT_ONCE = "all-at-once",
    CUMULATED = "cumulated",
    SEQUENTIAL = "sequential"
}
export declare enum TelephonyEasyMiniPabxHuntingStrategyEnum {
    CYCLIC = "cyclic",
    LEASTIDLESINCELASTCALL = "leastIdleSinceLastCall",
    LINEAR = "linear",
    MOSTIDLESINCELASTCALL = "mostIdleSinceLastCall",
    MOSTIDLESINCELOGGING = "mostIdleSinceLogging",
    PARALLEL = "parallel",
    RANDOM = "random"
}
export interface TelephonyEasyPabx {
    serviceName: string;
    serviceType: TelephonyTypeServiceEnum;
    description: string;
    featureType: TelephonyTypeEnum;
}
export interface TelephonyEasyPabxHunting {
    pattern: TelephonyEasyMiniPabxHuntingPatternEnum;
    strategy: TelephonyEasyMiniPabxHuntingStrategyEnum;
    noReplyTimer: number;
    voicemail?: any;
    toneRingbackSoundId?: number;
    toneOnHoldSoundId?: number;
    numberOfCalls: number;
    toneRingback: boolean;
    toneOnHold: boolean;
    toneOnClosureSoundId?: number;
    toneOnClosure: boolean;
    name: string;
    anonymousCallRejection: boolean;
}
export interface TelephonyEntrepriseNumberInformations {
    address?: string;
    entrepriseNumber: string;
    siren?: string;
    ape?: string;
    brand?: string;
    name: string;
    isValid: boolean;
}
export interface TelephonyEntrepriseNumberInformationsTask {
    status: TelephonyTaskStatusEnum;
    informations: TelephonyEntrepriseNumberInformations;
}
export interface TelephonyEvent {
    duration: number;
    dateTime: string;
    direction: TelephonyRealtimeEventDirection;
    protocol: TelephonyRealtimeEventProtocol;
    callingIdentifier: string;
    calledIdentifier: string;
    id: string;
    eventType: TelephonyRealtimeEventType;
}
export interface TelephonyEventCallback {
    emailError?: string;
    url?: string;
}
export interface TelephonyEventToken {
    token: string;
}
export interface TelephonyFax {
    offers: string[];
    notifications?: TelephonyLineNotificationsOptions;
    serviceType: TelephonyTypeServiceEnum;
    description: string;
    serviceName: string;
}
export interface TelephonyFaxCampaign {
    dateStart?: string;
    status: string;
    dateEnd?: string;
    name: string;
    countTotal: number;
    countSuccess: number;
    id: number;
    countFailed: number;
    reference: string;
}
export interface TelephonyFaxCampaignDetail {
    todo: any;
    success: any;
    failed: any;
}
export declare enum TelephonyFaxCampaignRecipientsTypeEnum {
    DOCUMENT = "document",
    LIST = "list"
}
export declare enum TelephonyFaxCampaignSendTypeEnum {
    AUTOMATIC = "automatic",
    MANUAL = "manual",
    SCHEDULED = "scheduled"
}
export interface TelephonyFaxConsumption {
    consumptionId: number;
    calling?: any;
    pages: number;
    called?: any;
    priceWithoutTax: OrderPrice;
    creationDatetime: string;
    wayType: TelephonyFaxConsumptionWayTypeEnum;
}
export declare enum TelephonyFaxConsumptionWayTypeEnum {
    RECEIVED = "received",
    SENT = "sent"
}
export declare enum TelephonyFaxMailFormatEnum {
    HTML = "html",
    TEXT = "text"
}
export interface TelephonyFaxProperties {
    redirectionEmail: string[];
    callNumber: string;
    countryCode: string;
    receiver: string;
    faxQuality: TelephonyFaxQualityEnum;
    fromName: string;
    rejectAnonymous: boolean;
    fromEmail: string;
    sender: string;
    faxTagLine: string;
    faxMaxCall: TelephonyFaxSendingTries;
    mailFormat: TelephonyFaxMailFormatEnum;
}
export declare enum TelephonyFaxQualityEnum {
    BEST = "best",
    HIGH = "high",
    NORMAL = "normal"
}
export interface TelephonyFaxScreen {
    blacklistedNumbers?: string[];
    whitelistedTSI?: string[];
    countryCode: string;
    blacklistedTSI?: string[];
    whitelistedNumbers?: string[];
    serviceName: string;
    filteringList?: TelephonyFaxScreenListTypeEnum;
    callNumber: string;
}
export declare enum TelephonyFaxScreenListTypeEnum {
    BLACKLIST = "blacklist",
    NO = "no",
    WHITELIST = "whitelist"
}
export declare type TelephonyFaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export interface TelephonyFunctionKey {
    type: string;
    parameter?: string;
    function?: string;
    label: string;
    keyNum: number;
    default?: string;
}
export interface TelephonyGenericScreen {
    serviceName: string;
}
export interface TelephonyHardwareOffer {
    price: OrderPrice;
    name: string;
    url?: string;
    description?: string;
}
export interface TelephonyHistoryConsumption {
    priceOutplan: OrderPrice;
    status: TelephonyBillStatusEnum;
    price: OrderPrice;
    date: string;
}
export interface TelephonyHistoryRepaymentConsumption {
    status: TelephonyBillStatusEnum;
    price: OrderPrice;
    billingNumber: string;
    date: string;
}
export interface TelephonyHistoryTollfreeConsumption {
    date: string;
    status: TelephonyBillStatusEnum;
    price: OrderPrice;
}
export interface TelephonyLine {
    canChangePassword: boolean;
    serviceType: TelephonyTypeServiceEnum;
    isAttachedToOtherLinesPhone: boolean;
    offers: string[];
    description: string;
    getPublicOffer: TelephonyLineOffer;
    serviceName: string;
    simultaneousLines: number;
    notifications?: TelephonyLineNotificationsOptions;
    infrastructure: string;
}
export declare enum TelephonyLineBlockingMode {
    BOTH = "both",
    INCOMING = "incoming",
    OUTGOING = "outgoing"
}
export declare enum TelephonyLineNotificationsLogsFrequencyEnum {
    NEVER = "Never",
    ONCE_A_DAY = "Once a day",
    TWICE_A_DAY = "Twice a day"
}
export interface TelephonyLineNotificationsLogsOptions {
    frequency?: TelephonyLineNotificationsLogsFrequencyEnum;
    sendIfNull?: boolean;
    email?: string;
}
export interface TelephonyLineNotificationsOptions {
    logs?: TelephonyLineNotificationsLogsOptions;
}
export interface TelephonyLineOffer {
    description: string;
    name: string;
    price?: OrderPrice;
}
export interface TelephonyLineOffersAndContracts {
    contracts: OrderContract[];
    offers: TelephonyLineOffer[];
}
export declare enum TelephonyLineOptionForwardNatureTypeEnum {
    FAX = "fax",
    NUMBER = "number",
    VOICEMAIL = "voicemail"
}
export declare enum TelephonyLineOptionIntercomEnum {
    NO = "no",
    PREFIXED = "prefixed",
    YES = "yes"
}
export declare enum TelephonyLineOptionLanguageEnum {
    DUTCH = "Dutch",
    ENGLISH_UK = "English (UK)",
    FRENCH = "French",
    FRENCH_BE = "French (BE)",
    GERMAN = "German",
    ITALIAN = "Italian",
    SPANISH = "Spanish"
}
export interface TelephonyLineOptions {
    toneOnCallWaitingSoundId?: number;
    intercom: TelephonyLineOptionIntercomEnum;
    forwardUnconditionalNumber: any;
    recordOutgoingCallsBeta: boolean;
    forwardBusy: boolean;
    callWaiting: boolean;
    forwardUnconditional: boolean;
    forwardBackupNumber: any;
    absentSubscriber: boolean;
    forwardNoReplyNumber: any;
    defaultVoicemail: any;
    anonymousCallRejection: boolean;
    doNotDisturb: boolean;
    domain: string;
    forwardBackupNature: TelephonyLineOptionForwardNatureTypeEnum;
    voicemailExternalNumber: any;
    forwardBusyNumber: any;
    forwardNoReplyDelay: number;
    forwardBusyNature: TelephonyLineOptionForwardNatureTypeEnum;
    forwardNoReplyNature: TelephonyLineOptionForwardNatureTypeEnum;
    lockOutCall: boolean;
    lockOutCallPassword?: string;
    identificationRestriction: boolean;
    forwardUnconditionalNature: TelephonyLineOptionForwardNatureTypeEnum;
    forwardBackup: boolean;
    voicemailInternalNumber: string;
    callRestrictionIncoming: boolean;
    forwardNoReply: boolean;
    toneOnHoldSoundId?: number;
    toneRingbackSoundId?: number;
    callRestrictionOutgoing: boolean;
    language: TelephonyLineOptionLanguageEnum;
    codecs: string;
    displayNumber: any;
    ipRestrictions: string[];
}
export interface TelephonyLinePhone {
    brand: string;
    description: string;
    maxline: number;
    price: OrderPrice;
    protocol: TelephonyProtocolEnum;
}
export interface TelephonyLinePhoneAssociable {
    brand: string;
    associatedLines: TelephonyLinePhoneAssociableConfiguredLines[];
    protocol: TelephonyProtocolEnum;
    maxLines: number;
}
export interface TelephonyLinePhoneAssociableConfiguredLines {
    description: string;
    serviceName: string;
}
export declare enum TelephonyLineStatisticsTypeEnum {
    MAXDELAY = "maxDelay",
    MAXJITTER = "maxJitter",
    RTPMOS = "rtpMos",
    SUMRTPLOST = "sumRtpLost"
}
export interface TelephonyMiniPabx {
    featureType: TelephonyTypeEnum;
    serviceName: string;
    description: string;
    serviceType: TelephonyTypeServiceEnum;
}
export interface TelephonyMiniPabxHunting {
    toneOnClosure: boolean;
    toneOnClosureSoundId?: number;
    anonymousCallRejection: boolean;
    name: string;
    onHoldTimer: number;
    numberOfCalls: number;
    toneRingback: boolean;
    toneOnHold: boolean;
    toneRingbackSoundId?: number;
    toneOnHoldSoundId?: number;
    queueSize: number;
    pattern: TelephonyEasyMiniPabxHuntingPatternEnum;
    strategy: TelephonyEasyMiniPabxHuntingStrategyEnum;
}
export interface TelephonyNumber {
    serviceName: string;
    serviceType: TelephonyTypeServiceEnum;
    description: string;
    partOfPool?: string;
    featureType: TelephonyTypeEnum;
}
export declare type TelephonyNumberCountryCodeEnum = 32 | 33 | 34 | 39 | 41 | 44 | 49;
export declare enum TelephonyNumberCountryEnum {
    BE = "be",
    CH = "ch",
    DE = "de",
    ES = "es",
    FR = "fr",
    GB = "gb",
    IT = "it",
    UK = "uk"
}
export interface TelephonyNumberDetailedZone {
    zneList: string[];
    prefix: TelephonyNumberCountryCodeEnum;
    internationalNumber: string;
    zipCode?: string;
    type: TelephonyNumberDetailedZoneTypeEnum;
    country: TelephonyNumberCountryEnum;
    matchingCriteria?: TelephonyNumberDetailedZoneMatchingCriteriaEnum;
    number: string;
    askedCity?: string;
    city: string;
}
export declare enum TelephonyNumberDetailedZoneMatchingCriteriaEnum {
    CITY = "city",
    INTERNATIONALNUMBER = "internationalNumber",
    NUMBER = "number",
    ZNE = "zne"
}
export declare enum TelephonyNumberDetailedZoneTypeEnum {
    GEOGRAPHIC = "geographic",
    NON_GEOGRAPHIC = "non-geographic",
    SPECIAL = "special"
}
export declare enum TelephonyNumberTypeEnum {
    GEOGRAPHIC = "geographic",
    NOGEOGRAPHIC = "nogeographic",
    SPECIAL = "special"
}
export interface TelephonyOfferChange {
    offer: string;
}
export interface TelephonyOfferTask {
    taskId: number;
    type: TelephonyOfferTaskTypeEnum;
    executionDate: string;
    action: TelephonyOfferTaskActionEnum;
    status: TelephonyTaskStatusEnum;
}
export declare enum TelephonyOfferTaskActionEnum {
    CONVERTTOALIAS = "convertToAlias",
    CONVERTTOSIP = "convertToSip",
    MIGRATETONEWVOICEMAIL = "migrateToNewVoicemail",
    REMOVESIMLTANEOUSLINES = "removeSimltaneousLines",
    SWITCHSERVER = "switchServer",
    TERMINATION = "termination",
    UPDATEFIRMWARE = "updateFirmware",
    UPGRADE = "upgrade"
}
export declare enum TelephonyOfferTaskTypeEnum {
    LINE = "line",
    OFFER = "offer",
    OPTION = "option",
    PHONE = "phone"
}
export interface TelephonyOldPhone {
    model: string;
    mac: string;
}
export declare enum TelephonyOutplanNotificationBlockEnum {
    BLOCKALLCALLS = "blockAllCalls",
    BLOCKINCOMINGCALLS = "blockIncomingCalls",
    BLOCKOUTGOINGCALLS = "blockOutgoingCalls",
    NONE = "none"
}
export interface TelephonyOvhPabx {
    serviceType: TelephonyTypeServiceEnum;
    description: string;
    serviceName: string;
    featureType: TelephonyTypeEnum;
    isCCS: boolean;
}
export interface TelephonyOvhPabxCustomStatus {
    color?: string;
    name: string;
    description?: string;
    id: number;
}
export interface TelephonyOvhPabxDialplan {
    lastUpdate: string;
    dialplanId: number;
    name: string;
    anonymousRejection: boolean;
    transferTimeout: number;
    showCallerNumber: TelephonyOvhPabxDialplanNumberPresentationEnum;
}
export interface TelephonyOvhPabxDialplanExtension {
    extensionId: number;
    position: number;
    enabled: boolean;
    schedulerCategory?: TelephonySchedulerCategoryEnum;
    screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum;
}
export interface TelephonyOvhPabxDialplanExtensionConditionScreenList {
    screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum;
    callerIdNumber?: string;
    destinationNumber?: string;
    conditionId: number;
}
export declare enum TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum {
    DESTINATIONBLACKLIST = "destinationBlackList",
    DESTINATIONWHITELIST = "destinationWhiteList",
    INCOMINGBLACKLIST = "incomingBlackList",
    INCOMINGWHITELIST = "incomingWhiteList"
}
export interface TelephonyOvhPabxDialplanExtensionConditionTime {
    timeTo: any;
    timeFrom: any;
    weekDay: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum;
    conditionId: number;
}
export declare enum TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum {
    FRIDAY = "friday",
    MONDAY = "monday",
    SATURDAY = "saturday",
    SUNDAY = "sunday",
    THURSDAY = "thursday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday"
}
export interface TelephonyOvhPabxDialplanExtensionRule {
    ruleId: number;
    action: TelephonyOvhPabxDialplanExtensionRuleActionEnum;
    actionParam?: string;
    position: number;
    negativeAction: boolean;
}
export declare enum TelephonyOvhPabxDialplanExtensionRuleActionEnum {
    BRIDGE = "bridge",
    ENDLESS_PLAYBACK = "endless_playback",
    HANGUP = "hangup",
    HUNTING = "hunting",
    IVR = "ivr",
    PLAYBACK = "playback",
    READDTMF = "readDtmf",
    SETCALLERNAME = "setCallerName",
    SLEEP = "sleep",
    TTS = "tts",
    VOICEMAIL = "voicemail"
}
export declare enum TelephonyOvhPabxDialplanNumberPresentationEnum {
    ALIAS = "alias",
    BOTH = "both",
    CALLER = "caller"
}
export interface TelephonyOvhPabxHunting {
    statusIvrEnabled: boolean;
    name: string;
    crmUrlTemplate?: string;
    g729?: boolean;
}
export interface TelephonyOvhPabxHuntingAgent {
    wrapUpTime: number;
    number: any;
    status: TelephonyOvhPabxHuntingAgentStatusEnum;
    breakStatus?: number;
    agentId: number;
    simultaneousLines: number;
    description?: string;
    timeout: number;
    type: TelephonyOvhPabxHuntingAgentTypeEnum;
}
export interface TelephonyOvhPabxHuntingAgentLiveStatus {
    answeredCalls: number;
    status: TelephonyOvhPabxHuntingLiveAgentStatusEnum;
    totalCallDuration: number;
    lastStatusChange: string;
}
export interface TelephonyOvhPabxHuntingAgentQueue {
    position: number;
    queueId: number;
    agentId: number;
}
export declare enum TelephonyOvhPabxHuntingAgentStatusEnum {
    AVAILABLE = "available",
    LOGGEDOUT = "loggedOut",
    ONBREAK = "onBreak"
}
export declare enum TelephonyOvhPabxHuntingAgentTypeEnum {
    EXTERNAL = "external",
    INTERNAL = "internal"
}
export declare enum TelephonyOvhPabxHuntingLiveAgentStatusEnum {
    INAQUEUECALL = "inAQueueCall",
    LOGGEDOUT = "loggedOut",
    ONBREAK = "onBreak",
    RECEIVING = "receiving",
    WAITING = "waiting"
}
export declare enum TelephonyOvhPabxHuntingLiveCallsStateEnum {
    ANSWERED = "Answered",
    WAITING = "Waiting"
}
export interface TelephonyOvhPabxHuntingQueue {
    recordDisablingDigit?: TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum;
    actionOnClosure?: TelephonyOvhPabxQueueActionEnum;
    maxMember: number;
    soundOnHold?: number;
    actionOnOverflow?: TelephonyOvhPabxQueueActionEnum;
    actionOnOverflowParam?: string;
    description?: string;
    queueId: number;
    actionOnClosureParam?: string;
    record?: boolean;
    followCallForwards?: boolean;
    maxWaitTime: number;
    strategy: TelephonyOvhPabxHuntingQueueStrategyEnum;
    askForRecordDisabling?: boolean;
    recordDisablingLanguage?: TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum;
}
export interface TelephonyOvhPabxHuntingQueueLiveCalls {
    answered?: string;
    state: TelephonyOvhPabxHuntingLiveCallsStateEnum;
    id: number;
    callerIdName: string;
    onHold?: boolean;
    end?: string;
    agent: string;
    destinationNumber: string;
    queue: string;
    begin: string;
    callerIdNumber: string;
}
export interface TelephonyOvhPabxHuntingQueueLiveStatistics {
    callsAnswered: number;
    lastReset: string;
    callsLost: number;
    callsTotal: number;
    totalWaitingDuration: number;
    totalCallDuration: number;
}
export declare type TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export declare enum TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum {
    ENGLISH = "english",
    FRENCH = "french"
}
export declare enum TelephonyOvhPabxHuntingQueueStrategyEnum {
    CUMULATIONBYAGENTORDER = "cumulationByAgentOrder",
    LONGESTHANGUPAGENT = "longestHangupAgent",
    LONGESTIDLEAGENT = "longestIdleAgent",
    RANDOM = "random",
    RINGALL = "ringAll",
    ROUNDROBIN = "roundRobin",
    SEQUENTIALLYBYAGENTORDER = "sequentiallyByAgentOrder"
}
export declare enum TelephonyOvhPabxIvrMenuEntryActionEnum {
    BRIDGE = "bridge",
    CALLCENTER = "callcenter",
    MENUBACK = "menuBack",
    MENUEXIT = "menuExit",
    MENUSUB = "menuSub",
    MENUTOP = "menuTop",
    PLAYBACK = "playback",
    READDTMF = "readDtmf",
    SETCALLERNAME = "setCallerName"
}
export interface TelephonyOvhPabxMenu {
    greetSoundTts?: number;
    menuId: number;
    name: string;
    greetSound?: number;
    invalidSound?: number;
    invalidSoundTts?: number;
}
export interface TelephonyOvhPabxMenuEntry {
    actionParam: string;
    position: number;
    action: TelephonyOvhPabxIvrMenuEntryActionEnum;
    entryId: number;
    dtmf: string;
}
export declare enum TelephonyOvhPabxQueueActionEnum {
    PLAYBACK = "playback",
    VOICEMAIL = "voicemail"
}
export interface TelephonyOvhPabxRecord {
    fileUrl: string;
    callerIdNumber: string;
    callEnd?: string;
    duration: number;
    callStart: string;
    agent?: string;
    destinationNumber?: string;
    id: number;
    callerIdName: string;
}
export interface TelephonyOvhPabxSound {
    name: string;
    soundId: number;
}
export interface TelephonyOvhPabxTts {
    text: string;
    voice: TelephonyOvhPabxTtsVoiceEnum;
    id: number;
}
export declare enum TelephonyOvhPabxTtsVoiceEnum {
    BRUCE = "Bruce",
    HELENE = "Helene",
    JENNY = "Jenny",
    LOIC = "Loic"
}
export declare enum TelephonyOvhPabxWhisperingModeEnum {
    WHISPER_TO_AGENT_ONLY = "Whisper to agent only",
    WHISPER_TO_ALL_PARTICIPANTS = "Whisper to all participants"
}
export interface TelephonyPcsFile {
    status: TelephonyPcsFileStatusEnum;
    urlExpirationDatetime: string;
    filename: string;
    url: string;
}
export declare enum TelephonyPcsFileStatusEnum {
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export interface TelephonyPhone {
    maxline: number;
    brand: string;
    mgcpIpRestriction?: string;
    userPassword?: string;
    description: string;
    protocol: TelephonyProtocolEnum;
    phoneConfiguration: TelephonyPhoneConfigurationProperty[];
    macAddress: string;
}
export interface TelephonyPhonebook {
    phoneKey: string;
    bookKey: string;
    name: string;
    isReadonly: boolean;
}
export interface TelephonyPhonebookContact {
    homePhone?: any;
    workMobile?: any;
    group: string;
    id: number;
    workPhone?: any;
    name: string;
    surname: string;
    homeMobile?: any;
}
export interface TelephonyPhonebookMaster {
    bookKey: string;
    name: string;
}
export declare enum TelephonyPhoneConfigurationLevelEnum {
    ADMIN = "admin",
    EXPERT = "expert"
}
export interface TelephonyPhoneConfigurationProperty {
    group?: string;
    rangeValue?: any;
    level?: TelephonyPhoneConfigurationLevelEnum;
    default?: string;
    name?: string;
    type?: TelephonyPhoneConfigurationTypeEnum;
    description?: string;
    value?: string;
    enum?: string[];
    maxlength?: number;
}
export declare enum TelephonyPhoneConfigurationTypeEnum {
    BOOLEAN = "boolean",
    ENUM = "enum",
    HIDDEN = "hidden",
    IPV4 = "ipv4",
    NUMERIC = "numeric",
    STRING = "string"
}
export interface TelephonyPhoneCredentials {
    password: string;
    login?: string;
}
export interface TelephonyPortability {
    id: number;
    creationDate: string;
    numbersList: string[];
    error: boolean;
    orderId: number;
    portabilityCountry: TelephonyPortabilityCountryEnum;
    errorCodes: string[];
    desiredExecutionDate?: string;
    billingAccount: string;
    lineToRedirectTo?: string;
    operator: string;
    customerInfos: TelephonyPortabilityCustomerInfos;
}
export declare enum TelephonyportabilitySpecialNumberCategoryEnum {
    ACCESS = "access",
    ADULTS = "adults",
    ANNOUNCED = "announced",
    BE_ADULTS = "be_adults",
    BE_CONTENT = "be_content",
    BE_GAMES = "be_games",
    BE_GENERAL = "be_general",
    BE_RELAXING = "be_relaxing",
    CONFERENCING = "conferencing",
    CONTENTSAUTO = "contentsAuto",
    CONTENTSMANUAL = "contentsManual",
    DIRECTORY = "directory",
    GAMES = "games",
    LINKING = "linking",
    M2M = "m2m",
    RELATIONSHIP = "relationship"
}
export declare enum TelephonyPortabilityCountryEnum {
    BELGIUM = "belgium",
    FRANCE = "france",
    SWITZERLAND = "switzerland"
}
export interface TelephonyPortabilityCustomerInfos {
    floor?: string;
    siret?: string;
    stair?: string;
    name: string;
    door?: string;
    zip: string;
    building?: string;
    streetNumber: string;
    streetName: string;
    city: string;
}
export interface TelephonyPortabilityDocument {
    putUrl?: string;
    name: string;
    getUrl: string;
    documentId: number;
    description?: string;
    size: number;
}
export interface TelephonyPortabilityFixErrorPossibleParameters {
    optionalParameters: string[];
    mandatoryParameters: string[];
}
export interface TelephonyPortabilityStep {
    description?: string;
    name: TelephonyPortabilityStepNameEnum;
    duration: TelephonyPortabilityStepDuration;
    infos?: TelephonyPortabilityStepInfos;
    doneDate?: string;
    status: TelephonyPortabilityStepStatusEnum;
}
export interface TelephonyPortabilityStepDuration {
    unit: TelephonyPortabilityStepDurationUnitEnum;
    quantity: number;
}
export declare enum TelephonyPortabilityStepDurationUnitEnum {
    NA = "NA",
    DAY = "day",
    HOUR = "hour",
    OPENDAY = "openday"
}
export interface TelephonyPortabilityStepInfos {
    reasonType?: string;
    lastProposedDate?: string;
    reason?: string;
}
export declare enum TelephonyPortabilityStepNameEnum {
    ACKNOWLEDGMENTRECEIVEDFROMOPERATOR = "acknowledgmentReceivedFromOperator",
    BELGIUMPORTABILITYREQUESTCREATED = "belgiumPortabilityRequestCreated",
    BELGIUMPORTABILITYREQUESTEXECUTIONACKED = "belgiumPortabilityRequestExecutionAcked",
    BELGIUMPORTABILITYREQUESTEXECUTIONASKED = "belgiumPortabilityRequestExecutionAsked",
    BELGIUMPORTABILITYREQUESTEXECUTIONCOMPLETED = "belgiumPortabilityRequestExecutionCompleted",
    BELGIUMPORTABILITYREQUESTVALIDATED = "belgiumPortabilityRequestValidated",
    BELGIUMPORTABILITYREQUESTWAITINGUNTILEXEC = "belgiumPortabilityRequestWaitingUntilExec",
    CUSTOMERFORMRECEIVED = "customerFormReceived",
    CUSTOMERFORMSENT = "customerFormSent",
    CUSTOMERFORMVALIDATED = "customerFormValidated",
    FINALREPORTRECEIVEDFROMOPERATOR = "finalReportReceivedFromOperator",
    INTERMEDIATEREPORTRECEIVEDFROMOPERATOR = "intermediateReportReceivedFromOperator",
    NUMBERACTIVATION = "numberActivation",
    REQUESTSENTTOOPERATOR = "requestSentToOperator",
    SDASEQUENCERECEIVEDFROMOPERATOR = "sDASequenceReceivedFromOperator"
}
export declare enum TelephonyPortabilityStepStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    HOLD = "hold",
    TODO = "todo"
}
export interface TelephonyPreviousVoiceConsumption {
    destinationType: TelephonyVoiceConsumptionDestinationTypeEnum;
    planType: TelephonyVoiceConsumptionPlanTypeEnum;
    hangupNature?: string;
    duration: number;
    designation: string;
    called?: any;
    consumptionId: number;
    calling?: any;
    priceWithoutTax: OrderPrice;
    wayType: TelephonyVoiceConsumptionWayTypeEnum;
    creationDatetime: string;
    countrySuffix: string;
}
export declare enum TelephonyPropertyEnum {
    XDSL = "xdsl"
}
export declare enum TelephonyProtocolEnum {
    MGCP = "mgcp",
    SIP = "sip"
}
export interface TelephonyRateCodeInformation {
    pricePerCallWithoutTax: OrderPrice;
    pricePerMinuteWithoutTax: OrderPrice;
    code: string;
}
export declare enum TelephonyRealtimeEventDirection {
    INCOMING = "incoming",
    OUTGOING = "outgoing"
}
export declare enum TelephonyRealtimeEventProtocol {
    MGCP = "mgcp",
    SIP = "sip"
}
export declare enum TelephonyRealtimeEventType {
    END_CALLING = "end_calling",
    END_HOLD = "end_hold",
    END_RINGING = "end_ringing",
    START_CALLING = "start_calling",
    START_HOLD = "start_hold",
    START_RINGING = "start_ringing"
}
export interface TelephonyRedirect {
    destination?: any;
    featureType: TelephonyTypeEnum;
    serviceType: TelephonyTypeServiceEnum;
    description: string;
    serviceName: string;
}
export interface TelephonyRegistrationInformations {
    localPort?: number;
    port?: number;
    domain?: string;
    ip: string;
    localIp?: string;
    datetime: string;
    userAgent?: string;
}
export declare enum TelephonyReleaseLocationEnum {
    BACKWARD = "backward",
    FORWARD = "forward",
    LOCAL = "local"
}
export interface TelephonyRepaymentConsumption {
    creationDatetime?: string;
    repayable?: boolean;
    calling?: any;
    consumptionId: number;
    dialed?: any;
    called?: any;
    operator?: string;
    price?: any;
    duration?: number;
}
export interface TelephonyResetPhoneCodeInfo {
    keyBook?: string;
    activationCode?: string;
    serverURL?: string;
}
export interface TelephonyResetPhoneInfo {
    resetCodeInfo?: TelephonyResetPhoneCodeInfo;
    resetPhoneMethod: TelephonyResetPhoneMethodEnum;
}
export declare enum TelephonyResetPhoneMethodEnum {
    CODE = "code",
    HTTP = "http"
}
export interface TelephonyRma {
    creationDatetime: string;
    offerTypeOld: TelephonyRmaOfferTypeEnum;
    receptionDatetime?: string;
    id: string;
    shippingContact: TelephonyContact;
    process: TelephonyRmaReplaceTypeEnum;
    type: TelephonyRmaTypeEnum;
    status: TelephonyRmaStatusEnum;
    terminationDatetime?: string;
    equipmentReference: string;
    offerTypeNew?: TelephonyRmaOfferTypeEnum;
    newMerchandise?: string;
    steps: TelephonyRmaStep[];
    cancellable: boolean;
}
export declare enum TelephonyRmaOfferTypeEnum {
    DEPOSIT = "deposit",
    LOAN = "loan",
    PURCHASE = "purchase"
}
export declare enum TelephonyRmaPublicTypeEnum {
    CHANGE_TO_ANOTHER_PHONE_EQUIPMENT_RESTITUTION_FIRST_AND_SHIPPING_THEN = "change to another phone/equipment (restitution first and shipping then)",
    RESTITUTION_BUT_KEEP_THE_SERVICE_ENABLE = "restitution but keep the service enable"
}
export declare enum TelephonyRmaReplaceTypeEnum {
    CHANGEPHONE = "changePhone",
    PHONERESTITUTION = "phoneRestitution",
    UNDEFINED = "undefined"
}
export interface TelephonyRmaReturn {
    id: string;
}
export declare enum TelephonyRmaStatusEnum {
    CLOSED = "closed",
    OPEN = "open",
    RECEIVED = "received"
}
export interface TelephonyRmaStep {
    description: string;
    name: TelephonyRmaStepNameEnum;
    infos?: string;
    doneDate?: string;
    status: TelephonyRmaStepStatusEnum;
}
export declare enum TelephonyRmaStepNameEnum {
    DISPATCHJUSTIFICATION = "dispatchJustification",
    EQUIPMENTSENDING = "equipmentSending",
    EQUIPMENTTESTING = "equipmentTesting",
    OPENING = "opening",
    PARCELRECEPTION = "parcelReception",
    PARCELVALIDATION = "parcelValidation",
    VALIDATION = "validation"
}
export declare enum TelephonyRmaStepStatusEnum {
    DONE = "done",
    TODO = "todo"
}
export declare enum TelephonyRmaTypeEnum {
    AFTER_SALE_EQUIPMENT_SERVICE_EXCHANGE = "after sale equipment service exchange",
    AFTER_SALE_PHONE_SERVICE_EXCHANGE = "after sale phone service exchange",
    EQUIPMENT_RESTITUTION = "equipment restitution",
    FAST_EXCHANGE = "fast exchange",
    OLD_MERCHANDISE_RECEPTION_BEFORE_EXCHANGE = "old merchandise reception before exchange",
    PHONE_RESTITUTION = "phone restitution",
    RESENDS_DUE_TO_SHIPPING_LOST_BY_THE_CARRIER = "resends due to shipping lost by the carrier",
    RESENDS_DUE_TO_SHIPPING_NOT_WITHDRAW = "resends due to shipping not withdraw",
    SPECIFIC_RETURN_MERCHANDISE_AUTHORISATION = "specific return merchandise authorisation",
    TERMINATION = "termination",
    UNKNOWN = "unknown"
}
export interface TelephonyRsva {
    serviceName: string;
    typology?: TelephonyportabilitySpecialNumberCategoryEnum;
}
export interface TelephonyScheduler {
    timeZone: TelephonytimeZone;
    serviceName: string;
}
export declare enum TelephonySchedulerCategoryEnum {
    HOLIDAYS = "holidays",
    SCHEDULER1 = "scheduler1",
    SCHEDULER2 = "scheduler2",
    SCHEDULER3 = "scheduler3"
}
export interface TelephonySchedulerEvent {
    dateEnd: string;
    description?: string;
    categories: TelephonySchedulerCategoryEnum;
    uid: string;
    title: string;
    dateStart: string;
}
export interface TelephonyScreen {
    serviceName: string;
    outgoingScreenList: TelephonyScreenListChoosingEnum;
    incomingScreenList: TelephonyScreenListChoosingEnum;
}
export interface TelephonyScreenList {
    nature: TelephonyScreenListNatureEnum;
    status: string;
    callNumber: string;
    id: number;
    type: TelephonyScreenListTypeEnum;
}
export declare enum TelephonyScreenListChoosingEnum {
    BLACKLIST = "blacklist",
    DISABLED = "disabled",
    WHITELIST = "whitelist"
}
export declare enum TelephonyScreenListNatureEnum {
    FAX = "fax",
    INTERNATIONAL = "international",
    SERVICES = "services",
    SPECIAL = "special",
    VOICEMAIL = "voicemail"
}
export declare enum TelephonyScreenListTypeEnum {
    INCOMINGBLACKLIST = "incomingBlackList",
    INCOMINGWHITELIST = "incomingWhiteList",
    OUTGOINGBLACKLIST = "outgoingBlackList",
    OUTGOINGWHITELIST = "outgoingWhiteList"
}
export declare enum TelephonyServiceVoicemailAudioFormatEnum {
    AIFF = "aiff",
    AU = "au",
    FLAC = "flac",
    MP3 = "mp3",
    OGG = "ogg",
    WAV = "wav"
}
export declare enum TelephonyServiceVoicemailMailOptionEnum {
    ATTACHMENT = "attachment",
    SIMPLE = "simple"
}
export interface TelephonyServiceVoicemailNotifications {
    email: string;
    type: TelephonyServiceVoicemailMailOptionEnum;
}
export interface TelephonySimultaneousChannelsDetails {
    current: number;
    maximum: number;
    extra: number;
    toBeDeleted: number;
    basic: number;
}
export declare enum TelephonySipDomainProductTypeEnum {
    SIP = "sip",
    TRUNK = "trunk"
}
export interface TelephonySound {
    id: number;
    description?: string;
    creationDate: string;
    putUrl?: string;
    getUrl: string;
    size: number;
    filename: string;
}
export interface TelephonySpecificNumber {
    isPremium: boolean;
    number: any;
}
export declare enum TelephonyStatisticsTimeframeEnum {
    DAILY = "daily",
    HOURLY = "hourly",
    MONTHLY = "monthly",
    WEEKLY = "weekly",
    YEARLY = "yearly"
}
export interface TelephonyTask {
    taskId: number;
    serviceType: string;
    message?: string;
    objectCreated?: string;
    action: string;
    status: TelephonyTaskStatusEnum;
}
export declare enum TelephonyTaskStatusEnum {
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    PAUSE = "pause",
    TODO = "todo"
}
export interface TelephonyTelephonyGenericService {
    serviceName: string;
}
export interface TelephonyTelephonySearchService {
    billingAccount?: string;
    domain: string;
    type: TelephonyTelephonySearchServiceTypeEnum;
}
export declare enum TelephonyTelephonySearchServiceTypeEnum {
    ALIAS = "alias",
    LINE = "line"
}
export interface TelephonyTelephonyService {
    featureType: TelephonyTypeEnum;
    currentOutplan: OrderPrice;
    offers: string[];
    rio: string;
    hasFaxCapabilities: boolean;
    country: TelephonyNumberCountryEnum;
    properties: TelephonyPropertyEnum[];
    serviceType: TelephonyTypeServiceEnum;
    countryCode: TelephonyNumberCountryCodeEnum;
    simultaneousLines: number;
    serviceName: string;
    getPublicOffer: TelephonyLineOffer;
    description: string;
}
export interface TelephonyTemporaryLogsLink {
    expirationDate: string;
    url: string;
}
export declare enum TelephonyTerminationReasonEnum {
    ADDRESSEMOVE = "addresseMove",
    BILLINGDIFFICULTIES = "billingDifficulties",
    CESSATIONOFACTIVITY = "cessationOfActivity",
    MISSINGOPTIONS = "missingOptions",
    MOVETOCOMPETITOR = "moveToCompetitor",
    OTHER = "other",
    PLUGANDPHONEDIFFICULTIES = "plugAndPhoneDifficulties",
    TECHNICALDIFFICULTIES = "technicalDifficulties"
}
export interface TelephonyTimeCondition {
    day: TelephonyTimeConditionsDayEnum;
    id: number;
    hourEnd: string;
    status: string;
    hourBegin: string;
    policy: TelephonyTimeConditionsPolicyEnum;
}
export interface TelephonyTimeConditionOptions {
    slot1Number: string;
    slot2Type: TelephonyTimeConditionsSlotTypeEnum;
    timeout?: TelephonyTimeConditionsTimeoutEnum;
    slot1Type: TelephonyTimeConditionsSlotTypeEnum;
    status: TelephonyTimeConditionsGlobalStatusEnum;
    unavailableNumber: string;
    slot3Type: TelephonyTimeConditionsSlotTypeEnum;
    unavailableType: TelephonyTimeConditionsSlotTypeEnum;
    slot2Number: string;
    slot3Number: string;
}
export declare enum TelephonyTimeConditionsDayEnum {
    FRIDAY = "friday",
    HOLIDAY = "holiday",
    MONDAY = "monday",
    SATURDAY = "saturday",
    SUNDAY = "sunday",
    THURSDAY = "thursday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday"
}
export declare enum TelephonyTimeConditionsGlobalStatusEnum {
    DELETED = "deleted",
    DISABLED = "disabled",
    ENABLED = "enabled"
}
export declare enum TelephonyTimeConditionsPolicyEnum {
    AVAILABLE = "available",
    SLOT1 = "slot1",
    SLOT2 = "slot2",
    SLOT3 = "slot3"
}
export declare enum TelephonyTimeConditionsSettingsForwardTypeEnum {
    NUMBER = "number",
    VOICEMAIL = "voicemail"
}
export declare enum TelephonyTimeConditionsSlotTypeEnum {
    NUMBER = "number",
    VOICEMAIL = "voicemail"
}
export declare type TelephonyTimeConditionsTimeoutEnum = 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 5 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90;
export interface TelephonyTimestampAndValue {
    timestamp: number;
    value?: any;
}
export declare enum TelephonytimeZone {
    EUROPE_BERLIN = "Europe/Berlin",
    EUROPE_BRUSSELS = "Europe/Brussels",
    EUROPE_LONDON = "Europe/London",
    EUROPE_MADRID = "Europe/Madrid",
    EUROPE_PARIS = "Europe/Paris",
    EUROPE_ZURICH = "Europe/Zurich"
}
export declare type TelephonyTokenExpirationEnum = '1 day' | '1 hour' | '30 days' | '5 minutes' | 'unlimited';
export interface TelephonyTones {
    callWaiting: TelephonyTonesEnum;
    endCall: TelephonyTonesEnum;
    ringback: TelephonyTonesEnum;
    onHold: TelephonyTonesOnHoldEnum;
}
export declare enum TelephonyTonesEnum {
    CUSTOM_SOUND = "Custom sound",
    NONE = "None"
}
export declare enum TelephonyTonesOnHoldEnum {
    CUSTOM_SOUND = "Custom sound",
    NONE = "None",
    PREDEFINED_1 = "Predefined 1",
    PREDEFINED_2 = "Predefined 2"
}
export declare enum TelephonyTonesTypeEnum {
    CALLWAITING = "callWaiting",
    ENDCALL = "endCall",
    ONHOLD = "onHold",
    RINGBACK = "ringback"
}
export interface TelephonytrafficExtract {
    id: number;
    dateStart: string;
    dateEnd: string;
    fileSize: number;
    status: TelephonyTaskStatusEnum;
    fileUrl: string;
}
export interface TelephonyTrunk {
    serviceName: string;
    description: string;
    serviceType: TelephonyTypeServiceEnum;
}
export interface TelephonyTrunkExternalDisplayedNumber {
    validatedAt?: string;
    status: TelephonyTrunkExternalDisplayedNumberStatusEnum;
    number: any;
    createdAt: string;
}
export declare enum TelephonyTrunkExternalDisplayedNumberStatusEnum {
    ENABLED = "enabled",
    REFUSED = "refused",
    TODELETE = "toDelete",
    WAITINGVALIDATION = "waitingValidation"
}
export interface TelephonyTrunkExternalDisplayedNumberValidation {
    phoneCallTaskId: number;
    validationCode: string;
}
export interface TelephonyTrunkSimultaneousPack {
    unitPrice: OrderPrice;
    channels: number;
    quantity: number;
}
export interface TelephonyTrunkSimultaneousPacksRepartition {
    packsRepartition: TelephonyTrunkSimultaneousPack[];
    totalPrice: OrderPrice;
    optimizedChannelsQuantity: number;
}
export declare enum TelephonyTypeEnum {
    CLOUDHUNTING = "cloudHunting",
    CLOUDIVR = "cloudIvr",
    CONFERENCE = "conference",
    CONTACTCENTERSOLUTION = "contactCenterSolution",
    CONTACTCENTERSOLUTIONEXPERT = "contactCenterSolutionExpert",
    DDI = "ddi",
    EASYHUNTING = "easyHunting",
    EASYPABX = "easyPabx",
    EMPTY = "empty",
    FAX = "fax",
    FREEFAX = "freefax",
    MGCP = "mgcp",
    MINIPABX = "miniPabx",
    OLDCONFERENCE = "oldConference",
    PLUGANDFAX = "plugAndFax",
    REDIRECT = "redirect",
    SIP = "sip",
    SVI = "svi",
    VOICEFAX = "voicefax",
    VOICEMAIL = "voicemail",
    VXML = "vxml"
}
export declare enum TelephonyTypeServiceEnum {
    ALIAS = "alias",
    LINE = "line"
}
export interface TelephonyVoiceConsumption {
    dialed?: any;
    called?: any;
    designation: string;
    destinationType: TelephonyVoiceConsumptionDestinationTypeEnum;
    planType: TelephonyVoiceConsumptionPlanTypeEnum;
    duration: number;
    hangupNature?: string;
    creationDatetime: string;
    wayType: TelephonyVoiceConsumptionWayTypeEnum;
    priceWithoutTax: OrderPrice;
    countrySuffix: string;
    calling?: any;
    consumptionId: number;
}
export declare enum TelephonyVoiceConsumptionDestinationTypeEnum {
    LANDLINE = "landline",
    MOBILE = "mobile",
    SPECIAL = "special"
}
export declare enum TelephonyVoiceConsumptionPlanTypeEnum {
    OUTPLAN = "outplan",
    PRICEPLAN = "priceplan"
}
export declare enum TelephonyVoiceConsumptionWayTypeEnum {
    INCOMING = "incoming",
    OUTGOING = "outgoing",
    TRANSFER = "transfer"
}
export declare enum TelephonyVoicefaxRoutingEnum {
    FAX = "fax",
    VOICEMAIL = "voicemail"
}
export interface TelephonyVoicemail {
    description: string;
    serviceType: TelephonyTypeServiceEnum;
    serviceName: string;
    offers: string[];
}
export declare enum TelephonyVoicemailGreetingEnum {
    DEFAULT = "default",
    FULL = "full",
    SHORT = "short"
}
export interface TelephonyVoicemailGreetings {
    id: number;
    dir: TelephonyVoicemailMessageFolderGreetingEnum;
    callee: any;
}
export declare enum TelephonyVoicemailMessageFolderDirectoryEnum {
    FAMILY = "family",
    FRIENDS = "friends",
    INBOX = "inbox",
    OLD = "old",
    URGENT = "urgent",
    WORK = "work"
}
export declare enum TelephonyVoicemailMessageFolderGreetingEnum {
    BUSY = "busy",
    GREET = "greet",
    TEMP = "temp",
    UNAVAIL = "unavail"
}
export interface TelephonyVoicemailMessages {
    duration: number;
    callee: any;
    id: number;
    dir: TelephonyVoicemailMessageFolderDirectoryEnum;
    caller: any;
    creationDatetime: string;
}
export interface TelephonyVoicemailNumbers {
    external: string;
    internal: string;
}
export interface TelephonyVoicemailProperties {
    annouceMessage: string;
    keepMessage: boolean;
    temporaryGreetingSoundId?: number;
    temporaryGreetingActivated: boolean;
    redirectionEmails: TelephonyServiceVoicemailNotifications[];
    fromEmail: string;
    isNewVersion: boolean;
    fromName: string;
    unreadMessages: number;
    forcePassword: boolean;
    audioFormat: TelephonyServiceVoicemailAudioFormatEnum;
    greetingType: TelephonyVoicemailGreetingEnum;
    shortGreetingSoundId?: number;
    fullGreetingSoundId?: number;
    doNotRecord: boolean;
}
export interface TelephonyVxml {
    offers: string[];
    serviceType: TelephonyTypeServiceEnum;
    description: string;
    serviceName: string;
}
export interface TelephonyVxmlProperties {
    urlRecord: string;
    url: string;
}
export declare class Telephony {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(billingAccount: string): Promise<TelephonyBillingAccount>;
    AlterThisObjectProperties(billingAccount: string, payload: TelephonyBillingAccount): Promise<void>;
    AskForABillingAccountTermination(billingAccount: string, reason: TelephonyTerminationReasonEnum, details?: string): Promise<void>;
    AbbreviatedNumbersForTheBillingAccount(billingAccount: string): Promise<number[]>;
    CreateANewAbbreviatedNumberForTheBillingAccount(abbreviatedNumber: number, billingAccount: string, destinationNumber: any, name: string, surname: string): Promise<TelephonyAbbreviatedNumberGroup>;
    DeleteTheGivenAbbreviatedNumber(abbreviatedNumber: number, billingAccount: string): Promise<void>;
    GetTheAllowedCreditThresholdForThisBillingAccount(billingAccount: string): Promise<OrderPrice[]>;
    GiveAllAmountsAvailablesForYourBillingAccount(billingAccount: string): Promise<OrderPrice[]>;
    CurrentBillingAccountSiteBillingAccountFeaturesAreOverwrittenByTheSite(billingAccount: string): Promise<string>;
    UsedToOverwriteCurrentBillingAccountFeatureByTheBillingAccountSite(billingAccount: string, billingAccountSite: string): Promise<void>;
    CancelTheBillingAccountTermination(billingAccount: string): Promise<void>;
    CheckIfSecurityDepositTransferIsPossibleBetweenTwoBillingAccounts(billingAccount: string, billingAccountDestination: string): Promise<boolean>;
    CarrierSIPTrunksAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    ListOfYourRemoteSipEndpointsIpsPortsProtocolOfYourCarrierSipTrunkService(billingAccount: string, serviceName: string): Promise<number[]>;
    LaunchAContactChangeProcedure(billingAccount: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    ConferencesAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    ChangeTheSoundPlayedAtTheBeginningOfTheConference(billingAccount: string, documentId: string, serviceName: string): Promise<TelephonyTask>;
    ListYourPastConferencesForThisNumber(billingAccount: string, serviceName: string): Promise<number[]>;
    GetRealtimeConferenceInformations(billingAccount: string, serviceName: string): Promise<TelephonyConferenceInformations>;
    LockTheConferenceRoom(billingAccount: string, serviceName: string): Promise<TelephonyTask>;
    CurrentParticipantsOfTheAssociateConference(billingAccount: string, serviceName: string): Promise<number[]>;
    MakeAParticipantDeafInYourConferenceRoom(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask>;
    ChangeAParticipantLevelOfAudioTransmission(billingAccount: string, id: number, serviceName: string, value: number): Promise<TelephonyTask>;
    EjectAParticipantFromYourConferenceRoom(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask>;
    MuteAParticipantInYourConferenceRoom(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask>;
    MakeAParticipantUndeafYourConferenceRoom(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask>;
    UnmuteAParticipantInYourConferenceRoom(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask>;
    ListYourConferenceWebAccess(billingAccount: string, serviceName: string): Promise<number[]>;
    AddAPublicWebAccessToYourConference(billingAccount: string, serviceName: string, type: TelephonyConferenceWebAccessTypeEnum): Promise<TelephonyConferenceWebAccess>;
    DeleteAPublicWebAccessToYourConference(billingAccount: string, id: number, serviceName: string): Promise<void>;
    DDIsDirectDialinAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    ChangeTheDestinationOfTheDDI(billingAccount: string, destination: any, serviceName: string): Promise<TelephonyTask>;
    OVHEasyCallsQueuesAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    CallsAgents(billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewAgent(billingAccount: string, number: any, serviceName: string, simultaneousLines: number, status: TelephonyOvhPabxHuntingAgentStatusEnum, timeout: number, wrapUpTime: number, description?: string): Promise<TelephonyOvhPabxHuntingAgent>;
    DeleteTheGivenAgent(agentId: number, billingAccount: string, serviceName: string): Promise<void>;
    CreateANewWebAccessForThisRessource(agentId: number, billingAccount: string, serviceName: string): Promise<TelephonyBannerAccess>;
    DeleteTheGivenWebAccess(agentId: number, billingAccount: string, serviceName: string): Promise<void>;
    CurrentCallsOfTheCallcenterAgent(agentId: number, billingAccount: string, serviceName: string): Promise<number[]>;
    EavesdropOnACall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask>;
    HangupACall(agentId: number, billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask>;
    ToogleHoldOnCall(agentId: number, billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask>;
    InterceptANonAnsweredCall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask>;
    TransferAnAnsweredCall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask>;
    WhisperOnACall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string, whisperingMode: TelephonyOvhPabxWhisperingModeEnum): Promise<TelephonyTask>;
    CreateANewToken(agentId: number, billingAccount: string, expiration: TelephonyTokenExpirationEnum, serviceName: string): Promise<string>;
    DeleteTheGivenToken(agentId: number, billingAccount: string, serviceName: string): Promise<void>;
    AgentAssignedToTheQueues(agentId: number, billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewSkillForAnAgentItAddsTheAgentInAQueue(agentId: number, billingAccount: string, position: number, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentQueue>;
    DeleteTheGivenSkill(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<void>;
    CustomStatusesOfYourAgents(billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewCustomStatus(billingAccount: string, name: string, serviceName: string, color?: string, description?: string): Promise<TelephonyOvhPabxCustomStatus>;
    DeleteTheGivenCustomStatus(billingAccount: string, id: number, serviceName: string): Promise<void>;
    CallsQueues(billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewQueue(billingAccount: string, serviceName: string, strategy: TelephonyOvhPabxHuntingQueueStrategyEnum, actionOnClosure?: TelephonyOvhPabxQueueActionEnum, actionOnClosureParam?: string, actionOnOverflow?: TelephonyOvhPabxQueueActionEnum, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum, recordDisablingLanguage?: TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum, soundOnHold?: number): Promise<TelephonyOvhPabxHuntingQueue>;
    DeleteTheGivenQueue(billingAccount: string, queueId: number, serviceName: string): Promise<void>;
    AgentAssignedToTheQueue(billingAccount: string, queueId: number, serviceName: string): Promise<number[]>;
    LiveCallsOfTheQueue(billingAccount: string, queueId: number, serviceName: string): Promise<number[]>;
    RecordsAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]>;
    DeleteTheGivenRecord(billingAccount: string, id: number, serviceName: string): Promise<void>;
    ScreenListsConditionsCheckedWhenACallIsReceived(billingAccount: string, serviceName: string, screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum): Promise<number[]>;
    CreateANewScreenlistConditionForAnExtension(billingAccount: string, screenListType: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum, serviceName: string, callerIdNumber?: string, destinationNumber?: string): Promise<TelephonyEasyHuntingScreenListsConditions>;
    DeleteTheGivenCondition(billingAccount: string, conditionId: number, serviceName: string): Promise<void>;
    SoundsAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]>;
    DeleteTheGivenSound(billingAccount: string, serviceName: string, soundId: number): Promise<void>;
    UploadNewSoundFile(billingAccount: string, serviceName: string, documentId?: string, name?: string, _url?: string): Promise<TelephonyTask>;
    TimeConditionsCheckedWhenACallIsReceived(billingAccount: string, serviceName: string, policy?: TelephonyTimeConditionsPolicyEnum): Promise<number[]>;
    CreateANewTimeCondition(billingAccount: string, policy: TelephonyTimeConditionsPolicyEnum, serviceName: string, timeFrom: any, timeTo: any, weekDay: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum): Promise<TelephonyEasyHuntingTimeConditions>;
    EasyPabxAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    HuntingAgents(billingAccount: string, serviceName: string): Promise<any>;
    DeleteTheAgent(agentNumber: any, billingAccount: string, serviceName: string): Promise<void>;
    UploadNewToneFile(billingAccount: string, serviceName: string, type: TelephonyTonesTypeEnum, documentId?: string, _url?: string): Promise<TelephonyTask>;
    FaxesAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    FaxCampaignsOfTheAssociateFax(billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewFaxCampaign(billingAccount: string, documentId: string, name: string, recipientsType: TelephonyFaxCampaignRecipientsTypeEnum, sendType: TelephonyFaxCampaignSendTypeEnum, serviceName: string, faxQuality?: TelephonyFaxQualityEnum, recipientsDocId?: string, recipientsList?: any, sendDate?: string): Promise<TelephonyFaxCampaign>;
    DeleteAFaxCampaign(billingAccount: string, id: number, serviceName: string): Promise<void>;
    DetailOfTheFaxRecipientsByStatus(billingAccount: string, id: number, serviceName: string): Promise<TelephonyFaxCampaignDetail>;
    StartAFaxCampaign(billingAccount: string, id: number, serviceName: string): Promise<void>;
    StopAFaxCampaign(billingAccount: string, id: number, serviceName: string): Promise<void>;
    CreateANewFaxScreenLists(billingAccount: string, serviceName: string, blacklistedNumbers?: string[], blacklistedTSI?: string[], filteringList?: TelephonyFaxScreenListTypeEnum, whitelistedNumbers?: string[], whitelistedTSI?: string[]): Promise<TelephonyFaxScreen>;
    DeleteAllFaxScreenLists(billingAccount: string, serviceName: string): Promise<void>;
    ResetASpecificalFaxScreenList(billingAccount: string, serviceName: string, blacklistedNumbers?: boolean, blacklistedTSI?: boolean, whitelistedNumbers?: boolean, whitelistedTSI?: boolean): Promise<void>;
    GeneratesANewPasswordForYourFaxAccount(billingAccount: string, serviceName: string, password?: string): Promise<string>;
    SendAFax(billingAccount: string, pdfUrl: string, recipients: any, serviceName: string, dateSchedule?: string): Promise<TelephonyTask>;
    PreviousBilledConsumptions(billingAccount: string): Promise<string[]>;
    PreviousBilledConsumptionFiles(billingAccount: string, date: string, extension: TelephonyBillDocument): Promise<TelephonyPcsFile>;
    PreviousRepaymentBill(billingAccount: string): Promise<string[]>;
    AskForANewRepayment(billingAccount: string, billingNumber?: string): Promise<TelephonyHistoryRepaymentConsumption>;
    GetTheCsvDocument(billingAccount: string, date: string): Promise<TelephonyPcsFile>;
    PreviousTollfreeBill(billingAccount: string): Promise<string[]>;
    LinesAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    AbbreviatedNumbersForTheLine(billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewAbbreviatedNumberForTheLine(abbreviatedNumber: number, billingAccount: string, destinationNumber: any, name: string, serviceName: string, surname: string): Promise<TelephonyAbbreviatedNumber>;
    AllowToActivateNewPhoneInCaseOfPhoneSwitch(billingAccount: string, serviceName: string): Promise<void>;
    CheckIfThereIsANewPhoneToActivateAndIfItPossibleInCaseOfPhoneSwitch(billingAccount: string, serviceName: string): Promise<void>;
    CleanTheAntihackOrAddItOnActiveFilterScreenList(action: TelephonyAntihackActionEnum, billingAccount: string, serviceName: string, restricted?: string): Promise<void>;
    CurrentListOfNumbersOrShortCodeNumbersRestrictedByAnAutoAntihack(billingAccount: string, serviceName: string): Promise<string[]>;
    AssociateADeviceToTheCurrentLineWithTheDeviceMacAddress(billingAccount: string, macAddress: string, serviceName: string, ipAddress?: string): Promise<void>;
    AutomaticCallsMadeByCallsGeneratorOnThisLine(billingAccount: string, serviceName: string): Promise<string[]>;
    MakeAnAutomaticPhoneCallReturnGeneratedCallIdentifier(billingAccount: string, calledNumber: any, dialplan: TelephonyCallsGeneratorDialplanEnum, isAnonymous: boolean, serviceName: string, bridgeNumberDialplan?: any, callingNumber?: any, playbackAudioFileDialplan?: string, timeout?: number, ttsTextDialplan?: string): Promise<string>;
    ListingOfDomainsSipAvailables(billingAccount: string, serviceName: string): Promise<string[]>;
    BlockTheLineByDefaultItWillBlockIncomingAndOutgoingCallsExceptForEmergencyNumbers(billingAccount: string, serviceName: string, mode?: TelephonyLineBlockingMode): Promise<void>;
    TheCurrentCallsOfYourLine(billingAccount: string, serviceName: string): Promise<number[]>;
    CancelAScheduledConversionToNumber(billingAccount: string, serviceName: string): Promise<void>;
    AbilityToManageSIPPasswordOnThisService(billingAccount: string, serviceName: string): Promise<boolean>;
    ChangeTheSIPAccountPasswordItMustBeMoreThan7AndLessThan21AlphaAndNumericalCharacters(billingAccount: string, serviceName: string, password?: string): Promise<void>;
    MakeAPhoneCallFromTheCurrentLine(billingAccount: string, calledNumber: string, serviceName: string, callingNumber?: string, intercom?: boolean): Promise<void>;
    UserWhichCanUseClick2CallOnTheLine(billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewUserForClick2Call(billingAccount: string, login: string, password: string, serviceName: string): Promise<number>;
    DeleteAClick2CallUser(billingAccount: string, id: number, serviceName: string): Promise<void>;
    ChangeThePasswordOfTheClick2callUser(billingAccount: string, id: number, password: string, serviceName: string): Promise<void>;
    ScheduleAConversionToNumber(billingAccount: string, serviceName: string): Promise<TelephonyOfferTask>;
    DissociateADeviceFromTheCurrentLineWithTheDeviceMacAddress(billingAccount: string, macAddress: string, serviceName: string, ipAddress?: string): Promise<void>;
    ListingOfLastIpsRegistry(billingAccount: string, serviceName: string): Promise<TelephonyDatetimeAndIpvalue[]>;
    ListTheInformationsAboutTheLastRegistrationsIeIPPortUserAgent(billingAccount: string, serviceName: string): Promise<TelephonyRegistrationInformations[]>;
    ListPhonesWithAvailableSlotsWhereThisLineCanBeAttached(billingAccount: string, serviceName: string): Promise<TelephonyLinePhoneAssociable[]>;
    GetTheMaximumAvailableSimultaneousLinesForThisLine(billingAccount: string, serviceName: string): Promise<number>;
    ReturnPublicOfferProperty(billingAccount: string, serviceName: string): Promise<TelephonyLineOffer>;
    ListOfCodecsCombinaisonsAvailableForThisLine(billingAccount: string, serviceName: string): Promise<string[]>;
    GetTheDefaultCodecsForThisLineIfNoneAreSet(billingAccount: string, serviceName: string): Promise<string>;
    ReturnsTheAdministrationUserAndPasswordOfThePhoneIfYouAreAVIP(billingAccount: string, serviceName: string): Promise<TelephonyPhoneCredentials>;
    EditConfigurationOfThePhoneRemotelyByProvisioning(billingAccount: string, serviceName: string, autoReboot?: boolean, newConfigurations?: any): Promise<void>;
    PlugAndPhoneFunctionKeys(billingAccount: string, serviceName: string): Promise<number[]>;
    ListTheAvailableFunctionsForTheKey(billingAccount: string, keyNum: number, serviceName: string): Promise<string[]>;
    ListOfAvailableExchangeMerchandiseBrand(billingAccount: string, serviceName: string): Promise<TelephonyHardwareOffer[]>;
    ReturnPhonebooksAssociated(billingAccount: string, serviceName: string): Promise<string[]>;
    AddAPhonebookReturnTheBookKey(billingAccount: string, name: string, serviceName: string): Promise<string>;
    DeleteAPhonebook(billingAccount: string, bookKey: string, serviceName: string): Promise<void>;
    ExportThePhonebookContacts(billingAccount: string, bookKey: string, format: TelephonyContactsExportFormatsEnum, serviceName: string): Promise<TelephonyPcsFile>;
    ImportAContactsFileSupportedFormatsAreExcelXlsAndXlsxAndCSV(billingAccount: string, bookKey: string, documentId: string, serviceName: string): Promise<TelephonyTask>;
    PhonebookContacts(billingAccount: string, bookKey: string, serviceName: string): Promise<number[]>;
    CreateAPhonebookContactReturnIdentifierOfThePhonebookContact(billingAccount: string, bookKey: string, group: string, name: string, serviceName: string, surname: string, homeMobile?: any, homePhone?: any, workMobile?: any, workPhone?: any): Promise<number>;
    DeleteAPhonebookContact(billingAccount: string, bookKey: string, id: number, serviceName: string): Promise<void>;
    CreateATaskToRebootThePhone(billingAccount: string, serviceName: string): Promise<TelephonyTask>;
    CreateATaskToRefreshTheScreenOfTheMGCPPhone(billingAccount: string, serviceName: string): Promise<TelephonyTask>;
    ReinitializeThePhoneConfiguration(billingAccount: string, ip: string, serviceName: string): Promise<TelephonyResetPhoneInfo>;
    ReturnMerchandiseAuthorisationAssociated(billingAccount: string, serviceName: string): Promise<string[]>;
    CreateASpecificRma(billingAccount: string, serviceName: string, type: TelephonyRmaPublicTypeEnum, mondialRelayId?: string, newMerchandise?: string, shippingContactId?: number): Promise<TelephonyRmaReturn>;
    CancelTheRma(billingAccount: string, id: string, serviceName: string): Promise<void>;
    DoesThePhoneManagesPhonebooks?(billingAccount: string, serviceName: string): Promise<boolean>;
    ListThePhonesWithSipSlotAvailable(billingAccount: string, serviceName: string): Promise<TelephonyLinePhone[]>;
    TheRecordingsOfYourLineOutgoingCalls(billingAccount: string, serviceName: string): Promise<number[]>;
    RemoveExtraSimultaneousLines(billingAccount: string, quantityRemove: number, serviceName: string): Promise<void>;
    DetailsAboutSimultaneousChannelsOfThisLine(billingAccount: string, serviceName: string): Promise<TelephonySimultaneousChannelsDetails>;
    GetStatisticsOfTheCurrentLine(billingAccount: string, serviceName: string, timeframe: TelephonyStatisticsTimeframeEnum, type: TelephonyLineStatisticsTypeEnum): Promise<any>;
    TheTrafficExtractsSIPOnlyOfYourLine(billingAccount: string, serviceName: string): Promise<number[]>;
    LaunchATrafficExtractOnYourLine(billingAccount: string, dateEnd: string, dateStart: string, serviceName: string): Promise<TelephonytrafficExtract>;
    DeleteATrafficExtract(billingAccount: string, id: number, serviceName: string): Promise<void>;
    UnblockTheLineItWillRemoveAnyIncomingAndOutboingBlockMadeEarlier(billingAccount: string, serviceName: string): Promise<void>;
    MiniabxAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    AdditionalNumbersAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    CancelAScheduledConversionToLine(billingAccount: string, serviceName: string): Promise<void>;
    ChangeTheFeatureTypeOfThePhoneNumber(billingAccount: string, featureType: TelephonyTypeEnum, serviceName: string): Promise<TelephonyTask>;
    ScheduleAConversionToLine(billingAccount: string, offer: string, serviceName: string): Promise<TelephonyOfferTask>;
    GetTheAvailableLineOffersToScheduleAConversionToLine(billingAccount: string, serviceName: string): Promise<TelephonyLineOffersAndContracts>;
    OperationsOnATelephonyServiceOffer(billingAccount: string, action?: TelephonyOfferTaskActionEnum, status?: TelephonyTaskStatusEnum, type?: TelephonyOfferTaskTypeEnum): Promise<number[]>;
    ListOldPhonesArchivedAsTheyWereNotReturnedAfterAnRMA(billingAccount: string): Promise<TelephonyOldPhone[]>;
    OutplanNotificationsConfiguredForThisBillingAccount(billingAccount: string): Promise<number[]>;
    AddAnOutplanNotificationOnTheBillingAccount(billingAccount: string, block: TelephonyOutplanNotificationBlockEnum, percentage: any, notifyEmail?: string): Promise<TelephonyConsumptionThreshold>;
    DeleteAnOutplanNotification(billingAccount: string, id: number): Promise<void>;
    OVHCallsQueuesAndOVHIVRsInteractiveVoiceResponseAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    DialplansAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewDialplan(anonymousRejection: boolean, billingAccount: string, name: string, serviceName: string, showCallerNumber: TelephonyOvhPabxDialplanNumberPresentationEnum, transferTimeout: number): Promise<TelephonyOvhPabxDialplan>;
    DeleteTheGivenDialplan(billingAccount: string, dialplanId: number, serviceName: string): Promise<void>;
    ExtensionsContainedInTheDialplan(billingAccount: string, dialplanId: number, serviceName: string): Promise<number[]>;
    CreateANewExtensionForADialplan(billingAccount: string, dialplanId: number, enable: boolean, position: number, serviceName: string, schedulerCategory?: TelephonySchedulerCategoryEnum, screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum): Promise<TelephonyOvhPabxDialplanExtension>;
    DeleteTheGivenExtension(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string): Promise<void>;
    ScreenlistConditionsCheckedWhenExecutingTheExtension(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string): Promise<number[]>;
    TimeConditionsCheckedWhenExecutingTheExtension(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string): Promise<number[]>;
    CreateANewTimeConditionForAnExtension(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string, timeFrom: any, timeTo: any, weekDay: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum): Promise<TelephonyOvhPabxDialplanExtensionConditionTime>;
    RulesContainedInTheExtension(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string): Promise<number[]>;
    CreateANewRuleForAnExtension(action: TelephonyOvhPabxDialplanExtensionRuleActionEnum, billingAccount: string, dialplanId: number, extensionId: number, negativeAction: boolean, position: number, serviceName: string, actionParam?: string): Promise<TelephonyOvhPabxDialplanExtensionRule>;
    DeleteTheGivenRule(billingAccount: string, dialplanId: number, extensionId: number, ruleId: number, serviceName: string): Promise<void>;
    MenusAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewMenu(billingAccount: string, name: string, serviceName: string, greetSound?: number, greetSoundTts?: number, invalidSound?: number, invalidSoundTts?: number): Promise<TelephonyOvhPabxMenu>;
    DeleteTheGivenMenu(billingAccount: string, menuId: number, serviceName: string): Promise<void>;
    MenuEntry(billingAccount: string, menuId: number, serviceName: string): Promise<number[]>;
    CreateANewMenuEntry(action: TelephonyOvhPabxIvrMenuEntryActionEnum, billingAccount: string, dtmf: string, menuId: number, position: number, serviceName: string, actionParam?: string): Promise<TelephonyOvhPabxMenuEntry>;
    DeleteTheGivenMenuEntry(billingAccount: string, entryId: number, menuId: number, serviceName: string): Promise<void>;
    TextToSpeechAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewTextToSpeech(billingAccount: string, serviceName: string, text: string, voice?: TelephonyOvhPabxTtsVoiceEnum): Promise<void>;
    DeleteTheGivenTextToSpeech(billingAccount: string, id: number, serviceName: string): Promise<void>;
    ReturnPhonebooksAssociatedToThisGroup(billingAccount: string): Promise<string[]>;
    AddAPhonebookOnGroupReturnTheBookKey(billingAccount: string, name: string): Promise<string>;
    CurrentNumberPortabilitiesForThisBillingAccount(billingAccount: string): Promise<number[]>;
    IndicatesWhetherOrNotThePortabilityCanBeCancelled(billingAccount: string, id: number): Promise<boolean>;
    IndicatesWhetherOrNotThePortabilityCanBeExecuted(billingAccount: string, id: number): Promise<boolean>;
    AskToCancelThePortability(billingAccount: string, id: number, reason?: string): Promise<void>;
    AskToChangeThePortabilityDate(billingAccount: string, date: string, id: number): Promise<void>;
    IndicatesWhetherOrNotThePortabilityDateCanBeChanged(billingAccount: string, id: number): Promise<boolean>;
    DocumentLinkedToThisPortability(billingAccount: string, id: number): Promise<number[]>;
    CreateAPortabilityDocument(billingAccount: string, id: number, name: string, description?: string): Promise<TelephonyPortabilityDocument>;
    DeleteTheDocument(billingAccount: string, documentId: number, id: number): Promise<void>;
    AskToExecuteThePortability(billingAccount: string, id: number): Promise<void>;
    IndicatesWhetherOrNotErrorCanBeFixedAndPortabilityCanBeRelaunched(billingAccount: string, id: number): Promise<TelephonyPortabilityFixErrorPossibleParameters>;
    FixErrorAndRelaunchPortability(billingAccount: string, id: number, parameters: any): Promise<void>;
    IndicatesTheCurrentStatusOfThePortabilityWithAListOfSteps(billingAccount: string, id: number): Promise<TelephonyPortabilityStep[]>;
    RedirectsAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    ChangeTheDestinationOfTheRedirect(billingAccount: string, destination: any, serviceName: string): Promise<TelephonyTask>;
    ServiceConcernedByTheFrenchRSVAReform(billingAccount: string): Promise<string[]>;
    CompatibleRateCodesRelatedToThisValueAddedService(billingAccount: string, serviceName: string): Promise<TelephonyRateCodeInformation[]>;
    CancelAScheduledRateCodeUpdate(billingAccount: string, serviceName: string): Promise<void>;
    CurrentRateCodeRelatedToThisSva(billingAccount: string, serviceName: string): Promise<TelephonyDetailedRateCodeInformation>;
    NewScheduledRateCodeRelatedToThisSva(billingAccount: string, serviceName: string): Promise<TelephonyDetailedRateCodeInformation>;
    ScheduleANewRateCodeForThisSva(billingAccount: string, rateCode: string, serviceName: string): Promise<TelephonyDetailedRateCodeInformation>;
    ScheduledEvents(billingAccount: string): Promise<string[]>;
    CustomEventsScheduled(billingAccount: string, serviceName: string, categories?: TelephonySchedulerCategoryEnum, dateEndFrom?: string, dateEndTo?: string, dateStartFrom?: string, dateStartTo?: string): Promise<string[]>;
    AddASchedulerEvent(billingAccount: string, category: TelephonySchedulerCategoryEnum, dateEnd: string, dateStart: string, serviceName: string, title: string, description?: string, uid?: string): Promise<void>;
    DeleteTheGivenSchedulerEvent(billingAccount: string, serviceName: string, uid: string): Promise<void>;
    AddSchedulerEventsInICSFormat(billingAccount: string, serviceName: string, _url: string): Promise<TelephonyTask>;
    ScreenlistCompatibleNumbersAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    RulesForCallFilteringForThisService(billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewScreenListRule(billingAccount: string, nature: TelephonyScreenListNatureEnum, serviceName: string, type: TelephonyScreenListTypeEnum, callNumber?: string): Promise<void>;
    DeleteTheGivenScreenList(billingAccount: string, id: number, serviceName: string): Promise<void>;
    ServicesAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    AskForAServiceTermination(billingAccount: string, reason: TelephonyTerminationReasonEnum, serviceName: string, details?: string): Promise<void>;
    CancelTheServiceTermination(billingAccount: string, serviceName: string): Promise<void>;
    MoveAServiceOfBillingAccountSourceAndDestinationNicsShouldBeTheSame(billingAccount: string, billingAccountDestination: string, serviceName: string): Promise<void>;
    GetRelevantInformationsOfTheServiceDetectedFromTheMOSOrTheSignalLegInSIPMGCPProtocol(billingAccount: string, dayInterval: TelephonyDiagnosticReportIndexEnum, serviceName: string): Promise<TelephonyDiagnosticReport[]>;
    GetCompanyEntrepriseInformationsByProvidingEntrepriseNumber(billingAccount: string, entrepriseNumber: string, serviceName: string): Promise<TelephonyEntrepriseNumberInformationsTask>;
    GetDirectoryServiceCodeFromAnAPECodePrincipalActivityOfTheFirmCode(apeCode: string, billingAccount: string, serviceName: string): Promise<TelephonyDirectoryHeadingPJ[]>;
    GetAllTheWayTypesAvailables(billingAccount: string, serviceName: string): Promise<TelephonyDirectoryWayType[]>;
    FaxDeliveryRecords(billingAccount: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, wayType?: TelephonyFaxConsumptionWayTypeEnum): Promise<number[]>;
    AddANewOfferChange(billingAccount: string, offer: string, serviceName: string): Promise<void>;
    DeleteTheReplacementOfferScheduling(billingAccount: string, serviceName: string): Promise<void>;
    ListAllAvailableOfferChangesCompatibilities(billingAccount: string, serviceName: string): Promise<TelephonyLineOffer[]>;
    CallDeliveryRecordsOfThePreviousMonth(billingAccount: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, destinationType?: TelephonyVoiceConsumptionDestinationTypeEnum, planType?: TelephonyVoiceConsumptionPlanTypeEnum, wayType?: TelephonyVoiceConsumptionWayTypeEnum): Promise<number[]>;
    CallWhichCouldBeRepayable(billingAccount: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string): Promise<number[]>;
    OperationsOnATelephonyService(billingAccount: string, serviceName: string, action?: string, serviceType?: string, status?: TelephonyTaskStatusEnum): Promise<number[]>;
    CallDeliveryRecords(billingAccount: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, destinationType?: TelephonyVoiceConsumptionDestinationTypeEnum, planType?: TelephonyVoiceConsumptionPlanTypeEnum, wayType?: TelephonyVoiceConsumptionWayTypeEnum): Promise<number[]>;
    OperationsOnATelephonyBillingAccount(billingAccount: string, action?: string, serviceType?: string, status?: TelephonyTaskStatusEnum): Promise<number[]>;
    TimeConditionsCompatibleNumbersAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    RulesForTimeConditionsForThisService(billingAccount: string, serviceName: string): Promise<number[]>;
    CreateANewTimeConditionRule(billingAccount: string, day: TelephonyTimeConditionsDayEnum, hourBegin: string, hourEnd: string, policy: TelephonyTimeConditionsPolicyEnum, serviceName: string): Promise<TelephonyTimeCondition>;
    TransferSecurityDepositBetweenTwoBillingAccounts(amount: number, billingAccount: string, billingAccountDestination: string): Promise<void>;
    TrunkAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    DetermineTheBestChannelsPacksCombinationForAGivenChannelQuantity(billingAccount: string, quantity: number, serviceName: string): Promise<TelephonyTrunkSimultaneousPacksRepartition>;
    ExternalDisplayedNumberLinkedToThisTrunk(billingAccount: string, serviceName: string): Promise<any>;
    ExternalDisplayedNumberCreationForAGivenTrunk(billingAccount: string, number: any, serviceName: string, autoValidation?: boolean): Promise<TelephonyTrunkExternalDisplayedNumber>;
    DeleteAnExternalDisplayedNumberForAGivenTrunk(billingAccount: string, number: any, serviceName: string): Promise<void>;
    GenerateAPhoneCallForValidationReturnedValidationCodeShouldBeTypedWhenAsked(billingAccount: string, number: any, serviceName: string): Promise<TelephonyTrunkExternalDisplayedNumberValidation>;
    VoicemailsAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    VoicemailDirectoryMessages(billingAccount: string, serviceName: string, dir?: TelephonyVoicemailMessageFolderDirectoryEnum): Promise<number[]>;
    DeleteTheGivenVoicemailMessage(billingAccount: string, id: number, serviceName: string): Promise<void>;
    GetAUrlToDownloadTheSoundFile(billingAccount: string, id: number, serviceName: string, format?: TelephonyServiceVoicemailAudioFormatEnum): Promise<TelephonyPcsFile>;
    MoveTheMessageToAnotherDirectory(billingAccount: string, dir: TelephonyVoicemailMessageFolderDirectoryEnum, id: number, serviceName: string): Promise<void>;
    VoicemailGreetingMessageProperties(billingAccount: string, serviceName: string, dir?: TelephonyVoicemailMessageFolderGreetingEnum): Promise<number[]>;
    UploadANewSoundForASpecificGreetingReturnATaskId(billingAccount: string, dir: TelephonyVoicemailMessageFolderGreetingEnum, documentId: string, serviceName: string): Promise<number>;
    DeleteTheCustomizedGreeting(billingAccount: string, id: number, serviceName: string): Promise<void>;
    ChangeTheVoicemailOnANewVersionToManagerGreetingsDirectoriesAndExtraSettings(billingAccount: string, serviceName: string): Promise<void>;
    ChangeTheVoicemailPasswordItMustBe4Digit(billingAccount: string, password: string, serviceName: string): Promise<void>;
    DisableEnableVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(billingAccount: string, routing: TelephonyVoicefaxRoutingEnum, serviceName: string): Promise<void>;
    GetTheStatusOfTheVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(billingAccount: string, serviceName: string): Promise<TelephonyVoicefaxRoutingEnum>;
    GetNumberForInternalAndExternalVoicemail(billingAccount: string, serviceName: string): Promise<TelephonyVoicemailNumbers>;
    VxmlNumbersAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]>;
    GenerateATemporaryUrlToRetrieveDeviceLogs(billingAccount: string, serviceName: string): Promise<TelephonyTemporaryLogsLink>;
    GetAllAvailableAccessories(country: TelephonyNumberCountryEnum): Promise<TelephonyAccessoryOffer[]>;
    GetAllAvailableSIPDomainsByCountry(type: TelephonySipDomainProductTypeEnum): Promise<TelephonyDefaultSipDomains[]>;
    GetCurrentOrderIds(): Promise<number[]>;
    GetAllZipCodesCompatibleForANumber(country: TelephonyNumberCountryEnum, number: string): Promise<string[]>;
    GetCityInformationsFromAZipCode(country: TelephonyNumberCountryEnum, zipCode: string): Promise<TelephonyCity[]>;
    GetAllAvailableFaxOfferCompatible(country: TelephonyNumberCountryEnum): Promise<TelephonyLineOffer[]>;
    GetAllAvailablePhoneBrandsCompatibleWithLines(country: TelephonyNumberCountryEnum, offer: string): Promise<TelephonyLinePhone[]>;
    GetAllAvailableLineOfferCompatible(country: TelephonyNumberCountryEnum): Promise<TelephonyLineOffer[]>;
    GetAllAvailableGeographicZoneWithSomeDetailsFromACountry(country: TelephonyNumberCountryEnum, axiom?: string): Promise<TelephonyNumberDetailedZone[]>;
    GetAllAvailableSpecialRangeFromACountry(country: TelephonyNumberCountryEnum): Promise<string[]>;
    GetAllAvailableSpecificNumberFromACountry(country: TelephonyNumberCountryEnum, type: TelephonyNumberTypeEnum, range?: string, zone?: string): Promise<TelephonySpecificNumber[]>;
    GetAllAvailableGeographicZoneFromACountry(country: TelephonyNumberCountryEnum, axiom?: string): Promise<string[]>;
    SearchAServiceWithItsDomainToGetItsBillingAccountAndType(axiom: string): Promise<TelephonyTelephonySearchService[]>;
    SoundsAttachedToThisTelephonyAccount(): Promise<number[]>;
    CreateANewSound(filename: string, description?: string): Promise<TelephonySound>;
    DeleteTheSound(id: number): Promise<void>;
    DeleteTheSpareAsIfItWasNotBelongingToOVHAnymore(spare: string): Promise<void>;
    ReturnTheListOfPhoneDomainsCompatibleToBeReplaced(spare: string): Promise<string[]>;
    ReplaceThePhoneByItsSpareTheBrokenPhoneBecameASpareIfItWasBoughtAnRMAIsCreatedIfTheBrokenPhoneIsUnderSecuritydeposit(domain: string, ip: string, spare: string): Promise<void>;
    GetAllAvailableSpareBrands(): Promise<string[]>;
}
//# sourceMappingURL=telephony.d.ts.map