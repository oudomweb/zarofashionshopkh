import {Container, Row, Col, Nav, Tab} from "react-bootstrap";
import {DataProducts} from "../../data/Data.jsx";
import ProductCard from "../products/ProductCard.jsx";
import { useTranslation } from "../../store/translation.js";

const FeaturedProducts = () => {
  // console.log(DataProducts.image);
  const newArrivals = DataProducts.filter((product) => product.isNew);
  const bestSellers = DataProducts.filter((product) => product.isBestSeller);
  const featured = DataProducts.filter((product) => product.isFeatured);
  const { language, setLanguage, t } = useTranslation();

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">{t('featured_products')}</h2>

        <Tab.Container defaultActiveKey="new-arrivals">
          <Nav className="justify-content-center mb-5 feature-homepage">
            <Nav.Item>
              <Nav.Link eventKey="new-arrivals" className="px-4">
                {t('new_arrivals')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="best-sellers" className="px-4">
                {t('best_sellers')}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="featured" className="px-4">
                {t('featured')}
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="new-arrivals">
              {/*className="g-4 border border-danger"*/}
              <Row>
                {newArrivals.slice(0, 8).map((product) => (
                  <Col sm={6} md={4} lg={3} key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="best-sellers">
              <Row>
                {bestSellers.slice(0, 8).map((product) => (
                  <Col sm={6} md={4} lg={3} key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="featured">
              <Row>
                {featured.slice(0, 8).map((product) => (
                  <Col sm={6} md={4} lg={3} key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
