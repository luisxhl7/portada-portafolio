import React from 'react'
import projectsList from '../../../data/projectsList'
import { useParams } from 'react-router-dom';

export const InfoPortafolio = () => {
  const {id} = useParams()

  const proyectosFiltrados = projectsList.filter(project => project.nameLink === id);
  
  console.log(proyectosFiltrados);

  return (
    <div>Info-portafolio</div>
  )
}
