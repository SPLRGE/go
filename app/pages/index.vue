<script setup lang="ts">
useSeoMeta({
    title: 'Home'
})
</script>

<template>
    <div>
        <div class="mx-auto mt-24 flex w-1/2 flex-col items-center space-y-4">
            <h1 class="text-3xl font-bold">SPLRGE Go - Redirect your users</h1>
            <span>Available on <NuxtLink
class="text-blue-500 hover:underline" to="https//github.com/splrge/go"
                    :external="true">Github</NuxtLink></span>
            <!--<PrimaryButton variant="purple" @click="() => navigateTo('/admin')" icon="ph:lightning" label="Start now" />-->
        </div>
    </div>
</template>