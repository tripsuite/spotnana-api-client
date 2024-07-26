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
import { PreferredType } from './preferredType';

export class Preference {
    'preferredType': PreferredType;
    /**
    * Reason for blocking the leg, hotel or car.
    */
    'blockedReason'?: string;
    /**
    * The label assigned to a specific tier of preference.
    */
    'label'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "preferredType",
            "baseName": "preferredType",
            "type": "PreferredType"
        },
        {
            "name": "blockedReason",
            "baseName": "blockedReason",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Preference.attributeTypeMap;
    }
}

export namespace Preference {
}
