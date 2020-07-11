class AddBook {

    constructor() {
        this.input = createInput("Title");
        this.author = createInput("Author");
        this.description = createInput("Description");
        this.dropPoint = createInput("Drop Point");
        this.button = createButton('Add book');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Add Book");
        this.genres = createElement('h3', "Genre of book:");
        this.radio = createRadio('h3');
        this.radio.option('science-fiction');
        this.radio2 = createRadio('h3');
        this.radio2.option('fantasy');
        this.radio5 = createRadio('h3');
        this.radio5.option('comedy');
        this.radio6 = createRadio('h3');
        this.radio6.option('non-fiction');
        this.radio7 = createRadio('h3');
        this.radio7.option('romance');
        this.radio8 = createRadio('h3');
        this.radio8.option('mystery');
        this.radio3 = createRadio('h3');
        this.radio3.option('dystopian-fiction');
        this.radio4 = createRadio('h3');
        this.radio4.option('historical fiction');
    }


    display() {
        this.input.position(600, 65)
        this.author.position(600, 90)
        this.button.position(650, 320)
        this.greeting.position(500, 105)
        this.text.position(600, 1)
        this.description.position(600,115)
        this.dropPoint.position(600,140)
        this.genres.position(600,150)
        this.radio.position(600,200)
        this.radio2.position(600,230)
        this.radio3.position(600,260)
        this.radio4.position(600,290)
        this.radio5.position(750,260)
        this.radio6.position(750,290)
        this.radio7.position(750,230)
        this.radio8.position(750,200)

    }
}