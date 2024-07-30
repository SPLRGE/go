<script setup lang="ts">
import { createLinkSchema } from '~~/server/utils/schemas';

const loading = ref(false)

const state = reactive({
    url: undefined
})

const { data, execute } = useFetch('/api/links/new', {
    method: 'POST',
    body: state,
    watch: false,
    immediate: false,
    onRequest() {
        loading.value = true
    },
    onResponse({ response }) {
        if (response.status === 200) {
            useTrackEvent('Create link', {
                props: {
                    uid: response._data.uid
                }
            })
            navigator.clipboard.writeText(generateUrl(response._data.uid))
            useToast().add({ title: 'Link created!', description: 'Link copied to clipboard' })
        } else {
            useToast().add({ title: 'Error creating link!', description: response.statusText, color: 'red' })
        }
        state.url = undefined
        loading.value = false
    }
})
</script>

<template>
    <UDashboardCard title="Create a link" description="Shorten a link to splrge.link/id">
        <UForm :schema="createLinkSchema" :state="state" class="space-y-4" @submit="execute">
            <UFormGroup label="URL" name="url">
                <UInput v-model="state.url" size="lg" placeholder="https://example.com" />
            </UFormGroup>

            <UButton type="submit" label="Create" :loading="loading" />
        </UForm>

        <template v-if="data" #footer>
            <UAlert title="Your shortened link is here">
                <template #description>
                    <p>Click here: <NuxtLink class="text-purple-heart-500 hover:underline" :to="generateUrl(data.uid)" external>{{ generateUrl(data.uid) }}</NuxtLink></p>
                </template>
            </UAlert>
        </template>
    </UDashboardCard>
</template>