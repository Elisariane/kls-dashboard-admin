import http from "../http-common";
import IUserData from "../types/User";


const login = async (credentials: IUserData) => {
    try {
        const response = await http.post("/auth/login", credentials);
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

const AuthService = {
    login
}

export default AuthService;