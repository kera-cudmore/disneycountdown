import { useState, useEffect } from "react"

export default function Countdown() {
  const [days, setDays] = useState(10)
  const [hours, setHours] = useState(10)
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(10)
  const [isLoading, SetIsLoading] = useState(true)


  const countdown = () => {
    const endDate = new Date("August 18, 2025 15:45:00")
    const today = new Date().getTime()

    const timeDiff = endDate - today

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    let timeDays = Math.floor(timeDiff / days)
    let timeHours = Math.floor((timeDiff % days) / hours)
    let timeMinutes = Math.floor((timeDiff % hours) / minutes)
    let timeSeconds = Math.floor((timeDiff % minutes) / seconds)

    timeHours = timeHours < 10 ? "0" + timeHours : timeHours
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

    setDays(timeDays)
    setHours(timeHours)
    setMinutes(timeMinutes)
    setSeconds(timeSeconds)
    SetIsLoading(false)
  }

  useEffect(() => {
    setInterval(countdown, 1000)
  })

  return (
    <>
        <div className="card">
          {isLoading ? (
            <h1 className="loading">Loading Countdown...</h1> 
          ) : (
            <div>
              <h1>Cudmores Disney Cruise Countdown!</h1>
              <div className="countdown">
                <div><p>{days}</p><h3>Days</h3></div>
                <div><p>{hours}</p><h3>Hours</h3></div>
                <div><p>{minutes}</p><h3>Minutes</h3></div>
                <div><p>{seconds}</p><h3>Seconds</h3></div>
              </div>
            </div>
          )}
        </div>
    </>
  )}

