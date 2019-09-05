"use strict";
// GENERATED SDK for telephony API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * ISO country codes
 */
var CoreTypesCountry;
(function (CoreTypesCountry) {
    CoreTypesCountry["AC"] = "ac";
    CoreTypesCountry["AD"] = "ad";
    CoreTypesCountry["AE"] = "ae";
    CoreTypesCountry["AF"] = "af";
    CoreTypesCountry["AG"] = "ag";
    CoreTypesCountry["AI"] = "ai";
    CoreTypesCountry["AL"] = "al";
    CoreTypesCountry["AM"] = "am";
    CoreTypesCountry["AN"] = "an";
    CoreTypesCountry["AO"] = "ao";
    CoreTypesCountry["AQ"] = "aq";
    CoreTypesCountry["AR"] = "ar";
    CoreTypesCountry["AS"] = "as";
    CoreTypesCountry["AT"] = "at";
    CoreTypesCountry["AU"] = "au";
    CoreTypesCountry["AW"] = "aw";
    CoreTypesCountry["AX"] = "ax";
    CoreTypesCountry["AZ"] = "az";
    CoreTypesCountry["BA"] = "ba";
    CoreTypesCountry["BB"] = "bb";
    CoreTypesCountry["BD"] = "bd";
    CoreTypesCountry["BE"] = "be";
    CoreTypesCountry["BF"] = "bf";
    CoreTypesCountry["BG"] = "bg";
    CoreTypesCountry["BH"] = "bh";
    CoreTypesCountry["BI"] = "bi";
    CoreTypesCountry["BJ"] = "bj";
    CoreTypesCountry["BL"] = "bl";
    CoreTypesCountry["BM"] = "bm";
    CoreTypesCountry["BN"] = "bn";
    CoreTypesCountry["BO"] = "bo";
    CoreTypesCountry["BQ"] = "bq";
    CoreTypesCountry["BR"] = "br";
    CoreTypesCountry["BS"] = "bs";
    CoreTypesCountry["BT"] = "bt";
    CoreTypesCountry["BV"] = "bv";
    CoreTypesCountry["BW"] = "bw";
    CoreTypesCountry["BY"] = "by";
    CoreTypesCountry["BZ"] = "bz";
    CoreTypesCountry["CA"] = "ca";
    CoreTypesCountry["CC"] = "cc";
    CoreTypesCountry["CD"] = "cd";
    CoreTypesCountry["CF"] = "cf";
    CoreTypesCountry["CG"] = "cg";
    CoreTypesCountry["CH"] = "ch";
    CoreTypesCountry["CI"] = "ci";
    CoreTypesCountry["CK"] = "ck";
    CoreTypesCountry["CL"] = "cl";
    CoreTypesCountry["CM"] = "cm";
    CoreTypesCountry["CN"] = "cn";
    CoreTypesCountry["CO"] = "co";
    CoreTypesCountry["CR"] = "cr";
    CoreTypesCountry["CS"] = "cs";
    CoreTypesCountry["CU"] = "cu";
    CoreTypesCountry["CV"] = "cv";
    CoreTypesCountry["CW"] = "cw";
    CoreTypesCountry["CX"] = "cx";
    CoreTypesCountry["CY"] = "cy";
    CoreTypesCountry["CZ"] = "cz";
    CoreTypesCountry["DE"] = "de";
    CoreTypesCountry["DJ"] = "dj";
    CoreTypesCountry["DK"] = "dk";
    CoreTypesCountry["DM"] = "dm";
    CoreTypesCountry["DO"] = "do";
    CoreTypesCountry["DZ"] = "dz";
    CoreTypesCountry["EC"] = "ec";
    CoreTypesCountry["EE"] = "ee";
    CoreTypesCountry["EG"] = "eg";
    CoreTypesCountry["EH"] = "eh";
    CoreTypesCountry["ER"] = "er";
    CoreTypesCountry["ES"] = "es";
    CoreTypesCountry["ET"] = "et";
    CoreTypesCountry["FC"] = "fc";
    CoreTypesCountry["FD"] = "fd";
    CoreTypesCountry["FI"] = "fi";
    CoreTypesCountry["FJ"] = "fj";
    CoreTypesCountry["FK"] = "fk";
    CoreTypesCountry["FM"] = "fm";
    CoreTypesCountry["FO"] = "fo";
    CoreTypesCountry["FR"] = "fr";
    CoreTypesCountry["FX"] = "fx";
    CoreTypesCountry["GA"] = "ga";
    CoreTypesCountry["GB"] = "gb";
    CoreTypesCountry["GD"] = "gd";
    CoreTypesCountry["GE"] = "ge";
    CoreTypesCountry["GF"] = "gf";
    CoreTypesCountry["GG"] = "gg";
    CoreTypesCountry["GH"] = "gh";
    CoreTypesCountry["GI"] = "gi";
    CoreTypesCountry["GL"] = "gl";
    CoreTypesCountry["GM"] = "gm";
    CoreTypesCountry["GN"] = "gn";
    CoreTypesCountry["GP"] = "gp";
    CoreTypesCountry["GQ"] = "gq";
    CoreTypesCountry["GR"] = "gr";
    CoreTypesCountry["GS"] = "gs";
    CoreTypesCountry["GT"] = "gt";
    CoreTypesCountry["GU"] = "gu";
    CoreTypesCountry["GW"] = "gw";
    CoreTypesCountry["GY"] = "gy";
    CoreTypesCountry["HK"] = "hk";
    CoreTypesCountry["HM"] = "hm";
    CoreTypesCountry["HN"] = "hn";
    CoreTypesCountry["HR"] = "hr";
    CoreTypesCountry["HT"] = "ht";
    CoreTypesCountry["HU"] = "hu";
    CoreTypesCountry["ID"] = "id";
    CoreTypesCountry["IE"] = "ie";
    CoreTypesCountry["IL"] = "il";
    CoreTypesCountry["IM"] = "im";
    CoreTypesCountry["IN"] = "in";
    CoreTypesCountry["IO"] = "io";
    CoreTypesCountry["IQ"] = "iq";
    CoreTypesCountry["IR"] = "ir";
    CoreTypesCountry["IS"] = "is";
    CoreTypesCountry["IT"] = "it";
    CoreTypesCountry["JE"] = "je";
    CoreTypesCountry["JM"] = "jm";
    CoreTypesCountry["JO"] = "jo";
    CoreTypesCountry["JP"] = "jp";
    CoreTypesCountry["KE"] = "ke";
    CoreTypesCountry["KG"] = "kg";
    CoreTypesCountry["KH"] = "kh";
    CoreTypesCountry["KI"] = "ki";
    CoreTypesCountry["KM"] = "km";
    CoreTypesCountry["KN"] = "kn";
    CoreTypesCountry["KP"] = "kp";
    CoreTypesCountry["KR"] = "kr";
    CoreTypesCountry["KW"] = "kw";
    CoreTypesCountry["KY"] = "ky";
    CoreTypesCountry["KZ"] = "kz";
    CoreTypesCountry["LA"] = "la";
    CoreTypesCountry["LB"] = "lb";
    CoreTypesCountry["LC"] = "lc";
    CoreTypesCountry["LI"] = "li";
    CoreTypesCountry["LK"] = "lk";
    CoreTypesCountry["LR"] = "lr";
    CoreTypesCountry["LS"] = "ls";
    CoreTypesCountry["LT"] = "lt";
    CoreTypesCountry["LU"] = "lu";
    CoreTypesCountry["LV"] = "lv";
    CoreTypesCountry["LY"] = "ly";
    CoreTypesCountry["MA"] = "ma";
    CoreTypesCountry["MC"] = "mc";
    CoreTypesCountry["MD"] = "md";
    CoreTypesCountry["ME"] = "me";
    CoreTypesCountry["MF"] = "mf";
    CoreTypesCountry["MG"] = "mg";
    CoreTypesCountry["MH"] = "mh";
    CoreTypesCountry["MK"] = "mk";
    CoreTypesCountry["ML"] = "ml";
    CoreTypesCountry["MM"] = "mm";
    CoreTypesCountry["MN"] = "mn";
    CoreTypesCountry["MO"] = "mo";
    CoreTypesCountry["MP"] = "mp";
    CoreTypesCountry["MQ"] = "mq";
    CoreTypesCountry["MR"] = "mr";
    CoreTypesCountry["MS"] = "ms";
    CoreTypesCountry["MT"] = "mt";
    CoreTypesCountry["MU"] = "mu";
    CoreTypesCountry["MV"] = "mv";
    CoreTypesCountry["MW"] = "mw";
    CoreTypesCountry["MX"] = "mx";
    CoreTypesCountry["MY"] = "my";
    CoreTypesCountry["MZ"] = "mz";
    CoreTypesCountry["NA"] = "na";
    CoreTypesCountry["NC"] = "nc";
    CoreTypesCountry["NE"] = "ne";
    CoreTypesCountry["NF"] = "nf";
    CoreTypesCountry["NG"] = "ng";
    CoreTypesCountry["NI"] = "ni";
    CoreTypesCountry["NL"] = "nl";
    CoreTypesCountry["NO"] = "no";
    CoreTypesCountry["NP"] = "np";
    CoreTypesCountry["NR"] = "nr";
    CoreTypesCountry["NU"] = "nu";
    CoreTypesCountry["NZ"] = "nz";
    CoreTypesCountry["OM"] = "om";
    CoreTypesCountry["PA"] = "pa";
    CoreTypesCountry["PE"] = "pe";
    CoreTypesCountry["PF"] = "pf";
    CoreTypesCountry["PG"] = "pg";
    CoreTypesCountry["PH"] = "ph";
    CoreTypesCountry["PK"] = "pk";
    CoreTypesCountry["PL"] = "pl";
    CoreTypesCountry["PM"] = "pm";
    CoreTypesCountry["PN"] = "pn";
    CoreTypesCountry["PR"] = "pr";
    CoreTypesCountry["PS"] = "ps";
    CoreTypesCountry["PT"] = "pt";
    CoreTypesCountry["PW"] = "pw";
    CoreTypesCountry["PY"] = "py";
    CoreTypesCountry["QA"] = "qa";
    CoreTypesCountry["QC"] = "qc";
    CoreTypesCountry["RE"] = "re";
    CoreTypesCountry["RO"] = "ro";
    CoreTypesCountry["RS"] = "rs";
    CoreTypesCountry["RU"] = "ru";
    CoreTypesCountry["RW"] = "rw";
    CoreTypesCountry["SA"] = "sa";
    CoreTypesCountry["SB"] = "sb";
    CoreTypesCountry["SC"] = "sc";
    CoreTypesCountry["SD"] = "sd";
    CoreTypesCountry["SE"] = "se";
    CoreTypesCountry["SG"] = "sg";
    CoreTypesCountry["SH"] = "sh";
    CoreTypesCountry["SI"] = "si";
    CoreTypesCountry["SJ"] = "sj";
    CoreTypesCountry["SK"] = "sk";
    CoreTypesCountry["SL"] = "sl";
    CoreTypesCountry["SM"] = "sm";
    CoreTypesCountry["SN"] = "sn";
    CoreTypesCountry["SO"] = "so";
    CoreTypesCountry["SR"] = "sr";
    CoreTypesCountry["SS"] = "ss";
    CoreTypesCountry["ST"] = "st";
    CoreTypesCountry["SV"] = "sv";
    CoreTypesCountry["SX"] = "sx";
    CoreTypesCountry["SY"] = "sy";
    CoreTypesCountry["SZ"] = "sz";
    CoreTypesCountry["TC"] = "tc";
    CoreTypesCountry["TD"] = "td";
    CoreTypesCountry["TF"] = "tf";
    CoreTypesCountry["TG"] = "tg";
    CoreTypesCountry["TH"] = "th";
    CoreTypesCountry["TJ"] = "tj";
    CoreTypesCountry["TK"] = "tk";
    CoreTypesCountry["TL"] = "tl";
    CoreTypesCountry["TM"] = "tm";
    CoreTypesCountry["TN"] = "tn";
    CoreTypesCountry["TO"] = "to";
    CoreTypesCountry["TP"] = "tp";
    CoreTypesCountry["TR"] = "tr";
    CoreTypesCountry["TT"] = "tt";
    CoreTypesCountry["TV"] = "tv";
    CoreTypesCountry["TW"] = "tw";
    CoreTypesCountry["TZ"] = "tz";
    CoreTypesCountry["UA"] = "ua";
    CoreTypesCountry["UG"] = "ug";
    CoreTypesCountry["UK"] = "uk";
    CoreTypesCountry["UM"] = "um";
    CoreTypesCountry["US"] = "us";
    CoreTypesCountry["UY"] = "uy";
    CoreTypesCountry["UZ"] = "uz";
    CoreTypesCountry["VA"] = "va";
    CoreTypesCountry["VC"] = "vc";
    CoreTypesCountry["VE"] = "ve";
    CoreTypesCountry["VG"] = "vg";
    CoreTypesCountry["VI"] = "vi";
    CoreTypesCountry["VN"] = "vn";
    CoreTypesCountry["VU"] = "vu";
    CoreTypesCountry["WE"] = "we";
    CoreTypesCountry["WF"] = "wf";
    CoreTypesCountry["WS"] = "ws";
    CoreTypesCountry["YE"] = "ye";
    CoreTypesCountry["YT"] = "yt";
    CoreTypesCountry["YU"] = "yu";
    CoreTypesCountry["ZA"] = "za";
    CoreTypesCountry["ZM"] = "zm";
    CoreTypesCountry["ZW"] = "zw";
})(CoreTypesCountry = exports.CoreTypesCountry || (exports.CoreTypesCountry = {}));
/*
 * IANA TimeZone names
 */
var CoreTypesTimeZone;
(function (CoreTypesTimeZone) {
    CoreTypesTimeZone["AFRICA_ABIDJAN"] = "Africa/Abidjan";
    CoreTypesTimeZone["AFRICA_ACCRA"] = "Africa/Accra";
    CoreTypesTimeZone["AFRICA_ADDIS_ABABA"] = "Africa/Addis_Ababa";
    CoreTypesTimeZone["AFRICA_ALGIERS"] = "Africa/Algiers";
    CoreTypesTimeZone["AFRICA_ASMARA"] = "Africa/Asmara";
    CoreTypesTimeZone["AFRICA_BAMAKO"] = "Africa/Bamako";
    CoreTypesTimeZone["AFRICA_BANGUI"] = "Africa/Bangui";
    CoreTypesTimeZone["AFRICA_BANJUL"] = "Africa/Banjul";
    CoreTypesTimeZone["AFRICA_BISSAU"] = "Africa/Bissau";
    CoreTypesTimeZone["AFRICA_BLANTYRE"] = "Africa/Blantyre";
    CoreTypesTimeZone["AFRICA_BRAZZAVILLE"] = "Africa/Brazzaville";
    CoreTypesTimeZone["AFRICA_BUJUMBURA"] = "Africa/Bujumbura";
    CoreTypesTimeZone["AFRICA_CAIRO"] = "Africa/Cairo";
    CoreTypesTimeZone["AFRICA_CASABLANCA"] = "Africa/Casablanca";
    CoreTypesTimeZone["AFRICA_CEUTA"] = "Africa/Ceuta";
    CoreTypesTimeZone["AFRICA_CONAKRY"] = "Africa/Conakry";
    CoreTypesTimeZone["AFRICA_DAKAR"] = "Africa/Dakar";
    CoreTypesTimeZone["AFRICA_DAR_ES_SALAAM"] = "Africa/Dar_es_Salaam";
    CoreTypesTimeZone["AFRICA_DJIBOUTI"] = "Africa/Djibouti";
    CoreTypesTimeZone["AFRICA_DOUALA"] = "Africa/Douala";
    CoreTypesTimeZone["AFRICA_EL_AAIUN"] = "Africa/El_Aaiun";
    CoreTypesTimeZone["AFRICA_FREETOWN"] = "Africa/Freetown";
    CoreTypesTimeZone["AFRICA_GABORONE"] = "Africa/Gaborone";
    CoreTypesTimeZone["AFRICA_HARARE"] = "Africa/Harare";
    CoreTypesTimeZone["AFRICA_JOHANNESBURG"] = "Africa/Johannesburg";
    CoreTypesTimeZone["AFRICA_JUBA"] = "Africa/Juba";
    CoreTypesTimeZone["AFRICA_KAMPALA"] = "Africa/Kampala";
    CoreTypesTimeZone["AFRICA_KHARTOUM"] = "Africa/Khartoum";
    CoreTypesTimeZone["AFRICA_KIGALI"] = "Africa/Kigali";
    CoreTypesTimeZone["AFRICA_KINSHASA"] = "Africa/Kinshasa";
    CoreTypesTimeZone["AFRICA_LAGOS"] = "Africa/Lagos";
    CoreTypesTimeZone["AFRICA_LIBREVILLE"] = "Africa/Libreville";
    CoreTypesTimeZone["AFRICA_LOME"] = "Africa/Lome";
    CoreTypesTimeZone["AFRICA_LUANDA"] = "Africa/Luanda";
    CoreTypesTimeZone["AFRICA_LUBUMBASHI"] = "Africa/Lubumbashi";
    CoreTypesTimeZone["AFRICA_LUSAKA"] = "Africa/Lusaka";
    CoreTypesTimeZone["AFRICA_MALABO"] = "Africa/Malabo";
    CoreTypesTimeZone["AFRICA_MAPUTO"] = "Africa/Maputo";
    CoreTypesTimeZone["AFRICA_MASERU"] = "Africa/Maseru";
    CoreTypesTimeZone["AFRICA_MBABANE"] = "Africa/Mbabane";
    CoreTypesTimeZone["AFRICA_MOGADISHU"] = "Africa/Mogadishu";
    CoreTypesTimeZone["AFRICA_MONROVIA"] = "Africa/Monrovia";
    CoreTypesTimeZone["AFRICA_NAIROBI"] = "Africa/Nairobi";
    CoreTypesTimeZone["AFRICA_NDJAMENA"] = "Africa/Ndjamena";
    CoreTypesTimeZone["AFRICA_NIAMEY"] = "Africa/Niamey";
    CoreTypesTimeZone["AFRICA_NOUAKCHOTT"] = "Africa/Nouakchott";
    CoreTypesTimeZone["AFRICA_OUAGADOUGOU"] = "Africa/Ouagadougou";
    CoreTypesTimeZone["AFRICA_PORTO_NOVO"] = "Africa/Porto-Novo";
    CoreTypesTimeZone["AFRICA_SAO_TOME"] = "Africa/Sao_Tome";
    CoreTypesTimeZone["AFRICA_TRIPOLI"] = "Africa/Tripoli";
    CoreTypesTimeZone["AFRICA_TUNIS"] = "Africa/Tunis";
    CoreTypesTimeZone["AFRICA_WINDHOEK"] = "Africa/Windhoek";
    CoreTypesTimeZone["AMERICA_ADAK"] = "America/Adak";
    CoreTypesTimeZone["AMERICA_ANCHORAGE"] = "America/Anchorage";
    CoreTypesTimeZone["AMERICA_ANGUILLA"] = "America/Anguilla";
    CoreTypesTimeZone["AMERICA_ANTIGUA"] = "America/Antigua";
    CoreTypesTimeZone["AMERICA_ARAGUAINA"] = "America/Araguaina";
    CoreTypesTimeZone["AMERICA_ARGENTINA_BUENOS_AIRES"] = "America/Argentina/Buenos_Aires";
    CoreTypesTimeZone["AMERICA_ARGENTINA_CATAMARCA"] = "America/Argentina/Catamarca";
    CoreTypesTimeZone["AMERICA_ARGENTINA_CORDOBA"] = "America/Argentina/Cordoba";
    CoreTypesTimeZone["AMERICA_ARGENTINA_JUJUY"] = "America/Argentina/Jujuy";
    CoreTypesTimeZone["AMERICA_ARGENTINA_LA_RIOJA"] = "America/Argentina/La_Rioja";
    CoreTypesTimeZone["AMERICA_ARGENTINA_MENDOZA"] = "America/Argentina/Mendoza";
    CoreTypesTimeZone["AMERICA_ARGENTINA_RIO_GALLEGOS"] = "America/Argentina/Rio_Gallegos";
    CoreTypesTimeZone["AMERICA_ARGENTINA_SALTA"] = "America/Argentina/Salta";
    CoreTypesTimeZone["AMERICA_ARGENTINA_SAN_JUAN"] = "America/Argentina/San_Juan";
    CoreTypesTimeZone["AMERICA_ARGENTINA_SAN_LUIS"] = "America/Argentina/San_Luis";
    CoreTypesTimeZone["AMERICA_ARGENTINA_TUCUMAN"] = "America/Argentina/Tucuman";
    CoreTypesTimeZone["AMERICA_ARGENTINA_USHUAIA"] = "America/Argentina/Ushuaia";
    CoreTypesTimeZone["AMERICA_ARUBA"] = "America/Aruba";
    CoreTypesTimeZone["AMERICA_ASUNCION"] = "America/Asuncion";
    CoreTypesTimeZone["AMERICA_ATIKOKAN"] = "America/Atikokan";
    CoreTypesTimeZone["AMERICA_BAHIA"] = "America/Bahia";
    CoreTypesTimeZone["AMERICA_BAHIA_BANDERAS"] = "America/Bahia_Banderas";
    CoreTypesTimeZone["AMERICA_BARBADOS"] = "America/Barbados";
    CoreTypesTimeZone["AMERICA_BELEM"] = "America/Belem";
    CoreTypesTimeZone["AMERICA_BELIZE"] = "America/Belize";
    CoreTypesTimeZone["AMERICA_BLANC_SABLON"] = "America/Blanc-Sablon";
    CoreTypesTimeZone["AMERICA_BOA_VISTA"] = "America/Boa_Vista";
    CoreTypesTimeZone["AMERICA_BOGOTA"] = "America/Bogota";
    CoreTypesTimeZone["AMERICA_BOISE"] = "America/Boise";
    CoreTypesTimeZone["AMERICA_CAMBRIDGE_BAY"] = "America/Cambridge_Bay";
    CoreTypesTimeZone["AMERICA_CAMPO_GRANDE"] = "America/Campo_Grande";
    CoreTypesTimeZone["AMERICA_CANCUN"] = "America/Cancun";
    CoreTypesTimeZone["AMERICA_CARACAS"] = "America/Caracas";
    CoreTypesTimeZone["AMERICA_CAYENNE"] = "America/Cayenne";
    CoreTypesTimeZone["AMERICA_CAYMAN"] = "America/Cayman";
    CoreTypesTimeZone["AMERICA_CHICAGO"] = "America/Chicago";
    CoreTypesTimeZone["AMERICA_CHIHUAHUA"] = "America/Chihuahua";
    CoreTypesTimeZone["AMERICA_COSTA_RICA"] = "America/Costa_Rica";
    CoreTypesTimeZone["AMERICA_CRESTON"] = "America/Creston";
    CoreTypesTimeZone["AMERICA_CUIABA"] = "America/Cuiaba";
    CoreTypesTimeZone["AMERICA_CURACAO"] = "America/Curacao";
    CoreTypesTimeZone["AMERICA_DANMARKSHAVN"] = "America/Danmarkshavn";
    CoreTypesTimeZone["AMERICA_DAWSON"] = "America/Dawson";
    CoreTypesTimeZone["AMERICA_DAWSON_CREEK"] = "America/Dawson_Creek";
    CoreTypesTimeZone["AMERICA_DENVER"] = "America/Denver";
    CoreTypesTimeZone["AMERICA_DETROIT"] = "America/Detroit";
    CoreTypesTimeZone["AMERICA_DOMINICA"] = "America/Dominica";
    CoreTypesTimeZone["AMERICA_EDMONTON"] = "America/Edmonton";
    CoreTypesTimeZone["AMERICA_EIRUNEPE"] = "America/Eirunepe";
    CoreTypesTimeZone["AMERICA_EL_SALVADOR"] = "America/El_Salvador";
    CoreTypesTimeZone["AMERICA_FORTALEZA"] = "America/Fortaleza";
    CoreTypesTimeZone["AMERICA_GLACE_BAY"] = "America/Glace_Bay";
    CoreTypesTimeZone["AMERICA_GODTHAB"] = "America/Godthab";
    CoreTypesTimeZone["AMERICA_GOOSE_BAY"] = "America/Goose_Bay";
    CoreTypesTimeZone["AMERICA_GRAND_TURK"] = "America/Grand_Turk";
    CoreTypesTimeZone["AMERICA_GRENADA"] = "America/Grenada";
    CoreTypesTimeZone["AMERICA_GUADELOUPE"] = "America/Guadeloupe";
    CoreTypesTimeZone["AMERICA_GUATEMALA"] = "America/Guatemala";
    CoreTypesTimeZone["AMERICA_GUAYAQUIL"] = "America/Guayaquil";
    CoreTypesTimeZone["AMERICA_GUYANA"] = "America/Guyana";
    CoreTypesTimeZone["AMERICA_HALIFAX"] = "America/Halifax";
    CoreTypesTimeZone["AMERICA_HAVANA"] = "America/Havana";
    CoreTypesTimeZone["AMERICA_HERMOSILLO"] = "America/Hermosillo";
    CoreTypesTimeZone["AMERICA_INDIANA_INDIANAPOLIS"] = "America/Indiana/Indianapolis";
    CoreTypesTimeZone["AMERICA_INDIANA_KNOX"] = "America/Indiana/Knox";
    CoreTypesTimeZone["AMERICA_INDIANA_MARENGO"] = "America/Indiana/Marengo";
    CoreTypesTimeZone["AMERICA_INDIANA_PETERSBURG"] = "America/Indiana/Petersburg";
    CoreTypesTimeZone["AMERICA_INDIANA_TELL_CITY"] = "America/Indiana/Tell_City";
    CoreTypesTimeZone["AMERICA_INDIANA_VEVAY"] = "America/Indiana/Vevay";
    CoreTypesTimeZone["AMERICA_INDIANA_VINCENNES"] = "America/Indiana/Vincennes";
    CoreTypesTimeZone["AMERICA_INDIANA_WINAMAC"] = "America/Indiana/Winamac";
    CoreTypesTimeZone["AMERICA_INUVIK"] = "America/Inuvik";
    CoreTypesTimeZone["AMERICA_IQALUIT"] = "America/Iqaluit";
    CoreTypesTimeZone["AMERICA_JAMAICA"] = "America/Jamaica";
    CoreTypesTimeZone["AMERICA_JUNEAU"] = "America/Juneau";
    CoreTypesTimeZone["AMERICA_KENTUCKY_LOUISVILLE"] = "America/Kentucky/Louisville";
    CoreTypesTimeZone["AMERICA_KENTUCKY_MONTICELLO"] = "America/Kentucky/Monticello";
    CoreTypesTimeZone["AMERICA_KRALENDIJK"] = "America/Kralendijk";
    CoreTypesTimeZone["AMERICA_LA_PAZ"] = "America/La_Paz";
    CoreTypesTimeZone["AMERICA_LIMA"] = "America/Lima";
    CoreTypesTimeZone["AMERICA_LOS_ANGELES"] = "America/Los_Angeles";
    CoreTypesTimeZone["AMERICA_LOWER_PRINCES"] = "America/Lower_Princes";
    CoreTypesTimeZone["AMERICA_MACEIO"] = "America/Maceio";
    CoreTypesTimeZone["AMERICA_MANAGUA"] = "America/Managua";
    CoreTypesTimeZone["AMERICA_MANAUS"] = "America/Manaus";
    CoreTypesTimeZone["AMERICA_MARIGOT"] = "America/Marigot";
    CoreTypesTimeZone["AMERICA_MARTINIQUE"] = "America/Martinique";
    CoreTypesTimeZone["AMERICA_MATAMOROS"] = "America/Matamoros";
    CoreTypesTimeZone["AMERICA_MAZATLAN"] = "America/Mazatlan";
    CoreTypesTimeZone["AMERICA_MENOMINEE"] = "America/Menominee";
    CoreTypesTimeZone["AMERICA_MERIDA"] = "America/Merida";
    CoreTypesTimeZone["AMERICA_METLAKATLA"] = "America/Metlakatla";
    CoreTypesTimeZone["AMERICA_MEXICO_CITY"] = "America/Mexico_City";
    CoreTypesTimeZone["AMERICA_MIQUELON"] = "America/Miquelon";
    CoreTypesTimeZone["AMERICA_MONCTON"] = "America/Moncton";
    CoreTypesTimeZone["AMERICA_MONTERREY"] = "America/Monterrey";
    CoreTypesTimeZone["AMERICA_MONTEVIDEO"] = "America/Montevideo";
    CoreTypesTimeZone["AMERICA_MONTSERRAT"] = "America/Montserrat";
    CoreTypesTimeZone["AMERICA_NASSAU"] = "America/Nassau";
    CoreTypesTimeZone["AMERICA_NEW_YORK"] = "America/New_York";
    CoreTypesTimeZone["AMERICA_NIPIGON"] = "America/Nipigon";
    CoreTypesTimeZone["AMERICA_NOME"] = "America/Nome";
    CoreTypesTimeZone["AMERICA_NORONHA"] = "America/Noronha";
    CoreTypesTimeZone["AMERICA_NORTH_DAKOTA_BEULAH"] = "America/North_Dakota/Beulah";
    CoreTypesTimeZone["AMERICA_NORTH_DAKOTA_CENTER"] = "America/North_Dakota/Center";
    CoreTypesTimeZone["AMERICA_NORTH_DAKOTA_NEW_SALEM"] = "America/North_Dakota/New_Salem";
    CoreTypesTimeZone["AMERICA_OJINAGA"] = "America/Ojinaga";
    CoreTypesTimeZone["AMERICA_PANAMA"] = "America/Panama";
    CoreTypesTimeZone["AMERICA_PANGNIRTUNG"] = "America/Pangnirtung";
    CoreTypesTimeZone["AMERICA_PARAMARIBO"] = "America/Paramaribo";
    CoreTypesTimeZone["AMERICA_PHOENIX"] = "America/Phoenix";
    CoreTypesTimeZone["AMERICA_PORT_AU_PRINCE"] = "America/Port-au-Prince";
    CoreTypesTimeZone["AMERICA_PORT_OF_SPAIN"] = "America/Port_of_Spain";
    CoreTypesTimeZone["AMERICA_PORTO_VELHO"] = "America/Porto_Velho";
    CoreTypesTimeZone["AMERICA_PUERTO_RICO"] = "America/Puerto_Rico";
    CoreTypesTimeZone["AMERICA_RAINY_RIVER"] = "America/Rainy_River";
    CoreTypesTimeZone["AMERICA_RANKIN_INLET"] = "America/Rankin_Inlet";
    CoreTypesTimeZone["AMERICA_RECIFE"] = "America/Recife";
    CoreTypesTimeZone["AMERICA_REGINA"] = "America/Regina";
    CoreTypesTimeZone["AMERICA_RESOLUTE"] = "America/Resolute";
    CoreTypesTimeZone["AMERICA_RIO_BRANCO"] = "America/Rio_Branco";
    CoreTypesTimeZone["AMERICA_SANTA_ISABEL"] = "America/Santa_Isabel";
    CoreTypesTimeZone["AMERICA_SANTAREM"] = "America/Santarem";
    CoreTypesTimeZone["AMERICA_SANTIAGO"] = "America/Santiago";
    CoreTypesTimeZone["AMERICA_SANTO_DOMINGO"] = "America/Santo_Domingo";
    CoreTypesTimeZone["AMERICA_SAO_PAULO"] = "America/Sao_Paulo";
    CoreTypesTimeZone["AMERICA_SCORESBYSUND"] = "America/Scoresbysund";
    CoreTypesTimeZone["AMERICA_SITKA"] = "America/Sitka";
    CoreTypesTimeZone["AMERICA_ST_BARTHELEMY"] = "America/St_Barthelemy";
    CoreTypesTimeZone["AMERICA_ST_JOHNS"] = "America/St_Johns";
    CoreTypesTimeZone["AMERICA_ST_KITTS"] = "America/St_Kitts";
    CoreTypesTimeZone["AMERICA_ST_LUCIA"] = "America/St_Lucia";
    CoreTypesTimeZone["AMERICA_ST_THOMAS"] = "America/St_Thomas";
    CoreTypesTimeZone["AMERICA_ST_VINCENT"] = "America/St_Vincent";
    CoreTypesTimeZone["AMERICA_SWIFT_CURRENT"] = "America/Swift_Current";
    CoreTypesTimeZone["AMERICA_TEGUCIGALPA"] = "America/Tegucigalpa";
    CoreTypesTimeZone["AMERICA_THULE"] = "America/Thule";
    CoreTypesTimeZone["AMERICA_THUNDER_BAY"] = "America/Thunder_Bay";
    CoreTypesTimeZone["AMERICA_TIJUANA"] = "America/Tijuana";
    CoreTypesTimeZone["AMERICA_TORONTO"] = "America/Toronto";
    CoreTypesTimeZone["AMERICA_TORTOLA"] = "America/Tortola";
    CoreTypesTimeZone["AMERICA_VANCOUVER"] = "America/Vancouver";
    CoreTypesTimeZone["AMERICA_WHITEHORSE"] = "America/Whitehorse";
    CoreTypesTimeZone["AMERICA_WINNIPEG"] = "America/Winnipeg";
    CoreTypesTimeZone["AMERICA_YAKUTAT"] = "America/Yakutat";
    CoreTypesTimeZone["AMERICA_YELLOWKNIFE"] = "America/Yellowknife";
    CoreTypesTimeZone["ANTARCTICA_CASEY"] = "Antarctica/Casey";
    CoreTypesTimeZone["ANTARCTICA_DAVIS"] = "Antarctica/Davis";
    CoreTypesTimeZone["ANTARCTICA_DUMONTDURVILLE"] = "Antarctica/DumontDUrville";
    CoreTypesTimeZone["ANTARCTICA_MACQUARIE"] = "Antarctica/Macquarie";
    CoreTypesTimeZone["ANTARCTICA_MAWSON"] = "Antarctica/Mawson";
    CoreTypesTimeZone["ANTARCTICA_MCMURDO"] = "Antarctica/McMurdo";
    CoreTypesTimeZone["ANTARCTICA_PALMER"] = "Antarctica/Palmer";
    CoreTypesTimeZone["ANTARCTICA_ROTHERA"] = "Antarctica/Rothera";
    CoreTypesTimeZone["ANTARCTICA_SYOWA"] = "Antarctica/Syowa";
    CoreTypesTimeZone["ANTARCTICA_TROLL"] = "Antarctica/Troll";
    CoreTypesTimeZone["ANTARCTICA_VOSTOK"] = "Antarctica/Vostok";
    CoreTypesTimeZone["ARCTIC_LONGYEARBYEN"] = "Arctic/Longyearbyen";
    CoreTypesTimeZone["ASIA_ADEN"] = "Asia/Aden";
    CoreTypesTimeZone["ASIA_ALMATY"] = "Asia/Almaty";
    CoreTypesTimeZone["ASIA_AMMAN"] = "Asia/Amman";
    CoreTypesTimeZone["ASIA_ANADYR"] = "Asia/Anadyr";
    CoreTypesTimeZone["ASIA_AQTAU"] = "Asia/Aqtau";
    CoreTypesTimeZone["ASIA_AQTOBE"] = "Asia/Aqtobe";
    CoreTypesTimeZone["ASIA_ASHGABAT"] = "Asia/Ashgabat";
    CoreTypesTimeZone["ASIA_BAGHDAD"] = "Asia/Baghdad";
    CoreTypesTimeZone["ASIA_BAHRAIN"] = "Asia/Bahrain";
    CoreTypesTimeZone["ASIA_BAKU"] = "Asia/Baku";
    CoreTypesTimeZone["ASIA_BANGKOK"] = "Asia/Bangkok";
    CoreTypesTimeZone["ASIA_BEIRUT"] = "Asia/Beirut";
    CoreTypesTimeZone["ASIA_BISHKEK"] = "Asia/Bishkek";
    CoreTypesTimeZone["ASIA_BRUNEI"] = "Asia/Brunei";
    CoreTypesTimeZone["ASIA_CHITA"] = "Asia/Chita";
    CoreTypesTimeZone["ASIA_CHOIBALSAN"] = "Asia/Choibalsan";
    CoreTypesTimeZone["ASIA_COLOMBO"] = "Asia/Colombo";
    CoreTypesTimeZone["ASIA_DAMASCUS"] = "Asia/Damascus";
    CoreTypesTimeZone["ASIA_DHAKA"] = "Asia/Dhaka";
    CoreTypesTimeZone["ASIA_DILI"] = "Asia/Dili";
    CoreTypesTimeZone["ASIA_DUBAI"] = "Asia/Dubai";
    CoreTypesTimeZone["ASIA_DUSHANBE"] = "Asia/Dushanbe";
    CoreTypesTimeZone["ASIA_GAZA"] = "Asia/Gaza";
    CoreTypesTimeZone["ASIA_HEBRON"] = "Asia/Hebron";
    CoreTypesTimeZone["ASIA_HO_CHI_MINH"] = "Asia/Ho_Chi_Minh";
    CoreTypesTimeZone["ASIA_HONG_KONG"] = "Asia/Hong_Kong";
    CoreTypesTimeZone["ASIA_HOVD"] = "Asia/Hovd";
    CoreTypesTimeZone["ASIA_IRKUTSK"] = "Asia/Irkutsk";
    CoreTypesTimeZone["ASIA_JAKARTA"] = "Asia/Jakarta";
    CoreTypesTimeZone["ASIA_JAYAPURA"] = "Asia/Jayapura";
    CoreTypesTimeZone["ASIA_JERUSALEM"] = "Asia/Jerusalem";
    CoreTypesTimeZone["ASIA_KABUL"] = "Asia/Kabul";
    CoreTypesTimeZone["ASIA_KAMCHATKA"] = "Asia/Kamchatka";
    CoreTypesTimeZone["ASIA_KARACHI"] = "Asia/Karachi";
    CoreTypesTimeZone["ASIA_KATHMANDU"] = "Asia/Kathmandu";
    CoreTypesTimeZone["ASIA_KHANDYGA"] = "Asia/Khandyga";
    CoreTypesTimeZone["ASIA_KOLKATA"] = "Asia/Kolkata";
    CoreTypesTimeZone["ASIA_KRASNOYARSK"] = "Asia/Krasnoyarsk";
    CoreTypesTimeZone["ASIA_KUALA_LUMPUR"] = "Asia/Kuala_Lumpur";
    CoreTypesTimeZone["ASIA_KUCHING"] = "Asia/Kuching";
    CoreTypesTimeZone["ASIA_KUWAIT"] = "Asia/Kuwait";
    CoreTypesTimeZone["ASIA_MACAU"] = "Asia/Macau";
    CoreTypesTimeZone["ASIA_MAGADAN"] = "Asia/Magadan";
    CoreTypesTimeZone["ASIA_MAKASSAR"] = "Asia/Makassar";
    CoreTypesTimeZone["ASIA_MANILA"] = "Asia/Manila";
    CoreTypesTimeZone["ASIA_MUSCAT"] = "Asia/Muscat";
    CoreTypesTimeZone["ASIA_NICOSIA"] = "Asia/Nicosia";
    CoreTypesTimeZone["ASIA_NOVOKUZNETSK"] = "Asia/Novokuznetsk";
    CoreTypesTimeZone["ASIA_NOVOSIBIRSK"] = "Asia/Novosibirsk";
    CoreTypesTimeZone["ASIA_OMSK"] = "Asia/Omsk";
    CoreTypesTimeZone["ASIA_ORAL"] = "Asia/Oral";
    CoreTypesTimeZone["ASIA_PHNOM_PENH"] = "Asia/Phnom_Penh";
    CoreTypesTimeZone["ASIA_PONTIANAK"] = "Asia/Pontianak";
    CoreTypesTimeZone["ASIA_PYONGYANG"] = "Asia/Pyongyang";
    CoreTypesTimeZone["ASIA_QATAR"] = "Asia/Qatar";
    CoreTypesTimeZone["ASIA_QYZYLORDA"] = "Asia/Qyzylorda";
    CoreTypesTimeZone["ASIA_RANGOON"] = "Asia/Rangoon";
    CoreTypesTimeZone["ASIA_RIYADH"] = "Asia/Riyadh";
    CoreTypesTimeZone["ASIA_SAKHALIN"] = "Asia/Sakhalin";
    CoreTypesTimeZone["ASIA_SAMARKAND"] = "Asia/Samarkand";
    CoreTypesTimeZone["ASIA_SEOUL"] = "Asia/Seoul";
    CoreTypesTimeZone["ASIA_SHANGHAI"] = "Asia/Shanghai";
    CoreTypesTimeZone["ASIA_SINGAPORE"] = "Asia/Singapore";
    CoreTypesTimeZone["ASIA_SREDNEKOLYMSK"] = "Asia/Srednekolymsk";
    CoreTypesTimeZone["ASIA_TAIPEI"] = "Asia/Taipei";
    CoreTypesTimeZone["ASIA_TASHKENT"] = "Asia/Tashkent";
    CoreTypesTimeZone["ASIA_TBILISI"] = "Asia/Tbilisi";
    CoreTypesTimeZone["ASIA_TEHRAN"] = "Asia/Tehran";
    CoreTypesTimeZone["ASIA_THIMPHU"] = "Asia/Thimphu";
    CoreTypesTimeZone["ASIA_TOKYO"] = "Asia/Tokyo";
    CoreTypesTimeZone["ASIA_ULAANBAATAR"] = "Asia/Ulaanbaatar";
    CoreTypesTimeZone["ASIA_URUMQI"] = "Asia/Urumqi";
    CoreTypesTimeZone["ASIA_UST_NERA"] = "Asia/Ust-Nera";
    CoreTypesTimeZone["ASIA_VIENTIANE"] = "Asia/Vientiane";
    CoreTypesTimeZone["ASIA_VLADIVOSTOK"] = "Asia/Vladivostok";
    CoreTypesTimeZone["ASIA_YAKUTSK"] = "Asia/Yakutsk";
    CoreTypesTimeZone["ASIA_YEKATERINBURG"] = "Asia/Yekaterinburg";
    CoreTypesTimeZone["ASIA_YEREVAN"] = "Asia/Yerevan";
    CoreTypesTimeZone["ATLANTIC_AZORES"] = "Atlantic/Azores";
    CoreTypesTimeZone["ATLANTIC_BERMUDA"] = "Atlantic/Bermuda";
    CoreTypesTimeZone["ATLANTIC_CANARY"] = "Atlantic/Canary";
    CoreTypesTimeZone["ATLANTIC_CAPE_VERDE"] = "Atlantic/Cape_Verde";
    CoreTypesTimeZone["ATLANTIC_FAROE"] = "Atlantic/Faroe";
    CoreTypesTimeZone["ATLANTIC_MADEIRA"] = "Atlantic/Madeira";
    CoreTypesTimeZone["ATLANTIC_REYKJAVIK"] = "Atlantic/Reykjavik";
    CoreTypesTimeZone["ATLANTIC_SOUTH_GEORGIA"] = "Atlantic/South_Georgia";
    CoreTypesTimeZone["ATLANTIC_ST_HELENA"] = "Atlantic/St_Helena";
    CoreTypesTimeZone["ATLANTIC_STANLEY"] = "Atlantic/Stanley";
    CoreTypesTimeZone["AUSTRALIA_ADELAIDE"] = "Australia/Adelaide";
    CoreTypesTimeZone["AUSTRALIA_BRISBANE"] = "Australia/Brisbane";
    CoreTypesTimeZone["AUSTRALIA_BROKEN_HILL"] = "Australia/Broken_Hill";
    CoreTypesTimeZone["AUSTRALIA_CURRIE"] = "Australia/Currie";
    CoreTypesTimeZone["AUSTRALIA_DARWIN"] = "Australia/Darwin";
    CoreTypesTimeZone["AUSTRALIA_EUCLA"] = "Australia/Eucla";
    CoreTypesTimeZone["AUSTRALIA_HOBART"] = "Australia/Hobart";
    CoreTypesTimeZone["AUSTRALIA_LINDEMAN"] = "Australia/Lindeman";
    CoreTypesTimeZone["AUSTRALIA_LORD_HOWE"] = "Australia/Lord_Howe";
    CoreTypesTimeZone["AUSTRALIA_MELBOURNE"] = "Australia/Melbourne";
    CoreTypesTimeZone["AUSTRALIA_PERTH"] = "Australia/Perth";
    CoreTypesTimeZone["AUSTRALIA_SYDNEY"] = "Australia/Sydney";
    CoreTypesTimeZone["EUROPE_AMSTERDAM"] = "Europe/Amsterdam";
    CoreTypesTimeZone["EUROPE_ANDORRA"] = "Europe/Andorra";
    CoreTypesTimeZone["EUROPE_ATHENS"] = "Europe/Athens";
    CoreTypesTimeZone["EUROPE_BELGRADE"] = "Europe/Belgrade";
    CoreTypesTimeZone["EUROPE_BERLIN"] = "Europe/Berlin";
    CoreTypesTimeZone["EUROPE_BRATISLAVA"] = "Europe/Bratislava";
    CoreTypesTimeZone["EUROPE_BRUSSELS"] = "Europe/Brussels";
    CoreTypesTimeZone["EUROPE_BUCHAREST"] = "Europe/Bucharest";
    CoreTypesTimeZone["EUROPE_BUDAPEST"] = "Europe/Budapest";
    CoreTypesTimeZone["EUROPE_BUSINGEN"] = "Europe/Busingen";
    CoreTypesTimeZone["EUROPE_CHISINAU"] = "Europe/Chisinau";
    CoreTypesTimeZone["EUROPE_COPENHAGEN"] = "Europe/Copenhagen";
    CoreTypesTimeZone["EUROPE_DUBLIN"] = "Europe/Dublin";
    CoreTypesTimeZone["EUROPE_GIBRALTAR"] = "Europe/Gibraltar";
    CoreTypesTimeZone["EUROPE_GUERNSEY"] = "Europe/Guernsey";
    CoreTypesTimeZone["EUROPE_HELSINKI"] = "Europe/Helsinki";
    CoreTypesTimeZone["EUROPE_ISLE_OF_MAN"] = "Europe/Isle_of_Man";
    CoreTypesTimeZone["EUROPE_ISTANBUL"] = "Europe/Istanbul";
    CoreTypesTimeZone["EUROPE_JERSEY"] = "Europe/Jersey";
    CoreTypesTimeZone["EUROPE_KALININGRAD"] = "Europe/Kaliningrad";
    CoreTypesTimeZone["EUROPE_KIEV"] = "Europe/Kiev";
    CoreTypesTimeZone["EUROPE_LISBON"] = "Europe/Lisbon";
    CoreTypesTimeZone["EUROPE_LJUBLJANA"] = "Europe/Ljubljana";
    CoreTypesTimeZone["EUROPE_LONDON"] = "Europe/London";
    CoreTypesTimeZone["EUROPE_LUXEMBOURG"] = "Europe/Luxembourg";
    CoreTypesTimeZone["EUROPE_MADRID"] = "Europe/Madrid";
    CoreTypesTimeZone["EUROPE_MALTA"] = "Europe/Malta";
    CoreTypesTimeZone["EUROPE_MARIEHAMN"] = "Europe/Mariehamn";
    CoreTypesTimeZone["EUROPE_MINSK"] = "Europe/Minsk";
    CoreTypesTimeZone["EUROPE_MONACO"] = "Europe/Monaco";
    CoreTypesTimeZone["EUROPE_MOSCOW"] = "Europe/Moscow";
    CoreTypesTimeZone["EUROPE_OSLO"] = "Europe/Oslo";
    CoreTypesTimeZone["EUROPE_PARIS"] = "Europe/Paris";
    CoreTypesTimeZone["EUROPE_PODGORICA"] = "Europe/Podgorica";
    CoreTypesTimeZone["EUROPE_PRAGUE"] = "Europe/Prague";
    CoreTypesTimeZone["EUROPE_RIGA"] = "Europe/Riga";
    CoreTypesTimeZone["EUROPE_ROME"] = "Europe/Rome";
    CoreTypesTimeZone["EUROPE_SAMARA"] = "Europe/Samara";
    CoreTypesTimeZone["EUROPE_SAN_MARINO"] = "Europe/San_Marino";
    CoreTypesTimeZone["EUROPE_SARAJEVO"] = "Europe/Sarajevo";
    CoreTypesTimeZone["EUROPE_SIMFEROPOL"] = "Europe/Simferopol";
    CoreTypesTimeZone["EUROPE_SKOPJE"] = "Europe/Skopje";
    CoreTypesTimeZone["EUROPE_SOFIA"] = "Europe/Sofia";
    CoreTypesTimeZone["EUROPE_STOCKHOLM"] = "Europe/Stockholm";
    CoreTypesTimeZone["EUROPE_TALLINN"] = "Europe/Tallinn";
    CoreTypesTimeZone["EUROPE_TIRANE"] = "Europe/Tirane";
    CoreTypesTimeZone["EUROPE_UZHGOROD"] = "Europe/Uzhgorod";
    CoreTypesTimeZone["EUROPE_VADUZ"] = "Europe/Vaduz";
    CoreTypesTimeZone["EUROPE_VATICAN"] = "Europe/Vatican";
    CoreTypesTimeZone["EUROPE_VIENNA"] = "Europe/Vienna";
    CoreTypesTimeZone["EUROPE_VILNIUS"] = "Europe/Vilnius";
    CoreTypesTimeZone["EUROPE_VOLGOGRAD"] = "Europe/Volgograd";
    CoreTypesTimeZone["EUROPE_WARSAW"] = "Europe/Warsaw";
    CoreTypesTimeZone["EUROPE_ZAGREB"] = "Europe/Zagreb";
    CoreTypesTimeZone["EUROPE_ZAPOROZHYE"] = "Europe/Zaporozhye";
    CoreTypesTimeZone["EUROPE_ZURICH"] = "Europe/Zurich";
    CoreTypesTimeZone["INDIAN_ANTANANARIVO"] = "Indian/Antananarivo";
    CoreTypesTimeZone["INDIAN_CHAGOS"] = "Indian/Chagos";
    CoreTypesTimeZone["INDIAN_CHRISTMAS"] = "Indian/Christmas";
    CoreTypesTimeZone["INDIAN_COCOS"] = "Indian/Cocos";
    CoreTypesTimeZone["INDIAN_COMORO"] = "Indian/Comoro";
    CoreTypesTimeZone["INDIAN_KERGUELEN"] = "Indian/Kerguelen";
    CoreTypesTimeZone["INDIAN_MAHE"] = "Indian/Mahe";
    CoreTypesTimeZone["INDIAN_MALDIVES"] = "Indian/Maldives";
    CoreTypesTimeZone["INDIAN_MAURITIUS"] = "Indian/Mauritius";
    CoreTypesTimeZone["INDIAN_MAYOTTE"] = "Indian/Mayotte";
    CoreTypesTimeZone["INDIAN_REUNION"] = "Indian/Reunion";
    CoreTypesTimeZone["PACIFIC_APIA"] = "Pacific/Apia";
    CoreTypesTimeZone["PACIFIC_AUCKLAND"] = "Pacific/Auckland";
    CoreTypesTimeZone["PACIFIC_BOUGAINVILLE"] = "Pacific/Bougainville";
    CoreTypesTimeZone["PACIFIC_CHATHAM"] = "Pacific/Chatham";
    CoreTypesTimeZone["PACIFIC_CHUUK"] = "Pacific/Chuuk";
    CoreTypesTimeZone["PACIFIC_EASTER"] = "Pacific/Easter";
    CoreTypesTimeZone["PACIFIC_EFATE"] = "Pacific/Efate";
    CoreTypesTimeZone["PACIFIC_ENDERBURY"] = "Pacific/Enderbury";
    CoreTypesTimeZone["PACIFIC_FAKAOFO"] = "Pacific/Fakaofo";
    CoreTypesTimeZone["PACIFIC_FIJI"] = "Pacific/Fiji";
    CoreTypesTimeZone["PACIFIC_FUNAFUTI"] = "Pacific/Funafuti";
    CoreTypesTimeZone["PACIFIC_GALAPAGOS"] = "Pacific/Galapagos";
    CoreTypesTimeZone["PACIFIC_GAMBIER"] = "Pacific/Gambier";
    CoreTypesTimeZone["PACIFIC_GUADALCANAL"] = "Pacific/Guadalcanal";
    CoreTypesTimeZone["PACIFIC_GUAM"] = "Pacific/Guam";
    CoreTypesTimeZone["PACIFIC_HONOLULU"] = "Pacific/Honolulu";
    CoreTypesTimeZone["PACIFIC_JOHNSTON"] = "Pacific/Johnston";
    CoreTypesTimeZone["PACIFIC_KIRITIMATI"] = "Pacific/Kiritimati";
    CoreTypesTimeZone["PACIFIC_KOSRAE"] = "Pacific/Kosrae";
    CoreTypesTimeZone["PACIFIC_KWAJALEIN"] = "Pacific/Kwajalein";
    CoreTypesTimeZone["PACIFIC_MAJURO"] = "Pacific/Majuro";
    CoreTypesTimeZone["PACIFIC_MARQUESAS"] = "Pacific/Marquesas";
    CoreTypesTimeZone["PACIFIC_MIDWAY"] = "Pacific/Midway";
    CoreTypesTimeZone["PACIFIC_NAURU"] = "Pacific/Nauru";
    CoreTypesTimeZone["PACIFIC_NIUE"] = "Pacific/Niue";
    CoreTypesTimeZone["PACIFIC_NORFOLK"] = "Pacific/Norfolk";
    CoreTypesTimeZone["PACIFIC_NOUMEA"] = "Pacific/Noumea";
    CoreTypesTimeZone["PACIFIC_PAGO_PAGO"] = "Pacific/Pago_Pago";
    CoreTypesTimeZone["PACIFIC_PALAU"] = "Pacific/Palau";
    CoreTypesTimeZone["PACIFIC_PITCAIRN"] = "Pacific/Pitcairn";
    CoreTypesTimeZone["PACIFIC_POHNPEI"] = "Pacific/Pohnpei";
    CoreTypesTimeZone["PACIFIC_PORT_MORESBY"] = "Pacific/Port_Moresby";
    CoreTypesTimeZone["PACIFIC_RAROTONGA"] = "Pacific/Rarotonga";
    CoreTypesTimeZone["PACIFIC_SAIPAN"] = "Pacific/Saipan";
    CoreTypesTimeZone["PACIFIC_TAHITI"] = "Pacific/Tahiti";
    CoreTypesTimeZone["PACIFIC_TARAWA"] = "Pacific/Tarawa";
    CoreTypesTimeZone["PACIFIC_TONGATAPU"] = "Pacific/Tongatapu";
    CoreTypesTimeZone["PACIFIC_WAKE"] = "Pacific/Wake";
    CoreTypesTimeZone["PACIFIC_WALLIS"] = "Pacific/Wallis";
})(CoreTypesTimeZone = exports.CoreTypesTimeZone || (exports.CoreTypesTimeZone = {}));
/*
 * All genders a person can choose
 */
var NichandleGender;
(function (NichandleGender) {
    NichandleGender["FEMALE"] = "female";
    NichandleGender["MALE"] = "male";
})(NichandleGender = exports.NichandleGender || (exports.NichandleGender = {}));
/*
 *
 */
var OrderCurrencyCode;
(function (OrderCurrencyCode) {
    OrderCurrencyCode["AUD"] = "AUD";
    OrderCurrencyCode["CAD"] = "CAD";
    OrderCurrencyCode["CZK"] = "CZK";
    OrderCurrencyCode["EUR"] = "EUR";
    OrderCurrencyCode["GBP"] = "GBP";
    OrderCurrencyCode["LTL"] = "LTL";
    OrderCurrencyCode["MAD"] = "MAD";
    OrderCurrencyCode["N_A"] = "N/A";
    OrderCurrencyCode["PLN"] = "PLN";
    OrderCurrencyCode["SGD"] = "SGD";
    OrderCurrencyCode["TND"] = "TND";
    OrderCurrencyCode["USD"] = "USD";
    OrderCurrencyCode["XOF"] = "XOF";
    OrderCurrencyCode["POINTS"] = "points";
})(OrderCurrencyCode = exports.OrderCurrencyCode || (exports.OrderCurrencyCode = {}));
/*
 * Detailed renewal type of a service
 */
var ServiceRenewalType;
(function (ServiceRenewalType) {
    ServiceRenewalType["AUTOMATICFORCEDPRODUCT"] = "automaticForcedProduct";
    ServiceRenewalType["AUTOMATICV2012"] = "automaticV2012";
    ServiceRenewalType["AUTOMATICV2014"] = "automaticV2014";
    ServiceRenewalType["AUTOMATICV2016"] = "automaticV2016";
    ServiceRenewalType["MANUAL"] = "manual";
    ServiceRenewalType["ONESHOT"] = "oneShot";
    ServiceRenewalType["OPTION"] = "option";
})(ServiceRenewalType = exports.ServiceRenewalType || (exports.ServiceRenewalType = {}));
/*
 *
 */
var ServiceState;
(function (ServiceState) {
    ServiceState["EXPIRED"] = "expired";
    ServiceState["INCREATION"] = "inCreation";
    ServiceState["OK"] = "ok";
    ServiceState["PENDINGDEBT"] = "pendingDebt";
    ServiceState["UNPAID"] = "unPaid";
})(ServiceState = exports.ServiceState || (exports.ServiceState = {}));
/*
 * Action for list antihack
 */
var TelephonyAntihackAction;
(function (TelephonyAntihackAction) {
    TelephonyAntihackAction["AUTHORIZE_ALL"] = "AUTHORIZE_ALL";
    TelephonyAntihackAction["AUTHORIZE_ONE_NUMBER"] = "AUTHORIZE_ONE_NUMBER";
    TelephonyAntihackAction["BLOCK_ALL"] = "BLOCK_ALL";
    TelephonyAntihackAction["BLOCK_ONE_NUMBER"] = "BLOCK_ONE_NUMBER";
})(TelephonyAntihackAction = exports.TelephonyAntihackAction || (exports.TelephonyAntihackAction = {}));
/*
 * Document suffix
 */
var TelephonyBillDocument;
(function (TelephonyBillDocument) {
    TelephonyBillDocument["CSV"] = "csv";
    TelephonyBillDocument["PDF"] = "pdf";
    TelephonyBillDocument["RECEIVED_CSV"] = "received.csv";
    TelephonyBillDocument["XML"] = "xml";
})(TelephonyBillDocument = exports.TelephonyBillDocument || (exports.TelephonyBillDocument = {}));
/*
 * Status of billing account
 */
var TelephonyBillingAccountStatus;
(function (TelephonyBillingAccountStatus) {
    TelephonyBillingAccountStatus["CLOSED"] = "closed";
    TelephonyBillingAccountStatus["DELETED"] = "deleted";
    TelephonyBillingAccountStatus["ENABLED"] = "enabled";
    TelephonyBillingAccountStatus["EXPIRED"] = "expired";
})(TelephonyBillingAccountStatus = exports.TelephonyBillingAccountStatus || (exports.TelephonyBillingAccountStatus = {}));
/*
 * Billing progress status
 */
var TelephonyBillStatus;
(function (TelephonyBillStatus) {
    TelephonyBillStatus["DOING"] = "doing";
    TelephonyBillStatus["DONE"] = "done";
    TelephonyBillStatus["ERROR"] = "error";
    TelephonyBillStatus["TODO"] = "todo";
})(TelephonyBillStatus = exports.TelephonyBillStatus || (exports.TelephonyBillStatus = {}));
/*
 * Enumeration providing payload type to Name of RTP audio video profile
 */
var TelephonyCallDiagnosticCodec;
(function (TelephonyCallDiagnosticCodec) {
    TelephonyCallDiagnosticCodec["G722"] = "G722";
    TelephonyCallDiagnosticCodec["G729"] = "G729";
    TelephonyCallDiagnosticCodec["PCMA"] = "PCMA";
    TelephonyCallDiagnosticCodec["PCMU"] = "PCMU";
})(TelephonyCallDiagnosticCodec = exports.TelephonyCallDiagnosticCodec || (exports.TelephonyCallDiagnosticCodec = {}));
/*
 * Information extraction status
 */
var TelephonyCallDiagnosticStatus;
(function (TelephonyCallDiagnosticStatus) {
    TelephonyCallDiagnosticStatus["DOING"] = "doing";
    TelephonyCallDiagnosticStatus["DONE"] = "done";
    TelephonyCallDiagnosticStatus["ERROR"] = "error";
    TelephonyCallDiagnosticStatus["TODO"] = "todo";
})(TelephonyCallDiagnosticStatus = exports.TelephonyCallDiagnosticStatus || (exports.TelephonyCallDiagnosticStatus = {}));
/*
 * Types of dialplan available for callsGenerator.
 */
var TelephonyCallsGeneratorDialplan;
(function (TelephonyCallsGeneratorDialplan) {
    TelephonyCallsGeneratorDialplan["PLAYAUDIOFILE"] = "PlayAudioFile";
    TelephonyCallsGeneratorDialplan["PLAYAUDIOFILEANDTRANSFERCALL"] = "PlayAudioFileAndTransferCall";
    TelephonyCallsGeneratorDialplan["READTEXT"] = "ReadText";
    TelephonyCallsGeneratorDialplan["REQUESTAPPOINTMENTCONFIRMATION"] = "RequestAppointmentConfirmation";
    TelephonyCallsGeneratorDialplan["REQUESTAPPOINTMENTCONFIRMATIONWITHTRANSFER"] = "RequestAppointmentConfirmationWithTransfer";
})(TelephonyCallsGeneratorDialplan = exports.TelephonyCallsGeneratorDialplan || (exports.TelephonyCallsGeneratorDialplan = {}));
/*
 * Types of hangupCause for generated calls.
 */
var TelephonyCallsGeneratorHangupCause;
(function (TelephonyCallsGeneratorHangupCause) {
    TelephonyCallsGeneratorHangupCause["ACCESSINFORMATIONDISCARDED"] = "AccessInformationDiscarded";
    TelephonyCallsGeneratorHangupCause["ALLOTTEDTIMEOUT"] = "AllottedTimeout";
    TelephonyCallsGeneratorHangupCause["ATTENDEDTRANSFER"] = "AttendedTransfer";
    TelephonyCallsGeneratorHangupCause["BLINDTRANSFER"] = "BlindTransfer";
    TelephonyCallsGeneratorHangupCause["CALLAWARDEDBEING"] = "CallAwardedbeing";
    TelephonyCallsGeneratorHangupCause["CHANNELTYPENOTIMPLEMENTED"] = "ChannelTypeNotImplemented";
    TelephonyCallsGeneratorHangupCause["CHANNELUNACCEPTABLE"] = "ChannelUnacceptable";
    TelephonyCallsGeneratorHangupCause["CODESIP403BEARERCAPABILITYNOTAUTHORIZED"] = "CodeSip403BearerCapabilityNotAuthorized";
    TelephonyCallsGeneratorHangupCause["CODESIP403INCOMINGCALLSBARRED"] = "CodeSip403IncomingCallsBarred";
    TelephonyCallsGeneratorHangupCause["CODESIP403OUTGOINGCALLSBARRED"] = "CodeSip403OutgoingCallsBarred";
    TelephonyCallsGeneratorHangupCause["CODESIP404NOROUTETODESTINATION"] = "CodeSip404NoRouteToDestination";
    TelephonyCallsGeneratorHangupCause["CODESIP404NOROUTETOSPECIFIEDTRANSITNETWORK"] = "CodeSip404NoRouteToSpecifiedTransitNetwork";
    TelephonyCallsGeneratorHangupCause["CODESIP404UNALLOCATEDNUMBER"] = "CodeSip404UnallocatedNumber";
    TelephonyCallsGeneratorHangupCause["CODESIP408NOUSERRESPONDING"] = "CodeSip408NoUserResponding";
    TelephonyCallsGeneratorHangupCause["CODESIP410NUMBERCHANGED"] = "CodeSip410NumberChanged";
    TelephonyCallsGeneratorHangupCause["CODESIP410REDIRECTIONTONEWDESTINATION"] = "CodeSip410RedirectionToNewDestination";
    TelephonyCallsGeneratorHangupCause["CODESIP480NOANSWERFROMUSER"] = "CodeSip480NoAnswerFromUser";
    TelephonyCallsGeneratorHangupCause["CODESIP480NORMALUNSPECIFIED"] = "CodeSip480NormalUnspecified";
    TelephonyCallsGeneratorHangupCause["CODESIP480SUBSCRIBERABSENT"] = "CodeSip480SubscriberAbsent";
    TelephonyCallsGeneratorHangupCause["CODESIP483EXCHANGEROUTINGERROR"] = "CodeSip483ExchangeRoutingError";
    TelephonyCallsGeneratorHangupCause["CODESIP484INVALIDNUMBERFORMATADDRESSINCOMPLETE"] = "CodeSip484InvalidNumberFormatAddressIncomplete";
    TelephonyCallsGeneratorHangupCause["CODESIP486USERBUSY"] = "CodeSip486UserBusy";
    TelephonyCallsGeneratorHangupCause["CODESIP487ORIGINATORCANCEL"] = "CodeSip487OriginatorCancel";
    TelephonyCallsGeneratorHangupCause["CODESIP488INCOMPATIBLEDESTINATION"] = "CodeSip488IncompatibleDestination";
    TelephonyCallsGeneratorHangupCause["CODESIP488BEARERCAPABILITYNOTIMPLEMENTED"] = "CodeSip488bearerCapabilityNotImplemented";
    TelephonyCallsGeneratorHangupCause["CODESIP501FACILITIESREJECTED"] = "CodeSip501FacilitiesRejected";
    TelephonyCallsGeneratorHangupCause["CODESIP501REQUESTEDFACILITYNOTIMPLEMENTED"] = "CodeSip501RequestedFacilityNotImplemented";
    TelephonyCallsGeneratorHangupCause["CODESIP501SERVICEOROPTIONNOTIMPLEMENTEDUNSPECIFIED"] = "CodeSip501ServiceOrOptionNotImplementedUnspecified";
    TelephonyCallsGeneratorHangupCause["CODESIP502DESTINATIONOUTOFORDER"] = "CodeSip502DestinationOutOfOrder";
    TelephonyCallsGeneratorHangupCause["CODESIP503BEARERCAPABILITYNOTPRESENTLYAVAILABLE"] = "CodeSip503BearerCapabilityNotPresentlyAvailable";
    TelephonyCallsGeneratorHangupCause["CODESIP503NETWORKOUTOFORDER"] = "CodeSip503NetworkOutOfOrder";
    TelephonyCallsGeneratorHangupCause["CODESIP503NOCIRCUITCHANNELAVAILABLE"] = "CodeSip503NoCircuitChannelAvailable";
    TelephonyCallsGeneratorHangupCause["CODESIP503REQUESTEDCIRCUITORCHANNELNOTAVAILABLE"] = "CodeSip503RequestedCircuitOrChannelNotAvailable";
    TelephonyCallsGeneratorHangupCause["CODESIP503SWITCHINGEQUIPMENTCONGESTION"] = "CodeSip503SwitchingEquipmentCongestion";
    TelephonyCallsGeneratorHangupCause["CODESIP503TEMPORARYFAILURE"] = "CodeSip503TemporaryFailure";
    TelephonyCallsGeneratorHangupCause["CODESIP504RECOVERYONTIMEREXPIRY"] = "CodeSip504RecoveryOnTimerExpiry";
    TelephonyCallsGeneratorHangupCause["CODESIP603CALLREJECTED"] = "CodeSip603CallRejected";
    TelephonyCallsGeneratorHangupCause["CRASH"] = "Crash";
    TelephonyCallsGeneratorHangupCause["GATEWAYDOWN"] = "GatewayDown";
    TelephonyCallsGeneratorHangupCause["INFORMATIONELEMENTORPARAMETERNONEXISTENTORNOTIMPLEMENTED"] = "InformationElementOrParameterNonExistentOrNotImplemented";
    TelephonyCallsGeneratorHangupCause["INTERWORKINGUNSPECIFIED"] = "InterworkingUnspecified";
    TelephonyCallsGeneratorHangupCause["INVALIDCALLREFERENCEVALUE"] = "InvalidCallReferenceValue";
    TelephonyCallsGeneratorHangupCause["INVALIDINFORMATIONELEMENTCONTENTS"] = "InvalidInformationElementContents";
    TelephonyCallsGeneratorHangupCause["INVALIDMESSAGEUNSPECIFIED"] = "InvalidMessageUnspecified";
    TelephonyCallsGeneratorHangupCause["LOSERACE"] = "LoseRace";
    TelephonyCallsGeneratorHangupCause["MANAGERREQUEST"] = "ManagerRequest";
    TelephonyCallsGeneratorHangupCause["MANDATORYINFORMATIONELEMENTISMISSING"] = "MandatoryInformationElementIsMissing";
    TelephonyCallsGeneratorHangupCause["MEDIATIMEOUT"] = "MediaTimeout";
    TelephonyCallsGeneratorHangupCause["MESSAGENOTCOMPATIBLEWITHCALLSTATE"] = "MessageNotCompatibleWithCallState";
    TelephonyCallsGeneratorHangupCause["MESSAGENOTCOMPATIBLEWITHCALLSTATEORMESSAGETYPENONEXISTENTORNOTIMPLEMENTED"] = "MessageNotCompatibleWithCallStateOrMessageTypeNonExistentOrNotImplemented";
    TelephonyCallsGeneratorHangupCause["MESSAGETYPENONEXISTENTORNOTIMPLEMENTED"] = "MessageTypeNonExistentOrNotImplemented";
    TelephonyCallsGeneratorHangupCause["NORMALCALLCLEARING"] = "NormalCallClearing";
    TelephonyCallsGeneratorHangupCause["PARAMETERNONEXISTENTORNOTIMPLEMENTEDPASSEDONNATIONALUSE"] = "ParameterNonExistentOrNotImplementedPassedOnNationalUse";
    TelephonyCallsGeneratorHangupCause["PICKEDOFF"] = "PickedOff";
    TelephonyCallsGeneratorHangupCause["PREEMPTED"] = "PreEmpted";
    TelephonyCallsGeneratorHangupCause["PROGRESSTIMEOUT"] = "ProgressTimeout";
    TelephonyCallsGeneratorHangupCause["PROTOCOLERRORUNSPECIFIED"] = "ProtocolErrorUnspecified";
    TelephonyCallsGeneratorHangupCause["REQUESTEDFACILITYNOTSUBSCRIBED"] = "RequestedFacilityNotSubscribed";
    TelephonyCallsGeneratorHangupCause["RESPONSETOSTATUSINQUIRY"] = "ResponseToStatusInquiry";
    TelephonyCallsGeneratorHangupCause["SERVICEOROPTIONNOTAVAILABLEUNSPECIFIED"] = "ServiceOrOptionNotAvailableUnspecified";
    TelephonyCallsGeneratorHangupCause["SYSTEMSHUTDOWN"] = "SystemShutdown";
    TelephonyCallsGeneratorHangupCause["UNKNOWNORCALLUNFINISHED"] = "UnknownOrCallUnfinished";
    TelephonyCallsGeneratorHangupCause["UNSPECIFIEDNOOTHERCAUSECODESAPPLICABLE"] = "UnspecifiedNoOtherCauseCodesApplicable";
    TelephonyCallsGeneratorHangupCause["USERCHALLENGE"] = "UserChallenge";
    TelephonyCallsGeneratorHangupCause["USERNOTREGISTERED"] = "UserNotRegistered";
})(TelephonyCallsGeneratorHangupCause = exports.TelephonyCallsGeneratorHangupCause || (exports.TelephonyCallsGeneratorHangupCause = {}));
/*
 * Carrier SIP Zone Regions
 */
var TelephonyCarrierSipClusterZoneRegion;
(function (TelephonyCarrierSipClusterZoneRegion) {
    TelephonyCarrierSipClusterZoneRegion["RBX"] = "rbx";
    TelephonyCarrierSipClusterZoneRegion["SBG"] = "sbg";
})(TelephonyCarrierSipClusterZoneRegion = exports.TelephonyCarrierSipClusterZoneRegion || (exports.TelephonyCarrierSipClusterZoneRegion = {}));
/*
 * Protocol of a carrier sip trunk customer endpoint
 */
var TelephonyCarrierSipEndpointProtocol;
(function (TelephonyCarrierSipEndpointProtocol) {
    TelephonyCarrierSipEndpointProtocol["TCP"] = "tcp";
    TelephonyCarrierSipEndpointProtocol["TLS"] = "tls";
    TelephonyCarrierSipEndpointProtocol["UDP"] = "udp";
})(TelephonyCarrierSipEndpointProtocol = exports.TelephonyCarrierSipEndpointProtocol || (exports.TelephonyCarrierSipEndpointProtocol = {}));
/*
 * Available language for your conference
 */
var TelephonyConferenceLanguage;
(function (TelephonyConferenceLanguage) {
    TelephonyConferenceLanguage["DE"] = "de";
    TelephonyConferenceLanguage["EN"] = "en";
    TelephonyConferenceLanguage["ES"] = "es";
    TelephonyConferenceLanguage["FR"] = "fr";
    TelephonyConferenceLanguage["IT"] = "it";
})(TelephonyConferenceLanguage = exports.TelephonyConferenceLanguage || (exports.TelephonyConferenceLanguage = {}));
/*
 * Conference report receiver
 */
var TelephonyConferenceReportStatus;
(function (TelephonyConferenceReportStatus) {
    TelephonyConferenceReportStatus["CUSTOMER"] = "customer";
    TelephonyConferenceReportStatus["NONE"] = "none";
    TelephonyConferenceReportStatus["OTHER"] = "other";
})(TelephonyConferenceReportStatus = exports.TelephonyConferenceReportStatus || (exports.TelephonyConferenceReportStatus = {}));
/*
 * Webaccess type for your conference
 */
var TelephonyConferenceWebAccessType;
(function (TelephonyConferenceWebAccessType) {
    TelephonyConferenceWebAccessType["READ"] = "read";
    TelephonyConferenceWebAccessType["WRITE"] = "write";
})(TelephonyConferenceWebAccessType = exports.TelephonyConferenceWebAccessType || (exports.TelephonyConferenceWebAccessType = {}));
/*
 * Export file format
 */
var TelephonyContactsExportFormats;
(function (TelephonyContactsExportFormats) {
    TelephonyContactsExportFormats["CSV"] = "csv";
})(TelephonyContactsExportFormats = exports.TelephonyContactsExportFormats || (exports.TelephonyContactsExportFormats = {}));
/*
 * Source of the diagnostic report
 */
var TelephonyDiagnosticReportCategory;
(function (TelephonyDiagnosticReportCategory) {
    TelephonyDiagnosticReportCategory["DPI"] = "dpi";
    TelephonyDiagnosticReportCategory["SIGNAL"] = "signal";
})(TelephonyDiagnosticReportCategory = exports.TelephonyDiagnosticReportCategory || (exports.TelephonyDiagnosticReportCategory = {}));
/*
 * Level of the diagnostic report
 */
var TelephonyDiagnosticReportLevel;
(function (TelephonyDiagnosticReportLevel) {
    TelephonyDiagnosticReportLevel["DEBUG"] = "debug";
    TelephonyDiagnosticReportLevel["ERROR"] = "error";
    TelephonyDiagnosticReportLevel["INFO"] = "info";
    TelephonyDiagnosticReportLevel["WARN"] = "warn";
})(TelephonyDiagnosticReportLevel = exports.TelephonyDiagnosticReportLevel || (exports.TelephonyDiagnosticReportLevel = {}));
/*
 * Screenlist condition type
 */
var TelephonyEasyHuntingScreenListsConditionsStatus;
(function (TelephonyEasyHuntingScreenListsConditionsStatus) {
    TelephonyEasyHuntingScreenListsConditionsStatus["DISABLED"] = "disabled";
    TelephonyEasyHuntingScreenListsConditionsStatus["INCOMINGBLACKLIST"] = "incomingBlackList";
    TelephonyEasyHuntingScreenListsConditionsStatus["INCOMINGWHITELIST"] = "incomingWhiteList";
})(TelephonyEasyHuntingScreenListsConditionsStatus = exports.TelephonyEasyHuntingScreenListsConditionsStatus || (exports.TelephonyEasyHuntingScreenListsConditionsStatus = {}));
/*
 * Calls dispatching pattern
 */
var TelephonyEasyMiniPabxHuntingPattern;
(function (TelephonyEasyMiniPabxHuntingPattern) {
    TelephonyEasyMiniPabxHuntingPattern["ALL_AT_ONCE"] = "all-at-once";
    TelephonyEasyMiniPabxHuntingPattern["CUMULATED"] = "cumulated";
    TelephonyEasyMiniPabxHuntingPattern["SEQUENTIAL"] = "sequential";
})(TelephonyEasyMiniPabxHuntingPattern = exports.TelephonyEasyMiniPabxHuntingPattern || (exports.TelephonyEasyMiniPabxHuntingPattern = {}));
/*
 * Calls dispatching startegy
 */
var TelephonyEasyMiniPabxHuntingStrategy;
(function (TelephonyEasyMiniPabxHuntingStrategy) {
    TelephonyEasyMiniPabxHuntingStrategy["CYCLIC"] = "cyclic";
    TelephonyEasyMiniPabxHuntingStrategy["LEASTIDLESINCELASTCALL"] = "leastIdleSinceLastCall";
    TelephonyEasyMiniPabxHuntingStrategy["LINEAR"] = "linear";
    TelephonyEasyMiniPabxHuntingStrategy["MOSTIDLESINCELASTCALL"] = "mostIdleSinceLastCall";
    TelephonyEasyMiniPabxHuntingStrategy["MOSTIDLESINCELOGGING"] = "mostIdleSinceLogging";
    TelephonyEasyMiniPabxHuntingStrategy["PARALLEL"] = "parallel";
    TelephonyEasyMiniPabxHuntingStrategy["RANDOM"] = "random";
})(TelephonyEasyMiniPabxHuntingStrategy = exports.TelephonyEasyMiniPabxHuntingStrategy || (exports.TelephonyEasyMiniPabxHuntingStrategy = {}));
/*
 * Available recipients method for fax campaign
 */
var TelephonyFaxCampaignRecipientsType;
(function (TelephonyFaxCampaignRecipientsType) {
    TelephonyFaxCampaignRecipientsType["DOCUMENT"] = "document";
    TelephonyFaxCampaignRecipientsType["LIST"] = "list";
})(TelephonyFaxCampaignRecipientsType = exports.TelephonyFaxCampaignRecipientsType || (exports.TelephonyFaxCampaignRecipientsType = {}));
/*
 * Available sending method for fax campaign
 */
var TelephonyFaxCampaignSendType;
(function (TelephonyFaxCampaignSendType) {
    TelephonyFaxCampaignSendType["AUTOMATIC"] = "automatic";
    TelephonyFaxCampaignSendType["MANUAL"] = "manual";
    TelephonyFaxCampaignSendType["SCHEDULED"] = "scheduled";
})(TelephonyFaxCampaignSendType = exports.TelephonyFaxCampaignSendType || (exports.TelephonyFaxCampaignSendType = {}));
/*
 * Consumption way type
 */
var TelephonyFaxConsumptionWayType;
(function (TelephonyFaxConsumptionWayType) {
    TelephonyFaxConsumptionWayType["RECEIVED"] = "received";
    TelephonyFaxConsumptionWayType["SENT"] = "sent";
})(TelephonyFaxConsumptionWayType = exports.TelephonyFaxConsumptionWayType || (exports.TelephonyFaxConsumptionWayType = {}));
/*
 * Format of the notification mail. "html" will include a preview image of the fax
 */
var TelephonyFaxMailFormat;
(function (TelephonyFaxMailFormat) {
    TelephonyFaxMailFormat["HTML"] = "html";
    TelephonyFaxMailFormat["TEXT"] = "text";
})(TelephonyFaxMailFormat = exports.TelephonyFaxMailFormat || (exports.TelephonyFaxMailFormat = {}));
/*
 * Available quality for fax documents
 */
var TelephonyFaxQuality;
(function (TelephonyFaxQuality) {
    TelephonyFaxQuality["BEST"] = "best";
    TelephonyFaxQuality["HIGH"] = "high";
    TelephonyFaxQuality["NORMAL"] = "normal";
})(TelephonyFaxQuality = exports.TelephonyFaxQuality || (exports.TelephonyFaxQuality = {}));
/*
 * Type of screen list
 */
var TelephonyFaxScreenListType;
(function (TelephonyFaxScreenListType) {
    TelephonyFaxScreenListType["BLACKLIST"] = "blacklist";
    TelephonyFaxScreenListType["NO"] = "no";
    TelephonyFaxScreenListType["WHITELIST"] = "whitelist";
})(TelephonyFaxScreenListType = exports.TelephonyFaxScreenListType || (exports.TelephonyFaxScreenListType = {}));
/*
 * The blocking mode of line calls
 */
var TelephonyLineBlockingMode;
(function (TelephonyLineBlockingMode) {
    TelephonyLineBlockingMode["BOTH"] = "both";
    TelephonyLineBlockingMode["INCOMING"] = "incoming";
    TelephonyLineBlockingMode["OUTGOING"] = "outgoing";
})(TelephonyLineBlockingMode = exports.TelephonyLineBlockingMode || (exports.TelephonyLineBlockingMode = {}));
/*
 * Types of statistics available for a line.
 */
var TelephonyLineNotificationsLogsFrequency;
(function (TelephonyLineNotificationsLogsFrequency) {
    TelephonyLineNotificationsLogsFrequency["NEVER"] = "Never";
    TelephonyLineNotificationsLogsFrequency["ONCE_A_DAY"] = "Once a day";
    TelephonyLineNotificationsLogsFrequency["TWICE_A_DAY"] = "Twice a day";
})(TelephonyLineNotificationsLogsFrequency = exports.TelephonyLineNotificationsLogsFrequency || (exports.TelephonyLineNotificationsLogsFrequency = {}));
/*
 * The nature of the call forward
 */
var TelephonyLineOptionForwardNatureType;
(function (TelephonyLineOptionForwardNatureType) {
    TelephonyLineOptionForwardNatureType["FAX"] = "fax";
    TelephonyLineOptionForwardNatureType["NUMBER"] = "number";
    TelephonyLineOptionForwardNatureType["VOICEMAIL"] = "voicemail";
})(TelephonyLineOptionForwardNatureType = exports.TelephonyLineOptionForwardNatureType || (exports.TelephonyLineOptionForwardNatureType = {}));
/*
 * Intercom configuration
 */
var TelephonyLineOptionIntercom;
(function (TelephonyLineOptionIntercom) {
    TelephonyLineOptionIntercom["NO"] = "no";
    TelephonyLineOptionIntercom["PREFIXED"] = "prefixed";
    TelephonyLineOptionIntercom["YES"] = "yes";
})(TelephonyLineOptionIntercom = exports.TelephonyLineOptionIntercom || (exports.TelephonyLineOptionIntercom = {}));
/*
 * The language of the line
 */
var TelephonyLineOptionLanguage;
(function (TelephonyLineOptionLanguage) {
    TelephonyLineOptionLanguage["DUTCH"] = "Dutch";
    TelephonyLineOptionLanguage["ENGLISH_UK"] = "English (UK)";
    TelephonyLineOptionLanguage["FRENCH"] = "French";
    TelephonyLineOptionLanguage["FRENCH_BE"] = "French (BE)";
    TelephonyLineOptionLanguage["GERMAN"] = "German";
    TelephonyLineOptionLanguage["ITALIAN"] = "Italian";
    TelephonyLineOptionLanguage["SPANISH"] = "Spanish";
})(TelephonyLineOptionLanguage = exports.TelephonyLineOptionLanguage || (exports.TelephonyLineOptionLanguage = {}));
/*
 * Types of statistics available for a line.
 */
var TelephonyLineStatisticsType;
(function (TelephonyLineStatisticsType) {
    TelephonyLineStatisticsType["MAXDELAY"] = "maxDelay";
    TelephonyLineStatisticsType["MAXJITTER"] = "maxJitter";
    TelephonyLineStatisticsType["RTPMOS"] = "rtpMos";
    TelephonyLineStatisticsType["SUMRTPLOST"] = "sumRtpLost";
})(TelephonyLineStatisticsType = exports.TelephonyLineStatisticsType || (exports.TelephonyLineStatisticsType = {}));
/*
 * Number country
 */
var TelephonyNumberCountry;
(function (TelephonyNumberCountry) {
    TelephonyNumberCountry["BE"] = "be";
    TelephonyNumberCountry["CH"] = "ch";
    TelephonyNumberCountry["DE"] = "de";
    TelephonyNumberCountry["ES"] = "es";
    TelephonyNumberCountry["FR"] = "fr";
    TelephonyNumberCountry["GB"] = "gb";
    TelephonyNumberCountry["IT"] = "it";
    TelephonyNumberCountry["UK"] = "uk";
})(TelephonyNumberCountry = exports.TelephonyNumberCountry || (exports.TelephonyNumberCountry = {}));
/*
 * The possible criteria matching a searched value for a zone
 */
var TelephonyNumberDetailedZoneMatchingCriteria;
(function (TelephonyNumberDetailedZoneMatchingCriteria) {
    TelephonyNumberDetailedZoneMatchingCriteria["CITY"] = "city";
    TelephonyNumberDetailedZoneMatchingCriteria["INTERNATIONALNUMBER"] = "internationalNumber";
    TelephonyNumberDetailedZoneMatchingCriteria["NUMBER"] = "number";
    TelephonyNumberDetailedZoneMatchingCriteria["ZNE"] = "zne";
})(TelephonyNumberDetailedZoneMatchingCriteria = exports.TelephonyNumberDetailedZoneMatchingCriteria || (exports.TelephonyNumberDetailedZoneMatchingCriteria = {}));
/*
 * A zone type
 */
var TelephonyNumberDetailedZoneType;
(function (TelephonyNumberDetailedZoneType) {
    TelephonyNumberDetailedZoneType["GEOGRAPHIC"] = "geographic";
    TelephonyNumberDetailedZoneType["NON_GEOGRAPHIC"] = "non-geographic";
    TelephonyNumberDetailedZoneType["SPECIAL"] = "special";
})(TelephonyNumberDetailedZoneType = exports.TelephonyNumberDetailedZoneType || (exports.TelephonyNumberDetailedZoneType = {}));
/*
 * Typology of number
 */
var TelephonyNumberType;
(function (TelephonyNumberType) {
    TelephonyNumberType["GEOGRAPHIC"] = "geographic";
    TelephonyNumberType["NOGEOGRAPHIC"] = "nogeographic";
    TelephonyNumberType["SPECIAL"] = "special";
})(TelephonyNumberType = exports.TelephonyNumberType || (exports.TelephonyNumberType = {}));
/*
 * Offer task actions
 */
var TelephonyOfferTaskAction;
(function (TelephonyOfferTaskAction) {
    TelephonyOfferTaskAction["CONVERTTOALIAS"] = "convertToAlias";
    TelephonyOfferTaskAction["CONVERTTOSIP"] = "convertToSip";
    TelephonyOfferTaskAction["MIGRATETONEWVOICEMAIL"] = "migrateToNewVoicemail";
    TelephonyOfferTaskAction["REMOVESIMLTANEOUSLINES"] = "removeSimltaneousLines";
    TelephonyOfferTaskAction["SWITCHSERVER"] = "switchServer";
    TelephonyOfferTaskAction["TERMINATION"] = "termination";
    TelephonyOfferTaskAction["UPDATEFIRMWARE"] = "updateFirmware";
    TelephonyOfferTaskAction["UPGRADE"] = "upgrade";
})(TelephonyOfferTaskAction = exports.TelephonyOfferTaskAction || (exports.TelephonyOfferTaskAction = {}));
/*
 * Offer task types
 */
var TelephonyOfferTaskType;
(function (TelephonyOfferTaskType) {
    TelephonyOfferTaskType["LINE"] = "line";
    TelephonyOfferTaskType["OFFER"] = "offer";
    TelephonyOfferTaskType["OPTION"] = "option";
    TelephonyOfferTaskType["PHONE"] = "phone";
})(TelephonyOfferTaskType = exports.TelephonyOfferTaskType || (exports.TelephonyOfferTaskType = {}));
/*
 * Type of line blocking on outplan notification
 */
var TelephonyOutplanNotificationBlock;
(function (TelephonyOutplanNotificationBlock) {
    TelephonyOutplanNotificationBlock["BLOCKALLCALLS"] = "blockAllCalls";
    TelephonyOutplanNotificationBlock["BLOCKINCOMINGCALLS"] = "blockIncomingCalls";
    TelephonyOutplanNotificationBlock["BLOCKOUTGOINGCALLS"] = "blockOutgoingCalls";
    TelephonyOutplanNotificationBlock["NONE"] = "none";
})(TelephonyOutplanNotificationBlock = exports.TelephonyOutplanNotificationBlock || (exports.TelephonyOutplanNotificationBlock = {}));
/*
 * Screenlist condition type
 */
var TelephonyOvhPabxDialplanExtensionConditionScreenListType;
(function (TelephonyOvhPabxDialplanExtensionConditionScreenListType) {
    TelephonyOvhPabxDialplanExtensionConditionScreenListType["DESTINATIONBLACKLIST"] = "destinationBlackList";
    TelephonyOvhPabxDialplanExtensionConditionScreenListType["DESTINATIONWHITELIST"] = "destinationWhiteList";
    TelephonyOvhPabxDialplanExtensionConditionScreenListType["INCOMINGBLACKLIST"] = "incomingBlackList";
    TelephonyOvhPabxDialplanExtensionConditionScreenListType["INCOMINGWHITELIST"] = "incomingWhiteList";
})(TelephonyOvhPabxDialplanExtensionConditionScreenListType = exports.TelephonyOvhPabxDialplanExtensionConditionScreenListType || (exports.TelephonyOvhPabxDialplanExtensionConditionScreenListType = {}));
/*
 * Day of the week
 */
var TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay;
(function (TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay) {
    TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay["FRIDAY"] = "friday";
    TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay["MONDAY"] = "monday";
    TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay["SATURDAY"] = "saturday";
    TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay["SUNDAY"] = "sunday";
    TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay["THURSDAY"] = "thursday";
    TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay["TUESDAY"] = "tuesday";
    TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay["WEDNESDAY"] = "wednesday";
})(TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay = exports.TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay || (exports.TelephonyOvhPabxDialplanExtensionConditionTimeWeekDay = {}));
/*
 * Dialplan rule action
 */
var TelephonyOvhPabxDialplanExtensionRuleAction;
(function (TelephonyOvhPabxDialplanExtensionRuleAction) {
    TelephonyOvhPabxDialplanExtensionRuleAction["BRIDGE"] = "bridge";
    TelephonyOvhPabxDialplanExtensionRuleAction["ENDLESS_PLAYBACK"] = "endless_playback";
    TelephonyOvhPabxDialplanExtensionRuleAction["HANGUP"] = "hangup";
    TelephonyOvhPabxDialplanExtensionRuleAction["HUNTING"] = "hunting";
    TelephonyOvhPabxDialplanExtensionRuleAction["IVR"] = "ivr";
    TelephonyOvhPabxDialplanExtensionRuleAction["PLAYBACK"] = "playback";
    TelephonyOvhPabxDialplanExtensionRuleAction["READDTMF"] = "readDtmf";
    TelephonyOvhPabxDialplanExtensionRuleAction["SETCALLERNAME"] = "setCallerName";
    TelephonyOvhPabxDialplanExtensionRuleAction["SLEEP"] = "sleep";
    TelephonyOvhPabxDialplanExtensionRuleAction["TTS"] = "tts";
    TelephonyOvhPabxDialplanExtensionRuleAction["VOICEMAIL"] = "voicemail";
})(TelephonyOvhPabxDialplanExtensionRuleAction = exports.TelephonyOvhPabxDialplanExtensionRuleAction || (exports.TelephonyOvhPabxDialplanExtensionRuleAction = {}));
/*
 * Displayed number
 */
var TelephonyOvhPabxDialplanNumberPresentation;
(function (TelephonyOvhPabxDialplanNumberPresentation) {
    TelephonyOvhPabxDialplanNumberPresentation["ALIAS"] = "alias";
    TelephonyOvhPabxDialplanNumberPresentation["BOTH"] = "both";
    TelephonyOvhPabxDialplanNumberPresentation["CALLER"] = "caller";
})(TelephonyOvhPabxDialplanNumberPresentation = exports.TelephonyOvhPabxDialplanNumberPresentation || (exports.TelephonyOvhPabxDialplanNumberPresentation = {}));
/*
 * Status of the agent
 */
var TelephonyOvhPabxHuntingAgentStatus;
(function (TelephonyOvhPabxHuntingAgentStatus) {
    TelephonyOvhPabxHuntingAgentStatus["AVAILABLE"] = "available";
    TelephonyOvhPabxHuntingAgentStatus["LOGGEDOUT"] = "loggedOut";
    TelephonyOvhPabxHuntingAgentStatus["ONBREAK"] = "onBreak";
})(TelephonyOvhPabxHuntingAgentStatus = exports.TelephonyOvhPabxHuntingAgentStatus || (exports.TelephonyOvhPabxHuntingAgentStatus = {}));
/*
 * Type of the agent
 */
var TelephonyOvhPabxHuntingAgentType;
(function (TelephonyOvhPabxHuntingAgentType) {
    TelephonyOvhPabxHuntingAgentType["EXTERNAL"] = "external";
    TelephonyOvhPabxHuntingAgentType["INTERNAL"] = "internal";
})(TelephonyOvhPabxHuntingAgentType = exports.TelephonyOvhPabxHuntingAgentType || (exports.TelephonyOvhPabxHuntingAgentType = {}));
/*
 * Status of the agent
 */
var TelephonyOvhPabxHuntingLiveAgentStatus;
(function (TelephonyOvhPabxHuntingLiveAgentStatus) {
    TelephonyOvhPabxHuntingLiveAgentStatus["INAQUEUECALL"] = "inAQueueCall";
    TelephonyOvhPabxHuntingLiveAgentStatus["LOGGEDOUT"] = "loggedOut";
    TelephonyOvhPabxHuntingLiveAgentStatus["ONBREAK"] = "onBreak";
    TelephonyOvhPabxHuntingLiveAgentStatus["RECEIVING"] = "receiving";
    TelephonyOvhPabxHuntingLiveAgentStatus["WAITING"] = "waiting";
})(TelephonyOvhPabxHuntingLiveAgentStatus = exports.TelephonyOvhPabxHuntingLiveAgentStatus || (exports.TelephonyOvhPabxHuntingLiveAgentStatus = {}));
/*
 * State of the call
 */
var TelephonyOvhPabxHuntingLiveCallsState;
(function (TelephonyOvhPabxHuntingLiveCallsState) {
    TelephonyOvhPabxHuntingLiveCallsState["ANSWERED"] = "Answered";
    TelephonyOvhPabxHuntingLiveCallsState["WAITING"] = "Waiting";
})(TelephonyOvhPabxHuntingLiveCallsState = exports.TelephonyOvhPabxHuntingLiveCallsState || (exports.TelephonyOvhPabxHuntingLiveCallsState = {}));
/*
 * Possible languages of the sound played to inform caller that he can disable call record
 */
var TelephonyOvhPabxHuntingQueueRecordDisablingLanguage;
(function (TelephonyOvhPabxHuntingQueueRecordDisablingLanguage) {
    TelephonyOvhPabxHuntingQueueRecordDisablingLanguage["ENGLISH"] = "english";
    TelephonyOvhPabxHuntingQueueRecordDisablingLanguage["FRENCH"] = "french";
})(TelephonyOvhPabxHuntingQueueRecordDisablingLanguage = exports.TelephonyOvhPabxHuntingQueueRecordDisablingLanguage || (exports.TelephonyOvhPabxHuntingQueueRecordDisablingLanguage = {}));
/*
 * Calls dispatching startegy
 */
var TelephonyOvhPabxHuntingQueueStrategy;
(function (TelephonyOvhPabxHuntingQueueStrategy) {
    TelephonyOvhPabxHuntingQueueStrategy["CUMULATIONBYAGENTORDER"] = "cumulationByAgentOrder";
    TelephonyOvhPabxHuntingQueueStrategy["LONGESTHANGUPAGENT"] = "longestHangupAgent";
    TelephonyOvhPabxHuntingQueueStrategy["LONGESTIDLEAGENT"] = "longestIdleAgent";
    TelephonyOvhPabxHuntingQueueStrategy["RANDOM"] = "random";
    TelephonyOvhPabxHuntingQueueStrategy["RINGALL"] = "ringAll";
    TelephonyOvhPabxHuntingQueueStrategy["ROUNDROBIN"] = "roundRobin";
    TelephonyOvhPabxHuntingQueueStrategy["SEQUENTIALLYBYAGENTORDER"] = "sequentiallyByAgentOrder";
})(TelephonyOvhPabxHuntingQueueStrategy = exports.TelephonyOvhPabxHuntingQueueStrategy || (exports.TelephonyOvhPabxHuntingQueueStrategy = {}));
/*
 * IVR menu action
 */
var TelephonyOvhPabxIvrMenuEntryAction;
(function (TelephonyOvhPabxIvrMenuEntryAction) {
    TelephonyOvhPabxIvrMenuEntryAction["BRIDGE"] = "bridge";
    TelephonyOvhPabxIvrMenuEntryAction["CALLCENTER"] = "callcenter";
    TelephonyOvhPabxIvrMenuEntryAction["MENUBACK"] = "menuBack";
    TelephonyOvhPabxIvrMenuEntryAction["MENUEXIT"] = "menuExit";
    TelephonyOvhPabxIvrMenuEntryAction["MENUSUB"] = "menuSub";
    TelephonyOvhPabxIvrMenuEntryAction["MENUTOP"] = "menuTop";
    TelephonyOvhPabxIvrMenuEntryAction["PLAYBACK"] = "playback";
    TelephonyOvhPabxIvrMenuEntryAction["READDTMF"] = "readDtmf";
    TelephonyOvhPabxIvrMenuEntryAction["SETCALLERNAME"] = "setCallerName";
})(TelephonyOvhPabxIvrMenuEntryAction = exports.TelephonyOvhPabxIvrMenuEntryAction || (exports.TelephonyOvhPabxIvrMenuEntryAction = {}));
/*
 * Available actions for overflow and on closure
 */
var TelephonyOvhPabxQueueAction;
(function (TelephonyOvhPabxQueueAction) {
    TelephonyOvhPabxQueueAction["PLAYBACK"] = "playback";
    TelephonyOvhPabxQueueAction["VOICEMAIL"] = "voicemail";
})(TelephonyOvhPabxQueueAction = exports.TelephonyOvhPabxQueueAction || (exports.TelephonyOvhPabxQueueAction = {}));
/*
 * Voice to use for your text to speech
 */
var TelephonyOvhPabxTtsVoice;
(function (TelephonyOvhPabxTtsVoice) {
    TelephonyOvhPabxTtsVoice["BRUCE"] = "Bruce";
    TelephonyOvhPabxTtsVoice["HELENE"] = "Helene";
    TelephonyOvhPabxTtsVoice["JENNY"] = "Jenny";
    TelephonyOvhPabxTtsVoice["LOIC"] = "Loic";
})(TelephonyOvhPabxTtsVoice = exports.TelephonyOvhPabxTtsVoice || (exports.TelephonyOvhPabxTtsVoice = {}));
/*
 * Whispering mode
 */
var TelephonyOvhPabxWhisperingMode;
(function (TelephonyOvhPabxWhisperingMode) {
    TelephonyOvhPabxWhisperingMode["WHISPER_TO_AGENT_ONLY"] = "Whisper to agent only";
    TelephonyOvhPabxWhisperingMode["WHISPER_TO_ALL_PARTICIPANTS"] = "Whisper to all participants";
})(TelephonyOvhPabxWhisperingMode = exports.TelephonyOvhPabxWhisperingMode || (exports.TelephonyOvhPabxWhisperingMode = {}));
/*
 * File providing task status
 */
var TelephonyPcsFileStatus;
(function (TelephonyPcsFileStatus) {
    TelephonyPcsFileStatus["DOING"] = "doing";
    TelephonyPcsFileStatus["DONE"] = "done";
    TelephonyPcsFileStatus["ERROR"] = "error";
    TelephonyPcsFileStatus["TODO"] = "todo";
})(TelephonyPcsFileStatus = exports.TelephonyPcsFileStatus || (exports.TelephonyPcsFileStatus = {}));
/*
 * Phone Configuration level enum
 */
var TelephonyPhoneConfigurationLevel;
(function (TelephonyPhoneConfigurationLevel) {
    TelephonyPhoneConfigurationLevel["ADMIN"] = "admin";
    TelephonyPhoneConfigurationLevel["EXPERT"] = "expert";
})(TelephonyPhoneConfigurationLevel = exports.TelephonyPhoneConfigurationLevel || (exports.TelephonyPhoneConfigurationLevel = {}));
/*
 * Phone configuration type enum
 */
var TelephonyPhoneConfigurationType;
(function (TelephonyPhoneConfigurationType) {
    TelephonyPhoneConfigurationType["BOOLEAN"] = "boolean";
    TelephonyPhoneConfigurationType["ENUM"] = "enum";
    TelephonyPhoneConfigurationType["HIDDEN"] = "hidden";
    TelephonyPhoneConfigurationType["IPV4"] = "ipv4";
    TelephonyPhoneConfigurationType["NUMERIC"] = "numeric";
    TelephonyPhoneConfigurationType["STRING"] = "string";
})(TelephonyPhoneConfigurationType = exports.TelephonyPhoneConfigurationType || (exports.TelephonyPhoneConfigurationType = {}));
/*
 * Special number category
 */
var TelephonyportabilitySpecialNumberCategory;
(function (TelephonyportabilitySpecialNumberCategory) {
    TelephonyportabilitySpecialNumberCategory["ACCESS"] = "access";
    TelephonyportabilitySpecialNumberCategory["ADULTS"] = "adults";
    TelephonyportabilitySpecialNumberCategory["ANNOUNCED"] = "announced";
    TelephonyportabilitySpecialNumberCategory["BE_ADULTS"] = "be_adults";
    TelephonyportabilitySpecialNumberCategory["BE_CONTENT"] = "be_content";
    TelephonyportabilitySpecialNumberCategory["BE_GAMES"] = "be_games";
    TelephonyportabilitySpecialNumberCategory["BE_GENERAL"] = "be_general";
    TelephonyportabilitySpecialNumberCategory["BE_RELAXING"] = "be_relaxing";
    TelephonyportabilitySpecialNumberCategory["CONFERENCING"] = "conferencing";
    TelephonyportabilitySpecialNumberCategory["CONTENTSAUTO"] = "contentsAuto";
    TelephonyportabilitySpecialNumberCategory["CONTENTSMANUAL"] = "contentsManual";
    TelephonyportabilitySpecialNumberCategory["DIRECTORY"] = "directory";
    TelephonyportabilitySpecialNumberCategory["GAMES"] = "games";
    TelephonyportabilitySpecialNumberCategory["LINKING"] = "linking";
    TelephonyportabilitySpecialNumberCategory["M2M"] = "m2m";
    TelephonyportabilitySpecialNumberCategory["RELATIONSHIP"] = "relationship";
})(TelephonyportabilitySpecialNumberCategory = exports.TelephonyportabilitySpecialNumberCategory || (exports.TelephonyportabilitySpecialNumberCategory = {}));
/*
 * Country that defines the portability kind
 */
var TelephonyPortabilityCountry;
(function (TelephonyPortabilityCountry) {
    TelephonyPortabilityCountry["BELGIUM"] = "belgium";
    TelephonyPortabilityCountry["FRANCE"] = "france";
    TelephonyPortabilityCountry["SWITZERLAND"] = "switzerland";
})(TelephonyPortabilityCountry = exports.TelephonyPortabilityCountry || (exports.TelephonyPortabilityCountry = {}));
/*
 * List of possible duration unit. "NA" means that there is no defined duration
 */
var TelephonyPortabilityStepDurationUnit;
(function (TelephonyPortabilityStepDurationUnit) {
    TelephonyPortabilityStepDurationUnit["NA"] = "NA";
    TelephonyPortabilityStepDurationUnit["DAY"] = "day";
    TelephonyPortabilityStepDurationUnit["HOUR"] = "hour";
    TelephonyPortabilityStepDurationUnit["OPENDAY"] = "openday";
})(TelephonyPortabilityStepDurationUnit = exports.TelephonyPortabilityStepDurationUnit || (exports.TelephonyPortabilityStepDurationUnit = {}));
/*
 * List of possible step name
 */
var TelephonyPortabilityStepName;
(function (TelephonyPortabilityStepName) {
    TelephonyPortabilityStepName["ACKNOWLEDGMENTRECEIVEDFROMOPERATOR"] = "acknowledgmentReceivedFromOperator";
    TelephonyPortabilityStepName["BELGIUMPORTABILITYREQUESTCREATED"] = "belgiumPortabilityRequestCreated";
    TelephonyPortabilityStepName["BELGIUMPORTABILITYREQUESTEXECUTIONACKED"] = "belgiumPortabilityRequestExecutionAcked";
    TelephonyPortabilityStepName["BELGIUMPORTABILITYREQUESTEXECUTIONASKED"] = "belgiumPortabilityRequestExecutionAsked";
    TelephonyPortabilityStepName["BELGIUMPORTABILITYREQUESTEXECUTIONCOMPLETED"] = "belgiumPortabilityRequestExecutionCompleted";
    TelephonyPortabilityStepName["BELGIUMPORTABILITYREQUESTVALIDATED"] = "belgiumPortabilityRequestValidated";
    TelephonyPortabilityStepName["BELGIUMPORTABILITYREQUESTWAITINGUNTILEXEC"] = "belgiumPortabilityRequestWaitingUntilExec";
    TelephonyPortabilityStepName["CUSTOMERFORMRECEIVED"] = "customerFormReceived";
    TelephonyPortabilityStepName["CUSTOMERFORMSENT"] = "customerFormSent";
    TelephonyPortabilityStepName["CUSTOMERFORMVALIDATED"] = "customerFormValidated";
    TelephonyPortabilityStepName["FINALREPORTRECEIVEDFROMOPERATOR"] = "finalReportReceivedFromOperator";
    TelephonyPortabilityStepName["INTERMEDIATEREPORTRECEIVEDFROMOPERATOR"] = "intermediateReportReceivedFromOperator";
    TelephonyPortabilityStepName["NUMBERACTIVATION"] = "numberActivation";
    TelephonyPortabilityStepName["REQUESTSENTTOOPERATOR"] = "requestSentToOperator";
    TelephonyPortabilityStepName["SDASEQUENCERECEIVEDFROMOPERATOR"] = "sDASequenceReceivedFromOperator";
})(TelephonyPortabilityStepName = exports.TelephonyPortabilityStepName || (exports.TelephonyPortabilityStepName = {}));
/*
 * List of possible status of a step
 */
var TelephonyPortabilityStepStatus;
(function (TelephonyPortabilityStepStatus) {
    TelephonyPortabilityStepStatus["CANCELLED"] = "cancelled";
    TelephonyPortabilityStepStatus["DOING"] = "doing";
    TelephonyPortabilityStepStatus["DONE"] = "done";
    TelephonyPortabilityStepStatus["ERROR"] = "error";
    TelephonyPortabilityStepStatus["HOLD"] = "hold";
    TelephonyPortabilityStepStatus["TODO"] = "todo";
})(TelephonyPortabilityStepStatus = exports.TelephonyPortabilityStepStatus || (exports.TelephonyPortabilityStepStatus = {}));
/*
 * All existing properties of line or alias offer
 */
var TelephonyProperty;
(function (TelephonyProperty) {
    TelephonyProperty["XDSL"] = "xdsl";
})(TelephonyProperty = exports.TelephonyProperty || (exports.TelephonyProperty = {}));
/*
 * Phone protocol
 */
var TelephonyProtocol;
(function (TelephonyProtocol) {
    TelephonyProtocol["MGCP"] = "mgcp";
    TelephonyProtocol["SIP"] = "sip";
})(TelephonyProtocol = exports.TelephonyProtocol || (exports.TelephonyProtocol = {}));
/*
 * The call direction for a given event
 */
var TelephonyRealtimeEventDirection;
(function (TelephonyRealtimeEventDirection) {
    TelephonyRealtimeEventDirection["INCOMING"] = "incoming";
    TelephonyRealtimeEventDirection["OUTGOING"] = "outgoing";
})(TelephonyRealtimeEventDirection = exports.TelephonyRealtimeEventDirection || (exports.TelephonyRealtimeEventDirection = {}));
/*
 * The event protocol
 */
var TelephonyRealtimeEventProtocol;
(function (TelephonyRealtimeEventProtocol) {
    TelephonyRealtimeEventProtocol["MGCP"] = "mgcp";
    TelephonyRealtimeEventProtocol["SIP"] = "sip";
})(TelephonyRealtimeEventProtocol = exports.TelephonyRealtimeEventProtocol || (exports.TelephonyRealtimeEventProtocol = {}));
/*
 * The event type
 */
var TelephonyRealtimeEventType;
(function (TelephonyRealtimeEventType) {
    TelephonyRealtimeEventType["END_CALLING"] = "end_calling";
    TelephonyRealtimeEventType["END_HOLD"] = "end_hold";
    TelephonyRealtimeEventType["END_RINGING"] = "end_ringing";
    TelephonyRealtimeEventType["START_CALLING"] = "start_calling";
    TelephonyRealtimeEventType["START_HOLD"] = "start_hold";
    TelephonyRealtimeEventType["START_RINGING"] = "start_ringing";
})(TelephonyRealtimeEventType = exports.TelephonyRealtimeEventType || (exports.TelephonyRealtimeEventType = {}));
/*
 * Release location type : forward if the calling hangup, backward if the caller hangup, else local
 */
var TelephonyReleaseLocation;
(function (TelephonyReleaseLocation) {
    TelephonyReleaseLocation["BACKWARD"] = "backward";
    TelephonyReleaseLocation["FORWARD"] = "forward";
    TelephonyReleaseLocation["LOCAL"] = "local";
})(TelephonyReleaseLocation = exports.TelephonyReleaseLocation || (exports.TelephonyReleaseLocation = {}));
/*
 * How the phone had been reset
 */
var TelephonyResetPhoneMethod;
(function (TelephonyResetPhoneMethod) {
    TelephonyResetPhoneMethod["CODE"] = "code";
    TelephonyResetPhoneMethod["HTTP"] = "http";
})(TelephonyResetPhoneMethod = exports.TelephonyResetPhoneMethod || (exports.TelephonyResetPhoneMethod = {}));
/*
 * Return merchandise authorisation offer type
 */
var TelephonyRmaOfferType;
(function (TelephonyRmaOfferType) {
    TelephonyRmaOfferType["DEPOSIT"] = "deposit";
    TelephonyRmaOfferType["LOAN"] = "loan";
    TelephonyRmaOfferType["PURCHASE"] = "purchase";
})(TelephonyRmaOfferType = exports.TelephonyRmaOfferType || (exports.TelephonyRmaOfferType = {}));
/*
 * Return merchandise authorisation type
 */
var TelephonyRmaPublicType;
(function (TelephonyRmaPublicType) {
    TelephonyRmaPublicType["CHANGE_TO_ANOTHER_PHONE_EQUIPMENT_RESTITUTION_FIRST_AND_SHIPPING_THEN"] = "change to another phone/equipment (restitution first and shipping then)";
    TelephonyRmaPublicType["RESTITUTION_BUT_KEEP_THE_SERVICE_ENABLE"] = "restitution but keep the service enable";
})(TelephonyRmaPublicType = exports.TelephonyRmaPublicType || (exports.TelephonyRmaPublicType = {}));
/*
 * Return merchandise authorisation type
 */
var TelephonyRmaReplaceType;
(function (TelephonyRmaReplaceType) {
    TelephonyRmaReplaceType["CHANGEPHONE"] = "changePhone";
    TelephonyRmaReplaceType["PHONERESTITUTION"] = "phoneRestitution";
    TelephonyRmaReplaceType["UNDEFINED"] = "undefined";
})(TelephonyRmaReplaceType = exports.TelephonyRmaReplaceType || (exports.TelephonyRmaReplaceType = {}));
/*
 * Return merchandise authorisation step
 */
var TelephonyRmaStatus;
(function (TelephonyRmaStatus) {
    TelephonyRmaStatus["CLOSED"] = "closed";
    TelephonyRmaStatus["OPEN"] = "open";
    TelephonyRmaStatus["RECEIVED"] = "received";
})(TelephonyRmaStatus = exports.TelephonyRmaStatus || (exports.TelephonyRmaStatus = {}));
/*
 * RMA step names
 */
var TelephonyRmaStepName;
(function (TelephonyRmaStepName) {
    TelephonyRmaStepName["DISPATCHJUSTIFICATION"] = "dispatchJustification";
    TelephonyRmaStepName["EQUIPMENTSENDING"] = "equipmentSending";
    TelephonyRmaStepName["EQUIPMENTTESTING"] = "equipmentTesting";
    TelephonyRmaStepName["OPENING"] = "opening";
    TelephonyRmaStepName["PARCELRECEPTION"] = "parcelReception";
    TelephonyRmaStepName["PARCELVALIDATION"] = "parcelValidation";
    TelephonyRmaStepName["VALIDATION"] = "validation";
})(TelephonyRmaStepName = exports.TelephonyRmaStepName || (exports.TelephonyRmaStepName = {}));
/*
 * Status of the RMA step
 */
var TelephonyRmaStepStatus;
(function (TelephonyRmaStepStatus) {
    TelephonyRmaStepStatus["DONE"] = "done";
    TelephonyRmaStepStatus["TODO"] = "todo";
})(TelephonyRmaStepStatus = exports.TelephonyRmaStepStatus || (exports.TelephonyRmaStepStatus = {}));
/*
 * Return merchandise authorisation type
 */
var TelephonyRmaType;
(function (TelephonyRmaType) {
    TelephonyRmaType["AFTER_SALE_EQUIPMENT_SERVICE_EXCHANGE"] = "after sale equipment service exchange";
    TelephonyRmaType["AFTER_SALE_PHONE_SERVICE_EXCHANGE"] = "after sale phone service exchange";
    TelephonyRmaType["EQUIPMENT_RESTITUTION"] = "equipment restitution";
    TelephonyRmaType["FAST_EXCHANGE"] = "fast exchange";
    TelephonyRmaType["OLD_MERCHANDISE_RECEPTION_BEFORE_EXCHANGE"] = "old merchandise reception before exchange";
    TelephonyRmaType["PHONE_RESTITUTION"] = "phone restitution";
    TelephonyRmaType["RESENDS_DUE_TO_SHIPPING_LOST_BY_THE_CARRIER"] = "resends due to shipping lost by the carrier";
    TelephonyRmaType["RESENDS_DUE_TO_SHIPPING_NOT_WITHDRAW"] = "resends due to shipping not withdraw";
    TelephonyRmaType["SPECIFIC_RETURN_MERCHANDISE_AUTHORISATION"] = "specific return merchandise authorisation";
    TelephonyRmaType["TERMINATION"] = "termination";
    TelephonyRmaType["UNKNOWN"] = "unknown";
})(TelephonyRmaType = exports.TelephonyRmaType || (exports.TelephonyRmaType = {}));
/*
 * Scheculer category
 */
var TelephonySchedulerCategory;
(function (TelephonySchedulerCategory) {
    TelephonySchedulerCategory["HOLIDAYS"] = "holidays";
    TelephonySchedulerCategory["SCHEDULER1"] = "scheduler1";
    TelephonySchedulerCategory["SCHEDULER2"] = "scheduler2";
    TelephonySchedulerCategory["SCHEDULER3"] = "scheduler3";
})(TelephonySchedulerCategory = exports.TelephonySchedulerCategory || (exports.TelephonySchedulerCategory = {}));
/*
 * Type of screen list
 */
var TelephonyScreenListChoosing;
(function (TelephonyScreenListChoosing) {
    TelephonyScreenListChoosing["BLACKLIST"] = "blacklist";
    TelephonyScreenListChoosing["DISABLED"] = "disabled";
    TelephonyScreenListChoosing["WHITELIST"] = "whitelist";
})(TelephonyScreenListChoosing = exports.TelephonyScreenListChoosing || (exports.TelephonyScreenListChoosing = {}));
/*
 * Nature of screen list
 */
var TelephonyScreenListNature;
(function (TelephonyScreenListNature) {
    TelephonyScreenListNature["FAX"] = "fax";
    TelephonyScreenListNature["INTERNATIONAL"] = "international";
    TelephonyScreenListNature["SERVICES"] = "services";
    TelephonyScreenListNature["SPECIAL"] = "special";
    TelephonyScreenListNature["VOICEMAIL"] = "voicemail";
})(TelephonyScreenListNature = exports.TelephonyScreenListNature || (exports.TelephonyScreenListNature = {}));
/*
 * Type of screen list
 */
var TelephonyScreenListType;
(function (TelephonyScreenListType) {
    TelephonyScreenListType["INCOMINGBLACKLIST"] = "incomingBlackList";
    TelephonyScreenListType["INCOMINGWHITELIST"] = "incomingWhiteList";
    TelephonyScreenListType["OUTGOINGBLACKLIST"] = "outgoingBlackList";
    TelephonyScreenListType["OUTGOINGWHITELIST"] = "outgoingWhiteList";
})(TelephonyScreenListType = exports.TelephonyScreenListType || (exports.TelephonyScreenListType = {}));
/*
 * Voicemail audio format
 */
var TelephonyServiceVoicemailAudioFormat;
(function (TelephonyServiceVoicemailAudioFormat) {
    TelephonyServiceVoicemailAudioFormat["AIFF"] = "aiff";
    TelephonyServiceVoicemailAudioFormat["AU"] = "au";
    TelephonyServiceVoicemailAudioFormat["FLAC"] = "flac";
    TelephonyServiceVoicemailAudioFormat["MP3"] = "mp3";
    TelephonyServiceVoicemailAudioFormat["OGG"] = "ogg";
    TelephonyServiceVoicemailAudioFormat["WAV"] = "wav";
})(TelephonyServiceVoicemailAudioFormat = exports.TelephonyServiceVoicemailAudioFormat || (exports.TelephonyServiceVoicemailAudioFormat = {}));
/*
 * Voicemail configuration
 */
var TelephonyServiceVoicemailMailOption;
(function (TelephonyServiceVoicemailMailOption) {
    TelephonyServiceVoicemailMailOption["ATTACHMENT"] = "attachment";
    TelephonyServiceVoicemailMailOption["SIMPLE"] = "simple";
})(TelephonyServiceVoicemailMailOption = exports.TelephonyServiceVoicemailMailOption || (exports.TelephonyServiceVoicemailMailOption = {}));
/*
 * Product type
 */
var TelephonySipDomainProductType;
(function (TelephonySipDomainProductType) {
    TelephonySipDomainProductType["SIP"] = "sip";
    TelephonySipDomainProductType["TRUNK"] = "trunk";
})(TelephonySipDomainProductType = exports.TelephonySipDomainProductType || (exports.TelephonySipDomainProductType = {}));
/*
 * Available timeframes for statistics
 */
var TelephonyStatisticsTimeframe;
(function (TelephonyStatisticsTimeframe) {
    TelephonyStatisticsTimeframe["DAILY"] = "daily";
    TelephonyStatisticsTimeframe["HOURLY"] = "hourly";
    TelephonyStatisticsTimeframe["MONTHLY"] = "monthly";
    TelephonyStatisticsTimeframe["WEEKLY"] = "weekly";
    TelephonyStatisticsTimeframe["YEARLY"] = "yearly";
})(TelephonyStatisticsTimeframe = exports.TelephonyStatisticsTimeframe || (exports.TelephonyStatisticsTimeframe = {}));
/*
 * Task status
 */
var TelephonyTaskStatus;
(function (TelephonyTaskStatus) {
    TelephonyTaskStatus["DOING"] = "doing";
    TelephonyTaskStatus["DONE"] = "done";
    TelephonyTaskStatus["ERROR"] = "error";
    TelephonyTaskStatus["PAUSE"] = "pause";
    TelephonyTaskStatus["TODO"] = "todo";
})(TelephonyTaskStatus = exports.TelephonyTaskStatus || (exports.TelephonyTaskStatus = {}));
/*
 * List of possible type of a telephony service
 */
var TelephonyTelephonySearchServiceType;
(function (TelephonyTelephonySearchServiceType) {
    TelephonyTelephonySearchServiceType["ALIAS"] = "alias";
    TelephonyTelephonySearchServiceType["LINE"] = "line";
})(TelephonyTelephonySearchServiceType = exports.TelephonyTelephonySearchServiceType || (exports.TelephonyTelephonySearchServiceType = {}));
/*
 * Termination reason
 */
var TelephonyTerminationReason;
(function (TelephonyTerminationReason) {
    TelephonyTerminationReason["ADDRESSEMOVE"] = "addresseMove";
    TelephonyTerminationReason["BILLINGDIFFICULTIES"] = "billingDifficulties";
    TelephonyTerminationReason["CESSATIONOFACTIVITY"] = "cessationOfActivity";
    TelephonyTerminationReason["MISSINGOPTIONS"] = "missingOptions";
    TelephonyTerminationReason["MOVETOCOMPETITOR"] = "moveToCompetitor";
    TelephonyTerminationReason["OTHER"] = "other";
    TelephonyTerminationReason["PLUGANDPHONEDIFFICULTIES"] = "plugAndPhoneDifficulties";
    TelephonyTerminationReason["TECHNICALDIFFICULTIES"] = "technicalDifficulties";
})(TelephonyTerminationReason = exports.TelephonyTerminationReason || (exports.TelephonyTerminationReason = {}));
/*
 * Day of the time condition
 */
var TelephonyTimeConditionsDay;
(function (TelephonyTimeConditionsDay) {
    TelephonyTimeConditionsDay["FRIDAY"] = "friday";
    TelephonyTimeConditionsDay["HOLIDAY"] = "holiday";
    TelephonyTimeConditionsDay["MONDAY"] = "monday";
    TelephonyTimeConditionsDay["SATURDAY"] = "saturday";
    TelephonyTimeConditionsDay["SUNDAY"] = "sunday";
    TelephonyTimeConditionsDay["THURSDAY"] = "thursday";
    TelephonyTimeConditionsDay["TUESDAY"] = "tuesday";
    TelephonyTimeConditionsDay["WEDNESDAY"] = "wednesday";
})(TelephonyTimeConditionsDay = exports.TelephonyTimeConditionsDay || (exports.TelephonyTimeConditionsDay = {}));
/*
 * Time conditions global status
 */
var TelephonyTimeConditionsGlobalStatus;
(function (TelephonyTimeConditionsGlobalStatus) {
    TelephonyTimeConditionsGlobalStatus["DELETED"] = "deleted";
    TelephonyTimeConditionsGlobalStatus["DISABLED"] = "disabled";
    TelephonyTimeConditionsGlobalStatus["ENABLED"] = "enabled";
})(TelephonyTimeConditionsGlobalStatus = exports.TelephonyTimeConditionsGlobalStatus || (exports.TelephonyTimeConditionsGlobalStatus = {}));
/*
 * Policy of the time condition
 */
var TelephonyTimeConditionsPolicy;
(function (TelephonyTimeConditionsPolicy) {
    TelephonyTimeConditionsPolicy["AVAILABLE"] = "available";
    TelephonyTimeConditionsPolicy["SLOT1"] = "slot1";
    TelephonyTimeConditionsPolicy["SLOT2"] = "slot2";
    TelephonyTimeConditionsPolicy["SLOT3"] = "slot3";
})(TelephonyTimeConditionsPolicy = exports.TelephonyTimeConditionsPolicy || (exports.TelephonyTimeConditionsPolicy = {}));
/*
 * Forward type
 */
var TelephonyTimeConditionsSettingsForwardType;
(function (TelephonyTimeConditionsSettingsForwardType) {
    TelephonyTimeConditionsSettingsForwardType["NUMBER"] = "number";
    TelephonyTimeConditionsSettingsForwardType["VOICEMAIL"] = "voicemail";
})(TelephonyTimeConditionsSettingsForwardType = exports.TelephonyTimeConditionsSettingsForwardType || (exports.TelephonyTimeConditionsSettingsForwardType = {}));
/*
 * Type of slot
 */
var TelephonyTimeConditionsSlotType;
(function (TelephonyTimeConditionsSlotType) {
    TelephonyTimeConditionsSlotType["NUMBER"] = "number";
    TelephonyTimeConditionsSlotType["VOICEMAIL"] = "voicemail";
})(TelephonyTimeConditionsSlotType = exports.TelephonyTimeConditionsSlotType || (exports.TelephonyTimeConditionsSlotType = {}));
/*
 * Time zones available for scheduled events time definitions
 */
var TelephonytimeZone;
(function (TelephonytimeZone) {
    TelephonytimeZone["EUROPE_BERLIN"] = "Europe/Berlin";
    TelephonytimeZone["EUROPE_BRUSSELS"] = "Europe/Brussels";
    TelephonytimeZone["EUROPE_LONDON"] = "Europe/London";
    TelephonytimeZone["EUROPE_MADRID"] = "Europe/Madrid";
    TelephonytimeZone["EUROPE_PARIS"] = "Europe/Paris";
    TelephonytimeZone["EUROPE_ZURICH"] = "Europe/Zurich";
})(TelephonytimeZone = exports.TelephonytimeZone || (exports.TelephonytimeZone = {}));
/*
 * Tones type
 */
var TelephonyTones;
(function (TelephonyTones) {
    TelephonyTones["CUSTOM_SOUND"] = "Custom sound";
    TelephonyTones["NONE"] = "None";
})(TelephonyTones = exports.TelephonyTones || (exports.TelephonyTones = {}));
/*
 * Tones type
 */
var TelephonyTonesOnHold;
(function (TelephonyTonesOnHold) {
    TelephonyTonesOnHold["CUSTOM_SOUND"] = "Custom sound";
    TelephonyTonesOnHold["NONE"] = "None";
    TelephonyTonesOnHold["PREDEFINED_1"] = "Predefined 1";
    TelephonyTonesOnHold["PREDEFINED_2"] = "Predefined 2";
})(TelephonyTonesOnHold = exports.TelephonyTonesOnHold || (exports.TelephonyTonesOnHold = {}));
/*
 * Tones type
 */
var TelephonyTonesType;
(function (TelephonyTonesType) {
    TelephonyTonesType["CALLWAITING"] = "callWaiting";
    TelephonyTonesType["ENDCALL"] = "endCall";
    TelephonyTonesType["ONHOLD"] = "onHold";
    TelephonyTonesType["RINGBACK"] = "ringback";
})(TelephonyTonesType = exports.TelephonyTonesType || (exports.TelephonyTonesType = {}));
/*
 * Status of the trunk's external displayed number
 */
var TelephonyTrunkExternalDisplayedNumberStatus;
(function (TelephonyTrunkExternalDisplayedNumberStatus) {
    TelephonyTrunkExternalDisplayedNumberStatus["ENABLED"] = "enabled";
    TelephonyTrunkExternalDisplayedNumberStatus["REFUSED"] = "refused";
    TelephonyTrunkExternalDisplayedNumberStatus["TODELETE"] = "toDelete";
    TelephonyTrunkExternalDisplayedNumberStatus["WAITINGVALIDATION"] = "waitingValidation";
})(TelephonyTrunkExternalDisplayedNumberStatus = exports.TelephonyTrunkExternalDisplayedNumberStatus || (exports.TelephonyTrunkExternalDisplayedNumberStatus = {}));
/*
 * All existing types of line or alias
 */
var TelephonyType;
(function (TelephonyType) {
    TelephonyType["CARRIERSIP"] = "carrierSip";
    TelephonyType["CLOUDHUNTING"] = "cloudHunting";
    TelephonyType["CLOUDIVR"] = "cloudIvr";
    TelephonyType["CONFERENCE"] = "conference";
    TelephonyType["CONTACTCENTERSOLUTION"] = "contactCenterSolution";
    TelephonyType["CONTACTCENTERSOLUTIONEXPERT"] = "contactCenterSolutionExpert";
    TelephonyType["DDI"] = "ddi";
    TelephonyType["EASYHUNTING"] = "easyHunting";
    TelephonyType["EASYPABX"] = "easyPabx";
    TelephonyType["EMPTY"] = "empty";
    TelephonyType["FAX"] = "fax";
    TelephonyType["FREEFAX"] = "freefax";
    TelephonyType["MGCP"] = "mgcp";
    TelephonyType["MINIPABX"] = "miniPabx";
    TelephonyType["OLDCONFERENCE"] = "oldConference";
    TelephonyType["PLUGANDFAX"] = "plugAndFax";
    TelephonyType["REDIRECT"] = "redirect";
    TelephonyType["SIP"] = "sip";
    TelephonyType["SVI"] = "svi";
    TelephonyType["VOICEFAX"] = "voicefax";
    TelephonyType["VOICEMAIL"] = "voicemail";
    TelephonyType["VXML"] = "vxml";
})(TelephonyType = exports.TelephonyType || (exports.TelephonyType = {}));
/*
 * All existing types
 */
var TelephonyTypeService;
(function (TelephonyTypeService) {
    TelephonyTypeService["ALIAS"] = "alias";
    TelephonyTypeService["LINE"] = "line";
})(TelephonyTypeService = exports.TelephonyTypeService || (exports.TelephonyTypeService = {}));
/*
 * Consumption destination type
 */
var TelephonyVoiceConsumptionDestinationType;
(function (TelephonyVoiceConsumptionDestinationType) {
    TelephonyVoiceConsumptionDestinationType["LANDLINE"] = "landline";
    TelephonyVoiceConsumptionDestinationType["MOBILE"] = "mobile";
    TelephonyVoiceConsumptionDestinationType["SPECIAL"] = "special";
})(TelephonyVoiceConsumptionDestinationType = exports.TelephonyVoiceConsumptionDestinationType || (exports.TelephonyVoiceConsumptionDestinationType = {}));
/*
 * Consumption plan type
 */
var TelephonyVoiceConsumptionPlanType;
(function (TelephonyVoiceConsumptionPlanType) {
    TelephonyVoiceConsumptionPlanType["OUTPLAN"] = "outplan";
    TelephonyVoiceConsumptionPlanType["PRICEPLAN"] = "priceplan";
})(TelephonyVoiceConsumptionPlanType = exports.TelephonyVoiceConsumptionPlanType || (exports.TelephonyVoiceConsumptionPlanType = {}));
/*
 * Consumption way type
 */
var TelephonyVoiceConsumptionWayType;
(function (TelephonyVoiceConsumptionWayType) {
    TelephonyVoiceConsumptionWayType["INCOMING"] = "incoming";
    TelephonyVoiceConsumptionWayType["OUTGOING"] = "outgoing";
    TelephonyVoiceConsumptionWayType["TRANSFER"] = "transfer";
})(TelephonyVoiceConsumptionWayType = exports.TelephonyVoiceConsumptionWayType || (exports.TelephonyVoiceConsumptionWayType = {}));
/*
 * All existing type of routing for a voicemail
 */
var TelephonyVoicefaxRouting;
(function (TelephonyVoicefaxRouting) {
    TelephonyVoicefaxRouting["FAX"] = "fax";
    TelephonyVoicefaxRouting["VOICEMAIL"] = "voicemail";
})(TelephonyVoicefaxRouting = exports.TelephonyVoicefaxRouting || (exports.TelephonyVoicefaxRouting = {}));
/*
 * Greeting type
 */
var TelephonyVoicemailGreeting;
(function (TelephonyVoicemailGreeting) {
    TelephonyVoicemailGreeting["DEFAULT"] = "default";
    TelephonyVoicemailGreeting["FULL"] = "full";
    TelephonyVoicemailGreeting["SHORT"] = "short";
})(TelephonyVoicemailGreeting = exports.TelephonyVoicemailGreeting || (exports.TelephonyVoicemailGreeting = {}));
/*
 * Folder type
 */
var TelephonyVoicemailMessageFolderDirectory;
(function (TelephonyVoicemailMessageFolderDirectory) {
    TelephonyVoicemailMessageFolderDirectory["FAMILY"] = "family";
    TelephonyVoicemailMessageFolderDirectory["FRIENDS"] = "friends";
    TelephonyVoicemailMessageFolderDirectory["INBOX"] = "inbox";
    TelephonyVoicemailMessageFolderDirectory["OLD"] = "old";
    TelephonyVoicemailMessageFolderDirectory["URGENT"] = "urgent";
    TelephonyVoicemailMessageFolderDirectory["WORK"] = "work";
})(TelephonyVoicemailMessageFolderDirectory = exports.TelephonyVoicemailMessageFolderDirectory || (exports.TelephonyVoicemailMessageFolderDirectory = {}));
/*
 * Folder type
 */
var TelephonyVoicemailMessageFolderGreeting;
(function (TelephonyVoicemailMessageFolderGreeting) {
    TelephonyVoicemailMessageFolderGreeting["BUSY"] = "busy";
    TelephonyVoicemailMessageFolderGreeting["GREET"] = "greet";
    TelephonyVoicemailMessageFolderGreeting["TEMP"] = "temp";
    TelephonyVoicemailMessageFolderGreeting["UNAVAIL"] = "unavail";
})(TelephonyVoicemailMessageFolderGreeting = exports.TelephonyVoicemailMessageFolderGreeting || (exports.TelephonyVoicemailMessageFolderGreeting = {}));
class Telephony {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the VOIP service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony#GET)
     */
    ListAvailableServices() {
        let url = `/telephony`;
        return this.client.request('GET', url);
    }
    /**
     * Billing Account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D#GET)
     */
    GetThisObjectProperties(billingAccount) {
        let url = `/telephony/${billingAccount}`;
        return this.client.request('GET', url);
    }
    /**
     * Billing Account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D#PUT)
     */
    AlterThisObjectProperties(billingAccount, payload) {
        let url = `/telephony/${billingAccount}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Billing Account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D#DELETE)
     */
    AskForABillingAccountTermination(billingAccount, reason, details) {
        let url = `/telephony/${billingAccount}?`;
        const queryParams = new query_params_1.default();
        if (reason) {
            queryParams.set('reason', reason.toString());
        }
        if (details) {
            queryParams.set('details', details);
        }
        return this.client.request('DELETE', url + queryParams.toString());
    }
    /**
     * List the telephony.AbbreviatedNumberGroup objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/abbreviatedNumber#GET)
     */
    AbbreviatedNumbersForTheBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/abbreviatedNumber`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.AbbreviatedNumberGroup objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/abbreviatedNumber#POST)
     */
    CreateANewAbbreviatedNumberForTheBillingAccount(abbreviatedNumber, billingAccount, destinationNumber, name, surname) {
        let url = `/telephony/${billingAccount}/abbreviatedNumber`;
        return this.client.request('POST', url, { abbreviatedNumber, destinationNumber, name, surname });
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
    DeleteTheGivenAbbreviatedNumber(abbreviatedNumber, billingAccount) {
        let url = `/telephony/${billingAccount}/abbreviatedNumber/${abbreviatedNumber}`;
        return this.client.request('DELETE', url);
    }
    /**
     * allowedCreditThreshold operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/allowedCreditThreshold#GET)
     */
    GetTheAllowedCreditThresholdForThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/allowedCreditThreshold`;
        return this.client.request('GET', url);
    }
    /**
     * amountSecurityDeposit operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/amountSecurityDeposit#GET)
     */
    GiveAllAmountsAvailablesForYourBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/amountSecurityDeposit`;
        return this.client.request('GET', url);
    }
    /**
     * billingAccountSite operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/billingAccountSite#POST)
     */
    UsedToOverwriteCurrentBillingAccountFeatureByTheBillingAccountSite(billingAccount, billingAccountSite) {
        let url = `/telephony/${billingAccount}/billingAccountSite`;
        return this.client.request('POST', url, { billingAccountSite });
    }
    /**
     * billingAccountSite operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/billingAccountSite#GET)
     */
    CurrentBillingAccountSiteBillingAccountFeaturesAreOverwrittenByTheSite(billingAccount) {
        let url = `/telephony/${billingAccount}/billingAccountSite`;
        return this.client.request('GET', url);
    }
    /**
     * cancelTermination operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/cancelTermination#POST)
     */
    CancelTheBillingAccountTermination(billingAccount) {
        let url = `/telephony/${billingAccount}/cancelTermination`;
        return this.client.request('POST', url);
    }
    /**
     * canTransferSecurityDeposit operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/canTransferSecurityDeposit#POST)
     */
    CheckIfSecurityDepositTransferIsPossibleBetweenTwoBillingAccounts(billingAccount, billingAccountDestination) {
        let url = `/telephony/${billingAccount}/canTransferSecurityDeposit`;
        return this.client.request('POST', url, { billingAccountDestination });
    }
    /**
     * List the telephony.CarrierSip objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/carrierSip#GET)
     */
    CarrierSIPTrunksAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/carrierSip`;
        return this.client.request('GET', url);
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
    GetTheCallDetailRecordsOfYourCarrierSIPService(billingAccount, serviceName, month) {
        let url = `/telephony/${billingAccount}/carrierSip/${serviceName}/cdrs?`;
        const queryParams = new query_params_1.default();
        if (month) {
            queryParams.set('month', month);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * clusterDetails operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/carrierSip/%7BserviceName%7D/clusterDetails#GET)
     */
    GetDetailsAboutTheCarrierSipClusterOfYourStack(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/carrierSip/${serviceName}/clusterDetails`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.CarrierSipCustomerEndpoint objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/carrierSip/%7BserviceName%7D/endpoints#GET)
     */
    ListOfYourRemoteSipEndpointsIpsPortsProtocolOfYourCarrierSipTrunkService(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/carrierSip/${serviceName}/endpoints`;
        return this.client.request('GET', url);
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
    LaunchAContactChangeProcedure(billingAccount, contactAdmin, contactBilling, contactTech) {
        let url = `/telephony/${billingAccount}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * List the telephony.Conference objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference#GET)
     */
    ConferencesAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/conference`;
        return this.client.request('GET', url);
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
    ChangeTheSoundPlayedAtTheBeginningOfTheConference(billingAccount, documentId, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/announceUpload`;
        return this.client.request('POST', url, { documentId });
    }
    /**
     * List the telephony.ConferenceHistory objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/histories#GET)
     */
    ListYourPastConferencesForThisNumber(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/histories`;
        return this.client.request('GET', url);
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
    GetRealtimeConferenceInformations(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/informations`;
        return this.client.request('GET', url);
    }
    /**
     * lock operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/lock#POST)
     */
    LockTheConferenceRoom(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/lock`;
        return this.client.request('POST', url);
    }
    /**
     * List the telephony.ConferenceParticipants objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants#GET)
     */
    CurrentParticipantsOfTheAssociateConference(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/participants`;
        return this.client.request('GET', url);
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
    MakeAParticipantDeafInYourConferenceRoom(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/deaf`;
        return this.client.request('POST', url);
    }
    /**
     * energy operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D/energy#POST)
     */
    ChangeAParticipantLevelOfAudioTransmission(billingAccount, id, serviceName, value) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/energy`;
        return this.client.request('POST', url, { value });
    }
    /**
     * kick operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D/kick#POST)
     */
    EjectAParticipantFromYourConferenceRoom(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/kick`;
        return this.client.request('POST', url);
    }
    /**
     * mute operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D/mute#POST)
     */
    MuteAParticipantInYourConferenceRoom(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/mute`;
        return this.client.request('POST', url);
    }
    /**
     * undeaf operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D/undeaf#POST)
     */
    MakeAParticipantUndeafYourConferenceRoom(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/undeaf`;
        return this.client.request('POST', url);
    }
    /**
     * unmute operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/participants/%7Bid%7D/unmute#POST)
     */
    UnmuteAParticipantInYourConferenceRoom(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/participants/${id}/unmute`;
        return this.client.request('POST', url);
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
    ListYourConferenceWebAccess(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/webAccess`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.ConferenceWebAccess objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/conference/%7BserviceName%7D/webAccess#POST)
     */
    AddAPublicWebAccessToYourConference(billingAccount, serviceName, type) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/webAccess`;
        return this.client.request('POST', url, { type });
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
    DeleteAPublicWebAccessToYourConference(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/conference/${serviceName}/webAccess/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the telephony.Ddi objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ddi#GET)
     */
    DDIsDirectDialinAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/ddi`;
        return this.client.request('GET', url);
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
    ChangeTheDestinationOfTheDDI(billingAccount, destination, serviceName) {
        let url = `/telephony/${billingAccount}/ddi/${serviceName}/changeDestination`;
        return this.client.request('POST', url, { destination });
    }
    /**
     * List the telephony.EasyHunting objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting#GET)
     */
    OVHEasyCallsQueuesAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/easyHunting`;
        return this.client.request('GET', url);
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
    CallsAgents(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxHuntingAgent objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent#POST)
     */
    CreateANewAgent(billingAccount, number, serviceName, simultaneousLines, status, timeout, wrapUpTime, description) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent`;
        return this.client.request('POST', url, { number, simultaneousLines, status, timeout, wrapUpTime, description });
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
    DeleteTheGivenAgent(agentId, billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}`;
        return this.client.request('DELETE', url);
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
    CreateANewWebAccessForThisRessource(agentId, billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/bannerAccess`;
        return this.client.request('POST', url);
    }
    /**
     * The web access for your cloudpabx [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/bannerAccess#DELETE)
     */
    DeleteTheGivenWebAccess(agentId, billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/bannerAccess`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the telephony.OvhPabxHuntingQueueLiveCalls objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls#GET)
     */
    CurrentCallsOfTheCallcenterAgent(agentId, billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls`;
        return this.client.request('GET', url);
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
    EavesdropOnACall(agentId, billingAccount, id, number, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/eavesdrop`;
        return this.client.request('POST', url, { number });
    }
    /**
     * hangup operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/hangup#POST)
     */
    HangupACall(agentId, billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/hangup`;
        return this.client.request('POST', url);
    }
    /**
     * hold operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/hold#POST)
     */
    ToogleHoldOnCall(agentId, billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/hold`;
        return this.client.request('POST', url);
    }
    /**
     * intercept operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/intercept#POST)
     */
    InterceptANonAnsweredCall(agentId, billingAccount, id, number, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/intercept`;
        return this.client.request('POST', url, { number });
    }
    /**
     * transfer operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/transfer#POST)
     */
    TransferAnAnsweredCall(agentId, billingAccount, id, number, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/transfer`;
        return this.client.request('POST', url, { number });
    }
    /**
     * whisper operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/calls/%7Bid%7D/whisper#POST)
     */
    WhisperOnACall(agentId, billingAccount, id, number, serviceName, whisperingMode) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/calls/${id}/whisper`;
        return this.client.request('POST', url, { number, whisperingMode });
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
    CreateANewToken(agentId, billingAccount, expiration, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/eventToken`;
        return this.client.request('POST', url, { expiration });
    }
    /**
     * Token associated to the service for live event [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/eventToken#DELETE)
     */
    DeleteTheGivenToken(agentId, billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/eventToken`;
        return this.client.request('DELETE', url);
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
    AgentAssignedToTheQueues(agentId, billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/queue`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxHuntingAgentQueue objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/agent/%7BagentId%7D/queue#POST)
     */
    CreateANewSkillForAnAgentItAddsTheAgentInAQueue(agentId, billingAccount, position, queueId, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/queue`;
        return this.client.request('POST', url, { position, queueId });
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
    DeleteTheGivenSkill(agentId, billingAccount, queueId, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/agent/${agentId}/queue/${queueId}`;
        return this.client.request('DELETE', url);
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
    CustomStatusesOfYourAgents(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/customStatus`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxCustomStatus objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/customStatus#POST)
     */
    CreateANewCustomStatus(billingAccount, name, serviceName, color, description) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/customStatus`;
        return this.client.request('POST', url, { name, color, description });
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
    DeleteTheGivenCustomStatus(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/customStatus/${id}`;
        return this.client.request('DELETE', url);
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
    CallsQueues(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxHuntingQueue objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue#POST)
     */
    CreateANewQueue(billingAccount, serviceName, strategy, actionOnClosure, actionOnClosureParam, actionOnOverflow, actionOnOverflowParam, askForRecordDisabling, description, maxMember, maxWaitTime, record, recordDisablingDigit, recordDisablingLanguage, soundOnHold) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue`;
        return this.client.request('POST', url, { strategy, actionOnClosure, actionOnClosureParam, actionOnOverflow, actionOnOverflowParam, askForRecordDisabling, description, maxMember, maxWaitTime, record, recordDisablingDigit, recordDisablingLanguage, soundOnHold });
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
    DeleteTheGivenQueue(billingAccount, queueId, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the telephony.OvhPabxHuntingAgentQueue objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/hunting/queue/%7BqueueId%7D/agent#GET)
     */
    AgentAssignedToTheQueue(billingAccount, queueId, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/agent`;
        return this.client.request('GET', url);
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
    LiveCallsOfTheQueue(billingAccount, queueId, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/hunting/queue/${queueId}/liveCalls`;
        return this.client.request('GET', url);
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
    RecordsAssociatedWithThisPABX(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/records`;
        return this.client.request('GET', url);
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
    DeleteTheGivenRecord(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/records/${id}`;
        return this.client.request('DELETE', url);
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
    ScreenListsConditionsCheckedWhenACallIsReceived(billingAccount, serviceName, screenListType) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/screenListConditions/conditions?`;
        const queryParams = new query_params_1.default();
        if (screenListType) {
            queryParams.set('screenListType', screenListType.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the telephony.EasyHuntingScreenListsConditions objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/screenListConditions/conditions#POST)
     */
    CreateANewScreenlistConditionForAnExtension(billingAccount, screenListType, serviceName, callerIdNumber, destinationNumber) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/screenListConditions/conditions`;
        return this.client.request('POST', url, { screenListType, callerIdNumber, destinationNumber });
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
    DeleteTheGivenCondition(billingAccount, conditionId, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/screenListConditions/conditions/${conditionId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the telephony.OvhPabxSound objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/sound#GET)
     */
    SoundsAssociatedWithThisPABX(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/sound`;
        return this.client.request('GET', url);
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
    DeleteTheGivenSound(billingAccount, serviceName, soundId) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/sound/${soundId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * soundUpload operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/soundUpload#POST)
     */
    UploadNewSoundFile(billingAccount, serviceName, documentId, name, _url) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/soundUpload`;
        return this.client.request('POST', url, { documentId, name, _url });
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
    TimeConditionsCheckedWhenACallIsReceived(billingAccount, serviceName, policy) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/timeConditions/conditions?`;
        const queryParams = new query_params_1.default();
        if (policy) {
            queryParams.set('policy', policy.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the telephony.EasyHuntingTimeConditions objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/easyHunting/%7BserviceName%7D/timeConditions/conditions#POST)
     */
    CreateANewTimeCondition(billingAccount, policy, serviceName, timeFrom, timeTo, weekDay) {
        let url = `/telephony/${billingAccount}/easyHunting/${serviceName}/timeConditions/conditions`;
        return this.client.request('POST', url, { policy, timeFrom, timeTo, weekDay });
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
    EasyPabxAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/easyPabx`;
        return this.client.request('GET', url);
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
    HuntingAgents(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting/agent`;
        return this.client.request('GET', url);
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
    DeleteTheAgent(agentNumber, billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting/agent/${agentNumber}`;
        return this.client.request('DELETE', url);
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
    UploadNewToneFile(billingAccount, serviceName, type, documentId, _url) {
        let url = `/telephony/${billingAccount}/easyPabx/${serviceName}/hunting/tones/toneUpload`;
        return this.client.request('POST', url, { type, documentId, _url });
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
    FaxesAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/fax`;
        return this.client.request('GET', url);
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
    FaxCampaignsOfTheAssociateFax(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.FaxCampaign objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/campaigns#POST)
     */
    CreateANewFaxCampaign(billingAccount, documentId, name, recipientsType, sendType, serviceName, faxQuality, recipientsDocId, recipientsList, sendDate) {
        let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns`;
        return this.client.request('POST', url, { documentId, name, recipientsType, sendType, faxQuality, recipientsDocId, recipientsList, sendDate });
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
    DeleteAFaxCampaign(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * detail operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/campaigns/%7Bid%7D/detail#GET)
     */
    DetailOfTheFaxRecipientsByStatus(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns/${id}/detail`;
        return this.client.request('GET', url);
    }
    /**
     * start operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/campaigns/%7Bid%7D/start#POST)
     */
    StartAFaxCampaign(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns/${id}/start`;
        return this.client.request('POST', url);
    }
    /**
     * stop operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/campaigns/%7Bid%7D/stop#POST)
     */
    StopAFaxCampaign(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/fax/${serviceName}/campaigns/${id}/stop`;
        return this.client.request('POST', url);
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
    CreateANewFaxScreenLists(billingAccount, serviceName, blacklistedNumbers, blacklistedTSI, filteringList, whitelistedNumbers, whitelistedTSI) {
        let url = `/telephony/${billingAccount}/fax/${serviceName}/screenLists`;
        return this.client.request('POST', url, { blacklistedNumbers, blacklistedTSI, filteringList, whitelistedNumbers, whitelistedTSI });
    }
    /**
     * Fax ScreenLists [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/screenLists#DELETE)
     */
    DeleteAllFaxScreenLists(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/fax/${serviceName}/screenLists`;
        return this.client.request('DELETE', url);
    }
    /**
     * reset operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/screenLists/reset#POST)
     */
    ResetASpecificalFaxScreenList(billingAccount, serviceName, blacklistedNumbers, blacklistedTSI, whitelistedNumbers, whitelistedTSI) {
        let url = `/telephony/${billingAccount}/fax/${serviceName}/screenLists/reset`;
        return this.client.request('POST', url, { blacklistedNumbers, blacklistedTSI, whitelistedNumbers, whitelistedTSI });
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
    GeneratesANewPasswordForYourFaxAccount(billingAccount, serviceName, password) {
        let url = `/telephony/${billingAccount}/fax/${serviceName}/settings/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * sendFax operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/fax/%7BserviceName%7D/settings/sendFax#POST)
     */
    SendAFax(billingAccount, pdfUrl, recipients, serviceName, dateSchedule) {
        let url = `/telephony/${billingAccount}/fax/${serviceName}/settings/sendFax`;
        return this.client.request('POST', url, { pdfUrl, recipients, dateSchedule });
    }
    /**
     * List the telephony.HistoryConsumption objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyConsumption#GET)
     */
    PreviousBilledConsumptions(billingAccount) {
        let url = `/telephony/${billingAccount}/historyConsumption`;
        return this.client.request('GET', url);
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
    PreviousBilledConsumptionFiles(billingAccount, date, extension) {
        let url = `/telephony/${billingAccount}/historyConsumption/${date}/file?`;
        const queryParams = new query_params_1.default();
        if (extension) {
            queryParams.set('extension', extension.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the telephony.HistoryRepaymentConsumption objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyRepaymentConsumption#GET)
     */
    PreviousRepaymentBill(billingAccount) {
        let url = `/telephony/${billingAccount}/historyRepaymentConsumption`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.HistoryRepaymentConsumption objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyRepaymentConsumption#POST)
     */
    AskForANewRepayment(billingAccount, billingNumber) {
        let url = `/telephony/${billingAccount}/historyRepaymentConsumption`;
        return this.client.request('POST', url, { billingNumber });
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
    GetTheCsvDocument(billingAccount, date) {
        let url = `/telephony/${billingAccount}/historyRepaymentConsumption/${date}/document`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.HistoryTollfreeConsumption objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/historyTollfreeConsumption#GET)
     */
    PreviousTollfreeBill(billingAccount) {
        let url = `/telephony/${billingAccount}/historyTollfreeConsumption`;
        return this.client.request('GET', url);
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
    LinesAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/line`;
        return this.client.request('GET', url);
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
    AbbreviatedNumbersForTheLine(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/abbreviatedNumber`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.AbbreviatedNumber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/abbreviatedNumber#POST)
     */
    CreateANewAbbreviatedNumberForTheLine(abbreviatedNumber, billingAccount, destinationNumber, name, serviceName, surname) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/abbreviatedNumber`;
        return this.client.request('POST', url, { abbreviatedNumber, destinationNumber, name, surname });
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
    CheckIfThereIsANewPhoneToActivateAndIfItPossibleInCaseOfPhoneSwitch(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/activateNewPhone`;
        return this.client.request('GET', url);
    }
    /**
     * activateNewPhone operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/activateNewPhone#POST)
     */
    AllowToActivateNewPhoneInCaseOfPhoneSwitch(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/activateNewPhone`;
        return this.client.request('POST', url);
    }
    /**
     * antihack operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/antihack#GET)
     */
    CurrentListOfNumbersOrShortCodeNumbersRestrictedByAnAutoAntihack(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/antihack`;
        return this.client.request('GET', url);
    }
    /**
     * antihack operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/antihack#POST)
     */
    CleanTheAntihackOrAddItOnActiveFilterScreenList(action, billingAccount, serviceName, restricted) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/antihack`;
        return this.client.request('POST', url, { action, restricted });
    }
    /**
     * associateDevice operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/associateDevice#POST)
     */
    AssociateADeviceToTheCurrentLineWithTheDeviceMacAddress(billingAccount, macAddress, serviceName, ipAddress) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/associateDevice`;
        return this.client.request('POST', url, { macAddress, ipAddress });
    }
    /**
     * List the telephony.CallsGenerated objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/automaticCall#GET)
     */
    AutomaticCallsMadeByCallsGeneratorOnThisLine(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/automaticCall`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.CallsGenerated objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/automaticCall#POST)
     */
    MakeAnAutomaticPhoneCallReturnGeneratedCallIdentifier(billingAccount, calledNumber, dialplan, isAnonymous, serviceName, bridgeNumberDialplan, callingNumber, playbackAudioFileDialplan, timeout, ttsTextDialplan) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/automaticCall`;
        return this.client.request('POST', url, { calledNumber, dialplan, isAnonymous, bridgeNumberDialplan, callingNumber, playbackAudioFileDialplan, timeout, ttsTextDialplan });
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
    ListingOfDomainsSipAvailables(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/availableSipDomains`;
        return this.client.request('GET', url);
    }
    /**
     * block operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/block#POST)
     */
    BlockTheLineByDefaultItWillBlockIncomingAndOutgoingCallsExceptForEmergencyNumbers(billingAccount, serviceName, mode) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/block`;
        return this.client.request('POST', url, { mode });
    }
    /**
     * List the telephony.OvhPabxHuntingQueueLiveCalls objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/calls#GET)
     */
    TheCurrentCallsOfYourLine(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/calls`;
        return this.client.request('GET', url);
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
    CancelAScheduledConversionToNumber(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/cancelConvertToNumber`;
        return this.client.request('POST', url);
    }
    /**
     * canChangePassword operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/canChangePassword#GET)
     */
    AbilityToManageSIPPasswordOnThisService(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/canChangePassword`;
        return this.client.request('GET', url);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/changePassword#POST)
     */
    ChangeTheSIPAccountPasswordItMustBeMoreThan7AndLessThan21AlphaAndNumericalCharacters(billingAccount, serviceName, password) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * click2Call operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/click2Call#POST)
     */
    MakeAPhoneCallFromTheCurrentLine(billingAccount, calledNumber, serviceName, callingNumber, intercom) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/click2Call`;
        return this.client.request('POST', url, { calledNumber, callingNumber, intercom });
    }
    /**
     * List the telephony.Click2CallUser objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/click2CallUser#GET)
     */
    UserWhichCanUseClick2CallOnTheLine(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/click2CallUser`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.Click2CallUser objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/click2CallUser#POST)
     */
    CreateANewUserForClick2Call(billingAccount, login, password, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/click2CallUser`;
        return this.client.request('POST', url, { login, password });
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
    DeleteAClick2CallUser(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/click2CallUser/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/click2CallUser/%7Bid%7D/changePassword#POST)
     */
    ChangeThePasswordOfTheClick2callUser(billingAccount, id, password, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/click2CallUser/${id}/changePassword`;
        return this.client.request('POST', url, { password });
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
    ScheduleAConversionToNumber(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/convertToNumber`;
        return this.client.request('POST', url);
    }
    /**
     * dissociateDevice operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/dissociateDevice#POST)
     */
    DissociateADeviceFromTheCurrentLineWithTheDeviceMacAddress(billingAccount, macAddress, serviceName, ipAddress) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/dissociateDevice`;
        return this.client.request('POST', url, { macAddress, ipAddress });
    }
    /**
     * ips operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/ips#GET)
     */
    ListingOfLastIpsRegistry(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/ips`;
        return this.client.request('GET', url);
    }
    /**
     * lastRegistrations operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/lastRegistrations#GET)
     */
    ListTheInformationsAboutTheLastRegistrationsIeIPPortUserAgent(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/lastRegistrations`;
        return this.client.request('GET', url);
    }
    /**
     * listAssociablePhones operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/listAssociablePhones#GET)
     */
    ListPhonesWithAvailableSlotsWhereThisLineCanBeAttached(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/listAssociablePhones`;
        return this.client.request('GET', url);
    }
    /**
     * maximumAvailableSimultaneousLines operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/maximumAvailableSimultaneousLines#GET)
     */
    GetTheMaximumAvailableSimultaneousLinesForThisLine(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/maximumAvailableSimultaneousLines`;
        return this.client.request('GET', url);
    }
    /**
     * offer operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/offer#GET)
     */
    ReturnPublicOfferProperty(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/offer`;
        return this.client.request('GET', url);
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
    ListOfCodecsCombinaisonsAvailableForThisLine(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/options/availableCodecs`;
        return this.client.request('GET', url);
    }
    /**
     * defaultCodecs operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/options/defaultCodecs#GET)
     */
    GetTheDefaultCodecsForThisLineIfNoneAreSet(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/options/defaultCodecs`;
        return this.client.request('GET', url);
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
    ReturnsTheAdministrationUserAndPasswordOfThePhoneIfYouAreAVIP(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/adminCredentials`;
        return this.client.request('GET', url);
    }
    /**
     * changePhoneConfiguration operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/changePhoneConfiguration#POST)
     */
    EditConfigurationOfThePhoneRemotelyByProvisioning(billingAccount, serviceName, autoReboot, newConfigurations) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/changePhoneConfiguration`;
        return this.client.request('POST', url, { autoReboot, newConfigurations });
    }
    /**
     * List the telephony.FunctionKey objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/functionKey#GET)
     */
    PlugAndPhoneFunctionKeys(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/functionKey`;
        return this.client.request('GET', url);
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
    ListTheAvailableFunctionsForTheKey(billingAccount, keyNum, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/functionKey/${keyNum}/availableFunction`;
        return this.client.request('GET', url);
    }
    /**
     * merchandiseAvailable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/merchandiseAvailable#GET)
     */
    ListOfAvailableExchangeMerchandiseBrand(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/merchandiseAvailable`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.Phonebook objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook#GET)
     */
    ReturnPhonebooksAssociated(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.Phonebook objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook#POST)
     */
    AddAPhonebookReturnTheBookKey(billingAccount, name, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook`;
        return this.client.request('POST', url, { name });
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
    DeleteAPhonebook(billingAccount, bookKey, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}`;
        return this.client.request('DELETE', url);
    }
    /**
     * export operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D/export#GET)
     */
    ExportThePhonebookContacts(billingAccount, bookKey, format, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/export?`;
        const queryParams = new query_params_1.default();
        if (format) {
            queryParams.set('format', format.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * import operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D/import#POST)
     */
    ImportAContactsFileSupportedFormatsAreExcelXlsAndXlsxAndCSV(billingAccount, bookKey, documentId, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/import`;
        return this.client.request('POST', url, { documentId });
    }
    /**
     * List the telephony.PhonebookContact objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D/phonebookContact#GET)
     */
    PhonebookContacts(billingAccount, bookKey, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/phonebookContact`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.PhonebookContact objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/phonebook/%7BbookKey%7D/phonebookContact#POST)
     */
    CreateAPhonebookContactReturnIdentifierOfThePhonebookContact(billingAccount, bookKey, group, name, serviceName, surname, homeMobile, homePhone, workMobile, workPhone) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/phonebookContact`;
        return this.client.request('POST', url, { group, name, surname, homeMobile, homePhone, workMobile, workPhone });
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
    DeleteAPhonebookContact(billingAccount, bookKey, id, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/phonebook/${bookKey}/phonebookContact/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * reboot operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/reboot#POST)
     */
    CreateATaskToRebootThePhone(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/reboot`;
        return this.client.request('POST', url);
    }
    /**
     * refreshScreen operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/refreshScreen#POST)
     */
    CreateATaskToRefreshTheScreenOfTheMGCPPhone(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/refreshScreen`;
        return this.client.request('POST', url);
    }
    /**
     * resetConfig operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/resetConfig#POST)
     */
    ReinitializeThePhoneConfiguration(billingAccount, ip, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/resetConfig`;
        return this.client.request('POST', url, { ip });
    }
    /**
     * List the telephony.Rma objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/rma#GET)
     */
    ReturnMerchandiseAuthorisationAssociated(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/rma`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.Rma objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/rma#POST)
     */
    CreateASpecificRma(billingAccount, serviceName, type, mondialRelayId, newMerchandise, shippingContactId) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/rma`;
        return this.client.request('POST', url, { type, mondialRelayId, newMerchandise, shippingContactId });
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
    CancelTheRma(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/rma/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * supportsPhonebook operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phone/supportsPhonebook#GET)
     */
    DoesThePhoneManagesPhonebooks(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phone/supportsPhonebook`;
        return this.client.request('GET', url);
    }
    /**
     * phoneCanBeAssociable operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/phoneCanBeAssociable#GET)
     */
    ListThePhonesWithSipSlotAvailable(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/phoneCanBeAssociable`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxRecord objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/records#GET)
     */
    TheRecordingsOfYourLineOutgoingCalls(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/records`;
        return this.client.request('GET', url);
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
    RemoveExtraSimultaneousLines(billingAccount, quantityRemove, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/removeSimultaneousLines`;
        return this.client.request('POST', url, { quantityRemove });
    }
    /**
     * simultaneousChannelsDetails operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/simultaneousChannelsDetails#GET)
     */
    DetailsAboutSimultaneousChannelsOfThisLine(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/simultaneousChannelsDetails`;
        return this.client.request('GET', url);
    }
    /**
     * statistics operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/statistics#GET)
     */
    GetStatisticsOfTheCurrentLine(billingAccount, serviceName, timeframe, type) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/statistics?`;
        const queryParams = new query_params_1.default();
        if (timeframe) {
            queryParams.set('timeframe', timeframe.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    TheTrafficExtractsSIPOnlyOfYourLine(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/trafficExtracts`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.trafficExtract objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/trafficExtracts#POST)
     */
    LaunchATrafficExtractOnYourLine(billingAccount, dateEnd, dateStart, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/trafficExtracts`;
        return this.client.request('POST', url, { dateEnd, dateStart });
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
    DeleteATrafficExtract(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/trafficExtracts/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * unblock operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/line/%7BserviceName%7D/unblock#POST)
     */
    UnblockTheLineItWillRemoveAnyIncomingAndOutboingBlockMadeEarlier(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/line/${serviceName}/unblock`;
        return this.client.request('POST', url);
    }
    /**
     * List the telephony.MiniPabx objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/miniPabx#GET)
     */
    MiniabxAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/miniPabx`;
        return this.client.request('GET', url);
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
    AdditionalNumbersAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/number`;
        return this.client.request('GET', url);
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
    CancelAScheduledConversionToLine(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/number/${serviceName}/cancelConvertToLine`;
        return this.client.request('POST', url);
    }
    /**
     * changeFeatureType operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/number/%7BserviceName%7D/changeFeatureType#POST)
     */
    ChangeTheFeatureTypeOfThePhoneNumber(billingAccount, featureType, serviceName) {
        let url = `/telephony/${billingAccount}/number/${serviceName}/changeFeatureType`;
        return this.client.request('POST', url, { featureType });
    }
    /**
     * convertToLine operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/number/%7BserviceName%7D/convertToLine#POST)
     */
    ScheduleAConversionToLine(billingAccount, offer, serviceName) {
        let url = `/telephony/${billingAccount}/number/${serviceName}/convertToLine`;
        return this.client.request('POST', url, { offer });
    }
    /**
     * convertToLineAvailableOffers operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/number/%7BserviceName%7D/convertToLineAvailableOffers#GET)
     */
    GetTheAvailableLineOffersToScheduleAConversionToLine(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/number/${serviceName}/convertToLineAvailableOffers`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OfferTask objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/offerTask#GET)
     */
    OperationsOnATelephonyServiceOffer(billingAccount, action, status, type) {
        let url = `/telephony/${billingAccount}/offerTask?`;
        const queryParams = new query_params_1.default();
        if (action) {
            queryParams.set('action', action.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    ListOldPhonesArchivedAsTheyWereNotReturnedAfterAnRMA(billingAccount) {
        let url = `/telephony/${billingAccount}/oldPhone`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.ConsumptionThreshold objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/outplanNotification#GET)
     */
    OutplanNotificationsConfiguredForThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/outplanNotification`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.ConsumptionThreshold objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/outplanNotification#POST)
     */
    AddAnOutplanNotificationOnTheBillingAccount(billingAccount, block, percentage, notifyEmail) {
        let url = `/telephony/${billingAccount}/outplanNotification`;
        return this.client.request('POST', url, { block, percentage, notifyEmail });
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
    DeleteAnOutplanNotification(billingAccount, id) {
        let url = `/telephony/${billingAccount}/outplanNotification/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the telephony.OvhPabx objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx#GET)
     */
    OVHCallsQueuesAndOVHIVRsInteractiveVoiceResponseAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/ovhPabx`;
        return this.client.request('GET', url);
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
    DialplansAssociatedWithThisPABX(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxDialplan objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan#POST)
     */
    CreateANewDialplan(anonymousRejection, billingAccount, name, serviceName, showCallerNumber, transferTimeout) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan`;
        return this.client.request('POST', url, { anonymousRejection, name, showCallerNumber, transferTimeout });
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
    DeleteTheGivenDialplan(billingAccount, dialplanId, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the telephony.OvhPabxDialplanExtension objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension#GET)
     */
    ExtensionsContainedInTheDialplan(billingAccount, dialplanId, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxDialplanExtension objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension#POST)
     */
    CreateANewExtensionForADialplan(billingAccount, dialplanId, enable, position, serviceName, schedulerCategory, screenListType) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension`;
        return this.client.request('POST', url, { enable, position, schedulerCategory, screenListType });
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
    DeleteTheGivenExtension(billingAccount, dialplanId, extensionId, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the telephony.OvhPabxDialplanExtensionConditionScreenList objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/conditionScreenList#GET)
     */
    ScreenlistConditionsCheckedWhenExecutingTheExtension(billingAccount, dialplanId, extensionId, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionScreenList`;
        return this.client.request('GET', url);
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
    TimeConditionsCheckedWhenExecutingTheExtension(billingAccount, dialplanId, extensionId, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionTime`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxDialplanExtensionConditionTime objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/conditionTime#POST)
     */
    CreateANewTimeConditionForAnExtension(billingAccount, dialplanId, extensionId, serviceName, timeFrom, timeTo, weekDay) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/conditionTime`;
        return this.client.request('POST', url, { timeFrom, timeTo, weekDay });
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
    RulesContainedInTheExtension(billingAccount, dialplanId, extensionId, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/rule`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxDialplanExtensionRule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/dialplan/%7BdialplanId%7D/extension/%7BextensionId%7D/rule#POST)
     */
    CreateANewRuleForAnExtension(action, billingAccount, dialplanId, extensionId, negativeAction, position, serviceName, actionParam) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/rule`;
        return this.client.request('POST', url, { action, negativeAction, position, actionParam });
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
    DeleteTheGivenRule(billingAccount, dialplanId, extensionId, ruleId, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/dialplan/${dialplanId}/extension/${extensionId}/rule/${ruleId}`;
        return this.client.request('DELETE', url);
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
    MenusAssociatedWithThisPABX(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxMenu objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu#POST)
     */
    CreateANewMenu(billingAccount, name, serviceName, greetSound, greetSoundTts, invalidSound, invalidSoundTts) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu`;
        return this.client.request('POST', url, { name, greetSound, greetSoundTts, invalidSound, invalidSoundTts });
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
    DeleteTheGivenMenu(billingAccount, menuId, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the telephony.OvhPabxMenuEntry objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu/%7BmenuId%7D/entry#GET)
     */
    MenuEntry(billingAccount, menuId, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}/entry`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxMenuEntry objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/menu/%7BmenuId%7D/entry#POST)
     */
    CreateANewMenuEntry(action, billingAccount, dtmf, menuId, position, serviceName, actionParam) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}/entry`;
        return this.client.request('POST', url, { action, dtmf, position, actionParam });
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
    DeleteTheGivenMenuEntry(billingAccount, entryId, menuId, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/menu/${menuId}/entry/${entryId}`;
        return this.client.request('DELETE', url);
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
    TextToSpeechAssociatedWithThisPABX(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/tts`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.OvhPabxTts objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/ovhPabx/%7BserviceName%7D/tts#POST)
     */
    CreateANewTextToSpeech(billingAccount, serviceName, text, voice) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/tts`;
        return this.client.request('POST', url, { text, voice });
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
    DeleteTheGivenTextToSpeech(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/ovhPabx/${serviceName}/tts/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the telephony.PhonebookMaster objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook#GET)
     */
    ReturnPhonebooksAssociatedToThisGroup(billingAccount) {
        let url = `/telephony/${billingAccount}/phonebook`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.PhonebookMaster objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/phonebook#POST)
     */
    AddAPhonebookOnGroupReturnTheBookKey(billingAccount, name) {
        let url = `/telephony/${billingAccount}/phonebook`;
        return this.client.request('POST', url, { name });
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
    CurrentNumberPortabilitiesForThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/portability`;
        return this.client.request('GET', url);
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
    IndicatesWhetherOrNotThePortabilityCanBeCancelled(billingAccount, id) {
        let url = `/telephony/${billingAccount}/portability/${id}/canBeCancelled`;
        return this.client.request('GET', url);
    }
    /**
     * canBeExecuted operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/canBeExecuted#GET)
     */
    IndicatesWhetherOrNotThePortabilityCanBeExecuted(billingAccount, id) {
        let url = `/telephony/${billingAccount}/portability/${id}/canBeExecuted`;
        return this.client.request('GET', url);
    }
    /**
     * cancel operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/cancel#POST)
     */
    AskToCancelThePortability(billingAccount, id, reason) {
        let url = `/telephony/${billingAccount}/portability/${id}/cancel`;
        return this.client.request('POST', url, { reason });
    }
    /**
     * changeDate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/changeDate#POST)
     */
    AskToChangeThePortabilityDate(billingAccount, date, id) {
        let url = `/telephony/${billingAccount}/portability/${id}/changeDate`;
        return this.client.request('POST', url, { date });
    }
    /**
     * dateCanBeChanged operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/dateCanBeChanged#GET)
     */
    IndicatesWhetherOrNotThePortabilityDateCanBeChanged(billingAccount, id) {
        let url = `/telephony/${billingAccount}/portability/${id}/dateCanBeChanged`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.PortabilityDocument objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/document#GET)
     */
    DocumentLinkedToThisPortability(billingAccount, id) {
        let url = `/telephony/${billingAccount}/portability/${id}/document`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.PortabilityDocument objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/document#POST)
     */
    CreateAPortabilityDocument(billingAccount, id, name, description) {
        let url = `/telephony/${billingAccount}/portability/${id}/document`;
        return this.client.request('POST', url, { name, description });
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
    DeleteTheDocument(billingAccount, documentId, id) {
        let url = `/telephony/${billingAccount}/portability/${id}/document/${documentId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * execute operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/execute#POST)
     */
    AskToExecuteThePortability(billingAccount, id) {
        let url = `/telephony/${billingAccount}/portability/${id}/execute`;
        return this.client.request('POST', url);
    }
    /**
     * relaunch operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/relaunch#POST)
     */
    FixErrorAndRelaunchPortability(billingAccount, id, parameters) {
        let url = `/telephony/${billingAccount}/portability/${id}/relaunch`;
        return this.client.request('POST', url, { parameters });
    }
    /**
     * relaunch operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/relaunch#GET)
     */
    IndicatesWhetherOrNotErrorCanBeFixedAndPortabilityCanBeRelaunched(billingAccount, id) {
        let url = `/telephony/${billingAccount}/portability/${id}/relaunch`;
        return this.client.request('GET', url);
    }
    /**
     * status operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/portability/%7Bid%7D/status#GET)
     */
    IndicatesTheCurrentStatusOfThePortabilityWithAListOfSteps(billingAccount, id) {
        let url = `/telephony/${billingAccount}/portability/${id}/status`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.Redirect objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/redirect#GET)
     */
    RedirectsAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/redirect`;
        return this.client.request('GET', url);
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
    ChangeTheDestinationOfTheRedirect(billingAccount, destination, serviceName) {
        let url = `/telephony/${billingAccount}/redirect/${serviceName}/changeDestination`;
        return this.client.request('POST', url, { destination });
    }
    /**
     * List the telephony.Rsva objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva#GET)
     */
    ServiceConcernedByTheFrenchRSVAReform(billingAccount) {
        let url = `/telephony/${billingAccount}/rsva`;
        return this.client.request('GET', url);
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
    CompatibleRateCodesRelatedToThisValueAddedService(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/rsva/${serviceName}/allowedRateCodes`;
        return this.client.request('GET', url);
    }
    /**
     * cancelScheduledRateCode operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva/%7BserviceName%7D/cancelScheduledRateCode#POST)
     */
    CancelAScheduledRateCodeUpdate(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/rsva/${serviceName}/cancelScheduledRateCode`;
        return this.client.request('POST', url);
    }
    /**
     * currentRateCode operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva/%7BserviceName%7D/currentRateCode#GET)
     */
    CurrentRateCodeRelatedToThisSva(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/rsva/${serviceName}/currentRateCode`;
        return this.client.request('GET', url);
    }
    /**
     * scheduledRateCode operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva/%7BserviceName%7D/scheduledRateCode#GET)
     */
    NewScheduledRateCodeRelatedToThisSva(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/rsva/${serviceName}/scheduledRateCode`;
        return this.client.request('GET', url);
    }
    /**
     * scheduleRateCode operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/rsva/%7BserviceName%7D/scheduleRateCode#POST)
     */
    ScheduleANewRateCodeForThisSva(billingAccount, rateCode, serviceName) {
        let url = `/telephony/${billingAccount}/rsva/${serviceName}/scheduleRateCode`;
        return this.client.request('POST', url, { rateCode });
    }
    /**
     * List the telephony.Scheduler objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler#GET)
     */
    ScheduledEvents(billingAccount) {
        let url = `/telephony/${billingAccount}/scheduler`;
        return this.client.request('GET', url);
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
    CustomEventsScheduled(billingAccount, serviceName, categories, dateEndFrom, dateEndTo, dateStartFrom, dateStartTo) {
        let url = `/telephony/${billingAccount}/scheduler/${serviceName}/events?`;
        const queryParams = new query_params_1.default();
        if (categories) {
            queryParams.set('categories', categories.toString());
        }
        if (dateEndFrom) {
            queryParams.set('dateEnd.from', dateEndFrom.toString());
        }
        if (dateEndTo) {
            queryParams.set('dateEnd.to', dateEndTo.toString());
        }
        if (dateStartFrom) {
            queryParams.set('dateStart.from', dateStartFrom.toString());
        }
        if (dateStartTo) {
            queryParams.set('dateStart.to', dateStartTo.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the telephony.SchedulerEvent objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler/%7BserviceName%7D/events#POST)
     */
    AddASchedulerEvent(billingAccount, category, dateEnd, dateStart, serviceName, title, description, uid) {
        let url = `/telephony/${billingAccount}/scheduler/${serviceName}/events`;
        return this.client.request('POST', url, { category, dateEnd, dateStart, title, description, uid });
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
    DeleteTheGivenSchedulerEvent(billingAccount, serviceName, uid) {
        let url = `/telephony/${billingAccount}/scheduler/${serviceName}/events/${uid}`;
        return this.client.request('DELETE', url);
    }
    /**
     * importIcsCalendar operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/scheduler/%7BserviceName%7D/importIcsCalendar#POST)
     */
    AddSchedulerEventsInICSFormat(billingAccount, serviceName, _url) {
        let url = `/telephony/${billingAccount}/scheduler/${serviceName}/importIcsCalendar`;
        return this.client.request('POST', url, { _url });
    }
    /**
     * List the telephony.Screen objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/screen#GET)
     */
    ScreenlistCompatibleNumbersAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/screen`;
        return this.client.request('GET', url);
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
    RulesForCallFilteringForThisService(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/screen/${serviceName}/screenLists`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.ScreenList objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/screen/%7BserviceName%7D/screenLists#POST)
     */
    CreateANewScreenListRule(billingAccount, nature, serviceName, type, callNumber) {
        let url = `/telephony/${billingAccount}/screen/${serviceName}/screenLists`;
        return this.client.request('POST', url, { nature, type, callNumber });
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
    DeleteTheGivenScreenList(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/screen/${serviceName}/screenLists/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the telephony.TelephonyService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service#GET)
     */
    ServicesAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/service`;
        return this.client.request('GET', url);
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
    AskForAServiceTermination(billingAccount, reason, serviceName, details) {
        let url = `/telephony/${billingAccount}/service/${serviceName}?`;
        const queryParams = new query_params_1.default();
        if (reason) {
            queryParams.set('reason', reason.toString());
        }
        if (details) {
            queryParams.set('details', details);
        }
        return this.client.request('DELETE', url + queryParams.toString());
    }
    /**
     * cancelTermination operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/cancelTermination#POST)
     */
    CancelTheServiceTermination(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/cancelTermination`;
        return this.client.request('POST', url);
    }
    /**
     * changeOfBillingAccount operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/changeOfBillingAccount#POST)
     */
    MoveAServiceOfBillingAccountSourceAndDestinationNicsShouldBeTheSame(billingAccount, billingAccountDestination, serviceName) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/changeOfBillingAccount`;
        return this.client.request('POST', url, { billingAccountDestination });
    }
    /**
     * diagnosticReports operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/diagnosticReports#GET)
     */
    GetRelevantInformationsOfTheServiceDetectedFromTheMOSOrTheSignalLegInSIPMGCPProtocol(billingAccount, dayInterval, serviceName) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/diagnosticReports?`;
        const queryParams = new query_params_1.default();
        if (dayInterval) {
            queryParams.set('dayInterval', dayInterval.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    GetCompanyEntrepriseInformationsByProvidingEntrepriseNumber(billingAccount, entrepriseNumber, serviceName) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/directory/fetchEntrepriseInformations`;
        return this.client.request('POST', url, { entrepriseNumber });
    }
    /**
     * getDirectoryServiceCode operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/directory/getDirectoryServiceCode#GET)
     */
    GetDirectoryServiceCodeFromAnAPECodePrincipalActivityOfTheFirmCode(apeCode, billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/directory/getDirectoryServiceCode?`;
        const queryParams = new query_params_1.default();
        if (apeCode) {
            queryParams.set('apeCode', apeCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * getWayTypes operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/directory/getWayTypes#GET)
     */
    GetAllTheWayTypesAvailables(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/directory/getWayTypes`;
        return this.client.request('GET', url);
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
    FaxDeliveryRecords(billingAccount, serviceName, creationDatetimeFrom, creationDatetimeTo, wayType) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/faxConsumption?`;
        const queryParams = new query_params_1.default();
        if (creationDatetimeFrom) {
            queryParams.set('creationDatetime.from', creationDatetimeFrom.toString());
        }
        if (creationDatetimeTo) {
            queryParams.set('creationDatetime.to', creationDatetimeTo.toString());
        }
        if (wayType) {
            queryParams.set('wayType', wayType.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    AddANewOfferChange(billingAccount, offer, serviceName) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/offerChange`;
        return this.client.request('POST', url, { offer });
    }
    /**
     * Offer change [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/offerChange#DELETE)
     */
    DeleteTheReplacementOfferScheduling(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/offerChange`;
        return this.client.request('DELETE', url);
    }
    /**
     * offerChanges operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/service/%7BserviceName%7D/offerChanges#GET)
     */
    ListAllAvailableOfferChangesCompatibilities(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/offerChanges`;
        return this.client.request('GET', url);
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
    CallDeliveryRecordsOfThePreviousMonth(billingAccount, serviceName, creationDatetimeFrom, creationDatetimeTo, destinationType, planType, wayType) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/previousVoiceConsumption?`;
        const queryParams = new query_params_1.default();
        if (creationDatetimeFrom) {
            queryParams.set('creationDatetime.from', creationDatetimeFrom.toString());
        }
        if (creationDatetimeTo) {
            queryParams.set('creationDatetime.to', creationDatetimeTo.toString());
        }
        if (destinationType) {
            queryParams.set('destinationType', destinationType.toString());
        }
        if (planType) {
            queryParams.set('planType', planType.toString());
        }
        if (wayType) {
            queryParams.set('wayType', wayType.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    CallWhichCouldBeRepayable(billingAccount, serviceName, creationDatetimeFrom, creationDatetimeTo) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/repaymentConsumption?`;
        const queryParams = new query_params_1.default();
        if (creationDatetimeFrom) {
            queryParams.set('creationDatetime.from', creationDatetimeFrom.toString());
        }
        if (creationDatetimeTo) {
            queryParams.set('creationDatetime.to', creationDatetimeTo.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    OperationsOnATelephonyService(billingAccount, serviceName, action, serviceType, status) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/task?`;
        const queryParams = new query_params_1.default();
        if (action) {
            queryParams.set('action', action);
        }
        if (serviceType) {
            queryParams.set('serviceType', serviceType);
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    CallDeliveryRecords(billingAccount, serviceName, creationDatetimeFrom, creationDatetimeTo, destinationType, planType, wayType) {
        let url = `/telephony/${billingAccount}/service/${serviceName}/voiceConsumption?`;
        const queryParams = new query_params_1.default();
        if (creationDatetimeFrom) {
            queryParams.set('creationDatetime.from', creationDatetimeFrom.toString());
        }
        if (creationDatetimeTo) {
            queryParams.set('creationDatetime.to', creationDatetimeTo.toString());
        }
        if (destinationType) {
            queryParams.set('destinationType', destinationType.toString());
        }
        if (planType) {
            queryParams.set('planType', planType.toString());
        }
        if (wayType) {
            queryParams.set('wayType', wayType.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    OperationsOnATelephonyBillingAccount(billingAccount, action, serviceType, status) {
        let url = `/telephony/${billingAccount}/task?`;
        const queryParams = new query_params_1.default();
        if (action) {
            queryParams.set('action', action);
        }
        if (serviceType) {
            queryParams.set('serviceType', serviceType);
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    TimeConditionsCompatibleNumbersAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/timeCondition`;
        return this.client.request('GET', url);
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
    RulesForTimeConditionsForThisService(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/timeCondition/${serviceName}/condition`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.TimeCondition objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/timeCondition/%7BserviceName%7D/condition#POST)
     */
    CreateANewTimeConditionRule(billingAccount, day, hourBegin, hourEnd, policy, serviceName) {
        let url = `/telephony/${billingAccount}/timeCondition/${serviceName}/condition`;
        return this.client.request('POST', url, { day, hourBegin, hourEnd, policy });
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
    TransferSecurityDepositBetweenTwoBillingAccounts(amount, billingAccount, billingAccountDestination) {
        let url = `/telephony/${billingAccount}/transferSecurityDeposit`;
        return this.client.request('POST', url, { amount, billingAccountDestination });
    }
    /**
     * List the telephony.Trunk objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk#GET)
     */
    TrunkAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/trunk`;
        return this.client.request('GET', url);
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
    DetermineTheBestChannelsPacksCombinationForAGivenChannelQuantity(billingAccount, quantity, serviceName) {
        let url = `/telephony/${billingAccount}/trunk/${serviceName}/channelsPacksRepartition?`;
        const queryParams = new query_params_1.default();
        if (quantity) {
            queryParams.set('quantity', quantity.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the telephony.TrunkExternalDisplayedNumber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk/%7BserviceName%7D/externalDisplayedNumber#GET)
     */
    ExternalDisplayedNumberLinkedToThisTrunk(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/trunk/${serviceName}/externalDisplayedNumber`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.TrunkExternalDisplayedNumber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk/%7BserviceName%7D/externalDisplayedNumber#POST)
     */
    ExternalDisplayedNumberCreationForAGivenTrunk(billingAccount, number, serviceName, autoValidation) {
        let url = `/telephony/${billingAccount}/trunk/${serviceName}/externalDisplayedNumber`;
        return this.client.request('POST', url, { number, autoValidation });
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
    DeleteAnExternalDisplayedNumberForAGivenTrunk(billingAccount, number, serviceName) {
        let url = `/telephony/${billingAccount}/trunk/${serviceName}/externalDisplayedNumber/${number}`;
        return this.client.request('DELETE', url);
    }
    /**
     * validate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/trunk/%7BserviceName%7D/externalDisplayedNumber/%7Bnumber%7D/validate#POST)
     */
    GenerateAPhoneCallForValidationReturnedValidationCodeShouldBeTypedWhenAsked(billingAccount, number, serviceName) {
        let url = `/telephony/${billingAccount}/trunk/${serviceName}/externalDisplayedNumber/${number}/validate`;
        return this.client.request('POST', url);
    }
    /**
     * List the telephony.Voicemail objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail#GET)
     */
    VoicemailsAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/voicemail`;
        return this.client.request('GET', url);
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
    VoicemailDirectoryMessages(billingAccount, serviceName, dir) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/directories?`;
        const queryParams = new query_params_1.default();
        if (dir) {
            queryParams.set('dir', dir.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    DeleteTheGivenVoicemailMessage(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/directories/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * download operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/directories/%7Bid%7D/download#GET)
     */
    GetAUrlToDownloadTheSoundFile(billingAccount, id, serviceName, format) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/directories/${id}/download?`;
        const queryParams = new query_params_1.default();
        if (format) {
            queryParams.set('format', format.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * move operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/directories/%7Bid%7D/move#POST)
     */
    MoveTheMessageToAnotherDirectory(billingAccount, dir, id, serviceName) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/directories/${id}/move`;
        return this.client.request('POST', url, { dir });
    }
    /**
     * List the telephony.VoicemailGreetings objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/greetings#GET)
     */
    VoicemailGreetingMessageProperties(billingAccount, serviceName, dir) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/greetings?`;
        const queryParams = new query_params_1.default();
        if (dir) {
            queryParams.set('dir', dir.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the telephony.VoicemailGreetings objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/greetings#POST)
     */
    UploadANewSoundForASpecificGreetingReturnATaskId(billingAccount, dir, documentId, serviceName) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/greetings`;
        return this.client.request('POST', url, { dir, documentId });
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
    DeleteTheCustomizedGreeting(billingAccount, id, serviceName) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/greetings/${id}`;
        return this.client.request('DELETE', url);
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
    ChangeTheVoicemailOnANewVersionToManagerGreetingsDirectoriesAndExtraSettings(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/migrateOnNewVersion`;
        return this.client.request('POST', url);
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
    ChangeTheVoicemailPasswordItMustBe4Digit(billingAccount, password, serviceName) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/settings/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * changeRouting operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/settings/changeRouting#POST)
     */
    DisableEnableVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(billingAccount, routing, serviceName) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/settings/changeRouting`;
        return this.client.request('POST', url, { routing });
    }
    /**
     * routing operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/settings/routing#GET)
     */
    GetTheStatusOfTheVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/settings/routing`;
        return this.client.request('GET', url);
    }
    /**
     * voicemailNumbers operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/voicemail/%7BserviceName%7D/settings/voicemailNumbers#GET)
     */
    GetNumberForInternalAndExternalVoicemail(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/voicemail/${serviceName}/settings/voicemailNumbers`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.Vxml objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/%7BbillingAccount%7D/vxml#GET)
     */
    VxmlNumbersAssociatedWithThisBillingAccount(billingAccount) {
        let url = `/telephony/${billingAccount}/vxml`;
        return this.client.request('GET', url);
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
    GenerateATemporaryUrlToRetrieveDeviceLogs(billingAccount, serviceName) {
        let url = `/telephony/${billingAccount}/vxml/${serviceName}/settings/logs`;
        return this.client.request('POST', url);
    }
    /**
     * Get all available accessories [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/accessories#GET)
     */
    GetAllAvailableAccessories(country) {
        let url = `/telephony/accessories?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    GetAllAvailableSIPDomainsByCountry(type) {
        let url = `/telephony/availableDefaultSipDomains?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get current order ids [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/currentOrderIds#GET)
     */
    GetCurrentOrderIds() {
        let url = `/telephony/currentOrderIds`;
        return this.client.request('GET', url);
    }
    /**
     * Get all zip codes compatible for a number [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/directories/availableZipCodes#GET)
     */
    GetAllZipCodesCompatibleForANumber(country, number) {
        let url = `/telephony/directories/availableZipCodes?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        if (number) {
            queryParams.set('number', number);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get city informations from a zip code [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/directories/cities#GET)
     */
    GetCityInformationsFromAZipCode(country, zipCode) {
        let url = `/telephony/directories/cities?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        if (zipCode) {
            queryParams.set('zipCode', zipCode);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get all available fax offer compatible [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/fax/offers#GET)
     */
    GetAllAvailableFaxOfferCompatible(country) {
        let url = `/telephony/fax/offers?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get all available phone brands compatible with lines [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/line/offer/phones#GET)
     */
    GetAllAvailablePhoneBrandsCompatibleWithLines(country, offer) {
        let url = `/telephony/line/offer/phones?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        if (offer) {
            queryParams.set('offer', offer);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get all available line offer compatible [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/line/offers#GET)
     */
    GetAllAvailableLineOfferCompatible(country) {
        let url = `/telephony/line/offers?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
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
    GetAllAvailableGeographicZoneWithSomeDetailsFromACountry(country, axiom) {
        let url = `/telephony/number/detailedZones?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        if (axiom) {
            queryParams.set('axiom', axiom);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get all available special range from a country [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/number/ranges#GET)
     */
    GetAllAvailableSpecialRangeFromACountry(country) {
        let url = `/telephony/number/ranges?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get all available specific number from a country [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/number/specificNumbers#GET)
     */
    GetAllAvailableSpecificNumberFromACountry(country, type, range, zone) {
        let url = `/telephony/number/specificNumbers?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        if (range) {
            queryParams.set('range', range);
        }
        if (zone) {
            queryParams.set('zone', zone);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get all available geographic zone from a country [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/number/zones#GET)
     */
    GetAllAvailableGeographicZoneFromACountry(country, axiom) {
        let url = `/telephony/number/zones?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        if (axiom) {
            queryParams.set('axiom', axiom);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Search a service with its domain, to get its billing account and type [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/searchServices#GET)
     */
    SearchAServiceWithItsDomainToGetItsBillingAccountAndType(axiom) {
        let url = `/telephony/searchServices?`;
        const queryParams = new query_params_1.default();
        if (axiom) {
            queryParams.set('axiom', axiom);
        }
        return this.client.request('GET', url + queryParams.toString());
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
    SoundsAttachedToThisTelephonyAccount() {
        let url = `/telephony/sounds`;
        return this.client.request('GET', url);
    }
    /**
     * List the telephony.Sound objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/sounds#POST)
     */
    CreateANewSound(filename, description) {
        let url = `/telephony/sounds`;
        return this.client.request('POST', url, { filename, description });
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
    DeleteTheSound(id) {
        let url = `/telephony/sounds/${id}`;
        return this.client.request('DELETE', url);
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
    DeleteTheSpareAsIfItWasNotBelongingToOVHAnymore(spare) {
        let url = `/telephony/spare/${spare}`;
        return this.client.request('DELETE', url);
    }
    /**
     * compatibleReplacement operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/spare/%7Bspare%7D/compatibleReplacement#GET)
     */
    ReturnTheListOfPhoneDomainsCompatibleToBeReplaced(spare) {
        let url = `/telephony/spare/${spare}/compatibleReplacement`;
        return this.client.request('GET', url);
    }
    /**
     * replace operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/telephony/spare/%7Bspare%7D/replace#POST)
     */
    ReplaceThePhoneByItsSpareTheBrokenPhoneBecameASpareIfItWasBoughtAnRMAIsCreatedIfTheBrokenPhoneIsUnderSecuritydeposit(domain, ip, spare) {
        let url = `/telephony/spare/${spare}/replace`;
        return this.client.request('POST', url, { domain, ip });
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
    GetAllAvailableSpareBrands() {
        let url = `/telephony/spare/brands`;
        return this.client.request('GET', url);
    }
}
exports.Telephony = Telephony;
//# sourceMappingURL=telephony.js.map