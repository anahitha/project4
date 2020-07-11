class Settings {

    constructor(name, email) {
        this.input = createElement('h2', name);
        this.email = createElement('h2',email);
        this.password = createInput("Password");
        this.contact = createInput("Contact no.")
        this.button = createButton('Confirm');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Settings");
    }


    display() {
        this.input.position(600, 59)
        this.email.position(600, 100)
        this.contact.position(600, 195)
        this.password.position(600,165)
        this.button.position(650, 220)
        this.greeting.position(500, 105)
        this.text.position(620, 5)

        

    }
}