class Login {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("Email");
        this.password = createInput("Password");
        this.button = createButton('Next');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Sign-up");
    }


    display() {
        this.input.position(600, 105)
        this.email.position(600, 135)
        this.button.position(650, 200)
        this.greeting.position(500, 105)
        this.text.position(620, 5)
        this.password.position(600,165)

        

    }
}