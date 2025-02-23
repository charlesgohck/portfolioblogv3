import BlogListing from "@/components/BlogListing";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Charles Goh: Blog',
    description: 'My Blog',
    icons: "/assets/favicon.ico"
}

export default async function Blog() {

    let posts = await wisp.getPosts({ limit: "all" });

    return (
        <>
            <BlogListing posts={posts}/>
        </>
    )
}