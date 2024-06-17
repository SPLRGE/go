<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
    layout: 'protected'
})
useSeoMeta({
    title: 'Dashboard'
})

const session = useUserSession()
</script>

<template>
    <div>
        <p>logged only</p>
    {{ session.loggedIn }}
    </div>
</template>