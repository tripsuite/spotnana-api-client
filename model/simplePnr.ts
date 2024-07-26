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
import { PnrStatus } from './pnrStatus';
import { SimpleAirPnrInfo } from './simpleAirPnrInfo';
import { SimpleCarPnrInfo } from './simpleCarPnrInfo';
import { SimpleHotelPnrInfo } from './simpleHotelPnrInfo';
import { SimpleRailPnrInfo } from './simpleRailPnrInfo';
import { ThirdPartySource } from './thirdPartySource';
import { UserFacingStatus } from './userFacingStatus';

/**
* Basic information related to PNRs that were not successfully mapped into Spotnana PNR  protos. This basic information can be used to power a basic card for a traveler. 
*/
export class SimplePnr {
    /**
    * Spotnana PNR Id
    */
    'pnrId': string;
    /**
    * The source PNR reference (Sabre PNR, NDC booking reference etc.)
    */
    'sourcePnrId': string;
    /**
    * Source of the booking e.g. Sabre, NDC etc.
    */
    'source': ThirdPartySource;
    /**
    * Air PNR specific information.
    */
    'air'?: SimpleAirPnrInfo;
    /**
    * Hotel PNR specific information.
    */
    'hotel'?: SimpleHotelPnrInfo;
    /**
    * Car PNR specific information.
    */
    'car'?: SimpleCarPnrInfo;
    /**
    * Rail PNR specific information.
    */
    'rail'?: SimpleRailPnrInfo;
    /**
    * Pnr status for this booking.
    */
    'pnrStatus'?: PnrStatus;
    /**
    * User facing status for this booking.
    */
    'userFacingStatus'?: UserFacingStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pnrId",
            "baseName": "pnrId",
            "type": "string"
        },
        {
            "name": "sourcePnrId",
            "baseName": "sourcePnrId",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "ThirdPartySource"
        },
        {
            "name": "air",
            "baseName": "air",
            "type": "SimpleAirPnrInfo"
        },
        {
            "name": "hotel",
            "baseName": "hotel",
            "type": "SimpleHotelPnrInfo"
        },
        {
            "name": "car",
            "baseName": "car",
            "type": "SimpleCarPnrInfo"
        },
        {
            "name": "rail",
            "baseName": "rail",
            "type": "SimpleRailPnrInfo"
        },
        {
            "name": "pnrStatus",
            "baseName": "pnrStatus",
            "type": "PnrStatus"
        },
        {
            "name": "userFacingStatus",
            "baseName": "userFacingStatus",
            "type": "UserFacingStatus"
        }    ];

    static getAttributeTypeMap() {
        return SimplePnr.attributeTypeMap;
    }
}

export namespace SimplePnr {
}
