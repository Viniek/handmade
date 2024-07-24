import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserStore from "../../userStore";
import "./Sellers.css";

function Sellers() {
  const user = useUserStore((state) => state.user);
  const [seller, setSellers] = useState([]);

  useEffect(() => {
    async function getRequests() {
      if (user) {
        try {
          const response = await axios.get("http://localhost:5000/api/sellers/requests", {
            withCredentials: true,
          });
          console.log(response);
          setSellers(response.data.data);
          console.log(response.data.data);
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    getRequests();
  }, [user]);

  return (
    <>
      <section className="requests">
        {seller.length > 0 ? (
          seller.map((seller) => (
            <div key={seller.seller_id} className="requestscontainer">
          
               <p>{seller.fullname}</p>
              <p>{seller.emailaddress}</p>
              <p>{new Date(seller.createdAt).toLocaleString()}</p>
              <p>{new Date(seller.updatedAt).toLocaleString()}</p> 
            
            </div>
          ))
        ) : (
          <p>No requests found.</p>
        )}
      </section>
    </>
  );
}

export default Sellers;
