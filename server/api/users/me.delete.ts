import { users } from "~~/server/database/schema"

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event)

    try {
        await useDrizzle().delete(users).where(
            eq(users.id, user.id)
        )
        return {
            success: true
        }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusText: 'Internal Server Error',
        })
    }
})