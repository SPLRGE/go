import { z } from 'zod'
import { init } from '@paralleldrive/cuid2'
import { links } from '~~/server/database/schema'

const schema = z.object({
    url: z.string().url()
})

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event)
    const { url } = await readValidatedBody(event, body => schema.parse(body))

    const generatedUid = init({
        length: 8
    })()

    await useDrizzle().insert(links).values({
        uid: generatedUid,
        url,
        user_id: user.id
    })

    return {
        uid: generatedUid
    }

})