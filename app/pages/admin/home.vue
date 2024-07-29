<script setup lang="ts">
useSeoMeta({
    title: 'Home'
})
</script>

<template>
    <div>
        <div class="mx-auto mt-24 flex flex-col items-center space-y-4 md:w-1/2">
            <h1 class="text-4xl font-bold sm:text-6xl">SPLRGE Go: Link less, share more.</h1>
            <span class="text-gray-200">Open source on <NuxtLink
class="text-blue-500 hover:underline" to="https://github.com/splrge/go"
                    :external="true">Github</NuxtLink></span>
                <UButton color="primary" :external="true" variant="outline" to="/auth/github" icon="i-heroicons-bolt" label="Start now" />
        </div>
    </div>
</template>