"use strict";
// GENERATED SDK for vps API
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
 * Ip versions
 */
var CoreTypesIpVersion;
(function (CoreTypesIpVersion) {
    CoreTypesIpVersion["V4"] = "v4";
    CoreTypesIpVersion["V6"] = "v6";
})(CoreTypesIpVersion = exports.CoreTypesIpVersion || (exports.CoreTypesIpVersion = {}));
/*
 * different task operation
 */
var DedicatedTaskFunction;
(function (DedicatedTaskFunction) {
    DedicatedTaskFunction["INFRA_002_VIRTUALNETWORKINTERFACE"] = "INFRA_002_VirtualNetworkInterface";
    DedicatedTaskFunction["ADDVIRTUALMAC"] = "addVirtualMac";
    DedicatedTaskFunction["ADDWINDOWSPLAFROMEXISTINGSERIAL"] = "addWindowSplaFromExistingSerial";
    DedicatedTaskFunction["APPLYBACKUPFTPACLS"] = "applyBackupFtpAcls";
    DedicatedTaskFunction["APPLYBACKUPFTPQUOTA"] = "applyBackupFtpQuota";
    DedicatedTaskFunction["BYPASSANTIDDOSGAME"] = "bypassAntiDDosGame";
    DedicatedTaskFunction["CHANGEPASSWORDBACKUPFTP"] = "changePasswordBackupFTP";
    DedicatedTaskFunction["CHANGERIPEORG"] = "changeRipeOrg";
    DedicatedTaskFunction["CHECKANDRELEASEIP"] = "checkAndReleaseIp";
    DedicatedTaskFunction["CREATEBACKUPFTP"] = "createBackupFTP";
    DedicatedTaskFunction["CREATEORUPDATERIPEORG"] = "createOrUpdateRipeOrg";
    DedicatedTaskFunction["CREATEPRIVATENETWORK"] = "createPrivateNetwork";
    DedicatedTaskFunction["DISABLEFIREWALL"] = "disableFirewall";
    DedicatedTaskFunction["ENABLEFIREWALL"] = "enableFirewall";
    DedicatedTaskFunction["GENERICMOVEFLOATINGIP"] = "genericMoveFloatingIp";
    DedicatedTaskFunction["HARDREBOOT"] = "hardReboot";
    DedicatedTaskFunction["MIGRATEBACKUPFTP"] = "migrateBackupFTP";
    DedicatedTaskFunction["MOVEFLOATINGIP"] = "moveFloatingIp";
    DedicatedTaskFunction["MOVEVIRTUALMAC"] = "moveVirtualMac";
    DedicatedTaskFunction["REBOOTPOWER8TO"] = "rebootPower8To";
    DedicatedTaskFunction["REINSTALLSERVER"] = "reinstallServer";
    DedicatedTaskFunction["RELEASEIP"] = "releaseIp";
    DedicatedTaskFunction["REMOVEBACKUPFTP"] = "removeBackupFTP";
    DedicatedTaskFunction["REMOVEVIRTUALMAC"] = "removeVirtualMac";
    DedicatedTaskFunction["REQUESTACCESSIPMI"] = "requestAccessIPMI";
    DedicatedTaskFunction["RESETIPMI"] = "resetIPMI";
    DedicatedTaskFunction["RESETIPMISESSION"] = "resetIPMISession";
    DedicatedTaskFunction["TESTIPMIHTTP"] = "testIPMIhttp";
    DedicatedTaskFunction["TESTIPMIPASSWORD"] = "testIPMIpassword";
    DedicatedTaskFunction["TESTIPMIPING"] = "testIPMIping";
    DedicatedTaskFunction["VIRTUALMACADD"] = "virtualMacAdd";
    DedicatedTaskFunction["VIRTUALMACDELETE"] = "virtualMacDelete";
})(DedicatedTaskFunction = exports.DedicatedTaskFunction || (exports.DedicatedTaskFunction = {}));
/*
 * different task status
 */
var DedicatedTaskStatus;
(function (DedicatedTaskStatus) {
    DedicatedTaskStatus["CANCELLED"] = "cancelled";
    DedicatedTaskStatus["CUSTOMERERROR"] = "customerError";
    DedicatedTaskStatus["DOING"] = "doing";
    DedicatedTaskStatus["DONE"] = "done";
    DedicatedTaskStatus["INIT"] = "init";
    DedicatedTaskStatus["OVHERROR"] = "ovhError";
    DedicatedTaskStatus["TODO"] = "todo";
})(DedicatedTaskStatus = exports.DedicatedTaskStatus || (exports.DedicatedTaskStatus = {}));
/*
 * Countries a nichandle can choose
 */
var NichandleCountry;
(function (NichandleCountry) {
    NichandleCountry["AC"] = "AC";
    NichandleCountry["AD"] = "AD";
    NichandleCountry["AE"] = "AE";
    NichandleCountry["AF"] = "AF";
    NichandleCountry["AG"] = "AG";
    NichandleCountry["AI"] = "AI";
    NichandleCountry["AL"] = "AL";
    NichandleCountry["AM"] = "AM";
    NichandleCountry["AO"] = "AO";
    NichandleCountry["AQ"] = "AQ";
    NichandleCountry["AR"] = "AR";
    NichandleCountry["AS"] = "AS";
    NichandleCountry["AT"] = "AT";
    NichandleCountry["AU"] = "AU";
    NichandleCountry["AW"] = "AW";
    NichandleCountry["AX"] = "AX";
    NichandleCountry["AZ"] = "AZ";
    NichandleCountry["BA"] = "BA";
    NichandleCountry["BB"] = "BB";
    NichandleCountry["BD"] = "BD";
    NichandleCountry["BE"] = "BE";
    NichandleCountry["BF"] = "BF";
    NichandleCountry["BG"] = "BG";
    NichandleCountry["BH"] = "BH";
    NichandleCountry["BI"] = "BI";
    NichandleCountry["BJ"] = "BJ";
    NichandleCountry["BL"] = "BL";
    NichandleCountry["BM"] = "BM";
    NichandleCountry["BN"] = "BN";
    NichandleCountry["BO"] = "BO";
    NichandleCountry["BQ"] = "BQ";
    NichandleCountry["BR"] = "BR";
    NichandleCountry["BS"] = "BS";
    NichandleCountry["BT"] = "BT";
    NichandleCountry["BW"] = "BW";
    NichandleCountry["BY"] = "BY";
    NichandleCountry["BZ"] = "BZ";
    NichandleCountry["CA"] = "CA";
    NichandleCountry["CC"] = "CC";
    NichandleCountry["CD"] = "CD";
    NichandleCountry["CF"] = "CF";
    NichandleCountry["CG"] = "CG";
    NichandleCountry["CH"] = "CH";
    NichandleCountry["CI"] = "CI";
    NichandleCountry["CK"] = "CK";
    NichandleCountry["CL"] = "CL";
    NichandleCountry["CM"] = "CM";
    NichandleCountry["CN"] = "CN";
    NichandleCountry["CO"] = "CO";
    NichandleCountry["CR"] = "CR";
    NichandleCountry["CU"] = "CU";
    NichandleCountry["CV"] = "CV";
    NichandleCountry["CW"] = "CW";
    NichandleCountry["CX"] = "CX";
    NichandleCountry["CY"] = "CY";
    NichandleCountry["CZ"] = "CZ";
    NichandleCountry["DE"] = "DE";
    NichandleCountry["DG"] = "DG";
    NichandleCountry["DJ"] = "DJ";
    NichandleCountry["DK"] = "DK";
    NichandleCountry["DM"] = "DM";
    NichandleCountry["DO"] = "DO";
    NichandleCountry["DZ"] = "DZ";
    NichandleCountry["EA"] = "EA";
    NichandleCountry["EC"] = "EC";
    NichandleCountry["EE"] = "EE";
    NichandleCountry["EG"] = "EG";
    NichandleCountry["EH"] = "EH";
    NichandleCountry["ER"] = "ER";
    NichandleCountry["ES"] = "ES";
    NichandleCountry["ET"] = "ET";
    NichandleCountry["FI"] = "FI";
    NichandleCountry["FJ"] = "FJ";
    NichandleCountry["FK"] = "FK";
    NichandleCountry["FM"] = "FM";
    NichandleCountry["FO"] = "FO";
    NichandleCountry["FR"] = "FR";
    NichandleCountry["GA"] = "GA";
    NichandleCountry["GB"] = "GB";
    NichandleCountry["GD"] = "GD";
    NichandleCountry["GE"] = "GE";
    NichandleCountry["GF"] = "GF";
    NichandleCountry["GG"] = "GG";
    NichandleCountry["GH"] = "GH";
    NichandleCountry["GI"] = "GI";
    NichandleCountry["GL"] = "GL";
    NichandleCountry["GM"] = "GM";
    NichandleCountry["GN"] = "GN";
    NichandleCountry["GP"] = "GP";
    NichandleCountry["GQ"] = "GQ";
    NichandleCountry["GR"] = "GR";
    NichandleCountry["GS"] = "GS";
    NichandleCountry["GT"] = "GT";
    NichandleCountry["GU"] = "GU";
    NichandleCountry["GW"] = "GW";
    NichandleCountry["GY"] = "GY";
    NichandleCountry["HK"] = "HK";
    NichandleCountry["HN"] = "HN";
    NichandleCountry["HR"] = "HR";
    NichandleCountry["HT"] = "HT";
    NichandleCountry["HU"] = "HU";
    NichandleCountry["IC"] = "IC";
    NichandleCountry["ID"] = "ID";
    NichandleCountry["IE"] = "IE";
    NichandleCountry["IL"] = "IL";
    NichandleCountry["IM"] = "IM";
    NichandleCountry["IN"] = "IN";
    NichandleCountry["IO"] = "IO";
    NichandleCountry["IQ"] = "IQ";
    NichandleCountry["IR"] = "IR";
    NichandleCountry["IS"] = "IS";
    NichandleCountry["IT"] = "IT";
    NichandleCountry["JE"] = "JE";
    NichandleCountry["JM"] = "JM";
    NichandleCountry["JO"] = "JO";
    NichandleCountry["JP"] = "JP";
    NichandleCountry["KE"] = "KE";
    NichandleCountry["KG"] = "KG";
    NichandleCountry["KH"] = "KH";
    NichandleCountry["KI"] = "KI";
    NichandleCountry["KM"] = "KM";
    NichandleCountry["KN"] = "KN";
    NichandleCountry["KP"] = "KP";
    NichandleCountry["KR"] = "KR";
    NichandleCountry["KW"] = "KW";
    NichandleCountry["KY"] = "KY";
    NichandleCountry["KZ"] = "KZ";
    NichandleCountry["LA"] = "LA";
    NichandleCountry["LB"] = "LB";
    NichandleCountry["LC"] = "LC";
    NichandleCountry["LI"] = "LI";
    NichandleCountry["LK"] = "LK";
    NichandleCountry["LR"] = "LR";
    NichandleCountry["LS"] = "LS";
    NichandleCountry["LT"] = "LT";
    NichandleCountry["LU"] = "LU";
    NichandleCountry["LV"] = "LV";
    NichandleCountry["LY"] = "LY";
    NichandleCountry["MA"] = "MA";
    NichandleCountry["MC"] = "MC";
    NichandleCountry["MD"] = "MD";
    NichandleCountry["ME"] = "ME";
    NichandleCountry["MF"] = "MF";
    NichandleCountry["MG"] = "MG";
    NichandleCountry["MH"] = "MH";
    NichandleCountry["MK"] = "MK";
    NichandleCountry["ML"] = "ML";
    NichandleCountry["MM"] = "MM";
    NichandleCountry["MN"] = "MN";
    NichandleCountry["MO"] = "MO";
    NichandleCountry["MP"] = "MP";
    NichandleCountry["MQ"] = "MQ";
    NichandleCountry["MR"] = "MR";
    NichandleCountry["MS"] = "MS";
    NichandleCountry["MT"] = "MT";
    NichandleCountry["MU"] = "MU";
    NichandleCountry["MV"] = "MV";
    NichandleCountry["MW"] = "MW";
    NichandleCountry["MX"] = "MX";
    NichandleCountry["MY"] = "MY";
    NichandleCountry["MZ"] = "MZ";
    NichandleCountry["NA"] = "NA";
    NichandleCountry["NC"] = "NC";
    NichandleCountry["NE"] = "NE";
    NichandleCountry["NF"] = "NF";
    NichandleCountry["NG"] = "NG";
    NichandleCountry["NI"] = "NI";
    NichandleCountry["NL"] = "NL";
    NichandleCountry["NO"] = "NO";
    NichandleCountry["NP"] = "NP";
    NichandleCountry["NR"] = "NR";
    NichandleCountry["NU"] = "NU";
    NichandleCountry["NZ"] = "NZ";
    NichandleCountry["OM"] = "OM";
    NichandleCountry["PA"] = "PA";
    NichandleCountry["PE"] = "PE";
    NichandleCountry["PF"] = "PF";
    NichandleCountry["PG"] = "PG";
    NichandleCountry["PH"] = "PH";
    NichandleCountry["PK"] = "PK";
    NichandleCountry["PL"] = "PL";
    NichandleCountry["PM"] = "PM";
    NichandleCountry["PN"] = "PN";
    NichandleCountry["PR"] = "PR";
    NichandleCountry["PS"] = "PS";
    NichandleCountry["PT"] = "PT";
    NichandleCountry["PW"] = "PW";
    NichandleCountry["PY"] = "PY";
    NichandleCountry["QA"] = "QA";
    NichandleCountry["RE"] = "RE";
    NichandleCountry["RO"] = "RO";
    NichandleCountry["RS"] = "RS";
    NichandleCountry["RU"] = "RU";
    NichandleCountry["RW"] = "RW";
    NichandleCountry["SA"] = "SA";
    NichandleCountry["SB"] = "SB";
    NichandleCountry["SC"] = "SC";
    NichandleCountry["SD"] = "SD";
    NichandleCountry["SE"] = "SE";
    NichandleCountry["SG"] = "SG";
    NichandleCountry["SH"] = "SH";
    NichandleCountry["SI"] = "SI";
    NichandleCountry["SJ"] = "SJ";
    NichandleCountry["SK"] = "SK";
    NichandleCountry["SL"] = "SL";
    NichandleCountry["SM"] = "SM";
    NichandleCountry["SN"] = "SN";
    NichandleCountry["SO"] = "SO";
    NichandleCountry["SR"] = "SR";
    NichandleCountry["SS"] = "SS";
    NichandleCountry["ST"] = "ST";
    NichandleCountry["SV"] = "SV";
    NichandleCountry["SX"] = "SX";
    NichandleCountry["SY"] = "SY";
    NichandleCountry["SZ"] = "SZ";
    NichandleCountry["TA"] = "TA";
    NichandleCountry["TC"] = "TC";
    NichandleCountry["TD"] = "TD";
    NichandleCountry["TF"] = "TF";
    NichandleCountry["TG"] = "TG";
    NichandleCountry["TH"] = "TH";
    NichandleCountry["TJ"] = "TJ";
    NichandleCountry["TK"] = "TK";
    NichandleCountry["TL"] = "TL";
    NichandleCountry["TM"] = "TM";
    NichandleCountry["TN"] = "TN";
    NichandleCountry["TO"] = "TO";
    NichandleCountry["TR"] = "TR";
    NichandleCountry["TT"] = "TT";
    NichandleCountry["TV"] = "TV";
    NichandleCountry["TW"] = "TW";
    NichandleCountry["TZ"] = "TZ";
    NichandleCountry["UA"] = "UA";
    NichandleCountry["UG"] = "UG";
    NichandleCountry["UM"] = "UM";
    NichandleCountry["UNKNOWN"] = "UNKNOWN";
    NichandleCountry["US"] = "US";
    NichandleCountry["UY"] = "UY";
    NichandleCountry["UZ"] = "UZ";
    NichandleCountry["VA"] = "VA";
    NichandleCountry["VC"] = "VC";
    NichandleCountry["VE"] = "VE";
    NichandleCountry["VG"] = "VG";
    NichandleCountry["VI"] = "VI";
    NichandleCountry["VN"] = "VN";
    NichandleCountry["VU"] = "VU";
    NichandleCountry["WF"] = "WF";
    NichandleCountry["WS"] = "WS";
    NichandleCountry["XK"] = "XK";
    NichandleCountry["YE"] = "YE";
    NichandleCountry["YT"] = "YT";
    NichandleCountry["ZA"] = "ZA";
    NichandleCountry["ZM"] = "ZM";
    NichandleCountry["ZW"] = "ZW";
})(NichandleCountry = exports.NichandleCountry || (exports.NichandleCountry = {}));
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
 * All future uses you can provide for a service termination
 */
var ServiceTerminationFutureUse;
(function (ServiceTerminationFutureUse) {
    ServiceTerminationFutureUse["NOT_REPLACING_SERVICE"] = "NOT_REPLACING_SERVICE";
    ServiceTerminationFutureUse["OTHER"] = "OTHER";
    ServiceTerminationFutureUse["SUBSCRIBE_AN_OTHER_SERVICE"] = "SUBSCRIBE_AN_OTHER_SERVICE";
    ServiceTerminationFutureUse["SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR"] = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR";
    ServiceTerminationFutureUse["SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"] = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
})(ServiceTerminationFutureUse = exports.ServiceTerminationFutureUse || (exports.ServiceTerminationFutureUse = {}));
/*
 * All reasons you can provide for a service termination
 */
var ServiceTerminationReason;
(function (ServiceTerminationReason) {
    ServiceTerminationReason["FEATURES_DONT_SUIT_ME"] = "FEATURES_DONT_SUIT_ME";
    ServiceTerminationReason["LACK_OF_PERFORMANCES"] = "LACK_OF_PERFORMANCES";
    ServiceTerminationReason["MIGRATED_TO_ANOTHER_OVH_PRODUCT"] = "MIGRATED_TO_ANOTHER_OVH_PRODUCT";
    ServiceTerminationReason["MIGRATED_TO_COMPETITOR"] = "MIGRATED_TO_COMPETITOR";
    ServiceTerminationReason["NOT_ENOUGH_RECOGNITION"] = "NOT_ENOUGH_RECOGNITION";
    ServiceTerminationReason["NOT_NEEDED_ANYMORE"] = "NOT_NEEDED_ANYMORE";
    ServiceTerminationReason["NOT_RELIABLE"] = "NOT_RELIABLE";
    ServiceTerminationReason["NO_ANSWER"] = "NO_ANSWER";
    ServiceTerminationReason["OTHER"] = "OTHER";
    ServiceTerminationReason["PRODUCT_DIMENSION_DONT_SUIT_ME"] = "PRODUCT_DIMENSION_DONT_SUIT_ME";
    ServiceTerminationReason["PRODUCT_TOOLS_DONT_SUIT_ME"] = "PRODUCT_TOOLS_DONT_SUIT_ME";
    ServiceTerminationReason["TOO_EXPENSIVE"] = "TOO_EXPENSIVE";
    ServiceTerminationReason["TOO_HARD_TO_USE"] = "TOO_HARD_TO_USE";
    ServiceTerminationReason["UNSATIFIED_BY_CUSTOMER_SUPPORT"] = "UNSATIFIED_BY_CUSTOMER_SUPPORT";
})(ServiceTerminationReason = exports.ServiceTerminationReason || (exports.ServiceTerminationReason = {}));
/*
 * Available AutomatedBackup states
 */
var VpsBackupState;
(function (VpsBackupState) {
    VpsBackupState["DISABLED"] = "disabled";
    VpsBackupState["ENABLED"] = "enabled";
})(VpsBackupState = exports.VpsBackupState || (exports.VpsBackupState = {}));
/*
 * Possible states the disk can be in
 */
var VpsdiskState;
(function (VpsdiskState) {
    VpsdiskState["CONNECTED"] = "connected";
    VpsdiskState["DISCONNECTED"] = "disconnected";
    VpsdiskState["PENDING"] = "pending";
})(VpsdiskState = exports.VpsdiskState || (exports.VpsdiskState = {}));
/*
 * Available types for the Disk monitoring and use
 */
var VpsdiskStatisticType;
(function (VpsdiskStatisticType) {
    VpsdiskStatisticType["MAX"] = "max";
    VpsdiskStatisticType["USED"] = "used";
})(VpsdiskStatisticType = exports.VpsdiskStatisticType || (exports.VpsdiskStatisticType = {}));
/*
 * Possible type a disk can be in
 */
var VpsdiskType;
(function (VpsdiskType) {
    VpsdiskType["ADDITIONAL"] = "additional";
    VpsdiskType["PRIMARY"] = "primary";
})(VpsdiskType = exports.VpsdiskType || (exports.VpsdiskType = {}));
/*
 * Geolocation of the IP Address
 */
var VpsipGeolocation;
(function (VpsipGeolocation) {
    VpsipGeolocation["AU"] = "au";
    VpsipGeolocation["BE"] = "be";
    VpsipGeolocation["CA"] = "ca";
    VpsipGeolocation["CZ"] = "cz";
    VpsipGeolocation["DE"] = "de";
    VpsipGeolocation["ES"] = "es";
    VpsipGeolocation["FI"] = "fi";
    VpsipGeolocation["FR"] = "fr";
    VpsipGeolocation["IE"] = "ie";
    VpsipGeolocation["IT"] = "it";
    VpsipGeolocation["LT"] = "lt";
    VpsipGeolocation["NL"] = "nl";
    VpsipGeolocation["PL"] = "pl";
    VpsipGeolocation["PT"] = "pt";
    VpsipGeolocation["SG"] = "sg";
    VpsipGeolocation["UK"] = "uk";
    VpsipGeolocation["US"] = "us";
})(VpsipGeolocation = exports.VpsipGeolocation || (exports.VpsipGeolocation = {}));
/*
 * Possible states of a service (ping, port)
 */
var VpsipServiceStatusState;
(function (VpsipServiceStatusState) {
    VpsipServiceStatusState["DOWN"] = "down";
    VpsipServiceStatusState["UP"] = "up";
})(VpsipServiceStatusState = exports.VpsipServiceStatusState || (exports.VpsipServiceStatusState = {}));
/*
 * Ip types on a VPS
 */
var VpsipType;
(function (VpsipType) {
    VpsipType["ADDITIONAL"] = "additional";
    VpsipType["PRIMARY"] = "primary";
})(VpsipType = exports.VpsipType || (exports.VpsipType = {}));
/*
 * Available restore state
 */
var VpsRestoreState;
(function (VpsRestoreState) {
    VpsRestoreState["AVAILABLE"] = "available";
    VpsRestoreState["RESTORED"] = "restored";
    VpsRestoreState["RESTORING"] = "restoring";
})(VpsRestoreState = exports.VpsRestoreState || (exports.VpsRestoreState = {}));
/*
 * Available restore types
 */
var VpsRestoreType;
(function (VpsRestoreType) {
    VpsRestoreType["FILE"] = "file";
    VpsRestoreType["FULL"] = "full";
})(VpsRestoreType = exports.VpsRestoreType || (exports.VpsRestoreType = {}));
/*
 * Available Status for a vps Software
 */
var VpsSoftwareStatus;
(function (VpsSoftwareStatus) {
    VpsSoftwareStatus["DEPRECATED"] = "deprecated";
    VpsSoftwareStatus["STABLE"] = "stable";
    VpsSoftwareStatus["TESTING"] = "testing";
})(VpsSoftwareStatus = exports.VpsSoftwareStatus || (exports.VpsSoftwareStatus = {}));
/*
 * Available Type for a vps Software
 */
var VpsSoftwareType;
(function (VpsSoftwareType) {
    VpsSoftwareType["DATABASE"] = "database";
    VpsSoftwareType["ENVIRONMENT"] = "environment";
    VpsSoftwareType["WEBSERVER"] = "webserver";
})(VpsSoftwareType = exports.VpsSoftwareType || (exports.VpsSoftwareType = {}));
/*
 * All states a VPS task can be in
 */
var VpsTaskState;
(function (VpsTaskState) {
    VpsTaskState["BLOCKED"] = "blocked";
    VpsTaskState["CANCELLED"] = "cancelled";
    VpsTaskState["DOING"] = "doing";
    VpsTaskState["DONE"] = "done";
    VpsTaskState["ERROR"] = "error";
    VpsTaskState["PAUSED"] = "paused";
    VpsTaskState["TODO"] = "todo";
    VpsTaskState["WAITINGACK"] = "waitingAck";
})(VpsTaskState = exports.VpsTaskState || (exports.VpsTaskState = {}));
/*
 * All type a VPS task can be
 */
var VpsTaskType;
(function (VpsTaskType) {
    VpsTaskType["ADDVEEAMBACKUPJOB"] = "addVeeamBackupJob";
    VpsTaskType["CHANGEROOTPASSWORD"] = "changeRootPassword";
    VpsTaskType["CREATESNAPSHOT"] = "createSnapshot";
    VpsTaskType["DELETESNAPSHOT"] = "deleteSnapshot";
    VpsTaskType["DELIVERVM"] = "deliverVm";
    VpsTaskType["GETCONSOLEURL"] = "getConsoleUrl";
    VpsTaskType["INTERNALTASK"] = "internalTask";
    VpsTaskType["OPENCONSOLEACCESS"] = "openConsoleAccess";
    VpsTaskType["PROVISIONINGADDITIONALIP"] = "provisioningAdditionalIp";
    VpsTaskType["REOPENVM"] = "reOpenVm";
    VpsTaskType["REBOOTVM"] = "rebootVm";
    VpsTaskType["REINSTALLVM"] = "reinstallVm";
    VpsTaskType["REMOVEVEEAMBACKUP"] = "removeVeeamBackup";
    VpsTaskType["RESTOREFULLVEEAMBACKUP"] = "restoreFullVeeamBackup";
    VpsTaskType["RESTOREVEEAMBACKUP"] = "restoreVeeamBackup";
    VpsTaskType["RESTOREVM"] = "restoreVm";
    VpsTaskType["REVERTSNAPSHOT"] = "revertSnapshot";
    VpsTaskType["SETMONITORING"] = "setMonitoring";
    VpsTaskType["SETNETBOOT"] = "setNetboot";
    VpsTaskType["STARTVM"] = "startVm";
    VpsTaskType["STOPVM"] = "stopVm";
    VpsTaskType["UPGRADEVM"] = "upgradeVm";
})(VpsTaskType = exports.VpsTaskType || (exports.VpsTaskType = {}));
/*
 * A structure describing a Veeam backup's export options
 */
var VpsveeamExportType;
(function (VpsveeamExportType) {
    VpsveeamExportType["NFS"] = "nfs";
    VpsveeamExportType["SMB"] = "smb";
})(VpsveeamExportType = exports.VpsveeamExportType || (exports.VpsveeamExportType = {}));
/*
 * A structure describing a Veeam restored backup's state
 */
var VpsveeamState;
(function (VpsveeamState) {
    VpsveeamState["MOUNTED"] = "mounted";
    VpsveeamState["RESTORING"] = "restoring";
    VpsveeamState["UNMOUNTED"] = "unmounted";
    VpsveeamState["UNMOUNTING"] = "unmounting";
})(VpsveeamState = exports.VpsveeamState || (exports.VpsveeamState = {}));
/*
 * All supported VNC protocols by VPS
 */
var VpsVncProtocol;
(function (VpsVncProtocol) {
    VpsVncProtocol["VNC"] = "VNC";
    VpsVncProtocol["VNCOVERWEBSOCKET"] = "VNCOverWebSocket";
})(VpsVncProtocol = exports.VpsVncProtocol || (exports.VpsVncProtocol = {}));
/*
 * All values keymap can be in
 */
var VpsVpsKeymap;
(function (VpsVpsKeymap) {
    VpsVpsKeymap["FR"] = "fr";
    VpsVpsKeymap["US"] = "us";
})(VpsVpsKeymap = exports.VpsVpsKeymap || (exports.VpsVpsKeymap = {}));
/*
 * Available periods for the VPS monitoring
 */
var VpsVpsMonitoringPeriod;
(function (VpsVpsMonitoringPeriod) {
    VpsVpsMonitoringPeriod["LASTDAY"] = "lastday";
    VpsVpsMonitoringPeriod["LASTMONTH"] = "lastmonth";
    VpsVpsMonitoringPeriod["LASTWEEK"] = "lastweek";
    VpsVpsMonitoringPeriod["LASTYEAR"] = "lastyear";
    VpsVpsMonitoringPeriod["TODAY"] = "today";
})(VpsVpsMonitoringPeriod = exports.VpsVpsMonitoringPeriod || (exports.VpsVpsMonitoringPeriod = {}));
/*
 * All values a VPS netboot mode can be in
 */
var VpsVpsNetboot;
(function (VpsVpsNetboot) {
    VpsVpsNetboot["LOCAL"] = "local";
    VpsVpsNetboot["RESCUE"] = "rescue";
})(VpsVpsNetboot = exports.VpsVpsNetboot || (exports.VpsVpsNetboot = {}));
/*
 * All offers a VPS can have
 */
var VpsVpsOffer;
(function (VpsVpsOffer) {
    VpsVpsOffer["BETA_CLASSIC"] = "beta-classic";
    VpsVpsOffer["CLASSIC"] = "classic";
    VpsVpsOffer["CLOUD"] = "cloud";
    VpsVpsOffer["CLOUDRAM"] = "cloudram";
    VpsVpsOffer["GAME_CLASSIC"] = "game-classic";
    VpsVpsOffer["LOWLAT"] = "lowlat";
    VpsVpsOffer["SSD"] = "ssd";
})(VpsVpsOffer = exports.VpsVpsOffer || (exports.VpsVpsOffer = {}));
/*
 * All options a VPS can have
 */
var VpsVpsOption;
(function (VpsVpsOption) {
    VpsVpsOption["ADDITIONALDISK"] = "additionalDisk";
    VpsVpsOption["AUTOMATEDBACKUP"] = "automatedBackup";
    VpsVpsOption["CPANEL"] = "cpanel";
    VpsVpsOption["FTPBACKUP"] = "ftpbackup";
    VpsVpsOption["PLESK"] = "plesk";
    VpsVpsOption["SNAPSHOT"] = "snapshot";
    VpsVpsOption["VEEAM"] = "veeam";
    VpsVpsOption["WINDOWS"] = "windows";
})(VpsVpsOption = exports.VpsVpsOption || (exports.VpsVpsOption = {}));
/*
 * All states a VPS Option can be in
 */
var VpsVpsOptionState;
(function (VpsVpsOptionState) {
    VpsVpsOptionState["RELEASED"] = "released";
    VpsVpsOptionState["SUBSCRIBED"] = "subscribed";
})(VpsVpsOptionState = exports.VpsVpsOptionState || (exports.VpsVpsOptionState = {}));
/*
 * All states a VPS can be in
 */
var VpsVpsState;
(function (VpsVpsState) {
    VpsVpsState["INSTALLING"] = "installing";
    VpsVpsState["MAINTENANCE"] = "maintenance";
    VpsVpsState["REBOOTING"] = "rebooting";
    VpsVpsState["RUNNING"] = "running";
    VpsVpsState["STOPPED"] = "stopped";
    VpsVpsState["STOPPING"] = "stopping";
    VpsVpsState["UPGRADING"] = "upgrading";
})(VpsVpsState = exports.VpsVpsState || (exports.VpsVpsState = {}));
/*
 * Available types for the VPS monitoring and use
 */
var VpsVpsStatisticType;
(function (VpsVpsStatisticType) {
    VpsVpsStatisticType["CPU_IOWAIT"] = "cpu:iowait";
    VpsVpsStatisticType["CPU_MAX"] = "cpu:max";
    VpsVpsStatisticType["CPU_NICE"] = "cpu:nice";
    VpsVpsStatisticType["CPU_SYS"] = "cpu:sys";
    VpsVpsStatisticType["CPU_USED"] = "cpu:used";
    VpsVpsStatisticType["CPU_USER"] = "cpu:user";
    VpsVpsStatisticType["MEM_MAX"] = "mem:max";
    VpsVpsStatisticType["MEM_USED"] = "mem:used";
    VpsVpsStatisticType["NET_RX"] = "net:rx";
    VpsVpsStatisticType["NET_TX"] = "net:tx";
})(VpsVpsStatisticType = exports.VpsVpsStatisticType || (exports.VpsVpsStatisticType = {}));
class Vps {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the VPS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps#GET)
     */
    ListAvailableServices() {
        let url = `/vps`;
        return this.client.request('GET', url);
    }
    /**
     * VPS Virtual Machine [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/vps/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * VPS Virtual Machine [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/vps/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * activeOptions operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/activeOptions#GET)
     */
    ReturnAllActiveOptionsForTheVirtualServer(serviceName) {
        let url = `/vps/${serviceName}/activeOptions`;
        return this.client.request('GET', url);
    }
    /**
     * Backup your VPS [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/automatedBackup#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<VpsAutomatedBackup> {
      let url = `/vps/${serviceName}/automatedBackup`
  
      return this.client.request<VpsAutomatedBackup>('GET', url)
    }
    */
    /**
     * attachedBackup operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/automatedBackup/attachedBackup#GET)
     */
    BackupAttachedToYourVPS(serviceName) {
        let url = `/vps/${serviceName}/automatedBackup/attachedBackup`;
        return this.client.request('GET', url);
    }
    /**
     * detachBackup operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/automatedBackup/detachBackup#POST)
     */
    CreateAVPSTaskThatWillUmountARestoredBackupOnYourVPS(restorePoint, serviceName) {
        let url = `/vps/${serviceName}/automatedBackup/detachBackup`;
        return this.client.request('POST', url, { restorePoint });
    }
    /**
     * restore operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/automatedBackup/restore#POST)
     */
    CreatesAVPSTaskThatWillRestoreTheGivenRestorePoint(restorePoint, serviceName, type, changePassword) {
        let url = `/vps/${serviceName}/automatedBackup/restore`;
        return this.client.request('POST', url, { restorePoint, type, changePassword });
    }
    /**
     * restorePoints operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/automatedBackup/restorePoints#GET)
     */
    GetAvailableRestorePoints(serviceName, state) {
        let url = `/vps/${serviceName}/automatedBackup/restorePoints?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * availableUpgrade operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/availableUpgrade#GET)
     */
    ReturnAllModelsTheVirtualServerCanBeUpgradedTo(serviceName) {
        let url = `/vps/${serviceName}/availableUpgrade`;
        return this.client.request('GET', url);
    }
    /**
     * Backup Ftp assigned to this VPS [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<VpsBackupFtp> {
      let url = `/vps/${serviceName}/backupftp`
  
      return this.client.request<VpsBackupFtp>('GET', url)
    }
    */
    /**
     * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/access#GET)
     */
    ListOfIPBlocksAndProtocolsToAllowOnTheseBlocksAuthorizedOnYourBackupFTP(serviceName) {
        let url = `/vps/${serviceName}/backupftp/access`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/access#POST)
     */
    CreateANewBackupFTPACL(cifs, ipBlock, nfs, serviceName, ftp) {
        let url = `/vps/${serviceName}/backupftp/access`;
        return this.client.request('POST', url, { cifs, ipBlock, nfs, ftp });
    }
    /**
     * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/access/%7BipBlock%7D#GET)
     */
    /*
    GetThisObjectProperties(ipBlock: string, serviceName: string): Promise<DedicatedserverBackupFtpAcl> {
      let url = `/vps/${serviceName}/backupftp/access/${ipBlock}`
  
      return this.client.request<DedicatedserverBackupFtpAcl>('GET', url)
    }
    */
    /**
     * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/access/%7BipBlock%7D#PUT)
     */
    /*
    AlterThisObjectProperties(ipBlock: string, serviceName: string, payload: DedicatedserverBackupFtpAcl): Promise<void> {
      let url = `/vps/${serviceName}/backupftp/access/${ipBlock}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/access/%7BipBlock%7D#DELETE)
     */
    RevokeThisACL(ipBlock, serviceName) {
        let url = `/vps/${serviceName}/backupftp/access/${ipBlock}`;
        return this.client.request('DELETE', url);
    }
    /**
     * authorizableBlocks operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/authorizableBlocks#GET)
     */
    GetAllIPBlocksThatCanBeUsedInTheACL(serviceName) {
        let url = `/vps/${serviceName}/backupftp/authorizableBlocks`;
        return this.client.request('GET', url);
    }
    /**
     * password operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/backupftp/password#POST)
     */
    ChangeYourBackupFTPPassword(serviceName) {
        let url = `/vps/${serviceName}/backupftp/password`;
        return this.client.request('POST', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/vps/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/vps/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * createSnapshot operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/createSnapshot#POST)
     */
    CreateASnapshotOfTheVirtualServerIfTheSnapshotOptionIsEnabledAndIfThereIsNoExistingSnapshot(serviceName, description) {
        let url = `/vps/${serviceName}/createSnapshot`;
        return this.client.request('POST', url, { description });
    }
    /**
     * Information about a datacenter of a VPS Virtual Machine [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/datacenter#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<VpsDatacenter> {
      let url = `/vps/${serviceName}/datacenter`
  
      return this.client.request<VpsDatacenter>('GET', url)
    }
    */
    /**
     * List the vps.Disk objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/disks#GET)
     */
    DisksAssociatedToThisVirtualServer(serviceName) {
        let url = `/vps/${serviceName}/disks`;
        return this.client.request('GET', url);
    }
    /**
     * Information about a disk of a VPS Virtual Machine [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/disks/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<VpsDisk> {
      let url = `/vps/${serviceName}/disks/${id}`
  
      return this.client.request<VpsDisk>('GET', url)
    }
    */
    /**
     * Information about a disk of a VPS Virtual Machine [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/disks/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, serviceName: string, payload: VpsDisk): Promise<void> {
      let url = `/vps/${serviceName}/disks/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * monitoring operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/disks/%7Bid%7D/monitoring#GET)
     */
    ReturnManyStatisticsAboutTheDiskForAGivenPeriod(id, period, serviceName, type) {
        let url = `/vps/${serviceName}/disks/${id}/monitoring?`;
        const queryParams = new query_params_1.default();
        if (period) {
            queryParams.set('period', period.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * use operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/disks/%7Bid%7D/use#GET)
     */
    ReturnManyStatisticsAboutTheDiskAtThatTime(id, serviceName, type) {
        let url = `/vps/${serviceName}/disks/${id}/use?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Installation template for a VPS Virtual Machine [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/distribution#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<VpsTemplate> {
      let url = `/vps/${serviceName}/distribution`
  
      return this.client.request<VpsTemplate>('GET', url)
    }
    */
    /**
     * List the vps.Software objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/distribution/software#GET)
     */
    ListAvailableSoftwaresForThisTemplateId(serviceName) {
        let url = `/vps/${serviceName}/distribution/software`;
        return this.client.request('GET', url);
    }
    /**
     * Available softwares on a Template [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/distribution/software/%7BsoftwareId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, softwareId: number): Promise<VpsSoftware> {
      let url = `/vps/${serviceName}/distribution/software/${softwareId}`
  
      return this.client.request<VpsSoftware>('GET', url)
    }
    */
    /**
     * getConsoleUrl operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/getConsoleUrl#POST)
     */
    ReturnTheVPSConsoleURL(serviceName) {
        let url = `/vps/${serviceName}/getConsoleUrl`;
        return this.client.request('POST', url);
    }
    /**
     * ipCountryAvailable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/ipCountryAvailable#GET)
     */
    GetTheCountriesYouCanSelectForYourIPsGeolocation(serviceName) {
        let url = `/vps/${serviceName}/ipCountryAvailable`;
        return this.client.request('GET', url);
    }
    /**
     * List the vps.Ip objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/ips#GET)
     */
    IpsAssociatedToThisVirtualServer(serviceName) {
        let url = `/vps/${serviceName}/ips`;
        return this.client.request('GET', url);
    }
    /**
     * Information about an IP address for a VPS Virtual Machine [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/ips/%7BipAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(ipAddress: string, serviceName: string): Promise<VpsIp> {
      let url = `/vps/${serviceName}/ips/${ipAddress}`
  
      return this.client.request<VpsIp>('GET', url)
    }
    */
    /**
     * Information about an IP address for a VPS Virtual Machine [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/ips/%7BipAddress%7D#PUT)
     */
    /*
    AlterThisObjectProperties(ipAddress: string, serviceName: string, payload: VpsIp): Promise<void> {
      let url = `/vps/${serviceName}/ips/${ipAddress}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Information about an IP address for a VPS Virtual Machine [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/ips/%7BipAddress%7D#DELETE)
     */
    ReleaseAGivenIpAdditionalIp(ipAddress, serviceName) {
        let url = `/vps/${serviceName}/ips/${ipAddress}`;
        return this.client.request('DELETE', url);
    }
    /**
     * models operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/models#GET)
     */
    ReturnAllModelsForTheRangeOfTheVirtualServer(serviceName) {
        let url = `/vps/${serviceName}/models`;
        return this.client.request('GET', url);
    }
    /**
     * monitoring operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/monitoring#GET)
     */
    ReturnManyStatisticsAboutTheVirtualMachineForAGivenPeriod(period, serviceName, type) {
        let url = `/vps/${serviceName}/monitoring?`;
        const queryParams = new query_params_1.default();
        if (period) {
            queryParams.set('period', period.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * openConsoleAccess operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/openConsoleAccess#POST)
     */
    ReturnTheNecessaryInformationsToOpenAVNCConnectionToYourVPS(serviceName, protocol) {
        let url = `/vps/${serviceName}/openConsoleAccess`;
        return this.client.request('POST', url, { protocol });
    }
    /**
     * List the vps.Option objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/option#GET)
     */
    ListOfVPSOptions(serviceName) {
        let url = `/vps/${serviceName}/option`;
        return this.client.request('GET', url);
    }
    /**
     * Information about the options of a VPS Virtual Machine [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/option/%7Boption%7D#GET)
     */
    /*
    GetThisObjectProperties(option: VpsVpsOption, serviceName: string): Promise<VpsOption> {
      let url = `/vps/${serviceName}/option/${option}`
  
      return this.client.request<VpsOption>('GET', url)
    }
    */
    /**
     * Information about the options of a VPS Virtual Machine [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/option/%7Boption%7D#DELETE)
     */
    ReleaseAGivenOption(option, serviceName, deleteNow) {
        let url = `/vps/${serviceName}/option/${option}?`;
        const queryParams = new query_params_1.default();
        if (deleteNow) {
            queryParams.set('deleteNow', deleteNow.toString());
        }
        return this.client.request('DELETE', url + queryParams.toString());
    }
    /**
     * reboot operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/reboot#POST)
     */
    RequestARebootOfTheMachine(serviceName) {
        let url = `/vps/${serviceName}/reboot`;
        return this.client.request('POST', url);
    }
    /**
     * reinstall operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/reinstall#POST)
     */
    ReinstallTheVirtualServer(serviceName, templateId, doNotSendPassword, language, softwareId, sshKey) {
        let url = `/vps/${serviceName}/reinstall`;
        return this.client.request('POST', url, { templateId, doNotSendPassword, language, softwareId, sshKey });
    }
    /**
     * List the secondaryDns.SecondaryDNS objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains#GET)
     */
    ListOfSecondaryDnsDomainName(serviceName) {
        let url = `/vps/${serviceName}/secondaryDnsDomains`;
        return this.client.request('GET', url);
    }
    /**
     * List the secondaryDns.SecondaryDNS objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains#POST)
     */
    AddADomainOnSecondaryDns(domain, serviceName, ip) {
        let url = `/vps/${serviceName}/secondaryDnsDomains`;
        return this.client.request('POST', url, { domain, ip });
    }
    /**
     * Secondary dns infos [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, serviceName: string): Promise<SecondaryDnsSecondaryDNS> {
      let url = `/vps/${serviceName}/secondaryDnsDomains/${domain}`
  
      return this.client.request<SecondaryDnsSecondaryDNS>('GET', url)
    }
    */
    /**
     * Secondary dns infos [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#PUT)
     */
    /*
    AlterThisObjectProperties(domain: string, serviceName: string, payload: SecondaryDnsSecondaryDNS): Promise<void> {
      let url = `/vps/${serviceName}/secondaryDnsDomains/${domain}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Secondary dns infos [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#DELETE)
     */
    RemoveThisDomain(domain, serviceName) {
        let url = `/vps/${serviceName}/secondaryDnsDomains/${domain}`;
        return this.client.request('DELETE', url);
    }
    /**
     * dnsServer operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D/dnsServer#GET)
     */
    DomainNameServerInformations(domain, serviceName) {
        let url = `/vps/${serviceName}/secondaryDnsDomains/${domain}/dnsServer`;
        return this.client.request('GET', url);
    }
    /**
     * secondaryDnsNameServerAvailable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/secondaryDnsNameServerAvailable#GET)
     */
    SecondaryNameServerAvailableForYourServer(serviceName) {
        let url = `/vps/${serviceName}/secondaryDnsNameServerAvailable`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/vps/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/vps/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * setPassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/setPassword#POST)
     */
    StartTheProcessInOrderToSetTheRootPasswordOfTheVirtualMachineBeCarefulInCaseOfCloudModelARebootIsMandatory(serviceName) {
        let url = `/vps/${serviceName}/setPassword`;
        return this.client.request('POST', url);
    }
    /**
     * Information about the snapshot of a VPS Virtual Machine [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/snapshot#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<VpsSnapshot> {
      let url = `/vps/${serviceName}/snapshot`
  
      return this.client.request<VpsSnapshot>('GET', url)
    }
    */
    /**
     * Information about the snapshot of a VPS Virtual Machine [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/snapshot#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: VpsSnapshot): Promise<void> {
      let url = `/vps/${serviceName}/snapshot`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Information about the snapshot of a VPS Virtual Machine [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/snapshot#DELETE)
     */
    CreatesAVpsTaskThatWillDeleteTheSnapshot(serviceName) {
        let url = `/vps/${serviceName}/snapshot`;
        return this.client.request('DELETE', url);
    }
    /**
     * revert operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/snapshot/revert#POST)
     */
    RevertTheVirtualServerToThisSnapshot(serviceName) {
        let url = `/vps/${serviceName}/snapshot/revert`;
        return this.client.request('POST', url);
    }
    /**
     * start operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/start#POST)
     */
    RequestTheMachineToStart(serviceName) {
        let url = `/vps/${serviceName}/start`;
        return this.client.request('POST', url);
    }
    /**
     * status operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/status#GET)
     */
    GiveTheStatusOfTheServicesOfTheMainIP(serviceName) {
        let url = `/vps/${serviceName}/status`;
        return this.client.request('GET', url);
    }
    /**
     * stop operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/stop#POST)
     */
    RequestTheMachineToStop(serviceName) {
        let url = `/vps/${serviceName}/stop`;
        return this.client.request('POST', url);
    }
    /**
     * List the vps.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/tasks#GET)
     */
    TasksAssociatedToThisVirtualServer(serviceName, state, type) {
        let url = `/vps/${serviceName}/tasks?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation on a VPS Virtual Machine [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/tasks/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<VpsTask> {
      let url = `/vps/${serviceName}/tasks/${id}`
  
      return this.client.request<VpsTask>('GET', url)
    }
    */
    /**
     * List the vps.Template objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/templates#GET)
     */
    TemplatesAvailableForThisVirtualServer(serviceName) {
        let url = `/vps/${serviceName}/templates`;
        return this.client.request('GET', url);
    }
    /**
     * Installation template for a VPS Virtual Machine [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/templates/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<VpsTemplate> {
      let url = `/vps/${serviceName}/templates/${id}`
  
      return this.client.request<VpsTemplate>('GET', url)
    }
    */
    /**
     * List the vps.Software objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/templates/%7Bid%7D/software#GET)
     */
    /*
    ListAvailableSoftwaresForThisTemplateId(id: number, serviceName: string): Promise<number[]> {
      let url = `/vps/${serviceName}/templates/${id}/software`
  
      return this.client.request<number[]>('GET', url)
    }
    */
    /**
     * Available softwares on a Template [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/templates/%7Bid%7D/software/%7BsoftwareId%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string, softwareId: number): Promise<VpsSoftware> {
      let url = `/vps/${serviceName}/templates/${id}/software/${softwareId}`
  
      return this.client.request<VpsSoftware>('GET', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/vps/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * use operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/use#GET)
     */
    ReturnManyStatisticsAboutTheVirtualMachineAtThatTime(serviceName, type) {
        let url = `/vps/${serviceName}/use?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Informations about a VPS Veeam backups [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<VpsVeeam> {
      let url = `/vps/${serviceName}/veeam`
  
      return this.client.request<VpsVeeam>('GET', url)
    }
    */
    /**
     * Currently restored backup [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam/restoredBackup#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<VpsveeamRestoredBackup> {
      let url = `/vps/${serviceName}/veeam/restoredBackup`
  
      return this.client.request<VpsveeamRestoredBackup>('GET', url)
    }
    */
    /**
     * Currently restored backup [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam/restoredBackup#DELETE)
     */
    CreatesAVPSTaskThatWillUnmountTheBackup(serviceName) {
        let url = `/vps/${serviceName}/veeam/restoredBackup`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the vps.veeam.RestorePoint objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam/restorePoints#GET)
     */
    VeeamRestorePointsForTheVPS(serviceName, creationTime) {
        let url = `/vps/${serviceName}/veeam/restorePoints?`;
        const queryParams = new query_params_1.default();
        if (creationTime) {
            queryParams.set('creationTime', creationTime.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Informations about a VPS Veeam restore points [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam/restorePoints/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<VpsveeamRestorePoint> {
      let url = `/vps/${serviceName}/veeam/restorePoints/${id}`
  
      return this.client.request<VpsveeamRestorePoint>('GET', url)
    }
    */
    /**
     * restore operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/%7BserviceName%7D/veeam/restorePoints/%7Bid%7D/restore#POST)
     */
    /*
    CreatesAVPSTaskThatWillRestoreTheGivenRestorePoint(full: boolean, id: number, serviceName: string, changePassword?: boolean, export?: VpsveeamExportType): Promise<VpsTask> {
      let url = `/vps/${serviceName}/veeam/restorePoints/${id}/restore`
  
      return this.client.request<VpsTask>('POST', url, {full, changePassword, export})
    }
    */
    /**
     * Missing description [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vps/datacenter#GET)
     */
    ListAllTheDatacentersForASpecificCountry(country) {
        let url = `/vps/datacenter?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.Vps = Vps;
//# sourceMappingURL=vps.js.map