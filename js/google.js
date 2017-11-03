/**
 * Created by mykola.dekhtiarenko on 11/2/17.
 */
$(document).ready(function () {

    gapi.load('auth2', function () {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({
            client_id: '25349712151-aeh42llej5ehnsimvsjk5g4a3mkjrkkq.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            // Request scopes in addition to 'profile' and 'email'
            //scope: 'additional_scope'
        });

        attachSignin(document.getElementById('googleLoginBtn'));
    });


    function attachSignin(element) {
        console.log(element.id);
        auth2.attachClickHandler(element, {},
            function (googleUser) {
                document.getElementById('googleLoginBtn').value = "Continue as " +
                    googleUser.getBasicProfile().getName();
            }, function (error) {
                alert(JSON.stringify(error, undefined, 2));
            });
    }

});