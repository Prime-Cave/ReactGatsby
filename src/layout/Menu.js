import React from 'react'
import {motion, useCycle} from 'framer-motion';
import {MenuButton} from './MenuButton';
import {Navbar} from './Navbar'
import styled from 'styled-components';


const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 1,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}
const Menu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true)
    return (
      <Wrap>
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
          <motion.div
            className="background"
            style={{ background: " #191970" }}
            variants={sidebar}
          >
            <Navbar />
            <MenuButton toggle={() => toggleOpen()} />
          </motion.div>
        </motion.nav>
      </Wrap>
    )
}

const Wrap = styled.div`
position: fixed;
top: 0;
left: 0;
z-index:4;
height: 100vh;

`

export default Menu