import BlogListing from "@/components/BlogListing";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
    title: 'Charles Goh: Blog',
    description: 'My Blog',
    icons: "/assets/favicon.ico"
}

export default async function Blog() {

    let posts = await wisp.getPosts({ limit: "all" });

    const content: string = posts.posts.map(post => post.title + post.description).join("; ");

    return (
        <>
            <Head>
                <title>Charles Goh: Blog</title>
                <meta name="description" content={content} />
            </Head>
            <BlogListing posts={posts}/>
        </>
    )
}