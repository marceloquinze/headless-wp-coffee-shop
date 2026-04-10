import { z } from 'astro/zod';

const imageSchema = z.object({
	url: z.string(),
	width: z.number(),
	height: z.number()
})

const featuredImageSchema = z.object({
	thumbnail: imageSchema,
	medium: imageSchema,
	medium_large: imageSchema,
	large: imageSchema,
	full: imageSchema
})

export const BaseWPSchema = z.object({
	id: z.number(),
	title: z.object({
		rendered: z.string()
	}),
	content: z.object({
		rendered: z.string()
	}),
	featured_images: featuredImageSchema,
	acf: z.object({
		subtitle: z.string()
	})
})

// Process Schema

export const ProcessSchema = z.object({ // sessions
	title: z.string(),
	description: z.string(),
	image: z.string()
})

export const ProcessPageSchema = BaseWPSchema.extend({
	acf: z.object({
		subtitle: z.string()
	}).catchall(ProcessSchema)
})


// Blogs Schema

export const PostSchema = BaseWPSchema.omit({
	acf: true
})
// transform object to array (API response is an object by default)
export const PostsSchema = z.array(PostSchema);
