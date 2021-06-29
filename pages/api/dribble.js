import axios from "axios";

export const access_token =
	"dd545366e469fc9f037dd7f66cfe7b93072b052ed604b5f36c37eb15b9aebf7f";
export const urlShots =
	"https://api.dribbble.com/v2/user/shots?access_token=" + access_token;
export const urlUser =
	"https://api.dribbble.com/v2/user?access_token=" + access_token;
export const dribbleIcon =
	"https://brandslogos.com/wp-content/uploads/thumbs/dribbble-icon-logo-vector.svg";

/* export const fetchDribbble = async (req, res) => {
    try {
        const res = axios.get(urlShots);
        return res;
    } catch (error) {
        
    }
} */
