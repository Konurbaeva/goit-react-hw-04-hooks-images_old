import axios from "axios";
import settings from "./settings";

const { BASE_URL, API_KEY } = settings;
axios.defaults.baseURL = BASE_URL;

export const getSearch = async (searchQuery, page = 1) => {
    const response = await axios.get(
        `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )


    console.log('GET Searchbar: ' + JSON.stringify(response.data.hits))
    // return response.data.hits
    return JSON.stringify(response.data.hits)
}