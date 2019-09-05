// GENERATED SDK for license/sqlserver API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * A short description of what does the Task on your license
 */
export enum LicenseActionType {
  ADDWINDOWFROMEXISTINGSERIAL = 'addWindowFromExistingSerial',
  CHANGEIP = 'changeIp',
  CHANGEOS = 'changeOs',
  INSTALLLICENSE = 'installLicense',
  OPTIONUPGRADE = 'optionUpgrade',
  RELEASEOPTION = 'releaseOption',
  VERSIONUPGRADE = 'versionUpgrade'
}

/*
 * Possible values for license type
 */
export enum LicenseLicenseType {
  DEDICATED = 'dedicated',
  DEDICATEDCLOUD = 'dedicatedCloud',
  DEDICATEDFAILOVER = 'dedicatedFailover',
  FAILOVER = 'failover',
  VM = 'vm',
  VPS = 'vps',
  VPS_CEPH = 'vps_ceph',
  VPS_CLASSIC = 'vps_classic',
  VPS_CLOUD = 'vps_cloud',
  VPS_CLOUD_2016 = 'vps_cloud_2016',
  VPS_SSD = 'vps_ssd'
}

/**
 * All options available for SQL Server products
 */
export interface LicenseOrderableSqlServerCompatibilityInfos {
  version: LicenseSqlServerVersion
}

/**
 * Your SQL Server license
 */
export interface LicensesqlserverSqlServer {
  creation: string
  domain: string
  ip: string
  licenseId: string
  status: LicenseState
  version: LicenseSqlServerVersion
}

/**
 * Allowed SQL Server versions and their compliant options per matching serviceTypes
 */
export interface LicenseSqlServerOrderConfiguration {
  orderableVersions: LicenseOrderableSqlServerCompatibilityInfos[]
  serviceType: LicenseLicenseType
}

/*
 * All versions for SQL Server product
 */
export enum LicenseSqlServerVersion {
  SQL_SERVER_2008_STANDARD_EDITION_2_CPU = 'SQL_SERVER_2008_STANDARD_EDITION_2_CPU',
  SQL_SERVER_2008_STANDARD_EDITION_4_CPU = 'SQL_SERVER_2008_STANDARD_EDITION_4_CPU',
  SQL_SERVER_2008_WEB_EDITION_2_CPU = 'SQL_SERVER_2008_WEB_EDITION_2_CPU',
  SQL_SERVER_2008_WEB_EDITION_4_CPU = 'SQL_SERVER_2008_WEB_EDITION_4_CPU',
  SQL_SERVER_2012_STANDARD_EDITION_10_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_10_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_12_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_16_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_18_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_20_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_24_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_2_CPU = 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU',
  SQL_SERVER_2012_STANDARD_EDITION_32_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_4_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_6_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES',
  SQL_SERVER_2012_STANDARD_EDITION_8_CORES = 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES',
  SQL_SERVER_2012_WEB_EDITION_10_CORES = 'SQL_SERVER_2012_WEB_EDITION_10_CORES',
  SQL_SERVER_2012_WEB_EDITION_12_CORES = 'SQL_SERVER_2012_WEB_EDITION_12_CORES',
  SQL_SERVER_2012_WEB_EDITION_16_CORES = 'SQL_SERVER_2012_WEB_EDITION_16_CORES',
  SQL_SERVER_2012_WEB_EDITION_18_CORES = 'SQL_SERVER_2012_WEB_EDITION_18_CORES',
  SQL_SERVER_2012_WEB_EDITION_20_CORES = 'SQL_SERVER_2012_WEB_EDITION_20_CORES',
  SQL_SERVER_2012_WEB_EDITION_24_CORES = 'SQL_SERVER_2012_WEB_EDITION_24_CORES',
  SQL_SERVER_2012_WEB_EDITION_32_CORES = 'SQL_SERVER_2012_WEB_EDITION_32_CORES',
  SQL_SERVER_2012_WEB_EDITION_4_CORES = 'SQL_SERVER_2012_WEB_EDITION_4_CORES',
  SQL_SERVER_2012_WEB_EDITION_6_CORES = 'SQL_SERVER_2012_WEB_EDITION_6_CORES',
  SQL_SERVER_2012_WEB_EDITION_8_CORES = 'SQL_SERVER_2012_WEB_EDITION_8_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_10_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_10_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_12_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_12_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_16_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_16_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_18_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_18_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_20_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_20_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_24_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_24_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_4_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_4_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_6_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_6_CORES',
  SQL_SERVER_2014_STANDARD_EDITION_8_CORES = 'SQL_SERVER_2014_STANDARD_EDITION_8_CORES',
  SQL_SERVER_2014_WEB_EDITION_10_CORES = 'SQL_SERVER_2014_WEB_EDITION_10_CORES',
  SQL_SERVER_2014_WEB_EDITION_12_CORES = 'SQL_SERVER_2014_WEB_EDITION_12_CORES',
  SQL_SERVER_2014_WEB_EDITION_16_CORES = 'SQL_SERVER_2014_WEB_EDITION_16_CORES',
  SQL_SERVER_2014_WEB_EDITION_18_CORES = 'SQL_SERVER_2014_WEB_EDITION_18_CORES',
  SQL_SERVER_2014_WEB_EDITION_20_CORES = 'SQL_SERVER_2014_WEB_EDITION_20_CORES',
  SQL_SERVER_2014_WEB_EDITION_24_CORES = 'SQL_SERVER_2014_WEB_EDITION_24_CORES',
  SQL_SERVER_2014_WEB_EDITION_4_CORES = 'SQL_SERVER_2014_WEB_EDITION_4_CORES',
  SQL_SERVER_2014_WEB_EDITION_6_CORES = 'SQL_SERVER_2014_WEB_EDITION_6_CORES',
  SQL_SERVER_2014_WEB_EDITION_8_CORES = 'SQL_SERVER_2014_WEB_EDITION_8_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_10_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_10_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_12_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_12_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_14_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_14_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_16_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_16_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_4_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_4_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_6_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_6_CORES',
  SQL_SERVER_2016_STANDARD_EDITION_8_CORES = 'SQL_SERVER_2016_STANDARD_EDITION_8_CORES',
  SQL_SERVER_2016_WEB_EDITION_10_CORES = 'SQL_SERVER_2016_WEB_EDITION_10_CORES',
  SQL_SERVER_2016_WEB_EDITION_12_CORES = 'SQL_SERVER_2016_WEB_EDITION_12_CORES',
  SQL_SERVER_2016_WEB_EDITION_14_CORES = 'SQL_SERVER_2016_WEB_EDITION_14_CORES',
  SQL_SERVER_2016_WEB_EDITION_16_CORES = 'SQL_SERVER_2016_WEB_EDITION_16_CORES',
  SQL_SERVER_2016_WEB_EDITION_4_CORES = 'SQL_SERVER_2016_WEB_EDITION_4_CORES',
  SQL_SERVER_2016_WEB_EDITION_6_CORES = 'SQL_SERVER_2016_WEB_EDITION_6_CORES',
  SQL_SERVER_2016_WEB_EDITION_8_CORES = 'SQL_SERVER_2016_WEB_EDITION_8_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_10_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_10_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_12_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_12_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_14_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_14_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_16_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_16_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_18_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_18_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_20_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_20_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_22_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_22_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_24_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_24_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_26_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_26_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_28_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_28_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_30_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_30_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_32_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_32_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_4_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_4_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_6_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_6_CORES',
  SQL_SERVER_2017_STANDARD_EDITION_8_CORES = 'SQL_SERVER_2017_STANDARD_EDITION_8_CORES',
  SQL_SERVER_2017_WEB_EDITION_10_CORES = 'SQL_SERVER_2017_WEB_EDITION_10_CORES',
  SQL_SERVER_2017_WEB_EDITION_12_CORES = 'SQL_SERVER_2017_WEB_EDITION_12_CORES',
  SQL_SERVER_2017_WEB_EDITION_14_CORES = 'SQL_SERVER_2017_WEB_EDITION_14_CORES',
  SQL_SERVER_2017_WEB_EDITION_16_CORES = 'SQL_SERVER_2017_WEB_EDITION_16_CORES',
  SQL_SERVER_2017_WEB_EDITION_18_CORES = 'SQL_SERVER_2017_WEB_EDITION_18_CORES',
  SQL_SERVER_2017_WEB_EDITION_20_CORES = 'SQL_SERVER_2017_WEB_EDITION_20_CORES',
  SQL_SERVER_2017_WEB_EDITION_22_CORES = 'SQL_SERVER_2017_WEB_EDITION_22_CORES',
  SQL_SERVER_2017_WEB_EDITION_24_CORES = 'SQL_SERVER_2017_WEB_EDITION_24_CORES',
  SQL_SERVER_2017_WEB_EDITION_26_CORES = 'SQL_SERVER_2017_WEB_EDITION_26_CORES',
  SQL_SERVER_2017_WEB_EDITION_28_CORES = 'SQL_SERVER_2017_WEB_EDITION_28_CORES',
  SQL_SERVER_2017_WEB_EDITION_30_CORES = 'SQL_SERVER_2017_WEB_EDITION_30_CORES',
  SQL_SERVER_2017_WEB_EDITION_32_CORES = 'SQL_SERVER_2017_WEB_EDITION_32_CORES',
  SQL_SERVER_2017_WEB_EDITION_4_CORES = 'SQL_SERVER_2017_WEB_EDITION_4_CORES',
  SQL_SERVER_2017_WEB_EDITION_6_CORES = 'SQL_SERVER_2017_WEB_EDITION_6_CORES',
  SQL_SERVER_2017_WEB_EDITION_8_CORES = 'SQL_SERVER_2017_WEB_EDITION_8_CORES',
  SQL_SERVER_2008_LICENSE_STANDARD_EDITION_2_CPU = 'sql-server-2008-license-standard-edition-2-cpu',
  SQL_SERVER_2008_LICENSE_STANDARD_EDITION_4_CPU = 'sql-server-2008-license-standard-edition-4-cpu',
  SQL_SERVER_2008_LICENSE_WEB_EDITION_2_CPU = 'sql-server-2008-license-web-edition-2-cpu',
  SQL_SERVER_2008_LICENSE_WEB_EDITION_4_CPU = 'sql-server-2008-license-web-edition-4-cpu',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_10_CORES = 'sql-server-2012-license-standard-edition-10-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_12_CORES = 'sql-server-2012-license-standard-edition-12-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_16_CORES = 'sql-server-2012-license-standard-edition-16-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_18_CORES = 'sql-server-2012-license-standard-edition-18-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_2_CPU = 'sql-server-2012-license-standard-edition-2-cpu',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_20_CORES = 'sql-server-2012-license-standard-edition-20-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_24_CORES = 'sql-server-2012-license-standard-edition-24-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_32_CORES = 'sql-server-2012-license-standard-edition-32-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_4_CORES = 'sql-server-2012-license-standard-edition-4-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_6_CORES = 'sql-server-2012-license-standard-edition-6-cores',
  SQL_SERVER_2012_LICENSE_STANDARD_EDITION_8_CORES = 'sql-server-2012-license-standard-edition-8-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_10_CORES = 'sql-server-2012-license-web-edition-10-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_12_CORES = 'sql-server-2012-license-web-edition-12-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_16_CORES = 'sql-server-2012-license-web-edition-16-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_18_CORES = 'sql-server-2012-license-web-edition-18-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_20_CORES = 'sql-server-2012-license-web-edition-20-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_24_CORES = 'sql-server-2012-license-web-edition-24-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_32_CORES = 'sql-server-2012-license-web-edition-32-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_4_CORES = 'sql-server-2012-license-web-edition-4-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_6_CORES = 'sql-server-2012-license-web-edition-6-cores',
  SQL_SERVER_2012_LICENSE_WEB_EDITION_8_CORES = 'sql-server-2012-license-web-edition-8-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_10_CORES = 'sql-server-2014-license-standard-edition-10-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_12_CORES = 'sql-server-2014-license-standard-edition-12-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_16_CORES = 'sql-server-2014-license-standard-edition-16-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_18_CORES = 'sql-server-2014-license-standard-edition-18-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_20_CORES = 'sql-server-2014-license-standard-edition-20-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_24_CORES = 'sql-server-2014-license-standard-edition-24-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_4_CORES = 'sql-server-2014-license-standard-edition-4-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_6_CORES = 'sql-server-2014-license-standard-edition-6-cores',
  SQL_SERVER_2014_LICENSE_STANDARD_EDITION_8_CORES = 'sql-server-2014-license-standard-edition-8-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_10_CORES = 'sql-server-2014-license-web-edition-10-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_12_CORES = 'sql-server-2014-license-web-edition-12-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_16_CORES = 'sql-server-2014-license-web-edition-16-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_18_CORES = 'sql-server-2014-license-web-edition-18-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_20_CORES = 'sql-server-2014-license-web-edition-20-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_24_CORES = 'sql-server-2014-license-web-edition-24-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_4_CORES = 'sql-server-2014-license-web-edition-4-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_6_CORES = 'sql-server-2014-license-web-edition-6-cores',
  SQL_SERVER_2014_LICENSE_WEB_EDITION_8_CORES = 'sql-server-2014-license-web-edition-8-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_10_CORES = 'sql-server-2016-license-standard-edition-10-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_12_CORES = 'sql-server-2016-license-standard-edition-12-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_14_CORES = 'sql-server-2016-license-standard-edition-14-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_16_CORES = 'sql-server-2016-license-standard-edition-16-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_4_CORES = 'sql-server-2016-license-standard-edition-4-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_6_CORES = 'sql-server-2016-license-standard-edition-6-cores',
  SQL_SERVER_2016_LICENSE_STANDARD_EDITION_8_CORES = 'sql-server-2016-license-standard-edition-8-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_10_CORES = 'sql-server-2016-license-web-edition-10-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_12_CORES = 'sql-server-2016-license-web-edition-12-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_14_CORES = 'sql-server-2016-license-web-edition-14-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_16_CORES = 'sql-server-2016-license-web-edition-16-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_4_CORES = 'sql-server-2016-license-web-edition-4-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_6_CORES = 'sql-server-2016-license-web-edition-6-cores',
  SQL_SERVER_2016_LICENSE_WEB_EDITION_8_CORES = 'sql-server-2016-license-web-edition-8-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_10_CORES = 'sql-server-2017-license-standard-edition-10-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_12_CORES = 'sql-server-2017-license-standard-edition-12-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_14_CORES = 'sql-server-2017-license-standard-edition-14-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_16_CORES = 'sql-server-2017-license-standard-edition-16-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_18_CORES = 'sql-server-2017-license-standard-edition-18-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_20_CORES = 'sql-server-2017-license-standard-edition-20-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_22_CORES = 'sql-server-2017-license-standard-edition-22-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_24_CORES = 'sql-server-2017-license-standard-edition-24-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_26_CORES = 'sql-server-2017-license-standard-edition-26-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_28_CORES = 'sql-server-2017-license-standard-edition-28-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_30_CORES = 'sql-server-2017-license-standard-edition-30-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_32_CORES = 'sql-server-2017-license-standard-edition-32-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_4_CORES = 'sql-server-2017-license-standard-edition-4-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_6_CORES = 'sql-server-2017-license-standard-edition-6-cores',
  SQL_SERVER_2017_LICENSE_STANDARD_EDITION_8_CORES = 'sql-server-2017-license-standard-edition-8-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_10_CORES = 'sql-server-2017-license-web-edition-10-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_12_CORES = 'sql-server-2017-license-web-edition-12-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_14_CORES = 'sql-server-2017-license-web-edition-14-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_16_CORES = 'sql-server-2017-license-web-edition-16-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_18_CORES = 'sql-server-2017-license-web-edition-18-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_20_CORES = 'sql-server-2017-license-web-edition-20-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_22_CORES = 'sql-server-2017-license-web-edition-22-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_24_CORES = 'sql-server-2017-license-web-edition-24-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_26_CORES = 'sql-server-2017-license-web-edition-26-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_28_CORES = 'sql-server-2017-license-web-edition-28-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_30_CORES = 'sql-server-2017-license-web-edition-30-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_32_CORES = 'sql-server-2017-license-web-edition-32-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_4_CORES = 'sql-server-2017-license-web-edition-4-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_6_CORES = 'sql-server-2017-license-web-edition-6-cores',
  SQL_SERVER_2017_LICENSE_WEB_EDITION_8_CORES = 'sql-server-2017-license-web-edition-8-cores'
}

/*
 * All states a license can be in
 */
export enum LicenseState {
  OK = 'ok',
  RELEASED = 'released',
  TERMINATED = 'terminated',
  TODELIVER = 'toDeliver'
}

/**
 * licenses Todos
 */
export interface LicenseTask {
  action: LicenseActionType
  doneDate?: string
  lastUpdate: string
  name: string
  status: LicenseTaskState
  taskId: number
  todoDate: string
}

/*
 * All states a license Task can be in
 */
export enum LicenseTaskState {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
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

/*
 * All future uses you can provide for a service termination
 */
export enum ServiceTerminationFutureUse {
  NOT_REPLACING_SERVICE = 'NOT_REPLACING_SERVICE',
  OTHER = 'OTHER',
  SUBSCRIBE_AN_OTHER_SERVICE = 'SUBSCRIBE_AN_OTHER_SERVICE',
  SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR',
  SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR'
}

/*
 * All reasons you can provide for a service termination
 */
export enum ServiceTerminationReason {
  FEATURES_DONT_SUIT_ME = 'FEATURES_DONT_SUIT_ME',
  LACK_OF_PERFORMANCES = 'LACK_OF_PERFORMANCES',
  MIGRATED_TO_ANOTHER_OVH_PRODUCT = 'MIGRATED_TO_ANOTHER_OVH_PRODUCT',
  MIGRATED_TO_COMPETITOR = 'MIGRATED_TO_COMPETITOR',
  NOT_ENOUGH_RECOGNITION = 'NOT_ENOUGH_RECOGNITION',
  NOT_NEEDED_ANYMORE = 'NOT_NEEDED_ANYMORE',
  NOT_RELIABLE = 'NOT_RELIABLE',
  NO_ANSWER = 'NO_ANSWER',
  OTHER = 'OTHER',
  PRODUCT_DIMENSION_DONT_SUIT_ME = 'PRODUCT_DIMENSION_DONT_SUIT_ME',
  PRODUCT_TOOLS_DONT_SUIT_ME = 'PRODUCT_TOOLS_DONT_SUIT_ME',
  TOO_EXPENSIVE = 'TOO_EXPENSIVE',
  TOO_HARD_TO_USE = 'TOO_HARD_TO_USE',
  UNSATIFIED_BY_CUSTOMER_SUPPORT = 'UNSATIFIED_BY_CUSTOMER_SUPPORT'
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


export class LicenseSqlserver {
  constructor(private client: Client) {}

  /**
   * Operations about the LICENSE service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/license/sqlserver`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Your SQL Server license [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<LicensesqlserverSqlServer> {
    let url = `/license/sqlserver/${serviceName}`

    return this.client.request<LicensesqlserverSqlServer>('GET', url)
  }

  /**
   * Confirm termination of your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/confirmTermination#POST)
   */
  ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string> {
    let url = `/license/sqlserver/${serviceName}/confirmTermination`

    return this.client.request<string>('POST', url, {token, commentary, futureUse, reason})
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/license/sqlserver/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/license/sqlserver/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the license.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/tasks#GET)
   */
  TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskState): Promise<number[]> {
    let url = `/license/sqlserver/${serviceName}/tasks?`

    const queryParams = new QueryParams()
    if (action) { queryParams.set('action', action.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * licenses Todos [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<LicenseTask> {
    let url = `/license/sqlserver/${serviceName}/tasks/${taskId}`

    return this.client.request<LicenseTask>('GET', url)
  }
  */

  /**
   * Terminate your service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/%7BserviceName%7D/terminate#POST)
   */
  TerminateYourService(serviceName: string): Promise<string> {
    let url = `/license/sqlserver/${serviceName}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * Get the orderable Sql Server versions [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/license/sqlserver/orderableVersions#GET)
   */
  GetTheOrderableSqlServerVersions(ip: string): Promise<LicenseSqlServerOrderConfiguration[]> {
    let url = `/license/sqlserver/orderableVersions?`

    const queryParams = new QueryParams()
    if (ip) { queryParams.set('ip', ip.toString()) }

    return this.client.request<LicenseSqlServerOrderConfiguration[]>('GET', url+queryParams.toString())
  }

}
