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
import { BagPolicyApplicability } from './bagPolicyApplicability';
import { WeightLimit } from './weightLimit';

/**
* This contains weight limit details of bag
*/
export class BagWeightLimit {
    /**
    * Weight limit in different units
    */
    'weightLimit'?: Array<WeightLimit>;
    'applicability'?: BagPolicyApplicability;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "weightLimit",
            "baseName": "weightLimit",
            "type": "Array<WeightLimit>"
        },
        {
            "name": "applicability",
            "baseName": "applicability",
            "type": "BagPolicyApplicability"
        }    ];

    static getAttributeTypeMap() {
        return BagWeightLimit.attributeTypeMap;
    }
}

export namespace BagWeightLimit {
}
