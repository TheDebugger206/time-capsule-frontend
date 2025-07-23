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

    static async getAllRevealedCapsules (token, setCapsules) {
        
        if (!token) return;

        const response  = await axios
        .get ('http://127.0.0.1:8000/api/v0.1/user/capsules', {
            headers : {
                Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => {
            const capsules = response.data.payload;

            const result = capsules.filter(capsule => capsule.is_revealed === 1);

            setCapsules(result);
            
            console.log(capsules);
            console.log(result);

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

        console.log(userId);
            await axios
            .get(`http://127.0.0.1:8000/api/v0.1/user/user_capsules/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }})
            .then((response) => {
                setUserCapsules(response.payload);
                console.log(response);
            })
            .catch((error) => {
                console.log(error.message);
            })   
    }

    static async getUserUnrevealCapsule (token, userId) {
        
        if (!token || !userId) return [];

        try {
            
            const response  = 
            await axios
            .get (`http://127.0.0.1:8000/api/v0.1/user/user_capsules/${userId}`, {
                headers : {
                    Authorization: `Bearer ${token}`,
                },
            });

            const capsules = response.data.payload;

            const result = capsules.filter(capsule => capsule.is_revealed === 0);

            return result;

        } catch (error) {
            console.log(error.response);
            return [];
        }


    }

}

export default CapsulesController;