import { HeaderPlatform } from './components/Header'
import { FooterPlatform } from './components/Footer'
import HomePage from './pages/Home'
import SeriesPage from './pages/Series'
import MoviesPage from './pages/Movies'
import { Route, Switch } from 'wouter'

function App() {
  return (
    <>
      <HeaderPlatform logoTitle="DEMO Streaming">
        Popular Titles
      </HeaderPlatform>

      <Switch>
        <Route path="/" component={() => <HomePage title="Popular Titles" />} />
        <Route path="/series" component={() => <SeriesPage title="Popular Series" />} />
        <Route path="/movies" component={() => <MoviesPage title="Popular Movies" />} />
      </Switch>

      <FooterPlatform />
    </>
  );
}

export default App;
