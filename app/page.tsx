import { BlogPosts } from '@/components/posts'
import { TITLE } from '../constants'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {TITLE}
      </h1>
      <p className="mb-4">
        {`I'm a frontend developer expanding into fullstack, focused on bridging user experience with developer experience. Passionate about translating real-world problems into clean and scalable technical solutions and empowering teams through documentation and knowledge sharing. Takes ownership of products from concept to delivery, proactively stepping up to tackle challenges. Collaborative by nature, I learn rapidly and communicate effectively to deliver results.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
