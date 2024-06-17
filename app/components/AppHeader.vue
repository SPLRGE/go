<template>
    <header class="flex flex-row items-center justify-between bg-slate-900 px-8">
        <NuxtLink to="https://splrge.dev" :external="true">
            <NuxtImg src="https://s3.splrge.dev/assets/brand/logo_color_banner.png" class="h-16" />
        </NuxtLink>
        <UButton
color="primary" label="Admin" icon="i-heroicons-arrow-right-end-on-rectangle-20-solid" to="/login"
            size="xl" />
    </header>
</template>