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
import { Cabin } from './cabin';
import { PnrStatus } from './pnrStatus';

/**
* Status of duplicate flights in case of upgrades
*/
export class OtherStatus {
    /**
    * Upgraded flight cabin
    */
    'cabin': Cabin;
    /**
    * Upgraded flight status
    */
    'status'?: PnrStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cabin",
            "baseName": "cabin",
            "type": "Cabin"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PnrStatus"
        }    ];

    static getAttributeTypeMap() {
        return OtherStatus.attributeTypeMap;
    }
}

export namespace OtherStatus {
}
