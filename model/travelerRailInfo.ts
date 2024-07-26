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
import { LoyaltyDetails } from './loyaltyDetails';
import { RailCard } from './railCard';
import { UserId } from './userId';

export class TravelerRailInfo {
    'travelerIndex'?: number;
    /**
    * User ID of traveler to which this TravelerInfo belongs
    */
    'userId'?: UserId;
    'railCard'?: RailCard;
    'loyaltyDetails'?: LoyaltyDetails;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "travelerIndex",
            "baseName": "travelerIndex",
            "type": "number"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "UserId"
        },
        {
            "name": "railCard",
            "baseName": "railCard",
            "type": "RailCard"
        },
        {
            "name": "loyaltyDetails",
            "baseName": "loyaltyDetails",
            "type": "LoyaltyDetails"
        }    ];

    static getAttributeTypeMap() {
        return TravelerRailInfo.attributeTypeMap;
    }
}
