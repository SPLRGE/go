<script setup lang="ts">
useSeoMeta({
    title: 'Home'
})
</script>

<template>
    <div>
        <ULandingHero
title="✨ Link less, share more" description="A simple, fast, and secure way to share links with your community."
            :links="[{ label: 'Start now', icon: 'i-heroicons-bolt', color: 'primary', variant: 'solid', size: 'xl', to: '/auth/github', external: true }]"
            class="bg-grid h-screen">
            <template #headline>
                <UButton
color="primary" to="https://github.com/splrge/go" label="Open in Github"
                    trailing-icon="i-heroicons-arrow-top-right-on-square-20-solid" size="xs" class="rounded-full"
                    variant="outline" />
            </template>
        </ULandingHero>
    </div>
</template>

<style scoped>
.bg-grid {
    background-size: 40px 40px;
    background-image: radial-gradient(circle, #00000025 1px, rgba(0, 0, 0, 0) 1px);
}

.dark {
    .bg-grid {
        background-size: 40px 40px;
        background-image: radial-gradient(circle, #ffffff25 1px, rgba(0, 0, 0, 0) 1px);
    }
}
</style>