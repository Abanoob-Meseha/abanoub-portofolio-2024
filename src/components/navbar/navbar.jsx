import Link from 'next/link'
import styles from './navbar.module.scss'
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <Link href='/'><span>HOME</span> <FaHome/></Link>
        <Link href='/about'><span>ABOUT</span> <FaUserTie/></Link>
        <Link href='/'><span>PORTOFOLIO</span> <IoBriefcase/></Link>
        <Link href='/contact'><span>CONTACT</span> <IoMdMail/></Link>
    </div>
  )
}

export default Navbar