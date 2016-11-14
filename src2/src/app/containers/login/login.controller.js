class LoginController {
    constructor($state) {
        "ngInject";
        this.state = $state;
    }

    gotoRegistration () {
        let currentState = this.state.current.name;
        console.log(currentState);
        if(currentState === "registration") {
            return true;
        }
    }

}

export default LoginController;
