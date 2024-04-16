import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = async () => {
    try {
      const response = await fetch("http://localhost:8000/backend/increment-count/", {
        method: 'POST', // Specify the HTTP method
        headers: {
          'Content-Type': 'application/json' // Specify the content type of the request body
        },
        body: JSON.stringify({ count }) // Convert the count state to JSON and send it in the request body
      });

      if (response.ok) {
        // If the request was successful, update the count state with the incremented value received from the backend
        const data = await response.json();
        console.log("Data received from backend:", data)
        setCount(data.count);
      } else {
        console.error('Failed to increment count:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while incrementing count:', error);
    }
  }

  return (
    <>
      <div className='container'>
        <button onClick={incrementCount}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
