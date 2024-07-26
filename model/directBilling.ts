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
* Descriptor for direct billing details.
*/
export class DirectBilling {
    /**
    * Direct billing code provided by the vendor.
    */
    'directBillingCode'?: string;
    /**
    * Corporate discount code provided by the vendor.
    */
    'corporateDiscountCode'?: string;
    /**
    * Label for the Direct Billing Payment method.
    */
    'label'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "directBillingCode",
            "baseName": "directBillingCode",
            "type": "string"
        },
        {
            "name": "corporateDiscountCode",
            "baseName": "corporateDiscountCode",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DirectBilling.attributeTypeMap;
    }
}
