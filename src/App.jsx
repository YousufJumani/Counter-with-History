import { useState } from 'react'

export default function App() {
  // Track current count and a simple history log for each change.
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([0])

  const update = (next) => {
    setCount(next)
    setHistory((h) => [...h, next])
  }

  return (
    <div className="container">
      <h1>Counter with History</h1>
      <div className="card">
        <h2>Count: {count}</h2>
        <div className="row">
          <button onClick={() => update(count + 1)}>Increment</button>
          <button onClick={() => update(count - 1)}>Decrement</button>
          <button onClick={() => update(0)}>Reset</button>
        </div>
      </div>
      <div className="card">
        <h3>History</h3>
        <p>{history.join(' -> ')}</p>
      </div>
    </div>
  )
}
