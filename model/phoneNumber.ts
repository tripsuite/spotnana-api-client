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
* Properly formatted phone number.
*/
export class PhoneNumber {
    /**
    * two digit country code
    */
    'countryCode'?: number;
    'countryCodeSource'?: PhoneNumber.CountryCodeSourceEnum;
    /**
    * phone number extension
    */
    'extension'?: string;
    /**
    * ISO alpha-2 code
    */
    'isoCountryCode'?: string;
    'italianLeadingZero'?: boolean = false;
    'nationalNumber'?: number;
    'numberOfLeadingZeros'?: number = 0;
    'preferredDomesticCarrierCode'?: string;
    'rawInput'?: string;
    'type'?: PhoneNumber.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "number"
        },
        {
            "name": "countryCodeSource",
            "baseName": "countryCodeSource",
            "type": "PhoneNumber.CountryCodeSourceEnum"
        },
        {
            "name": "extension",
            "baseName": "extension",
            "type": "string"
        },
        {
            "name": "isoCountryCode",
            "baseName": "isoCountryCode",
            "type": "string"
        },
        {
            "name": "italianLeadingZero",
            "baseName": "italianLeadingZero",
            "type": "boolean"
        },
        {
            "name": "nationalNumber",
            "baseName": "nationalNumber",
            "type": "number"
        },
        {
            "name": "numberOfLeadingZeros",
            "baseName": "numberOfLeadingZeros",
            "type": "number"
        },
        {
            "name": "preferredDomesticCarrierCode",
            "baseName": "preferredDomesticCarrierCode",
            "type": "string"
        },
        {
            "name": "rawInput",
            "baseName": "rawInput",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PhoneNumber.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PhoneNumber.attributeTypeMap;
    }
}

export namespace PhoneNumber {
    export enum CountryCodeSourceEnum {
        Unspecified = <any> 'UNSPECIFIED',
        FromNumberWithPlusSign = <any> 'FROM_NUMBER_WITH_PLUS_SIGN',
        FromNumberWithIdd = <any> 'FROM_NUMBER_WITH_IDD',
        FromNumberWithoutPlusSign = <any> 'FROM_NUMBER_WITHOUT_PLUS_SIGN',
        FromDefaultCountry = <any> 'FROM_DEFAULT_COUNTRY'
    }
    export enum TypeEnum {
        UnknownType = <any> 'UNKNOWN_TYPE',
        Mobile = <any> 'MOBILE',
        Landline = <any> 'LANDLINE'
    }
}
