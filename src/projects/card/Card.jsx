import styles from './card.module.css'

function Card({nameProject, imageProject, id, link, info , tech,onclick}){



    return (
        <article id={id} className={styles.card}>
            

                <div className={styles.innerCard}>

                    <div className={styles.contentImg}>
                            <div className={styles.image}>
                                <img src={imageProject ? imageProject : './images/img-404/robot_404.jpg'} alt="" />
                            </div>

                            <button onClick={()=>onclick(nameProject, imageProject,id, info ,link, tech)} className={styles.btn}>{nameProject ? nameProject : 'error 404'}</button>
                        
                    </div>
                </div>



        </article>
    )
}

export default Card