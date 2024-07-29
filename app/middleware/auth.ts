export default defineNuxtRouteMiddleware(() => {
    if (!useUserSession().loggedIn.value) {
        return navigateTo('/admin/home')
    }
})