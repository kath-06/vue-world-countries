import axios from 'axios';

export async function fetchCountryApi() {
    const url = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,lang';
    const response = await axios.get(url);
    
    return response.data;
}