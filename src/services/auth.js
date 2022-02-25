var firebase = require('firebase');
var ui = require('firebaseui');

ui.start('#firebase-ui-container', {
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
        }
    ],
});