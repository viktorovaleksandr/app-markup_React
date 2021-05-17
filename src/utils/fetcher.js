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

  return await response.json();

  } catch (error) {
    throw error;
  }
   
 };
 export default fetcher;
 
