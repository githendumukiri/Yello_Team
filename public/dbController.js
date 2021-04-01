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
        Name: presnter.name,
        Email: presneter.email,
        DayOfPhone: presneter.dayOfPhone,
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
    firebase.databse().ref('timeslots/').set({
        StartTime: timeslot.startTime,
        EndTime: timeSlot.endTime,
        Duration: timeSlot.duration
    },  (error) => {
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


// TODO: Create read fucntion for one session

// TODO: Create read fucniton for all sessions

// TODO: Create read fucntion for one Timeslot

// TODO: Create read fucniton for all Timeslots

// TODO: Create read fucntion for one presenter

// TODO: Create read fucniton for all presenters

// TODO: Create read fucntion for one room

// TODO: Create read fucniton for all rooms