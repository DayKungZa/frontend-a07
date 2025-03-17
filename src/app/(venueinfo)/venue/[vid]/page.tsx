import Image from "next/image"
import styles from "@/app/page.module.css";

export default function VenueLayout({params}:{params:{vid:string}}){

    const MockCardInfo = new Map()
    MockCardInfo.set("001" , {name: "The Bloom Pavilion" , img: "/img/bloom.jpg"})
    MockCardInfo.set("002" , {name: "Spark Space" , img: "/img/sparkspace.jpg"})
    MockCardInfo.set("003" , {name: "The Grand Table" , img: "/img/grandtable.jpg"})

    return(
        <div className={styles.main}>
            <h1 className="text-center text-xl ">Venue ID {params.vid}</h1>
            <div className="flex flex-row m-5 p-5 bg-white rounded-lg">
                <Image src={MockCardInfo.get(params.vid).img} alt="Card Picture" width={500} height={300} className="rounded-lg shadow-md" />
                <div className="text-md text-black font-bold mt-3 mx-5">{MockCardInfo.get(params.vid).name}</div>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return [{vid:"001"},{vid:"002"},{vid:"003"},]
}