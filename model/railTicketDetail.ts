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
import { ETicketMetadata } from './eTicketMetadata';
import { RailDeliveryOption } from './railDeliveryOption';

/**
* Ticket details of the travelers.
*/
export class RailTicketDetail {
    /**
    * Delivery Options selected for the section.
    */
    'deliveryOption': RailDeliveryOption;
    'eticketMetadata'?: ETicketMetadata;
    /**
    * For KIOSK, it contains the reference number of the ticket. For ELECTRONIC_TICKET, it contains the path where the actual content of the ticket is. 
    */
    'reference'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deliveryOption",
            "baseName": "deliveryOption",
            "type": "RailDeliveryOption"
        },
        {
            "name": "eticketMetadata",
            "baseName": "eticketMetadata",
            "type": "ETicketMetadata"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RailTicketDetail.attributeTypeMap;
    }
}

export namespace RailTicketDetail {
}