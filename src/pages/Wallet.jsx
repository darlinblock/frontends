import { useAccount, useBalance } from 'wagmi'

export default function Wallet() {
  const { address, isConnected } = useAccount()

  const drlx = useBalance({ address, token: '0xYourDarluxTokenAddress' })
  const usdt = useBalance({ address, token: '0xYourTestUSDTAddress' })
  const native = useBalance({ address })

  if (!isConnected) return <div className="p-6 text-yellow-400">🔌 Connect wallet dulu ya...</div>

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold text-red-500 mb-4">👛 Wallet DRLX</h2>

      <div className="space-y-2 bg-zinc-900 p-4 rounded-xl border border-red-500">
        <div>🔹 Address: <span className="text-sm text-gray-400">{address}</span></div>
        <div>💰 DRLX: {drlx.data?.formatted || "0"} {drlx.data?.symbol}</div>
        <div>💵 USDT: {usdt.data?.formatted || "0"} {usdt.data?.symbol}</div>
        <div>🔗 POL (Native): {native.data?.formatted || "0"} {native.data?.symbol}</div>
      </div>
    </div>
  )
}
