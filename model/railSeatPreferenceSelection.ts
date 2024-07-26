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
* Selected Seat Preferences for the itinerary.
*/
export class RailSeatPreferenceSelection {
    /**
    * Seat Carriage Type
    */
    'carriageType'?: string;
    /**
    * Seat Carriage Type
    */
    'deckType'?: string;
    /**
    * Seat Direction.
    */
    'direction'?: string;
    /**
    * Seat Facilities.
    */
    'facilities'?: Array<string>;
    /**
    * Seat Position Type.
    */
    'positionType'?: string;
    /**
    * Seat Location Type.
    */
    'seatLocationType'?: string;
    /**
    * Seat Type.
    */
    'seatType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "carriageType",
            "baseName": "carriageType",
            "type": "string"
        },
        {
            "name": "deckType",
            "baseName": "deckType",
            "type": "string"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "string"
        },
        {
            "name": "facilities",
            "baseName": "facilities",
            "type": "Array<string>"
        },
        {
            "name": "positionType",
            "baseName": "positionType",
            "type": "string"
        },
        {
            "name": "seatLocationType",
            "baseName": "seatLocationType",
            "type": "string"
        },
        {
            "name": "seatType",
            "baseName": "seatType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RailSeatPreferenceSelection.attributeTypeMap;
    }
}
