const fetcher = async (pathname, options = {}) => {
  if (!process.env.REACT_APP_API_URL) {
    console.log("Забыли указать переменную окружения");
  }

  try {
    const responsse = await fetch(`${process.env.REACT_APP_API_URL}${pathname}`, {
     method: "GET",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json"
     },
     ...options
   });
  return await responsse.json();

  } catch (error) {
    throw error;
  }
   
 };
 export default fetcher;
 
