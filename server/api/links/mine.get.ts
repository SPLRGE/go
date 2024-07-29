import { links } from "~~/server/database/schema"

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event)

    return await useDrizzle().select().from(links).where(eq(links.user_id, user.id))
})