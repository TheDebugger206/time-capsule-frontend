import axios from "axios";

class CapsulesController {

    static async getAllCapsules (token, setCapsules) {
        
        if (!token) return;

        const response  = await axios
        .get ('http://127.0.0.1:8000/api/v0.1/user/capsules', {
            headers : {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => {
            const capsules = response.data.payload;
            setCapsules(capsules);

            // debug
            console.log(capsules);
        }) 
        .catch ((error) => {
            console.log(error);
        });

    }

    static async createCapsule (token, capsule) {

        if (!token) return;
        if (!capsule) return;

        try {
            const response = await axios
            .post ('http://127.0.0.1:8000/api/v0.1/user/capsule/', 
                capsule, 
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

    static async getUserCapsules (token, setUserCapsules, userId) {

            await axios
            .get(`ttp://127.0.0.1:8000/api/v0.1/user/user_capsules/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }})
            .then((response) => {
                setUserCapsules(response.payload);
            })
            .catch((error) => {
                console.log(error.message);
            })   
    }


}

export default CapsulesController;