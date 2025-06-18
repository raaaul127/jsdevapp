// src/components/Footer.tsx
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <h5>Despre noi</h5>
            <p>
              Suntem o platformă dedicată educației moderne în domeniul IT, dezvoltând viitori profesioniști pasionați.
            </p>
          </Col>

          <Col md={4}>
            <h5>Link-uri utile</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Acasă</a></li>
              <li><a href="/" className="text-light text-decoration-none">Cursuri</a></li>
              <li><a href="/" className="text-light text-decoration-none">Despre</a></li>
              <li><a href="/" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Urmărește-ne</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-light" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://twitter.com" className="text-light" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://instagram.com" className="text-light" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://github.com" className="text-light" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Link Academy. Toate drepturile rezervate.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
