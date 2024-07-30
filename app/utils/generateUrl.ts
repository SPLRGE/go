export function generateUrl(uid: string) {
    return `https://${useRuntimeConfig().public.hostname}/${uid}`
}