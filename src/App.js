import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import AllMeetUpsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetupPage';
import FavouritesPage from './pages/FavouritesPage';
import MainNavigation from './components/layout/MainNavigation';


function App() {

  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;