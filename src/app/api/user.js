import { getSession } from 'next-auth/react'

export default async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    const user = session.user
    res.status(200).json({ user })
  } else {
    res.status(401).json({ error: 'Unauthorized' })
  }
}