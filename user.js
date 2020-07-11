class User {
    constructor() {
        this.index = null;
        this.email = null;
        this.password = null;
        this.interest1 = null;
        this.interest2 = null;
        this.interest4 = null;
        this.interest3 = null;
        this.interest5 = null;
        this.interest6 = null;
        this.interest7 = null;
        this.interest8 = null;
    }
    update() {
        var userIndex = "users/user" + this.index;
        database.ref(userIndex).set({
            name: this.name,
            email: this.email,
            password: this.password,
            interest1: this.interest1,
            interest2: this.interest2,
            interest3: this.interest3,
            interest4: this.interest4,
            interest5: this.interest5,
            interest6: this.interest6,
            interest7: this.interest7,
            interest8: this.interest8
        });
    }
}
