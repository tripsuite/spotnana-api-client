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
* Car vendor.
*/
export class CarVendor {
    /**
    * Vendor code
    */
    'code': string;
    /**
    * Vendor name
    */
    'name': string;
    /**
    * Whether the car vendor is present in preferred vendor list. This is an optional field which gets populated only in the preferred vendor autocomplete API.
    */
    'isPresentInPreferredVendors'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "isPresentInPreferredVendors",
            "baseName": "isPresentInPreferredVendors",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CarVendor.attributeTypeMap;
    }
}
