import { Card } from '../components/Card'
import React, { useState, useEffect } from 'react'
import {Error} from '../components/Error'
import { Loading } from '../components/Loading'

export default function MoviesPage() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

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
            //Todas las imágenes han cargado
            setLoading(false)

          } catch (error) {
            setError(true)
            //En caso de error finalizar el loading
            setLoading(false)
          }
        }
        fetchMovies()
      }, [])

  return (
    <main className="main-content main-programs container">
      {error ? (<Error />) :
        (loading ? <Loading /> : (
          movies.map((movie, index) => (
            <Card key={index} title={movie.title} image={movie.images['Poster Art'].url} />
          ))
        ))
      }
    </main>
  )
}