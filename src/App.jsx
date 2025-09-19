import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Country/Countries'



const countryMessage = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())
// console.log(countryMessage);

function App() {
    return (
      <>
        <Suspense fallback={<p>waiting show the data ........</p>}>
          <Countries countryMessage={countryMessage}></Countries>
        </Suspense>
      </>
    )
}
export default App
