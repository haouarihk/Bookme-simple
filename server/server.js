// Classes
class Book {
    constructor(name, link, disc, pic) {
        this.name = name;
        this.link = link;
        this.disc = disc;
        this.pic = pic;
    }

}

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
let booklist = [{
        name: "jan",
        link: "www",
        disc: "sdfjsdf",
        pic: "https://image.shutterstock.com/image-vector/book-icon-sign-design-260nw-553945819.jpg"
    },
    {
        name: "ban",
        link: "www",
        disc: "sdfjsdf",
        pic: "https://image.shutterstock.com/image-vector/book-icon-sign-design-260nw-553945819.jpg"
    },
    {
        name: "jani",
        link: "www",
        disc: "sdfjsdf",
        pic: "https://image.shutterstock.com/image-vector/book-icon-sign-design-260nw-553945819.jpg"
    },
]

// setting up
let books = [];
booklist.forEach(line => {
    books.push(new Book(line.name, line.link, line.disc, line.pic));
});

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
    socket.on("getme", (searching) => {
        let sordedlist = booklist;
        sordedlist = searchwithname(searching, books);
        socket.emit("search", sordedlist);
    })
}

function searchwithname(input, list) {
    var filter, a, txtValue;
    let listend = []
    for (i = 0; i < list.length; i++) {
        if (input) {
            filter = input.toUpperCase();
            a = list[i];
            txtValue = a.name;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                listend.push(a);
                //list[i].style.display = "";
            } else {
                // list[i].style.display = "none";
            }
        } else {
            // listend.push(a)
        }
    }
    return listend;
}