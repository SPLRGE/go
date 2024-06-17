<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})

useSeoMeta({
    title: 'Dashboard'
})
</script>

<template>
    <p>logged only</p>
</template>