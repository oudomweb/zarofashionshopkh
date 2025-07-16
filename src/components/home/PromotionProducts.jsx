import {Container, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Khmer from "../../assets/img/khmer.png";
import Btb from "../../assets/img/btb.jpg";
import { useTranslation } from "../../store/translation";

const PromotionPro = () => {
  const { language, setLanguage, t } = useTranslation();
  return (
    <section className="py-2 ">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <div
              className="promo-card position-relative overflow-hidden"
              style={{height: "400px"}}
            >
              <img
                src={Khmer}
                alt="Summer Sale"
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-4"
                style={{background: "rgba(0,0,0,0.3)"}}
              >
                <div className="text-white">
                  <h3 className="fs-1 fw-bold mb-3">{t('summer_sale')}</h3>
                  <p className="mb-4">{t('up to 50% off on selected items')}</p>
                  <Link to="/discounts">
                    <Button variant="light">{t('shop_now')}</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div
              className="promo-card position-relative overflow-hidden"
              style={{height: "400px"}}
            >
              <img
                src={Btb}
                alt="New Collection"
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-4"
                style={{background: "rgba(0,0,0,0.3)"}}
              > 
                <div className="text-white">
                  <h3 className="fs-1 fw-bold mb-3">{t('new_collections')}</h3>
                  <p className="mb-4">{t('check out our latest arrivals')}</p>
                  <p style={{color: "red"}} className=" fs-6">
                    {t('up to 50% off on selected items')}
                  </p>
                  <Link to="/products">
                    <Button variant="light">{t('discover')}</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PromotionPro;
