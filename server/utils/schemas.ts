import { z } from "zod";

export const createLinkSchema = z.object({
    url: z.string().url()
})