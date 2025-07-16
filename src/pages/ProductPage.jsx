"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import {DataProducts} from "../data/Data.jsx";
import ProductCard from "../components/products/ProductCard.jsx";
import { useTranslation } from "../store/translation.js";

const ProductPage = () => {
     const { language, setLanguage, t } = useTranslation();
    // const [products, setProducts] = useState(mockProducts)
    const [products] = useState(DataProducts);
    const [sortBy, setSortBy] = useState("newest")
    const [view, setView] = useState("grid")

    // Filter states
    const [priceRange, setPriceRange] = useState([0, 100])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])

    const categories = [t('t-shirt'),t('polo_shirt'), t('graphic_tees'),t('long_sleeve')]
    const colors = ["Black", "White", "Red", "Blue", "Green", "Yellow"]
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

    const handleSortChange = (e) => {
        setSortBy(e.target.value)
        // Sort logic would go here
    }

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category))
        } else {
            setSelectedCategories([...selectedCategories, category])
        }
    }

    const handleColorChange = (color) => {
        if (selectedColors.includes(color)) {
            setSelectedColors(selectedColors.filter((c) => c !== color))
        } else {
            setSelectedColors([...selectedColors, color])
        }
    }

    const handleSizeChange = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter((s) => s !== size))
        } else {
            setSelectedSizes([...selectedSizes, size])
        }
    }

    const handlePriceChange = (e) => {
        setPriceRange([0, Number.parseInt(e.target.value)])
    }

    const clearFilters = () => {
        setSelectedCategories([])
        setSelectedColors([])
        setSelectedSizes([])
        setPriceRange([0, 100])
    }

    return (
        <div className="py-5">
            <Container>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        {t('home')}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{t('products')}</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    {/* Filters Sidebar */}
                    <Col lg={3} className="mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h5 className="mb-3">{t('category')}</h5>
                            {categories.map((category, index) => (
                                <Form.Check
                                    key={index}
                                    type="checkbox"
                                    id={`category-${index}`}
                                    label={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                    className="mb-2"
                                />
                            ))}
                        </div>

                        <div className="mb-4">
                            <h5 className="mb-3">{t('price_range')}</h5>
                            <Form.Label>{t('max_price')} : ${priceRange[1]}</Form.Label>
                            <Form.Range min={0} max={100} value={priceRange[1]} onChange={handlePriceChange} />
                        </div>

                        <div className="mb-4">
                            <h5 className="mb-3">{t('color')}</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`color-option ${selectedColors.includes(color) ? "active" : ""}`}
                                        style={{
                                            backgroundColor: color.toLowerCase(),
                                            width: "30px",
                                            height: "30px",
                                            cursor: "pointer",
                                            border: selectedColors.includes(color) ? "2px solid #000" : "1px solid #ddd",
                                        }}
                                        onClick={() => handleColorChange(color)}
                                        title={color}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <h5 className="mb-3">{t('size')}</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {sizes.map((size, index) => (
                                    <div
                                        key={index}
                                        className={`size-option ${selectedSizes.includes(size) ? "active" : ""}`}
                                        style={{
                                            padding: "5px 10px",
                                            border: "1px solid #ddd",
                                            cursor: "pointer",
                                            backgroundColor: selectedSizes.includes(size) ? "#002a5c" : "transparent",
                                            color: selectedSizes.includes(size) ? "white" : "inherit",
                                        }}
                                        onClick={() => handleSizeChange(size)}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button variant="outline-secondary" onClick={clearFilters}>
                            {t('clear_all_filters')}
                        </Button>
                    </Col>

                    {/* Products Grid */}
                    <Col lg={9}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <p className="mb-0">{t('showing')} {products.length} {t('products')}</p>
                            <div className="d-flex align-items-center">
                                <Form.Select value={sortBy} onChange={handleSortChange} className="me-3" style={{ width: "auto" }}>
                                    <option value="newest">Newest</option>
                                    <option value="price-low-high">Price: Low to High</option>
                                    <option value="price-high-low">Price: High to Low</option>
                                    <option value="name-a-z">Name: A to Z</option>
                                </Form.Select>
                                <div className="view-options">
                                    <Button
                                        variant={view === "grid" ? "dark" : "outline-dark"}
                                        className="me-2"
                                        onClick={() => setView("grid")}
                                    >
                                        <i className="bi bi-grid"></i>
                                    </Button>
                                    <Button variant={view === "list" ? "dark" : "outline-dark"} onClick={() => setView("list")}>
                                        <i className="bi bi-list"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <Row>
                            {products.map((product) => (
                                <Col sm={6} lg={4} key={product.id} className="mb-4">
                                    <ProductCard product={product} />
                                </Col>
                            ))}
                        </Row>

                        {/* Pagination */}
                        <div className="d-flex justify-content-center mt-5">
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex="-1">
                                            Previous
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductPage
