import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import { trpc } from '../trpc'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: StartPage,
})

function StartPage() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const helloQuery = trpc.hello.world.useQuery()

  useEffect(() => {
    if (helloQuery.data) {
      setMessage(helloQuery.data)
    }
  }, [helloQuery.data])

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{message}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Lets start</p>
    </>
  )
}

export default StartPage
