import { useState, useEffect } from "react";

const Orders = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [foodRequest, setFoodRequest] = useState("");
  const [orders, setOrders] = useState([]);

  const orderStatuses = [
    "New Order",
    "Preparing",
    "Ready for Delivery",
    "Delivered",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prevOrders) =>
        prevOrders.map((order) => {
          if (order.status === "Delivered") return order;

          const currentIndex = orderStatuses.indexOf(order.status);
          const timeSinceUpdate = Date.now() - order.lastUpdated;
          const fiveMinutes = 5 * 60 * 1000; 

          if (
            timeSinceUpdate >= fiveMinutes &&
            currentIndex < orderStatuses.length - 1
          ) {
            return {
              ...order,
              status: orderStatuses[currentIndex + 1],
              lastUpdated: Date.now(),
            };
          }
          return order;
        })
      );
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const addOrder = () => {
    if (!orderNumber.trim() || !customerName.trim() || !foodRequest.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newOrder = {
      id: Date.now(),
      orderNumber,
      customerName,
      foodRequest,
      status: "New Order",
      lastUpdated: Date.now(),
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setOrderNumber("");
    setCustomerName("");
    setFoodRequest("");
  };

  const updateStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus, lastUpdated: Date.now() }
          : order
      )
    );
  };

  const deleteOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "New Order":
        return "bg-blue-100 text-blue-800";
      case "Preparing":
        return "bg-yellow-100 text-yellow-800";
      case "Ready for Delivery":
        return "bg-orange-100 text-orange-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Order Tracking System
          </h1>
          <p className="text-gray-600">Track and manage restaurant orders</p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Add New Order
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Order Number
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter order number"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Customer Name
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter customer name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Food Request
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="text"
                value={foodRequest}
                onChange={(e) => setFoodRequest(e.target.value)}
                placeholder="Enter food request"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            onClick={addOrder}
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
            Add Order
          </button>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">Order List</h2>
          </div>

          {orders.length === 0 ? (
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-gray-500 text-lg">No orders added yet</p>
              <p className="text-gray-400">
                Start by adding your first order above
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
                      Order Number
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Food Request
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order, index) => (
                    <tr
                      key={order.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.orderNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.customerName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.foodRequest}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                        {orderStatuses.map(
                          (status, idx) =>
                            orderStatuses.indexOf(order.status) < idx && (
                              <button
                                key={status}
                                onClick={() => updateStatus(order.id, status)}
                                className="text-blue-600 hover:text-blue-900 transition-colors text-xs font-medium"
                              >
                                {status}
                              </button>
                            )
                        )}
                        <button
                          onClick={() => deleteOrder(order.id)}
                          className="text-red-600 hover:text-red-900 transition-colors ml-2"
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
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Orders;
