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

/**
* Metadata for Direct Billing
*/
export class DirectBilling2 {
    /**
    * Unique vendor id/code
    */
    'vendorId': string;
    /**
    * Direct billing code provided by the vendor
    */
    'directBillingCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "vendorId",
            "baseName": "vendorId",
            "type": "string"
        },
        {
            "name": "directBillingCode",
            "baseName": "directBillingCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DirectBilling2.attributeTypeMap;
    }
}

