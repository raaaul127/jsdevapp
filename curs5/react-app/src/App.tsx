// import { useState } from 'react'
import './App.css'
import Salut from './components/Salut'
import Masina from './components/Masina'
import Form from './components/Form'
import MyForm from './components/MyForm'


function App() {
  const carInfo = {name: "Ford", model: "Mustang"}


  return (
    <>
    <Salut nume = ' Ion' curs='React'/>
    <Salut nume=' Dan'/>
    <Salut nume=' Ana'/>

    <Masina car={carInfo}/>

    <Form />

    <MyForm />
    </>
  )
}

export default App
