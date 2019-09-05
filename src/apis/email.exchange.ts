// GENERATED SDK for email/exchange API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Exchange mailbox
 */
export interface EmailexchangeAccount {
  accountLicense: EmailexchangeOvhLicence
  company?: string
  configured: boolean
  creationDate?: string
  currentUsage?: number
  deleteAtExpiration?: boolean
  deleteOutlookAtExpiration?: boolean
  displayName?: string
  domain: string
  exchangeGuid?: string
  expirationDate?: string
  expirationOutlookDate?: string
  firstName?: string
  guid?: string
  hiddenFromGAL: boolean
  id: number
  initial?: string
  lastLogoffDate?: string
  lastLogonDate?: string
  lastName?: string
  lastUpdateDate?: string
  litigation: boolean
  litigationPeriod?: number
  login: string
  mailingFilter?: EmailexchangeMailingFilterEnum[]
  outlookLicense: boolean
  owaLimited: boolean
  passwordLastUpdate?: string
  primaryEmailAddress: string
  quota: number
  renewOutlookPeriod?: EmailexchangerenewPeriod
  renewPeriod?: EmailexchangerenewPeriod
  SAMAccountName?: string
  spamAndVirusConfiguration: EmailexchangespamAndVirusConfiguration
  spamDetected: boolean
  spamTicketNumber?: number
  state: EmailexchangeObjectState
  taskPendingId: number
}

/**
 * Exchange account license
 */
export interface EmailexchangeAccountLicense {
  license: EmailexchangeOvhLicence
  licenseQuantity: number
}

/*
 * Subscription state
 */
export enum EmailexchangeactiveSyncNotificationState {
  CREATING = 'creating',
  DELETING = 'deleting',
  OK = 'ok'
}

/*
 * Activesync action
 */
export enum EmailexchangeActiveSyncPolicy {
  ALLOW = 'allow',
  BLOCK = 'block',
  QUARANTINE = 'quarantine'
}

/*
 * Authorized IP State
 */
export enum EmailexchangeauthorizedIpStatus {
  CREATING = 'creating',
  DELETING = 'deleting',
  OK = 'ok'
}

/**
 * Exchange account license per day
 */
export interface EmailexchangeDailyLicense {
  accountLicense: EmailexchangeAccountLicense[]
  date: string
  outlookQuantity: number
}

/*
 * Device ActiveSync state
 */
export enum EmailexchangeDeviceActiveSyncState {
  ALLOWED = 'allowed',
  BLOCKED = 'blocked',
  DEVICEDISCOVERY = 'deviceDiscovery',
  QUARANTINED = 'quarantined'
}

/**
 * Exchange organization disclaimer
 */
export interface Emailexchangedisclaimer {
  content: string
  creationDate: string
  name: string
  outsideOnly: boolean
  taskPendingId: number
}

/*
 * Disclaimer attributes list
 */
export enum EmailexchangeDisclaimerAttribute {
  CITY = 'City',
  COMPANY = 'Company',
  COUNTRY = 'Country',
  DEPARTMENT = 'Department',
  DISPLAYNAME = 'DisplayName',
  EMAIL = 'Email',
  FAXNUMBER = 'FaxNumber',
  FIRSTNAME = 'FirstName',
  HOMEPHONENUMBER = 'HomePhoneNumber',
  INITIALS = 'Initials',
  LASTNAME = 'LastName',
  MANAGER = 'Manager',
  MOBILENUMBER = 'MobileNumber',
  NOTES = 'Notes',
  OFFICE = 'Office',
  OTHERFAXNUMBER = 'OtherFaxNumber',
  OTHERHOMEPHONENUMBER = 'OtherHomePhoneNumber',
  OTHERPHONENUMBER = 'OtherPhoneNumber',
  PAGERNUMBER = 'PagerNumber',
  PHONENUMBER = 'PhoneNumber',
  STATE = 'State',
  STREET = 'Street',
  TITLE = 'Title',
  USERLOGONNAME = 'UserLogonName',
  ZIPCODE = 'ZipCode'
}

/**
 * Exchange domain
 */
export interface EmailexchangeDomain {
  cnameToCheck?: string
  domainAliases: string[]
  domainValidated: boolean
  isAliasDomain: boolean
  main?: boolean
  mxIsValid: boolean
  mxRecord?: string[]
  mxRelay?: string
  name: string
  organization2010?: string
  srvIsValid: boolean
  srvRecord?: string[]
  state: EmailexchangeObjectState
  taskPendingId: number
  type: EmailexchangeDomainType
}

/*
 * Domain type
 */
export enum EmailexchangeDomainType {
  AUTHORITATIVE = 'authoritative',
  NONAUTHORITATIVE = 'nonAuthoritative'
}

/**
 * Aliases on this mailbox
 */
export interface EmailexchangeexchangeAccountAlias {
  alias: string
  creationDate: string
  taskPendingId: number
}

/**
 * Exchange Account Archive
 */
export interface EmailexchangeexchangeAccountArchive {
  creationDate: string
  currentUsage?: number
  guid?: string
  quota: number
  state: EmailexchangeObjectState
  taskPendingId?: number
}

/**
 * Exchange Account Diagnosis
 */
export interface EmailexchangeexchangeAccountDiagnosis {
  canReceiveEmail: boolean
  canSendEmail: boolean
  connectiveOWA: boolean
  isLocked: boolean
  isMxValid: boolean
  isSpammer: boolean
  isSrvValid: boolean
  isSuspended: boolean
  lastCheck: string
}

/**
 * Users having full access on this mailbox
 */
export interface EmailexchangeexchangeAccountFullAccess {
  allowedAccountId: number
  creationDate: string
  taskPendingId: number
}

/**
 * Get protocol status on that mailbox
 */
export interface EmailexchangeexchangeAccountProtocol {
  activeSync: boolean
  creationDate: string
  IMAP: boolean
  lastUpdate?: string
  POP: boolean
  taskPendingId: number
  webMail: boolean
}

/**
 * Users authorized to send mails from this mailbox
 */
export interface EmailexchangeexchangeAccountSendAs {
  allowedAccountId: number
  creationDate: string
  taskPendingId: number
}

/**
 * Get users authorized to Send On Behalf To mails from this mailbox
 */
export interface EmailexchangeexchangeAccountSendOnBehalfTo {
  allowedAccountId: number
  creationDate: string
  taskPendingId: number
}

/*
 * Exchange commercial version
 */
export type EmailexchangeexchangeCommercialVersion = '2010' | '2013' | '2016' | '2019'

/**
 * Mailing list managers
 */
export interface EmailexchangeexchangeDistributionGroupManager {
  creationDate: string
  managerAccountId: number
  managerEmailAddress: string
  taskPendingId: number
}

/**
 * Mailing list members
 */
export interface EmailexchangeexchangeDistributionGroupMember {
  creationDate: string
  memberAccountId?: number
  memberContactId?: number
  memberEmailAddress: string
  taskPendingId: number
}

/**
 * Get users authorized to Send On Behalf To mails from this mailbox
 */
export interface EmailexchangeexchangeDistributionGroupSendAs {
  allowedAccountId: number
  creationDate: string
  taskPendingId: number
}

/**
 * Get users authorized to Send On Behalf To mails from this mailing list
 */
export interface EmailexchangeexchangeDistributionGroupSendOnBehalfTo {
  allowedAccountId: number
  creationDate: string
  taskPendingId: number
}

/**
 * External contact for this exchange service
 */
export interface EmailexchangeexchangeExternalContact {
  creationDate: string
  displayName: string
  externalEmailAddress: string
  firstName?: string
  hiddenFromGAL: boolean
  id: number
  initials?: string
  lastName?: string
  organization2010?: string
  state: EmailexchangeObjectState
  taskPendingId: number
}

/**
 * Get aliases on this mailingList
 */
export interface EmailexchangeexchangeMailingListAlias {
  alias: string
  creationDate: string
  taskPendingId: number
}

/**
 * Exchange organization public folder permission
 */
export interface EmailexchangeexchangePublicFolderPermission {
  accessRights: EmailexchangePublicFolderRightType
  allowedAccountId: number
  creationDate: string
  state: EmailexchangeObjectState
  taskPendingId: number
}

/**
 * Resource accounts delegates
 */
export interface EmailexchangeexchangeResourceAccountDelegate {
  allowedAccountId: number
  creationDate?: string
  delegateEmailAddress: string
  taskPendingId: number
}

/**
 * Exchange service
 */
export interface EmailexchangeExchangeService {
  complexityEnabled: boolean
  displayName?: string
  domain: string
  hostname?: string
  lastUpdateDate?: string
  lockoutDuration: number
  lockoutObservationWindow: number
  lockoutThreshold?: number
  maxPasswordAge?: number
  maxReceiveSize: number
  maxSendSize: number
  minPasswordAge?: number
  minPasswordLength?: number
  offer: EmailexchangeServiceOffer
  passwordHistoryCount?: number
  spamAndVirusConfiguration: EmailexchangespamAndVirusConfiguration
  sslExpirationDate?: string
  state: EmailexchangeServiceState
  taskPendingId: number
  webUrl?: string
}

/**
 * Get email addresses subscribed to ActiveSync quarantine notifications
 */
export interface EmailexchangeexchangeServiceActiveSyncNotification {
  creationDate: string
  notifiedAccountId: number
  primaryEmailAddress: string
  state: EmailexchangeactiveSyncNotificationState
}

/**
 * Get authorized IPs for POP, IMAP and webmail
 */
export interface EmailexchangeexchangeServiceAuthorizedIp {
  creationDate: string
  ip: string
  status: EmailexchangeauthorizedIpStatus
}

/**
 * Get the list of your ActiveSync devices registered on this Exchange service
 */
export interface EmailexchangeexchangeServiceDevice {
  creationDate: string
  deviceId: string
  deviceModel: string
  deviceState: EmailexchangeDeviceActiveSyncState
  guid: string
  identity: string
  IMEI: string
  lastUpdate?: string
  taskPendingId: number
}

/**
 * Protocol access policy for this Exchange service
 */
export interface EmailexchangeexchangeServiceProtocol {
  activeSync: boolean
  activeSyncPolicy: EmailexchangeActiveSyncPolicy
  creationDate: string
  IMAP: boolean
  lastUpdate?: string
  POP: boolean
  taskPendingId: number
  webMail: boolean
}

/**
 * Users having full access on this shared mailbox
 */
export interface EmailexchangeexchangeSharedAccountFullAccess {
  allowedAccountId: number
  creationDate: string
  taskPendingId: number
}

/**
 * Users authorized to send mails from this shared mailbox
 */
export interface EmailexchangeexchangeSharedAccountSendAs {
  allowedAccountId: number
  creationDate: string
  taskPendingId: number
}

/**
 * Get users authorized to Send On Behalf To mails from this shared mailbox
 */
export interface EmailexchangeexchangeSharedAccountSendOnBehalfTo {
  allowedAccountId: number
  creationDate: string
  taskPendingId: number
}

/**
 * Export PST file request
 */
export interface EmailexchangeExport {
  creationDate: string
  percentComplete: number
  taskPendingId: number
}

/**
 * Export PST file url
 */
export interface EmailexchangeExportUrl {
  expiration: string
  url: string
}

/*
 * Outlook language
 */
export enum EmailexchangeLanguage {
  AR = 'ar',
  BG = 'bg',
  CZ = 'cz',
  DA = 'da',
  DE = 'de',
  EL = 'el',
  EN = 'en',
  ES = 'es',
  ET = 'et',
  FI = 'fi',
  FR = 'fr',
  HE = 'he',
  HI = 'hi',
  HR = 'hr',
  HU = 'hu',
  ID = 'id',
  IN = 'in',
  IT = 'it',
  JA = 'ja',
  KO = 'ko',
  KZ = 'kz',
  LT = 'lt',
  LV = 'lv',
  MS = 'ms',
  NB = 'nb',
  NL = 'nl',
  PL = 'pl',
  PT = 'pt',
  PT_BR = 'pt-BR',
  RO = 'ro',
  RS = 'rs',
  RU = 'ru',
  SK = 'sk',
  SL = 'sl',
  SV = 'sv',
  TH = 'th',
  TR = 'tr',
  UK = 'uk',
  VI = 'vi',
  ZH_CN = 'zh-CN'
}

/*
 * Mailing filter options availlable
 */
export enum EmailexchangeMailingFilter {
  VADERETRO = 'vaderetro'
}

/**
 * Mailing list
 */
export interface EmailexchangemailingList {
  creationDate: string
  departRestriction: EmailexchangeMailingListDepartRestriction
  displayName?: string
  hiddenFromGAL: boolean
  joinRestriction: EmailexchangeMailingListJoinRestriction
  lastUpdateDate?: string
  mailingListAddress: string
  maxReceiveSize?: number
  maxSendSize?: number
  senderAuthentification: boolean
  spamDetected: boolean
  spamTicketNumber?: number
  state: EmailexchangeObjectState
  taskPendingId: number
}

/*
 * Depart distribution group restriction status
 */
export enum EmailexchangeMailingListDepartRestriction {
  CLOSED = 'closed',
  OPEN = 'open'
}

/*
 * Join distribution group restriction status
 */
export enum EmailexchangeMailingListJoinRestriction {
  APPROVALREQUIRED = 'approvalRequired',
  CLOSED = 'closed',
  OPEN = 'open'
}

/*
 * Current object state
 */
export enum EmailexchangeObjectState {
  CREATING = 'creating',
  DELETING = 'deleting',
  INTERNALMIGRATION = 'internalMigration',
  OK = 'ok',
  REOPENING = 'reopening',
  SUSPENDED = 'suspended',
  SUSPENDING = 'suspending'
}

/**
 * Outlook url
 */
export interface EmailexchangeOutlookUrl {
  expiration: string
  serial: string
  url: string
}

/*
 * Outlook version
 */
export enum EmailexchangeOutlookVersion {
  MAC_X86_2011 = 'mac_x86_2011',
  MAC_X86_2016 = 'mac_x86_2016',
  WINDOWS_X64_2013 = 'windows_x64_2013',
  WINDOWS_X64_2016 = 'windows_x64_2016',
  WINDOWS_X86_2013 = 'windows_x86_2013',
  WINDOWS_X86_2016 = 'windows_x86_2016'
}

/**
 * Availability of outlook version
 */
export interface EmailexchangeOutlookVersions {
  outlookLanguage: EmailexchangeLanguage
  outlookVersion: EmailexchangeOutlookVersion
  status: boolean
}

/*
 * OVH licence account
 */
export enum EmailexchangeOvhLicence {
  BASIC = 'basic',
  ENTERPRISE = 'enterprise',
  STANDARD = 'standard'
}

/**
 * Exchange organization public folder
 */
export interface EmailexchangepublicFolder {
  anonymousPermission: EmailexchangePublicFolderRightType
  creationDate?: string
  defaultPermission: EmailexchangePublicFolderRightType
  hasSubFolders?: boolean
  itemCount?: number
  lastAccessTime?: string
  lastModificationTime?: string
  lastUserAccessTime?: string
  lastUserModificationTime?: string
  path: string
  quota: number
  state: EmailexchangeObjectState
  taskPendingId: number
  totalItemSize?: number
  type: EmailexchangePublicFolderType
}

/**
 * Get public folder quota usage in total available space
 */
export interface EmailexchangePublicFolderQuota {
  quotaLimit: number
  quotaReserved: number
  quotaUsed: number
}

/*
 * Public folder right type
 */
export enum EmailexchangePublicFolderRightType {
  EDITOR = 'editor',
  NONE = 'none',
  REVIEWER = 'reviewer'
}

/*
 * Public folder type
 */
export enum EmailexchangePublicFolderType {
  CALENDAR = 'calendar',
  CONTACTS = 'contacts',
  PLAIN = 'plain',
  TASKS = 'tasks'
}

/*
 * Renew period
 */
export enum EmailexchangerenewPeriod {
  MONTHLY = 'monthly',
  YEARLY = 'yearly'
}

/**
 * Exchange resource account
 */
export interface EmailexchangeresourceAccount {
  addOrganizerToSubject: boolean
  allowConflict: boolean
  bookingWindow: number
  capacity: number
  creationDate?: string
  deleteComments: boolean
  deleteSubject: boolean
  displayName: string
  location: string
  maximumDuration: number
  resourceEmailAddress: string
  showMeetingDetails: EmailexchangeShowMeetingDetails
  state: EmailexchangeObjectState
  taskPendingId: number
  type: EmailexchangeResourceType
}

/*
 * Resource Type
 */
export enum EmailexchangeResourceType {
  EQUIPMENT = 'equipment',
  ROOM = 'room'
}

/**
 * Exchange server
 */
export interface EmailexchangeServer {
  commercialVersion: EmailexchangeexchangeCommercialVersion
  currentDiskUsage?: number
  diskSize?: number
  individual2010: boolean
  ip: string
  ipV6?: string
  isAaaaValid: boolean
  isAValid: boolean
  isPtrV6Valid: boolean
  isPtrValid: boolean
  owaMfa: boolean
  state: EmailexchangeServerState
  taskPendingId: number
  version?: number
}

/*
 * Server State
 */
export enum EmailexchangeServerState {
  CONFIGURATIONPENDING = 'configurationPending',
  NOTCONFIGURED = 'notConfigured',
  OK = 'ok'
}

/*
 * Service Offer name
 */
export enum EmailexchangeServiceOffer {
  DEDICATED = 'dedicated',
  DEDICATEDCLUSTER = 'dedicatedCluster',
  HOSTED = 'hosted',
  PROVIDER = 'provider'
}

/*
 * Exchange Service State
 */
export enum EmailexchangeServiceState {
  INMAINTENANCE = 'inMaintenance',
  OK = 'ok',
  SUSPENDED = 'suspended'
}

/**
 * Exchange shared mailbox
 */
export interface EmailexchangesharedAccount {
  creationDate?: string
  currentUsage?: number
  displayName?: string
  firstName?: string
  hiddenFromGAL: boolean
  id: number
  initials?: string
  lastLogoffDate?: string
  lastLogonDate?: string
  lastName?: string
  mailingFilter?: EmailexchangeMailingFilterEnum[]
  quota: number
  sharedEmailAddress: string
  spamDetected: boolean
  spamTicketNumber?: number
  state: EmailexchangeObjectState
  taskPendingId: number
}

/**
 * Get shared account quota usage in total available space
 */
export interface EmailexchangeSharedAccountQuota {
  quotaLimit: number
  quotaReserved: number
  quotaUsed: number
}

/*
 * Level of access to calendar of Resource Mailbox
 */
export enum EmailexchangeShowMeetingDetails {
  AVAILABILITYONLY = 'availabilityOnly',
  LIMITEDDETAILS = 'limitedDetails',
  REVIEWER = 'reviewer'
}

/**
 * Spam and Antyvirus configuration
 */
export interface EmailexchangespamAndVirusConfiguration {
  checkDKIM: boolean
  checkSPF: boolean
  deleteSpam: boolean
  deleteVirus: boolean
  putInJunk: boolean
  tagSpam: boolean
  tagVirus: boolean
}

/**
 * Exchange task details
 */
export interface EmailexchangeTask {
  finishDate?: string
  function: EmailexchangeTaskFunction
  id: number
  status: EmailexchangeTaskStatus
  todoDate: string
}

/*
 * function enumeration for exchange task
 */
export enum EmailexchangeTaskFunction {
  ACTIVATESHAREPOINT = 'activateSharepoint',
  ADDACCOUNT = 'addAccount',
  ADDACCOUNTARCHIVE = 'addAccountArchive',
  ADDACTIVESYNCMAILNOTIFICATION = 'addActiveSyncMailNotification',
  ADDALIAS = 'addAlias',
  ADDDISTRIBUTIONGROUP = 'addDistributionGroup',
  ADDDISTRIBUTIONGROUPMANAGER = 'addDistributionGroupManager',
  ADDDISTRIBUTIONGROUPMEMBER = 'addDistributionGroupMember',
  ADDDISTRIBUTIONGROUPSENDAS = 'addDistributionGroupSendAs',
  ADDDISTRIBUTIONGROUPSENDONBEHALFTO = 'addDistributionGroupSendOnBehalfTo',
  ADDDOMAIN = 'addDomain',
  ADDDOMAINDISCLAIMER = 'addDomainDisclaimer',
  ADDEXCHANGESERVICEAUTHORIZEDIP = 'addExchangeServiceAuthorizedIp',
  ADDEXPORTPSTREQUEST = 'addExportPstRequest',
  ADDEXTERNALCONTACT = 'addExternalContact',
  ADDFULLACCESS = 'addFullAccess',
  ADDOUTLOOKLICENSE = 'addOutlookLicense',
  ADDPUBLICFOLDER = 'addPublicFolder',
  ADDPUBLICFOLDERPERMISSION = 'addPublicFolderPermission',
  ADDRESOURCEACCOUNT = 'addResourceAccount',
  ADDRESOURCEDELEGATE = 'addResourceDelegate',
  ADDSENDAS = 'addSendAs',
  ADDSENDONBEHALFTO = 'addSendOnBehalfTo',
  ADDSHAREDACCOUNT = 'addSharedAccount',
  ADDSHAREDACCOUNTFULLACCESS = 'addSharedAccountFullAccess',
  ADDSHAREDACCOUNTSENDAS = 'addSharedAccountSendAs',
  ADDSHAREDACCOUNTSENDONBEHALFTO = 'addSharedAccountSendOnBehalfTo',
  CHANGEHOSTNAME = 'changeHostname',
  CHANGEPASSWORD = 'changePassword',
  CLEARDATAONDEVICE = 'clearDataOnDevice',
  CLONETEMPLATEEXCHANGEPRIVATE = 'cloneTemplateExchangePrivate',
  CONFIGUREEXCHANGECUSTOMER = 'configureExchangeCustomer',
  DELETEACCOUNT = 'deleteAccount',
  DELETEACCOUNTARCHIVE = 'deleteAccountArchive',
  DELETEACTIVESYNCMAILNOTIFICATION = 'deleteActiveSyncMailNotification',
  DELETEALIAS = 'deleteAlias',
  DELETEDISTRIBUTIONGROUP = 'deleteDistributionGroup',
  DELETEDISTRIBUTIONGROUPMANAGER = 'deleteDistributionGroupManager',
  DELETEDISTRIBUTIONGROUPMEMBER = 'deleteDistributionGroupMember',
  DELETEDISTRIBUTIONGROUPSENDAS = 'deleteDistributionGroupSendAs',
  DELETEDISTRIBUTIONGROUPSENDONBEHALFTO = 'deleteDistributionGroupSendOnBehalfTo',
  DELETEDOMAIN = 'deleteDomain',
  DELETEDOMAINDISCLAIMER = 'deleteDomainDisclaimer',
  DELETEEXCHANGESERVICE = 'deleteExchangeService',
  DELETEEXCHANGESERVICEAUTHORIZEDIP = 'deleteExchangeServiceAuthorizedIp',
  DELETEEXPORTPSTREQUEST = 'deleteExportPstRequest',
  DELETEEXTERNALCONTACT = 'deleteExternalContact',
  DELETEFULLACCESS = 'deleteFullAccess',
  DELETEOUTLOOKLICENSE = 'deleteOutlookLicense',
  DELETEPUBLICFOLDER = 'deletePublicFolder',
  DELETEPUBLICFOLDERPERMISSION = 'deletePublicFolderPermission',
  DELETERESOURCEACCOUNT = 'deleteResourceAccount',
  DELETERESOURCEDELEGATE = 'deleteResourceDelegate',
  DELETESENDAS = 'deleteSendAs',
  DELETESENDONBEHALFTO = 'deleteSendOnBehalfTo',
  DELETESHAREDACCOUNT = 'deleteSharedAccount',
  DELETESHAREDACCOUNTFULLACCESS = 'deleteSharedAccountFullAccess',
  DELETESHAREDACCOUNTSENDAS = 'deleteSharedAccountSendAs',
  DELETESHAREDACCOUNTSENDONBEHALFTO = 'deleteSharedAccountSendOnBehalfTo',
  DESTROYPRIVATEVM = 'destroyPrivateVm',
  DIAGNOSEACCOUNT = 'diagnoseAccount',
  EXPANDDRIVE = 'expandDrive',
  GENERATEOUTLOOKURL = 'generateOutlookUrl',
  GENERATEPSTURL = 'generatePstUrl',
  INSTALLEXCHANGE = 'installExchange',
  INSTALLSSL = 'installSSL',
  MAINTENANCE = 'maintenance',
  MIGRATIONACCOUNT = 'migrationAccount',
  MIGRATIONDISCLAIMER = 'migrationDisclaimer',
  MIGRATIONEXTERNALCONTACT = 'migrationExternalContact',
  MIGRATIONHISTORY = 'migrationHistory',
  MIGRATIONMAILINGLIST = 'migrationMailingList',
  MIGRATIONRESOURCEACCOUNT = 'migrationResourceAccount',
  MIGRATIONSERVICE = 'migrationService',
  REOPENHOSTEDACCOUNT = 'reOpenHostedAccount',
  REOPENOUTLOOKLICENSE = 'reOpenOutlookLicense',
  REOPENPRIVATEACCOUNT = 'reOpenPrivateAccount',
  REOPENPRIVATEVM = 'reOpenPrivateVm',
  SETACCOUNT = 'setAccount',
  SETACCOUNTARCHIVE = 'setAccountArchive',
  SETALIAS = 'setAlias',
  SETDISTRIBUTIONGROUP = 'setDistributionGroup',
  SETDNS = 'setDns',
  SETDOMAIN = 'setDomain',
  SETDOMAINDISCLAIMER = 'setDomainDisclaimer',
  SETEXCHANGEACCOUNTPROTOCOL = 'setExchangeAccountProtocol',
  SETEXCHANGESERVICEDEVICE = 'setExchangeServiceDevice',
  SETEXTERNALCONTACT = 'setExternalContact',
  SETPUBLICFOLDER = 'setPublicFolder',
  SETPUBLICFOLDERPERMISSION = 'setPublicFolderPermission',
  SETRESOURCEACCOUNT = 'setResourceAccount',
  SETSERVICE = 'setService',
  SETSHAREDACCOUNT = 'setSharedAccount',
  SUSPENDACCOUNT = 'suspendAccount',
  SUSPENDEXCHANGESERVICE = 'suspendExchangeService',
  SUSPENDHOSTEDACCOUNT = 'suspendHostedAccount',
  SUSPENDOUTLOOKLICENSE = 'suspendOutlookLicense',
  SUSPENDPRIVATEACCOUNT = 'suspendPrivateAccount',
  SUSPENDPRIVATEVM = 'suspendPrivateVm',
  UNSUSPENDACCOUNT = 'unsuspendAccount',
  UNSUSPENDEXCHANGESERVICE = 'unsuspendExchangeService',
  UNSUSPENDHOSTEDACCOUNT = 'unsuspendHostedAccount',
  UPDATEEXCHANGESERVICEDEVICE = 'updateExchangeServiceDevice',
  UPGRADE2016 = 'upgrade2016'
}

/*
 * Exchange task status
 */
export enum EmailexchangeTaskStatus {
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


export class EmailExchange {
  constructor(private client: Client) {}

  /**
   * Operations about the MSSERVICES service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/email/exchange`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Operations about the EXCHANGE service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service#GET)
   */
  /*
  ListAvailableServices(organizationName: string): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service`

    return this.client.request<string[]>('GET', url)
  }
  */

  /**
   * Exchange service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D#GET)
   */
  GetThisObjectProperties(exchangeService: string, organizationName: string): Promise<EmailexchangeExchangeService> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}`

    return this.client.request<EmailexchangeExchangeService>('GET', url)
  }

  /**
   * Exchange service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D#PUT)
   */
  AlterThisObjectProperties(exchangeService: string, organizationName: string, payload: EmailexchangeExchangeService): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the email.exchange.Account objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account#GET)
   */
  AccountsAssociatedToThisExchangeService(exchangeService: string, organizationName: string, accountLicense?: EmailexchangeOvhLicence, id?: number, primaryEmailAddress?: string): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account?`

    const queryParams = new QueryParams()
    if (accountLicense) { queryParams.set('accountLicense', accountLicense.toString()) }
    if (id) { queryParams.set('id', id.toString()) }
    if (primaryEmailAddress) { queryParams.set('primaryEmailAddress', primaryEmailAddress) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.exchange.Account objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account#POST)
   */
  CreateNewMailboxInExchangeServer(domain: string, exchangeService: string, license: EmailexchangeOvhLicence, login: string, organizationName: string, password: string, company?: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, litigation?: boolean, litigationPeriod?: number, mailingFilter?: EmailexchangeMailingFilterEnum[], outlookLicense?: boolean, SAMAccountName?: string, spamAndVirusConfiguration?: EmailexchangespamAndVirusConfiguration): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account`

    return this.client.request<EmailexchangeTask>('POST', url, {domain, license, login, password, company, displayName, firstName, hiddenFromGAL, initials, lastName, litigation, litigationPeriod, mailingFilter, outlookLicense, SAMAccountName, spamAndVirusConfiguration})
  }

  /**
   * Exchange mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeAccount> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}`

    return this.client.request<EmailexchangeAccount>('GET', url)
  }
  */

  /**
   * Exchange mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string, payload: EmailexchangeAccount): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Exchange mailbox [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D#DELETE)
   */
  DeleteExistingMailboxInExchangeServer(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * List the email.exchange.exchangeAccountAlias objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/alias#GET)
   */
  AliasesAssociatedToThisMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeAccountAlias objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/alias#POST)
   */
  CreateNewAlias(alias: string, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias`

    return this.client.request<EmailexchangeTask>('POST', url, {alias})
  }

  /**
   * Aliases on this mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/alias/%7Balias%7D#GET)
   */
  /*
  GetThisObjectProperties(alias: string, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountAlias> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias/${alias}`

    return this.client.request<EmailexchangeexchangeAccountAlias>('GET', url)
  }
  */

  /**
   * Aliases on this mailbox [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/alias/%7Balias%7D#DELETE)
   */
  DeleteExistingAlias(alias: string, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias/${alias}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * Exchange Account Archive [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/archive#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountArchive> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`

    return this.client.request<EmailexchangeexchangeAccountArchive>('GET', url)
  }
  */

  /**
   * Exchange Account Archive [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/archive#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string, payload: EmailexchangeexchangeAccountArchive): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Exchange Account Archive [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/archive#POST)
   */
  CreateNewArchiveMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string, quota?: number): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`

    return this.client.request<EmailexchangeTask>('POST', url, {quota})
  }

  /**
   * Exchange Account Archive [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/archive#DELETE)
   */
  DeleteExistingArchiveMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/changePassword#POST)
   */
  ChangeMailboxPassword(exchangeService: string, organizationName: string, password: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/changePassword`

    return this.client.request<EmailexchangeTask>('POST', url, {password})
  }

  /**
   * Exchange Account Diagnosis [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/diagnostics#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountDiagnosis> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/diagnostics`

    return this.client.request<EmailexchangeexchangeAccountDiagnosis>('GET', url)
  }
  */

  /**
   * Exchange Account Diagnosis [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/diagnostics#POST)
   */
  CreateNewDiagnosisRequest(exchangeService: string, organizationName: string, password: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/diagnostics`

    return this.client.request<EmailexchangeTask>('POST', url, {password})
  }

  /**
   * Export PST file request [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/export#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeExport> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/export`

    return this.client.request<EmailexchangeExport>('GET', url)
  }
  */

  /**
   * Export PST file request [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/export#POST)
   */
  RequestPSTFileForTheAccount(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/export`

    return this.client.request<EmailexchangeTask>('POST', url)
  }

  /**
   * Export PST file request [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/export#DELETE)
   */
  RemoveRequestOfPSTFile(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/export`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * Export PST file url [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/exportURL#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeExportUrl> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/exportURL`

    return this.client.request<EmailexchangeExportUrl>('GET', url)
  }
  */

  /**
   * Export PST file url [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/exportURL#POST)
   */
  GenerateTemporaryUrlToPSTFile(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/exportURL`

    return this.client.request<EmailexchangeTask>('POST', url)
  }

  /**
   * List the email.exchange.exchangeAccountFullAccess objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/fullAccess#GET)
   */
  FullAccessGrantedUsersForThisMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeAccountFullAccess objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/fullAccess#POST)
   */
  AllowFullAccessToAUser(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess`

    return this.client.request<EmailexchangeTask>('POST', url, {allowedAccountId})
  }

  /**
   * Users having full access on this mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/fullAccess/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountFullAccess> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess/${allowedAccountId}`

    return this.client.request<EmailexchangeexchangeAccountFullAccess>('GET', url)
  }
  */

  /**
   * Users having full access on this mailbox [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/fullAccess/%7BallowedAccountId%7D#DELETE)
   */
  RevokeFullAccess(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess/${allowedAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * Outlook url [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/outlookURL#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeOutlookUrl> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/outlookURL`

    return this.client.request<EmailexchangeOutlookUrl>('GET', url)
  }
  */

  /**
   * Outlook url [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/outlookURL#POST)
   */
  GenerateOutlookUrl(exchangeService: string, language: EmailexchangeLanguage, organizationName: string, primaryEmailAddress: string, version: EmailexchangeOutlookVersion): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/outlookURL`

    return this.client.request<EmailexchangeTask>('POST', url, {language, version})
  }

  /**
   * Get protocol status on that mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/protocol#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountProtocol> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/protocol`

    return this.client.request<EmailexchangeexchangeAccountProtocol>('GET', url)
  }
  */

  /**
   * Get protocol status on that mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/protocol#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string, payload: EmailexchangeexchangeAccountProtocol): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/protocol`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the email.exchange.exchangeAccountSendAs objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendAs#GET)
   */
  SendAsGrantedUsersForThisMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeAccountSendAs objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendAs#POST)
   */
  AllowAnotherUserToSendMailsFromThisMailbox(allowAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs`

    return this.client.request<EmailexchangeTask>('POST', url, {allowAccountId})
  }

  /**
   * Users authorized to send mails from this mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendAs/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountSendAs> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs/${allowedAccountId}`

    return this.client.request<EmailexchangeexchangeAccountSendAs>('GET', url)
  }
  */

  /**
   * Users authorized to send mails from this mailbox [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendAs/%7BallowedAccountId%7D#DELETE)
   */
  DeleteAllowedUserForSendAs(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs/${allowedAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * List the email.exchange.exchangeAccountSendOnBehalfTo objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendOnBehalfTo#GET)
   */
  SendOnBehalfToGrantedUsersForThisMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeAccountSendOnBehalfTo objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendOnBehalfTo#POST)
   */
  AllowAnotherUserToSendOnBehalfToMailsFromThisMailbox(allowAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo`

    return this.client.request<EmailexchangeTask>('POST', url, {allowAccountId})
  }

  /**
   * Get users authorized to Send On Behalf To mails from this mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountSendOnBehalfTo> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo/${allowedAccountId}`

    return this.client.request<EmailexchangeexchangeAccountSendOnBehalfTo>('GET', url)
  }
  */

  /**
   * Get users authorized to Send On Behalf To mails from this mailbox [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#DELETE)
   */
  DeleteAllowedUserForSendOnBehalfTo(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo/${allowedAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * List the email.exchange.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/tasks#GET)
   */
  PendingTaskForThisMailbox(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/tasks`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Exchange task details [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/tasks/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, id: number, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/tasks/${id}`

    return this.client.request<EmailexchangeTask>('GET', url)
  }
  */

  /**
   * terminate operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/terminate#POST)
   */
  TerminateAccountAtExpirationDate(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<string> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/terminate`

    return this.client.request<string>('POST', url)
  }

  /**
   * activateSharepoint operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/activateSharepoint#POST)
   */
  ActivateSharepointInfraConnectedToThisExchangeService(exchangeService: string, organizationName: string, primaryEmailAddress: string, subDomain: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/activateSharepoint`

    return this.client.request<EmailexchangeTask>('POST', url, {primaryEmailAddress, subDomain})
  }

  /**
   * changeHostname operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/changeHostname#POST)
   */
  SettingSSLHostnameForExchangePrivateOffer(dcvEmail: string, exchangeService: string, hostname: string, organizationName: string, useDnsAssist: boolean): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/changeHostname`

    return this.client.request<EmailexchangeTask>('POST', url, {dcvEmail, hostname, useDnsAssist})
  }

  /**
   * dcvEmails operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/dcvEmails#GET)
   */
  GetDCVEmailsIfYourSslWillExpireInNext30Days(exchangeService: string, organizationName: string): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/dcvEmails`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeServiceDevice objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/device#GET)
   */
  ListOfYourActiveSyncDevicesRegisteredOnThisExchangeService(exchangeService: string, organizationName: string, deviceState?: EmailexchangeDeviceActiveSyncState, identity?: string, IMEI?: string): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/device?`

    const queryParams = new QueryParams()
    if (deviceState) { queryParams.set('deviceState', deviceState.toString()) }
    if (identity) { queryParams.set('identity', identity) }
    if (IMEI) { queryParams.set('IMEI', IMEI) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * Get the list of your ActiveSync devices registered on this Exchange service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/device/%7Bidentity%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, identity: string, organizationName: string): Promise<EmailexchangeexchangeServiceDevice> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/device/${identity}`

    return this.client.request<EmailexchangeexchangeServiceDevice>('GET', url)
  }
  */

  /**
   * Get the list of your ActiveSync devices registered on this Exchange service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/device/%7Bidentity%7D#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, identity: string, organizationName: string, payload: EmailexchangeexchangeServiceDevice): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/device/${identity}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * clearDevice operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/device/%7Bidentity%7D/clearDevice#POST)
   */
  ExecutesAFactoryResetOnTheDeviceTHISOPERATIONCANNOTBEREVERSEDALLDATAONTHEDEVICEWILLBELOST(exchangeService: string, identity: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/device/${identity}/clearDevice`

    return this.client.request<EmailexchangeTask>('POST', url)
  }

  /**
   * List the email.exchange.Domain objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain#GET)
   */
  DomainsAssociatedToThisService(exchangeService: string, organizationName: string, main?: boolean, state?: EmailexchangeObjectState): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain?`

    const queryParams = new QueryParams()
    if (main) { queryParams.set('main', main.toString()) }
    if (state) { queryParams.set('state', state.toString()) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.exchange.Domain objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain#POST)
   */
  CreateNewDomainInExchangeServices(exchangeService: string, name: string, organizationName: string, type: EmailexchangeDomainType, configureAutodiscover?: boolean, configureMx?: boolean, main?: boolean, mxRelay?: string, organization2010?: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain`

    return this.client.request<EmailexchangeTask>('POST', url, {name, type, configureAutodiscover, configureMx, main, mxRelay, organization2010})
  }

  /**
   * Exchange domain [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D#GET)
   */
  /*
  GetThisObjectProperties(domainName: string, exchangeService: string, organizationName: string): Promise<EmailexchangeDomain> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}`

    return this.client.request<EmailexchangeDomain>('GET', url)
  }
  */

  /**
   * Exchange domain [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D#PUT)
   */
  /*
  AlterThisObjectProperties(domainName: string, exchangeService: string, organizationName: string, payload: EmailexchangeDomain): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Exchange domain [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D#DELETE)
   */
  DeleteExistingDomainInExchangeServices(domainName: string, exchangeService: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * Exchange organization disclaimer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D/disclaimer#GET)
   */
  /*
  GetThisObjectProperties(domainName: string, exchangeService: string, organizationName: string): Promise<Emailexchangedisclaimer> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`

    return this.client.request<Emailexchangedisclaimer>('GET', url)
  }
  */

  /**
   * Exchange organization disclaimer [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D/disclaimer#PUT)
   */
  /*
  AlterThisObjectProperties(domainName: string, exchangeService: string, organizationName: string, payload: Emailexchangedisclaimer): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Exchange organization disclaimer [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D/disclaimer#POST)
   */
  CreateOrganizationDisclaimerOfEachEmail(content: string, domainName: string, exchangeService: string, organizationName: string, outsideOnly?: boolean): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`

    return this.client.request<EmailexchangeTask>('POST', url, {content, outsideOnly})
  }

  /**
   * Exchange organization disclaimer [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D/disclaimer#DELETE)
   */
  DeleteExistingOrganizationDisclaimer(domainName: string, exchangeService: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * disclaimerAttribute operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D/disclaimerAttribute#GET)
   */
  GetDiclaimerAttributesToSubstituteWithActiveDirectoryProperties(domainName: string, exchangeService: string, organizationName: string): Promise<EmailexchangeDisclaimerAttributeEnum[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimerAttribute`

    return this.client.request<EmailexchangeDisclaimerAttributeEnum[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeExternalContact objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/externalContact#GET)
   */
  ExternalContactsForThisService(exchangeService: string, organizationName: string, displayName?: string, externalEmailAddress?: string, firstName?: string, id?: number, lastName?: string): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/externalContact?`

    const queryParams = new QueryParams()
    if (displayName) { queryParams.set('displayName', displayName) }
    if (externalEmailAddress) { queryParams.set('externalEmailAddress', externalEmailAddress) }
    if (firstName) { queryParams.set('firstName', firstName) }
    if (id) { queryParams.set('id', id.toString()) }
    if (lastName) { queryParams.set('lastName', lastName) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.exchange.exchangeExternalContact objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/externalContact#POST)
   */
  CreateNewExternalContact(exchangeService: string, externalEmailAddress: string, organizationName: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, organization2010?: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/externalContact`

    return this.client.request<EmailexchangeTask>('POST', url, {externalEmailAddress, displayName, firstName, hiddenFromGAL, initials, lastName, organization2010})
  }

  /**
   * External contact for this exchange service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/externalContact/%7BexternalEmailAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, externalEmailAddress: string, organizationName: string): Promise<EmailexchangeexchangeExternalContact> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/externalContact/${externalEmailAddress}`

    return this.client.request<EmailexchangeexchangeExternalContact>('GET', url)
  }
  */

  /**
   * External contact for this exchange service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/externalContact/%7BexternalEmailAddress%7D#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, externalEmailAddress: string, organizationName: string, payload: EmailexchangeexchangeExternalContact): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/externalContact/${externalEmailAddress}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * External contact for this exchange service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/externalContact/%7BexternalEmailAddress%7D#DELETE)
   */
  DeleteExternalContact(exchangeService: string, externalEmailAddress: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/externalContact/${externalEmailAddress}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * license operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/license#GET)
   */
  GetActiveLicensesForSpecificPeriodOfTime(exchangeService: string, organizationName: string, fromDate?: string, license?: EmailexchangeOvhLicence, toDate?: string): Promise<EmailexchangeDailyLicense[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/license?`

    const queryParams = new QueryParams()
    if (fromDate) { queryParams.set('fromDate', fromDate.toString()) }
    if (license) { queryParams.set('license', license.toString()) }
    if (toDate) { queryParams.set('toDate', toDate.toString()) }

    return this.client.request<EmailexchangeDailyLicense[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.exchange.mailingList objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList#GET)
   */
  MailingListForThisService(exchangeService: string, organizationName: string, mailingListAddress?: string): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList?`

    const queryParams = new QueryParams()
    if (mailingListAddress) { queryParams.set('mailingListAddress', mailingListAddress) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.exchange.mailingList objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList#POST)
   */
  AddMailingList(departRestriction: EmailexchangeMailingListDepartRestriction, exchangeService: string, joinRestriction: EmailexchangeMailingListJoinRestriction, mailingListAddress: string, organizationName: string, displayName?: string, hiddenFromGAL?: boolean, maxReceiveSize?: number, maxSendSize?: number, senderAuthentification?: boolean): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList`

    return this.client.request<EmailexchangeTask>('POST', url, {departRestriction, joinRestriction, mailingListAddress, displayName, hiddenFromGAL, maxReceiveSize, maxSendSize, senderAuthentification})
  }

  /**
   * Mailing list [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangemailingList> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}`

    return this.client.request<EmailexchangemailingList>('GET', url)
  }
  */

  /**
   * Mailing list [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, mailingListAddress: string, organizationName: string, payload: EmailexchangemailingList): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Mailing list [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D#DELETE)
   */
  DeleteMailingList(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * List the email.exchange.exchangeMailingListAlias objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/alias#GET)
   */
  AliasesAssociatedToThisMailingList(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeMailingListAlias objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/alias#POST)
   */
  /*
  CreateNewAlias(alias: string, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias`

    return this.client.request<EmailexchangeTask>('POST', url, {alias})
  }
  */

  /**
   * Get aliases on this mailingList [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/alias/%7Balias%7D#GET)
   */
  /*
  GetThisObjectProperties(alias: string, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeexchangeMailingListAlias> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias/${alias}`

    return this.client.request<EmailexchangeexchangeMailingListAlias>('GET', url)
  }
  */

  /**
   * Get aliases on this mailingList [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/alias/%7Balias%7D#DELETE)
   */
  /*
  DeleteExistingAlias(alias: string, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias/${alias}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }
  */

  /**
   * List the email.exchange.exchangeDistributionGroupManager objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/manager/account#GET)
   */
  MailingListAccountManager(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeDistributionGroupManager objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/manager/account#POST)
   */
  AddNewMailingListManager(exchangeService: string, mailingListAddress: string, managerAccountId: number, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account`

    return this.client.request<EmailexchangeTask>('POST', url, {managerAccountId})
  }

  /**
   * Mailing list managers [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/manager/account/%7BmanagerAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, mailingListAddress: string, managerAccountId: number, organizationName: string): Promise<EmailexchangeexchangeDistributionGroupManager> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account/${managerAccountId}`

    return this.client.request<EmailexchangeexchangeDistributionGroupManager>('GET', url)
  }
  */

  /**
   * Mailing list managers [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/manager/account/%7BmanagerAccountId%7D#DELETE)
   */
  DeleteMailingListManager(exchangeService: string, mailingListAddress: string, managerAccountId: number, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account/${managerAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * List the email.exchange.exchangeDistributionGroupMember objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/account#GET)
   */
  MailingListAccountMember(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeDistributionGroupMember objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/account#POST)
   */
  AddNewMailingListMember(exchangeService: string, mailingListAddress: string, organizationName: string, memberAccountId?: number, memberContactId?: number): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account`

    return this.client.request<EmailexchangeTask>('POST', url, {memberAccountId, memberContactId})
  }

  /**
   * Mailing list members [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/account/%7BmemberAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, mailingListAddress: string, memberAccountId: number, organizationName: string): Promise<EmailexchangeexchangeDistributionGroupMember> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account/${memberAccountId}`

    return this.client.request<EmailexchangeexchangeDistributionGroupMember>('GET', url)
  }
  */

  /**
   * Mailing list members [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/account/%7BmemberAccountId%7D#DELETE)
   */
  DeleteMailingListMember(exchangeService: string, mailingListAddress: string, memberAccountId: number, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account/${memberAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * List the email.exchange.exchangeDistributionGroupMember objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/contact#GET)
   */
  MailingListContactMember(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeDistributionGroupMember objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/contact#POST)
   */
  /*
  AddNewMailingListMember(exchangeService: string, mailingListAddress: string, organizationName: string, memberAccountId?: number, memberContactId?: number): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact`

    return this.client.request<EmailexchangeTask>('POST', url, {memberAccountId, memberContactId})
  }
  */

  /**
   * Mailing list members [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/contact/%7BmemberContactId%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, mailingListAddress: string, memberContactId: number, organizationName: string): Promise<EmailexchangeexchangeDistributionGroupMember> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact/${memberContactId}`

    return this.client.request<EmailexchangeexchangeDistributionGroupMember>('GET', url)
  }
  */

  /**
   * Mailing list members [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/contact/%7BmemberContactId%7D#DELETE)
   */
  /*
  DeleteMailingListMember(exchangeService: string, mailingListAddress: string, memberContactId: number, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact/${memberContactId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }
  */

  /**
   * List the email.exchange.exchangeDistributionGroupSendAs objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendAs#GET)
   */
  SendAs(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeDistributionGroupSendAs objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendAs#POST)
   */
  AllowAnotherUserToSendAsoMailsFromThisMailingList(allowAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs`

    return this.client.request<EmailexchangeTask>('POST', url, {allowAccountId})
  }

  /**
   * Get users authorized to Send On Behalf To mails from this mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendAs/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeexchangeDistributionGroupSendAs> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs/${allowedAccountId}`

    return this.client.request<EmailexchangeexchangeDistributionGroupSendAs>('GET', url)
  }
  */

  /**
   * Get users authorized to Send On Behalf To mails from this mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendAs/%7BallowedAccountId%7D#DELETE)
   */
  /*
  DeleteAllowedUserForSendAs(allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs/${allowedAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }
  */

  /**
   * List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendOnBehalfTo#GET)
   */
  SendOnBehalfTo(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendOnBehalfTo#POST)
   */
  /*
  AllowAnotherUserToSendAsoMailsFromThisMailingList(allowAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo`

    return this.client.request<EmailexchangeTask>('POST', url, {allowAccountId})
  }
  */

  /**
   * Get users authorized to Send On Behalf To mails from this mailing list [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeexchangeDistributionGroupSendOnBehalfTo> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo/${allowedAccountId}`

    return this.client.request<EmailexchangeexchangeDistributionGroupSendOnBehalfTo>('GET', url)
  }
  */

  /**
   * Get users authorized to Send On Behalf To mails from this mailing list [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#DELETE)
   */
  /*
  DeleteAllowedUserForSendOnBehalfTo(allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo/${allowedAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }
  */

  /**
   * outlookAvailability operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/outlookAvailability#GET)
   */
  ShowAvailableOutlooks(exchangeService: string, organizationName: string, outlookLanguage?: EmailexchangeLanguage, outlookVersion?: EmailexchangeOutlookVersion): Promise<EmailexchangeOutlookVersions[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/outlookAvailability?`

    const queryParams = new QueryParams()
    if (outlookLanguage) { queryParams.set('outlookLanguage', outlookLanguage.toString()) }
    if (outlookVersion) { queryParams.set('outlookVersion', outlookVersion.toString()) }

    return this.client.request<EmailexchangeOutlookVersions[]>('GET', url+queryParams.toString())
  }

  /**
   * Protocol access policy for this Exchange service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string): Promise<EmailexchangeexchangeServiceProtocol> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol`

    return this.client.request<EmailexchangeexchangeServiceProtocol>('GET', url)
  }
  */

  /**
   * Protocol access policy for this Exchange service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, organizationName: string, payload: EmailexchangeexchangeServiceProtocol): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the email.exchange.exchangeServiceActiveSyncNotification objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol/activeSyncMailNotification#GET)
   */
  ExchangeAccountIdSubscribedToActiveSyncQuarantineNotifications(exchangeService: string, organizationName: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeServiceActiveSyncNotification objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol/activeSyncMailNotification#POST)
   */
  SubscribeNewAddressToActiveSyncQuarantineNotifications(exchangeService: string, notifiedAccountId: number, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification`

    return this.client.request<EmailexchangeTask>('POST', url, {notifiedAccountId})
  }

  /**
   * Get email addresses subscribed to ActiveSync quarantine notifications [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol/activeSyncMailNotification/%7BnotifiedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, notifiedAccountId: number, organizationName: string): Promise<EmailexchangeexchangeServiceActiveSyncNotification> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification/${notifiedAccountId}`

    return this.client.request<EmailexchangeexchangeServiceActiveSyncNotification>('GET', url)
  }
  */

  /**
   * Get email addresses subscribed to ActiveSync quarantine notifications [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol/activeSyncMailNotification/%7BnotifiedAccountId%7D#DELETE)
   */
  UnubscribeAddressFromActiveSyncQuarantineNotifications(exchangeService: string, notifiedAccountId: number, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification/${notifiedAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * List the email.exchange.publicFolder objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder#GET)
   */
  PublicFoldersAssociatedToThisService(exchangeService: string, organizationName: string, path?: string): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder?`

    const queryParams = new QueryParams()
    if (path) { queryParams.set('path', path) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.exchange.publicFolder objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder#POST)
   */
  CreateOrganizationPublicFolder(exchangeService: string, organizationName: string, path: string, quota: number, type: EmailexchangePublicFolderType, anonymousPermission?: EmailexchangePublicFolderRightType, defaultPermission?: EmailexchangePublicFolderRightType): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder`

    return this.client.request<EmailexchangeTask>('POST', url, {path, quota, type, anonymousPermission, defaultPermission})
  }

  /**
   * Exchange organization public folder [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string, path: string): Promise<EmailexchangepublicFolder> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}`

    return this.client.request<EmailexchangepublicFolder>('GET', url)
  }
  */

  /**
   * Exchange organization public folder [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, organizationName: string, path: string, payload: EmailexchangepublicFolder): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Exchange organization public folder [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D#DELETE)
   */
  DeleteExistingOrganizationPublicFolder(exchangeService: string, organizationName: string, path: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * List the email.exchange.exchangePublicFolderPermission objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D/permission#GET)
   */
  PublicFolderPermission(exchangeService: string, organizationName: string, path: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangePublicFolderPermission objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D/permission#POST)
   */
  CreatePublicFolderPermission(accessRights: EmailexchangePublicFolderRightType, allowedAccountId: number, exchangeService: string, organizationName: string, path: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission`

    return this.client.request<EmailexchangeTask>('POST', url, {accessRights, allowedAccountId})
  }

  /**
   * Exchange organization public folder permission [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D/permission/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, path: string): Promise<EmailexchangeexchangePublicFolderPermission> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission/${allowedAccountId}`

    return this.client.request<EmailexchangeexchangePublicFolderPermission>('GET', url)
  }
  */

  /**
   * Exchange organization public folder permission [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D/permission/%7BallowedAccountId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, path: string, payload: EmailexchangeexchangePublicFolderPermission): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission/${allowedAccountId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Exchange organization public folder permission [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D/permission/%7BallowedAccountId%7D#DELETE)
   */
  DeleteExistingPermissionFromPublicFolder(allowedAccountId: number, exchangeService: string, organizationName: string, path: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission/${allowedAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * publicFolderQuota operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolderQuota#GET)
   */
  GetPublicFolderQuotaUsageInTotalAvailableSpace(exchangeService: string, organizationName: string): Promise<EmailexchangePublicFolderQuota> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolderQuota`

    return this.client.request<EmailexchangePublicFolderQuota>('GET', url)
  }

  /**
   * renewSSL operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/renewSSL#POST)
   */
  RenewSSLIfItWillExpireInNext30Days(dcv: string, exchangeService: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/renewSSL`

    return this.client.request<EmailexchangeTask>('POST', url, {dcv})
  }

  /**
   * List the email.exchange.resourceAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount#GET)
   */
  ResourceAccountAssociatedToThisService(exchangeService: string, organizationName: string, resourceEmailAddress?: string): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount?`

    const queryParams = new QueryParams()
    if (resourceEmailAddress) { queryParams.set('resourceEmailAddress', resourceEmailAddress) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.exchange.resourceAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount#POST)
   */
  CreateNewResourceAccountInExchangeServer(capacity: number, exchangeService: string, organizationName: string, resourceEmailAddress: string, type: EmailexchangeResourceType, addOrganizerToSubject?: boolean, allowConflict?: boolean, bookingWindow?: number, deleteComments?: boolean, deleteSubject?: boolean, displayName?: string, location?: string, maximumDuration?: number, showMeetingDetails?: EmailexchangeShowMeetingDetails): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount`

    return this.client.request<EmailexchangeTask>('POST', url, {capacity, resourceEmailAddress, type, addOrganizerToSubject, allowConflict, bookingWindow, deleteComments, deleteSubject, displayName, location, maximumDuration, showMeetingDetails})
  }

  /**
   * Exchange resource account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<EmailexchangeresourceAccount> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}`

    return this.client.request<EmailexchangeresourceAccount>('GET', url)
  }
  */

  /**
   * Exchange resource account [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, organizationName: string, resourceEmailAddress: string, payload: EmailexchangeresourceAccount): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Exchange resource account [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D#DELETE)
   */
  DeleteExistingResourceAccountInExchangeServer(exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * List the email.exchange.exchangeResourceAccountDelegate objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D/delegate#GET)
   */
  ResourceAccountManager(exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeResourceAccountDelegate objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D/delegate#POST)
   */
  AddNewResourceAccountDelegateInExchangeServer(allowedAccountId: number, exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate`

    return this.client.request<EmailexchangeTask>('POST', url, {allowedAccountId})
  }

  /**
   * Resource accounts delegates [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D/delegate/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<EmailexchangeexchangeResourceAccountDelegate> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate/${allowedAccountId}`

    return this.client.request<EmailexchangeexchangeResourceAccountDelegate>('GET', url)
  }
  */

  /**
   * Resource accounts delegates [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D/delegate/%7BallowedAccountId%7D#DELETE)
   */
  DeleteExistingResourceAccountDelegateInExchangeServer(allowedAccountId: number, exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate/${allowedAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * Exchange server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/server#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string): Promise<EmailexchangeServer> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/server`

    return this.client.request<EmailexchangeServer>('GET', url)
  }
  */

  /**
   * Exchange server [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/server#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, organizationName: string, payload: EmailexchangeServer): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/server`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string): Promise<ServicesService> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, organizationName: string, payload: ServicesService): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the email.exchange.sharedAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount#GET)
   */
  SharedAccountsAssociatedToThisExchangeService(exchangeService: string, organizationName: string, sharedEmailAddress?: string): Promise<string[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount?`

    const queryParams = new QueryParams()
    if (sharedEmailAddress) { queryParams.set('sharedEmailAddress', sharedEmailAddress) }

    return this.client.request<string[]>('GET', url+queryParams.toString())
  }

  /**
   * List the email.exchange.sharedAccount objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount#POST)
   */
  CreateNewSharedMailboxInExchangeServer(exchangeService: string, organizationName: string, quota: number, sharedEmailAddress: string, displayName?: string, firstName?: string, hiddenFromGAL?: boolean, initials?: string, lastName?: string, mailingFilter?: EmailexchangeMailingFilterEnum[]): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount`

    return this.client.request<EmailexchangeTask>('POST', url, {quota, sharedEmailAddress, displayName, firstName, hiddenFromGAL, initials, lastName, mailingFilter})
  }

  /**
   * Exchange shared mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangesharedAccount> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}`

    return this.client.request<EmailexchangesharedAccount>('GET', url)
  }
  */

  /**
   * Exchange shared mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D#PUT)
   */
  /*
  AlterThisObjectProperties(exchangeService: string, organizationName: string, sharedEmailAddress: string, payload: EmailexchangesharedAccount): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * Exchange shared mailbox [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D#DELETE)
   */
  DeleteExistingSharedMailboxInExchangeServer(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }

  /**
   * List the email.exchange.exchangeSharedAccountFullAccess objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/fullAccess#GET)
   */
  FullAccessGrantedUsersForThisSharedMailbox(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeSharedAccountFullAccess objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/fullAccess#POST)
   */
  /*
  AllowFullAccessToAUser(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess`

    return this.client.request<EmailexchangeTask>('POST', url, {allowedAccountId})
  }
  */

  /**
   * Users having full access on this shared mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/fullAccess/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeexchangeSharedAccountFullAccess> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess/${allowedAccountId}`

    return this.client.request<EmailexchangeexchangeSharedAccountFullAccess>('GET', url)
  }
  */

  /**
   * Users having full access on this shared mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/fullAccess/%7BallowedAccountId%7D#DELETE)
   */
  /*
  RevokeFullAccess(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess/${allowedAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }
  */

  /**
   * List the email.exchange.exchangeSharedAccountSendAs objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendAs#GET)
   */
  SendAsGrantedUsersForThisSharedMailbox(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeSharedAccountSendAs objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendAs#POST)
   */
  AllowAnotherUserToSendMailsFromThisSharedMailbox(allowAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs`

    return this.client.request<EmailexchangeTask>('POST', url, {allowAccountId})
  }

  /**
   * Users authorized to send mails from this shared mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendAs/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeexchangeSharedAccountSendAs> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs/${allowedAccountId}`

    return this.client.request<EmailexchangeexchangeSharedAccountSendAs>('GET', url)
  }
  */

  /**
   * Users authorized to send mails from this shared mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendAs/%7BallowedAccountId%7D#DELETE)
   */
  /*
  DeleteAllowedUserForSendAs(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs/${allowedAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }
  */

  /**
   * List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendOnBehalfTo#GET)
   */
  SendOnBehalfToGrantedUsersForThisSharedMailbox(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendOnBehalfTo#POST)
   */
  AllowAnotherUserToSendOnBehalfToMailsFromThisSharedMailbox(allowAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo`

    return this.client.request<EmailexchangeTask>('POST', url, {allowAccountId})
  }

  /**
   * Get users authorized to Send On Behalf To mails from this shared mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#GET)
   */
  /*
  GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeexchangeSharedAccountSendOnBehalfTo> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo/${allowedAccountId}`

    return this.client.request<EmailexchangeexchangeSharedAccountSendOnBehalfTo>('GET', url)
  }
  */

  /**
   * Get users authorized to Send On Behalf To mails from this shared mailbox [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#DELETE)
   */
  /*
  DeleteAllowedUserForSendOnBehalfTo(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo/${allowedAccountId}`

    return this.client.request<EmailexchangeTask>('DELETE', url)
  }
  */

  /**
   * List the email.exchange.Task objects [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/tasks#GET)
   */
  /*
  PendingTaskForThisMailbox(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/tasks`

    return this.client.request<number[]>('GET', url)
  }
  */

  /**
   * Exchange task details [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/tasks/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, id: number, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/tasks/${id}`

    return this.client.request<EmailexchangeTask>('GET', url)
  }
  */

  /**
   * sharedAccountQuota operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccountQuota#GET)
   */
  GetSharedAccountQuotaUsageInTotalAvailableSpace(exchangeService: string, organizationName: string): Promise<EmailexchangeSharedAccountQuota> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccountQuota`

    return this.client.request<EmailexchangeSharedAccountQuota>('GET', url)
  }

  /**
   * List the email.exchange.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/task#GET)
   */
  PendingActions(exchangeService: string, organizationName: string): Promise<number[]> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/task`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Exchange task details [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/task/%7Bid%7D#GET)
   */
  /*
  GetThisObjectProperties(exchangeService: string, id: number, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/task/${id}`

    return this.client.request<EmailexchangeTask>('GET', url)
  }
  */

  /**
   * updateDeviceList operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/updateDeviceList#POST)
   */
  UpdateDeviceList(exchangeService: string, organizationName: string): Promise<EmailexchangeTask> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/updateDeviceList`

    return this.client.request<EmailexchangeTask>('POST', url)
  }

  /**
   * updateFlagsOnAllAccounts operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/updateFlagsOnAllAccounts#POST)
   */
  UpdateSpamAndVirusFlagsOnAllActiveAccounts(exchangeService: string, organizationName: string): Promise<void> {
    let url = `/email/exchange/${organizationName}/service/${exchangeService}/updateFlagsOnAllAccounts`

    return this.client.request<void>('POST', url)
  }

}
