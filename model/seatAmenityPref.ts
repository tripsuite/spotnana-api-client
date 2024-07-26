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
* Seat amenity preference.
*/
export class SeatAmenityPref {
    'seatAmenityTypes': Array<SeatAmenityPref.SeatAmenityTypesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "seatAmenityTypes",
            "baseName": "seatAmenityTypes",
            "type": "Array<SeatAmenityPref.SeatAmenityTypesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return SeatAmenityPref.attributeTypeMap;
    }
}

export namespace SeatAmenityPref {
    export enum SeatAmenityTypesEnum {
        UnknownAirSeatAmenityType = <any> 'UNKNOWN_AIR_SEAT_AMENITY_TYPE',
        FlatBed = <any> 'FLAT_BED',
        Wifi = <any> 'WIFI',
        InSeatPower = <any> 'IN_SEAT_POWER'
    }
}