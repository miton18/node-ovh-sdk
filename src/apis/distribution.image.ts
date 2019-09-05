// GENERATED SDK for distribution/image API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Information about installed package for a given image
 */
export interface Distributionimage {
  name: string
  packages: Distributionimagepackage[]
  properties: Distributionimageproperties
  service: Distributionimageservice
}

/**
 * An image package description
 */
export interface Distributionimagepackage {
  alias: string
  name: string
  version: string
}

/**
 * Description not available
 */
export interface Distributionimageproperties {
  category: Distributionimagepropertiescategory
}

/*
 * Description not available
 */
export enum Distributionimagepropertiescategory {
  NONE = 'none',
  BARE = 'bare',
  PANEL = 'panel',
  CMS = 'cms',
  DEVELOPMENT = 'development',
  DESKTOP = 'desktop'
}

/*
 * Description not available
 */
export enum Distributionimageservice {
  VPS = 'vps',
  DEDICATED = 'dedicated',
  CLOUD = 'cloud',
  DEDICATEDCLOUD = 'dedicatedCloud'
}


export class DistributionImage {
  constructor(private client: Client) {}

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/distribution/image/%7BserviceType%7D#GET)
   */
  ListImagesForAService(serviceType: Distributionimageservice): Promise<string[]> {
    let url = `/distribution/image/${serviceType}`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/distribution/image/%7BserviceType%7D/%7BimageName%7D#GET)
   */
  ShowImageDetails(imageName: string, serviceType: Distributionimageservice): Promise<Distributionimage> {
    let url = `/distribution/image/${serviceType}/${imageName}`

    return this.client.request<Distributionimage>('GET', url)
  }

}
