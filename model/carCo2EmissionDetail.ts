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
* The CO2 emission detail for car.
*/
export class CarCo2EmissionDetail {
    /**
    * The CO2 emission value in kgs for car.
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
        return CarCo2EmissionDetail.attributeTypeMap;
    }
}
