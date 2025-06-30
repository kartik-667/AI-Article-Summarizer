import axios from 'axios'
const apikey=import.meta.env.VITE_RAPIDAPI_KEY

export async function summarizeText(userurl){
    
const options = {
  method: 'GET',
  url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
  params: {
    url: userurl,
    lang: 'en',
    engine: '2'
  },
  headers: {
    'x-rapidapi-key': apikey,
    'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }

}
