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
import { DateTimeOffset } from './dateTimeOffset';
import { EventRsvpResponse } from './eventRsvpResponse';
import { EventRsvpState } from './eventRsvpState';
import { UserId } from './userId';

/**
* User rsvp for the event
*/
export class EventUserRsvp {
    'userId'?: UserId;
    'eventRsvpState'?: EventRsvpState;
    'eventRsvpResponse'?: EventRsvpResponse;
    'invitedAt'?: DateTimeOffset;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "UserId"
        },
        {
            "name": "eventRsvpState",
            "baseName": "eventRsvpState",
            "type": "EventRsvpState"
        },
        {
            "name": "eventRsvpResponse",
            "baseName": "eventRsvpResponse",
            "type": "EventRsvpResponse"
        },
        {
            "name": "invitedAt",
            "baseName": "invitedAt",
            "type": "DateTimeOffset"
        }    ];

    static getAttributeTypeMap() {
        return EventUserRsvp.attributeTypeMap;
    }
}

export namespace EventUserRsvp {
}