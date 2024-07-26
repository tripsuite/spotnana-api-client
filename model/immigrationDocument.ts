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
import { Duration } from './duration';

/**
* Immigration document details.
*/
export class ImmigrationDocument {
    /**
    * Duration of the stay authorized by the immigration document.
    */
    'authorizedStayDuration'?: Duration;
    /**
    * The ID of the immigration document.
    */
    'docId': string;
    /**
    * The date on which the immigration document expires.
    */
    'expiryDate': DateModel;
    /**
    * The country that issued the immigration document.
    */
    'issueCountry': string;
    /**
    * The date on which the immigration document was issued.
    */
    'issuedDate'?: DateModel;
    'nationalityCountry'?: string;
    'reentryRequirementDuration'?: Duration;
    'type'?: ImmigrationDocument.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authorizedStayDuration",
            "baseName": "authorizedStayDuration",
            "type": "Duration"
        },
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
            "name": "reentryRequirementDuration",
            "baseName": "reentryRequirementDuration",
            "type": "Duration"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ImmigrationDocument.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return ImmigrationDocument.attributeTypeMap;
    }
}

export namespace ImmigrationDocument {
    export enum TypeEnum {
        Unknown = <any> 'UNKNOWN',
        Visa = <any> 'VISA'
    }
}
