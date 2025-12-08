import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NicheInsightAI',
  description: 'NicheInsightAI provides small businesses with AI-powered market research and content creation tools to identify and serve underserved niches in their industries, leveraging automation for efficiency.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">NicheInsightAI</h1>
      <p className="mt-4 text-lg">NicheInsightAI provides small businesses with AI-powered market research and content creation tools to identify and serve underserved niches in their industries, leveraging automation for efficiency.</p>
    </main>
  )
}
