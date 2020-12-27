import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDRcYGWMWmMsL0hCrwgDand8jrdDgkYui8',
  authDomain: 'catch-of-the-day-mateustav.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-mateustav-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;
