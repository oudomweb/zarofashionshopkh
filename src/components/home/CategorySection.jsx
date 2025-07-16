import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Khmer from "../../assets/img/khmer.png";
import Nang from "../../assets/img/nang1.jpg";
import FontN from "../../assets/img/frontt.png";
import Btb from "../../assets/img/btb.jpg";
import { useTranslation } from "../../store/translation";
const CategorySection = () => {
  const { language, setLanguage, t } = useTranslation();
  const categories = [
    {
      id: 1,
      name:  t('men'),
      image: Khmer,
      link: "/men",
    },
    {
      id: 2,
      name:  t('women'),
      image: Nang,
      link: "/women",
    },
    {
      id: 3,
      name:  t('boys'),
      image: FontN,
      link: "/boys",
    },
    {
      id: 4,
      name:  t('girls'),
      image: Btb,
      link: "/girls",
    },
  ];

  
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">{t('shop_by_category')}</h2>
        <Row>
          {categories.map((category) => (
            <Col md={6} lg={3} key={category.id} className="mb-4">
              <Link to={category.link}>
                <div className="category-card">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="img-fluid"
                  />
                  <div className="category-overlay">
                    <h3 className="category-title">{category.name}</h3>
                    <p>{t('shop_now')}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CategorySection;
