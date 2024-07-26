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
import { Money } from './money';
import { RailAmenityType } from './railAmenityType';

/**
* Amenities for rail.
*/
export class RailPnrAmenity {
    /**
    * Amenity description
    */
    'description'?: string;
    /**
    * Amenity name
    */
    'name': string;
    /**
    * Price of the amenity
    */
    'price'?: Money;
    /**
    * Available/Selected quantity
    */
    'quantity'?: number;
    /**
    * Rail Amenity type
    */
    'type'?: RailAmenityType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "Money"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RailAmenityType"
        }    ];

    static getAttributeTypeMap() {
        return RailPnrAmenity.attributeTypeMap;
    }
}

export namespace RailPnrAmenity {
}
