import Link from "next/link"

function GradientGhostButton({ label, path, className, ...rest }) {
  return (
    <Link href={path} {...rest} className={"py-1.5 px-6 bg-transparent text-sm text-primary border-2 border-primary font-bold rounded-2xl transition duration-200 hover:bg-primary hover:text-white "+className}>
      {label}
    </Link>
  )
}

export default GradientGhostButton