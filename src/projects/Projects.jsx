import Card from "./card/Card"
import PageProject from "./page_proj/PageProject";

import books from '../data/data.json'



function Projects ({setModalActive,setDataActualProject}){


  

    const getInfo =( title, image, id, info, link, tech)=>{
            setModalActive(true)
            setDataActualProject(
                { 
                    id: id,
                    title: title,
                    image : image,
                    info : info,
                    link :  link,
                    tech : tech,
                }
            )

            

        
    }
    
    return (
        <section id="proyectos" className='w-full scroll-smooth py-6 px-6 bg-[#000] sm:flex sm:flex-col sm:h-auto sm:px-8 sm:py-10'>


            <div className="title my-5">
                <h2 className="font-normal text-[clamp(28px,5vw,42px)] text-white leading-none my-4 text-center">Proyectos</h2>
            </div>

            <div className="content-projects flex sm:justify-center sm:items-center flex-wrap">
                {
                   books.map((book,i)=>(
                    <Card key={i} nameProject={book.name} id={book.id} imageProject={book.image} link={book.link} info={book.info} tech={book.tech} onclick={getInfo}></Card>
                   ))
                }
            </div>


        </section>
    )
}

export default Projects