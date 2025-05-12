import React from 'react'

const movies = [
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
  return (
    <div className="container">
      <h1>Movie List</h1>
      {/* select genre */}
      <div className="form-floating">
        <select
          className="form-select form-select-lg"
          aria-label="Default select example"
        >
          <option selected id='genreSelect'>Tutti i generi</option>
          <option value="1">Azione</option>
          <option value="2">Fantascienza</option>
          <option value="3">Thriller</option>
          <option value="4">Romantico</option>
        </select>
        <label for="genreSelect">Genere:</label>
      </div>
      {/* display items */}
      {movies.map(item => (
        <div className="card m-2" key={`movie-${item.id}`}>
          <div className="card-title p-2">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
