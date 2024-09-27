import { navItems } from "@/app/constants"
import Link from "next/link"

function Footer() {
  return (
    <div className="p-10 lg:p-16 flex-col lg:flex-row flex gap-10 bg-stone-100 justify-start">
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-1 text-2xl text-textColor">
          <a href="tel:+919947135878" className="text-textColor">+91 9947135878</a>
          <a href="mailto:riolivings@gmail.com" className="text-textColor">riolivings@gmail.com</a>
        </div>
        <div className="mt-5">
          <div className="flex gap-3 items-center">
            <Link target="_blank" href={"https://facebook.com"}><img className="w-8" src="/fb.png" alt="facebook_logo" /></Link>
            <Link target="_blank" href={"https://www.instagram.com/rio.livings?igsh=MXNrNjhwNGZ4dTl3eQ=="}><img className="w-8" src="/ig.png" alt="instagram_logo" /></Link>
            <Link target="_blank" href={"https://youtube.com"}><img className="w-8" src="/yt.png" alt="youtube_logo" /></Link>
            <Link target="_blank" href={"https://linkedin.com"}><img className="w-8" src="/linkedin.png" alt="linkedin_logo" /></Link>
            <Link target="_blank" href={"https://twitter.com"}><img className="w-8" src="/X.png" alt="twitter_logo" /></Link>
          </div>
          <p className="mt-3 text-sm">@ 2024 RioLivings All Rights Reserved</p>
          <p className="text-sm">Developed by <a href="">Sophise Technologies</a></p>
        </div>
      </div>
      <div className="w-fit flex-1 flex flex-col justify-between">
        <img className="w-[10em]" src="/logo.png" alt="" />
        <div className="mt-5 w-fit text-lg">
          <p className="text-textColor leading-[1.1]">Office: <br />Keezhur Kunnu, Iritty <br /> Kannur, Kerala, 670703</p>
        </div>
      </div>
      <div className="hidden lg:flex flex-col gap-3 text-lg flex-1">
        {navItems.map((item, index) => (
          <Link href={item.path}>{item.label}</Link>
        ))}
      </div>
    </div>
  )
}

export default Footer