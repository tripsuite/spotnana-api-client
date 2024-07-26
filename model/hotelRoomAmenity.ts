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
* Hotel Room amenities
*/
export class HotelRoomAmenity {
    /**
    * Extra information about the room amenity
    */
    'additionalInfo'?: string;
    /**
    * Is amenity complimentary
    */
    'complimentary'?: boolean;
    /**
    * Room amenity type
    */
    'type'?: HotelRoomAmenity.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalInfo",
            "baseName": "additionalInfo",
            "type": "string"
        },
        {
            "name": "complimentary",
            "baseName": "complimentary",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "HotelRoomAmenity.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return HotelRoomAmenity.attributeTypeMap;
    }
}

export namespace HotelRoomAmenity {
    export enum TypeEnum {
        Unknown = <any> 'UNKNOWN',
        AdjoiningRooms = <any> 'ADJOINING_ROOMS',
        AirConditioning = <any> 'AIR_CONDITIONING',
        AlarmClock = <any> 'ALARM_CLOCK',
        AllNewsChannel = <any> 'ALL_NEWS_CHANNEL',
        AmFmRadio = <any> 'AM_FM_RADIO',
        BabyListeningDevice = <any> 'BABY_LISTENING_DEVICE',
        BalconyLanaiTerrace = <any> 'BALCONY_LANAI_TERRACE',
        BarbequeGrills = <any> 'BARBEQUE_GRILLS',
        BathTubWithSprayJets = <any> 'BATH_TUB_WITH_SPRAY_JETS',
        Bathrobe = <any> 'BATHROBE',
        BathroomAmenities = <any> 'BATHROOM_AMENITIES',
        BathroomTelephone = <any> 'BATHROOM_TELEPHONE',
        Bathtub = <any> 'BATHTUB',
        BathtubOnly = <any> 'BATHTUB_ONLY',
        BathtubShowerCombination = <any> 'BATHTUB_SHOWER_COMBINATION',
        Bidet = <any> 'BIDET',
        BottledWater = <any> 'BOTTLED_WATER',
        CableTelevision = <any> 'CABLE_TELEVISION',
        CoffeeTeaMaker = <any> 'COFFEE_TEA_MAKER',
        ColorTelevision = <any> 'COLOR_TELEVISION',
        Computer = <any> 'COMPUTER',
        ConnectingRooms = <any> 'CONNECTING_ROOMS',
        ConvertersVoltageAdaptors = <any> 'CONVERTERS_VOLTAGE_ADAPTORS',
        Copier = <any> 'COPIER',
        CordlessPhone = <any> 'CORDLESS_PHONE',
        Cribs = <any> 'CRIBS',
        DataPort = <any> 'DATA_PORT',
        Desk = <any> 'DESK',
        DeskWithLamp = <any> 'DESK_WITH_LAMP',
        DiningGuide = <any> 'DINING_GUIDE',
        DirectDialPhoneNumber = <any> 'DIRECT_DIAL_PHONE_NUMBER',
        Dishwasher = <any> 'DISHWASHER',
        DoubleBeds = <any> 'DOUBLE_BEDS',
        DualVoltageOutlet = <any> 'DUAL_VOLTAGE_OUTLET',
        ElectricalCurrentVoltage = <any> 'ELECTRICAL_CURRENT_VOLTAGE',
        ErgonomicChair = <any> 'ERGONOMIC_CHAIR',
        ExtendedPhoneCord = <any> 'EXTENDED_PHONE_CORD',
        FaxMachine = <any> 'FAX_MACHINE',
        FireAlarm = <any> 'FIRE_ALARM',
        FireAlarmWithLight = <any> 'FIRE_ALARM_WITH_LIGHT',
        Fireplace = <any> 'FIREPLACE',
        FreeTollFreeCalls = <any> 'FREE_TOLL_FREE_CALLS',
        FreeCalls = <any> 'FREE_CALLS',
        FreeCreditCardAccessCalls = <any> 'FREE_CREDIT_CARD_ACCESS_CALLS',
        FreeLocalCalls = <any> 'FREE_LOCAL_CALLS',
        FreeMoviesVideo = <any> 'FREE_MOVIES_VIDEO',
        FullKitchen = <any> 'FULL_KITCHEN',
        GrabBarsInBathroom = <any> 'GRAB_BARS_IN_BATHROOM',
        GrecianTub = <any> 'GRECIAN_TUB',
        Hairdryer = <any> 'HAIRDRYER',
        HighSpeedInternetConnection = <any> 'HIGH_SPEED_INTERNET_CONNECTION',
        InteractiveWebTv = <any> 'INTERACTIVE_WEB_TV',
        InternationalDirectDialing = <any> 'INTERNATIONAL_DIRECT_DIALING',
        InternetAccess = <any> 'INTERNET_ACCESS',
        Iron = <any> 'IRON',
        IroningBoard = <any> 'IRONING_BOARD',
        Whirpool = <any> 'WHIRPOOL',
        KingBed = <any> 'KING_BED',
        Kitchen = <any> 'KITCHEN',
        KitchenSupplies = <any> 'KITCHEN_SUPPLIES',
        Kitchenette = <any> 'KITCHENETTE',
        KnockLight = <any> 'KNOCK_LIGHT',
        Laptop = <any> 'LAPTOP',
        LargeDesk = <any> 'LARGE_DESK',
        LargeWorkArea = <any> 'LARGE_WORK_AREA',
        LaundryBasketClothesHamper = <any> 'LAUNDRY_BASKET_CLOTHES_HAMPER',
        Loft = <any> 'LOFT',
        Microwave = <any> 'MICROWAVE',
        Minibar = <any> 'MINIBAR',
        Modem = <any> 'MODEM',
        ModemJack = <any> 'MODEM_JACK',
        MultilinePhone = <any> 'MULTILINE_PHONE',
        Newspaper = <any> 'NEWSPAPER',
        Nonsmoking = <any> 'NONSMOKING',
        Notepads = <any> 'NOTEPADS',
        OfficeSupplies = <any> 'OFFICE_SUPPLIES',
        Oven = <any> 'OVEN',
        PayPerViewMoviesOnTv = <any> 'PAY_PER_VIEW_MOVIES_ON_TV',
        Pens = <any> 'PENS',
        PhoneInBathroom = <any> 'PHONE_IN_BATHROOM',
        PlatesAndBowls = <any> 'PLATES_AND_BOWLS',
        PotsAndPans = <any> 'POTS_AND_PANS',
        PrayerMats = <any> 'PRAYER_MATS',
        Printer = <any> 'PRINTER',
        PrivateBathroom = <any> 'PRIVATE_BATHROOM',
        QueenBed = <any> 'QUEEN_BED',
        Recliner = <any> 'RECLINER',
        Refrigerator = <any> 'REFRIGERATOR',
        RefrigeratorWithIceMaker = <any> 'REFRIGERATOR_WITH_ICE_MAKER',
        RemoteControlTelevision = <any> 'REMOTE_CONTROL_TELEVISION',
        RollawayBed = <any> 'ROLLAWAY_BED',
        Safe = <any> 'SAFE',
        Scanner = <any> 'SCANNER',
        SeparateCloset = <any> 'SEPARATE_CLOSET',
        SeparateModemLineAvailable = <any> 'SEPARATE_MODEM_LINE_AVAILABLE',
        ShoePolisher = <any> 'SHOE_POLISHER',
        ShowerOnly = <any> 'SHOWER_ONLY',
        SilverwareUtensils = <any> 'SILVERWARE_UTENSILS',
        SittingArea = <any> 'SITTING_AREA',
        SmokeDetectors = <any> 'SMOKE_DETECTORS',
        Smoking = <any> 'SMOKING',
        SofaBed = <any> 'SOFA_BED',
        SpeakerPhone = <any> 'SPEAKER_PHONE',
        Stereo = <any> 'STEREO',
        Stove = <any> 'STOVE',
        TapeRecorder = <any> 'TAPE_RECORDER',
        Telephone = <any> 'TELEPHONE',
        TelephoneForHearingImpaired = <any> 'TELEPHONE_FOR_HEARING_IMPAIRED',
        TelephonesWithMessageLight = <any> 'TELEPHONES_WITH_MESSAGE_LIGHT',
        ToasterOven = <any> 'TOASTER_OVEN',
        TrouserPantPress = <any> 'TROUSER_PANT_PRESS',
        TurnDownService = <any> 'TURN_DOWN_SERVICE',
        TwinBed = <any> 'TWIN_BED',
        VaultedCeilings = <any> 'VAULTED_CEILINGS',
        VcrMovies = <any> 'VCR_MOVIES',
        VcrPlayer = <any> 'VCR_PLAYER',
        VideoGamesAmenity = <any> 'VIDEO_GAMES_AMENITY',
        VoiceMail = <any> 'VOICE_MAIL',
        WakeupCalls = <any> 'WAKEUP_CALLS',
        WaterCloset = <any> 'WATER_CLOSET',
        WaterPurificationSystem = <any> 'WATER_PURIFICATION_SYSTEM',
        WetBar = <any> 'WET_BAR',
        WirelessInternetConnection = <any> 'WIRELESS_INTERNET_CONNECTION',
        WirelessKeyboard = <any> 'WIRELESS_KEYBOARD',
        AdaptorAvailableForTelephonePcUse = <any> 'ADAPTOR_AVAILABLE_FOR_TELEPHONE_PC_USE',
        AirConditioningIndividuallyControlledInRoom = <any> 'AIR_CONDITIONING_INDIVIDUALLY_CONTROLLED_IN_ROOM',
        BathtubAndwhirlpoolSeparate = <any> 'BATHTUB_ANDWHIRLPOOL_SEPARATE',
        TelephoneWithDataPorts = <any> 'TELEPHONE_WITH_DATA_PORTS',
        CdPlayer = <any> 'CD_PLAYER',
        ComplimentaryLocalCallsTimeLimit = <any> 'COMPLIMENTARY_LOCAL_CALLS_TIME_LIMIT',
        ExtraPersonChargeForRollawayUse = <any> 'EXTRA_PERSON_CHARGE_FOR_ROLLAWAY_USE',
        DownFeatherPillows = <any> 'DOWN_FEATHER_PILLOWS',
        DeskWithElectricalOutlet = <any> 'DESK_WITH_ELECTRICAL_OUTLET',
        EspnAvailable = <any> 'ESPN_AVAILABLE',
        FoamPillows = <any> 'FOAM_PILLOWS',
        HboAvailable = <any> 'HBO_AVAILABLE',
        HighCeilings = <any> 'HIGH_CEILINGS',
        MarbleBathroom = <any> 'MARBLE_BATHROOM',
        ListOfMovieChannelsAvailable = <any> 'LIST_OF_MOVIE_CHANNELS_AVAILABLE',
        PetsAllowed = <any> 'PETS_ALLOWED',
        OversizedBathtub = <any> 'OVERSIZED_BATHTUB',
        Shower = <any> 'SHOWER',
        SinkInroom = <any> 'SINK_INROOM',
        SoundproofedRoom = <any> 'SOUNDPROOFED_ROOM',
        StorageSpace = <any> 'STORAGE_SPACE',
        TablesAndChairs = <any> 'TABLES_AND_CHAIRS',
        TwolinePhone = <any> 'TWOLINE_PHONE',
        WalkinCloset = <any> 'WALKIN_CLOSET',
        WasherDryer = <any> 'WASHER_DRYER',
        WeightScale = <any> 'WEIGHT_SCALE',
        WelcomeGift = <any> 'WELCOME_GIFT',
        SpareElectricalOutletAvailableAtDesk = <any> 'SPARE_ELECTRICAL_OUTLET_AVAILABLE_AT_DESK',
        NonrefundableChargeForPets = <any> 'NONREFUNDABLE_CHARGE_FOR_PETS',
        RefundableDepositForPets = <any> 'REFUNDABLE_DEPOSIT_FOR_PETS',
        SeparateTubAndShower = <any> 'SEPARATE_TUB_AND_SHOWER',
        EntranceTypeToGuestRoom = <any> 'ENTRANCE_TYPE_TO_GUEST_ROOM',
        CeilingFan = <any> 'CEILING_FAN',
        CnnAvailable = <any> 'CNN_AVAILABLE',
        ElectricalAdaptorsAvailable = <any> 'ELECTRICAL_ADAPTORS_AVAILABLE',
        BuffetBreakfast = <any> 'BUFFET_BREAKFAST',
        AccessibleRoom = <any> 'ACCESSIBLE_ROOM',
        ClosetsInRoom = <any> 'CLOSETS_IN_ROOM',
        DvdPlayer = <any> 'DVD_PLAYER',
        Minirefrigerator = <any> 'MINIREFRIGERATOR',
        SeparateLineBillingForMultilinePhone = <any> 'SEPARATE_LINE_BILLING_FOR_MULTILINE_PHONE',
        SelfcontrolledHeatingCoolingSystem = <any> 'SELFCONTROLLED_HEATING_COOLING_SYSTEM',
        Toaster = <any> 'TOASTER',
        AnalogDataPort = <any> 'ANALOG_DATA_PORT',
        CollectCalls = <any> 'COLLECT_CALLS',
        InternationalCalls = <any> 'INTERNATIONAL_CALLS',
        CarrierAccess = <any> 'CARRIER_ACCESS',
        InterstateCalls = <any> 'INTERSTATE_CALLS',
        IntrastateCalls = <any> 'INTRASTATE_CALLS',
        LocalCalls = <any> 'LOCAL_CALLS',
        LongDistanceCalls = <any> 'LONG_DISTANCE_CALLS',
        OperatorassistedCalls = <any> 'OPERATORASSISTED_CALLS',
        CreditCardAccessCalls = <any> 'CREDIT_CARD_ACCESS_CALLS',
        CallingCardCalls = <any> 'CALLING_CARD_CALLS',
        TollFreeCalls = <any> 'TOLL_FREE_CALLS',
        UniversalAcDcAdaptors = <any> 'UNIVERSAL_AC_DC_ADAPTORS',
        BathtubSeat = <any> 'BATHTUB_SEAT',
        CanopyPosterBed = <any> 'CANOPY_POSTER_BED',
        CupsGlassware = <any> 'CUPS_GLASSWARE',
        EntertainmentCenter = <any> 'ENTERTAINMENT_CENTER',
        FamilyOversizedRoom = <any> 'FAMILY_OVERSIZED_ROOM',
        HypoallergenicBed = <any> 'HYPOALLERGENIC_BED',
        HypoallergenicPillows = <any> 'HYPOALLERGENIC_PILLOWS',
        Lamp = <any> 'LAMP',
        MealIncludedBreakfast = <any> 'MEAL_INCLUDED_BREAKFAST',
        MealIncludedContinentalBreakfast = <any> 'MEAL_INCLUDED_CONTINENTAL_BREAKFAST',
        MealIncludedDinner = <any> 'MEAL_INCLUDED_DINNER',
        MealIncludedLunch = <any> 'MEAL_INCLUDED_LUNCH',
        SharedBathroom = <any> 'SHARED_BATHROOM',
        TelephoneTddTextphone = <any> 'TELEPHONE_TDD_TEXTPHONE',
        WaterBed = <any> 'WATER_BED',
        ExtraAdultCharge = <any> 'EXTRA_ADULT_CHARGE',
        ExtraChildCharge = <any> 'EXTRA_CHILD_CHARGE',
        ExtraChildChargeForRollawayUse = <any> 'EXTRA_CHILD_CHARGE_FOR_ROLLAWAY_USE',
        MealIncludedFullAmericanBreakfast = <any> 'MEAL_INCLUDED_FULL_AMERICAN_BREAKFAST',
        Futon = <any> 'FUTON',
        MurphyBed = <any> 'MURPHY_BED',
        TatamiMats = <any> 'TATAMI_MATS',
        SingleBed = <any> 'SINGLE_BED',
        AnnexRoom = <any> 'ANNEX_ROOM',
        FreeNewspaper = <any> 'FREE_NEWSPAPER',
        HoneymoonSuites = <any> 'HONEYMOON_SUITES',
        ComplimentaryHighSpeedInternetInRoom = <any> 'COMPLIMENTARY_HIGH_SPEED_INTERNET_IN_ROOM',
        MaidService = <any> 'MAID_SERVICE',
        PcHookupInRoom = <any> 'PC_HOOKUP_IN_ROOM',
        SatelliteTelevision = <any> 'SATELLITE_TELEVISION',
        VipRooms = <any> 'VIP_ROOMS',
        CellPhoneRecharger = <any> 'CELL_PHONE_RECHARGER',
        DvrPlayer = <any> 'DVR_PLAYER',
        IpodDockingStation = <any> 'IPOD_DOCKING_STATION',
        MediaCenter = <any> 'MEDIA_CENTER',
        PlugAndPlayPanel = <any> 'PLUG_AND_PLAY_PANEL',
        SatelliteRadio = <any> 'SATELLITE_RADIO',
        VideoOnDemand = <any> 'VIDEO_ON_DEMAND',
        ExteriorCorridors = <any> 'EXTERIOR_CORRIDORS',
        GulfView = <any> 'GULF_VIEW',
        AccessibleRoomAmenity = <any> 'ACCESSIBLE_ROOM_AMENITY',
        InteriorCorridors = <any> 'INTERIOR_CORRIDORS',
        MountainView = <any> 'MOUNTAIN_VIEW',
        OceanView = <any> 'OCEAN_VIEW',
        HighSpeedInternetAccessFee = <any> 'HIGH_SPEED_INTERNET_ACCESS_FEE',
        HighSpeedWireless = <any> 'HIGH_SPEED_WIRELESS',
        PremiumMovieChannels = <any> 'PREMIUM_MOVIE_CHANNELS',
        Slippers = <any> 'SLIPPERS',
        FirstNightersKit = <any> 'FIRST_NIGHTERS_KIT',
        ChairProvidedWithDesk = <any> 'CHAIR_PROVIDED_WITH_DESK',
        PillowTopMattress = <any> 'PILLOW_TOP_MATTRESS',
        FeatherBed = <any> 'FEATHER_BED',
        Duvet = <any> 'DUVET',
        LuxuryLinenType = <any> 'LUXURY_LINEN_TYPE',
        InternationalChannels = <any> 'INTERNATIONAL_CHANNELS',
        Pantry = <any> 'PANTRY',
        DishcleaningSupplies = <any> 'DISHCLEANING_SUPPLIES',
        DoubleVanity = <any> 'DOUBLE_VANITY',
        LightedMakeupMirror = <any> 'LIGHTED_MAKEUP_MIRROR',
        UpgradedBathroomAmenities = <any> 'UPGRADED_BATHROOM_AMENITIES',
        VcrPlayerAvailableAtFrontDesk = <any> 'VCR_PLAYER_AVAILABLE_AT_FRONT_DESK',
        InstantHotWater = <any> 'INSTANT_HOT_WATER',
        OutdoorSpace = <any> 'OUTDOOR_SPACE',
        HinokiTub = <any> 'HINOKI_TUB',
        PrivatePool = <any> 'PRIVATE_POOL',
        HighDefinitionHdFlatPanelTelevision32InchesOrGreater = <any> 'HIGH_DEFINITION_HD_FLAT_PANEL_TELEVISION_32_INCHES_OR_GREATER',
        RoomWindowsOpen = <any> 'ROOM_WINDOWS_OPEN',
        BeddingTypeUnknownOrUnspecified = <any> 'BEDDING_TYPE_UNKNOWN_OR_UNSPECIFIED',
        FullBed = <any> 'FULL_BED',
        RoundBed = <any> 'ROUND_BED',
        Tv = <any> 'TV',
        ChildRollaway = <any> 'CHILD_ROLLAWAY',
        DvdPlayerAvailableAtFrontDesk = <any> 'DVD_PLAYER_AVAILABLE_AT_FRONT_DESK',
        VideoGamePlayer = <any> 'VIDEO_GAME_PLAYER',
        VideoGamePlayerAvailableAtFrontDesk = <any> 'VIDEO_GAME_PLAYER_AVAILABLE_AT_FRONT_DESK',
        DiningRoomSeats = <any> 'DINING_ROOM_SEATS',
        FullSizeMirror = <any> 'FULL_SIZE_MIRROR',
        MobileCellularPhones = <any> 'MOBILE_CELLULAR_PHONES',
        Movies = <any> 'MOVIES',
        MultipleClosets = <any> 'MULTIPLE_CLOSETS',
        PlatesGlassware = <any> 'PLATES_GLASSWARE',
        SafeLargeEnoughToAccommodateALaptop = <any> 'SAFE_LARGE_ENOUGH_TO_ACCOMMODATE_A_LAPTOP',
        BedLinenThreadCount = <any> 'BED_LINEN_THREAD_COUNT',
        BlackoutCurtain = <any> 'BLACKOUT_CURTAIN',
        BlurayPlayer = <any> 'BLURAY_PLAYER',
        DeviceWithMp3 = <any> 'DEVICE_WITH_MP3',
        NoAdultChannelsOrAdultChannelLock = <any> 'NO_ADULT_CHANNELS_OR_ADULT_CHANNEL_LOCK',
        NonallergenicRoom = <any> 'NONALLERGENIC_ROOM',
        PillowType = <any> 'PILLOW_TYPE',
        SeatingAreaWithSofaChair = <any> 'SEATING_AREA_WITH_SOFA_CHAIR',
        SeparateToiletArea = <any> 'SEPARATE_TOILET_AREA',
        WebEnabled = <any> 'WEB_ENABLED',
        WidescreenTv = <any> 'WIDESCREEN_TV',
        OtherDataConnection = <any> 'OTHER_DATA_CONNECTION',
        PhonelineBilledSeparately = <any> 'PHONELINE_BILLED_SEPARATELY',
        SeparateTubOrShower = <any> 'SEPARATE_TUB_OR_SHOWER',
        VideoGames = <any> 'VIDEO_GAMES',
        RoofVentilator = <any> 'ROOF_VENTILATOR',
        ChildrensPlaypen = <any> 'CHILDRENS_PLAYPEN',
        PlungePool = <any> 'PLUNGE_POOL',
        DvdMovies = <any> 'DVD_MOVIES',
        AirFiltration = <any> 'AIR_FILTRATION'
    }
}