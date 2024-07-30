<script setup lang="ts">
useSeoMeta({
  title: 'SPLRGE Go',
  description: 'SPRLGE rediction app',
  titleTemplate: '⚡ SPLRGE Go - %s'
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <UNotifications />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
