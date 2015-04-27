
var old_uri = window.location.href;
var new_uri = old_uri.replace(/\?.+$/, "?ls=0");

if (new_uri != old_uri) {
    window.location.href = new_uri;
    console.log("iTunesOnline: Redirected to sane URI.")
}