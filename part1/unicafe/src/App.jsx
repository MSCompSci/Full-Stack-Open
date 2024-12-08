import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  if(good>0||neutral>0||bad>0){
    return (
      <>
        <h2>Statistics</h2>
        <h3>Good:</h3>
        <p>{good}</p>
        <h3>Neutral: </h3>
        <p>{neutral}</p>
        <h3>Bad: </h3>
        <p>{bad}</p>
        <h3>Total: {good+neutral+bad}</h3>
        <h3>Average: {good-bad/(good+neutral+bad)}</h3>
        <h3>Positive: {good/(good+neutral+bad)*100}%</h3>
      </>
    )
  }
  return(
    <p>No feedback given</p>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <form onSubmit={(e)=>(e.preventDefault())}>
        <h1>Give Feedback</h1>
        <button onClick={()=>{setGood(good+1)}}>Good</button>
        <button onClick={()=>{setNeutral(neutral+1)}}>Neutral</button>
        <button onClick={()=>{setBad(bad+1)}}>Bad</button>
      </form>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App