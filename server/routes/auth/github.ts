import { users } from "~~/server/database/schema"

export default oauth.githubEventHandler({
    async onSuccess(event, { user }) {
        const existingUser = await useDrizzle().select().from(users).where(
            eq(users.provider_id, user.id)
        )

        if (!existingUser) {
            await useDrizzle().insert(users).values({
                provider: 'github',
                provider_id: user.id,
                role: 'user'
            })
        }

        await setUserSession(event, {
            user: {
                id: user.id,
                username: user.name || user.login,
            }
        })

        return sendRedirect(event, '/dashboard')
    }
})
