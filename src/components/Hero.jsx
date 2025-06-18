import React from "react";

const Hero = () => {
  return (
    <main className=" flex flex-col justify-between">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-400">
          Welcome to <span className="text-blue-600">Taskly</span>
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8">
          Your simple and efficient task manager to plan, track, and conquer
          your day.
        </p>
        <button className="bg-blue-600 text-white hover:bg-blue-500 font-semibold px-4 py-2 rounded-xl transition-all duration-300">
          Create Task
        </button>
      </section>

      {/* Features Section */}
      <section className="py-6 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div className="shadow-md p-6 rounded-lg border-red-950 border-2">
            <h3 className="text-xl font-bold mb-2 ">Fast Setup</h3>
            <p className="text-gray-400">
              Start adding tasks in seconds. No distractions.
            </p>
          </div>
          <div className="shadow-md p-6 rounded-lg border-green-950 border-2">
            <h3 className="text-xl font-bold mb-2 ">Stay Focused</h3>
            <p className="text-gray-400">
              Organize your tasks and focus on what matters.
            </p>
          </div>
          <div className="shadow-md p-6 rounded-lg border-blue-950 border-2">
            <h3 className="text-xl font-bold mb-2 ">Track Progress</h3>
            <p className="text-gray-400">
              Visualize what you've completed and what's next.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
