import Link from "next/link";

export default function Button({ children, icon, type = "link", ...props }) {
    return (
        (type === "link") ?
            <Link href="#" {...props} className="flex items-center gap-1 bg-green px-2 py-1 rounded hover:bg-pink-800">
                {icon}
                {children}
            </Link>
            :
            <button {...props} className="flex items-center gap-1 bg-purple-900 px-2 py-1 rounded hover:bg-pink-800">
                {icon}
                {children}
            </button>
    )
}