import axios from "axios";

const searchMovie = async (url) => {
    try {
        return await axios.get(url)
    } catch (error) {
        console.error(error)
    }
}
export default searchMovie
