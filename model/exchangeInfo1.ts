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
import { FareAmount } from './fareAmount';
import { Money } from './money';

/**
* Ticket exchange info
*/
export class ExchangeInfo1 {
    /**
    * If the ticket was created as part of an exchange, the original ticket that was exchanged to create this ticket.
    */
    'originalTicketNumber': string;
    /**
    * Exchange penalty
    */
    'penalty'?: Money;
    /**
    * Extra amount the client was charged if the ticket was created as part of an exchange.
    */
    'addCollectAmount'?: FareAmount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "originalTicketNumber",
            "baseName": "originalTicketNumber",
            "type": "string"
        },
        {
            "name": "penalty",
            "baseName": "penalty",
            "type": "Money"
        },
        {
            "name": "addCollectAmount",
            "baseName": "addCollectAmount",
            "type": "FareAmount"
        }    ];

    static getAttributeTypeMap() {
        return ExchangeInfo1.attributeTypeMap;
    }
}

