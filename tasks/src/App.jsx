import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./index.css";
import Budget from "./Family_Budget/Budget.jsx";
import Products from "./products/Products.jsx";
import Rejester from "./Rejester/Rejester.jsx";
import Orders from "./Order_Tracking_System/Orders.jsx";
import Feedback from "./User_Feedback_System/Feedback.jsx";
import Fitness from "./Fitness_Tracker/Fitness.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Rejester />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/fitness" element={<Fitness />} />
        </Routes>
      </div>
    </Router>
  );
}

// صفحة رئيسية بسيطة
function HomePage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Task Management Suite
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            مجموعة متكاملة من التطبيقات لإدارة المهام والمشاريع اليومية
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {[
              { name: "Budget", desc: "إدارة الميزانية", path: "/budget" },
              { name: "Products", desc: "إدارة المنتجات", path: "/products" },
              { name: "Register", desc: "التسجيل", path: "/register" },
              { name: "Orders", desc: "تتبع الطلبات", path: "/orders" },
              { name: "Feedback", desc: "نظام التقييم", path: "/feedback" },
              { name: "Fitness", desc: "تتبع اللياقة", path: "/fitness" },
            ].map((app) => (
              <a
                key={app.name}
                href={app.path}
                className="bg-gray-800 text-white p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-lg font-semibold mb-2">{app.name}</div>
                <div className="text-gray-300 text-sm">{app.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
