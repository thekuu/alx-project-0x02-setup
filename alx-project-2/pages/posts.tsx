import Head from 'next/head';
import Header from '../components/layout/Header';

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>

      <Header />

      <main className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">This is the Posts Page</h1>
      </main>
    </>
  );
}
