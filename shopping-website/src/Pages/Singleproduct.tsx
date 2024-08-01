// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { useParams} from "react-router-dom";
// // import { useShoppingcart } from "../Context/Shoppingcartcontext";

// // // interface props{
// // //   id: number
// // //   name: string
// // //   price: number

// // // }

// // const Singleproduct=()=>{
// //     const [storeItems,setstoreItems]=useState({});
// //     const { id } = useParams();
// //     const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingcart()
// //     const quantity = getItemQuantity(id)
// //     //console.log(id)
// //     useEffect(() => {
// //         axios.get(`https://fakestoreapi.com/products/${id}`)
// //           .then(res => setstoreItems(res.data)
// //         )
          
// //           .catch(error => { alert('Cannot find the result: '+ error.message);
// //       });}, []);
// //       console.log('storeeeee',storeItems);
// //       // const handleAddToCart=()=>{
// //       //       const quantity = getItemQuantity(id)

// //       // }
// //     return <div className="h-screen w-full lg:h-1/2 lg:w-1/2 xl:h-2/3 xl:w-2/3 2xl:h-3/4 2xl:w-3/4 bg-light-white flex justify-center items-center">
// //        {/* <img src={storeItems.image} alt="" />
// //             <h3>{storeItems.title}</h3>
// //             <h4>{storeItems.price}</h4>
// //             <p>{storeItems.description}</p>
// //             <button className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300" >Add-to-cart</button> */}
// //            <div className="grid h-screen bg-light-white lg:grid-cols-3 justify-center">
// //   <div></div>
// //   <div className="group border-black h-150 w-150 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-black shadow-md">
// //     <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
// //       <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={storeItems.image} alt="product image" />
// //       <img className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src={storeItems.image} alt="product image" />
// //       <svg className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
// //       <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
// //     </a>
// //     <div className="mt-4 px-5 pb-5">
// //       <a href="#">
// //         <h5 className="text-xl tracking-tight text-white">{storeItems.title}</h5>
// //       </a>
// //       <div className="mt-2 mb-5 flex items-center justify-between">
// //         <p>
// //           <span className="text-3xl font-bold text-white">{storeItems.price}</span>
// //           <span className="text-sm text-white line-through">$699</span>
// //         </p>
// //       </div>
// //         <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-white">{storeItems.description}</p>
// //         {quantity === 0 ?
// //         (<button onClick={() => increaseCartQuantity(id)} className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
// //         <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
// //           <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
// //         </svg>
// //         Add to cart</button>):(<div className="d-flex text-white align-items-center flex-column"
// //          style={{gap: "5rem"}}>
// //           <div className="d-flex text-white align-items-center justify-content-center"
// //            style={{gap: "5rem"}}>
// //             <button onClick={() => increaseCartQuantity(id)}>+</button>
// //             <div>
// //             <span className="fs-3">{quantity}</span>In-cart
// //             </div>
// //             <button onClick={() => decreaseCartQuantity(id)}>-</button>
// //             </div><button onClick={() => removeFromCart(id)} className="text-white bg-red-700 size-27">Remove</button>
// //          </div>)
// //         }
// //     </div>
// //   </div>
// // </div>

// //     </div>
// // }
// // export default Singleproduct;


// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useShoppingcart } from "../Context/Shoppingcartcontext";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   title: string;
//   description: string;
// }

// const Singleproduct = () => {
//   const [storeItems, setStoreItems] = useState<Product | null>(null);
//   const { id } = useParams<{ id: string }>();
//   const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingcart();

//   const productId = Number(id);

//   useEffect(() => {
//     if (isNaN(productId)) {
//       console.error('Invalid product id:', id);
//       return;
//     }

//     axios.get(`https://fakestoreapi.com/products/${productId}`)
//       .then(res => {
//         setStoreItems(res.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product:', error);
//         alert('Cannot find the result: ' + error.message);
//       });
//   }, []);

//   if (!storeItems) {
//     return <div>Loading...</div>;
//   }

//   const quantity = getItemQuantity(productId);

//   return (
//     <div className="h-screen w-full lg:h-1/2 lg:w-1/2 xl:h-2/3 xl:w-2/3 2xl:h-3/4 2xl:w-3/4 bg-light-white flex justify-center items-center">
//       <div className="grid h-screen bg-light-white lg:grid-cols-3 justify-center">
//         <div></div>
//         <div className="group border-black h-150 w-150 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-black shadow-md">
//           <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
//             <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={storeItems.image} alt="product image" />
//             <img className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src={storeItems.image} alt="product image" />
//             <svg className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
//             <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
//           </a>
//           <div className="mt-4 px-5 pb-5">
//             <a href="#">
//               <h5 className="text-xl tracking-tight text-white">{storeItems.title}</h5>
//             </a>
//             <div className="mt-2 mb-5 flex items-center justify-between">
//               <p>
//                 <span className="text-3xl font-bold text-white">${storeItems.price}</span>
//                 <span className="text-sm text-white line-through">$699</span>
//               </p>
//             </div>
//             <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-white">{storeItems.description}</p>
//             {quantity === 0 ? (
//               <button 
//                 onClick={() => increaseCartQuantity(productId)} 
//                 className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//                 Add to cart
//               </button>
//             ) : (
//               <div className="flex flex-col items-center text-white" style={{ gap: "5rem" }}>
//                 <div className="flex items-center justify-center" style={{ gap: "5rem" }}>
//                   <button 
//                     onClick={() => increaseCartQuantity(productId)} 
//                     className="text-white bg-green-700 px-2"
//                   >
//                     +
//                   </button>
//                   <div>
//                     <span className="fs-3">{quantity}</span> In cart
//                   </div>
//                   <button 
//                     onClick={() => decreaseCartQuantity(productId)} 
//                     className="text-white bg-yellow-700 px-2"
//                   >
//                     -
//                   </button>
//                 </div>
//                 <button 
//                   onClick={() => removeFromCart(productId)} 
//                   className="text-white bg-red-700 px-3 py-1"
//                 >
//                   Remove
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Singleproduct;

// src/Pages/Singleproduct.tsx




// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useShoppingcart } from "../Context/Shoppingcartcontext";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   title: string;
//   description: string;
// }

// const Singleproduct = () => {
//   const [storeItems, setStoreItems] = useState<Product | null>(null);
//   const { id } = useParams<{ id: string }>();
//   const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingcart();
  
//   const productId = Number(id);

//   useEffect(() => {
//     if (isNaN(productId)) {
//       console.error('Invalid product id:', id);
//       return;
//     }

//     axios.get(`https://fakestoreapi.com/products/${productId}`)
//       .then(res => {
//         setStoreItems(res.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product:', error);
//         alert('Cannot find the result: ' + error.message);
//       });
//   }, [productId]);

//   if (!storeItems) {
//     return <div>Loading...</div>;
//   }

//   const quantity = getItemQuantity(productId);

//   return (
//     <div className="h-screen w-full lg:h-1/2 lg:w-1/2 xl:h-2/3 xl:w-2/3 2xl:h-3/4 2xl:w-3/4 bg-light-white flex justify-center items-center">
//       <div className="grid h-screen bg-light-white lg:grid-cols-3 justify-center">
//         <div></div>
//         <div className="group border-black h-150 w-150 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-black shadow-md">
//           <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
//             <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={storeItems.image} alt="product image" />
//             <img className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src={storeItems.image} alt="product image" />
//             <svg className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
//             <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
//           </a>
//           <div className="mt-4 px-5 pb-5">
//             <a href="#">
//               <h5 className="text-xl tracking-tight text-white">{storeItems.title}</h5>
//             </a>
//             <div className="mt-2 mb-5 flex items-center justify-between">
//               <p>
//                 <span className="text-3xl font-bold text-white">${storeItems.price}</span>
//                 <span className="text-sm text-white line-through">$699</span>
//               </p>
//             </div>
//             <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-white">{storeItems.description}</p>
//             {quantity === 0 ? (
//               <button 
//                 onClick={() => increaseCartQuantity(productId, storeItems.name, storeItems.image)} 
//                 className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//                 Add to cart
//               </button>
//             ) : (
//               <div className="flex flex-col items-center text-white" style={{ gap: "5rem" }}>
//                 <div className="flex items-center justify-center" style={{ gap: "5rem" }}>
//                   <button 
//                     onClick={() => increaseCartQuantity(productId, storeItems.name, storeItems.image)} 
//                     className="text-white bg-green-700 px-2"
//                   >
//                     +
//                   </button>
//                   <div>
//                     <span className="fs-3">{quantity}</span> In cart
//                   </div>
//                   <button 
//                     onClick={() => decreaseCartQuantity(productId)} 
//                     className="text-white bg-yellow-700 px-2"
//                   >
//                     -
//                   </button>
//                 </div>
//                 <button 
//                   onClick={() => removeFromCart(productId)} 
//                   className="text-white bg-red-700 px-3 py-1"
//                 >
//                   Remove
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Singleproduct;import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useShoppingcart } from '../Context/Shoppingcartcontext';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect,useState } from "react";
import UpdateModal from "../Components/Update-Modal";

interface ProductDetails {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating?: {
    rate: number;
    count: number;
  };
}

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingcart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(error => {
        console.error('Error fetching product:', error);
        alert('Cannot find the result: ' + error.message);
      });
  }, [id]);

  const handleUpdateProduct = (updatedProduct: ProductDetails) => {
    setProduct(updatedProduct);
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    if (product) {
      increaseCartQuantity(product.id);
    }
  };

  const handleRemoveProduct = () => {
    if (product) {
      axios.delete(`https://fakestoreapi.com/products/${product.id}`)
        .then(() => {
          alert("Product has been successfully removed");
          console.log(product)
          navigate('/Update');
        })
        .catch(error => {
          console.error('Error removing product:', error);
          alert('Cannot remove the product: ' + error.message);
        });
    }
  };

  const addReview = () => {
    const newReview = { rating, comment };
    setReviews([...reviews, newReview]);
    setRating(0);
    setComment("");
  };

  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [reviews, setReviews] = useState<{ rating: number; comment: string }[]>([]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const isUserAuthorized = user?.email === 'sanilm4637@gmail.com';

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <div className="flex">
        <img className="w-1/2 rounded-md" src={product.image} alt={product.title} />
        <div className="ml-6 w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl font-semibold text-gray-700 mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            {product.rating ? (
              <>
                <span className="text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg key={i} className="w-5 h-5" fill={i < product.rating.rate ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
                <span className="ml-2 text-gray-600">{product.rating.rate} ({product.rating.count} reviews)</span>
              </>
            ) : (
              <span className="text-gray-600">No ratings available</span>
            )}
          </div>
          <div className="mb-4">
            <button onClick={decreaseCartQuantity} className="px-4 py-2 bg-gray-300 rounded-l">-</button>
            <span className="px-4 py-2 border-t border-b">{getItemQuantity(product.id)}</span>
            <button onClick={increaseCartQuantity} className="px-4 py-2 bg-gray-300 rounded-r">+</button>
          </div>
          <div className="flex flex-row gap-14">
            <button onClick={handleAddToCart} className="bg-yellow-500 text-white px-4 py-2  hover:bg-black hover:-translate-y-2 duration-300 rounded">Add to Cart</button>
            {isUserAuthorized && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 text-white px-4 py-2  hover:bg-black hover:-translate-y-2 duration-300 rounded"
              >
                Update
              </button>
            )}
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-2">Reviews</h2>
            <ul className="mb-4">
              {reviews.map((review, index) => (
                <li key={index} className="border-b border-gray-300 py-2">
                  <div>Rating: {"⭐".repeat(review.rating)}</div>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
            <div className="mb-4">
              <label className="block mb-2">Rating:</label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="border rounded px-2 py-1 w-full"
              >
                <option value="0">Select Rating</option>
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>
                    {star} Star{star > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Comment:</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="border rounded w-full px-2 py-1"
                rows={4}
              />
            </div>
            <div className="flex gap-8">
              <button onClick={addReview} className="bg-yellow-500 hover:-translate-y-2 duration-300 hover:bg-black text-white px-4 py-2 rounded">
                Submit Review
              </button>
              {isUserAuthorized && (
                <button onClick={handleRemoveProduct} className="bg-red-700 hover:-translate-y-2 duration-300 drop-shadow-sm text-white px-4 py-2 shadow-lg rounded hover:shadow-slate-700">
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && product && (
        <UpdateModal
          product={product}
          onClose={() => setIsModalOpen(false)}
          onUpdateProduct={handleUpdateProduct}
        />
      )}
    </div>
  );
};

export default SingleProduct;





