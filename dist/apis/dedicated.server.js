"use strict";
// GENERATED SDK for dedicated/server API
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
 * The datacenter
 */
var DedicatedAvailabilityDatacenter;
(function (DedicatedAvailabilityDatacenter) {
    DedicatedAvailabilityDatacenter["BHS"] = "bhs";
    DedicatedAvailabilityDatacenter["DEFAULT"] = "default";
    DedicatedAvailabilityDatacenter["FRA"] = "fra";
    DedicatedAvailabilityDatacenter["GRA"] = "gra";
    DedicatedAvailabilityDatacenter["HIL"] = "hil";
    DedicatedAvailabilityDatacenter["LON"] = "lon";
    DedicatedAvailabilityDatacenter["RBX"] = "rbx";
    DedicatedAvailabilityDatacenter["RBX_HZ"] = "rbx-hz";
    DedicatedAvailabilityDatacenter["SBG"] = "sbg";
    DedicatedAvailabilityDatacenter["SGP"] = "sgp";
    DedicatedAvailabilityDatacenter["SYD"] = "syd";
    DedicatedAvailabilityDatacenter["VIN"] = "vin";
    DedicatedAvailabilityDatacenter["WAW"] = "waw";
})(DedicatedAvailabilityDatacenter = exports.DedicatedAvailabilityDatacenter || (exports.DedicatedAvailabilityDatacenter = {}));
/*
 * The region
 */
var DedicatedAvailabilityRegion;
(function (DedicatedAvailabilityRegion) {
    DedicatedAvailabilityRegion["EUROPE"] = "europe";
    DedicatedAvailabilityRegion["NORTHAMERICA"] = "northAmerica";
})(DedicatedAvailabilityRegion = exports.DedicatedAvailabilityRegion || (exports.DedicatedAvailabilityRegion = {}));
/*
 * ovh datacenter
 */
var DedicatedDatacenter;
(function (DedicatedDatacenter) {
    DedicatedDatacenter["BHS1"] = "bhs1";
    DedicatedDatacenter["BHS2"] = "bhs2";
    DedicatedDatacenter["BHS3"] = "bhs3";
    DedicatedDatacenter["BHS4"] = "bhs4";
    DedicatedDatacenter["BHS5"] = "bhs5";
    DedicatedDatacenter["BHS6"] = "bhs6";
    DedicatedDatacenter["BHS7"] = "bhs7";
    DedicatedDatacenter["DC1"] = "dc1";
    DedicatedDatacenter["ERI1"] = "eri1";
    DedicatedDatacenter["GRA1"] = "gra1";
    DedicatedDatacenter["GRA2"] = "gra2";
    DedicatedDatacenter["GSW"] = "gsw";
    DedicatedDatacenter["HIL1"] = "hil1";
    DedicatedDatacenter["LIM1"] = "lim1";
    DedicatedDatacenter["P19"] = "p19";
    DedicatedDatacenter["RBX_HZ"] = "rbx-hz";
    DedicatedDatacenter["RBX1"] = "rbx1";
    DedicatedDatacenter["RBX2"] = "rbx2";
    DedicatedDatacenter["RBX3"] = "rbx3";
    DedicatedDatacenter["RBX4"] = "rbx4";
    DedicatedDatacenter["RBX5"] = "rbx5";
    DedicatedDatacenter["RBX6"] = "rbx6";
    DedicatedDatacenter["RBX7"] = "rbx7";
    DedicatedDatacenter["SBG1"] = "sbg1";
    DedicatedDatacenter["SBG2"] = "sbg2";
    DedicatedDatacenter["SBG3"] = "sbg3";
    DedicatedDatacenter["SBG4"] = "sbg4";
    DedicatedDatacenter["SGP1"] = "sgp1";
    DedicatedDatacenter["SYD1"] = "syd1";
    DedicatedDatacenter["VIN1"] = "vin1";
    DedicatedDatacenter["WAW1"] = "waw1";
})(DedicatedDatacenter = exports.DedicatedDatacenter || (exports.DedicatedDatacenter = {}));
/*
 * List NetworkInterfaceController linktype
 */
var DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType;
(function (DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType) {
    DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType["ISOLATED"] = "isolated";
    DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType["PRIVATE"] = "private";
    DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType["PRIVATE_LAG"] = "private_lag";
    DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType["PROVISIONING"] = "provisioning";
    DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType["PUBLIC"] = "public";
})(DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType = exports.DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType || (exports.DedicatednetworkInterfaceControllerNetworkInterfaceControllerLinkType = {}));
/*
 * Operating system name
 */
var DedicatedOsAvailabilities;
(function (DedicatedOsAvailabilities) {
    DedicatedOsAvailabilities["ARCHLINUX_INSTALLER_64"] = "archlinux-installer_64";
    DedicatedOsAvailabilities["CENTOS5_64"] = "centos5_64";
    DedicatedOsAvailabilities["CENTOS6_CPANEL_LATEST_64"] = "centos6-cpanel-latest_64";
    DedicatedOsAvailabilities["CENTOS6_OVH_64"] = "centos6-ovh_64";
    DedicatedOsAvailabilities["CENTOS6_PLESK12_64"] = "centos6-plesk12_64";
    DedicatedOsAvailabilities["CENTOS6_64"] = "centos6_64";
    DedicatedOsAvailabilities["CENTOS7_CPANEL_LATEST_64"] = "centos7-cpanel-latest_64";
    DedicatedOsAvailabilities["CENTOS7_DIRECTADMIN_64"] = "centos7-directadmin_64";
    DedicatedOsAvailabilities["CENTOS7_FPGA_ACCELIZE_64"] = "centos7-fpga-accelize_64";
    DedicatedOsAvailabilities["CENTOS7_FPGA_INTEL_OPENCL_64"] = "centos7-fpga-intel-opencl_64";
    DedicatedOsAvailabilities["CENTOS7_PLESK125_64"] = "centos7-plesk125_64";
    DedicatedOsAvailabilities["CENTOS7_PLESK12_64"] = "centos7-plesk12_64";
    DedicatedOsAvailabilities["CENTOS7_PLESK17_64"] = "centos7-plesk17_64";
    DedicatedOsAvailabilities["CENTOS7_64"] = "centos7_64";
    DedicatedOsAvailabilities["CLOUDLINUX6_64"] = "cloudlinux6_64";
    DedicatedOsAvailabilities["CLOUDLINUX7_64"] = "cloudlinux7_64";
    DedicatedOsAvailabilities["COREOS_ALPHA_64"] = "coreos-alpha_64";
    DedicatedOsAvailabilities["COREOS_64"] = "coreos_64";
    DedicatedOsAvailabilities["DEBIAN7_ISPCONFIG3_64"] = "debian7-ispconfig3_64";
    DedicatedOsAvailabilities["DEBIAN7_MINECRAFT_64"] = "debian7-minecraft_64";
    DedicatedOsAvailabilities["DEBIAN7_PLESK12_64"] = "debian7-plesk12_64";
    DedicatedOsAvailabilities["DEBIAN7_64"] = "debian7_64";
    DedicatedOsAvailabilities["DEBIAN8_ISPCONFIG3_64"] = "debian8-ispconfig3_64";
    DedicatedOsAvailabilities["DEBIAN8_PLESK125_64"] = "debian8-plesk125_64";
    DedicatedOsAvailabilities["DEBIAN8_64"] = "debian8_64";
    DedicatedOsAvailabilities["DEBIAN8_ARMHF_32"] = "debian8_armhf_32";
    DedicatedOsAvailabilities["DEBIAN9_ISPCONFIG3_64"] = "debian9-ispconfig3_64";
    DedicatedOsAvailabilities["DEBIAN9_64"] = "debian9_64";
    DedicatedOsAvailabilities["DEBIAN9_ARMHF_32"] = "debian9_armhf_32";
    DedicatedOsAvailabilities["DGX1_OS_3_64"] = "dgx1-os-3_64";
    DedicatedOsAvailabilities["ESXI51_64"] = "esxi51_64";
    DedicatedOsAvailabilities["ESXI55_64"] = "esxi55_64";
    DedicatedOsAvailabilities["ESXI5_64"] = "esxi5_64";
    DedicatedOsAvailabilities["ESXI60_64"] = "esxi60_64";
    DedicatedOsAvailabilities["ESXI65_64"] = "esxi65_64";
    DedicatedOsAvailabilities["FEDORA26_64"] = "fedora26_64";
    DedicatedOsAvailabilities["FEDORA27_64"] = "fedora27_64";
    DedicatedOsAvailabilities["FREEBSD10_ZFS_64"] = "freebsd10-zfs_64";
    DedicatedOsAvailabilities["FREEBSD10_64"] = "freebsd10_64";
    DedicatedOsAvailabilities["FREEBSD11_ZFS_64"] = "freebsd11-zfs_64";
    DedicatedOsAvailabilities["GENTOO11_64"] = "gentoo11_64";
    DedicatedOsAvailabilities["OPENMEDIAVAULT3_ARMHF_32"] = "openmediavault3_armhf_32";
    DedicatedOsAvailabilities["OPENMEDIAVAULT_ARMHF_32"] = "openmediavault_armhf_32";
    DedicatedOsAvailabilities["OPENSUSE42_64"] = "opensuse42_64";
    DedicatedOsAvailabilities["PROXMOX4_ZFS_64"] = "proxmox4-zfs_64";
    DedicatedOsAvailabilities["PROXMOX4_64"] = "proxmox4_64";
    DedicatedOsAvailabilities["PROXMOX5_ZFS_64"] = "proxmox5-zfs_64";
    DedicatedOsAvailabilities["PROXMOX5_64"] = "proxmox5_64";
    DedicatedOsAvailabilities["SLACKWARE14_64"] = "slackware14_64";
    DedicatedOsAvailabilities["SMARTOS_64"] = "smartos_64";
    DedicatedOsAvailabilities["SOLUSVM_MASTER_VZ_64"] = "solusvm-master-vz_64";
    DedicatedOsAvailabilities["SOLUSVM_SLAVE_VZ_64"] = "solusvm-slave-vz_64";
    DedicatedOsAvailabilities["UBUNTU1404_PLESK125_64"] = "ubuntu1404-plesk125_64";
    DedicatedOsAvailabilities["UBUNTU1404_SERVER_64"] = "ubuntu1404-server_64";
    DedicatedOsAvailabilities["UBUNTU1510_SERVER_ARM64_64"] = "ubuntu1510-server_arm64_64";
    DedicatedOsAvailabilities["UBUNTU1510_SERVER_PPC64EL_64"] = "ubuntu1510-server_ppc64el_64";
    DedicatedOsAvailabilities["UBUNTU1604_DESKTOP_64"] = "ubuntu1604-desktop_64";
    DedicatedOsAvailabilities["UBUNTU1604_SERVER_64"] = "ubuntu1604-server_64";
    DedicatedOsAvailabilities["UBUNTU1604_SERVER_ARMHF_32"] = "ubuntu1604-server_armhf_32";
    DedicatedOsAvailabilities["UBUNTU1604_SERVER_PPC64EL_64"] = "ubuntu1604-server_ppc64el_64";
    DedicatedOsAvailabilities["UBUNTU1710_SERVER_64"] = "ubuntu1710-server_64";
    DedicatedOsAvailabilities["WIN2008R2_DC_VIRTUOZZO46_64"] = "win2008r2-dc-virtuozzo46_64";
    DedicatedOsAvailabilities["WIN2008R2_DC_64"] = "win2008r2-dc_64";
    DedicatedOsAvailabilities["WIN2008R2_ENT_PLESK10_64"] = "win2008r2-ent-plesk10_64";
    DedicatedOsAvailabilities["WIN2008R2_ENT_PLESK11_64"] = "win2008r2-ent-plesk11_64";
    DedicatedOsAvailabilities["WIN2008R2_ENT_PLESK12_64"] = "win2008r2-ent-plesk12_64";
    DedicatedOsAvailabilities["WIN2008R2_ENT_SP2010FOUND_64"] = "win2008r2-ent-sp2010found_64";
    DedicatedOsAvailabilities["WIN2008R2_ENT_VIRTUOZZO46_64"] = "win2008r2-ent-virtuozzo46_64";
    DedicatedOsAvailabilities["WIN2008R2_ENT_64"] = "win2008r2-ent_64";
    DedicatedOsAvailabilities["WIN2008R2_STD_PLESK11_64"] = "win2008r2-std-plesk11_64";
    DedicatedOsAvailabilities["WIN2008R2_STD_PLESK12_64"] = "win2008r2-std-plesk12_64";
    DedicatedOsAvailabilities["WIN2008R2_STD_SP2010FOUND_64"] = "win2008r2-std-sp2010found_64";
    DedicatedOsAvailabilities["WIN2008R2_STD_64"] = "win2008r2-std_64";
    DedicatedOsAvailabilities["WIN2008R2_WEB_PLESK11_64"] = "win2008r2-web-plesk11_64";
    DedicatedOsAvailabilities["WIN2008R2_WEB_PLESK12_64"] = "win2008r2-web-plesk12_64";
    DedicatedOsAvailabilities["WIN2008R2_WEB_SP2010FOUND_64"] = "win2008r2-web-sp2010found_64";
    DedicatedOsAvailabilities["WIN2008R2_WEB_64"] = "win2008r2-web_64";
    DedicatedOsAvailabilities["WIN2008R2CORE_DC_64"] = "win2008r2core-dc_64";
    DedicatedOsAvailabilities["WIN2008R2CORE_ENT_64"] = "win2008r2core-ent_64";
    DedicatedOsAvailabilities["WIN2008R2CORE_HYPERV_64"] = "win2008r2core-hyperv_64";
    DedicatedOsAvailabilities["WIN2008R2CORE_STD_64"] = "win2008r2core-std_64";
    DedicatedOsAvailabilities["WIN2008R2CORE_WEB_64"] = "win2008r2core-web_64";
    DedicatedOsAvailabilities["WIN2012_DC_64"] = "win2012-dc_64";
    DedicatedOsAvailabilities["WIN2012_HYPERV3_64"] = "win2012-hyperv3_64";
    DedicatedOsAvailabilities["WIN2012_STD_PLESK11_64"] = "win2012-std-plesk11_64";
    DedicatedOsAvailabilities["WIN2012_STD_PLESK12_64"] = "win2012-std-plesk12_64";
    DedicatedOsAvailabilities["WIN2012_STD_64"] = "win2012-std_64";
    DedicatedOsAvailabilities["WIN2012R2_DC_64"] = "win2012r2-dc_64";
    DedicatedOsAvailabilities["WIN2012R2_HYPERV3_64"] = "win2012r2-hyperv3_64";
    DedicatedOsAvailabilities["WIN2012R2_STD_PLESK12_64"] = "win2012r2-std-plesk12_64";
    DedicatedOsAvailabilities["WIN2012R2_STD_64"] = "win2012r2-std_64";
    DedicatedOsAvailabilities["WIN2016_DC_64"] = "win2016-dc_64";
    DedicatedOsAvailabilities["WIN2016_STD_64"] = "win2016-std_64";
    DedicatedOsAvailabilities["WIN81_PRO_SYSPREP_64"] = "win81-pro-sysprep_64";
    DedicatedOsAvailabilities["XENSERVER6_64"] = "xenserver6_64";
})(DedicatedOsAvailabilities = exports.DedicatedOsAvailabilities || (exports.DedicatedOsAvailabilities = {}));
/*
 * profile firewall asa
 */
var DedicatedProfileFirewall;
(function (DedicatedProfileFirewall) {
    DedicatedProfileFirewall["CISCO_ASA5505"] = "cisco.asa5505";
    DedicatedProfileFirewall["CISCO_ASA5510"] = "cisco.asa5510";
    DedicatedProfileFirewall["CISCO_ASA5520"] = "cisco.asa5520";
})(DedicatedProfileFirewall = exports.DedicatedProfileFirewall || (exports.DedicatedProfileFirewall = {}));
/*
 * Application access type
 */
var DedicatedserverAccessType;
(function (DedicatedserverAccessType) {
    DedicatedserverAccessType["DIRECTADMIN_PANEL"] = "DIRECTADMIN_PANEL";
    DedicatedserverAccessType["PLESK_PANEL"] = "PLESK_PANEL";
    DedicatedserverAccessType["PROXMOX_PANEL"] = "PROXMOX_PANEL";
    DedicatedserverAccessType["RDP"] = "RDP";
    DedicatedserverAccessType["SQL_SERVER"] = "SQL_SERVER";
    DedicatedserverAccessType["SSH"] = "SSH";
    DedicatedserverAccessType["WEB_PANEL"] = "WEB_PANEL";
})(DedicatedserverAccessType = exports.DedicatedserverAccessType || (exports.DedicatedserverAccessType = {}));
/*
 * Monitoring alert language
 */
var DedicatedserverAlertLanguage;
(function (DedicatedserverAlertLanguage) {
    DedicatedserverAlertLanguage["CZ"] = "cz";
    DedicatedserverAlertLanguage["DE"] = "de";
    DedicatedserverAlertLanguage["EN"] = "en";
    DedicatedserverAlertLanguage["ES"] = "es";
    DedicatedserverAlertLanguage["FI"] = "fi";
    DedicatedserverAlertLanguage["FR"] = "fr";
    DedicatedserverAlertLanguage["IT"] = "it";
    DedicatedserverAlertLanguage["LT"] = "lt";
    DedicatedserverAlertLanguage["NL"] = "nl";
    DedicatedserverAlertLanguage["PL"] = "pl";
    DedicatedserverAlertLanguage["PT"] = "pt";
})(DedicatedserverAlertLanguage = exports.DedicatedserverAlertLanguage || (exports.DedicatedserverAlertLanguage = {}));
/*
 * Possible values for backup status code
 */
var DedicatedserverbackupBackupStatusCode;
(function (DedicatedserverbackupBackupStatusCode) {
    DedicatedserverbackupBackupStatusCode["DELETING"] = "DELETING";
    DedicatedserverbackupBackupStatusCode["ERROR"] = "ERROR";
    DedicatedserverbackupBackupStatusCode["OK"] = "OK";
    DedicatedserverbackupBackupStatusCode["SUSPENDED"] = "SUSPENDED";
    DedicatedserverbackupBackupStatusCode["SUSPENDING"] = "SUSPENDING";
    DedicatedserverbackupBackupStatusCode["UNKNOWN"] = "UNKNOWN";
    DedicatedserverbackupBackupStatusCode["WAITING_AGREEMENTS_VALIDATION"] = "WAITING_AGREEMENTS_VALIDATION";
})(DedicatedserverbackupBackupStatusCode = exports.DedicatedserverbackupBackupStatusCode || (exports.DedicatedserverbackupBackupStatusCode = {}));
/*
 * Different backup storage type
 */
var DedicatedserverBackupStorageType;
(function (DedicatedserverBackupStorageType) {
    DedicatedserverBackupStorageType["INCLUDED"] = "included";
    DedicatedserverBackupStorageType["STORAGE"] = "storage";
})(DedicatedserverBackupStorageType = exports.DedicatedserverBackupStorageType || (exports.DedicatedserverBackupStorageType = {}));
/*
 *  Different Bandwidth type
 */
var DedicatedserverBandwidthType;
(function (DedicatedserverBandwidthType) {
    DedicatedserverBandwidthType["INCLUDED"] = "included";
    DedicatedserverBandwidthType["PLATINUM"] = "platinum";
    DedicatedserverBandwidthType["PREMIUM"] = "premium";
    DedicatedserverBandwidthType["STANDARD"] = "standard";
    DedicatedserverBandwidthType["ULTIMATE"] = "ultimate";
})(DedicatedserverBandwidthType = exports.DedicatedserverBandwidthType || (exports.DedicatedserverBandwidthType = {}));
/*
 *  Different Bandwidth type
 */
var DedicatedserverBandwidthvRackType;
(function (DedicatedserverBandwidthvRackType) {
    DedicatedserverBandwidthvRackType["INCLUDED"] = "included";
    DedicatedserverBandwidthvRackType["STANDARD"] = "standard";
})(DedicatedserverBandwidthvRackType = exports.DedicatedserverBandwidthvRackType || (exports.DedicatedserverBandwidthvRackType = {}));
/*
 * Server boot mode
 */
var DedicatedserverBootMode;
(function (DedicatedserverBootMode) {
    DedicatedserverBootMode["LEGACY"] = "legacy";
    DedicatedserverBootMode["UEFI"] = "uefi";
    DedicatedserverBootMode["UEFI_LEGACY"] = "uefi-legacy";
})(DedicatedserverBootMode = exports.DedicatedserverBootMode || (exports.DedicatedserverBootMode = {}));
/*
 * Different option activated on netboot
 */
var DedicatedserverBootOption;
(function (DedicatedserverBootOption) {
    DedicatedserverBootOption["CPUFAMILY"] = "cpufamily";
    DedicatedserverBootOption["GRSEC"] = "grsec";
    DedicatedserverBootOption["IPV6"] = "ipv6";
    DedicatedserverBootOption["SMP"] = "smp";
})(DedicatedserverBootOption = exports.DedicatedserverBootOption || (exports.DedicatedserverBootOption = {}));
/*
 *  Different netboot boot
 */
var DedicatedserverBootType;
(function (DedicatedserverBootType) {
    DedicatedserverBootType["HARDDISK"] = "harddisk";
    DedicatedserverBootType["INTERNAL"] = "internal";
    DedicatedserverBootType["IPXECUSTOMERSCRIPT"] = "ipxeCustomerScript";
    DedicatedserverBootType["NETWORK"] = "network";
    DedicatedserverBootType["RESCUE"] = "rescue";
})(DedicatedserverBootType = exports.DedicatedserverBootType || (exports.DedicatedserverBootType = {}));
/*
 * Dedicated server bandwidth burst
 */
var DedicatedserverBurstStatus;
(function (DedicatedserverBurstStatus) {
    DedicatedserverBurstStatus["ACTIVE"] = "active";
    DedicatedserverBurstStatus["INACTIVE"] = "inactive";
    DedicatedserverBurstStatus["INACTIVELOCKED"] = "inactiveLocked";
})(DedicatedserverBurstStatus = exports.DedicatedserverBurstStatus || (exports.DedicatedserverBurstStatus = {}));
/*
 * cpu family
 */
var DedicatedserverCpuFamily;
(function (DedicatedserverCpuFamily) {
    DedicatedserverCpuFamily["ARM64"] = "arm64";
    DedicatedserverCpuFamily["ARMHF32"] = "armhf32";
    DedicatedserverCpuFamily["PPC64"] = "ppc64";
    DedicatedserverCpuFamily["X86"] = "x86";
    DedicatedserverCpuFamily["X86_HT"] = "x86-ht";
    DedicatedserverCpuFamily["X86_64"] = "x86_64";
})(DedicatedserverCpuFamily = exports.DedicatedserverCpuFamily || (exports.DedicatedserverCpuFamily = {}));
/*
 * Disk interface type enum
 */
var DedicatedserverDiskType;
(function (DedicatedserverDiskType) {
    DedicatedserverDiskType["NVME"] = "NVMe";
    DedicatedserverDiskType["SAS"] = "SAS";
    DedicatedserverDiskType["SATA"] = "SATA";
    DedicatedserverDiskType["SSD"] = "SSD";
    DedicatedserverDiskType["UNKNOWN"] = "Unknown";
})(DedicatedserverDiskType = exports.DedicatedserverDiskType || (exports.DedicatedserverDiskType = {}));
/*
 * Dedicated server firewall mode
 */
var DedicatedserverFirewallMode;
(function (DedicatedserverFirewallMode) {
    DedicatedserverFirewallMode["ROUTED"] = "routed";
    DedicatedserverFirewallMode["TRANSPARENT"] = "transparent";
})(DedicatedserverFirewallMode = exports.DedicatedserverFirewallMode || (exports.DedicatedserverFirewallMode = {}));
/*
 * Firewall model name
 */
var DedicatedserverFirewallModel;
(function (DedicatedserverFirewallModel) {
    DedicatedserverFirewallModel["ASA5505"] = "asa5505";
    DedicatedserverFirewallModel["ASA5510"] = "asa5510";
    DedicatedserverFirewallModel["ASA5520"] = "asa5520";
})(DedicatedserverFirewallModel = exports.DedicatedserverFirewallModel || (exports.DedicatedserverFirewallModel = {}));
/*
 * Expansion card type enum
 */
var DedicatedserverHardwareSpecificationsExpansionCardType;
(function (DedicatedserverHardwareSpecificationsExpansionCardType) {
    DedicatedserverHardwareSpecificationsExpansionCardType["FPGA"] = "fpga";
    DedicatedserverHardwareSpecificationsExpansionCardType["GPU"] = "gpu";
})(DedicatedserverHardwareSpecificationsExpansionCardType = exports.DedicatedserverHardwareSpecificationsExpansionCardType || (exports.DedicatedserverHardwareSpecificationsExpansionCardType = {}));
/*
 * Raid hard configuration
 */
var DedicatedserverHardwareSpecificationsRaidHard;
(function (DedicatedserverHardwareSpecificationsRaidHard) {
    DedicatedserverHardwareSpecificationsRaidHard["RAID0"] = "raid0";
    DedicatedserverHardwareSpecificationsRaidHard["RAID1"] = "raid1";
    DedicatedserverHardwareSpecificationsRaidHard["RAID10"] = "raid10";
    DedicatedserverHardwareSpecificationsRaidHard["RAID1E"] = "raid1E";
    DedicatedserverHardwareSpecificationsRaidHard["RAID5"] = "raid5";
    DedicatedserverHardwareSpecificationsRaidHard["RAID50"] = "raid50";
    DedicatedserverHardwareSpecificationsRaidHard["RAID6"] = "raid6";
    DedicatedserverHardwareSpecificationsRaidHard["RAID60"] = "raid60";
})(DedicatedserverHardwareSpecificationsRaidHard = exports.DedicatedserverHardwareSpecificationsRaidHard || (exports.DedicatedserverHardwareSpecificationsRaidHard = {}));
/*
 * Distinct Installation status
 */
var DedicatedserverInstallationProgressStatus;
(function (DedicatedserverInstallationProgressStatus) {
    DedicatedserverInstallationProgressStatus["DOING"] = "doing";
    DedicatedserverInstallationProgressStatus["DONE"] = "done";
    DedicatedserverInstallationProgressStatus["ERROR"] = "error";
    DedicatedserverInstallationProgressStatus["EXPIRED"] = "expired";
    DedicatedserverInstallationProgressStatus["IDLE"] = "idle";
    DedicatedserverInstallationProgressStatus["PENDING"] = "pending";
    DedicatedserverInstallationProgressStatus["STOPPING"] = "stopping";
    DedicatedserverInstallationProgressStatus["TODO"] = "todo";
})(DedicatedserverInstallationProgressStatus = exports.DedicatedserverInstallationProgressStatus || (exports.DedicatedserverInstallationProgressStatus = {}));
/*
 * Available localization for this static IP
 */
var DedicatedserverIpCountry;
(function (DedicatedserverIpCountry) {
    DedicatedserverIpCountry["AU"] = "au";
    DedicatedserverIpCountry["BE"] = "be";
    DedicatedserverIpCountry["CA"] = "ca";
    DedicatedserverIpCountry["CZ"] = "cz";
    DedicatedserverIpCountry["DE"] = "de";
    DedicatedserverIpCountry["ES"] = "es";
    DedicatedserverIpCountry["FI"] = "fi";
    DedicatedserverIpCountry["FR"] = "fr";
    DedicatedserverIpCountry["IE"] = "ie";
    DedicatedserverIpCountry["IT"] = "it";
    DedicatedserverIpCountry["LT"] = "lt";
    DedicatedserverIpCountry["NL"] = "nl";
    DedicatedserverIpCountry["PL"] = "pl";
    DedicatedserverIpCountry["PT"] = "pt";
    DedicatedserverIpCountry["SG"] = "sg";
    DedicatedserverIpCountry["UK"] = "uk";
    DedicatedserverIpCountry["US"] = "us";
})(DedicatedserverIpCountry = exports.DedicatedserverIpCountry || (exports.DedicatedserverIpCountry = {}));
/*
 * Distinct way to acces a KVM IPMI session
 */
var DedicatedserverIpmiAccessType;
(function (DedicatedserverIpmiAccessType) {
    DedicatedserverIpmiAccessType["KVMIPHTML5URL"] = "kvmipHtml5URL";
    DedicatedserverIpmiAccessType["KVMIPJNLP"] = "kvmipJnlp";
    DedicatedserverIpmiAccessType["SERIALOVERLANSSHKEY"] = "serialOverLanSshKey";
    DedicatedserverIpmiAccessType["SERIALOVERLANURL"] = "serialOverLanURL";
})(DedicatedserverIpmiAccessType = exports.DedicatedserverIpmiAccessType || (exports.DedicatedserverIpmiAccessType = {}));
/*
 * Different test can be made on IPMI interface
 */
var DedicatedserverIpmiTestType;
(function (DedicatedserverIpmiTestType) {
    DedicatedserverIpmiTestType["HTTP"] = "http";
    DedicatedserverIpmiTestType["PASSWORD"] = "password";
    DedicatedserverIpmiTestType["PING"] = "ping";
})(DedicatedserverIpmiTestType = exports.DedicatedserverIpmiTestType || (exports.DedicatedserverIpmiTestType = {}));
/*
 * Orderable IP type
 */
var DedicatedserverIpTypeOrderable;
(function (DedicatedserverIpTypeOrderable) {
    DedicatedserverIpTypeOrderable["FAILOVER"] = "failover";
    DedicatedserverIpTypeOrderable["STATIC"] = "static";
    DedicatedserverIpTypeOrderable["UNSHIELDED"] = "unshielded";
})(DedicatedserverIpTypeOrderable = exports.DedicatedserverIpTypeOrderable || (exports.DedicatedserverIpTypeOrderable = {}));
/*
 * Monitoring protocol
 */
var DedicatedserverMonitoringProtocol;
(function (DedicatedserverMonitoringProtocol) {
    DedicatedserverMonitoringProtocol["DNS"] = "DNS";
    DedicatedserverMonitoringProtocol["FTP"] = "FTP";
    DedicatedserverMonitoringProtocol["HTTP"] = "HTTP";
    DedicatedserverMonitoringProtocol["IMAP"] = "IMAP";
    DedicatedserverMonitoringProtocol["POP"] = "POP";
    DedicatedserverMonitoringProtocol["SMTP"] = "SMTP";
    DedicatedserverMonitoringProtocol["SSH"] = "SSH";
    DedicatedserverMonitoringProtocol["OPENTCP"] = "openTCP";
})(DedicatedserverMonitoringProtocol = exports.DedicatedserverMonitoringProtocol || (exports.DedicatedserverMonitoringProtocol = {}));
/*
 * distincts MRTG period
 */
var DedicatedserverMrtgPeriod;
(function (DedicatedserverMrtgPeriod) {
    DedicatedserverMrtgPeriod["DAILY"] = "daily";
    DedicatedserverMrtgPeriod["HOURLY"] = "hourly";
    DedicatedserverMrtgPeriod["MONTHLY"] = "monthly";
    DedicatedserverMrtgPeriod["WEEKLY"] = "weekly";
    DedicatedserverMrtgPeriod["YEARLY"] = "yearly";
})(DedicatedserverMrtgPeriod = exports.DedicatedserverMrtgPeriod || (exports.DedicatedserverMrtgPeriod = {}));
/*
 * distincts MRTG type
 */
var DedicatedserverMrtgType;
(function (DedicatedserverMrtgType) {
    DedicatedserverMrtgType["ERRORS_DOWNLOAD"] = "errors:download";
    DedicatedserverMrtgType["ERRORS_UPLOAD"] = "errors:upload";
    DedicatedserverMrtgType["PACKETS_DOWNLOAD"] = "packets:download";
    DedicatedserverMrtgType["PACKETS_UPLOAD"] = "packets:upload";
    DedicatedserverMrtgType["TRAFFIC_DOWNLOAD"] = "traffic:download";
    DedicatedserverMrtgType["TRAFFIC_UPLOAD"] = "traffic:upload";
})(DedicatedserverMrtgType = exports.DedicatedserverMrtgType || (exports.DedicatedserverMrtgType = {}));
/*
 * All options a dedicated server can have and release
 */
var DedicatedserverOption;
(function (DedicatedserverOption) {
    DedicatedserverOption["BACKUPPROTOCOL"] = "BACKUPPROTOCOL";
    DedicatedserverOption["BANDWIDTH"] = "BANDWIDTH";
    DedicatedserverOption["BANDWIDTH_VRACK"] = "BANDWIDTH_VRACK";
    DedicatedserverOption["OLA"] = "OLA";
    DedicatedserverOption["SGX"] = "SGX";
    DedicatedserverOption["TRAFFIC"] = "TRAFFIC";
    DedicatedserverOption["TRAFFIC_DISCOVER"] = "TRAFFIC_DISCOVER";
    DedicatedserverOption["TUNING"] = "TUNING";
    DedicatedserverOption["TUNING_FIREWALL"] = "TUNING_FIREWALL";
    DedicatedserverOption["TUNING_KVM"] = "TUNING_KVM";
    DedicatedserverOption["USB_KVM_IP"] = "USB_KVM_IP";
})(DedicatedserverOption = exports.DedicatedserverOption || (exports.DedicatedserverOption = {}));
/*
 * Required option
 */
var DedicatedserverOptionRequired;
(function (DedicatedserverOptionRequired) {
    DedicatedserverOptionRequired["PROFESSIONALUSE"] = "professionalUse";
})(DedicatedserverOptionRequired = exports.DedicatedserverOptionRequired || (exports.DedicatedserverOptionRequired = {}));
/*
 * All states a dedicated server option can be in
 */
var DedicatedserverOptionState;
(function (DedicatedserverOptionState) {
    DedicatedserverOptionState["RELEASED"] = "released";
    DedicatedserverOptionState["SUBSCRIBED"] = "subscribed";
})(DedicatedserverOptionState = exports.DedicatedserverOptionState || (exports.DedicatedserverOptionState = {}));
/*
 * Dedicated server orderable features
 */
var DedicatedserverOrderableSysFeature;
(function (DedicatedserverOrderableSysFeature) {
    DedicatedserverOrderableSysFeature["BACKUPPROTOCOL"] = "backupProtocol";
    DedicatedserverOrderableSysFeature["MONITORING"] = "monitoring";
})(DedicatedserverOrderableSysFeature = exports.DedicatedserverOrderableSysFeature || (exports.DedicatedserverOrderableSysFeature = {}));
/*
 * distincts RTM charts period
 */
var DedicatedserverRtmChartPeriod;
(function (DedicatedserverRtmChartPeriod) {
    DedicatedserverRtmChartPeriod["DAILY"] = "daily";
    DedicatedserverRtmChartPeriod["MONTHLY"] = "monthly";
    DedicatedserverRtmChartPeriod["WEEKLY"] = "weekly";
    DedicatedserverRtmChartPeriod["YEARLY"] = "yearly";
})(DedicatedserverRtmChartPeriod = exports.DedicatedserverRtmChartPeriod || (exports.DedicatedserverRtmChartPeriod = {}));
/*
 * distincts probes type
 */
var DedicatedserverRtmChartType;
(function (DedicatedserverRtmChartType) {
    DedicatedserverRtmChartType["CPU"] = "cpu";
    DedicatedserverRtmChartType["LOADAVG1"] = "loadavg1";
    DedicatedserverRtmChartType["LOADAVG15"] = "loadavg15";
    DedicatedserverRtmChartType["LOADAVG5"] = "loadavg5";
    DedicatedserverRtmChartType["MEMORY"] = "memory";
    DedicatedserverRtmChartType["PROCESSCOUNT"] = "processCount";
    DedicatedserverRtmChartType["PROCESSRUNNING"] = "processRunning";
    DedicatedserverRtmChartType["SWAP"] = "swap";
})(DedicatedserverRtmChartType = exports.DedicatedserverRtmChartType || (exports.DedicatedserverRtmChartType = {}));
/*
 *  Different RAID status
 */
var DedicatedserverRtmRaidStatus;
(function (DedicatedserverRtmRaidStatus) {
    DedicatedserverRtmRaidStatus["KO"] = "KO";
    DedicatedserverRtmRaidStatus["OK"] = "OK";
    DedicatedserverRtmRaidStatus["REBUILDING"] = "REBUILDING";
    DedicatedserverRtmRaidStatus["UNKNOWN"] = "UNKNOWN";
})(DedicatedserverRtmRaidStatus = exports.DedicatedserverRtmRaidStatus || (exports.DedicatedserverRtmRaidStatus = {}));
/*
 * SPLA license status
 */
var DedicatedserverSplaStatus;
(function (DedicatedserverSplaStatus) {
    DedicatedserverSplaStatus["TERMINATED"] = "terminated";
    DedicatedserverSplaStatus["USED"] = "used";
    DedicatedserverSplaStatus["WAITINGTOCHECK"] = "waitingToCheck";
})(DedicatedserverSplaStatus = exports.DedicatedserverSplaStatus || (exports.DedicatedserverSplaStatus = {}));
/*
 * SPLA license type
 */
var DedicatedserverSplaType;
(function (DedicatedserverSplaType) {
    DedicatedserverSplaType["OS"] = "os";
    DedicatedserverSplaType["SQLSTD"] = "sqlstd";
    DedicatedserverSplaType["SQLWEB"] = "sqlweb";
})(DedicatedserverSplaType = exports.DedicatedserverSplaType || (exports.DedicatedserverSplaType = {}));
/*
 * All states a Dedicated can in
 */
var DedicatedserverState;
(function (DedicatedserverState) {
    DedicatedserverState["ERROR"] = "error";
    DedicatedserverState["HACKED"] = "hacked";
    DedicatedserverState["HACKEDBLOCKED"] = "hackedBlocked";
    DedicatedserverState["OK"] = "ok";
})(DedicatedserverState = exports.DedicatedserverState || (exports.DedicatedserverState = {}));
/*
 * distincts support level
 */
var DedicatedserverSupportLevel;
(function (DedicatedserverSupportLevel) {
    DedicatedserverSupportLevel["CRITICAL"] = "critical";
    DedicatedserverSupportLevel["FASTPATH"] = "fastpath";
    DedicatedserverSupportLevel["GS"] = "gs";
    DedicatedserverSupportLevel["PRO"] = "pro";
})(DedicatedserverSupportLevel = exports.DedicatedserverSupportLevel || (exports.DedicatedserverSupportLevel = {}));
/*
 * distincts support level
 */
var DedicatedserverSupportLevelOrderable;
(function (DedicatedserverSupportLevelOrderable) {
    DedicatedserverSupportLevelOrderable["CRITICAL"] = "critical";
    DedicatedserverSupportLevelOrderable["FASTPATH"] = "fastpath";
    DedicatedserverSupportLevelOrderable["GS"] = "gs";
})(DedicatedserverSupportLevelOrderable = exports.DedicatedserverSupportLevelOrderable || (exports.DedicatedserverSupportLevelOrderable = {}));
/*
 * Distinct type of virtual mac
 */
var DedicatedserverVmacType;
(function (DedicatedserverVmacType) {
    DedicatedserverVmacType["OVH"] = "ovh";
    DedicatedserverVmacType["VMWARE"] = "vmware";
})(DedicatedserverVmacType = exports.DedicatedserverVmacType || (exports.DedicatedserverVmacType = {}));
/*
 * enable or disable
 */
var DedicatedStatus;
(function (DedicatedStatus) {
    DedicatedStatus["DISABLE"] = "disable";
    DedicatedStatus["ENABLE"] = "enable";
})(DedicatedStatus = exports.DedicatedStatus || (exports.DedicatedStatus = {}));
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
 * Available VirtualNetworkInterface modes
 */
var DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceMode;
(function (DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceMode) {
    DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceMode["PUBLIC"] = "public";
    DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceMode["VRACK"] = "vrack";
    DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceMode["VRACK_AGGREGATION"] = "vrack_aggregation";
})(DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceMode = exports.DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceMode || (exports.DedicatedvirtualNetworkInterfaceVirtualNetworkInterfaceMode = {}));
/*
 * All versions for Windows products
 */
var LicenseWindowsOsVersion;
(function (LicenseWindowsOsVersion) {
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_ENTERPRISE_EDITION"] = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU"] = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_STANDARD_EDITION"] = "WINDOWS_SERVER_2003_STANDARD_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_WEB_EDITION"] = "WINDOWS_SERVER_2003_WEB_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_WEB_EDITION_2_CPU"] = "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION"] = "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_WEB_STANDARD_EDITION"] = "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU"] = "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_DATACENTER_EDITION"] = "WINDOWS_SERVER_2008_DATACENTER_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU"] = "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU"] = "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_ENTERPRISE_EDITION"] = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU"] = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU"] = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_STANDARD_EDITION"] = "WINDOWS_SERVER_2008_STANDARD_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU"] = "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU"] = "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_WEB_EDITION"] = "WINDOWS_SERVER_2008_WEB_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_WEB_EDITION_2_CPU"] = "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_WEB_EDITION_4_CPU"] = "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_WEB_STANDARD_EDITION"] = "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_DATACENTER_EDITION"] = "WINDOWS_SERVER_2012_DATACENTER_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU"] = "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU"] = "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_ENTERPRISE_EDITION"] = "WINDOWS_SERVER_2012_ENTERPRISE_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU"] = "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_STANDARD_EDITION"] = "WINDOWS_SERVER_2012_STANDARD_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU"] = "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU"] = "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_WEB_EDITION"] = "WINDOWS_SERVER_2012_WEB_EDITION";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES"] = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES"] = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES"] = "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES"] = "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_1_CPU"] = "windows-server-2008-license-datacenter-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_2_CPU"] = "windows-server-2008-license-datacenter-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_4_CPU"] = "windows-server-2008-license-datacenter-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_1_CPU"] = "windows-server-2008-license-enterprise-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_2_CPU"] = "windows-server-2008-license-enterprise-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_4_CPU"] = "windows-server-2008-license-enterprise-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_1_CPU"] = "windows-server-2008-license-standard-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_2_CPU"] = "windows-server-2008-license-standard-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_4_CPU"] = "windows-server-2008-license-standard-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_1_CPU"] = "windows-server-2008-license-web-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_2_CPU"] = "windows-server-2008-license-web-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_4_CPU"] = "windows-server-2008-license-web-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_1_CPU"] = "windows-server-2012-license-datacenter-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_2_CPU"] = "windows-server-2012-license-datacenter-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_4_CPU"] = "windows-server-2012-license-datacenter-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_1_CPU"] = "windows-server-2012-license-standard-edition-1-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_2_CPU"] = "windows-server-2012-license-standard-edition-2-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_4_CPU"] = "windows-server-2012-license-standard-edition-4-cpu";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_10_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_12_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_14_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_16_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_18_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_20_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_22_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_24_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_8_CORES"] = "windows-server-2016-license-datacenter-edition-1-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_10_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_12_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_14_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_16_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_18_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_20_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_22_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_24_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_8_CORES"] = "windows-server-2016-license-datacenter-edition-2-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_10_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_12_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_14_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_16_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_18_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_20_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_22_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_24_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_8_CORES"] = "windows-server-2016-license-datacenter-edition-4-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_10_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_12_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_14_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_16_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_18_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_20_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_22_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_24_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_8_CORES"] = "windows-server-2016-license-standard-edition-1-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_10_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_12_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_14_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_16_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_18_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_20_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_22_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_24_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_8_CORES"] = "windows-server-2016-license-standard-edition-2-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_10_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_12_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_14_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_16_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_18_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_20_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_22_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_24_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_8_CORES"] = "windows-server-2016-license-standard-edition-4-cpu-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_10_CORES"] = "windows-server-2019-license-datacenter-edition-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_12_CORES"] = "windows-server-2019-license-datacenter-edition-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_14_CORES"] = "windows-server-2019-license-datacenter-edition-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_16_CORES"] = "windows-server-2019-license-datacenter-edition-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_18_CORES"] = "windows-server-2019-license-datacenter-edition-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_20_CORES"] = "windows-server-2019-license-datacenter-edition-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_22_CORES"] = "windows-server-2019-license-datacenter-edition-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_24_CORES"] = "windows-server-2019-license-datacenter-edition-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_26_CORES"] = "windows-server-2019-license-datacenter-edition-26-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_28_CORES"] = "windows-server-2019-license-datacenter-edition-28-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_30_CORES"] = "windows-server-2019-license-datacenter-edition-30-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_32_CORES"] = "windows-server-2019-license-datacenter-edition-32-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_34_CORES"] = "windows-server-2019-license-datacenter-edition-34-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_36_CORES"] = "windows-server-2019-license-datacenter-edition-36-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_38_CORES"] = "windows-server-2019-license-datacenter-edition-38-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_40_CORES"] = "windows-server-2019-license-datacenter-edition-40-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_42_CORES"] = "windows-server-2019-license-datacenter-edition-42-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_44_CORES"] = "windows-server-2019-license-datacenter-edition-44-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_46_CORES"] = "windows-server-2019-license-datacenter-edition-46-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_48_CORES"] = "windows-server-2019-license-datacenter-edition-48-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_50_CORES"] = "windows-server-2019-license-datacenter-edition-50-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_52_CORES"] = "windows-server-2019-license-datacenter-edition-52-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_54_CORES"] = "windows-server-2019-license-datacenter-edition-54-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_56_CORES"] = "windows-server-2019-license-datacenter-edition-56-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_58_CORES"] = "windows-server-2019-license-datacenter-edition-58-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_60_CORES"] = "windows-server-2019-license-datacenter-edition-60-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_62_CORES"] = "windows-server-2019-license-datacenter-edition-62-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_64_CORES"] = "windows-server-2019-license-datacenter-edition-64-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_8_CORES"] = "windows-server-2019-license-datacenter-edition-8-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_10_CORES"] = "windows-server-2019-license-standard-edition-10-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_12_CORES"] = "windows-server-2019-license-standard-edition-12-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_14_CORES"] = "windows-server-2019-license-standard-edition-14-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_16_CORES"] = "windows-server-2019-license-standard-edition-16-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_18_CORES"] = "windows-server-2019-license-standard-edition-18-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_20_CORES"] = "windows-server-2019-license-standard-edition-20-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_22_CORES"] = "windows-server-2019-license-standard-edition-22-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_24_CORES"] = "windows-server-2019-license-standard-edition-24-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_26_CORES"] = "windows-server-2019-license-standard-edition-26-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_28_CORES"] = "windows-server-2019-license-standard-edition-28-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_30_CORES"] = "windows-server-2019-license-standard-edition-30-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_32_CORES"] = "windows-server-2019-license-standard-edition-32-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_34_CORES"] = "windows-server-2019-license-standard-edition-34-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_36_CORES"] = "windows-server-2019-license-standard-edition-36-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_38_CORES"] = "windows-server-2019-license-standard-edition-38-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_40_CORES"] = "windows-server-2019-license-standard-edition-40-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_42_CORES"] = "windows-server-2019-license-standard-edition-42-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_44_CORES"] = "windows-server-2019-license-standard-edition-44-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_46_CORES"] = "windows-server-2019-license-standard-edition-46-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_48_CORES"] = "windows-server-2019-license-standard-edition-48-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_50_CORES"] = "windows-server-2019-license-standard-edition-50-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_52_CORES"] = "windows-server-2019-license-standard-edition-52-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_54_CORES"] = "windows-server-2019-license-standard-edition-54-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_56_CORES"] = "windows-server-2019-license-standard-edition-56-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_58_CORES"] = "windows-server-2019-license-standard-edition-58-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_60_CORES"] = "windows-server-2019-license-standard-edition-60-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_62_CORES"] = "windows-server-2019-license-standard-edition-62-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_64_CORES"] = "windows-server-2019-license-standard-edition-64-cores";
    LicenseWindowsOsVersion["WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_8_CORES"] = "windows-server-2019-license-standard-edition-8-cores";
})(LicenseWindowsOsVersion = exports.LicenseWindowsOsVersion || (exports.LicenseWindowsOsVersion = {}));
/*
 * All SQL Server versions for Windows products
 */
var LicenseWindowsSqlVersion;
(function (LicenseWindowsSqlVersion) {
    LicenseWindowsSqlVersion["SQL_SERVER_2008_STANDARD_EDITION"] = "SQL_SERVER_2008_STANDARD_EDITION";
    LicenseWindowsSqlVersion["SQL_SERVER_2008_STANDARD_EDITION_2_CPU"] = "SQL_SERVER_2008_STANDARD_EDITION_2_CPU";
    LicenseWindowsSqlVersion["SQL_SERVER_2008_WEB_EDITION"] = "SQL_SERVER_2008_WEB_EDITION";
    LicenseWindowsSqlVersion["SQL_SERVER_2008_WEB_EDITION_2_CPU"] = "SQL_SERVER_2008_WEB_EDITION_2_CPU";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION"] = "SQL_SERVER_2012_STANDARD_EDITION";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_12_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_12_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_16_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_16_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_18_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_18_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_20_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_20_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_24_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_24_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_2_CPU"] = "SQL_SERVER_2012_STANDARD_EDITION_2_CPU";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_32_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_32_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_4_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_4_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_6_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_6_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_STANDARD_EDITION_8_CORES"] = "SQL_SERVER_2012_STANDARD_EDITION_8_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_12_CORES"] = "SQL_SERVER_2012_WEB_EDITION_12_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_16_CORES"] = "SQL_SERVER_2012_WEB_EDITION_16_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_18_CORES"] = "SQL_SERVER_2012_WEB_EDITION_18_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_20_CORES"] = "SQL_SERVER_2012_WEB_EDITION_20_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_24_CORES"] = "SQL_SERVER_2012_WEB_EDITION_24_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_32_CORES"] = "SQL_SERVER_2012_WEB_EDITION_32_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_4_CORES"] = "SQL_SERVER_2012_WEB_EDITION_4_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_6_CORES"] = "SQL_SERVER_2012_WEB_EDITION_6_CORES";
    LicenseWindowsSqlVersion["SQL_SERVER_2012_WEB_EDITION_8_CORES"] = "SQL_SERVER_2012_WEB_EDITION_8_CORES";
})(LicenseWindowsSqlVersion = exports.LicenseWindowsSqlVersion || (exports.LicenseWindowsSqlVersion = {}));
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
 * All states a vRack Task can be in
 */
var VrackTaskStatus;
(function (VrackTaskStatus) {
    VrackTaskStatus["CANCELLED"] = "cancelled";
    VrackTaskStatus["DOING"] = "doing";
    VrackTaskStatus["DONE"] = "done";
    VrackTaskStatus["INIT"] = "init";
    VrackTaskStatus["TODO"] = "todo";
})(VrackTaskStatus = exports.VrackTaskStatus || (exports.VrackTaskStatus = {}));
/*
 * Resource record fieldType
 */
var ZoneNamedResolutionFieldType;
(function (ZoneNamedResolutionFieldType) {
    ZoneNamedResolutionFieldType["A"] = "A";
    ZoneNamedResolutionFieldType["AAAA"] = "AAAA";
    ZoneNamedResolutionFieldType["CAA"] = "CAA";
    ZoneNamedResolutionFieldType["CNAME"] = "CNAME";
    ZoneNamedResolutionFieldType["DKIM"] = "DKIM";
    ZoneNamedResolutionFieldType["DMARC"] = "DMARC";
    ZoneNamedResolutionFieldType["LOC"] = "LOC";
    ZoneNamedResolutionFieldType["MX"] = "MX";
    ZoneNamedResolutionFieldType["NAPTR"] = "NAPTR";
    ZoneNamedResolutionFieldType["NS"] = "NS";
    ZoneNamedResolutionFieldType["PTR"] = "PTR";
    ZoneNamedResolutionFieldType["SPF"] = "SPF";
    ZoneNamedResolutionFieldType["SRV"] = "SRV";
    ZoneNamedResolutionFieldType["SSHFP"] = "SSHFP";
    ZoneNamedResolutionFieldType["TLSA"] = "TLSA";
    ZoneNamedResolutionFieldType["TXT"] = "TXT";
})(ZoneNamedResolutionFieldType = exports.ZoneNamedResolutionFieldType || (exports.ZoneNamedResolutionFieldType = {}));
class DedicatedServer {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the DEDICATED service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server#GET)
     */
    ListAvailableServices() {
        let url = `/dedicated/server`;
        return this.client.request('GET', url);
    }
    /**
     * Server informations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D#GET)
     */
    GetServer(serviceName) {
        let url = `/dedicated/server/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Server informations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/dedicated/server/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * authenticationSecret operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/authenticationSecret#POST)
     */
    RetrieveSecretToConnectToTheServerApplication(serviceName) {
        let url = `/dedicated/server/${serviceName}/authenticationSecret`;
        return this.client.request('POST', url);
    }
    /**
     * backupCloudOfferDetails operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/backupCloudOfferDetails#GET)
     */
    GetDetailsOnOfferedBackupCloudIfAvailableForTheCurrentServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/backupCloudOfferDetails`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.Netboot objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/boot#GET)
     */
    ServerCompatiblesNetboots(serviceName, bootType) {
        let url = `/dedicated/server/${serviceName}/boot?`;
        const queryParams = new query_params_1.default();
        if (bootType) {
            queryParams.set('bootType', bootType.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Available boots [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/boot/%7BbootId%7D#GET)
     */
    /*
    GetThisObjectProperties(bootId: number, serviceName: string): Promise<DedicatedserverNetboot> {
      let url = `/dedicated/server/${serviceName}/boot/${bootId}`
  
      return this.client.request<DedicatedserverNetboot>('GET', url)
    }
    */
    /**
     * List the dedicated.server.netbootOption objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/boot/%7BbootId%7D/option#GET)
     */
    OptionUsedOnThisNetboot(bootId, serviceName) {
        let url = `/dedicated/server/${serviceName}/boot/${bootId}/option`;
        return this.client.request('GET', url);
    }
    /**
     * Available boot options [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/boot/%7BbootId%7D/option/%7Boption%7D#GET)
     */
    /*
    GetThisObjectProperties(bootId: number, option: DedicatedserverBootOption, serviceName: string): Promise<DedicatedservernetbootOption> {
      let url = `/dedicated/server/${serviceName}/boot/${bootId}/option/${option}`
  
      return this.client.request<DedicatedservernetbootOption>('GET', url)
    }
    */
    /**
     * Server bandwidth burst details [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/burst#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedserverServerBurst> {
      let url = `/dedicated/server/${serviceName}/burst`
  
      return this.client.request<DedicatedserverServerBurst>('GET', url)
    }
    */
    /**
     * Server bandwidth burst details [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/burst#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: DedicatedserverServerBurst): Promise<void> {
      let url = `/dedicated/server/${serviceName}/burst`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/dedicated/server/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/dedicated/server/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * Backup Cloud assigned to this server [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupCloud#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedserverBackupCloud> {
      let url = `/dedicated/server/${serviceName}/features/backupCloud`
  
      return this.client.request<DedicatedserverBackupCloud>('GET', url)
    }
    */
    /**
     * Backup Cloud assigned to this server [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupCloud#POST)
     */
    CreateANewStorageBackupSpaceAssociatedToServer(serviceName, cloudProjectId, projectDescription) {
        let url = `/dedicated/server/${serviceName}/features/backupCloud`;
        return this.client.request('POST', url, { cloudProjectId, projectDescription });
    }
    /**
     * Backup Cloud assigned to this server [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupCloud#DELETE)
     */
    DeactivateTheCloudBackupAssociatedToTheServerThisDoesNotDeleteContainerData(serviceName) {
        let url = `/dedicated/server/${serviceName}/features/backupCloud`;
        return this.client.request('DELETE', url);
    }
    /**
     * password operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupCloud/password#POST)
     */
    ChangeYourCloudAccountPassword(serviceName) {
        let url = `/dedicated/server/${serviceName}/features/backupCloud/password`;
        return this.client.request('POST', url);
    }
    /**
     * Backup Ftp assigned to this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedserverBackupFtp> {
      let url = `/dedicated/server/${serviceName}/features/backupFTP`
  
      return this.client.request<DedicatedserverBackupFtp>('GET', url)
    }
    */
    /**
     * Backup Ftp assigned to this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP#POST)
     */
    CreateANewBackupFTPSpace(serviceName) {
        let url = `/dedicated/server/${serviceName}/features/backupFTP`;
        return this.client.request('POST', url);
    }
    /**
     * Backup Ftp assigned to this server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP#DELETE)
     */
    TerminateYourBackupFTPServiceALLDATAWILLBEPERMANENTLYDELETED(serviceName) {
        let url = `/dedicated/server/${serviceName}/features/backupFTP`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/access#GET)
     */
    ListOfIPBlocksAndProtocolsToAllowOnTheseBlocksAuthorizedOnYourBackupFTP(serviceName) {
        let url = `/dedicated/server/${serviceName}/features/backupFTP/access`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.BackupFtpAcl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/access#POST)
     */
    CreateANewBackupFTPACL(cifs, ipBlock, nfs, serviceName, ftp) {
        let url = `/dedicated/server/${serviceName}/features/backupFTP/access`;
        return this.client.request('POST', url, { cifs, ipBlock, nfs, ftp });
    }
    /**
     * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#GET)
     */
    /*
    GetThisObjectProperties(ipBlock: string, serviceName: string): Promise<DedicatedserverBackupFtpAcl> {
      let url = `/dedicated/server/${serviceName}/features/backupFTP/access/${ipBlock}`
  
      return this.client.request<DedicatedserverBackupFtpAcl>('GET', url)
    }
    */
    /**
     * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#PUT)
     */
    /*
    AlterThisObjectProperties(ipBlock: string, serviceName: string, payload: DedicatedserverBackupFtpAcl): Promise<void> {
      let url = `/dedicated/server/${serviceName}/features/backupFTP/access/${ipBlock}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Backup Ftp ACL for this server and Backup Ftp [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/access/%7BipBlock%7D#DELETE)
     */
    RevokeThisACL(ipBlock, serviceName) {
        let url = `/dedicated/server/${serviceName}/features/backupFTP/access/${ipBlock}`;
        return this.client.request('DELETE', url);
    }
    /**
     * authorizableBlocks operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/authorizableBlocks#GET)
     */
    GetAllIPBlocksThatCanBeUsedInTheACL(serviceName) {
        let url = `/dedicated/server/${serviceName}/features/backupFTP/authorizableBlocks`;
        return this.client.request('GET', url);
    }
    /**
     * password operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/backupFTP/password#POST)
     */
    ChangeYourBackupFTPPassword(serviceName) {
        let url = `/dedicated/server/${serviceName}/features/backupFTP/password`;
        return this.client.request('POST', url);
    }
    /**
     * Firewall attached to this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/firewall#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedserverFirewall> {
      let url = `/dedicated/server/${serviceName}/features/firewall`
  
      return this.client.request<DedicatedserverFirewall>('GET', url)
    }
    */
    /**
     * Firewall attached to this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/firewall#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: DedicatedserverFirewall): Promise<void> {
      let url = `/dedicated/server/${serviceName}/features/firewall`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Server IPMI interface [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedserverIpmi> {
      let url = `/dedicated/server/${serviceName}/features/ipmi`
  
      return this.client.request<DedicatedserverIpmi>('GET', url)
    }
    */
    /**
     * access operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/access#GET)
     */
    IPMIAccessMethod(serviceName, type) {
        let url = `/dedicated/server/${serviceName}/features/ipmi/access?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * access operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/access#POST)
     */
    RequestAnAccesOnKVMIPMIInterface(serviceName, ttl, type, ipToAllow, sshKey) {
        let url = `/dedicated/server/${serviceName}/features/ipmi/access`;
        return this.client.request('POST', url, { ttl, type, ipToAllow, sshKey });
    }
    /**
     * resetInterface operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/resetInterface#POST)
     */
    ResetKVMIPMIInterface(serviceName) {
        let url = `/dedicated/server/${serviceName}/features/ipmi/resetInterface`;
        return this.client.request('POST', url);
    }
    /**
     * resetSessions operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/resetSessions#POST)
     */
    ResetKVMIPMISessions(serviceName) {
        let url = `/dedicated/server/${serviceName}/features/ipmi/resetSessions`;
        return this.client.request('POST', url);
    }
    /**
     * test operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/test#GET)
     */
    ResultOfHttpPingAndIdentificationTestsOnIPMIInterface(serviceName, type) {
        let url = `/dedicated/server/${serviceName}/features/ipmi/test?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * test operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/ipmi/test#POST)
     */
    LaunchTestOnKVMIPMIInterface(serviceName, ttl, type) {
        let url = `/dedicated/server/${serviceName}/features/ipmi/test`;
        return this.client.request('POST', url, { ttl, type });
    }
    /**
     * Physical KVM [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/features/kvm#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<Dedicatedserverkvm> {
      let url = `/dedicated/server/${serviceName}/features/kvm`
  
      return this.client.request<Dedicatedserverkvm>('GET', url)
    }
    */
    /**
     * compatible operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/firewall/binary/compatible#GET)
     */
    GetNameBinaryForAsa(serviceName) {
        let url = `/dedicated/server/${serviceName}/firewall/binary/compatible`;
        return this.client.request('GET', url);
    }
    /**
     * link operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/firewall/binary/link#GET)
     */
    GetUrlOfBinaryToUpdateFirewallAsa(binaryName, serviceName) {
        let url = `/dedicated/server/${serviceName}/firewall/binary/link?`;
        const queryParams = new query_params_1.default();
        if (binaryName) {
            queryParams.set('binaryName', binaryName);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * compatibleTemplatePartitionSchemes operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/compatibleTemplatePartitionSchemes#GET)
     */
    RetrieveCompatibleInstallTemplatePartitionsScheme(serviceName, templateName) {
        let url = `/dedicated/server/${serviceName}/install/compatibleTemplatePartitionSchemes?`;
        const queryParams = new query_params_1.default();
        if (templateName) {
            queryParams.set('templateName', templateName);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * compatibleTemplates operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/compatibleTemplates#GET)
     */
    RetrieveCompatibleInstallTemplatesNames(serviceName) {
        let url = `/dedicated/server/${serviceName}/install/compatibleTemplates`;
        return this.client.request('GET', url);
    }
    /**
     * hardwareRaidProfile operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/hardwareRaidProfile#GET)
     */
    RetrieveHardwareRAIDProfile(serviceName) {
        let url = `/dedicated/server/${serviceName}/install/hardwareRaidProfile`;
        return this.client.request('GET', url);
    }
    /**
     * hardwareRaidSize operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/hardwareRaidSize#GET)
     */
    GetHardwareRAIDSizeForAGivenConfiguration(partitionSchemeName, serviceName, templateName) {
        let url = `/dedicated/server/${serviceName}/install/hardwareRaidSize?`;
        const queryParams = new query_params_1.default();
        if (partitionSchemeName) {
            queryParams.set('partitionSchemeName', partitionSchemeName);
        }
        if (templateName) {
            queryParams.set('templateName', templateName);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * start operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/start#POST)
     */
    StartAnInstall(serviceName, templateName, details, partitionSchemeName) {
        let url = `/dedicated/server/${serviceName}/install/start`;
        return this.client.request('POST', url, { templateName, details, partitionSchemeName });
    }
    /**
     * status operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/status#GET)
     */
    GetInstallationStatus(serviceName) {
        let url = `/dedicated/server/${serviceName}/install/status`;
        return this.client.request('GET', url);
    }
    /**
     * templateCapabilities operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/templateCapabilities#GET)
     */
    GivesSomeCapabilitiesRegardingTheTemplateForTheCurrentDedicatedServer(serviceName, templateName) {
        let url = `/dedicated/server/${serviceName}/install/templateCapabilities?`;
        const queryParams = new query_params_1.default();
        if (templateName) {
            queryParams.set('templateName', templateName);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the dedicated.server.Intervention objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/intervention#GET)
     */
    TechnicalInterventionHistory(serviceName) {
        let url = `/dedicated/server/${serviceName}/intervention`;
        return this.client.request('GET', url);
    }
    /**
     * Intervention made on this server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/intervention/%7BinterventionId%7D#GET)
     */
    /*
    GetThisObjectProperties(interventionId: number, serviceName: string): Promise<DedicatedserverIntervention> {
      let url = `/dedicated/server/${serviceName}/intervention/${interventionId}`
  
      return this.client.request<DedicatedserverIntervention>('GET', url)
    }
    */
    /**
     * ipBlockMerge operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ipBlockMerge#POST)
     */
    MergeASplittedBlockAndRouteItToTheChoosenServerYouCannotUndoThisOperation(block, serviceName) {
        let url = `/dedicated/server/${serviceName}/ipBlockMerge`;
        return this.client.request('POST', url, { block });
    }
    /**
     * ipCanBeMovedTo operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ipCanBeMovedTo#GET)
     */
    CheckIfGivenIPCanBeMovedToThisServer(ip, serviceName) {
        let url = `/dedicated/server/${serviceName}/ipCanBeMovedTo?`;
        const queryParams = new query_params_1.default();
        if (ip) {
            queryParams.set('ip', ip.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * ipCountryAvailable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ipCountryAvailable#GET)
     */
    RetrieveAvailableCountryForIPOrder(serviceName) {
        let url = `/dedicated/server/${serviceName}/ipCountryAvailable`;
        return this.client.request('GET', url);
    }
    /**
     * ipMove operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ipMove#POST)
     */
    MoveAnIpFailoverToThisServer(ip, serviceName) {
        let url = `/dedicated/server/${serviceName}/ipMove`;
        return this.client.request('POST', url, { ip });
    }
    /**
     * ips operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ips#GET)
     */
    ListAllIpFromServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/ips`;
        return this.client.request('GET', url);
    }
    /**
     * compliantWindows operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/license/compliantWindows#GET)
     */
    GetTheWindowsLicenseCompliantWithYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/license/compliantWindows`;
        return this.client.request('GET', url);
    }
    /**
     * compliantWindowsSqlServer operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/license/compliantWindowsSqlServer#GET)
     */
    GetTheWindowsSQLServerLicenseCompliantWithYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/license/compliantWindowsSqlServer`;
        return this.client.request('GET', url);
    }
    /**
     * windows operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/license/windows#POST)
     */
    AddYourExistingWindowsLicenseSerialToThisDedicatedServerWillBeManageableInLicensewindows(licenseId, serviceName, version) {
        let url = `/dedicated/server/${serviceName}/license/windows`;
        return this.client.request('POST', url, { licenseId, version });
    }
    /**
     * mrtg operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/mrtg#GET)
     */
    RetrieveTrafficGraphValues(period, serviceName, type) {
        let url = `/dedicated/server/${serviceName}/mrtg?`;
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
     * List the dedicated.networkInterfaceController.NetworkInterfaceController objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/networkInterfaceController#GET)
     */
    ListServerNetworkInterfaceController(serviceName, linkType) {
        let url = `/dedicated/server/${serviceName}/networkInterfaceController?`;
        const queryParams = new query_params_1.default();
        if (linkType) {
            queryParams.set('linkType', linkType.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Your networkInterfaceController [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/networkInterfaceController/%7Bmac%7D#GET)
     */
    /*
    GetThisObjectProperties(mac: any, serviceName: string): Promise<DedicatednetworkInterfaceControllerNetworkInterfaceController> {
      let url = `/dedicated/server/${serviceName}/networkInterfaceController/${mac}`
  
      return this.client.request<DedicatednetworkInterfaceControllerNetworkInterfaceController>('GET', url)
    }
    */
    /**
     * mrtg operations [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/networkInterfaceController/%7Bmac%7D/mrtg#GET)
     */
    /*
    RetrieveTrafficGraphValues(mac: any, period: DedicatedserverMrtgPeriod, serviceName: string, type: DedicatedserverMrtgType): Promise<DedicatedserverMrtgTimestampValue[]> {
      let url = `/dedicated/server/${serviceName}/networkInterfaceController/${mac}/mrtg?`
  
      const queryParams = new QueryParams()
      if (period) { queryParams.set('period', period.toString()) }
      if (type) { queryParams.set('type', type.toString()) }
  
      return this.client.request<DedicatedserverMrtgTimestampValue[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * group operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ola/group#POST)
     */
    OLA_GroupInterfacesIntoAnAggregation(name, serviceName, virtualNetworkInterfaces) {
        let url = `/dedicated/server/${serviceName}/ola/group`;
        return this.client.request('POST', url, { name, virtualNetworkInterfaces });
    }
    /**
     * ungroup operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/ola/ungroup#POST)
     */
    OLA_UngroupInterfaces(serviceName, virtualNetworkInterface) {
        let url = `/dedicated/server/${serviceName}/ola/ungroup`;
        return this.client.request('POST', url, { virtualNetworkInterface });
    }
    /**
     * List the dedicated.server.Option objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/option#GET)
     */
    ListOfDedicatedServerOptions(serviceName) {
        let url = `/dedicated/server/${serviceName}/option`;
        return this.client.request('GET', url);
    }
    /**
     * Information about the options of a dedicated server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/option/%7Boption%7D#GET)
     */
    /*
    GetThisObjectProperties(option: DedicatedserverOption, serviceName: string): Promise<DedicatedserverOption> {
      let url = `/dedicated/server/${serviceName}/option/${option}`
  
      return this.client.request<DedicatedserverOption>('GET', url)
    }
    */
    /**
     * Information about the options of a dedicated server [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/option/%7Boption%7D#DELETE)
     */
    ReleaseAGivenOption(option, serviceName) {
        let url = `/dedicated/server/${serviceName}/option/${option}`;
        return this.client.request('DELETE', url);
    }
    /**
     * backupStorage operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/backupStorage#GET)
     */
    GetTheBackupStorageOrderableWithYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/orderable/backupStorage`;
        return this.client.request('GET', url);
    }
    /**
     * bandwidth operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/bandwidth#GET)
     */
    GetBandwidthOrderableWithYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/orderable/bandwidth`;
        return this.client.request('GET', url);
    }
    /**
     * bandwidthvRack operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/bandwidthvRack#GET)
     */
    GetVRackBandwidthOrderableWithYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/orderable/bandwidthvRack`;
        return this.client.request('GET', url);
    }
    /**
     * feature operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/feature#GET)
     */
    IsThisFeatureOrderableWithYourServer(feature, serviceName) {
        let url = `/dedicated/server/${serviceName}/orderable/feature?`;
        const queryParams = new query_params_1.default();
        if (feature) {
            queryParams.set('feature', feature.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * ip operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/ip#GET)
     */
    GetIPOrderableWithYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/orderable/ip`;
        return this.client.request('GET', url);
    }
    /**
     * kvm operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/kvm#GET)
     */
    IsAKVMOrderableWithYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/orderable/kvm`;
        return this.client.request('GET', url);
    }
    /**
     * kvmExpress operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/kvmExpress#GET)
     */
    IsAKVMExpressOrderableWithYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/orderable/kvmExpress`;
        return this.client.request('GET', url);
    }
    /**
     * professionalUse operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/professionalUse#GET)
     */
    IsProfessionalUseOrderableWithYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/orderable/professionalUse`;
        return this.client.request('GET', url);
    }
    /**
     * traffic operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/traffic#GET)
     */
    GetOrderableTrafficWithYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/orderable/traffic`;
        return this.client.request('GET', url);
    }
    /**
     * usbKey operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/orderable/usbKey#GET)
     */
    GetUSBKeysOrderableWithYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/orderable/usbKey`;
        return this.client.request('GET', url);
    }
    /**
     * reboot operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/reboot#POST)
     */
    HardRebootThisServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/reboot`;
        return this.client.request('POST', url);
    }
    /**
     * List the secondaryDns.SecondaryDNS objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains#GET)
     */
    ListOfSecondaryDnsDomainName(serviceName) {
        let url = `/dedicated/server/${serviceName}/secondaryDnsDomains`;
        return this.client.request('GET', url);
    }
    /**
     * List the secondaryDns.SecondaryDNS objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains#POST)
     */
    AddADomainOnSecondaryDns(domain, serviceName, ip) {
        let url = `/dedicated/server/${serviceName}/secondaryDnsDomains`;
        return this.client.request('POST', url, { domain, ip });
    }
    /**
     * Secondary dns infos [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, serviceName: string): Promise<SecondaryDnsSecondaryDNS> {
      let url = `/dedicated/server/${serviceName}/secondaryDnsDomains/${domain}`
  
      return this.client.request<SecondaryDnsSecondaryDNS>('GET', url)
    }
    */
    /**
     * Secondary dns infos [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#PUT)
     */
    /*
    AlterThisObjectProperties(domain: string, serviceName: string, payload: SecondaryDnsSecondaryDNS): Promise<void> {
      let url = `/dedicated/server/${serviceName}/secondaryDnsDomains/${domain}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Secondary dns infos [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D#DELETE)
     */
    RemoveThisDomain(domain, serviceName) {
        let url = `/dedicated/server/${serviceName}/secondaryDnsDomains/${domain}`;
        return this.client.request('DELETE', url);
    }
    /**
     * dnsServer operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsDomains/%7Bdomain%7D/dnsServer#GET)
     */
    DomainNameServerInformations(domain, serviceName) {
        let url = `/dedicated/server/${serviceName}/secondaryDnsDomains/${domain}/dnsServer`;
        return this.client.request('GET', url);
    }
    /**
     * secondaryDnsNameDomainToken operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsNameDomainToken#GET)
     */
    DNSFieldToTemporarilyAddToYourZoneSoThatWeCanVerifyYouAreTheOwnerOfThisDomain(domain, serviceName) {
        let url = `/dedicated/server/${serviceName}/secondaryDnsNameDomainToken?`;
        const queryParams = new query_params_1.default();
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * secondaryDnsNameServerAvailable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/secondaryDnsNameServerAvailable#GET)
     */
    SecondaryNameServerAvailableForYourServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/secondaryDnsNameServerAvailable`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/dedicated/server/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/dedicated/server/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the dedicated.server.serviceMonitoring objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring#GET)
     */
    ServiceMonitoringDetails(serviceName) {
        let url = `/dedicated/server/${serviceName}/serviceMonitoring`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.serviceMonitoring objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring#POST)
     */
    AddANewServiceMonitoring(enabled, interval, ip, port, protocol, serviceName, challengeText, _url) {
        let url = `/dedicated/server/${serviceName}/serviceMonitoring`;
        return this.client.request('POST', url, { enabled, interval, ip, port, protocol, challengeText, _url });
    }
    /**
     * Service monitoring details [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D#GET)
     */
    /*
    GetThisObjectProperties(monitoringId: number, serviceName: string): Promise<DedicatedserverserviceMonitoring> {
      let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}`
  
      return this.client.request<DedicatedserverserviceMonitoring>('GET', url)
    }
    */
    /**
     * Service monitoring details [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(monitoringId: number, serviceName: string, payload: DedicatedserverserviceMonitoring): Promise<void> {
      let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Service monitoring details [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D#DELETE)
     */
    RemoveThisServiceMonitoring(monitoringId, serviceName) {
        let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicated.server.emailAlert objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/email#GET)
     */
    ServiceMonitoringAlertByEmail(monitoringId, serviceName) {
        let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/email`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.emailAlert objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/email#POST)
     */
    AddANewEmailAlert(email, language, monitoringId, serviceName) {
        let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/email`;
        return this.client.request('POST', url, { email, language });
    }
    /**
     * Service monitoring Email alert [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/email/%7BalertId%7D#GET)
     */
    /*
    GetThisObjectProperties(alertId: number, monitoringId: number, serviceName: string): Promise<DedicatedserveremailAlert> {
      let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/email/${alertId}`
  
      return this.client.request<DedicatedserveremailAlert>('GET', url)
    }
    */
    /**
     * Service monitoring Email alert [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/email/%7BalertId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(alertId: number, monitoringId: number, serviceName: string, payload: DedicatedserveremailAlert): Promise<void> {
      let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/email/${alertId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Service monitoring Email alert [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/email/%7BalertId%7D#DELETE)
     */
    RemoveThisEmailAlertMonitoring(alertId, monitoringId, serviceName) {
        let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/email/${alertId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicated.server.smsAlert objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/sms#GET)
     */
    ServiceMonitoringAlertBySMS(monitoringId, serviceName) {
        let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/sms`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.smsAlert objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/sms#POST)
     */
    CreateASMSAlert(language, monitoringId, phoneNumberTo, serviceName, smsAccount, fromHour, toHour) {
        let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/sms`;
        return this.client.request('POST', url, { language, phoneNumberTo, smsAccount, fromHour, toHour });
    }
    /**
     * Monitoring SMS alert details, This service is currently not supported for servers at BHS  [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/sms/%7BalertId%7D#GET)
     */
    /*
    GetThisObjectProperties(alertId: number, monitoringId: number, serviceName: string): Promise<DedicatedserversmsAlert> {
      let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/sms/${alertId}`
  
      return this.client.request<DedicatedserversmsAlert>('GET', url)
    }
    */
    /**
     * Monitoring SMS alert details, This service is currently not supported for servers at BHS  [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/sms/%7BalertId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(alertId: number, monitoringId: number, serviceName: string, payload: DedicatedserversmsAlert): Promise<void> {
      let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/sms/${alertId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Monitoring SMS alert details, This service is currently not supported for servers at BHS  [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/serviceMonitoring/%7BmonitoringId%7D/alert/sms/%7BalertId%7D#DELETE)
     */
    RemoveThisSMSAlert(alertId, monitoringId, serviceName) {
        let url = `/dedicated/server/${serviceName}/serviceMonitoring/${monitoringId}/alert/sms/${alertId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * hardware operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/specifications/hardware#GET)
     */
    RetrieveHardwareInformationsAboutThisDedicatedServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/specifications/hardware`;
        return this.client.request('GET', url);
    }
    /**
     * ip operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/specifications/ip#GET)
     */
    RetrieveIPCapabilitiesAboutThisDedicatedServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/specifications/ip`;
        return this.client.request('GET', url);
    }
    /**
     * network operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/specifications/network#GET)
     */
    RetrieveNetworkInformationsAboutThisDedicatedServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/specifications/network`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.spla objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/spla#GET)
     */
    YourOwnSPLALicensesAttachedToThisDedicatedServer(serviceName, status, type) {
        let url = `/dedicated/server/${serviceName}/spla?`;
        const queryParams = new query_params_1.default();
        if (status) {
            queryParams.set('status', status.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the dedicated.server.spla objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/spla#POST)
     */
    AddANewSPLALicense(serialNumber, serviceName, type) {
        let url = `/dedicated/server/${serviceName}/spla`;
        return this.client.request('POST', url, { serialNumber, type });
    }
    /**
     * SPLA licenses management [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/spla/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<Dedicatedserverspla> {
      let url = `/dedicated/server/${serviceName}/spla/${id}`
  
      return this.client.request<Dedicatedserverspla>('GET', url)
    }
    */
    /**
     * SPLA licenses management [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/spla/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(id: number, serviceName: string, payload: Dedicatedserverspla): Promise<void> {
      let url = `/dedicated/server/${serviceName}/spla/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * revoke operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/spla/%7Bid%7D/revoke#POST)
     */
    RevokeAnSPLALicense(id, serviceName) {
        let url = `/dedicated/server/${serviceName}/spla/${id}/revoke`;
        return this.client.request('POST', url);
    }
    /**
     * Servers statistics sent by RTM (Real Time Monitoring) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<DedicatedserverRtm> {
      let url = `/dedicated/server/${serviceName}/statistics`
  
      return this.client.request<DedicatedserverRtm>('GET', url)
    }
    */
    /**
     * chart operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/chart#GET)
     */
    RetrieveRTMGraphValues(period, serviceName, type) {
        let url = `/dedicated/server/${serviceName}/statistics/chart?`;
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
     * connection operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/connection#GET)
     */
    GetServerOpenedConnections(serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/connection`;
        return this.client.request('GET', url);
    }
    /**
     * cpu operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/cpu#GET)
     */
    GetServerCpuInformations(serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/cpu`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.RtmDisk objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/disk#GET)
     */
    ServerDisks(serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/disk`;
        return this.client.request('GET', url);
    }
    /**
     * Server disks informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/disk/%7Bdisk%7D#GET)
     */
    /*
    GetThisObjectProperties(disk: string, serviceName: string): Promise<DedicatedserverRtmDisk> {
      let url = `/dedicated/server/${serviceName}/statistics/disk/${disk}`
  
      return this.client.request<DedicatedserverRtmDisk>('GET', url)
    }
    */
    /**
     * smart operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/disk/%7Bdisk%7D/smart#GET)
     */
    GetDiskSmartInformations(disk, serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/disk/${disk}/smart`;
        return this.client.request('GET', url);
    }
    /**
     * load operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/load#GET)
     */
    GetServerLoad(serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/load`;
        return this.client.request('GET', url);
    }
    /**
     * memory operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/memory#GET)
     */
    GetServerMemoryInformations(serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/memory`;
        return this.client.request('GET', url);
    }
    /**
     * motherboard operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/motherboard#GET)
     */
    GetServerMotherboardHardwareInformations(serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/motherboard`;
        return this.client.request('GET', url);
    }
    /**
     * os operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/os#GET)
     */
    GetServerOsInformations(serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/os`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.RtmPartition objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/partition#GET)
     */
    ServerPartitions(serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/partition`;
        return this.client.request('GET', url);
    }
    /**
     * Server partitions informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/partition/%7Bpartition%7D#GET)
     */
    /*
    GetThisObjectProperties(partition: string, serviceName: string): Promise<DedicatedserverRtmPartition> {
      let url = `/dedicated/server/${serviceName}/statistics/partition/${partition}`
  
      return this.client.request<DedicatedserverRtmPartition>('GET', url)
    }
    */
    /**
     * chart operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/partition/%7Bpartition%7D/chart#GET)
     */
    RetrievePartitionCharts(partition, period, serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/partition/${partition}/chart?`;
        const queryParams = new query_params_1.default();
        if (period) {
            queryParams.set('period', period.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * pci operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/pci#GET)
     */
    GetServerPCIDevicesInformations(serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/pci`;
        return this.client.request('GET', url);
    }
    /**
     * process operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/process#GET)
     */
    GetServerProcess(serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/process`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.RtmRaid objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid#GET)
     */
    ServerRaidInformations(serviceName) {
        let url = `/dedicated/server/${serviceName}/statistics/raid`;
        return this.client.request('GET', url);
    }
    /**
     * Server raid informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid/%7Bunit%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, unit: string): Promise<DedicatedserverRtmRaid> {
      let url = `/dedicated/server/${serviceName}/statistics/raid/${unit}`
  
      return this.client.request<DedicatedserverRtmRaid>('GET', url)
    }
    */
    /**
     * List the dedicated.server.RtmRaidVolume objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid/%7Bunit%7D/volume#GET)
     */
    RaidUnitVolumes(serviceName, unit) {
        let url = `/dedicated/server/${serviceName}/statistics/raid/${unit}/volume`;
        return this.client.request('GET', url);
    }
    /**
     * Server raid volume information [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid/%7Bunit%7D/volume/%7Bvolume%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, unit: string, volume: string): Promise<DedicatedserverRtmRaidVolume> {
      let url = `/dedicated/server/${serviceName}/statistics/raid/${unit}/volume/${volume}`
  
      return this.client.request<DedicatedserverRtmRaidVolume>('GET', url)
    }
    */
    /**
     * List the dedicated.server.RtmRaidVolumePort objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid/%7Bunit%7D/volume/%7Bvolume%7D/port#GET)
     */
    RaidUnitVolumePorts(serviceName, unit, volume) {
        let url = `/dedicated/server/${serviceName}/statistics/raid/${unit}/volume/${volume}/port`;
        return this.client.request('GET', url);
    }
    /**
     * Server raid volume port informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/statistics/raid/%7Bunit%7D/volume/%7Bvolume%7D/port/%7Bport%7D#GET)
     */
    /*
    GetThisObjectProperties(port: string, serviceName: string, unit: string, volume: string): Promise<DedicatedserverRtmRaidVolumePort> {
      let url = `/dedicated/server/${serviceName}/statistics/raid/${unit}/volume/${volume}/port/${port}`
  
      return this.client.request<DedicatedserverRtmRaidVolumePort>('GET', url)
    }
    */
    /**
     * hardDiskDrive operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/support/replace/hardDiskDrive#POST)
     */
    AskForABrokenHDDReplacement(comment, disks, inverse, serviceName) {
        let url = `/dedicated/server/${serviceName}/support/replace/hardDiskDrive`;
        return this.client.request('POST', url, { comment, disks, inverse });
    }
    /**
     * List the dedicated.server.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/task#GET)
     */
    DedicatedServerTodos(serviceName, _function, status) {
        let url = `/dedicated/server/${serviceName}/task?`;
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
     * Server tasks [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<DedicatedserverTask> {
      let url = `/dedicated/server/${serviceName}/task/${taskId}`
  
      return this.client.request<DedicatedserverTask>('GET', url)
    }
    */
    /**
     * cancel operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/task/%7BtaskId%7D/cancel#POST)
     */
    ThisActionStopTheTaskProgressionIfItPossible(serviceName, taskId) {
        let url = `/dedicated/server/${serviceName}/task/${taskId}/cancel`;
        return this.client.request('POST', url);
    }
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/dedicated/server/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * List the dedicated.server.VirtualMac objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac#GET)
     */
    VirtualMACAddressesOfTheServer(serviceName) {
        let url = `/dedicated/server/${serviceName}/virtualMac`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.VirtualMac objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac#POST)
     */
    AddAVirtualMacToAnIPAddress(ipAddress, serviceName, type, virtualMachineName) {
        let url = `/dedicated/server/${serviceName}/virtualMac`;
        return this.client.request('POST', url, { ipAddress, type, virtualMachineName });
    }
    /**
     * A virtual MAC address associated to one or more IPs [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac/%7BmacAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(macAddress: string, serviceName: string): Promise<DedicatedserverVirtualMac> {
      let url = `/dedicated/server/${serviceName}/virtualMac/${macAddress}`
  
      return this.client.request<DedicatedserverVirtualMac>('GET', url)
    }
    */
    /**
     * List the dedicated.server.VirtualMacManagement objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac/%7BmacAddress%7D/virtualAddress#GET)
     */
    ListOfIPsAssociatedToThisVirtualMAC(macAddress, serviceName) {
        let url = `/dedicated/server/${serviceName}/virtualMac/${macAddress}/virtualAddress`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.server.VirtualMacManagement objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac/%7BmacAddress%7D/virtualAddress#POST)
     */
    AddAnIPToThisVirtualMAC(ipAddress, macAddress, serviceName, virtualMachineName) {
        let url = `/dedicated/server/${serviceName}/virtualMac/${macAddress}/virtualAddress`;
        return this.client.request('POST', url, { ipAddress, virtualMachineName });
    }
    /**
     *  ip address linked with this virtual mac address [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac/%7BmacAddress%7D/virtualAddress/%7BipAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(ipAddress: string, macAddress: string, serviceName: string): Promise<DedicatedserverVirtualMacManagement> {
      let url = `/dedicated/server/${serviceName}/virtualMac/${macAddress}/virtualAddress/${ipAddress}`
  
      return this.client.request<DedicatedserverVirtualMacManagement>('GET', url)
    }
    */
    /**
     *  ip address linked with this virtual mac address [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualMac/%7BmacAddress%7D/virtualAddress/%7BipAddress%7D#DELETE)
     */
    RemoveThisIpFromVirtualMacIfYouRemoveTheLastLinkedIpVirtualmacWillBeDeleted(ipAddress, macAddress, serviceName) {
        let url = `/dedicated/server/${serviceName}/virtualMac/${macAddress}/virtualAddress/${ipAddress}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualNetworkInterface#GET)
     */
    ListServerVirtualNetworkInterfaces(serviceName, enabled, mode, name, vrack) {
        let url = `/dedicated/server/${serviceName}/virtualNetworkInterface?`;
        const queryParams = new query_params_1.default();
        if (enabled) {
            queryParams.set('enabled', enabled.toString());
        }
        if (mode) {
            queryParams.set('mode', mode.toString());
        }
        if (name) {
            queryParams.set('name', name);
        }
        if (vrack) {
            queryParams.set('vrack', vrack);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Your VirtualNetworkInterface [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualNetworkInterface/%7Buuid%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, uuid: string): Promise<DedicatedvirtualNetworkInterfaceVirtualNetworkInterface> {
      let url = `/dedicated/server/${serviceName}/virtualNetworkInterface/${uuid}`
  
      return this.client.request<DedicatedvirtualNetworkInterfaceVirtualNetworkInterface>('GET', url)
    }
    */
    /**
     * Your VirtualNetworkInterface [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualNetworkInterface/%7Buuid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, uuid: string, payload: DedicatedvirtualNetworkInterfaceVirtualNetworkInterface): Promise<void> {
      let url = `/dedicated/server/${serviceName}/virtualNetworkInterface/${uuid}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * disable operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualNetworkInterface/%7Buuid%7D/disable#POST)
     */
    DisableThisVirtualNetworkInterface(serviceName, uuid) {
        let url = `/dedicated/server/${serviceName}/virtualNetworkInterface/${uuid}/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/virtualNetworkInterface/%7Buuid%7D/enable#POST)
     */
    EnableThisVirtualNetworkInterface(serviceName, uuid) {
        let url = `/dedicated/server/${serviceName}/virtualNetworkInterface/${uuid}/enable`;
        return this.client.request('POST', url);
    }
    /**
     * List the vrack.dedicatedServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/vrack#GET)
     */
    ServerVracks(serviceName) {
        let url = `/dedicated/server/${serviceName}/vrack`;
        return this.client.request('GET', url);
    }
    /**
     * vrack dedicated server interfaces [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/vrack/%7Bvrack%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, vrack: string): Promise<VrackdedicatedServer> {
      let url = `/dedicated/server/${serviceName}/vrack/${vrack}`
  
      return this.client.request<VrackdedicatedServer>('GET', url)
    }
    */
    /**
     * vrack dedicated server interfaces [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/vrack/%7Bvrack%7D#DELETE)
     */
    RemoveThisServerFromThisVrack(serviceName, vrack) {
        let url = `/dedicated/server/${serviceName}/vrack/${vrack}`;
        return this.client.request('DELETE', url);
    }
    /**
     * mrtg operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/vrack/%7Bvrack%7D/mrtg#GET)
     */
    RetrieveVrackTrafficGraphValues(period, serviceName, type, vrack) {
        let url = `/dedicated/server/${serviceName}/vrack/${vrack}/mrtg?`;
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
     * List the availability of dedicated server [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/availabilities#GET)
     */
    ListTheAvailabilityOfDedicatedServer(country, hardware) {
        let url = `/dedicated/server/availabilities?`;
        const queryParams = new query_params_1.default();
        if (country) {
            queryParams.set('country', country.toString());
        }
        if (hardware) {
            queryParams.set('hardware', hardware);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the availability of dedicated server (RAW) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/availabilities/raw#GET)
     */
    /*
    ListTheAvailabilityOfDedicatedServer(): Promise<DedicatedAvailabilitiesRaw[]> {
      let url = `/dedicated/server/availabilities/raw`
  
      return this.client.request<DedicatedAvailabilitiesRaw[]>('GET', url)
    }
    */
    /**
     * List the availability of dedicated server [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/datacenter/availabilities#GET)
     */
    /*
    ListTheAvailabilityOfDedicatedServer(datacenters?: string, excludeDatacenters?: boolean, memory?: string, planCode?: string, server?: string, storage?: string): Promise<DedicatedDatacenterAvailability[]> {
      let url = `/dedicated/server/datacenter/availabilities?`
  
      const queryParams = new QueryParams()
      if (datacenters) { queryParams.set('datacenters', datacenters) }
      if (excludeDatacenters) { queryParams.set('excludeDatacenters', excludeDatacenters.toString()) }
      if (memory) { queryParams.set('memory', memory) }
      if (planCode) { queryParams.set('planCode', planCode) }
      if (server) { queryParams.set('server', server) }
      if (storage) { queryParams.set('storage', storage) }
  
      return this.client.request<DedicatedDatacenterAvailability[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * List the operating systems available for a specified hardware reference [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/osAvailabilities#GET)
     */
    ListTheOsAvailableForASpecifiedHardwareReference(hardware) {
        let url = `/dedicated/server/osAvailabilities?`;
        const queryParams = new query_params_1.default();
        if (hardware) {
            queryParams.set('hardware', hardware);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get a VirtualNetworkInterface details [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/server/virtualNetworkInterface/%7Buuid%7D#GET)
     */
    GetVirtualNetworkInterfaceDetails(uuid) {
        let url = `/dedicated/server/virtualNetworkInterface/${uuid}`;
        return this.client.request('GET', url);
    }
}
exports.DedicatedServer = DedicatedServer;
//# sourceMappingURL=dedicated.server.js.map