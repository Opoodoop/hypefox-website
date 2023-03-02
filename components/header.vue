<template>
    <div class="bg-gray-900 pb-2 sm:pb-2 lg:pb-2">
       <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header class="flex justify-between items-center py-4 md:py-8">
             <NuxtLink to="/" class="inline-flex items-center text-black-800 text-2xl text-white md:text-3xl font-bold gap-2.5" aria-label="logo">
             <img src="/img/icon.png" class="pt-1 h-[45px] w-[45px]"/>Hypefox Studios</NuxtLink>
             <nav class="hidden lg:flex gap-12">
                <NuxtLink active-class="!text-indigo-500" to="/" class="text-white hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"><Icon name="fa6-solid:house" class="mr-2 mb-1"/>Home</NuxtLink>
                <NuxtLink active-class="!text-indigo-500" to="/portfolio" class="text-white hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"><Icon name="fa6-solid:list-check" class="mr-2 mb-1"/>Portfolio</NuxtLink>
                <NuxtLink active-class="!text-indigo-500" to="/team" class="text-white hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"><Icon name="fa6-solid:people-group" class="mr-2 mb-1"/>Team</NuxtLink>
                <NuxtLink active-class="!text-indigo-500" to="/about" class="text-white hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"><Icon name="fa6-solid:briefcase" class="mr-2 mb-1"/>About</NuxtLink>
             </nav>
             <a href="mailto:contact@hypefoxstudios.com" class="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact us<Icon name="fa6-solid:comments" class="ml-2 mb-1"/></a>
             <button type="button" class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
               <Icon name="fa6-solid:bars"/>
               Menu
             </button>
          </header>
       </div>
    </div>
</template>