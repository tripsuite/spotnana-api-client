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
* Entity type against which the document is to uploaded.
*/
export enum EntityType {
    Trip = <any> 'TRIP',
    Pnr = <any> 'PNR',
    Company = <any> 'COMPANY',
    AirItinerary = <any> 'AIR_ITINERARY',
    Event = <any> 'EVENT',
    LocationImage = <any> 'LOCATION_IMAGE'
}