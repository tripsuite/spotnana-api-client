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
* Information passed to the Spotnana email system that processes booking updates.
*/
export class PnrCancelRequestBookingEmailInfo {
    /**
    * Whether an email should be sent to travelers.
    */
    'disableEmail'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "disableEmail",
            "baseName": "disableEmail",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PnrCancelRequestBookingEmailInfo.attributeTypeMap;
    }
}
