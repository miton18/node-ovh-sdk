"use strict";
// GENERATED SDK for ip API
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
 * Possible values for antiphishing state
 */
var IpAntiphishingState;
(function (IpAntiphishingState) {
    IpAntiphishingState["BLOCKED"] = "blocked";
    IpAntiphishingState["BLOCKING"] = "blocking";
    IpAntiphishingState["UNBLOCKED"] = "unblocked";
    IpAntiphishingState["UNBLOCKING"] = "unblocking";
})(IpAntiphishingState = exports.IpAntiphishingState || (exports.IpAntiphishingState = {}));
/*
 * Possible values for IP state
 */
var IpArpState;
(function (IpArpState) {
    IpArpState["BLOCKED"] = "blocked";
    IpArpState["UNBLOCKING"] = "unblocking";
})(IpArpState = exports.IpArpState || (exports.IpArpState = {}));
/*
 * Possible values for IP state
 */
var IpBlockedIpState;
(function (IpBlockedIpState) {
    IpBlockedIpState["BLOCKED"] = "blocked";
    IpBlockedIpState["UNBLOCKING"] = "unblocking";
})(IpBlockedIpState = exports.IpBlockedIpState || (exports.IpBlockedIpState = {}));
/*
 * Possible values for action
 */
var IpFirewallAction;
(function (IpFirewallAction) {
    IpFirewallAction["DENY"] = "deny";
    IpFirewallAction["PERMIT"] = "permit";
})(IpFirewallAction = exports.IpFirewallAction || (exports.IpFirewallAction = {}));
/*
 * Possible values for protocol
 */
var IpFirewallProtocol;
(function (IpFirewallProtocol) {
    IpFirewallProtocol["AH"] = "ah";
    IpFirewallProtocol["ESP"] = "esp";
    IpFirewallProtocol["GRE"] = "gre";
    IpFirewallProtocol["ICMP"] = "icmp";
    IpFirewallProtocol["IPV4"] = "ipv4";
    IpFirewallProtocol["TCP"] = "tcp";
    IpFirewallProtocol["UDP"] = "udp";
})(IpFirewallProtocol = exports.IpFirewallProtocol || (exports.IpFirewallProtocol = {}));
/*
 * Possible values for firewall rule state
 */
var IpFirewallRuleState;
(function (IpFirewallRuleState) {
    IpFirewallRuleState["CREATIONPENDING"] = "creationPending";
    IpFirewallRuleState["OK"] = "ok";
    IpFirewallRuleState["REMOVALPENDING"] = "removalPending";
})(IpFirewallRuleState = exports.IpFirewallRuleState || (exports.IpFirewallRuleState = {}));
/*
 * Possible values for firewall ip state
 */
var IpFirewallState;
(function (IpFirewallState) {
    IpFirewallState["DISABLEFIREWALLPENDING"] = "disableFirewallPending";
    IpFirewallState["ENABLEFIREWALLPENDING"] = "enableFirewallPending";
    IpFirewallState["OK"] = "ok";
})(IpFirewallState = exports.IpFirewallState || (exports.IpFirewallState = {}));
/*
 * Possible values for TCP option - only for TCP protocol
 */
var IpFirewallTCPOption;
(function (IpFirewallTCPOption) {
    IpFirewallTCPOption["ESTABLISHED"] = "established";
    IpFirewallTCPOption["SYN"] = "syn";
})(IpFirewallTCPOption = exports.IpFirewallTCPOption || (exports.IpFirewallTCPOption = {}));
/*
 * Possible values for game rule protocol
 */
var IpGameMitigationRuleProtocol;
(function (IpGameMitigationRuleProtocol) {
    IpGameMitigationRuleProtocol["ARKSURVIVALEVOLVED"] = "arkSurvivalEvolved";
    IpGameMitigationRuleProtocol["ARMA"] = "arma";
    IpGameMitigationRuleProtocol["GTAMULTITHEFTAUTOSANANDREAS"] = "gtaMultiTheftAutoSanAndreas";
    IpGameMitigationRuleProtocol["GTASANANDREASMULTIPLAYERMOD"] = "gtaSanAndreasMultiplayerMod";
    IpGameMitigationRuleProtocol["HL2SOURCE"] = "hl2Source";
    IpGameMitigationRuleProtocol["MINECRAFTPOCKETEDITION"] = "minecraftPocketEdition";
    IpGameMitigationRuleProtocol["MINECRAFTQUERY"] = "minecraftQuery";
    IpGameMitigationRuleProtocol["MUMBLE"] = "mumble";
    IpGameMitigationRuleProtocol["OTHER"] = "other";
    IpGameMitigationRuleProtocol["RUST"] = "rust";
    IpGameMitigationRuleProtocol["TEAMSPEAK2"] = "teamspeak2";
    IpGameMitigationRuleProtocol["TEAMSPEAK3"] = "teamspeak3";
    IpGameMitigationRuleProtocol["TRACKMANIASHOOTMANIA"] = "trackmaniaShootmania";
})(IpGameMitigationRuleProtocol = exports.IpGameMitigationRuleProtocol || (exports.IpGameMitigationRuleProtocol = {}));
/*
 * Possible values for game mitigation rule state
 */
var IpGameMitigationRuleState;
(function (IpGameMitigationRuleState) {
    IpGameMitigationRuleState["CREATERULEPENDING"] = "createRulePending";
    IpGameMitigationRuleState["DELETERULEPENDING"] = "deleteRulePending";
    IpGameMitigationRuleState["OK"] = "ok";
})(IpGameMitigationRuleState = exports.IpGameMitigationRuleState || (exports.IpGameMitigationRuleState = {}));
/*
 * Possible values for udp mitigation rule state
 */
var IpGameMitigationState;
(function (IpGameMitigationState) {
    IpGameMitigationState["FIREWALLMODEDISABLEPENDING"] = "firewallModeDisablePending";
    IpGameMitigationState["FIREWALLMODEENABLEPENDING"] = "firewallModeEnablePending";
    IpGameMitigationState["OK"] = "ok";
})(IpGameMitigationState = exports.IpGameMitigationState || (exports.IpGameMitigationState = {}));
/*
 * Possible values for ip type
 */
var IpIpType;
(function (IpIpType) {
    IpIpType["CDN"] = "cdn";
    IpIpType["CLOUD"] = "cloud";
    IpIpType["DEDICATED"] = "dedicated";
    IpIpType["FAILOVER"] = "failover";
    IpIpType["HOSTED_SSL"] = "hosted_ssl";
    IpIpType["HOUSING"] = "housing";
    IpIpType["LOADBALANCING"] = "loadBalancing";
    IpIpType["MAIL"] = "mail";
    IpIpType["OVERTHEBOX"] = "overthebox";
    IpIpType["PCC"] = "pcc";
    IpIpType["PCI"] = "pci";
    IpIpType["PRIVATE"] = "private";
    IpIpType["VPN"] = "vpn";
    IpIpType["VPS"] = "vps";
    IpIpType["VRACK"] = "vrack";
    IpIpType["XDSL"] = "xdsl";
})(IpIpType = exports.IpIpType || (exports.IpIpType = {}));
/*
 * Possible values for your IP load balancing backend probe
 */
var IpLoadBalancingBackendProbe;
(function (IpLoadBalancingBackendProbe) {
    IpLoadBalancingBackendProbe["HTTP"] = "http";
    IpLoadBalancingBackendProbe["ICMP"] = "icmp";
    IpLoadBalancingBackendProbe["NONE"] = "none";
    IpLoadBalancingBackendProbe["OCO"] = "oco";
})(IpLoadBalancingBackendProbe = exports.IpLoadBalancingBackendProbe || (exports.IpLoadBalancingBackendProbe = {}));
/*
 * Possible values for ssl state
 */
var IpLoadBalancingSsl;
(function (IpLoadBalancingSsl) {
    IpLoadBalancingSsl["CUSTOMER"] = "customer";
    IpLoadBalancingSsl["NONE"] = "none";
    IpLoadBalancingSsl["OVH"] = "ovh";
})(IpLoadBalancingSsl = exports.IpLoadBalancingSsl || (exports.IpLoadBalancingSsl = {}));
/*
 * Possible values for load balancing IP state
 */
var IpLoadBalancingState;
(function (IpLoadBalancingState) {
    IpLoadBalancingState["BLACKLISTED"] = "blacklisted";
    IpLoadBalancingState["DELETED"] = "deleted";
    IpLoadBalancingState["FREE"] = "free";
    IpLoadBalancingState["OK"] = "ok";
    IpLoadBalancingState["QUARANTINED"] = "quarantined";
    IpLoadBalancingState["SUSPENDED"] = "suspended";
})(IpLoadBalancingState = exports.IpLoadBalancingState || (exports.IpLoadBalancingState = {}));
/*
 * Possible values for load balancing IP stickiness
 */
var IpLoadBalancingStickiness;
(function (IpLoadBalancingStickiness) {
    IpLoadBalancingStickiness["COOKIE"] = "cookie";
    IpLoadBalancingStickiness["NONE"] = "none";
    IpLoadBalancingStickiness["SOURCEIP"] = "sourceIp";
})(IpLoadBalancingStickiness = exports.IpLoadBalancingStickiness || (exports.IpLoadBalancingStickiness = {}));
/*
 * Possible values for load balancing task action
 */
var IpLoadBalancingTaskAction;
(function (IpLoadBalancingTaskAction) {
    IpLoadBalancingTaskAction["ACTIVATESSL"] = "activateSsl";
    IpLoadBalancingTaskAction["ADDBACKEND"] = "addBackend";
    IpLoadBalancingTaskAction["ADDIPTOBACKEND"] = "addIpToBackend";
    IpLoadBalancingTaskAction["ANNOUNCEIPLOADBALANCING"] = "announceIpLoadBalancing";
    IpLoadBalancingTaskAction["BACKUPSTATESET"] = "backupStateSet";
    IpLoadBalancingTaskAction["BACKUPSTATEUNSET"] = "backupStateUnset";
    IpLoadBalancingTaskAction["CHANGEPROBE"] = "changeProbe";
    IpLoadBalancingTaskAction["DELBACKEND"] = "delBackend";
    IpLoadBalancingTaskAction["DESACTIVATESSL"] = "desactivateSsl";
    IpLoadBalancingTaskAction["REMOVEIPFROMBACKEND"] = "removeIpFromBackend";
    IpLoadBalancingTaskAction["SETPORTREDIRECTION"] = "setPortRedirection";
    IpLoadBalancingTaskAction["SETSTICKINESS"] = "setStickiness";
    IpLoadBalancingTaskAction["SETWEIGHT"] = "setWeight";
    IpLoadBalancingTaskAction["UNANNOUNCEIPLOADBALANCING"] = "unannounceIpLoadBalancing";
    IpLoadBalancingTaskAction["UNSETPORTREDIRECTION"] = "unsetPortRedirection";
})(IpLoadBalancingTaskAction = exports.IpLoadBalancingTaskAction || (exports.IpLoadBalancingTaskAction = {}));
/*
 * Possible values for load balancing IP service location
 */
var IpLoadBalancingZone;
(function (IpLoadBalancingZone) {
    IpLoadBalancingZone["BHS"] = "bhs";
    IpLoadBalancingZone["GRA"] = "gra";
    IpLoadBalancingZone["RBX"] = "rbx";
    IpLoadBalancingZone["SBG"] = "sbg";
})(IpLoadBalancingZone = exports.IpLoadBalancingZone || (exports.IpLoadBalancingZone = {}));
/*
 * Possible values for mitigation profile state
 */
var IpMitigationProfileState;
(function (IpMitigationProfileState) {
    IpMitigationProfileState["OK"] = "ok";
    IpMitigationProfileState["TASKSPENDING"] = "tasksPending";
})(IpMitigationProfileState = exports.IpMitigationProfileState || (exports.IpMitigationProfileState = {}));
/*
 * Possible values for mitigation state
 */
var IpMitigationState;
(function (IpMitigationState) {
    IpMitigationState["CREATIONPENDING"] = "creationPending";
    IpMitigationState["OK"] = "ok";
    IpMitigationState["REMOVALPENDING"] = "removalPending";
})(IpMitigationState = exports.IpMitigationState || (exports.IpMitigationState = {}));
/*
 * Possible values for spam state
 */
var IpSpamState;
(function (IpSpamState) {
    IpSpamState["BLOCKEDFORSPAM"] = "blockedForSpam";
    IpSpamState["UNBLOCKED"] = "unblocked";
    IpSpamState["UNBLOCKING"] = "unblocking";
})(IpSpamState = exports.IpSpamState || (exports.IpSpamState = {}));
/*
 * different task operation
 */
var IpTaskFunction;
(function (IpTaskFunction) {
    IpTaskFunction["ARINBLOCKREASSIGN"] = "arinBlockReassign";
    IpTaskFunction["CHANGERIPEORG"] = "changeRipeOrg";
    IpTaskFunction["CHECKANDRELEASEIP"] = "checkAndReleaseIp";
    IpTaskFunction["GENERICMOVEFLOATINGIP"] = "genericMoveFloatingIp";
})(IpTaskFunction = exports.IpTaskFunction || (exports.IpTaskFunction = {}));
/*
 * different task status
 */
var IpTaskStatus;
(function (IpTaskStatus) {
    IpTaskStatus["CANCELLED"] = "cancelled";
    IpTaskStatus["CUSTOMERERROR"] = "customerError";
    IpTaskStatus["DOING"] = "doing";
    IpTaskStatus["DONE"] = "done";
    IpTaskStatus["INIT"] = "init";
    IpTaskStatus["OVHERROR"] = "ovhError";
    IpTaskStatus["TODO"] = "todo";
})(IpTaskStatus = exports.IpTaskStatus || (exports.IpTaskStatus = {}));
/*
 * Possible task action
 */
var IpLoadbalancingTaskAction;
(function (IpLoadbalancingTaskAction) {
    IpLoadbalancingTaskAction["DELETEIPLB"] = "deleteIplb";
    IpLoadbalancingTaskAction["DEPLOYIPLB"] = "deployIplb";
    IpLoadbalancingTaskAction["INSTALL"] = "install";
    IpLoadbalancingTaskAction["INSTALLIPLB"] = "installIplb";
    IpLoadbalancingTaskAction["INSTALLZONE"] = "installZone";
    IpLoadbalancingTaskAction["ORDERFREECERTIFICATE"] = "orderFreeCertificate";
    IpLoadbalancingTaskAction["ORDERPAIDCERTIFICATE"] = "orderPaidCertificate";
    IpLoadbalancingTaskAction["ORDERSSL"] = "orderSsl";
    IpLoadbalancingTaskAction["REFRESHIPLB"] = "refreshIplb";
    IpLoadbalancingTaskAction["RELEASEIPLB"] = "releaseIplb";
    IpLoadbalancingTaskAction["RELEASEIPLBZONE"] = "releaseIplbZone";
    IpLoadbalancingTaskAction["REOPENIPLB"] = "reopenIplb";
    IpLoadbalancingTaskAction["SUSPENDIPLB"] = "suspendIplb";
    IpLoadbalancingTaskAction["SUSPENDZONE"] = "suspendZone";
    IpLoadbalancingTaskAction["SWITCHTOIPLBNEXTGENERATIONAPI"] = "switchToIplbNextGenerationApi";
    IpLoadbalancingTaskAction["VRACKATTACH"] = "vrackAttach";
    IpLoadbalancingTaskAction["VRACKDETACH"] = "vrackDetach";
})(IpLoadbalancingTaskAction = exports.IpLoadbalancingTaskAction || (exports.IpLoadbalancingTaskAction = {}));
/*
 * Possible task status
 */
var IpLoadbalancingTaskStatus;
(function (IpLoadbalancingTaskStatus) {
    IpLoadbalancingTaskStatus["BLOCKED"] = "blocked";
    IpLoadbalancingTaskStatus["CANCELLED"] = "cancelled";
    IpLoadbalancingTaskStatus["DOING"] = "doing";
    IpLoadbalancingTaskStatus["DONE"] = "done";
    IpLoadbalancingTaskStatus["ERROR"] = "error";
    IpLoadbalancingTaskStatus["TODO"] = "todo";
})(IpLoadbalancingTaskStatus = exports.IpLoadbalancingTaskStatus || (exports.IpLoadbalancingTaskStatus = {}));
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
class Ip {
    constructor(client) {
        this.client = client;
    }
    /**
     * List the ip.Ip objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip#GET)
     */
    YourOVHIPs(description, ip, routedToServiceName, type) {
        let url = `/ip?`;
        const queryParams = new query_params_1.default();
        if (description) {
            queryParams.set('description', description);
        }
        if (ip) {
            queryParams.set('ip', ip.toString());
        }
        if (routedToServiceName) {
            queryParams.set('routedTo.serviceName', routedToServiceName);
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Your IP [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D#GET)
     */
    GetThisObjectProperties(ip) {
        let url = `/ip/${ip}`;
        return this.client.request('GET', url);
    }
    /**
     * Your IP [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D#PUT)
     */
    AlterThisObjectProperties(ip, payload) {
        let url = `/ip/${ip}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the ip.BlockedIp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/antihack#GET)
     */
    AntiHackBlockedIP(ip, state) {
        let url = `/ip/${ip}/antihack?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Blocked IP information [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/antihack/%7BipBlocked%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, ipBlocked: string): Promise<IpBlockedIp> {
      let url = `/ip/${ip}/antihack/${ipBlocked}`
  
      return this.client.request<IpBlockedIp>('GET', url)
    }
    */
    /**
     * unblock operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/antihack/%7BipBlocked%7D/unblock#POST)
     */
    UnblockThisIP(ip, ipBlocked) {
        let url = `/ip/${ip}/antihack/${ipBlocked}/unblock`;
        return this.client.request('POST', url);
    }
    /**
     * List the ip.ArpBlockedIp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/arp#GET)
     */
    ARPBlockedIP(ip, state) {
        let url = `/ip/${ip}/arp?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * ARP blocked IP information [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/arp/%7BipBlocked%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, ipBlocked: string): Promise<IpArpBlockedIp> {
      let url = `/ip/${ip}/arp/${ipBlocked}`
  
      return this.client.request<IpArpBlockedIp>('GET', url)
    }
    */
    /**
     * unblock operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/arp/%7BipBlocked%7D/unblock#POST)
     */
    /*
    UnblockThisIP(ip: string, ipBlocked: string): Promise<void> {
      let url = `/ip/${ip}/arp/${ipBlocked}/unblock`
  
      return this.client.request<void>('POST', url)
    }
    */
    /**
     * changeOrg operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/changeOrg#POST)
     */
    ChangeOrganisationOfThisIP(ip, organisation) {
        let url = `/ip/${ip}/changeOrg`;
        return this.client.request('POST', url, { organisation });
    }
    /**
     * List the ip.ReverseDelegation objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/delegation#GET)
     */
    ReverseDelegationOnIPv6Subnet(ip) {
        let url = `/ip/${ip}/delegation`;
        return this.client.request('GET', url);
    }
    /**
     * List the ip.ReverseDelegation objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/delegation#POST)
     */
    AddTargetForReverseDelegationOnIPv6Subnet(ip, target) {
        let url = `/ip/${ip}/delegation`;
        return this.client.request('POST', url, { target });
    }
    /**
     * Your reverse delegations on IPv6 subnet [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/delegation/%7Btarget%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, target: string): Promise<IpReverseDelegation> {
      let url = `/ip/${ip}/delegation/${target}`
  
      return this.client.request<IpReverseDelegation>('GET', url)
    }
    */
    /**
     * Your reverse delegations on IPv6 subnet [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/delegation/%7Btarget%7D#DELETE)
     */
    DeleteATargetForReverseDelegationOnIPv6Subnet(ip, target) {
        let url = `/ip/${ip}/delegation/${target}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ip.FirewallIp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall#GET)
     */
    IpUnderFirewall(ip, enabled, state) {
        let url = `/ip/${ip}/firewall?`;
        const queryParams = new query_params_1.default();
        if (enabled) {
            queryParams.set('enabled', enabled.toString());
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ip.FirewallIp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall#POST)
     */
    AntiDDOSOptionAddNewIPOnFirewall(ip, ipOnFirewall) {
        let url = `/ip/${ip}/firewall`;
        return this.client.request('POST', url, { ipOnFirewall });
    }
    /**
     * Your IP on firewall [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, ipOnFirewall: string): Promise<IpFirewallIp> {
      let url = `/ip/${ip}/firewall/${ipOnFirewall}`
  
      return this.client.request<IpFirewallIp>('GET', url)
    }
    */
    /**
     * Your IP on firewall [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D#PUT)
     */
    /*
    AlterThisObjectProperties(ip: string, ipOnFirewall: string, payload: IpFirewallIp): Promise<void> {
      let url = `/ip/${ip}/firewall/${ipOnFirewall}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Your IP on firewall [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D#DELETE)
     */
    AntiDDOSOptionDeleteIPAndRulesFromFirewall(ip, ipOnFirewall) {
        let url = `/ip/${ip}/firewall/${ipOnFirewall}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ip.FirewallNetworkRule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D/rule#GET)
     */
    RulesForThisIP(ip, ipOnFirewall, state) {
        let url = `/ip/${ip}/firewall/${ipOnFirewall}/rule?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ip.FirewallNetworkRule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D/rule#POST)
     */
    AntiDDOSOptionAddNewRuleOnYourIP(action, ip, ipOnFirewall, protocol, sequence, destinationPort, source, sourcePort, tcpOption) {
        let url = `/ip/${ip}/firewall/${ipOnFirewall}/rule`;
        return this.client.request('POST', url, { action, protocol, sequence, destinationPort, source, sourcePort, tcpOption });
    }
    /**
     * Rule on ip [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D/rule/%7Bsequence%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, ipOnFirewall: string, sequence: number): Promise<IpFirewallNetworkRule> {
      let url = `/ip/${ip}/firewall/${ipOnFirewall}/rule/${sequence}`
  
      return this.client.request<IpFirewallNetworkRule>('GET', url)
    }
    */
    /**
     * Rule on ip [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/firewall/%7BipOnFirewall%7D/rule/%7Bsequence%7D#DELETE)
     */
    AntiDDOSOptionDeleteRule(ip, ipOnFirewall, sequence) {
        let url = `/ip/${ip}/firewall/${ipOnFirewall}/rule/${sequence}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the ip.GameMitigation objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game#GET)
     */
    IpUnderGameAntiddos(ip) {
        let url = `/ip/${ip}/game`;
        return this.client.request('GET', url);
    }
    /**
     * GAME Anti-DDoS [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, ipOnGame: string): Promise<IpGameMitigation> {
      let url = `/ip/${ip}/game/${ipOnGame}`
  
      return this.client.request<IpGameMitigation>('GET', url)
    }
    */
    /**
     * GAME Anti-DDoS [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D#PUT)
     */
    /*
    AlterThisObjectProperties(ip: string, ipOnGame: string, payload: IpGameMitigation): Promise<void> {
      let url = `/ip/${ip}/game/${ipOnGame}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the ip.GameMitigationRule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D/rule#GET)
     */
    IDsOfRulesConfiguredForThisIP(ip, ipOnGame) {
        let url = `/ip/${ip}/game/${ipOnGame}/rule`;
        return this.client.request('GET', url);
    }
    /**
     * List the ip.GameMitigationRule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D/rule#POST)
     */
    AddNewRuleOnYourIP(ip, ipOnGame, ports, protocol) {
        let url = `/ip/${ip}/game/${ipOnGame}/rule`;
        return this.client.request('POST', url, { ports, protocol });
    }
    /**
     * Rule on ip:ports [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D/rule/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, ip: string, ipOnGame: string): Promise<IpGameMitigationRule> {
      let url = `/ip/${ip}/game/${ipOnGame}/rule/${id}`
  
      return this.client.request<IpGameMitigationRule>('GET', url)
    }
    */
    /**
     * Rule on ip:ports [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/game/%7BipOnGame%7D/rule/%7Bid%7D#DELETE)
     */
    DeleteRule(id, ip, ipOnGame) {
        let url = `/ip/${ip}/game/${ipOnGame}/rule/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the license.cloudLinux.CloudLinux objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/cloudLinux#GET)
     */
    CloudLinuxLicensesAssociatedToThisIP(ip, ipAddress) {
        let url = `/ip/${ip}/license/cloudLinux?`;
        const queryParams = new query_params_1.default();
        if (ipAddress) {
            queryParams.set('ipAddress', ipAddress.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the license.cpanel.Cpanel objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/cpanel#GET)
     */
    CpanelLicensesAssociatedToThisIP(ip, ipAddress) {
        let url = `/ip/${ip}/license/cpanel?`;
        const queryParams = new query_params_1.default();
        if (ipAddress) {
            queryParams.set('ipAddress', ipAddress.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the license.directadmin.DirectAdmin objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/directadmin#GET)
     */
    DirectAdminLicensesAssociatedToThisIP(ip, ipAddress) {
        let url = `/ip/${ip}/license/directadmin?`;
        const queryParams = new query_params_1.default();
        if (ipAddress) {
            queryParams.set('ipAddress', ipAddress.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the license.plesk.Plesk objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/plesk#GET)
     */
    PleskLicensesAssociatedToThisIP(ip, ipAddress) {
        let url = `/ip/${ip}/license/plesk?`;
        const queryParams = new query_params_1.default();
        if (ipAddress) {
            queryParams.set('ipAddress', ipAddress.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the license.sqlserver.SqlServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/sqlserver#GET)
     */
    SQLServerLicensesAssociatedToThisIP(ip, ipAddress) {
        let url = `/ip/${ip}/license/sqlserver?`;
        const queryParams = new query_params_1.default();
        if (ipAddress) {
            queryParams.set('ipAddress', ipAddress.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the license.virtuozzo.Virtuozzo objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/virtuozzo#GET)
     */
    VirtuozzoLicensesAssociatedToThisIP(ip, ipAddress) {
        let url = `/ip/${ip}/license/virtuozzo?`;
        const queryParams = new query_params_1.default();
        if (ipAddress) {
            queryParams.set('ipAddress', ipAddress.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the license.windows.Windows objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/windows#GET)
     */
    WindowsLicensesAssociatedToThisIP(ip, ipAddress) {
        let url = `/ip/${ip}/license/windows?`;
        const queryParams = new query_params_1.default();
        if (ipAddress) {
            queryParams.set('ipAddress', ipAddress.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the license.worklight.WorkLight objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/license/worklight#GET)
     */
    WorkLightLicensesAssociatedToThisIP(ip, ipAddress) {
        let url = `/ip/${ip}/license/worklight?`;
        const queryParams = new query_params_1.default();
        if (ipAddress) {
            queryParams.set('ipAddress', ipAddress.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * IP migration to OVH [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/migrationToken#GET)
     */
    /*
    GetThisObjectProperties(ip: string): Promise<IpIpMigrationToken> {
      let url = `/ip/${ip}/migrationToken`
  
      return this.client.request<IpIpMigrationToken>('GET', url)
    }
    */
    /**
     * IP migration to OVH [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/migrationToken#POST)
     */
    GenerateAMigrationToken(customerId, ip) {
        let url = `/ip/${ip}/migrationToken`;
        return this.client.request('POST', url, { customerId });
    }
    /**
     * List the ip.MitigationIp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation#GET)
     */
    IpUnderMitigation(ip, auto, state) {
        let url = `/ip/${ip}/mitigation?`;
        const queryParams = new query_params_1.default();
        if (auto) {
            queryParams.set('auto', auto.toString());
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ip.MitigationIp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation#POST)
     */
    AntiDDOSOptionAddNewIPOnPermanentMitigation(ip, ipOnMitigation) {
        let url = `/ip/${ip}/mitigation`;
        return this.client.request('POST', url, { ipOnMitigation });
    }
    /**
     * Your IP on mitigation [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation/%7BipOnMitigation%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, ipOnMitigation: string): Promise<IpMitigationIp> {
      let url = `/ip/${ip}/mitigation/${ipOnMitigation}`
  
      return this.client.request<IpMitigationIp>('GET', url)
    }
    */
    /**
     * Your IP on mitigation [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation/%7BipOnMitigation%7D#PUT)
     */
    /*
    AlterThisObjectProperties(ip: string, ipOnMitigation: string, payload: IpMitigationIp): Promise<void> {
      let url = `/ip/${ip}/mitigation/${ipOnMitigation}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Your IP on mitigation [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation/%7BipOnMitigation%7D#DELETE)
     */
    AntiDDOSOptionDeleteIPFromMitigation(ip, ipOnMitigation) {
        let url = `/ip/${ip}/mitigation/${ipOnMitigation}`;
        return this.client.request('DELETE', url);
    }
    /**
     * stats operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation/%7BipOnMitigation%7D/stats#GET)
     */
    AntiDDOSOptionGetStatisticsAboutYourTrafficInAndOutDuringThisMitigation(from, ip, ipOnMitigation, scale, to) {
        let url = `/ip/${ip}/mitigation/${ipOnMitigation}/stats?`;
        const queryParams = new query_params_1.default();
        if (from) {
            queryParams.set('from', from.toString());
        }
        if (scale) {
            queryParams.set('scale', scale.toString());
        }
        if (to) {
            queryParams.set('to', to.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * topStream operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigation/%7BipOnMitigation%7D/topStream#GET)
     */
    AntiDDOSOptionGetTopStreamOnYourIpOnASpecificTimestamp(date, ip, ipOnMitigation, scale) {
        let url = `/ip/${ip}/mitigation/${ipOnMitigation}/topStream?`;
        const queryParams = new query_params_1.default();
        if (date) {
            queryParams.set('date', date.toString());
        }
        if (scale) {
            queryParams.set('scale', scale.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the ip.MitigationProfile objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigationProfiles#GET)
     */
    ManageMitigationProfileOnYourIPs(ip) {
        let url = `/ip/${ip}/mitigationProfiles`;
        return this.client.request('GET', url);
    }
    /**
     * List the ip.MitigationProfile objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigationProfiles#POST)
     */
    CreateNewProfileForOneOfYourIp(autoMitigationTimeOut, ip, ipMitigationProfile) {
        let url = `/ip/${ip}/mitigationProfiles`;
        return this.client.request('POST', url, { autoMitigationTimeOut, ipMitigationProfile });
    }
    /**
     * Mitigation profile for your ip [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigationProfiles/%7BipMitigationProfile%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, ipMitigationProfile: string): Promise<IpMitigationProfile> {
      let url = `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`
  
      return this.client.request<IpMitigationProfile>('GET', url)
    }
    */
    /**
     * Mitigation profile for your ip [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigationProfiles/%7BipMitigationProfile%7D#PUT)
     */
    /*
    AlterThisObjectProperties(ip: string, ipMitigationProfile: string, payload: IpMitigationProfile): Promise<void> {
      let url = `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Mitigation profile for your ip [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/mitigationProfiles/%7BipMitigationProfile%7D#DELETE)
     */
    DeleteMitigationProfile(ip, ipMitigationProfile) {
        let url = `/ip/${ip}/mitigationProfiles/${ipMitigationProfile}`;
        return this.client.request('DELETE', url);
    }
    /**
     * move operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/move#POST)
     */
    MoveThisIPToAnotherService(ip, to, nexthop) {
        let url = `/ip/${ip}/move`;
        return this.client.request('POST', url, { to, nexthop });
    }
    /**
     * move operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/move#GET)
     */
    ListServicesAvailableAsADestination(ip) {
        let url = `/ip/${ip}/move`;
        return this.client.request('GET', url);
    }
    /**
     * park operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/park#POST)
     */
    ParkThisIP(ip) {
        let url = `/ip/${ip}/park`;
        return this.client.request('POST', url);
    }
    /**
     * List the ip.Antiphishing objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/phishing#GET)
     */
    IpUnderAntiphishing(ip, ipOnAntiphishing, state) {
        let url = `/ip/${ip}/phishing?`;
        const queryParams = new query_params_1.default();
        if (ipOnAntiphishing) {
            queryParams.set('ipOnAntiphishing', ipOnAntiphishing.toString());
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Phishing URLs hosted on your IP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/phishing/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, ip: string): Promise<IpAntiphishing> {
      let url = `/ip/${ip}/phishing/${id}`
  
      return this.client.request<IpAntiphishing>('GET', url)
    }
    */
    /**
     * List the ip.ReverseIp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/reverse#GET)
     */
    ReverseOnYourIp(ip) {
        let url = `/ip/${ip}/reverse`;
        return this.client.request('GET', url);
    }
    /**
     * List the ip.ReverseIp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/reverse#POST)
     */
    AddReverseOnAnIp(ip, ipReverse, reverse) {
        let url = `/ip/${ip}/reverse`;
        return this.client.request('POST', url, { ipReverse, reverse });
    }
    /**
     * Your reverse records on IP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/reverse/%7BipReverse%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, ipReverse: string): Promise<IpReverseIp> {
      let url = `/ip/${ip}/reverse/${ipReverse}`
  
      return this.client.request<IpReverseIp>('GET', url)
    }
    */
    /**
     * Your reverse records on IP [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/reverse/%7BipReverse%7D#DELETE)
     */
    DeleteAReverseOnOneIP(ip, ipReverse) {
        let url = `/ip/${ip}/reverse/${ipReverse}`;
        return this.client.request('DELETE', url);
    }
    /**
     * IP block RIPE informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/ripe#GET)
     */
    /*
    GetThisObjectProperties(ip: string): Promise<IpRipeInfos> {
      let url = `/ip/${ip}/ripe`
  
      return this.client.request<IpRipeInfos>('GET', url)
    }
    */
    /**
     * IP block RIPE informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/ripe#PUT)
     */
    /*
    AlterThisObjectProperties(ip: string, payload: IpRipeInfos): Promise<void> {
      let url = `/ip/${ip}/ripe`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the ip.SpamIp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/spam#GET)
     */
    IpSpamming(ip, state) {
        let url = `/ip/${ip}/spam?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Your IP spam stats [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/spam/%7BipSpamming%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, ipSpamming: string): Promise<IpSpamIp> {
      let url = `/ip/${ip}/spam/${ipSpamming}`
  
      return this.client.request<IpSpamIp>('GET', url)
    }
    */
    /**
     * stats operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/spam/%7BipSpamming%7D/stats#GET)
     */
    GetStatisticsAboutTheEmailTraffic(from, ip, ipSpamming, to) {
        let url = `/ip/${ip}/spam/${ipSpamming}/stats?`;
        const queryParams = new query_params_1.default();
        if (from) {
            queryParams.set('from', from.toString());
        }
        if (to) {
            queryParams.set('to', to.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * unblock operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/spam/%7BipSpamming%7D/unblock#POST)
     */
    ReleaseTheIpFromAntispamSystem(ip, ipSpamming) {
        let url = `/ip/${ip}/spam/${ipSpamming}/unblock`;
        return this.client.request('POST', url);
    }
    /**
     * List the ip.IpTask objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/task#GET)
     */
    IPTasks(ip, _function, status) {
        let url = `/ip/${ip}/task?`;
        const queryParams = new query_params_1.default();
        if (_function) {
            queryParams.set('function', _function.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * IP tasks [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, taskId: number): Promise<IpIpTask> {
      let url = `/ip/${ip}/task/${taskId}`
  
      return this.client.request<IpIpTask>('GET', url)
    }
    */
    /**
     * terminate operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/%7Bip%7D/terminate#POST)
     */
    DeleteAFailoverIP(ip) {
        let url = `/ip/${ip}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * Operations about the IP service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing#GET)
     */
    ListAvailableServices() {
        let url = `/ip/loadBalancing`;
        return this.client.request('GET', url);
    }
    /**
     * Your load balancing IP [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<IpLoadBalancingIp> {
      let url = `/ip/loadBalancing/${serviceName}`
  
      return this.client.request<IpLoadBalancingIp>('GET', url)
    }
    */
    /**
     * allowedBackends operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/allowedBackends#GET)
     */
    ListOfBackendsYouCanAttachToYourIP(serviceName) {
        let url = `/ip/loadBalancing/${serviceName}/allowedBackends`;
        return this.client.request('GET', url);
    }
    /**
     * List the ip.LoadBalancingBackendIp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend#GET)
     */
    BackendsForThisIPLoadBalancing(serviceName) {
        let url = `/ip/loadBalancing/${serviceName}/backend`;
        return this.client.request('GET', url);
    }
    /**
     * List the ip.LoadBalancingBackendIp objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend#POST)
     */
    AddANewBackendOnYourIPLoadBalancing(ipBackend, probe, serviceName, weight) {
        let url = `/ip/loadBalancing/${serviceName}/backend`;
        return this.client.request('POST', url, { ipBackend, probe, weight });
    }
    /**
     * Backends attached to your IP load balancing [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend/%7Bbackend%7D#GET)
     */
    /*
    GetThisObjectProperties(backend: string, serviceName: string): Promise<IpLoadBalancingBackendIp> {
      let url = `/ip/loadBalancing/${serviceName}/backend/${backend}`
  
      return this.client.request<IpLoadBalancingBackendIp>('GET', url)
    }
    */
    /**
     * Backends attached to your IP load balancing [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend/%7Bbackend%7D#PUT)
     */
    /*
    AlterThisObjectProperties(backend: string, serviceName: string, payload: IpLoadBalancingBackendIp): Promise<void> {
      let url = `/ip/loadBalancing/${serviceName}/backend/${backend}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Backends attached to your IP load balancing [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend/%7Bbackend%7D#DELETE)
     */
    RemoveABackendIP(backend, serviceName) {
        let url = `/ip/loadBalancing/${serviceName}/backend/${backend}`;
        return this.client.request('DELETE', url);
    }
    /**
     * backupState operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend/%7Bbackend%7D/backupState#POST)
     */
    SetOrUnsetTheBackendAsABackupOfAnotherBackendRequestsWillBeDirectedToTheBackupOnlyIfTheMainBackendIsInProbeFail(backend, backupStateSet, serviceName, mainBackendIp) {
        let url = `/ip/loadBalancing/${serviceName}/backend/${backend}/backupState`;
        return this.client.request('POST', url, { backupStateSet, mainBackendIp });
    }
    /**
     * setWeight operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/backend/%7Bbackend%7D/setWeight#POST)
     */
    SetTheWeightOfABackendForInstanceIfBackendAHasAWeightOf8AndBackupBWasAWeightOf16BackendBWillReceiveTwiceMoreConnectionsAsBackendABackendsMustBeOnTheSamePOPForTheWeightParameterToTakeEffectBetweenThem(backend, serviceName, weight) {
        let url = `/ip/loadBalancing/${serviceName}/backend/${backend}/setWeight`;
        return this.client.request('POST', url, { weight });
    }
    /**
     * importCustomSsl operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/importCustomSsl#POST)
     */
    ImportYourOwnSslCertificateOnYourIPLoadBalancingSslOptionIsNeededToUseThisUrl(certificate, key, serviceName, chain) {
        let url = `/ip/loadBalancing/${serviceName}/importCustomSsl`;
        return this.client.request('POST', url, { certificate, key, chain });
    }
    /**
     * internalNatIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/internalNatIp#GET)
     */
    IpSubnetUsedByOVHToNatRequestsOnYourIpLbToYourBackendsYouMustEnsureThatYourBackendsAreNotPartOfANetworkThatOverlapWithThisOne(serviceName, zone) {
        let url = `/ip/loadBalancing/${serviceName}/internalNatIp?`;
        const queryParams = new query_params_1.default();
        if (zone) {
            queryParams.set('zone', zone.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the portsRedirection objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/portsRedirection#GET)
     */
    GetAllSrcPort(serviceName) {
        let url = `/ip/loadBalancing/${serviceName}/portsRedirection`;
        return this.client.request('GET', url);
    }
    /**
     * List the portsRedirection objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/portsRedirection#POST)
     */
    AddANewPortRedirection(serviceName, payload) {
        let url = `/ip/loadBalancing/${serviceName}/portsRedirection`;
        return this.client.request('POST', url, payload);
    }
    /**
     * Port redirections [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/portsRedirection/%7BsrcPort%7D#GET)
     */
    GetTheValueForTheGivenSrcPort(serviceName, srcPort) {
        let url = `/ip/loadBalancing/${serviceName}/portsRedirection/${srcPort}`;
        return this.client.request('GET', url);
    }
    /**
     * Port redirections [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/portsRedirection/%7BsrcPort%7D#DELETE)
     */
    DeleteAPortRedirection(serviceName, srcPort) {
        let url = `/ip/loadBalancing/${serviceName}/portsRedirection/${srcPort}`;
        return this.client.request('DELETE', url);
    }
    /**
     * probeIp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/probeIp#GET)
     */
    IpSubnetUsedToSendProbesToYourBackends(serviceName, zone) {
        let url = `/ip/loadBalancing/${serviceName}/probeIp?`;
        const queryParams = new query_params_1.default();
        if (zone) {
            queryParams.set('zone', zone.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
__decorate([
    yourdomainabc(serviceName, string)
], Ip.prototype, "", void 0);
exports.Ip = Ip;
{
    let url = `/ip/loadBalancing/${serviceName}/restoreSsl`;
    return this.client.request('POST', url);
}
/**
 * Details about a Service [PRODUCTION]
* [WARN] This API action is not ready (duplicate name)
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/serviceInfos#GET)
 */
/*
GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
  let url = `/ip/loadBalancing/${serviceName}/serviceInfos`

  return this.client.request<ServicesService>('GET', url)
}
*/
/**
 * Details about a Service [PRODUCTION]
* [WARN] This API action is not ready (duplicate name)
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/serviceInfos#PUT)
 */
/*
AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
  let url = `/ip/loadBalancing/${serviceName}/serviceInfos`

  return this.client.request<void>('PUT', url, payload)
}
*/
/**
 * stickiness operations [PRODUCTION]
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/stickiness#POST)
 */
SetStickinessTypeIpSourceWillStickClientsToABackendByTheirSourceIpCookieWillStickThemByInsertingACookieNoneIsToSetNoStickiness(serviceName, string, stickiness, IpLoadBalancingStickiness);
Promise < IpLoadBalancingTask > {
    let, url = `/ip/loadBalancing/${serviceName}/stickiness`,
    return: this.client.request('POST', url, { stickiness })
};
/**
 * switchToIplbNextGenerationApi operations [PRODUCTION]
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/switchToIplbNextGenerationApi#POST)
 */
SwitchToIpLoadbalancingNextgenAPIBenefits_AdditionnalsProbesDDOSProtection(serviceName, string);
Promise < IpLoadbalancingTaskTask > {
    let, url = `/ip/loadBalancing/${serviceName}/switchToIplbNextGenerationApi`,
    return: this.client.request('POST', url)
};
/**
 * List the ip.LoadBalancingTask objects [PRODUCTION]
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/task#GET)
 */
TaskListAssociatedWithThisIP(serviceName, string);
Promise < number[] > {
    let, url = `/ip/loadBalancing/${serviceName}/task`,
    return: this.client.request('GET', url)
};
/**
 * List of tasks associated with your IP load balancing [PRODUCTION]
* [WARN] This API action is not ready (duplicate name)
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/loadBalancing/%7BserviceName%7D/task/%7BtaskId%7D#GET)
 */
/*
GetThisObjectProperties(serviceName: string, taskId: number): Promise<IpLoadBalancingTask> {
  let url = `/ip/loadBalancing/${serviceName}/task/${taskId}`

  return this.client.request<IpLoadBalancingTask>('GET', url)
}
*/
/**
 * Operations about the IP service [BETA]
* [WARN] This API action is not ready (duplicate name)
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service#GET)
 */
/*
ListAvailableServices(): Promise<string[]> {
  let url = `/ip/service`

  return this.client.request<string[]>('GET', url)
}
*/
/**
 * Your IP linked to service [BETA]
* [WARN] This API action is not ready (duplicate name)
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D#GET)
 */
/*
GetThisObjectProperties(serviceName: string): Promise<IpServiceIp> {
  let url = `/ip/service/${serviceName}`

  return this.client.request<IpServiceIp>('GET', url)
}
*/
/**
 * Your IP linked to service [BETA]
* [WARN] This API action is not ready (duplicate name)
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D#PUT)
 */
/*
AlterThisObjectProperties(serviceName: string, payload: IpServiceIp): Promise<void> {
  let url = `/ip/service/${serviceName}`

  return this.client.request<void>('PUT', url, payload)
}
*/
/**
 * Change the contacts of this service [BETA]
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D/changeContact#POST)
 */
LaunchAContactChangeProcedure(serviceName, string, contactAdmin ?  : string, contactBilling ?  : string, contactTech ?  : string);
Promise < number[] > {
    let, url = `/ip/service/${serviceName}/changeContact`,
    return: this.client.request('POST', url, { contactAdmin, contactBilling, contactTech })
};
/**
 * Confirm termination of your service [BETA]
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D/confirmTermination#POST)
 */
ConfirmTerminationOfYourService(serviceName, string, token, string, commentary ?  : string, futureUse ?  : ServiceTerminationFutureUse, reason ?  : ServiceTerminationReason);
Promise < string > {
    let, url = `/ip/service/${serviceName}/confirmTermination`,
    return: this.client.request('POST', url, { token, commentary, futureUse, reason })
};
/**
 * Details about a non-expiring Service [BETA]
* [WARN] This API action is not ready (duplicate name)
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D/serviceInfos#GET)
 */
/*
GetThisObjectProperties(serviceName: string): Promise<ServicesNonExpiringService> {
  let url = `/ip/service/${serviceName}/serviceInfos`

  return this.client.request<ServicesNonExpiringService>('GET', url)
}
*/
/**
 * Terminate your service [BETA]
 * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ip/service/%7BserviceName%7D/terminate#POST)
 */
TerminateYourService(serviceName, string);
Promise < string > {
    let, url = `/ip/service/${serviceName}/terminate`,
    return: this.client.request('POST', url)
};
//# sourceMappingURL=ip.js.map