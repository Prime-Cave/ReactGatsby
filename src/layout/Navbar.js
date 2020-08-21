import React from "react"
import { FcAbout } from "react-icons/fc"
import {FcHome} from "react-icons/fc"
import { FcCommandLine } from "react-icons/fc"
import { RiMailSendLine } from "react-icons/ri"
import { Link } from 'gatsby'
import { motion } from "framer-motion"
import "./menu.css"

const variants = {
  open: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.2, staggerDirection: -1 },
  },
}
const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -150,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const Links = [
  {
    id: 1,
    path: "/",
    icon: <FcHome size="40px" />,
    arialLabel: "Home Page",
    className: "link one",
  },
  {
    id: 2,
    path: "/about",
    icon: <FcAbout size="40px" color="green" />,
    arialLabel: "About Page",
    className: "link two",
  },
  {
    id: 3,
    path: "/projects",
    icon: <FcCommandLine size="40px" color="blue" />,
    arialLabel: "Drinks Page",
    className: "link three",
  },
  {
    id: 4,
    path: "/contact",
    icon: <RiMailSendLine size="40px" color="orange" />,
    arialLabel: "Contact Page",
    className: "link four",
  },
]

export const Navbar = () => (
         <motion.ul variants={variants}>
           {Links.map(link => (
             <motion.li
               key={link.id}
               variants={variants2}
             >
               <Link to={link.path}>
                 <button className={link.className}><span>{link.icon}</span></button>
               </Link>
             </motion.li>
           ))}
         </motion.ul>
       )
