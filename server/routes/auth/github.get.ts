import { users } from "~~/server/database/schema"

export default oauth.githubEventHandler({
    async onSuccess(event, { user }) {
        const existingUser = await useDrizzle().select().from(users).where(
            eq(users.provider_id, user.id)
        ).limit(1)

        let userId: number;

        // if user doesn't exist, create it and get his generated id, otherwise get the existing user id
        if (existingUser.length === 0) {
            const createdUser = await useDrizzle().insert(users).values({
                provider: 'github',
                provider_id: user.id,
                role: 'user'
            }).returning({ insertedId: users.id })

            userId = createdUser[0].insertedId
        } else {
            userId = existingUser[0].id
        }

        await setUserSession(event, {
            user: {
                id: userId,
                username: user.name || user.login,
            }
        })

        return sendRedirect(event, '/dashboard')
    }
})
