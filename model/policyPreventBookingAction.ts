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
* Whether to allow booking if a rule is violated.
*/
export class PolicyPreventBookingAction {
    /**
    * True if booking is to be blocked if rule is violated, else false
    */
    'prevent'?: boolean;
    /**
    * Reason describing why was that specific itinerary not allowed to book.
    */
    'reason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "prevent",
            "baseName": "prevent",
            "type": "boolean"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PolicyPreventBookingAction.attributeTypeMap;
    }
}
