let socket;
let searchresults = [];
let savedtext = "";
let thereAreResult = false;
socket = io();

function detectwhenitchanges() {
    if (savedtext !== document.getElementById("searchbar").value) {
        savedtext = document.getElementById("searchbar").value;
        return true;
    }
    return false;
}

function search() {
    if(!thereAreResult){
    document.getElementById("results").innerHTML="";
    }
    if (detectwhenitchanges()) {
        // send what has typen in the searchbar
        let data = document.getElementById("searchbar").value;
        socket.emit("getme", data);
        // recive the results
        socket.on("search", (results) => {
            searchresults = [];
            results.forEach((result) => {
                if (result) {
                    searchresults.push(new Searchline(result.pic, result.name, result.link, result.disc));
                }
            })
            if (searchresults.length === 0) {
                thereAreResult = false;
            } else {
                thereAreResult = true;
            }
            // show results
            if(thereAreResult){
            let resu = getHtmlOfthoesResults(searchresults);
            document.getElementById("results").innerHTML = resu;
            }
        });

    }

}
// Events
function Onresigter() {

}

function Onlogin() {

}

// Functions
function login() {

}

function register(userdata) {

}


// timers
setInterval(() => {
    search();
}, 100);