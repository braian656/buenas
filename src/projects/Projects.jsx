
import books from '../data/data.json'
import Card from "./card/Card"



function Projects ({setModalActive,setDataActualProject}){

    console.log(Card)
  

    // const getInfo =( title, image, id, info, link, tech)=>{
    //         setModalActive(true)
    //         setDataActualProject(
    //             { 
    //                 id: id,
    //                 title: title,
    //                 image : image,
    //                 info : info,
    //                 link :  link,
    //                 tech : tech,
    //             }
    //         )

            

        
    // }
    
    return (
        <section id="proyectos" className='w-full scroll-smooth py-6 px-6 bg-[#000] sm:flex sm:flex-col sm:h-auto sm:px-8 sm:py-10'>


            <div className="title my-5">
                <h2 className="font-bold text-[#4a4a4a] text-[clamp(28px,5vw,42px)] leading-none my-4 text-center">Proyectos</h2>
            </div>

            <div className="content-projects flex sm:justify-center sm:items-center flex-wrap">
                {
                   books.map((book,i)=>(
                    <Card
                    key={i} 
                    nameProject={book.name} 
                    id={book.id} 
                    imageProject={book.image} 
                    link={book.link} 
                    year={book.year}
                    info={book.info} 
                    tech={book.tech} 
                    github={book.github}></Card>
                   ))
                }
            </div>


        </section>
    )
}

export default Projects