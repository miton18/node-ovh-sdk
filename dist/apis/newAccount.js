"use strict";
// GENERATED SDK for newAccount API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
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
 * Action a nichandle can perform on his account.
 */
var NichandleCreationRulesAction;
(function (NichandleCreationRulesAction) {
    NichandleCreationRulesAction["CREATE"] = "create";
    NichandleCreationRulesAction["UPDATE"] = "update";
})(NichandleCreationRulesAction = exports.NichandleCreationRulesAction || (exports.NichandleCreationRulesAction = {}));
/*
 * All genders a person can choose
 */
var NichandleGender;
(function (NichandleGender) {
    NichandleGender["FEMALE"] = "female";
    NichandleGender["MALE"] = "male";
})(NichandleGender = exports.NichandleGender || (exports.NichandleGender = {}));
/*
 * Languages a nichandle can choose
 */
var NichandleLanguage;
(function (NichandleLanguage) {
    NichandleLanguage["CS_CZ"] = "cs_CZ";
    NichandleLanguage["DE_DE"] = "de_DE";
    NichandleLanguage["EN_AU"] = "en_AU";
    NichandleLanguage["EN_CA"] = "en_CA";
    NichandleLanguage["EN_GB"] = "en_GB";
    NichandleLanguage["EN_IE"] = "en_IE";
    NichandleLanguage["EN_US"] = "en_US";
    NichandleLanguage["ES_ES"] = "es_ES";
    NichandleLanguage["FI_FI"] = "fi_FI";
    NichandleLanguage["FR_CA"] = "fr_CA";
    NichandleLanguage["FR_FR"] = "fr_FR";
    NichandleLanguage["FR_MA"] = "fr_MA";
    NichandleLanguage["FR_SN"] = "fr_SN";
    NichandleLanguage["FR_TN"] = "fr_TN";
    NichandleLanguage["IT_IT"] = "it_IT";
    NichandleLanguage["LT_LT"] = "lt_LT";
    NichandleLanguage["NL_NL"] = "nl_NL";
    NichandleLanguage["PL_PL"] = "pl_PL";
    NichandleLanguage["PT_PT"] = "pt_PT";
})(NichandleLanguage = exports.NichandleLanguage || (exports.NichandleLanguage = {}));
/*
 * Legal forms a nichandle can be registered as
 */
var NichandleLegalForm;
(function (NichandleLegalForm) {
    NichandleLegalForm["ADMINISTRATION"] = "administration";
    NichandleLegalForm["ASSOCIATION"] = "association";
    NichandleLegalForm["CORPORATION"] = "corporation";
    NichandleLegalForm["INDIVIDUAL"] = "individual";
    NichandleLegalForm["OTHER"] = "other";
    NichandleLegalForm["PERSONALCORPORATION"] = "personalcorporation";
})(NichandleLegalForm = exports.NichandleLegalForm || (exports.NichandleLegalForm = {}));
/*
 * OVH subsidiaries
 */
var NichandleOvhCompany;
(function (NichandleOvhCompany) {
    NichandleOvhCompany["KIMSUFI"] = "kimsufi";
    NichandleOvhCompany["OVH"] = "ovh";
    NichandleOvhCompany["SOYOUSTART"] = "soyoustart";
})(NichandleOvhCompany = exports.NichandleOvhCompany || (exports.NichandleOvhCompany = {}));
/*
 * OVH subsidiaries
 */
var NichandleOvhSubsidiary;
(function (NichandleOvhSubsidiary) {
    NichandleOvhSubsidiary["ASIA"] = "ASIA";
    NichandleOvhSubsidiary["AU"] = "AU";
    NichandleOvhSubsidiary["CA"] = "CA";
    NichandleOvhSubsidiary["CZ"] = "CZ";
    NichandleOvhSubsidiary["DE"] = "DE";
    NichandleOvhSubsidiary["ES"] = "ES";
    NichandleOvhSubsidiary["EU"] = "EU";
    NichandleOvhSubsidiary["FI"] = "FI";
    NichandleOvhSubsidiary["FR"] = "FR";
    NichandleOvhSubsidiary["GB"] = "GB";
    NichandleOvhSubsidiary["IE"] = "IE";
    NichandleOvhSubsidiary["IT"] = "IT";
    NichandleOvhSubsidiary["LT"] = "LT";
    NichandleOvhSubsidiary["MA"] = "MA";
    NichandleOvhSubsidiary["NL"] = "NL";
    NichandleOvhSubsidiary["PL"] = "PL";
    NichandleOvhSubsidiary["PT"] = "PT";
    NichandleOvhSubsidiary["QC"] = "QC";
    NichandleOvhSubsidiary["SG"] = "SG";
    NichandleOvhSubsidiary["SN"] = "SN";
    NichandleOvhSubsidiary["TN"] = "TN";
    NichandleOvhSubsidiary["US"] = "US";
    NichandleOvhSubsidiary["WE"] = "WE";
    NichandleOvhSubsidiary["WS"] = "WS";
})(NichandleOvhSubsidiary = exports.NichandleOvhSubsidiary || (exports.NichandleOvhSubsidiary = {}));
class NewAccount {
    constructor(client) {
        this.client = client;
    }
    /**
     * Create a new OVH identifier [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount#POST)
     */
    CreateANewOVHIdentifier(country, email, legalform, ovhCompany, ovhSubsidiary, address, area, birthCity, birthDay, city, companyNationalIdentificationNumber, corporationType, fax, firstname, italianSDI, language, name, nationalIdentificationNumber, organisation, phone, phoneCountry, sex, spareEmail, vat, zip) {
        let url = `/newAccount`;
        return this.client.request('POST', url, { country, email, legalform, ovhCompany, ovhSubsidiary, address, area, birthCity, birthDay, city, companyNationalIdentificationNumber, corporationType, fax, firstname, italianSDI, language, name, nationalIdentificationNumber, organisation, phone, phoneCountry, sex, spareEmail, vat, zip });
    }
    /**
     * All available areas for a given country [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/area#GET)
     */
    AllAvailableAreasForAGivenCountry(country) {
        let url = `/newAccount/area?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Returns the contracts that governs the creation of an OVH identifier [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/contracts#GET)
     */
    ReturnsTheContractsThatGovernsTheCreationOfAnOVHIdentifier(company, subsidiary) {
        let url = `/newAccount/contracts?`;
        const queryParams = new query_params_1.default();
        if (company) {
            queryParams.set('company', company.toString());
        }
        if (subsidiary) {
            queryParams.set('subsidiary', subsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * All available corporation types for a given country [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/corporationType#GET)
     */
    AllAvailableCorporationTypesForAGivenCountry(country) {
        let url = `/newAccount/corporationType?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * All available countries for an ovh company and an ovh subsidiary [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/countries#GET)
     */
    AllAvailableCountriesForAnOvhCompanyAndAnOvhSubsidiary(ovhCompany, ovhSubsidiary) {
        let url = `/newAccount/countries?`;
        const queryParams = new query_params_1.default();
        if (ovhCompany) {
            queryParams.set('ovhCompany', ovhCompany.toString());
        }
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Give all the rules to follow in order to create an OVH identifier [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/creationRules#GET)
     */
    GiveAllTheRulesToFollowInOrderToCreateAnOVHIdentifier(country, legalform, ovhCompany, ovhSubsidiary) {
        let url = `/newAccount/creationRules?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        if (legalform) {
            queryParams.set('legalform', legalform.toString());
        }
        if (ovhCompany) {
            queryParams.set('ovhCompany', ovhCompany.toString());
        }
        if (ovhSubsidiary) {
            queryParams.set('ovhSubsidiary', ovhSubsidiary.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * All available legal forms for a given country [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/legalform#GET)
     */
    AllAvailableLegalFormsForAGivenCountry(country) {
        let url = `/newAccount/legalform?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Give all the rules to follow in order to create and update an OVH identifier [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/newAccount/rules#POST)
     */
    GiveAllTheRulesToFollowInOrderToCreateAndUpdateAnOVHIdentifier(action, address, area, birthCity, birthDay, city, companyNationalIdentificationNumber, corporationType, country, email, fax, firstname, italianSDI, language, legalform, name, nationalIdentificationNumber, organisation, ovhCompany, ovhSubsidiary, phone, phoneCountry, sex, spareEmail, vat, zip) {
        let url = `/newAccount/rules`;
        return this.client.request('POST', url, { action, address, area, birthCity, birthDay, city, companyNationalIdentificationNumber, corporationType, country, email, fax, firstname, italianSDI, language, legalform, name, nationalIdentificationNumber, organisation, ovhCompany, ovhSubsidiary, phone, phoneCountry, sex, spareEmail, vat, zip });
    }
}
exports.NewAccount = NewAccount;
//# sourceMappingURL=newAccount.js.map