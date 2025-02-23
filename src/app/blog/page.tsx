'use client'

import Link from "next/link";
import { GetPostResult, GetPostsResult, wisp } from "@/lib/wisp";
import { useSearchParams } from 'next/navigation'
import ServerSideMetadata from "@/components/ServerSideMetadata";
import { useEffect, useState } from "react";

export default function Blog() {

    const searchParams = useSearchParams()
    const tag = searchParams.get("tag");
    console.log(tag);

    const [posts, setPosts] = useState<GetPostsResult|null>(null);
    const [error, setError] = useState<string|null>(null);
    
    useEffect(() => {
        const getPosts = async () => {
            try {
                let posts = await wisp.getPosts({ limit: "all" });
                setPosts(posts);
            } catch (error) {
                setError(`Error: ${error}`);
            }
        }
        getPosts();
    }, [])

    return (
        <main style={{ flex: "1", marginBottom: '3vh', paddingTop: '5vh' }}>
            <ServerSideMetadata title={"Charles Goh: Blog"} description={"My Blog"} favicon={"/assets/favicon.ico"}/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <article style={{ marginTop: "2%", width: "100%" }} className="min-h-screen flex justify-center">
                <div className="prose">
                    <h1 className="mt-5 text-center">Blog</h1>
                    {
                        posts === null ? <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div> :
                        posts.posts.map(element => {
                            return <div key={element.title.split(" ").join("-")} className="card w-96 bg-base-100 shadow-xl" style={{ marginBottom: "3vh", width: "100%" }}>
                                <div className="flex justify-between">
                                    <div className="w-[70%]">
                                        <div className="text-3xl font-bold pl-5 pt-5">{element.title}</div>
                                        <div className="text-lg pl-5 font-bold">{element.publishedAt ? new Date(element.publishedAt).toLocaleDateString() : "Invalid Date"}</div>
                                        <div className="pl-5">{element.description}</div>
                                        <div className="pl-5 pb-5">
                                        {
                                            element.tags.map(tag => <div className="badge badge-primary m-0.5" key={`${element.title.split(" ").join("-")}-${tag.name.split(" ").join("-")}`}>{tag.name}</div>)
                                        }
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-end pr-5 pb-5">
                                        <div className="card-actions">
                                            <Link href={`/blog/${element.slug}`}><button className="btn btn-primary btn-outline">Read More</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </article>
        </main>
    )
}