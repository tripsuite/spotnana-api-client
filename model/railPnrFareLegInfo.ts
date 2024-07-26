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
import { RailTravelClass } from './railTravelClass';

/**
* Information about the leg this fare represents.
*/
export class RailPnrFareLegInfo {
    /**
    * Index of leg in journey.
    */
    'legIndex': number;
    'travelClass': RailTravelClass;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "legIndex",
            "baseName": "legIndex",
            "type": "number"
        },
        {
            "name": "travelClass",
            "baseName": "travelClass",
            "type": "RailTravelClass"
        }    ];

    static getAttributeTypeMap() {
        return RailPnrFareLegInfo.attributeTypeMap;
    }
}

export namespace RailPnrFareLegInfo {
}
