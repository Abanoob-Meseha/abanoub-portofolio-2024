
import styles from './about.module.scss'
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const about = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>ABOUT <span>ME</span></h1>
        <div className={styles.aboutContainer}>
            <div className={styles.personalInfo}>
                <h2>PERSONAL INFOS</h2>
                <div className={styles.infosConatiner}>
                    <div>
                        <h3><span>First Name:</span>Abanoub</h3>
                        <h3><span>Last Name:</span>Meseha</h3>
                        <h3><span>Age:</span>24 Years</h3>
                        <h3><span>Nationality:</span>Egyptian</h3>
                        <h3><span>Freelance:</span>Available</h3>
                    </div>
                    <div>
                        <h3><span>Adrress:</span>Cairo ,Egypt</h3>
                        <h3><span>Phone:</span>01275458882</h3>
                        <h3><span>Email:</span>abanoob.meseha@gmail.com</h3>
                        <h3><span>Languages:</span>English, French</h3>
                        <h3><span>LinkedIn:</span><Link href="/linkedin">Abanoub Meseha</Link></h3>
                    </div>
                </div>
                <Link href={'/'} className={styles.button}><span>DOWNLOAD CV</span> <FaArrowDown className={styles.icon}/></Link>

            </div>
            <div className={styles.cardsConatiner}>
                <div className={styles.card}>
                    <h1>4+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className={styles.card}>
                    <h1>4+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className={styles.card}>
                    <h1>4+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className={styles.card}>
                    <h1>4+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about