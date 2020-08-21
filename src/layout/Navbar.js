import React from "react"
import { FcAbout } from "react-icons/fc"
import {FcHome} from "react-icons/fc"
import { FcCommandLine } from "react-icons/fc"
import { RiMailSendLine } from "react-icons/ri"
import { motion } from "framer-motion"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
    color: "#4285F4"
  },
  {
    id: 2,
    path: "/about",
    icon: <FcAbout size="40px" color="green" />,
    arialLabel: "About Page",
    className: "link two",
    color: "#DB4437"
  },
  {
    id: 3,
    path: "/projects",
    icon: <FcCommandLine size="40px" color="blue" />,
    arialLabel: "Drinks Page",
    className: "link three",
    color: "#F4B400"
  },
  {
    id: 4,
    path: "/contact",
    icon: <RiMailSendLine size="40px" color="orange" />,
    arialLabel: "Contact Page",
    className: "link four",
    color:"#0F9D58"
  },
]

export const Navbar = () => (
         <motion.ul variants={variants}>
           {Links.map(link => (
             <motion.li
               key={link.id}
               variants={variants2}
             >
               <AniLink
            paintDrip
            hex={link.color}
            duration={1}
                 to={link.path}
            ><button className={link.className}><span>{link.icon}</span></button>
            </AniLink>
             </motion.li>
           ))}
         </motion.ul>
       )
