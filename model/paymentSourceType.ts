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
* Type of Payment Source
*/
export enum PaymentSourceType {
    Card = <any> 'CARD',
    VirtualCard = <any> 'VIRTUAL_CARD',
    RewardsProgram = <any> 'REWARDS_PROGRAM',
    DelayedInvoicing = <any> 'DELAYED_INVOICING',
    CustomPaymentMethod = <any> 'CUSTOM_PAYMENT_METHOD',
    VendorProgramPayment = <any> 'VENDOR_PROGRAM_PAYMENT',
    UnusedCredit = <any> 'UNUSED_CREDIT'
}
