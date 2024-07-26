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
import { EventEntityMetadata } from './eventEntityMetadata';
import { EventMetadataWrapper } from './eventMetadataWrapper';
import { InvoiceMetadata } from './invoiceMetadata';
import { PnrMetadata } from './pnrMetadata';
import { PnrMetadataWrapper } from './pnrMetadataWrapper';
import { TravelType } from './travelType';

/**
* Metadata for associated entity of document.
*/
export class EntityMetadata {
    'pnrMetadata'?: PnrMetadata;
    'invoiceMetadata'?: InvoiceMetadata;
    'travelType': TravelType;
    'eventMetadata'?: EventEntityMetadata;

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
        },
        {
            "name": "eventMetadata",
            "baseName": "eventMetadata",
            "type": "EventEntityMetadata"
        }    ];

    static getAttributeTypeMap() {
        return EntityMetadata.attributeTypeMap;
    }
}

export namespace EntityMetadata {
}