import { router, publicProcedure } from '../trpc.ts'

export const helloRouter = router({
  world: publicProcedure.query(() => {
    return 'Hello from tRPC!'
  }),
})
