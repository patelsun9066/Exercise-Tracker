// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';
import { IoJournal, IoTrendingUpSharp } from 'react-icons/io5';

// Import Pages
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Define the function that renders the content in routes using State.
function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>

          <header>
            <h1>Flab 2 Fit - A Personal Fitness Tracker</h1>
            <p><IoJournal>React Journal Icon</IoJournal> A robust and detailed exercise tracking journal <IoJournal>React Journal Icon</IoJournal> </p>
            <p><IoTrendingUpSharp>React Upwards Icon</IoTrendingUpSharp> designed to hold you accountable on your journey to a fitter life! <IoTrendingUpSharp>React Upwards Icon</IoTrendingUpSharp></p>
          </header>

          <Navigation />

          <main>
            <Route path="/" exact>
              <HomePage setExercise={setExercise} />
            </Route>

            <Route path="/create-exercise">
              <CreateExercisePage />
            </Route>
            
            <Route path="/edit-exercise">
              <EditExercisePage exercise={exercise} />
            </Route>
          </main>

          <footer>
            <p>Copyright Statement: <cite>&copy; 2022 Sunny Patel</cite></p>
          </footer>

      </Router>
    </>
  );
}

export default App;