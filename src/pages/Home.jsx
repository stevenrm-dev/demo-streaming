import {Card} from '../components/Card'
import SeriesPage from './Series'
import MoviesPage from './Movies'
import {Route} from 'wouter'



export default function HomePage() {
    return (
        <main className='main-content container'>
            <Card img="placeholder" path="/series" url="/series">
                Series
            </Card>
            <Card img="placeholder" path="/movies" url="/movies">
                Movies
            </Card>

            <Route path="/series" component={SeriesPage} />
            <Route path="/movies" component={MoviesPage} />
        </main>
    )
}