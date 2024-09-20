import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { trpc, client, queryClient } from './trpc'
import { routeTree } from './routeTree.gen'
import { QueryClientProvider } from '@tanstack/react-query'

const router = createRouter({ routeTree })
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <trpc.Provider client={client} queryClient={queryClient}>
          <RouterProvider router={router} />
        </trpc.Provider>
      </QueryClientProvider>
    </StrictMode>,
  )
}
