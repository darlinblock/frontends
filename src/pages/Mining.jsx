import { useState } from 'react'

export default function Mining() {
  const [claimed, setClaimed] = useState(false)

  const handleClaim = () => {
    // Simulasi claim, nanti pakai contract call
    setClaimed(true)
  }

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold text-red-500 mb-4">⛏️ Mining Harian</h2>

      <div className="bg-zinc-900 p-4 rounded-xl border border-red-500 space-y-3">
        <div>Reward per hari: <span className="text-green-400 font-bold">0.1 DRLX</span></div>
        <div>Status: {claimed ? "✅ Sudah diklaim hari ini" : "❌ Belum klaim"}

        </div>
        <button
          className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded"
          disabled={claimed}
          onClick={handleClaim}
        >
          {claimed ? "Sudah Dapat" : "Claim Sekarang"}
        </button>
      </div>
    </div>
  )
}