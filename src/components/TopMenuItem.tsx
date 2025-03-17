import Link from "next/link";

interface props{
    link: string;
    top: string;
    bottom: string;
}

export default function TopMenuItem({link, top, bottom}:props) {
    return (
        <Link href={link} className="h-full px-5 bg-yellow-200 text-black text-center flex flex-col justify-center cursor-pointer">
            <h1 className="text-l font-medium">{top}</h1>
            <h1 className="text-xl font-bold">{bottom}</h1>
        </Link>
    );
}
