import axios from 'axios'; //Importamos axios

export const userRegister = async (user) => {
    try {
        const response = await axios.post(`/auth/register`, user, {
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("The user was not created");
    }
};

export const userLogin = async (userInfo) => {
    try {
        const response = await axios.post(`/auth/login`, userInfo, {
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("An error has ocurred");
    }
};