import React from "react"
import { socialIcons } from "./socialIcons"
import "./Footer.scss"
import Container from "../Container"

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__content-wrapper">
        <div className="footer__section">
          <p className="footer__title">Presse / Booking</p>
          <p>Vibeke@rootsy.no</p>
        </div>
        <div className="footer__section">
          <p className="footer__title">Distribusjon</p>
          <p>info@border.se</p>
        </div>
        <div className="footer__section">
          <p className="footer__title">Sosialt</p>
          <div className="footer__icon-wrapper">
            {socialIcons.map((icon) => (
              <a
                key={icon.icon}
                href={icon.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className={icon.icon} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
