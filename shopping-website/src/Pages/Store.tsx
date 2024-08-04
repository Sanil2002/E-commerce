import React, { useState, useEffect } from "react";
import axios from 'axios';
import Product from "./Products"

interface StoreItem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Store: React.FC = () => {
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);
  const [sort, setSort] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>('');
  const [filteredData, setFilteredData] = useState<StoreItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setStoreItems(res.data);
        setFilteredData(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        alert('Cannot find the result: ' + error.message);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortSelected: string = e.target.value;
    setSort(sortSelected);
  }

  const handleFilteredChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setProductCategory(selectedCategory);
    console.log(storeItems);
    
    console.log(selectedCategory);
    
    if(selectedCategory==="all"){
      setFilteredData(storeItems)
    }else{ 
      setFilteredData(storeItems.filter(item => item.category === selectedCategory));
    }
  }

  if (loading) {
    return (
    <div  className="min-w-screen min-h-screen flex items-center justify-center">
    <div className=" flex justify-center items-center ">
      <div className="absolute animate-spin rounded-full h-40 w-40 border-t-4 border-b-4 border-purple-500"></div>
      <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"  className="rounded-full h-28 w-28" />
      </div>
      </div>
      // Loading...</div>;
    )
  }

  return (
    <div>
      <div className="relative gap-5 flex justify-center my-6">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="text-xl w-full max-w-lg pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="Search..."
        />
        {/* <svg className="absolute top-1/2 left-12 -translate-y-1/2 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg> */}
      </div>
      <div>
      <div className="text-center">
      <h1 className="p-4 justify-center bg-gradient-to-r from-black via-yellow-300 to-black bg-clip-text text-xl font-extrabold text-transparent sm:text-5xl">Y Mart: The Amazing Shopping Experience</h1>
      </div>
        <div className="flex justify-center mb-4 gap-x-4">
          <div className="w-full md:w-1/2 xl:w-1/3">
            <select onChange={handleSortChange} className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300">
              <option value="random">Sort By</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3">
            <select value={productCategory} onChange={handleFilteredChange} className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300">
              <option value="all">Category</option>
              <option value="men's clothing">Men</option>
              <option value="women's clothing">Women</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelry</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 px-3">
          {filteredData.filter(item => {
            return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search);
          }).sort((a, b) => {
            if (sort === 'asc') {
              return a.price - b.price;
            } else if (sort === 'desc') {
              return b.price - a.price;
            } else {
              return 0;
            }
          }).map((datas: StoreItem) => {
            return (
              <Product key={datas.id} datas={datas} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Store;




