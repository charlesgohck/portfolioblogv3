'use client'

import { GetPostsResult } from "@/lib/wisp";
import Link from "next/link";
import { useCallback, useState } from "react";

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
    };

    const onClickResetSearchBox = () => {
        setKeywords("");
    }

    const handleSearch = (query: string) => {
        query = query.toLowerCase();
        setKeywords(query);
    };

    const debouncedSearch = useCallback(
        (value: string) => handleSearch(value), [handleSearch]
    );

    const handleDebouncedSearchQueryEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        debouncedSearch(value);
    }
    
    let postsProcessed = posts.posts;

    let tagDump = postsProcessed.map(post => post.tags.map(tag => tag.name)).flat();
    let tagSet = new Set(tagDump);
    let allTags = Array.from(tagSet);

    if (searchTags.size > 0) {
        const searchTagsArray = Array.from(searchTags);
        postsProcessed = posts.posts.filter(post => searchTags.size === 0 || searchTagsArray.every(searchTag => post.tags.map(tag => tag.name).includes(searchTag)));
    }

    if (keywords.length > 0) {
        postsProcessed = postsProcessed.filter(post => post.title.toLowerCase().includes(keywords) || post.description?.toLowerCase().includes(keywords) || post.tags.map(tag => tag.name.toLowerCase()).includes(keywords));
    }

    return (
        <main className="flex-1 mb-[3vh] pt-[5vh]">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <article className="min-h-screen flex justify-center mt-5 w-full">
                <div className="prose w-[95%]">
                    <h1 className="mt-5 text-center">Blog</h1>
                    <div className="pl-5 pb-5 text-center">
                        {
                            allTags.map(tag => <button type="button" className={`cursor-pointer p-2 border-slate-500 badge ${searchTags.has(tag) ? "badge-primary" : "badge-neutral" } m-0.5`} key={`search-tag-${tag}`} onClick={() => handleSubmitSearchTag(tag)}>{tag}</button>)
                        }
                    </div>
                    <label className="input input-bordered border-1 flex items-center gap-2 w-[100%]">
                        <input type="text" className="grow" placeholder="Search" onChange={handleDebouncedSearchQueryEvent} />
                        {
                            keywords.length === 0 ? <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button> : <button onClick={onClickResetSearchBox}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        }
                    </label>
                    <br/>
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
                            return <div key={element.title.split(" ").join("-")} className="card w-96 shadow-xl mb-[3vh]" style={{ marginBottom: "3vh", width: "100%" }}>
                                <div className="flex justify-between">
                                    <div className="w-[70%]">
                                        <div className="text-3xl font-bold pl-5 pt-5">{element.title}</div>
                                        <div className="text-lg pl-5 font-bold">{element.publishedAt ? new Date(element.publishedAt).toLocaleDateString() : "Invalid Date"}</div>
                                        <div className="pl-5">{element.description}</div>
                                        <div className="pl-5 pb-5">
                                            {
                                                element.tags.map(tag => <button className="cursor-pointer p-2 badge badge-primary m-0.5" key={`${element.title.split(" ").join("-")}-${tag.name.split(" ").join("-")}`} onClick={() => handleSubmitSearchTag(tag.name)}>{tag.name}</button>)
                                            }
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-end pr-5 pb-5">
                                        <div className="card-actions">
                                            <Link href={`/blog/${element.slug}`}><button className="btn btn-primary">Read</button></Link>
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