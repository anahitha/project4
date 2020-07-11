class Signup {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("Email");
        this.contact = createInput("Contact");
        this.password = createInput("Password");
        this.password2 = createInput("Confirm Password");
        this.button = createButton('Sign-in');
        this.button2 = createButton('Sign-up');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Sign-up");
        this.genres = createElement('h3', "Select your favourite genres:");
        this.radio = createCheckbox('fiction', false);
        this.radio2 = createCheckbox('fantasy', false);
        this.radio5 = createCheckbox('non-fiction', false);
        this.radio6 = createCheckbox('dystopian fiction', false);
        this.radio7 = createCheckbox('historical fiction', false);
        this.radio8 = createCheckbox('mystery', false);
        this.radio3 = createCheckbox('romance', false);
        this.radio4 = createCheckbox('comedy', false);
    }


    display() {
        this.input.position(630, 105)
        this.email.position(630, 165)
        this.contact.position(630, 135)
        this.button2.position(680, 430)
        this.button.position(750, 5)
        this.greeting.position(500, 105)
        this.text.position(630, 5)
        this.password.position(630,195)
        this.password2.position(630,225)
        this.genres.position(600,250)
        this.radio.position(600,300)
        this.radio2.position(600,330)
        this.radio3.position(600,360)
        this.radio4.position(600,390)
        this.radio5.position(750,360)
        this.radio6.position(750,390)
        this.radio7.position(750,330)
        this.radio8.position(750,300)

        this.button2.mousePressed(() => {
            var name = this.input.value();
            console.log(name);
            user = new User();
            user.name = this.input.value();
            user.email = this.email.value();
            user.password = this.password.value();
            peopleCount++;
            user.index = peopleCount;
            if (this.radio2.checked) { 
                user.interests.push("Fantasy");
                console.log("stuff");
            }
            if (this.radio.checked) { 
                user.interests.push("Fiction");
            }
            if (this.radio3.checked) { 
                user.interest3 = "romance";
            }
            if (this.radio4.checked) { 
                user.interest4 = "comedy";
            }
            if (this.radio5.checked) { 
                user.interest5 = "non-fiction";
            }
            if (this.radio6.checked) { 
                user.interest6 = "dystopian fiction";
            }
            if (this.radio7.checked) { 
                user.interest7 = "historical fiction";
            }
            if (this.radio8.checked) { 
                user.interest8 = "mystery";
            }
            user.update();
            console.log(user.interests); 
            console.log(this.radio8.value); 
            background("green");
        });

    }
}