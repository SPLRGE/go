<script setup lang="ts">
useSeoMeta({
    title: 'Home'
})
</script>

<template>
    <div>
        <div class="mx-auto mt-24 flex md:w-1/2 flex-col items-center space-y-4">
            <h1 class="sm:text-6xl text-4xl font-bold">SPLRGE Go: Link less, share more.</h1>
            <span class="text-gray-200">Open source on <NuxtLink
class="text-blue-500 hover:underline" to="https://github.com/splrge/go"
                    :external="true">Github</NuxtLink></span>
                <UButton color="primary" :external="true" variant="outline" to="/auth/github" icon="i-heroicons-bolt" label="Start now" />
        </div>
    </div>
</template>