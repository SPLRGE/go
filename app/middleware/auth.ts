export default defineNuxtRouteMiddleware(() => {
    if (!useUserSession().loggedIn) {
        navigateTo('/login')
    }
})