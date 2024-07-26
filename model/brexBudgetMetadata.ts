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
import { SimpleMoney } from './simpleMoney';

/**
* Metadata for Brex Budget payment source.
*/
export class BrexBudgetMetadata {
    /**
    * Budget name.
    */
    'budgetName': string;
    /**
    * Remaining balance of the budget.
    */
    'budgetRemainingBalance'?: SimpleMoney;
    /**
    * Card id of the budget.
    */
    'cardId'?: string;
    /**
    * Remaining balance of the budget formatted with currency.
    */
    'budgetRemainingBalanceFormatted'?: string;
    /**
    * Whether the personal card is allowed for the trip.
    */
    'isPersonalCardAllowed'?: boolean;
    /**
    * Whether the budget is masked.
    */
    'isBudgetMasked'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "budgetName",
            "baseName": "budgetName",
            "type": "string"
        },
        {
            "name": "budgetRemainingBalance",
            "baseName": "budgetRemainingBalance",
            "type": "SimpleMoney"
        },
        {
            "name": "cardId",
            "baseName": "cardId",
            "type": "string"
        },
        {
            "name": "budgetRemainingBalanceFormatted",
            "baseName": "budgetRemainingBalanceFormatted",
            "type": "string"
        },
        {
            "name": "isPersonalCardAllowed",
            "baseName": "isPersonalCardAllowed",
            "type": "boolean"
        },
        {
            "name": "isBudgetMasked",
            "baseName": "isBudgetMasked",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return BrexBudgetMetadata.attributeTypeMap;
    }
}
