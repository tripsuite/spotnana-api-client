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
* Flight boarding / arrival gate
*/
export class Gate {
    /**
    * Gate number
    */
    'gate'?: string;
    /**
    * Airport terminal
    */
    'terminal'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "gate",
            "baseName": "gate",
            "type": "string"
        },
        {
            "name": "terminal",
            "baseName": "terminal",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Gate.attributeTypeMap;
    }
}

