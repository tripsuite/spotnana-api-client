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
import { DateTimeLocal } from './dateTimeLocal';
import { Document } from './document';
import { EntityId } from './entityId';
import { EventAllowedBookingType } from './eventAllowedBookingType';
import { EventBookingGuideline } from './eventBookingGuideline';
import { EventLocation } from './eventLocation';
import { EventRunningStatus } from './eventRunningStatus';
import { EventStatus } from './eventStatus';
import { EventUserInfo } from './eventUserInfo';
import { EventUserRsvp } from './eventUserRsvp';
import { UserId } from './userId';

/**
* Event summary for a traveler
*/
export class TravelerEventSummary {
    /**
    * Event ID
    */
    'id': string;
    /**
    * Name of the event
    */
    'name'?: string;
    /**
    * Description of the event
    */
    'description'?: string;
    'startDateTime'?: DateTimeLocal;
    'endDateTime'?: DateTimeLocal;
    'location'?: EventLocation;
    /**
    * Event contacts for the traveler
    */
    'contacts'?: Array<UserId>;
    /**
    * List of documents associated with this event for the traveler
    */
    'documents'?: Array<Document>;
    /**
    * Booking details allowed for the event for the traveler
    */
    'bookingGuidelines'?: Array<EventBookingGuideline>;
    /**
    * Allowed booking types for the event for the traveler
    */
    'allowedBookingTypes'?: Array<EventAllowedBookingType>;
    'eventUserRsvp'?: EventUserRsvp;
    /**
    * Event contacts for the traveler
    */
    'contactInfoList'?: Array<EventUserInfo>;
    'companyId'?: EntityId;
    'runningStatus'?: EventRunningStatus;
    'status'?: EventStatus;
    /**
    * Whether the traveler is part of the event.
    */
    'isRemovedParticipant'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "startDateTime",
            "baseName": "startDateTime",
            "type": "DateTimeLocal"
        },
        {
            "name": "endDateTime",
            "baseName": "endDateTime",
            "type": "DateTimeLocal"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "EventLocation"
        },
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<UserId>"
        },
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<Document>"
        },
        {
            "name": "bookingGuidelines",
            "baseName": "bookingGuidelines",
            "type": "Array<EventBookingGuideline>"
        },
        {
            "name": "allowedBookingTypes",
            "baseName": "allowedBookingTypes",
            "type": "Array<EventAllowedBookingType>"
        },
        {
            "name": "eventUserRsvp",
            "baseName": "eventUserRsvp",
            "type": "EventUserRsvp"
        },
        {
            "name": "contactInfoList",
            "baseName": "contactInfoList",
            "type": "Array<EventUserInfo>"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "EntityId"
        },
        {
            "name": "runningStatus",
            "baseName": "runningStatus",
            "type": "EventRunningStatus"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "EventStatus"
        },
        {
            "name": "isRemovedParticipant",
            "baseName": "isRemovedParticipant",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TravelerEventSummary.attributeTypeMap;
    }
}

export namespace TravelerEventSummary {
}
