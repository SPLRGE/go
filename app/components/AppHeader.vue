<script setup lang="ts">
const { loggedIn, clear } = useUserSession()

function clearSession() {
    clear()
    useToast().add({ title: 'Successfully disconnected' })
}
</script>

<template>
    <header class="flex flex-row items-center justify-between px-8">
        <NuxtLink to="/">
            <NuxtImg src="https://s3.splrge.dev/assets/brand/logo_white_banner.png" class="hidden h-12 md:block" />
            <NuxtImg src="https://s3.splrge.dev/assets/brand/logo_white_square_borders.png"
                class="h-12 block md:hidden" />
        </NuxtLink>
        <div class="flex space-x-4 flex-row items-center" v-if="loggedIn">
            <UButton color="white" variant="outline" label="Dashboard" to="/dashboard" icon="i-heroicons-cog-6-tooth"
         />
            <UButton color="red" variant="ghost" label="Logout" icon="i-heroicons-arrow-right-on-rectangle"
                @click="clearSession" />
        </div>
        <UButton v-else color="primary" label="Login" icon="i-heroicons-arrow-right-end-on-rectangle-20-solid"
            to="/auth/github" :external="true" />
    </header>
</template>