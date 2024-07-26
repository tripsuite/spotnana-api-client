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
* Identity information of the buyer or seller
*/
export class IdInfo {
    /**
    * The type of Id.
    */
    'idType': IdInfo.IdTypeEnum;
    /**
    * Value of the Id.
    */
    'value': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "idType",
            "baseName": "idType",
            "type": "IdInfo.IdTypeEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IdInfo.attributeTypeMap;
    }
}

export namespace IdInfo {
    export enum IdTypeEnum {
        TaxId = <any> 'TAX_ID',
        VatId = <any> 'VAT_ID'
    }
}