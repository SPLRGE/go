export function clearSession() {
    useUserSession().clear()
    useToast().add({ title: 'Successfully disconnected' })
    return navigateTo('/')
}