import axios from "axios";
import React, { useState, useEffect, createContext, useContext } from "react";

export const Newscontext = createContext();

export const Newsprovider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [news, setNews] = useState(null);

  const handlechange = (e) => {
    console.log("entro", e.target.value);
    setCategoria(e.target.value);
  };
  useEffect(() => {
    const restAPI = async () => {
      console.log("entro a la api");
      const apikey = process.env.REACT_APP_API_KEY;
      console.log(apikey, "apikey");
      // const url = `https://newsapi.org/v2/top-headlines?country=co&categoria=${categoria}&apiKey=
      //  ${import.meta.env.API_KEY}
      // `;
      // const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=392e19d2ce964e69b37a9656cb015ecf`;
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${apikey}`;
      console.log(url, "apikey");
      try {
        const { data } = await axios.get(url);
        console.log(process.env.REACT_APP_API_KEY, "apikey");
        setNews(data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    restAPI();
  }, [categoria]);

  return (
    <Newscontext.Provider value={{ categoria, handlechange, news }}>
      {children}
    </Newscontext.Provider>
  );
};
export const useNews = () => {
  return useContext(Newscontext);
};
