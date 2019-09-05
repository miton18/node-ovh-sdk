import { Client } from '../client';
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
    key: string;
    value: T;
}
/**
 * Contact information
 */
export interface MarketPlaceContact {
    city?: string;
    country?: string;
    email: string;
    firstname: string;
    id: string;
    lastname: string;
    phone?: string;
    province?: string;
    street?: string;
    title: string;
    zip?: string;
}
/**
 * Document
 */
export interface MarketPlaceDocument {
    creationDate?: string;
    getUrl?: string;
    id: string;
    name?: string;
    putUrl?: string;
    size?: string;
    tags?: any;
}
/**
 * partner
 */
export interface MarketPlacePartner {
    category?: string;
    city?: string;
    companyNationalIdentificationNumber?: string;
    contact?: string;
    country?: string;
    description?: string;
    language?: string;
    legalForm?: string;
    organisationDisplayName?: string;
    organisationName?: string;
    otherDetails?: string;
    province?: string;
    street?: string;
    url?: string;
    vat?: string;
    zip?: string;
}
/**
 * product
 */
export interface MarketPlacePartnerProduct {
    category: string;
    description: string;
    name: string;
    otherDetails?: string;
}
export declare class Store {
    private client;
    constructor(client: Client);
    /**
     * MarketPlaceContact [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact#GET)
     */
    ListCurrentCustomerContacts(): Promise<MarketPlaceContact[]>;
    /**
     * MarketPlaceContact [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact#POST)
     */
    CreateAMarketplaceContactForCurrentNic(email: string, firstname: string, lastname: string, title: string, city?: string, country?: string, phone?: string, province?: string, street?: string, zip?: string): Promise<MarketPlaceContact>;
    /**
     * MarketPlaceContact.contactId [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D#GET)
     */
    GetContactDetails(contactId: string): Promise<MarketPlaceContact>;
    /**
     * MarketPlaceContact.contactId [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D#PUT)
     */
    EditContactInformation(contactId: string, city?: string, country?: string, email?: string, firstname?: string, lastname?: string, phone?: string, province?: string, street?: string, title?: string, zip?: string): Promise<MarketPlaceContact>;
    /**
     * MarketPlaceContact.contactId [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D#DELETE)
     */
    RemoveAnExistingContact(contactId: string): Promise<string>;
    /**
     * MarketPlaceContact.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D/document#GET)
     */
    ListDocumentAssociatedWithContact(contactId: string): Promise<string[]>;
    /**
     * MarketPlaceContact.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D/document#POST)
     */
    AddADocumentToAContact(contactId: string, documentId: string): Promise<string[]>;
    /**
     * MarketPlaceContact.doc_id [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D/document/%7BdocumentId%7D#DELETE)
     */
    UnlinkADocumentFromAContact(contactId: string, documentId: string): Promise<string[]>;
    /**
     * MarketPlaceDocument [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document#GET)
     */
    ListCurrentCustomerDocuments(): Promise<MarketPlaceDocument[]>;
    /**
     * MarketPlaceDocument [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document#POST)
     */
    CreateADocument(name: string, tags?: any): Promise<MarketPlaceDocument>;
    /**
     * MarketPlaceDocument.documentId [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document/%7BdocumentId%7D#GET)
     */
    GetDocumentInfo(documentId: string): Promise<MarketPlaceDocument>;
    /**
     * MarketPlaceDocument.documentId [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document/%7BdocumentId%7D#DELETE)
     */
    DeleteDocument(documentId: string): Promise<string>;
    /**
     * MarketPlaceDocument [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document/cors#POST)
     */
    AddCORSSupportOnYourContainer(origin: string): Promise<void>;
    /**
     * MarketPlacePartner.search [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner#GET)
     */
    ListCurrentCustomerPartners(): Promise<MarketPlacePartner[]>;
    /**
     * MarketPlacePartner.search [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner#POST)
     */
    CreateAMarketplacePartnerForCurrentNic(city: string, country: string, legalForm: string, organisationName: string, province: string, street: string, zip: string, category?: string, companyNationalIdentificationNumber?: string, contact?: string, description?: string, language?: string, organisationDisplayName?: string, otherDetails?: string, _url?: string, vat?: string): Promise<MarketPlacePartner>;
    /**
     * MarketPlacePartner.get [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D#GET)
     */
    GetPartnerInfo(partnerId: string): Promise<MarketPlacePartner>;
    /**
     * MarketPlacePartner.get [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D#PUT)
     */
    EditPartnerInfo(partnerId: string, category?: string, city?: string, companyNationalIdentificationNumber?: string, contact?: string, country?: string, description?: string, language?: string, legalForm?: string, organisationDisplayName?: string, organisationName?: string, otherDetails?: string, province?: string, street?: string, _url?: string, vat?: string, zip?: string): Promise<MarketPlacePartner>;
    /**
     * MarketPlacePartner.get [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D#DELETE)
     */
    DeletePartner(partnerId: string): Promise<string>;
    /**
     * MarketPlacePartner.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/document#GET)
     */
    ListDocumentAssociatedWithPartner(partnerId: string): Promise<string[]>;
    /**
     * MarketPlacePartner.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/document#POST)
     */
    AddADocumentToAPartner(documentId: string, partnerId: string): Promise<string[]>;
    /**
     * MarketPlacePartner.doc_id [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/document/%7BdocumentId%7D#DELETE)
     */
    UnlinkADocumentFromAPartner(documentId: string, partnerId: string): Promise<string[]>;
    /**
     * MarketPlacePartnerProduct.search [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product#GET)
     */
    ListPartnerProducts(partnerId: string): Promise<MarketPlacePartnerProduct[]>;
    /**
     * MarketPlacePartnerProduct.search [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product#POST)
     */
    CreateANewProductForPartner(category: string, description: string, name: string, partnerId: string, otherDetails?: string): Promise<MarketPlacePartnerProduct>;
    /**
     * MarketPlacePartnerProduct.get [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D#GET)
     */
    /**
     * MarketPlacePartnerProduct.get [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D#PUT)
     */
    EditProductInfo(partnerId: string, productId: string, category?: string, description?: string, name?: string, otherDetails?: string): Promise<MarketPlacePartnerProduct>;
    /**
     * MarketPlacePartnerProduct.get [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D#DELETE)
     */
    DeleteProduct(partnerId: string, productId: string): Promise<string>;
    /**
     * MarketPlacePartnerProduct.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D/document#GET)
     */
    ListDocumentAssociatedWithProduct(partnerId: string, productId: string): Promise<string[]>;
    /**
     * MarketPlacePartnerProduct.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D/document#POST)
     */
    AddADocumentToAProduct(documentId: string, partnerId: string, productId: string): Promise<string[]>;
    /**
     * MarketPlacePartnerProduct.doc_id [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D/document/%7BdocumentId%7D#DELETE)
     */
    UnlinkADocumentFromAProduct(documentId: string, partnerId: string, productId: string): Promise<string[]>;
}
//# sourceMappingURL=store.d.ts.map