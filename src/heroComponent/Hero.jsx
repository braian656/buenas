import Button from '../button-component/Button'
import styles from './heroStyle.module.css'
// import Icons from './section-icons/Icons'
import Icons from './section-icons/Icons'
import {FolderOpen, Download} from 'lucide-react'

function Hero (){


    return(
    <section className='w-full scroll-smooth  py-6 px-6 bg-[#000] sm:flex sm:justify-center sm:items-center sm:h-screen sm:px-8 sm:py-10'>

        <div className="content-info  flex flex-col  w-full sm:m-5 z-50">
                <div>
        
                     <div className={styles.contentName}>
            
                        <span className={styles.span}>
                            HOLA, SOY
                        </span>
                        <h1 className={styles.name}>Braian Carranza</h1>
                        <h1 className={styles.job}>Front-end Developer</h1>
                     </div>
               
                    <div className={styles.contentText}>

                        <p className={styles.text}>

                            Enfocado en crear interfaces web limpias, funcionales y responsivas. Me apasiona convertir ideas en experiencias interactivas usando frameworks modernos como <strong>React</strong> . Disfruto trabajar con atención al detalle, escribir código mantenible y aprender constantemente nuevas tecnologías para mejorar cada proyecto.
                        </p>
                        
                    </div>

                    <div className={styles.contentTech}>

                        <span className={styles.badge}>
                            Javascript
                        </span>
                        <span className={styles.badge}>
                            Typescript
                        </span>
                        <span className={styles.badge}>
                            Tailwind
                        </span>
                        <span className={styles.badge}>
                            React
                        </span>
                         <span className={styles.badge}>
                            Git
                        </span>

                    </div>
                  

                 

                  

                </div>


                <div className='my-5'>

                    
                    <Button
                    bgColor={"bg-[#232323]"}
                    padY="py-2"
                    padX="px-3"
                    weight="font-semibold"
                    size="text-sm"
                    width={'w-full sm:w-[220px] '}
                    borRadius="rounded-lg"
                    text={<a href="#proyectos" className={styles.anchor}>
                        <span><FolderOpen className={styles.icon} strokeWidth={1}></FolderOpen></span>Proyectos</a>}
                    clrFont="text-white"
                    margin="mb-0 mt-0 mr-5"
                    hover="hover:bg-[#1a1a1a]">     
                    
                    </Button>


                    <Button
                    bgColor={"bg-[#e0edff]"}
                    padY="py-2"
                    padX="px-3"
                    weight="font-semibold"
                    size="text-sm"
                    width={'w-full sm:w-2xs'}
                    borRadius="rounded-lg"
                    text={<a className={styles.anchor} href="https://drive.google.com/file/d/1sMOEFNebA6p5tO11FeypYRnQ4KP1sieV/view?usp=sharing">
                        <span><Download className={styles.icon} strokeWidth={1}></Download></span>Descargar CV</a>}
                    clrFont="text-black"
                    margin="mb-5 mt-4"
                    hover="hover:bg-gray-200">     
                    </Button>
                </div>

                <Icons></Icons>

                 
        </div>

      
         
        

    </section>
    )
}

export default Hero