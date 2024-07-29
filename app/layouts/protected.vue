<template>
    <div>
        <DashHeader class="md:hidden" />

        <div class="hidden flex-row md:flex">
            <DashSidebar />
            <div class="w-full overflow-y-auto p-4">
                <slot />
            </div>
        </div>
    </div>
</template>