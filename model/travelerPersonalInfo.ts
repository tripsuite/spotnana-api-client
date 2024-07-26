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
import { LoyaltyInfo } from './loyaltyInfo';
import { TravelPref } from './travelPref';

/**
* Traveler personal information.
*/
export class TravelerPersonalInfo {
    'loyaltyInfos'?: Array<LoyaltyInfo>;
    'travelPref'?: TravelPref;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "loyaltyInfos",
            "baseName": "loyaltyInfos",
            "type": "Array<LoyaltyInfo>"
        },
        {
            "name": "travelPref",
            "baseName": "travelPref",
            "type": "TravelPref"
        }    ];

    static getAttributeTypeMap() {
        return TravelerPersonalInfo.attributeTypeMap;
    }
}
