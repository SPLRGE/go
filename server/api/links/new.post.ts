import { init } from '@paralleldrive/cuid2'
import { links } from '~~/server/database/schema'
import { createLinkSchema } from '~~/server/utils/schemas'

export default defineEventHandler(async (event) => {
    const { user } = await requireUserSession(event)
    const { url } = await readValidatedBody(event, body => createLinkSchema.parse(body))

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