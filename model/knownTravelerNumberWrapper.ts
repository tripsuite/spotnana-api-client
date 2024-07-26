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
import { KnownTravelerNumber } from './knownTravelerNumber';

export class KnownTravelerNumberWrapper {
    'ktn'?: KnownTravelerNumber;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ktn",
            "baseName": "ktn",
            "type": "KnownTravelerNumber"
        }    ];

    static getAttributeTypeMap() {
        return KnownTravelerNumberWrapper.attributeTypeMap;
    }
}
