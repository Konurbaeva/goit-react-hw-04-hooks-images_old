import axios from "axios";
import settings from "./settings";

const { BASE_URL, API_KEY } = settings;
axios.defaults.baseURL = BASE_URL;

export const getSearch = async (searchQuery, per_page = 3) => {
    // const response = await axios.get(
    //     `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    // )
    //?key=25748459-63f23aee85add1030efa422f3&q=cat&image_type=photo&orientation=horizontal&per_page=12

    const response = await axios.get(
        `?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    )

    return response.data.hits
    // return JSON.stringify(response.data)
}