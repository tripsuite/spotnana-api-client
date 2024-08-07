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
import { AnswerPair } from './answerPair';
import { CustomFieldType } from './customFieldType';
import { Question } from './question';

export class EntityAnswer {
    /**
    * The unique ID for the question.
    */
    'entityId'?: string;
    /**
    * The text input given by user (if any).
    */
    'userInput'?: string;
    /**
    * The id/enum value corresponding to the option chosen by the user as answer. 
    */
    'itemIds'?: Array<number>;
    'answers'?: Array<AnswerPair>;
    'customFieldType'?: CustomFieldType;
    /**
    * The question text to be displayed to the user.
    */
    'questionDisplayText'?: string;
    'question'?: Question;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entityId",
            "baseName": "entityId",
            "type": "string"
        },
        {
            "name": "userInput",
            "baseName": "userInput",
            "type": "string"
        },
        {
            "name": "itemIds",
            "baseName": "itemIds",
            "type": "Array<number>"
        },
        {
            "name": "answers",
            "baseName": "answers",
            "type": "Array<AnswerPair>"
        },
        {
            "name": "customFieldType",
            "baseName": "customFieldType",
            "type": "CustomFieldType"
        },
        {
            "name": "questionDisplayText",
            "baseName": "questionDisplayText",
            "type": "string"
        },
        {
            "name": "question",
            "baseName": "question",
            "type": "Question"
        }    ];

    static getAttributeTypeMap() {
        return EntityAnswer.attributeTypeMap;
    }
}

export namespace EntityAnswer {
}
