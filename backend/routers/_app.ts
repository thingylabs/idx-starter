import { router } from '../trpc.ts'
import { helloRouter } from './hello.ts'

export const appRouter = router({
  hello: helloRouter,
})
