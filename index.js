gapi.load('auth2', function() {
  gapi.auth2.int();
});
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  sessionStorage.setItem('Name', profile.getName());
  sessionStorage.setItem('Email', profile.getEmail());
  sessionStorage.setItem('Email', 'lol gottem');
  window.location.replace("http://ads.lciteam.club/welcome.html");
}
