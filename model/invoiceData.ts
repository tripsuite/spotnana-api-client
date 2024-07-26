/**
 * Trip API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { BuyerInfo } from './buyerInfo';
import { DateModel } from './dateModel';
import { FareAmount } from './fareAmount';
import { Item } from './item';
import { PaymentInformation } from './paymentInformation';
import { ProductType } from './productType';
import { ReferenceId } from './referenceId';
import { RegionCode } from './regionCode';
import { SellerInfo } from './sellerInfo';
import { Tax } from './tax';

/**
* Actual Data
*/
export class InvoiceData {
    /**
    * Date of invoice issue
    */
    'issuedDate': DateModel;
    /**
    * Entity that sold the items mentioned in the invoice.
    */
    'seller': SellerInfo;
    /**
    * Buyer of items mentioned in the invoice.
    */
    'buyer': BuyerInfo;
    /**
    * Items being invoiced.
    */
    'items': Array<Item>;
    /**
    * Information on how the items have been paid for.
    */
    'payments': Array<PaymentInformation>;
    /**
    * ID of the product being invoiced
    */
    'productId': string;
    /**
    * Type of product for which invoice is generated.
    */
    'productType': ProductType;
    /**
    * Total invoice amount.
    */
    'invoiceAmount': FareAmount;
    'taxBreakdown'?: Array<Tax>;
    /**
    * Reference Numbers to be shown on the invoice, for ex, Trip ID, PNR ID etc.
    */
    'referenceIds': Array<ReferenceId>;
    /**
    * The region code for which the invoice is generated.
    */
    'regionCode'?: RegionCode;
    /**
    * Type of document
    */
    'documentType'?: InvoiceData.DocumentTypeEnum;
    /**
    * Text shown at bottom of the PDF document. Nothing is shown if not set.
    */
    'footerText'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "issuedDate",
            "baseName": "issuedDate",
            "type": "DateModel"
        },
        {
            "name": "seller",
            "baseName": "seller",
            "type": "SellerInfo"
        },
        {
            "name": "buyer",
            "baseName": "buyer",
            "type": "BuyerInfo"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Item>"
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<PaymentInformation>"
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string"
        },
        {
            "name": "productType",
            "baseName": "productType",
            "type": "ProductType"
        },
        {
            "name": "invoiceAmount",
            "baseName": "invoiceAmount",
            "type": "FareAmount"
        },
        {
            "name": "taxBreakdown",
            "baseName": "taxBreakdown",
            "type": "Array<Tax>"
        },
        {
            "name": "referenceIds",
            "baseName": "referenceIds",
            "type": "Array<ReferenceId>"
        },
        {
            "name": "regionCode",
            "baseName": "regionCode",
            "type": "RegionCode"
        },
        {
            "name": "documentType",
            "baseName": "documentType",
            "type": "InvoiceData.DocumentTypeEnum"
        },
        {
            "name": "footerText",
            "baseName": "footerText",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceData.attributeTypeMap;
    }
}

export namespace InvoiceData {
    export enum DocumentTypeEnum {
        Invoice = <any> 'INVOICE',
        Receipt = <any> 'RECEIPT',
        None = <any> 'NONE'
    }
}
