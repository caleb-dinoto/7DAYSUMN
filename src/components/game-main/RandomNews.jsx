import React, { useState, useEffect } from 'react';

const RandomNews = ({ day }) => {
  // State untuk dapetin news
  const [news, setNews] = useState(null);
  const getNews = async () => {
    const req = await fetch(
      'https://newsapi.org/v2/top-headlines?country=id&apiKey=ed3ad82a898d4a5fa42f1cadd212751f'
    );
    const data = await req.json();
    setNews(data);
  };

  // Panggil data news pas pertama kali render
  useEffect(() => {
    getNews();
  }, []);

  // Ambil random dari news state, trus nanti tampilin
  const randomNews =
    news && news.articles[Math.floor(Math.random() * (20 - 0) + 0)];
  const newsTitle = news && randomNews.title;
  const newsUrl = news && randomNews.url;
  return (
    <aside>
      <h2>Daily News:</h2>
      <a href={newsUrl} target='_blank' rel='noreferrer'>
        {newsTitle}
      </a>
    </aside>
  );
};

export default React.memo(RandomNews);
