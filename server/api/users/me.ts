import { users } from "~~/server/database/schema"

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event)

    const findUser = await useDrizzle().select().from(users).where(
        eq(users.id, user.id)
    ).limit(1)

    if (findUser[0]) {
        return findUser[0]
    } else {
        throw createError({
            statusCode: 404,
            statusText: 'User not found',
        })
    }

})