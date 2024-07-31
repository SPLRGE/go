<script setup lang="ts">

</script>

<template>
    <div>
        <UHeader>

            <template #logo>
                <LogoImage />
            </template>

            <template #right>
                <UColorModeButton />
            </template>
        </UHeader>

        <UMain>
            <slot />
        </UMain>

        <UFooter
:links="[{
            label: 'SPLRGE',
            to: 'https://splrge.dev',
        }, {
            label: 'Github',
            to: 'https://github.com/splrge'
        }, {
            label: 'Discord',
            to: 'https://splrge.dev/discord'
        }]">
            <template #left>
                Copyright &copy; {{ new Date().getFullYear() }}
            </template>
        </UFooter>
    </div>
</template>
