export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ddae034662msh147bdde8dcb11f3p167d20jsn4a309a58ffb1',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  
        const response = await fetch(`${BASE_URL}/${url}`, options);
        return await response.json();

    // .catch (error) {
    //     console.error('Error fetching data:', error);
    //     throw error;
    // }
};
