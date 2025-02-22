import { Metadata } from "next";
import Link from "next/link";
import { wisp } from "@/lib/wisp";

export const metadata: Metadata = {
    title: 'Charles Goh: Blog',
    description: 'My Blog',
    icons: "/assets/favicon.ico"
}

export default async function Blog() {

    let posts = await wisp.getPosts({ limit: "all" });

    return (
        <main style={{ flex: "1", marginBottom: '3vh', paddingTop: '5vh' }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <article style={{ marginTop: "2%", width: "100%" }} className="min-h-screen flex justify-center">
                <div className="prose">
                    <h1 style={{ padding: "3vh", textAlign: "center" }}>Blog</h1>
                    {
                        posts.posts.map(element => {
                            return <div key={element.title.split(" ").join("-")} className="card w-96 bg-base-100 shadow-xl" style={{ marginBottom: "5vh", width: "100%" }}>
                                <div className="card-body">
                                    <h2 className="card-title">{element.title}</h2>
                                    <h3>{element.publishedAt ? new Date(element.publishedAt).toLocaleDateString() : "Invalid Date"}</h3>
                                    <p>{element.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link href={`/blog/${element.slug}`}><button className="btn btn-primary btn-outline">Read More</button></Link>
                                    </div>
                                    <div>
                                        {
                                            element.tags.map(tag => <div className="badge badge-primary m-0.5" key={`${element.title.split(" ").join("-")}-${tag.name.split(" ").join("-")}`}>{tag.name}</div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <div className="prose text-center"><a href={"https://www.wisp.blog"} target="_blank">Powered by Wisp</a></div>
                </div>
            </article>
        </main>
    )
}