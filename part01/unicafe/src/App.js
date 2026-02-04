import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad, best }) => {
  const total = good + neutral + bad + best
  if (total === 0) {
    return <div>No feedback given</div>
  }

  const average = (good - bad + best) / total
  const positive = (good + best / total) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Best" value={best} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average.toFixed(2)} />
        <StatisticLine text="Positive" value={positive.toFixed(1) + ' %'} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [best, setBest] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Button handleClick={() => setBest(best + 1)} text="Best" />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} best={best} />
    </div>
  )
}

export default App
