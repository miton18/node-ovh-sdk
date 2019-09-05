import { Client } from '../client';
export interface ComplexTypeSafeKeyValue<T> {
    key: string;
    value: T;
}
export interface ComplexTypeUnitAndValue<T> {
    value: T;
    unit: string;
}
export interface HostingPrivateDatabaseAvailableOrderCapacities {
    version: HostingPrivateDatabaseAvailableVersionEnum[];
    datacenter: HostingPrivateDatabaseDatacenterEnum[];
    ram: HostingPrivateDatabaseAvailableRamSizeEnum[];
    offer: HostingPrivateDatabaseOfferEnum;
}
export declare type HostingPrivateDatabaseAvailableRamSizeEnum = '1024' | '2048' | '4096' | '512';
export declare enum HostingPrivateDatabaseAvailableVersionEnum {
    MARIADB_10_1 = "mariadb_10.1",
    MARIADB_10_2 = "mariadb_10.2",
    MONGODB_3_4 = "mongodb_3.4",
    MONGODB_4_0 = "mongodb_4.0",
    MYSQL_4_1 = "mysql_4.1",
    MYSQL_5_0 = "mysql_5.0",
    MYSQL_5_1 = "mysql_5.1",
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
export interface HostingPrivateDatabaseCapability {
    delete: boolean;
    object: string;
    update: boolean;
    create: boolean;
}
export interface HostingprivateDatabaseConfiguration {
    lastUpdate: string;
    status: HostingPrivateDatabaseConfigurationStatus;
    taskId?: string;
    details: HostingPrivateDatabaseConfigurationDetail[];
}
export interface HostingPrivateDatabaseConfigurationDetail {
    key: string;
    unit?: string;
    lastUpdate: string;
    defaultValue: string;
    type: HostingPrivateDatabaseConfigurationDetailType;
    value: string;
    description: string;
    availableValues: string[];
}
export declare enum HostingPrivateDatabaseConfigurationDetailType {
    BOOLEAN = "boolean",
    NUMBER = "number",
    STRING = "string"
}
export declare enum HostingPrivateDatabaseConfigurationStatus {
    APPLIED = "applied",
    UPDATING = "updating"
}
export interface HostingprivateDatabasedatabase {
    users: HostingPrivateDatabaseDatabaseUser[];
    databaseName: string;
    creationDate: string;
    quotaUsed: any;
    backupTime?: any;
}
export interface HostingprivateDatabasedatabasedump {
    url: string;
    creationDate: string;
    id: number;
    databaseName: string;
    deletionDate: string;
}
export interface HostingprivateDatabasedatabaseextension {
    requiredExtensions: string[];
    description: string;
    status: HostingPrivateDatabaseDatabaseExtensionStatus;
    extensionName: string;
}
export declare enum HostingPrivateDatabaseDatabaseExtensionStatus {
    DISABLED = "disabled",
    DISABLING = "disabling",
    ENABLED = "enabled",
    ENABLING = "enabling"
}
export interface HostingPrivateDatabaseDatabaseUser {
    grantType: HostingPrivateDatabasegrantGrantEnum;
    userName: string;
    grantId: number;
}
export declare enum HostingPrivateDatabaseDatacenterEnum {
    GRA1 = "gra1",
    GRA2 = "gra2",
    P19 = "p19"
}
export interface HostingprivateDatabasedump {
    orphan: boolean;
    databaseName: string;
    deletionDate: string;
    url: string;
    dumpId: number;
    creationDate: string;
}
export interface HostingprivateDatabasegrant {
    creationDate: string;
    grant: HostingPrivateDatabasegrantGrantEnum;
    databaseName: string;
}
export declare enum HostingPrivateDatabasegrantGrantEnum {
    ADMIN = "admin",
    NONE = "none",
    RO = "ro",
    RW = "rw"
}
export interface HostingPrivateDatabaseGraphEndpoint {
    readTokenId: string;
    readToken: string;
    host: string;
}
export declare enum HostingPrivateDatabaseOfferEnum {
    CLASSIC = "classic",
    PUBLIC = "public"
}
export interface HostingPrivateDatabaseOom {
    sizeReached: number;
    date: string;
}
export interface HostingprivateDatabaseService {
    port: number;
    capabilities: HostingPrivateDatabaseCapability[];
    version: HostingPrivateDatabaseAvailableVersionEnum;
    state: HostingPrivateDatabaseStateEnum;
    graphEndpoint?: HostingPrivateDatabaseGraphEndpoint;
    type: HostingPrivateDatabaseTypeEnum;
    quotaSize: any;
    ram: any;
    versionNumber: any;
    tlsCa?: string;
    hostnameFtp?: string;
    lastCheck: string;
    serviceName: string;
    cpu: number;
    infrastructure: string;
    hostname?: string;
    portFtp?: number;
    offer: HostingPrivateDatabaseOfferEnum;
    ip?: string;
    datacenter: HostingPrivateDatabaseDatacenterEnum;
    guiURL?: string;
    server?: string;
    quotaUsed: any;
    displayName?: string;
}
export declare enum HostingPrivateDatabaseStateEnum {
    DETACHED = "detached",
    RESTARTPENDING = "restartPending",
    STARTPENDING = "startPending",
    STARTED = "started",
    STOPPENDING = "stopPending",
    STOPPED = "stopped"
}
export interface HostingprivateDatabasetask {
    lastUpdate?: string;
    databaseName?: string;
    id: number;
    function: HostingPrivateDatabasetaskFunctionEnum;
    doneDate?: string;
    startDate: string;
    userName?: string;
    status: HostingPrivateDatabasetaskStatusEnum;
    dumpId?: number;
}
export declare enum HostingPrivateDatabasetaskFunctionEnum {
    BOOT = "boot",
    CHANGEFTPPASSWORD = "changeFtpPassword",
    CHANGERAM = "changeRam",
    CHANGEROOTPASSWORD = "changeRootPassword",
    CHANGEVERSION = "changeVersion",
    CONFIGURATION_UPDATE = "configuration/update",
    CREATE = "create",
    DATABASE_CREATE = "database/create",
    DATABASE_DELETE = "database/delete",
    DATABASE_DUMP = "database/dump",
    DATABASE_DUMP_DELETE = "database/dump/delete",
    DATABASE_EXTENSION_CREATE = "database/extension/create",
    DATABASE_EXTENSION_DELETE = "database/extension/delete",
    DATABASE_IMPORT = "database/import",
    DATABASE_RESTORE = "database/restore",
    DATABASE_WIZARD = "database/wizard",
    DELETE = "delete",
    GRANT_CREATE = "grant/create",
    GRANT_DELETE = "grant/delete",
    GRANT_UPDATE = "grant/update",
    HALT = "halt",
    INSTALL = "install",
    REFRESH = "refresh",
    REOPEN = "reopen",
    RESTART = "restart",
    RESTORE = "restore",
    START = "start",
    STOP = "stop",
    SUSPEND = "suspend",
    USER_CHANGEPASSWORD = "user/changePassword",
    USER_CREATE = "user/create",
    USER_DELETE = "user/delete",
    WHITELIST_CREATE = "whitelist/create",
    WHITELIST_DELETE = "whitelist/delete",
    WHITELIST_UPDATE = "whitelist/update"
}
export declare enum HostingPrivateDatabasetaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    INIT = "init",
    TODO = "todo"
}
export interface HostingPrivateDatabaseTemporaryLogsLink {
    expirationDate: string;
    url: string;
}
export declare enum HostingPrivateDatabaseTypeEnum {
    MARIADB = "mariadb",
    MONGODB = "mongodb",
    MYSQL = "mysql",
    POSTGRESQL = "postgresql",
    REDIS = "redis"
}
export interface HostingprivateDatabaseuser {
    creationDate: string;
    databases: HostingPrivateDatabaseUserDatabase[];
    userName: string;
}
export interface HostingPrivateDatabaseUserDatabase {
    grantId: number;
    databaseName: string;
    grantType: HostingPrivateDatabasegrantGrantEnum;
}
export interface HostingprivateDatabasewhitelist {
    lastUpdate: string;
    sftp: boolean;
    taskId?: string;
    ip: string;
    name?: string;
    status: HostingPrivateDatabaseWhitelistStatus;
    creationDate: string;
    service: boolean;
}
export declare enum HostingPrivateDatabaseWhitelistStatus {
    CREATED = "created",
    CREATING = "creating",
    DELETING = "deleting",
    UPDATING = "updating"
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
    forced: boolean;
    automatic: boolean;
    period?: number;
    manualPayment?: boolean;
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
    canDeleteAtExpiration: boolean;
    contactBilling: string;
    domain: string;
    serviceId: number;
    expiration: string;
    possibleRenewPeriod?: number[];
    status: ServiceStateEnum;
    renew?: ServiceRenewType;
    engagedUpTo?: string;
    creation: string;
    contactAdmin: string;
    renewalType: ServiceRenewalTypeEnum;
    contactTech: string;
}
export declare class HostingPrivateDatabase {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<HostingprivateDatabaseService>;
    AlterThisObjectProperties(serviceName: string, payload: HostingprivateDatabaseService): Promise<void>;
    GetTheAvailablesVersionsForThisPrivateDatabase(serviceName: string): Promise<HostingPrivateDatabaseAvailableVersionEnum[]>;
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    ChangeYourFtpAdminPassword(password: string, serviceName: string): Promise<HostingprivateDatabasetask>;
    ChangeThePrivateDatabaseEngineVersion(serviceName: string, version: HostingPrivateDatabaseAvailableVersionEnum): Promise<HostingprivateDatabasetask>;
    UpdateTheConfiguration(parameters: any, serviceName: string): Promise<HostingprivateDatabaseConfiguration>;
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum): Promise<string>;
    DatabasesLinkedToYourPrivateDatabaseService(serviceName: string): Promise<string[]>;
    CreateANewDatabaseOnYourPrivateDatabaseService(databaseName: string, serviceName: string): Promise<HostingprivateDatabasetask>;
    DeleteTheDatabase(databaseName: string, serviceName: string): Promise<HostingprivateDatabasetask>;
    DumpAvailableForYourDatabases(databaseName: string, serviceName: string, creationDate?: string, deletionDate?: string): Promise<number[]>;
    RequestTheDumpOfThisDatabaseAnEmailWillBeSendWithALinkAvailable30Days(databaseName: string, serviceName: string, sendEmail?: boolean): Promise<HostingprivateDatabasetask>;
    DeleteDumpBeforeExpirationDate(databaseName: string, id: number, serviceName: string): Promise<HostingprivateDatabasetask>;
    RequestTheRestoreFromThisDump(databaseName: string, id: number, serviceName: string): Promise<HostingprivateDatabasetask>;
    ExtensionsLinkedToYourDatabase(databaseName: string, serviceName: string, extensionName?: string, status?: HostingPrivateDatabaseDatabaseExtensionStatus): Promise<string[]>;
    DisableAnExtensionFromADatabase(databaseName: string, extensionName: string, serviceName: string): Promise<HostingprivateDatabasetask>;
    EnableAnExtensionOnADatabase(databaseName: string, extensionName: string, serviceName: string): Promise<HostingprivateDatabasetask>;
    RequestTheImportInThisDatabase(databaseName: string, documentId: string, serviceName: string, flushDatabase?: boolean, sendEmail?: boolean): Promise<HostingprivateDatabasetask>;
    CreateANewDatabaseuserAndGrantIt(databaseName: string, grant: HostingPrivateDatabasegrantGrantEnum, password: string, serviceName: string, userName: string): Promise<HostingprivateDatabasetask>;
    DumpsAvailableForYourPrivateDatabaseService(serviceName: string, databaseName?: string, orphan?: boolean): Promise<number[]>;
    GenerateATemporaryUrlToRetrieveInstanceLogs(serviceName: string): Promise<HostingPrivateDatabaseTemporaryLogsLink>;
    ListOfPrivatesqlOOMKill(serviceName: string): Promise<HostingPrivateDatabaseOom[]>;
    SynchronizeYourInformationsFromYourPrivateDatabase(serviceName: string): Promise<HostingprivateDatabasetask>;
    RestartThePrivateDatabase(serviceName: string): Promise<HostingprivateDatabasetask>;
    StartThePrivateDatabase(serviceName: string): Promise<HostingprivateDatabasetask>;
    StopThePrivateDatabase(serviceName: string): Promise<HostingprivateDatabasetask>;
    TasksAttachedToYourPrivateDatabaseService(serviceName: string, _function?: HostingPrivateDatabasetaskFunctionEnum, status?: HostingPrivateDatabasetaskStatusEnum): Promise<number[]>;
    TerminateYourService(serviceName: string): Promise<string>;
    UserAllowedToConnectOnYourDatabases(serviceName: string): Promise<string[]>;
    CreateANewUserOnYourService(password: string, serviceName: string, userName: string): Promise<HostingprivateDatabasetask>;
    DeleteAUser(serviceName: string, userName: string): Promise<HostingprivateDatabasetask>;
    RequestAChangePasswordForAUser(password: string, serviceName: string, userName: string): Promise<HostingprivateDatabasetask>;
    UserGrantOnYourDatabases(serviceName: string, userName: string): Promise<string[]>;
    AddGrantOnADatabase(databaseName: string, grant: HostingPrivateDatabasegrantGrantEnum, serviceName: string, userName: string): Promise<HostingprivateDatabasetask>;
    DeleteAGrantOnADatabase(databaseName: string, serviceName: string, userName: string): Promise<HostingprivateDatabasetask>;
    UpdateUserGrant(databaseName: string, grant: HostingPrivateDatabasegrantGrantEnum, serviceName: string, userName: string): Promise<HostingprivateDatabasetask>;
    ListLinkedWebs(serviceName: string): Promise<string[]>;
    WhitelistAllowedOnYourPrivatesql(serviceName: string, ip?: string, service?: boolean, sftp?: boolean): Promise<string[]>;
    CreateANewIPWhitelist(ip: string, serviceName: string, name?: string, service?: boolean, sftp?: boolean): Promise<HostingprivateDatabasetask>;
    DeleteAinIPWhitelist(ip: string, serviceName: string): Promise<HostingprivateDatabasetask>;
    GetAvailableOrderCapacitie(offer: HostingPrivateDatabaseOfferEnum): Promise<HostingPrivateDatabaseAvailableOrderCapacities>;
}
//# sourceMappingURL=hosting.privateDatabase.d.ts.map