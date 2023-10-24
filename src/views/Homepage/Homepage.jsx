import React from 'react'
import useDatabase from "../../hooks/useDatabase";
import Carousel from '../../components/Carousel';

export default function Homepage() {

  const { description } = useDatabase();

  return (
    <div>
      <p>{ description }</p>
      <Carousel />
    </div>
  )
}