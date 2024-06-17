<template>
    <header class="flex flex-row justify-between px-2">
        <NuxtLink to="/">
            <NuxtImg src="https://s3.splrge.dev/assets/brand/logo_white_banner.png" class="hidden h-12 md:block" />

        </NuxtLink>
        <UButton :padded="false" icon="i-heroicons-bars-3-solid" variant="ghost" color="black" />
    </header>
</template>