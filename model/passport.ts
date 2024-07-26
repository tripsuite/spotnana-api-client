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

/**
* Passport details.
*/
export class Passport {
    'docId': string;
    'expiryDate': DateModel;
    'issueCountry': string;
    'issuedDate'?: DateModel;
    'nationalityCountry': string;
    'type'?: Passport.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "docId",
            "baseName": "docId",
            "type": "string"
        },
        {
            "name": "expiryDate",
            "baseName": "expiryDate",
            "type": "DateModel"
        },
        {
            "name": "issueCountry",
            "baseName": "issueCountry",
            "type": "string"
        },
        {
            "name": "issuedDate",
            "baseName": "issuedDate",
            "type": "DateModel"
        },
        {
            "name": "nationalityCountry",
            "baseName": "nationalityCountry",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Passport.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Passport.attributeTypeMap;
    }
}

export namespace Passport {
    export enum TypeEnum {
        Unknown = <any> 'UNKNOWN',
        Regular = <any> 'REGULAR'
    }
}
