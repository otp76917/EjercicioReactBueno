import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/data/noticias.json') // Correct path, relative to public/index.html
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error("Error fetching news:", error)); // Error handling
  }, []);

  if (news.length === 0) { // Display a message while loading
    return <div>Loading news...</div>;
  }


  return (
    <div>
      <h1>Noticias</h1>
      <ul>
        {news.map((item) => (
          <li key={item.titulo}>
            <Link to={`/noticias/${item.titulo}`}>{item.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;