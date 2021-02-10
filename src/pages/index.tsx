import Layout from '../components/layouts/Layout';

export default function Index() {

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-red-800">Home</h1>
      </div>
    </Layout>
  )
}
