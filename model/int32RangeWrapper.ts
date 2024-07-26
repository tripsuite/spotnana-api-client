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
import { Int32Range } from './int32Range';

export class Int32RangeWrapper {
    'iRange'?: Int32Range;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "iRange",
            "baseName": "iRange",
            "type": "Int32Range"
        }    ];

    static getAttributeTypeMap() {
        return Int32RangeWrapper.attributeTypeMap;
    }
}

