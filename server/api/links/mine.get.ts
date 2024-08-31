import {clicks, links} from '~~/server/database/schema';
import {count} from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);

  const userLinks = await useDrizzle().select().from(links).where(
    eq(links.user_id, user.id)
  )

  const clicksPerLink = await useDrizzle().select({
    link_id: clicks.link_id,
    count: count()
  }).from(clicks).groupBy(clicks.link_id)

  const result = []

  for (const link of userLinks) {
    const clicks = clicksPerLink.find(c => c.link_id === link.id)
    result.push({
      ...link,
      clicks: clicks ? clicks.count : 0
    })
  }

  return result
});
