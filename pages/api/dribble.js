import axios from "axios";

const access_token = "dd545366e469fc9f037dd7f66cfe7b93072b052ed604b5f36c37eb15b9aebf7f";
export const url = "https://api.dribbble.com/v2/user/shots?access_token=" + access_token;

export const fetchDribbble = async (req, res) => {
    try {
        const res = axios.get(url);
        return res;
    } catch (error) {
        
    }
}

