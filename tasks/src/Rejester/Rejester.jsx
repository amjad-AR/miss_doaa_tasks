import { useRegister } from "../Store/Store";

const Rejester = () => {
  const firstName = useRegister((state) => state.firstName);
  const lastName = useRegister((state) => state.lastName);
  const age = useRegister((state) => state.age);

  const setFirstName = useRegister((state) => state.setFirstName);
  const setLastName = useRegister((state) => state.setLastName);
  const setAge = useRegister((state) => state.setAge);

  const getFullName = useRegister((state) => state.getFullName);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Zustand Task
            </h1>
            <p className="text-blue-100 text-lg md:text-xl">
              Manage your personal information with Zustand state management
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Personal Information
            </h2>
          </div>

          {/* Form Content */}
          <div className="p-8 space-y-8">
            {/* First Name Input */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium placeholder-gray-400"
                  placeholder="Enter your first name"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Last Name Input */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium placeholder-gray-400"
                  placeholder="Enter your last name"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Age Input */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Age
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium placeholder-gray-400"
                  placeholder="Enter your age"
                  min="0"
                  max="120"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Display Full Name */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-100">
              <div className="text-center">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                  Full Name Display
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 bg-white/80 rounded-lg py-4 px-6 shadow-inner">
                  {getFullName() || (
                    <span className="text-gray-400 italic">
                      Your full name will appear here
                    </span>
                  )}
                </h3>
                {age && (
                  <p className="text-lg text-blue-600 font-medium mt-3">
                    Age: <span className="font-bold">{age}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-sm text-yellow-700">
                    <strong>Powered by Zustand:</strong> This form demonstrates
                    real-time state management. The full name updates instantly
                    as you type!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-blue-100 text-sm">
            Built with React + Zustand • Real-time State Management
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rejester;
