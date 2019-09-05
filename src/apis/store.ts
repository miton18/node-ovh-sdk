// GENERATED SDK for store API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  key: string
  value: T
}

/**
 * Contact information
 */
export interface MarketPlaceContact {
  city?: string
  country?: string
  email: string
  firstname: string
  id: string
  lastname: string
  phone?: string
  province?: string
  street?: string
  title: string
  zip?: string
}

/**
 * Document
 */
export interface MarketPlaceDocument {
  creationDate?: string
  getUrl?: string
  id: string
  name?: string
  putUrl?: string
  size?: string
  tags?: any
}

/**
 * partner
 */
export interface MarketPlacePartner {
  category?: string
  city?: string
  companyNationalIdentificationNumber?: string
  contact?: string
  country?: string
  description?: string
  language?: string
  legalForm?: string
  organisationDisplayName?: string
  organisationName?: string
  otherDetails?: string
  province?: string
  street?: string
  url?: string
  vat?: string
  zip?: string
}

/**
 * product
 */
export interface MarketPlacePartnerProduct {
  category: string
  description: string
  name: string
  otherDetails?: string
}


export class Store {
  constructor(private client: Client) {}

  /**
   * MarketPlaceContact [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact#GET)
   */
  ListCurrentCustomerContacts(): Promise<MarketPlaceContact[]> {
    let url = `/store/contact`

    return this.client.request<MarketPlaceContact[]>('GET', url)
  }

  /**
   * MarketPlaceContact [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact#POST)
   */
  CreateAMarketplaceContactForCurrentNic(email: string, firstname: string, lastname: string, title: string, city?: string, country?: string, phone?: string, province?: string, street?: string, zip?: string): Promise<MarketPlaceContact> {
    let url = `/store/contact`

    return this.client.request<MarketPlaceContact>('POST', url, {email, firstname, lastname, title, city, country, phone, province, street, zip})
  }

  /**
   * MarketPlaceContact.contactId [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D#GET)
   */
  GetContactDetails(contactId: string): Promise<MarketPlaceContact> {
    let url = `/store/contact/${contactId}`

    return this.client.request<MarketPlaceContact>('GET', url)
  }

  /**
   * MarketPlaceContact.contactId [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D#PUT)
   */
  EditContactInformation(contactId: string, city?: string, country?: string, email?: string, firstname?: string, lastname?: string, phone?: string, province?: string, street?: string, title?: string, zip?: string): Promise<MarketPlaceContact> {
    let url = `/store/contact/${contactId}`

    return this.client.request<MarketPlaceContact>('PUT', url, {city, country, email, firstname, lastname, phone, province, street, title, zip})
  }

  /**
   * MarketPlaceContact.contactId [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D#DELETE)
   */
  RemoveAnExistingContact(contactId: string): Promise<string> {
    let url = `/store/contact/${contactId}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * MarketPlaceContact.doc [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D/document#GET)
   */
  ListDocumentAssociatedWithContact(contactId: string): Promise<string[]> {
    let url = `/store/contact/${contactId}/document`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * MarketPlaceContact.doc [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D/document#POST)
   */
  AddADocumentToAContact(contactId: string, documentId: string): Promise<string[]> {
    let url = `/store/contact/${contactId}/document`

    return this.client.request<string[]>('POST', url, {documentId})
  }

  /**
   * MarketPlaceContact.doc_id [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D/document/%7BdocumentId%7D#DELETE)
   */
  UnlinkADocumentFromAContact(contactId: string, documentId: string): Promise<string[]> {
    let url = `/store/contact/${contactId}/document/${documentId}`

    return this.client.request<string[]>('DELETE', url)
  }

  /**
   * MarketPlaceDocument [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document#GET)
   */
  ListCurrentCustomerDocuments(): Promise<MarketPlaceDocument[]> {
    let url = `/store/document`

    return this.client.request<MarketPlaceDocument[]>('GET', url)
  }

  /**
   * MarketPlaceDocument [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document#POST)
   */
  CreateADocument(name: string, tags?: any): Promise<MarketPlaceDocument> {
    let url = `/store/document`

    return this.client.request<MarketPlaceDocument>('POST', url, {name, tags})
  }

  /**
   * MarketPlaceDocument.documentId [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document/%7BdocumentId%7D#GET)
   */
  GetDocumentInfo(documentId: string): Promise<MarketPlaceDocument> {
    let url = `/store/document/${documentId}`

    return this.client.request<MarketPlaceDocument>('GET', url)
  }

  /**
   * MarketPlaceDocument.documentId [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document/%7BdocumentId%7D#DELETE)
   */
  DeleteDocument(documentId: string): Promise<string> {
    let url = `/store/document/${documentId}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * MarketPlaceDocument [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document/cors#POST)
   */
  AddCORSSupportOnYourContainer(origin: string): Promise<void> {
    let url = `/store/document/cors`

    return this.client.request<void>('POST', url, {origin})
  }

  /**
   * MarketPlacePartner.search [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner#GET)
   */
  ListCurrentCustomerPartners(): Promise<MarketPlacePartner[]> {
    let url = `/store/partner`

    return this.client.request<MarketPlacePartner[]>('GET', url)
  }

  /**
   * MarketPlacePartner.search [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner#POST)
   */
  CreateAMarketplacePartnerForCurrentNic(city: string, country: string, legalForm: string, organisationName: string, province: string, street: string, zip: string, category?: string, companyNationalIdentificationNumber?: string, contact?: string, description?: string, language?: string, organisationDisplayName?: string, otherDetails?: string, _url?: string, vat?: string): Promise<MarketPlacePartner> {
    let url = `/store/partner`

    return this.client.request<MarketPlacePartner>('POST', url, {city, country, legalForm, organisationName, province, street, zip, category, companyNationalIdentificationNumber, contact, description, language, organisationDisplayName, otherDetails, _url, vat})
  }

  /**
   * MarketPlacePartner.get [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D#GET)
   */
  GetPartnerInfo(partnerId: string): Promise<MarketPlacePartner> {
    let url = `/store/partner/${partnerId}`

    return this.client.request<MarketPlacePartner>('GET', url)
  }

  /**
   * MarketPlacePartner.get [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D#PUT)
   */
  EditPartnerInfo(partnerId: string, category?: string, city?: string, companyNationalIdentificationNumber?: string, contact?: string, country?: string, description?: string, language?: string, legalForm?: string, organisationDisplayName?: string, organisationName?: string, otherDetails?: string, province?: string, street?: string, _url?: string, vat?: string, zip?: string): Promise<MarketPlacePartner> {
    let url = `/store/partner/${partnerId}`

    return this.client.request<MarketPlacePartner>('PUT', url, {category, city, companyNationalIdentificationNumber, contact, country, description, language, legalForm, organisationDisplayName, organisationName, otherDetails, province, street, _url, vat, zip})
  }

  /**
   * MarketPlacePartner.get [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D#DELETE)
   */
  DeletePartner(partnerId: string): Promise<string> {
    let url = `/store/partner/${partnerId}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * MarketPlacePartner.doc [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/document#GET)
   */
  ListDocumentAssociatedWithPartner(partnerId: string): Promise<string[]> {
    let url = `/store/partner/${partnerId}/document`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * MarketPlacePartner.doc [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/document#POST)
   */
  AddADocumentToAPartner(documentId: string, partnerId: string): Promise<string[]> {
    let url = `/store/partner/${partnerId}/document`

    return this.client.request<string[]>('POST', url, {documentId})
  }

  /**
   * MarketPlacePartner.doc_id [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/document/%7BdocumentId%7D#DELETE)
   */
  UnlinkADocumentFromAPartner(documentId: string, partnerId: string): Promise<string[]> {
    let url = `/store/partner/${partnerId}/document/${documentId}`

    return this.client.request<string[]>('DELETE', url)
  }

  /**
   * MarketPlacePartnerProduct.search [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product#GET)
   */
  ListPartnerProducts(partnerId: string): Promise<MarketPlacePartnerProduct[]> {
    let url = `/store/partner/${partnerId}/product`

    return this.client.request<MarketPlacePartnerProduct[]>('GET', url)
  }

  /**
   * MarketPlacePartnerProduct.search [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product#POST)
   */
  CreateANewProductForPartner(category: string, description: string, name: string, partnerId: string, otherDetails?: string): Promise<MarketPlacePartnerProduct> {
    let url = `/store/partner/${partnerId}/product`

    return this.client.request<MarketPlacePartnerProduct>('POST', url, {category, description, name, otherDetails})
  }

  /**
   * MarketPlacePartnerProduct.get [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D#GET)
   */
  /*
  GetPartnerInfo(partnerId: string, productId: string): Promise<MarketPlacePartnerProduct> {
    let url = `/store/partner/${partnerId}/product/${productId}`

    return this.client.request<MarketPlacePartnerProduct>('GET', url)
  }
  */

  /**
   * MarketPlacePartnerProduct.get [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D#PUT)
   */
  EditProductInfo(partnerId: string, productId: string, category?: string, description?: string, name?: string, otherDetails?: string): Promise<MarketPlacePartnerProduct> {
    let url = `/store/partner/${partnerId}/product/${productId}`

    return this.client.request<MarketPlacePartnerProduct>('PUT', url, {category, description, name, otherDetails})
  }

  /**
   * MarketPlacePartnerProduct.get [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D#DELETE)
   */
  DeleteProduct(partnerId: string, productId: string): Promise<string> {
    let url = `/store/partner/${partnerId}/product/${productId}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * MarketPlacePartnerProduct.doc [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D/document#GET)
   */
  ListDocumentAssociatedWithProduct(partnerId: string, productId: string): Promise<string[]> {
    let url = `/store/partner/${partnerId}/product/${productId}/document`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * MarketPlacePartnerProduct.doc [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D/document#POST)
   */
  AddADocumentToAProduct(documentId: string, partnerId: string, productId: string): Promise<string[]> {
    let url = `/store/partner/${partnerId}/product/${productId}/document`

    return this.client.request<string[]>('POST', url, {documentId})
  }

  /**
   * MarketPlacePartnerProduct.doc_id [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D/document/%7BdocumentId%7D#DELETE)
   */
  UnlinkADocumentFromAProduct(documentId: string, partnerId: string, productId: string): Promise<string[]> {
    let url = `/store/partner/${partnerId}/product/${productId}/document/${documentId}`

    return this.client.request<string[]>('DELETE', url)
  }

}
