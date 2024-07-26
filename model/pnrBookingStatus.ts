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
* User facing status for this booking
*/
export enum PnrBookingStatus {
    Pending = <any> 'PENDING',
    Confirmed = <any> 'CONFIRMED',
    Active = <any> 'ACTIVE',
    Completed = <any> 'COMPLETED',
    Cancelled = <any> 'CANCELLED',
    Refunded = <any> 'REFUNDED',
    Voided = <any> 'VOIDED',
    Processing = <any> 'PROCESSING',
    Unconfirmed = <any> 'UNCONFIRMED',
    AirlineControl = <any> 'AIRLINE_CONTROL',
    PaymentDeclined = <any> 'PAYMENT_DECLINED',
    ScheduleChange = <any> 'SCHEDULE_CHANGE',
    Unknown = <any> 'UNKNOWN',
    Hold = <any> 'HOLD',
    ApprovalRequested = <any> 'APPROVAL_REQUESTED',
    ApprovalDenied = <any> 'APPROVAL_DENIED',
    CancellationInProgress = <any> 'CANCELLATION_IN_PROGRESS',
    InoperativeStatus = <any> 'INOPERATIVE_STATUS',
    FlightUnconfirmedStatus = <any> 'FLIGHT_UNCONFIRMED_STATUS'
}