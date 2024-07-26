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
import { AirPref } from './airPref';
import { CarPref } from './carPref';
import { HotelPref } from './hotelPref';
import { RailCard } from './railCard';
import { RailPref } from './railPref';

/**
* Travel preferences.
*/
export class TravelPref {
    'airPref'?: AirPref;
    'preferredCurrency'?: string;
    'railCards'?: Array<RailCard>;
    'railPref'?: RailPref;
    'carPref'?: CarPref;
    'hotelPref'?: HotelPref;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "airPref",
            "baseName": "airPref",
            "type": "AirPref"
        },
        {
            "name": "preferredCurrency",
            "baseName": "preferredCurrency",
            "type": "string"
        },
        {
            "name": "railCards",
            "baseName": "railCards",
            "type": "Array<RailCard>"
        },
        {
            "name": "railPref",
            "baseName": "railPref",
            "type": "RailPref"
        },
        {
            "name": "carPref",
            "baseName": "carPref",
            "type": "CarPref"
        },
        {
            "name": "hotelPref",
            "baseName": "hotelPref",
            "type": "HotelPref"
        }    ];

    static getAttributeTypeMap() {
        return TravelPref.attributeTypeMap;
    }
}
