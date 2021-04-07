import {insertSessionData, insertPresenterData, insertTimeSlotsData, insertRoomsData} from "./dbController";

export function formatSession(name, startTime, endTime, presenterName, presenterEmail, presenterPhone, roomName, roomCapacity) {
    //create sessions obj
    let session = {
        name: '',
        startTime: 0,
        endTime: 0,
        Duration: function () {
            return this.endTime - this.startTime;
        },
        presenterName: '',
        presenterEmail: '',
        presenterPhone: '',
        roomName: '',
        roomCapacity: 0
    }

    //Set the values
    session[name, startTime, endTime, Duration(), presenterName, presenterEmail, presenterPhone, roomName, roomCapacity];

    insertSessionData(session);
};

export function formatTimeSlot(startTime, endTime) {
    //create timeslot obj
    let timeslot = {
        startTime: 0,
        endTime: 0,
        Duration: function () {
            return this.endTime - this.startTime;
        }
    };

    timeslot[startTime, endTime, Duration()];

    insertTimeSlotsData(timeslot);
};

export function formatPresenter(name, email, dayOfPhone, phone) {
    //create Presenter obj
    let presenter = {
        Name: '',
        Email: '',
        DayOfPhone: '',
        Phone: ''
    }

    presenter[name, email, dayOfPhone, phone];

    insertPresenterData(presenter);
}

export function formatRoom(name, cap) {
    //create Room obj
    let room = {
        Name: '',
        Capacity: 0
    }

    room[name, cap];

    insertRoomsData(room);
}
