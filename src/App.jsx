import React from 'react'
import { useState, useEffect } from 'react'

const initialMovies = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Fantascienza'
  },
  {
    id: 2,
    title: 'Il Padrino',
    genre: 'Thriller'
  },
  {
    id: 3,
    title: 'Titanic',
    genre: 'Romantico'
  },
  {
    id: 4,
    title: 'Batman',
    genre: 'Azione'
  },
  {
    id: 5,
    title: 'Interstellar',
    genre: 'Fantascienza'
  },
  {
    id: 6,
    title: 'Pulp Fiction',
    genre: 'Thriller'
  },
]

const App = () => {
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [genre, setGenre] = useState("");


  useEffect(() => {
    if (genre === '') {
      setFilteredMovies(initialMovies);
    } else {
      setFilteredMovies(initialMovies.filter(movie => movie.genre === genre));
    }
  }, [genre]);

  return (
    <div className="container">
      <h1>Movie List</h1>

      {/* select genre */}
      <div className="form-floating">
        <select
          className="form-select form-select-lg"
          id='genreSelect'
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value)
          }}
        >
          <option value="">Tutti i generi</option>
          <option value="Azione">Azione</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
        </select>
        <label htmlFor="genreSelect">Genere:</label>
      </div>

      {/* display items */}
      <ul className='list-unstyled'>
        {filteredMovies.map(item => (
          <li
            className="card m-2"
            key={`movie-${item.id}`}
          >
            <div className="card-title p-2">
              {item.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
