import Link from 'next/link'
import styles from './contact.module.scss'
import { IoMdMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF ,FaTelegramPlane ,FaWhatsapp,FaGithub} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <div className={styles.title}>
            <h1>GET IN <span>TOUCH</span></h1>
        </div>
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>DON'T BE SHY!</h1>
                <p>
                Feel free to get in touch with me. 
                I am always open to discussing new projects, 
                creative ideas or opportunities to be part of your visions.
                </p>
                <h2><IoMdMail className={styles.icon}/><span>Mail Me</span>abanoob.meseha@gmail.com</h2>
                <h2><IoMdCall className={styles.icon}/><span>Call Me</span>01275458882</h2>
                <div className={styles.social}>
                    <Link href="/"><FaFacebookF /></Link>
                    <Link href="/"><FaWhatsapp /></Link>
                    <Link href="/"><FaGithub /></Link>
                    <Link href="/"><FaTelegramPlane /></Link>
                </div>
            </div>
            <div className={styles.form}>
                <div>
                    <input type="text" name='name' placeholder='Name'/>
                    <input type="email" name="email" placeholder='Email'/>
                    <input type="text" name='subject' placeholder='Subject'/>
                </div>
                <textarea name="message" cols="40" rows="7" placeholder='Message'></textarea>
                <Link href={'/'}><span>Send Message</span> <FaTelegramPlane className={styles.icon}/></Link>

            </div>
        </div>
    </div>
  )
}

export default Contact