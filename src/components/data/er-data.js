//This is the import from the OES backend

const api_urls = 'https://applications.oes.com.ng/OESWebApp/getallersschoollecture.do'

 async function getLectures(){
  const response = await fetch(api_urls);
  const data = await response.json();
  console.log(data);
  return data;
}

