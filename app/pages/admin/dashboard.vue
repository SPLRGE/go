<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
    layout: 'protected'
})
useSeoMeta({
    title: 'Dashboard'
})

const activeTab = ref(0)
const items = [{
    key: 'createLink',
    label: 'Create a link',
}, {
    key: 'myLinks',
    label: 'My links',
}]

function onTabChange(index: number) {
    activeTab.value = index
}
</script>

<template>
    <UDashboardPage>
        <UDashboardPanel grow>
            <UDashboardNavbar title="My links">
                <template #right>
                    <UColorModeButton />
                </template>$
            </UDashboardNavbar>
            <UDashboardToolbar>
                <UTabs :items="items" class="w-full" @change="onTabChange" />
            </UDashboardToolbar>
            <UDashboardPanelContent>
                <CreateLinkTab v-show="activeTab === 0" />
                <MyLinksTab v-show="activeTab === 1" />
            </UDashboardPanelContent>
        </UDashboardPanel>
    </UDashboardPage>
</template>