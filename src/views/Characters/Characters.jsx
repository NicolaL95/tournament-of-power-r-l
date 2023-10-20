import React from 'react';
import CharactersList from './CharactersList';
import UseFetch from '../../components/UseFetch';

export default function Characters() {
  const { error, isPending, data: characters } = UseFetch('http://localhost:8000/characters')
  return (
    <section className="section">
      <div className="container">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { characters && <CharactersList characters={characters} /> }
      </div>
    </section>
  )
}