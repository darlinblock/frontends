import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Presale from "./pages/Presale"
import Mining from "./pages/Mining"
import Wallet from "./pages/Wallet"
import Leaderboard from "./pages/Leaderboard"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presale" element={<Presale />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  )
}

export default App
