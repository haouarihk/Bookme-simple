let socket;
socket = io();

function search() {
    
    let data = getElementById("searchbar").value;
    socket.emit("getme",data);
    socket.on("search", () => {
        
    });
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