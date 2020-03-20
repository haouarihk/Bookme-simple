// lunching the server
const express = require('express');
const app = express();
app.use(express.static('./public'));
const sockets = require('socket.io');
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
const io = sockets(server);
console.log('server is running');
io.sockets.on("connection", connectedclient);

// parameters
let booklist = ["jan","test","be"]

// calculating how manny visitors
let visitors = 0;
setInterval(() => {
    // console.log(visitors);
}, 200);
function connectedclient(socket) {
    visitors++;
    socket.on("disconnect", () => {
        visitors--;
    })
    socket.on("getme",()=>{
        let sordedlist = 
    })
}

