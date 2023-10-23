import React from 'react';
import CharactersList from './CharactersList';
import useFetch from '../../components/UseFetch';

export default function Characters() {
  const { error, isPending, data: characters } = useFetch('http://localhost:8000/characters')
  return (
    <div className="container p-6">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { characters && <CharactersList characters={characters} /> }
    </div>
  )
}