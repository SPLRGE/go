import { links } from "../database/schema"
import { eq } from "drizzle-orm"

export default defineEventHandler( async (event) => {
    const uid = getRouterParam(event, 'uid')

    console.log('route uid by server')

    if (!uid || typeof uid !== 'string') {
        return sendRedirect(event, 'https://splrge.dev')
    }

    const url = await useDrizzle().select().from(links).where(
        eq(links.uid, uid)
    ).limit(1)
    
    if (url.length === 0) {
        sendRedirect(event, 'https://splrge.dev')
    } else {
        sendRedirect(event, url[0].url)
    }
})