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
* Metadata for Brex Budget
*/
export class PaymentMetadataCustomPaymentMethodMetadataBrexBudgetMetadata {
    /**
    * Name of the budget
    */
    'budgetName'?: string;
    /**
    * Whether it was paid by budget card or personal card
    */
    'paidByPersonalCard'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "budgetName",
            "baseName": "budgetName",
            "type": "string"
        },
        {
            "name": "paidByPersonalCard",
            "baseName": "paidByPersonalCard",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMetadataCustomPaymentMethodMetadataBrexBudgetMetadata.attributeTypeMap;
    }
}

