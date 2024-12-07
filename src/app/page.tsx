"use client";

import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/sonnm.module.css";
import TableComp from "@/components/table";
import useSWR from "swr";

export default function Home() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR("http://localhost:8000/blogs", fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    console.log("data", data);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>{data?.length}</div>
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

            <TableComp blogs={data} />
        </div>
    );
}
