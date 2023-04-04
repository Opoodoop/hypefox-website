<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>
<script setup lang="ts">
    const description = "Hypefox Studios entertains the world with amazing game servers, apps, and software. Providing valuable services to both businesses, projects, and consumers.";
    useServerSeoMeta({
        title: "Hypefox Studios ✨",
        author: "Hypefox Studios LTD",
        ogTitle: "Hypefox Studios - Innovative IT-solutions, exciting experiences.",
        description: description,
        ogDescription: description,
        ogImage: "https://www.hypefoxstudios.com/img/logo.png",
        twitterCard: "summary_large_image",
        themeColor: "#6211e6"
    });
</script>
