import React from 'react'
import {
  Navbar,
  Nav
} from 'react-bootstrap'
import Icon1 from './icons/icon1.svg'
import Icon2 from './icons/icon2.svg'
import Icon3 from './icons/icon3.svg'
import Icon4 from './icons/icon4.svg'
import Icon5 from './icons/icon5.svg'
import Icon6 from './icons/icon6.svg'
import { AiFillGithub } from "react-icons/ai";

export default function Header() {
  return (
    <Navbar bg="sub" fixed="top" style={{ borderBottom: '4px solid #263165', boxSizing: 'border-box', padding: 0 }}>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          {[Icon1, Icon2, Icon3, Icon4, Icon5, Icon6].map((src, i) =>
            <Nav.Link href="#" key={i}>
              <img
                src={src}
                alt={`icon${i + 1}`}
                style={{ padding: 0, background: 'white', border: '3px solid #263165' }}
              />
            </Nav.Link>
          )}
        </Nav>
        <Nav.Link href="https://github.com/hiro2620/parabolaViewer/tree/master" >
          <AiFillGithub style={{ width: 28, height: 28 }} />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
