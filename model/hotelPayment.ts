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
* Payment method.
*/
export class HotelPayment {
    /**
    * Payment type.
    */
    'paymentType': HotelPayment.PaymentTypeEnum;
    /**
    * Payment method, if payment type is OTHER.
    */
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentType",
            "baseName": "paymentType",
            "type": "HotelPayment.PaymentTypeEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return HotelPayment.attributeTypeMap;
    }
}

export namespace HotelPayment {
    export enum PaymentTypeEnum {
        Unknown = <any> 'UNKNOWN',
        PayAtHotel = <any> 'PAY_AT_HOTEL',
        Prepaid = <any> 'PREPAID',
        Other = <any> 'OTHER'
    }
}