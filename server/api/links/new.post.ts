import { z } from 'zod'
import crypto from 'node:crypto'
import { links } from '~~/server/database/schema'

const schema = z.object({
    url: z.string().url()
})

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event)
    const { url } = await readValidatedBody(event, body => schema.parse(body))

    console.log(user.id)

    await useDrizzle().insert(links).values({
        uid: crypto.randomBytes(4).toString("hex"),
        url,
        user_id: user.id
    })

    return {
        uid: crypto.randomBytes(4).toString("hex")
    }

})