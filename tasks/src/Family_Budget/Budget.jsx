import { useState } from "react";

const Budget = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [budget, setBudget] = useState([]);

  const handleIncomeChange = (e) => {
    const value = e.target.value;
    setIncome(value);
  };

  const handleExpensesChange = (e) => {
    const value = e.target.value;
    setExpenses(value);
  };

  const calculateBudget = () => {
    const incomeNum = Number(income);
    const expensesNum = Number(expenses);
    const calculatedBudget = incomeNum - expensesNum;

    if (!incomeNum || !expensesNum) {
      alert("Please enter both income and expenses");
      return;
    }

    if (expensesNum > incomeNum) {
      alert("Expenses cannot be greater than Income");
      return;
    }

    setBudget((prevBudget) => [
      ...prevBudget,
      {
        key: prevBudget.length + 1,
        income: incomeNum,
        expenses: expensesNum,
        budget: calculatedBudget,
      },
    ]);

    setIncome("");
    setExpenses("");
  };

  const deleteBudget = (index) => {
    setBudget(budget.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setBudget([]);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Budget Calculator
          </h1>
          <p className="text-gray-600">
            Track your income and expenses efficiently
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Calculate Budget
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Income ($)
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                type="number"
                value={income}
                onChange={handleIncomeChange}
                placeholder="Enter your income"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Expenses ($)
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                type="number"
                value={expenses}
                onChange={handleExpensesChange}
                placeholder="Enter your expenses"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="button"
              className="flex-1 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              onClick={calculateBudget}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              Calculate Budget
            </button>

            {budget.length > 0 && (
              <button
                type="button"
                className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                onClick={clearAll}
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
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Budget Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Budget History
            </h2>
            {budget.length > 0 && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {budget.length} calculation{budget.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          {budget.length === 0 ? (
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
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <p className="text-gray-500 text-lg">
                No budget calculations yet
              </p>
              <p className="text-gray-400">
                Enter your income and expenses to get started
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
                      Income
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Expenses
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Budget
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
                  {budget.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                        ${item.income.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                        ${item.expenses.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <span
                          className={`${
                            item.budget >= 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          ${item.budget.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.budget >= 0
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.budget >= 0 ? "Surplus" : "Deficit"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => deleteBudget(index)}
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
                      colSpan="2"
                      className="px-6 py-4 text-right text-sm font-medium text-gray-900"
                    >
                      Total Income:
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-green-700">
                      $
                      {budget
                        .reduce((total, item) => total + item.income, 0)
                        .toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                      Total Expenses:
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-red-700">
                      $
                      {budget
                        .reduce((total, item) => total + item.expenses, 0)
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

export default Budget;
