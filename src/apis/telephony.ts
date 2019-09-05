// GENERATED SDK for telephony API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Start and end points (inclusive) of a range
 */
export interface ComplexTypeRange<T> {
  from: T
  to: T
}

/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  key: string
  value: T
}

/**
 * A value set tagged with its unit
 */
export interface ComplexTypeUnitAndValues<T> {
  unit: string
  values: T[]
}

/*
 * ISO country codes
 */
export enum CoreTypesCountry {
  AC = 'ac',
  AD = 'ad',
  AE = 'ae',
  AF = 'af',
  AG = 'ag',
  AI = 'ai',
  AL = 'al',
  AM = 'am',
  AN = 'an',
  AO = 'ao',
  AQ = 'aq',
  AR = 'ar',
  AS = 'as',
  AT = 'at',
  AU = 'au',
  AW = 'aw',
  AX = 'ax',
  AZ = 'az',
  BA = 'ba',
  BB = 'bb',
  BD = 'bd',
  BE = 'be',
  BF = 'bf',
  BG = 'bg',
  BH = 'bh',
  BI = 'bi',
  BJ = 'bj',
  BL = 'bl',
  BM = 'bm',
  BN = 'bn',
  BO = 'bo',
  BQ = 'bq',
  BR = 'br',
  BS = 'bs',
  BT = 'bt',
  BV = 'bv',
  BW = 'bw',
  BY = 'by',
  BZ = 'bz',
  CA = 'ca',
  CC = 'cc',
  CD = 'cd',
  CF = 'cf',
  CG = 'cg',
  CH = 'ch',
  CI = 'ci',
  CK = 'ck',
  CL = 'cl',
  CM = 'cm',
  CN = 'cn',
  CO = 'co',
  CR = 'cr',
  CS = 'cs',
  CU = 'cu',
  CV = 'cv',
  CW = 'cw',
  CX = 'cx',
  CY = 'cy',
  CZ = 'cz',
  DE = 'de',
  DJ = 'dj',
  DK = 'dk',
  DM = 'dm',
  DO = 'do',
  DZ = 'dz',
  EC = 'ec',
  EE = 'ee',
  EG = 'eg',
  EH = 'eh',
  ER = 'er',
  ES = 'es',
  ET = 'et',
  FC = 'fc',
  FD = 'fd',
  FI = 'fi',
  FJ = 'fj',
  FK = 'fk',
  FM = 'fm',
  FO = 'fo',
  FR = 'fr',
  FX = 'fx',
  GA = 'ga',
  GB = 'gb',
  GD = 'gd',
  GE = 'ge',
  GF = 'gf',
  GG = 'gg',
  GH = 'gh',
  GI = 'gi',
  GL = 'gl',
  GM = 'gm',
  GN = 'gn',
  GP = 'gp',
  GQ = 'gq',
  GR = 'gr',
  GS = 'gs',
  GT = 'gt',
  GU = 'gu',
  GW = 'gw',
  GY = 'gy',
  HK = 'hk',
  HM = 'hm',
  HN = 'hn',
  HR = 'hr',
  HT = 'ht',
  HU = 'hu',
  ID = 'id',
  IE = 'ie',
  IL = 'il',
  IM = 'im',
  IN = 'in',
  IO = 'io',
  IQ = 'iq',
  IR = 'ir',
  IS = 'is',
  IT = 'it',
  JE = 'je',
  JM = 'jm',
  JO = 'jo',
  JP = 'jp',
  KE = 'ke',
  KG = 'kg',
  KH = 'kh',
  KI = 'ki',
  KM = 'km',
  KN = 'kn',
  KP = 'kp',
  KR = 'kr',
  KW = 'kw',
  KY = 'ky',
  KZ = 'kz',
  LA = 'la',
  LB = 'lb',
  LC = 'lc',
  LI = 'li',
  LK = 'lk',
  LR = 'lr',
  LS = 'ls',
  LT = 'lt',
  LU = 'lu',
  LV = 'lv',
  LY = 'ly',
  MA = 'ma',
  MC = 'mc',
  MD = 'md',
  ME = 'me',
  MF = 'mf',
  MG = 'mg',
  MH = 'mh',
  MK = 'mk',
  ML = 'ml',
  MM = 'mm',
  MN = 'mn',
  MO = 'mo',
  MP = 'mp',
  MQ = 'mq',
  MR = 'mr',
  MS = 'ms',
  MT = 'mt',
  MU = 'mu',
  MV = 'mv',
  MW = 'mw',
  MX = 'mx',
  MY = 'my',
  MZ = 'mz',
  NA = 'na',
  NC = 'nc',
  NE = 'ne',
  NF = 'nf',
  NG = 'ng',
  NI = 'ni',
  NL = 'nl',
  NO = 'no',
  NP = 'np',
  NR = 'nr',
  NU = 'nu',
  NZ = 'nz',
  OM = 'om',
  PA = 'pa',
  PE = 'pe',
  PF = 'pf',
  PG = 'pg',
  PH = 'ph',
  PK = 'pk',
  PL = 'pl',
  PM = 'pm',
  PN = 'pn',
  PR = 'pr',
  PS = 'ps',
  PT = 'pt',
  PW = 'pw',
  PY = 'py',
  QA = 'qa',
  QC = 'qc',
  RE = 're',
  RO = 'ro',
  RS = 'rs',
  RU = 'ru',
  RW = 'rw',
  SA = 'sa',
  SB = 'sb',
  SC = 'sc',
  SD = 'sd',
  SE = 'se',
  SG = 'sg',
  SH = 'sh',
  SI = 'si',
  SJ = 'sj',
  SK = 'sk',
  SL = 'sl',
  SM = 'sm',
  SN = 'sn',
  SO = 'so',
  SR = 'sr',
  SS = 'ss',
  ST = 'st',
  SV = 'sv',
  SX = 'sx',
  SY = 'sy',
  SZ = 'sz',
  TC = 'tc',
  TD = 'td',
  TF = 'tf',
  TG = 'tg',
  TH = 'th',
  TJ = 'tj',
  TK = 'tk',
  TL = 'tl',
  TM = 'tm',
  TN = 'tn',
  TO = 'to',
  TP = 'tp',
  TR = 'tr',
  TT = 'tt',
  TV = 'tv',
  TW = 'tw',
  TZ = 'tz',
  UA = 'ua',
  UG = 'ug',
  UK = 'uk',
  UM = 'um',
  US = 'us',
  UY = 'uy',
  UZ = 'uz',
  VA = 'va',
  VC = 'vc',
  VE = 've',
  VG = 'vg',
  VI = 'vi',
  VN = 'vn',
  VU = 'vu',
  WE = 'we',
  WF = 'wf',
  WS = 'ws',
  YE = 'ye',
  YT = 'yt',
  YU = 'yu',
  ZA = 'za',
  ZM = 'zm',
  ZW = 'zw'
}

/*
 * IANA TimeZone names
 */
export enum CoreTypesTimeZone {
  AFRICA_ABIDJAN = 'Africa/Abidjan',
  AFRICA_ACCRA = 'Africa/Accra',
  AFRICA_ADDIS_ABABA = 'Africa/Addis_Ababa',
  AFRICA_ALGIERS = 'Africa/Algiers',
  AFRICA_ASMARA = 'Africa/Asmara',
  AFRICA_BAMAKO = 'Africa/Bamako',
  AFRICA_BANGUI = 'Africa/Bangui',
  AFRICA_BANJUL = 'Africa/Banjul',
  AFRICA_BISSAU = 'Africa/Bissau',
  AFRICA_BLANTYRE = 'Africa/Blantyre',
  AFRICA_BRAZZAVILLE = 'Africa/Brazzaville',
  AFRICA_BUJUMBURA = 'Africa/Bujumbura',
  AFRICA_CAIRO = 'Africa/Cairo',
  AFRICA_CASABLANCA = 'Africa/Casablanca',
  AFRICA_CEUTA = 'Africa/Ceuta',
  AFRICA_CONAKRY = 'Africa/Conakry',
  AFRICA_DAKAR = 'Africa/Dakar',
  AFRICA_DAR_ES_SALAAM = 'Africa/Dar_es_Salaam',
  AFRICA_DJIBOUTI = 'Africa/Djibouti',
  AFRICA_DOUALA = 'Africa/Douala',
  AFRICA_EL_AAIUN = 'Africa/El_Aaiun',
  AFRICA_FREETOWN = 'Africa/Freetown',
  AFRICA_GABORONE = 'Africa/Gaborone',
  AFRICA_HARARE = 'Africa/Harare',
  AFRICA_JOHANNESBURG = 'Africa/Johannesburg',
  AFRICA_JUBA = 'Africa/Juba',
  AFRICA_KAMPALA = 'Africa/Kampala',
  AFRICA_KHARTOUM = 'Africa/Khartoum',
  AFRICA_KIGALI = 'Africa/Kigali',
  AFRICA_KINSHASA = 'Africa/Kinshasa',
  AFRICA_LAGOS = 'Africa/Lagos',
  AFRICA_LIBREVILLE = 'Africa/Libreville',
  AFRICA_LOME = 'Africa/Lome',
  AFRICA_LUANDA = 'Africa/Luanda',
  AFRICA_LUBUMBASHI = 'Africa/Lubumbashi',
  AFRICA_LUSAKA = 'Africa/Lusaka',
  AFRICA_MALABO = 'Africa/Malabo',
  AFRICA_MAPUTO = 'Africa/Maputo',
  AFRICA_MASERU = 'Africa/Maseru',
  AFRICA_MBABANE = 'Africa/Mbabane',
  AFRICA_MOGADISHU = 'Africa/Mogadishu',
  AFRICA_MONROVIA = 'Africa/Monrovia',
  AFRICA_NAIROBI = 'Africa/Nairobi',
  AFRICA_NDJAMENA = 'Africa/Ndjamena',
  AFRICA_NIAMEY = 'Africa/Niamey',
  AFRICA_NOUAKCHOTT = 'Africa/Nouakchott',
  AFRICA_OUAGADOUGOU = 'Africa/Ouagadougou',
  AFRICA_PORTO_NOVO = 'Africa/Porto-Novo',
  AFRICA_SAO_TOME = 'Africa/Sao_Tome',
  AFRICA_TRIPOLI = 'Africa/Tripoli',
  AFRICA_TUNIS = 'Africa/Tunis',
  AFRICA_WINDHOEK = 'Africa/Windhoek',
  AMERICA_ADAK = 'America/Adak',
  AMERICA_ANCHORAGE = 'America/Anchorage',
  AMERICA_ANGUILLA = 'America/Anguilla',
  AMERICA_ANTIGUA = 'America/Antigua',
  AMERICA_ARAGUAINA = 'America/Araguaina',
  AMERICA_ARGENTINA_BUENOS_AIRES = 'America/Argentina/Buenos_Aires',
  AMERICA_ARGENTINA_CATAMARCA = 'America/Argentina/Catamarca',
  AMERICA_ARGENTINA_CORDOBA = 'America/Argentina/Cordoba',
  AMERICA_ARGENTINA_JUJUY = 'America/Argentina/Jujuy',
  AMERICA_ARGENTINA_LA_RIOJA = 'America/Argentina/La_Rioja',
  AMERICA_ARGENTINA_MENDOZA = 'America/Argentina/Mendoza',
  AMERICA_ARGENTINA_RIO_GALLEGOS = 'America/Argentina/Rio_Gallegos',
  AMERICA_ARGENTINA_SALTA = 'America/Argentina/Salta',
  AMERICA_ARGENTINA_SAN_JUAN = 'America/Argentina/San_Juan',
  AMERICA_ARGENTINA_SAN_LUIS = 'America/Argentina/San_Luis',
  AMERICA_ARGENTINA_TUCUMAN = 'America/Argentina/Tucuman',
  AMERICA_ARGENTINA_USHUAIA = 'America/Argentina/Ushuaia',
  AMERICA_ARUBA = 'America/Aruba',
  AMERICA_ASUNCION = 'America/Asuncion',
  AMERICA_ATIKOKAN = 'America/Atikokan',
  AMERICA_BAHIA = 'America/Bahia',
  AMERICA_BAHIA_BANDERAS = 'America/Bahia_Banderas',
  AMERICA_BARBADOS = 'America/Barbados',
  AMERICA_BELEM = 'America/Belem',
  AMERICA_BELIZE = 'America/Belize',
  AMERICA_BLANC_SABLON = 'America/Blanc-Sablon',
  AMERICA_BOA_VISTA = 'America/Boa_Vista',
  AMERICA_BOGOTA = 'America/Bogota',
  AMERICA_BOISE = 'America/Boise',
  AMERICA_CAMBRIDGE_BAY = 'America/Cambridge_Bay',
  AMERICA_CAMPO_GRANDE = 'America/Campo_Grande',
  AMERICA_CANCUN = 'America/Cancun',
  AMERICA_CARACAS = 'America/Caracas',
  AMERICA_CAYENNE = 'America/Cayenne',
  AMERICA_CAYMAN = 'America/Cayman',
  AMERICA_CHICAGO = 'America/Chicago',
  AMERICA_CHIHUAHUA = 'America/Chihuahua',
  AMERICA_COSTA_RICA = 'America/Costa_Rica',
  AMERICA_CRESTON = 'America/Creston',
  AMERICA_CUIABA = 'America/Cuiaba',
  AMERICA_CURACAO = 'America/Curacao',
  AMERICA_DANMARKSHAVN = 'America/Danmarkshavn',
  AMERICA_DAWSON = 'America/Dawson',
  AMERICA_DAWSON_CREEK = 'America/Dawson_Creek',
  AMERICA_DENVER = 'America/Denver',
  AMERICA_DETROIT = 'America/Detroit',
  AMERICA_DOMINICA = 'America/Dominica',
  AMERICA_EDMONTON = 'America/Edmonton',
  AMERICA_EIRUNEPE = 'America/Eirunepe',
  AMERICA_EL_SALVADOR = 'America/El_Salvador',
  AMERICA_FORTALEZA = 'America/Fortaleza',
  AMERICA_GLACE_BAY = 'America/Glace_Bay',
  AMERICA_GODTHAB = 'America/Godthab',
  AMERICA_GOOSE_BAY = 'America/Goose_Bay',
  AMERICA_GRAND_TURK = 'America/Grand_Turk',
  AMERICA_GRENADA = 'America/Grenada',
  AMERICA_GUADELOUPE = 'America/Guadeloupe',
  AMERICA_GUATEMALA = 'America/Guatemala',
  AMERICA_GUAYAQUIL = 'America/Guayaquil',
  AMERICA_GUYANA = 'America/Guyana',
  AMERICA_HALIFAX = 'America/Halifax',
  AMERICA_HAVANA = 'America/Havana',
  AMERICA_HERMOSILLO = 'America/Hermosillo',
  AMERICA_INDIANA_INDIANAPOLIS = 'America/Indiana/Indianapolis',
  AMERICA_INDIANA_KNOX = 'America/Indiana/Knox',
  AMERICA_INDIANA_MARENGO = 'America/Indiana/Marengo',
  AMERICA_INDIANA_PETERSBURG = 'America/Indiana/Petersburg',
  AMERICA_INDIANA_TELL_CITY = 'America/Indiana/Tell_City',
  AMERICA_INDIANA_VEVAY = 'America/Indiana/Vevay',
  AMERICA_INDIANA_VINCENNES = 'America/Indiana/Vincennes',
  AMERICA_INDIANA_WINAMAC = 'America/Indiana/Winamac',
  AMERICA_INUVIK = 'America/Inuvik',
  AMERICA_IQALUIT = 'America/Iqaluit',
  AMERICA_JAMAICA = 'America/Jamaica',
  AMERICA_JUNEAU = 'America/Juneau',
  AMERICA_KENTUCKY_LOUISVILLE = 'America/Kentucky/Louisville',
  AMERICA_KENTUCKY_MONTICELLO = 'America/Kentucky/Monticello',
  AMERICA_KRALENDIJK = 'America/Kralendijk',
  AMERICA_LA_PAZ = 'America/La_Paz',
  AMERICA_LIMA = 'America/Lima',
  AMERICA_LOS_ANGELES = 'America/Los_Angeles',
  AMERICA_LOWER_PRINCES = 'America/Lower_Princes',
  AMERICA_MACEIO = 'America/Maceio',
  AMERICA_MANAGUA = 'America/Managua',
  AMERICA_MANAUS = 'America/Manaus',
  AMERICA_MARIGOT = 'America/Marigot',
  AMERICA_MARTINIQUE = 'America/Martinique',
  AMERICA_MATAMOROS = 'America/Matamoros',
  AMERICA_MAZATLAN = 'America/Mazatlan',
  AMERICA_MENOMINEE = 'America/Menominee',
  AMERICA_MERIDA = 'America/Merida',
  AMERICA_METLAKATLA = 'America/Metlakatla',
  AMERICA_MEXICO_CITY = 'America/Mexico_City',
  AMERICA_MIQUELON = 'America/Miquelon',
  AMERICA_MONCTON = 'America/Moncton',
  AMERICA_MONTERREY = 'America/Monterrey',
  AMERICA_MONTEVIDEO = 'America/Montevideo',
  AMERICA_MONTSERRAT = 'America/Montserrat',
  AMERICA_NASSAU = 'America/Nassau',
  AMERICA_NEW_YORK = 'America/New_York',
  AMERICA_NIPIGON = 'America/Nipigon',
  AMERICA_NOME = 'America/Nome',
  AMERICA_NORONHA = 'America/Noronha',
  AMERICA_NORTH_DAKOTA_BEULAH = 'America/North_Dakota/Beulah',
  AMERICA_NORTH_DAKOTA_CENTER = 'America/North_Dakota/Center',
  AMERICA_NORTH_DAKOTA_NEW_SALEM = 'America/North_Dakota/New_Salem',
  AMERICA_OJINAGA = 'America/Ojinaga',
  AMERICA_PANAMA = 'America/Panama',
  AMERICA_PANGNIRTUNG = 'America/Pangnirtung',
  AMERICA_PARAMARIBO = 'America/Paramaribo',
  AMERICA_PHOENIX = 'America/Phoenix',
  AMERICA_PORT_AU_PRINCE = 'America/Port-au-Prince',
  AMERICA_PORT_OF_SPAIN = 'America/Port_of_Spain',
  AMERICA_PORTO_VELHO = 'America/Porto_Velho',
  AMERICA_PUERTO_RICO = 'America/Puerto_Rico',
  AMERICA_RAINY_RIVER = 'America/Rainy_River',
  AMERICA_RANKIN_INLET = 'America/Rankin_Inlet',
  AMERICA_RECIFE = 'America/Recife',
  AMERICA_REGINA = 'America/Regina',
  AMERICA_RESOLUTE = 'America/Resolute',
  AMERICA_RIO_BRANCO = 'America/Rio_Branco',
  AMERICA_SANTA_ISABEL = 'America/Santa_Isabel',
  AMERICA_SANTAREM = 'America/Santarem',
  AMERICA_SANTIAGO = 'America/Santiago',
  AMERICA_SANTO_DOMINGO = 'America/Santo_Domingo',
  AMERICA_SAO_PAULO = 'America/Sao_Paulo',
  AMERICA_SCORESBYSUND = 'America/Scoresbysund',
  AMERICA_SITKA = 'America/Sitka',
  AMERICA_ST_BARTHELEMY = 'America/St_Barthelemy',
  AMERICA_ST_JOHNS = 'America/St_Johns',
  AMERICA_ST_KITTS = 'America/St_Kitts',
  AMERICA_ST_LUCIA = 'America/St_Lucia',
  AMERICA_ST_THOMAS = 'America/St_Thomas',
  AMERICA_ST_VINCENT = 'America/St_Vincent',
  AMERICA_SWIFT_CURRENT = 'America/Swift_Current',
  AMERICA_TEGUCIGALPA = 'America/Tegucigalpa',
  AMERICA_THULE = 'America/Thule',
  AMERICA_THUNDER_BAY = 'America/Thunder_Bay',
  AMERICA_TIJUANA = 'America/Tijuana',
  AMERICA_TORONTO = 'America/Toronto',
  AMERICA_TORTOLA = 'America/Tortola',
  AMERICA_VANCOUVER = 'America/Vancouver',
  AMERICA_WHITEHORSE = 'America/Whitehorse',
  AMERICA_WINNIPEG = 'America/Winnipeg',
  AMERICA_YAKUTAT = 'America/Yakutat',
  AMERICA_YELLOWKNIFE = 'America/Yellowknife',
  ANTARCTICA_CASEY = 'Antarctica/Casey',
  ANTARCTICA_DAVIS = 'Antarctica/Davis',
  ANTARCTICA_DUMONTDURVILLE = 'Antarctica/DumontDUrville',
  ANTARCTICA_MACQUARIE = 'Antarctica/Macquarie',
  ANTARCTICA_MAWSON = 'Antarctica/Mawson',
  ANTARCTICA_MCMURDO = 'Antarctica/McMurdo',
  ANTARCTICA_PALMER = 'Antarctica/Palmer',
  ANTARCTICA_ROTHERA = 'Antarctica/Rothera',
  ANTARCTICA_SYOWA = 'Antarctica/Syowa',
  ANTARCTICA_TROLL = 'Antarctica/Troll',
  ANTARCTICA_VOSTOK = 'Antarctica/Vostok',
  ARCTIC_LONGYEARBYEN = 'Arctic/Longyearbyen',
  ASIA_ADEN = 'Asia/Aden',
  ASIA_ALMATY = 'Asia/Almaty',
  ASIA_AMMAN = 'Asia/Amman',
  ASIA_ANADYR = 'Asia/Anadyr',
  ASIA_AQTAU = 'Asia/Aqtau',
  ASIA_AQTOBE = 'Asia/Aqtobe',
  ASIA_ASHGABAT = 'Asia/Ashgabat',
  ASIA_BAGHDAD = 'Asia/Baghdad',
  ASIA_BAHRAIN = 'Asia/Bahrain',
  ASIA_BAKU = 'Asia/Baku',
  ASIA_BANGKOK = 'Asia/Bangkok',
  ASIA_BEIRUT = 'Asia/Beirut',
  ASIA_BISHKEK = 'Asia/Bishkek',
  ASIA_BRUNEI = 'Asia/Brunei',
  ASIA_CHITA = 'Asia/Chita',
  ASIA_CHOIBALSAN = 'Asia/Choibalsan',
  ASIA_COLOMBO = 'Asia/Colombo',
  ASIA_DAMASCUS = 'Asia/Damascus',
  ASIA_DHAKA = 'Asia/Dhaka',
  ASIA_DILI = 'Asia/Dili',
  ASIA_DUBAI = 'Asia/Dubai',
  ASIA_DUSHANBE = 'Asia/Dushanbe',
  ASIA_GAZA = 'Asia/Gaza',
  ASIA_HEBRON = 'Asia/Hebron',
  ASIA_HO_CHI_MINH = 'Asia/Ho_Chi_Minh',
  ASIA_HONG_KONG = 'Asia/Hong_Kong',
  ASIA_HOVD = 'Asia/Hovd',
  ASIA_IRKUTSK = 'Asia/Irkutsk',
  ASIA_JAKARTA = 'Asia/Jakarta',
  ASIA_JAYAPURA = 'Asia/Jayapura',
  ASIA_JERUSALEM = 'Asia/Jerusalem',
  ASIA_KABUL = 'Asia/Kabul',
  ASIA_KAMCHATKA = 'Asia/Kamchatka',
  ASIA_KARACHI = 'Asia/Karachi',
  ASIA_KATHMANDU = 'Asia/Kathmandu',
  ASIA_KHANDYGA = 'Asia/Khandyga',
  ASIA_KOLKATA = 'Asia/Kolkata',
  ASIA_KRASNOYARSK = 'Asia/Krasnoyarsk',
  ASIA_KUALA_LUMPUR = 'Asia/Kuala_Lumpur',
  ASIA_KUCHING = 'Asia/Kuching',
  ASIA_KUWAIT = 'Asia/Kuwait',
  ASIA_MACAU = 'Asia/Macau',
  ASIA_MAGADAN = 'Asia/Magadan',
  ASIA_MAKASSAR = 'Asia/Makassar',
  ASIA_MANILA = 'Asia/Manila',
  ASIA_MUSCAT = 'Asia/Muscat',
  ASIA_NICOSIA = 'Asia/Nicosia',
  ASIA_NOVOKUZNETSK = 'Asia/Novokuznetsk',
  ASIA_NOVOSIBIRSK = 'Asia/Novosibirsk',
  ASIA_OMSK = 'Asia/Omsk',
  ASIA_ORAL = 'Asia/Oral',
  ASIA_PHNOM_PENH = 'Asia/Phnom_Penh',
  ASIA_PONTIANAK = 'Asia/Pontianak',
  ASIA_PYONGYANG = 'Asia/Pyongyang',
  ASIA_QATAR = 'Asia/Qatar',
  ASIA_QYZYLORDA = 'Asia/Qyzylorda',
  ASIA_RANGOON = 'Asia/Rangoon',
  ASIA_RIYADH = 'Asia/Riyadh',
  ASIA_SAKHALIN = 'Asia/Sakhalin',
  ASIA_SAMARKAND = 'Asia/Samarkand',
  ASIA_SEOUL = 'Asia/Seoul',
  ASIA_SHANGHAI = 'Asia/Shanghai',
  ASIA_SINGAPORE = 'Asia/Singapore',
  ASIA_SREDNEKOLYMSK = 'Asia/Srednekolymsk',
  ASIA_TAIPEI = 'Asia/Taipei',
  ASIA_TASHKENT = 'Asia/Tashkent',
  ASIA_TBILISI = 'Asia/Tbilisi',
  ASIA_TEHRAN = 'Asia/Tehran',
  ASIA_THIMPHU = 'Asia/Thimphu',
  ASIA_TOKYO = 'Asia/Tokyo',
  ASIA_ULAANBAATAR = 'Asia/Ulaanbaatar',
  ASIA_URUMQI = 'Asia/Urumqi',
  ASIA_UST_NERA = 'Asia/Ust-Nera',
  ASIA_VIENTIANE = 'Asia/Vientiane',
  ASIA_VLADIVOSTOK = 'Asia/Vladivostok',
  ASIA_YAKUTSK = 'Asia/Yakutsk',
  ASIA_YEKATERINBURG = 'Asia/Yekaterinburg',
  ASIA_YEREVAN = 'Asia/Yerevan',
  ATLANTIC_AZORES = 'Atlantic/Azores',
  ATLANTIC_BERMUDA = 'Atlantic/Bermuda',
  ATLANTIC_CANARY = 'Atlantic/Canary',
  ATLANTIC_CAPE_VERDE = 'Atlantic/Cape_Verde',
  ATLANTIC_FAROE = 'Atlantic/Faroe',
  ATLANTIC_MADEIRA = 'Atlantic/Madeira',
  ATLANTIC_REYKJAVIK = 'Atlantic/Reykjavik',
  ATLANTIC_SOUTH_GEORGIA = 'Atlantic/South_Georgia',
  ATLANTIC_ST_HELENA = 'Atlantic/St_Helena',
  ATLANTIC_STANLEY = 'Atlantic/Stanley',
  AUSTRALIA_ADELAIDE = 'Australia/Adelaide',
  AUSTRALIA_BRISBANE = 'Australia/Brisbane',
  AUSTRALIA_BROKEN_HILL = 'Australia/Broken_Hill',
  AUSTRALIA_CURRIE = 'Australia/Currie',
  AUSTRALIA_DARWIN = 'Australia/Darwin',
  AUSTRALIA_EUCLA = 'Australia/Eucla',
  AUSTRALIA_HOBART = 'Australia/Hobart',
  AUSTRALIA_LINDEMAN = 'Australia/Lindeman',
  AUSTRALIA_LORD_HOWE = 'Australia/Lord_Howe',
  AUSTRALIA_MELBOURNE = 'Australia/Melbourne',
  AUSTRALIA_PERTH = 'Australia/Perth',
  AUSTRALIA_SYDNEY = 'Australia/Sydney',
  EUROPE_AMSTERDAM = 'Europe/Amsterdam',
  EUROPE_ANDORRA = 'Europe/Andorra',
  EUROPE_ATHENS = 'Europe/Athens',
  EUROPE_BELGRADE = 'Europe/Belgrade',
  EUROPE_BERLIN = 'Europe/Berlin',
  EUROPE_BRATISLAVA = 'Europe/Bratislava',
  EUROPE_BRUSSELS = 'Europe/Brussels',
  EUROPE_BUCHAREST = 'Europe/Bucharest',
  EUROPE_BUDAPEST = 'Europe/Budapest',
  EUROPE_BUSINGEN = 'Europe/Busingen',
  EUROPE_CHISINAU = 'Europe/Chisinau',
  EUROPE_COPENHAGEN = 'Europe/Copenhagen',
  EUROPE_DUBLIN = 'Europe/Dublin',
  EUROPE_GIBRALTAR = 'Europe/Gibraltar',
  EUROPE_GUERNSEY = 'Europe/Guernsey',
  EUROPE_HELSINKI = 'Europe/Helsinki',
  EUROPE_ISLE_OF_MAN = 'Europe/Isle_of_Man',
  EUROPE_ISTANBUL = 'Europe/Istanbul',
  EUROPE_JERSEY = 'Europe/Jersey',
  EUROPE_KALININGRAD = 'Europe/Kaliningrad',
  EUROPE_KIEV = 'Europe/Kiev',
  EUROPE_LISBON = 'Europe/Lisbon',
  EUROPE_LJUBLJANA = 'Europe/Ljubljana',
  EUROPE_LONDON = 'Europe/London',
  EUROPE_LUXEMBOURG = 'Europe/Luxembourg',
  EUROPE_MADRID = 'Europe/Madrid',
  EUROPE_MALTA = 'Europe/Malta',
  EUROPE_MARIEHAMN = 'Europe/Mariehamn',
  EUROPE_MINSK = 'Europe/Minsk',
  EUROPE_MONACO = 'Europe/Monaco',
  EUROPE_MOSCOW = 'Europe/Moscow',
  EUROPE_OSLO = 'Europe/Oslo',
  EUROPE_PARIS = 'Europe/Paris',
  EUROPE_PODGORICA = 'Europe/Podgorica',
  EUROPE_PRAGUE = 'Europe/Prague',
  EUROPE_RIGA = 'Europe/Riga',
  EUROPE_ROME = 'Europe/Rome',
  EUROPE_SAMARA = 'Europe/Samara',
  EUROPE_SAN_MARINO = 'Europe/San_Marino',
  EUROPE_SARAJEVO = 'Europe/Sarajevo',
  EUROPE_SIMFEROPOL = 'Europe/Simferopol',
  EUROPE_SKOPJE = 'Europe/Skopje',
  EUROPE_SOFIA = 'Europe/Sofia',
  EUROPE_STOCKHOLM = 'Europe/Stockholm',
  EUROPE_TALLINN = 'Europe/Tallinn',
  EUROPE_TIRANE = 'Europe/Tirane',
  EUROPE_UZHGOROD = 'Europe/Uzhgorod',
  EUROPE_VADUZ = 'Europe/Vaduz',
  EUROPE_VATICAN = 'Europe/Vatican',
  EUROPE_VIENNA = 'Europe/Vienna',
  EUROPE_VILNIUS = 'Europe/Vilnius',
  EUROPE_VOLGOGRAD = 'Europe/Volgograd',
  EUROPE_WARSAW = 'Europe/Warsaw',
  EUROPE_ZAGREB = 'Europe/Zagreb',
  EUROPE_ZAPOROZHYE = 'Europe/Zaporozhye',
  EUROPE_ZURICH = 'Europe/Zurich',
  INDIAN_ANTANANARIVO = 'Indian/Antananarivo',
  INDIAN_CHAGOS = 'Indian/Chagos',
  INDIAN_CHRISTMAS = 'Indian/Christmas',
  INDIAN_COCOS = 'Indian/Cocos',
  INDIAN_COMORO = 'Indian/Comoro',
  INDIAN_KERGUELEN = 'Indian/Kerguelen',
  INDIAN_MAHE = 'Indian/Mahe',
  INDIAN_MALDIVES = 'Indian/Maldives',
  INDIAN_MAURITIUS = 'Indian/Mauritius',
  INDIAN_MAYOTTE = 'Indian/Mayotte',
  INDIAN_REUNION = 'Indian/Reunion',
  PACIFIC_APIA = 'Pacific/Apia',
  PACIFIC_AUCKLAND = 'Pacific/Auckland',
  PACIFIC_BOUGAINVILLE = 'Pacific/Bougainville',
  PACIFIC_CHATHAM = 'Pacific/Chatham',
  PACIFIC_CHUUK = 'Pacific/Chuuk',
  PACIFIC_EASTER = 'Pacific/Easter',
  PACIFIC_EFATE = 'Pacific/Efate',
  PACIFIC_ENDERBURY = 'Pacific/Enderbury',
  PACIFIC_FAKAOFO = 'Pacific/Fakaofo',
  PACIFIC_FIJI = 'Pacific/Fiji',
  PACIFIC_FUNAFUTI = 'Pacific/Funafuti',
  PACIFIC_GALAPAGOS = 'Pacific/Galapagos',
  PACIFIC_GAMBIER = 'Pacific/Gambier',
  PACIFIC_GUADALCANAL = 'Pacific/Guadalcanal',
  PACIFIC_GUAM = 'Pacific/Guam',
  PACIFIC_HONOLULU = 'Pacific/Honolulu',
  PACIFIC_JOHNSTON = 'Pacific/Johnston',
  PACIFIC_KIRITIMATI = 'Pacific/Kiritimati',
  PACIFIC_KOSRAE = 'Pacific/Kosrae',
  PACIFIC_KWAJALEIN = 'Pacific/Kwajalein',
  PACIFIC_MAJURO = 'Pacific/Majuro',
  PACIFIC_MARQUESAS = 'Pacific/Marquesas',
  PACIFIC_MIDWAY = 'Pacific/Midway',
  PACIFIC_NAURU = 'Pacific/Nauru',
  PACIFIC_NIUE = 'Pacific/Niue',
  PACIFIC_NORFOLK = 'Pacific/Norfolk',
  PACIFIC_NOUMEA = 'Pacific/Noumea',
  PACIFIC_PAGO_PAGO = 'Pacific/Pago_Pago',
  PACIFIC_PALAU = 'Pacific/Palau',
  PACIFIC_PITCAIRN = 'Pacific/Pitcairn',
  PACIFIC_POHNPEI = 'Pacific/Pohnpei',
  PACIFIC_PORT_MORESBY = 'Pacific/Port_Moresby',
  PACIFIC_RAROTONGA = 'Pacific/Rarotonga',
  PACIFIC_SAIPAN = 'Pacific/Saipan',
  PACIFIC_TAHITI = 'Pacific/Tahiti',
  PACIFIC_TARAWA = 'Pacific/Tarawa',
  PACIFIC_TONGATAPU = 'Pacific/Tongatapu',
  PACIFIC_WAKE = 'Pacific/Wake',
  PACIFIC_WALLIS = 'Pacific/Wallis'
}

/*
 * All genders a person can choose
 */
export enum NichandleGender {
  FEMALE = 'female',
  MALE = 'male'
}

/**
 * A contract
 */
export interface OrderContract {
  content: string
  name: string
  url: string
}

/*
 * 
 */
export enum OrderCurrencyCode {
  AUD = 'AUD',
  CAD = 'CAD',
  CZK = 'CZK',
  EUR = 'EUR',
  GBP = 'GBP',
  LTL = 'LTL',
  MAD = 'MAD',
  N_A = 'N/A',
  PLN = 'PLN',
  SGD = 'SGD',
  TND = 'TND',
  USD = 'USD',
  XOF = 'XOF',
  POINTS = 'points'
}

/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  currencyCode: OrderCurrencyCode
  text: string
  value: any
}

/*
 * Detailed renewal type of a service
 */
export enum ServiceRenewalType {
  AUTOMATICFORCEDPRODUCT = 'automaticForcedProduct',
  AUTOMATICV2012 = 'automaticV2012',
  AUTOMATICV2014 = 'automaticV2014',
  AUTOMATICV2016 = 'automaticV2016',
  MANUAL = 'manual',
  ONESHOT = 'oneShot',
  OPTION = 'option'
}

/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  automatic: boolean
  deleteAtExpiration: boolean
  forced: boolean
  manualPayment?: boolean
  period?: number
}

/*
 * 
 */
export enum ServiceState {
  EXPIRED = 'expired',
  INCREATION = 'inCreation',
  OK = 'ok',
  PENDINGDEBT = 'pendingDebt',
  UNPAID = 'unPaid'
}

/**
 * Details about a Service
 */
export interface ServicesService {
  canDeleteAtExpiration: boolean
  contactAdmin: string
  contactBilling: string
  contactTech: string
  creation: string
  domain: string
  engagedUpTo?: string
  expiration: string
  possibleRenewPeriod?: number[]
  renew?: ServiceRenewType
  renewalType: ServiceRenewalType
  serviceId: number
  status: ServiceState
}

/**
 * Spare properties
 */
export interface SparetelephonyTelephonySpare {
  brand: string
  macAddress: string
  protocol: TelephonyProtocol
}

/**
 * Abbreviated number
 */
export interface TelephonyAbbreviatedNumber {
  abbreviatedNumber: number
  destinationNumber: any
  name: string
  surname: string
}

/**
 * Abbreviated number
 */
export interface TelephonyAbbreviatedNumberGroup {
  abbreviatedNumber: number
  destinationNumber: any
  name: string
  surname: string
}

/**
 * Informations related to a line offer
 */
export interface TelephonyAccessoryOffer {
  description?: string
  name: string
  price: OrderPrice
  url?: string
}

/*
 * Action for list antihack
 */
export enum TelephonyAntihackAction {
  AUTHORIZE_ALL = 'AUTHORIZE_ALL',
  AUTHORIZE_ONE_NUMBER = 'AUTHORIZE_ONE_NUMBER',
  BLOCK_ALL = 'BLOCK_ALL',
  BLOCK_ONE_NUMBER = 'BLOCK_ONE_NUMBER'
}

/**
 * The web access for your cloudpabx
 */
export interface TelephonyBannerAccess {
  creationDate: string
  id: number
  url: string
}

/*
 * Document suffix
 */
export enum TelephonyBillDocument {
  CSV = 'csv',
  PDF = 'pdf',
  RECEIVED_CSV = 'received.csv',
  XML = 'xml'
}

/**
 * Billing Account
 */
export interface TelephonyBillingAccount {
  allowedOutplan: OrderPrice
  billingAccount: string
  creditThreshold: OrderPrice
  currentOutplan: OrderPrice
  description: string
  hiddenExternalNumber: boolean
  overrideDisplayedNumber: boolean
  securityDeposit: OrderPrice
  status: TelephonyBillingAccountStatus
  trusted: boolean
}

/*
 * Status of billing account
 */
export enum TelephonyBillingAccountStatus {
  CLOSED = 'closed',
  DELETED = 'deleted',
  ENABLED = 'enabled',
  EXPIRED = 'expired'
}

/*
 * Billing progress status
 */
export enum TelephonyBillStatus {
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Call diagnostic analyze structure on metric performance values
 */
export interface TelephonyCallDiagnosticCallQuality {
  callId: string
  codec: TelephonyCallDiagnosticCodec
  flowId: number
  ipDst: string
  ipSrc: string
  maxDelay: any
  maxJitter: any
  mos: number
  packets: number
  portDst: number
  portSrc: number
  rtpLost: number
  timestamp: string
}

/*
 * SS7 ISUP cause codes
 */
export type TelephonyCallDiagnosticCause = '1' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '1a' | '1b' | '1c' | '1d' | '1e' | '1f' | '2' | '22' | '26' | '27' | '28' | '29' | '2a' | '2b' | '2c' | '2e' | '2f' | '3' | '30' | '31' | '32' | '33' | '34' | '35' | '37' | '39' | '3a' | '3e' | '3f' | '4' | '41' | '42' | '45' | '46' | '4f' | '5' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '5a' | '5b' | '5f' | '6' | '60' | '61' | '62' | '63' | '64' | '65' | '66' | '67' | '6e' | '6f' | '7' | '7f' | '8' | '9'

/**
 * Call diagnostic analyze structure call cdrs
 */
export interface TelephonyCallDiagnosticCdrs {
  basic: TelephonyCallDiagnosticCdrsBasic
  timestamp: string
}

/**
 * Call diagnostic analyze structure call cdrs
 */
export interface TelephonyCallDiagnosticCdrsBasic {
  cause: TelephonyCallDiagnosticCause
  causeDescription: string
  releaseLocation: TelephonyReleaseLocation
}

/*
 * Enumeration providing payload type to Name of RTP audio video profile
 */
export enum TelephonyCallDiagnosticCodec {
  G722 = 'G722',
  G729 = 'G729',
  PCMA = 'PCMA',
  PCMU = 'PCMU'
}

/**
 * Reporting of the current diagnostic
 */
export interface TelephonyCallDiagnosticReporting {
  message: string
}

/**
 * Advanced diagnostic of the voice call
 */
export interface TelephonyCallDiagnostics {
  callQuality: TelephonyCallDiagnosticCallQuality[]
  cdrs: TelephonyCallDiagnosticCdrs[]
  reporting: TelephonyCallDiagnosticReporting[]
  sip: TelephonyCallDiagnosticSip[]
  status: TelephonyCallDiagnosticStatus
}

/**
 * Call diagnostic analyze structure on sip signal
 */
export interface TelephonyCallDiagnosticSip {
  headers: string
  requestMethod?: string
  response?: string
  timestamp: string
}

/*
 * Information extraction status
 */
export enum TelephonyCallDiagnosticStatus {
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Automatic Call made by Call Generator on this line
 */
export interface TelephonyCallsGenerated {
  answerDatetime?: string
  application?: string
  applicationResult?: string
  billingNumber: any
  callCreatedDatetime?: string
  callDuration?: number
  callee?: any
  caller?: any
  dtmf?: string
  hangupCause?: TelephonyCallsGeneratorHangupCause
  hangupDatetime?: string
  identifier: string
  transferFrom?: string
  uuid: string
}

/*
 * Types of dialplan available for callsGenerator.
 */
export enum TelephonyCallsGeneratorDialplan {
  PLAYAUDIOFILE = 'PlayAudioFile',
  PLAYAUDIOFILEANDTRANSFERCALL = 'PlayAudioFileAndTransferCall',
  READTEXT = 'ReadText',
  REQUESTAPPOINTMENTCONFIRMATION = 'RequestAppointmentConfirmation',
  REQUESTAPPOINTMENTCONFIRMATIONWITHTRANSFER = 'RequestAppointmentConfirmationWithTransfer'
}

/*
 * Types of hangupCause for generated calls.
 */
export enum TelephonyCallsGeneratorHangupCause {
  ACCESSINFORMATIONDISCARDED = 'AccessInformationDiscarded',
  ALLOTTEDTIMEOUT = 'AllottedTimeout',
  ATTENDEDTRANSFER = 'AttendedTransfer',
  BLINDTRANSFER = 'BlindTransfer',
  CALLAWARDEDBEING = 'CallAwardedbeing',
  CHANNELTYPENOTIMPLEMENTED = 'ChannelTypeNotImplemented',
  CHANNELUNACCEPTABLE = 'ChannelUnacceptable',
  CODESIP403BEARERCAPABILITYNOTAUTHORIZED = 'CodeSip403BearerCapabilityNotAuthorized',
  CODESIP403INCOMINGCALLSBARRED = 'CodeSip403IncomingCallsBarred',
  CODESIP403OUTGOINGCALLSBARRED = 'CodeSip403OutgoingCallsBarred',
  CODESIP404NOROUTETODESTINATION = 'CodeSip404NoRouteToDestination',
  CODESIP404NOROUTETOSPECIFIEDTRANSITNETWORK = 'CodeSip404NoRouteToSpecifiedTransitNetwork',
  CODESIP404UNALLOCATEDNUMBER = 'CodeSip404UnallocatedNumber',
  CODESIP408NOUSERRESPONDING = 'CodeSip408NoUserResponding',
  CODESIP410NUMBERCHANGED = 'CodeSip410NumberChanged',
  CODESIP410REDIRECTIONTONEWDESTINATION = 'CodeSip410RedirectionToNewDestination',
  CODESIP480NOANSWERFROMUSER = 'CodeSip480NoAnswerFromUser',
  CODESIP480NORMALUNSPECIFIED = 'CodeSip480NormalUnspecified',
  CODESIP480SUBSCRIBERABSENT = 'CodeSip480SubscriberAbsent',
  CODESIP483EXCHANGEROUTINGERROR = 'CodeSip483ExchangeRoutingError',
  CODESIP484INVALIDNUMBERFORMATADDRESSINCOMPLETE = 'CodeSip484InvalidNumberFormatAddressIncomplete',
  CODESIP486USERBUSY = 'CodeSip486UserBusy',
  CODESIP487ORIGINATORCANCEL = 'CodeSip487OriginatorCancel',
  CODESIP488INCOMPATIBLEDESTINATION = 'CodeSip488IncompatibleDestination',
  CODESIP488BEARERCAPABILITYNOTIMPLEMENTED = 'CodeSip488bearerCapabilityNotImplemented',
  CODESIP501FACILITIESREJECTED = 'CodeSip501FacilitiesRejected',
  CODESIP501REQUESTEDFACILITYNOTIMPLEMENTED = 'CodeSip501RequestedFacilityNotImplemented',
  CODESIP501SERVICEOROPTIONNOTIMPLEMENTEDUNSPECIFIED = 'CodeSip501ServiceOrOptionNotImplementedUnspecified',
  CODESIP502DESTINATIONOUTOFORDER = 'CodeSip502DestinationOutOfOrder',
  CODESIP503BEARERCAPABILITYNOTPRESENTLYAVAILABLE = 'CodeSip503BearerCapabilityNotPresentlyAvailable',
  CODESIP503NETWORKOUTOFORDER = 'CodeSip503NetworkOutOfOrder',
  CODESIP503NOCIRCUITCHANNELAVAILABLE = 'CodeSip503NoCircuitChannelAvailable',
  CODESIP503REQUESTEDCIRCUITORCHANNELNOTAVAILABLE = 'CodeSip503RequestedCircuitOrChannelNotAvailable',
  CODESIP503SWITCHINGEQUIPMENTCONGESTION = 'CodeSip503SwitchingEquipmentCongestion',
  CODESIP503TEMPORARYFAILURE = 'CodeSip503TemporaryFailure',
  CODESIP504RECOVERYONTIMEREXPIRY = 'CodeSip504RecoveryOnTimerExpiry',
  CODESIP603CALLREJECTED = 'CodeSip603CallRejected',
  CRASH = 'Crash',
  GATEWAYDOWN = 'GatewayDown',
  INFORMATIONELEMENTORPARAMETERNONEXISTENTORNOTIMPLEMENTED = 'InformationElementOrParameterNonExistentOrNotImplemented',
  INTERWORKINGUNSPECIFIED = 'InterworkingUnspecified',
  INVALIDCALLREFERENCEVALUE = 'InvalidCallReferenceValue',
  INVALIDINFORMATIONELEMENTCONTENTS = 'InvalidInformationElementContents',
  INVALIDMESSAGEUNSPECIFIED = 'InvalidMessageUnspecified',
  LOSERACE = 'LoseRace',
  MANAGERREQUEST = 'ManagerRequest',
  MANDATORYINFORMATIONELEMENTISMISSING = 'MandatoryInformationElementIsMissing',
  MEDIATIMEOUT = 'MediaTimeout',
  MESSAGENOTCOMPATIBLEWITHCALLSTATE = 'MessageNotCompatibleWithCallState',
  MESSAGENOTCOMPATIBLEWITHCALLSTATEORMESSAGETYPENONEXISTENTORNOTIMPLEMENTED = 'MessageNotCompatibleWithCallStateOrMessageTypeNonExistentOrNotImplemented',
  MESSAGETYPENONEXISTENTORNOTIMPLEMENTED = 'MessageTypeNonExistentOrNotImplemented',
  NORMALCALLCLEARING = 'NormalCallClearing',
  PARAMETERNONEXISTENTORNOTIMPLEMENTEDPASSEDONNATIONALUSE = 'ParameterNonExistentOrNotImplementedPassedOnNationalUse',
  PICKEDOFF = 'PickedOff',
  PREEMPTED = 'PreEmpted',
  PROGRESSTIMEOUT = 'ProgressTimeout',
  PROTOCOLERRORUNSPECIFIED = 'ProtocolErrorUnspecified',
  REQUESTEDFACILITYNOTSUBSCRIBED = 'RequestedFacilityNotSubscribed',
  RESPONSETOSTATUSINQUIRY = 'ResponseToStatusInquiry',
  SERVICEOROPTIONNOTAVAILABLEUNSPECIFIED = 'ServiceOrOptionNotAvailableUnspecified',
  SYSTEMSHUTDOWN = 'SystemShutdown',
  UNKNOWNORCALLUNFINISHED = 'UnknownOrCallUnfinished',
  UNSPECIFIEDNOOTHERCAUSECODESAPPLICABLE = 'UnspecifiedNoOtherCauseCodesApplicable',
  USERCHALLENGE = 'UserChallenge',
  USERNOTREGISTERED = 'UserNotRegistered'
}

/**
 * CarrierSip
 */
export interface TelephonyCarrierSip {
  description: string
  serviceName: string
  serviceType: TelephonyTypeService
}

/**
 * The information about the Carrier SIP cluster attached to your service
 */
export interface TelephonyCarrierSipClusterInfo {
  name: string
  zones: TelephonyCarrierSipClusterZone[]
}

/**
 * The information about a carrier sip cluster zone
 */
export interface TelephonyCarrierSipClusterZone {
  mediaIps: string[]
  region: TelephonyCarrierSipClusterZoneRegion
}

/*
 * Carrier SIP Zone Regions
 */
export enum TelephonyCarrierSipClusterZoneRegion {
  RBX = 'rbx',
  SBG = 'sbg'
}

/**
 * Carrier SIP Endpoints
 */
export interface TelephonyCarrierSipCustomerEndpoint {
  id: number
  ip: string
  port: number
  priority: number
  protocol: TelephonyCarrierSipEndpointProtocol
  weight: number
}

/**
 * Carrier SIP Properties
 */
export interface TelephonyCarrierSipDetails {
  description: string
  maxCallsPerSecond: number
  maxConcurrentCalls: number
}

/*
 * Protocol of a carrier sip trunk customer endpoint
 */
export enum TelephonyCarrierSipEndpointProtocol {
  TCP = 'tcp',
  TLS = 'tls',
  UDP = 'udp'
}

/**
 * Represents a city
 */
export interface TelephonyCity {
  administrationCode?: string
  name: string
  zipCode: string
}

/**
 * User of the click 2 call
 */
export interface TelephonyClick2CallUser {
  creationDateTime: string
  id: number
  login: string
}

/**
 * Conference
 */
export interface TelephonyConference {
  description: string
  offers: string[]
  serviceName: string
  serviceType: TelephonyTypeService
}

/**
 * List past conferences on your number
 */
export interface TelephonyConferenceHistory {
  countConnections: number
  countParticipants: number
  dateBegin: string
  dateEnd: string
  duration: number
  events: TelephonyConferenceHistoryEvent[]
  id: number
  recordUrl?: string
}

/**
 * Event of a conference (participant left/join)
 */
export interface TelephonyConferenceHistoryEvent {
  callerid: string
  date: string
  type: string
}

/**
 * Conference realtime informations structure
 */
export interface TelephonyConferenceInformations {
  dateStart: string
  locked: boolean
  membersCount: number
}

/*
 * Available language for your conference
 */
export enum TelephonyConferenceLanguage {
  DE = 'de',
  EN = 'en',
  ES = 'es',
  FR = 'fr',
  IT = 'it'
}

/**
 * Conference service
 */
export interface TelephonyConferenceParticipants {
  arrivalDateTime: string
  callerName: string
  callerNumber: string
  energy: number
  floor: boolean
  hear: boolean
  id: number
  speak: boolean
  talking: boolean
}

/**
 * Conference properties
 */
export interface TelephonyConferenceProperties {
  announceFile: boolean
  announceFilename?: string
  announceSoundId?: number
  anonymousRejection: boolean
  enterMuted: boolean
  eventsChannel: string
  language: TelephonyConferenceLanguage
  pin: string
  recordStatus: boolean
  reportEmail?: string
  reportStatus: TelephonyConferenceReportStatus
  whiteLabelReport: boolean
}

/*
 * Conference report receiver
 */
export enum TelephonyConferenceReportStatus {
  CUSTOMER = 'customer',
  NONE = 'none',
  OTHER = 'other'
}

/**
 * List public web access of your conference
 */
export interface TelephonyConferenceWebAccess {
  id: number
  type: TelephonyConferenceWebAccessType
  url: string
}

/*
 * Webaccess type for your conference
 */
export enum TelephonyConferenceWebAccessType {
  READ = 'read',
  WRITE = 'write'
}

/**
 * The outplan notifications configured for your billing account
 */
export interface TelephonyConsumptionThreshold {
  block: TelephonyOutplanNotificationBlock
  id: number
  notifyEmail: string
  percentage: any
}

/**
 * Contact informations structure
 */
export interface TelephonyContact {
  address?: string
  city?: string
  country?: CoreTypesCountry
  email?: string
  firstname?: string
  name?: string
  organisation?: string
  phone?: string
  zip?: string
}

/*
 * Export file format
 */
export enum TelephonyContactsExportFormats {
  CSV = 'csv'
}

/**
 * A ip value associated to a datetime
 */
export interface TelephonyDatetimeAndIpvalue {
  datetime: string
  ip?: string
}

/**
 * DDI (direct dial-in) service
 */
export interface TelephonyDdi {
  description: string
  destination?: any
  featureType: TelephonyType
  serviceName: string
  serviceType: TelephonyTypeService
}

/**
 * 
 */
export interface TelephonyDefaultSipDomains {
  country: TelephonyNumberCountry
  currentDomain: string
  list: string[]
  productType: TelephonySipDomainProductType
}

/**
 * Detailed informations related to this number
 */
export interface TelephonyDetailedRateCodeInformation {
  cancelLimitDatetime?: string
  effectiveDatetime?: string
  pricePerCallWithoutTax: OrderPrice
  pricePerMinuteWithoutTax: OrderPrice
  rateCode: string
  repaymentPricePerCallWithoutTax: OrderPrice
  repaymentPricePerMinuteWithoutTax: OrderPrice
  updateRateCodePriceWithoutTax?: OrderPrice
}

/**
 * Relevant informations of the service detected from the MOS or the signal leg in SIP/MGCP protocol.
 */
export interface TelephonyDiagnosticReport {
  callId: string
  category: TelephonyDiagnosticReportCategory
  datetime: string
  description: string
  level: TelephonyDiagnosticReportLevel
  name: string
  report: string
}

/*
 * Source of the diagnostic report
 */
export enum TelephonyDiagnosticReportCategory {
  DPI = 'dpi',
  SIGNAL = 'signal'
}

/*
 * The index interval
 */
export type TelephonyDiagnosticReportIndex = '2 days ago' | '3 days ago' | 'today' | 'yesterday'

/*
 * Level of the diagnostic report
 */
export enum TelephonyDiagnosticReportLevel {
  DEBUG = 'debug',
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn'
}

/**
 * Directory Informations
 */
export interface TelephonyDirectoryHeadingPJ {
  apeCode: string
  apeDescription: string
  directoryServiceCode: number
  directoryServiceDescription: string
  notification: string
}

/**
 * Directory Informations
 */
export interface TelephonyDirectoryInfo {
  address: string
  addressExtra: string
  ape: string
  areaCode: number
  birthDate?: string
  cedex: string
  city: string
  country: string
  directoryServiceCode: string
  displayFirstName: boolean
  displayMarketingDirectory: boolean
  displayOnlyCity: boolean
  displaySearchReverse: boolean
  displayUniversalDirectory: boolean
  email: string
  firstName: string
  gender?: NichandleGender
  inseeCode: number
  legalForm: string
  lineDescription: string
  modificationDate: string
  modificationType: string
  name: string
  number: string
  occupation: string
  PJSocialNomination: string
  postBox: string
  postCode: string
  receivePJDirectory: boolean
  siret: string
  socialNomination: string
  socialNominationExtra: string
  status: string
  urbanDistrict: string
  wayName: string
  wayNumber: string
  wayNumberExtra: string
  wayType: string
}

/**
 * Directory way type
 */
export interface TelephonyDirectoryWayType {
  abbreviatedName: string
  wayName: string
}

/**
 * Document linked to a telephony service
 */
export interface TelephonyDocument {
  description?: string
  id: string
  name: string
  size: number
  url: string
  validationDate?: string
}

/**
 * OVH easy calls queues
 */
export interface TelephonyEasyHunting {
  anonymousRejection: boolean
  description: string
  featureType: TelephonyType
  isCCS: boolean
  maxWaitTime: number
  queueSize: number
  serviceName: string
  serviceType: TelephonyTypeService
  showCallerNumber: TelephonyOvhPabxDialplanNumberPresentation
  statusIvrEnabled: boolean
  strategy: TelephonyOvhPabxHuntingQueueStrategy
  toneOnClosing?: number
  toneOnHold?: number
  toneOnOpening?: number
  voicemail?: any
}

/**
 * Screenlist condition
 */
export interface TelephonyEasyHuntingScreenListsConditions {
  callerIdNumber?: string
  conditionId: number
  destinationNumber?: string
  screenListType: TelephonyOvhPabxDialplanExtensionConditionScreenListType
}

/**
 * Easy hunting screen lists conditions options
 */
export interface TelephonyEasyHuntingScreenListsConditionsSettings {
  status: TelephonyEasyHuntingScreenListsConditionsStatus
}

/*
 * Screenlist condition type
 */
export enum TelephonyEasyHuntingScreenListsConditionsStatus {
  DISABLED = 'disabled',
  INCOMINGBLACKLIST = 'incomingBlackList',
  INCOMINGWHITELIST = 'incomingWhiteList'
}

/**
 * Easy hunting time conditions
 */
export interface TelephonyEasyHuntingTimeConditions {
  conditionId: number
  policy: TelephonyTimeConditionsPolicy
  timeFrom: any
  timeTo: any
  weekDay: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay
}

/**
 * Easy hunting time conditions options
 */
export interface TelephonyEasyHuntingTimeConditionsSettings {
  enable: boolean
  slot1Number?: any
  slot1Type?: TelephonyTimeConditionsSettingsForwardType
  slot2Number?: any
  slot2Type?: TelephonyTimeConditionsSettingsForwardType
  slot3Number?: any
  slot3Type?: TelephonyTimeConditionsSettingsForwardType
  unavailableNumber?: any
  unavailableType?: TelephonyTimeConditionsSettingsForwardType
}

/**
 * Easy/Mini PABX agent
 */
export interface TelephonyEasyMiniPabxHuntingAgent {
  agentNumber: any
  logged: boolean
  noReplyTimer: number
  position: number
}

/*
 * Calls dispatching pattern
 */
export enum TelephonyEasyMiniPabxHuntingPattern {
  ALL_AT_ONCE = 'all-at-once',
  CUMULATED = 'cumulated',
  SEQUENTIAL = 'sequential'
}

/*
 * Calls dispatching startegy
 */
export enum TelephonyEasyMiniPabxHuntingStrategy {
  CYCLIC = 'cyclic',
  LEASTIDLESINCELASTCALL = 'leastIdleSinceLastCall',
  LINEAR = 'linear',
  MOSTIDLESINCELASTCALL = 'mostIdleSinceLastCall',
  MOSTIDLESINCELOGGING = 'mostIdleSinceLogging',
  PARALLEL = 'parallel',
  RANDOM = 'random'
}

/**
 * EasyPabx
 */
export interface TelephonyEasyPabx {
  description: string
  featureType: TelephonyType
  serviceName: string
  serviceType: TelephonyTypeService
}

/**
 * EasyPabx Hunting
 */
export interface TelephonyEasyPabxHunting {
  anonymousCallRejection: boolean
  name: string
  noReplyTimer: number
  numberOfCalls: number
  pattern: TelephonyEasyMiniPabxHuntingPattern
  strategy: TelephonyEasyMiniPabxHuntingStrategy
  toneOnClosure: boolean
  toneOnClosureSoundId?: number
  toneOnHold: boolean
  toneOnHoldSoundId?: number
  toneRingback: boolean
  toneRingbackSoundId?: number
  voicemail?: any
}

/**
 * Task informations about an entreprise
 */
export interface TelephonyEntrepriseNumberInformations {
  address?: string
  ape?: string
  brand?: string
  entrepriseNumber: string
  isValid: boolean
  name: string
  siren?: string
}

/**
 * Task about getting entreprise informations
 */
export interface TelephonyEntrepriseNumberInformationsTask {
  informations: TelephonyEntrepriseNumberInformations
  status: TelephonyTaskStatus
}

/**
 * Events triggered by the line
 */
export interface TelephonyEvent {
  calledIdentifier: string
  callingIdentifier: string
  dateTime: string
  direction: TelephonyRealtimeEventDirection
  duration: number
  eventType: TelephonyRealtimeEventType
  id: string
  protocol: TelephonyRealtimeEventProtocol
}

/**
 * Callback url for each event
 */
export interface TelephonyEventCallback {
  emailError?: string
  url?: string
}

/**
 * Token associated to the service for live event
 */
export interface TelephonyEventToken {
  token: string
}

/**
 * Fax service
 */
export interface TelephonyFax {
  description: string
  notifications?: TelephonyLineNotificationsOptions
  offers: string[]
  serviceName: string
  serviceType: TelephonyTypeService
}

/**
 * Fax campaigns
 */
export interface TelephonyFaxCampaign {
  countFailed: number
  countSuccess: number
  countTotal: number
  dateEnd?: string
  dateStart?: string
  id: number
  name: string
  reference: string
  status: string
}

/**
 * Detail of a fax campaign
 */
export interface TelephonyFaxCampaignDetail {
  failed: any
  success: any
  todo: any
}

/*
 * Available recipients method for fax campaign
 */
export enum TelephonyFaxCampaignRecipientsType {
  DOCUMENT = 'document',
  LIST = 'list'
}

/*
 * Available sending method for fax campaign
 */
export enum TelephonyFaxCampaignSendType {
  AUTOMATIC = 'automatic',
  MANUAL = 'manual',
  SCHEDULED = 'scheduled'
}

/**
 * Fax delivery record
 */
export interface TelephonyFaxConsumption {
  called?: any
  calling?: any
  consumptionId: number
  creationDatetime: string
  pages: number
  priceWithoutTax: OrderPrice
  wayType: TelephonyFaxConsumptionWayType
}

/*
 * Consumption way type
 */
export enum TelephonyFaxConsumptionWayType {
  RECEIVED = 'received',
  SENT = 'sent'
}

/*
 * Format of the notification mail. "html" will include a preview image of the fax
 */
export enum TelephonyFaxMailFormat {
  HTML = 'html',
  TEXT = 'text'
}

/**
 * Fax properties
 */
export interface TelephonyFaxProperties {
  callNumber: string
  countryCode: string
  faxMaxCall: TelephonyFaxSendingTries
  faxQuality: TelephonyFaxQuality
  faxTagLine: string
  fromEmail: string
  fromName: string
  mailFormat: TelephonyFaxMailFormat
  receiver: string
  redirectionEmail: string[]
  rejectAnonymous: boolean
  sender: string
}

/*
 * Available quality for fax documents
 */
export enum TelephonyFaxQuality {
  BEST = 'best',
  HIGH = 'high',
  NORMAL = 'normal'
}

/**
 * Fax ScreenLists
 */
export interface TelephonyFaxScreen {
  blacklistedNumbers?: string[]
  blacklistedTSI?: string[]
  callNumber: string
  countryCode: string
  filteringList?: TelephonyFaxScreenListType
  serviceName: string
  whitelistedNumbers?: string[]
  whitelistedTSI?: string[]
}

/*
 * Type of screen list
 */
export enum TelephonyFaxScreenListType {
  BLACKLIST = 'blacklist',
  NO = 'no',
  WHITELIST = 'whitelist'
}

/*
 * Number of tries when sending a fax
 */
export type TelephonyFaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/**
 * Plug & Phone function key
 */
export interface TelephonyFunctionKey {
  default?: string
  function?: string
  keyNum: number
  label: string
  parameter?: string
  type: string
}

/**
 * Time conditions capable services
 */
export interface TelephonyGenericScreen {
  serviceName: string
}

/**
 * Informations related to a telephone offer
 */
export interface TelephonyHardwareOffer {
  description?: string
  name: string
  price: OrderPrice
  url?: string
}

/**
 * Previous billed consumptions
 */
export interface TelephonyHistoryConsumption {
  date: string
  price: OrderPrice
  priceOutplan: OrderPrice
  status: TelephonyBillStatus
}

/**
 * Previous repayment bill
 */
export interface TelephonyHistoryRepaymentConsumption {
  billingNumber: string
  date: string
  price: OrderPrice
  status: TelephonyBillStatus
}

/**
 * Previous tollfree bill
 */
export interface TelephonyHistoryTollfreeConsumption {
  date: string
  price: OrderPrice
  status: TelephonyBillStatus
}

/**
 * Line service
 */
export interface TelephonyLine {
  canChangePassword: boolean
  description: string
  getPublicOffer: TelephonyLineOffer
  infrastructure: string
  isAttachedToOtherLinesPhone: boolean
  notifications?: TelephonyLineNotificationsOptions
  offers: string[]
  serviceName: string
  serviceType: TelephonyTypeService
  simultaneousLines: number
}

/*
 * The blocking mode of line calls
 */
export enum TelephonyLineBlockingMode {
  BOTH = 'both',
  INCOMING = 'incoming',
  OUTGOING = 'outgoing'
}

/*
 * Types of statistics available for a line.
 */
export enum TelephonyLineNotificationsLogsFrequency {
  NEVER = 'Never',
  ONCE_A_DAY = 'Once a day',
  TWICE_A_DAY = 'Twice a day'
}

/**
 * Error logging notifications options
 */
export interface TelephonyLineNotificationsLogsOptions {
  email?: string
  frequency?: TelephonyLineNotificationsLogsFrequency
  sendIfNull?: boolean
}

/**
 * 
 */
export interface TelephonyLineNotificationsOptions {
  logs?: TelephonyLineNotificationsLogsOptions
}

/**
 * Informations related to a line offer
 */
export interface TelephonyLineOffer {
  description: string
  name: string
  price?: OrderPrice
}

/**
 * Informations related to a line offer
 */
export interface TelephonyLineOffersAndContracts {
  contracts: OrderContract[]
  offers: TelephonyLineOffer[]
}

/*
 * The nature of the call forward
 */
export enum TelephonyLineOptionForwardNatureType {
  FAX = 'fax',
  NUMBER = 'number',
  VOICEMAIL = 'voicemail'
}

/*
 * Intercom configuration
 */
export enum TelephonyLineOptionIntercom {
  NO = 'no',
  PREFIXED = 'prefixed',
  YES = 'yes'
}

/*
 * The language of the line
 */
export enum TelephonyLineOptionLanguage {
  DUTCH = 'Dutch',
  ENGLISH_UK = 'English (UK)',
  FRENCH = 'French',
  FRENCH_BE = 'French (BE)',
  GERMAN = 'German',
  ITALIAN = 'Italian',
  SPANISH = 'Spanish'
}

/**
 * Line options
 */
export interface TelephonyLineOptions {
  absentSubscriber: boolean
  anonymousCallRejection: boolean
  callRestrictionIncoming: boolean
  callRestrictionOutgoing: boolean
  callWaiting: boolean
  codecs: string
  defaultVoicemail: any
  displayNumber: any
  domain: string
  doNotDisturb: boolean
  forwardBackup: boolean
  forwardBackupNature: TelephonyLineOptionForwardNatureType
  forwardBackupNumber: any
  forwardBusy: boolean
  forwardBusyNature: TelephonyLineOptionForwardNatureType
  forwardBusyNumber: any
  forwardNoReply: boolean
  forwardNoReplyDelay: number
  forwardNoReplyNature: TelephonyLineOptionForwardNatureType
  forwardNoReplyNumber: any
  forwardUnconditional: boolean
  forwardUnconditionalNature: TelephonyLineOptionForwardNatureType
  forwardUnconditionalNumber: any
  identificationRestriction: boolean
  intercom: TelephonyLineOptionIntercom
  ipRestrictions: string[]
  language: TelephonyLineOptionLanguage
  lockOutCall: boolean
  lockOutCallPassword?: string
  recordOutgoingCallsBeta: boolean
  toneOnCallWaitingSoundId?: number
  toneOnHoldSoundId?: number
  toneRingbackSoundId?: number
  voicemailExternalNumber: any
  voicemailInternalNumber: string
}

/**
 * Informations related to phone capabilities
 */
export interface TelephonyLinePhone {
  brand: string
  description: string
  maxline: number
  price: OrderPrice
  protocol: TelephonyProtocol
}

/**
 * Informations related to associable phone capabilities
 */
export interface TelephonyLinePhoneAssociable {
  associatedLines: TelephonyLinePhoneAssociableConfiguredLines[]
  brand: string
  maxLines: number
  protocol: TelephonyProtocol
}

/**
 * Current lines configured on the phone
 */
export interface TelephonyLinePhoneAssociableConfiguredLines {
  description: string
  serviceName: string
}

/*
 * Types of statistics available for a line.
 */
export enum TelephonyLineStatisticsType {
  MAXDELAY = 'maxDelay',
  MAXJITTER = 'maxJitter',
  RTPMOS = 'rtpMos',
  SUMRTPLOST = 'sumRtpLost'
}

/**
 * MiniPabx
 */
export interface TelephonyMiniPabx {
  description: string
  featureType: TelephonyType
  serviceName: string
  serviceType: TelephonyTypeService
}

/**
 * MiniPabx Hunting
 */
export interface TelephonyMiniPabxHunting {
  anonymousCallRejection: boolean
  name: string
  numberOfCalls: number
  onHoldTimer: number
  pattern: TelephonyEasyMiniPabxHuntingPattern
  queueSize: number
  strategy: TelephonyEasyMiniPabxHuntingStrategy
  toneOnClosure: boolean
  toneOnClosureSoundId?: number
  toneOnHold: boolean
  toneOnHoldSoundId?: number
  toneRingback: boolean
  toneRingbackSoundId?: number
}

/**
 * Additional number
 */
export interface TelephonyNumber {
  description: string
  featureType: TelephonyType
  partOfPool?: string
  serviceName: string
  serviceType: TelephonyTypeService
}

/*
 * Number country code
 */
export type TelephonyNumberCountryCode = 32 | 33 | 34 | 39 | 41 | 44 | 49

/*
 * Number country
 */
export enum TelephonyNumberCountry {
  BE = 'be',
  CH = 'ch',
  DE = 'de',
  ES = 'es',
  FR = 'fr',
  GB = 'gb',
  IT = 'it',
  UK = 'uk'
}

/**
 * A geographic zone from a country
 */
export interface TelephonyNumberDetailedZone {
  askedCity?: string
  city: string
  country: TelephonyNumberCountry
  internationalNumber: string
  matchingCriteria?: TelephonyNumberDetailedZoneMatchingCriteria
  number: string
  prefix: TelephonyNumberCountryCode
  type: TelephonyNumberDetailedZoneType
  zipCode?: string
  zneList: string[]
}

/*
 * The possible criteria matching a searched value for a zone
 */
export enum TelephonyNumberDetailedZoneMatchingCriteria {
  CITY = 'city',
  INTERNATIONALNUMBER = 'internationalNumber',
  NUMBER = 'number',
  ZNE = 'zne'
}

/*
 * A zone type
 */
export enum TelephonyNumberDetailedZoneType {
  GEOGRAPHIC = 'geographic',
  NON_GEOGRAPHIC = 'non-geographic',
  SPECIAL = 'special'
}

/*
 * Typology of number
 */
export enum TelephonyNumberType {
  GEOGRAPHIC = 'geographic',
  NOGEOGRAPHIC = 'nogeographic',
  SPECIAL = 'special'
}

/**
 * Offer change
 */
export interface TelephonyOfferChange {
  offer: string
}

/**
 * Operation on a telephony offer
 */
export interface TelephonyOfferTask {
  action: TelephonyOfferTaskAction
  executionDate: string
  status: TelephonyTaskStatus
  taskId: number
  type: TelephonyOfferTaskType
}

/*
 * Offer task actions
 */
export enum TelephonyOfferTaskAction {
  CONVERTTOALIAS = 'convertToAlias',
  CONVERTTOSIP = 'convertToSip',
  MIGRATETONEWVOICEMAIL = 'migrateToNewVoicemail',
  REMOVESIMLTANEOUSLINES = 'removeSimltaneousLines',
  SWITCHSERVER = 'switchServer',
  TERMINATION = 'termination',
  UPDATEFIRMWARE = 'updateFirmware',
  UPGRADE = 'upgrade'
}

/*
 * Offer task types
 */
export enum TelephonyOfferTaskType {
  LINE = 'line',
  OFFER = 'offer',
  OPTION = 'option',
  PHONE = 'phone'
}

/**
 * Informations related to phone
 */
export interface TelephonyOldPhone {
  mac: string
  model: string
}

/*
 * Type of line blocking on outplan notification
 */
export enum TelephonyOutplanNotificationBlock {
  BLOCKALLCALLS = 'blockAllCalls',
  BLOCKINCOMINGCALLS = 'blockIncomingCalls',
  BLOCKOUTGOINGCALLS = 'blockOutgoingCalls',
  NONE = 'none'
}

/**
 * OVH calls queues and OVH IVRs (Interactive Voice Response)
 */
export interface TelephonyOvhPabx {
  description: string
  featureType: TelephonyType
  isCCS: boolean
  serviceName: string
  serviceType: TelephonyTypeService
}

/**
 * Custom statuses of your callcenter agents
 */
export interface TelephonyOvhPabxCustomStatus {
  color?: string
  description?: string
  id: number
  name: string
}

/**
 * Dialplan
 */
export interface TelephonyOvhPabxDialplan {
  anonymousRejection: boolean
  dialplanId: number
  lastUpdate: string
  name: string
  showCallerNumber: TelephonyOvhPabxDialplanNumberPresentation
  transferTimeout: number
}

/**
 * Dialplan extension
 */
export interface TelephonyOvhPabxDialplanExtension {
  enabled: boolean
  extensionId: number
  position: number
  schedulerCategory?: TelephonySchedulerCategory
  screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListType
}

/**
 * Screenlist condition
 */
export interface TelephonyOvhPabxDialplanExtensionConditionScreenList {
  callerIdNumber?: string
  conditionId: number
  destinationNumber?: string
  screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListType
}

/*
 * Screenlist condition type
 */
export enum TelephonyOvhPabxDialplanExtensionConditionScreenListType {
  DESTINATIONBLACKLIST = 'destinationBlackList',
  DESTINATIONWHITELIST = 'destinationWhiteList',
  INCOMINGBLACKLIST = 'incomingBlackList',
  INCOMINGWHITELIST = 'incomingWhiteList'
}

/**
 * Time condition
 */
export interface TelephonyOvhPabxDialplanExtensionConditionTime {
  conditionId: number
  timeFrom: any
  timeTo: any
  weekDay: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay
}

/*
 * Day of the week
 */
export enum TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay {
  FRIDAY = 'friday',
  MONDAY = 'monday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
  THURSDAY = 'thursday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday'
}

/**
 * Dialplan rule
 */
export interface TelephonyOvhPabxDialplanExtensionRule {
  action: TelephonyOvhPabxDialplanExtensionRuleAction
  actionParam?: string
  negativeAction: boolean
  position: number
  ruleId: number
}

/*
 * Dialplan rule action
 */
export enum TelephonyOvhPabxDialplanExtensionRuleAction {
  BRIDGE = 'bridge',
  ENDLESS_PLAYBACK = 'endless_playback',
  HANGUP = 'hangup',
  HUNTING = 'hunting',
  IVR = 'ivr',
  PLAYBACK = 'playback',
  READDTMF = 'readDtmf',
  SETCALLERNAME = 'setCallerName',
  SLEEP = 'sleep',
  TTS = 'tts',
  VOICEMAIL = 'voicemail'
}

/*
 * Displayed number
 */
export enum TelephonyOvhPabxDialplanNumberPresentation {
  ALIAS = 'alias',
  BOTH = 'both',
  CALLER = 'caller'
}

/**
 * PABX Hunting
 */
export interface TelephonyOvhPabxHunting {
  crmUrlTemplate?: string
  g729?: boolean
  name: string
  statusIvrEnabled: boolean
}

/**
 * Calls agent
 */
export interface TelephonyOvhPabxHuntingAgent {
  agentId: number
  breakStatus?: number
  description?: string
  number: any
  simultaneousLines: number
  status: TelephonyOvhPabxHuntingAgentStatus
  timeout: number
  type: TelephonyOvhPabxHuntingAgentType
  wrapUpTime: number
}

/**
 * Live statistics of the queue
 */
export interface TelephonyOvhPabxHuntingAgentLiveStatus {
  answeredCalls: number
  lastStatusChange: string
  status: TelephonyOvhPabxHuntingLiveAgentStatus
  totalCallDuration: number
}

/**
 * Agent assigned to a queue
 */
export interface TelephonyOvhPabxHuntingAgentQueue {
  agentId: number
  position: number
  queueId: number
}

/*
 * Status of the agent
 */
export enum TelephonyOvhPabxHuntingAgentStatus {
  AVAILABLE = 'available',
  LOGGEDOUT = 'loggedOut',
  ONBREAK = 'onBreak'
}

/*
 * Type of the agent
 */
export enum TelephonyOvhPabxHuntingAgentType {
  EXTERNAL = 'external',
  INTERNAL = 'internal'
}

/*
 * Status of the agent
 */
export enum TelephonyOvhPabxHuntingLiveAgentStatus {
  INAQUEUECALL = 'inAQueueCall',
  LOGGEDOUT = 'loggedOut',
  ONBREAK = 'onBreak',
  RECEIVING = 'receiving',
  WAITING = 'waiting'
}

/*
 * State of the call
 */
export enum TelephonyOvhPabxHuntingLiveCallsState {
  ANSWERED = 'Answered',
  WAITING = 'Waiting'
}

/**
 * Calls queue
 */
export interface TelephonyOvhPabxHuntingQueue {
  actionOnClosure?: TelephonyOvhPabxQueueAction
  actionOnClosureParam?: string
  actionOnOverflow?: TelephonyOvhPabxQueueAction
  actionOnOverflowParam?: string
  askForRecordDisabling?: boolean
  description?: string
  followCallForwards?: boolean
  maxMember: number
  maxWaitTime: number
  queueId: number
  record?: boolean
  recordDisablingDigit?: TelephonyOvhPabxHuntingQueueRecordDisablingDigit
  recordDisablingLanguage?: TelephonyOvhPabxHuntingQueueRecordDisablingLanguage
  soundOnHold?: number
  strategy: TelephonyOvhPabxHuntingQueueStrategy
}

/**
 * Live statistics of the queue
 */
export interface TelephonyOvhPabxHuntingQueueLiveCalls {
  agent: string
  answered?: string
  begin: string
  callerIdName: string
  callerIdNumber: string
  destinationNumber: string
  end?: string
  id: number
  onHold?: boolean
  queue: string
  state: TelephonyOvhPabxHuntingLiveCallsState
}

/**
 * Live statistics of the queue
 */
export interface TelephonyOvhPabxHuntingQueueLiveStatistics {
  callsAnswered: number
  callsLost: number
  callsTotal: number
  lastReset: string
  totalCallDuration: number
  totalWaitingDuration: number
}

/*
 * Digit keys allowed to be pressed to disable call record
 */
export type TelephonyOvhPabxHuntingQueueRecordDisablingDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/*
 * Possible languages of the sound played to inform caller that he can disable call record
 */
export enum TelephonyOvhPabxHuntingQueueRecordDisablingLanguage {
  ENGLISH = 'english',
  FRENCH = 'french'
}

/*
 * Calls dispatching startegy
 */
export enum TelephonyOvhPabxHuntingQueueStrategy {
  CUMULATIONBYAGENTORDER = 'cumulationByAgentOrder',
  LONGESTHANGUPAGENT = 'longestHangupAgent',
  LONGESTIDLEAGENT = 'longestIdleAgent',
  RANDOM = 'random',
  RINGALL = 'ringAll',
  ROUNDROBIN = 'roundRobin',
  SEQUENTIALLYBYAGENTORDER = 'sequentiallyByAgentOrder'
}

/*
 * IVR menu action
 */
export enum TelephonyOvhPabxIvrMenuEntryAction {
  BRIDGE = 'bridge',
  CALLCENTER = 'callcenter',
  MENUBACK = 'menuBack',
  MENUEXIT = 'menuExit',
  MENUSUB = 'menuSub',
  MENUTOP = 'menuTop',
  PLAYBACK = 'playback',
  READDTMF = 'readDtmf',
  SETCALLERNAME = 'setCallerName'
}

/**
 * IVR Menu
 */
export interface TelephonyOvhPabxMenu {
  greetSound?: number
  greetSoundTts?: number
  invalidSound?: number
  invalidSoundTts?: number
  menuId: number
  name: string
}

/**
 * IVR menu entry
 */
export interface TelephonyOvhPabxMenuEntry {
  action: TelephonyOvhPabxIvrMenuEntryAction
  actionParam: string
  dtmf: string
  entryId: number
  position: number
}

/*
 * Available actions for overflow and on closure
 */
export enum TelephonyOvhPabxQueueAction {
  PLAYBACK = 'playback',
  VOICEMAIL = 'voicemail'
}

/**
 * The PABX records
 */
export interface TelephonyOvhPabxRecord {
  agent?: string
  callEnd?: string
  callerIdName: string
  callerIdNumber: string
  callStart: string
  destinationNumber?: string
  duration: number
  fileUrl: string
  id: number
}

/**
 * The PABX sounds
 */
export interface TelephonyOvhPabxSound {
  name: string
  soundId: number
}

/**
 * The PABX Text To Speech sounds
 */
export interface TelephonyOvhPabxTts {
  id: number
  text: string
  voice: TelephonyOvhPabxTtsVoice
}

/*
 * Voice to use for your text to speech
 */
export enum TelephonyOvhPabxTtsVoice {
  BRUCE = 'Bruce',
  HELENE = 'Helene',
  JENNY = 'Jenny',
  LOIC = 'Loic'
}

/*
 * Whispering mode
 */
export enum TelephonyOvhPabxWhisperingMode {
  WHISPER_TO_AGENT_ONLY = 'Whisper to agent only',
  WHISPER_TO_ALL_PARTICIPANTS = 'Whisper to all participants'
}

/**
 * Telephony API related file hosted
 */
export interface TelephonyPcsFile {
  filename: string
  status: TelephonyPcsFileStatus
  url: string
  urlExpirationDatetime: string
}

/*
 * File providing task status
 */
export enum TelephonyPcsFileStatus {
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}

/**
 * Plug & Phone
 */
export interface TelephonyPhone {
  brand: string
  description: string
  macAddress: string
  maxline: number
  mgcpIpRestriction?: string
  phoneConfiguration: TelephonyPhoneConfigurationProperty[]
  protocol: TelephonyProtocol
  userPassword?: string
}

/**
 * Phone book
 */
export interface TelephonyPhonebook {
  bookKey: string
  isReadonly: boolean
  name: string
  phoneKey: string
}

/**
 * Phone book contact
 */
export interface TelephonyPhonebookContact {
  group: string
  homeMobile?: any
  homePhone?: any
  id: number
  name: string
  surname: string
  workMobile?: any
  workPhone?: any
}

/**
 * Phone book on group
 */
export interface TelephonyPhonebookMaster {
  bookKey: string
  name: string
}

/*
 * Phone Configuration level enum
 */
export enum TelephonyPhoneConfigurationLevel {
  ADMIN = 'admin',
  EXPERT = 'expert'
}

/**
 * Phone configuration property
 */
export interface TelephonyPhoneConfigurationProperty {
  default?: string
  description?: string
  enum?: string[]
  group?: string
  level?: TelephonyPhoneConfigurationLevel
  maxlength?: number
  name?: string
  rangeValue?: any
  type?: TelephonyPhoneConfigurationType
  value?: string
}

/*
 * Phone configuration type enum
 */
export enum TelephonyPhoneConfigurationType {
  BOOLEAN = 'boolean',
  ENUM = 'enum',
  HIDDEN = 'hidden',
  IPV4 = 'ipv4',
  NUMERIC = 'numeric',
  STRING = 'string'
}

/**
 * Credentials to access the web interface of the phone
 */
export interface TelephonyPhoneCredentials {
  login?: string
  password: string
}

/**
 * Portability informations
 */
export interface TelephonyPortability {
  billingAccount: string
  creationDate: string
  customerInfos: TelephonyPortabilityCustomerInfos
  desiredExecutionDate?: string
  error: boolean
  errorCodes: string[]
  id: number
  lineToRedirectTo?: string
  numbersList: string[]
  operator: string
  orderId: number
  portabilityCountry: TelephonyPortabilityCountry
}

/*
 * Special number category
 */
export enum TelephonyportabilitySpecialNumberCategory {
  ACCESS = 'access',
  ADULTS = 'adults',
  ANNOUNCED = 'announced',
  BE_ADULTS = 'be_adults',
  BE_CONTENT = 'be_content',
  BE_GAMES = 'be_games',
  BE_GENERAL = 'be_general',
  BE_RELAXING = 'be_relaxing',
  CONFERENCING = 'conferencing',
  CONTENTSAUTO = 'contentsAuto',
  CONTENTSMANUAL = 'contentsManual',
  DIRECTORY = 'directory',
  GAMES = 'games',
  LINKING = 'linking',
  M2M = 'm2m',
  RELATIONSHIP = 'relationship'
}

/*
 * Country that defines the portability kind
 */
export enum TelephonyPortabilityCountry {
  BELGIUM = 'belgium',
  FRANCE = 'france',
  SWITZERLAND = 'switzerland'
}

/**
 * Customer informations about a portability
 */
export interface TelephonyPortabilityCustomerInfos {
  building?: string
  city: string
  door?: string
  floor?: string
  name: string
  siret?: string
  stair?: string
  streetName: string
  streetNumber: string
  zip: string
}

/**
 * Document linked to a portability
 */
export interface TelephonyPortabilityDocument {
  description?: string
  documentId: number
  getUrl: string
  name: string
  putUrl?: string
  size: number
}

/**
 * Possible parameters to provide to fix portability errors
 */
export interface TelephonyPortabilityFixErrorPossibleParameters {
  mandatoryParameters: string[]
  optionalParameters: string[]
}

/**
 * A step in the portability process
 */
export interface TelephonyPortabilityStep {
  description?: string
  doneDate?: string
  duration: TelephonyPortabilityStepDuration
  infos?: TelephonyPortabilityStepInfos
  name: TelephonyPortabilityStepName
  status: TelephonyPortabilityStepStatus
}

/**
 * Represent the delay between two portability steps
 */
export interface TelephonyPortabilityStepDuration {
  quantity: number
  unit: TelephonyPortabilityStepDurationUnit
}

/*
 * List of possible duration unit. "NA" means that there is no defined duration
 */
export enum TelephonyPortabilityStepDurationUnit {
  NA = 'NA',
  DAY = 'day',
  HOUR = 'hour',
  OPENDAY = 'openday'
}

/**
 * Additional informations about the portability step
 */
export interface TelephonyPortabilityStepInfos {
  lastProposedDate?: string
  reason?: string
  reasonType?: string
}

/*
 * List of possible step name
 */
export enum TelephonyPortabilityStepName {
  ACKNOWLEDGMENTRECEIVEDFROMOPERATOR = 'acknowledgmentReceivedFromOperator',
  BELGIUMPORTABILITYREQUESTCREATED = 'belgiumPortabilityRequestCreated',
  BELGIUMPORTABILITYREQUESTEXECUTIONACKED = 'belgiumPortabilityRequestExecutionAcked',
  BELGIUMPORTABILITYREQUESTEXECUTIONASKED = 'belgiumPortabilityRequestExecutionAsked',
  BELGIUMPORTABILITYREQUESTEXECUTIONCOMPLETED = 'belgiumPortabilityRequestExecutionCompleted',
  BELGIUMPORTABILITYREQUESTVALIDATED = 'belgiumPortabilityRequestValidated',
  BELGIUMPORTABILITYREQUESTWAITINGUNTILEXEC = 'belgiumPortabilityRequestWaitingUntilExec',
  CUSTOMERFORMRECEIVED = 'customerFormReceived',
  CUSTOMERFORMSENT = 'customerFormSent',
  CUSTOMERFORMVALIDATED = 'customerFormValidated',
  FINALREPORTRECEIVEDFROMOPERATOR = 'finalReportReceivedFromOperator',
  INTERMEDIATEREPORTRECEIVEDFROMOPERATOR = 'intermediateReportReceivedFromOperator',
  NUMBERACTIVATION = 'numberActivation',
  REQUESTSENTTOOPERATOR = 'requestSentToOperator',
  SDASEQUENCERECEIVEDFROMOPERATOR = 'sDASequenceReceivedFromOperator'
}

/*
 * List of possible status of a step
 */
export enum TelephonyPortabilityStepStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  HOLD = 'hold',
  TODO = 'todo'
}

/**
 * Call delivery record of the previous month
 */
export interface TelephonyPreviousVoiceConsumption {
  called?: any
  calling?: any
  consumptionId: number
  countrySuffix: string
  creationDatetime: string
  designation: string
  destinationType: TelephonyVoiceConsumptionDestinationType
  duration: number
  hangupNature?: string
  planType: TelephonyVoiceConsumptionPlanType
  priceWithoutTax: OrderPrice
  wayType: TelephonyVoiceConsumptionWayType
}

/*
 * All existing properties of line or alias offer
 */
export enum TelephonyProperty {
  XDSL = 'xdsl'
}

/*
 * Phone protocol
 */
export enum TelephonyProtocol {
  MGCP = 'mgcp',
  SIP = 'sip'
}

/**
 * Informations related to the rate code
 */
export interface TelephonyRateCodeInformation {
  code: string
  pricePerCallWithoutTax: OrderPrice
  pricePerMinuteWithoutTax: OrderPrice
}

/*
 * The call direction for a given event
 */
export enum TelephonyRealtimeEventDirection {
  INCOMING = 'incoming',
  OUTGOING = 'outgoing'
}

/*
 * The event protocol
 */
export enum TelephonyRealtimeEventProtocol {
  MGCP = 'mgcp',
  SIP = 'sip'
}

/*
 * The event type
 */
export enum TelephonyRealtimeEventType {
  END_CALLING = 'end_calling',
  END_HOLD = 'end_hold',
  END_RINGING = 'end_ringing',
  START_CALLING = 'start_calling',
  START_HOLD = 'start_hold',
  START_RINGING = 'start_ringing'
}

/**
 * Redirect service
 */
export interface TelephonyRedirect {
  description: string
  destination?: any
  featureType: TelephonyType
  serviceName: string
  serviceType: TelephonyTypeService
}

/**
 * Informations about a SIP registration (i.e. IP, port, User-Agent...)
 */
export interface TelephonyRegistrationInformations {
  datetime: string
  domain?: string
  ip: string
  localIp?: string
  localPort?: number
  port?: number
  userAgent?: string
}

/*
 * Release location type : forward if the calling hangup, backward if the caller hangup, else local
 */
export enum TelephonyReleaseLocation {
  BACKWARD = 'backward',
  FORWARD = 'forward',
  LOCAL = 'local'
}

/**
 * Call which are repayable
 */
export interface TelephonyRepaymentConsumption {
  called?: any
  calling?: any
  consumptionId: number
  creationDatetime?: string
  dialed?: any
  duration?: number
  operator?: string
  price?: any
  repayable?: boolean
}

/**
 * Relevant informations about reset code
 */
export interface TelephonyResetPhoneCodeInfo {
  activationCode?: string
  keyBook?: string
  serverURL?: string
}

/**
 * Relevant informations of the phone reset
 */
export interface TelephonyResetPhoneInfo {
  resetCodeInfo?: TelephonyResetPhoneCodeInfo
  resetPhoneMethod: TelephonyResetPhoneMethod
}

/*
 * How the phone had been reset
 */
export enum TelephonyResetPhoneMethod {
  CODE = 'code',
  HTTP = 'http'
}

/**
 * Current Return Merchandise Authorisation
 */
export interface TelephonyRma {
  cancellable: boolean
  creationDatetime: string
  equipmentReference: string
  id: string
  newMerchandise?: string
  offerTypeNew?: TelephonyRmaOfferType
  offerTypeOld: TelephonyRmaOfferType
  process: TelephonyRmaReplaceType
  receptionDatetime?: string
  shippingContact: TelephonyContact
  status: TelephonyRmaStatus
  steps: TelephonyRmaStep[]
  terminationDatetime?: string
  type: TelephonyRmaType
}

/*
 * Return merchandise authorisation offer type
 */
export enum TelephonyRmaOfferType {
  DEPOSIT = 'deposit',
  LOAN = 'loan',
  PURCHASE = 'purchase'
}

/*
 * Return merchandise authorisation type
 */
export enum TelephonyRmaPublicType {
  CHANGE_TO_ANOTHER_PHONE_EQUIPMENT_RESTITUTION_FIRST_AND_SHIPPING_THEN = 'change to another phone/equipment (restitution first and shipping then)',
  RESTITUTION_BUT_KEEP_THE_SERVICE_ENABLE = 'restitution but keep the service enable'
}

/*
 * Return merchandise authorisation type
 */
export enum TelephonyRmaReplaceType {
  CHANGEPHONE = 'changePhone',
  PHONERESTITUTION = 'phoneRestitution',
  UNDEFINED = 'undefined'
}

/**
 * Post-creation return information structure
 */
export interface TelephonyRmaReturn {
  id: string
}

/*
 * Return merchandise authorisation step
 */
export enum TelephonyRmaStatus {
  CLOSED = 'closed',
  OPEN = 'open',
  RECEIVED = 'received'
}

/**
 * Informations related to the current RMA step status
 */
export interface TelephonyRmaStep {
  description: string
  doneDate?: string
  infos?: string
  name: TelephonyRmaStepName
  status: TelephonyRmaStepStatus
}

/*
 * RMA step names
 */
export enum TelephonyRmaStepName {
  DISPATCHJUSTIFICATION = 'dispatchJustification',
  EQUIPMENTSENDING = 'equipmentSending',
  EQUIPMENTTESTING = 'equipmentTesting',
  OPENING = 'opening',
  PARCELRECEPTION = 'parcelReception',
  PARCELVALIDATION = 'parcelValidation',
  VALIDATION = 'validation'
}

/*
 * Status of the RMA step
 */
export enum TelephonyRmaStepStatus {
  DONE = 'done',
  TODO = 'todo'
}

/*
 * Return merchandise authorisation type
 */
export enum TelephonyRmaType {
  AFTER_SALE_EQUIPMENT_SERVICE_EXCHANGE = 'after sale equipment service exchange',
  AFTER_SALE_PHONE_SERVICE_EXCHANGE = 'after sale phone service exchange',
  EQUIPMENT_RESTITUTION = 'equipment restitution',
  FAST_EXCHANGE = 'fast exchange',
  OLD_MERCHANDISE_RECEPTION_BEFORE_EXCHANGE = 'old merchandise reception before exchange',
  PHONE_RESTITUTION = 'phone restitution',
  RESENDS_DUE_TO_SHIPPING_LOST_BY_THE_CARRIER = 'resends due to shipping lost by the carrier',
  RESENDS_DUE_TO_SHIPPING_NOT_WITHDRAW = 'resends due to shipping not withdraw',
  SPECIFIC_RETURN_MERCHANDISE_AUTHORISATION = 'specific return merchandise authorisation',
  TERMINATION = 'termination',
  UNKNOWN = 'unknown'
}

/**
 * French value added services subject to the RSVA reform (Référentiel des numéros SVA)
 */
export interface TelephonyRsva {
  serviceName: string
  typology?: TelephonyportabilitySpecialNumberCategory
}

/**
 * Scheduler capable services
 */
export interface TelephonyScheduler {
  serviceName: string
  timeZone: TelephonytimeZone
}

/*
 * Scheculer category
 */
export enum TelephonySchedulerCategory {
  HOLIDAYS = 'holidays',
  SCHEDULER1 = 'scheduler1',
  SCHEDULER2 = 'scheduler2',
  SCHEDULER3 = 'scheduler3'
}

/**
 * Scheduled event
 */
export interface TelephonySchedulerEvent {
  categories: TelephonySchedulerCategory
  dateEnd: string
  dateStart: string
  description?: string
  title: string
  uid: string
}

/**
 * ScreenList capable services
 */
export interface TelephonyScreen {
  incomingScreenList: TelephonyScreenListChoosing
  outgoingScreenList: TelephonyScreenListChoosing
  serviceName: string
}

/**
 * Screen list
 */
export interface TelephonyScreenList {
  callNumber: string
  id: number
  nature: TelephonyScreenListNature
  status: string
  type: TelephonyScreenListType
}

/*
 * Type of screen list
 */
export enum TelephonyScreenListChoosing {
  BLACKLIST = 'blacklist',
  DISABLED = 'disabled',
  WHITELIST = 'whitelist'
}

/*
 * Nature of screen list
 */
export enum TelephonyScreenListNature {
  FAX = 'fax',
  INTERNATIONAL = 'international',
  SERVICES = 'services',
  SPECIAL = 'special',
  VOICEMAIL = 'voicemail'
}

/*
 * Type of screen list
 */
export enum TelephonyScreenListType {
  INCOMINGBLACKLIST = 'incomingBlackList',
  INCOMINGWHITELIST = 'incomingWhiteList',
  OUTGOINGBLACKLIST = 'outgoingBlackList',
  OUTGOINGWHITELIST = 'outgoingWhiteList'
}

/*
 * Voicemail audio format
 */
export enum TelephonyServiceVoicemailAudioFormat {
  AIFF = 'aiff',
  AU = 'au',
  FLAC = 'flac',
  MP3 = 'mp3',
  OGG = 'ogg',
  WAV = 'wav'
}

/*
 * Voicemail configuration
 */
export enum TelephonyServiceVoicemailMailOption {
  ATTACHMENT = 'attachment',
  SIMPLE = 'simple'
}

/**
 * Voicemail configuration
 */
export interface TelephonyServiceVoicemailNotifications {
  email: string
  type: TelephonyServiceVoicemailMailOption
}

/**
 * Details about simultaneous channels of this line
 */
export interface TelephonySimultaneousChannelsDetails {
  basic: number
  current: number
  extra: number
  maximum: number
  toBeDeleted: number
}

/*
 * Product type
 */
export enum TelephonySipDomainProductType {
  SIP = 'sip',
  TRUNK = 'trunk'
}

/**
 * Sounds attached to this telephony account
 */
export interface TelephonySound {
  creationDate: string
  description?: string
  filename: string
  getUrl: string
  id: number
  putUrl?: string
  size: number
}

/**
 * Specific number available
 */
export interface TelephonySpecificNumber {
  isPremium: boolean
  number: any
}

/*
 * Available timeframes for statistics
 */
export enum TelephonyStatisticsTimeframe {
  DAILY = 'daily',
  HOURLY = 'hourly',
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
  YEARLY = 'yearly'
}

/**
 * Operation on a telephony service
 */
export interface TelephonyTask {
  action: string
  message?: string
  objectCreated?: string
  serviceType: string
  status: TelephonyTaskStatus
  taskId: number
}

/*
 * Task status
 */
export enum TelephonyTaskStatus {
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  PAUSE = 'pause',
  TODO = 'todo'
}

/**
 * Telephony service
 */
export interface TelephonyTelephonyGenericService {
  serviceName: string
}

/**
 * Informations related to a telephony service
 */
export interface TelephonyTelephonySearchService {
  billingAccount?: string
  domain: string
  type: TelephonyTelephonySearchServiceType
}

/*
 * List of possible type of a telephony service
 */
export enum TelephonyTelephonySearchServiceType {
  ALIAS = 'alias',
  LINE = 'line'
}

/**
 * Telephony service
 */
export interface TelephonyTelephonyService {
  country: TelephonyNumberCountry
  countryCode: TelephonyNumberCountryCode
  currentOutplan: OrderPrice
  description: string
  featureType: TelephonyType
  getPublicOffer: TelephonyLineOffer
  hasFaxCapabilities: boolean
  offers: string[]
  properties: TelephonyPropertyEnum[]
  rio: string
  serviceName: string
  serviceType: TelephonyTypeService
  simultaneousLines: number
}

/**
 * Temporary url informations
 */
export interface TelephonyTemporaryLogsLink {
  expirationDate: string
  url: string
}

/*
 * Termination reason
 */
export enum TelephonyTerminationReason {
  ADDRESSEMOVE = 'addresseMove',
  BILLINGDIFFICULTIES = 'billingDifficulties',
  CESSATIONOFACTIVITY = 'cessationOfActivity',
  MISSINGOPTIONS = 'missingOptions',
  MOVETOCOMPETITOR = 'moveToCompetitor',
  OTHER = 'other',
  PLUGANDPHONEDIFFICULTIES = 'plugAndPhoneDifficulties',
  TECHNICALDIFFICULTIES = 'technicalDifficulties'
}

/**
 * Time conditions
 */
export interface TelephonyTimeCondition {
  day: TelephonyTimeConditionsDay
  hourBegin: string
  hourEnd: string
  id: number
  policy: TelephonyTimeConditionsPolicy
  status: string
}

/**
 * Time conditions options
 */
export interface TelephonyTimeConditionOptions {
  slot1Number: string
  slot1Type: TelephonyTimeConditionsSlotType
  slot2Number: string
  slot2Type: TelephonyTimeConditionsSlotType
  slot3Number: string
  slot3Type: TelephonyTimeConditionsSlotType
  status: TelephonyTimeConditionsGlobalStatus
  timeout?: TelephonyTimeConditionsTimeout
  unavailableNumber: string
  unavailableType: TelephonyTimeConditionsSlotType
}

/*
 * Day of the time condition
 */
export enum TelephonyTimeConditionsDay {
  FRIDAY = 'friday',
  HOLIDAY = 'holiday',
  MONDAY = 'monday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
  THURSDAY = 'thursday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday'
}

/*
 * Time conditions global status
 */
export enum TelephonyTimeConditionsGlobalStatus {
  DELETED = 'deleted',
  DISABLED = 'disabled',
  ENABLED = 'enabled'
}

/*
 * Policy of the time condition
 */
export enum TelephonyTimeConditionsPolicy {
  AVAILABLE = 'available',
  SLOT1 = 'slot1',
  SLOT2 = 'slot2',
  SLOT3 = 'slot3'
}

/*
 * Forward type
 */
export enum TelephonyTimeConditionsSettingsForwardType {
  NUMBER = 'number',
  VOICEMAIL = 'voicemail'
}

/*
 * Type of slot
 */
export enum TelephonyTimeConditionsSlotType {
  NUMBER = 'number',
  VOICEMAIL = 'voicemail'
}

/*
 * Timeout before unavailable action is triggered
 */
export type TelephonyTimeConditionsTimeout = 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 5 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90

/**
 * A value associated to a timestamp
 */
export interface TelephonyTimestampAndValue {
  timestamp: number
  value?: any
}

/*
 * Time zones available for scheduled events time definitions
 */
export enum TelephonytimeZone {
  EUROPE_BERLIN = 'Europe/Berlin',
  EUROPE_BRUSSELS = 'Europe/Brussels',
  EUROPE_LONDON = 'Europe/London',
  EUROPE_MADRID = 'Europe/Madrid',
  EUROPE_PARIS = 'Europe/Paris',
  EUROPE_ZURICH = 'Europe/Zurich'
}

/*
 * expiration possibility
 */
export type TelephonyTokenExpiration = '1 day' | '1 hour' | '30 days' | '5 minutes' | 'unlimited'

/**
 * Line tones
 */
export interface TelephonyTones {
  callWaiting: TelephonyTones
  endCall: TelephonyTones
  onHold: TelephonyTonesOnHold
  ringback: TelephonyTones
}

/*
 * Tones type
 */
export enum TelephonyTones {
  CUSTOM_SOUND = 'Custom sound',
  NONE = 'None'
}

/*
 * Tones type
 */
export enum TelephonyTonesOnHold {
  CUSTOM_SOUND = 'Custom sound',
  NONE = 'None',
  PREDEFINED_1 = 'Predefined 1',
  PREDEFINED_2 = 'Predefined 2'
}

/*
 * Tones type
 */
export enum TelephonyTonesType {
  CALLWAITING = 'callWaiting',
  ENDCALL = 'endCall',
  ONHOLD = 'onHold',
  RINGBACK = 'ringback'
}

/**
 * Traffic extracts (SIP) of your line
 */
export interface TelephonytrafficExtract {
  dateEnd: string
  dateStart: string
  fileSize: number
  fileUrl: string
  id: number
  status: TelephonyTaskStatus
}

/**
 * Trunk service
 */
export interface TelephonyTrunk {
  description: string
  serviceName: string
  serviceType: TelephonyTypeService
}

/**
 * External displayed number linked to a trunk
 */
export interface TelephonyTrunkExternalDisplayedNumber {
  createdAt: string
  number: any
  status: TelephonyTrunkExternalDisplayedNumberStatus
  validatedAt?: string
}

/*
 * Status of the trunk's external displayed number
 */
export enum TelephonyTrunkExternalDisplayedNumberStatus {
  ENABLED = 'enabled',
  REFUSED = 'refused',
  TODELETE = 'toDelete',
  WAITINGVALIDATION = 'waitingValidation'
}

/**
 * Trunk external displayed number validation
 */
export interface TelephonyTrunkExternalDisplayedNumberValidation {
  phoneCallTaskId: number
  validationCode: string
}

/**
 * Details for a channels pack
 */
export interface TelephonyTrunkSimultaneousPack {
  channels: number
  quantity: number
  unitPrice: OrderPrice
}

/**
 * Repartition of simultaneous channels packs for a trunk
 */
export interface TelephonyTrunkSimultaneousPacksRepartition {
  optimizedChannelsQuantity: number
  packsRepartition: TelephonyTrunkSimultaneousPack[]
  totalPrice: OrderPrice
}

/*
 * All existing types of line or alias
 */
export enum TelephonyType {
  CARRIERSIP = 'carrierSip',
  CLOUDHUNTING = 'cloudHunting',
  CLOUDIVR = 'cloudIvr',
  CONFERENCE = 'conference',
  CONTACTCENTERSOLUTION = 'contactCenterSolution',
  CONTACTCENTERSOLUTIONEXPERT = 'contactCenterSolutionExpert',
  DDI = 'ddi',
  EASYHUNTING = 'easyHunting',
  EASYPABX = 'easyPabx',
  EMPTY = 'empty',
  FAX = 'fax',
  FREEFAX = 'freefax',
  MGCP = 'mgcp',
  MINIPABX = 'miniPabx',
  OLDCONFERENCE = 'oldConference',
  PLUGANDFAX = 'plugAndFax',
  REDIRECT = 'redirect',
  SIP = 'sip',
  SVI = 'svi',
  VOICEFAX = 'voicefax',
  VOICEMAIL = 'voicemail',
  VXML = 'vxml'
}

/*
 * All existing types
 */
export enum TelephonyTypeService {
  ALIAS = 'alias',
  LINE = 'line'
}

/**
 * Call delivery record
 */
export interface TelephonyVoiceConsumption {
  called?: any
  calling?: any
  consumptionId: number
  countrySuffix: string
  creationDatetime: string
  designation: string
  destinationType: TelephonyVoiceConsumptionDestinationType
  dialed?: any
  duration: number
  hangupNature?: string
  planType: TelephonyVoiceConsumptionPlanType
  priceWithoutTax: OrderPrice
  wayType: TelephonyVoiceConsumptionWayType
}

/*
 * Consumption destination type
 */
export enum TelephonyVoiceConsumptionDestinationType {
  LANDLINE = 'landline',
  MOBILE = 'mobile',
  SPECIAL = 'special'
}

/*
 * Consumption plan type
 */
export enum TelephonyVoiceConsumptionPlanType {
  OUTPLAN = 'outplan',
  PRICEPLAN = 'priceplan'
}

/*
 * Consumption way type
 */
export enum TelephonyVoiceConsumptionWayType {
  INCOMING = 'incoming',
  OUTGOING = 'outgoing',
  TRANSFER = 'transfer'
}

/*
 * All existing type of routing for a voicemail
 */
export enum TelephonyVoicefaxRouting {
  FAX = 'fax',
  VOICEMAIL = 'voicemail'
}

/**
 * Voicemail service
 */
export interface TelephonyVoicemail {
  description: string
  offers: string[]
  serviceName: string
  serviceType: TelephonyTypeService
}

/*
 * Greeting type
 */
export enum TelephonyVoicemailGreeting {
  DEFAULT = 'default',
  FULL = 'full',
  SHORT = 'short'
}

/**
 * Voicemail greeting
 */
export interface TelephonyVoicemailGreetings {
  callee: any
  dir: TelephonyVoicemailMessageFolderGreeting
  id: number
}

/*
 * Folder type
 */
export enum TelephonyVoicemailMessageFolderDirectory {
  FAMILY = 'family',
  FRIENDS = 'friends',
  INBOX = 'inbox',
  OLD = 'old',
  URGENT = 'urgent',
  WORK = 'work'
}

/*
 * Folder type
 */
export enum TelephonyVoicemailMessageFolderGreeting {
  BUSY = 'busy',
  GREET = 'greet',
  TEMP = 'temp',
  UNAVAIL = 'unavail'
}

/**
 * Voicemail message
 */
export interface TelephonyVoicemailMessages {
  callee: any
  caller: any
  creationDatetime: string
  dir: TelephonyVoicemailMessageFolderDirectory
  duration: number
  id: number
}

/**
 * Internal and external numbers for voicemail service
 */
export interface TelephonyVoicemailNumbers {
  external: string
  internal: string
}

/**
 * Voicemail Properties
 */
export interface TelephonyVoicemailProperties {
  annouceMessage: string
  audioFormat: TelephonyServiceVoicemailAudioFormat
  doNotRecord: boolean
  forcePassword: boolean
  fromEmail: string
  fromName: string
  fullGreetingSoundId?: number
  greetingType: TelephonyVoicemailGreeting
  isNewVersion: boolean
  keepMessage: boolean
  redirectionEmails: TelephonyServiceVoicemailNotifications[]
  shortGreetingSoundId?: number
  temporaryGreetingActivated: boolean
  temporaryGreetingSoundId?: number
  unreadMessages: number
}

/**
 * Vxml services
 */
export interface TelephonyVxml {
  description: string
  offers: string[]
  serviceName: string
  serviceType: TelephonyTypeService
}

/**
 * Vxml Properties
 */
export interface TelephonyVxmlProperties {
  url: string
  urlRecord: string
}


export class Telephony {
  constructor(private client: Client) {}

  /**
   * Operations about the VOIP service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/telephony`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Billing Account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D#GET)
   */
  GetThisObjectProperties(billingAccount: string): Promise<TelephonyBillingAccount> {
    let url = `/telephony/${billingAccount}`

    return this.client.request<TelephonyBillingAccount>('GET', url)
  }

  /**
   * Billing Account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D#PUT)
   */
  AlterThisObjectProperties(billingAccount: string, payload: TelephonyBillingAccount): Promise<void> {
    let url = `/telephony/${billingAccount}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Billing Account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D#DELETE)
   */
  AskForABillingAccountTermination(billingAccount: string, reason: TelephonyTerminationReason, details?: string): Promise<void> {
    let url = `/telephony/${billingAccount}?`

    const queryParams = new QueryParams()
    if (reason) { queryParams.set('reason', reason.toString()) }
    if (details) { queryParams.set('details', details) }

    return this.client.request<void>('DELETE', url+queryParams.toString())
  }

  /**
   * List the telephony.AbbreviatedNumberGroup objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/abbreviatedNumber#GET)
   */
  AbbreviatedNumbersForTheBillingAccount(billingAccount: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/abbreviatedNumber`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.AbbreviatedNumberGroup objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/abbreviatedNumber#POST)
   */
  CreateANewAbbreviatedNumberForTheBillingAccount(abbreviatedNumber: number, billingAccount: string, destinationNumber: any, name: string, surname: string): Promise<TelephonyAbbreviatedNumberGroup> {
    let url = `/telephony/${billingAccount}/abbreviatedNumber`

    return this.client.request<TelephonyAbbreviatedNumberGroup>('POST', url, {abbreviatedNumber, destinationNumber, name, surname})
  }

  /**
   * Abbreviated number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/abbreviatedNumber/%7BabbreviatedNumber%7D#GET)
   */
  /*
  GetThisObjectProperties(abbreviatedNumber: number, billingAccount: string): Promise<TelephonyAbbreviatedNumberGroup> {
    let url = `/telephony/${billingAccount}/abbreviatedNumber/${abbreviatedNumber}`

    return this.client.request<TelephonyAbbreviatedNumberGroup>('GET', url)
  }
  */

  /**
   * Abbreviated number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/abbreviatedNumber/%7BabbreviatedNumber%7D#PUT)
   */
  /*
  AlterThisObjectProperties(abbreviatedNumber: number, billingAccount: string, payload: TelephonyAbbreviatedNumberGroup): Promise<void> {
    let url = `/telephony/${billingAccount}/abbreviatedNumber/${abbreviatedNumber}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Abbreviated number [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/abbreviatedNumber/%7BabbreviatedNumber%7D#DELETE)
   */
  DeleteTheGivenAbbreviatedNumber(abbreviatedNumber: number, billingAccount: string): Promise<void> {
    let url = `/telephony/${billingAccount}/abbreviatedNumber/${abbreviatedNumber}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * allowedCreditThreshold operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/allowedCreditThreshold#GET)
   */
  GetTheAllowedCreditThresholdForThisBillingAccount(billingAccount: string): Promise<OrderPrice[]> {
    let url = `/telephony/${billingAccount}/allowedCreditThreshold`

    return this.client.request<OrderPrice[]>('GET', url)
  }

  /**
   * amountSecurityDeposit operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/amountSecurityDeposit#GET)
   */
  GiveAllAmountsAvailablesForYourBillingAccount(billingAccount: string): Promise<OrderPrice[]> {
    let url = `/telephony/${billingAccount}/amountSecurityDeposit`

    return this.client.request<OrderPrice[]>('GET', url)
  }

  /**
   * billingAccountSite operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/billingAccountSite#POST)
   */
  UsedToOverwriteCurrentBillingAccountFeatureByTheBillingAccountSite(billingAccount: string, billingAccountSite: string): Promise<void> {
    let url = `/telephony/${billingAccount}/billingAccountSite`

    return this.client.request<void>('POST', url, {billingAccountSite})
  }

  /**
   * billingAccountSite operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/billingAccountSite#GET)
   */
  CurrentBillingAccountSiteBillingAccountFeaturesAreOverwrittenByTheSite(billingAccount: string): Promise<string> {
    let url = `/telephony/${billingAccount}/billingAccountSite`

    return this.client.request<string>('GET', url)
  }

  /**
   * cancelTermination operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/cancelTermination#POST)
   */
  CancelTheBillingAccountTermination(billingAccount: string): Promise<void> {
    let url = `/telephony/${billingAccount}/cancelTermination`

    return this.client.request<void>('POST', url)
  }

  /**
   * canTransferSecurityDeposit operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/canTransferSecurityDeposit#POST)
   */
  CheckIfSecurityDepositTransferIsPossibleBetweenTwoBillingAccounts(billingAccount: string, billingAccountDestination: string): Promise<boolean> {
    let url = `/telephony/${billingAccount}/canTransferSecurityDeposit`

    return this.client.request<boolean>('POST', url, {billingAccountDestination})
  }

  /**
   * List the telephony.CarrierSip objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/carrierSip#GET)
   */
  CarrierSIPTrunksAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/carrierSip`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * CarrierSip [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/carrierSip/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyCarrierSip> {
    let url = `/telephony/${billingAccount}/carrierSip/${serviceName}`

    return this.client.request<TelephonyCarrierSip>('GET', url)
  }
  */

  /**
   * cdrs operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/carrierSip/%7BserviceName%7D/cdrs#GET)
   */
  GetTheCallDetailRecordsOfYourCarrierSIPService(billingAccount: string, serviceName: string, month?: string): Promise<TelephonyDocument> {
    let url = `/telephony/${billingAccount}/carrierSip/${serviceName}/cdrs?`

    const queryParams = new QueryParams()
    if (month) { queryParams.set('month', month) }

    return this.client.request<TelephonyDocument>('GET', url+queryParams.toString())
  }

  /**
   * clusterDetails operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/carrierSip/%7BserviceName%7D/clusterDetails#GET)
   */
  GetDetailsAboutTheCarrierSipClusterOfYourStack(billingAccount: string, serviceName: string): Promise<TelephonyCarrierSipClusterInfo> {
    let url = `/telephony/${billingAccount}/carrierSip/${serviceName}/clusterDetails`

    return this.client.request<TelephonyCarrierSipClusterInfo>('GET', url)
  }

  /**
   * List the telephony.CarrierSipCustomerEndpoint objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/carrierSip/%7BserviceName%7D/endpoints#GET)
   */
  ListOfYourRemoteSipEndpointsIpsPortsProtocolOfYourCarrierSipTrunkService(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/carrierSip/${serviceName}/endpoints`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Carrier SIP Endpoints [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/carrierSip/%7BserviceName%7D/endpoints/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyCarrierSipCustomerEndpoint> {
    let url = `/telephony/${billingAccount}/carrierSip/${serviceName}/endpoints/${id}`

    return this.client.request<TelephonyCarrierSipCustomerEndpoint>('GET', url)
  }
  */

  /**
   * Carrier SIP Properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/carrierSip/%7BserviceName%7D/settings#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyCarrierSipDetails> {
    let url = `/telephony/${billingAccount}/carrierSip/${serviceName}/settings`

    return this.client.request<TelephonyCarrierSipDetails>('GET', url)
  }
  */

  /**
   * Carrier SIP Properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/carrierSip/%7BserviceName%7D/settings#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyCarrierSipDetails): Promise<void> {
    let url = `/telephony/${billingAccount}/carrierSip/${serviceName}/settings`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(billingAccount: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * List the telephony.Conference objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference#GET)
   */
  ConferencesAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/conference`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Conference [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyConference> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}`

    return this.client.request<TelephonyConference>('GET', url)
  }
  */

  /**
   * announceUpload operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/announceUpload#POST)
   */
  ChangeTheSoundPlayedAtTheBeginningOfTheConference(billingAccount: string, documentId: string, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/announceUpload`

    return this.client.request<TelephonyTask>('POST', url, {documentId})
  }

  /**
   * List the telephony.ConferenceHistory objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/histories#GET)
   */
  ListYourPastConferencesForThisNumber(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/histories`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List past conferences on your number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/histories/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyConferenceHistory> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/histories/${id}`

    return this.client.request<TelephonyConferenceHistory>('GET', url)
  }
  */

  /**
   * informations operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/informations#GET)
   */
  GetRealtimeConferenceInformations(billingAccount: string, serviceName: string): Promise<TelephonyConferenceInformations> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/informations`

    return this.client.request<TelephonyConferenceInformations>('GET', url)
  }

  /**
   * lock operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/lock#POST)
   */
  LockTheConferenceRoom(billingAccount: string, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/lock`

    return this.client.request<TelephonyTask>('POST', url)
  }

  /**
   * List the telephony.ConferenceParticipants objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants#GET)
   */
  CurrentParticipantsOfTheAssociateConference(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/participants`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Conference service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyConferenceParticipants> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}`

    return this.client.request<TelephonyConferenceParticipants>('GET', url)
  }
  */

  /**
   * deaf operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D/deaf#POST)
   */
  MakeAParticipantDeafInYourConferenceRoom(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/deaf`

    return this.client.request<TelephonyTask>('POST', url)
  }

  /**
   * energy operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D/energy#POST)
   */
  ChangeAParticipantLevelOfAudioTransmission(billingAccount: string, id: number, serviceName: string, value: number): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/energy`

    return this.client.request<TelephonyTask>('POST', url, {value})
  }

  /**
   * kick operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D/kick#POST)
   */
  EjectAParticipantFromYourConferenceRoom(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/kick`

    return this.client.request<TelephonyTask>('POST', url)
  }

  /**
   * mute operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D/mute#POST)
   */
  MuteAParticipantInYourConferenceRoom(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/mute`

    return this.client.request<TelephonyTask>('POST', url)
  }

  /**
   * undeaf operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D/undeaf#POST)
   */
  MakeAParticipantUndeafYourConferenceRoom(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/undeaf`

    return this.client.request<TelephonyTask>('POST', url)
  }

  /**
   * unmute operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D/unmute#POST)
   */
  UnmuteAParticipantInYourConferenceRoom(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/unmute`

    return this.client.request<TelephonyTask>('POST', url)
  }

  /**
   * Conference properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/settings#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyConferenceProperties> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/settings`

    return this.client.request<TelephonyConferenceProperties>('GET', url)
  }
  */

  /**
   * Conference properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/settings#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyConferenceProperties): Promise<void> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/settings`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * unlock operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/unlock#POST)
   */
  /*
  LockTheConferenceRoom(billingAccount: string, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/unlock`

    return this.client.request<TelephonyTask>('POST', url)
  }
  */

  /**
   * List the telephony.ConferenceWebAccess objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/webAccess#GET)
   */
  ListYourConferenceWebAccess(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/webAccess`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.ConferenceWebAccess objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/webAccess#POST)
   */
  AddAPublicWebAccessToYourConference(billingAccount: string, serviceName: string, type: TelephonyConferenceWebAccessType): Promise<TelephonyConferenceWebAccess> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/webAccess`

    return this.client.request<TelephonyConferenceWebAccess>('POST', url, {type})
  }

  /**
   * List public web access of your conference [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/webAccess/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyConferenceWebAccess> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/webAccess/${id}`

    return this.client.request<TelephonyConferenceWebAccess>('GET', url)
  }
  */

  /**
   * List public web access of your conference [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/webAccess/%7Bid%7D#DELETE)
   */
  DeleteAPublicWebAccessToYourConference(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/conference/${serviceName}/webAccess/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the telephony.Ddi objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ddi#GET)
   */
  DDIsDirectDialinAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/ddi`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * DDI (direct dial-in) service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ddi/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyDdi> {
    let url = `/telephony/${billingAccount}/ddi/${serviceName}`

    return this.client.request<TelephonyDdi>('GET', url)
  }
  */

  /**
   * DDI (direct dial-in) service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ddi/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyDdi): Promise<void> {
    let url = `/telephony/${billingAccount}/ddi/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * changeDestination operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ddi/%7BserviceName%7D/changeDestination#POST)
   */
  ChangeTheDestinationOfTheDDI(billingAccount: string, destination: any, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ddi/${serviceName}/changeDestination`

    return this.client.request<TelephonyTask>('POST', url, {destination})
  }

  /**
   * List the telephony.EasyHunting objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting#GET)
   */
  OVHEasyCallsQueuesAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/easyHunting`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * OVH easy calls queues [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyEasyHunting> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}`

    return this.client.request<TelephonyEasyHunting>('GET', url)
  }
  */

  /**
   * OVH easy calls queues [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyEasyHunting): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * PABX Hunting [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyOvhPabxHunting> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting`

    return this.client.request<TelephonyOvhPabxHunting>('GET', url)
  }
  */

  /**
   * PABX Hunting [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyOvhPabxHunting): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingAgent objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent#GET)
   */
  CallsAgents(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxHuntingAgent objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent#POST)
   */
  CreateANewAgent(billingAccount: string, number: any, serviceName: string, simultaneousLines: number, status: TelephonyOvhPabxHuntingAgentStatus, timeout: number, wrapUpTime: number, description?: string): Promise<TelephonyOvhPabxHuntingAgent> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent`

    return this.client.request<TelephonyOvhPabxHuntingAgent>('POST', url, {number, simultaneousLines, status, timeout, wrapUpTime, description})
  }

  /**
   * Calls agent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, serviceName: string): Promise<TelephonyOvhPabxHuntingAgent> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}`

    return this.client.request<TelephonyOvhPabxHuntingAgent>('GET', url)
  }
  */

  /**
   * Calls agent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(agentId: number, billingAccount: string, serviceName: string, payload: TelephonyOvhPabxHuntingAgent): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Calls agent [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D#DELETE)
   */
  DeleteTheGivenAgent(agentId: number, billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * The web access for your cloudpabx [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/bannerAccess#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, serviceName: string): Promise<TelephonyBannerAccess> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/bannerAccess`

    return this.client.request<TelephonyBannerAccess>('GET', url)
  }
  */

  /**
   * The web access for your cloudpabx [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/bannerAccess#POST)
   */
  CreateANewWebAccessForThisRessource(agentId: number, billingAccount: string, serviceName: string): Promise<TelephonyBannerAccess> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/bannerAccess`

    return this.client.request<TelephonyBannerAccess>('POST', url)
  }

  /**
   * The web access for your cloudpabx [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/bannerAccess#DELETE)
   */
  DeleteTheGivenWebAccess(agentId: number, billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/bannerAccess`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls#GET)
   */
  CurrentCallsOfTheCallcenterAgent(agentId: number, billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, id: number, serviceName: string): Promise<TelephonyOvhPabxHuntingQueueLiveCalls> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}`

    return this.client.request<TelephonyOvhPabxHuntingQueueLiveCalls>('GET', url)
  }
  */

  /**
   * eavesdrop operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/eavesdrop#POST)
   */
  EavesdropOnACall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/eavesdrop`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }

  /**
   * hangup operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/hangup#POST)
   */
  HangupACall(agentId: number, billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/hangup`

    return this.client.request<TelephonyTask>('POST', url)
  }

  /**
   * hold operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/hold#POST)
   */
  ToogleHoldOnCall(agentId: number, billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/hold`

    return this.client.request<TelephonyTask>('POST', url)
  }

  /**
   * intercept operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/intercept#POST)
   */
  InterceptANonAnsweredCall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/intercept`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }

  /**
   * transfer operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/transfer#POST)
   */
  TransferAnAnsweredCall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/transfer`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }

  /**
   * whisper operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/whisper#POST)
   */
  WhisperOnACall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string, whisperingMode: TelephonyOvhPabxWhisperingMode): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/whisper`

    return this.client.request<TelephonyTask>('POST', url, {number, whisperingMode})
  }

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/eventToken#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, serviceName: string): Promise<TelephonyEventToken> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/eventToken`

    return this.client.request<TelephonyEventToken>('GET', url)
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/eventToken#POST)
   */
  CreateANewToken(agentId: number, billingAccount: string, expiration: TelephonyTokenExpiration, serviceName: string): Promise<string> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/eventToken`

    return this.client.request<string>('POST', url, {expiration})
  }

  /**
   * Token associated to the service for live event [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/eventToken#DELETE)
   */
  DeleteTheGivenToken(agentId: number, billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/eventToken`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/liveStatus#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentLiveStatus> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/liveStatus`

    return this.client.request<TelephonyOvhPabxHuntingAgentLiveStatus>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue#GET)
   */
  AgentAssignedToTheQueues(agentId: number, billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/queue`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue#POST)
   */
  CreateANewSkillForAnAgentItAddsTheAgentInAQueue(agentId: number, billingAccount: string, position: number, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentQueue> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/queue`

    return this.client.request<TelephonyOvhPabxHuntingAgentQueue>('POST', url, {position, queueId})
  }

  /**
   * Agent assigned to a queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue/%7BqueueId%7D#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentQueue> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/queue/${queueId}`

    return this.client.request<TelephonyOvhPabxHuntingAgentQueue>('GET', url)
  }
  */

  /**
   * Agent assigned to a queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue/%7BqueueId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string, payload: TelephonyOvhPabxHuntingAgentQueue): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/queue/${queueId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Agent assigned to a queue [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue/%7BqueueId%7D#DELETE)
   */
  DeleteTheGivenSkill(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/queue/${queueId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue/%7BqueueId%7D/liveStatus#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentLiveStatus> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/queue/${queueId}/liveStatus`

    return this.client.request<TelephonyOvhPabxHuntingAgentLiveStatus>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxCustomStatus objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/customStatus#GET)
   */
  CustomStatusesOfYourAgents(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/customStatus`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxCustomStatus objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/customStatus#POST)
   */
  CreateANewCustomStatus(billingAccount: string, name: string, serviceName: string, color?: string, description?: string): Promise<TelephonyOvhPabxCustomStatus> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/customStatus`

    return this.client.request<TelephonyOvhPabxCustomStatus>('POST', url, {name, color, description})
  }

  /**
   * Custom statuses of your callcenter agents [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/customStatus/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyOvhPabxCustomStatus> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/customStatus/${id}`

    return this.client.request<TelephonyOvhPabxCustomStatus>('GET', url)
  }
  */

  /**
   * Custom statuses of your callcenter agents [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/customStatus/%7Bid%7D#DELETE)
   */
  DeleteTheGivenCustomStatus(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/customStatus/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/eventToken#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyEventToken> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/eventToken`

    return this.client.request<TelephonyEventToken>('GET', url)
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/eventToken#POST)
   */
  /*
  CreateANewToken(billingAccount: string, expiration: TelephonyTokenExpiration, serviceName: string): Promise<string> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/eventToken`

    return this.client.request<string>('POST', url, {expiration})
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/eventToken#DELETE)
   */
  /*
  DeleteTheGivenToken(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/eventToken`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingQueue objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue#GET)
   */
  CallsQueues(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxHuntingQueue objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue#POST)
   */
  CreateANewQueue(billingAccount: string, serviceName: string, strategy: TelephonyOvhPabxHuntingQueueStrategy, actionOnClosure?: TelephonyOvhPabxQueueAction, actionOnClosureParam?: string, actionOnOverflow?: TelephonyOvhPabxQueueAction, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: TelephonyOvhPabxHuntingQueueRecordDisablingDigit, recordDisablingLanguage?: TelephonyOvhPabxHuntingQueueRecordDisablingLanguage, soundOnHold?: number): Promise<TelephonyOvhPabxHuntingQueue> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue`

    return this.client.request<TelephonyOvhPabxHuntingQueue>('POST', url, {strategy, actionOnClosure, actionOnClosureParam, actionOnOverflow, actionOnOverflowParam, askForRecordDisabling, description, maxMember, maxWaitTime, record, recordDisablingDigit, recordDisablingLanguage, soundOnHold})
  }

  /**
   * Calls queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingQueue> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}`

    return this.client.request<TelephonyOvhPabxHuntingQueue>('GET', url)
  }
  */

  /**
   * Calls queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, queueId: number, serviceName: string, payload: TelephonyOvhPabxHuntingQueue): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Calls queue [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D#DELETE)
   */
  DeleteTheGivenQueue(billingAccount: string, queueId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent#GET)
   */
  AgentAssignedToTheQueue(billingAccount: string, queueId: number, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/agent`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent#POST)
   */
  /*
  CreateANewSkillForAnAgentItAddsTheAgentInAQueue(billingAccount: string, position: number, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentQueue> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/agent`

    return this.client.request<TelephonyOvhPabxHuntingAgentQueue>('POST', url, {position, queueId})
  }
  */

  /**
   * Agent assigned to a queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent/%7BagentId%7D#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentQueue> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/agent/${agentId}`

    return this.client.request<TelephonyOvhPabxHuntingAgentQueue>('GET', url)
  }
  */

  /**
   * Agent assigned to a queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent/%7BagentId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string, payload: TelephonyOvhPabxHuntingAgentQueue): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/agent/${agentId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Agent assigned to a queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent/%7BagentId%7D#DELETE)
   */
  /*
  DeleteTheGivenSkill(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/agent/${agentId}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent/%7BagentId%7D/liveStatus#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentLiveStatus> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/agent/${agentId}/liveStatus`

    return this.client.request<TelephonyOvhPabxHuntingAgentLiveStatus>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls#GET)
   */
  LiveCallsOfTheQueue(billingAccount: string, queueId: number, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/liveCalls`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingQueueLiveCalls> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}`

    return this.client.request<TelephonyOvhPabxHuntingQueueLiveCalls>('GET', url)
  }
  */

  /**
   * eavesdrop operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/eavesdrop#POST)
   */
  /*
  EavesdropOnACall(billingAccount: string, id: number, number: any, queueId: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/eavesdrop`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * hangup operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/hangup#POST)
   */
  /*
  HangupACall(billingAccount: string, id: number, queueId: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/hangup`

    return this.client.request<TelephonyTask>('POST', url)
  }
  */

  /**
   * hold operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/hold#POST)
   */
  /*
  ToogleHoldOnCall(billingAccount: string, id: number, queueId: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/hold`

    return this.client.request<TelephonyTask>('POST', url)
  }
  */

  /**
   * intercept operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/intercept#POST)
   */
  /*
  InterceptANonAnsweredCall(billingAccount: string, id: number, number: any, queueId: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/intercept`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * transfer operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/transfer#POST)
   */
  /*
  TransferAnAnsweredCall(billingAccount: string, id: number, number: any, queueId: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/transfer`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * whisper operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/whisper#POST)
   */
  /*
  WhisperOnACall(billingAccount: string, id: number, number: any, queueId: number, serviceName: string, whisperingMode: TelephonyOvhPabxWhisperingMode): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/whisper`

    return this.client.request<TelephonyTask>('POST', url, {number, whisperingMode})
  }
  */

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveStatistics#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingQueueLiveStatistics> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/liveStatistics`

    return this.client.request<TelephonyOvhPabxHuntingQueueLiveStatistics>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxRecord objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/records#GET)
   */
  RecordsAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/records`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * The PABX records [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/records/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyOvhPabxRecord> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/records/${id}`

    return this.client.request<TelephonyOvhPabxRecord>('GET', url)
  }
  */

  /**
   * The PABX records [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/records/%7Bid%7D#DELETE)
   */
  DeleteTheGivenRecord(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/records/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Easy hunting screen lists conditions options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/screenListConditions#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyEasyHuntingScreenListsConditionsSettings> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/screenListConditions`

    return this.client.request<TelephonyEasyHuntingScreenListsConditionsSettings>('GET', url)
  }
  */

  /**
   * Easy hunting screen lists conditions options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/screenListConditions#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyEasyHuntingScreenListsConditionsSettings): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/screenListConditions`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.EasyHuntingScreenListsConditions objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/screenListConditions/conditions#GET)
   */
  ScreenListsConditionsCheckedWhenACallIsReceived(billingAccount: string, serviceName: string, screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListType): Promise<number[]> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/screenListConditions/conditions?`

    const queryParams = new QueryParams()
    if (screenListType) { queryParams.set('screenListType', screenListType.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the telephony.EasyHuntingScreenListsConditions objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/screenListConditions/conditions#POST)
   */
  CreateANewScreenlistConditionForAnExtension(billingAccount: string, screenListType: TelephonyOvhPabxDialplanExtensionConditionScreenListType, serviceName: string, callerIdNumber?: string, destinationNumber?: string): Promise<TelephonyEasyHuntingScreenListsConditions> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/screenListConditions/conditions`

    return this.client.request<TelephonyEasyHuntingScreenListsConditions>('POST', url, {screenListType, callerIdNumber, destinationNumber})
  }

  /**
   * Screenlist condition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/screenListConditions/conditions/%7BconditionId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, conditionId: number, serviceName: string): Promise<TelephonyEasyHuntingScreenListsConditions> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/screenListConditions/conditions/${conditionId}`

    return this.client.request<TelephonyEasyHuntingScreenListsConditions>('GET', url)
  }
  */

  /**
   * Screenlist condition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/screenListConditions/conditions/%7BconditionId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, conditionId: number, serviceName: string, payload: TelephonyEasyHuntingScreenListsConditions): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/screenListConditions/conditions/${conditionId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Screenlist condition [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/screenListConditions/conditions/%7BconditionId%7D#DELETE)
   */
  DeleteTheGivenCondition(billingAccount: string, conditionId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/screenListConditions/conditions/${conditionId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the telephony.OvhPabxSound objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/sound#GET)
   */
  SoundsAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/sound`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * The PABX sounds [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/sound/%7BsoundId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string, soundId: number): Promise<TelephonyOvhPabxSound> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/sound/${soundId}`

    return this.client.request<TelephonyOvhPabxSound>('GET', url)
  }
  */

  /**
   * The PABX sounds [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/sound/%7BsoundId%7D#DELETE)
   */
  DeleteTheGivenSound(billingAccount: string, serviceName: string, soundId: number): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/sound/${soundId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * soundUpload operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/soundUpload#POST)
   */
  UploadNewSoundFile(billingAccount: string, serviceName: string, documentId?: string, name?: string, _url?: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/soundUpload`

    return this.client.request<TelephonyTask>('POST', url, {documentId, name, _url})
  }

  /**
   * Easy hunting time conditions options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/timeConditions#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyEasyHuntingTimeConditionsSettings> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/timeConditions`

    return this.client.request<TelephonyEasyHuntingTimeConditionsSettings>('GET', url)
  }
  */

  /**
   * Easy hunting time conditions options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/timeConditions#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyEasyHuntingTimeConditionsSettings): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/timeConditions`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.EasyHuntingTimeConditions objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/timeConditions/conditions#GET)
   */
  TimeConditionsCheckedWhenACallIsReceived(billingAccount: string, serviceName: string, policy?: TelephonyTimeConditionsPolicy): Promise<number[]> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/timeConditions/conditions?`

    const queryParams = new QueryParams()
    if (policy) { queryParams.set('policy', policy.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the telephony.EasyHuntingTimeConditions objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/timeConditions/conditions#POST)
   */
  CreateANewTimeCondition(billingAccount: string, policy: TelephonyTimeConditionsPolicy, serviceName: string, timeFrom: any, timeTo: any, weekDay: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay): Promise<TelephonyEasyHuntingTimeConditions> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/timeConditions/conditions`

    return this.client.request<TelephonyEasyHuntingTimeConditions>('POST', url, {policy, timeFrom, timeTo, weekDay})
  }

  /**
   * Easy hunting time conditions [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/timeConditions/conditions/%7BconditionId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, conditionId: number, serviceName: string): Promise<TelephonyEasyHuntingTimeConditions> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/timeConditions/conditions/${conditionId}`

    return this.client.request<TelephonyEasyHuntingTimeConditions>('GET', url)
  }
  */

  /**
   * Easy hunting time conditions [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/timeConditions/conditions/%7BconditionId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, conditionId: number, serviceName: string, payload: TelephonyEasyHuntingTimeConditions): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/timeConditions/conditions/${conditionId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Easy hunting time conditions [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/timeConditions/conditions/%7BconditionId%7D#DELETE)
   */
  /*
  DeleteTheGivenCondition(billingAccount: string, conditionId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/timeConditions/conditions/${conditionId}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the telephony.EasyPabx objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx#GET)
   */
  EasyPabxAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/easyPabx`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * EasyPabx [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyEasyPabx> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}`

    return this.client.request<TelephonyEasyPabx>('GET', url)
  }
  */

  /**
   * EasyPabx [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyEasyPabx): Promise<void> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * EasyPabx Hunting [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D/hunting#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyEasyPabxHunting> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting`

    return this.client.request<TelephonyEasyPabxHunting>('GET', url)
  }
  */

  /**
   * EasyPabx Hunting [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D/hunting#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyEasyPabxHunting): Promise<void> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D/hunting/agent#GET)
   */
  HuntingAgents(billingAccount: string, serviceName: string): Promise<any> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting/agent`

    return this.client.request<any>('GET', url)
  }

  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D/hunting/agent#POST)
   */
  /*
  CreateANewAgent(agentNumber: any, billingAccount: string, logged: boolean, noReplyTimer: number, position: number, serviceName: string): Promise<TelephonyEasyMiniPabxHuntingAgent> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting/agent`

    return this.client.request<TelephonyEasyMiniPabxHuntingAgent>('POST', url, {agentNumber, logged, noReplyTimer, position})
  }
  */

  /**
   * Easy/Mini PABX agent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D/hunting/agent/%7BagentNumber%7D#GET)
   */
  /*
  GetThisObjectProperties(agentNumber: any, billingAccount: string, serviceName: string): Promise<TelephonyEasyMiniPabxHuntingAgent> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting/agent/${agentNumber}`

    return this.client.request<TelephonyEasyMiniPabxHuntingAgent>('GET', url)
  }
  */

  /**
   * Easy/Mini PABX agent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D/hunting/agent/%7BagentNumber%7D#PUT)
   */
  /*
  AlterThisObjectProperties(agentNumber: any, billingAccount: string, serviceName: string, payload: TelephonyEasyMiniPabxHuntingAgent): Promise<void> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting/agent/${agentNumber}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Easy/Mini PABX agent [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D/hunting/agent/%7BagentNumber%7D#DELETE)
   */
  DeleteTheAgent(agentNumber: any, billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting/agent/${agentNumber}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Line tones [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D/hunting/tones#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyTones> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting/tones`

    return this.client.request<TelephonyTones>('GET', url)
  }
  */

  /**
   * Line tones [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D/hunting/tones#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyTones): Promise<void> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting/tones`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * toneUpload operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyPabx/%7BserviceName%7D/hunting/tones/toneUpload#POST)
   */
  UploadNewToneFile(billingAccount: string, serviceName: string, type: TelephonyTonesType, documentId?: string, _url?: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting/tones/toneUpload`

    return this.client.request<TelephonyTask>('POST', url, {type, documentId, _url})
  }

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/eventToken#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string): Promise<TelephonyEventToken> {
    let url = `/telephony/${billingAccount}/eventToken`

    return this.client.request<TelephonyEventToken>('GET', url)
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/eventToken#POST)
   */
  /*
  CreateANewToken(billingAccount: string, expiration: TelephonyTokenExpiration): Promise<string> {
    let url = `/telephony/${billingAccount}/eventToken`

    return this.client.request<string>('POST', url, {expiration})
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/eventToken#DELETE)
   */
  /*
  DeleteTheGivenToken(billingAccount: string): Promise<void> {
    let url = `/telephony/${billingAccount}/eventToken`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the telephony.Fax objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax#GET)
   */
  FaxesAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/fax`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Fax service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyFax> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}`

    return this.client.request<TelephonyFax>('GET', url)
  }
  */

  /**
   * Fax service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyFax): Promise<void> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.FaxCampaign objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/campaigns#GET)
   */
  FaxCampaignsOfTheAssociateFax(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.FaxCampaign objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/campaigns#POST)
   */
  CreateANewFaxCampaign(billingAccount: string, documentId: string, name: string, recipientsType: TelephonyFaxCampaignRecipientsType, sendType: TelephonyFaxCampaignSendType, serviceName: string, faxQuality?: TelephonyFaxQuality, recipientsDocId?: string, recipientsList?: any, sendDate?: string): Promise<TelephonyFaxCampaign> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns`

    return this.client.request<TelephonyFaxCampaign>('POST', url, {documentId, name, recipientsType, sendType, faxQuality, recipientsDocId, recipientsList, sendDate})
  }

  /**
   * Fax campaigns [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/campaigns/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyFaxCampaign> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns/${id}`

    return this.client.request<TelephonyFaxCampaign>('GET', url)
  }
  */

  /**
   * Fax campaigns [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/campaigns/%7Bid%7D#DELETE)
   */
  DeleteAFaxCampaign(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * detail operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/campaigns/%7Bid%7D/detail#GET)
   */
  DetailOfTheFaxRecipientsByStatus(billingAccount: string, id: number, serviceName: string): Promise<TelephonyFaxCampaignDetail> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns/${id}/detail`

    return this.client.request<TelephonyFaxCampaignDetail>('GET', url)
  }

  /**
   * start operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/campaigns/%7Bid%7D/start#POST)
   */
  StartAFaxCampaign(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns/${id}/start`

    return this.client.request<void>('POST', url)
  }

  /**
   * stop operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/campaigns/%7Bid%7D/stop#POST)
   */
  StopAFaxCampaign(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns/${id}/stop`

    return this.client.request<void>('POST', url)
  }

  /**
   * Fax ScreenLists [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/screenLists#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyFaxScreen> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/screenLists`

    return this.client.request<TelephonyFaxScreen>('GET', url)
  }
  */

  /**
   * Fax ScreenLists [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/screenLists#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyFaxScreen): Promise<void> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/screenLists`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Fax ScreenLists [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/screenLists#POST)
   */
  CreateANewFaxScreenLists(billingAccount: string, serviceName: string, blacklistedNumbers?: string[], blacklistedTSI?: string[], filteringList?: TelephonyFaxScreenListType, whitelistedNumbers?: string[], whitelistedTSI?: string[]): Promise<TelephonyFaxScreen> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/screenLists`

    return this.client.request<TelephonyFaxScreen>('POST', url, {blacklistedNumbers, blacklistedTSI, filteringList, whitelistedNumbers, whitelistedTSI})
  }

  /**
   * Fax ScreenLists [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/screenLists#DELETE)
   */
  DeleteAllFaxScreenLists(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/screenLists`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * reset operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/screenLists/reset#POST)
   */
  ResetASpecificalFaxScreenList(billingAccount: string, serviceName: string, blacklistedNumbers?: boolean, blacklistedTSI?: boolean, whitelistedNumbers?: boolean, whitelistedTSI?: boolean): Promise<void> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/screenLists/reset`

    return this.client.request<void>('POST', url, {blacklistedNumbers, blacklistedTSI, whitelistedNumbers, whitelistedTSI})
  }

  /**
   * Fax properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/settings#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyFaxProperties> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/settings`

    return this.client.request<TelephonyFaxProperties>('GET', url)
  }
  */

  /**
   * Fax properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/settings#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyFaxProperties): Promise<void> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/settings`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/settings/changePassword#POST)
   */
  GeneratesANewPasswordForYourFaxAccount(billingAccount: string, serviceName: string, password?: string): Promise<string> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/settings/changePassword`

    return this.client.request<string>('POST', url, {password})
  }

  /**
   * sendFax operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/settings/sendFax#POST)
   */
  SendAFax(billingAccount: string, pdfUrl: string, recipients: any, serviceName: string, dateSchedule?: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/fax/${serviceName}/settings/sendFax`

    return this.client.request<TelephonyTask>('POST', url, {pdfUrl, recipients, dateSchedule})
  }

  /**
   * List the telephony.HistoryConsumption objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyConsumption#GET)
   */
  PreviousBilledConsumptions(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/historyConsumption`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Previous billed consumptions [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyConsumption/%7Bdate%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, date: string): Promise<TelephonyHistoryConsumption> {
    let url = `/telephony/${billingAccount}/historyConsumption/${date}`

    return this.client.request<TelephonyHistoryConsumption>('GET', url)
  }
  */

  /**
   * file operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyConsumption/%7Bdate%7D/file#GET)
   */
  PreviousBilledConsumptionFiles(billingAccount: string, date: string, extension: TelephonyBillDocument): Promise<TelephonyPcsFile> {
    let url = `/telephony/${billingAccount}/historyConsumption/${date}/file?`

    const queryParams = new QueryParams()
    if (extension) { queryParams.set('extension', extension.toString()) }

    return this.client.request<TelephonyPcsFile>('GET', url+queryParams.toString())
  }

  /**
   * List the telephony.HistoryRepaymentConsumption objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyRepaymentConsumption#GET)
   */
  PreviousRepaymentBill(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/historyRepaymentConsumption`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the telephony.HistoryRepaymentConsumption objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyRepaymentConsumption#POST)
   */
  AskForANewRepayment(billingAccount: string, billingNumber?: string): Promise<TelephonyHistoryRepaymentConsumption> {
    let url = `/telephony/${billingAccount}/historyRepaymentConsumption`

    return this.client.request<TelephonyHistoryRepaymentConsumption>('POST', url, {billingNumber})
  }

  /**
   * Previous repayment bill [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyRepaymentConsumption/%7Bdate%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, date: string): Promise<TelephonyHistoryRepaymentConsumption> {
    let url = `/telephony/${billingAccount}/historyRepaymentConsumption/${date}`

    return this.client.request<TelephonyHistoryRepaymentConsumption>('GET', url)
  }
  */

  /**
   * document operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyRepaymentConsumption/%7Bdate%7D/document#GET)
   */
  GetTheCsvDocument(billingAccount: string, date: string): Promise<TelephonyPcsFile> {
    let url = `/telephony/${billingAccount}/historyRepaymentConsumption/${date}/document`

    return this.client.request<TelephonyPcsFile>('GET', url)
  }

  /**
   * List the telephony.HistoryTollfreeConsumption objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyTollfreeConsumption#GET)
   */
  PreviousTollfreeBill(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/historyTollfreeConsumption`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Previous tollfree bill [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyTollfreeConsumption/%7Bdate%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, date: string): Promise<TelephonyHistoryTollfreeConsumption> {
    let url = `/telephony/${billingAccount}/historyTollfreeConsumption/${date}`

    return this.client.request<TelephonyHistoryTollfreeConsumption>('GET', url)
  }
  */

  /**
   * document operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyTollfreeConsumption/%7Bdate%7D/document#GET)
   */
  /*
  GetTheCsvDocument(billingAccount: string, date: string): Promise<TelephonyPcsFile> {
    let url = `/telephony/${billingAccount}/historyTollfreeConsumption/${date}/document`

    return this.client.request<TelephonyPcsFile>('GET', url)
  }
  */

  /**
   * List the telephony.Line objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line#GET)
   */
  LinesAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/line`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Line service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyLine> {
    let url = `/telephony/${billingAccount}/line/${serviceName}`

    return this.client.request<TelephonyLine>('GET', url)
  }
  */

  /**
   * Line service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyLine): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.AbbreviatedNumber objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/abbreviatedNumber#GET)
   */
  AbbreviatedNumbersForTheLine(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/abbreviatedNumber`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.AbbreviatedNumber objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/abbreviatedNumber#POST)
   */
  CreateANewAbbreviatedNumberForTheLine(abbreviatedNumber: number, billingAccount: string, destinationNumber: any, name: string, serviceName: string, surname: string): Promise<TelephonyAbbreviatedNumber> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/abbreviatedNumber`

    return this.client.request<TelephonyAbbreviatedNumber>('POST', url, {abbreviatedNumber, destinationNumber, name, surname})
  }

  /**
   * Abbreviated number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/abbreviatedNumber/%7BabbreviatedNumber%7D#GET)
   */
  /*
  GetThisObjectProperties(abbreviatedNumber: number, billingAccount: string, serviceName: string): Promise<TelephonyAbbreviatedNumber> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/abbreviatedNumber/${abbreviatedNumber}`

    return this.client.request<TelephonyAbbreviatedNumber>('GET', url)
  }
  */

  /**
   * Abbreviated number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/abbreviatedNumber/%7BabbreviatedNumber%7D#PUT)
   */
  /*
  AlterThisObjectProperties(abbreviatedNumber: number, billingAccount: string, serviceName: string, payload: TelephonyAbbreviatedNumber): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/abbreviatedNumber/${abbreviatedNumber}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Abbreviated number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/abbreviatedNumber/%7BabbreviatedNumber%7D#DELETE)
   */
  /*
  DeleteTheGivenAbbreviatedNumber(abbreviatedNumber: number, billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/abbreviatedNumber/${abbreviatedNumber}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * activateNewPhone operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/activateNewPhone#GET)
   */
  CheckIfThereIsANewPhoneToActivateAndIfItPossibleInCaseOfPhoneSwitch(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/activateNewPhone`

    return this.client.request<void>('GET', url)
  }

  /**
   * activateNewPhone operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/activateNewPhone#POST)
   */
  AllowToActivateNewPhoneInCaseOfPhoneSwitch(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/activateNewPhone`

    return this.client.request<void>('POST', url)
  }

  /**
   * antihack operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/antihack#GET)
   */
  CurrentListOfNumbersOrShortCodeNumbersRestrictedByAnAutoAntihack(billingAccount: string, serviceName: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/antihack`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * antihack operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/antihack#POST)
   */
  CleanTheAntihackOrAddItOnActiveFilterScreenList(action: TelephonyAntihackAction, billingAccount: string, serviceName: string, restricted?: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/antihack`

    return this.client.request<void>('POST', url, {action, restricted})
  }

  /**
   * associateDevice operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/associateDevice#POST)
   */
  AssociateADeviceToTheCurrentLineWithTheDeviceMacAddress(billingAccount: string, macAddress: string, serviceName: string, ipAddress?: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/associateDevice`

    return this.client.request<void>('POST', url, {macAddress, ipAddress})
  }

  /**
   * List the telephony.CallsGenerated objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/automaticCall#GET)
   */
  AutomaticCallsMadeByCallsGeneratorOnThisLine(billingAccount: string, serviceName: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/automaticCall`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the telephony.CallsGenerated objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/automaticCall#POST)
   */
  MakeAnAutomaticPhoneCallReturnGeneratedCallIdentifier(billingAccount: string, calledNumber: any, dialplan: TelephonyCallsGeneratorDialplan, isAnonymous: boolean, serviceName: string, bridgeNumberDialplan?: any, callingNumber?: any, playbackAudioFileDialplan?: string, timeout?: number, ttsTextDialplan?: string): Promise<string> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/automaticCall`

    return this.client.request<string>('POST', url, {calledNumber, dialplan, isAnonymous, bridgeNumberDialplan, callingNumber, playbackAudioFileDialplan, timeout, ttsTextDialplan})
  }

  /**
   * Automatic Call made by Call Generator on this line [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/automaticCall/%7Bidentifier%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, identifier: string, serviceName: string): Promise<TelephonyCallsGenerated> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/automaticCall/${identifier}`

    return this.client.request<TelephonyCallsGenerated>('GET', url)
  }
  */

  /**
   * availableSipDomains operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/availableSipDomains#GET)
   */
  ListingOfDomainsSipAvailables(billingAccount: string, serviceName: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/availableSipDomains`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * block operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/block#POST)
   */
  BlockTheLineByDefaultItWillBlockIncomingAndOutgoingCallsExceptForEmergencyNumbers(billingAccount: string, serviceName: string, mode?: TelephonyLineBlockingMode): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/block`

    return this.client.request<void>('POST', url, {mode})
  }

  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/calls#GET)
   */
  TheCurrentCallsOfYourLine(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/calls`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/calls/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyOvhPabxHuntingQueueLiveCalls> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/calls/${id}`

    return this.client.request<TelephonyOvhPabxHuntingQueueLiveCalls>('GET', url)
  }
  */

  /**
   * eavesdrop operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/calls/%7Bid%7D/eavesdrop#POST)
   */
  /*
  EavesdropOnACall(billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/calls/${id}/eavesdrop`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * hangup operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/calls/%7Bid%7D/hangup#POST)
   */
  /*
  HangupACall(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/calls/${id}/hangup`

    return this.client.request<TelephonyTask>('POST', url)
  }
  */

  /**
   * hold operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/calls/%7Bid%7D/hold#POST)
   */
  /*
  ToogleHoldOnCall(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/calls/${id}/hold`

    return this.client.request<TelephonyTask>('POST', url)
  }
  */

  /**
   * intercept operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/calls/%7Bid%7D/intercept#POST)
   */
  /*
  InterceptANonAnsweredCall(billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/calls/${id}/intercept`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * transfer operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/calls/%7Bid%7D/transfer#POST)
   */
  /*
  TransferAnAnsweredCall(billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/calls/${id}/transfer`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * whisper operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/calls/%7Bid%7D/whisper#POST)
   */
  /*
  WhisperOnACall(billingAccount: string, id: number, number: any, serviceName: string, whisperingMode: TelephonyOvhPabxWhisperingMode): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/calls/${id}/whisper`

    return this.client.request<TelephonyTask>('POST', url, {number, whisperingMode})
  }
  */

  /**
   * cancelConvertToNumber operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/cancelConvertToNumber#POST)
   */
  CancelAScheduledConversionToNumber(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/cancelConvertToNumber`

    return this.client.request<void>('POST', url)
  }

  /**
   * canChangePassword operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/canChangePassword#GET)
   */
  AbilityToManageSIPPasswordOnThisService(billingAccount: string, serviceName: string): Promise<boolean> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/canChangePassword`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/changePassword#POST)
   */
  ChangeTheSIPAccountPasswordItMustBeMoreThan7AndLessThan21AlphaAndNumericalCharacters(billingAccount: string, serviceName: string, password?: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/changePassword`

    return this.client.request<void>('POST', url, {password})
  }

  /**
   * click2Call operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/click2Call#POST)
   */
  MakeAPhoneCallFromTheCurrentLine(billingAccount: string, calledNumber: string, serviceName: string, callingNumber?: string, intercom?: boolean): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/click2Call`

    return this.client.request<void>('POST', url, {calledNumber, callingNumber, intercom})
  }

  /**
   * List the telephony.Click2CallUser objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/click2CallUser#GET)
   */
  UserWhichCanUseClick2CallOnTheLine(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/click2CallUser`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.Click2CallUser objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/click2CallUser#POST)
   */
  CreateANewUserForClick2Call(billingAccount: string, login: string, password: string, serviceName: string): Promise<number> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/click2CallUser`

    return this.client.request<number>('POST', url, {login, password})
  }

  /**
   * User of the click 2 call [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/click2CallUser/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyClick2CallUser> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/click2CallUser/${id}`

    return this.client.request<TelephonyClick2CallUser>('GET', url)
  }
  */

  /**
   * User of the click 2 call [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/click2CallUser/%7Bid%7D#DELETE)
   */
  DeleteAClick2CallUser(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/click2CallUser/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/click2CallUser/%7Bid%7D/changePassword#POST)
   */
  ChangeThePasswordOfTheClick2callUser(billingAccount: string, id: number, password: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/click2CallUser/${id}/changePassword`

    return this.client.request<void>('POST', url, {password})
  }

  /**
   * click2Call operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/click2CallUser/%7Bid%7D/click2Call#POST)
   */
  /*
  MakeAPhoneCallFromTheCurrentLine(billingAccount: string, calledNumber: string, id: number, serviceName: string, callingNumber?: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/click2CallUser/${id}/click2Call`

    return this.client.request<void>('POST', url, {calledNumber, callingNumber})
  }
  */

  /**
   * convertToNumber operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/convertToNumber#POST)
   */
  ScheduleAConversionToNumber(billingAccount: string, serviceName: string): Promise<TelephonyOfferTask> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/convertToNumber`

    return this.client.request<TelephonyOfferTask>('POST', url)
  }

  /**
   * dissociateDevice operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/dissociateDevice#POST)
   */
  DissociateADeviceFromTheCurrentLineWithTheDeviceMacAddress(billingAccount: string, macAddress: string, serviceName: string, ipAddress?: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/dissociateDevice`

    return this.client.request<void>('POST', url, {macAddress, ipAddress})
  }

  /**
   * ips operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/ips#GET)
   */
  ListingOfLastIpsRegistry(billingAccount: string, serviceName: string): Promise<TelephonyDatetimeAndIpvalue[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/ips`

    return this.client.request<TelephonyDatetimeAndIpvalue[]>('GET', url)
  }

  /**
   * lastRegistrations operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/lastRegistrations#GET)
   */
  ListTheInformationsAboutTheLastRegistrationsIeIPPortUserAgent(billingAccount: string, serviceName: string): Promise<TelephonyRegistrationInformations[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/lastRegistrations`

    return this.client.request<TelephonyRegistrationInformations[]>('GET', url)
  }

  /**
   * listAssociablePhones operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/listAssociablePhones#GET)
   */
  ListPhonesWithAvailableSlotsWhereThisLineCanBeAttached(billingAccount: string, serviceName: string): Promise<TelephonyLinePhoneAssociable[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/listAssociablePhones`

    return this.client.request<TelephonyLinePhoneAssociable[]>('GET', url)
  }

  /**
   * maximumAvailableSimultaneousLines operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/maximumAvailableSimultaneousLines#GET)
   */
  GetTheMaximumAvailableSimultaneousLinesForThisLine(billingAccount: string, serviceName: string): Promise<number> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/maximumAvailableSimultaneousLines`

    return this.client.request<number>('GET', url)
  }

  /**
   * offer operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/offer#GET)
   */
  ReturnPublicOfferProperty(billingAccount: string, serviceName: string): Promise<TelephonyLineOffer> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/offer`

    return this.client.request<TelephonyLineOffer>('GET', url)
  }

  /**
   * Line options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/options#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyLineOptions> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/options`

    return this.client.request<TelephonyLineOptions>('GET', url)
  }
  */

  /**
   * Line options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/options#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyLineOptions): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/options`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * availableCodecs operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/options/availableCodecs#GET)
   */
  ListOfCodecsCombinaisonsAvailableForThisLine(billingAccount: string, serviceName: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/options/availableCodecs`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * defaultCodecs operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/options/defaultCodecs#GET)
   */
  GetTheDefaultCodecsForThisLineIfNoneAreSet(billingAccount: string, serviceName: string): Promise<string> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/options/defaultCodecs`

    return this.client.request<string>('GET', url)
  }

  /**
   * Plug & Phone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyPhone> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone`

    return this.client.request<TelephonyPhone>('GET', url)
  }
  */

  /**
   * Plug & Phone [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyPhone): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * adminCredentials operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/adminCredentials#GET)
   */
  ReturnsTheAdministrationUserAndPasswordOfThePhoneIfYouAreAVIP(billingAccount: string, serviceName: string): Promise<TelephonyPhoneCredentials> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/adminCredentials`

    return this.client.request<TelephonyPhoneCredentials>('GET', url)
  }

  /**
   * changePhoneConfiguration operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/changePhoneConfiguration#POST)
   */
  EditConfigurationOfThePhoneRemotelyByProvisioning(billingAccount: string, serviceName: string, autoReboot?: boolean, newConfigurations?: any): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/changePhoneConfiguration`

    return this.client.request<void>('POST', url, {autoReboot, newConfigurations})
  }

  /**
   * List the telephony.FunctionKey objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/functionKey#GET)
   */
  PlugAndPhoneFunctionKeys(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/functionKey`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Plug & Phone function key [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/functionKey/%7BkeyNum%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, keyNum: number, serviceName: string): Promise<TelephonyFunctionKey> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/functionKey/${keyNum}`

    return this.client.request<TelephonyFunctionKey>('GET', url)
  }
  */

  /**
   * Plug & Phone function key [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/functionKey/%7BkeyNum%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, keyNum: number, serviceName: string, payload: TelephonyFunctionKey): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/functionKey/${keyNum}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * availableFunction operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/functionKey/%7BkeyNum%7D/availableFunction#GET)
   */
  ListTheAvailableFunctionsForTheKey(billingAccount: string, keyNum: number, serviceName: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/functionKey/${keyNum}/availableFunction`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * merchandiseAvailable operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/merchandiseAvailable#GET)
   */
  ListOfAvailableExchangeMerchandiseBrand(billingAccount: string, serviceName: string): Promise<TelephonyHardwareOffer[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/merchandiseAvailable`

    return this.client.request<TelephonyHardwareOffer[]>('GET', url)
  }

  /**
   * List the telephony.Phonebook objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook#GET)
   */
  ReturnPhonebooksAssociated(billingAccount: string, serviceName: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the telephony.Phonebook objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook#POST)
   */
  AddAPhonebookReturnTheBookKey(billingAccount: string, name: string, serviceName: string): Promise<string> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook`

    return this.client.request<string>('POST', url, {name})
  }

  /**
   * Phone book [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, bookKey: string, serviceName: string): Promise<TelephonyPhonebook> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}`

    return this.client.request<TelephonyPhonebook>('GET', url)
  }
  */

  /**
   * Phone book [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, bookKey: string, serviceName: string, payload: TelephonyPhonebook): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Phone book [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D#DELETE)
   */
  DeleteAPhonebook(billingAccount: string, bookKey: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * export operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D/export#GET)
   */
  ExportThePhonebookContacts(billingAccount: string, bookKey: string, format: TelephonyContactsExportFormats, serviceName: string): Promise<TelephonyPcsFile> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/export?`

    const queryParams = new QueryParams()
    if (format) { queryParams.set('format', format.toString()) }

    return this.client.request<TelephonyPcsFile>('GET', url+queryParams.toString())
  }

  /**
   * import operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D/import#POST)
   */
  ImportAContactsFileSupportedFormatsAreExcelXlsAndXlsxAndCSV(billingAccount: string, bookKey: string, documentId: string, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/import`

    return this.client.request<TelephonyTask>('POST', url, {documentId})
  }

  /**
   * List the telephony.PhonebookContact objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D/phonebookContact#GET)
   */
  PhonebookContacts(billingAccount: string, bookKey: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/phonebookContact`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.PhonebookContact objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D/phonebookContact#POST)
   */
  CreateAPhonebookContactReturnIdentifierOfThePhonebookContact(billingAccount: string, bookKey: string, group: string, name: string, serviceName: string, surname: string, homeMobile?: any, homePhone?: any, workMobile?: any, workPhone?: any): Promise<number> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/phonebookContact`

    return this.client.request<number>('POST', url, {group, name, surname, homeMobile, homePhone, workMobile, workPhone})
  }

  /**
   * Phone book contact [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D/phonebookContact/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, bookKey: string, id: number, serviceName: string): Promise<TelephonyPhonebookContact> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/phonebookContact/${id}`

    return this.client.request<TelephonyPhonebookContact>('GET', url)
  }
  */

  /**
   * Phone book contact [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D/phonebookContact/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, bookKey: string, id: number, serviceName: string, payload: TelephonyPhonebookContact): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/phonebookContact/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Phone book contact [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D/phonebookContact/%7Bid%7D#DELETE)
   */
  DeleteAPhonebookContact(billingAccount: string, bookKey: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/phonebookContact/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * reboot operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/reboot#POST)
   */
  CreateATaskToRebootThePhone(billingAccount: string, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/reboot`

    return this.client.request<TelephonyTask>('POST', url)
  }

  /**
   * refreshScreen operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/refreshScreen#POST)
   */
  CreateATaskToRefreshTheScreenOfTheMGCPPhone(billingAccount: string, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/refreshScreen`

    return this.client.request<TelephonyTask>('POST', url)
  }

  /**
   * resetConfig operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/resetConfig#POST)
   */
  ReinitializeThePhoneConfiguration(billingAccount: string, ip: string, serviceName: string): Promise<TelephonyResetPhoneInfo> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/resetConfig`

    return this.client.request<TelephonyResetPhoneInfo>('POST', url, {ip})
  }

  /**
   * List the telephony.Rma objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/rma#GET)
   */
  ReturnMerchandiseAuthorisationAssociated(billingAccount: string, serviceName: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/rma`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the telephony.Rma objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/rma#POST)
   */
  CreateASpecificRma(billingAccount: string, serviceName: string, type: TelephonyRmaPublicType, mondialRelayId?: string, newMerchandise?: string, shippingContactId?: number): Promise<TelephonyRmaReturn> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/rma`

    return this.client.request<TelephonyRmaReturn>('POST', url, {type, mondialRelayId, newMerchandise, shippingContactId})
  }

  /**
   * Current Return Merchandise Authorisation [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/rma/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: string, serviceName: string): Promise<TelephonyRma> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/rma/${id}`

    return this.client.request<TelephonyRma>('GET', url)
  }
  */

  /**
   * Current Return Merchandise Authorisation [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/rma/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, id: string, serviceName: string, payload: TelephonyRma): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/rma/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Current Return Merchandise Authorisation [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/rma/%7Bid%7D#DELETE)
   */
  CancelTheRma(billingAccount: string, id: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/rma/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * supportsPhonebook operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/supportsPhonebook#GET)
   */
  DoesThePhoneManagesPhonebooks?(billingAccount: string, serviceName: string): Promise<boolean> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phone/supportsPhonebook`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * phoneCanBeAssociable operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phoneCanBeAssociable#GET)
   */
  ListThePhonesWithSipSlotAvailable(billingAccount: string, serviceName: string): Promise<TelephonyLinePhone[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/phoneCanBeAssociable`

    return this.client.request<TelephonyLinePhone[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxRecord objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/records#GET)
   */
  TheRecordingsOfYourLineOutgoingCalls(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/records`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * The PABX records [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/records/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyOvhPabxRecord> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/records/${id}`

    return this.client.request<TelephonyOvhPabxRecord>('GET', url)
  }
  */

  /**
   * The PABX records [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/records/%7Bid%7D#DELETE)
   */
  /*
  DeleteTheGivenRecord(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/records/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * removeSimultaneousLines operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/removeSimultaneousLines#POST)
   */
  RemoveExtraSimultaneousLines(billingAccount: string, quantityRemove: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/removeSimultaneousLines`

    return this.client.request<void>('POST', url, {quantityRemove})
  }

  /**
   * simultaneousChannelsDetails operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/simultaneousChannelsDetails#GET)
   */
  DetailsAboutSimultaneousChannelsOfThisLine(billingAccount: string, serviceName: string): Promise<TelephonySimultaneousChannelsDetails> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/simultaneousChannelsDetails`

    return this.client.request<TelephonySimultaneousChannelsDetails>('GET', url)
  }

  /**
   * statistics operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/statistics#GET)
   */
  GetStatisticsOfTheCurrentLine(billingAccount: string, serviceName: string, timeframe: TelephonyStatisticsTimeframe, type: TelephonyLineStatisticsType): Promise<any> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/statistics?`

    const queryParams = new QueryParams()
    if (timeframe) { queryParams.set('timeframe', timeframe.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<any>('GET', url+queryParams.toString())
  }

  /**
   * Line tones [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/tones#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyTones> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/tones`

    return this.client.request<TelephonyTones>('GET', url)
  }
  */

  /**
   * Line tones [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/tones#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyTones): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/tones`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * toneUpload operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/tones/toneUpload#POST)
   */
  /*
  UploadNewToneFile(billingAccount: string, serviceName: string, type: TelephonyTonesType, documentId?: string, _url?: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/tones/toneUpload`

    return this.client.request<TelephonyTask>('POST', url, {type, documentId, _url})
  }
  */

  /**
   * List the telephony.trafficExtract objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/trafficExtracts#GET)
   */
  TheTrafficExtractsSIPOnlyOfYourLine(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/trafficExtracts`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.trafficExtract objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/trafficExtracts#POST)
   */
  LaunchATrafficExtractOnYourLine(billingAccount: string, dateEnd: string, dateStart: string, serviceName: string): Promise<TelephonytrafficExtract> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/trafficExtracts`

    return this.client.request<TelephonytrafficExtract>('POST', url, {dateEnd, dateStart})
  }

  /**
   * Traffic extracts (SIP) of your line [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/trafficExtracts/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonytrafficExtract> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/trafficExtracts/${id}`

    return this.client.request<TelephonytrafficExtract>('GET', url)
  }
  */

  /**
   * Traffic extracts (SIP) of your line [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/trafficExtracts/%7Bid%7D#DELETE)
   */
  DeleteATrafficExtract(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/trafficExtracts/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * unblock operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/unblock#POST)
   */
  UnblockTheLineItWillRemoveAnyIncomingAndOutboingBlockMadeEarlier(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/line/${serviceName}/unblock`

    return this.client.request<void>('POST', url)
  }

  /**
   * List the telephony.MiniPabx objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx#GET)
   */
  MiniabxAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/miniPabx`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * MiniPabx [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyMiniPabx> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}`

    return this.client.request<TelephonyMiniPabx>('GET', url)
  }
  */

  /**
   * MiniPabx [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyMiniPabx): Promise<void> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * MiniPabx Hunting [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D/hunting#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyMiniPabxHunting> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}/hunting`

    return this.client.request<TelephonyMiniPabxHunting>('GET', url)
  }
  */

  /**
   * MiniPabx Hunting [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D/hunting#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyMiniPabxHunting): Promise<void> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}/hunting`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D/hunting/agent#GET)
   */
  /*
  HuntingAgents(billingAccount: string, serviceName: string): Promise<any> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}/hunting/agent`

    return this.client.request<any>('GET', url)
  }
  */

  /**
   * List the telephony.EasyMiniPabxHuntingAgent objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D/hunting/agent#POST)
   */
  /*
  CreateANewAgent(agentNumber: any, billingAccount: string, logged: boolean, noReplyTimer: number, position: number, serviceName: string): Promise<TelephonyEasyMiniPabxHuntingAgent> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}/hunting/agent`

    return this.client.request<TelephonyEasyMiniPabxHuntingAgent>('POST', url, {agentNumber, logged, noReplyTimer, position})
  }
  */

  /**
   * Easy/Mini PABX agent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D/hunting/agent/%7BagentNumber%7D#GET)
   */
  /*
  GetThisObjectProperties(agentNumber: any, billingAccount: string, serviceName: string): Promise<TelephonyEasyMiniPabxHuntingAgent> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}/hunting/agent/${agentNumber}`

    return this.client.request<TelephonyEasyMiniPabxHuntingAgent>('GET', url)
  }
  */

  /**
   * Easy/Mini PABX agent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D/hunting/agent/%7BagentNumber%7D#PUT)
   */
  /*
  AlterThisObjectProperties(agentNumber: any, billingAccount: string, serviceName: string, payload: TelephonyEasyMiniPabxHuntingAgent): Promise<void> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}/hunting/agent/${agentNumber}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Easy/Mini PABX agent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D/hunting/agent/%7BagentNumber%7D#DELETE)
   */
  /*
  DeleteTheAgent(agentNumber: any, billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}/hunting/agent/${agentNumber}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * Line tones [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D/tones#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyTones> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}/tones`

    return this.client.request<TelephonyTones>('GET', url)
  }
  */

  /**
   * Line tones [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D/tones#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyTones): Promise<void> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}/tones`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * toneUpload operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx/%7BserviceName%7D/tones/toneUpload#POST)
   */
  /*
  UploadNewToneFile(billingAccount: string, serviceName: string, type: TelephonyTonesType, documentId?: string, _url?: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/miniPabx/${serviceName}/tones/toneUpload`

    return this.client.request<TelephonyTask>('POST', url, {type, documentId, _url})
  }
  */

  /**
   * List the telephony.Number objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/number#GET)
   */
  AdditionalNumbersAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/number`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Additional number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/number/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyNumber> {
    let url = `/telephony/${billingAccount}/number/${serviceName}`

    return this.client.request<TelephonyNumber>('GET', url)
  }
  */

  /**
   * Additional number [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/number/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyNumber): Promise<void> {
    let url = `/telephony/${billingAccount}/number/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * cancelConvertToLine operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/number/%7BserviceName%7D/cancelConvertToLine#POST)
   */
  CancelAScheduledConversionToLine(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/number/${serviceName}/cancelConvertToLine`

    return this.client.request<void>('POST', url)
  }

  /**
   * changeFeatureType operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/number/%7BserviceName%7D/changeFeatureType#POST)
   */
  ChangeTheFeatureTypeOfThePhoneNumber(billingAccount: string, featureType: TelephonyType, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/number/${serviceName}/changeFeatureType`

    return this.client.request<TelephonyTask>('POST', url, {featureType})
  }

  /**
   * convertToLine operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/number/%7BserviceName%7D/convertToLine#POST)
   */
  ScheduleAConversionToLine(billingAccount: string, offer: string, serviceName: string): Promise<TelephonyOfferTask> {
    let url = `/telephony/${billingAccount}/number/${serviceName}/convertToLine`

    return this.client.request<TelephonyOfferTask>('POST', url, {offer})
  }

  /**
   * convertToLineAvailableOffers operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/number/%7BserviceName%7D/convertToLineAvailableOffers#GET)
   */
  GetTheAvailableLineOffersToScheduleAConversionToLine(billingAccount: string, serviceName: string): Promise<TelephonyLineOffersAndContracts> {
    let url = `/telephony/${billingAccount}/number/${serviceName}/convertToLineAvailableOffers`

    return this.client.request<TelephonyLineOffersAndContracts>('GET', url)
  }

  /**
   * List the telephony.OfferTask objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/offerTask#GET)
   */
  OperationsOnATelephonyServiceOffer(billingAccount: string, action?: TelephonyOfferTaskAction, status?: TelephonyTaskStatus, type?: TelephonyOfferTaskType): Promise<number[]> {
    let url = `/telephony/${billingAccount}/offerTask?`

    const queryParams = new QueryParams()
    if (action) { queryParams.set('action', action.toString()) }
    if (status) { queryParams.set('status', status.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a telephony offer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/offerTask/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, taskId: number): Promise<TelephonyOfferTask> {
    let url = `/telephony/${billingAccount}/offerTask/${taskId}`

    return this.client.request<TelephonyOfferTask>('GET', url)
  }
  */

  /**
   * Operation on a telephony offer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/offerTask/%7BtaskId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, taskId: number, payload: TelephonyOfferTask): Promise<void> {
    let url = `/telephony/${billingAccount}/offerTask/${taskId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * oldPhone operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/oldPhone#GET)
   */
  ListOldPhonesArchivedAsTheyWereNotReturnedAfterAnRMA(billingAccount: string): Promise<TelephonyOldPhone[]> {
    let url = `/telephony/${billingAccount}/oldPhone`

    return this.client.request<TelephonyOldPhone[]>('GET', url)
  }

  /**
   * List the telephony.ConsumptionThreshold objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/outplanNotification#GET)
   */
  OutplanNotificationsConfiguredForThisBillingAccount(billingAccount: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/outplanNotification`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.ConsumptionThreshold objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/outplanNotification#POST)
   */
  AddAnOutplanNotificationOnTheBillingAccount(billingAccount: string, block: TelephonyOutplanNotificationBlock, percentage: any, notifyEmail?: string): Promise<TelephonyConsumptionThreshold> {
    let url = `/telephony/${billingAccount}/outplanNotification`

    return this.client.request<TelephonyConsumptionThreshold>('POST', url, {block, percentage, notifyEmail})
  }

  /**
   * The outplan notifications configured for your billing account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/outplanNotification/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number): Promise<TelephonyConsumptionThreshold> {
    let url = `/telephony/${billingAccount}/outplanNotification/${id}`

    return this.client.request<TelephonyConsumptionThreshold>('GET', url)
  }
  */

  /**
   * The outplan notifications configured for your billing account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/outplanNotification/%7Bid%7D#DELETE)
   */
  DeleteAnOutplanNotification(billingAccount: string, id: number): Promise<void> {
    let url = `/telephony/${billingAccount}/outplanNotification/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the telephony.OvhPabx objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx#GET)
   */
  OVHCallsQueuesAndOVHIVRsInteractiveVoiceResponseAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/ovhPabx`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * OVH calls queues and OVH IVRs (Interactive Voice Response) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyOvhPabx> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}`

    return this.client.request<TelephonyOvhPabx>('GET', url)
  }
  */

  /**
   * OVH calls queues and OVH IVRs (Interactive Voice Response) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyOvhPabx): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.OvhPabxDialplan objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan#GET)
   */
  DialplansAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxDialplan objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan#POST)
   */
  CreateANewDialplan(anonymousRejection: boolean, billingAccount: string, name: string, serviceName: string, showCallerNumber: TelephonyOvhPabxDialplanNumberPresentation, transferTimeout: number): Promise<TelephonyOvhPabxDialplan> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan`

    return this.client.request<TelephonyOvhPabxDialplan>('POST', url, {anonymousRejection, name, showCallerNumber, transferTimeout})
  }

  /**
   * Dialplan [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, dialplanId: number, serviceName: string): Promise<TelephonyOvhPabxDialplan> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}`

    return this.client.request<TelephonyOvhPabxDialplan>('GET', url)
  }
  */

  /**
   * Dialplan [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, dialplanId: number, serviceName: string, payload: TelephonyOvhPabxDialplan): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Dialplan [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D#DELETE)
   */
  DeleteTheGivenDialplan(billingAccount: string, dialplanId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the telephony.OvhPabxDialplanExtension objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension#GET)
   */
  ExtensionsContainedInTheDialplan(billingAccount: string, dialplanId: number, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxDialplanExtension objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension#POST)
   */
  CreateANewExtensionForADialplan(billingAccount: string, dialplanId: number, enable: boolean, position: number, serviceName: string, schedulerCategory?: TelephonySchedulerCategory, screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListType): Promise<TelephonyOvhPabxDialplanExtension> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension`

    return this.client.request<TelephonyOvhPabxDialplanExtension>('POST', url, {enable, position, schedulerCategory, screenListType})
  }

  /**
   * Dialplan extension [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string): Promise<TelephonyOvhPabxDialplanExtension> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}`

    return this.client.request<TelephonyOvhPabxDialplanExtension>('GET', url)
  }
  */

  /**
   * Dialplan extension [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string, payload: TelephonyOvhPabxDialplanExtension): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Dialplan extension [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D#DELETE)
   */
  DeleteTheGivenExtension(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the telephony.OvhPabxDialplanExtensionConditionScreenList objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/conditionScreenList#GET)
   */
  ScreenlistConditionsCheckedWhenExecutingTheExtension(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionScreenList`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxDialplanExtensionConditionScreenList objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/conditionScreenList#POST)
   */
  /*
  CreateANewScreenlistConditionForAnExtension(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string, callerIdNumber?: string, destinationNumber?: string, screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListType): Promise<TelephonyOvhPabxDialplanExtensionConditionScreenList> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionScreenList`

    return this.client.request<TelephonyOvhPabxDialplanExtensionConditionScreenList>('POST', url, {callerIdNumber, destinationNumber, screenListType})
  }
  */

  /**
   * Screenlist condition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/conditionScreenList/%7BconditionId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, conditionId: number, dialplanId: number, extensionId: number, serviceName: string): Promise<TelephonyOvhPabxDialplanExtensionConditionScreenList> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionScreenList/${conditionId}`

    return this.client.request<TelephonyOvhPabxDialplanExtensionConditionScreenList>('GET', url)
  }
  */

  /**
   * Screenlist condition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/conditionScreenList/%7BconditionId%7D#DELETE)
   */
  /*
  DeleteTheGivenCondition(billingAccount: string, conditionId: number, dialplanId: number, extensionId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionScreenList/${conditionId}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the telephony.OvhPabxDialplanExtensionConditionTime objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/conditionTime#GET)
   */
  TimeConditionsCheckedWhenExecutingTheExtension(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionTime`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxDialplanExtensionConditionTime objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/conditionTime#POST)
   */
  CreateANewTimeConditionForAnExtension(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string, timeFrom: any, timeTo: any, weekDay: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay): Promise<TelephonyOvhPabxDialplanExtensionConditionTime> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionTime`

    return this.client.request<TelephonyOvhPabxDialplanExtensionConditionTime>('POST', url, {timeFrom, timeTo, weekDay})
  }

  /**
   * Time condition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/conditionTime/%7BconditionId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, conditionId: number, dialplanId: number, extensionId: number, serviceName: string): Promise<TelephonyOvhPabxDialplanExtensionConditionTime> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionTime/${conditionId}`

    return this.client.request<TelephonyOvhPabxDialplanExtensionConditionTime>('GET', url)
  }
  */

  /**
   * Time condition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/conditionTime/%7BconditionId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, conditionId: number, dialplanId: number, extensionId: number, serviceName: string, payload: TelephonyOvhPabxDialplanExtensionConditionTime): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionTime/${conditionId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Time condition [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/conditionTime/%7BconditionId%7D#DELETE)
   */
  /*
  DeleteTheGivenCondition(billingAccount: string, conditionId: number, dialplanId: number, extensionId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionTime/${conditionId}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the telephony.OvhPabxDialplanExtensionRule objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/rule#GET)
   */
  RulesContainedInTheExtension(billingAccount: string, dialplanId: number, extensionId: number, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/rule`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxDialplanExtensionRule objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/rule#POST)
   */
  CreateANewRuleForAnExtension(action: TelephonyOvhPabxDialplanExtensionRuleAction, billingAccount: string, dialplanId: number, extensionId: number, negativeAction: boolean, position: number, serviceName: string, actionParam?: string): Promise<TelephonyOvhPabxDialplanExtensionRule> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/rule`

    return this.client.request<TelephonyOvhPabxDialplanExtensionRule>('POST', url, {action, negativeAction, position, actionParam})
  }

  /**
   * Dialplan rule [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/rule/%7BruleId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, dialplanId: number, extensionId: number, ruleId: number, serviceName: string): Promise<TelephonyOvhPabxDialplanExtensionRule> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/rule/${ruleId}`

    return this.client.request<TelephonyOvhPabxDialplanExtensionRule>('GET', url)
  }
  */

  /**
   * Dialplan rule [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/rule/%7BruleId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, dialplanId: number, extensionId: number, ruleId: number, serviceName: string, payload: TelephonyOvhPabxDialplanExtensionRule): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/rule/${ruleId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Dialplan rule [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/rule/%7BruleId%7D#DELETE)
   */
  DeleteTheGivenRule(billingAccount: string, dialplanId: number, extensionId: number, ruleId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/rule/${ruleId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * PABX Hunting [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyOvhPabxHunting> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting`

    return this.client.request<TelephonyOvhPabxHunting>('GET', url)
  }
  */

  /**
   * PABX Hunting [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyOvhPabxHunting): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingAgent objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent#GET)
   */
  /*
  CallsAgents(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingAgent objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent#POST)
   */
  /*
  CreateANewAgent(billingAccount: string, number: any, serviceName: string, simultaneousLines: number, status: TelephonyOvhPabxHuntingAgentStatus, timeout: number, wrapUpTime: number, description?: string): Promise<TelephonyOvhPabxHuntingAgent> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent`

    return this.client.request<TelephonyOvhPabxHuntingAgent>('POST', url, {number, simultaneousLines, status, timeout, wrapUpTime, description})
  }
  */

  /**
   * Calls agent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, serviceName: string): Promise<TelephonyOvhPabxHuntingAgent> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}`

    return this.client.request<TelephonyOvhPabxHuntingAgent>('GET', url)
  }
  */

  /**
   * Calls agent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(agentId: number, billingAccount: string, serviceName: string, payload: TelephonyOvhPabxHuntingAgent): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Calls agent [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D#DELETE)
   */
  /*
  DeleteTheGivenAgent(agentId: number, billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * The web access for your cloudpabx [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/bannerAccess#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, serviceName: string): Promise<TelephonyBannerAccess> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/bannerAccess`

    return this.client.request<TelephonyBannerAccess>('GET', url)
  }
  */

  /**
   * The web access for your cloudpabx [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/bannerAccess#POST)
   */
  /*
  CreateANewWebAccessForThisRessource(agentId: number, billingAccount: string, serviceName: string): Promise<TelephonyBannerAccess> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/bannerAccess`

    return this.client.request<TelephonyBannerAccess>('POST', url)
  }
  */

  /**
   * The web access for your cloudpabx [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/bannerAccess#DELETE)
   */
  /*
  DeleteTheGivenWebAccess(agentId: number, billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/bannerAccess`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls#GET)
   */
  /*
  CurrentCallsOfTheCallcenterAgent(agentId: number, billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/calls`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, id: number, serviceName: string): Promise<TelephonyOvhPabxHuntingQueueLiveCalls> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/calls/${id}`

    return this.client.request<TelephonyOvhPabxHuntingQueueLiveCalls>('GET', url)
  }
  */

  /**
   * eavesdrop operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/eavesdrop#POST)
   */
  /*
  EavesdropOnACall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/calls/${id}/eavesdrop`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * hangup operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/hangup#POST)
   */
  /*
  HangupACall(agentId: number, billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/calls/${id}/hangup`

    return this.client.request<TelephonyTask>('POST', url)
  }
  */

  /**
   * hold operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/hold#POST)
   */
  /*
  ToogleHoldOnCall(agentId: number, billingAccount: string, id: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/calls/${id}/hold`

    return this.client.request<TelephonyTask>('POST', url)
  }
  */

  /**
   * intercept operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/intercept#POST)
   */
  /*
  InterceptANonAnsweredCall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/calls/${id}/intercept`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * transfer operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/transfer#POST)
   */
  /*
  TransferAnAnsweredCall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/calls/${id}/transfer`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * whisper operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/whisper#POST)
   */
  /*
  WhisperOnACall(agentId: number, billingAccount: string, id: number, number: any, serviceName: string, whisperingMode: TelephonyOvhPabxWhisperingMode): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/calls/${id}/whisper`

    return this.client.request<TelephonyTask>('POST', url, {number, whisperingMode})
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/eventToken#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, serviceName: string): Promise<TelephonyEventToken> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/eventToken`

    return this.client.request<TelephonyEventToken>('GET', url)
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/eventToken#POST)
   */
  /*
  CreateANewToken(agentId: number, billingAccount: string, expiration: TelephonyTokenExpiration, serviceName: string): Promise<string> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/eventToken`

    return this.client.request<string>('POST', url, {expiration})
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/eventToken#DELETE)
   */
  /*
  DeleteTheGivenToken(agentId: number, billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/eventToken`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/liveStatus#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentLiveStatus> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/liveStatus`

    return this.client.request<TelephonyOvhPabxHuntingAgentLiveStatus>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue#GET)
   */
  /*
  AgentAssignedToTheQueues(agentId: number, billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/queue`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue#POST)
   */
  /*
  CreateANewSkillForAnAgentItAddsTheAgentInAQueue(agentId: number, billingAccount: string, position: number, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentQueue> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/queue`

    return this.client.request<TelephonyOvhPabxHuntingAgentQueue>('POST', url, {position, queueId})
  }
  */

  /**
   * Agent assigned to a queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue/%7BqueueId%7D#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentQueue> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/queue/${queueId}`

    return this.client.request<TelephonyOvhPabxHuntingAgentQueue>('GET', url)
  }
  */

  /**
   * Agent assigned to a queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue/%7BqueueId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string, payload: TelephonyOvhPabxHuntingAgentQueue): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/queue/${queueId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Agent assigned to a queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue/%7BqueueId%7D#DELETE)
   */
  /*
  DeleteTheGivenSkill(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/queue/${queueId}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue/%7BqueueId%7D/liveStatus#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentLiveStatus> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/agent/${agentId}/queue/${queueId}/liveStatus`

    return this.client.request<TelephonyOvhPabxHuntingAgentLiveStatus>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxCustomStatus objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/customStatus#GET)
   */
  /*
  CustomStatusesOfYourAgents(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/customStatus`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxCustomStatus objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/customStatus#POST)
   */
  /*
  CreateANewCustomStatus(billingAccount: string, name: string, serviceName: string, color?: string, description?: string): Promise<TelephonyOvhPabxCustomStatus> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/customStatus`

    return this.client.request<TelephonyOvhPabxCustomStatus>('POST', url, {name, color, description})
  }
  */

  /**
   * Custom statuses of your callcenter agents [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/customStatus/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyOvhPabxCustomStatus> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/customStatus/${id}`

    return this.client.request<TelephonyOvhPabxCustomStatus>('GET', url)
  }
  */

  /**
   * Custom statuses of your callcenter agents [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/customStatus/%7Bid%7D#DELETE)
   */
  /*
  DeleteTheGivenCustomStatus(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/customStatus/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/eventToken#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyEventToken> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/eventToken`

    return this.client.request<TelephonyEventToken>('GET', url)
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/eventToken#POST)
   */
  /*
  CreateANewToken(billingAccount: string, expiration: TelephonyTokenExpiration, serviceName: string): Promise<string> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/eventToken`

    return this.client.request<string>('POST', url, {expiration})
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/eventToken#DELETE)
   */
  /*
  DeleteTheGivenToken(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/eventToken`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingQueue objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue#GET)
   */
  /*
  CallsQueues(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingQueue objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue#POST)
   */
  /*
  CreateANewQueue(billingAccount: string, serviceName: string, strategy: TelephonyOvhPabxHuntingQueueStrategy, actionOnClosure?: TelephonyOvhPabxQueueAction, actionOnClosureParam?: string, actionOnOverflow?: TelephonyOvhPabxQueueAction, actionOnOverflowParam?: string, askForRecordDisabling?: boolean, description?: string, maxMember?: number, maxWaitTime?: number, record?: boolean, recordDisablingDigit?: TelephonyOvhPabxHuntingQueueRecordDisablingDigit, recordDisablingLanguage?: TelephonyOvhPabxHuntingQueueRecordDisablingLanguage, soundOnHold?: number): Promise<TelephonyOvhPabxHuntingQueue> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue`

    return this.client.request<TelephonyOvhPabxHuntingQueue>('POST', url, {strategy, actionOnClosure, actionOnClosureParam, actionOnOverflow, actionOnOverflowParam, askForRecordDisabling, description, maxMember, maxWaitTime, record, recordDisablingDigit, recordDisablingLanguage, soundOnHold})
  }
  */

  /**
   * Calls queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingQueue> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}`

    return this.client.request<TelephonyOvhPabxHuntingQueue>('GET', url)
  }
  */

  /**
   * Calls queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, queueId: number, serviceName: string, payload: TelephonyOvhPabxHuntingQueue): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Calls queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D#DELETE)
   */
  /*
  DeleteTheGivenQueue(billingAccount: string, queueId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent#GET)
   */
  /*
  AgentAssignedToTheQueue(billingAccount: string, queueId: number, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/agent`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingAgentQueue objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent#POST)
   */
  /*
  CreateANewSkillForAnAgentItAddsTheAgentInAQueue(billingAccount: string, position: number, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentQueue> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/agent`

    return this.client.request<TelephonyOvhPabxHuntingAgentQueue>('POST', url, {position, queueId})
  }
  */

  /**
   * Agent assigned to a queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent/%7BagentId%7D#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentQueue> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/agent/${agentId}`

    return this.client.request<TelephonyOvhPabxHuntingAgentQueue>('GET', url)
  }
  */

  /**
   * Agent assigned to a queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent/%7BagentId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string, payload: TelephonyOvhPabxHuntingAgentQueue): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/agent/${agentId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Agent assigned to a queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent/%7BagentId%7D#DELETE)
   */
  /*
  DeleteTheGivenSkill(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/agent/${agentId}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent/%7BagentId%7D/liveStatus#GET)
   */
  /*
  GetThisObjectProperties(agentId: number, billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingAgentLiveStatus> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/agent/${agentId}/liveStatus`

    return this.client.request<TelephonyOvhPabxHuntingAgentLiveStatus>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxHuntingQueueLiveCalls objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls#GET)
   */
  /*
  LiveCallsOfTheQueue(billingAccount: string, queueId: number, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/liveCalls`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingQueueLiveCalls> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}`

    return this.client.request<TelephonyOvhPabxHuntingQueueLiveCalls>('GET', url)
  }
  */

  /**
   * eavesdrop operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/eavesdrop#POST)
   */
  /*
  EavesdropOnACall(billingAccount: string, id: number, number: any, queueId: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/eavesdrop`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * hangup operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/hangup#POST)
   */
  /*
  HangupACall(billingAccount: string, id: number, queueId: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/hangup`

    return this.client.request<TelephonyTask>('POST', url)
  }
  */

  /**
   * hold operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/hold#POST)
   */
  /*
  ToogleHoldOnCall(billingAccount: string, id: number, queueId: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/hold`

    return this.client.request<TelephonyTask>('POST', url)
  }
  */

  /**
   * intercept operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/intercept#POST)
   */
  /*
  InterceptANonAnsweredCall(billingAccount: string, id: number, number: any, queueId: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/intercept`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * transfer operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/transfer#POST)
   */
  /*
  TransferAnAnsweredCall(billingAccount: string, id: number, number: any, queueId: number, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/transfer`

    return this.client.request<TelephonyTask>('POST', url, {number})
  }
  */

  /**
   * whisper operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveCalls/%7Bid%7D/whisper#POST)
   */
  /*
  WhisperOnACall(billingAccount: string, id: number, number: any, queueId: number, serviceName: string, whisperingMode: TelephonyOvhPabxWhisperingMode): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/liveCalls/${id}/whisper`

    return this.client.request<TelephonyTask>('POST', url, {number, whisperingMode})
  }
  */

  /**
   * Live statistics of the queue [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/liveStatistics#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, queueId: number, serviceName: string): Promise<TelephonyOvhPabxHuntingQueueLiveStatistics> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/hunting/queue/${queueId}/liveStatistics`

    return this.client.request<TelephonyOvhPabxHuntingQueueLiveStatistics>('GET', url)
  }
  */

  /**
   * List the telephony.OvhPabxMenu objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu#GET)
   */
  MenusAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxMenu objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu#POST)
   */
  CreateANewMenu(billingAccount: string, name: string, serviceName: string, greetSound?: number, greetSoundTts?: number, invalidSound?: number, invalidSoundTts?: number): Promise<TelephonyOvhPabxMenu> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu`

    return this.client.request<TelephonyOvhPabxMenu>('POST', url, {name, greetSound, greetSoundTts, invalidSound, invalidSoundTts})
  }

  /**
   * IVR Menu [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu/%7BmenuId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, menuId: number, serviceName: string): Promise<TelephonyOvhPabxMenu> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}`

    return this.client.request<TelephonyOvhPabxMenu>('GET', url)
  }
  */

  /**
   * IVR Menu [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu/%7BmenuId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, menuId: number, serviceName: string, payload: TelephonyOvhPabxMenu): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * IVR Menu [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu/%7BmenuId%7D#DELETE)
   */
  DeleteTheGivenMenu(billingAccount: string, menuId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the telephony.OvhPabxMenuEntry objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu/%7BmenuId%7D/entry#GET)
   */
  MenuEntry(billingAccount: string, menuId: number, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}/entry`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxMenuEntry objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu/%7BmenuId%7D/entry#POST)
   */
  CreateANewMenuEntry(action: TelephonyOvhPabxIvrMenuEntryAction, billingAccount: string, dtmf: string, menuId: number, position: number, serviceName: string, actionParam?: string): Promise<TelephonyOvhPabxMenuEntry> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}/entry`

    return this.client.request<TelephonyOvhPabxMenuEntry>('POST', url, {action, dtmf, position, actionParam})
  }

  /**
   * IVR menu entry [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu/%7BmenuId%7D/entry/%7BentryId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, entryId: number, menuId: number, serviceName: string): Promise<TelephonyOvhPabxMenuEntry> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}/entry/${entryId}`

    return this.client.request<TelephonyOvhPabxMenuEntry>('GET', url)
  }
  */

  /**
   * IVR menu entry [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu/%7BmenuId%7D/entry/%7BentryId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, entryId: number, menuId: number, serviceName: string, payload: TelephonyOvhPabxMenuEntry): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}/entry/${entryId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * IVR menu entry [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu/%7BmenuId%7D/entry/%7BentryId%7D#DELETE)
   */
  DeleteTheGivenMenuEntry(billingAccount: string, entryId: number, menuId: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}/entry/${entryId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the telephony.OvhPabxRecord objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/records#GET)
   */
  /*
  RecordsAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/records`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * The PABX records [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/records/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyOvhPabxRecord> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/records/${id}`

    return this.client.request<TelephonyOvhPabxRecord>('GET', url)
  }
  */

  /**
   * The PABX records [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/records/%7Bid%7D#DELETE)
   */
  /*
  DeleteTheGivenRecord(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/records/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the telephony.OvhPabxSound objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/sound#GET)
   */
  /*
  SoundsAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/sound`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * The PABX sounds [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/sound/%7BsoundId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string, soundId: number): Promise<TelephonyOvhPabxSound> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/sound/${soundId}`

    return this.client.request<TelephonyOvhPabxSound>('GET', url)
  }
  */

  /**
   * The PABX sounds [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/sound/%7BsoundId%7D#DELETE)
   */
  /*
  DeleteTheGivenSound(billingAccount: string, serviceName: string, soundId: number): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/sound/${soundId}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * soundUpload operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/soundUpload#POST)
   */
  /*
  UploadNewSoundFile(billingAccount: string, serviceName: string, documentId?: string, name?: string, _url?: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/soundUpload`

    return this.client.request<TelephonyTask>('POST', url, {documentId, name, _url})
  }
  */

  /**
   * List the telephony.OvhPabxTts objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/tts#GET)
   */
  TextToSpeechAssociatedWithThisPABX(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/tts`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.OvhPabxTts objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/tts#POST)
   */
  CreateANewTextToSpeech(billingAccount: string, serviceName: string, text: string, voice?: TelephonyOvhPabxTtsVoice): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/tts`

    return this.client.request<void>('POST', url, {text, voice})
  }

  /**
   * The PABX Text To Speech sounds [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/tts/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyOvhPabxTts> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/tts/${id}`

    return this.client.request<TelephonyOvhPabxTts>('GET', url)
  }
  */

  /**
   * The PABX Text To Speech sounds [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/tts/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, id: number, serviceName: string, payload: TelephonyOvhPabxTts): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/tts/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * The PABX Text To Speech sounds [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/tts/%7Bid%7D#DELETE)
   */
  DeleteTheGivenTextToSpeech(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/tts/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the telephony.PhonebookMaster objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook#GET)
   */
  ReturnPhonebooksAssociatedToThisGroup(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/phonebook`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the telephony.PhonebookMaster objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook#POST)
   */
  AddAPhonebookOnGroupReturnTheBookKey(billingAccount: string, name: string): Promise<string> {
    let url = `/telephony/${billingAccount}/phonebook`

    return this.client.request<string>('POST', url, {name})
  }

  /**
   * Phone book on group [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook/%7BbookKey%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, bookKey: string): Promise<TelephonyPhonebookMaster> {
    let url = `/telephony/${billingAccount}/phonebook/${bookKey}`

    return this.client.request<TelephonyPhonebookMaster>('GET', url)
  }
  */

  /**
   * Phone book on group [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook/%7BbookKey%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, bookKey: string, payload: TelephonyPhonebookMaster): Promise<void> {
    let url = `/telephony/${billingAccount}/phonebook/${bookKey}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Phone book on group [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook/%7BbookKey%7D#DELETE)
   */
  /*
  DeleteAPhonebook(billingAccount: string, bookKey: string): Promise<void> {
    let url = `/telephony/${billingAccount}/phonebook/${bookKey}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * export operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook/%7BbookKey%7D/export#GET)
   */
  /*
  ExportThePhonebookContacts(billingAccount: string, bookKey: string, format: TelephonyContactsExportFormats): Promise<TelephonyPcsFile> {
    let url = `/telephony/${billingAccount}/phonebook/${bookKey}/export?`

    const queryParams = new QueryParams()
    if (format) { queryParams.set('format', format.toString()) }

    return this.client.request<TelephonyPcsFile>('GET', url+queryParams.toString())
  }
  */

  /**
   * import operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook/%7BbookKey%7D/import#POST)
   */
  /*
  ImportAContactsFileSupportedFormatsAreExcelXlsAndXlsxAndCSV(billingAccount: string, bookKey: string, documentId: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/phonebook/${bookKey}/import`

    return this.client.request<TelephonyTask>('POST', url, {documentId})
  }
  */

  /**
   * List the telephony.PhonebookContact objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook/%7BbookKey%7D/phonebookContact#GET)
   */
  /*
  PhonebookContacts(billingAccount: string, bookKey: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/phonebook/${bookKey}/phonebookContact`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * List the telephony.PhonebookContact objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook/%7BbookKey%7D/phonebookContact#POST)
   */
  /*
  CreateAPhonebookContactReturnIdentifierOfThePhonebookContact(billingAccount: string, bookKey: string, group: string, name: string, surname: string, homeMobile?: any, homePhone?: any, workMobile?: any, workPhone?: any): Promise<number> {
    let url = `/telephony/${billingAccount}/phonebook/${bookKey}/phonebookContact`

    return this.client.request<number>('POST', url, {group, name, surname, homeMobile, homePhone, workMobile, workPhone})
  }
  */

  /**
   * Phone book contact [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook/%7BbookKey%7D/phonebookContact/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, bookKey: string, id: number): Promise<TelephonyPhonebookContact> {
    let url = `/telephony/${billingAccount}/phonebook/${bookKey}/phonebookContact/${id}`

    return this.client.request<TelephonyPhonebookContact>('GET', url)
  }
  */

  /**
   * Phone book contact [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook/%7BbookKey%7D/phonebookContact/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, bookKey: string, id: number, payload: TelephonyPhonebookContact): Promise<void> {
    let url = `/telephony/${billingAccount}/phonebook/${bookKey}/phonebookContact/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Phone book contact [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook/%7BbookKey%7D/phonebookContact/%7Bid%7D#DELETE)
   */
  /*
  DeleteAPhonebookContact(billingAccount: string, bookKey: string, id: number): Promise<void> {
    let url = `/telephony/${billingAccount}/phonebook/${bookKey}/phonebookContact/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the telephony.Portability objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability#GET)
   */
  CurrentNumberPortabilitiesForThisBillingAccount(billingAccount: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/portability`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Portability informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number): Promise<TelephonyPortability> {
    let url = `/telephony/${billingAccount}/portability/${id}`

    return this.client.request<TelephonyPortability>('GET', url)
  }
  */

  /**
   * canBeCancelled operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/canBeCancelled#GET)
   */
  IndicatesWhetherOrNotThePortabilityCanBeCancelled(billingAccount: string, id: number): Promise<boolean> {
    let url = `/telephony/${billingAccount}/portability/${id}/canBeCancelled`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * canBeExecuted operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/canBeExecuted#GET)
   */
  IndicatesWhetherOrNotThePortabilityCanBeExecuted(billingAccount: string, id: number): Promise<boolean> {
    let url = `/telephony/${billingAccount}/portability/${id}/canBeExecuted`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * cancel operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/cancel#POST)
   */
  AskToCancelThePortability(billingAccount: string, id: number, reason?: string): Promise<void> {
    let url = `/telephony/${billingAccount}/portability/${id}/cancel`

    return this.client.request<void>('POST', url, {reason})
  }

  /**
   * changeDate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/changeDate#POST)
   */
  AskToChangeThePortabilityDate(billingAccount: string, date: string, id: number): Promise<void> {
    let url = `/telephony/${billingAccount}/portability/${id}/changeDate`

    return this.client.request<void>('POST', url, {date})
  }

  /**
   * dateCanBeChanged operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/dateCanBeChanged#GET)
   */
  IndicatesWhetherOrNotThePortabilityDateCanBeChanged(billingAccount: string, id: number): Promise<boolean> {
    let url = `/telephony/${billingAccount}/portability/${id}/dateCanBeChanged`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * List the telephony.PortabilityDocument objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/document#GET)
   */
  DocumentLinkedToThisPortability(billingAccount: string, id: number): Promise<number[]> {
    let url = `/telephony/${billingAccount}/portability/${id}/document`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.PortabilityDocument objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/document#POST)
   */
  CreateAPortabilityDocument(billingAccount: string, id: number, name: string, description?: string): Promise<TelephonyPortabilityDocument> {
    let url = `/telephony/${billingAccount}/portability/${id}/document`

    return this.client.request<TelephonyPortabilityDocument>('POST', url, {name, description})
  }

  /**
   * Document linked to a portability [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/document/%7BdocumentId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, documentId: number, id: number): Promise<TelephonyPortabilityDocument> {
    let url = `/telephony/${billingAccount}/portability/${id}/document/${documentId}`

    return this.client.request<TelephonyPortabilityDocument>('GET', url)
  }
  */

  /**
   * Document linked to a portability [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/document/%7BdocumentId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, documentId: number, id: number, payload: TelephonyPortabilityDocument): Promise<void> {
    let url = `/telephony/${billingAccount}/portability/${id}/document/${documentId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Document linked to a portability [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/document/%7BdocumentId%7D#DELETE)
   */
  DeleteTheDocument(billingAccount: string, documentId: number, id: number): Promise<void> {
    let url = `/telephony/${billingAccount}/portability/${id}/document/${documentId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * execute operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/execute#POST)
   */
  AskToExecuteThePortability(billingAccount: string, id: number): Promise<void> {
    let url = `/telephony/${billingAccount}/portability/${id}/execute`

    return this.client.request<void>('POST', url)
  }

  /**
   * relaunch operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/relaunch#POST)
   */
  FixErrorAndRelaunchPortability(billingAccount: string, id: number, parameters: any): Promise<void> {
    let url = `/telephony/${billingAccount}/portability/${id}/relaunch`

    return this.client.request<void>('POST', url, {parameters})
  }

  /**
   * relaunch operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/relaunch#GET)
   */
  IndicatesWhetherOrNotErrorCanBeFixedAndPortabilityCanBeRelaunched(billingAccount: string, id: number): Promise<TelephonyPortabilityFixErrorPossibleParameters> {
    let url = `/telephony/${billingAccount}/portability/${id}/relaunch`

    return this.client.request<TelephonyPortabilityFixErrorPossibleParameters>('GET', url)
  }

  /**
   * status operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/status#GET)
   */
  IndicatesTheCurrentStatusOfThePortabilityWithAListOfSteps(billingAccount: string, id: number): Promise<TelephonyPortabilityStep[]> {
    let url = `/telephony/${billingAccount}/portability/${id}/status`

    return this.client.request<TelephonyPortabilityStep[]>('GET', url)
  }

  /**
   * List the telephony.Redirect objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/redirect#GET)
   */
  RedirectsAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/redirect`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Redirect service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/redirect/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyRedirect> {
    let url = `/telephony/${billingAccount}/redirect/${serviceName}`

    return this.client.request<TelephonyRedirect>('GET', url)
  }
  */

  /**
   * Redirect service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/redirect/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyRedirect): Promise<void> {
    let url = `/telephony/${billingAccount}/redirect/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * changeDestination operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/redirect/%7BserviceName%7D/changeDestination#POST)
   */
  ChangeTheDestinationOfTheRedirect(billingAccount: string, destination: any, serviceName: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/redirect/${serviceName}/changeDestination`

    return this.client.request<TelephonyTask>('POST', url, {destination})
  }

  /**
   * List the telephony.Rsva objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva#GET)
   */
  ServiceConcernedByTheFrenchRSVAReform(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/rsva`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * French value added services subject to the RSVA reform (Référentiel des numéros SVA) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyRsva> {
    let url = `/telephony/${billingAccount}/rsva/${serviceName}`

    return this.client.request<TelephonyRsva>('GET', url)
  }
  */

  /**
   * French value added services subject to the RSVA reform (Référentiel des numéros SVA) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyRsva): Promise<void> {
    let url = `/telephony/${billingAccount}/rsva/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * allowedRateCodes operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva/%7BserviceName%7D/allowedRateCodes#GET)
   */
  CompatibleRateCodesRelatedToThisValueAddedService(billingAccount: string, serviceName: string): Promise<TelephonyRateCodeInformation[]> {
    let url = `/telephony/${billingAccount}/rsva/${serviceName}/allowedRateCodes`

    return this.client.request<TelephonyRateCodeInformation[]>('GET', url)
  }

  /**
   * cancelScheduledRateCode operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva/%7BserviceName%7D/cancelScheduledRateCode#POST)
   */
  CancelAScheduledRateCodeUpdate(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/rsva/${serviceName}/cancelScheduledRateCode`

    return this.client.request<void>('POST', url)
  }

  /**
   * currentRateCode operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva/%7BserviceName%7D/currentRateCode#GET)
   */
  CurrentRateCodeRelatedToThisSva(billingAccount: string, serviceName: string): Promise<TelephonyDetailedRateCodeInformation> {
    let url = `/telephony/${billingAccount}/rsva/${serviceName}/currentRateCode`

    return this.client.request<TelephonyDetailedRateCodeInformation>('GET', url)
  }

  /**
   * scheduledRateCode operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva/%7BserviceName%7D/scheduledRateCode#GET)
   */
  NewScheduledRateCodeRelatedToThisSva(billingAccount: string, serviceName: string): Promise<TelephonyDetailedRateCodeInformation> {
    let url = `/telephony/${billingAccount}/rsva/${serviceName}/scheduledRateCode`

    return this.client.request<TelephonyDetailedRateCodeInformation>('GET', url)
  }

  /**
   * scheduleRateCode operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva/%7BserviceName%7D/scheduleRateCode#POST)
   */
  ScheduleANewRateCodeForThisSva(billingAccount: string, rateCode: string, serviceName: string): Promise<TelephonyDetailedRateCodeInformation> {
    let url = `/telephony/${billingAccount}/rsva/${serviceName}/scheduleRateCode`

    return this.client.request<TelephonyDetailedRateCodeInformation>('POST', url, {rateCode})
  }

  /**
   * List the telephony.Scheduler objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler#GET)
   */
  ScheduledEvents(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/scheduler`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Scheduler capable services [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyScheduler> {
    let url = `/telephony/${billingAccount}/scheduler/${serviceName}`

    return this.client.request<TelephonyScheduler>('GET', url)
  }
  */

  /**
   * Scheduler capable services [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyScheduler): Promise<void> {
    let url = `/telephony/${billingAccount}/scheduler/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.SchedulerEvent objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler/%7BserviceName%7D/events#GET)
   */
  CustomEventsScheduled(billingAccount: string, serviceName: string, categories?: TelephonySchedulerCategory, dateEndFrom?: string, dateEndTo?: string, dateStartFrom?: string, dateStartTo?: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/scheduler/${serviceName}/events?`

    const queryParams = new QueryParams()
    if (categories) { queryParams.set('categories', categories.toString()) }
    if (dateEndFrom) { queryParams.set('dateEnd.from', dateEndFrom.toString()) }
    if (dateEndTo) { queryParams.set('dateEnd.to', dateEndTo.toString()) }
    if (dateStartFrom) { queryParams.set('dateStart.from', dateStartFrom.toString()) }
    if (dateStartTo) { queryParams.set('dateStart.to', dateStartTo.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the telephony.SchedulerEvent objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler/%7BserviceName%7D/events#POST)
   */
  AddASchedulerEvent(billingAccount: string, category: TelephonySchedulerCategory, dateEnd: string, dateStart: string, serviceName: string, title: string, description?: string, uid?: string): Promise<void> {
    let url = `/telephony/${billingAccount}/scheduler/${serviceName}/events`

    return this.client.request<void>('POST', url, {category, dateEnd, dateStart, title, description, uid})
  }

  /**
   * Scheduled event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler/%7BserviceName%7D/events/%7Buid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string, uid: string): Promise<TelephonySchedulerEvent> {
    let url = `/telephony/${billingAccount}/scheduler/${serviceName}/events/${uid}`

    return this.client.request<TelephonySchedulerEvent>('GET', url)
  }
  */

  /**
   * Scheduled event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler/%7BserviceName%7D/events/%7Buid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, uid: string, payload: TelephonySchedulerEvent): Promise<void> {
    let url = `/telephony/${billingAccount}/scheduler/${serviceName}/events/${uid}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Scheduled event [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler/%7BserviceName%7D/events/%7Buid%7D#DELETE)
   */
  DeleteTheGivenSchedulerEvent(billingAccount: string, serviceName: string, uid: string): Promise<void> {
    let url = `/telephony/${billingAccount}/scheduler/${serviceName}/events/${uid}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * importIcsCalendar operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler/%7BserviceName%7D/importIcsCalendar#POST)
   */
  AddSchedulerEventsInICSFormat(billingAccount: string, serviceName: string, _url: string): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/scheduler/${serviceName}/importIcsCalendar`

    return this.client.request<TelephonyTask>('POST', url, {_url})
  }

  /**
   * List the telephony.Screen objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/screen#GET)
   */
  ScreenlistCompatibleNumbersAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/screen`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * ScreenList capable services [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/screen/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyScreen> {
    let url = `/telephony/${billingAccount}/screen/${serviceName}`

    return this.client.request<TelephonyScreen>('GET', url)
  }
  */

  /**
   * ScreenList capable services [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/screen/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyScreen): Promise<void> {
    let url = `/telephony/${billingAccount}/screen/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.ScreenList objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/screen/%7BserviceName%7D/screenLists#GET)
   */
  RulesForCallFilteringForThisService(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/screen/${serviceName}/screenLists`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.ScreenList objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/screen/%7BserviceName%7D/screenLists#POST)
   */
  CreateANewScreenListRule(billingAccount: string, nature: TelephonyScreenListNature, serviceName: string, type: TelephonyScreenListType, callNumber?: string): Promise<void> {
    let url = `/telephony/${billingAccount}/screen/${serviceName}/screenLists`

    return this.client.request<void>('POST', url, {nature, type, callNumber})
  }

  /**
   * Screen list [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/screen/%7BserviceName%7D/screenLists/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyScreenList> {
    let url = `/telephony/${billingAccount}/screen/${serviceName}/screenLists/${id}`

    return this.client.request<TelephonyScreenList>('GET', url)
  }
  */

  /**
   * Screen list [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/screen/%7BserviceName%7D/screenLists/%7Bid%7D#DELETE)
   */
  DeleteTheGivenScreenList(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/screen/${serviceName}/screenLists/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * List the telephony.TelephonyService objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service#GET)
   */
  ServicesAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/service`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Telephony service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyTelephonyService> {
    let url = `/telephony/${billingAccount}/service/${serviceName}`

    return this.client.request<TelephonyTelephonyService>('GET', url)
  }
  */

  /**
   * Telephony service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyTelephonyService): Promise<void> {
    let url = `/telephony/${billingAccount}/service/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Telephony service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D#DELETE)
   */
  AskForAServiceTermination(billingAccount: string, reason: TelephonyTerminationReason, serviceName: string, details?: string): Promise<void> {
    let url = `/telephony/${billingAccount}/service/${serviceName}?`

    const queryParams = new QueryParams()
    if (reason) { queryParams.set('reason', reason.toString()) }
    if (details) { queryParams.set('details', details) }

    return this.client.request<void>('DELETE', url+queryParams.toString())
  }

  /**
   * cancelTermination operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/cancelTermination#POST)
   */
  CancelTheServiceTermination(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/cancelTermination`

    return this.client.request<void>('POST', url)
  }

  /**
   * changeOfBillingAccount operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/changeOfBillingAccount#POST)
   */
  MoveAServiceOfBillingAccountSourceAndDestinationNicsShouldBeTheSame(billingAccount: string, billingAccountDestination: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/changeOfBillingAccount`

    return this.client.request<void>('POST', url, {billingAccountDestination})
  }

  /**
   * diagnosticReports operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/diagnosticReports#GET)
   */
  GetRelevantInformationsOfTheServiceDetectedFromTheMOSOrTheSignalLegInSIPMGCPProtocol(billingAccount: string, dayInterval: TelephonyDiagnosticReportIndex, serviceName: string): Promise<TelephonyDiagnosticReport[]> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/diagnosticReports?`

    const queryParams = new QueryParams()
    if (dayInterval) { queryParams.set('dayInterval', dayInterval.toString()) }

    return this.client.request<TelephonyDiagnosticReport[]>('GET', url+queryParams.toString())
  }

  /**
   * Directory Informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/directory#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyDirectoryInfo> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/directory`

    return this.client.request<TelephonyDirectoryInfo>('GET', url)
  }
  */

  /**
   * Directory Informations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/directory#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyDirectoryInfo): Promise<void> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/directory`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * fetchEntrepriseInformations operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/directory/fetchEntrepriseInformations#POST)
   */
  GetCompanyEntrepriseInformationsByProvidingEntrepriseNumber(billingAccount: string, entrepriseNumber: string, serviceName: string): Promise<TelephonyEntrepriseNumberInformationsTask> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/directory/fetchEntrepriseInformations`

    return this.client.request<TelephonyEntrepriseNumberInformationsTask>('POST', url, {entrepriseNumber})
  }

  /**
   * getDirectoryServiceCode operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/directory/getDirectoryServiceCode#GET)
   */
  GetDirectoryServiceCodeFromAnAPECodePrincipalActivityOfTheFirmCode(apeCode: string, billingAccount: string, serviceName: string): Promise<TelephonyDirectoryHeadingPJ[]> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/directory/getDirectoryServiceCode?`

    const queryParams = new QueryParams()
    if (apeCode) { queryParams.set('apeCode', apeCode) }

    return this.client.request<TelephonyDirectoryHeadingPJ[]>('GET', url+queryParams.toString())
  }

  /**
   * getWayTypes operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/directory/getWayTypes#GET)
   */
  GetAllTheWayTypesAvailables(billingAccount: string, serviceName: string): Promise<TelephonyDirectoryWayType[]> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/directory/getWayTypes`

    return this.client.request<TelephonyDirectoryWayType[]>('GET', url)
  }

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/eventToken#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyEventToken> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/eventToken`

    return this.client.request<TelephonyEventToken>('GET', url)
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/eventToken#POST)
   */
  /*
  CreateANewToken(billingAccount: string, expiration: TelephonyTokenExpiration, serviceName: string): Promise<string> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/eventToken`

    return this.client.request<string>('POST', url, {expiration})
  }
  */

  /**
   * Token associated to the service for live event [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/eventToken#DELETE)
   */
  /*
  DeleteTheGivenToken(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/eventToken`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * List the telephony.FaxConsumption objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/faxConsumption#GET)
   */
  FaxDeliveryRecords(billingAccount: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, wayType?: TelephonyFaxConsumptionWayType): Promise<number[]> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/faxConsumption?`

    const queryParams = new QueryParams()
    if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
    if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
    if (wayType) { queryParams.set('wayType', wayType.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Fax delivery record [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/faxConsumption/%7BconsumptionId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, consumptionId: number, serviceName: string): Promise<TelephonyFaxConsumption> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/faxConsumption/${consumptionId}`

    return this.client.request<TelephonyFaxConsumption>('GET', url)
  }
  */

  /**
   * Offer change [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/offerChange#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyOfferChange> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/offerChange`

    return this.client.request<TelephonyOfferChange>('GET', url)
  }
  */

  /**
   * Offer change [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/offerChange#POST)
   */
  AddANewOfferChange(billingAccount: string, offer: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/offerChange`

    return this.client.request<void>('POST', url, {offer})
  }

  /**
   * Offer change [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/offerChange#DELETE)
   */
  DeleteTheReplacementOfferScheduling(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/offerChange`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * offerChanges operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/offerChanges#GET)
   */
  ListAllAvailableOfferChangesCompatibilities(billingAccount: string, serviceName: string): Promise<TelephonyLineOffer[]> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/offerChanges`

    return this.client.request<TelephonyLineOffer[]>('GET', url)
  }

  /**
   * List the telephony.OfferTask objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/offerTask#GET)
   */
  /*
  OperationsOnATelephonyServiceOffer(billingAccount: string, serviceName: string, action?: TelephonyOfferTaskAction, status?: TelephonyTaskStatus, type?: TelephonyOfferTaskType): Promise<number[]> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/offerTask?`

    const queryParams = new QueryParams()
    if (action) { queryParams.set('action', action.toString()) }
    if (status) { queryParams.set('status', status.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }
  */

  /**
   * Operation on a telephony offer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/offerTask/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string, taskId: number): Promise<TelephonyOfferTask> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/offerTask/${taskId}`

    return this.client.request<TelephonyOfferTask>('GET', url)
  }
  */

  /**
   * Operation on a telephony offer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/offerTask/%7BtaskId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, taskId: number, payload: TelephonyOfferTask): Promise<void> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/offerTask/${taskId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.PreviousVoiceConsumption objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/previousVoiceConsumption#GET)
   */
  CallDeliveryRecordsOfThePreviousMonth(billingAccount: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, destinationType?: TelephonyVoiceConsumptionDestinationType, planType?: TelephonyVoiceConsumptionPlanType, wayType?: TelephonyVoiceConsumptionWayType): Promise<number[]> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/previousVoiceConsumption?`

    const queryParams = new QueryParams()
    if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
    if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
    if (destinationType) { queryParams.set('destinationType', destinationType.toString()) }
    if (planType) { queryParams.set('planType', planType.toString()) }
    if (wayType) { queryParams.set('wayType', wayType.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Call delivery record of the previous month [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/previousVoiceConsumption/%7BconsumptionId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, consumptionId: number, serviceName: string): Promise<TelephonyPreviousVoiceConsumption> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/previousVoiceConsumption/${consumptionId}`

    return this.client.request<TelephonyPreviousVoiceConsumption>('GET', url)
  }
  */

  /**
   * List the telephony.RepaymentConsumption objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/repaymentConsumption#GET)
   */
  CallWhichCouldBeRepayable(billingAccount: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/repaymentConsumption?`

    const queryParams = new QueryParams()
    if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
    if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Call which are repayable [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/repaymentConsumption/%7BconsumptionId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, consumptionId: number, serviceName: string): Promise<TelephonyRepaymentConsumption> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/repaymentConsumption/${consumptionId}`

    return this.client.request<TelephonyRepaymentConsumption>('GET', url)
  }
  */

  /**
   * List the telephony.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/task#GET)
   */
  OperationsOnATelephonyService(billingAccount: string, serviceName: string, action?: string, serviceType?: string, status?: TelephonyTaskStatus): Promise<number[]> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/task?`

    const queryParams = new QueryParams()
    if (action) { queryParams.set('action', action) }
    if (serviceType) { queryParams.set('serviceType', serviceType) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a telephony service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string, taskId: number): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/task/${taskId}`

    return this.client.request<TelephonyTask>('GET', url)
  }
  */

  /**
   * List the telephony.VoiceConsumption objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/voiceConsumption#GET)
   */
  CallDeliveryRecords(billingAccount: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, destinationType?: TelephonyVoiceConsumptionDestinationType, planType?: TelephonyVoiceConsumptionPlanType, wayType?: TelephonyVoiceConsumptionWayType): Promise<number[]> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/voiceConsumption?`

    const queryParams = new QueryParams()
    if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
    if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
    if (destinationType) { queryParams.set('destinationType', destinationType.toString()) }
    if (planType) { queryParams.set('planType', planType.toString()) }
    if (wayType) { queryParams.set('wayType', wayType.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Call delivery record [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/voiceConsumption/%7BconsumptionId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, consumptionId: number, serviceName: string): Promise<TelephonyVoiceConsumption> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/voiceConsumption/${consumptionId}`

    return this.client.request<TelephonyVoiceConsumption>('GET', url)
  }
  */

  /**
   * Advanced diagnostic of the voice call [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/voiceConsumption/%7BconsumptionId%7D/callDiagnostics#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, consumptionId: number, serviceName: string): Promise<TelephonyCallDiagnostics> {
    let url = `/telephony/${billingAccount}/service/${serviceName}/voiceConsumption/${consumptionId}/callDiagnostics`

    return this.client.request<TelephonyCallDiagnostics>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string): Promise<ServicesService> {
    let url = `/telephony/${billingAccount}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, payload: ServicesService): Promise<void> {
    let url = `/telephony/${billingAccount}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/task#GET)
   */
  OperationsOnATelephonyBillingAccount(billingAccount: string, action?: string, serviceType?: string, status?: TelephonyTaskStatus): Promise<number[]> {
    let url = `/telephony/${billingAccount}/task?`

    const queryParams = new QueryParams()
    if (action) { queryParams.set('action', action) }
    if (serviceType) { queryParams.set('serviceType', serviceType) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Operation on a telephony service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, taskId: number): Promise<TelephonyTask> {
    let url = `/telephony/${billingAccount}/task/${taskId}`

    return this.client.request<TelephonyTask>('GET', url)
  }
  */

  /**
   * List the telephony.GenericScreen objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/timeCondition#GET)
   */
  TimeConditionsCompatibleNumbersAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/timeCondition`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Time conditions capable services [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/timeCondition/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyGenericScreen> {
    let url = `/telephony/${billingAccount}/timeCondition/${serviceName}`

    return this.client.request<TelephonyGenericScreen>('GET', url)
  }
  */

  /**
   * List the telephony.TimeCondition objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/timeCondition/%7BserviceName%7D/condition#GET)
   */
  RulesForTimeConditionsForThisService(billingAccount: string, serviceName: string): Promise<number[]> {
    let url = `/telephony/${billingAccount}/timeCondition/${serviceName}/condition`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.TimeCondition objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/timeCondition/%7BserviceName%7D/condition#POST)
   */
  CreateANewTimeConditionRule(billingAccount: string, day: TelephonyTimeConditionsDay, hourBegin: string, hourEnd: string, policy: TelephonyTimeConditionsPolicy, serviceName: string): Promise<TelephonyTimeCondition> {
    let url = `/telephony/${billingAccount}/timeCondition/${serviceName}/condition`

    return this.client.request<TelephonyTimeCondition>('POST', url, {day, hourBegin, hourEnd, policy})
  }

  /**
   * Time conditions [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/timeCondition/%7BserviceName%7D/condition/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyTimeCondition> {
    let url = `/telephony/${billingAccount}/timeCondition/${serviceName}/condition/${id}`

    return this.client.request<TelephonyTimeCondition>('GET', url)
  }
  */

  /**
   * Time conditions [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/timeCondition/%7BserviceName%7D/condition/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, id: number, serviceName: string, payload: TelephonyTimeCondition): Promise<void> {
    let url = `/telephony/${billingAccount}/timeCondition/${serviceName}/condition/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Time conditions [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/timeCondition/%7BserviceName%7D/condition/%7Bid%7D#DELETE)
   */
  /*
  DeleteTheGivenScreenList(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/timeCondition/${serviceName}/condition/${id}`

    return this.client.request<void>('DELETE', url)
  }
  */

  /**
   * Time conditions options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/timeCondition/%7BserviceName%7D/options#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyTimeConditionOptions> {
    let url = `/telephony/${billingAccount}/timeCondition/${serviceName}/options`

    return this.client.request<TelephonyTimeConditionOptions>('GET', url)
  }
  */

  /**
   * Time conditions options [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/timeCondition/%7BserviceName%7D/options#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyTimeConditionOptions): Promise<void> {
    let url = `/telephony/${billingAccount}/timeCondition/${serviceName}/options`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * transferSecurityDeposit operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/transferSecurityDeposit#POST)
   */
  TransferSecurityDepositBetweenTwoBillingAccounts(amount: number, billingAccount: string, billingAccountDestination: string): Promise<void> {
    let url = `/telephony/${billingAccount}/transferSecurityDeposit`

    return this.client.request<void>('POST', url, {amount, billingAccountDestination})
  }

  /**
   * List the telephony.Trunk objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk#GET)
   */
  TrunkAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/trunk`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Trunk service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyTrunk> {
    let url = `/telephony/${billingAccount}/trunk/${serviceName}`

    return this.client.request<TelephonyTrunk>('GET', url)
  }
  */

  /**
   * channelsPacksRepartition operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk/%7BserviceName%7D/channelsPacksRepartition#GET)
   */
  DetermineTheBestChannelsPacksCombinationForAGivenChannelQuantity(billingAccount: string, quantity: number, serviceName: string): Promise<TelephonyTrunkSimultaneousPacksRepartition> {
    let url = `/telephony/${billingAccount}/trunk/${serviceName}/channelsPacksRepartition?`

    const queryParams = new QueryParams()
    if (quantity) { queryParams.set('quantity', quantity.toString()) }

    return this.client.request<TelephonyTrunkSimultaneousPacksRepartition>('GET', url+queryParams.toString())
  }

  /**
   * List the telephony.TrunkExternalDisplayedNumber objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk/%7BserviceName%7D/externalDisplayedNumber#GET)
   */
  ExternalDisplayedNumberLinkedToThisTrunk(billingAccount: string, serviceName: string): Promise<any> {
    let url = `/telephony/${billingAccount}/trunk/${serviceName}/externalDisplayedNumber`

    return this.client.request<any>('GET', url)
  }

  /**
   * List the telephony.TrunkExternalDisplayedNumber objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk/%7BserviceName%7D/externalDisplayedNumber#POST)
   */
  ExternalDisplayedNumberCreationForAGivenTrunk(billingAccount: string, number: any, serviceName: string, autoValidation?: boolean): Promise<TelephonyTrunkExternalDisplayedNumber> {
    let url = `/telephony/${billingAccount}/trunk/${serviceName}/externalDisplayedNumber`

    return this.client.request<TelephonyTrunkExternalDisplayedNumber>('POST', url, {number, autoValidation})
  }

  /**
   * External displayed number linked to a trunk [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk/%7BserviceName%7D/externalDisplayedNumber/%7Bnumber%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, number: any, serviceName: string): Promise<TelephonyTrunkExternalDisplayedNumber> {
    let url = `/telephony/${billingAccount}/trunk/${serviceName}/externalDisplayedNumber/${number}`

    return this.client.request<TelephonyTrunkExternalDisplayedNumber>('GET', url)
  }
  */

  /**
   * External displayed number linked to a trunk [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk/%7BserviceName%7D/externalDisplayedNumber/%7Bnumber%7D#DELETE)
   */
  DeleteAnExternalDisplayedNumberForAGivenTrunk(billingAccount: string, number: any, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/trunk/${serviceName}/externalDisplayedNumber/${number}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * validate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk/%7BserviceName%7D/externalDisplayedNumber/%7Bnumber%7D/validate#POST)
   */
  GenerateAPhoneCallForValidationReturnedValidationCodeShouldBeTypedWhenAsked(billingAccount: string, number: any, serviceName: string): Promise<TelephonyTrunkExternalDisplayedNumberValidation> {
    let url = `/telephony/${billingAccount}/trunk/${serviceName}/externalDisplayedNumber/${number}/validate`

    return this.client.request<TelephonyTrunkExternalDisplayedNumberValidation>('POST', url)
  }

  /**
   * List the telephony.Voicemail objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail#GET)
   */
  VoicemailsAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/voicemail`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Voicemail service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyVoicemail> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}`

    return this.client.request<TelephonyVoicemail>('GET', url)
  }
  */

  /**
   * Voicemail service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyVoicemail): Promise<void> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the telephony.VoicemailMessages objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/directories#GET)
   */
  VoicemailDirectoryMessages(billingAccount: string, serviceName: string, dir?: TelephonyVoicemailMessageFolderDirectory): Promise<number[]> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/directories?`

    const queryParams = new QueryParams()
    if (dir) { queryParams.set('dir', dir.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Voicemail message [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/directories/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyVoicemailMessages> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/directories/${id}`

    return this.client.request<TelephonyVoicemailMessages>('GET', url)
  }
  */

  /**
   * Voicemail message [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/directories/%7Bid%7D#DELETE)
   */
  DeleteTheGivenVoicemailMessage(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/directories/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * download operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/directories/%7Bid%7D/download#GET)
   */
  GetAUrlToDownloadTheSoundFile(billingAccount: string, id: number, serviceName: string, format?: TelephonyServiceVoicemailAudioFormat): Promise<TelephonyPcsFile> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/directories/${id}/download?`

    const queryParams = new QueryParams()
    if (format) { queryParams.set('format', format.toString()) }

    return this.client.request<TelephonyPcsFile>('GET', url+queryParams.toString())
  }

  /**
   * move operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/directories/%7Bid%7D/move#POST)
   */
  MoveTheMessageToAnotherDirectory(billingAccount: string, dir: TelephonyVoicemailMessageFolderDirectory, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/directories/${id}/move`

    return this.client.request<void>('POST', url, {dir})
  }

  /**
   * List the telephony.VoicemailGreetings objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/greetings#GET)
   */
  VoicemailGreetingMessageProperties(billingAccount: string, serviceName: string, dir?: TelephonyVoicemailMessageFolderGreeting): Promise<number[]> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/greetings?`

    const queryParams = new QueryParams()
    if (dir) { queryParams.set('dir', dir.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the telephony.VoicemailGreetings objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/greetings#POST)
   */
  UploadANewSoundForASpecificGreetingReturnATaskId(billingAccount: string, dir: TelephonyVoicemailMessageFolderGreeting, documentId: string, serviceName: string): Promise<number> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/greetings`

    return this.client.request<number>('POST', url, {dir, documentId})
  }

  /**
   * Voicemail greeting [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/greetings/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, id: number, serviceName: string): Promise<TelephonyVoicemailGreetings> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/greetings/${id}`

    return this.client.request<TelephonyVoicemailGreetings>('GET', url)
  }
  */

  /**
   * Voicemail greeting [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/greetings/%7Bid%7D#DELETE)
   */
  DeleteTheCustomizedGreeting(billingAccount: string, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/greetings/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * download operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/greetings/%7Bid%7D/download#GET)
   */
  /*
  GetAUrlToDownloadTheSoundFile(billingAccount: string, id: number, serviceName: string, format?: TelephonyServiceVoicemailAudioFormat): Promise<TelephonyPcsFile> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/greetings/${id}/download?`

    const queryParams = new QueryParams()
    if (format) { queryParams.set('format', format.toString()) }

    return this.client.request<TelephonyPcsFile>('GET', url+queryParams.toString())
  }
  */

  /**
   * move operations [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/greetings/%7Bid%7D/move#POST)
   */
  /*
  MoveTheMessageToAnotherDirectory(billingAccount: string, dir: TelephonyVoicemailMessageFolderGreeting, id: number, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/greetings/${id}/move`

    return this.client.request<void>('POST', url, {dir})
  }
  */

  /**
   * migrateOnNewVersion operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/migrateOnNewVersion#POST)
   */
  ChangeTheVoicemailOnANewVersionToManagerGreetingsDirectoriesAndExtraSettings(billingAccount: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/migrateOnNewVersion`

    return this.client.request<void>('POST', url)
  }

  /**
   * Voicemail Properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/settings#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyVoicemailProperties> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/settings`

    return this.client.request<TelephonyVoicemailProperties>('GET', url)
  }
  */

  /**
   * Voicemail Properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/settings#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyVoicemailProperties): Promise<void> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/settings`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/settings/changePassword#POST)
   */
  ChangeTheVoicemailPasswordItMustBe4Digit(billingAccount: string, password: string, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/settings/changePassword`

    return this.client.request<void>('POST', url, {password})
  }

  /**
   * changeRouting operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/settings/changeRouting#POST)
   */
  DisableEnableVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(billingAccount: string, routing: TelephonyVoicefaxRouting, serviceName: string): Promise<void> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/settings/changeRouting`

    return this.client.request<void>('POST', url, {routing})
  }

  /**
   * routing operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/settings/routing#GET)
   */
  GetTheStatusOfTheVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(billingAccount: string, serviceName: string): Promise<TelephonyVoicefaxRouting> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/settings/routing`

    return this.client.request<TelephonyVoicefaxRouting>('GET', url)
  }

  /**
   * voicemailNumbers operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/settings/voicemailNumbers#GET)
   */
  GetNumberForInternalAndExternalVoicemail(billingAccount: string, serviceName: string): Promise<TelephonyVoicemailNumbers> {
    let url = `/telephony/${billingAccount}/voicemail/${serviceName}/settings/voicemailNumbers`

    return this.client.request<TelephonyVoicemailNumbers>('GET', url)
  }

  /**
   * List the telephony.Vxml objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/vxml#GET)
   */
  VxmlNumbersAssociatedWithThisBillingAccount(billingAccount: string): Promise<string[]> {
    let url = `/telephony/${billingAccount}/vxml`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Vxml services [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/vxml/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyVxml> {
    let url = `/telephony/${billingAccount}/vxml/${serviceName}`

    return this.client.request<TelephonyVxml>('GET', url)
  }
  */

  /**
   * Vxml Properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/vxml/%7BserviceName%7D/settings#GET)
   */
  /*
  GetThisObjectProperties(billingAccount: string, serviceName: string): Promise<TelephonyVxmlProperties> {
    let url = `/telephony/${billingAccount}/vxml/${serviceName}/settings`

    return this.client.request<TelephonyVxmlProperties>('GET', url)
  }
  */

  /**
   * Vxml Properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/vxml/%7BserviceName%7D/settings#PUT)
   */
  /*
  AlterThisObjectProperties(billingAccount: string, serviceName: string, payload: TelephonyVxmlProperties): Promise<void> {
    let url = `/telephony/${billingAccount}/vxml/${serviceName}/settings`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * logs operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/vxml/%7BserviceName%7D/settings/logs#POST)
   */
  GenerateATemporaryUrlToRetrieveDeviceLogs(billingAccount: string, serviceName: string): Promise<TelephonyTemporaryLogsLink> {
    let url = `/telephony/${billingAccount}/vxml/${serviceName}/settings/logs`

    return this.client.request<TelephonyTemporaryLogsLink>('POST', url)
  }

  /**
   * Get all available accessories [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/accessories#GET)
   */
  GetAllAvailableAccessories(country: TelephonyNumberCountry): Promise<TelephonyAccessoryOffer[]> {
    let url = `/telephony/accessories?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<TelephonyAccessoryOffer[]>('GET', url+queryParams.toString())
  }

  /**
   * Operations about the VOIP service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/aliases#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/telephony/aliases`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Telephony service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/aliases/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<TelephonyTelephonyGenericService> {
    let url = `/telephony/aliases/${serviceName}`

    return this.client.request<TelephonyTelephonyGenericService>('GET', url)
  }
  */

  /**
   * Change the contacts of this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/aliases/%7BserviceName%7D/changeContact#POST)
   */
  /*
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/telephony/aliases/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/aliases/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/telephony/aliases/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/aliases/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/telephony/aliases/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Get all available SIP domains by country [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/availableDefaultSipDomains#GET)
   */
  GetAllAvailableSIPDomainsByCountry(type: TelephonySipDomainProductType): Promise<TelephonyDefaultSipDomains[]> {
    let url = `/telephony/availableDefaultSipDomains?`

    const queryParams = new QueryParams()
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<TelephonyDefaultSipDomains[]>('GET', url+queryParams.toString())
  }

  /**
   * Get current order ids [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/currentOrderIds#GET)
   */
  GetCurrentOrderIds(): Promise<number[]> {
    let url = `/telephony/currentOrderIds`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Get all zip codes compatible for a number [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/directories/availableZipCodes#GET)
   */
  GetAllZipCodesCompatibleForANumber(country: TelephonyNumberCountry, number: string): Promise<string[]> {
    let url = `/telephony/directories/availableZipCodes?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (number) { queryParams.set('number', number) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Get city informations from a zip code [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/directories/cities#GET)
   */
  GetCityInformationsFromAZipCode(country: TelephonyNumberCountry, zipCode: string): Promise<TelephonyCity[]> {
    let url = `/telephony/directories/cities?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (zipCode) { queryParams.set('zipCode', zipCode) }

    return this.client.request<TelephonyCity[]>('GET', url+queryParams.toString())
  }

  /**
   * Get all available fax offer compatible [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/fax/offers#GET)
   */
  GetAllAvailableFaxOfferCompatible(country: TelephonyNumberCountry): Promise<TelephonyLineOffer[]> {
    let url = `/telephony/fax/offers?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<TelephonyLineOffer[]>('GET', url+queryParams.toString())
  }

  /**
   * Get all available phone brands compatible with lines [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/line/offer/phones#GET)
   */
  GetAllAvailablePhoneBrandsCompatibleWithLines(country: TelephonyNumberCountry, offer: string): Promise<TelephonyLinePhone[]> {
    let url = `/telephony/line/offer/phones?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (offer) { queryParams.set('offer', offer) }

    return this.client.request<TelephonyLinePhone[]>('GET', url+queryParams.toString())
  }

  /**
   * Get all available line offer compatible [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/line/offers#GET)
   */
  GetAllAvailableLineOfferCompatible(country: TelephonyNumberCountry): Promise<TelephonyLineOffer[]> {
    let url = `/telephony/line/offers?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<TelephonyLineOffer[]>('GET', url+queryParams.toString())
  }

  /**
   * Operations about the VOIP service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/lines#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/telephony/lines`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Telephony service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/lines/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<TelephonyTelephonyGenericService> {
    let url = `/telephony/lines/${serviceName}`

    return this.client.request<TelephonyTelephonyGenericService>('GET', url)
  }
  */

  /**
   * Change the contacts of this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/lines/%7BserviceName%7D/changeContact#POST)
   */
  /*
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/telephony/lines/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/lines/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/telephony/lines/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/lines/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/telephony/lines/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Get all available geographic zone with some details, from a country [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/number/detailedZones#GET)
   */
  GetAllAvailableGeographicZoneWithSomeDetailsFromACountry(country: TelephonyNumberCountry, axiom?: string): Promise<TelephonyNumberDetailedZone[]> {
    let url = `/telephony/number/detailedZones?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (axiom) { queryParams.set('axiom', axiom) }

    return this.client.request<TelephonyNumberDetailedZone[]>('GET', url+queryParams.toString())
  }

  /**
   * Get all available special range from a country [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/number/ranges#GET)
   */
  GetAllAvailableSpecialRangeFromACountry(country: TelephonyNumberCountry): Promise<string[]> {
    let url = `/telephony/number/ranges?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Get all available specific number from a country [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/number/specificNumbers#GET)
   */
  GetAllAvailableSpecificNumberFromACountry(country: TelephonyNumberCountry, type: TelephonyNumberType, range?: string, zone?: string): Promise<TelephonySpecificNumber[]> {
    let url = `/telephony/number/specificNumbers?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (type) { queryParams.set('type', type.toString()) }
    if (range) { queryParams.set('range', range) }
    if (zone) { queryParams.set('zone', zone) }

    return this.client.request<TelephonySpecificNumber[]>('GET', url+queryParams.toString())
  }

  /**
   * Get all available geographic zone from a country [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/number/zones#GET)
   */
  GetAllAvailableGeographicZoneFromACountry(country: TelephonyNumberCountry, axiom?: string): Promise<string[]> {
    let url = `/telephony/number/zones?`

    const queryParams = new QueryParams()
    if (country) { queryParams.set('country', country.toString()) }
    if (axiom) { queryParams.set('axiom', axiom) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Search a service with its domain, to get its billing account and type [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/searchServices#GET)
   */
  SearchAServiceWithItsDomainToGetItsBillingAccountAndType(axiom: string): Promise<TelephonyTelephonySearchService[]> {
    let url = `/telephony/searchServices?`

    const queryParams = new QueryParams()
    if (axiom) { queryParams.set('axiom', axiom) }

    return this.client.request<TelephonyTelephonySearchService[]>('GET', url+queryParams.toString())
  }

  /**
   * Get all available SIP domains by country [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/setDefaultSipDomain#POST)
   */
  /*
  GetAllAvailableSIPDomainsByCountry(country: TelephonyNumberCountry, domain: string, type: TelephonySipDomainProductType): Promise<void> {
    let url = `/telephony/setDefaultSipDomain`

    return this.client.request<void>('POST', url, {country, domain, type})
  }
  */

  /**
   * List the telephony.Sound objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/sounds#GET)
   */
  SoundsAttachedToThisTelephonyAccount(): Promise<number[]> {
    let url = `/telephony/sounds`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the telephony.Sound objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/sounds#POST)
   */
  CreateANewSound(filename: string, description?: string): Promise<TelephonySound> {
    let url = `/telephony/sounds`

    return this.client.request<TelephonySound>('POST', url, {filename, description})
  }

  /**
   * Sounds attached to this telephony account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/sounds/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(id: number): Promise<TelephonySound> {
    let url = `/telephony/sounds/${id}`

    return this.client.request<TelephonySound>('GET', url)
  }
  */

  /**
   * Sounds attached to this telephony account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/sounds/%7Bid%7D#PUT)
   */
  /*
  AlterThisObjectProperties(id: number, payload: TelephonySound): Promise<void> {
    let url = `/telephony/sounds/${id}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Sounds attached to this telephony account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/sounds/%7Bid%7D#DELETE)
   */
  DeleteTheSound(id: number): Promise<void> {
    let url = `/telephony/sounds/${id}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Operations about the VOIP service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/spare#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/telephony/spare`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Spare properties [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/spare/%7Bspare%7D#GET)
   */
  /*
  GetThisObjectProperties(spare: string): Promise<SparetelephonyTelephonySpare> {
    let url = `/telephony/spare/${spare}`

    return this.client.request<SparetelephonyTelephonySpare>('GET', url)
  }
  */

  /**
   * Spare properties [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/spare/%7Bspare%7D#DELETE)
   */
  DeleteTheSpareAsIfItWasNotBelongingToOVHAnymore(spare: string): Promise<void> {
    let url = `/telephony/spare/${spare}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * compatibleReplacement operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/spare/%7Bspare%7D/compatibleReplacement#GET)
   */
  ReturnTheListOfPhoneDomainsCompatibleToBeReplaced(spare: string): Promise<string[]> {
    let url = `/telephony/spare/${spare}/compatibleReplacement`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * replace operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/spare/%7Bspare%7D/replace#POST)
   */
  ReplaceThePhoneByItsSpareTheBrokenPhoneBecameASpareIfItWasBoughtAnRMAIsCreatedIfTheBrokenPhoneIsUnderSecuritydeposit(domain: string, ip: string, spare: string): Promise<void> {
    let url = `/telephony/spare/${spare}/replace`

    return this.client.request<void>('POST', url, {domain, ip})
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/spare/%7Bspare%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(spare: string): Promise<ServicesService> {
    let url = `/telephony/spare/${spare}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/spare/%7Bspare%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(spare: string, payload: ServicesService): Promise<void> {
    let url = `/telephony/spare/${spare}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Get all available spare brands [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/spare/brands#GET)
   */
  GetAllAvailableSpareBrands(): Promise<string[]> {
    let url = `/telephony/spare/brands`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Operations about the VOIP service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/trunks#GET)
   */
  /*
  ListAvailableServices(): Promise<string[]> {
    let url = `/telephony/trunks`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Telephony service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/trunks/%7BserviceName%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<TelephonyTelephonyGenericService> {
    let url = `/telephony/trunks/${serviceName}`

    return this.client.request<TelephonyTelephonyGenericService>('GET', url)
  }
  */

  /**
   * Change the contacts of this service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/trunks/%7BserviceName%7D/changeContact#POST)
   */
  /*
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/telephony/trunks/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/trunks/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/telephony/trunks/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/trunks/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/telephony/trunks/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

}
