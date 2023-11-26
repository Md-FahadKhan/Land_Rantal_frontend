const Navbar = () => {
  return (
    <div class="bg-white text-green-700 p-8 text-lg">
      <div class="container mx-auto flex items-center justify-center">
        <div class="mr-6 text-center flex ml-10">
          <h4 class="text-xl font-bold">Logo</h4>
          <h4 class="text-xl font-bold">Krishoker Bondu</h4>
        </div>
        <div class="flex-grow">
          <ul class="flex justify-center font-semibold">
            <li class="mr-4">Home</li>
            <li class="mr-4">About</li>
            <li class="mr-4">Products</li>
            <li class="mr-4">Shop</li>
            <li class="mr-4">Service</li>
            <li class="mr-4">News</li>
          </ul>
        </div>
        <div class="text-center flex mr-10">
          <input
            type="text"
            placeholder="Search here"
            className="text-red border border-solid border-green-600 rounded-full mr-4 text-center"
          />
          {/* <h4 class="mr-4">Searchbar</h4> */}
          <h4>Sign Up</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
