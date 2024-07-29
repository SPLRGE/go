import { links } from "~~/server/database/schema"

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event)
    const uid = getRouterParam(event, 'uid')

    if (!user || !uid) {
        throw createError({
            statusCode: 400,
            statusMessage: 'User or uid not found',
        })
    }

    const link = await useDrizzle().select().from(links).where(
        and(
            eq(links.uid, uid),
            eq(links.user_id, user.id)
        )
    ).limit(1)

    if (link.length === 0) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Link not found',
        })
    }

    await useDrizzle().delete(links).where(eq(links.uid, uid))

    return {
        message: 'Link deleted'
    }
})