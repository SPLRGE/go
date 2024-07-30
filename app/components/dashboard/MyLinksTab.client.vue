<script setup lang="ts">
const { data: links, refresh, status } = useFetch('/api/links/mine', {
    transform: (data) => {
        return data.map((link) => {
            return {
                ...link,
                shorten_url: generateUrl(link.uid)
            }
        })
    }
})

function deleteLink(uid: string) {
    $fetch(`/api/links/${uid}`, {
        method: 'DELETE',
        onResponse({ response }) {
            if (response.status === 200) {
                useTrackEvent('Delete link', {
                    props: {
                        uid
                    }
                })
                useToast().add({ title: 'Link deleted!' })
                refresh()
            }
        },
        onResponseError({ response }) {
            useToast().add({ title: 'Error deleting link!', description: response.statusText, color: 'red' })
        }
    })
}
</script>

<template>
    <div>
        <UDashboardCard title="My links">
            <div class="flex w-full items-center justify-end">
                <UButton icon="i-heroicons-arrow-path" color="white" @click="refresh" />
            </div>
            <UTable
:rows="links" :loading="status === 'pending' ? true : false" :columns="[{
                label: 'ID',
                key: 'uid',
            }, {
                label: 'Original URL',
                key: 'url',
            }, {
                label: 'Shorten URL',
                key: 'shorten_url',
            }, {
                key: 'delete'
            }]">
                <template #delete-data="{ row }">
                    <UButton color="red" variant="ghost" icon="i-heroicons-trash" @click="deleteLink(row.uid)" />
                </template>
            </UTable>
        </UDashboardCard>
    </div>
</template>