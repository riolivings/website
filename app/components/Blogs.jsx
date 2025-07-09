import animations from "@/app/animations"
import { Motion } from "@/app/components/AnimatedComponent"
import { blogData, formatDate } from "@/app/constants"
import Link from "next/link"

async function Blogs() {
  let blogs = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/blog-posts`, {
      next: { revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE_PERIOD) }, // Revalidate the data every 60 seconds
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    blogs = await res.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    // Optionally, you can show a fallback UI or message here
  }

  return (
    <div className="p-6 lg:p-16 mt-10">
      <div className="text-center">
        <Motion type={"h1"} initial="hidden" whileInView={"visible"} variants={animations.l2r} className="text-4xl text-titleColor font-bold tracking-wider">Blogs</Motion>
        <Motion type={"p"} initial="hidden" whileInView={"visible"} variants={animations.r2l} className="text-textColor tracking-wide mt-3 text-lg">Rio Livings builds on a foundation of trust and quality, crafting homes designed to last for generations</Motion>
      </div>
      <Motion initial="hidden" whileInView={"visible"} variants={animations.b2u} className="mt-10 flex-col lg:flex-row flex justify-center gap-10">
        {blogs.slice(0, 3)?.map((blog, index) => <BlogItem item={blog} key={index} />)}
      </Motion>
      <Link href={"/blog"}>
        <button className="bg-primaryGradient text-white font-bold text-sm px-4 py-2 rounded-full tracking-wider m-auto block mt-10 border border-primary hover:bg-whiteGradient hover:bg- hover:text-primary transition-all">Read More</button>
      </Link>
    </div>
  )
}

export const BlogItem = ({ item: { image, title, content, date, _id } }) => {
  return <Link href={`/blog/${_id}`} className="w-full lg:w-1/4 bg-white shadow-xl border border-stone-200 rounded-lg group hover:scale-110 transition-all overflow-hidden duration-500 cursor-pointer">
    <div

    >
      <img src={process.env.NEXT_PUBLIC_S3_BASE_URL + image} alt="" className="rounded-t-lg group-hover:scale-105 transition-all duration-500" />
      <div className="p-5">
        <h1 className="font-bold text-titleColor text-lg">{title}</h1>
        <p className="line-clamp-3 text-sm text-textColor tracking-wider leading-[1.8] mt-3">{content.length > 0 && content[0]}</p>
        <p className="mt-3 text-sm font-bold text-primary">{formatDate(date)}</p>
      </div>
    </div>
  </Link>
}
export default Blogs