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