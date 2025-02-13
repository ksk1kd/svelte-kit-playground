import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = ({ params }) => {
  const category = params.category
  const brand = params.brand

  if (Number.isNaN(category) || Number(category) < 0) {
    error(400, 'category must be numbers')
  }

  if (Number.isNaN(brand) || Number(brand) < 0) {
    error(400, 'brand must be numbers')
  }

  const products = [
    {
      id: 1,
      name: 'Product 1',
      category,
      brand,
    },
    {
      id: 2,
      name: 'Product 2',
      category,
      brand,
    },
  ]

  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
  })
}
