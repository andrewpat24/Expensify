import * as firebase from "firebase";

// Your web app's Firebase configuration
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// Deleting an entry
// const id = "-LjJsj4-txJKtcTZilYE";
// database.ref("expenses/" + id).set(null);

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({ id: childSnapshot.key, ...childSnapshot.val() });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({ id: childSnapshot.key, ...childSnapshot.val() });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// setTimeout(() => {
//   database.ref("expenses").push({
//     description: "Snacks and beer",
//     note: "Safeway",
//     amount: 23543,
//     createdAt: 1
//   });
// }, 2000);

// const subscribeToDB = database.ref().on("value", snapshot => {
//   console.log(snapshot.val());
// });

// database.ref().off("value", subscribeToDB);

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const result = snapshot.val();
//     console.trace(result);
//   })
//   .catch(e => {
//     console.trace("error:", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Andrew Patterson",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "Software Developer",
//       company: "Spotify"
//     },
//     location: {
//       city: "San Francisco",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("No data saved - error:", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });
