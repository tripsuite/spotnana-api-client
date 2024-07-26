import localVarRequest from 'request';

export * from './actualPayment';
export * from './addRemarksRequest';
export * from './addRemarksResponse';
export * from './adhocUserInfo';
export * from './air';
export * from './airBookingGuideline';
export * from './airBookingGuidelineWrapper';
export * from './airCancellationDetails';
export * from './airCancellationDetailsWrapper';
export * from './airCancellationNotSupportedReason';
export * from './airCancellationOption';
export * from './airCancellationState';
export * from './airCancellationType';
export * from './airConditioning';
export * from './airFareInfo';
export * from './airPnrRemark';
export * from './airPref';
export * from './airPriceOptimizationMetadata';
export * from './airPriceOptimizationMetadataWrapper';
export * from './airRsvpResponse';
export * from './airTravelerCancellationInfo';
export * from './airVendorCancellationInfo';
export * from './airVendorCancellationObject';
export * from './airline';
export * from './airlineInfo';
export * from './airlinePref';
export * from './airlineProgram';
export * from './airlineProgramMetadata';
export * from './airlineProgramWrapper';
export * from './airportInfo';
export * from './alliance';
export * from './alliancePref';
export * from './amadeusCheckoutMetadata';
export * from './amadeusCheckoutMetadataWrapper';
export * from './ancillaryFlightId';
export * from './ancillaryType';
export * from './answerPair';
export * from './appliedCreditInfo';
export * from './approvalInfo';
export * from './assessmentType';
export * from './automatedCancellationInfo';
export * from './automatedExchangeInfo';
export * from './bagFees';
export * from './bagPolicyApplicability';
export * from './bagWeightLimit';
export * from './baggageInfo';
export * from './baggagePolicy';
export * from './basicTripInfo';
export * from './bedType';
export * from './boardingPass';
export * from './bookerInfo';
export * from './booking';
export * from './bookingHistory';
export * from './bookingInfo';
export * from './bookingMetadata';
export * from './bookingOtherAncillariesInner';
export * from './bookingOtherChargesInner';
export * from './bookingSeatsInner';
export * from './boolWrapper';
export * from './brexBudgetMetadata';
export * from './brexBudgetMetadataWrapper';
export * from './buyerInfo';
export * from './cO2EmissionDetail';
export * from './cOGS';
export * from './cTC';
export * from './cabin';
export * from './cancelDetail';
export * from './cancelObjectDetail';
export * from './cancellationDetails';
export * from './cancellationInfo';
export * from './cancellationPolicy1';
export * from './cancellationPolicy2';
export * from './cancellationRequestStatus';
export * from './car';
export * from './carAmenities';
export * from './carBookingGuideline';
export * from './carBookingGuidelineWrapper';
export * from './carCo2EmissionDetail';
export * from './carInfo';
export * from './carLocation';
export * from './carPref';
export * from './carRsvpResponse';
export * from './carSpec';
export * from './carType';
export * from './carVendor';
export * from './card';
export * from './cardAccessEntity';
export * from './cardCompany';
export * from './cardExpiry';
export * from './cardMetadata';
export * from './cardMetadata2';
export * from './cardMetadataWrapper';
export * from './centralCardAccessLevel';
export * from './co2EmissionDetails';
export * from './coachPref';
export * from './commission';
export * from './companyConfigSource';
export * from './companyConfigSourceWrapper';
export * from './companyId';
export * from './companyRef';
export * from './companySpecifiedAttribute';
export * from './companySpecifiedAttributeLegalEntity';
export * from './condition';
export * from './conditionalRate';
export * from './confermaInfo';
export * from './connectionRiskAlert';
export * from './cost';
export * from './cost1';
export * from './costCenter';
export * from './costCenterId';
export * from './costCommission';
export * from './costExtrasInner';
export * from './costRefundInfo';
export * from './costTaxBreakdown';
export * from './costTaxBreakdownTaxInner';
export * from './counterLocation';
export * from './createTripRequest';
export * from './createdVia';
export * from './creditCardAccess';
export * from './creditCardAccessType';
export * from './creditStatus';
export * from './customField';
export * from './customFieldId';
export * from './customFieldLocation';
export * from './customFieldMatchConditions';
export * from './customFieldOptionsParam';
export * from './customFieldType';
export * from './customPaymentMethodMetadata';
export * from './customPaymentMethodMetadataWrapper';
export * from './dateModel';
export * from './dateRange';
export * from './dateTimeLocal';
export * from './dateTimeOffset';
export * from './dateTimeRange';
export * from './deckLevel';
export * from './department';
export * from './departmentId';
export * from './departmentV2';
export * from './dimensions';
export * from './directBilling';
export * from './directBilling2';
export * from './directBillingWrapper';
export * from './directBillingWrapper2';
export * from './document';
export * from './documentMetadata';
export * from './documentType';
export * from './doubleListWrapper';
export * from './doubleRange';
export * from './doubleRangeWrapper';
export * from './doubleWrapper';
export * from './downloadInvoiceResponse';
export * from './driver';
export * from './duration';
export * from './eTicketMetadata';
export * from './electricVehicle';
export * from './emergencyContactInfo';
export * from './engineType';
export * from './entityAnswer';
export * from './entityId';
export * from './entityMetadata';
export * from './entityNonUUIDId';
export * from './entityType';
export * from './equipment';
export * from './errorParameter';
export * from './errorResponse';
export * from './errorResponseErrorMessagesInner';
export * from './eventAllowedBookingType';
export * from './eventBookingGuideline';
export * from './eventBookingWindow';
export * from './eventEntityMetadata';
export * from './eventLocation';
export * from './eventMetadataWrapper';
export * from './eventRsvpResponse';
export * from './eventRsvpState';
export * from './eventRunningStatus';
export * from './eventStatus';
export * from './eventUserInfo';
export * from './eventUserRsvp';
export * from './exchangeInfo';
export * from './exchangeInfo1';
export * from './exchangePayment';
export * from './exchangePolicy';
export * from './expiry';
export * from './expiryWrapper';
export * from './failureReason';
export * from './fareAmount';
export * from './fareComponentDetail';
export * from './fareOffers';
export * from './farePref';
export * from './fareStatistics';
export * from './finalizeIntent';
export * from './finalizeMetadata';
export * from './finalizeRequest';
export * from './flight';
export * from './flightAndLegIndex';
export * from './flightCoupon';
export * from './flightCredits';
export * from './flightDetailInformation';
export * from './flightFareBreakup';
export * from './flightId';
export * from './flightMetadata';
export * from './flightMetadataWrapper';
export * from './flightNumber';
export * from './flightRestrictions';
export * from './flightSeatStatus';
export * from './flightUpdates';
export * from './formOfPayment';
export * from './freshnessInfo';
export * from './gate';
export * from './gatewayInfo';
export * from './gender';
export * from './grade';
export * from './gradeId';
export * from './hiddenStop';
export * from './holdInfo';
export * from './hotel';
export * from './hotelAdditionalDetail';
export * from './hotelAdditionalDetailType';
export * from './hotelAmenities';
export * from './hotelAmenityType';
export * from './hotelBookingGuideline';
export * from './hotelBookingGuidelineWrapper';
export * from './hotelBrand';
export * from './hotelChain';
export * from './hotelCo2EmissionDetail';
export * from './hotelDescription';
export * from './hotelImageCategory';
export * from './hotelImageSet';
export * from './hotelInfo';
export * from './hotelOccupancy';
export * from './hotelPayment';
export * from './hotelPref';
export * from './hotelPrefAmenity';
export * from './hotelRateAssuranceMetadata';
export * from './hotelRoomAmenity';
export * from './hotelRoomMeal';
export * from './hotelRoomMealType';
export * from './hotelRoomMealsIncluded';
export * from './hotelRsvpResponse';
export * from './hotelSpecialRequests';
export * from './hotelTravelerInfo';
export * from './idInfo';
export * from './identityDocument';
export * from './image';
export * from './imageGroup';
export * from './immigrationDocument';
export * from './immigrationDocumentWrapper';
export * from './int32Range';
export * from './int32RangeWrapper';
export * from './int32Wrapper';
export * from './int64Wrapper';
export * from './intListWrapper';
export * from './invoice';
export * from './invoiceData';
export * from './invoiceDataRequest';
export * from './invoiceDataResponse';
export * from './invoiceInfo';
export * from './invoiceMetadata';
export * from './item';
export * from './itemCTC';
export * from './itinerary';
export * from './keywordWithReasonListWrapper';
export * from './keywordsWithReasonList';
export * from './knownTravelerNumber';
export * from './knownTravelerNumberWrapper';
export * from './lLFInfo';
export * from './lLFPnrInfo';
export * from './latlng';
export * from './leg';
export * from './legInfo';
export * from './legMetadata';
export * from './legMetadataWrapper';
export * from './legUpdates';
export * from './legalEntityId';
export * from './legalEntityIdListWrapper';
export * from './legalEntityIdWrapper';
export * from './length';
export * from './lengthWrapper';
export * from './limoDetails';
export * from './limoInfo';
export * from './limoLegInfo';
export * from './limoVendorInfo';
export * from './listOrganisationTripsRequest';
export * from './listOrganisationTripsResponse';
export * from './locationContactInfo';
export * from './locationOperatingSchedule';
export * from './loyaltyDetails';
export * from './loyaltyInfo';
export * from './luggageInfo';
export * from './manualVerificationIntent';
export * from './manualVerificationIntentWrapper';
export * from './manualVerificationReason';
export * from './mealPref';
export * from './mealType';
export * from './miscInfo';
export * from './money';
export * from './moneyOtherCoinageInner';
export * from './moneyWrapper';
export * from './name';
export * from './nameSuffix';
export * from './nationalDoc';
export * from './nationalDocWrapper';
export * from './numStopsPref';
export * from './offerExpiryInfo';
export * from './office';
export * from './officeId';
export * from './officeIdListWrapper';
export * from './officeIdWrapper';
export * from './option';
export * from './optionInfo';
export * from './optionSource';
export * from './optionSourceMetadata';
export * from './orgTripInfo';
export * from './organizationAgencyId';
export * from './organizationId';
export * from './otherAncillaryFare';
export * from './otherServiceInformationDetail';
export * from './otherStatus';
export * from './passengerType';
export * from './passport';
export * from './passportWrapper';
export * from './payment';
export * from './paymentDetails';
export * from './paymentInfo';
export * from './paymentInfo1';
export * from './paymentInformation';
export * from './paymentInstruction';
export * from './paymentMetadata';
export * from './paymentMetadataCustomPaymentMethodMetadata';
export * from './paymentMetadataCustomPaymentMethodMetadataBrexBudgetMetadata';
export * from './paymentMethod';
export * from './paymentSourceMetadata';
export * from './paymentSourceType';
export * from './paymentTransactionInfo';
export * from './percentageWrapper';
export * from './persona';
export * from './personaListWrapper';
export * from './personaWrapper';
export * from './phoneNumber';
export * from './pnrBookingStatus';
export * from './pnrCancelRequest';
export * from './pnrCancelRequestBookingEmailInfo';
export * from './pnrCancellationDetails';
export * from './pnrCreationDetails';
export * from './pnrData';
export * from './pnrDataAdditionalMetadata';
export * from './pnrDataExternalInfo';
export * from './pnrDetailsResponseWithId';
export * from './pnrInfo';
export * from './pnrMetadata';
export * from './pnrMetadataWrapper';
export * from './pnrPolicyId';
export * from './pnrPolicyInfo';
export * from './pnrResponseOnExternalId';
export * from './pnrStatus';
export * from './pnrTaxBreakdown';
export * from './pnrTraveler';
export * from './pointsBalance';
export * from './policyAction';
export * from './policyAlertOnSelectionAction';
export * from './policyAlertOnSelectionActionWrapper';
export * from './policyConstValue';
export * from './policyFlagAction';
export * from './policyFlagActionWrapper';
export * from './policyHideActionWrapper';
export * from './policyInfo';
export * from './policyPredicate';
export * from './policyPreventBookingAction';
export * from './policyPreventBookingActionWrapper';
export * from './policyRuleResultInfo';
export * from './policyTakeApprovalAction';
export * from './policyTakeApprovalActionWrapper';
export * from './policyViolationInfo';
export * from './postalAddress';
export * from './postalAddressWrapper';
export * from './preBookAnswers';
export * from './preCheckoutQuestionType';
export * from './preDefinedAnswers';
export * from './preSearchQuestionType';
export * from './preference';
export * from './preferredAirport';
export * from './preferredLocationLabel';
export * from './preferredPronoun';
export * from './preferredRailStation';
export * from './preferredType';
export * from './primaryServiceProviderTmc';
export * from './processPnrApprovalRequest';
export * from './productType';
export * from './profileOwner';
export * from './programDetails';
export * from './qcFinalizationWrapper';
export * from './qcFinalizeData';
export * from './question';
export * from './questionFormat';
export * from './questionType';
export * from './rail';
export * from './railAllocatedSpace';
export * from './railAmenityType';
export * from './railAncillary';
export * from './railBookingGuideline';
export * from './railBookingGuidelineWrapper';
export * from './railCancellationDetails';
export * from './railCancellationDetailsWrapper';
export * from './railCard';
export * from './railDeliveryOption';
export * from './railFareComposition';
export * from './railFareDetail';
export * from './railFareType';
export * from './railPnrAmenity';
export * from './railPnrFareInfo';
export * from './railPnrFareLegInfo';
export * from './railPnrJourneyInfo';
export * from './railPnrLegInfo';
export * from './railPnrSectionInfo';
export * from './railPnrTicket';
export * from './railPnrVendorConfirmation';
export * from './railPref';
export * from './railRateInfo';
export * from './railRefundOption';
export * from './railRefundRateInfo';
export * from './railRefundVoucher';
export * from './railRsvpResponse';
export * from './railSearchType';
export * from './railSeatPreferenceSelection';
export * from './railStationInfo';
export * from './railTicketAsset';
export * from './railTicketDetail';
export * from './railTravelClass';
export * from './railVehicle';
export * from './rateInfo';
export * from './rateMetadata';
export * from './rateType';
export * from './ratingWrapper';
export * from './rebookReference';
export * from './redressNumber';
export * from './redressNumberWrapper';
export * from './reference';
export * from './referenceId';
export * from './refundInfo';
export * from './refundInfoDetail';
export * from './regionCode';
export * from './requestedByDetails';
export * from './restrictedKeywordsWithReason';
export * from './rewardsProgramMetadata';
export * from './rewardsProgramMetadataWrapper';
export * from './rewardsProgramType';
export * from './room';
export * from './roomAmenitiy';
export * from './roomClass';
export * from './roomPreference';
export * from './roomRoomInfo';
export * from './roomRoomInfoRoomView';
export * from './roomType';
export * from './roomView';
export * from './sabrePnrRemark';
export * from './sabrePnrRemarkType';
export * from './sabrePnrRemarkWrapper';
export * from './savingsFare';
export * from './scheduleChangeInfo';
export * from './scheduleChangeRefundInfo';
export * from './seatAmenityPref';
export * from './seatLocationPref';
export * from './seatPref';
export * from './seatPrefDirection';
export * from './seatPrefLocation';
export * from './seatPrefType';
export * from './secondaryServiceProviderTmc';
export * from './selectedPaymentSource';
export * from './sellerInfo';
export * from './serviceFee';
export * from './shellPnrInfo';
export * from './simpleAirPnrInfo';
export * from './simpleAirportInfo';
export * from './simpleCarPnrInfo';
export * from './simpleFlightInfo';
export * from './simpleHotelPnrInfo';
export * from './simpleLegInfo';
export * from './simpleMoney';
export * from './simplePnr';
export * from './simpleRailLegInfo';
export * from './simpleRailPnrInfo';
export * from './simpleRailStationInfo';
export * from './simpleSectionInfo';
export * from './sizeInfo';
export * from './sourceInfo';
export * from './sourceRefInfo';
export * from './specialServiceRequestInfoDetail';
export * from './splitOptionByCardCompany';
export * from './statisticsItem';
export * from './stringListWrapper';
export * from './stringWrapper';
export * from './stripeInfo';
export * from './stripeInfoWrapper';
export * from './supplierType';
export * from './suspendRequest';
export * from './tax';
export * from './tax1';
export * from './taxAmount';
export * from './termsAndConditions';
export * from './thirdPartyPnrRemark';
export * from './thirdPartySource';
export * from './ticket';
export * from './ticketAncillary';
export * from './ticketCancellationInfo';
export * from './ticketExchangePolicy';
export * from './ticketRefundPolicy';
export * from './ticketScheduleChangeInformation';
export * from './tier';
export * from './timeLocal';
export * from './tmcBasicInfo';
export * from './tmcInfo';
export * from './tokenizedExpiry';
export * from './tokenizedExpiryWrapper';
export * from './transmission';
export * from './transmissionSearchFilter';
export * from './travelCard';
export * from './travelClassHierarchy';
export * from './travelClassHierarchyWrapper';
export * from './travelPref';
export * from './travelRegionType';
export * from './travelType';
export * from './traveler';
export * from './travelerBusinessInfo';
export * from './travelerCompanyInfo';
export * from './travelerEventSummary';
export * from './travelerInfo';
export * from './travelerLegalEntity';
export * from './travelerMatchConditions';
export * from './travelerPersonalInfo';
export * from './travelerRailInfo';
export * from './travelerRestrictions';
export * from './tripAdditionalInfo';
export * from './tripBudgetInfo';
export * from './tripBudgetInfoWrapper';
export * from './tripPartnerInfo';
export * from './tripPartnerInfoDetails';
export * from './tripPartnerInfoResponse';
export * from './tripPartnerInfoType';
export * from './tripUsageType';
export * from './tripV3DetailsResponse';
export * from './uAPassPlusMetadata';
export * from './uAPassPlusMetadataWrapper';
export * from './uATPInformation';
export * from './uATPMetadata';
export * from './uATPMetadataWrapper';
export * from './unusedCreditInfo';
export * from './updateTripRequest';
export * from './user';
export * from './userBasicInfo';
export * from './userBusinessInfo';
export * from './userFacingStatus';
export * from './userId';
export * from './userOrgId';
export * from './userOrgIdListWrapper';
export * from './userOrgIdWrapper';
export * from './userPersonalInfo';
export * from './userTitle';
export * from './vendor';
export * from './vendorInfo';
export * from './vendorProgramPaymentDescriptor';
export * from './vendorProgramPaymentDescriptorWrapper';
export * from './vendorProgramPaymentMetadata';
export * from './vendorProgramPaymentMetadata2';
export * from './virtualCardInfo';
export * from './virtualCardMetadata';
export * from './virtualCardMetadataWrapper';
export * from './virtualCardPaymentMetadata';
export * from './virtualCardVendor';
export * from './virtualCardVendorInfo';
export * from './voucher';
export * from './weightLimit';
export * from './workerType';
export * from './workerTypeListWrapper';
export * from './workerTypeWrapper';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ActualPayment } from './actualPayment';
import { AddRemarksRequest } from './addRemarksRequest';
import { AddRemarksResponse } from './addRemarksResponse';
import { AdhocUserInfo } from './adhocUserInfo';
import { Air } from './air';
import { AirBookingGuideline } from './airBookingGuideline';
import { AirBookingGuidelineWrapper } from './airBookingGuidelineWrapper';
import { AirCancellationDetails } from './airCancellationDetails';
import { AirCancellationDetailsWrapper } from './airCancellationDetailsWrapper';
import { AirCancellationNotSupportedReason } from './airCancellationNotSupportedReason';
import { AirCancellationOption } from './airCancellationOption';
import { AirCancellationState } from './airCancellationState';
import { AirCancellationType } from './airCancellationType';
import { AirConditioning } from './airConditioning';
import { AirFareInfo } from './airFareInfo';
import { AirPnrRemark } from './airPnrRemark';
import { AirPref } from './airPref';
import { AirPriceOptimizationMetadata } from './airPriceOptimizationMetadata';
import { AirPriceOptimizationMetadataWrapper } from './airPriceOptimizationMetadataWrapper';
import { AirRsvpResponse } from './airRsvpResponse';
import { AirTravelerCancellationInfo } from './airTravelerCancellationInfo';
import { AirVendorCancellationInfo } from './airVendorCancellationInfo';
import { AirVendorCancellationObject } from './airVendorCancellationObject';
import { Airline } from './airline';
import { AirlineInfo } from './airlineInfo';
import { AirlinePref } from './airlinePref';
import { AirlineProgram } from './airlineProgram';
import { AirlineProgramMetadata } from './airlineProgramMetadata';
import { AirlineProgramWrapper } from './airlineProgramWrapper';
import { AirportInfo } from './airportInfo';
import { Alliance } from './alliance';
import { AlliancePref } from './alliancePref';
import { AmadeusCheckoutMetadata } from './amadeusCheckoutMetadata';
import { AmadeusCheckoutMetadataWrapper } from './amadeusCheckoutMetadataWrapper';
import { AncillaryFlightId } from './ancillaryFlightId';
import { AncillaryType } from './ancillaryType';
import { AnswerPair } from './answerPair';
import { AppliedCreditInfo } from './appliedCreditInfo';
import { ApprovalInfo } from './approvalInfo';
import { AssessmentType } from './assessmentType';
import { AutomatedCancellationInfo } from './automatedCancellationInfo';
import { AutomatedExchangeInfo } from './automatedExchangeInfo';
import { BagFees } from './bagFees';
import { BagPolicyApplicability } from './bagPolicyApplicability';
import { BagWeightLimit } from './bagWeightLimit';
import { BaggageInfo } from './baggageInfo';
import { BaggagePolicy } from './baggagePolicy';
import { BasicTripInfo } from './basicTripInfo';
import { BedType } from './bedType';
import { BoardingPass } from './boardingPass';
import { BookerInfo } from './bookerInfo';
import { Booking } from './booking';
import { BookingHistory } from './bookingHistory';
import { BookingInfo } from './bookingInfo';
import { BookingMetadata } from './bookingMetadata';
import { BookingOtherAncillariesInner } from './bookingOtherAncillariesInner';
import { BookingOtherChargesInner } from './bookingOtherChargesInner';
import { BookingSeatsInner } from './bookingSeatsInner';
import { BoolWrapper } from './boolWrapper';
import { BrexBudgetMetadata } from './brexBudgetMetadata';
import { BrexBudgetMetadataWrapper } from './brexBudgetMetadataWrapper';
import { BuyerInfo } from './buyerInfo';
import { CO2EmissionDetail } from './cO2EmissionDetail';
import { COGS } from './cOGS';
import { CTC } from './cTC';
import { Cabin } from './cabin';
import { CancelDetail } from './cancelDetail';
import { CancelObjectDetail } from './cancelObjectDetail';
import { CancellationDetails } from './cancellationDetails';
import { CancellationInfo } from './cancellationInfo';
import { CancellationPolicy1 } from './cancellationPolicy1';
import { CancellationPolicy2 } from './cancellationPolicy2';
import { CancellationRequestStatus } from './cancellationRequestStatus';
import { Car } from './car';
import { CarAmenities } from './carAmenities';
import { CarBookingGuideline } from './carBookingGuideline';
import { CarBookingGuidelineWrapper } from './carBookingGuidelineWrapper';
import { CarCo2EmissionDetail } from './carCo2EmissionDetail';
import { CarInfo } from './carInfo';
import { CarLocation } from './carLocation';
import { CarPref } from './carPref';
import { CarRsvpResponse } from './carRsvpResponse';
import { CarSpec } from './carSpec';
import { CarType } from './carType';
import { CarVendor } from './carVendor';
import { Card } from './card';
import { CardAccessEntity } from './cardAccessEntity';
import { CardCompany } from './cardCompany';
import { CardExpiry } from './cardExpiry';
import { CardMetadata } from './cardMetadata';
import { CardMetadata2 } from './cardMetadata2';
import { CardMetadataWrapper } from './cardMetadataWrapper';
import { CentralCardAccessLevel } from './centralCardAccessLevel';
import { Co2EmissionDetails } from './co2EmissionDetails';
import { CoachPref } from './coachPref';
import { Commission } from './commission';
import { CompanyConfigSource } from './companyConfigSource';
import { CompanyConfigSourceWrapper } from './companyConfigSourceWrapper';
import { CompanyId } from './companyId';
import { CompanyRef } from './companyRef';
import { CompanySpecifiedAttribute } from './companySpecifiedAttribute';
import { CompanySpecifiedAttributeLegalEntity } from './companySpecifiedAttributeLegalEntity';
import { Condition } from './condition';
import { ConditionalRate } from './conditionalRate';
import { ConfermaInfo } from './confermaInfo';
import { ConnectionRiskAlert } from './connectionRiskAlert';
import { Cost } from './cost';
import { Cost1 } from './cost1';
import { CostCenter } from './costCenter';
import { CostCenterId } from './costCenterId';
import { CostCommission } from './costCommission';
import { CostExtrasInner } from './costExtrasInner';
import { CostRefundInfo } from './costRefundInfo';
import { CostTaxBreakdown } from './costTaxBreakdown';
import { CostTaxBreakdownTaxInner } from './costTaxBreakdownTaxInner';
import { CounterLocation } from './counterLocation';
import { CreateTripRequest } from './createTripRequest';
import { CreatedVia } from './createdVia';
import { CreditCardAccess } from './creditCardAccess';
import { CreditCardAccessType } from './creditCardAccessType';
import { CreditStatus } from './creditStatus';
import { CustomField } from './customField';
import { CustomFieldId } from './customFieldId';
import { CustomFieldLocation } from './customFieldLocation';
import { CustomFieldMatchConditions } from './customFieldMatchConditions';
import { CustomFieldOptionsParam } from './customFieldOptionsParam';
import { CustomFieldType } from './customFieldType';
import { CustomPaymentMethodMetadata } from './customPaymentMethodMetadata';
import { CustomPaymentMethodMetadataWrapper } from './customPaymentMethodMetadataWrapper';
import { DateModel } from './dateModel';
import { DateRange } from './dateRange';
import { DateTimeLocal } from './dateTimeLocal';
import { DateTimeOffset } from './dateTimeOffset';
import { DateTimeRange } from './dateTimeRange';
import { DeckLevel } from './deckLevel';
import { Department } from './department';
import { DepartmentId } from './departmentId';
import { DepartmentV2 } from './departmentV2';
import { Dimensions } from './dimensions';
import { DirectBilling } from './directBilling';
import { DirectBilling2 } from './directBilling2';
import { DirectBillingWrapper } from './directBillingWrapper';
import { DirectBillingWrapper2 } from './directBillingWrapper2';
import { Document } from './document';
import { DocumentMetadata } from './documentMetadata';
import { DocumentType } from './documentType';
import { DoubleListWrapper } from './doubleListWrapper';
import { DoubleRange } from './doubleRange';
import { DoubleRangeWrapper } from './doubleRangeWrapper';
import { DoubleWrapper } from './doubleWrapper';
import { DownloadInvoiceResponse } from './downloadInvoiceResponse';
import { Driver } from './driver';
import { Duration } from './duration';
import { ETicketMetadata } from './eTicketMetadata';
import { ElectricVehicle } from './electricVehicle';
import { EmergencyContactInfo } from './emergencyContactInfo';
import { EngineType } from './engineType';
import { EntityAnswer } from './entityAnswer';
import { EntityId } from './entityId';
import { EntityMetadata } from './entityMetadata';
import { EntityNonUUIDId } from './entityNonUUIDId';
import { EntityType } from './entityType';
import { Equipment } from './equipment';
import { ErrorParameter } from './errorParameter';
import { ErrorResponse } from './errorResponse';
import { ErrorResponseErrorMessagesInner } from './errorResponseErrorMessagesInner';
import { EventAllowedBookingType } from './eventAllowedBookingType';
import { EventBookingGuideline } from './eventBookingGuideline';
import { EventBookingWindow } from './eventBookingWindow';
import { EventEntityMetadata } from './eventEntityMetadata';
import { EventLocation } from './eventLocation';
import { EventMetadataWrapper } from './eventMetadataWrapper';
import { EventRsvpResponse } from './eventRsvpResponse';
import { EventRsvpState } from './eventRsvpState';
import { EventRunningStatus } from './eventRunningStatus';
import { EventStatus } from './eventStatus';
import { EventUserInfo } from './eventUserInfo';
import { EventUserRsvp } from './eventUserRsvp';
import { ExchangeInfo } from './exchangeInfo';
import { ExchangeInfo1 } from './exchangeInfo1';
import { ExchangePayment } from './exchangePayment';
import { ExchangePolicy } from './exchangePolicy';
import { Expiry } from './expiry';
import { ExpiryWrapper } from './expiryWrapper';
import { FailureReason } from './failureReason';
import { FareAmount } from './fareAmount';
import { FareComponentDetail } from './fareComponentDetail';
import { FareOffers } from './fareOffers';
import { FarePref } from './farePref';
import { FareStatistics } from './fareStatistics';
import { FinalizeIntent } from './finalizeIntent';
import { FinalizeMetadata } from './finalizeMetadata';
import { FinalizeRequest } from './finalizeRequest';
import { Flight } from './flight';
import { FlightAndLegIndex } from './flightAndLegIndex';
import { FlightCoupon } from './flightCoupon';
import { FlightCredits } from './flightCredits';
import { FlightDetailInformation } from './flightDetailInformation';
import { FlightFareBreakup } from './flightFareBreakup';
import { FlightId } from './flightId';
import { FlightMetadata } from './flightMetadata';
import { FlightMetadataWrapper } from './flightMetadataWrapper';
import { FlightNumber } from './flightNumber';
import { FlightRestrictions } from './flightRestrictions';
import { FlightSeatStatus } from './flightSeatStatus';
import { FlightUpdates } from './flightUpdates';
import { FormOfPayment } from './formOfPayment';
import { FreshnessInfo } from './freshnessInfo';
import { Gate } from './gate';
import { GatewayInfo } from './gatewayInfo';
import { Gender } from './gender';
import { Grade } from './grade';
import { GradeId } from './gradeId';
import { HiddenStop } from './hiddenStop';
import { HoldInfo } from './holdInfo';
import { Hotel } from './hotel';
import { HotelAdditionalDetail } from './hotelAdditionalDetail';
import { HotelAdditionalDetailType } from './hotelAdditionalDetailType';
import { HotelAmenities } from './hotelAmenities';
import { HotelAmenityType } from './hotelAmenityType';
import { HotelBookingGuideline } from './hotelBookingGuideline';
import { HotelBookingGuidelineWrapper } from './hotelBookingGuidelineWrapper';
import { HotelBrand } from './hotelBrand';
import { HotelChain } from './hotelChain';
import { HotelCo2EmissionDetail } from './hotelCo2EmissionDetail';
import { HotelDescription } from './hotelDescription';
import { HotelImageCategory } from './hotelImageCategory';
import { HotelImageSet } from './hotelImageSet';
import { HotelInfo } from './hotelInfo';
import { HotelOccupancy } from './hotelOccupancy';
import { HotelPayment } from './hotelPayment';
import { HotelPref } from './hotelPref';
import { HotelPrefAmenity } from './hotelPrefAmenity';
import { HotelRateAssuranceMetadata } from './hotelRateAssuranceMetadata';
import { HotelRoomAmenity } from './hotelRoomAmenity';
import { HotelRoomMeal } from './hotelRoomMeal';
import { HotelRoomMealType } from './hotelRoomMealType';
import { HotelRoomMealsIncluded } from './hotelRoomMealsIncluded';
import { HotelRsvpResponse } from './hotelRsvpResponse';
import { HotelSpecialRequests } from './hotelSpecialRequests';
import { HotelTravelerInfo } from './hotelTravelerInfo';
import { IdInfo } from './idInfo';
import { IdentityDocument } from './identityDocument';
import { Image } from './image';
import { ImageGroup } from './imageGroup';
import { ImmigrationDocument } from './immigrationDocument';
import { ImmigrationDocumentWrapper } from './immigrationDocumentWrapper';
import { Int32Range } from './int32Range';
import { Int32RangeWrapper } from './int32RangeWrapper';
import { Int32Wrapper } from './int32Wrapper';
import { Int64Wrapper } from './int64Wrapper';
import { IntListWrapper } from './intListWrapper';
import { Invoice } from './invoice';
import { InvoiceData } from './invoiceData';
import { InvoiceDataRequest } from './invoiceDataRequest';
import { InvoiceDataResponse } from './invoiceDataResponse';
import { InvoiceInfo } from './invoiceInfo';
import { InvoiceMetadata } from './invoiceMetadata';
import { Item } from './item';
import { ItemCTC } from './itemCTC';
import { Itinerary } from './itinerary';
import { KeywordWithReasonListWrapper } from './keywordWithReasonListWrapper';
import { KeywordsWithReasonList } from './keywordsWithReasonList';
import { KnownTravelerNumber } from './knownTravelerNumber';
import { KnownTravelerNumberWrapper } from './knownTravelerNumberWrapper';
import { LLFInfo } from './lLFInfo';
import { LLFPnrInfo } from './lLFPnrInfo';
import { Latlng } from './latlng';
import { Leg } from './leg';
import { LegInfo } from './legInfo';
import { LegMetadata } from './legMetadata';
import { LegMetadataWrapper } from './legMetadataWrapper';
import { LegUpdates } from './legUpdates';
import { LegalEntityId } from './legalEntityId';
import { LegalEntityIdListWrapper } from './legalEntityIdListWrapper';
import { LegalEntityIdWrapper } from './legalEntityIdWrapper';
import { Length } from './length';
import { LengthWrapper } from './lengthWrapper';
import { LimoDetails } from './limoDetails';
import { LimoInfo } from './limoInfo';
import { LimoLegInfo } from './limoLegInfo';
import { LimoVendorInfo } from './limoVendorInfo';
import { ListOrganisationTripsRequest } from './listOrganisationTripsRequest';
import { ListOrganisationTripsResponse } from './listOrganisationTripsResponse';
import { LocationContactInfo } from './locationContactInfo';
import { LocationOperatingSchedule } from './locationOperatingSchedule';
import { LoyaltyDetails } from './loyaltyDetails';
import { LoyaltyInfo } from './loyaltyInfo';
import { LuggageInfo } from './luggageInfo';
import { ManualVerificationIntent } from './manualVerificationIntent';
import { ManualVerificationIntentWrapper } from './manualVerificationIntentWrapper';
import { ManualVerificationReason } from './manualVerificationReason';
import { MealPref } from './mealPref';
import { MealType } from './mealType';
import { MiscInfo } from './miscInfo';
import { Money } from './money';
import { MoneyOtherCoinageInner } from './moneyOtherCoinageInner';
import { MoneyWrapper } from './moneyWrapper';
import { Name } from './name';
import { NameSuffix } from './nameSuffix';
import { NationalDoc } from './nationalDoc';
import { NationalDocWrapper } from './nationalDocWrapper';
import { NumStopsPref } from './numStopsPref';
import { OfferExpiryInfo } from './offerExpiryInfo';
import { Office } from './office';
import { OfficeId } from './officeId';
import { OfficeIdListWrapper } from './officeIdListWrapper';
import { OfficeIdWrapper } from './officeIdWrapper';
import { Option } from './option';
import { OptionInfo } from './optionInfo';
import { OptionSource } from './optionSource';
import { OptionSourceMetadata } from './optionSourceMetadata';
import { OrgTripInfo } from './orgTripInfo';
import { OrganizationAgencyId } from './organizationAgencyId';
import { OrganizationId } from './organizationId';
import { OtherAncillaryFare } from './otherAncillaryFare';
import { OtherServiceInformationDetail } from './otherServiceInformationDetail';
import { OtherStatus } from './otherStatus';
import { PassengerType } from './passengerType';
import { Passport } from './passport';
import { PassportWrapper } from './passportWrapper';
import { Payment } from './payment';
import { PaymentDetails } from './paymentDetails';
import { PaymentInfo } from './paymentInfo';
import { PaymentInfo1 } from './paymentInfo1';
import { PaymentInformation } from './paymentInformation';
import { PaymentInstruction } from './paymentInstruction';
import { PaymentMetadata } from './paymentMetadata';
import { PaymentMetadataCustomPaymentMethodMetadata } from './paymentMetadataCustomPaymentMethodMetadata';
import { PaymentMetadataCustomPaymentMethodMetadataBrexBudgetMetadata } from './paymentMetadataCustomPaymentMethodMetadataBrexBudgetMetadata';
import { PaymentMethod } from './paymentMethod';
import { PaymentSourceMetadata } from './paymentSourceMetadata';
import { PaymentSourceType } from './paymentSourceType';
import { PaymentTransactionInfo } from './paymentTransactionInfo';
import { PercentageWrapper } from './percentageWrapper';
import { Persona } from './persona';
import { PersonaListWrapper } from './personaListWrapper';
import { PersonaWrapper } from './personaWrapper';
import { PhoneNumber } from './phoneNumber';
import { PnrBookingStatus } from './pnrBookingStatus';
import { PnrCancelRequest } from './pnrCancelRequest';
import { PnrCancelRequestBookingEmailInfo } from './pnrCancelRequestBookingEmailInfo';
import { PnrCancellationDetails } from './pnrCancellationDetails';
import { PnrCreationDetails } from './pnrCreationDetails';
import { PnrData } from './pnrData';
import { PnrDataAdditionalMetadata } from './pnrDataAdditionalMetadata';
import { PnrDataExternalInfo } from './pnrDataExternalInfo';
import { PnrDetailsResponseWithId } from './pnrDetailsResponseWithId';
import { PnrInfo } from './pnrInfo';
import { PnrMetadata } from './pnrMetadata';
import { PnrMetadataWrapper } from './pnrMetadataWrapper';
import { PnrPolicyId } from './pnrPolicyId';
import { PnrPolicyInfo } from './pnrPolicyInfo';
import { PnrResponseOnExternalId } from './pnrResponseOnExternalId';
import { PnrStatus } from './pnrStatus';
import { PnrTaxBreakdown } from './pnrTaxBreakdown';
import { PnrTraveler } from './pnrTraveler';
import { PointsBalance } from './pointsBalance';
import { PolicyAction } from './policyAction';
import { PolicyAlertOnSelectionAction } from './policyAlertOnSelectionAction';
import { PolicyAlertOnSelectionActionWrapper } from './policyAlertOnSelectionActionWrapper';
import { PolicyConstValue } from './policyConstValue';
import { PolicyFlagAction } from './policyFlagAction';
import { PolicyFlagActionWrapper } from './policyFlagActionWrapper';
import { PolicyHideActionWrapper } from './policyHideActionWrapper';
import { PolicyInfo } from './policyInfo';
import { PolicyPredicate } from './policyPredicate';
import { PolicyPreventBookingAction } from './policyPreventBookingAction';
import { PolicyPreventBookingActionWrapper } from './policyPreventBookingActionWrapper';
import { PolicyRuleResultInfo } from './policyRuleResultInfo';
import { PolicyTakeApprovalAction } from './policyTakeApprovalAction';
import { PolicyTakeApprovalActionWrapper } from './policyTakeApprovalActionWrapper';
import { PolicyViolationInfo } from './policyViolationInfo';
import { PostalAddress } from './postalAddress';
import { PostalAddressWrapper } from './postalAddressWrapper';
import { PreBookAnswers } from './preBookAnswers';
import { PreCheckoutQuestionType } from './preCheckoutQuestionType';
import { PreDefinedAnswers } from './preDefinedAnswers';
import { PreSearchQuestionType } from './preSearchQuestionType';
import { Preference } from './preference';
import { PreferredAirport } from './preferredAirport';
import { PreferredLocationLabel } from './preferredLocationLabel';
import { PreferredPronoun } from './preferredPronoun';
import { PreferredRailStation } from './preferredRailStation';
import { PreferredType } from './preferredType';
import { PrimaryServiceProviderTmc } from './primaryServiceProviderTmc';
import { ProcessPnrApprovalRequest } from './processPnrApprovalRequest';
import { ProductType } from './productType';
import { ProfileOwner } from './profileOwner';
import { ProgramDetails } from './programDetails';
import { QcFinalizationWrapper } from './qcFinalizationWrapper';
import { QcFinalizeData } from './qcFinalizeData';
import { Question } from './question';
import { QuestionFormat } from './questionFormat';
import { QuestionType } from './questionType';
import { Rail } from './rail';
import { RailAllocatedSpace } from './railAllocatedSpace';
import { RailAmenityType } from './railAmenityType';
import { RailAncillary } from './railAncillary';
import { RailBookingGuideline } from './railBookingGuideline';
import { RailBookingGuidelineWrapper } from './railBookingGuidelineWrapper';
import { RailCancellationDetails } from './railCancellationDetails';
import { RailCancellationDetailsWrapper } from './railCancellationDetailsWrapper';
import { RailCard } from './railCard';
import { RailDeliveryOption } from './railDeliveryOption';
import { RailFareComposition } from './railFareComposition';
import { RailFareDetail } from './railFareDetail';
import { RailFareType } from './railFareType';
import { RailPnrAmenity } from './railPnrAmenity';
import { RailPnrFareInfo } from './railPnrFareInfo';
import { RailPnrFareLegInfo } from './railPnrFareLegInfo';
import { RailPnrJourneyInfo } from './railPnrJourneyInfo';
import { RailPnrLegInfo } from './railPnrLegInfo';
import { RailPnrSectionInfo } from './railPnrSectionInfo';
import { RailPnrTicket } from './railPnrTicket';
import { RailPnrVendorConfirmation } from './railPnrVendorConfirmation';
import { RailPref } from './railPref';
import { RailRateInfo } from './railRateInfo';
import { RailRefundOption } from './railRefundOption';
import { RailRefundRateInfo } from './railRefundRateInfo';
import { RailRefundVoucher } from './railRefundVoucher';
import { RailRsvpResponse } from './railRsvpResponse';
import { RailSearchType } from './railSearchType';
import { RailSeatPreferenceSelection } from './railSeatPreferenceSelection';
import { RailStationInfo } from './railStationInfo';
import { RailTicketAsset } from './railTicketAsset';
import { RailTicketDetail } from './railTicketDetail';
import { RailTravelClass } from './railTravelClass';
import { RailVehicle } from './railVehicle';
import { RateInfo } from './rateInfo';
import { RateMetadata } from './rateMetadata';
import { RateType } from './rateType';
import { RatingWrapper } from './ratingWrapper';
import { RebookReference } from './rebookReference';
import { RedressNumber } from './redressNumber';
import { RedressNumberWrapper } from './redressNumberWrapper';
import { Reference } from './reference';
import { ReferenceId } from './referenceId';
import { RefundInfo } from './refundInfo';
import { RefundInfoDetail } from './refundInfoDetail';
import { RegionCode } from './regionCode';
import { RequestedByDetails } from './requestedByDetails';
import { RestrictedKeywordsWithReason } from './restrictedKeywordsWithReason';
import { RewardsProgramMetadata } from './rewardsProgramMetadata';
import { RewardsProgramMetadataWrapper } from './rewardsProgramMetadataWrapper';
import { RewardsProgramType } from './rewardsProgramType';
import { Room } from './room';
import { RoomAmenitiy } from './roomAmenitiy';
import { RoomClass } from './roomClass';
import { RoomPreference } from './roomPreference';
import { RoomRoomInfo } from './roomRoomInfo';
import { RoomRoomInfoRoomView } from './roomRoomInfoRoomView';
import { RoomType } from './roomType';
import { RoomView } from './roomView';
import { SabrePnrRemark } from './sabrePnrRemark';
import { SabrePnrRemarkType } from './sabrePnrRemarkType';
import { SabrePnrRemarkWrapper } from './sabrePnrRemarkWrapper';
import { SavingsFare } from './savingsFare';
import { ScheduleChangeInfo } from './scheduleChangeInfo';
import { ScheduleChangeRefundInfo } from './scheduleChangeRefundInfo';
import { SeatAmenityPref } from './seatAmenityPref';
import { SeatLocationPref } from './seatLocationPref';
import { SeatPref } from './seatPref';
import { SeatPrefDirection } from './seatPrefDirection';
import { SeatPrefLocation } from './seatPrefLocation';
import { SeatPrefType } from './seatPrefType';
import { SecondaryServiceProviderTmc } from './secondaryServiceProviderTmc';
import { SelectedPaymentSource } from './selectedPaymentSource';
import { SellerInfo } from './sellerInfo';
import { ServiceFee } from './serviceFee';
import { ShellPnrInfo } from './shellPnrInfo';
import { SimpleAirPnrInfo } from './simpleAirPnrInfo';
import { SimpleAirportInfo } from './simpleAirportInfo';
import { SimpleCarPnrInfo } from './simpleCarPnrInfo';
import { SimpleFlightInfo } from './simpleFlightInfo';
import { SimpleHotelPnrInfo } from './simpleHotelPnrInfo';
import { SimpleLegInfo } from './simpleLegInfo';
import { SimpleMoney } from './simpleMoney';
import { SimplePnr } from './simplePnr';
import { SimpleRailLegInfo } from './simpleRailLegInfo';
import { SimpleRailPnrInfo } from './simpleRailPnrInfo';
import { SimpleRailStationInfo } from './simpleRailStationInfo';
import { SimpleSectionInfo } from './simpleSectionInfo';
import { SizeInfo } from './sizeInfo';
import { SourceInfo } from './sourceInfo';
import { SourceRefInfo } from './sourceRefInfo';
import { SpecialServiceRequestInfoDetail } from './specialServiceRequestInfoDetail';
import { SplitOptionByCardCompany } from './splitOptionByCardCompany';
import { StatisticsItem } from './statisticsItem';
import { StringListWrapper } from './stringListWrapper';
import { StringWrapper } from './stringWrapper';
import { StripeInfo } from './stripeInfo';
import { StripeInfoWrapper } from './stripeInfoWrapper';
import { SupplierType } from './supplierType';
import { SuspendRequest } from './suspendRequest';
import { Tax } from './tax';
import { Tax1 } from './tax1';
import { TaxAmount } from './taxAmount';
import { TermsAndConditions } from './termsAndConditions';
import { ThirdPartyPnrRemark } from './thirdPartyPnrRemark';
import { ThirdPartySource } from './thirdPartySource';
import { Ticket } from './ticket';
import { TicketAncillary } from './ticketAncillary';
import { TicketCancellationInfo } from './ticketCancellationInfo';
import { TicketExchangePolicy } from './ticketExchangePolicy';
import { TicketRefundPolicy } from './ticketRefundPolicy';
import { TicketScheduleChangeInformation } from './ticketScheduleChangeInformation';
import { Tier } from './tier';
import { TimeLocal } from './timeLocal';
import { TmcBasicInfo } from './tmcBasicInfo';
import { TmcInfo } from './tmcInfo';
import { TokenizedExpiry } from './tokenizedExpiry';
import { TokenizedExpiryWrapper } from './tokenizedExpiryWrapper';
import { Transmission } from './transmission';
import { TransmissionSearchFilter } from './transmissionSearchFilter';
import { TravelCard } from './travelCard';
import { TravelClassHierarchy } from './travelClassHierarchy';
import { TravelClassHierarchyWrapper } from './travelClassHierarchyWrapper';
import { TravelPref } from './travelPref';
import { TravelRegionType } from './travelRegionType';
import { TravelType } from './travelType';
import { Traveler } from './traveler';
import { TravelerBusinessInfo } from './travelerBusinessInfo';
import { TravelerCompanyInfo } from './travelerCompanyInfo';
import { TravelerEventSummary } from './travelerEventSummary';
import { TravelerInfo } from './travelerInfo';
import { TravelerLegalEntity } from './travelerLegalEntity';
import { TravelerMatchConditions } from './travelerMatchConditions';
import { TravelerPersonalInfo } from './travelerPersonalInfo';
import { TravelerRailInfo } from './travelerRailInfo';
import { TravelerRestrictions } from './travelerRestrictions';
import { TripAdditionalInfo } from './tripAdditionalInfo';
import { TripBudgetInfo } from './tripBudgetInfo';
import { TripBudgetInfoWrapper } from './tripBudgetInfoWrapper';
import { TripPartnerInfo } from './tripPartnerInfo';
import { TripPartnerInfoDetails } from './tripPartnerInfoDetails';
import { TripPartnerInfoResponse } from './tripPartnerInfoResponse';
import { TripPartnerInfoType } from './tripPartnerInfoType';
import { TripUsageType } from './tripUsageType';
import { TripV3DetailsResponse } from './tripV3DetailsResponse';
import { UAPassPlusMetadata } from './uAPassPlusMetadata';
import { UAPassPlusMetadataWrapper } from './uAPassPlusMetadataWrapper';
import { UATPInformation } from './uATPInformation';
import { UATPMetadata } from './uATPMetadata';
import { UATPMetadataWrapper } from './uATPMetadataWrapper';
import { UnusedCreditInfo } from './unusedCreditInfo';
import { UpdateTripRequest } from './updateTripRequest';
import { User } from './user';
import { UserBasicInfo } from './userBasicInfo';
import { UserBusinessInfo } from './userBusinessInfo';
import { UserFacingStatus } from './userFacingStatus';
import { UserId } from './userId';
import { UserOrgId } from './userOrgId';
import { UserOrgIdListWrapper } from './userOrgIdListWrapper';
import { UserOrgIdWrapper } from './userOrgIdWrapper';
import { UserPersonalInfo } from './userPersonalInfo';
import { UserTitle } from './userTitle';
import { Vendor } from './vendor';
import { VendorInfo } from './vendorInfo';
import { VendorProgramPaymentDescriptor } from './vendorProgramPaymentDescriptor';
import { VendorProgramPaymentDescriptorWrapper } from './vendorProgramPaymentDescriptorWrapper';
import { VendorProgramPaymentMetadata } from './vendorProgramPaymentMetadata';
import { VendorProgramPaymentMetadata2 } from './vendorProgramPaymentMetadata2';
import { VirtualCardInfo } from './virtualCardInfo';
import { VirtualCardMetadata } from './virtualCardMetadata';
import { VirtualCardMetadataWrapper } from './virtualCardMetadataWrapper';
import { VirtualCardPaymentMetadata } from './virtualCardPaymentMetadata';
import { VirtualCardVendor } from './virtualCardVendor';
import { VirtualCardVendorInfo } from './virtualCardVendorInfo';
import { Voucher } from './voucher';
import { WeightLimit } from './weightLimit';
import { WorkerType } from './workerType';
import { WorkerTypeListWrapper } from './workerTypeListWrapper';
import { WorkerTypeWrapper } from './workerTypeWrapper';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AirCancellationNotSupportedReason": AirCancellationNotSupportedReason,
        "AirCancellationState": AirCancellationState,
        "AirCancellationType": AirCancellationType,
        "AirConditioning": AirConditioning,
        "AirlinePref.FlightTypeEnum": AirlinePref.FlightTypeEnum,
        "Alliance": Alliance,
        "AncillaryType": AncillaryType,
        "ApprovalInfo.ApprovalStatusEnum": ApprovalInfo.ApprovalStatusEnum,
        "AssessmentType": AssessmentType,
        "BagPolicyApplicability": BagPolicyApplicability,
        "BedType": BedType,
        "BookerInfo.RoleEnum": BookerInfo.RoleEnum,
        "BookingInfo.StatusEnum": BookingInfo.StatusEnum,
        "BookingInfo.BookingSourceClientEnum": BookingInfo.BookingSourceClientEnum,
        "BookingOtherAncillariesInner.StatusEnum": BookingOtherAncillariesInner.StatusEnum,
        "Cabin": Cabin,
        "CancelObjectDetail.CancelObjectTypeEnum": CancelObjectDetail.CancelObjectTypeEnum,
        "CancellationInfo.CancelTypeEnum": CancellationInfo.CancelTypeEnum,
        "CancellationPolicy2.PolicyEnum": CancellationPolicy2.PolicyEnum,
        "CancellationRequestStatus": CancellationRequestStatus,
        "Car.PaymentTypeEnum": Car.PaymentTypeEnum,
        "Car.RateTypeEnum": Car.RateTypeEnum,
        "CarType": CarType,
        "Card.TypeEnum": Card.TypeEnum,
        "Card.OwnershipLabelEnum": Card.OwnershipLabelEnum,
        "CardCompany": CardCompany,
        "CentralCardAccessLevel": CentralCardAccessLevel,
        "CoachPref": CoachPref,
        "ConditionalRate": ConditionalRate,
        "CounterLocation": CounterLocation,
        "CreatedVia": CreatedVia,
        "CreditCardAccessType": CreditCardAccessType,
        "CreditStatus": CreditStatus,
        "CustomFieldLocation": CustomFieldLocation,
        "CustomFieldOptionsParam": CustomFieldOptionsParam,
        "CustomFieldType": CustomFieldType,
        "DeckLevel": DeckLevel,
        "DocumentType": DocumentType,
        "ETicketMetadata.TypeEnum": ETicketMetadata.TypeEnum,
        "ElectricVehicle": ElectricVehicle,
        "EngineType": EngineType,
        "EntityType": EntityType,
        "EventAllowedBookingType": EventAllowedBookingType,
        "EventRsvpState": EventRsvpState,
        "EventRunningStatus": EventRunningStatus,
        "EventStatus": EventStatus,
        "FailureReason.ReasonCodeEnum": FailureReason.ReasonCodeEnum,
        "FarePref.FareTypesEnum": FarePref.FareTypesEnum,
        "FlightCoupon.StatusEnum": FlightCoupon.StatusEnum,
        "FlightRestrictions": FlightRestrictions,
        "FlightSeatStatus": FlightSeatStatus,
        "FormOfPayment.TypeEnum": FormOfPayment.TypeEnum,
        "Gender": Gender,
        "HotelAdditionalDetailType": HotelAdditionalDetailType,
        "HotelAmenityType": HotelAmenityType,
        "HotelDescription.TypeEnum": HotelDescription.TypeEnum,
        "HotelImageCategory": HotelImageCategory,
        "HotelPayment.PaymentTypeEnum": HotelPayment.PaymentTypeEnum,
        "HotelPrefAmenity": HotelPrefAmenity,
        "HotelRoomAmenity.TypeEnum": HotelRoomAmenity.TypeEnum,
        "HotelRoomMealType": HotelRoomMealType,
        "HotelRoomMealsIncluded": HotelRoomMealsIncluded,
        "HotelSpecialRequests.RoomLocationsEnum": HotelSpecialRequests.RoomLocationsEnum,
        "HotelSpecialRequests.RoomFeaturesEnum": HotelSpecialRequests.RoomFeaturesEnum,
        "HotelSpecialRequests.CheckInEnum": HotelSpecialRequests.CheckInEnum,
        "HotelSpecialRequests.AccessibleFeaturesEnum": HotelSpecialRequests.AccessibleFeaturesEnum,
        "IdInfo.IdTypeEnum": IdInfo.IdTypeEnum,
        "ImmigrationDocument.TypeEnum": ImmigrationDocument.TypeEnum,
        "InvoiceData.DocumentTypeEnum": InvoiceData.DocumentTypeEnum,
        "Item.PurchaseTypeEnum": Item.PurchaseTypeEnum,
        "Item.TypeEnum": Item.TypeEnum,
        "Length.UnitEnum": Length.UnitEnum,
        "LimoDetails.CarTypeEnum": LimoDetails.CarTypeEnum,
        "LimoInfo.PaymentTypeEnum": LimoInfo.PaymentTypeEnum,
        "ListOrganisationTripsRequest.PnrTypeEnum": ListOrganisationTripsRequest.PnrTypeEnum,
        "LoyaltyInfo.TypeEnum": LoyaltyInfo.TypeEnum,
        "LuggageInfo.StatusEnum": LuggageInfo.StatusEnum,
        "ManualVerificationReason": ManualVerificationReason,
        "MealType": MealType,
        "NameSuffix": NameSuffix,
        "NationalDoc.TypeEnum": NationalDoc.TypeEnum,
        "OptionSource": OptionSource,
        "PassengerType": PassengerType,
        "Passport.TypeEnum": Passport.TypeEnum,
        "Payment.PaymentTypeEnum": Payment.PaymentTypeEnum,
        "Payment.PaymentThirdPartyEnum": Payment.PaymentThirdPartyEnum,
        "Payment.PaymentGatewayEnum": Payment.PaymentGatewayEnum,
        "PaymentInfo.ApplicableToEnum": PaymentInfo.ApplicableToEnum,
        "PaymentInformation.PaymentModeEnum": PaymentInformation.PaymentModeEnum,
        "PaymentMethod": PaymentMethod,
        "PaymentSourceType": PaymentSourceType,
        "Persona": Persona,
        "PhoneNumber.CountryCodeSourceEnum": PhoneNumber.CountryCodeSourceEnum,
        "PhoneNumber.TypeEnum": PhoneNumber.TypeEnum,
        "PnrBookingStatus": PnrBookingStatus,
        "PnrCancelRequest.CancellationTypeEnum": PnrCancelRequest.CancellationTypeEnum,
        "PnrData.TravelerPnrVisibilityStatusEnum": PnrData.TravelerPnrVisibilityStatusEnum,
        "PnrPolicyId.ApprovalTypeEnum": PnrPolicyId.ApprovalTypeEnum,
        "PnrPolicyId.PolicyTypeEnum": PnrPolicyId.PolicyTypeEnum,
        "PnrStatus": PnrStatus,
        "PolicyPredicate": PolicyPredicate,
        "PreCheckoutQuestionType": PreCheckoutQuestionType,
        "PreDefinedAnswers": PreDefinedAnswers,
        "PreSearchQuestionType": PreSearchQuestionType,
        "PreferredLocationLabel": PreferredLocationLabel,
        "PreferredPronoun": PreferredPronoun,
        "PreferredType": PreferredType,
        "ProcessPnrApprovalRequest.ApprovalTypeEnum": ProcessPnrApprovalRequest.ApprovalTypeEnum,
        "ProductType": ProductType,
        "QuestionFormat": QuestionFormat,
        "Rail.PaymentModeEnum": Rail.PaymentModeEnum,
        "RailAmenityType": RailAmenityType,
        "RailAncillary.TypeEnum": RailAncillary.TypeEnum,
        "RailDeliveryOption": RailDeliveryOption,
        "RailFareComposition": RailFareComposition,
        "RailPnrSectionInfo.SectionStatusEnum": RailPnrSectionInfo.SectionStatusEnum,
        "RailSearchType": RailSearchType,
        "RailStationInfo.StationTypeEnum": RailStationInfo.StationTypeEnum,
        "RailTicketAsset.TypeEnum": RailTicketAsset.TypeEnum,
        "RailTravelClass": RailTravelClass,
        "RailVehicle.TypeEnum": RailVehicle.TypeEnum,
        "RateMetadata.NegotiatedRateTypeEnum": RateMetadata.NegotiatedRateTypeEnum,
        "RateType": RateType,
        "RebookReference.RebookTypeEnum": RebookReference.RebookTypeEnum,
        "ReferenceId.LabelEnum": ReferenceId.LabelEnum,
        "RefundInfoDetail.RefundTypeEnum": RefundInfoDetail.RefundTypeEnum,
        "RegionCode": RegionCode,
        "RewardsProgramType": RewardsProgramType,
        "Room.GuaranteeTypeEnum": Room.GuaranteeTypeEnum,
        "RoomAmenitiy.RoomAmenityTypeEnum": RoomAmenitiy.RoomAmenityTypeEnum,
        "RoomClass": RoomClass,
        "RoomPreference.BedCountEnum": RoomPreference.BedCountEnum,
        "RoomPreference.RoomTypeEnum": RoomPreference.RoomTypeEnum,
        "RoomPreference.MostImportantFactEnum": RoomPreference.MostImportantFactEnum,
        "RoomPreference.RoomLocationEnum": RoomPreference.RoomLocationEnum,
        "RoomPreference.PillowTypeEnum": RoomPreference.PillowTypeEnum,
        "RoomPreference.RoomAmenityPrefsEnum": RoomPreference.RoomAmenityPrefsEnum,
        "RoomType": RoomType,
        "RoomView": RoomView,
        "SabrePnrRemarkType": SabrePnrRemarkType,
        "SeatAmenityPref.SeatAmenityTypesEnum": SeatAmenityPref.SeatAmenityTypesEnum,
        "SeatLocationPref.CabinsEnum": SeatLocationPref.CabinsEnum,
        "SeatLocationPref.PositionEnum": SeatLocationPref.PositionEnum,
        "SeatPrefDirection": SeatPrefDirection,
        "SeatPrefLocation": SeatPrefLocation,
        "SeatPrefType": SeatPrefType,
        "ServiceFee.StatusEnum": ServiceFee.StatusEnum,
        "SizeInfo.UnitEnum": SizeInfo.UnitEnum,
        "SpecialServiceRequestInfoDetail.StatusEnum": SpecialServiceRequestInfoDetail.StatusEnum,
        "StatisticsItem.StatisticTypeEnum": StatisticsItem.StatisticTypeEnum,
        "SupplierType": SupplierType,
        "SuspendRequest.ReasonEnum": SuspendRequest.ReasonEnum,
        "ThirdPartySource": ThirdPartySource,
        "Ticket.TicketTypeEnum": Ticket.TicketTypeEnum,
        "Ticket.StatusEnum": Ticket.StatusEnum,
        "Ticket.TicketSettlementEnum": Ticket.TicketSettlementEnum,
        "TicketAncillary.AncillaryTypeEnum": TicketAncillary.AncillaryTypeEnum,
        "TicketCancellationInfo.TicketTypeEnum": TicketCancellationInfo.TicketTypeEnum,
        "TicketScheduleChangeInformation.PossibleActionsEnum": TicketScheduleChangeInformation.PossibleActionsEnum,
        "Tier": Tier,
        "Transmission": Transmission,
        "TransmissionSearchFilter": TransmissionSearchFilter,
        "TravelClassHierarchy": TravelClassHierarchy,
        "TravelRegionType": TravelRegionType,
        "TravelType": TravelType,
        "TravelerRestrictions.RestrictionsEnum": TravelerRestrictions.RestrictionsEnum,
        "TripPartnerInfoType": TripPartnerInfoType,
        "TripUsageType": TripUsageType,
        "UnusedCreditInfo.SegmentsAvailableEnum": UnusedCreditInfo.SegmentsAvailableEnum,
        "UnusedCreditInfo.TicketTypeEnum": UnusedCreditInfo.TicketTypeEnum,
        "UnusedCreditInfo.RedeemViaEnum": UnusedCreditInfo.RedeemViaEnum,
        "UnusedCreditInfo.SourceOfTruthEnum": UnusedCreditInfo.SourceOfTruthEnum,
        "UserFacingStatus": UserFacingStatus,
        "UserTitle": UserTitle,
        "VirtualCardVendor": VirtualCardVendor,
        "WeightLimit.UnitEnum": WeightLimit.UnitEnum,
        "WorkerType": WorkerType,
}

let typeMap: {[index: string]: any} = {
    "ActualPayment": ActualPayment,
    "AddRemarksRequest": AddRemarksRequest,
    "AddRemarksResponse": AddRemarksResponse,
    "AdhocUserInfo": AdhocUserInfo,
    "Air": Air,
    "AirBookingGuideline": AirBookingGuideline,
    "AirBookingGuidelineWrapper": AirBookingGuidelineWrapper,
    "AirCancellationDetails": AirCancellationDetails,
    "AirCancellationDetailsWrapper": AirCancellationDetailsWrapper,
    "AirCancellationOption": AirCancellationOption,
    "AirFareInfo": AirFareInfo,
    "AirPnrRemark": AirPnrRemark,
    "AirPref": AirPref,
    "AirPriceOptimizationMetadata": AirPriceOptimizationMetadata,
    "AirPriceOptimizationMetadataWrapper": AirPriceOptimizationMetadataWrapper,
    "AirRsvpResponse": AirRsvpResponse,
    "AirTravelerCancellationInfo": AirTravelerCancellationInfo,
    "AirVendorCancellationInfo": AirVendorCancellationInfo,
    "AirVendorCancellationObject": AirVendorCancellationObject,
    "Airline": Airline,
    "AirlineInfo": AirlineInfo,
    "AirlinePref": AirlinePref,
    "AirlineProgram": AirlineProgram,
    "AirlineProgramMetadata": AirlineProgramMetadata,
    "AirlineProgramWrapper": AirlineProgramWrapper,
    "AirportInfo": AirportInfo,
    "AlliancePref": AlliancePref,
    "AmadeusCheckoutMetadata": AmadeusCheckoutMetadata,
    "AmadeusCheckoutMetadataWrapper": AmadeusCheckoutMetadataWrapper,
    "AncillaryFlightId": AncillaryFlightId,
    "AnswerPair": AnswerPair,
    "AppliedCreditInfo": AppliedCreditInfo,
    "ApprovalInfo": ApprovalInfo,
    "AutomatedCancellationInfo": AutomatedCancellationInfo,
    "AutomatedExchangeInfo": AutomatedExchangeInfo,
    "BagFees": BagFees,
    "BagWeightLimit": BagWeightLimit,
    "BaggageInfo": BaggageInfo,
    "BaggagePolicy": BaggagePolicy,
    "BasicTripInfo": BasicTripInfo,
    "BoardingPass": BoardingPass,
    "BookerInfo": BookerInfo,
    "Booking": Booking,
    "BookingHistory": BookingHistory,
    "BookingInfo": BookingInfo,
    "BookingMetadata": BookingMetadata,
    "BookingOtherAncillariesInner": BookingOtherAncillariesInner,
    "BookingOtherChargesInner": BookingOtherChargesInner,
    "BookingSeatsInner": BookingSeatsInner,
    "BoolWrapper": BoolWrapper,
    "BrexBudgetMetadata": BrexBudgetMetadata,
    "BrexBudgetMetadataWrapper": BrexBudgetMetadataWrapper,
    "BuyerInfo": BuyerInfo,
    "CO2EmissionDetail": CO2EmissionDetail,
    "COGS": COGS,
    "CTC": CTC,
    "CancelDetail": CancelDetail,
    "CancelObjectDetail": CancelObjectDetail,
    "CancellationDetails": CancellationDetails,
    "CancellationInfo": CancellationInfo,
    "CancellationPolicy1": CancellationPolicy1,
    "CancellationPolicy2": CancellationPolicy2,
    "Car": Car,
    "CarAmenities": CarAmenities,
    "CarBookingGuideline": CarBookingGuideline,
    "CarBookingGuidelineWrapper": CarBookingGuidelineWrapper,
    "CarCo2EmissionDetail": CarCo2EmissionDetail,
    "CarInfo": CarInfo,
    "CarLocation": CarLocation,
    "CarPref": CarPref,
    "CarRsvpResponse": CarRsvpResponse,
    "CarSpec": CarSpec,
    "CarVendor": CarVendor,
    "Card": Card,
    "CardAccessEntity": CardAccessEntity,
    "CardExpiry": CardExpiry,
    "CardMetadata": CardMetadata,
    "CardMetadata2": CardMetadata2,
    "CardMetadataWrapper": CardMetadataWrapper,
    "Co2EmissionDetails": Co2EmissionDetails,
    "Commission": Commission,
    "CompanyConfigSource": CompanyConfigSource,
    "CompanyConfigSourceWrapper": CompanyConfigSourceWrapper,
    "CompanyId": CompanyId,
    "CompanyRef": CompanyRef,
    "CompanySpecifiedAttribute": CompanySpecifiedAttribute,
    "CompanySpecifiedAttributeLegalEntity": CompanySpecifiedAttributeLegalEntity,
    "Condition": Condition,
    "ConfermaInfo": ConfermaInfo,
    "ConnectionRiskAlert": ConnectionRiskAlert,
    "Cost": Cost,
    "Cost1": Cost1,
    "CostCenter": CostCenter,
    "CostCenterId": CostCenterId,
    "CostCommission": CostCommission,
    "CostExtrasInner": CostExtrasInner,
    "CostRefundInfo": CostRefundInfo,
    "CostTaxBreakdown": CostTaxBreakdown,
    "CostTaxBreakdownTaxInner": CostTaxBreakdownTaxInner,
    "CreateTripRequest": CreateTripRequest,
    "CreditCardAccess": CreditCardAccess,
    "CustomField": CustomField,
    "CustomFieldId": CustomFieldId,
    "CustomFieldMatchConditions": CustomFieldMatchConditions,
    "CustomPaymentMethodMetadata": CustomPaymentMethodMetadata,
    "CustomPaymentMethodMetadataWrapper": CustomPaymentMethodMetadataWrapper,
    "DateModel": DateModel,
    "DateRange": DateRange,
    "DateTimeLocal": DateTimeLocal,
    "DateTimeOffset": DateTimeOffset,
    "DateTimeRange": DateTimeRange,
    "Department": Department,
    "DepartmentId": DepartmentId,
    "DepartmentV2": DepartmentV2,
    "Dimensions": Dimensions,
    "DirectBilling": DirectBilling,
    "DirectBilling2": DirectBilling2,
    "DirectBillingWrapper": DirectBillingWrapper,
    "DirectBillingWrapper2": DirectBillingWrapper2,
    "Document": Document,
    "DocumentMetadata": DocumentMetadata,
    "DoubleListWrapper": DoubleListWrapper,
    "DoubleRange": DoubleRange,
    "DoubleRangeWrapper": DoubleRangeWrapper,
    "DoubleWrapper": DoubleWrapper,
    "DownloadInvoiceResponse": DownloadInvoiceResponse,
    "Driver": Driver,
    "Duration": Duration,
    "ETicketMetadata": ETicketMetadata,
    "EmergencyContactInfo": EmergencyContactInfo,
    "EntityAnswer": EntityAnswer,
    "EntityId": EntityId,
    "EntityMetadata": EntityMetadata,
    "EntityNonUUIDId": EntityNonUUIDId,
    "Equipment": Equipment,
    "ErrorParameter": ErrorParameter,
    "ErrorResponse": ErrorResponse,
    "ErrorResponseErrorMessagesInner": ErrorResponseErrorMessagesInner,
    "EventBookingGuideline": EventBookingGuideline,
    "EventBookingWindow": EventBookingWindow,
    "EventEntityMetadata": EventEntityMetadata,
    "EventLocation": EventLocation,
    "EventMetadataWrapper": EventMetadataWrapper,
    "EventRsvpResponse": EventRsvpResponse,
    "EventUserInfo": EventUserInfo,
    "EventUserRsvp": EventUserRsvp,
    "ExchangeInfo": ExchangeInfo,
    "ExchangeInfo1": ExchangeInfo1,
    "ExchangePayment": ExchangePayment,
    "ExchangePolicy": ExchangePolicy,
    "Expiry": Expiry,
    "ExpiryWrapper": ExpiryWrapper,
    "FailureReason": FailureReason,
    "FareAmount": FareAmount,
    "FareComponentDetail": FareComponentDetail,
    "FareOffers": FareOffers,
    "FarePref": FarePref,
    "FareStatistics": FareStatistics,
    "FinalizeIntent": FinalizeIntent,
    "FinalizeMetadata": FinalizeMetadata,
    "FinalizeRequest": FinalizeRequest,
    "Flight": Flight,
    "FlightAndLegIndex": FlightAndLegIndex,
    "FlightCoupon": FlightCoupon,
    "FlightCredits": FlightCredits,
    "FlightDetailInformation": FlightDetailInformation,
    "FlightFareBreakup": FlightFareBreakup,
    "FlightId": FlightId,
    "FlightMetadata": FlightMetadata,
    "FlightMetadataWrapper": FlightMetadataWrapper,
    "FlightNumber": FlightNumber,
    "FlightUpdates": FlightUpdates,
    "FormOfPayment": FormOfPayment,
    "FreshnessInfo": FreshnessInfo,
    "Gate": Gate,
    "GatewayInfo": GatewayInfo,
    "Grade": Grade,
    "GradeId": GradeId,
    "HiddenStop": HiddenStop,
    "HoldInfo": HoldInfo,
    "Hotel": Hotel,
    "HotelAdditionalDetail": HotelAdditionalDetail,
    "HotelAmenities": HotelAmenities,
    "HotelBookingGuideline": HotelBookingGuideline,
    "HotelBookingGuidelineWrapper": HotelBookingGuidelineWrapper,
    "HotelBrand": HotelBrand,
    "HotelChain": HotelChain,
    "HotelCo2EmissionDetail": HotelCo2EmissionDetail,
    "HotelDescription": HotelDescription,
    "HotelImageSet": HotelImageSet,
    "HotelInfo": HotelInfo,
    "HotelOccupancy": HotelOccupancy,
    "HotelPayment": HotelPayment,
    "HotelPref": HotelPref,
    "HotelRateAssuranceMetadata": HotelRateAssuranceMetadata,
    "HotelRoomAmenity": HotelRoomAmenity,
    "HotelRoomMeal": HotelRoomMeal,
    "HotelRsvpResponse": HotelRsvpResponse,
    "HotelSpecialRequests": HotelSpecialRequests,
    "HotelTravelerInfo": HotelTravelerInfo,
    "IdInfo": IdInfo,
    "IdentityDocument": IdentityDocument,
    "Image": Image,
    "ImageGroup": ImageGroup,
    "ImmigrationDocument": ImmigrationDocument,
    "ImmigrationDocumentWrapper": ImmigrationDocumentWrapper,
    "Int32Range": Int32Range,
    "Int32RangeWrapper": Int32RangeWrapper,
    "Int32Wrapper": Int32Wrapper,
    "Int64Wrapper": Int64Wrapper,
    "IntListWrapper": IntListWrapper,
    "Invoice": Invoice,
    "InvoiceData": InvoiceData,
    "InvoiceDataRequest": InvoiceDataRequest,
    "InvoiceDataResponse": InvoiceDataResponse,
    "InvoiceInfo": InvoiceInfo,
    "InvoiceMetadata": InvoiceMetadata,
    "Item": Item,
    "ItemCTC": ItemCTC,
    "Itinerary": Itinerary,
    "KeywordWithReasonListWrapper": KeywordWithReasonListWrapper,
    "KeywordsWithReasonList": KeywordsWithReasonList,
    "KnownTravelerNumber": KnownTravelerNumber,
    "KnownTravelerNumberWrapper": KnownTravelerNumberWrapper,
    "LLFInfo": LLFInfo,
    "LLFPnrInfo": LLFPnrInfo,
    "Latlng": Latlng,
    "Leg": Leg,
    "LegInfo": LegInfo,
    "LegMetadata": LegMetadata,
    "LegMetadataWrapper": LegMetadataWrapper,
    "LegUpdates": LegUpdates,
    "LegalEntityId": LegalEntityId,
    "LegalEntityIdListWrapper": LegalEntityIdListWrapper,
    "LegalEntityIdWrapper": LegalEntityIdWrapper,
    "Length": Length,
    "LengthWrapper": LengthWrapper,
    "LimoDetails": LimoDetails,
    "LimoInfo": LimoInfo,
    "LimoLegInfo": LimoLegInfo,
    "LimoVendorInfo": LimoVendorInfo,
    "ListOrganisationTripsRequest": ListOrganisationTripsRequest,
    "ListOrganisationTripsResponse": ListOrganisationTripsResponse,
    "LocationContactInfo": LocationContactInfo,
    "LocationOperatingSchedule": LocationOperatingSchedule,
    "LoyaltyDetails": LoyaltyDetails,
    "LoyaltyInfo": LoyaltyInfo,
    "LuggageInfo": LuggageInfo,
    "ManualVerificationIntent": ManualVerificationIntent,
    "ManualVerificationIntentWrapper": ManualVerificationIntentWrapper,
    "MealPref": MealPref,
    "MiscInfo": MiscInfo,
    "Money": Money,
    "MoneyOtherCoinageInner": MoneyOtherCoinageInner,
    "MoneyWrapper": MoneyWrapper,
    "Name": Name,
    "NationalDoc": NationalDoc,
    "NationalDocWrapper": NationalDocWrapper,
    "NumStopsPref": NumStopsPref,
    "OfferExpiryInfo": OfferExpiryInfo,
    "Office": Office,
    "OfficeId": OfficeId,
    "OfficeIdListWrapper": OfficeIdListWrapper,
    "OfficeIdWrapper": OfficeIdWrapper,
    "Option": Option,
    "OptionInfo": OptionInfo,
    "OptionSourceMetadata": OptionSourceMetadata,
    "OrgTripInfo": OrgTripInfo,
    "OrganizationAgencyId": OrganizationAgencyId,
    "OrganizationId": OrganizationId,
    "OtherAncillaryFare": OtherAncillaryFare,
    "OtherServiceInformationDetail": OtherServiceInformationDetail,
    "OtherStatus": OtherStatus,
    "Passport": Passport,
    "PassportWrapper": PassportWrapper,
    "Payment": Payment,
    "PaymentDetails": PaymentDetails,
    "PaymentInfo": PaymentInfo,
    "PaymentInfo1": PaymentInfo1,
    "PaymentInformation": PaymentInformation,
    "PaymentInstruction": PaymentInstruction,
    "PaymentMetadata": PaymentMetadata,
    "PaymentMetadataCustomPaymentMethodMetadata": PaymentMetadataCustomPaymentMethodMetadata,
    "PaymentMetadataCustomPaymentMethodMetadataBrexBudgetMetadata": PaymentMetadataCustomPaymentMethodMetadataBrexBudgetMetadata,
    "PaymentSourceMetadata": PaymentSourceMetadata,
    "PaymentTransactionInfo": PaymentTransactionInfo,
    "PercentageWrapper": PercentageWrapper,
    "PersonaListWrapper": PersonaListWrapper,
    "PersonaWrapper": PersonaWrapper,
    "PhoneNumber": PhoneNumber,
    "PnrCancelRequest": PnrCancelRequest,
    "PnrCancelRequestBookingEmailInfo": PnrCancelRequestBookingEmailInfo,
    "PnrCancellationDetails": PnrCancellationDetails,
    "PnrCreationDetails": PnrCreationDetails,
    "PnrData": PnrData,
    "PnrDataAdditionalMetadata": PnrDataAdditionalMetadata,
    "PnrDataExternalInfo": PnrDataExternalInfo,
    "PnrDetailsResponseWithId": PnrDetailsResponseWithId,
    "PnrInfo": PnrInfo,
    "PnrMetadata": PnrMetadata,
    "PnrMetadataWrapper": PnrMetadataWrapper,
    "PnrPolicyId": PnrPolicyId,
    "PnrPolicyInfo": PnrPolicyInfo,
    "PnrResponseOnExternalId": PnrResponseOnExternalId,
    "PnrTaxBreakdown": PnrTaxBreakdown,
    "PnrTraveler": PnrTraveler,
    "PointsBalance": PointsBalance,
    "PolicyAction": PolicyAction,
    "PolicyAlertOnSelectionAction": PolicyAlertOnSelectionAction,
    "PolicyAlertOnSelectionActionWrapper": PolicyAlertOnSelectionActionWrapper,
    "PolicyConstValue": PolicyConstValue,
    "PolicyFlagAction": PolicyFlagAction,
    "PolicyFlagActionWrapper": PolicyFlagActionWrapper,
    "PolicyHideActionWrapper": PolicyHideActionWrapper,
    "PolicyInfo": PolicyInfo,
    "PolicyPreventBookingAction": PolicyPreventBookingAction,
    "PolicyPreventBookingActionWrapper": PolicyPreventBookingActionWrapper,
    "PolicyRuleResultInfo": PolicyRuleResultInfo,
    "PolicyTakeApprovalAction": PolicyTakeApprovalAction,
    "PolicyTakeApprovalActionWrapper": PolicyTakeApprovalActionWrapper,
    "PolicyViolationInfo": PolicyViolationInfo,
    "PostalAddress": PostalAddress,
    "PostalAddressWrapper": PostalAddressWrapper,
    "PreBookAnswers": PreBookAnswers,
    "Preference": Preference,
    "PreferredAirport": PreferredAirport,
    "PreferredRailStation": PreferredRailStation,
    "PrimaryServiceProviderTmc": PrimaryServiceProviderTmc,
    "ProcessPnrApprovalRequest": ProcessPnrApprovalRequest,
    "ProfileOwner": ProfileOwner,
    "ProgramDetails": ProgramDetails,
    "QcFinalizationWrapper": QcFinalizationWrapper,
    "QcFinalizeData": QcFinalizeData,
    "Question": Question,
    "QuestionType": QuestionType,
    "Rail": Rail,
    "RailAllocatedSpace": RailAllocatedSpace,
    "RailAncillary": RailAncillary,
    "RailBookingGuideline": RailBookingGuideline,
    "RailBookingGuidelineWrapper": RailBookingGuidelineWrapper,
    "RailCancellationDetails": RailCancellationDetails,
    "RailCancellationDetailsWrapper": RailCancellationDetailsWrapper,
    "RailCard": RailCard,
    "RailFareDetail": RailFareDetail,
    "RailFareType": RailFareType,
    "RailPnrAmenity": RailPnrAmenity,
    "RailPnrFareInfo": RailPnrFareInfo,
    "RailPnrFareLegInfo": RailPnrFareLegInfo,
    "RailPnrJourneyInfo": RailPnrJourneyInfo,
    "RailPnrLegInfo": RailPnrLegInfo,
    "RailPnrSectionInfo": RailPnrSectionInfo,
    "RailPnrTicket": RailPnrTicket,
    "RailPnrVendorConfirmation": RailPnrVendorConfirmation,
    "RailPref": RailPref,
    "RailRateInfo": RailRateInfo,
    "RailRefundOption": RailRefundOption,
    "RailRefundRateInfo": RailRefundRateInfo,
    "RailRefundVoucher": RailRefundVoucher,
    "RailRsvpResponse": RailRsvpResponse,
    "RailSeatPreferenceSelection": RailSeatPreferenceSelection,
    "RailStationInfo": RailStationInfo,
    "RailTicketAsset": RailTicketAsset,
    "RailTicketDetail": RailTicketDetail,
    "RailVehicle": RailVehicle,
    "RateInfo": RateInfo,
    "RateMetadata": RateMetadata,
    "RatingWrapper": RatingWrapper,
    "RebookReference": RebookReference,
    "RedressNumber": RedressNumber,
    "RedressNumberWrapper": RedressNumberWrapper,
    "Reference": Reference,
    "ReferenceId": ReferenceId,
    "RefundInfo": RefundInfo,
    "RefundInfoDetail": RefundInfoDetail,
    "RequestedByDetails": RequestedByDetails,
    "RestrictedKeywordsWithReason": RestrictedKeywordsWithReason,
    "RewardsProgramMetadata": RewardsProgramMetadata,
    "RewardsProgramMetadataWrapper": RewardsProgramMetadataWrapper,
    "Room": Room,
    "RoomAmenitiy": RoomAmenitiy,
    "RoomPreference": RoomPreference,
    "RoomRoomInfo": RoomRoomInfo,
    "RoomRoomInfoRoomView": RoomRoomInfoRoomView,
    "SabrePnrRemark": SabrePnrRemark,
    "SabrePnrRemarkWrapper": SabrePnrRemarkWrapper,
    "SavingsFare": SavingsFare,
    "ScheduleChangeInfo": ScheduleChangeInfo,
    "ScheduleChangeRefundInfo": ScheduleChangeRefundInfo,
    "SeatAmenityPref": SeatAmenityPref,
    "SeatLocationPref": SeatLocationPref,
    "SeatPref": SeatPref,
    "SecondaryServiceProviderTmc": SecondaryServiceProviderTmc,
    "SelectedPaymentSource": SelectedPaymentSource,
    "SellerInfo": SellerInfo,
    "ServiceFee": ServiceFee,
    "ShellPnrInfo": ShellPnrInfo,
    "SimpleAirPnrInfo": SimpleAirPnrInfo,
    "SimpleAirportInfo": SimpleAirportInfo,
    "SimpleCarPnrInfo": SimpleCarPnrInfo,
    "SimpleFlightInfo": SimpleFlightInfo,
    "SimpleHotelPnrInfo": SimpleHotelPnrInfo,
    "SimpleLegInfo": SimpleLegInfo,
    "SimpleMoney": SimpleMoney,
    "SimplePnr": SimplePnr,
    "SimpleRailLegInfo": SimpleRailLegInfo,
    "SimpleRailPnrInfo": SimpleRailPnrInfo,
    "SimpleRailStationInfo": SimpleRailStationInfo,
    "SimpleSectionInfo": SimpleSectionInfo,
    "SizeInfo": SizeInfo,
    "SourceInfo": SourceInfo,
    "SourceRefInfo": SourceRefInfo,
    "SpecialServiceRequestInfoDetail": SpecialServiceRequestInfoDetail,
    "SplitOptionByCardCompany": SplitOptionByCardCompany,
    "StatisticsItem": StatisticsItem,
    "StringListWrapper": StringListWrapper,
    "StringWrapper": StringWrapper,
    "StripeInfo": StripeInfo,
    "StripeInfoWrapper": StripeInfoWrapper,
    "SuspendRequest": SuspendRequest,
    "Tax": Tax,
    "Tax1": Tax1,
    "TaxAmount": TaxAmount,
    "TermsAndConditions": TermsAndConditions,
    "ThirdPartyPnrRemark": ThirdPartyPnrRemark,
    "Ticket": Ticket,
    "TicketAncillary": TicketAncillary,
    "TicketCancellationInfo": TicketCancellationInfo,
    "TicketExchangePolicy": TicketExchangePolicy,
    "TicketRefundPolicy": TicketRefundPolicy,
    "TicketScheduleChangeInformation": TicketScheduleChangeInformation,
    "TimeLocal": TimeLocal,
    "TmcBasicInfo": TmcBasicInfo,
    "TmcInfo": TmcInfo,
    "TokenizedExpiry": TokenizedExpiry,
    "TokenizedExpiryWrapper": TokenizedExpiryWrapper,
    "TravelCard": TravelCard,
    "TravelClassHierarchyWrapper": TravelClassHierarchyWrapper,
    "TravelPref": TravelPref,
    "Traveler": Traveler,
    "TravelerBusinessInfo": TravelerBusinessInfo,
    "TravelerCompanyInfo": TravelerCompanyInfo,
    "TravelerEventSummary": TravelerEventSummary,
    "TravelerInfo": TravelerInfo,
    "TravelerLegalEntity": TravelerLegalEntity,
    "TravelerMatchConditions": TravelerMatchConditions,
    "TravelerPersonalInfo": TravelerPersonalInfo,
    "TravelerRailInfo": TravelerRailInfo,
    "TravelerRestrictions": TravelerRestrictions,
    "TripAdditionalInfo": TripAdditionalInfo,
    "TripBudgetInfo": TripBudgetInfo,
    "TripBudgetInfoWrapper": TripBudgetInfoWrapper,
    "TripPartnerInfo": TripPartnerInfo,
    "TripPartnerInfoDetails": TripPartnerInfoDetails,
    "TripPartnerInfoResponse": TripPartnerInfoResponse,
    "TripV3DetailsResponse": TripV3DetailsResponse,
    "UAPassPlusMetadata": UAPassPlusMetadata,
    "UAPassPlusMetadataWrapper": UAPassPlusMetadataWrapper,
    "UATPInformation": UATPInformation,
    "UATPMetadata": UATPMetadata,
    "UATPMetadataWrapper": UATPMetadataWrapper,
    "UnusedCreditInfo": UnusedCreditInfo,
    "UpdateTripRequest": UpdateTripRequest,
    "User": User,
    "UserBasicInfo": UserBasicInfo,
    "UserBusinessInfo": UserBusinessInfo,
    "UserId": UserId,
    "UserOrgId": UserOrgId,
    "UserOrgIdListWrapper": UserOrgIdListWrapper,
    "UserOrgIdWrapper": UserOrgIdWrapper,
    "UserPersonalInfo": UserPersonalInfo,
    "Vendor": Vendor,
    "VendorInfo": VendorInfo,
    "VendorProgramPaymentDescriptor": VendorProgramPaymentDescriptor,
    "VendorProgramPaymentDescriptorWrapper": VendorProgramPaymentDescriptorWrapper,
    "VendorProgramPaymentMetadata": VendorProgramPaymentMetadata,
    "VendorProgramPaymentMetadata2": VendorProgramPaymentMetadata2,
    "VirtualCardInfo": VirtualCardInfo,
    "VirtualCardMetadata": VirtualCardMetadata,
    "VirtualCardMetadataWrapper": VirtualCardMetadataWrapper,
    "VirtualCardPaymentMetadata": VirtualCardPaymentMetadata,
    "VirtualCardVendorInfo": VirtualCardVendorInfo,
    "Voucher": Voucher,
    "WeightLimit": WeightLimit,
    "WorkerTypeListWrapper": WorkerTypeListWrapper,
    "WorkerTypeWrapper": WorkerTypeWrapper,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
