import axios from 'axios';

 
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID IjwbVwH-GeF3FMrWofYunYAt52F-PdlnyIB_eX_2TZQ'
      }
});


