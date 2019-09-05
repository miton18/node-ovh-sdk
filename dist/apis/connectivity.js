"use strict";
// GENERATED SDK for connectivity API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Activation type, for copper only
 */
var ConnectivityeligibilityActivationType;
(function (ConnectivityeligibilityActivationType) {
    ConnectivityeligibilityActivationType["ACTIVATE"] = "activate";
    ConnectivityeligibilityActivationType["CREATE"] = "create";
    ConnectivityeligibilityActivationType["CREATENEIGHBOUR"] = "createNeighbour";
})(ConnectivityeligibilityActivationType = exports.ConnectivityeligibilityActivationType || (exports.ConnectivityeligibilityActivationType = {}));
/*
 * Building type
 */
var ConnectivityeligibilityBuildingType;
(function (ConnectivityeligibilityBuildingType) {
    ConnectivityeligibilityBuildingType["BUILDING"] = "BUILDING";
    ConnectivityeligibilityBuildingType["HOUSE"] = "HOUSE";
})(ConnectivityeligibilityBuildingType = exports.ConnectivityeligibilityBuildingType || (exports.ConnectivityeligibilityBuildingType = {}));
/*
 * Endpoint reference type
 */
var ConnectivityeligibilityEndpointReferenceType;
(function (ConnectivityeligibilityEndpointReferenceType) {
    ConnectivityeligibilityEndpointReferenceType["BUILDING"] = "building";
    ConnectivityeligibilityEndpointReferenceType["LINENUMBER"] = "lineNumber";
    ConnectivityeligibilityEndpointReferenceType["OTP"] = "otp";
})(ConnectivityeligibilityEndpointReferenceType = exports.ConnectivityeligibilityEndpointReferenceType || (exports.ConnectivityeligibilityEndpointReferenceType = {}));
/*
 * Line status
 */
var ConnectivityeligibilityLineStatus;
(function (ConnectivityeligibilityLineStatus) {
    ConnectivityeligibilityLineStatus["ACTIVE"] = "active";
    ConnectivityeligibilityLineStatus["INACTIVE"] = "inactive";
})(ConnectivityeligibilityLineStatus = exports.ConnectivityeligibilityLineStatus || (exports.ConnectivityeligibilityLineStatus = {}));
/*
 * Offer product provider
 */
var ConnectivityeligibilityOfferProductProvider;
(function (ConnectivityeligibilityOfferProductProvider) {
    ConnectivityeligibilityOfferProductProvider["AXIONE"] = "AXIONE";
    ConnectivityeligibilityOfferProductProvider["KOSC"] = "KOSC";
    ConnectivityeligibilityOfferProductProvider["ORANGE"] = "ORANGE";
    ConnectivityeligibilityOfferProductProvider["SFR"] = "SFR";
})(ConnectivityeligibilityOfferProductProvider = exports.ConnectivityeligibilityOfferProductProvider || (exports.ConnectivityeligibilityOfferProductProvider = {}));
/*
 * Offer product type
 */
var ConnectivityeligibilityOfferProductType;
(function (ConnectivityeligibilityOfferProductType) {
    ConnectivityeligibilityOfferProductType["ADSL"] = "ADSL";
    ConnectivityeligibilityOfferProductType["FTTH"] = "FTTH";
    ConnectivityeligibilityOfferProductType["SDSL"] = "SDSL";
    ConnectivityeligibilityOfferProductType["VDSL"] = "VDSL";
})(ConnectivityeligibilityOfferProductType = exports.ConnectivityeligibilityOfferProductType || (exports.ConnectivityeligibilityOfferProductType = {}));
/*
 * Offer product unbundling type
 */
var ConnectivityeligibilityOfferProductUnbundlingType;
(function (ConnectivityeligibilityOfferProductUnbundlingType) {
    ConnectivityeligibilityOfferProductUnbundlingType["FULL"] = "full";
    ConnectivityeligibilityOfferProductUnbundlingType["PARTIAL"] = "partial";
})(ConnectivityeligibilityOfferProductUnbundlingType = exports.ConnectivityeligibilityOfferProductUnbundlingType || (exports.ConnectivityeligibilityOfferProductUnbundlingType = {}));
/*
 * Portability type
 */
var ConnectivityeligibilityPortabilityType;
(function (ConnectivityeligibilityPortabilityType) {
    ConnectivityeligibilityPortabilityType["PORTIN"] = "portin";
    ConnectivityeligibilityPortabilityType["PORTINBACK"] = "portinback";
    ConnectivityeligibilityPortabilityType["PORTOUT"] = "portout";
    ConnectivityeligibilityPortabilityType["SUBSEQUENT"] = "subsequent";
    ConnectivityeligibilityPortabilityType["SUBSQUENTPORTIN"] = "subsquentportin";
})(ConnectivityeligibilityPortabilityType = exports.ConnectivityeligibilityPortabilityType || (exports.ConnectivityeligibilityPortabilityType = {}));
/*
 * Generic incident status
 */
var ConnectivitymonitoringGenericIncidentStatus;
(function (ConnectivitymonitoringGenericIncidentStatus) {
    ConnectivitymonitoringGenericIncidentStatus["DETECTED"] = "detected";
    ConnectivitymonitoringGenericIncidentStatus["VALIDATED"] = "validated";
    ConnectivitymonitoringGenericIncidentStatus["CLOSED"] = "closed";
})(ConnectivitymonitoringGenericIncidentStatus = exports.ConnectivitymonitoringGenericIncidentStatus || (exports.ConnectivitymonitoringGenericIncidentStatus = {}));
/*
 * Operator
 */
var ConnectivityOperator;
(function (ConnectivityOperator) {
    ConnectivityOperator["OVH"] = "OVH";
    ConnectivityOperator["KOSC"] = "KOSC";
    ConnectivityOperator["SFR"] = "SFR";
    ConnectivityOperator["ORANGE"] = "ORANGE";
    ConnectivityOperator["AXIONE"] = "AXIONE";
})(ConnectivityOperator = exports.ConnectivityOperator || (exports.ConnectivityOperator = {}));
/*
 * AsyncTask status
 */
var AsyncTaskStatus;
(function (AsyncTaskStatus) {
    AsyncTaskStatus["ERROR"] = "error";
    AsyncTaskStatus["OK"] = "ok";
    AsyncTaskStatus["PENDING"] = "pending";
})(AsyncTaskStatus = exports.AsyncTaskStatus || (exports.AsyncTaskStatus = {}));
class Connectivity {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get the details for a building [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/buildingDetails#POST)
     */
    GetTheDetailsForABuilding(building) {
        let url = `/connectivity/eligibility/search/buildingDetails`;
        return this.client.request('POST', url, { building });
    }
    /**
     * Get all buildings for a specific address [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/buildings#POST)
     */
    GetAllBuildingsForASpecificAddress(streetCode, streetNumber) {
        let url = `/connectivity/eligibility/search/buildings`;
        return this.client.request('POST', url, { streetCode, streetNumber });
    }
    /**
     * Get building references from a given line number [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/buildingsByLine#POST)
     */
    GetBuildingReferencesFromAGivenLineNumber(lineNumber, status) {
        let url = `/connectivity/eligibility/search/buildingsByLine`;
        return this.client.request('POST', url, { lineNumber, status });
    }
    /**
     * Get all localities linked to a zip code [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/cities#POST)
     */
    GetAllLocalitiesLinkedToAZipCode(zipCode) {
        let url = `/connectivity/eligibility/search/cities`;
        return this.client.request('POST', url, { zipCode });
    }
    /**
     * Search for active and inactive lines at an address. It will search for active lines only if the owner name is specified [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/lines#POST)
     */
    SearchForActiveAndInactiveLinesAtAnAddressItWillSearchForActiveLinesOnlyIfTheOwnerNameIsSpecified(streetCode, streetNumber, ownerName) {
        let url = `/connectivity/eligibility/search/lines`;
        return this.client.request('POST', url, { streetCode, streetNumber, ownerName });
    }
    /**
     * Search for available line creation meeting time slots, for copper only [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/meetings#POST)
     */
    SearchForAvailableLineCreationMeetingTimeSlotsForCopperOnly(eligibilityReference, productCode) {
        let url = `/connectivity/eligibility/search/meetings`;
        return this.client.request('POST', url, { eligibilityReference, productCode });
    }
    /**
     * Get the available street numbers for a given street code (unique identifier of a street you can get with the method POST /connectivity/eligibility/search/streets) [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/streetNumbers#POST)
     */
    GetTheAvailableStreetNumbersForAGivenStreetCodeUniqueIdentifierOfAStreetYouCanGetWithTheMethodPOSTConnectivityeligibilitysearchstreets(streetCode) {
        let url = `/connectivity/eligibility/search/streetNumbers`;
        return this.client.request('POST', url, { streetCode });
    }
    /**
     * Get all street linked to a locality [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/search/streets#POST)
     */
    GetAllStreetLinkedToALocality(inseeCode) {
        let url = `/connectivity/eligibility/search/streets`;
        return this.client.request('POST', url, { inseeCode });
    }
    /**
     * Get an eligibility by its reference [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test#GET)
     */
    GetAnEligibilityByItsReference(eligibilityReference) {
        let url = `/connectivity/eligibility/test?`;
        const queryParams = new query_params_1.default();
        if (eligibilityReference) {
            queryParams.set('eligibilityReference', eligibilityReference);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Do an eligibility for an address, if no line exist [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/address#POST)
     */
    DoAnEligibilityForAnAddressIfNoLineExist(streetCode, streetNumber) {
        let url = `/connectivity/eligibility/test/address`;
        return this.client.request('POST', url, { streetCode, streetNumber });
    }
    /**
     * Do an eligibility for an address, if no line exist. Partners only. [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/address/partners#POST)
     */
    DoAnEligibilityForAnAddressIfNoLineExistPartnersOnly(streetCode, streetNumber) {
        let url = `/connectivity/eligibility/test/address/partners`;
        return this.client.request('POST', url, { streetCode, streetNumber });
    }
    /**
     * Do an eligibility test on a building, for fiber only [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/building#POST)
     */
    DoAnEligibilityTestOnABuildingForFiberOnly(building) {
        let url = `/connectivity/eligibility/test/building`;
        return this.client.request('POST', url, { building });
    }
    /**
     * Do an eligibility test on a line number, for copper only [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/line#POST)
     */
    DoAnEligibilityTestOnALineNumberForCopperOnly(lineNumber, status) {
        let url = `/connectivity/eligibility/test/line`;
        return this.client.request('POST', url, { lineNumber, status });
    }
    /**
     * Do an eligibility test on a line number, for copper only. Partners only. [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/line/partners#POST)
     */
    DoAnEligibilityTestOnALineNumberForCopperOnlyPartnersOnly(lineNumber, status) {
        let url = `/connectivity/eligibility/test/line/partners`;
        return this.client.request('POST', url, { lineNumber, status });
    }
    /**
     * Do an eligibility test on an OTP (Optical Termination Panel), for fiber only [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/eligibility/test/otp#POST)
     */
    DoAnEligibilityTestOnAnOTPOpticalTerminationPanelForFiberOnly(otp) {
        let url = `/connectivity/eligibility/test/otp`;
        return this.client.request('POST', url, { otp });
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/monitoring/genericIncident/partners#GET)
     */
    ListDetectedValidatedAndRecentlyClosedGenericIncidentsForPartnersOnly(creationDate, endDate, status) {
        let url = `/connectivity/monitoring/genericIncident/partners?`;
        const queryParams = new query_params_1.default();
        if (creationDate) {
            queryParams.set('creationDate', creationDate.toString());
        }
        if (endDate) {
            queryParams.set('endDate', endDate.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/connectivity/monitoring/genericIncident/public#GET)
     */
    ListValidatedAndRecentlyClosedGenericIncidents(creationDate, endDate, status) {
        let url = `/connectivity/monitoring/genericIncident/public?`;
        const queryParams = new query_params_1.default();
        if (creationDate) {
            queryParams.set('creationDate', creationDate.toString());
        }
        if (endDate) {
            queryParams.set('endDate', endDate.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.Connectivity = Connectivity;
//# sourceMappingURL=connectivity.js.map