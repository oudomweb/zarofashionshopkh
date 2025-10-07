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
//       {/* <div className="bg-dark text-white py-2">
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
//       </div> */}
//       {/* Top Bar - Hidden on mobile */}
//       <div className="bg-dark text-white py-2 d-none d-md-block">
//         <Container>
//           <div className="d-flex justify-content-between align-items-center">
//             <div>
//               <small className={getTextClass()}>{t('free_shipping')}</small>
//             </div>
//             <div className="text-center">
//               <small className={`me-3 ${getTextClass()}`}>+855 962 089 546</small>
//               <small className={getTextClass()}>fashionzaro@gmail.com</small>
//             </div>
//             <div>
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


"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
  Dropdown,
  Offcanvas,
} from "react-bootstrap";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import logo from "../../assets/img/zaro.jpg";
import { useTranslation } from '../../store/translation';
import useFontManager from "./useFontManager";

const NavbarTop = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();

  const { getFontClass, getTextClass } = useFontManager(language);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className={getFontClass()}>
      {/* Top Bar - Desktop Only */}
      <div className="bg-dark text-white py-2 d-none d-lg-block">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small className={getTextClass()}>{t('free_shipping')}</small>
            </div>
            <div className="text-center">
              <small className={`me-3 ${getTextClass()}`}>+855 962 089 546</small>
              <small className={getTextClass()}>fashionzaro@gmail.com</small>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  size="sm"
                  id="dropdown-language"
                  className={getTextClass()}
                >
                  {language === 'en' ? 'EN' : 'ខ្មែរ'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => setLanguage('en')}
                    active={language === 'en'}
                    className="english-text"
                  >
                    EN
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setLanguage('km')}
                    active={language === 'km'}
                    className="khmer-text"
                  >
                    ខ្មែរ
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar bg="white" className="shadow-sm py-2" sticky="top">
        <Container>
          {/* Mobile Menu Button */}
          <Button 
            variant="outline-dark" 
            className="d-lg-none me-2"
            onClick={handleShow}
          >
            <FaBars />
          </Button>

          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className={`fw-bold fs-4 ${getTextClass()}`}>
            <img 
              src={logo} 
              alt="logo" 
              style={{ width: 35, height: 35, objectFit: 'cover' }} 
              className="me-2" 
            />
            ZARO
          </Navbar.Brand>

          {/* Desktop Navigation */}
          <Nav className="mx-auto d-none d-lg-flex">
            <Nav.Link
              as={Link}
              to="/"
              className={`px-3 ${location.pathname === "/" ? "fw-bold text-primary" : ""} ${getTextClass()}`}
            >
              {t('home')}
            </Nav.Link>

            <NavDropdown 
              title={<span className={getTextClass()}>{t('products')}</span>}
              id="products-dropdown"
            >
              <NavDropdown.Item as={Link} to="/products" className={getTextClass()}>
                {t('all_products')}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/men" className={getTextClass()}>
                {t('men')}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/women" className={getTextClass()}>
                {t('women')}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/boys" className={getTextClass()}>
                {t('boys')}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/girls" className={getTextClass()}>
                {t('girls')}
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown 
              title={<span className={getTextClass()}>{t('collections')}</span>}
              id="collections-dropdown"
            >
              <NavDropdown.Item as={Link} to="/popular" className={getTextClass()}>
                {t('popular_products')}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/special" className={getTextClass()}>
                {t('special_products')}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/best" className={getTextClass()}>
                {t('best_sellers')}
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/discounts" className={`px-3 ${getTextClass()}`}>
              {t('sale')}
            </Nav.Link>

            <Nav.Link as={Link} to="/about-us" className={`px-3 ${getTextClass()}`}>
              {t('about_us')}
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" className={`px-3 ${getTextClass()}`}>
              {t('contact')}
            </Nav.Link>
          </Nav>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center gap-2">
            {/* Language Selector - Mobile & Desktop */}
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary"
                size="sm"
                id="dropdown-lang"
                className={getTextClass()}
              >
                {language === 'en' ? 'EN' : 'ខ្មែរ'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => setLanguage('en')}
                  active={language === 'en'}
                  className="english-text"
                >
                  EN
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setLanguage('km')}
                  active={language === 'km'}
                  className="khmer-text"
                >
                  ខ្មែរ
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Search - Desktop Only */}
            <Form className="d-none d-lg-flex">
              <Form.Control
                type="search"
                placeholder={t('search')}
                className={`me-2 ${getTextClass()}`}
                size="sm"
                style={{ width: '180px' }}
              />
              <Button variant="outline-dark" size="sm">
                <FaSearch />
              </Button>
            </Form>

            {/* User Account */}
            <Link to="/account" className="btn btn-outline-dark btn-sm">
              <FaUser />
            </Link>
          </div>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={getTextClass()}>
            <img 
              src={logo} 
              alt="logo" 
              style={{ width: 30, height: 30, objectFit: 'cover' }} 
              className="me-2" 
            />
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Mobile Search */}
          <Form className="mb-3">
            <Form.Control
              type="search"
              placeholder={t('search')}
              className={getTextClass()}
            />
          </Form>

          {/* Mobile Navigation Links */}
          <Nav className="flex-column">
            <Nav.Link
              as={Link}
              to="/"
              onClick={handleClose}
              className={`py-2 ${location.pathname === "/" ? "fw-bold text-primary" : ""} ${getTextClass()}`}
            >
              {t('home')}
            </Nav.Link>

            <hr />

            <div className={`fw-bold mb-2 ${getTextClass()}`}>{t('products')}</div>
            <Nav.Link as={Link} to="/products" onClick={handleClose} className={`ps-3 py-2 ${getTextClass()}`}>
              {t('all_products')}
            </Nav.Link>
            <Nav.Link as={Link} to="/men" onClick={handleClose} className={`ps-3 py-2 ${getTextClass()}`}>
              {t('men')}
            </Nav.Link>
            <Nav.Link as={Link} to="/women" onClick={handleClose} className={`ps-3 py-2 ${getTextClass()}`}>
              {t('women')}
            </Nav.Link>
            <Nav.Link as={Link} to="/boys" onClick={handleClose} className={`ps-3 py-2 ${getTextClass()}`}>
              {t('boys')}
            </Nav.Link>
            <Nav.Link as={Link} to="/girls" onClick={handleClose} className={`ps-3 py-2 ${getTextClass()}`}>
              {t('girls')}
            </Nav.Link>

            <hr />

            <div className={`fw-bold mb-2 ${getTextClass()}`}>{t('collections')}</div>
            <Nav.Link as={Link} to="/popular" onClick={handleClose} className={`ps-3 py-2 ${getTextClass()}`}>
              {t('popular_products')}
            </Nav.Link>
            <Nav.Link as={Link} to="/special" onClick={handleClose} className={`ps-3 py-2 ${getTextClass()}`}>
              {t('special_products')}
            </Nav.Link>
            <Nav.Link as={Link} to="/best" onClick={handleClose} className={`ps-3 py-2 ${getTextClass()}`}>
              {t('best_sellers')}
            </Nav.Link>

            <hr />

            <Nav.Link as={Link} to="/discounts" onClick={handleClose} className={`py-2 ${getTextClass()}`}>
              {t('sale')}
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" onClick={handleClose} className={`py-2 ${getTextClass()}`}>
              {t('about_us')}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleClose} className={`py-2 ${getTextClass()}`}>
              {t('contact')}
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default NavbarTop;