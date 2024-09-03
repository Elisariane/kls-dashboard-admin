import http from "../http-common";
import IUserData from "../types/User";
import IUserSingup from "../types/UserSingup";


const login = async (credentials: IUserData) => {
    try {
        const response = await http.post("/auth/login", credentials);
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

const singup = async (credentials: IUserSingup) => {
    try {
        const response = await http.post("/auth/signup", credentials);
        return response.data;
    } catch (error) {
        console.error("Signup failed:", error);
        throw error;
    }
};

const AuthService = {
    login,
    singup
}

export default AuthService;