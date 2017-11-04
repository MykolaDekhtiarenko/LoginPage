/**
 * Created by mykola.dekhtiarenko on 11/2/17.
 */
$(document).ready(function () {

    function getUserData() {
        FB.api('/me', function(response) {
            document.getElementById('fbLoginBtnLabel').innerText="Continue as "+response.name;
        });
    }

    window.fbAsyncInit = function() {
        FB.init({
            appId      : '125210321502904',
            xfbml      : true,
            version    : 'v2.10'
        });

        //check user session and refresh it
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                //user is authorized
                getUserData();
            } else {
                //user is not authorized
            }
        });
    };

//load the JavaScript SDK
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.com/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

//add event listener to login button
    document.getElementById('fbLoginBtn').addEventListener('click', function() {
        //do the login
        FB.login(function(response) {
            if (response.authResponse) {
                //user just authorized your app
                getUserData();
            }
        }, {scope: 'email,public_profile', return_scopes: true});
    }, false);
});