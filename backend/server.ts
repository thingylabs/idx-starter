import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { appRouter } from './routers/_app.ts'
import { createContext } from './context.ts'

const server = createHTTPServer({
  router: appRouter,
  createContext,
})

server.listen(3000)
console.log('Server listening on port 3000')

export type AppRouter = typeof appRouter
