class Searchline {
    constructor(pic, name, link, disc) {
        this.pic = pic;
        this.name = name;
        this.link = link;
        this.disc = disc;
    }
    getHtml() {
        let htm ='<a class="col-12"  href="'+this.link+'"><div style ="background:white;padding:10px"><h1 style=""> <img src="'+this.pic+'"width="42" height="42">' + this.name +"</h1></div>";
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