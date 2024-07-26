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
* ISO8601 Local Time
*/
export class TimeLocal {
    'iso8601': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "iso8601",
            "baseName": "iso8601",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TimeLocal.attributeTypeMap;
    }
}

