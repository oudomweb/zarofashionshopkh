"use client";
import {useState} from "react";
import {Carousel, Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import Khmer from "../../assets/img/Cover_photo2.png";
import Cover from "../../assets/img/Cover_photo1.png";
import { useTranslation } from "../../store/translation";
const Slider = () => {
    const { language, setLanguage, t } = useTranslation();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      image: Khmer,
      title: t('summer_t-shirt'),
      subtitle: t('new_arrivals'),
      description:
        t('text_for_summer_t-shirt'),
      buttonText: t('shop_now'),
      buttonLink: "/products",
      align: "left",
    },
    {
      image: Cover,
      title: t('specail_discount'),
      subtitle: t('limited'),
      description:
        t('specail_discount_text'),
      buttonText: t('view_offers'),
      buttonLink: "/discounts",
      align: "center",
    },
    {
      image: Khmer,
      title: t('premium_quality'),
      subtitle: t('comfort_guaranteed'),
      description:
        t('text_detail_premium'),
      buttonText: t('learn_more'),
      buttonLink: "/about-us",
      align: "right",
    },
  ];

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="hero-slider"
      fade
    >
      {slides.map((slide, idx) => (
        <Carousel.Item
          key={idx}
          className="hero-section"
          style={{backgroundImage: `url(${slide.image})`}}
        >
          <Container
            className={`d-flex justify-content-${
              slide.align === "left"
                ? "start"
                : slide.align === "right"
                ? "end"
                : "center"
            } align-items-center h-100`}
          >
            <div className="hero-content" style={{maxWidth: "500px"}}>
              <p className="text-uppercase mb-2">{slide.subtitle}</p>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="mb-4">{slide.description}</p>
              <Link to={slide.buttonLink}>
                <Button variant="primary" size="lg" className="learn-more">
                  {slide.buttonText}
                </Button>
              </Link>
            </div>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
