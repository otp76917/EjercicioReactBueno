import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('./data/noticias.json')
      .then(res => res.json())
      .then(data => {
        // Generar IDs únicos para las noticias si no existen
        const newsWithIds = data.map((item, index) => ({
          ...item,
          id: item.id || index + 1 // Usar ID existente o generar uno nuevo
        }));
        setNews(newsWithIds);
      });
  }, []);

  return (
    <div>
      <h1>Noticias</h1>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <Link to={`/news/${item.id}`}>{item.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;