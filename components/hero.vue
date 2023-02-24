<template>
    <div class="bg-gray-900">
       <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section class="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
             <img src="/img/background.png" loading="lazy" class="w-full h-full object-cover object-center absolute inset-0"/>
             <div class="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>
             <div class="sm:max-w-4xl flex flex-col items-center relative p-4">
                <p class="text-gray-400 text-lg sm:text-xl text-center mb-4 md:mb-8">Our core values</p>
                <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">Innovative IT-solutions for businesses and projects</h1>
                <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                   <NuxtLink to="portfolio" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Portfolio<font-awesome-icon icon="home" class="ml-2"/></NuxtLink>
                   <NuxtLink href="about" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">About<font-awesome-icon icon="briefcase" class="ml-2"/></NuxtLink>
                </div>
             </div>
          </section>
       </div>
    </div>
</template>