import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function NewsDetail() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    fetch('./data/noticias.json')
      .then(res => res.json())
      .then(data => {
        // Generar IDs únicos para las noticias si no existen
        const newsWithIds = data.map((item, index) => ({
          ...item,
          id: item.id || index + 1 // Usar ID existente o generar uno nuevo
        }));

        const item = newsWithIds.find(news => news.id === parseInt(id));
        setNewsItem(item);
      });
  }, [id]);

  if (!newsItem) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{newsItem.titulo}</h1>
      <p><strong>Contenido:</strong> {newsItem.contenido}</p>
      <p><strong>Categoría:</strong> {newsItem.categoria}</p>
      <p><strong>Autor:</strong> {newsItem.autor}</p>
      <p><strong>Fecha:</strong> {newsItem.fecha}</p>
      <Link to="/">Volver al listado</Link>
    </div>
  );
}

export default NewsDetail;