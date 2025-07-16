import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import {DataProducts} from "../../data/Data.jsx";
import ProductCard from "../../components/products/ProductCard.jsx";
import { useTranslation } from "../../store/translation.js";

const MenProducts = () => {
     const { language, setLanguage, t } = useTranslation();
    const menProducts = DataProducts.slice(0, 8)

    return (
        <div className="py-5">
            <Container>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        {t('home')}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{t('men')}</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="mb-5">{t('mens_shirt')}</h1>

                <Row>
                    {menProducts.map((product) => (
                        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default MenProducts
