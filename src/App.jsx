


import { useState } from "react"

// componentes
import Hero from './hero/hero'
import Projects from './projects/projects'
import Footer from './footer/footer'
import PageProject from "./projects/page_proj/PageProject"


import './App.css'
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
   console.log(modalActive)
  return (

    <>
      <Hero></Hero> 


      <Projects setModalActive={setModalActive} setDataActualProject={setDataActualProject}></Projects>
      {modalActive &&  <PageProject dataActualProject={dataActualProject} setModalActive={setModalActive}></PageProject>
}

      {/* page project debe recibir la info de la card */}

      <Footer></Footer>



    </>
   
  )
}

export default App
