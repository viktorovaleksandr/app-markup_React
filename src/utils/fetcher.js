const fetcher = async (pathname, options = {}) => {
  if (!process.env.REACT_APP_API_URL) {
    console.log("Забыли указать переменную окружения");
  }

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${pathname}`, {
     method: "GET",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json"
     },
     ...options
   });

   const meta = {}
   const total = response.headers.get("X-Total-Count");
   if(total) meta.total = total;

   const data = await response.json();

  return {
    data,
    meta
  }

  } catch (error) {
    throw error;
  }
   
 };
 export default fetcher;
 
