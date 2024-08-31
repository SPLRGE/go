import {clicks, links} from "../database/schema"
import {eq} from "drizzle-orm"

export default defineEventHandler(async (event) => {
  const uid = getRouterParam(event, 'uid')

  if (!uid) throw createError(400, 'Bad Request')

  const url = await useDrizzle().select().from(links).where(
    eq(links.uid, uid)
  ).limit(1)

  if (url.length === 0) {
    return sendRedirect(event, 'https://splrge.dev')
  } else {
    await useDrizzle().insert(clicks).values({
      link_id: url[0].id,
      ip: getRequestIP(event) ?? null,
      user_agent: getRequestHeader(event, 'User-Agent'),
      referer: getRequestHeader(event, 'Referer'),
      timestamp: Date.now()
    })
    return sendRedirect(event, url[0].url)
  }
})
