import animations from "@/app/animations"
import { Motion } from "@/app/components/AnimatedComponent"
import { BlogItem } from "@/app/components/Blogs"

export const metadata = {
  title: "Blogs - Rio Livings",
  description: "Discover your dream home with Rio Livings, the top house construction company in Kannur, Kerala.",
};


async function Blogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/blog-posts`);
  const blogs = await res.json();

  return (
    <div className="p-6 lg:p-16 nav-padding">
      <Motion type={"h1"} initial="hidden" whileInView={"visible"} variants={animations.l2r} className="text-titleColor text-3xl">Our Blogs</Motion>
      <Motion initial="hidden" whileInView={"visible"} variants={animations.b2u} className="mt-10 flex-col lg:flex-row flex gap-10">
        {blogs.map((blog, index) => <BlogItem item={blog} key={index} />)}
      </Motion>
    </div>
  )
}

export default Blogs