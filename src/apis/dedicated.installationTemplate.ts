// GENERATED SDK for dedicated/installationTemplate API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  unit: string
  value: T
}

/**
 * Hardware RAID defined in this partitioning scheme
 */
export interface DedicatedinstallationTemplatehardwareRaid {
  disks: string[]
  mode: DedicatedTemplateOsHardwareRaid
  name: string
  step: number
}

/**
 * Partitioning schemes available on this template
 */
export interface DedicatedinstallationTemplatetemplatePartitioningSchemes {
  name: string
  priority: number
}

/**
 *  Partitions defined in this partitioning scheme
 */
export interface DedicatedinstallationTemplatetemplatePartitions {
  filesystem: DedicatedTemplateOsFileSystem
  mountpoint: string
  order: number
  raid?: DedicatedserverPartitionRaid
  size: any
  type: DedicatedTemplatePartitionType
  volumeName?: string
}

/**
 * Available installation templates
 */
export interface DedicatedinstallationTemplateTemplates {
  availableLanguages: DedicatedTemplateOsLanguageEnum[]
  beta?: boolean
  bitFormat: DedicatedserverBitFormat
  category: DedicatedTemplateOsUsage
  customization?: DedicatedTemplateOsProperties
  defaultLanguage: DedicatedTemplateOsLanguage
  deprecated?: boolean
  description: string
  distribution: string
  family: DedicatedTemplateOsType
  filesystems: DedicatedTemplateOsFileSystemEnum[]
  hardRaidConfiguration?: boolean
  lastModification?: string
  lvmReady?: boolean
  supportsDistributionKernel?: boolean
  supportsGptLabel?: boolean
  supportsRTM: boolean
  supportsSqlServer?: boolean
  supportsUEFI?: DedicatedserverSupportsUEFI
  templateName: string
}

/*
 * Available os bit format
 */
export type DedicatedserverBitFormat = 32 | 64

/*
 * partition raid type
 */
export type DedicatedserverPartitionRaid = '0' | '1' | '10' | '5' | '6'

/*
 * supports UEFI setup
 */
export enum DedicatedserverSupportsUEFI {
  NO = 'no',
  ONLY = 'only',
  YES = 'yes'
}

/*
 * Filesystems available
 */
export enum DedicatedTemplateOsFileSystem {
  BTRFS = 'btrfs',
  EXT3 = 'ext3',
  EXT4 = 'ext4',
  NTFS = 'ntfs',
  REISERFS = 'reiserfs',
  SWAP = 'swap',
  UFS = 'ufs',
  XFS = 'xfs',
  ZFS = 'zfs'
}

/*
 * Hardware RAID enum
 */
export enum DedicatedTemplateOsHardwareRaid {
  RAID0 = 'raid0',
  RAID1 = 'raid1',
  RAID10 = 'raid10',
  RAID5 = 'raid5',
  RAID50 = 'raid50',
  RAID6 = 'raid6',
  RAID60 = 'raid60'
}

/*
 * all language available
 */
export enum DedicatedTemplateOsLanguage {
  AR = 'ar',
  BG = 'bg',
  CS = 'cs',
  DA = 'da',
  DE = 'de',
  EL = 'el',
  EN = 'en',
  ES = 'es',
  ET = 'et',
  FI = 'fi',
  FR = 'fr',
  HE = 'he',
  HR = 'hr',
  HU = 'hu',
  IT = 'it',
  JA = 'ja',
  KO = 'ko',
  LT = 'lt',
  LV = 'lv',
  NB = 'nb',
  NL = 'nl',
  NO = 'no',
  PL = 'pl',
  PT = 'pt',
  RO = 'ro',
  RU = 'ru',
  SK = 'sk',
  SL = 'sl',
  SR = 'sr',
  SV = 'sv',
  TH = 'th',
  TR = 'tr',
  TU = 'tu',
  UK = 'uk',
  ZH_HANS_CN = 'zh-Hans-CN',
  ZH_HANS_HK = 'zh-Hans-HK'
}

/**
 * A structure describing properties customizables about this dedicated installation template
 */
export interface DedicatedTemplateOsProperties {
  changeLog?: string
  customHostname?: string
  postInstallationScriptLink?: string
  postInstallationScriptReturn?: string
  rating?: number
  sshKeyName?: string
  useDistributionKernel?: boolean
}

/*
 * Os type
 */
export enum DedicatedTemplateOsType {
  BSD = 'bsd',
  LINUX = 'linux',
  SOLARIS = 'solaris',
  WINDOWS = 'windows'
}

/*
 * Os usage definition
 */
export enum DedicatedTemplateOsUsage {
  BASIC = 'basic',
  CUSTOMER = 'customer',
  HOSTING = 'hosting',
  OTHER = 'other',
  READYTOUSE = 'readyToUse',
  VIRTUALISATION = 'virtualisation'
}

/*
 * partition type
 */
export enum DedicatedTemplatePartitionType {
  LOGICAL = 'logical',
  LV = 'lv',
  PRIMARY = 'primary'
}


export class DedicatedInstallationTemplate {
  constructor(private client: Client) {}

  /**
   * List the dedicated.installationTemplate.Templates objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/installationTemplate#GET)
   */
  OVHOperatingSystemInstallationTemplates(): Promise<string[]> {
    let url = `/dedicated/installationTemplate`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Available installation templates [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/installationTemplate/%7BtemplateName%7D#GET)
   */
  GetThisObjectProperties(templateName: string): Promise<DedicatedinstallationTemplateTemplates> {
    let url = `/dedicated/installationTemplate/${templateName}`

    return this.client.request<DedicatedinstallationTemplateTemplates>('GET', url)
  }

  /**
   * List the dedicated.installationTemplate.templatePartitioningSchemes objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/installationTemplate/%7BtemplateName%7D/partitionScheme#GET)
   */
  PartitioningSchemesAvailableOnThisTemplate(templateName: string): Promise<string[]> {
    let url = `/dedicated/installationTemplate/${templateName}/partitionScheme`

    return this.client.request<string[]>('GET', url)
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
  HardwareRAIDsDefinedInThisPartitioningScheme(schemeName: string, templateName: string): Promise<string[]> {
    let url = `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/hardwareRaid`

    return this.client.request<string[]>('GET', url)
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
  PartitionsDefinedInThisPartitioningScheme(schemeName: string, templateName: string): Promise<string[]> {
    let url = `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition`

    return this.client.request<string[]>('GET', url)
  }

  /**
   *  Partitions defined in this partitioning scheme [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/dedicated/installationTemplate/%7BtemplateName%7D/partitionScheme/%7BschemeName%7D/partition/%7Bmountpoint%7D#GET)
   */
  /*
  GetThisObjectProperties(mountpoint: string, schemeName: string, templateName: string): Promise<DedicatedinstallationTemplatetemplatePartitions> {
    let url = `/dedicated/installationTemplate/${templateName}/partitionScheme/${schemeName}/partition/${mountpoint}`

    return this.client.request<DedicatedinstallationTemplatetemplatePartitions>('GET', url)
  }
  */

}
