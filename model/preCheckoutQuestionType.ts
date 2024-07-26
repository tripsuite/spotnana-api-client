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
* Types of pre-checkout questions. USER_DEFINED_QUESTION the default question type for all pre checkout questions which have been created from UI. OOP_REASON_CODE is kept separate so that existing OOP flow doesn\'t break. 
*/
export enum PreCheckoutQuestionType {
    UnknownCheckoutQuestionType = <any> 'UNKNOWN_CHECKOUT_QUESTION_TYPE',
    UserDefinedQuestion = <any> 'USER_DEFINED_QUESTION',
    OopReasonCode = <any> 'OOP_REASON_CODE'
}
