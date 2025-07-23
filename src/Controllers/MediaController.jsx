import axios from "axios";

class MediaController {


    static async createMedia (token, media) {
        if (!token || !media) return;

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

    // static async getMedia (token, capsuleId) {
        
    //     const [copied, setCopied] = useState(false);

    //     capsule_media

    //     const response = await axios
    //         .post (`http://127.0.0.1:8000/api/v0.1/user/capsule_media/${capsuleId}`, 

    //     // const handleShare = () => {
    //     // const shareURL = ${window.location.origin}/capsule-details?id=${id};
    //     // navigator.clipboard
    //     //     .writeText(shareURL)
    //     //     .then(() => {
    //     //     setCopied(true);
    //     //     setTimeout(() => setCopied(false), 3000);
    //     //     })
    //     //     .catch((err) => console.error("Failed to copy:", err));
    //     // };
    // }

}

export default MediaController;