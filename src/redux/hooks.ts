import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import AuthService from "../services/auth-service";
import { RootState } from "./store";
import { AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAuth = (): boolean => {
    const user = AuthService.isLoggedIn()
    if (user) return true
    else return false
}