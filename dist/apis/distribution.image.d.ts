import { Client } from '../client';
/**
 * Information about installed package for a given image
 */
export interface Distributionimage {
    name: string;
    packages: Distributionimagepackage[];
    properties: Distributionimageproperties;
    service: Distributionimageservice;
}
/**
 * An image package description
 */
export interface Distributionimagepackage {
    alias: string;
    name: string;
    version: string;
}
/**
 * Description not available
 */
export interface Distributionimageproperties {
    category: Distributionimagepropertiescategory;
}
export declare enum Distributionimagepropertiescategory {
    NONE = "none",
    BARE = "bare",
    PANEL = "panel",
    CMS = "cms",
    DEVELOPMENT = "development",
    DESKTOP = "desktop"
}
export declare enum Distributionimageservice {
    VPS = "vps",
    DEDICATED = "dedicated",
    CLOUD = "cloud",
    DEDICATEDCLOUD = "dedicatedCloud"
}
export declare class DistributionImage {
    private client;
    constructor(client: Client);
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/distribution/image/%7BserviceType%7D#GET)
     */
    ListImagesForAService(serviceType: Distributionimageservice): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/distribution/image/%7BserviceType%7D/%7BimageName%7D#GET)
     */
    ShowImageDetails(imageName: string, serviceType: Distributionimageservice): Promise<Distributionimage>;
}
//# sourceMappingURL=distribution.image.d.ts.map