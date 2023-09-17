import {renderPassengerInfo} from "./utils/renderer.js"

const PASSENGER_INFO = [
    {
        personName: "Mateusz",
        surname: "Trzmiel",
        birthday: new Date("2006-04-21"),
        flightDate: new Date("2023-10-05T03:24:00"),
        seat: 21,
        seatDesignation: "A",
        aircraftManufcturer: 0,
    },
    {
        personName: "Maciej",
        surname: "Matysiak",
        birthday: new Date("2006-01-02"),
        flightDate: new Date("2023-12-05T15:27:00"),
        seat: 37,
        seatDesignation: "B",
        aircraftManufcturer: 1,
    },
];

renderPassengerInfo(PASSENGER_INFO);