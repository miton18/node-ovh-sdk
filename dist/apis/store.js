"use strict";
// GENERATED SDK for store API
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    constructor(client) {
        this.client = client;
    }
    /**
     * MarketPlaceContact [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact#GET)
     */
    ListCurrentCustomerContacts() {
        let url = `/store/contact`;
        return this.client.request('GET', url);
    }
    /**
     * MarketPlaceContact [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact#POST)
     */
    CreateAMarketplaceContactForCurrentNic(email, firstname, lastname, title, city, country, phone, province, street, zip) {
        let url = `/store/contact`;
        return this.client.request('POST', url, { email, firstname, lastname, title, city, country, phone, province, street, zip });
    }
    /**
     * MarketPlaceContact.contactId [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D#GET)
     */
    GetContactDetails(contactId) {
        let url = `/store/contact/${contactId}`;
        return this.client.request('GET', url);
    }
    /**
     * MarketPlaceContact.contactId [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D#PUT)
     */
    EditContactInformation(contactId, city, country, email, firstname, lastname, phone, province, street, title, zip) {
        let url = `/store/contact/${contactId}`;
        return this.client.request('PUT', url, { city, country, email, firstname, lastname, phone, province, street, title, zip });
    }
    /**
     * MarketPlaceContact.contactId [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D#DELETE)
     */
    RemoveAnExistingContact(contactId) {
        let url = `/store/contact/${contactId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * MarketPlaceContact.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D/document#GET)
     */
    ListDocumentAssociatedWithContact(contactId) {
        let url = `/store/contact/${contactId}/document`;
        return this.client.request('GET', url);
    }
    /**
     * MarketPlaceContact.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D/document#POST)
     */
    AddADocumentToAContact(contactId, documentId) {
        let url = `/store/contact/${contactId}/document`;
        return this.client.request('POST', url, { documentId });
    }
    /**
     * MarketPlaceContact.doc_id [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/contact/%7BcontactId%7D/document/%7BdocumentId%7D#DELETE)
     */
    UnlinkADocumentFromAContact(contactId, documentId) {
        let url = `/store/contact/${contactId}/document/${documentId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * MarketPlaceDocument [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document#GET)
     */
    ListCurrentCustomerDocuments() {
        let url = `/store/document`;
        return this.client.request('GET', url);
    }
    /**
     * MarketPlaceDocument [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document#POST)
     */
    CreateADocument(name, tags) {
        let url = `/store/document`;
        return this.client.request('POST', url, { name, tags });
    }
    /**
     * MarketPlaceDocument.documentId [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document/%7BdocumentId%7D#GET)
     */
    GetDocumentInfo(documentId) {
        let url = `/store/document/${documentId}`;
        return this.client.request('GET', url);
    }
    /**
     * MarketPlaceDocument.documentId [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document/%7BdocumentId%7D#DELETE)
     */
    DeleteDocument(documentId) {
        let url = `/store/document/${documentId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * MarketPlaceDocument [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/document/cors#POST)
     */
    AddCORSSupportOnYourContainer(origin) {
        let url = `/store/document/cors`;
        return this.client.request('POST', url, { origin });
    }
    /**
     * MarketPlacePartner.search [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner#GET)
     */
    ListCurrentCustomerPartners() {
        let url = `/store/partner`;
        return this.client.request('GET', url);
    }
    /**
     * MarketPlacePartner.search [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner#POST)
     */
    CreateAMarketplacePartnerForCurrentNic(city, country, legalForm, organisationName, province, street, zip, category, companyNationalIdentificationNumber, contact, description, language, organisationDisplayName, otherDetails, _url, vat) {
        let url = `/store/partner`;
        return this.client.request('POST', url, { city, country, legalForm, organisationName, province, street, zip, category, companyNationalIdentificationNumber, contact, description, language, organisationDisplayName, otherDetails, _url, vat });
    }
    /**
     * MarketPlacePartner.get [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D#GET)
     */
    GetPartnerInfo(partnerId) {
        let url = `/store/partner/${partnerId}`;
        return this.client.request('GET', url);
    }
    /**
     * MarketPlacePartner.get [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D#PUT)
     */
    EditPartnerInfo(partnerId, category, city, companyNationalIdentificationNumber, contact, country, description, language, legalForm, organisationDisplayName, organisationName, otherDetails, province, street, _url, vat, zip) {
        let url = `/store/partner/${partnerId}`;
        return this.client.request('PUT', url, { category, city, companyNationalIdentificationNumber, contact, country, description, language, legalForm, organisationDisplayName, organisationName, otherDetails, province, street, _url, vat, zip });
    }
    /**
     * MarketPlacePartner.get [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D#DELETE)
     */
    DeletePartner(partnerId) {
        let url = `/store/partner/${partnerId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * MarketPlacePartner.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/document#GET)
     */
    ListDocumentAssociatedWithPartner(partnerId) {
        let url = `/store/partner/${partnerId}/document`;
        return this.client.request('GET', url);
    }
    /**
     * MarketPlacePartner.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/document#POST)
     */
    AddADocumentToAPartner(documentId, partnerId) {
        let url = `/store/partner/${partnerId}/document`;
        return this.client.request('POST', url, { documentId });
    }
    /**
     * MarketPlacePartner.doc_id [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/document/%7BdocumentId%7D#DELETE)
     */
    UnlinkADocumentFromAPartner(documentId, partnerId) {
        let url = `/store/partner/${partnerId}/document/${documentId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * MarketPlacePartnerProduct.search [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product#GET)
     */
    ListPartnerProducts(partnerId) {
        let url = `/store/partner/${partnerId}/product`;
        return this.client.request('GET', url);
    }
    /**
     * MarketPlacePartnerProduct.search [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product#POST)
     */
    CreateANewProductForPartner(category, description, name, partnerId, otherDetails) {
        let url = `/store/partner/${partnerId}/product`;
        return this.client.request('POST', url, { category, description, name, otherDetails });
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
    EditProductInfo(partnerId, productId, category, description, name, otherDetails) {
        let url = `/store/partner/${partnerId}/product/${productId}`;
        return this.client.request('PUT', url, { category, description, name, otherDetails });
    }
    /**
     * MarketPlacePartnerProduct.get [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D#DELETE)
     */
    DeleteProduct(partnerId, productId) {
        let url = `/store/partner/${partnerId}/product/${productId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * MarketPlacePartnerProduct.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D/document#GET)
     */
    ListDocumentAssociatedWithProduct(partnerId, productId) {
        let url = `/store/partner/${partnerId}/product/${productId}/document`;
        return this.client.request('GET', url);
    }
    /**
     * MarketPlacePartnerProduct.doc [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D/document#POST)
     */
    AddADocumentToAProduct(documentId, partnerId, productId) {
        let url = `/store/partner/${partnerId}/product/${productId}/document`;
        return this.client.request('POST', url, { documentId });
    }
    /**
     * MarketPlacePartnerProduct.doc_id [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/store/partner/%7BpartnerId%7D/product/%7BproductId%7D/document/%7BdocumentId%7D#DELETE)
     */
    UnlinkADocumentFromAProduct(documentId, partnerId, productId) {
        let url = `/store/partner/${partnerId}/product/${productId}/document/${documentId}`;
        return this.client.request('DELETE', url);
    }
}
exports.Store = Store;
//# sourceMappingURL=store.js.map