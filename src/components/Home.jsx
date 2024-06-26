import React from "react";

const Home = () => {
  return (
    <>
    <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Waviardh: We ride waves with friendship & courage.
</h1>
      <p class="mb-8 leading-relaxed">In the brotherhood of The Waviardh, we stand united as pillars of strength, bound by loyalty, and forged by shared experiences, where every member is a cornerstone in our journey of growth and solidarity.</p>
      <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore Us
      
    </button>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Friends_.jpg/1280px-Friends_.jpg"></img>
    </div>
  </div>
</section>
    </>
  );
};

export default Home;
