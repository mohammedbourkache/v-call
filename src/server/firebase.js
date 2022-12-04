import 'firebase/compat/database'
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyAsD-0GKArCdjRpopHQ1M6ScAESz9Th0AY",
    databaseURL: 
    "https://meet-clone-c1e00-default-rtdb.asia-southeast1.firebasedatabase.app"
  };

firebase.initializeApp(firebaseConfig);

let dbRef = firebase.database().ref();

export let connectedRef = firebase.database().ref(".info/connected");

export const userName = prompt("what's your name?");

const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("id");

if (roomId) {
    dbRef = dbRef.child(roomId);
}else {
    dbRef = dbRef.push();
    window.history.replaceState(null, "Meet", `?id=${dbRef.key}`);
}

export default dbRef;
