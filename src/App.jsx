


import { useState } from "react"

// componentes
import Hero from './heroComponent/Hero'
import Projects from './projects/Projects'
import Footer from './footer/Footer'
import PageProject from "./projects/page_proj/PageProject"


// import './App.css'
import './global.css'


function App() {

  const [dataActualProject , setDataActualProject]= useState( 
    {
      id: 0,
      title: '',
      image : '',
      info : '',
      link :  '',
    }
   )


  const [modalActive, setModalActive] = useState(false)
  return (

    <>
      <Hero></Hero> 
      <Projects setModalActive={setModalActive} setDataActualProject={setDataActualProject}></Projects>
      {modalActive &&  <PageProject dataActualProject={dataActualProject} setModalActive={setModalActive}></PageProject>}
      <Footer></Footer>
    </>
   
  )
}

export default App
