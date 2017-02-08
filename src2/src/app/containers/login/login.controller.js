class LoginController {
    constructor($state) {
        "ngInject";
        this.state = $state;
        this.signin = true;
    }

    goToSelectPage (state) {
        const currentState = this.state.current.name;
        if (currentState === state) {
            this.signin = false;
            return true;
        }
    }
}

export default LoginController;
