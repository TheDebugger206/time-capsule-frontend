import axios from "axios";

class AuthController {

    static async login({ user, setToken, navigate, url}) {

         try {
            const response = 
            await axios
            .post("http://127.0.0.1:8000/api/v0.1/guest/login", user);

            const user_token = response.data.payload.token;               
            setToken(user_token);
            navigate(url);

        } catch (error) {
            console.log(error.response);
        }
    }

    static async register({new_user, navigate}) {

        axios
        .post("http://127.0.0.1:8000/api/v0.1/guest/register", new_user)

        .then((response) => {
                navigate("/Login");
            })

        .catch((error) => {
                console.log(error.response);
        });

    }


}

export default AuthController;