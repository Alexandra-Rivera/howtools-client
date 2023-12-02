import axios from "axios";

export const newPost = async (postInfo) => {
    try {
        const response = await axios.post(`/post/`, postInfo, {
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return ("Something wrong happened", error);
    }
}