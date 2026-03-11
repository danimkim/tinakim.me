import Image from 'next/image'
import { BlogPosts } from '@/components/posts'
import { TITLE } from '../constants'

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <Image
          src="/images/profile.png"
          alt="Profile"
          width={128}
          height={128}
          className="mb-4 rounded-full object-cover w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          {TITLE}
        </h1>
      </div>
      <p className="mb-4">
        {`I'm a frontend developer expanding into fullstack, focused on bridging user experience with developer experience. Passionate about translating real-world problems into clean and scalable technical solutions and empowering teams through documentation and knowledge sharing. Takes ownership of products from concept to delivery, proactively stepping up to tackle challenges. Collaborative by nature, I learn rapidly and communicate effectively to deliver results.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
