import Axios from 'axios';

export default Axios.create({
    //create a Axios client with default properties
    baseURL: 'https://api.unsplash.com/',
    headers:
    {
        Authorization: 'Client-ID 1bc8fb8abe639fec36a977867b660af7ec65700e08a5959afa53c86044564e1c'
    }
})