import { useState } from "react";

const Products = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]);

  const handleProductChange = (e) => {
    const value = e.target.value;
    setProduct(value);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(Number(value));
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(Number(value));
  };

  const addProduct = () => {
    if (
      price <= 0 ||
      quantity <= 0 ||
      /[0-9]/.test(product) ||
      product.trim() === ""
    ) {
      alert("Please enter valid product details");
      setProduct("");
      setPrice("");
      setQuantity("");
      return;
    }

    setProducts((prevProducts) => [
      ...prevProducts,
      {
        key: prevProducts.length + 1,
        product,
        price,
        quantity,
      },
    ]);

    setProduct("");
    setPrice("");
    setQuantity("");
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Product Management
          </h1>
          <p className="text-gray-600">Add and manage your products easily</p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Add New Product
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Product Name
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="text"
                value={product}
                onChange={handleProductChange}
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Price ($)
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="number"
                value={price}
                placeholder="0.00"
                onChange={handlePriceChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Quantity
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="number"
                value={quantity}
                placeholder="0"
                onChange={handleQuantityChange}
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            onClick={addProduct}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add Product
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">
              Product List
            </h2>
          </div>

          {products.length === 0 ? (
            <div className="p-12 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <p className="text-gray-500 text-lg">No products added yet</p>
              <p className="text-gray-400">
                Start by adding your first product above
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.product}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => deleteProduct(index)}
                          className="text-red-600 hover:text-red-900 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-right text-sm font-medium text-gray-900"
                    >
                      Grand Total:
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-700">
                      $
                      {products
                        .reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
