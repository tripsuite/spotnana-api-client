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
* Details of tickets.
*/
export class RailTicketAsset {
    /**
    * Provide some details on what the given asset contains.
    */
    'description': string;
    /**
    * For ticket type collection number, it contains the reference number of the ticket. For others, it contains the path where the actual content of the ticket is. 
    */
    'reference': string;
    /**
    * Provide details on what type of the ticket is.
    */
    'type': RailTicketAsset.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RailTicketAsset.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return RailTicketAsset.attributeTypeMap;
    }
}

export namespace RailTicketAsset {
    export enum TypeEnum {
        Pdf = <any> 'PDF',
        Png = <any> 'PNG',
        ApplePkPass = <any> 'APPLE_PK_PASS',
        Html = <any> 'HTML',
        CollectionNumber = <any> 'COLLECTION_NUMBER'
    }
}