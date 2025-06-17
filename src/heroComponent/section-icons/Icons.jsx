import { Github, Linkedin } from 'lucide-react'
import styles from './iconsStyles.module.css'



export default function Icons(){



    return(
        <div className={styles.contentIcons}>

            <span className={styles.icon}>
                <a href="https://github.com/braian656" target="_blank">
                    <Github size={32} className={styles.i}/>
                </a>
            </span>

            <span className={styles.icon}>
                <a href="https://www.linkedin.com/in/brian-carranza-437319254/" target="_blank">
                   <Linkedin size={32} className={styles.i}/>
                </a>
             </span>

        </div>
    )
}

