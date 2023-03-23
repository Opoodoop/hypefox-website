<template>
    <div class="bg-gray-900 pt-2 sm:pt-2 lg:pt-2">
        <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
                <div class="col-span-full lg:col-span-2">
                    <div class="lg:-mt-2 mb-4">
                        <NuxtLink to="/" class="inline-flex items-center text-gray-100 text-xl md:text-2xl font-bold gap-2.5" aria-label="logo">
                            <img src="/img/icon.png" class="pt-1 h-[35px] w-[60px]" />Hypefox Studios
                        </NuxtLink>
                    </div>
                    <p class="text-gray-400 sm:pr-8 mb-6">We entertain the world with amazing game servers, apps, and software. Providing valuable services to both businesses, projects, and consumers.</p>
                    <div class="flex gap-4">
                        <a href="https://www.instagram.com/hypefoxstudios" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                            <Icon name="fa6-brands:instagram" class="h-5 w-5 mb-2" />
                        </a>
                        <a href="https://twitter.com/officialhypefox" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                            <Icon name="fa6-brands:twitter" class="h-5 w-5 mb-2" />
                        </a>
                         <a href="https://www.tiktok.com/@hypefoxstudios" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                            <Icon name="fa6-brands:tiktok" class="h-5 w-5 mb-2" />
                        </a>
                         <a href="https://www.facebook.com/hypefoxstudios" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                            <Icon name="fa6-brands:facebook" class="h-5 w-5 mb-2" />
                        </a>
                        <a href="https://linkedin.com/company/officialhypefox" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                            <Icon name="fa6-brands:linkedin" class="h-5 w-5 mb-2" />
                        </a>
                        <a href="https://github.com/officialhypefox" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                            <Icon name="fa6-brands:github" class="h-5 w-5 mb-2" />
                        </a>
                    </div>
                </div>
                <div>
                    <div class="text-gray-100 font-bold tracking-widest uppercase mb-4">Company</div>
                    <nav class="flex flex-col gap-4">
                        <div>
                            <NuxtLink to="/portfolio" class="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Portfolio</NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/about" class="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">About</NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/team" class="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Team</NuxtLink>
                        </div>
                    </nav>
                </div>
                <div>
                    <div class="text-gray-100 font-bold tracking-widest uppercase mb-4">Projects</div>
                    <nav class="flex flex-col gap-4">
                        <div>
                            <a href="https://ironsightrp.net" class="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Ironsight RP</a>
                        </div>
                        <div>
                            <a class="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">SkyShade</a>
                        </div>
                    </nav>
                </div>
                <div>
                    <div class="text-gray-100 font-bold tracking-widest uppercase mb-4">Products</div>
                    <nav class="flex flex-col gap-4">
                        <div>
                            <a class="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Hypefox ID</a>
                        </div>
                        <div>
                            <a class="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Fiveport</a>
                        </div>
                    </nav>
                </div>
                <div>
                    <div class="text-gray-100 font-bold tracking-widest uppercase mb-4">Solutions</div>
                    <nav class="flex flex-col gap-4">
                        <div>
                            <a href="https://tridentnodes.com" class="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">TridentNodes</a>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="flex flex-col gap-y-2 items-center justify-center">
                <p class="text-gray-400 text-sm text-center border-t border-gray-800 pt-8">
                    © {{ year }} <b>Hypefox Studios LTD</b> (<b>14423502</b>). Registered in <b>England and Wales</b>. Licensed under <b>GNU GPL v2</b>.
                </p>
                <div class="flex items-center justify-center pb-8">
                    <p class="text-gray-100 text-xl md:text-xl font-bold">Powered by</p>
                    <a href="https://nuxt.com" class="ml-2">
                        <img src="/img/nuxt.png" class="align-middle h-[20px] w-[90px]">
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>
<script setup lang="ts">
    const year = new Date().getFullYear();
</script>
