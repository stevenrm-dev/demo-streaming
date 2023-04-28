import { Card } from '../components/Card'
import { Modal } from '../components/Modal'
import {Error} from '../components/Error'
import { Loading } from '../components/Loading'
import React, { useState, useEffect } from 'react'

export default function MoviesPage() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [currentMovie, setCurrentMovie] = useState(null)


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

    const modalOn = (index)=> {
      setCurrentMovie(index)
      setShowModal(true)
    }

    const modalOff = ()=> {
      setShowModal(false)
    }

  return (
    <main className="main-content main-programs container">
      {error ? (<Error />) :
        (loading ? <Loading /> : (
          <>
            {movies.map((movie, index) => (
              <div key={index} data-index={index} onClick={()=> modalOn(index)} onBlur={modalOff}>
                <Card
                  title={movie.title}
                  image={movie.images['Poster Art'].url}
                />
              </div>
            ))}
            {showModal && currentMovie !== null && (
              <Modal
                title={movies[currentMovie].title}
                image={movies[currentMovie].images['Poster Art'].url}
                description={movies[currentMovie].description}
                releaseYear={movies[currentMovie].releaseYear}
              />
            )}
          </>
        ))
      }
    </main>
  )
}