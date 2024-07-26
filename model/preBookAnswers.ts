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
import { EntityAnswer } from './entityAnswer';

export class PreBookAnswers {
    'answers'?: Array<EntityAnswer>;
    /**
    * The unique id sent back in the pre book questions API response
    */
    'preBookQuestionResponseId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "answers",
            "baseName": "answers",
            "type": "Array<EntityAnswer>"
        },
        {
            "name": "preBookQuestionResponseId",
            "baseName": "preBookQuestionResponseId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PreBookAnswers.attributeTypeMap;
    }
}

