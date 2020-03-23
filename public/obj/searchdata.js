class Searchline {
    constructor(pic, name, link, disc) {
        this.pic = pic;
        this.name = name;
        this.link = link;
        this.disc = disc;
    }
    getHtml() {
        const name = "'"+this.name+"'";
        const disc = "'"+this.disc+"'";
        const pic = "'"+this.pic+"'";
        let htm =
            '<a  onClick="showBookContent('+name+','+pic+','+disc+')"><div  class ="searchElement"> <h3 > <img src="' + this.pic + '"width="42" height="42">   ' + this.name + "</h3></div>";
        return htm;
    }
}

function getHtmlOfthoesResults(array) {
    let _html = "";
    array.forEach(line => {
        _html += line.getHtml();
    });
    return _html;
}
class Book {
    constructor(pic, name, link, disc) {
        this.pic = pic;
        this.name = name;
        this.link = link;
        this.disc = disc;
    }
    getHtml() {
        const name = "'"+this.name+"'";
        const disc = "'"+this.disc+"'";
        const pic = "'"+this.pic+"'";
        let htm ='<div class="card col-md-3 col-11 mr-md-4 mb-4 "><img class="card-img-top display-none display-md-inline"  src='+pic+' alt="Card image cap"><div class="card-body"><h5 class="card-title">'+this.name+'</h5><p class="card-text">'+(this.disc.substring(0,40)+'...')+'</p><a onClick="showBookContent('+name+','+pic+','+disc+')" class="btn btn-primary"style= "color:white;">Show details</a></div></div>'
        return htm;
    }
}

function getHtmlOfthoesResults(array) {
    let _html = "";
    array.forEach(line => {
        _html += line.getHtml();
    });
    return _html;
}