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
import { UserId } from './userId';

/**
* Space allocated for a passenger in the rail.
*/
export class RailAllocatedSpace {
    /**
    * Coach Number.
    */
    'coachNumber': string;
    /**
    * Traveler for which the seat belongs.
    */
    'travelerIdx': number;
    /**
    * User ID of traveler to which this seat belongs.
    */
    'userId'?: UserId;
    /**
    * Seat Number.
    */
    'seatNumber': string;
    /**
    * Additional Properties of allocated seat.
    */
    'additionalProperties'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "coachNumber",
            "baseName": "coachNumber",
            "type": "string"
        },
        {
            "name": "travelerIdx",
            "baseName": "travelerIdx",
            "type": "number"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "UserId"
        },
        {
            "name": "seatNumber",
            "baseName": "seatNumber",
            "type": "string"
        },
        {
            "name": "additionalProperties",
            "baseName": "additionalProperties",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return RailAllocatedSpace.attributeTypeMap;
    }
}
