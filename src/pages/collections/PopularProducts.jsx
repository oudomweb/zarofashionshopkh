import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import {DataProducts} from "../../data/Data.jsx";
import ProductCard from "../../components/products/ProductCard.jsx";
import { useTranslation } from "../../store/translation.js";
const PopularProducts = () => {
    const { language, setLanguage, t } = useTranslation();
    const popularProducts = DataProducts.filter((product) => product.isBestSeller)

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
                    <Breadcrumb.Item active>{t('popular_products')}</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="mb-5">{t('popular_products')}</h1>

                <Row>
                    {popularProducts.map((product) => (
                        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default PopularProducts;