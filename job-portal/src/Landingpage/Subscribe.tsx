const Subscribe = () => {
  return (
    <div className="mt-20 mb-20 mx-4 md:mx-20 py-10 px-6 bg-mine-shaft-900 rounded-2xl shadow-xl text-center flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-mine-shaft-100 mb-4">
        Never Want to <span className="text-bright-sun-400">Miss Any Jobs?</span>
      </h2>

      {/* Subheading */}
      <p className="text-base md:text-lg text-mine-shaft-300 mb-8 max-w-xl">
        Stay updated with the latest job opportunities delivered directly to your inbox.
      </p>

      {/* Subscription Form */}
      <form className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center items-center">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="px-6 py-3 w-full sm:w-3/4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-bright-sun-400 text-sm"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-bright-sun-400 hover:bg-yellow-400 transition duration-300 text-white font-semibold rounded-full text-sm"
        >
          Subscribe
        </button>
      </form>

      {/* Optional Note */}
      <p className="text-xs text-gray-400 mt-5">
        We respect your privacy. No spam, ever.
      </p>
    </div>
  );
};

export default Subscribe;
