import Profile from "../models/Profile";

const loadProfile = (): void => {
    let user = localStorage.getItem('profile')
}

const saveProfile = (user: Profile) => {
    localStorage.setItem('profile', JSON.stringify(user));
}

const ProfileService = {
    loadProfile,
    saveProfile,
}

export default ProfileService