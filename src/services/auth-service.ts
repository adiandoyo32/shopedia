const isLoggedIn = (): boolean => {
    const profileJson = localStorage.getItem("profile");
    if (profileJson) {
        return true;
    } else return false;
};

const AuthService = {
    isLoggedIn
};

export default AuthService;
