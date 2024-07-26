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
import { FormOfPayment } from './formOfPayment';

/**
* Describe the refund info associated with cancel object.
*/
export class RefundInfoDetail {
    /**
    * Type of refund.
    */
    'refundType'?: RefundInfoDetail.RefundTypeEnum;
    'amount'?: FareAmount;
    'fop'?: FormOfPayment;
    /**
    * Expiration for a CREDIT refund. This field will be ignored for all cases where the refund_type is not CREDIT. If not set, we assume the credit will expire one year from ticket issue date. 
    */
    'expiryDate'?: DateModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "refundType",
            "baseName": "refundType",
            "type": "RefundInfoDetail.RefundTypeEnum"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "FareAmount"
        },
        {
            "name": "fop",
            "baseName": "fop",
            "type": "FormOfPayment"
        },
        {
            "name": "expiryDate",
            "baseName": "expiryDate",
            "type": "DateModel"
        }    ];

    static getAttributeTypeMap() {
        return RefundInfoDetail.attributeTypeMap;
    }
}

export namespace RefundInfoDetail {
    export enum RefundTypeEnum {
        Refund = <any> 'REFUND',
        Credit = <any> 'CREDIT'
    }
}
