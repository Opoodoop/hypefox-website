<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>
<script setup lang="ts">
    const description = "Hypefox Studios entertains the world with amazing game servers, apps, and software. Providing valuable services to both businesses, projects, and consumers.";
    useServerSeoMeta({
        title: "Welcome to Hypefox Studios 👋🏻",
        ogTitle: "Innovative IT-solutions | Hypefox Studios",
        description: description,
        ogDescription: description,
        ogImage: "https://hypefoxstudios.com/img/logo.png",
        twitterCard: "summary_large_image",
        themeColor: "#6520cf"
    });
</script>