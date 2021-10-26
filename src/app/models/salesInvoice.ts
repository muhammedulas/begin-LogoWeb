import { intelList } from "./intelList"
import { invoiceTrans } from "./invoiceTrans";
import { OKCInfo } from "./OKCInfo"
import { paymentList } from "./paymentList"
import { salesDispatch } from "./salesDispatch"

export class salesInvoice {
    "INSPECT": boolean;
    "INTERNAL_REFERENCE": number;
    "GRPCODE": number;
    "TYPE": number;
    "NUMBER": string;
    "DOC_TRACK_NR": string;
    "DATE": string;
    "TIME": number;
    "DOC_NUMBER": string;
    "AUXIL_CODE": string;
    "AUTH_CODE": string;
    "ARP_CODE": string;
    "CLIENTREF": number;
    "ARP_CODE_SHPM": string;
    "RECVREF": number;
    "SHIPLOC_CODE": string;
    "OHP_CODE": string;
    "CENTERREF": number;
    "GL_CODE": string;
    "ACCOUNTREF": number;
    "SOURCE_WH": number;
    "SOURCE_COST_GRP": number;
    "CANCELLED": number;
    "CANCEL_DATE": string;
    "GL_POSTED": number;
    "PAIDINCASH": number;
    "FROMSAFE": number;
    "POST_FLAGS": number;
    "VAT_RATE": number;
    "ADD_DISCOUNTS": number;
    "TOTAL_DISCOUNTS": number;
    "TOTAL_DISCOUNTED": number;
    "ADD_EXPENSES": number;
    "TOTAL_EXPENSES": number;
    "EXPENSE_DISTRB": number;
    "TOTAL_DEPOSITED": number;
    "TOTAL_PROMOTIONS": number;
    "TOTAL_GROSSVINC": number;
    "TOTAL_VAT": number;
    "TOTAL_GROSS": number;
    "TOTAL_NET": number;
    "NOTES1": string;
    "NOTES2": string;
    "NOTES3": string;
    "NOTES4": string;
    "NOTES5": string;
    "NOTES6": string;
    "INTEREST_ACCRD": number;
    "CURR_INVOICE": number;
    "TC_XRATE": number;
    "TC_NET": number;
    "RC_XRATE": number;
    "RC_NET": number;
    "SINGLE_PAYMENT": number;
    "KASTRANSREF": number;
    "PAYMENT_CODE": string;
    "PAYDEFREF": number;
    "PRINT_COUNTER": number;
    "PRINT_DATE": string;
    "VAT_INCLUDED_GRS": number;
    "DIVISION": number;
    "DEPARTMENT": number;
    "ACCFICHEREF": number;
    "ADDEXPACCREF": number;
    "ADDEXPCENTREF": number;
    "PRICE_UPD_NEG": number;
    "CREATED_BY": number;
    "DATE_CREATED": string;
    "HOUR_CREATED": number;
    "MIN_CREATED": number;
    "SEC_CREATED": number;
    "MODIFIED_BY": number;
    "DATE_MODIFIED": string;
    "HOUR_MODIFIED": number;
    "MIN_MODIFIED": number;
    "SEC_MODIFIED": number;
    "SALESMAN_CODE": string;
    "SALESMANREF": number;
    "CANCELLEDACC": number;
    "SHIPMENT_TYPE": string;
    "SHIPPING_AGENT": string;
    "TRACK_NR": string;
    "CURRSEL_TOTALS": number;
    "CURRSEL_DETAILS": number;
    "TRADING_GRP": string;
    "TEXTINC": number;
    "DATA_SITEID": number;
    "DATA_REFERENCE": number;
    "FACTORY": number;
    "DISPATCH_DATE": number;
    "DISP_NUMBER": string;
    "DISPATCHES": {
        "items": salesDispatch[]
    }
    "TRANSACTIONS": {
        "items": invoiceTrans[]
    }
    "PAYMENT_LIST": {
        "items": paymentList[]
    }
    "DETLINES": string;
    "STOPAJ_RATE": number;
    "SSDF_RATE": number;
    "BORSA_RATE": number;
    "KOMISYON_RATE": number;
    "KOMKDV_RATE": number;
    "BAGKUR_RATE": number;
    "STOPAJ": number;
    "SSDF": number;
    "BORSA": number;
    "KOMISYON": number;
    "KOMKDV": number;
    "BAGKUR": number;
    "EK1_PER": number;
    "EK1": number;
    "EK2_PER": number;
    "EK2": number;
    "STOPAJACC": string;
    "STOPAJACCREF": number;
    "SSDFACC": string;
    "SSDFACCREF": number;
    "BORSAACC": string;
    "BORSAACCREF": number;
    "KOMISYONACC": string;
    "KOMISYONACCREF": number;
    "KOMKDVACC": string;
    "KOMKDVACCREF": number;
    "BAGKURACC": string;
    "BAGKURACCREF": number;
    "STOPAJCOST": string;
    "STOPAJCREF": number;
    "SSDFCOST": string;
    "SSDFCREF": number;
    "BORSACOST": string;
    "BORSACREF": number;
    "KOMISYONCOST": string;
    "KOMISYONCREF": number;
    "KOMKDVCOST": string;
    "KOMKDVCREF": number;
    "BAGKURCOST": string;
    "BAGKURCREF": number;
    "KOM_TYPE": number;
    "EK1ACC": string;
    "EK1ACCREF": number;
    "EK2ACC": string;
    "EK2ACCREF": number;
    "EK1COST": string;
    "EK1CREF": number;
    "EK2COST": string;
    "EK2CREF": number;
    "EK3ACC": string;
    "EK3ACCREF": number;
    "EK4ACC": string;
    "EK4ACCREF": number;
    "EK5ACC": string;
    "EK5ACCREF": number;
    "EK3COST": string;
    "EK3CREF": number;
    "EK4COST": string;
    "EK4CREF": number;
    "EK5COST": string;
    "EK5CREF": number;
    "STOPAJ_CALC_TYPE": number;
    "BAGKUR_CALC_TYPE": number;
    "XBUFS": string;
    "DOCALS": string;
    "ITEXT": string;
    "XML_ATTRIBUTE": number;
    "DISTORDERREF": number;
    "COSTOFSALEFCREF": number;
    "DLV_CLIENT": number;
    "OP_STATUS": number;
    "TOTAL_ADD_TAX": number;
    "PAYMENT_TYPE": number;
    "ACCOUNTED_CNT": number;
    "INFLATION_IDX": number;
    "CASH_TRAN_GRP_NO": string;
    "CASH_TRAN_GRPLINE_NO": number;
    "CASH_INFLDX": number;
    "ORGLOGOID": string;
    "FROM_EXIM": number;
    "CASH_ORGLOGOID": string;
    "FRG_TYP_CODE": string;
    "FRG_TYP_DESC": string;
    "EXIM_FICHE_TYPE": number;
    "PROJECT_CODE": string;
    "PROJECTREF": number;
    "WFLOWCARDREF": number;
    "STATUS": number;
    "DEDUCTIONPART1": number;
    "DEDUCTIONPART2": number;
    "DATA_LINK_REFERENCE": number;
    "TOTALEXADDTAX": number;
    "EXACCOUNTED": number;
    "FROMBANK": number;
    "BNTRANSREF": number;
    "GUARANTOR1_FICHETYPE": number;
    "GUARANTOR1_NR": number;
    "GUARANTOR1_NAMESURNAME": string;
    "GUARANTOR1_ADDR1": string;
    "GUARANTOR1_ADDR2": string;
    "GUARANTOR1_DISTRICT": string;
    "GUARANTOR1_TOWN": string;
    "GUARANTOR1_CITY": string;
    "GUARANTOR1_COUNTRY": string;
    "GUARANTOR1_POSTCODE": string;
    "GUARANTOR1_TELNR1": string;
    "GUARANTOR1_TELNR2": string;
    "GUARANTOR1_FAXNR": string;
    "GUARANTOR1_SITEID": number;
    "GUARANTOR1_ORGLOGICREF": number;
    "GUARANTOR1_CLIENTREF": number;
    "GUARANTOR1_TAXNR": string;
    "GUARANTOR1_TAXOFFICE": string;
    "GUARANTOR1_TAXXOFFCODE": string;
    "GUARANTOR1_BANKBRANCHCODE": string;
    "GUARANTOR1_BANKBRANCHS": string;
    "GUARANTOR1_BANKACCOUNTS": string;
    "GUARANTOR2_FICHETYPE": number;
    "GUARANTOR2_NR": number;
    "GUARANTOR2_NAMESURNAME": string;
    "GUARANTOR2_ADDR1": string;
    "GUARANTOR2_ADDR2": string;
    "GUARANTOR2_DISTRICT": string;
    "GUARANTOR2_TOWN": string;
    "GUARANTOR2_CITY": string;
    "GUARANTOR2_COUNTRY": string;
    "GUARANTOR2_POSTCODE": string;
    "GUARANTOR2_TELNR1": string;
    "GUARANTOR2_TELNR2": string;
    "GUARANTOR2_FAXNR": string;
    "GUARANTOR2_SITEID": number;
    "GUARANTOR2_ORGLOGICREF": number;
    "GUARANTOR2_CLIENTREF": number;
    "GUARANTOR2_TAXNR": string;
    "GUARANTOR2_TAXOFFICE": string;
    "GUARANTOR2_TAXOFFCODE": string;
    "GUARANTOR2_BANKBRANCHCODE": string;
    "GUARANTOR2_BANKBRANCHS": string;
    "GUARANTOR2_BANKACCOUNTS": string;
    "AFFECT_COLLATRL": number;
    "FROMORDWITHPAY": number;
    "INTEL_LIST": {
        "items": intelList[]
    }
    "GRPFIRMTRANS": number;
    "AFFECT_RISK": number;
    "EXCHINFO_INTERNAL_REFERENCE": number;
    "EXCHINFO_FICHE_REF": number;
    "EXCHINFO_ADD_DISCOUNTS": number;
    "EXCHINFO_TOTAL_DISCOUNTS": number;
    "EXCHINFO_TOTAL_DISCOUNTED": number;
    "EXCHINFO_ADD_EXPENSES": number;
    "EXCHINFO_TOTAL_EXPENSES": number;
    "EXCHINFO_DIST_EXPENSE": number;
    "EXCHINFO_TOTAL_DEPOZITO": number;
    "EXCHINFO_TOTAL_PROMOTIONS": number;
    "EXCHINFO_VAT_INC_GROSS": number;
    "EXCHINFO_TOTAL_VAT": number;
    "EXCHINFO_GROSS_TOTAL": number;
    "EXCHINFO_TOTAL_ADD_TAX": number;
    "EXCHINFO_TOTAL_EX_ADD_TAX": number;
    "EXCHINFO_BAGKUR": number;
    "EXCHINFO_STOPAJ": number;
    "EXCHINFO_SSDF": number;
    "EXCHINFO_BORSA": number;
    "EXCHINFO_KOMISYON": number;
    "EXCHINFO_KOM_KDV": number;
    "EXCHINFO_EK1": number;
    "EXCHINFO_EK2": number;
    "EXCHINFO_EK3": number;
    "EXCHINFO_EK4": number;
    "EXCHINFO_EK5": number;
    "CONTROL_INFO": number;
    "POS_TRANSFER_INFO": number;
    "TAX_FREE_CHECK": number;
    "PASSPORT_NO": string;
    "CREDIT_CARD_NO": string;
    "CREDIT_CARD_NUMBER": string;
    "APPROVE": number;
    "APPROVE_DATE": string;
    "ACC_FICHE_SITEID": number;
    "ENTRUST": number;
    "EK3_PER": number;
    "EK3": number;
    "EK4_PER": number;
    "EK4": number;
    "EK5_PER": number;
    "EK5": number;
    "DOC_DATE": string;
    "AUTOFILL_SLDETAILS": number;
    "EINVOICE": number;
    "PROFILE_ID": number;
    "GUID": string;
    "ESEND_DATE": string;
    "ESTATUS": number;
    "ESTARTDATE": string;
    "EENDDATE": string;
    "EDESCRIPTION": string;
    "EDURATION": number;
    "EDURATION_TYPE": number;
    "EINSTEAD_OF_DISPATCH": number;
    "EINVOICE_SENDCUSTOM": number;
    "EINVOICE_TAXTYPE": number;
    "EINVOICE_TUNAME": string;
    "EINVOICE_TUSURNAME": string;
    "EINVOICE_TUPASSPORTNO": string;
    "EINVOICE_TUPASSPORTDATE": string;
    "EINVOICE_TUNATIONALITY": string;
    "EINVOICE_TUNATIONALITYNAME": string;
    "EINVOICE_TUBANKNAME": string;
    "EINVOICE_TUBNACCOUNTNO": string;
    "EINVOICE_TUBNBRANCH": string;
    "EINVOICE_TUPAYMENTNOTE": string;
    "EINVOICE_TUBNCURR": string;
    "EINVOICE_ADDR1": string;
    "EINVOICE_ADDR2": string;
    "EINVOICE_CITYCODE": string;
    "EINVOICE_CITY": string;
    "EINVOICE_COUNTRYCODE": string;
    "EINVOICE_COUNTRY": string;
    "EINVOICE_DISTRICTCODE": string;
    "EINVOICE_DISTRICT": string;
    "EINVOICE_TOWNCODE": string;
    "EINVOICE_TOWN": string;
    "EINVOICE_EXITTOWN": string;
    "EINVOICE_EXITGATECODE": string;
    "EINVOICE_EXITGATE": string;
    "EINVOICE_AGENCYCODE": string;
    "EINVOICE_AGENCY": string;
    "EINVOICE_EXITCOUNTRYCODE": string;
    "EINVOICE_EXITCOUNTRY": string;
    "EINVOICE_TRANSPORTTYP": number;
    "EINVOICE_TRANSPORTTYPCODE": string;
    "EINVOICE_TRANSPORTTYPNAME": string;
    "EINVOICE_EXITDATE": string;
    "EINVOICE_EXITTIME": string;
    "EINVOICE_FLIGHTNUMBER": string;
    "EINVOICE_GUIDE": string;
    "EINVOICE_TURETPRICE": number;
    "EINVOICE_TURETPRICESTR": string;
    "EINVOICE_SENDEINVCUSTOM": number;
    "EINVOICE_EINVOICETYPSGK": number;
    "EINVOICE_TAXPAYERCODE": string;
    "EINVOICE_TAXPAYERNAME": string;
    "EINVOICE_DOCUMENTNOSGK": string;
    "EINVOICE_DRIVERNAME1": string;
    "EINVOICE_DRIVERSURNAME1": string;
    "EINVOICE_DRIVERTCKNO1": string;
    "EINVOICE_PLATENUM1": string;
    "EINVOICE_CHASSISNUM1": string;
    "EINVOICE_DRIVERNAME2": string;
    "EINVOICE_DRIVERSURNAME2": string;
    "EINVOICE_DRIVERTCKNO2": string;
    "EINVOICE_PLATENUM2": string;
    "EINVOICE_CHASSISNUM2": string;
    "EINVOICE_DRIVERNAME3": string;
    "EINVOICE_DRIVERSURNAME3": string;
    "EINVOICE_DRIVERTCKNO3": string;
    "EINVOICE_PLATENUM3": string;
    "EINVOICE_CHASSISNUM3": string;
    "EINVOICE_CHAINDELIVERY": number;
    "EINVOICE_SELLERCLIENTREF": number;
    "EINVOICE_SELLERCLIENTCODE": string;
    "EINVOICE_TAXNRTOPAY": string;
    "PAYPLAN_GLOBAL_CODE": string;
    "TRCURR_GLOBAL_CODE": string;
    "EDTCURR_GLOBAL_CODE": string;
    "CANCEL_AUTO_GL_PROC": number;
    "FILL_GL_CODES_CONN": number;
    "FILL_GL_CODES_CARD": number;
    "GLOBAL_ID": string;
    "DEVIR": number;
    "LOC_CONTROL_OFF": number;
    "CANT_CRE_DEDUCT": number;
    "VATEXCEPT_REASON": string;
    "VATEXCEPT_CODE": string;
    "ADDTAXEXCEPT_REASON": string;
    "ADDTAXEXCEPT_CODE": string;
    "EINVOICE_TYPE": number;
    "TOTAL_NET_STR": string;
    "TR_NET_STR": string;
    "CANCEL_AUTO_CAMP_PROC": number;
    "CAMPAIGN_CODE": string;
    "SHIPLOC_DEF": string;
    "TOTAL_SERVICES": number;
    "FROMEXCHDIFF": number;
    "EXIMVAT": number;
    "SERIAL_CODE": string;
    "CHECK_CLDAILYDEDUCTLIMIT": number;
    "STAFF_OTHER_EXPENSES": number;
    "OFFER_REFERENCE": number;
    "NO_CALCULATE": number;
    "APPLY_ARP_DISCOUNT": number;
    "MARKREF": number;
    "MARK_CODE": string;
    "EARCHIVEDETR_LOGICALREF": number;
    "EARCHIVEDETR_INVOICEREF": number;
    "EARCHIVEDETR_INSTALLMENTNUMBER": string;
    "EARCHIVEDETR_EARCHIVESTATUS": number;
    "EARCHIVEDETR_EARCHIVESTATUSOLD": number;
    "EARCHIVEDETR_SENDMOD": number;
    "EARCHIVEDETR_INTSALESADDR": string;
    "EARCHIVEDETR_INTPAYMENTDESC": string;
    "EARCHIVEDETR_INTPAYMENTTYPE": number;
    "EARCHIVEDETR_INTPAYMENTAGENT": string;
    "EARCHIVEDETR_INTPAYMENTDATEORG": number;
    "EARCHIVEDETR_INTPAYMENTDATE": string;
    "EARCHIVEDETR_OCKSERIALNUMBER": string;
    "EARCHIVEDETR_OCKZNUMBER": string;
    "EARCHIVEDETR_OCKFICHENUMBER": string;
    "EARCHIVEDETR_OCKFICHEDATEORG": number;
    "EARCHIVEDETR_OCKFICHEDATE": string;
    "EARCHIVEDETR_ISCOMP": number;
    "EARCHIVEDETR_TAXNR": string;
    "EARCHIVEDETR_TCKNO": string;
    "EARCHIVEDETR_NAME": string;
    "EARCHIVEDETR_SURNAME": string;
    "EARCHIVEDETR_DEFINITION": string;
    "EARCHIVEDETR_ADDR1": string;
    "EARCHIVEDETR_ADDR2": string;
    "EARCHIVEDETR_CITYCODE": string;
    "EARCHIVEDETR_CITY": string;
    "EARCHIVEDETR_COUNTRYCODE": string;
    "EARCHIVEDETR_COUNTRY": string;
    "EARCHIVEDETR_POSTCODE": string;
    "EARCHIVEDETR_DISTRICTCODE": string;
    "EARCHIVEDETR_DISTRICT": string;
    "EARCHIVEDETR_TOWNCODE": string;
    "EARCHIVEDETR_TOWN": string;
    "EARCHIVEDETR_EMAILADDR": string;
    "EARCHIVEDETR_ISPERCURR": number;
    "EARCHIVEDETR_INSTEADOFDESP": number;
    "EARCHIVEDETR_TAXOFFICE": string;
    "EARCHIVEDETR_TELCODES1": string;
    "EARCHIVEDETR_TELCODES2": string;
    "EARCHIVEDETR_TELNRS1": string;
    "EARCHIVEDETR_TELNRS2": string;
    "EARCHIVEDETR_OLDEARCHIVESTATUS": number;
    "EARCHIVEDETR_DRIVERNAME1": string;
    "EARCHIVEDETR_DRIVERSURNAME1": string;
    "EARCHIVEDETR_DRIVERTCKNO1": string;
    "EARCHIVEDETR_PLATENUM1": string;
    "EARCHIVEDETR_CHASSISNUM1": string;
    "EARCHIVEDETR_DRIVERNAME2": string;
    "EARCHIVEDETR_DRIVERSURNAME2": string;
    "EARCHIVEDETR_DRIVERTCKNO2": string;
    "EARCHIVEDETR_PLATENUM2": string;
    "EARCHIVEDETR_CHASSISNUM2": string;
    "EARCHIVEDETR_DRIVERNAME3": string;
    "EARCHIVEDETR_DRIVERSURNAME3": string;
    "EARCHIVEDETR_DRIVERTCKNO3": string;
    "EARCHIVEDETR_PLATENUM3": string;
    "EARCHIVEDETR_CHASSISNUM3": string;
    "EARCHIVEDETR_CHAINDELIVERY": number;
    "EARCHIVEDETR_SELLERCLIENTREF": number;
    "EARCHIVEDETR_SELLERCLIENTCODE": string;
    "EBOOK_DOCDATE": string;
    "EBOOK_NODOCUMENT": number;
    "EBOOK_DOCNR": string;
    "EBOOK_DOCTYPE": number;
    "EBOOK_EXPLAIN": string;
    "EBOOK_PAYTYPE": string;
    "EBOOK_NOPAY": number;
    "EPRODUCER_STATUS": number;
    "EPRODUCER_SENDMOD": number;
    "EPRODUCER_TAXNR": string;
    "EPRODUCER_TCKNO": string;
    "EPRODUCER_NAME": string;
    "EPRODUCER_SURNAME": string;
    "EPRODUCER_DEFINITION": string;
    "EPRODUCER_ADDR1": string;
    "EPRODUCER_ADDR2": string;
    "EPRODUCER_CITYCODE": string;
    "EPRODUCER_CITY": string;
    "EPRODUCER_COUNTRYCODE": string;
    "EPRODUCER_COUNTRY": string;
    "EPRODUCER_POSTCODE": string;
    "EPRODUCER_DISTRICTCODE": string;
    "EPRODUCER_DISTRICT": string;
    "EPRODUCER_TOWNCODE": string;
    "EPRODUCER_TOWN": string;
    "EPRODUCER_EMAILADDR": string;
    "EPRODUCER_ISCOMP": number;
    "EPRODUCER_DELIVERYDATEORG": number;
    "EPRODUCER_DELIVERYDATE": string;
    "EPRODUCER_ISPERCURR": number;
    "IS_OKC_FICHE": number;
    "OKCINFO_LIST": {
        "items": OKCInfo[]
    }
    "EXIM_PAYTYPEREF": number;
    "EXIM_PAYTYPE_CODE": string;
    "EXIM_PAYTYPE_NAME": string;
    "EXIM_BRBANKREF": number;
    "EXIM_BRBANK_CODE": string;
    "EXIM_BRBANK_NAME": string;
    "DELIVERY_CODE": string;
    "ACCEPT_EINV_PUBLIC": number;
    "PUBLICBNACCREF": number;
    "PUBLIC_BNACC_CODE": string;
    "PUBLIC_BNACC_IBAN": string;
    "PUBLIC_BNACC_CURRENCY": number;
    "TYPE_CODE": string;
    "FUTURE_MONTH_YREXPINC": number;
    "DOC_DETAIL": number;
    "CALC_ADD_TAX_VAT_SEP": number;
}