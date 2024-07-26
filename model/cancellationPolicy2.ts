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
import { DateTimeLocal } from './dateTimeLocal';
import { DateTimeOffset } from './dateTimeOffset';
import { Money } from './money';

/**
* Cancellation policy info.
*/
export class CancellationPolicy2 {
    /**
    * Indicates whether the booking is refundable or not.
    */
    'policy': CancellationPolicy2.PolicyEnum;
    /**
    * The local date and time of the final deadline for cancellation, if policy type is FREE_CANCELLATION_UNTIL or PARTIALLY_REFUNDABLE. 
    */
    'deadline'?: DateTimeLocal;
    /**
    * The UTC date and time of the final deadline for cancellation, if policy type is FREE_CANCELLATION_UNTIL or PARTIALLY_REFUNDABLE. 
    */
    'deadlineUtc'?: DateTimeOffset;
    'amount'?: Money;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "policy",
            "baseName": "policy",
            "type": "CancellationPolicy2.PolicyEnum"
        },
        {
            "name": "deadline",
            "baseName": "deadline",
            "type": "DateTimeLocal"
        },
        {
            "name": "deadlineUtc",
            "baseName": "deadlineUtc",
            "type": "DateTimeOffset"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Money"
        }    ];

    static getAttributeTypeMap() {
        return CancellationPolicy2.attributeTypeMap;
    }
}

export namespace CancellationPolicy2 {
    export enum PolicyEnum {
        Unknown = <any> 'UNKNOWN',
        NonRefundable = <any> 'NON_REFUNDABLE',
        FreeCancellationUntil = <any> 'FREE_CANCELLATION_UNTIL',
        PartiallyRefundable = <any> 'PARTIALLY_REFUNDABLE'
    }
}