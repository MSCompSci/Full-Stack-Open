import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  return(
    <h3>{text}: {value}</h3>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good>0||neutral>0||bad>0){
    return (
      <>
        <h2>Statistics</h2>
        <StatisticsLine text="Good" value={good}/>
        <StatisticsLine text="Neutral" value={neutral}/>
        <StatisticsLine text="Bad" value={bad}/>
        <StatisticsLine text="Total" value={good+neutral+bad}/>
        <StatisticsLine text="Average" value={good-bad/(good+neutral+bad)}/>
        <StatisticsLine text="Positive" value={good/(good+neutral+bad)*100+'%'}/>
      </>
    )
  }
  return(
    <p>No feedback given</p>
  )
  
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
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
        <Button onClick={()=>{setGood(good+1)}} text="Good"/>
        <Button onClick={()=>{setNeutral(neutral+1)}} text="Neutral"/>
        <Button onClick={()=>{setBad(bad+1)}} text="Bad"/>
      </form>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App