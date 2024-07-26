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
import { DateModel } from './dateModel';
import { FareAmount } from './fareAmount';
import { Voucher } from './voucher';

/**
* Refund info
*/
export class CostRefundInfo {
    /**
    * Amount refunded if cancelled
    */
    'refundAmount': FareAmount;
    /**
    * Amount of tax refunded if cancelled
    */
    'refundTaxAmount'?: FareAmount;
    /**
    * Refund transaction date
    */
    'refundDate'?: DateModel;
    /**
    * Refund penalty
    */
    'penalty'?: FareAmount;
    /**
    * Refund voucher details.
    */
    'refundVoucher'?: Voucher;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "refundAmount",
            "baseName": "refundAmount",
            "type": "FareAmount"
        },
        {
            "name": "refundTaxAmount",
            "baseName": "refundTaxAmount",
            "type": "FareAmount"
        },
        {
            "name": "refundDate",
            "baseName": "refundDate",
            "type": "DateModel"
        },
        {
            "name": "penalty",
            "baseName": "penalty",
            "type": "FareAmount"
        },
        {
            "name": "refundVoucher",
            "baseName": "refundVoucher",
            "type": "Voucher"
        }    ];

    static getAttributeTypeMap() {
        return CostRefundInfo.attributeTypeMap;
    }
}
