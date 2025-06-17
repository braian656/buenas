import styles from './cardStyle.module.css'
import {Calendar,Github} from 'lucide-react'

function Card({nameProject, imageProject, id, link,info , tech,github}){

    console.log(tech)

    return (
        <article id={id} className={styles.card}>
            

                <div className={styles.innerCard}>

                    <div className={styles.contentImg}>
                            <div className={styles.image}>
                                <img src={imageProject ? imageProject : './images/img-404/robot_404.jpg'} alt="" />
                            </div>
                    </div>

                    <div className={styles.myinfo}>
                        <div className={styles.title}>
                            <h1>{nameProject}</h1>
                            <span><Calendar /><p>1000</p></span>
                        </div>

                        <div className={styles.descr}>
                            <p>{info}</p>
                        </div>
                        <div>
                             {
                                tech.map((tec,i)=>(
                                    <span key={i} className={styles.badge}>
                                            {tec}
                                    </span>
                                ))
                            }
                        </div>
                        <div className={styles.buttons}>
                            <button  className={styles.btn}>
                                {nameProject ? <a href={link} target="_blank">Abrir Proyecto</a> : 'error 404'}
                                
                                

                            </button>
                            <button className={styles.btn}>
                                <span className={styles.icon}>
                                    <Github />
                                </span>
                                <a href={github}>Github</a>
                            </button>
                        </div>
                    </div>
                </div>



        </article>
    )
}

export default Card



