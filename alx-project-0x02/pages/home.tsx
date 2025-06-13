import Head from 'next/head'
import { useState } from 'react'
import Card from '../components/common/Card'
import Header from '../components/layout/Header'
import PostModal from '../components/common/PostModal'
import { CardProps } from '../interfaces'

export default function HomePage() {
  const [posts, setPosts] = useState<CardProps[]>([
    { title: "Card 1", content: "This is the content of card 1." },
    { title: "Card 2", content: "This is the content of card 2." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (newPost: CardProps) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <Header />

      <main className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">This is the Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Add New Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        {isModalOpen && (
          <PostModal onClose={() => setIsModalOpen(false)} onSave={handleSave} />
        )}
      </main>
    </>
  )
}
