import React from "react";
import { useCart } from "../context/CartContext";

const menuItems = [
  { id: 1, name: "Paneer Butter Masala", price: 200, img: "https://media.istockphoto.com/id/1305516669/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=0&k=20&c=DO--pEfzfOdpResHc3m4JJQVSvHrNtK58zbC4xl4yaU=" },
  { id: 2, name: "Chicken Biryani", price: 250, img: "https://t4.ftcdn.net/jpg/09/12/10/25/360_F_912102578_dpR2r8IstjbBzQWgn2dAegf6SE2gDPNT.jpg" },
  { id: 3, name: "Veg Thali", price: 180, img: "https://image.telanganatoday.com/wp-content/uploads/2024/01/veg-thali_V_jpg--442x260-4g.webp?sw=412&dsz=442x260&iw=392&p=false&r=2.625" },
  { id: 4, name: "Tandoori Chicken", price: 280, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7Z2-K_5XsIre3YXBiG0iFp0aB-kvxB9ppg&s" },
  { id: 5, name: "Masala Dosa", price: 150, img: "https://t3.ftcdn.net/jpg/03/21/94/18/360_F_321941897_1IemuLDDsuBlNyK3nCy8DpHgW3DKJu2B.jpg" },
  { id: 6, name: "Butter Naan", price: 50, img: "https://t3.ftcdn.net/jpg/08/95/50/04/360_F_895500474_IDUMxbOGEBn29tyPyjG8oLEEWlK8ZlOg.jpg" },
  { id: 7, name: "Momos", price: 120, img: "https://static.vecteezy.com/system/resources/thumbnails/038/972/466/small/ai-generated-veg-steam-momo-nepalese-traditional-dish-momo-stuffed-with-vegetables-and-then-cooked-and-served-with-sauce-over-a-rustic-wooden-background-selective-focus-photo.jpg" },
  { id: 8, name: "Chole Bhature", price: 160, img: "https://t4.ftcdn.net/jpg/10/92/78/45/360_F_1092784517_IyK2ElABblouTpn1tGnjWpxwEmhc1e60.jpg" },
];

function Menu() {
  const { addToCart } = useCart();

  return (
    <div>
      <h2 className="text-center mb-4">Our Menu</h2>
      <div className="row">
        {menuItems.map(item => (
          <div className="col-md-4 mb-3" key={item.id} >
            <div className="card h-100 shadow">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">₹{item.price}</p>
                <button className="btn btn-primary mt-auto" style={{ backgroundColor: "#0F172A" }}  onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;