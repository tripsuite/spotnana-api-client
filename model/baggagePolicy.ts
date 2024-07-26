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
import { BaggageInfo } from './baggageInfo';

/**
* Baggage policy for this traveler.
*/
export class BaggagePolicy {
    /**
    * Policies for checked-in baggage
    */
    'checkedIn': Array<BaggageInfo>;
    /**
    * Policies for carry-on baggage
    */
    'carryOn': Array<BaggageInfo>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkedIn",
            "baseName": "checkedIn",
            "type": "Array<BaggageInfo>"
        },
        {
            "name": "carryOn",
            "baseName": "carryOn",
            "type": "Array<BaggageInfo>"
        }    ];

    static getAttributeTypeMap() {
        return BaggagePolicy.attributeTypeMap;
    }
}
