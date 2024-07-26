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
import { Latlng } from './latlng';

/**
* Postal Address Details
*/
export class PostalAddress {
    /**
    * Address lines
    */
    'addressLines': Array<string>;
    /**
    * Code of administrative area. For example: DL for Delhi, India. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. \"Barcelona\" and not \"Catalonia\"). Many countries don\'t use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. 
    */
    'administrativeArea'?: string;
    /**
    * Name of administrative area. This is full name corresponding to administrativeArea.  Like Delhi for DL area code. For some places, code and name maybe same as well like Tokyo. 
    */
    'administrativeAreaName'?: string;
    /**
    * Address description
    */
    'description'?: string;
    /**
    * Whether this address is default address in case multiple addresses are specified.
    */
    'isDefault'?: boolean;
    /**
    * BCP-47 language code of the contents of this address (if known). This is often the UI  language of the input form or is expected to match one of the languages used in the  address\' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness  of the data and will never affect any validation or other non-formatting related operations. Examples: \"zh-Hant\", \"ja\", \"ja-Latn\", \"en\". 
    */
    'languageCode'?: string;
    /**
    * Generally refers to the city/town portion of the address.
    */
    'locality'?: string;
    /**
    * IATA 3-letter location code. See https://www.iata.org/en/services/codes.
    */
    'locationCode'?: string;
    /**
    * The name of the organization at the address.
    */
    'organization'?: string;
    /**
    * Postal code of the address. This is a required field when setting for a user/legal entity/company etc.
    */
    'postalCode'?: string;
    /**
    * 2 letter continent code of the continent this address falls in.
    */
    'continentCode'?: string;
    /**
    * The recipient at the address.
    */
    'recipients'?: Array<string>;
    /**
    * Region code of the country/region of the address.
    */
    'regionCode': string;
    /**
    * Region name of the country/region of the address.
    */
    'regionName'?: string;
    'revision'?: number;
    /**
    * Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like \"CEDEX\", optionally followed by a number (e.g. \"CEDEX 7\"), or just a number alone, representing the \"sector code\" (Jamaica), \"delivery area indicator\" (Malawi) or \"post office indicator\" (e.g. Côte d\'Ivoire). 
    */
    'sortingCode'?: string;
    /**
    * Sublocality of the address. This can be neighborhoods, boroughs, districts.
    */
    'sublocality'?: string;
    /**
    * Time zone of the address.
    */
    'timezone'?: string;
    /**
    * Map coordinates of the address.
    */
    'coordinates'?: Latlng;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressLines",
            "baseName": "addressLines",
            "type": "Array<string>"
        },
        {
            "name": "administrativeArea",
            "baseName": "administrativeArea",
            "type": "string"
        },
        {
            "name": "administrativeAreaName",
            "baseName": "administrativeAreaName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "isDefault",
            "baseName": "isDefault",
            "type": "boolean"
        },
        {
            "name": "languageCode",
            "baseName": "languageCode",
            "type": "string"
        },
        {
            "name": "locality",
            "baseName": "locality",
            "type": "string"
        },
        {
            "name": "locationCode",
            "baseName": "locationCode",
            "type": "string"
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "continentCode",
            "baseName": "continentCode",
            "type": "string"
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "Array<string>"
        },
        {
            "name": "regionCode",
            "baseName": "regionCode",
            "type": "string"
        },
        {
            "name": "regionName",
            "baseName": "regionName",
            "type": "string"
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "number"
        },
        {
            "name": "sortingCode",
            "baseName": "sortingCode",
            "type": "string"
        },
        {
            "name": "sublocality",
            "baseName": "sublocality",
            "type": "string"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        },
        {
            "name": "coordinates",
            "baseName": "coordinates",
            "type": "Latlng"
        }    ];

    static getAttributeTypeMap() {
        return PostalAddress.attributeTypeMap;
    }
}
