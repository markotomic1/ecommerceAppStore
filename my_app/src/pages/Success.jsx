import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethod";
import { Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);

  const [orderId, setOrderId] = useState(null);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        console.log(res.data);
        setOrderId(res.data._id);
      } catch (error) {
        console.log(error);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been successfully created.Your order number is ${orderId}`
        : `Successfull.Your order is being prepared`}
      <Link to='/'>
        <button style={{ padding: "10px", marginTop: "20px" }}>
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Success;
