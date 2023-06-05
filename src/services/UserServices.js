import axios from "axios";

// created for D:\workspace\spring\springboot-react-ex1
const USERS_REST_API_URL = 'http://localhost:8080/api/users';

class UserServices{

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new UserServices()

