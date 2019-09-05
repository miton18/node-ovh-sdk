"use strict";
// GENERATED SDK for distribution/image API
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Description not available
 */
var Distributionimagepropertiescategory;
(function (Distributionimagepropertiescategory) {
    Distributionimagepropertiescategory["NONE"] = "none";
    Distributionimagepropertiescategory["BARE"] = "bare";
    Distributionimagepropertiescategory["PANEL"] = "panel";
    Distributionimagepropertiescategory["CMS"] = "cms";
    Distributionimagepropertiescategory["DEVELOPMENT"] = "development";
    Distributionimagepropertiescategory["DESKTOP"] = "desktop";
})(Distributionimagepropertiescategory = exports.Distributionimagepropertiescategory || (exports.Distributionimagepropertiescategory = {}));
/*
 * Description not available
 */
var Distributionimageservice;
(function (Distributionimageservice) {
    Distributionimageservice["VPS"] = "vps";
    Distributionimageservice["DEDICATED"] = "dedicated";
    Distributionimageservice["CLOUD"] = "cloud";
    Distributionimageservice["DEDICATEDCLOUD"] = "dedicatedCloud";
})(Distributionimageservice = exports.Distributionimageservice || (exports.Distributionimageservice = {}));
class DistributionImage {
    constructor(client) {
        this.client = client;
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/distribution/image/%7BserviceType%7D#GET)
     */
    ListImagesForAService(serviceType) {
        let url = `/distribution/image/${serviceType}`;
        return this.client.request('GET', url);
    }
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/distribution/image/%7BserviceType%7D/%7BimageName%7D#GET)
     */
    ShowImageDetails(imageName, serviceType) {
        let url = `/distribution/image/${serviceType}/${imageName}`;
        return this.client.request('GET', url);
    }
}
exports.DistributionImage = DistributionImage;
//# sourceMappingURL=distribution.image.js.map