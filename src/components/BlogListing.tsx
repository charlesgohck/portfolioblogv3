'use client'

import { GetPostsResult } from "@/lib/wisp";
import Link from "next/link";
import { useState } from "react";

export interface BlogListingProps {
    posts: GetPostsResult
}

export default function BlogListing({ posts }: BlogListingProps) {

    const [searchTags, setSearchTags] = useState<Set<string>>(new Set());
    const [keywords, setKeywords] = useState<string>("");

    const handleSubmitSearchTag = (tag: string) => {
        if (searchTags.has(tag)) {
            setSearchTags(prevSet => {
                const newSet = new Set(prevSet);
                newSet.delete(tag);
                return newSet;
            });
        } else {
            setSearchTags(prevSet => {
                const newSet = new Set(prevSet);
                newSet.add(tag);
                return newSet;
            })
        }
    }
    
    let postsProcessed = posts.posts;

    let tagDump = postsProcessed.map(post => post.tags.map(tag => tag.name)).flat();
    let tagSet = new Set(tagDump);
    let allTags = Array.from(tagSet);

    if (searchTags.size > 0) {
        const searchTagsArray = Array.from(searchTags);
        postsProcessed = posts.posts.filter(post => searchTags.size === 0 || searchTagsArray.every(searchTag => post.tags.map(tag => tag.name).includes(searchTag)));
    }

    // console.log(searchTags)

    return (
        <main className="flex-1 mb-[3vh] pt-[5vh]">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <article className="min-h-screen flex justify-center mt-5 w-full">
                <div className="prose w-[95%]">
                    <h1 className="mt-5 text-center">Blog</h1>
                    <div className="pl-5 pb-5 text-center">
                        {
                            allTags.map(tag => <button type="button" className="badge badge-default m-0.5 neutral" key={`search-tag-${tag}`} onClick={() => handleSubmitSearchTag(tag)}>{tag}</button>)
                        }
                    </div>
                    {
                        posts === null || posts === undefined ? <div>
                            <div className="flex w-52 flex-col gap-4">
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <br/>
                            <div className="flex w-52 flex-col gap-4">
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <br/>
                            <div className="flex w-52 flex-col gap-4">
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <br/>
                            <div className="flex w-52 flex-col gap-4">
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <br/>
                            <div className="flex w-52 flex-col gap-4">
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        </div> :
                        postsProcessed.map(element => {
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