import {calculateAge as calcAge, daysToDeparture as daysToFlight} from "./dateUtils.js";
import {SEAT_DESIGNATION_MAPPING, AIRCRAFT_MAPPING} from "./aircraftInfo.js";

export function renderPassengerInfo(passengerInfo) {
    return console.table(passengerInfo.map(renderSinglePassengerInfo));
}

function renderSinglePassengerInfo({personName, surname, birthday, flightDate, seat, seatDesignation, aircraftManufcturer}){
    return{
        "Imię i nazwisko": `${personName} ${surname}`,
        "Wiek": calcAge(birthday),
        "Dni do wylotu": daysToFlight(flightDate),
        "Miejsce": `${seat}${seatDesignation} (${SEAT_DESIGNATION_MAPPING[seatDesignation]})`,
        "Typ samolotu": AIRCRAFT_MAPPING[aircraftManufcturer]
    }
}



