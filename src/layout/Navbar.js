import React from "react"
import { FcAbout } from "react-icons/fc"
import {FcHome} from "react-icons/fc"
import { FcCommandLine } from "react-icons/fc"
import { RiMailSendLine } from "react-icons/ri"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
    direction: "down",
    color: "#4285F4",
    className: "one",
    name:"Home"
  },
  {
    id: 2,
    path: "/about",
    icon: <FcAbout size="40px" color="green" />,
    arialLabel: "About Page",
    direction: "left",
    color: "#DB4437",
    className: "two",
    name: "About"
  },
  {
    id: 3,
    path: "/projects",
    icon: <FcCommandLine size="40px" color="blue" />,
    arialLabel: "Drinks Page",
    direction: "up",
    color: "#F4B400",
    className: "three",
    name: "Portfolio"
  },
  {
    id: 4,
    path: "/contact",
    icon: <RiMailSendLine size="40px" color="orange" />,
    arialLabel: "Contact Page",
    direction: "left",
    color: "#0F9D58",
    className: "four",
    name:"Contact"
  },
]

export const Navbar = () => (
         <motion.ul variants={variants}>
           {Links.map(link => (
             <motion.li
               key={link.id}
               variants={variants2}
               whileHover={{ rotate: 90, scale:1.2 }}
               whileTap={{ scale: 0.9, rotate:-90, borderRadius: "100%"}}
             >
               <AniLink
                 paintDrip
                 hex={link.color}
                 duration={1}
                 to={link.path}
                 className={link.className}
               >
                 <span>{link.icon}</span>
               </AniLink>
             </motion.li>
           ))}
         </motion.ul>
       )
