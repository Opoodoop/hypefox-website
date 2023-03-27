<template>
    <div class="bg-gray-900">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div>
                <h2 class="text-white text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Meet our team</h2>
                <p class="max-w-screen-md text-gray-400 md:text-lg text-center mx-auto">Our talented team members are the driving force behind our success. From creative designers to technical developers, our global team brings diverse perspectives and expertise to our company. Get to know the people behind our company and learn about their stories, goals, and aspirations.</p>
            </div>
            <div v-for="(department, index) in team" :key="index">
                <h2 class="text-white text-2xl lg:text-3xl font-bold text-center mt-10 mt:mb-16 mb-4 md:mb-6">{{ department.name }}</h2>
                <div class="flex flex-wrap justify-center overflow-x-auto gap-x-8 gap-y-12">
                    <div v-for="(member, index) in department.members" :key="index">
                        <div class="bg-gray-800 pb-5 rounded-2xl items-center justify-center text-center">
                            <div class="overflow-hidden rounded-lg mb-2 sm:mb-4">
                                <img :src="`/img/${member.image}.png`" class="w-[400px] h-[400px] object-center" />
                            </div>
                            <div>
                                <div class="text-indigo-500 md:text-lg font-bold">
                                    <div class="flex items-center text-center justify-center gap-x-2 lg:gap-x-2"><img :src="`/img/${member.country}.png`" class="h-[20px] w-[30px]" /> {{ member.name }}.</div>
                                </div>
                                <p class="text-gray-500 text-sm md:text-base">{{ member.nickname }}</p>
                                <p class="text-gray-400 text-sm md:text-base mb-2">{{ member.title }}</p>
                                <div class="flex items-center justify-center">
                                    <div class="flex gap-4">
                                        <div v-for="(social, index) in member.socials" :key="index">
                                            <a :href="social.url" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                                                <Icon :name="`fa6-brands:${social.name}`" class="h-5 w-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const team = [{
            "name": "Board members",
            "members": [{
                    "name": "Emilio P",
                    "nickname": "ItzExotical",
                    "title": "Founder / Owner",
                    "image": "emilio",
                    "country": "sweden",
                    "socials": [{
                            "name": "github",
                            "url": "https://github.com/ItzExotical"
                        },
                        {
                            "name": "linkedin",
                            "url": "https://www.linkedin.com/in/emilio-persson-a4989b235"
                        }
                    ]
                },
                {
                    "name": "Liam J",
                    "nickname": "Kenneth Sköld",
                    "title": "Co-founder / CMO",
                    "image": "liam",
                    "country": "sweden",
                    "socials": [{
                            "name": "github",
                            "url": "https://github.com/LiamRJ",
                        },
                        {
                            "name": "linkedin",
                            "url": "https://www.linkedin.com/in/liam-runström-jardbring-324218241"
                        }
                    ]
                    },
                  {
                    "name": "Lazar S",
                    "nickname": "ExoticalCat",
                    "title": "Owner / CFO",
                    "image": "lazar",
                    "country": "romania",
                    "socials": [{
                        "name": "github",
                        "url": "https://github.com/devil38"
                    }
                  ]
                }
            ]
        },
                }]
            }]
        }
    ];
</script>
