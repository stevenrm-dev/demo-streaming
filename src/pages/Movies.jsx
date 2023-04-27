import { Card } from '../components/Card'
import React, { useState, useEffect } from 'react'

export default function MoviesPage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const response = await fetch('./src/data/sample.json')
            const data = await response.json()

            //Filtro de tipo de programa y de año igual o mayor
            const filteredMovies = data.entries.filter((entry) => entry.programType === 'movie' && entry.releaseYear >= 2010)
            //Ordenar alfanuméricamente y en sentido ascendente
            const sortedMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title))
            //Mostrar únicamente las 20 primeras
            setMovies(sortedMovies.slice(0, 20))
          } catch (error) {
            console.error('Error fetching movies:', error)
          }
        }
        fetchMovies()
      }, [])

  return (
    <main className="main-content main-programs container">
      {movies.map((movie, index) => (
        <Card key={index} title={movie.title} image={movie.images['Poster Art'].url}/>
      ))}
    </main>
  )
}