import { Card } from '../components/Card'
import { Modal } from '../components/Modal'
import {Error} from '../components/Error'
import { Loading } from '../components/Loading'
import React, { useState, useEffect } from 'react'

export default function SeriesPage() {
    const [series, setSeries] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [currentSerie, setCurrentSerie] = useState(null)

    useEffect(() => {
        const fetchSeries = async () => {
          try {
            const response = await fetch('./src/data/sample.json')
            const data = await response.json()

            //Filtro de tipo de programa y de año igual o mayor
            const filteredSeries = data.entries.filter((entry) => entry.programType === 'series' && entry.releaseYear >= 2010)
            //Ordenar alfanuméricamente y en sentido ascendente
            const sortedSeries = filteredSeries.sort((a, b) => a.title.localeCompare(b.title))
            //Mostrar únicamente las 20 primeras
            setSeries(sortedSeries.slice(0, 20))
            //Todas las imágenes han cargado
            setLoading(false)

          } catch (error) {
            setError(true)
            //En caso de error finalizar el loading
            setLoading(false)
          }
        }
        fetchSeries()
      }, [])

    const modalOn = (index)=> {
      setCurrentSerie(index)
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
            {series.map((serie, index) => (
              <div key={index} data-index={index} onClick={()=> modalOn(index)} onBlur={modalOff}>
                <Card
                  title={serie.title}
                  image={serie.images['Poster Art'].url}
                />
              </div>
            ))}
            {showModal && currentSerie !== null && (
              <Modal
                title={series[currentSerie].title}
                image={series[currentSerie].images['Poster Art'].url}
                description={series[currentSerie].description}
                releaseYear={series[currentSerie].releaseYear}
              />
            )}
          </>
        ))
      }
    </main>
  )
}