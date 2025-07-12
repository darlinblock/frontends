const dummyLeaders = [
  { address: "0x123...abc", total: 12.5 },
  { address: "0x456...def", total: 10.3 },
  { address: "0x789...ghi", total: 7.8 },
]

export default function Leaderboard() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold text-red-500 mb-4">🏆 Top Miner</h2>

      <div className="bg-zinc-900 p-4 rounded-xl border border-red-500">
        <table className="w-full text-left">
          <thead>
            <tr className="text-red-400 border-b border-zinc-700">
              <th>#</th>
              <th>Wallet</th>
              <th>Total DRLX</th>
            </tr>
          </thead>
          <tbody>
            {dummyLeaders.map((user, i) => (
              <tr key={i} className="border-b border-zinc-800">
                <td className="py-1">{i + 1}</td>
                <td>{user.address}</td>
                <td>{user.total} DRLX</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
