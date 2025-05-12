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

// empty new movie template
const App = () => {

  const [filteredMovies, setFilteredMovies] = useState(initialMovies);
  const [genre, setGenre] = useState("");
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(initialMovies);
  const [newMovie, setNewMovie] = useState({
    title: "",
    genre: ""
  })

  // filter movies effect
  useEffect(() => {
    let filtered = movies;

    // filter genre
    if (genre) {
      filtered = filtered.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }

    // filter title
    if (search.trim() !== '') {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  }, [movies, genre, search]);

  // add new movie
  const addMovie = (e) => {
    e.preventDefault();

    const newId = movies.length > 0
      ? Math.max(...movies.map(mov => mov.id)) + 1
      : 1;

    if (newMovie.title && newMovie.genre) {
      const movieObj = {
        ...newMovie,
        id: newId
      }

      setMovies([...movies, movieObj]);
      setNewMovie({
        title: "",
        genre: ""
      });
    }
  }

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

      {/* search by title */}
      <div className="input-group">
        <input
          type="text"
          placeholder='Cerca un film..'
          className='form-control'
          value={search}
          onChange={(e) => { setSearch(e.target.value) }}
        />
      </div>

      {/* add new movie */}
      <h4 className='text-center mt-4'>
        Aggiungi un nuovo film
      </h4>

      <form onSubmit={addMovie}>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className='form-control m-3'
              placeholder='Aggiungi Titolo'
              value={newMovie.title}
              onChange={(e) => { setNewMovie({ ...newMovie, title: e.target.value }) }}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className='form-control m-3'
              placeholder='Aggiungi Genere'
              value={newMovie.genre}
              onChange={(e) => { setNewMovie({ ...newMovie, genre: e.target.value }) }}
            />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button
              className='btn btn-primary ms-4'
              type='submit'
            >Aggiungi</button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default App
