import { useState, useEffect } from "react";

const Fitness = () => {
  const [activityType, setActivityType] = useState("");
  const [time, setTime] = useState("");
  const [steps, setSteps] = useState("");
  const [activities, setActivities] = useState([]);
  const [dailyGoal] = useState(10000);
  const [goalReached, setGoalReached] = useState(false);

  const activityTypes = [
    "Walking",
    "Running",
    "Cycling",
    "Swimming",
    "Gym",
    "Other",
  ];

  useEffect(() => {
    const totalSteps = activities.reduce(
      (sum, activity) => sum + activity.steps,
      0
    );
    if (totalSteps >= dailyGoal && !goalReached) {
      setGoalReached(true);
      alert(
        "🎉 Congratulations! You've reached your daily goal of 10,000 steps!"
      );
    } else if (totalSteps < dailyGoal && goalReached) {
      setGoalReached(false);
    }
  }, [activities, dailyGoal, goalReached]);

  const addActivity = () => {
    if (!activityType || !time || !steps || steps <= 0) {
      alert("Please fill all fields with valid values");
      return;
    }

    const newActivity = {
      id: Date.now(),
      type: activityType,
      time: parseInt(time),
      steps: parseInt(steps),
      date: new Date().toLocaleDateString(),
      timestamp: new Date().toLocaleTimeString(),
    };

    setActivities((prev) => [...prev, newActivity]);
    setActivityType("");
    setTime("");
    setSteps("");
  };

  const deleteActivity = (id) => {
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
  };

  const totalSteps = activities.reduce(
    (sum, activity) => sum + activity.steps,
    0
  );
  const totalTime = activities.reduce(
    (sum, activity) => sum + activity.time,
    0
  );
  const progressPercentage = Math.min((totalSteps / dailyGoal) * 100, 100);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Fitness Tracker
          </h1>
          <p className="text-gray-600">Track your daily physical activities</p>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Daily Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {totalSteps.toLocaleString()}
              </div>
              <div className="text-gray-600">Total Steps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {totalTime} min
              </div>
              <div className="text-gray-600">Total Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {activities.length}
              </div>
              <div className="text-gray-600">Activities</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Daily Goal: {dailyGoal.toLocaleString()} steps</span>
              <span>{progressPercentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full transition-all duration-500 ${
                  goalReached ? "bg-green-500" : "bg-purple-500"
                }`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {goalReached && (
            <div className="text-center p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              🎉 Congratulations! You've reached your daily goal!
            </div>
          )}
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Log New Activity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Activity Type
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                value={activityType}
                onChange={(e) => setActivityType(e.target.value)}
              >
                <option value="">Select activity</option>
                {activityTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Time (minutes)
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter time in minutes"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Number of Steps
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                type="number"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                placeholder="Enter number of steps"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full md:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            onClick={addActivity}
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
            Add Activity
          </button>
        </div>

        {/* Activities List */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">
              Activity History
            </h2>
          </div>

          {activities.length === 0 ? (
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <p className="text-gray-500 text-lg">No activities logged yet</p>
              <p className="text-gray-400">
                Start by logging your first activity above
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
                      Activity Type
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time (min)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Steps
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {activities.map((activity, index) => (
                    <tr
                      key={activity.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {activity.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {activity.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {activity.steps.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {activity.date} {activity.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => deleteActivity(activity.id)}
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
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Fitness;
