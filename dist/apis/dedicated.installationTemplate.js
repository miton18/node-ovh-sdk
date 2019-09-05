"use strict";
// GENERATED SDK for dedicated/installationTemplate API
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * supports UEFI setup
 */
var DedicatedserverSupportsUEFI;
(function (DedicatedserverSupportsUEFI) {
    DedicatedserverSupportsUEFI["NO"] = "no";
    DedicatedserverSupportsUEFI["ONLY"] = "only";
    DedicatedserverSupportsUEFI["YES"] = "yes";
})(DedicatedserverSupportsUEFI = exports.DedicatedserverSupportsUEFI || (exports.DedicatedserverSupportsUEFI = {}));
/*
 * Filesystems available
 */
var DedicatedTemplateOsFileSystem;
(function (DedicatedTemplateOsFileSystem) {
    DedicatedTemplateOsFileSystem["BTRFS"] = "btrfs";
    DedicatedTemplateOsFileSystem["EXT3"] = "ext3";
    DedicatedTemplateOsFileSystem["EXT4"] = "ext4";
    DedicatedTemplateOsFileSystem["NTFS"] = "ntfs";
    DedicatedTemplateOsFileSystem["REISERFS"] = "reiserfs";
    DedicatedTemplateOsFileSystem["SWAP"] = "swap";
    DedicatedTemplateOsFileSystem["UFS"] = "ufs";
    DedicatedTemplateOsFileSystem["XFS"] = "xfs";
    DedicatedTemplateOsFileSystem["ZFS"] = "zfs";
})(DedicatedTemplateOsFileSystem = exports.DedicatedTemplateOsFileSystem || (exports.DedicatedTemplateOsFileSystem = {}));
/*
 * Hardware RAID enum
 */
var DedicatedTemplateOsHardwareRaid;
(function (DedicatedTemplateOsHardwareRaid) {
    DedicatedTemplateOsHardwareRaid["RAID0"] = "raid0";
    DedicatedTemplateOsHardwareRaid["RAID1"] = "raid1";
    DedicatedTemplateOsHardwareRaid["RAID10"] = "raid10";
    DedicatedTemplateOsHardwareRaid["RAID5"] = "raid5";
    DedicatedTemplateOsHardwareRaid["RAID50"] = "raid50";
    DedicatedTemplateOsHardwareRaid["RAID6"] = "raid6";
    DedicatedTemplateOsHardwareRaid["RAID60"] = "raid60";
})(DedicatedTemplateOsHardwareRaid = exports.DedicatedTemplateOsHardwareRaid || (exports.DedicatedTemplateOsHardwareRaid = {}));
/*
 * all language available
 */
var DedicatedTemplateOsLanguage;
(function (DedicatedTemplateOsLanguage) {
    DedicatedTemplateOsLanguage["AR"] = "ar";
    DedicatedTemplateOsLanguage["BG"] = "bg";
    DedicatedTemplateOsLanguage["CS"] = "cs";
    DedicatedTemplateOsLanguage["DA"] = "da";
    DedicatedTemplateOsLanguage["DE"] = "de";
    DedicatedTemplateOsLanguage["EL"] = "el";
    DedicatedTemplateOsLanguage["EN"] = "en";
    DedicatedTemplateOsLanguage["ES"] = "es";
    DedicatedTemplateOsLanguage["ET"] = "et";
    DedicatedTemplateOsLanguage["FI"] = "fi";
    DedicatedTemplateOsLanguage["FR"] = "fr";
    DedicatedTemplateOsLanguage["HE"] = "he";
    DedicatedTemplateOsLanguage["HR"] = "hr";
    DedicatedTemplateOsLanguage["HU"] = "hu";
    DedicatedTemplateOsLanguage["IT"] = "it";
    DedicatedTemplateOsLanguage["JA"] = "ja";
    DedicatedTemplateOsLanguage["KO"] = "ko";
    DedicatedTemplateOsLanguage["LT"] = "lt";
    DedicatedTemplateOsLanguage["LV"] = "lv";
    DedicatedTemplateOsLanguage["NB"] = "nb";
    DedicatedTemplateOsLanguage["NL"] = "nl";
    DedicatedTemplateOsLanguage["NO"] = "no";
    DedicatedTemplateOsLanguage["PL"] = "pl";
    DedicatedTemplateOsLanguage["PT"] = "pt";
    DedicatedTemplateOsLanguage["RO"] = "ro";
    DedicatedTemplateOsLanguage["RU"] = "ru";
    DedicatedTemplateOsLanguage["SK"] = "sk";
    DedicatedTemplateOsLanguage["SL"] = "sl";
    DedicatedTemplateOsLanguage["SR"] = "sr";
    DedicatedTemplateOsLanguage["SV"] = "sv";
    DedicatedTemplateOsLanguage["TH"] = "th";
    DedicatedTemplateOsLanguage["TR"] = "tr";
    DedicatedTemplateOsLanguage["TU"] = "tu";
    DedicatedTemplateOsLanguage["UK"] = "uk";
    DedicatedTemplateOsLanguage["ZH_HANS_CN"] = "zh-Hans-CN";
    DedicatedTemplateOsLanguage["ZH_HANS_HK"] = "zh-Hans-HK";
})(DedicatedTemplateOsLanguage = exports.DedicatedTemplateOsLanguage || (exports.DedicatedTemplateOsLanguage = {}));
/*
 * Os type
 */
var DedicatedTemplateOsType;
(function (DedicatedTemplateOsType) {
    DedicatedTemplateOsType["BSD"] = "bsd";
    DedicatedTemplateOsType["LINUX"] = "linux";
    DedicatedTemplateOsType["SOLARIS"] = "solaris";
    DedicatedTemplateOsType["WINDOWS"] = "windows";
})(DedicatedTemplateOsType = exports.DedicatedTemplateOsType || (exports.DedicatedTemplateOsType = {}));
/*
 * Os usage definition
 */
var DedicatedTemplateOsUsage;
(function (DedicatedTemplateOsUsage) {
    DedicatedTemplateOsUsage["BASIC"] = "basic";
    DedicatedTemplateOsUsage["CUSTOMER"] = "customer";
    DedicatedTemplateOsUsage["HOSTING"] = "hosting";
    DedicatedTemplateOsUsage["OTHER"] = "other";
    DedicatedTemplateOsUsage["READYTOUSE"] = "readyToUse";
    DedicatedTemplateOsUsage["VIRTUALISATION"] = "virtualisation";
})(DedicatedTemplateOsUsage = exports.DedicatedTemplateOsUsage || (exports.DedicatedTemplateOsUsage = {}));
/*
 * partition type
 */
var DedicatedTemplatePartitionType;
(function (DedicatedTemplatePartitionType) {
    DedicatedTemplatePartitionType["LOGICAL"] = "logical";
    DedicatedTemplatePartitionType["LV"] = "lv";
    DedicatedTemplatePartitionType["PRIMARY"] = "primary";
})(DedicatedTemplatePartitionType = exports.DedicatedTemplatePartitionType || (exports.DedicatedTemplatePartitionType = {}));
class DedicatedInstallationTemplate {
    constructor(client) {
        this.client = client;
    }
    /**
     * List the dedicated.installationTemplate.Templates objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/installationTemplate#GET)
     */
    OVHOperatingSystemInstallationTemplates() {
        let url = `/dedicated/installationTemplate`;
        return this.client.request('GET', url);
    }
    /**
     * Available installation templates [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/installationTemplate/%7BtemplateName%7D#GET)
     */
    GetThisObjectProperties(templateName) {
        let url = `/dedicated/installationTemplate/${templateName}`;
        return this.client.request('GET', url);
    }
    /**
     * List the dedicated.installationTemplate.templatePartitioningSchemes objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/installationTemplate/%7BtemplateName%7D/partitionScheme#GET)
     */
    PartitioningSchemesAvailableOnThisTemplate(templateName) {
        let url = `/dedicated/installationTemplate/${templateName}/partitionScheme`;
        return this.client.request('GET', url);
    }
    /**
     * Partitioning schemes available on this template [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D#GET)
     */
    /*
    GetThisObjectProperties(schemeName: string, templateName: string): Promise<DedicatedinstallationTemplatetemplatePartitioningSchemes> {
      let url = `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}`
  
      return this.client.request<DedicatedinstallationTemplatetemplatePartitioningSchemes>('GET', url)
    }
    */
    /**
     * List the dedicated.installationTemplate.hardwareRaid objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/hardwareRaid#GET)
     */
    HardwareRAIDsDefinedInThisPartitioningScheme(schemeName, templateName) {
        let url = `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid`;
        return this.client.request('GET', url);
    }
    /**
     * Hardware RAID defined in this partitioning scheme [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/hardwareRaid/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(name: string, schemeName: string, templateName: string): Promise<DedicatedinstallationTemplatehardwareRaid> {
      let url = `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid/${name}`
  
      return this.client.request<DedicatedinstallationTemplatehardwareRaid>('GET', url)
    }
    */
    /**
     * List the dedicated.installationTemplate.templatePartitions objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/partition#GET)
     */
    PartitionsDefinedInThisPartitioningScheme(schemeName, templateName) {
        let url = `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition`;
        return this.client.request('GET', url);
    }
}
exports.DedicatedInstallationTemplate = DedicatedInstallationTemplate;
//# sourceMappingURL=dedicated.installationTemplate.js.map