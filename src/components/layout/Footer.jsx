import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import {
    FaFacebookF,
    FaInstagram,
    FaCreditCard,
    FaPaypal,
    FaApplePay,
    FaGooglePay,
} from "react-icons/fa"
import { SiTiktok, SiTelegram } from 'react-icons/si';
import { useTranslation } from '../../store/translation';

const Footer = () => {
      const { language, setLanguage, t } = useTranslation();
    return (
        <footer>
  <div className="newsletter-section py-5 bg-light">
    <Container>
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h3 className="mb-4">{t('subscribe_newsletter') || "Subscribe to our Newsletter"}</h3>
          <p className="mb-4">{t('stay_updated') || "Stay updated with our latest trends and products"}</p>
          <Form className="d-flex justify-content-center flex-column flex-sm-row align-items-center">
            <Form.Control
              type="email"
              placeholder="Your email address"
              className="me-sm-2 mb-2 mb-sm-0"
              style={{ maxWidth: "400px" }}
            />
            <Button variant="dark">{t('subscribe') || "Subscribe"}</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
  <div className="bg-dark text-white py-5">
    <Container>
      <Row>
        <Col md={3} sm={6} className="mb-4 text-center text-md-start">
          <h5 className="mb-4">ZARO SHOP</h5>
          <p>{t('footer_text_detail')}</p>
          <div className="social-icons d-flex justify-content-center justify-content-md-start gap-3 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61574512297193" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/zaro.fit1?igsh=ZG5reTkyYWVyYWdy" className="text-white" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@zarofit1?_t=ZS-8xhzoE1dhLw&_r=1" className="text-white" target="_blank" rel="noopener noreferrer">
              <SiTiktok />
            </a>
            <a href="https://t.me/ZAROFit1" className="text-white" target="_blank" rel="noopener noreferrer">
              <SiTelegram />
            </a>
          </div>
        </Col>

        <Col md={3} sm={6} className="mb-4 text-center text-md-start">
          <h5 className="mb-4">{t('shop')}</h5>
          <ul className="list-unstyled">
            {['men', 'women', 'boys', 'girls', 'new_arrivals', 'sale'].map((item) => (
              <li className="mb-2" key={item}>
                <Link to={`/${item.replace('_', '-')}`} className="text-white">
                  {t(item)}
                </Link>
              </li>
            ))}
          </ul>
        </Col>

        <Col md={3} sm={6} className="mb-4 text-center text-md-start">
          <h5 className="mb-4">{t('customer_service')}</h5>
          <ul className="list-unstyled">
            {['contact_us', 'faqs', 'shipping_returns', 'size_guide', 'track_order'].map((item) => (
              <li className="mb-2" key={item}>
                <Link to={`/${item.replace('_', '-')}`} className="text-white">
                  {t(item)}
                </Link>
              </li>
            ))}
          </ul>
        </Col>

        <Col md={3} sm={6} className="mb-4 text-center text-md-start">
          <h5 className="mb-4">{t('about_us')}</h5>
          <ul className="list-unstyled">
            {['our_story', 'careers', 'sustainability', 'privacy_policy', 'Terms_Conditions'].map((item) => (
              <li className="mb-2" key={item}>
                <Link to={`/${item.replace('_', '-')}`} className="text-white">
                  {t(item)}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
  <div className="bg-black text-white py-3">
    <Container>
      <Row className="align-items-center text-center text-md-start">
        <Col md={6}>
          <p className="mb-0">&copy; 2023 ZARO SHOP. All rights reserved.</p>
        </Col>
        <Col md={6} className="mt-3 mt-md-0">
          <div className="payment-icons d-flex gap-3 justify-content-center justify-content-md-end">
            <FaCreditCard size={24} />
            <FaPaypal size={24} />
            <FaApplePay size={24} />
            <FaGooglePay size={24} />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</footer>

    )
}

export default Footer