import { formatDate } from "@/app/constants";

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/blog-posts`);
    const blogs = await res.json();
    
    // Map through portfolio to create a list of params
    return blogs.map((item) => ({
      id: item._id.toString(), // Ensure the id is a string
    }));
  } catch (error) {
    console.log(error);
  }
}

export default async function BlogPage({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/blog-posts/${id}`, {
    next: { revalidate: 60 }, // Revalidate the data every 60 seconds
  });

  if (!res.ok) {
    return <p>An error occured. Please try again later!</p>
  }

  const blog = await res.json();

  if (!blog) {
    return (
      <div className="text-center p-6">
        <h1 className="text-2xl font-bold">404 - Not Found</h1>
        <p className="text-lg">The blog post you're looking for does not exist.</p>
      </div>
    );
  }


  return (
    <div className="p-6 lg:p-16 space-y-5 nav-padding">
      <div className="text-center space-y-5">
        <p className="text-sm text-stone-500 tracking-wider font-bold">
          Published {formatDate(blog?.date)} | By {blog?.author}
        </p>
        <h1 className="text-2xl lg:text-3xl font-bold text-titleColor w-full lg:w-1/2 m-auto block capitalize tracking-wider leading-[1.3]">
          {blog?.title}
        </h1>
      </div>
      <div>
        <img src={process.env.NEXT_PUBLIC_S3_BASE_URL + blog?.image} alt="blog_image" className="m-auto block rounded-lg w-full lg:w-3/4" />
      </div>
      <div className="lg:p-16 space-y-5">
        <p className="text-xl font-bold tracking-wider border-l-4 border-primary pl-3">Introduction</p>
        {blog?.content?.map((cont, index) => (
          <p key={index} className="text-textColor tracking-wide leading-[1.8]">{cont}</p>
        ))}
      </div>
      <div>
        {blog?.sections?.map((section, index) => (
          <div key={index} className="lg:p-16 pt-5 lg:pt-0 space-y-5">
            <p className="text-xl font-bold tracking-wider border-l-4 border-primary pl-3">{section?.title}</p>
            {section?.image && <img src={process.env.NEXT_PUBLIC_S3_BASE_URL + section?.image} alt="section_image" className="rounded-lg w-full" />}
            <p className="text-textColor tracking-wide leading-[1.8]">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const dynamicParams = true