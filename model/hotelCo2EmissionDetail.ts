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
* The co2 emission detail for the hotel.
*/
export class HotelCo2EmissionDetail {
    /**
    * CO2 emission value in kg per room for the entire stay.
    */
    'co2EmissionValue': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "co2EmissionValue",
            "baseName": "co2EmissionValue",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return HotelCo2EmissionDetail.attributeTypeMap;
    }
}
