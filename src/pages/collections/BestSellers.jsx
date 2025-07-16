import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import {DataProducts} from "../../data/Data.jsx";
import ProductCard from "../../components/products/ProductCard.jsx";
import { useTranslation } from "../../store/translation.js";

const BestSellers = () => {
         const { language, setLanguage, t } = useTranslation();

    const bestSellerProducts = DataProducts.filter((product) => product.isBestSeller)

    return (
        <div className="py-5">
            <Container>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        {t('home')}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/products" }}>
                        {t('products')}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{t('best_sellers')}</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="mb-5">{t('best_sellers')}</h1>

                <Row>
                    {bestSellerProducts.map((product) => (
                        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default BestSellers
