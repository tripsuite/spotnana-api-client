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
import { DateTimeLocal } from './dateTimeLocal';

export class DateTimeRange {
    /**
    * Minimum value - inclusive.
    */
    'min'?: DateTimeLocal;
    /**
    * Maximum value - inclusive.
    */
    'max'?: DateTimeLocal;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "min",
            "baseName": "min",
            "type": "DateTimeLocal"
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "DateTimeLocal"
        }    ];

    static getAttributeTypeMap() {
        return DateTimeRange.attributeTypeMap;
    }
}
