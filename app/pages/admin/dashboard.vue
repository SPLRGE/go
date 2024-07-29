<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
    layout: 'protected'
})
useSeoMeta({
    title: 'Dashboard'
})

const createLinkFormState = reactive({
    url: undefined
})

const { data: createdLink, execute } = useFetch('/api/links/new', {
    method: 'POST',
    body: createLinkFormState,
    watch: false,
    immediate: false,
    onResponse({ response }) {
        if (response.status === 200) {
            useToast().add({ title: 'Link created!'})
        }
    }
})

const { data: links, refresh, pending } = useFetch('/api/links/mine', {
    transform: (data) => {
        return data.map((link) => {
            return {
                ...link,
                url: useGenerateLink(link.uid)
            }
        })
    }
})

function useGenerateLink(uid: string) {
    const config = useRuntimeConfig()
    return `https://${config.public.hostname}/${uid}`
}

function deleteLink(uid: string) {
    $fetch(`/api/links/${uid}`, {
        method: 'DELETE',
        onResponse({ response }) {
            if (response.status === 200) {
                useToast().add({ title: 'Link deleted!'})
                refresh()
            }
        },
        onResponseError({ response }) {
            useToast().add({ title: 'Error deleting link!', description: response.statusText, color: 'red'})
        }
    })
}
</script>

<template>
    <div class="w-full space-y-8">
        <UCard class="w-full">
            <template #header>
                <h2 class="text-3xl font-bold">Créer un lien</h2>
            </template>

            <UForm :state="createLinkFormState" class="space-y-2">
                <UFormGroup label="URL">
                    <UInput v-model="createLinkFormState.url" placeholder="https://example.com" />
                </UFormGroup>
                <UButton color="primary" label="Créer" @click="execute" />
            </UForm>
            <div v-show="createdLink" class="mt-2">
                <UAlert title="Link created with success!">
                    <template #description>
                        <p>Here is your link: <a class="text-purple-heart-500 hover:underline" :href="useGenerateLink(createdLink?.uid ?? '')" target="_blank">{{ useGenerateLink(createdLink?.uid ?? '') }}</a></p>
                    </template>
                </UAlert>
            </div>
        </UCard>

        <UCard class="w-full">
            <template #header>
                <h2 class="text-3xl font-bold">Mes liens</h2>
            </template>

            <div class="flex w-full flex-row justify-end">
                <UButton color="white" icon="i-heroicons-arrow-path" @click="refresh" />
            </div>

            <UTable
:rows="links" :loading="pending" :columns="[
                {
                    label: 'ID',
                    key: 'id'
                },
                {
                    label: 'URL',
                    key: 'url'
                },
                {
                    key: 'delete'
                }
            ]" >
<template #delete-data="{ row }">
    <UButton color="red" variant="ghost" icon="i-heroicons-trash" @click="deleteLink(row.uid)" />
</template>
            </UTable>
        </UCard>
    </div>
</template>