// Classes
class Book {
    constructor(name, link, disc, pic) {
        this.name = name;
        this.link = link;
        this.disc = disc;
        this.pic = pic;
    }

}
var fs = require('fs');
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
let booklist = []

// setting up
let books = [];
takeContentOfAllBooks();

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
    socket.on("bookshelfrequest", (askfor) => {
        let counter = askfor;
        let mail = [];
        books.forEach(book => {
            // if(counter!==0)
            {
                mail.push(book);
                counter--;
            }
        });
        socket.emit("bookshelflist", mail);
    });
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

function readTextFile(file) {
    var fileContents = fs.readFileSync('./books/' + file, 'utf8');
    fileContents = fileContents.replace(/\r/g, '');
    fileContents = fileContents.replace(/\n/g, '<br>');
    return fileContents;
}

function takeContentOfAllBooks() {
    var files = fs.readdirSync('./books');
    // loop of each file
    files.forEach(filename => {
        let filename2 = filename.substring(0, filename.length - 4);
        let content = readTextFile(filename);
        let splited = content.split("<!!endelement>");
        splited[0] = splited[0].replace("<br>", "");
        // 0 image
        // 1 content
        books.push(new Book(filename2, "#", splited[1], splited[0]));
    });

}