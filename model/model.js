export function changePage(pageName) {
    console.log("pageName", pageName);
    if(pageName == "") {
        $.get("pages/home.html", (data) => {
        $("#app").html(data);
        }).fail((error) => {
            console.log("error", error);
            Swal.fire({
                title: 'Error! Choose a differnet page.',
                text: `${error.statusText}`,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        });
        $("#app").html(`<h1>home</h1>`);
    } else {
        $.get(`pages/${pageName}.html`, (data) => {
            $("#app").html(data);
            }).fail((error) => {
                console.log("error", error);
                Swal.fire({
                    title: 'Error! Choose a differnet page.',
                    text: `${error.statusText}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            });
    }

}


export function checkSignIn(callback) {
    let userSignedIn = true;

    if(userSignedIn) {
        console.log("signed in");
        callback();
    } else {
        console.log("signed out");
        changePage("signin")
    }
}