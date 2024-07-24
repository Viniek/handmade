import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import useUserStore from "../../userStore";
import "./Buyers.css"
// import { IoMdCart } from "react-icons/io";

toastConfig({ theme: "dark" });

function Wishlist() {
  const [items, setItems] = useState([]);
  const user = useUserStore((state)=>state.user)
  

  useEffect(() => {
    async function getItems() {
      try {
        const response = await axios.get("http://localhost:5000/api/items/getallItems");
        setItems(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  
  }, []);





  return (
    <>
     <section className="cart-items">
        <h3>Your Cart</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.description}</p>
            <p>Ksh {item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </section>
      <section className="cart">
        {/* <IoMdCart /> */}
        <p>Total Price: Ksh {totalPrice}</p>
        <button onClick={purchaseItems}>Purchase</button>
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
              Visit <Link to={item.similarProducts}>{item.similarProducts}</Link> for similar products
            </p>
            <button onClick={() => addToCart(item)}>Add to cart</button>
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
