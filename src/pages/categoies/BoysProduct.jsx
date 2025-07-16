import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import {DataProducts} from "../../data/Data.jsx";
import ProductCard from "../../components/products/ProductCard.jsx";
import { useTranslation } from "../../store/translation.js";
// import { mockProducts } from "../../data/mockData"

const BoysProducts = () => {
         const { language, setLanguage, t } = useTranslation();

    const boysProducts = DataProducts.slice(4, 8)

    return (
        <div className="py-5">
            <Container>
                {/* Breadcrumb */}
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        {t('home')}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{t('boys')}</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="mb-5">{t('boys_t-shirt')}</h1>

                <Row>
                    {boysProducts.map((product) => (
                        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default BoysProducts;
