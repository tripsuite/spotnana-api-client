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
import { AssessmentType } from './assessmentType';
import { Money } from './money';

/**
* Information about the cancellation policy.
*/
export class CancellationPolicy1 {
    /**
    * Text describing the cancellation policy.
    */
    'description'?: string;
    'fee'?: Money;
    /**
    * Assessment Type
    */
    'assessmentType'?: AssessmentType;
    /**
    * Is source cat16
    */
    'isCat16'?: boolean;
    /**
    * Is conditional
    */
    'isConditional'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "Money"
        },
        {
            "name": "assessmentType",
            "baseName": "assessmentType",
            "type": "AssessmentType"
        },
        {
            "name": "isCat16",
            "baseName": "isCat16",
            "type": "boolean"
        },
        {
            "name": "isConditional",
            "baseName": "isConditional",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CancellationPolicy1.attributeTypeMap;
    }
}

export namespace CancellationPolicy1 {
}