<script setup lang="ts">
const elements = [
    {
        title: 'Dashboard',
        icon: 'i-heroicons-cog-6-tooth',
        to: '/admin/dashboard',
    },
    {
        title: 'My Account',
        icon: 'i-heroicons-user',
        to: '/admin/account',
        disabled: true
    },
    {
        title: 'Logout',
        icon: 'i-heroicons-arrow-right-on-rectangle',
        click: clearSession,
        color: 'red'
    }
]
</script>

<template>
    <div class="flex h-screen flex-col space-y-8 border-r-2 border-gray-300 p-4">
        <NuxtLink to="/">
            <NuxtImg src="https://s3.splrge.dev/assets/brand/logo_white_banner.png" class="h-12 w-fit" />
        </NuxtLink>
        <div class="flex flex-col space-y-2">
            <UButton
v-for="el in elements" :key="el.title" :color="el.color ?? 'white'" size="lg" variant="ghost" :disabled="el.disabled ?? false" :label="el.title"
                :icon="el.icon" :to="el.to" @click="el.click" />
        </div>
    </div>
</template>