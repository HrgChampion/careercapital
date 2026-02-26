import type { NextApiRequest, NextApiResponse } from 'next'
import { calculateMBA } from '../../lib/mbaEngine'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const input = req.body
    const result = calculateMBA(input)
    return res.status(200).json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err?.message ?? String(err) })
  }
}
