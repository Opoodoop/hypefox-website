<template>
   <div class="bg-gray-900">
       <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
           <section class="min-h-64 md:min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-8 md:py-16 xl:py-48">
               <video autoplay muted loop class="w-full h-full object-cover object-center absolute">
                   <source src="/vid/intro.mp4" type="video/mp4">
               </video>
               <div class="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>
               <div class="sm:max-w-4xl flex flex-col items-center relative p-4">
                   <p class="text-gray-400 text-base sm:text-lg text-center mb-2 md:mb-4">Our core values</p>
                   <h1 class="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-8">Innovative IT-solutions for businesses and projects</h1>
                   <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2">
                       <NuxtLink to="/portfolio" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-xs sm:text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2.5">Portfolio</NuxtLink>
                       <NuxtLink to="/about" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-xs sm:text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-2.5">About</NuxtLink>
                   </div>
               </div>
           </section>
       </div>
   </div>
</template>