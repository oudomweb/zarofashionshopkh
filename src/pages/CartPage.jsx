"use client";

import {useState} from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Card,
  Breadcrumb,
} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaTrash, FaArrowLeft, FaShoppingCart} from "react-icons/fa";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      price: 29.99,
      image: "/images/product-1.jpg",
      color: "Black",
      size: "M",
      quantity: 2,
    },
    {
      id: 2,
      name: "Graphic Print T-Shirt",
      price: 34.99,
      image: "/images/product-2.jpg",
      color: "White",
      size: "L",
      quantity: 1,
    },
    {
      id: 3,
      name: "Premium Polo Shirt",
      price: 49.99,
      image: "/images/product-3.jpg",
      color: "Blue",
      size: "XL",
      quantity: 1,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {...item, quantity: Number.parseInt(newQuantity)}
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "discount20") {
      setCouponApplied(true);
      setDiscount(20);
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid coupon code");
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = subtotal > 100 ? 0 : 10;
    const discountAmount = couponApplied ? (subtotal * discount) / 100 : 0;
    return subtotal + shipping - discountAmount;
  };

  return (
    <div className="py-5">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="mb-4 title-shopping">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <div className="mb-4">
              <FaShoppingCart size={60} className="text-muted" />
            </div>
            <h3>Your cart is empty</h3>
            <p className="mb-4">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products" className="btn btn-primary">
              <FaArrowLeft className="me-2" /> Continue Shopping
            </Link>
          </div>
        ) : (
          <Row>
            <Col lg={8} className="mb-4 mb-lg-0">
              <div className="table-responsive">
                <Table className="align-middle">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="img-fluid me-3"
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                              }}
                            />
                            <div>
                              <h6 className="mb-1">{item.name}</h6>
                              <small className="text-muted">
                                Color: {item.color}, Size: {item.size}
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td style={{width: "120px"}}>
                          <Form.Select
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item.id, e.target.value)
                            }
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </Form.Select>
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <Button
                            variant="link"
                            className="text-danger p-0"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <FaTrash />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <Link to="/products" className="btn btn-outline-dark">
                  <FaArrowLeft className="me-2" /> Continue Shopping
                </Link>
                <Button variant="outline-dark">Update Cart</Button>
              </div>
            </Col>

            <Col lg={4}>
              <Card>
                <Card.Header className="bg-dark text-white">
                  <h5 className="mb-0">Order Summary</h5>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Shipping</span>
                    <span>{calculateSubtotal() > 100 ? "Free" : "$10.00"}</span>
                  </div>
                  {couponApplied && (
                    <div className="d-flex justify-content-between mb-3 text-success">
                      <span>Discount ({discount}%)</span>
                      <span>
                        -${((calculateSubtotal() * discount) / 100).toFixed(2)}
                      </span>
                    </div>
                  )}
                  <hr />
                  <div className="d-flex justify-content-between mb-4">
                    <strong>Total</strong>
                    <strong>${calculateTotal().toFixed(2)}</strong>
                  </div>

                  <div className="mb-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Coupon Code</Form.Label>
                      <div className="d-flex">
                        <Form.Control
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Enter coupon code"
                          disabled={couponApplied}
                        />
                        <Button
                          variant="outline-dark"
                          className="ms-2"
                          onClick={handleApplyCoupon}
                          disabled={couponApplied || !couponCode}
                        >
                          Apply
                        </Button>
                      </div>
                    </Form.Group>
                  </div>

                  <Button variant="primary" className="w-100 mb-3">
                    Proceed to Checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
