"use client"
import styles from "./banner.module.css";
import Image from "next/image";
import {useState} from "react";

export default function Banner() {
    const [imgSrc, setImgSrc] = useState("cover.jpg");
    const [imgIdx, setImgIdx] = useState(1);

    const changeImage = () => {
        setImgIdx((imgIdx+1)%4);
        const nextImage = ["cover.jpg","cover2.jpg","cover3.jpg","cover4.jpg"]
        setImgSrc(nextImage[imgIdx]);
    };

    return (
        <div className={styles.banner}>
            <Image src={`/img/${imgSrc}`} alt="banner" fill={true} objectFit="cover" onClick={changeImage} />
            <div className={styles.bannerText}>
                <h1 className="text-4xl font-bold">where every event finds its venue</h1>
                <h4 className="text-xl font-medium">Finding and organizing the best venues for your events</h4>
            </div>
        </div>
    );
}