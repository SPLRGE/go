<script setup lang="ts">
const links = [{
    label: 'Links',
    icon: 'i-heroicons-link',
    to: '/admin/dashboard'
}, {
    label: 'Account',
    icon: 'i-heroicons-user',
    to: '/admin/account',
}, {
    label: 'Logout',
    icon: 'i-heroicons-arrow-left-start-on-rectangle',
    click: () => {
        clearSession()
    }
}]
</script>

<template>
    <UDashboardLayout>
        <UDashboardPanel :width="250" collapsible>
            <UDashboardNavbar>
                <template #left>
                    <LogoImage />
                </template>
            </UDashboardNavbar>

            <UDashboardSidebar>
                <UDashboardSidebarLinks
:links="links" :ui="{
                    base: 'py-3'
                }" />
            </UDashboardSidebar>
        </UDashboardPanel>

        <slot />
    </UDashboardLayout>
</template>