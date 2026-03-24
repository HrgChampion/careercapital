import type { Metadata } from "next"
import { calculateMBA, calculateScore } from "../../lib/mbaEngine"

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function TestPage() {
  try {
    const result = calculateMBA({
      currentSalary: 70000,
      postMbaSalary: 120000,
      mbaCost: 150000,
      programDuration: 2,
      loanPercentage: 0.7,
      interestRate: 0.08,
    })

    const score = calculateScore(result)

    return (
      <div style={{ padding: "40px", fontFamily: "monospace" }}>
        <h1>MBA Engine Test</h1>

        <h2>Result</h2>
        <pre>{JSON.stringify(result, null, 2)}</pre>

        <hr />

        <h2>Score</h2>
        <pre>{JSON.stringify(score, null, 2)}</pre>
      </div>
    )
  } catch (err) {
    return (
      <div style={{ padding: "40px", fontFamily: "monospace", color: "#f87171" }}>
        <h1>Engine Error</h1>
        <pre>{String(err)}</pre>
      </div>
    )
  }
}
