import { quickProductionSlip } from "../quickProductionSlip";

export class quickProductionSlipResp {

    "Meta": {
        "href": string;
        "mediaType": string;
        "apiVersion": string;
    };
    "offset": number;
    "count": number;
    "totalCount": number;
    "limit": number;
    "first": {
        "href": string;
        "mediaType": string;
        "apiVersion": string;
    };
    "next": {
        "href": string;
        "mediaType": string;
        "apiVersion": string;
    };
    "previous": {
        "mediaType": string;
        "apiVersion": string;
    };
    "items": quickProductionSlip[];
}