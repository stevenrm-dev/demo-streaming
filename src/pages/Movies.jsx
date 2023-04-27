import { Card } from '../components/Card'
import React, { useState, useEffect } from 'react'

export default function SeriesPage() {
    const [series, setSeries] = useState([])

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
          } catch (error) {
            console.error('Error fetching series:', error)
          }
        }
        fetchSeries()
      }, [])

  return (
    <main className="main-content container">
      {series.map((serie, index) => (
        <Card key={index} title={serie.title} image={serie.images['Poster Art'].url}/>
      ))}
    </main>
  )
}