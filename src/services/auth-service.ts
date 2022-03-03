import LoginRequest from "../models/request/LoginRequest";

const isLoggedIn = (): boolean => {
    const profileJson = localStorage.getItem("profile");
    if (profileJson) {
        return true;
    } else return false;
};

const login = ({email, password} : LoginRequest) => {
    if (email != 'user@email.com' && password != '123456') {
    }
}

const AuthService = {
    isLoggedIn,
    login
};

export default AuthService;
