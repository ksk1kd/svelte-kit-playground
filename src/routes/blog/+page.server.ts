import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  type Blog = { title: string; id: string }
  const response = await fetch('https://api.vercel.app/blog')
  return {
    posts: (await response.json()) as Blog[],
  }
}
