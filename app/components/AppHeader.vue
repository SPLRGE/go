<template>
    <header class="flex flex-row items-center justify-between px-8">
        <NuxtLink to="/">
            <NuxtImg src="https://s3.splrge.dev/assets/brand/logo_white_banner.png" class="hidden h-12 md:block" />
            <NuxtImg src="https://s3.splrge.dev/assets/brand/logo_white.png" class="h-12 block md:hidden" />
        </NuxtLink>
        <UButton
color="primary" label="Login" icon="i-heroicons-arrow-right-end-on-rectangle-20-solid"
            to="/auth/github" />
    </header>
</template>