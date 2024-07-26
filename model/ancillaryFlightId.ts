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
* Flights to which this ancillary belongs
*/
export class AncillaryFlightId {
    /**
    * Index of leg to which this ancillary belongs. If an ancillary belongs to all legs, this index should be set to -1 
    */
    'legIndex': number;
    /**
    * Index of flight in it\'s leg to which this ancillary belongs. If an ancillary  belongs to all flights, this index should be set to -1 
    */
    'flightIndex'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "legIndex",
            "baseName": "legIndex",
            "type": "number"
        },
        {
            "name": "flightIndex",
            "baseName": "flightIndex",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AncillaryFlightId.attributeTypeMap;
    }
}

