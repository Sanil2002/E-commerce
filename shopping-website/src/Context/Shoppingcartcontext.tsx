// import { createContext, ReactNode, useContext, useState } from "react";
// // import { ShoppingCart } from "../Components/Shoppingcart";
// import  Singleproduct  from "../Pages/Singleproduct"
// import Cart from "../Components/Cart";

// type ShoppingcartproviderProps = {
//     children: ReactNode
// }

// type cartItem = {
//     id: number
//     quantity: number
// }

// type Shoppingcartcontext = {
//     openCart: () => void
//     closeCart: () => void
//     getItemQuantity: (id: number) => number
//     increaseCartQuantity: (id: number) => void
//     decreaseCartQuantity: (id: number) => void
//     removeFromCart: (id: number) => void
//     cartQuantity: number
//     cartItems: cartItem[]
//     isOpen:boolean;
// }

// const Shoppingcartcontext = createContext({} as 
// Shoppingcartcontext)

// export function useShoppingcart() {
//     return useContext(Shoppingcartcontext)
// }

// export function Shoppingcartprovider({children}:
//     ShoppingcartproviderProps) {
//         const [isOpen,setIsOpen] = useState(false)
//         const [cartItems,setcartItems] = useState<cartItem[]>([])

//         const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity,0)

//         const openCart = () => setIsOpen(true)
//         const closeCart = () => setIsOpen(false)
//         function getItemQuantity(id:number){
//             console.log(id);
            
//             return cartItems.find(item => item.id ===id)?.quantity || 0
//         }

//         const increaseCartQuantity = (id: number) => {
//             setcartItems(currItems => {
//               const existingItem = currItems.find(item => item.id === id);
          
//               if (!existingItem) {
//                 return [...currItems, { id, quantity: 1 }];
//               } else {
//                 return currItems.map(item => 
//                   item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//                 );
//               }
//             });
//           };
          

//         function decreaseCartQuantity(id:number){
//             setcartItems(currItems => {
//                 if(currItems.find(item => item.id === id)?.quantity === 1) {
//                     return currItems.filter(item => item.id !== id)
//                 } else {
//                     return currItems.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
//                 }
//             })

//         }

//         function removeFromCart(id:number){
//             setcartItems(currItems => {
//                 return currItems.filter(item => item.id !== id)
//             })
//         }



//     return ( <Shoppingcartcontext.Provider value={{isOpen,getItemQuantity, increaseCartQuantity, decreaseCartQuantity,removeFromCart, cartItems, openCart, cartQuantity,closeCart}}>
//         {children}
//         {isOpen && <Cart />}
//         {/* <ShoppingCart isOpen={isOpen} /> */}
//     </Shoppingcartcontext.Provider>
//     )

// }

// src/Context/Shoppingcartcontext.tsx

import { createContext, ReactNode, useContext, useState } from "react";
import Cart from "../Components/Cart";
import axios from "axios"; // Ensure axios is installed

type ShoppingcartproviderProps = {
    children: ReactNode
}

type Product = {
    id: number
    name: string
    price: number
    image: string
}

type cartItem = {
    id: number
    quantity: number
}

type Shoppingcartcontext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: (cartItem & Product)[]
    isOpen: boolean;
}

const Shoppingcartcontext = createContext({} as Shoppingcartcontext);

export function useShoppingcart() {
    return useContext(Shoppingcartcontext);
}

export function Shoppingcartprovider({ children }: ShoppingcartproviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<(cartItem & Product)[]>([]);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    async function fetchProductById(id: number): Promise<Product | null> {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching product:', error);
            return null;
        }
    }

    function increaseCartQuantity(id: number) {
        fetchProductById(id).then(product => {
            setCartItems(currItems => {
                const existingItem = currItems.find(item => item.id === id);
                if (existingItem == null && product) {
                    return [...currItems, { ...product, id, quantity: 1 }];
                } else {
                    return currItems.map(item => {
                        if (item.id === id) {
                            return { ...item, quantity: item.quantity + 1 };
                        } else {
                            return item;
                        }
                    });
                }
            });
        });
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => currItems.filter(item => item.id !== id));
    }

    return (
        <Shoppingcartcontext.Provider value={{ isOpen, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart }}>
            {children}
            <Cart />
        </Shoppingcartcontext.Provider>
    );
}


