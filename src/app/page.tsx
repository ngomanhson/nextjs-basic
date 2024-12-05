import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/sonnm.module.css";

export default function Home() {
    return (
        <ul>
            <li>
                <Link href="/facebook" className={x["red"]}>
                    Facebook
                </Link>
            </li>
            <li>
                <Link href="/youtube" className={y["red"]}>
                    Youtube
                </Link>
            </li>
            <li>
                <Link href="/tiktok">TikTok</Link>
            </li>
        </ul>
    );
}
