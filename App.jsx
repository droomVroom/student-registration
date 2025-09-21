import ProductCard from "./components/ProductCard" 
import './App.css'; 
function App() { 
   
 const products = [ 
   {name:"Laptop", price:60000, instock:true}, 
  {name:"Smartphone", price:25000, instock:false}, 
  {name:"Headphone", price:3000, instock:true} 
 ] 
  return ( 
    <div className="productcard11"> 
    <ProductCard name={products}/> 
    </div> 
  ) 
} 
export default App