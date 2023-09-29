import Link from "next/link";

export default function Button({ children, icon, ...props }) {
    return (
        <Link href="#" {...props} className="flex items-center gap-1 bg-green px-2 py-1 rounded hover:bg-pink-800">
            {icon}
            {children}
        </Link>
    )
}