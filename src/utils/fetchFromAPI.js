

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b74c646f33mshf8c9cdd63e88b3dp1b7907jsne0b2fc9a5249',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
    const res = await fetch(`${BASE_URL}/${url}`, options);
    console.log("res",res)
    const data = await res.json()
    console.log('data',data)
    

  return data;
};