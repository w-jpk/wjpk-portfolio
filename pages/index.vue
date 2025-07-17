<template>
    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <HeroSection />

        <!-- About Section -->
        <AboutSection />

        <!-- Skills Section -->
        <SkillsSection />

        <!-- Experience Section -->
        <ExperienceSection />

        <!-- Projects Section -->
        <ProjectsSection />

        <!-- Contact Section -->
        <ContactSection />
    </main>
</template>

<script setup lang="ts">
// SEO
useHead({
    title: 'W-JPK - Frontend Developer Portfolio',
    meta: [
        { name: 'description', content: 'Frontend Developer Portfolio - HTML, CSS, JavaScript, TypeScript, Vue.js, Nuxt.js' },
        { name: 'keywords', content: 'frontend, developer, vue, nuxt, typescript, javascript' }
    ]
})
</script>