import axios from "axios";

class MediaController {


    static async createMedia (token, media) {

        if (!token) return;
        if (!media) return;

        try {
            const response = await axios
            .post ('http://127.0.0.1:8000/api/v0.1/user/media/', 
                media, 
                {   
                    headers : {
                        Authorization: `Bearer ${token}`,
                }
            });
            return response.data.payload;

        } catch (error) {

            console.log(error.response);
            return null;

        }

    }


}

export default MediaController;