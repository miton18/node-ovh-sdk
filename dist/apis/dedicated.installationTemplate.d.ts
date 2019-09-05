import { Client } from '../client';
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
}
export interface DedicatedinstallationTemplatehardwareRaid {
    name: string;
    step: number;
    mode: DedicatedTemplateOsHardwareRaidEnum;
    disks: string[];
}
export interface DedicatedinstallationTemplatetemplatePartitioningSchemes {
    priority: number;
    name: string;
}
export interface DedicatedinstallationTemplatetemplatePartitions {
    order: number;
    size: any;
    raid?: DedicatedserverPartitionRaidEnum;
    filesystem: DedicatedTemplateOsFileSystemEnum;
    volumeName?: string;
    mountpoint: string;
    type: DedicatedTemplatePartitionTypeEnum;
}
export interface DedicatedinstallationTemplateTemplates {
    defaultLanguage: DedicatedTemplateOsLanguageEnum;
    templateName: string;
    lvmReady?: boolean;
    family: DedicatedTemplateOsTypeEnum;
    supportsRTM: boolean;
    supportsUEFI?: DedicatedserverSupportsUEFIEnum;
    supportsSqlServer?: boolean;
    deprecated?: boolean;
    bitFormat: DedicatedserverBitFormatEnum;
    supportsGptLabel?: boolean;
    supportsDistributionKernel?: boolean;
    hardRaidConfiguration?: boolean;
    lastModification?: string;
    distribution: string;
    category: DedicatedTemplateOsUsageEnum;
    beta?: boolean;
    availableLanguages: DedicatedTemplateOsLanguageEnum[];
    customization?: DedicatedTemplateOsProperties;
    description: string;
    filesystems: DedicatedTemplateOsFileSystemEnum[];
}
export declare type DedicatedserverBitFormatEnum = 32 | 64;
export declare type DedicatedserverPartitionRaidEnum = '0' | '1' | '10' | '5' | '6';
export declare enum DedicatedserverSupportsUEFIEnum {
    NO = "no",
    ONLY = "only",
    YES = "yes"
}
export declare enum DedicatedTemplateOsFileSystemEnum {
    BTRFS = "btrfs",
    EXT3 = "ext3",
    EXT4 = "ext4",
    NTFS = "ntfs",
    REISERFS = "reiserfs",
    SWAP = "swap",
    UFS = "ufs",
    XFS = "xfs",
    ZFS = "zfs"
}
export declare enum DedicatedTemplateOsHardwareRaidEnum {
    RAID0 = "raid0",
    RAID1 = "raid1",
    RAID10 = "raid10",
    RAID5 = "raid5",
    RAID50 = "raid50",
    RAID6 = "raid6",
    RAID60 = "raid60"
}
export declare enum DedicatedTemplateOsLanguageEnum {
    AR = "ar",
    BG = "bg",
    CS = "cs",
    DA = "da",
    DE = "de",
    EL = "el",
    EN = "en",
    ES = "es",
    ET = "et",
    FI = "fi",
    FR = "fr",
    HE = "he",
    HR = "hr",
    HU = "hu",
    IT = "it",
    JA = "ja",
    KO = "ko",
    LT = "lt",
    LV = "lv",
    NB = "nb",
    NL = "nl",
    NO = "no",
    PL = "pl",
    PT = "pt",
    RO = "ro",
    RU = "ru",
    SK = "sk",
    SL = "sl",
    SR = "sr",
    SV = "sv",
    TH = "th",
    TR = "tr",
    TU = "tu",
    UK = "uk",
    ZH_HANS_CN = "zh-Hans-CN",
    ZH_HANS_HK = "zh-Hans-HK"
}
export interface DedicatedTemplateOsProperties {
    postInstallationScriptLink?: string;
    sshKeyName?: string;
    rating?: number;
    customHostname?: string;
    postInstallationScriptReturn?: string;
    useDistributionKernel?: boolean;
    changeLog?: string;
}
export declare enum DedicatedTemplateOsTypeEnum {
    BSD = "bsd",
    LINUX = "linux",
    SOLARIS = "solaris",
    WINDOWS = "windows"
}
export declare enum DedicatedTemplateOsUsageEnum {
    BASIC = "basic",
    CUSTOMER = "customer",
    HOSTING = "hosting",
    OTHER = "other",
    READYTOUSE = "readyToUse",
    VIRTUALISATION = "virtualisation"
}
export declare enum DedicatedTemplatePartitionTypeEnum {
    LOGICAL = "logical",
    LV = "lv",
    PRIMARY = "primary"
}
export declare class DedicatedInstallationTemplate {
    private client;
    constructor(client: Client);
    OVHOperatingSystemInstallationTemplates(): Promise<string[]>;
    GetThisObjectProperties(templateName: string): Promise<DedicatedinstallationTemplateTemplates>;
    PartitioningSchemesAvailableOnThisTemplate(templateName: string): Promise<string[]>;
    HardwareRAIDsDefinedInThisPartitioningScheme(schemeName: string, templateName: string): Promise<string[]>;
    PartitionsDefinedInThisPartitioningScheme(schemeName: string, templateName: string): Promise<string[]>;
}
//# sourceMappingURL=dedicated.installationTemplate.d.ts.map