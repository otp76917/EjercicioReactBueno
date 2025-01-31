import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import noticias from '../data/noticias.json'

function NewsDetail() {
  const { id } = useParams()
  const [newsItem, setNewsItem] = useState(null)

  useEffect(() => {
    fetch(noticias)
    .then(response => response.json())
    .then(data => {
        const foundNewsItem = data.find((item) => item.id === parseInt(id))
        setNewsItem(foundNewsItem)
    })
    .catch(error => console.error("Error fetching news:", error))
  }, [id])

  if (!newsItem) {
    return <div>Loading...</div>
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
  )
}

export default NewsDetail