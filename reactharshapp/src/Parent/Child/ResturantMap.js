import './ResturantMap.css'
import './Cart.css' 
import Cart from './Cart.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

import MenuCard from './MenuCard.js'  
 
 const ResturantMap = ({menuData}) => {  
    
    menuData = [ 
      {
        id: 1, 
        elementName: "Bread Butter",  
        category: "Breakfast",
        price: "75",
        image: "bread",
        description: "Soft bread topped with rich, creamy butter, lightly toasted and served fresh. This simple home-style breakfast feels warm and comforting, making it perfect for a light and satisfying start to the day."
      },
      {
        id: 2,
        elementName: "Light Sandwich",
        category: "Breakfast",
        price: "90",
        image: "sandwich",
        description: "Freshly sliced vegetables with a hint of mint chutney on buttered bread, lightly seasoned with spices and served fresh. This wholesome light sandwich is an ideal choice for a healthy and quick breakfast."
      },
      {
        id: 3,
        elementName: "Pancakes",
        category: "Breakfast",
        price: "120",
        image: "pancakes",
        description: "Classic house-made fluffy pancakes, grilled until golden brown with a soft, airy center. A simple yet delicious breakfast staple that is light, satisfying, and freshly prepared to order.",
      },
      {
        id: 4,
        elementName: "Palak Paneer",
        category: "Lunch",
        price: "220", 
        image: "paneer",
        description: "Fresh cottage cheese cubes cooked in a smooth, creamy spinach gravy infused with garlic, ginger, and aromatic Indian spices. A healthy and flavorful classic served with a touch of fresh cream",
      },
      {
        id: 5,
        elementName: "Mix Veg Curry",
        category: "Lunch",
        price: "180",
        image: "veg",
        description: "A colorful medley of seasonal vegetables like carrots, peas, cauliflower, and beans, simmered in a rich tomato-onion gravy. Finished with aromatic Indian spices and a touch of butter for a hearty, wholesome meal.",
      },
      {
        id: 6,
        elementName: "Baingan Bharta",
        category: "Lunch",
        price: "160",
        image: "bharta",
        description: "Fire-roasted eggplant mashed to perfection and sautéed with chopped onions, tomatoes, and green chilies. This smoky, rustic North Indian classic is seasoned with authentic spices and finished with fresh coriander for a comforting, dhaba-style flavor",
      },
      {
        id: 7,
        elementName: "Dal Makhani",
        category: "Dinner",
        price: "190",
        image: "makhni",
        description: "A rich, creamy classic made with whole black lentils and kidney beans, slow-cooked for 12 hours on a low flame. Finished with a generous dollop of white butter and fresh cream, giving it that authentic smoky and velvety dhaba-style taste",
      },
      {
        id: 8,
        elementName: "Malai Kofta",
        category: "Dinner",
        price: "250",
        image: "kofta",
        description: "Indulge in melt-in-the-mouth dumplings made of mashed potatoes and paneer, deep-fried to golden perfection. These koftas are served in a rich, velvety gravy of cashew nuts and tomatoes, delicately flavored with cardamom and finished with a swirl of fresh cream",
      },
      {
        id: 9,
        elementName: "Shahi Paneer",
        category: "Dinner",
        price: "240",
        image: "shahi",
        description: "Experience royalty with soft paneer cubes cooked in a luxurious, golden-hued gravy made from cashew paste, onions, and yogurt. Infused with aromatic spices like cardamom and saffron, this mildly sweet and creamy dish is finished with a touch of fresh cream and dried fenugreek leaves.",
      },
    ]
    

    const [cart, setCart] = useState([]);  


    // addToCart for "+"
    const addToCart = (item) => {
      const found = cart.find(i => i.id === item.id);

      if (found) {
        setCart(
          cart.map(i =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        );
      } else {
        setCart([...cart, { ...item, quantity: 1 }]);
      }
    };


    // decrease for "-"
    const decrease = (id) => {
      setCart(
        cart
          .map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0)
      );
    };



    // Sum of Cart Products
    const navigate = useNavigate();

    const handleOrder = (total) => {
      if (cart.length === 0) {
          alert("Your cart is empty! Please add some items to proceed.");
        return;
      }
        navigate("/payment", { state: { items: cart, total: total } });
    };

    // Single Product
    const handleDirectOrder = (itemPrice) => {
      navigate("/payment", { state: { total: itemPrice } });
    };



    const [items, setItems] = useState(menuData);

    const filterItem = (category) => {
      if (category === "All") {
        setItems(menuData);
        return;
      }
      
      const updatedList = menuData.filter((curElem) => {
        return curElem.category === category; 
      });
      setItems(updatedList);
  };
         
    return ( 
      <>

        <div className="btn-group">
          <button onClick={() => filterItem("All")}>All</button>
          <button onClick={() => filterItem("Breakfast")}>Breakfast</button>
          <button onClick={() => filterItem("Lunch")}>Lunch</button>
          <button onClick={() => filterItem("Dinner")}>Dinner</button>
        </div>


        <div className="card-grid"> 
            {items.map((item, index) => { 
              return (
                <MenuCard 
                  number={index + 1}
                  elementName= {item.elementName} 
                  price= {item.price}
                  image= {item.image}
                  description= {item.description}
                  addToCart={addToCart}
                  item={item}
                  handleDirectOrder= {handleDirectOrder}
                />
              )
            })}   
        </div>

        <Cart cart= {cart} handleOrder= {handleOrder} addToCart={addToCart} decrease={decrease}/>
      </>
   )
 }
 
 export default ResturantMap
 