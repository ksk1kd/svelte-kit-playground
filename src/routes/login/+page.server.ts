import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions = {
  login: async ({ request }) => {
    const data = await request.formData()
    const email = data.get('email')
    const password = data.get('password')

    if (!email) {
      return fail(400, { email, missingEmail: true })
    }
    if (!password) {
      return fail(400, { password, missingPassword: true })
    }

    return { success: true }
  },
  register: async () => {
    redirect(303, '/')
    return { success: true }
  },
} satisfies Actions
