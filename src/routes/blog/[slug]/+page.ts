import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
  if (0 < Number(params.slug) && Number(params.slug) < 10) {
    return {
      slug: params.slug,
    }
  }

  error(404, 'Not found')
}
