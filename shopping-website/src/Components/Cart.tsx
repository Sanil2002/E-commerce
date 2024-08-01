import { useShoppingcart } from '../Context/Shoppingcartcontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, closeCart, removeFromCart, increaseCartQuantity, decreaseCartQuantity, cartQuantity, isOpen } = useShoppingcart();
  const navigate = useNavigate();
  if (!isOpen) {
    return null; // Don't render the Cart component if it is not open
  }

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
   };

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-3/4 lg:w-1/4 bg-yellow-50 text-black z-50 p-6 border-y-black overflow-y-auto shadow-lg">
      <button
        onClick={closeCart}
        className="absolute top-4 right-4 text-3xl text-red-600 hover:text-red-800"
      >
        &times;
      </button>
      <h2 className="text-3xl font-bold mb-6 text-center justify-center mt-10">Cart ({cartQuantity})</h2>
      <div>
        {cartItems.length === 0 ? (
          <p className="text-5xl font-serif text-black text-center">Your cart is empty.</p>
        ) : (
          <ul className="space-y-6">
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center space-x-6 p-4 border-b border-gray-300">
                <img src={item.image} alt={item.name} className="w-32 h-32 rounded shadow-sm" />
                <div className="flex-1">
                  <span className="block font-semibold text-lg">{item.name}</span>
                  <span className="block text-2xl text-gray-700 font-bold">${item.price.toFixed(2)}</span>
                  <div className="flex items-center mt-4 space-x-4">
                    <button
                      onClick={() => decreaseCartQuantity(item.id)}
                      className="bg-yellow-300 hover:bg-yellow-300 text-black px-4 font-bold py-2 rounded shadow"
                    >
                      -
                    </button>
                    <span className="mx-2 text-2xl font-bold">{item.quantity}</span>
                    <button
                      onClick={() => increaseCartQuantity(item.id)}
                      className="bg-yellow-300 hover:bg-yellow-300 text-black px-4 py-2 font-bold rounded shadow"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-black border-yellow-300 font-medium px-4 py-2 rounded shadow ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
          <button
            onClick={handleCheckout}
            className="mt-6 bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
