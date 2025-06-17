import styles from './page.module.css'
import {X} from 'lucide-react'
import Button from '../../button-component/Button'

function PageProject ({dataActualProject, setModalActive}){

    const technologies = dataActualProject.tech
    function closeModal(){
        setModalActive(false)
    }
    
    return (
        <section id={dataActualProject.id} className={`fixed inset-0 bg-[#000] flex items-center justify-center sm:h-auto z-50  sm:flex sm:h-auto sm:px-8 sm:py-10`}>
            <button className={styles.closeModal} onClick={closeModal}>
                <X color="#b0b0b0"/>
            </button>

            <div className={styles.page}>
                <div className={styles.image}>
                    
        
                    <img className={styles.img} src={dataActualProject.image} alt={dataActualProject.title} />

                </div>
                <div className="title p-2 my-5 w-full sm:flex sm:h-[400px] sm:justify-around sm:flex-col sm:items-center">

                   <div className='info my-2'>
                        <h1 className="my-3 font-bold text-[clamp(28px,5vw,42px)] text-white leading-none my-4 text-center">
                           {dataActualProject.title}
                        </h1>

                        <p className='my-3 text-gray-500'>
                            {dataActualProject.info}
                        </p>
                   </div>


                    <div className={styles.contentBadge}>
                    
                        {
                            technologies.map((tec,i)=>(
                                <span key={i} className={styles.badge}>
                                     {tec}
                                </span>
                            ))
                        }
                        
                    </div>


                    <Button
                    bgColor={"bg-[#28b5d7]"}
                    padY="py-2"
                    padX="px-3"
                    weight="font-semibold"
                    size="text-sm"
                    width={'w-full'}
                    borRadius="rounded-lg"
                    text="Ver Proyecto"
                    
                    clrFont="text-black"
                    marginButton="my-2 sm:mb-0 sm:mt-4">    
                        <a href={dataActualProject.link}></a> 
                    </Button>
                    
                </div>

                
            </div>

        </section>
    )
}
export default PageProject