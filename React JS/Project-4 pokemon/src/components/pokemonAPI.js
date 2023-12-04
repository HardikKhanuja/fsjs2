import React, { useState, useEffect } from 'react';

function FetchPokemon() {
  const [searchQuery, setSearchQuery] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPokemon(null);
    setError(null);

    if (searchQuery.trim() === '') {
      return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Pokemon not found');
        }
        return response.json();
      })
      .then((data) => {
        if (data.name) {
          setPokemon(data);
        } else {
          setError('Pokemon not found');
        }
      })
      .catch((error) => setError(error.message));
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className='container'>
      <h2 className='main-heading'>Search Your Pokemon</h2>
      <form onSubmit={handleSearch}>
        <input className='search-box'
          type="text"
          placeholder="Pokemon Name or ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      {error ? (
        <p className='error-msg'>{error}</p>
      ) : (
        pokemon && (
          <div className='pokemon-container'>
            <h1 className='pokemon-heading'>{pokemon.name}</h1>
            <ul className='pokemon-data-list'>
              <li>ID: {pokemon.id}</li>
              <li>Base Experience: {pokemon.base_experience}</li>
              <li>Height: {pokemon.height}</li>
              <li>Is Default: {pokemon.is_default ? 'Yes' : 'No'}</li>
              <li>Order: {pokemon.order}</li>
              <li>Weight: {pokemon.weight}</li>
            </ul>
          </div>
        )
      )}
    </div>
  );
}

export default FetchPokemon;
