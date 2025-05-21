import Button from '../button-component/Button'
import FallingBoxes from './icons-animation/FallingBoxes'

function Hero (){


    return(
    <section className='w-full scroll-smooth  py-6 px-6 bg-[#000] sm:flex sm:justify-center sm:items-center sm:h-screen sm:px-8 sm:py-10'>

        <div className="content-info  flex flex-col  w-full sm:w-[40%] sm:m-5 z-50">
                <div>
                    <span className='px-2 py-1 text-[clamp(12px,5vw,14px)] font-semibold bg-yellow-200 border-solid border-1 rounded-md leading-none'>
                        Web Developer
                    </span>

                    <h2 className='font-normal text-[clamp(32px,5vw,42px)] text-white leading-none my-4'>
                        Braian Carranza
                    </h2>
               

                    <p className='text-white text-sm my-5'>
                        Soy desarrollador frontend enfocado en crear interfaces web limpias, funcionales y responsivas. Me apasiona convertir ideas en experiencias interactivas usando frameworks modernos como <strong>React</strong> . Disfruto trabajar con atención al detalle, escribir código mantenible y aprender constantemente nuevas tecnologías para mejorar cada proyecto.
                    </p>

                    <Button
                    bgColor={"bg-[#e0edff]"}
                    padY="py-2"
                    padX="px-3"
                    weight="font-semibold"
                    size="text-sm"
                    width={'w-2xs'}
                    borRadius="rounded-lg"
                    text={<a href="https://drive.google.com/file/d/1wWX7WpXQa-AtWQ-IW01d7oqPyBrSdHAa/view?usp=sharing">Mira mi CV!</a>}
                    clrFont="text-black"
                    marginButton="mb-5 mt-4">     
                    </Button>

                </div>


                <div className='my-5'>

                    
                    <Button
                    bgColor={"bg-blue-400"}
                    padY="py-2"
                    padX="px-3"
                    weight="font-semibold"
                    size="text-sm"
                    width={'w-[220px]'}
                    borRadius="rounded-lg"
                    text={<a href="#proyectos">proyectos</a>}
                    clrFont="text-black"
                    marginButtom="mb-0 mt-0">     
                    
                    </Button>
                </div>
        </div>

      
        <FallingBoxes></FallingBoxes>
         
        

    </section>
    )
}

export default Hero