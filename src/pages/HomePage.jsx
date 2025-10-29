import CategorySection from "../components/home/CategorySection";
import {Container, Row, Col, Card} from "react-bootstrap";
import {
  FaShippingFast,
  FaUndo,
  FaHeadset,
  FaCreditCard,
  FaInstagram,
  FaFacebook, FaTelegram, FaTiktok, FaGlobe
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import Silder from "../components/home/Silder.jsx";
import FeaturedProducts from "../components/home/FeatureProduct.jsx";
import PromotionPro from "../components/home/PromotionProducts.jsx";
import Khmer from "../assets/img/khmer.png";
import Btb from "../assets/img/btb.jpg";
import Newkh from "../assets/img/Newkh.png";
import Long1 from "../assets/img/long1.jpg";
import YamalFront from "../assets/img/yamalfront.png";
import { useTranslation } from "../store/translation.js";

const HomePage = () => {
  const { language, setLanguage, t } = useTranslation();
  const KhmerImages = [Khmer, Btb, Newkh,Long1,YamalFront];
  const features = [
    {
      icon: <FaShippingFast size={30} />,
      title: t('homepage_free delivery'),
      description: t('homepage_text_free'),
    },
    {
      icon: <FaUndo size={30} />,
      title: t('homepage_easy return'),
      description: t('homepage_text_delivery'),
    },
    {
      icon: <FaHeadset size={30} />,
      title: t('homepage_support'),
      description: t('homepage_support customer'),
    },
    {
      icon: <FaCreditCard size={30} />,
      title: t('hamepage_payment'),
      description: t('homepage_text payment'),
    },
  ];

  return (
    <div>
      <Silder />
      {/* <section className="py-5">
        <Container>
          <Row>
            {features.map((feature, index) => (
              <Col md={3} sm={6} key={index} className="mb-4 mb-md-0">
                <Card className="border-0 text-center h-100 py-4">
                  <Card.Body>
                    <div className="mb-3 text-primary icon-card-id">
                      {feature.icon}
                    </div>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      <CategorySection />
      <FeaturedProducts />
      <PromotionPro />
      <section className="py-5">
  <Container>
    <h2 className="text-center mb-4">{t('follow_us')}</h2>

    <div className="d-flex justify-content-center mb-4 gap-4 social-icons">
      <a href="https://www.instagram.com/zaro.fit1?igsh=ZG5reTkyYWVyYWdy" className="text-dark"><FaInstagram size={24} /></a>
      <a href="https://www.facebook.com/profile.php?id=61574512297193" className="text-dark"><FaFacebook size={24} /></a>
      <a href="https://t.me/ZAROFit1" className="text-dark"><FaTelegram size={24} /></a>
      <a href="https://www.tiktok.com/@zarofit1?_t=ZS-8xhzoE1dhLw&_r=1" className="text-dark"><SiTiktok size={24} /></a>
      <a href="#" className="text-dark"><FaGlobe size={24} /></a>
    </div>

    <div className="instagram-scroll-container">
      <div className="instagram-scroll-wrapper">
        <div className="instagram-track">
          {[...KhmerImages, ...KhmerImages].map((imgSrc, index) => (
            <div className="instagram-item-scroll" key={index}>
              <div className="instagram-item position-relative overflow-hidden">
                <img
                  src={imgSrc}
                  alt={`Instagram post ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>

  <style jsx>{`
    .instagram-scroll-container {
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .instagram-scroll-wrapper {
      width: 100%;
    }

    .instagram-track {
      display: flex;
      gap: 15px;
      animation: scroll-left 25s linear infinite;
    }

    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .instagram-item-scroll {
      flex: 0 0 auto;
      width: 200px;
      height: 200px;
    }

    .instagram-item {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }

    .instagram-item:hover {
      transform: scale(1.05);
    }

    .instagram-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      .instagram-item-scroll {
        width: 150px;
        height: 150px;
      }
    }

    @media (max-width: 480px) {
      .instagram-item-scroll {
        width: 120px;
        height: 120px;
      }
    }
  `}</style>
</section>

    </div>
  );
};

export default HomePage;