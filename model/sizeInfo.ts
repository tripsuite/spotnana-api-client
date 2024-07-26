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
* Information about the baggage size.
*/
export class SizeInfo {
    /**
    * The weight limit of a baggage option.
    */
    'length'?: number;
    /**
    * The unit of measurement for the bag size.
    */
    'unit'?: SizeInfo.UnitEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "length",
            "baseName": "length",
            "type": "number"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "SizeInfo.UnitEnum"
        }    ];

    static getAttributeTypeMap() {
        return SizeInfo.attributeTypeMap;
    }
}

export namespace SizeInfo {
    export enum UnitEnum {
        Centimeter = <any> 'CENTIMETER',
        Meter = <any> 'METER'
    }
}