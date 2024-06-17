import { users } from "~~/server/database/schema"

export default oauth.githubEventHandler({
    async onSuccess(event, { user }) {
        await useDrizzle().insert(users).values({
            provider: 'github',
            provider_id: user.id,
            role: 'user'
        })
        await setUserSession(event, {
            user: {
                id: user.id,
                username: user.name || user.login
            }
        })
    }
})