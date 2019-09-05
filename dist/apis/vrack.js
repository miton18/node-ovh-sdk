"use strict";
// GENERATED SDK for vrack API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
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
 * Possible values for vrack zone
 */
var VrackVrackZone;
(function (VrackVrackZone) {
    VrackVrackZone["BHS"] = "bhs";
    VrackVrackZone["FRA1"] = "fra1";
    VrackVrackZone["GRA"] = "gra";
    VrackVrackZone["LON1"] = "lon1";
    VrackVrackZone["PDX1"] = "pdx1";
    VrackVrackZone["RBX"] = "rbx";
    VrackVrackZone["SBG"] = "sbg";
    VrackVrackZone["SGP1"] = "sgp1";
    VrackVrackZone["SYD1"] = "syd1";
    VrackVrackZone["WAS1"] = "was1";
    VrackVrackZone["WAW"] = "waw";
})(VrackVrackZone = exports.VrackVrackZone || (exports.VrackVrackZone = {}));
class Vrack {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the VRACK service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack#GET)
     */
    ListAvailableServices() {
        let url = `/vrack`;
        return this.client.request('GET', url);
    }
    /**
     * vrack [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/vrack/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * vrack [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/vrack/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * allowedServices operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/allowedServices#GET)
     */
    ListAllServicesAllowedInThisVrack(serviceName) {
        let url = `/vrack/${serviceName}/allowedServices`;
        return this.client.request('GET', url);
    }
    /**
     * List the vrack.cloudProject objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/cloudProject#GET)
     */
    VrackForPublicCloudProject(serviceName) {
        let url = `/vrack/${serviceName}/cloudProject`;
        return this.client.request('GET', url);
    }
    /**
     * List the vrack.cloudProject objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/cloudProject#POST)
     */
    AddAPublicCloudProjectToThisVrack(project, serviceName) {
        let url = `/vrack/${serviceName}/cloudProject`;
        return this.client.request('POST', url, { project });
    }
    /**
     * PublicCloud project in vrack [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/cloudProject/%7Bproject%7D#GET)
     */
    /*
    GetThisObjectProperties(project: string, serviceName: string): Promise<VrackcloudProject> {
      let url = `/vrack/${serviceName}/cloudProject/${project}`
  
      return this.client.request<VrackcloudProject>('GET', url)
    }
    */
    /**
     * PublicCloud project in vrack [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/cloudProject/%7Bproject%7D#DELETE)
     */
    RemoveThisPublicCloudProjectFromThisVrack(project, serviceName) {
        let url = `/vrack/${serviceName}/cloudProject/${project}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the vrack.dedicatedCloud objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloud#GET)
     */
    VrackDedicatedCloudVmNetwork(serviceName) {
        let url = `/vrack/${serviceName}/dedicatedCloud`;
        return this.client.request('GET', url);
    }
    /**
     * List the vrack.dedicatedCloud objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloud#POST)
     */
    AddADedicatedCloudVmNetworkToThisVrack(dedicatedCloud, serviceName) {
        let url = `/vrack/${serviceName}/dedicatedCloud`;
        return this.client.request('POST', url, { dedicatedCloud });
    }
    /**
     * vrack dedicated cloud interface [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloud/%7BdedicatedCloud%7D#GET)
     */
    /*
    GetThisObjectProperties(dedicatedCloud: string, serviceName: string): Promise<VrackdedicatedCloud> {
      let url = `/vrack/${serviceName}/dedicatedCloud/${dedicatedCloud}`
  
      return this.client.request<VrackdedicatedCloud>('GET', url)
    }
    */
    /**
     * vrack dedicated cloud interface [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloud/%7BdedicatedCloud%7D#DELETE)
     */
    RemoveThisDedicatedCloudVmNetworkFromThisVrack(dedicatedCloud, serviceName) {
        let url = `/vrack/${serviceName}/dedicatedCloud/${dedicatedCloud}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the vrack.pccDatacenter objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloudDatacenter#GET)
     */
    VrackDedicatedCloudDatacenter(serviceName) {
        let url = `/vrack/${serviceName}/dedicatedCloudDatacenter`;
        return this.client.request('GET', url);
    }
    /**
     * vrack datacenter interface [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloudDatacenter/%7Bdatacenter%7D#GET)
     */
    /*
    GetThisObjectProperties(datacenter: string, serviceName: string): Promise<VrackpccDatacenter> {
      let url = `/vrack/${serviceName}/dedicatedCloudDatacenter/${datacenter}`
  
      return this.client.request<VrackpccDatacenter>('GET', url)
    }
    */
    /**
     * allowedVrack operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloudDatacenter/%7Bdatacenter%7D/allowedVrack#GET)
     */
    VracksAllowedForYourDedicatedCloudDatacenter(datacenter, serviceName) {
        let url = `/vrack/${serviceName}/dedicatedCloudDatacenter/${datacenter}/allowedVrack`;
        return this.client.request('GET', url);
    }
    /**
     * move operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloudDatacenter/%7Bdatacenter%7D/move#POST)
     */
    MoveYourDedicatedCloudDatacenterFromAVrackToAnother(datacenter, serviceName, targetServiceName) {
        let url = `/vrack/${serviceName}/dedicatedCloudDatacenter/${datacenter}/move`;
        return this.client.request('POST', url, { targetServiceName });
    }
    /**
     * List the vrack.dedicatedConnect objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedConnect#GET)
     */
    VrackDedicatedConnect(serviceName) {
        let url = `/vrack/${serviceName}/dedicatedConnect`;
        return this.client.request('GET', url);
    }
    /**
     * vrack dedicated connect interface [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedConnect/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(name: string, serviceName: string): Promise<VrackdedicatedConnect> {
      let url = `/vrack/${serviceName}/dedicatedConnect/${name}`
  
      return this.client.request<VrackdedicatedConnect>('GET', url)
    }
    */
    /**
     * vrack dedicated connect interface [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedConnect/%7Bname%7D#PUT)
     */
    /*
    AlterThisObjectProperties(name: string, serviceName: string, payload: VrackdedicatedConnect): Promise<void> {
      let url = `/vrack/${serviceName}/dedicatedConnect/${name}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the vrack.dedicatedServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServer#GET)
     */
    VrackForDedicatedServer(serviceName) {
        let url = `/vrack/${serviceName}/dedicatedServer`;
        return this.client.request('GET', url);
    }
    /**
     * List the vrack.dedicatedServer objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServer#POST)
     */
    AddADedicatedServerToThisVrack(dedicatedServer, serviceName) {
        let url = `/vrack/${serviceName}/dedicatedServer`;
        return this.client.request('POST', url, { dedicatedServer });
    }
    /**
     * vrack dedicated server interfaces [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServer/%7BdedicatedServer%7D#GET)
     */
    /*
    GetThisObjectProperties(dedicatedServer: string, serviceName: string): Promise<VrackdedicatedServer> {
      let url = `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}`
  
      return this.client.request<VrackdedicatedServer>('GET', url)
    }
    */
    /**
     * vrack dedicated server interfaces [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServer/%7BdedicatedServer%7D#DELETE)
     */
    RemoveThisServerFromThisVrack(dedicatedServer, serviceName) {
        let url = `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}`;
        return this.client.request('DELETE', url);
    }
    /**
     * mrtg operations [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServer/%7BdedicatedServer%7D/mrtg#GET)
     */
    RetrieveVrackTrafficGraphValues(dedicatedServer, period, serviceName, type) {
        let url = `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}/mrtg?`;
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
     * List the vrack.dedicatedServerInterface objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServerInterface#GET)
     */
    VrackForDedicatedServerInterface(serviceName) {
        let url = `/vrack/${serviceName}/dedicatedServerInterface`;
        return this.client.request('GET', url);
    }
    /**
     * List the vrack.dedicatedServerInterface objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServerInterface#POST)
     */
    AddADedicatedServerInterfaceToThisVrack(dedicatedServerInterface, serviceName) {
        let url = `/vrack/${serviceName}/dedicatedServerInterface`;
        return this.client.request('POST', url, { dedicatedServerInterface });
    }
    /**
     * vrack dedicated server interfaces [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServerInterface/%7BdedicatedServerInterface%7D#GET)
     */
    /*
    GetThisObjectProperties(dedicatedServerInterface: string, serviceName: string): Promise<VrackdedicatedServerInterface> {
      let url = `/vrack/${serviceName}/dedicatedServerInterface/${dedicatedServerInterface}`
  
      return this.client.request<VrackdedicatedServerInterface>('GET', url)
    }
    */
    /**
     * vrack dedicated server interfaces [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServerInterface/%7BdedicatedServerInterface%7D#DELETE)
     */
    RemoveThisServerInterfaceFromThisVrack(dedicatedServerInterface, serviceName) {
        let url = `/vrack/${serviceName}/dedicatedServerInterface/${dedicatedServerInterface}`;
        return this.client.request('DELETE', url);
    }
    /**
     * dedicatedServerInterfaceDetails operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServerInterfaceDetails#GET)
     */
    DetailsForAllDedicatedServerInterfacesInThisVrack(serviceName) {
        let url = `/vrack/${serviceName}/dedicatedServerInterfaceDetails`;
        return this.client.request('GET', url);
    }
    /**
     * List the vrack.ip objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip#GET)
     */
    VrackForIPBlocks(serviceName) {
        let url = `/vrack/${serviceName}/ip`;
        return this.client.request('GET', url);
    }
    /**
     * List the vrack.ip objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip#POST)
     */
    AddAnIPBlockToThisVrack(block, serviceName) {
        let url = `/vrack/${serviceName}/ip`;
        return this.client.request('POST', url, { block });
    }
    /**
     * IP block in vrack [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip/%7Bip%7D#GET)
     */
    /*
    GetThisObjectProperties(ip: string, serviceName: string): Promise<Vrackip> {
      let url = `/vrack/${serviceName}/ip/${ip}`
  
      return this.client.request<Vrackip>('GET', url)
    }
    */
    /**
     * IP block in vrack [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip/%7Bip%7D#DELETE)
     */
    RemoveThisIPBlockFromThisVrack(ip, serviceName) {
        let url = `/vrack/${serviceName}/ip/${ip}`;
        return this.client.request('DELETE', url);
    }
    /**
     * announceInZone operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip/%7Bip%7D/announceInZone#POST)
     */
    AnnounceIPToZoneForVrack(ip, serviceName, zone) {
        let url = `/vrack/${serviceName}/ip/${ip}/announceInZone`;
        return this.client.request('POST', url, { zone });
    }
    /**
     * availableZone operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip/%7Bip%7D/availableZone#GET)
     */
    ZoneAvailableToAnnounceYourBlock(ip, serviceName) {
        let url = `/vrack/${serviceName}/ip/${ip}/availableZone`;
        return this.client.request('GET', url);
    }
    /**
     * List the vrack.iplb objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ipLoadbalancing#GET)
     */
    VrackForIpLoadbalancing(serviceName) {
        let url = `/vrack/${serviceName}/ipLoadbalancing`;
        return this.client.request('GET', url);
    }
    /**
     * List the vrack.iplb objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ipLoadbalancing#POST)
     */
    AddAnIpLoadbalancingToThisVrack(ipLoadbalancing, serviceName) {
        let url = `/vrack/${serviceName}/ipLoadbalancing`;
        return this.client.request('POST', url, { ipLoadbalancing });
    }
    /**
     * ipLoadbalancing in vrack [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ipLoadbalancing/%7BipLoadbalancing%7D#GET)
     */
    /*
    GetThisObjectProperties(ipLoadbalancing: string, serviceName: string): Promise<Vrackiplb> {
      let url = `/vrack/${serviceName}/ipLoadbalancing/${ipLoadbalancing}`
  
      return this.client.request<Vrackiplb>('GET', url)
    }
    */
    /**
     * ipLoadbalancing in vrack [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ipLoadbalancing/%7BipLoadbalancing%7D#DELETE)
     */
    RemoveThisIpLoadbalancingFromThisVrack(ipLoadbalancing, serviceName) {
        let url = `/vrack/${serviceName}/ipLoadbalancing/${ipLoadbalancing}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the vrack.legacyVrack objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/legacyVrack#GET)
     */
    VrackForLegacyVrack(serviceName) {
        let url = `/vrack/${serviceName}/legacyVrack`;
        return this.client.request('GET', url);
    }
    /**
     * List the vrack.legacyVrack objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/legacyVrack#POST)
     */
    AddALegacyVrackVrackXXXXToThisVrackPnXXXX(legacyVrack, serviceName) {
        let url = `/vrack/${serviceName}/legacyVrack`;
        return this.client.request('POST', url, { legacyVrack });
    }
    /**
     * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/legacyVrack/%7BlegacyVrack%7D#GET)
     */
    /*
    GetThisObjectProperties(legacyVrack: string, serviceName: string): Promise<VracklegacyVrack> {
      let url = `/vrack/${serviceName}/legacyVrack/${legacyVrack}`
  
      return this.client.request<VracklegacyVrack>('GET', url)
    }
    */
    /**
     * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX) [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/legacyVrack/%7BlegacyVrack%7D#DELETE)
     */
    RemoveThisLegacyVrackVrackXXXXFromThisVrackPnXXXX(legacyVrack, serviceName) {
        let url = `/vrack/${serviceName}/legacyVrack/${legacyVrack}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Details about a non-expiring Service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesNonExpiringService> {
      let url = `/vrack/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesNonExpiringService>('GET', url)
    }
    */
    /**
     * List the vrack.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/task#GET)
     */
    VrackTasks(serviceName) {
        let url = `/vrack/${serviceName}/task`;
        return this.client.request('GET', url);
    }
}
exports.Vrack = Vrack;
//# sourceMappingURL=vrack.js.map