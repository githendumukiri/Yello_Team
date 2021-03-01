const db = firebase.firestore();
const sessionRef = db.collection("sessions");
const sessionName = document.querySelector("#sessionNameBox");
const sessionPresenter = document.querySelector("#presenterNameBox");
const startTime = document.querySelector("#timeStart");
const endTime = document.querySelector("#timeEnd");
const roomName = document.querySelector("#roomName");
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");
const sessionNameHeader = document.querySelector("#sessionNameHeader");

saveButton.addEventListener("click", function() {
    sessionRef.add({
        name: sessionName.value,
        presenter: sessionPresenter.value,
        startTime: startTime.value,
        endTime: endTime.value,
        roomName: roomName.value
    })
    .then(function() {
        console.log("saved!");
    })
})