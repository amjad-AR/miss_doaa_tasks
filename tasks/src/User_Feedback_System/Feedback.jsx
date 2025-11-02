import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const addFeedback = () => {
    if (!feedback.trim()) {
      alert("Please enter feedback");
      return;
    }

    const newFeedback = {
      id: Date.now(),
      text: feedback,
      date: new Date().toLocaleDateString(),
    };

    setFeedbacks((prev) => [...prev, newFeedback]);
    setFeedback("");
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    setFeedbacks((prev) =>
      prev.map((item) =>
        item.id === editingId ? { ...item, text: editText } : item
      )
    );
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const deleteFeedback = (id) => {
    setFeedbacks((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-green-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            User Feedback System
          </h1>
          <p className="text-gray-600">Share and manage your feedback</p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Add New Feedback
          </h2>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Your Feedback
            </label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all h-32 resize-none"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback here..."
            />
          </div>

          <button
            type="button"
            className="w-full md:w-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            onClick={addFeedback}
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
            Add Feedback
          </button>
        </div>

        {/* Feedback List */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">
              Feedback List
            </h2>
          </div>

          {feedbacks.length === 0 ? (
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
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <p className="text-gray-500 text-lg">No feedback added yet</p>
              <p className="text-gray-400">
                Start by adding your first feedback above
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {feedbacks.map((item, index) => (
                <div
                  key={item.id}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-gray-500">
                      #{index + 1} • {item.date}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => startEditing(item.id, item.text)}
                        className="text-blue-600 hover:text-blue-900 transition-colors text-sm font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteFeedback(item.id)}
                        className="text-red-600 hover:text-red-900 transition-colors text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {editingId === item.id ? (
                    <div className="space-y-3">
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        rows="3"
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={saveEdit}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
