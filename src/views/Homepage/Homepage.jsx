import React from 'react'
import useDatabase from "../../hooks/useDatabase";

export default function Homepage() {

  const { description } = useDatabase();

  return (
    <div>{ description }</div>
  )
}