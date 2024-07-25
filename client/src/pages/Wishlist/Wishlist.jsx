import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import useUserStore from "../../userStore";
import { url_api } from "../../../utils/config";
import "./Buyers.css";

toastConfig({ theme: "dark" });

function Wishlist() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    async function getItems() {
      try {
        const response = await axios.get(`${url_api}/items/getallItems`);
        console.log(response);
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    // async function fetchCartItems() {
    //   if (user) {
    //     try {
    //       const response = await axios.get(`${url_api}/cart/getCart/${user.user_id}`, {
    //         withCredentials: true,
    //       });
    //       setCartItems(response.data);
    //     } catch (error) {
    //       setError(error.message);
    //     }
        
    //   }
    // }

    // fetchCartItems();
    getItems();
  }, [user]);
  // const handleAddCart = async (item) => {
  //   if (!user) {
  //     alert("Please log in to add products to the cart");
  //     return;
  //   }
  
  //   try {
  //     // Ensure the user exists in the database
  //     const userResponse = await axios.get(`http://localhost:5000/api/users/users/${user.id}`);
  //     console.log(userResponse);
  //     if (!userResponse.data) {
  //       alert("User not found");
  //       return;
  //     }
  
  //     const cartItem = {
  //       user_id: user.id,
  //       item_id: item.id,
  //     };
  
  //     const response = await axios.post(`http://localhost:5000/cart/createCart`, cartItem,{
  //       withCredentials: true,
  //     });
  
  //     console.log(response);
  //     setCartItems([...cartItems, response.data]);
  //     updateCartCount(cartItems.length + 1);
  //     toast("Product added to cart");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  
  const handleAddCart = async (item) => {
    console.log(user);
    if (!user) {
      alert("Please log in to add products to the cart");
      return;
    }
    if (cartItems.some((cartItem) => cartItem.item_id === item.id)) {
      alert("This product is already in your cart.");
      return;
    }
    try {
      const cartItem = {
        user_id: user.id,
        item_id: item.id,
      };
      const response = await axios.post(`http://localhost:5000/cart/createCart`, cartItem, {
        withCredentials: true,
      });
      console.log(response);
      setCartItems([...cartItems, response.data]);
      updateCartCount(cartItems.length + 1);
      toast("Product added to cart");
    } catch (error) {
      // setError("There was an error adding the item to your cart");
      console.log(error.message);
    }
  };

  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <section className="cart">
        <p>Total Price: Ksh {totalPrice}</p>
        <button onClick={() => alert("Purchasing items...")}>Purchase</button>
      </section>
      <section className="items">
        {items.map((item) => (
          <div key={item.item_id} className="itemscontainer">
            <img src={item.image} alt={item.description} />
            <p>Price: Ksh {item.price}</p>
            <h3>{item.description}</h3>
            <p>Made from {item.material}</p>
            <p>Made by {item.seller}</p>
            <p>
              Visit{" "}
              <Link to={item.similarProducts}>{item.similarProducts}</Link> for
              similar products
            </p>
            <button onClick={() => handleAddCart(item)}>Add to cart</button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Wishlist;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import toast, { toastConfig } from "react-simple-toasts";
// import "react-simple-toasts/dist/theme/dark.css";
// import "./Buyers.css";

// toastConfig({ theme: "dark" });

// function Wishlist() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     async function getItems() {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/items/getallItems",
//         );
//         setItems(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//     getItems();
//   }, []);

//   return (
//     <>
//       <section className="items">
//         {items.map((item) => (
//           <div key={item.item_id} className="itemscontainer">
//             <img src={item.image} alt={item.image} />
//             <p>Price :Ksh {item.price}</p>
//             <h3>{item.description}</h3>
//             <p> Made from {item.material} </p>

//             <p>Made by {item.seller}</p>
//             <p>
//               Visit{" "}
//               <Link to={item.similarProducts}>{item.similarProducts}</Link> for
//               similar products
//             </p>

//             {/* <img src={item.ratings} alt="" /> */}
//             <button onClick={() => toast("Item added to cart! 🍞")}>
//               Add to cart
//             </button>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// }

// export default Wishlist;
