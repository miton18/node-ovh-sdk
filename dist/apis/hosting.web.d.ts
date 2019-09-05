import { Client } from '../client';
export interface ComplexTypeChartSerie<T> {
    unit: string;
    values: T[];
    serieName: string;
}
export interface ComplexTypeChartTimestampValue {
    value?: any;
    timestamp: number;
}
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
}
export declare type HostingPrivateDatabaseAvailableRamSizeEnum = '1024' | '2048' | '4096' | '512';
export declare enum HostingPrivateDatabaseOrderableVersionEnum {
    MARIADB_10_1 = "mariadb_10.1",
    MARIADB_10_2 = "mariadb_10.2",
    MONGODB_3_4 = "mongodb_3.4",
    MONGODB_4_0 = "mongodb_4.0",
    MYSQL_5_5 = "mysql_5.5",
    MYSQL_5_6 = "mysql_5.6",
    MYSQL_5_7 = "mysql_5.7",
    POSTGRESQL_10 = "postgresql_10",
    POSTGRESQL_11 = "postgresql_11",
    POSTGRESQL_9_4 = "postgresql_9.4",
    POSTGRESQL_9_5 = "postgresql_9.5",
    POSTGRESQL_9_6 = "postgresql_9.6",
    REDIS_3_2 = "redis_3.2",
    REDIS_4_0 = "redis_4.0"
}
export interface HostingwebAddress {
    port: number;
    url: string;
}
export interface HostingwebattachedDomain {
    ipLocation?: HostingwebCountryEnum;
    taskId?: number;
    firewall: HostingwebattachedDomainFirewallEnum;
    domain: string;
    ownLog?: string;
    status: HostingwebattachedDomainStatusEnum;
    cdn: HostingwebattachedDomainCdnEnum;
    ssl?: boolean;
    path: string;
    runtimeId?: number;
}
export declare enum HostingwebattachedDomainCdnEnum {
    ACTIVE = "active",
    NONE = "none"
}
export declare enum HostingwebattachedDomainFirewallEnum {
    ACTIVE = "active",
    NONE = "none"
}
export declare enum HostingwebattachedDomainStatusEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    UPDATING = "updating"
}
export interface HostingwebAvailableOfferStruct {
    offer: HostingwebOfferEnum;
    price: OrderPrice;
}
export declare enum HostingwebbackupTypeEnum {
    DAILY_1 = "daily.1",
    DAILY_2 = "daily.2",
    DAILY_3 = "daily.3",
    WEEKLY_1 = "weekly.1",
    WEEKLY_2 = "weekly.2"
}
export interface HostingwebboostHistory {
    accountId: string;
    date: string;
    offer: HostingwebOfferCapabilitiesEnum;
    boostOffer?: HostingwebOfferCapabilitiesEnum;
}
export interface HostingwebCapabilities {
    disk?: HostingwebDiskType;
    emails: HostingwebCreationEmailCapabilities;
    databaseEngines: number;
    moduleOneClick: boolean;
    sitesRecommended?: number;
    crontab: boolean;
    privateDatabases: HostingwebdatabaseCreationDatabaseCapabilities[];
    traffic?: any;
    extraUsers: number;
    ssh: boolean;
    filesBrowser: boolean;
    highlight?: HostingwebHighLightEnum;
    languages: HostingwebCronLanguageAvailable;
    databases: HostingwebdatabaseCreationDatabaseCapabilities[];
    attachedDomains: number;
    envVars: number;
    runtimes: number;
}
export interface Hostingwebcdn {
    version: string;
    taskId?: number;
    free: boolean;
    type: string;
    status: HostingwebcdnStatusEnum;
    domain: string;
}
export declare enum HostingwebcdnStatusEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    FLUSHING = "flushing"
}
export interface HostingwebCountriesIp {
    ipv6?: string;
    country: HostingwebCountryEnum;
    ip: string;
}
export declare enum HostingwebCountryEnum {
    BE = "BE",
    CZ = "CZ",
    DE = "DE",
    ES = "ES",
    FI = "FI",
    FR = "FR",
    IE = "IE",
    IT = "IT",
    LT = "LT",
    NL = "NL",
    PL = "PL",
    PT = "PT",
    UK = "UK"
}
export interface HostingwebCreationEmailCapabilities {
    quota: any;
    available: number;
}
export interface Hostingwebcron {
    language: HostingwebcronLanguageEnum;
    email?: string;
    description?: string;
    command: string;
    status: HostingwebcronStatusEnum;
    id: number;
    frequency: string;
}
export declare enum HostingwebcronLanguageEnum {
    NODE10 = "node10",
    NODE11 = "node11",
    NODE8 = "node8",
    NODE9 = "node9",
    OTHER = "other",
    PHP4 = "php4",
    PHP5_2 = "php5.2",
    PHP5_3 = "php5.3",
    PHP5_4 = "php5.4",
    PHP5_5 = "php5.5",
    PHP5_6 = "php5.6",
    PHP7_0 = "php7.0",
    PHP7_1 = "php7.1",
    PHP7_2 = "php7.2",
    PHP7_3 = "php7.3",
    PYTHON2 = "python2",
    PYTHON3 = "python3",
    RUBY2_4 = "ruby2.4",
    RUBY2_5 = "ruby2.5",
    RUBY2_6 = "ruby2.6"
}
export declare enum HostingwebcronStatusEnum {
    DISABLED = "disabled",
    ENABLED = "enabled",
    SUSPENDED = "suspended"
}
export interface HostingwebCronLanguageAvailable {
    nodejs: HostingwebNodejsVersionAvailableEnum[];
    php: HostingwebPhpVersionAvailableEnum[];
    python: HostingwebPythonVersionAvailableEnum[];
    ruby: HostingwebRubyVersionAvailableEnum[];
}
export interface Hostingwebdatabase {
    quotaUsed: any;
    versionSupport: HostingwebdatabaseSupportedVersionEnum;
    server?: string;
    state: HostingwebdatabaseStateEnum;
    mode: HostingwebdatabaseModeEnum;
    lastCheck?: string;
    port: number;
    dumps: number;
    quotaSize: any;
    name: string;
    version: HostingwebdatabaseVersionEnum;
    guiURL?: string;
    status: HostingwebdatabaseStatusEnum;
    user: string;
    taskId?: number;
    type: HostingwebdatabaseDatabaseTypeEnum;
}
export interface HostingwebdatabaseAvailableVersionStruct {
    list: HostingwebdatabaseVersionEnum[];
    default: HostingwebdatabaseVersionEnum;
}
export interface HostingwebdatabaseCreationDatabaseCapabilities {
    available: number;
    type: HostingwebdatabaseDatabaseCapabilitiesTypeEnum;
    quota: any;
    isolation: HostingwebdatabaseDatabaseIsolationEnum;
    engines: HostingwebdatabaseDatabaseTypeEnum[];
}
export interface HostingwebdatabaseDatabaseCapabilities {
    getQuota: boolean;
    getRight: boolean;
    guiURL: string;
    changeRight: boolean;
    restore: boolean;
    optimize: boolean;
    delete: boolean;
    dump: boolean;
    changePassword: boolean;
}
export declare enum HostingwebdatabaseDatabaseCapabilitiesTypeEnum {
    EXTRASQLPERSO = "extraSqlPerso",
    LOCAL = "local",
    PRIVATEDATABASE = "privateDatabase",
    SQLLOCAL = "sqlLocal",
    SQLPERSO = "sqlPerso",
    SQLPRO = "sqlPro"
}
export declare enum HostingwebdatabaseDatabaseIsolationEnum {
    DEDICATED = "dedicated",
    LOCAL = "local",
    SHARED = "shared"
}
export declare enum HostingwebdatabaseDatabaseTypeEnum {
    MARIADB = "mariadb",
    MONGODB = "mongodb",
    MYSQL = "mysql",
    POSTGRESQL = "postgresql",
    REDIS = "redis"
}
export interface Hostingwebdatabasedump {
    taskId?: number;
    type: HostingwebdatabasedumpDateEnum;
    creationDate: string;
    id: number;
    status: HostingwebdatabasedumpStatusEnum;
    url?: string;
    deletionDate: string;
}
export declare enum HostingwebdatabasedumpDateEnum {
    DAILY_1 = "daily.1",
    NOW = "now",
    WEEKLY_1 = "weekly.1"
}
export declare enum HostingwebdatabasedumpStatusEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting"
}
export declare type HostingwebdatabaseExtraSqlQuotaEnum = 100 | 200 | 25 | 400 | 800;
export declare enum HostingwebdatabaseModeEnum {
    BESTEFFORT = "besteffort",
    CLASSIC = "classic",
    MODULE = "module"
}
export declare enum HostingwebdatabaseRequestActionEnum {
    CHECK_QUOTA = "CHECK_QUOTA"
}
export declare enum HostingwebdatabaseStateEnum {
    CLOSE = "close",
    OK = "ok",
    READONLY = "readonly"
}
export declare enum HostingwebdatabaseStatisticsTypeEnum {
    STATEMENT = "statement",
    STATEMENTMEANTIME = "statementMeanTime"
}
export declare enum HostingwebdatabaseStatusEnum {
    CHECKING = "checking",
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    DUMPING = "dumping",
    IMPORTING = "importing",
    LOCKED = "locked",
    OPTIMIZING = "optimizing",
    RESTORING = "restoring",
    UPDATING = "updating"
}
export declare enum HostingwebdatabaseSupportedVersionEnum {
    BETA = "beta",
    DEPRECATED = "deprecated",
    STABLE = "stable"
}
export declare type HostingwebdatabaseVersionEnum = '3.4' | '4.0' | '5.1' | '5.5' | '5.6' | '8.4';
export declare enum HostingwebDatacenterEnum {
    GRA1 = "gra1",
    GRA2 = "gra2",
    P19 = "p19"
}
export interface HostingwebDiskType {
    unit: string;
    type: HostingwebDiskTypeEnum;
    value: any;
}
export declare enum HostingwebDiskTypeEnum {
    HDD = "HDD",
    SSD = "SSD"
}
export interface Hostingwebdump {
    orphan: boolean;
    databaseName: string;
    creationDate: string;
    deletionDate: string;
    taskId?: number;
    type: HostingwebdatabasedumpDateEnum;
    id: number;
    url?: string;
    status: HostingwebdatabasedumpStatusEnum;
}
export interface Hostingwebemail {
    maxPerDay: number;
    sent: number;
    state: HostingwebmailStateEnum;
    sentToday: number;
    bounce: number;
    email?: string;
}
export interface HostingwebenvVar {
    status: HostingwebenvVarStatusEnum;
    key: string;
    value: string;
    taskId?: number;
    type: HostingwebenvVarTypeEnum;
}
export declare enum HostingwebenvVarStatusEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    UPDATING = "updating"
}
export declare enum HostingwebenvVarTypeEnum {
    INTEGER = "integer",
    PASSWORD = "password",
    STRING = "string"
}
export interface Hostingwebextrasqlperso {
    status: string;
    size: any;
    name: string;
    taskId?: number;
    database: number;
}
export interface Hostingwebfreedom {
    domain: string;
    status: HostingwebfreedomStatusEnum;
    type: string;
}
export declare enum HostingwebfreedomStatusEnum {
    BLOCKEDBYCUSTOMER = "blockedByCustomer",
    BLOCKEDBYSYSTEM = "blockedBySystem",
    OK = "ok",
    PRESET = "preset"
}
export declare enum HostingwebHighLightEnum {
    BEST_SELLER = "best-seller",
    NEW = "new"
}
export declare enum HostingwebhostedsslReportValueEnum {
    COMPLETED = "completed",
    IN_PROGRESS = "in-progress",
    NON_COMPLETED = "non-completed",
    NON_REQUIRED = "non-required",
    NOT_APPLICABLE = "not-applicable",
    NOT_PROVIDED = "not-provided"
}
export declare enum HostingwebhostedsslStatusEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    IMPORTING = "importing",
    REGENERATING = "regenerating"
}
export interface Hostingwebindy {
    attachedDomains: string[];
    login: string;
    state: HostingwebuserStateEnum;
    home: string;
}
export interface HostingweblocalSeoaccount {
    taskId?: number;
    creationDate: string;
    email: string;
    lastUpdate: string;
    status: HostingweblocalSeoaccountStatusEnum;
    id: number;
}
export declare enum HostingweblocalSeoaccountEmailAvailabilityEnum {
    AVAILABLE = "available",
    MERGE = "merge",
    NIC = "nic",
    TAKEN = "taken"
}
export declare enum HostingweblocalSeoaccountStatusEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    UPDATING = "updating"
}
export interface HostingweblocalSeoDirectoriesList {
    navigationSystems: HostingweblocalSeoDirectory[];
    socialNetworks: HostingweblocalSeoDirectory[];
    searchEngines: HostingweblocalSeoDirectory[];
}
export interface HostingweblocalSeoDirectory {
    code: string;
    displayName: string;
}
export interface HostingweblocalSeoEmailAvailability {
    serviceName?: string;
    availability: HostingweblocalSeoaccountEmailAvailabilityEnum;
}
export declare enum HostingweblocalSeoFieldStatusEnum {
    MATCH = "MATCH",
    MISMATCH = "MISMATCH",
    MISSING = "MISSING",
    NOT_APPLICABLE = "NOT_APPLICABLE",
    PRESENT = "PRESENT"
}
export declare enum HostingweblocalSeoFlowStatusEnum {
    ALL_INFORMATION_SUBMITTED = "ALL_INFORMATION_SUBMITTED",
    DONT_REMOVE = "DONT_REMOVE",
    INACTIVE = "INACTIVE",
    MANUALLY_DEACTIVATED = "MANUALLY_DEACTIVATED",
    NEEDS_REVIEW = "NEEDS_REVIEW",
    NOT_SUPPORTED = "NOT_SUPPORTED",
    NO_ACTION_NEEDED = "NO_ACTION_NEEDED",
    REMOVAL_NEEDED = "REMOVAL_NEEDED",
    REMOVAL_REVIEW_NEEDED = "REMOVAL_REVIEW_NEEDED",
    REMOVAL_SUBMITTED = "REMOVAL_SUBMITTED",
    REMOVED = "REMOVED",
    SUBMISSION_NEEDED = "SUBMISSION_NEEDED",
    WAITING_DIRECTORY_ACTION = "WAITING_DIRECTORY_ACTION",
    WAITING_USER_ACTION = "WAITING_USER_ACTION"
}
export declare enum HostingweblocalSeoListingStatusEnum {
    IN_SYNC = "IN_SYNC",
    NOT_FOUND = "NOT_FOUND",
    NOT_IN_SYNC = "NOT_IN_SYNC",
    NOT_SUPPORTED = "NOT_SUPPORTED",
    NO_ONLINE_LISTING = "NO_ONLINE_LISTING",
    TECHNICAL_PROBLEMS = "TECHNICAL_PROBLEMS"
}
export interface HostingweblocalSeolocation {
    offer: HostingweblocalSeolocationOfferEnum;
    id: number;
    status: HostingweblocalSeolocationStatusEnum;
    accountId?: number;
    address?: string;
    taskId?: number;
    country: HostingweblocalSeolocationCountryEnum;
    lastUpdate: string;
    creationDate: string;
    name?: string;
}
export declare enum HostingweblocalSeolocationCountryEnum {
    FR = "FR"
}
export declare enum HostingweblocalSeolocationOfferEnum {
    NORMAL = "normal"
}
export declare enum HostingweblocalSeolocationStatusEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    UPDATING = "updating"
}
export interface HostingweblocalSeoSearchData {
    country: string;
    zip: string;
    token: string;
    name: string;
    province?: string;
    city: string;
    id: number;
    streetNo: string;
    street: string;
}
export interface HostingweblocalSeoVisibilityCheckResponse {
    searchData: HostingweblocalSeoSearchData;
    alreadyManaged?: boolean;
}
export interface HostingweblocalSeoVisibilityCheckResultResponse {
    dateCreated?: string;
    listingId?: string;
    streetType?: string;
    streetNo?: string;
    streetAndNo?: string;
    streetAndNoStatus?: HostingweblocalSeoFieldStatusEnum;
    street?: string;
    email?: string;
    syncStatus?: HostingweblocalSeoListingStatusEnum;
    provinceStatus?: HostingweblocalSeoFieldStatusEnum;
    streetStatus?: HostingweblocalSeoFieldStatusEnum;
    nameStatus?: HostingweblocalSeoFieldStatusEnum;
    province?: string;
    directoryType?: string;
    streetTypeStatus?: HostingweblocalSeoFieldStatusEnum;
    name?: string;
    countryStatus?: HostingweblocalSeoFieldStatusEnum;
    listingUrl?: string;
    emailStatus?: HostingweblocalSeoFieldStatusEnum;
    cityStatus?: HostingweblocalSeoFieldStatusEnum;
    zipStatus?: HostingweblocalSeoFieldStatusEnum;
    phoneStatus?: HostingweblocalSeoFieldStatusEnum;
    city?: string;
    phone?: string;
    streetNoStatus?: HostingweblocalSeoFieldStatusEnum;
    country?: string;
    zip?: string;
    flowStatus?: HostingweblocalSeoFlowStatusEnum;
    websiteStatus?: HostingweblocalSeoFieldStatusEnum;
    website?: string;
}
export declare enum HostingwebmailActionEnum {
    BLOCK = "BLOCK",
    PURGE = "PURGE",
    UNBLOCK = "UNBLOCK"
}
export interface HostingwebmailBounce {
    to?: string;
    date: string;
    message?: string;
}
export declare enum HostingwebmailStateEnum {
    BOUNCE = "bounce",
    FORCE = "force",
    KO = "ko",
    OK = "ok",
    PURGING = "purging",
    SPAM = "spam"
}
export interface HostingwebmailVolumeHistory {
    volume?: number;
    date: string;
}
export interface Hostingwebmodule {
    path: string;
    lastUpdate: string;
    adminFolder: string;
    adminName: string;
    creationDate: string;
    id: number;
    status: HostingwebmoduleStatusEnum;
    moduleId: number;
    targetUrl: string;
    language: HostingwebmoduleLanguageEnum;
    dependencies: HostingwebmoduleDependencyType[];
    taskId?: number;
}
export declare enum HostingwebmoduleAdminNameTypeEnum {
    EMAIL = "email",
    STRING = "string"
}
export declare enum HostingwebmoduleBranchEnum {
    OLD = "old",
    STABLE = "stable",
    TESTING = "testing"
}
export interface HostingwebmoduleDependencyType {
    user?: string;
    name?: string;
    port?: number;
    prefix?: string;
    password?: string;
    server?: string;
    type: HostingwebmoduleDependencyTypeEnum;
}
export declare enum HostingwebmoduleDependencyTypeEnum {
    MYSQL = "mysql"
}
export declare enum HostingwebmoduleLanguageEnum {
    CZ = "cz",
    DE = "de",
    EN = "en",
    ES = "es",
    FI = "fi",
    FR = "fr",
    IT = "it",
    LT = "lt",
    NL = "nl",
    PL = "pl",
    PT = "pt"
}
export declare enum HostingwebmoduleStatusEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    UPDATING = "updating"
}
export interface HostingwebModuleList {
    size: any;
    id: number;
    branch: HostingwebmoduleBranchEnum;
    active: boolean;
    languageRequirement: any;
    adminNameType: HostingwebmoduleAdminNameTypeEnum;
    language: HostingwebmoduleLanguageEnum[];
    author: string;
    keywords: string[];
    latest: boolean;
    name: string;
    upgradeFrom: number[];
    version: string;
}
export declare enum HostingwebNodejsVersionAvailableEnum {
    NODEJS_10 = "nodejs-10",
    NODEJS_11 = "nodejs-11",
    NODEJS_8 = "nodejs-8",
    NODEJS_9 = "nodejs-9"
}
export declare type HostingwebOfferCapabilitiesEnum = '1000gp' | '20gp' | '240gp' | '240pack' | '240plan' | '300gp' | '60gp' | '720pack' | '720plan' | '90pack' | '90plan' | 'CLOUDWEB_1' | 'CLOUDWEB_2' | 'CLOUDWEB_3' | 'KS' | 'PERFORMANCE_1' | 'PERFORMANCE_2' | 'PERFORMANCE_3' | 'PERFORMANCE_4' | 'PERSO' | 'PRO' | 'START' | 'business' | 'cloudweb1' | 'cloudweb2' | 'cloudweb3' | 'cloudwebbetax1' | 'depro2012' | 'deprol2012' | 'deproxl2012' | 'deproxxl2012' | 'destart2012' | 'destartl2012' | 'destartxl2012' | 'domainpack' | 'itbusiness2012' | 'itperso2012' | 'itpremium2012' | 'kimsufi2015' | 'mailpack' | 'mailplan' | 'mediapack' | 'mediaplan' | 'ovhpro1To' | 'ovhpro2To' | 'ovhpro5To' | 'paas2014beta' | 'perf2014x1' | 'perf2014x2' | 'perf2014x3' | 'perf2014x4' | 'perso2010' | 'perso2014' | 'premium' | 'pro2010' | 'pro2014' | 'start10g' | 'start10m' | 'start1g' | 'start1ges' | 'start1m' | 'start5g' | 'starter' | 'xxlpack' | 'xxlplan';
export declare enum HostingwebOfferEnum {
    CLOUDWEB_1 = "CLOUDWEB_1",
    CLOUDWEB_2 = "CLOUDWEB_2",
    CLOUDWEB_3 = "CLOUDWEB_3",
    KS = "KS",
    PERFORMANCE_1 = "PERFORMANCE_1",
    PERFORMANCE_2 = "PERFORMANCE_2",
    PERFORMANCE_3 = "PERFORMANCE_3",
    PERFORMANCE_4 = "PERFORMANCE_4",
    PERSO = "PERSO",
    PRO = "PRO",
    START = "START"
}
export declare enum HostingwebOperatingSystemEnum {
    LINUX = "linux"
}
export interface HostingwebovhConfig {
    engineVersion: HostingwebovhConfigEngineVersionEnum;
    path?: string;
    fileExist: boolean;
    environment: HostingwebovhConfigEnvironmentEnum;
    historical?: boolean;
    httpFirewall: HostingwebovhConfigHttpFirewallEnum;
    creationDate: string;
    container: string;
    status: HostingwebovhConfigStatusEnum;
    id: number;
    taskId?: number;
    engineName: HostingwebovhConfigEngineNameEnum;
}
export declare type HostingwebovhConfigAvailableEngineVersionEnum = '5.4' | '5.5' | '5.6' | '7.0' | '7.1' | '7.2' | '7.3';
export declare enum HostingwebovhconfigContainerEnum {
    JESSIE_I386 = "jessie.i386",
    LEGACY = "legacy",
    STABLE = "stable",
    TESTING = "testing"
}
export declare enum HostingwebovhConfigEngineNameEnum {
    PHP = "php",
    PHPCGI = "phpcgi"
}
export declare type HostingwebovhConfigEngineVersionEnum = '4.4' | '5.0' | '5.1' | '5.2' | '5.3' | '5.4' | '5.5' | '5.6' | '7.0' | '7.1' | '7.2' | '7.3' | 'AUTO';
export declare enum HostingwebovhConfigEnvironmentEnum {
    DEVELOPMENT = "development",
    PRODUCTION = "production"
}
export declare enum HostingwebovhConfigHttpFirewallEnum {
    NONE = "none",
    SECURITY = "security"
}
export declare enum HostingwebovhConfigStatusEnum {
    CREATED = "created",
    ROLLBACKING = "rollbacking",
    UPDATING = "updating"
}
export interface HostingwebownLogs {
    id: number;
    status: HostingwebownLogsStatusEnum;
    fqdn: string;
    taskId?: number;
}
export declare enum HostingwebownLogsStatusEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting"
}
export interface HostingwebPhpVersion {
    support: HostingwebPhpVersionStateEnum;
    version: string;
}
export declare enum HostingwebPhpVersionAvailableEnum {
    PHPFPM_5_6 = "phpfpm-5.6",
    PHPFPM_7_0 = "phpfpm-7.0",
    PHPFPM_7_1 = "phpfpm-7.1",
    PHPFPM_7_2 = "phpfpm-7.2",
    PHPFPM_7_3 = "phpfpm-7.3"
}
export declare enum HostingwebPhpVersionStateEnum {
    BETA = "BETA",
    END_OF_LIFE = "END_OF_LIFE",
    SECURITY_FIXES = "SECURITY_FIXES",
    SUPPORTED = "SUPPORTED"
}
export declare enum HostingwebPythonVersionAvailableEnum {
    PYTHON_2 = "python-2",
    PYTHON_3 = "python-3"
}
export declare enum HostingwebRequestActionEnum {
    CHECK_QUOTA = "CHECK_QUOTA",
    FLUSH_CACHE = "FLUSH_CACHE",
    SCAN_ANTIHACK = "SCAN_ANTIHACK"
}
export declare enum HostingwebResourceEnum {
    BESTEFFORT = "bestEffort",
    CLOUD = "cloud",
    DEDICATED = "dedicated",
    SHARED = "shared"
}
export declare enum HostingwebRubyVersionAvailableEnum {
    RUBY_2_4 = "ruby-2.4",
    RUBY_2_5 = "ruby-2.5",
    RUBY_2_6 = "ruby-2.6"
}
export interface Hostingwebruntime {
    taskId?: number;
    type: HostingwebruntimeTypeEnum;
    appEnv: HostingwebruntimeEnvEnum;
    publicDir?: string;
    isDeletable: boolean;
    status: HostingwebruntimeStateEnum;
    id: number;
    name?: string;
    creationDate: string;
    isDefault: boolean;
    lastUpdate: string;
    appBootstrap?: string;
}
export declare enum HostingwebruntimeEnvEnum {
    DEVELOPMENT = "development",
    PRODUCTION = "production"
}
export declare enum HostingwebruntimeStateEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    UPDATING = "updating"
}
export declare enum HostingwebruntimeTypeEnum {
    NODEJS_10 = "nodejs-10",
    NODEJS_11 = "nodejs-11",
    NODEJS_8 = "nodejs-8",
    NODEJS_9 = "nodejs-9",
    PHPFPM_5_6 = "phpfpm-5.6",
    PHPFPM_7_0 = "phpfpm-7.0",
    PHPFPM_7_1 = "phpfpm-7.1",
    PHPFPM_7_2 = "phpfpm-7.2",
    PHPFPM_7_3 = "phpfpm-7.3",
    PYTHON_2 = "python-2",
    PYTHON_3 = "python-3",
    RUBY_2_4 = "ruby-2.4",
    RUBY_2_5 = "ruby-2.5",
    RUBY_2_6 = "ruby-2.6"
}
export interface HostingwebService {
    lastOvhConfigScan?: string;
    serviceName: string;
    clusterIpv6?: string;
    quotaUsed?: any;
    phpVersions: HostingwebPhpVersion[];
    trafficQuotaSize?: any;
    operatingSystem: HostingwebOperatingSystemEnum;
    state: HostingwebStateEnum;
    recommendedOffer?: HostingwebOfferEnum;
    home: string;
    cluster: string;
    hasCdn?: boolean;
    hostingIp?: string;
    quotaSize: any;
    hostingIpv6?: string;
    displayName?: string;
    token?: string;
    datacenter: HostingwebDatacenterEnum;
    offer: HostingwebOfferCapabilitiesEnum;
    resourceType: HostingwebResourceEnum;
    boostOffer?: HostingwebOfferCapabilitiesEnum;
    availableBoostOffer: HostingwebAvailableOfferStruct[];
    primaryLogin: string;
    trafficQuotaUsed?: any;
    clusterIp?: string;
    countriesIp?: HostingwebCountriesIp[];
    serviceManagementAccess: HostingwebServiceAccess;
    filer?: string;
    updates: string[];
    hasHostedSsl?: boolean;
}
export interface HostingwebServiceAccess {
    ssh: HostingwebAddress;
    ftp: HostingwebAddress;
    http: HostingwebAddress;
}
export interface Hostingwebssl {
    provider: string;
    type: string;
    taskId?: number;
    regenerable: boolean;
    isReportable: boolean;
    status: HostingwebhostedsslStatusEnum;
}
export interface Hostingwebsslreport {
    termsAndConditionsAcceptanceStatus: HostingwebhostedsslReportValueEnum;
    phoneCallApprovalStatus: HostingwebhostedsslReportValueEnum;
    tradeNameVerificationStatus: HostingwebhostedsslReportValueEnum;
    certificateSigningRequestStatus: HostingwebhostedsslReportValueEnum;
    providerOrderId: string;
    domainControlValidationStatus: HostingwebhostedsslReportValueEnum;
    organizationValidationStatus: HostingwebhostedsslReportValueEnum;
}
export declare enum HostingwebStateEnum {
    ACTIVE = "active",
    BLOQUED = "bloqued",
    MAINTENANCE = "maintenance"
}
export declare enum HostingwebStatisticsPeriodEnum {
    DAILY = "daily",
    MONTHLY = "monthly",
    WEEKLY = "weekly",
    YEARLY = "yearly"
}
export declare enum HostingwebStatisticsTypeEnum {
    IN_FTPCOMMANDS = "in.ftpCommands",
    IN_HTTPHITS = "in.httpHits",
    IN_HTTPMEANRESPONSETIME = "in.httpMeanResponseTime",
    OUT_TCPCONN = "out.tcpConn",
    SYS_CPUUSAGE = "sys.cpuUsage",
    SYS_WORKERSPAWNOVERLOAD = "sys.workerSpawnOverload"
}
export interface Hostingwebtask {
    objectType?: HostingwebtaskObjectTypeEnum;
    status: HostingwebtaskStatusEnum;
    id: number;
    doneDate?: string;
    function: string;
    lastUpdate?: string;
    objectId?: string;
    startDate: string;
}
export declare enum HostingwebtaskObjectTypeEnum {
    ABUSE = "Abuse",
    ATTACHEDDOMAIN = "AttachedDomain",
    BLOCKEDIP = "BlockedIp",
    CDN = "Cdn",
    CRON = "Cron",
    DATABASE = "Database",
    DUMP = "Dump",
    ENVVAR = "EnvVar",
    FILERZ = "Filerz",
    HOSTEDSSL = "Hostedssl",
    HOSTING = "Hosting",
    INDY = "Indy",
    INFRA = "Infra",
    MINOR = "Minor",
    MODULE = "Module",
    OTHER = "Other",
    OVHCONFIG = "OvhConfig",
    OVHORG = "OvhOrg",
    OWNLOGS = "OwnLogs",
    RUNTIME = "Runtime",
    SCAN = "Scan",
    SQLPERSO = "Sqlperso",
    USER = "User",
    USERLOGS = "UserLogs",
    WEB = "Web",
    WEBD = "Webd"
}
export declare enum HostingwebtaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    INIT = "init",
    TODO = "todo"
}
export interface Hostingwebuser {
    taskId?: number;
    status: HostingwebuserStatusEnum;
    login: string;
    state: HostingwebuserStateEnum;
    sshState: HostingwebuserSshStateEnum;
    home: string;
    isPrimaryAccount: boolean;
    serviceManagementCredentials: HostingwebuserServiceCredentials;
}
export interface HostingwebuserCredentials {
    user: string;
    url: string;
    port: number;
}
export interface HostingwebuserServiceCredentials {
    ftp: HostingwebuserCredentials;
    ssh: HostingwebuserCredentials;
}
export declare enum HostingwebuserSshStateEnum {
    ACTIVE = "active",
    NONE = "none",
    SFTPONLY = "sftponly"
}
export declare enum HostingwebuserStateEnum {
    OFF = "off",
    RW = "rw"
}
export declare enum HostingwebuserStatusEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    UPDATING = "updating"
}
export interface HostingwebuserLogs {
    status: HostingwebuserLogsStatusEnum;
    ownLogsId?: number;
    login: string;
    description?: string;
    taskId?: number;
    creationDate: string;
}
export declare enum HostingwebuserLogsStatusEnum {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    UPDATING = "updating"
}
export declare enum OrderCurrencyCodeEnum {
    AUD = "AUD",
    CAD = "CAD",
    CZK = "CZK",
    EUR = "EUR",
    GBP = "GBP",
    LTL = "LTL",
    MAD = "MAD",
    N_A = "N/A",
    PLN = "PLN",
    SGD = "SGD",
    TND = "TND",
    USD = "USD",
    XOF = "XOF",
    POINTS = "points"
}
export interface OrderPrice {
    currencyCode: OrderCurrencyCodeEnum;
    value: any;
    text: string;
}
export declare enum ServiceRenewalTypeEnum {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
export interface ServiceRenewType {
    period?: number;
    manualPayment?: boolean;
    forced: boolean;
    automatic: boolean;
    deleteAtExpiration: boolean;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export declare enum ServiceTerminationFutureUseEnum {
    NOT_REPLACING_SERVICE = "NOT_REPLACING_SERVICE",
    OTHER = "OTHER",
    SUBSCRIBE_AN_OTHER_SERVICE = "SUBSCRIBE_AN_OTHER_SERVICE",
    SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
    SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
}
export declare enum ServiceTerminationReasonEnum {
    FEATURES_DONT_SUIT_ME = "FEATURES_DONT_SUIT_ME",
    LACK_OF_PERFORMANCES = "LACK_OF_PERFORMANCES",
    MIGRATED_TO_ANOTHER_OVH_PRODUCT = "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
    MIGRATED_TO_COMPETITOR = "MIGRATED_TO_COMPETITOR",
    NOT_ENOUGH_RECOGNITION = "NOT_ENOUGH_RECOGNITION",
    NOT_NEEDED_ANYMORE = "NOT_NEEDED_ANYMORE",
    NOT_RELIABLE = "NOT_RELIABLE",
    NO_ANSWER = "NO_ANSWER",
    OTHER = "OTHER",
    PRODUCT_DIMENSION_DONT_SUIT_ME = "PRODUCT_DIMENSION_DONT_SUIT_ME",
    PRODUCT_TOOLS_DONT_SUIT_ME = "PRODUCT_TOOLS_DONT_SUIT_ME",
    TOO_EXPENSIVE = "TOO_EXPENSIVE",
    TOO_HARD_TO_USE = "TOO_HARD_TO_USE",
    UNSATIFIED_BY_CUSTOMER_SUPPORT = "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export interface ServicesService {
    serviceId: number;
    contactAdmin: string;
    engagedUpTo?: string;
    creation: string;
    renew?: ServiceRenewType;
    renewalType: ServiceRenewalTypeEnum;
    possibleRenewPeriod?: number[];
    canDeleteAtExpiration: boolean;
    contactTech: string;
    status: ServiceStateEnum;
    domain: string;
    expiration: string;
    contactBilling: string;
}
export declare class HostingWeb {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<HostingwebService>;
    AlterThisObjectProperties(serviceName: string, payload: HostingwebService): Promise<void>;
    ActivateAnIncludedPrivateDatabaseOnYourHostingOffer(ram: HostingPrivateDatabaseAvailableRamSizeEnum, serviceName: string, version: HostingPrivateDatabaseOrderableVersionEnum): Promise<Hostingwebtask>;
    DomainsOrSubdomainsAttachedToYourHosting(serviceName: string, domain?: string, path?: string): Promise<string[]>;
    LinkADomainToThisHosting(domain: string, path: string, serviceName: string, cdn?: HostingwebattachedDomainCdnEnum, firewall?: HostingwebattachedDomainFirewallEnum, ownLog?: string, runtimeId?: number, ssl?: boolean): Promise<Hostingwebtask>;
    UnlinkDomainFromHosting(domain: string, serviceName: string): Promise<Hostingwebtask>;
    PurgeCacheForThisAttachedDomain(domain: string, serviceName: string): Promise<Hostingwebtask>;
    RestartTheVirtualHostOfTheAttachedDomain(domain: string, serviceName: string): Promise<Hostingwebtask>;
    HistoryOfYourHostingBoost(serviceName: string, date?: string): Promise<string[]>;
    TerminateYourCdnSubService(serviceName: string): Promise<string>;
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum): Promise<string>;
    CronsOnYourHosting(serviceName: string, command?: string, description?: string, email?: string, language?: HostingwebcronLanguageEnum): Promise<number[]>;
    CreateNewCron(command: string, frequency: string, language: HostingwebcronLanguageEnum, serviceName: string, description?: string, email?: string, status?: HostingwebcronStatusEnum): Promise<string>;
    DeleteCron(id: number, serviceName: string): Promise<string>;
    ListAvailableCronLanguage(serviceName: string): Promise<HostingwebcronLanguageEnum[]>;
    DatabasesLinkedToYourHosting(serviceName: string, mode?: HostingwebdatabaseModeEnum, name?: string, server?: string, type?: HostingwebdatabaseDatabaseTypeEnum, user?: string): Promise<string[]>;
    InstallNewDatabase(capabilitie: HostingwebdatabaseDatabaseCapabilitiesTypeEnum, serviceName: string, type: HostingwebdatabaseDatabaseTypeEnum, user: string, password?: string, quota?: HostingwebdatabaseExtraSqlQuotaEnum, version?: HostingwebdatabaseVersionEnum): Promise<Hostingwebtask>;
    DeleteDatabase(name: string, serviceName: string): Promise<Hostingwebtask>;
    GetAvailableCapabilitiesForThisDatabase(name: string, serviceName: string): Promise<HostingwebdatabaseDatabaseCapabilities>;
    RequestAPasswordChange(name: string, password: string, serviceName: string): Promise<Hostingwebtask>;
    DumpAvailableForYourDatabases(name: string, serviceName: string, creationDate?: string, deletionDate?: string, type?: HostingwebdatabasedumpDateEnum): Promise<number[]>;
    RequestTheDumpFromYourDatabase(date: HostingwebdatabasedumpDateEnum, name: string, serviceName: string, sendEmail?: boolean): Promise<Hostingwebtask>;
    DeleteDumpBeforeExpirationDate(id: number, name: string, serviceName: string): Promise<Hostingwebtask>;
    RequestTheRestoreFromThisDump(id: number, name: string, serviceName: string): Promise<Hostingwebtask>;
    ImportADumpFromAnSpecificFileUploadedWithMedocuments(documentId: string, name: string, serviceName: string, flushDatabase?: boolean, sendEmail?: boolean): Promise<Hostingwebtask>;
    RequestSpecificOperationForYourDatabase(action: HostingwebdatabaseRequestActionEnum, name: string, serviceName: string): Promise<Hostingwebtask>;
    RequestTheRestoreFromYourDatabaseBackup(date: HostingwebdatabasedumpDateEnum, name: string, serviceName: string, sendEmail?: boolean): Promise<Hostingwebtask>;
    GetStatisticsAboutThisDatabase(name: string, period: HostingwebStatisticsPeriodEnum, serviceName: string, type: HostingwebdatabaseStatisticsTypeEnum): Promise<any>;
    ListAvailableDatabaseType(serviceName: string): Promise<HostingwebdatabaseDatabaseTypeEnum[]>;
    ListAvailableDatabaseVersionFollowingAType(serviceName: string, type: HostingwebdatabaseDatabaseTypeEnum): Promise<HostingwebdatabaseAvailableVersionStruct>;
    ListAvailableDatabaseYouCanInstall(serviceName: string): Promise<HostingwebdatabaseCreationDatabaseCapabilities[]>;
    DumpsLinkedToYourHosting(serviceName: string, creationDate?: string, databaseName?: string, deletionDate?: string, orphan?: boolean): Promise<number[]>;
    RequestTheLastBounces(limit: number, serviceName: string): Promise<HostingwebmailBounce[]>;
    RequestSpecificOperationForYourEmail(action: HostingwebmailActionEnum, serviceName: string): Promise<string>;
    RequestTheHistoryVolumeOfEmailSent(serviceName: string): Promise<HostingwebmailVolumeHistory[]>;
    EnvironmentVariablesSetOnYourWebhosting(serviceName: string, type?: HostingwebenvVarTypeEnum): Promise<string[]>;
    SetAVariableToThisHosting(key: string, serviceName: string, type: HostingwebenvVarTypeEnum, value: string): Promise<Hostingwebtask>;
    RemoveVariableFromHosting(key: string, serviceName: string): Promise<Hostingwebtask>;
    SqlpersoLinkedToYourHosting(serviceName: string): Promise<string[]>;
    GetDatabasesLinkedWithThisOption(name: string, serviceName: string): Promise<string[]>;
    TerminateYourExtraSqlPersoSubService(name: string, serviceName: string): Promise<string>;
    FreedomLinkedToThisHostingAccount(serviceName: string, status?: HostingwebfreedomStatusEnum): Promise<string[]>;
    DeleteTheFreedom(domain: string, serviceName: string): Promise<void>;
    UserOfMultidomainIndependentAllowedOnYourHosting(serviceName: string, login?: string): Promise<string[]>;
    LocalSEOAccountsAssociatedToTheHosting(serviceName: string, email?: string): Promise<number[]>;
    LoginThisLocationForSSO(id: number, serviceName: string): Promise<string>;
    CheckEmailAvailabilityForALocalSEOOrder(email: string, serviceName: string): Promise<HostingweblocalSeoEmailAvailability>;
    LocalSEOLocationsAssociatedToTheHosting(serviceName: string): Promise<number[]>;
    TerminateALocalSEOSubService(id: number, serviceName: string): Promise<string>;
    ModuleInstalledOnYourHosting(serviceName: string): Promise<number[]>;
    InstallANewModule(moduleId: number, serviceName: string, adminName?: string, adminPassword?: string, dependencies?: HostingwebmoduleDependencyType[], domain?: string, language?: HostingwebmoduleLanguageEnum, path?: string): Promise<Hostingwebtask>;
    DeleteAModuleInstalled(id: number, serviceName: string): Promise<Hostingwebtask>;
    GenerateANewAdminPasswordForYourModule(id: number, serviceName: string): Promise<Hostingwebtask>;
    ConfigurationUsedOnYourHosting(serviceName: string, historical?: boolean, path?: string): Promise<number[]>;
    ApplyANewConfigurationOnThisPath(id: number, serviceName: string, container?: HostingwebovhconfigContainerEnum, engineName?: HostingwebovhConfigEngineNameEnum, engineVersion?: HostingwebovhConfigAvailableEngineVersionEnum, environment?: HostingwebovhConfigEnvironmentEnum, httpFirewall?: HostingwebovhConfigHttpFirewallEnum): Promise<Hostingwebtask>;
    RollbackToAnOldConfiguration(id: number, rollbackId: number, serviceName: string): Promise<Hostingwebtask>;
    SynchronizeTheConfigurationListingWithContentOnYourHosting(serviceName: string): Promise<Hostingwebtask>;
    OwnLogsLinkedToYourHosting(serviceName: string): Promise<number[]>;
    UserAllowedToConnectIntoYourLogsInterface(id: number, serviceName: string, login?: string): Promise<string[]>;
    CreateNewUserLogs(description: string, id: number, login: string, password: string, serviceName: string, ownLogsId?: number): Promise<string>;
    DeleteTheUserLogs(id: number, login: string, serviceName: string): Promise<string>;
    ListAvailablePrivateDatabaseYouCanInstall(serviceName: string): Promise<HostingwebdatabaseCreationDatabaseCapabilities[]>;
    ListLinkedPrivateDatabases(serviceName: string): Promise<string[]>;
    RequestSpecificOperationForYourHosting(action: HostingwebRequestActionEnum, serviceName: string): Promise<Hostingwebtask>;
    AllowsYouToBoostYourOffer(serviceName: string, offer?: HostingwebOfferEnum): Promise<Hostingwebtask>;
    RestoreThisSnapshotALLCURRENTDATAWILLBEREPLACEDBYYOURSNAPSHOT(backup: HostingwebbackupTypeEnum, serviceName: string): Promise<Hostingwebtask>;
    ListOfRuntimeConfigurationsToYourHosting(serviceName: string, name?: string, type?: HostingwebruntimeTypeEnum): Promise<number[]>;
    RequestTheCreationOfANewRuntimeConfiguration(serviceName: string, appBootstrap?: string, appEnv?: HostingwebruntimeEnvEnum, attachedDomains?: string[], isDefault?: boolean, name?: string, publicDir?: string, type?: HostingwebruntimeTypeEnum): Promise<Hostingwebtask>;
    DeleteARuntimeConfigurationOfAnHosting(id: number, serviceName: string): Promise<Hostingwebtask>;
    GetTheAttachedDomainsLinkedToThisRuntimeConfiguration(id: number, serviceName: string): Promise<string[]>;
    ListAvailableRuntimeConfigurationsAvailableBackendTypes(serviceName: string, language?: string): Promise<HostingwebruntimeTypeEnum[]>;
    CreateTheFreeDefaultHostedSslORImportYourProperSSLOnYourHosting(serviceName: string, certificate?: string, chain?: string, key?: string): Promise<Hostingwebssl>;
    DeleteTheHostedSslOnYourHosting(serviceName: string): Promise<Hostingwebssl>;
    GetDomainsLinkedToThisHostedSsl(serviceName: string): Promise<string[]>;
    RequestTheRegenerationOfYourHostedSsl(serviceName: string): Promise<Hostingwebssl>;
    GetStatisticsAboutThisWebHosting(period: HostingwebStatisticsPeriodEnum, serviceName: string, type: HostingwebStatisticsTypeEnum): Promise<any>;
    TasksAttachedToYourHosting(serviceName: string, _function?: string, status?: HostingwebtaskStatusEnum): Promise<number[]>;
    TerminateYourService(serviceName: string): Promise<string>;
    UseToLinkAnExternalDomainThisTokenHasToBeInsertIntoATXTFieldOnYourDnsZoneWithOvhcontrolSubdomain(serviceName: string): Promise<string>;
    UserAllowedToConnectIntoYourHosting(serviceName: string, home?: string, login?: string): Promise<string[]>;
    CreateNewFtpsshUser(home: string, login: string, password: string, serviceName: string, sshState?: HostingwebuserSshStateEnum): Promise<Hostingwebtask>;
    DeleteFtpsshUser(login: string, serviceName: string): Promise<Hostingwebtask>;
    GetATemporaryTokenToAccessTheYourWebHostingLogsInterface(serviceName: string, attachedDomain?: string, remoteCheck?: boolean, ttl?: number): Promise<string>;
    FindHostingServiceLinkedToADomain(domain: string): Promise<string[]>;
    GetAvailableOffer(domain: string): Promise<HostingwebOfferEnum[]>;
    GetCurrentIncident(): Promise<string[]>;
    GetListOfDirectoriesAssociatedToALocalSEOOfferAndACountry(country: HostingweblocalSeolocationCountryEnum, offer: HostingweblocalSeolocationOfferEnum): Promise<HostingweblocalSeoDirectoriesList>;
    CheckVisibilityOfALocation(country: HostingweblocalSeolocationCountryEnum, name: string, street: string, zip: string): Promise<HostingweblocalSeoVisibilityCheckResponse>;
    GetTheResultOfAVisibilityCheck(directory: string, id: number, token: string): Promise<HostingweblocalSeoVisibilityCheckResultResponse[]>;
    IDsOfAllModulesAvailable(active?: boolean, branch?: HostingwebmoduleBranchEnum, latest?: boolean): Promise<number[]>;
    GetOfferCapabilities(offer: HostingwebOfferCapabilitiesEnum): Promise<HostingwebCapabilities>;
}
//# sourceMappingURL=hosting.web.d.ts.map