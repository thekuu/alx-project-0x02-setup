import Head from 'next/head'
import Header from '../components/layout/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <Header />
      <main className="p-4">
        <h2 className="text-xl">Welcome to ALX Next.js Setup</h2>
      </main>
    </div>
  )
}
