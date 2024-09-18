import { createTRPCReact } from '@trpc/react-query'
import { QueryClient } from '@tanstack/react-query'
import type { AppRouter } from '../../backend/server'
import { httpBatchLink } from '@trpc/client'

export const trpc = createTRPCReact<AppRouter>()
export const queryClient = new QueryClient()

export const client = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/trpc',
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        })
      },
    }),
  ],
})
