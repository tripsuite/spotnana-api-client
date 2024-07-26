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
import { InvoiceMetadata } from './invoiceMetadata';
import { PnrMetadata } from './pnrMetadata';
import { TravelType } from './travelType';

export class PnrMetadataWrapper {
    'pnrMetadata'?: PnrMetadata;
    'invoiceMetadata'?: InvoiceMetadata;
    'travelType': TravelType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pnrMetadata",
            "baseName": "pnrMetadata",
            "type": "PnrMetadata"
        },
        {
            "name": "invoiceMetadata",
            "baseName": "invoiceMetadata",
            "type": "InvoiceMetadata"
        },
        {
            "name": "travelType",
            "baseName": "travelType",
            "type": "TravelType"
        }    ];

    static getAttributeTypeMap() {
        return PnrMetadataWrapper.attributeTypeMap;
    }
}

export namespace PnrMetadataWrapper {
}