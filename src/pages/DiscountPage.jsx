import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import {DataProducts} from "../data/Data.jsx";
import ProductCard from "../components/products/ProductCard.jsx";
import { useTranslation } from "../store/translation.js";

const DiscountPage = () => {
    // Filter for products on sale
    const discountedProducts = DataProducts.filter((product) => product.isSale)
         const { language, setLanguage, t } = useTranslation();


    return (
        <div className="py-5">
            <Container>
                {/* Breadcrumb */}
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        {t('home')}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{t('sale')}</Breadcrumb.Item>
                </Breadcrumb>

                {/* Hero Banner */}
                <div className="bg-danger text-white p-5 rounded mb-5 text-center">
                    <h1 className="display-4 mb-3">{t('sale up to 50% off')}</h1>
                    <p className="lead mb-0">{t('dis-text')}</p>
                </div>

                <Row>
                    {discountedProducts.map((product) => (
                        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default DiscountPage;
