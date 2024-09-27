import animations from "@/app/animations";
import { Motion } from "@/app/components/AnimatedComponent";
import GalleryComponent from "@/app/portfolio/GalleryComponent";

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/portfolios`);
  const portfolios = await res.json();

  // Map through portfolio to create a list of params
  return portfolios.map((item) => ({
    id: item._id.toString(), // Ensure the id is a string
  }));
}

async function page({ params }) {
  const { id } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/landing/portfolios/${id}`);
  const portfolio = await res.json();

  return (
    <div className="p-6 lg:p-16 nav-padding space-y-5">
      <Motion initial="hidden" whileInView={"visible"} variants={animations.l2r} className="text-titleColor text-3xl">Crafted with Excellence</Motion>
      <div className="flex gap-3 items-start">
        <div className="w-3/4">
          <GalleryComponent images={portfolio?.images} />
        </div>
        <div className="flex-1 bg-stone-100 p-5 rounded-lg border border-stone-300">
          <p className="mb-1">Client: <strong>{portfolio.name}</strong></p>
          <p className="mb-1">Location: <strong>{portfolio.place}</strong></p>
          <p className="mb-1">Project Details: <strong>{portfolio.projectDetails || "2,500 SQFT"}</strong></p>
        </div>
      </div>
      {/* <Carousel>
        {portfolio?.images?.map((image, index) => (
          <img src={process.env.NEXT_PUBLIC_S3_BASE_URL+image} alt="" />
        ))}
      </Carousel> */}
    </div>
  )
}

export default page