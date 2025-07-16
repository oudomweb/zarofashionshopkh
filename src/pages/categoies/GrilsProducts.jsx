import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import ProductCard from "../../components/products/ProductCard.jsx";
import {DataProducts} from "../../data/Data.jsx";
import { useTranslation } from "../../store/translation.js";

const GirlsProducts = () => {
     const { language, setLanguage, t } = useTranslation();
    const girlsProducts = DataProducts.slice(6, 10)

    return (
        <div className="py-5">
            <Container>
                {/* Breadcrumb */}
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        {t('home')}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{t('girls')}</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="mb-5">{t('girls_t-shirt')}</h1>

                <Row>
                    {girlsProducts.map((product) => (
                        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default GirlsProducts
