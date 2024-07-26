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
* Room options and stay preference.
*/
export class RoomPreference {
    /**
    * Whether or not mobility accessible room, tub.
    */
    'isMobilityAccessible'?: boolean = false;
    /**
    * The number of bed in the room.
    */
    'bedCount'?: RoomPreference.BedCountEnum;
    /**
    * Single selection of type of room.
    */
    'roomType'?: RoomPreference.RoomTypeEnum;
    /**
    * Single selection of the most import fact.
    */
    'mostImportantFact'?: RoomPreference.MostImportantFactEnum;
    /**
    * Location of the hotel room
    */
    'roomLocation'?: RoomPreference.RoomLocationEnum;
    /**
    * The type of pillow in hotel room.
    */
    'pillowType'?: RoomPreference.PillowTypeEnum;
    'roomAmenityPrefs'?: Array<RoomPreference.RoomAmenityPrefsEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isMobilityAccessible",
            "baseName": "isMobilityAccessible",
            "type": "boolean"
        },
        {
            "name": "bedCount",
            "baseName": "bedCount",
            "type": "RoomPreference.BedCountEnum"
        },
        {
            "name": "roomType",
            "baseName": "roomType",
            "type": "RoomPreference.RoomTypeEnum"
        },
        {
            "name": "mostImportantFact",
            "baseName": "mostImportantFact",
            "type": "RoomPreference.MostImportantFactEnum"
        },
        {
            "name": "roomLocation",
            "baseName": "roomLocation",
            "type": "RoomPreference.RoomLocationEnum"
        },
        {
            "name": "pillowType",
            "baseName": "pillowType",
            "type": "RoomPreference.PillowTypeEnum"
        },
        {
            "name": "roomAmenityPrefs",
            "baseName": "roomAmenityPrefs",
            "type": "Array<RoomPreference.RoomAmenityPrefsEnum>"
        }    ];

    static getAttributeTypeMap() {
        return RoomPreference.attributeTypeMap;
    }
}

export namespace RoomPreference {
    export enum BedCountEnum {
        OneBed = <any> 'ONE_BED',
        TwoBeds = <any> 'TWO_BEDS'
    }
    export enum RoomTypeEnum {
        Smoking = <any> 'SMOKING',
        NonSmoking = <any> 'NON_SMOKING'
    }
    export enum MostImportantFactEnum {
        RoomType = <any> 'ROOM_TYPE',
        BedCount = <any> 'BED_COUNT',
        RoomLocation = <any> 'ROOM_LOCATION'
    }
    export enum RoomLocationEnum {
        HighFloor = <any> 'HIGH_FLOOR',
        LowFloor = <any> 'LOW_FLOOR',
        NearElevator = <any> 'NEAR_ELEVATOR'
    }
    export enum PillowTypeEnum {
        Foam = <any> 'FOAM',
        ExtraFoam = <any> 'EXTRA_FOAM',
        ExtraFeather = <any> 'EXTRA_FEATHER'
    }
    export enum RoomAmenityPrefsEnum {
        FeatherFreeRoom = <any> 'FEATHER_FREE_ROOM',
        ExtraTowels = <any> 'EXTRA_TOWELS',
        Refrigerator = <any> 'REFRIGERATOR'
    }
}
