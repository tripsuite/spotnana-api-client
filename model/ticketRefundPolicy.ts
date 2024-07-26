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
import { Money } from './money';

/**
* Ticket refund policy
*/
export class TicketRefundPolicy {
    /**
    * Refund penalty if refundable
    */
    'refundPenalty'?: Money;
    /**
    * Is ticket refundable or not
    */
    'isRefundable'?: boolean;
    /**
    * Is ticket refundable or not in OBT
    */
    'isRefundableByObt'?: boolean;
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
            "name": "refundPenalty",
            "baseName": "refundPenalty",
            "type": "Money"
        },
        {
            "name": "isRefundable",
            "baseName": "isRefundable",
            "type": "boolean"
        },
        {
            "name": "isRefundableByObt",
            "baseName": "isRefundableByObt",
            "type": "boolean"
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
        return TicketRefundPolicy.attributeTypeMap;
    }
}
