// "use client";

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Container,
//   NavDropdown,
//   Form,
//   Button,
//   Badge,
//   Dropdown,
// } from "react-bootstrap";
// import { FaSearch, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
// import logo from "../../assets/img/zaro.jpg";
// import { useTranslation } from '../../store/translation';

// const NavbarTop = () => {
//   const [scrolled, setScrolled] = useState(false);
//   // const [cartCount, setCartCount] = useState(3) // Mock cart count
//   const [cartCount] = useState(3);
//   // const [wishlistCount, setWishlistCount] = useState(2) // Mock wishlist count
//   const [wishlistCount] = useState(2);
//   const location = useLocation();
//   const { language, setLanguage, t } = useTranslation();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header style={{}}>
//       <div className="bg-dark text-white py-2">
//         <Container>
//           <div className="d-flex justify-content-between align-items-center">
//             <div>
//               <small>{t('free_shipping')}</small>
//             </div>
//             <div className="d-flex align-items-center">
//               <small className="me-3">+855 962 089 546</small>
//               <small className="me-3">oudomngoun29@gmail.com</small>
//               {/* Language Switcher Dropdown */}
//               <Dropdown>
//                 <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-language">
//                   {language === 'en' ? 'EN' : 'ខ្មែរ'}
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item onClick={() => setLanguage('en')} active={language === 'en'}>EN</Dropdown.Item>
//                   <Dropdown.Item onClick={() => setLanguage('km')} active={language === 'km'}>ខ្មែរ</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div>
//           </div>
//         </Container>
//       </div>
//       <Navbar
//         expand="lg"
//         className={`py-3 ${scrolled ? "bg-white shadow-sm" : "bg-white"}`}
//         fixed={scrolled ? "top" : ""}
//       >
//         <Container>
//           <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
//             <img src={logo} alt="logo" style={{ width: 50 }} />
//             ZARO
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mx-auto">
//               <Nav.Link
//                 as={Link}
//                 to="/"
//                 className={location.pathname === "/" ? "fw-bold" : ""}
//               >
//                 {/* Home */}
//              {t('home')}
//               </Nav.Link>

//               <NavDropdown title={t('shop')} id="shop-dropdown">
//                 <NavDropdown.Item as={Link} to="/products">
//                   {/* All Products */}
//                      {t('all_products')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item as={Link} to="/men">
//                   {t('men')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/women">
//                   {t('women')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/boys">
//                   {t('boys')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/girls">
//                   {t('girls')}
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <NavDropdown title={t('collections')} id="collections-dropdown">
//                 <NavDropdown.Item as={Link} to="/popular">
//                   {t('popular_products')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/special">
//                 {t('special_products')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/best">
//                   {t('best_sellers')}
//                 </NavDropdown.Item>
//               </NavDropdown>

//               <Nav.Link
//                 as={Link}
//                 to="/discounts"
//                 className={location.pathname === "/discounts" ? "fw-bold" : ""}
//               >
//                 {t('sale')}
//               </Nav.Link>

//               <Nav.Link
//                 as={Link}
//                 to="/about-us"
//                 className={location.pathname === "/about-us" ? "fw-bold" : ""}
//               >
//                 {t('about_us')}
//               </Nav.Link>

//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 className={location.pathname === "/contact-us" ? "fw-bold" : ""}
//               >
//                 {t('contact')}
//               </Nav.Link>
//             </Nav>

//             <div className="d-flex align-items-center">
//               <Form className="d-flex me-2">
//                 <Form.Control
//                   type="search"
//                   placeholder={t('search')}
//                   className="me-2"
//                   aria-label="Search"
//                 />
//                 <Button variant="outline-dark">
//                   <FaSearch />
//                 </Button>
//               </Form>

//               <Link to="/wishlist" className="me-3 position-relative">
//                 <FaHeart size={20} />
//                 <Badge
//                   bg="danger"
//                   pill
//                   className="position-absolute top-0 start-100 translate-middle"
//                 >
//                   {wishlistCount}
//                 </Badge>
//               </Link>

//               <Link to="/cart" className="me-3 position-relative">
//                 <FaShoppingCart size={20} />
//                 <Badge
//                   bg="danger"
//                   pill
//                   className="position-absolute top-0 start-100 translate-middle"
//                 >
//                   {cartCount}
//                 </Badge>
//               </Link>

//               <Link to="/account">
//                 <FaUser size={20} />
//               </Link>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default NavbarTop;




// "use client";

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Container,
//   NavDropdown,
//   Form,
//   Button,
//   Badge,
//   Dropdown,
// } from "react-bootstrap";
// import { FaSearch, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
// import logo from "../../assets/img/zaro.jpg";
// import { useTranslation } from '../../store/translation';
// import useFontManager from "./useFontManager";


// const NavbarTop = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [cartCount] = useState(3);
//   const [wishlistCount] = useState(2);
//   const location = useLocation();
//   const { language, setLanguage, t } = useTranslation();
  

//   const { getFontClass, getTextClass, isKhmer } = useFontManager(language);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header className={getFontClass()}>
//       <div className="bg-dark text-white py-2">
//         <Container>
//           <div className="d-flex justify-content-between align-items-center">
//             <div>
//               <small className={getTextClass()}>{t('free_shipping')}</small>
//             </div>
//             <div className="d-flex align-items-center">
//               <small className={`me-3 ${getTextClass()}`}>+855 962 089 546</small>
//               <small className={`me-3 ${getTextClass()}`}>fashionzaro@gmail.com</small>
//               <Dropdown>
//                 <Dropdown.Toggle 
//                   variant="secondary" 
//                   size="sm" 
//                   id="dropdown-language"
//                   className={getTextClass()}
//                 >
//                   {language === 'en' ? 'EN' : 'ខ្មែរ'}
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item 
//                     onClick={() => setLanguage('en')} 
//                     active={language === 'en'}
//                     className="english-text"
//                   >
//                     EN
//                   </Dropdown.Item>
//                   <Dropdown.Item 
//                     onClick={() => setLanguage('km')} 
//                     active={language === 'km'}
//                     className="khmer-text"
//                   >
//                     ខ្មែរ
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div>
//           </div>
//         </Container>
//       </div>
//       <Navbar
//         expand="lg"
//         className={`py-3 ${scrolled ? "bg-white shadow-sm" : "bg-white"} ${getFontClass()}`}
//         fixed={scrolled ? "top" : ""}
//       >
//         <Container>
//           <Navbar.Brand as={Link} to="/" className={`fw-bold fs-3 ${getTextClass()}`}>
//             <img src={logo} alt="logo" style={{ width: 50 }} />
//             ZARO
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mx-auto">
//               <Nav.Link
//                 as={Link}
//                 to="/"
//                 className={`${location.pathname === "/" ? "fw-bold" : ""} ${getTextClass()}`}
//               >
//                 {t('home')}
//               </Nav.Link>

//               <NavDropdown 
//                 title={t('products')} 
//                 id="shop-dropdown"
//                 className={getTextClass()}
//               >
//                 <NavDropdown.Item as={Link} to="/products" className={getTextClass()}>
//                   {t('all_products')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item as={Link} to="/men" className={getTextClass()}>
//                   {t('men')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/women" className={getTextClass()}>
//                   {t('women')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/boys" className={getTextClass()}>
//                   {t('boys')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/girls" className={getTextClass()}>
//                   {t('girls')}
//                 </NavDropdown.Item>
//               </NavDropdown>
              
//               <NavDropdown 
//                 title={t('collections')} 
//                 id="collections-dropdown"
//                 className={getTextClass()}
//               >
//                 <NavDropdown.Item as={Link} to="/popular" className={getTextClass()}>
//                   {t('popular_products')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/special" className={getTextClass()}>
//                   {t('special_products')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/best" className={getTextClass()}>
//                   {t('best_sellers')}
//                 </NavDropdown.Item>
//               </NavDropdown>

//               <Nav.Link
//                 as={Link}
//                 to="/discounts"
//                 className={`${location.pathname === "/discounts" ? "fw-bold" : ""} ${getTextClass()}`}
//               >
//                 {t('sale')}
//               </Nav.Link>

//               <Nav.Link
//                 as={Link}
//                 to="/about-us"
//                 className={`${location.pathname === "/about-us" ? "fw-bold" : ""} ${getTextClass()}`}
//               >
//                 {t('about_us')}
//               </Nav.Link>

//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 className={`${location.pathname === "/contact-us" ? "fw-bold" : ""} ${getTextClass()}`}
//               >
//                 {t('contact')}
//               </Nav.Link>
//             </Nav>

//             <div className="d-flex align-items-center">
//               <Form className="d-flex me-2">
//                 <Form.Control
//                   type="search"
//                   placeholder={t('search')}
//                   className={`me-2 ${getTextClass()}`}
//                   aria-label="Search"
//                 />
//                 <Button variant="outline-dark">
//                   <FaSearch />
//                 </Button>
//               </Form>

//               <Link to="/wishlist" className="me-3 position-relative">
//                 <FaHeart size={20} />
//                 <Badge
//                   bg="danger"
//                   pill
//                   className="position-absolute top-0 start-100 translate-middle"
//                 >
//                   {wishlistCount}
//                 </Badge>
//               </Link>

//               <Link to="/cart" className="me-3 position-relative">
//                 <FaShoppingCart size={20} />
//                 <Badge
//                   bg="danger"
//                   pill
//                   className="position-absolute top-0 start-100 translate-middle"
//                 >
//                   {cartCount}
//                 </Badge>
//               </Link>

//               <Link to="/account">
//                 <FaUser size={20} />
//               </Link>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default NavbarTop;


// "use client";

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Container,
//   NavDropdown,
//   Form,
//   Button,
//   Badge,
//   Dropdown,
// } from "react-bootstrap";
// import { FaSearch, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
// import logo from "../../assets/img/zaro.jpg";
// import { useTranslation } from '../../store/translation';
// import useFontManager from "./useFontManager";

// const NavbarTop = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [cartCount] = useState(3);
//   const [wishlistCount] = useState(2);
//   const location = useLocation();
//   const { language, setLanguage, t } = useTranslation();

//   const { getFontClass, getTextClass } = useFontManager(language);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

  
//   return (
//     <header className={getFontClass()}>
//       {/* Top Bar */}
//       <div className="bg-dark text-white py-2">
//         <Container>
//           <div className="row text-center text-md-start">
//             <div className="col-12 col-md-4 mb-2 mb-md-0">
//               <small className={getTextClass()}>{t('free_shipping')}</small>
//             </div>
//             <div className="col-12 col-md-4 mb-2 mb-md-0">
//               <small className={`d-block ${getTextClass()}`}>+855 962 089 546</small>
//               <small className={`d-block ${getTextClass()}`}>fashionzaro@gmail.com</small>
//             </div>
//             <div className="col-12 col-md-4 text-md-end">
//               <Dropdown>
//                 <Dropdown.Toggle
//                   variant="secondary"
//                   size="sm"
//                   id="dropdown-language"
//                   className={getTextClass()}
//                 >
//                   {language === 'en' ? 'EN' : 'ខ្មែរ'}
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item
//                     onClick={() => setLanguage('en')}
//                     active={language === 'en'}
//                     className="english-text"
//                   >
//                     EN
//                   </Dropdown.Item>
//                   <Dropdown.Item
//                     onClick={() => setLanguage('km')}
//                     active={language === 'km'}
//                     className="khmer-text"
//                   >
//                     ខ្មែរ
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* Navbar */}
//       <Navbar
//         expand="lg"
//         className={`py-3 ${scrolled ? "bg-white shadow-sm" : "bg-white"} ${getFontClass()}`}
//         fixed={scrolled ? "top" : ""}
//       >
//         <Container>
//           <Navbar.Brand as={Link} to="/" className={`fw-bold fs-3 ${getTextClass()}`}>
//             <img src={logo} alt="logo" style={{ width: 50 }} className="me-2" />
//             ZARO
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mx-auto">
//               <Nav.Link
//                 as={Link}
//                 to="/"
//                 className={`${location.pathname === "/" ? "fw-bold" : ""} ${getTextClass()}`}
//               >
//                 {t('home')}
//               </Nav.Link>

//               <NavDropdown title={t('products')} id="products-dropdown" className={getTextClass()}>
//                 <NavDropdown.Item as={Link} to="/products" className={getTextClass()}>
//                   {t('all_products')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item as={Link} to="/men" className={getTextClass()}>
//                   {t('men')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/women" className={getTextClass()}>
//                   {t('women')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/boys" className={getTextClass()}>
//                   {t('boys')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/girls" className={getTextClass()}>
//                   {t('girls')}
//                 </NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title={t('collections')} id="collections-dropdown" className={getTextClass()}>
//                 <NavDropdown.Item as={Link} to="/popular" className={getTextClass()}>
//                   {t('popular_products')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/special" className={getTextClass()}>
//                   {t('special_products')}
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/best" className={getTextClass()}>
//                   {t('best_sellers')}
//                 </NavDropdown.Item>
//               </NavDropdown>

//               <Nav.Link as={Link} to="/discounts" className={getTextClass()}>
//                 {t('sale')}
//               </Nav.Link>

//               <Nav.Link as={Link} to="/about-us" className={getTextClass()}>
//                 {t('about_us')}
//               </Nav.Link>

//               <Nav.Link as={Link} to="/contact" className={getTextClass()}>
//                 {t('contact')}
//               </Nav.Link>
//             </Nav>

//             {/* Search and Icons */}
//             <div className="d-flex align-items-center mt-3 mt-lg-0">
//               <Form className="d-flex me-2">
//                 <Form.Control
//                   type="search"
//                   placeholder={t('search')}
//                   className={`me-2 ${getTextClass()}`}
//                   aria-label="Search"
//                 />
//                 <Button variant="outline-dark">
//                   <FaSearch />
//                 </Button>
//               </Form>

//               {/* <Link to="/wishlist" className="me-3 position-relative">
//                 <FaHeart size={20} />
//                 <Badge
//                   bg="danger"
//                   pill
//                   className="position-absolute top-0 start-100 translate-middle"
//                 >
//                   {wishlistCount}
//                 </Badge>
//               </Link>

//               <Link to="/cart" className="me-3 position-relative">
//                 <FaShoppingCart size={20} />
//                 <Badge
//                   bg="danger"
//                   pill
//                   className="position-absolute top-0 start-100 translate-middle"
//                 >
//                   {cartCount}
//                 </Badge>
//               </Link> */}

//               <Link to="/account">
//                 <FaUser size={20} />
//               </Link>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default NavbarTop;


// "use client";

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Container,
//   NavDropdown,
//   Form,
//   Button,
//   Badge,
//   Dropdown,
// } from "react-bootstrap";
// import { FaSearch, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
// import logo from "../../assets/img/zaro.jpg";
// import { useTranslation } from "../../store/translation";
// import useFontManager from "./useFontManager";

// const NavbarTop = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [cartCount] = useState(3);
//   const [wishlistCount] = useState(2);
//   const location = useLocation();
//   const { language, setLanguage, t } = useTranslation();
//   const { getFontClass, getTextClass } = useFontManager(language);

//   useEffect(() => {
//     let lastScrollY = 0;
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       // Add slight delay to avoid flicker
//       if (currentScrollY > 80 && currentScrollY > lastScrollY) {
//         setScrolled(true);
//       } else if (currentScrollY < 50) {
//         setScrolled(false);
//       }
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed-top w-100 ${getFontClass()}`}
//       style={{
//         zIndex: 1030,
//         transition: "all 0.4s ease",
//         backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "white",
//         boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
//         backdropFilter: scrolled ? "blur(5px)" : "none",
//       }}
//     >
//       {/* Top Bar */}
//       <div
//         className="bg-dark text-white py-1 text-center"
//         style={{ fontSize: "0.8rem" }}
//       >
//         <div>Free delivery on orders over $15</div>
//         <div>+855 962 089 546 · fashionzaro@gmail.com</div>
//       </div>

//       {/* Main Navbar */}
//       <Navbar expand="lg" bg="transparent" className="py-2">
//         <Container fluid className="px-3 px-md-5">
//           <Navbar.Brand as={Link} to="/" className={`fw-bold fs-5 ${getTextClass()}`}>
//             <img
//               src={logo}
//               alt="logo"
//               style={{ width: 40, height: 40, borderRadius: "50%" }}
//               className="me-2"
//             />
//             ZARO
//           </Navbar.Brand>

//           <Navbar.Toggle
//             aria-controls="main-navbar"
//             className="border-0"
//             style={{ outline: "none" }}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </Navbar.Toggle>

//           <Navbar.Collapse id="main-navbar" className="text-center">
//             <Nav className="mx-auto">
//               <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
//                 {t("home")}
//               </Nav.Link>
//               <NavDropdown title={t("products")} id="products-dropdown">
//                 <NavDropdown.Item as={Link} to="/products">{t("all_products")}</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item as={Link} to="/men">{t("men")}</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/women">{t("women")}</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link as={Link} to="/sale">{t("sale")}</Nav.Link>
//               <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
//             </Nav>

//             {/* Icons Section */}
//             <div className="d-flex align-items-center justify-content-center gap-3 mt-3 mt-lg-0">
//               <Link to="/wishlist" className="position-relative text-dark">
//                 <FaHeart size={18} />
//                 <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
//                   {wishlistCount}
//                 </Badge>
//               </Link>

//               <Link to="/cart" className="position-relative text-dark">
//                 <FaShoppingCart size={18} />
//                 <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
//                   {cartCount}
//                 </Badge>
//               </Link>

//               <Link to="/account" className="text-dark">
//                 <FaUser size={18} />
//               </Link>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default NavbarTop;


// "use client";

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Container,
//   NavDropdown,
//   Form,
//   Button,
//   Badge,
//   Dropdown,
// } from "react-bootstrap";
// import { FaSearch, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
// import logo from "../../assets/img/zaro.jpg";
// import { useTranslation } from "../../store/translation";
// import useFontManager from "./useFontManager";

// const NavbarTop = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [cartCount] = useState(3);
//   const [wishlistCount] = useState(2);
//   const location = useLocation();
//   const { language, setLanguage, t } = useTranslation();
//   const { getFontClass, getTextClass } = useFontManager(language);

//   useEffect(() => {
//     let lastY = 0;
//     const handleScroll = () => {
//       const y = window.scrollY;
//       if (y > 80 && y > lastY) {
//         setScrolled(true);
//       } else if (y < 50) {
//         setScrolled(false);
//       }
//       lastY = y;
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed-top w-100 ${getFontClass()}`}
//       style={{
//         zIndex: 1030,
//         transition: "all 0.4s ease",
//         backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "white",
//         boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
//         backdropFilter: scrolled ? "blur(6px)" : "none",
//       }}
//     >
//       {/* 🔹 Top Bar */}
//       <div
//         className="bg-dark text-white py-1 text-center text-md-start"
//         style={{
//           fontSize: "0.85rem",
//           transition: "0.3s ease",
//         }}
//       >
//         <Container fluid className="px-md-5 d-flex flex-column flex-md-row justify-content-between align-items-center gap-1">
//           <div>{t("free_shipping")}</div>
//           <div className="d-flex flex-column flex-md-row gap-1 gap-md-3">
//             <span>+855 962 089 546</span>
//             <span>fashionzaro@gmail.com</span>
//           </div>
//           <Dropdown>
//             <Dropdown.Toggle
//               variant="danger"
//               size="sm"
//               id="dropdown-language"
//               className="rounded-1 px-2 py-1"
//             >
//               {language === "en" ? "EN" : "ខ្មែរ"}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item
//                 onClick={() => setLanguage("en")}
//                 active={language === "en"}
//                 className="english-text"
//               >
//                 EN
//               </Dropdown.Item>
//               <Dropdown.Item
//                 onClick={() => setLanguage("km")}
//                 active={language === "km"}
//                 className="khmer-text"
//               >
//                 ខ្មែរ
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Container>
//       </div>

//       {/* 🔹 Main Navbar */}
//       <Navbar expand="lg" bg="transparent" className="py-2">
//         <Container fluid className="px-3 px-md-5">
//           <Navbar.Brand as={Link} to="/" className={`fw-bold fs-5 ${getTextClass()}`}>
//             <img
//               src={logo}
//               alt="logo"
//               style={{ width: 45, height: 45, borderRadius: "50%" }}
//               className="me-2"
//             />
//             ZARO
//           </Navbar.Brand>

//           <Navbar.Toggle
//             aria-controls="main-navbar"
//             className="border-0"
//             style={{ outline: "none" }}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </Navbar.Toggle>

//           <Navbar.Collapse id="main-navbar" className="text-center">
//             <Nav className="mx-auto">
//               <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
//                 {t("home")}
//               </Nav.Link>

//               <NavDropdown title={t("products")} id="products-dropdown">
//                 <NavDropdown.Item as={Link} to="/products">{t("all_products")}</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item as={Link} to="/men">{t("men")}</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/women">{t("women")}</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/boys">{t("boys")}</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/girls">{t("girls")}</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title={t("collections")} id="collections-dropdown">
//                 <NavDropdown.Item as={Link} to="/popular">{t("popular_products")}</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/special">{t("special_products")}</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/best">{t("best_sellers")}</NavDropdown.Item>
//               </NavDropdown>

//               <Nav.Link as={Link} to="/discounts">{t("sale")}</Nav.Link>
//               <Nav.Link as={Link} to="/about-us">{t("about_us")}</Nav.Link>
//               <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
//             </Nav>

//             {/* 🔹 Icons Section */}
//             <div className="d-flex align-items-center justify-content-center gap-3 mt-3 mt-lg-0">
//               <Form className="d-flex me-2">
//                 <Form.Control
//                   type="search"
//                   placeholder={t("search")}
//                   className="me-2"
//                   aria-label="Search"
//                 />
//                 <Button variant="outline-dark">
//                   <FaSearch />
//                 </Button>
//               </Form>

//               <Link to="/wishlist" className="position-relative text-dark">
//                 <FaHeart size={18} />
//                 <Badge
//                   bg="danger"
//                   pill
//                   className="position-absolute top-0 start-100 translate-middle"
//                 >
//                   {wishlistCount}
//                 </Badge>
//               </Link>

//               <Link to="/cart" className="position-relative text-dark">
//                 <FaShoppingCart size={18} />
//                 <Badge
//                   bg="danger"
//                   pill
//                   className="position-absolute top-0 start-100 translate-middle"
//                 >
//                   {cartCount}
//                 </Badge>
//               </Link>

//               <Link to="/account" className="text-dark">
//                 <FaUser size={18} />
//               </Link>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default NavbarTop;




// "use client";

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Container,
//   NavDropdown,
//   Form,
//   Button,
//   Badge,
//   Dropdown,
//   // 💡 NEW: Import Offcanvas for the side menu
//   Offcanvas,
// } from "react-bootstrap";
// // Note: FaBars is used for the Offcanvas toggle button
// import { FaSearch, FaShoppingCart, FaUser, FaHeart, FaBars } from "react-icons/fa"; 
// import logo from "../../assets/img/zaro.jpg";
// import { useTranslation } from "../../store/translation";
// import useFontManager from "./useFontManager";

// const NavbarTop = () => {
//   const [scrolled, setScrolled] = useState(false);
//   // 💡 NEW: State for controlling the Offcanvas visibility
//   const [showOffcanvas, setShowOffcanvas] = useState(false); 
//   const [cartCount] = useState(3);
//   const [wishlistCount] = useState(2);
//   const location = useLocation();
//   const { language, setLanguage, t } = useTranslation();
//   const { getFontClass, getTextClass } = useFontManager(language);

//   const handleCloseOffcanvas = () => setShowOffcanvas(false);
//   const handleShowOffcanvas = () => setShowOffcanvas(true);

//   // Scroll effect for fixed header styling
//   useEffect(() => {
//     let lastY = 0;
//     const handleScroll = () => {
//       const y = window.scrollY;
//       if (y > 80) {
//         setScrolled(true);
//       } else if (y < 50) {
//         setScrolled(false);
//       }
//       lastY = y;
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Function for the navigation items (used for both desktop Nav and Offcanvas)
//   const NavLinks = () => (
//     <>
//       <Nav.Link 
//         as={Link} 
//         to="/" 
//         active={location.pathname === "/"} 
//         className={getTextClass()}
//         onClick={handleCloseOffcanvas} // Close on click
//       >
//         {t("home")}
//       </Nav.Link>

//       <NavDropdown 
//         title={t("products")} 
//         id="products-dropdown" 
//         className={getTextClass()}
//       >
//         {/* Note: Dropdown items should also close the offcanvas if inside it */}
//         <NavDropdown.Item as={Link} to="/products" className={getTextClass()} onClick={handleCloseOffcanvas}>{t("all_products")}</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item as={Link} to="/men" className={getTextClass()} onClick={handleCloseOffcanvas}>{t("men")}</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to="/women" className={getTextClass()} onClick={handleCloseOffcanvas}>{t("women")}</NavDropdown.Item>
//         {/* <NavDropdown.Item as={Link} to="/boys" className={getTextClass()} onClick={handleCloseOffcanvas}>{t("boys")}</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to="/girls" className={getTextClass()} onClick={handleCloseOffcanvas}>{t("girls")}</NavDropdown.Item> */}
//       </NavDropdown>

//       <NavDropdown 
//         title={t("collections")} 
//         id="collections-dropdown" 
//         className={getTextClass()}
//       >
//         <NavDropdown.Item as={Link} to="/popular" className={getTextClass()} onClick={handleCloseOffcanvas}>{t("popular_products")}</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to="/special" className={getTextClass()} onClick={handleCloseOffcanvas}>{t("special_products")}</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to="/best" className={getTextClass()} onClick={handleCloseOffcanvas}>{t("best_sellers")}</NavDropdown.Item>
//       </NavDropdown>

//       <Nav.Link as={Link} to="/discounts" className={getTextClass()} onClick={handleCloseOffcanvas}>{t("sale")}</Nav.Link>
//       <Nav.Link as={Link} to="/about-us" className={getTextClass()} onClick={handleCloseOffcanvas}>{t("about_us")}</Nav.Link>
//       <Nav.Link as={Link} to="/contact" className={getTextClass()} onClick={handleCloseOffcanvas}>{t("contact")}</Nav.Link>
//     </>
//   );

//   return (
//     <header
//       className={`fixed-top w-100 ${getFontClass()}`}
//       style={{
//         zIndex: 1030,
//         transition: "all 0.4s ease",
//         backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "white",
//         boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
//         backdropFilter: scrolled ? "blur(6px)" : "none",
//       }}
//     >
//       {/* 🔹 Top Bar */}
//       <div
//         className="bg-dark text-white py-1 text-center text-md-start"
//         style={{
//           fontSize: "0.8rem",
//           transition: "0.3s ease",
//         }}
//       >
//         <Container fluid className="px-3 px-md-5 d-flex flex-column flex-md-row justify-content-between align-items-center gap-1">
//           <div>
//             {t("free_shipping")}
//             <span className="d-none d-md-inline ms-3">
//               · +855 962 089 546 · fashionzaro@gmail.com
//             </span>
//           </div>

//           <div className="d-flex align-items-center gap-2 d-md-none">
//             <span>+855 962 089 546</span>
//             <span className="d-block">|</span>
//             <span>fashionzaro@gmail.com</span>
//           </div>

//           <Dropdown>
//             <Dropdown.Toggle
//               variant="danger"
//               size="sm"
//               id="dropdown-language"
//               className="rounded-1 px-2 py-1"
//             >
//               {language === "en" ? "EN" : "ខ្មែរ"}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item
//                 onClick={() => setLanguage("en")}
//                 active={language === "en"}
//                 className="english-text"
//               >
//                 EN
//               </Dropdown.Item>
//               <Dropdown.Item
//                 onClick={() => setLanguage("km")}
//                 active={language === "km"}
//                 className="khmer-text"
//                 // 💡 Corrected line: content is inside the tag, not floating outside
//               >
//                 ខ្មែរ
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Container>
//       </div>

//       {/* 🔹 Main Navbar */}
//       <Navbar bg="transparent" className="py-2">
//         <Container fluid className="px-3 px-md-5">
//           {/* Logo/Brand */}
//           <Navbar.Brand as={Link} to="/" className={`fw-bold fs-5 ${getTextClass()}`}>
//             <img
//               src={logo}
//               alt="logo"
//               style={{ width: 40, height: 40, borderRadius: "50%" }}
//               className="me-2"
//             />
//             ZARO
//           </Navbar.Brand>

        
//           {/* <div className="d-flex align-items-center gap-3 order-lg-3">
       
//             <Link to="/account" className="text-dark d-none d-lg-block">
//               <FaUser size={18} />
//             </Link>

//             <Link to="/wishlist" className="position-relative text-dark">
//               <FaHeart size={18} />
//               <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
//                 {wishlistCount}
//               </Badge>
//             </Link>

//             <Link to="/cart" className="position-relative text-dark">
//               <FaShoppingCart size={18} />
//               <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
//                 {cartCount}
//               </Badge>
//             </Link>
//           </div>
//            */}


//           {/* 💡 Desktop Navigation Links */}
//           <Nav className="mx-auto d-none d-lg-flex order-lg-2">
//              <NavLinks />
//           </Nav>
          
//           {/* 💡 Mobile Offcanvas Toggle (Hamburger) */}
//           <Button
//             variant="light"
//             onClick={handleShowOffcanvas}
//             className="d-lg-none border-0 p-2"
//             aria-controls="offcanvasNavbar"
//           >
//             <FaBars size={20} />
//           </Button>

//         </Container>
//       </Navbar>

//       {/* 🔹 Offcanvas Side Menu (Mobile Only) */}
//       <Offcanvas 
//         show={showOffcanvas} 
//         onHide={handleCloseOffcanvas} 
//         placement="start" // Slide in from the left
//         className={getFontClass()}
//       >
//         <Offcanvas.Header closeButton> {/* 💡 The required Exit/Close Button */}
//           <Offcanvas.Title className={`fw-bold fs-5 ${getTextClass()}`}>
//             ZARO Menu
//           </Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//             {/* Mobile Search Form in Offcanvas */}
//             <Form className="d-flex mb-4">
//               <Form.Control
//                   type="search"
//                   placeholder={t('search')}
//                   className={`me-2 ${getTextClass()}`}
//                   aria-label="Search"
//                 />
//                 <Button variant="outline-dark">
//                   <FaSearch />
//                 </Button>
//             </Form>

//             {/* Navigation Links inside the Side Menu */}
//             <Nav className="flex-column">
//                 <NavLinks />
//             </Nav>
            
//             <hr className="my-3"/>
            
//             {/* Mobile Account Link inside Offcanvas */}
//             {/* <Nav.Link as={Link} to="/account" className={`text-dark ${getTextClass()}`} onClick={handleCloseOffcanvas}>
//                 <FaUser className="me-2"/> {t('account')}
//             </Nav.Link> */}

//         </Offcanvas.Body>
//       </Offcanvas>

//     </header>
//   );
// };

// export default NavbarTop;



// "use client";
// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Container,
//   NavDropdown,
//   Dropdown,
//   Offcanvas,
//   Button,
//   Form,
// } from "react-bootstrap";
// import { FaBars, FaGlobe, FaSearch } from "react-icons/fa";
// import logo from "../../assets/img/zaro.jpg";
// import { useTranslation } from "../../store/translation";
// import useFontManager from "./useFontManager";

// const NavbarTop = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const location = useLocation();
//   const { language, setLanguage, t } = useTranslation();
//   const { getFontClass, getTextClass } = useFontManager(language);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const NavLinks = () => (
//     <>
//       {[
//         { path: "/", label: t("home") },
//         { path: "/products", label: t("products") },
//         { path: "/collections", label: t("collections") },
//         { path: "/discounts", label: t("sale") },
//         { path: "/about-us", label: t("about_us") },
//         { path: "/order", label: t("order") },
//       ].map((item) => (
//         <Nav.Link
//           key={item.path}
//           as={Link}
//           to={item.path}
//           onClick={() => setShowOffcanvas(false)}
//           className={`mx-2 position-relative ${getTextClass()}`}
//           style={{
//             fontWeight: location.pathname === item.path ? "600" : "400",
//           }}
//         >
//           {item.label}
//           {location.pathname === item.path && (
//             <span
//               style={{
//                 height: 2,
//                 width: "100%",
//                 background: "#000",
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//               }}
//             ></span>
//           )}
//         </Nav.Link>
//       ))}
//     </>
//   );

//   return (
//     <header className={`fixed-top w-100 ${getFontClass()}`}>
//       {/* Top Bar */}
//       <div
//         className="bg-dark text-white text-center py-1"
//         style={{ fontSize: "0.8rem" }}
//       >
//         <Container className="d-flex justify-content-between align-items-center">
//           <span>{t("free_shipping")}</span>
//           <span className="d-none d-md-inline">
//             +855 962 089 546 · fashionzaro@gmail.com
//           </span>
//           <Dropdown align="end">
//             <Dropdown.Toggle
//               variant="outline-light"
//               size="sm"
//               className="border-0 d-flex align-items-center gap-1"
//             >
//               <FaGlobe /> {language === "en" ? "EN" : "KH"}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item onClick={() => setLanguage("en")}>EN</Dropdown.Item>
//               <Dropdown.Item onClick={() => setLanguage("km")}>KH</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Container>
//       </div>

//       {/* Main Navbar */}
//       <Navbar
//         expand="lg"
//         className="py-2"
//         style={{
//           transition: "0.3s",
//           backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "white",
//           boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.05)" : "none",
//         }}
//       >
//         <Container className="px-3 px-md-5">
//           <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//             <img
//               src={logo}
//               alt="logo"
//               style={{ width: 40, height: 40, borderRadius: "50%" }}
//               className="me-2"
//             />
//             <span className="fw-bold fs-5">ZARO</span>
//           </Navbar.Brand>

//           <Button
//             variant="light"
//             onClick={() => setShowOffcanvas(true)}
//             className="d-lg-none border-0"
//           >
//             <FaBars size={20} />
//           </Button>

//           <Nav className="ms-auto d-none d-lg-flex align-items-center">
//             <NavLinks />
//           </Nav>
//         </Container>
//       </Navbar>

//       {/* Offcanvas Menu for Mobile */}
//       <Offcanvas
//         show={showOffcanvas}
//         onHide={() => setShowOffcanvas(false)}
//         placement="start"
//       >
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title className="fw-bold">ZARO</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Form className="d-flex mb-3">
//             <Form.Control placeholder={t("search")} />
//             <Button variant="dark" className="ms-2">
//               <FaSearch />
//             </Button>
//           </Form>
//           <Nav className="flex-column">
//             <NavLinks />
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </header>
//   );
// };

// export default NavbarTop;


"use client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Offcanvas,
  Button,
  Form,
} from "react-bootstrap";
import { FaBars, FaGlobe, FaSearch } from "react-icons/fa";
import logo from "../../assets/img/zaro.jpg";
import { useTranslation } from "../../store/translation";
import useFontManager from "./useFontManager";

const NavbarTop = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();
  const { getFontClass, getTextClass } = useFontManager(language);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      {[
        { path: "/", label: t("home") },
        { path: "/products", label: t("products") },
        { path: "/collections", label: t("collections") },
        { path: "/discounts", label: t("sale") },
        { path: "/about-us", label: t("about_us") },
        { path: "/order", label: t("order") },
      ].map((item) => (
        <Nav.Link
          key={item.path}
          as={Link}
          to={item.path}
          onClick={() => setShowOffcanvas(false)}
          className={`mx-2 position-relative ${getTextClass()} hover-underline`}
          style={{
            fontWeight: location.pathname === item.path ? "600" : "400",
            color: location.pathname === item.path ? "#000" : "#333",
            transition: "0.2s ease",
          }}
        >
          {item.label}
          {location.pathname === item.path && (
            <span
              style={{
                height: 2,
                width: "100%",
                background: "#000",
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            ></span>
          )}
        </Nav.Link>
      ))}
    </>
  );

  return (
    <>
      {/* 🔹 Inline CSS */}
      <style>{`
        .hover-underline:hover {
          color: #000 !important;
        }
        .hover-underline::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: #000;
          transition: width 0.3s;
          margin-top: 2px;
        }
        .hover-underline:hover::after {
          width: 100%;
        }

        .hover-link:hover {
          color: #000 !important;
          padding-left: 8px;
          transition: all 0.3s ease;
        }

        .offcanvas-body .nav-link {
          border-bottom: 1px solid #eee;
        }
      `}</style>

      {/* 🔹 Header */}
      <header className={`fixed-top w-100 ${getFontClass()}`} style={{ zIndex: 1030 }}>
        {/* Top Bar */}
        <div
          className="bg-dark text-white text-center py-1"
          style={{ fontSize: "0.8rem" }}
        >
          <Container className="d-flex justify-content-between align-items-center">
            <span>{t("free_shipping")}</span>
            <span className="d-none d-md-inline">
              +855 962 089 546 · fashionzaro@gmail.com
            </span>

            <Dropdown align="end">
              <Dropdown.Toggle
                variant="outline-light"
                size="sm"
                className="border-0 d-flex align-items-center gap-1"
              >
                <FaGlobe /> {language === "en" ? "EN" : "KH"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setLanguage("en")}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => setLanguage("km")}>KH</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </div>

        {/* Main Navbar */}
        <Navbar
          expand="lg"
          className="py-2"
          style={{
            transition: "0.3s",
            backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "white",
            boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.05)" : "none",
          }}
        >
          <Container className="px-3 px-md-5">
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <img
                src={logo}
                alt="logo"
                style={{ width: 40, height: 40, borderRadius: "50%" }}
                className="me-2"
              />
              <span className="fw-bold fs-5">ZARO</span>
            </Navbar.Brand>

            <Button
              variant="light"
              onClick={() => setShowOffcanvas(true)}
              className="d-lg-none border-0"
            >
              <FaBars size={20} />
            </Button>

            {/* Desktop Nav */}
            <Nav className="ms-auto d-none d-lg-flex align-items-center">
              <NavLinks />
            </Nav>
          </Container>
        </Navbar>

        {/* Offcanvas (Mobile Menu) */}
        <Offcanvas
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
          placement="start"
          className="bg-light"
          style={{
            width: "80%",
            maxWidth: "320px",
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold fs-5" style={{ letterSpacing: "1px" }}>
              ZARO
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            {/* Search Bar */}
            <Form className="d-flex mb-4 shadow-sm rounded-pill overflow-hidden">
              <Form.Control
                type="search"
                placeholder={t("search")}
                className="border-0 ps-3"
                style={{ fontSize: "0.9rem" }}
              />
              <Button
                variant="dark"
                className="rounded-0"
                style={{
                  borderRadius: "0",
                  borderTopRightRadius: "50px",
                  borderBottomRightRadius: "50px",
                }}
              >
                <FaSearch size={14} />
              </Button>
            </Form>

            {/* Mobile Links */}
            <Nav className="flex-column">
              {[
                { path: "/", label: t("home") },
                { path: "/products", label: t("products") },
                { path: "/collections", label: t("collections") },
                { path: "/discounts", label: t("sale") },
                { path: "/about-us", label: t("about_us") },
                { path: "/order", label: t("order") },
              ].map((item) => (
                <Nav.Link
                  key={item.path}
                  as={Link}
                  to={item.path}
                  onClick={() => setShowOffcanvas(false)}
                  style={{
                    color: location.pathname === item.path ? "#000" : "#555",
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    fontSize: "0.95rem",
                    padding: "10px 0",
                    textTransform: "capitalize",
                    transition: "0.2s",
                  }}
                  className="hover-link"
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
};

export default NavbarTop;
