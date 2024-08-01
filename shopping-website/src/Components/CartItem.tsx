// import { Button, Stack } from "react-bootstrap"
// import { useShoppingcart } from "../Context/Shoppingcartcontext"
// // import { formatCurrency } from "../utilities/formatCurrency"
// import  Store  from '../Pages/Store';
// import { ShoppingCart } from "./Shoppingcart";

// type CartItemProps = {
//   id: number
//   quantity: number
// }

// export function CartItem({ id, quantity }: CartItemProps) {
//   const { removeFromCart } = useShoppingcart()
//   const item = storeItems.find(i => i.id === id)
//   if (item == null) return null

//   return (
//     <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
//       <img
//         src={item.imgUrl}
//         style={{ width: "125px", height: "75px", objectFit: "cover" }}
//       />
//       <div className="me-auto">
//         <div>
//           {item.name}{" "}
//           {quantity > 1 && (
//             <span className="text-muted" style={{ fontSize: ".65rem" }}>
//               x{quantity}
//             </span>
//           )}
//         </div>
//         {/* <div className="text-muted" style={{ fontSize: ".75rem" }}>
//           {formatCurrency(item.price)}
//         </div>
//         </div>
//       <div> {formatCurrency(item.price * quantity)}</div> */}
//       </div>
//       <Button
//         variant="outline-danger"
//         size="sm"
//         onClick={() => removeFromCart(item.id)}
//       >
//         &times;
//       </Button>
//     </Stack>
//   )
// }

// import { useShoppingcart } from "../Context/Shoppingcartcontext"

// const Cart=()=>{
//     const {cart} =useShoppingcart()
//     console.log(cart.length);
    
//     return <div>
//         {cart.map((cart)=>{
//             return(
//                 <>
//                  <div className="w-[500px] mx-auto bg-slate-200  shadow-md rounded-lg overflow-hidden mt-5">
//     <div className="p-5">
//       <img
//         src={cart.image}
//         alt=""
//         className="w-96 ml-10 h-40 object-center rounded-lg"
//       />
//     </div>
//     <div className="px-5 py-2 ">
//       <h3 className="text-lg font-bold text-gray-800">{cart.title}</h3>
//       <h3 className="text-md font-medium text-gray-600">{cart.category}</h3>
//       <div className="flex items-center mb-2">
//         <h3 className="text-md font-medium text-gray-600">
//           {cart.rating ? cart.rating.rate : ''}
//         </h3>
//         <span className="text-sm font-light text-gray-500">
//           ({cart.rating ? cart.rating.count : ''})
//         </span>
//       </div>
//       <h4 className="text-lg font-bold text-gray-800">${cart.price}</h4>
//       <p className="text-sm font-light text-gray-600">{cart.description}</p>
     
//     </div>
//   </div>
                
//                 </>
//             )
//         })}
//     </div>
// }
// export default Cart