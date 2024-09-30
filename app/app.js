// import Swal from 'sweetalert2';
import { changePage, checkSignIn } from "../model/model.js"


// right here should be the part that makes each page have content

function initListeners() {
    Swal.fire({
        title: "Good job!",
        text: "Now go take a nap!",
        icon: "success"
      });
}

// this function is used to grab the hashtag and load the corret page
function route() {
    let hashTag = window.location.hash
    let pageID = hashTag.replace("#", "");
    console.log("route", pageID);
    changePage(pageID);
}
 
// this function adds the lister url change lister to the window
function initSite() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
// initListeners();
checkSignIn(initSite);
// initSite();
});
