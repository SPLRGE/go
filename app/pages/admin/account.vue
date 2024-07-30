<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
    layout: 'protected'
})

useSeoMeta({
    title: 'My account'
})

const isDeleteAccountConfirmationModalOpen = ref(false)

const { data: user, status: loadUserStatus } = useFetch('/api/users/me')

const { execute: deleteAccount, status: deleteAccountStatus } = useFetch('/api/users/me', {
    method: 'DELETE',
    immediate: false,
    watch: false,
    onResponse({ response }) {
        if (response.status === 200) {
            useTrackEvent('Delete account')
            clearSession()
            useToast().add({ title: 'Account deleted!' })
        } else {
            useToast().add({ title: 'Error deleting account!', description: response.statusText, color: 'red' })
        }
    }
})
</script>

<template>
    <UDashboardPage>

        <UDashboardModal
v-model="isDeleteAccountConfirmationModalOpen" title="Delete account"
            description="Are you sure you want to delete your account?" icon="i-heroicons-exclamation-circle" :ui="{
                icon: { base: 'text-red-500 dark:text-red-400' } as any,
                footer: { base: 'ml-16' } as any
            }">
            <template #footer>
                <UButton
color="red" label="Delete" :loading="deleteAccountStatus === 'pending' ? true : false"
                    @click="deleteAccount()" />
                <UButton color="white" label="Cancel" @click="isDeleteAccountConfirmationModalOpen = false" />
            </template>
        </UDashboardModal>

        <UDashboardPanel grow>
            <UDashboardNavbar title="My account">
                <template #right>
                    <UColorModeButton />
                </template>$
            </UDashboardNavbar>

            <UDashboardPanelContent class="space-y-4">
                <UDashboardCard title="Account informations">

                    <div v-if="loadUserStatus === 'pending'">
                        <UProgress animation="carousel" />
                    </div>

                    <div v-else>
                        <p><b>User ID</b>: {{ user?.id }}</p>
                        <p><b>Provider</b>: {{ user?.provider }}</p>
                    </div>
                </UDashboardCard>

                <UDashboardCard title="Delete your account" description="This action is irreversible!">
                    <UButton
color="red" variant="outline" icon="i-heroicons-trash" label="Delete account"
                        @click="isDeleteAccountConfirmationModalOpen = true" />
                </UDashboardCard>
            </UDashboardPanelContent>
        </UDashboardPanel>
    </UDashboardPage>
</template>