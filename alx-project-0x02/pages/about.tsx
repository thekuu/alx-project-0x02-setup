import Head from 'next/head'
import Header from '../components/layout/Header'
import Button from '../components/common/Button'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      <main className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">This is the About Page</h1>

        <div className="space-x-4 space-y-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  )
}
