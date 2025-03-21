import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";

export default function TopMenu(){
    return(
        <div className="fixed z-30 top-0 left-0 w-full bg-white shadow-md flex justify-end items-center">
            <TopMenuItem link="/booking" top="Menu Item" bottom="Booking" />
            <TopMenuItem link="/venue" top="Venue List" bottom="Venues" />
            <Link href="/">
                <Image 
                    src="/img/logo.png" 
                    alt="logo" 
                    width={50} 
                    height={50} 
                    className="h-full w-12 cursor-pointer"
                />
            </Link>
        </div>
    );
};