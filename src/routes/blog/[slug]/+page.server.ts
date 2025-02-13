import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  console.log('blog detail load')
  type Blog = { title: string; id: string }
  const response = await fetch(`https://api.vercel.app/blog/${params.slug}`)
  if (!response.ok) {
    error(404, 'Not found')
  }
  return {
    post: (await response.json()) as Blog,
  }
}

export const prerender = true
