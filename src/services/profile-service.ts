const isLoggedIn = (): boolean => {
    const profileJson = localStorage.getItem("profile");
    if (profileJson) {
        return true;
    } else return false;
};

const ProfileService = {
    isLoggedIn
};

export default ProfileService;
