"use strict";
// GENERATED SDK for hosting/privateDatabase API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Private database available versions
 */
var HostingPrivateDatabaseAvailableVersion;
(function (HostingPrivateDatabaseAvailableVersion) {
    HostingPrivateDatabaseAvailableVersion["MARIADB_10_1"] = "mariadb_10.1";
    HostingPrivateDatabaseAvailableVersion["MARIADB_10_2"] = "mariadb_10.2";
    HostingPrivateDatabaseAvailableVersion["MONGODB_3_4"] = "mongodb_3.4";
    HostingPrivateDatabaseAvailableVersion["MONGODB_4_0"] = "mongodb_4.0";
    HostingPrivateDatabaseAvailableVersion["MYSQL_4_1"] = "mysql_4.1";
    HostingPrivateDatabaseAvailableVersion["MYSQL_5_0"] = "mysql_5.0";
    HostingPrivateDatabaseAvailableVersion["MYSQL_5_1"] = "mysql_5.1";
    HostingPrivateDatabaseAvailableVersion["MYSQL_5_5"] = "mysql_5.5";
    HostingPrivateDatabaseAvailableVersion["MYSQL_5_6"] = "mysql_5.6";
    HostingPrivateDatabaseAvailableVersion["MYSQL_5_7"] = "mysql_5.7";
    HostingPrivateDatabaseAvailableVersion["POSTGRESQL_10"] = "postgresql_10";
    HostingPrivateDatabaseAvailableVersion["POSTGRESQL_11"] = "postgresql_11";
    HostingPrivateDatabaseAvailableVersion["POSTGRESQL_9_4"] = "postgresql_9.4";
    HostingPrivateDatabaseAvailableVersion["POSTGRESQL_9_5"] = "postgresql_9.5";
    HostingPrivateDatabaseAvailableVersion["POSTGRESQL_9_6"] = "postgresql_9.6";
    HostingPrivateDatabaseAvailableVersion["REDIS_3_2"] = "redis_3.2";
    HostingPrivateDatabaseAvailableVersion["REDIS_4_0"] = "redis_4.0";
})(HostingPrivateDatabaseAvailableVersion = exports.HostingPrivateDatabaseAvailableVersion || (exports.HostingPrivateDatabaseAvailableVersion = {}));
/*
 * Configuration detail type
 */
var HostingPrivateDatabaseConfigurationDetailType;
(function (HostingPrivateDatabaseConfigurationDetailType) {
    HostingPrivateDatabaseConfigurationDetailType["BOOLEAN"] = "boolean";
    HostingPrivateDatabaseConfigurationDetailType["NUMBER"] = "number";
    HostingPrivateDatabaseConfigurationDetailType["STRING"] = "string";
})(HostingPrivateDatabaseConfigurationDetailType = exports.HostingPrivateDatabaseConfigurationDetailType || (exports.HostingPrivateDatabaseConfigurationDetailType = {}));
/*
 * Configuration status
 */
var HostingPrivateDatabaseConfigurationStatus;
(function (HostingPrivateDatabaseConfigurationStatus) {
    HostingPrivateDatabaseConfigurationStatus["APPLIED"] = "applied";
    HostingPrivateDatabaseConfigurationStatus["UPDATING"] = "updating";
})(HostingPrivateDatabaseConfigurationStatus = exports.HostingPrivateDatabaseConfigurationStatus || (exports.HostingPrivateDatabaseConfigurationStatus = {}));
/*
 * Extension status
 */
var HostingPrivateDatabaseDatabaseExtensionStatus;
(function (HostingPrivateDatabaseDatabaseExtensionStatus) {
    HostingPrivateDatabaseDatabaseExtensionStatus["DISABLED"] = "disabled";
    HostingPrivateDatabaseDatabaseExtensionStatus["DISABLING"] = "disabling";
    HostingPrivateDatabaseDatabaseExtensionStatus["ENABLED"] = "enabled";
    HostingPrivateDatabaseDatabaseExtensionStatus["ENABLING"] = "enabling";
})(HostingPrivateDatabaseDatabaseExtensionStatus = exports.HostingPrivateDatabaseDatabaseExtensionStatus || (exports.HostingPrivateDatabaseDatabaseExtensionStatus = {}));
/*
 * Available datacenters
 */
var HostingPrivateDatabaseDatacenter;
(function (HostingPrivateDatabaseDatacenter) {
    HostingPrivateDatabaseDatacenter["GRA1"] = "gra1";
    HostingPrivateDatabaseDatacenter["GRA2"] = "gra2";
    HostingPrivateDatabaseDatacenter["P19"] = "p19";
})(HostingPrivateDatabaseDatacenter = exports.HostingPrivateDatabaseDatacenter || (exports.HostingPrivateDatabaseDatacenter = {}));
/*
 * Grant on a database for a specific user
 */
var HostingPrivateDatabasegrantGrant;
(function (HostingPrivateDatabasegrantGrant) {
    HostingPrivateDatabasegrantGrant["ADMIN"] = "admin";
    HostingPrivateDatabasegrantGrant["NONE"] = "none";
    HostingPrivateDatabasegrantGrant["RO"] = "ro";
    HostingPrivateDatabasegrantGrant["RW"] = "rw";
})(HostingPrivateDatabasegrantGrant = exports.HostingPrivateDatabasegrantGrant || (exports.HostingPrivateDatabasegrantGrant = {}));
/*
 * Available offers
 */
var HostingPrivateDatabaseOffer;
(function (HostingPrivateDatabaseOffer) {
    HostingPrivateDatabaseOffer["CLASSIC"] = "classic";
    HostingPrivateDatabaseOffer["PUBLIC"] = "public";
})(HostingPrivateDatabaseOffer = exports.HostingPrivateDatabaseOffer || (exports.HostingPrivateDatabaseOffer = {}));
/*
 * Private database state
 */
var HostingPrivateDatabaseState;
(function (HostingPrivateDatabaseState) {
    HostingPrivateDatabaseState["DETACHED"] = "detached";
    HostingPrivateDatabaseState["RESTARTPENDING"] = "restartPending";
    HostingPrivateDatabaseState["STARTPENDING"] = "startPending";
    HostingPrivateDatabaseState["STARTED"] = "started";
    HostingPrivateDatabaseState["STOPPENDING"] = "stopPending";
    HostingPrivateDatabaseState["STOPPED"] = "stopped";
})(HostingPrivateDatabaseState = exports.HostingPrivateDatabaseState || (exports.HostingPrivateDatabaseState = {}));
/*
 * Task's function
 */
var HostingPrivateDatabasetaskFunction;
(function (HostingPrivateDatabasetaskFunction) {
    HostingPrivateDatabasetaskFunction["BOOT"] = "boot";
    HostingPrivateDatabasetaskFunction["CHANGEFTPPASSWORD"] = "changeFtpPassword";
    HostingPrivateDatabasetaskFunction["CHANGERAM"] = "changeRam";
    HostingPrivateDatabasetaskFunction["CHANGEROOTPASSWORD"] = "changeRootPassword";
    HostingPrivateDatabasetaskFunction["CHANGEVERSION"] = "changeVersion";
    HostingPrivateDatabasetaskFunction["CONFIGURATION_UPDATE"] = "configuration/update";
    HostingPrivateDatabasetaskFunction["CREATE"] = "create";
    HostingPrivateDatabasetaskFunction["DATABASE_CREATE"] = "database/create";
    HostingPrivateDatabasetaskFunction["DATABASE_DELETE"] = "database/delete";
    HostingPrivateDatabasetaskFunction["DATABASE_DUMP"] = "database/dump";
    HostingPrivateDatabasetaskFunction["DATABASE_DUMP_DELETE"] = "database/dump/delete";
    HostingPrivateDatabasetaskFunction["DATABASE_EXTENSION_CREATE"] = "database/extension/create";
    HostingPrivateDatabasetaskFunction["DATABASE_EXTENSION_DELETE"] = "database/extension/delete";
    HostingPrivateDatabasetaskFunction["DATABASE_IMPORT"] = "database/import";
    HostingPrivateDatabasetaskFunction["DATABASE_RESTORE"] = "database/restore";
    HostingPrivateDatabasetaskFunction["DATABASE_WIZARD"] = "database/wizard";
    HostingPrivateDatabasetaskFunction["DELETE"] = "delete";
    HostingPrivateDatabasetaskFunction["GRANT_CREATE"] = "grant/create";
    HostingPrivateDatabasetaskFunction["GRANT_DELETE"] = "grant/delete";
    HostingPrivateDatabasetaskFunction["GRANT_UPDATE"] = "grant/update";
    HostingPrivateDatabasetaskFunction["HALT"] = "halt";
    HostingPrivateDatabasetaskFunction["INSTALL"] = "install";
    HostingPrivateDatabasetaskFunction["REFRESH"] = "refresh";
    HostingPrivateDatabasetaskFunction["REOPEN"] = "reopen";
    HostingPrivateDatabasetaskFunction["RESTART"] = "restart";
    HostingPrivateDatabasetaskFunction["RESTORE"] = "restore";
    HostingPrivateDatabasetaskFunction["START"] = "start";
    HostingPrivateDatabasetaskFunction["STOP"] = "stop";
    HostingPrivateDatabasetaskFunction["SUSPEND"] = "suspend";
    HostingPrivateDatabasetaskFunction["USER_CHANGEPASSWORD"] = "user/changePassword";
    HostingPrivateDatabasetaskFunction["USER_CREATE"] = "user/create";
    HostingPrivateDatabasetaskFunction["USER_DELETE"] = "user/delete";
    HostingPrivateDatabasetaskFunction["WHITELIST_CREATE"] = "whitelist/create";
    HostingPrivateDatabasetaskFunction["WHITELIST_DELETE"] = "whitelist/delete";
    HostingPrivateDatabasetaskFunction["WHITELIST_UPDATE"] = "whitelist/update";
})(HostingPrivateDatabasetaskFunction = exports.HostingPrivateDatabasetaskFunction || (exports.HostingPrivateDatabasetaskFunction = {}));
/*
 * Task's status
 */
var HostingPrivateDatabasetaskStatus;
(function (HostingPrivateDatabasetaskStatus) {
    HostingPrivateDatabasetaskStatus["CANCELLED"] = "cancelled";
    HostingPrivateDatabasetaskStatus["DOING"] = "doing";
    HostingPrivateDatabasetaskStatus["DONE"] = "done";
    HostingPrivateDatabasetaskStatus["ERROR"] = "error";
    HostingPrivateDatabasetaskStatus["INIT"] = "init";
    HostingPrivateDatabasetaskStatus["TODO"] = "todo";
})(HostingPrivateDatabasetaskStatus = exports.HostingPrivateDatabasetaskStatus || (exports.HostingPrivateDatabasetaskStatus = {}));
/*
 * Private database type
 */
var HostingPrivateDatabaseType;
(function (HostingPrivateDatabaseType) {
    HostingPrivateDatabaseType["MARIADB"] = "mariadb";
    HostingPrivateDatabaseType["MONGODB"] = "mongodb";
    HostingPrivateDatabaseType["MYSQL"] = "mysql";
    HostingPrivateDatabaseType["POSTGRESQL"] = "postgresql";
    HostingPrivateDatabaseType["REDIS"] = "redis";
})(HostingPrivateDatabaseType = exports.HostingPrivateDatabaseType || (exports.HostingPrivateDatabaseType = {}));
/*
 * Whitelist status
 */
var HostingPrivateDatabaseWhitelistStatus;
(function (HostingPrivateDatabaseWhitelistStatus) {
    HostingPrivateDatabaseWhitelistStatus["CREATED"] = "created";
    HostingPrivateDatabaseWhitelistStatus["CREATING"] = "creating";
    HostingPrivateDatabaseWhitelistStatus["DELETING"] = "deleting";
    HostingPrivateDatabaseWhitelistStatus["UPDATING"] = "updating";
})(HostingPrivateDatabaseWhitelistStatus = exports.HostingPrivateDatabaseWhitelistStatus || (exports.HostingPrivateDatabaseWhitelistStatus = {}));
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
class HostingPrivateDatabase {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the SQLPRIVE service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase#GET)
     */
    ListAvailableServices() {
        let url = `/hosting/privateDatabase`;
        return this.client.request('GET', url);
    }
    /**
     * Private database [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Private database [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/hosting/privateDatabase/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * availableVersions operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/availableVersions#GET)
     */
    GetTheAvailablesVersionsForThisPrivateDatabase(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/availableVersions`;
        return this.client.request('GET', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/hosting/privateDatabase/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * changeFtpPassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/changeFtpPassword#POST)
     */
    ChangeYourFtpAdminPassword(password, serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/changeFtpPassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * changeVersion operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/changeVersion#POST)
     */
    ChangeThePrivateDatabaseEngineVersion(serviceName, version) {
        let url = `/hosting/privateDatabase/${serviceName}/changeVersion`;
        return this.client.request('POST', url, { version });
    }
    /**
     * Configuration [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/config#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<HostingprivateDatabaseConfiguration> {
      let url = `/hosting/privateDatabase/${serviceName}/config`
  
      return this.client.request<HostingprivateDatabaseConfiguration>('GET', url)
    }
    */
    /**
     * update operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/config/update#POST)
     */
    UpdateTheConfiguration(parameters, serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/config/update`;
        return this.client.request('POST', url, { parameters });
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/hosting/privateDatabase/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * List the hosting.privateDatabase.database objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database#GET)
     */
    DatabasesLinkedToYourPrivateDatabaseService(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/database`;
        return this.client.request('GET', url);
    }
    /**
     * List the hosting.privateDatabase.database objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database#POST)
     */
    CreateANewDatabaseOnYourPrivateDatabaseService(databaseName, serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/database`;
        return this.client.request('POST', url, { databaseName });
    }
    /**
     * Databases [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D#GET)
     */
    /*
    GetThisObjectProperties(databaseName: string, serviceName: string): Promise<HostingprivateDatabasedatabase> {
      let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}`
  
      return this.client.request<HostingprivateDatabasedatabase>('GET', url)
    }
    */
    /**
     * Databases [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D#DELETE)
     */
    DeleteTheDatabase(databaseName, serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the hosting.privateDatabase.database.dump objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/dump#GET)
     */
    DumpAvailableForYourDatabases(databaseName, serviceName, creationDate, deletionDate) {
        let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump?`;
        const queryParams = new query_params_1.default();
        if (creationDate) {
            queryParams.set('creationDate', creationDate.toString());
        }
        if (deletionDate) {
            queryParams.set('deletionDate', deletionDate.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.privateDatabase.database.dump objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/dump#POST)
     */
    RequestTheDumpOfThisDatabaseAnEmailWillBeSendWithALinkAvailable30Days(databaseName, serviceName, sendEmail) {
        let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump`;
        return this.client.request('POST', url, { sendEmail });
    }
    /**
     * Dump [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/dump/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(databaseName: string, id: number, serviceName: string): Promise<HostingprivateDatabasedatabasedump> {
      let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump/${id}`
  
      return this.client.request<HostingprivateDatabasedatabasedump>('GET', url)
    }
    */
    /**
     * Dump [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/dump/%7Bid%7D#DELETE)
     */
    DeleteDumpBeforeExpirationDate(databaseName, id, serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * restore operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/dump/%7Bid%7D/restore#POST)
     */
    RequestTheRestoreFromThisDump(databaseName, id, serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/dump/${id}/restore`;
        return this.client.request('POST', url);
    }
    /**
     * List the hosting.privateDatabase.database.extension objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/extension#GET)
     */
    ExtensionsLinkedToYourDatabase(databaseName, serviceName, extensionName, status) {
        let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension?`;
        const queryParams = new query_params_1.default();
        if (extensionName) {
            queryParams.set('extensionName', extensionName);
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Databases extension [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/extension/%7BextensionName%7D#GET)
     */
    /*
    GetThisObjectProperties(databaseName: string, extensionName: string, serviceName: string): Promise<HostingprivateDatabasedatabaseextension> {
      let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension/${extensionName}`
  
      return this.client.request<HostingprivateDatabasedatabaseextension>('GET', url)
    }
    */
    /**
     * disable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/extension/%7BextensionName%7D/disable#POST)
     */
    DisableAnExtensionFromADatabase(databaseName, extensionName, serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension/${extensionName}/disable`;
        return this.client.request('POST', url);
    }
    /**
     * enable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/extension/%7BextensionName%7D/enable#POST)
     */
    EnableAnExtensionOnADatabase(databaseName, extensionName, serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/extension/${extensionName}/enable`;
        return this.client.request('POST', url);
    }
    /**
     * import operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/database/%7BdatabaseName%7D/import#POST)
     */
    RequestTheImportInThisDatabase(databaseName, documentId, serviceName, flushDatabase, sendEmail) {
        let url = `/hosting/privateDatabase/${serviceName}/database/${databaseName}/import`;
        return this.client.request('POST', url, { documentId, flushDatabase, sendEmail });
    }
    /**
     * databaseWizard operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/databaseWizard#POST)
     */
    CreateANewDatabaseuserAndGrantIt(databaseName, grant, password, serviceName, userName) {
        let url = `/hosting/privateDatabase/${serviceName}/databaseWizard`;
        return this.client.request('POST', url, { databaseName, grant, password, userName });
    }
    /**
     * List the hosting.privateDatabase.dump objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/dump#GET)
     */
    DumpsAvailableForYourPrivateDatabaseService(serviceName, databaseName, orphan) {
        let url = `/hosting/privateDatabase/${serviceName}/dump?`;
        const queryParams = new query_params_1.default();
        if (databaseName) {
            queryParams.set('databaseName', databaseName);
        }
        if (orphan) {
            queryParams.set('orphan', orphan.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Dump [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/dump/%7BdumpId%7D#GET)
     */
    /*
    GetThisObjectProperties(dumpId: number, serviceName: string): Promise<HostingprivateDatabasedump> {
      let url = `/hosting/privateDatabase/${serviceName}/dump/${dumpId}`
  
      return this.client.request<HostingprivateDatabasedump>('GET', url)
    }
    */
    /**
     * Dump [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/dump/%7BdumpId%7D#DELETE)
     */
    /*
    DeleteDumpBeforeExpirationDate(dumpId: number, serviceName: string): Promise<HostingprivateDatabasetask> {
      let url = `/hosting/privateDatabase/${serviceName}/dump/${dumpId}`
  
      return this.client.request<HostingprivateDatabasetask>('DELETE', url)
    }
    */
    /**
     * restore operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/dump/%7BdumpId%7D/restore#POST)
     */
    /*
    RequestTheRestoreFromThisDump(databaseName: string, dumpId: number, serviceName: string): Promise<HostingprivateDatabasetask> {
      let url = `/hosting/privateDatabase/${serviceName}/dump/${dumpId}/restore`
  
      return this.client.request<HostingprivateDatabasetask>('POST', url, {databaseName})
    }
    */
    /**
     * generateTemporaryLogsLink operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/generateTemporaryLogsLink#POST)
     */
    GenerateATemporaryUrlToRetrieveInstanceLogs(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/generateTemporaryLogsLink`;
        return this.client.request('POST', url);
    }
    /**
     * oom operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/oom#GET)
     */
    ListOfPrivatesqlOOMKill(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/oom`;
        return this.client.request('GET', url);
    }
    /**
     * refresh operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/refresh#POST)
     */
    SynchronizeYourInformationsFromYourPrivateDatabase(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/refresh`;
        return this.client.request('POST', url);
    }
    /**
     * restart operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/restart#POST)
     */
    RestartThePrivateDatabase(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/restart`;
        return this.client.request('POST', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/hosting/privateDatabase/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/hosting/privateDatabase/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * start operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/start#POST)
     */
    StartThePrivateDatabase(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/start`;
        return this.client.request('POST', url);
    }
    /**
     * stop operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/stop#POST)
     */
    StopThePrivateDatabase(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/stop`;
        return this.client.request('POST', url);
    }
    /**
     * List the hosting.privateDatabase.task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/tasks#GET)
     */
    TasksAttachedToYourPrivateDatabaseService(serviceName, _function, status) {
        let url = `/hosting/privateDatabase/${serviceName}/tasks?`;
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
     * Tasks [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/tasks/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<HostingprivateDatabasetask> {
      let url = `/hosting/privateDatabase/${serviceName}/tasks/${id}`
  
      return this.client.request<HostingprivateDatabasetask>('GET', url)
    }
    */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * List the hosting.privateDatabase.user objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user#GET)
     */
    UserAllowedToConnectOnYourDatabases(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/user`;
        return this.client.request('GET', url);
    }
    /**
     * List the hosting.privateDatabase.user objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user#POST)
     */
    CreateANewUserOnYourService(password, serviceName, userName) {
        let url = `/hosting/privateDatabase/${serviceName}/user`;
        return this.client.request('POST', url, { password, userName });
    }
    /**
     * Users [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, userName: string): Promise<HostingprivateDatabaseuser> {
      let url = `/hosting/privateDatabase/${serviceName}/user/${userName}`
  
      return this.client.request<HostingprivateDatabaseuser>('GET', url)
    }
    */
    /**
     * Users [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D#DELETE)
     */
    DeleteAUser(serviceName, userName) {
        let url = `/hosting/privateDatabase/${serviceName}/user/${userName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/changePassword#POST)
     */
    RequestAChangePasswordForAUser(password, serviceName, userName) {
        let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * List the hosting.privateDatabase.grant objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/grant#GET)
     */
    UserGrantOnYourDatabases(serviceName, userName) {
        let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/grant`;
        return this.client.request('GET', url);
    }
    /**
     * List the hosting.privateDatabase.grant objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/grant#POST)
     */
    AddGrantOnADatabase(databaseName, grant, serviceName, userName) {
        let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/grant`;
        return this.client.request('POST', url, { databaseName, grant });
    }
    /**
     * Grants [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/grant/%7BdatabaseName%7D#GET)
     */
    /*
    GetThisObjectProperties(databaseName: string, serviceName: string, userName: string): Promise<HostingprivateDatabasegrant> {
      let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/grant/${databaseName}`
  
      return this.client.request<HostingprivateDatabasegrant>('GET', url)
    }
    */
    /**
     * Grants [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/grant/%7BdatabaseName%7D#DELETE)
     */
    DeleteAGrantOnADatabase(databaseName, serviceName, userName) {
        let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/grant/${databaseName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * update operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/user/%7BuserName%7D/grant/%7BdatabaseName%7D/update#POST)
     */
    UpdateUserGrant(databaseName, grant, serviceName, userName) {
        let url = `/hosting/privateDatabase/${serviceName}/user/${userName}/grant/${databaseName}/update`;
        return this.client.request('POST', url, { grant });
    }
    /**
     * webs operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/webs#GET)
     */
    ListLinkedWebs(serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/webs`;
        return this.client.request('GET', url);
    }
    /**
     * List the hosting.privateDatabase.whitelist objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/whitelist#GET)
     */
    WhitelistAllowedOnYourPrivatesql(serviceName, ip, service, sftp) {
        let url = `/hosting/privateDatabase/${serviceName}/whitelist?`;
        const queryParams = new query_params_1.default();
        if (ip) {
            queryParams.set('ip', ip.toString());
        }
        if (service) {
            queryParams.set('service', service.toString());
        }
        if (sftp) {
            queryParams.set('sftp', sftp.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the hosting.privateDatabase.whitelist objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/whitelist#POST)
     */
    CreateANewIPWhitelist(ip, serviceName, name, service, sftp) {
        let url = `/hosting/privateDatabase/${serviceName}/whitelist`;
        return this.client.request('POST', url, { ip, name, service, sftp });
    }
    /**
     * IP whitelisting for your instance [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/whitelist/%7Bip%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, serviceName: string): Promise<HostingprivateDatabasewhitelist> {
      let url = `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`
  
      return this.client.request<HostingprivateDatabasewhitelist>('GET', url)
    }
    */
    /**
     * IP whitelisting for your instance [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/whitelist/%7Bip%7D#PUT)
     */
    /*
    AlterThisObjectProperties(ip: string, serviceName: string, payload: HostingprivateDatabasewhitelist): Promise<void> {
      let url = `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * IP whitelisting for your instance [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/%7BserviceName%7D/whitelist/%7Bip%7D#DELETE)
     */
    DeleteAinIPWhitelist(ip, serviceName) {
        let url = `/hosting/privateDatabase/${serviceName}/whitelist/${ip}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Get available order capacitie [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/privateDatabase/availableOrderCapacities#GET)
     */
    GetAvailableOrderCapacitie(offer) {
        let url = `/hosting/privateDatabase/availableOrderCapacities?`;
        const queryParams = new query_params_1.default();
        if (offer) {
            queryParams.set('offer', offer.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.HostingPrivateDatabase = HostingPrivateDatabase;
//# sourceMappingURL=hosting.privateDatabase.js.map