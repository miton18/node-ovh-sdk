import { Client } from '../client';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
}
/**
 * Desktop As A Service
 */
export interface Deskaasdeskaas {
    alias: string;
    dataDisk: any;
    ip?: string;
    os: string;
    planCode: string;
    ram: any;
    reference: string;
    serviceName: string;
    state: DeskaasState;
    url?: string;
    vcpu: number;
}
/**
 * A structure describing the current password policy for your Dedicated Cloud
 */
export interface DeskaaspasswordPolicy {
    deniedChars: string[];
    digitMandatory: boolean;
    letterMandatory: boolean;
    lowercaseLetterMandatory: boolean;
    maxLength: number;
    minLength: number;
    specialMandatory: boolean;
    uppercaseLetterMandatory: boolean;
}
export declare enum DeskaasState {
    AVAILABLE = "available",
    DELIVERED = "delivered",
    DISABLED = "disabled",
    ERROR = "error",
    RESERVED = "reserved"
}
/**
 * Operation on a Desktop As A Service component
 */
export interface DeskaasTask {
    description?: string;
    lastModificationDate?: string;
    name: string;
    progress: number;
    state: DeskaasTaskState;
    taskId: number;
}
export declare enum DeskaasTaskState {
    CANCELED = "canceled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    FIXING = "fixing",
    TOCANCEL = "toCancel",
    TOCREATE = "toCreate",
    TODO = "todo",
    UNKNOWN = "unknown",
    WAITINGFORCHILDS = "waitingForChilds",
    WAITINGTODO = "waitingTodo"
}
/**
 * Desktop As A Service User
 */
export interface DeskaasUser {
    activationState: DeskaasuserActivationState;
    email: string;
    name: string;
    state: DeskaasuserState;
    userId: number;
}
export declare enum DeskaasuserActivationState {
    DISABLED = "disabled",
    DISABLING = "disabling",
    ENABLED = "enabled",
    ENABLING = "enabling",
    TODISABLE = "toDisable",
    TOENABLE = "toEnable"
}
export declare enum DeskaasuserState {
    CREATING = "creating",
    DELETING = "deleting",
    DELIVERED = "delivered",
    ERROR = "error"
}
export declare enum ServiceRenewalType {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
    automatic: boolean;
    deleteAtExpiration: boolean;
    forced: boolean;
    manualPayment?: boolean;
    period?: number;
}
export declare enum ServiceState {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export declare enum ServiceTerminationFutureUse {
    NOT_REPLACING_SERVICE = "NOT_REPLACING_SERVICE",
    OTHER = "OTHER",
    SUBSCRIBE_AN_OTHER_SERVICE = "SUBSCRIBE_AN_OTHER_SERVICE",
    SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
    SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
}
export declare enum ServiceTerminationReason {
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
/**
 * Details about a Service
 */
export interface ServicesService {
    canDeleteAtExpiration: boolean;
    contactAdmin: string;
    contactBilling: string;
    contactTech: string;
    creation: string;
    domain: string;
    engagedUpTo?: string;
    expiration: string;
    possibleRenewPeriod?: number[];
    renew?: ServiceRenewType;
    renewalType: ServiceRenewalType;
    serviceId: number;
    status: ServiceState;
}
export declare class Deskaas {
    private client;
    constructor(client: Client);
    /**
     * Operations about the DESKAAS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Desktop As A Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<Deskaasdeskaas>;
    /**
     * changeAlias operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/changeAlias#POST)
     */
    ChangeTheVirtualDesktopAlias(alias: string, serviceName: string): Promise<DeskaasTask>;
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUse, reason?: ServiceTerminationReason): Promise<string>;
    /**
     * console operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/console#POST)
     */
    NewConsoleAccess(serviceName: string): Promise<DeskaasTask>;
    /**
     * passwordPolicy operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/passwordPolicy#GET)
     */
    GetTheCurrentPasswordPolicyForYourDesktopAsAService(serviceName: string): Promise<DeskaaspasswordPolicy>;
    /**
     * reboot operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/reboot#POST)
     */
    RebootTheOperatingSystemOfTheCloudDesktop(serviceName: string): Promise<DeskaasTask>;
    /**
     * refresh operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/refresh#POST)
     */
    RefreshTheOperatingSystemOfTheDesktopAsAServiceAllYourPersonnalDataAreKept(serviceName: string): Promise<DeskaasTask>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * List the deskaas.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/task#GET)
     */
    TasksAssociatedWithThisDesktopAsAService(serviceName: string, state?: DeskaasTaskState): Promise<number[]>;
    /**
     * Operation on a Desktop As A Service component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName: string): Promise<string>;
    /**
     * upgrade operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/upgrade#POST)
     */
    UpgradingTheDesktopAsAServiceToAnotherProfileTheVirtualDesktopWillNotBeAvailableDuringUpgradeAndHasToBeRestartedYouCannotDowngradeAVirtualDesktop(serviceName: string, newReference?: string, planCode?: string): Promise<DeskaasTask>;
    /**
     * Desktop As A Service User [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user#GET)
     */
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user/changePassword#POST)
     */
    ChangeDesktopAsAServiceUserPassword(serviceName: string, password?: string): Promise<DeskaasTask>;
    /**
     * changeProperties operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user/changeProperties#POST)
     */
    ChangeDesktopAsAServiceUserProperties(serviceName: string, email?: string): Promise<DeskaasTask>;
    /**
     * List the deskaas.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/deskaas/%7BserviceName%7D/user/task#GET)
     */
    TasksAssociatedWithThisUser(serviceName: string, state?: DeskaasTaskState): Promise<number[]>;
}
//# sourceMappingURL=deskaas.d.ts.map