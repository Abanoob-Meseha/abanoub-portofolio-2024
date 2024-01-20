import Link from 'next/link'
import styles from './contact.module.scss'

const Contact = () => {
  return (
    <div>
        <div className={styles.title}>
            <h1>GET IN TOUCH</h1>
        </div>
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>DON'T BE SHY!</h1>
                <p>
                Feel free to get in touch with me. 
                I am always open to discussing new projects, 
                creative ideas or opportunities to be part of your visions.
                </p>
                <h2>Mail Me</h2>
                <h2>Call Me</h2>
                <div>
                    <Link href="/">f</Link>
                    <Link href="/">f</Link>
                    <Link href="/">f</Link>
                    <Link href="/">f</Link>

                </div>
            </div>
            <div className={styles.form}>

            </div>
        </div>
    </div>
  )
}

export default Contact