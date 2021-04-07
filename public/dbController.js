import firebase from "firebase/app";
import "firebase/database";

export function insertSessionData(session) {
    firebase.database().ref('sessions/' + session.name).set({
        Name: session.name,
        startTime: session.startTime,
        endTime: session.endTime,
        Duration: session.Duration,
        presenterName: session.presenterName,
        presenterEmail: session.presenterEmail,
        presenterPhone: session.presenterPhone,
        roomName: session.roomName,
        roomCapacity: session.roomCapacity
    }, (error) => {
        if (error) {
            // The write failed...
            console.log(error);
        } else {
            // Data saved successfully!
            console.log("Session Inserted!")
        }
    });
}

export function insertPresenterData(presenter) {
    firebase.database().ref('presenters/' + presenter.name).set({
        Name: presenter.name,
        Email: presenter.email,
        DayOfPhone: presenter.dayOfPhone,
        Phone: presenter.phone
    }, (error) => {
        if (error) {
            // The write failed...
            console.log(error);
        } else {
            // Data saved successfully!
            console.log("Presenter Inserted!")
        }
    });
}

export function insertTimeSlotsData(timeSlot) {
    firebase.database().ref('timeslots/').set({
        StartTime: timeSlot.startTime,
        EndTime: timeSlot.endTime,
        Duration: timeSlot.duration
    }, (error) => {
        if (error) {
            // The write failed...
            console.log(error);
        } else {
            // Data saved successfully!
            console.log("Timeslot Inserted!")
        }
    });
}

export function insertRoomsData(room) {
    firebase.database().ref('rooms/' + room.name).set({
        Name: room.name,
        Capacity: room.capacity
    }, (error) => {
        if (error) {
            // The write failed...
            console.log(error);
        } else {
            // Data saved successfully!
            console.log("Room Insterted!");
        }
    });
}


export function retrieveSingleSessionData(name) {
    var ref = firebase.database().ref('session/');

    ref.orderByChild("name").equalTo(name).on("Value", function (snapshot) {
        return snapshot.key;
    });
}

export function retrieveAllSessionData() {
    var ref = firebase.database().ref('session/');

    ref.orderByKey().on("child_added", function (snapshot) {
        return snapshot.key;
    });
}

export function retrieveSingleTimeslotData(startTime) {
    var ref = firebase.database().ref('timeslots/');

    ref.orderByChild("startTime").equalTo(startTime).on("Value", function (snapshot) {
        return snapshot.key;
    });
}

export function retrieveAllTimeslotData() {
    var ref = firebase.database().ref('timeslots/');

    ref.orderByKey().on("child_added", function (snapshot) {
        return snapshot.key;
    });
}

export function retrieveSinglePresenterData(name) {
    var ref = firebase.database().ref('presenters/');

    ref.orderByChild("name").equalTo(name).on("Value", function (snapshot) {
        return snapshot.key;
    });
}

export function retrieveAllPresenterData() {
    var ref = firebase.database().ref('presenters/');

    ref.orderByKey().on("child_added", function (snapshot) {
        return snapshot.key;
    });
}

export function retrieveSingleRoomData(name) {
    var ref = firebase.database().ref('rooms/');

    ref.orderByChild("name").equalTo(name).on("Value", function (snapshot) {
        return snapshot.key;
    });
}

export function retrieveAllRoomData() {
    var ref = firebase.database().ref('rooms/');

    ref.orderByKey().on("child_added", function (snapshot) {
        return snapshot.key;
    });
}