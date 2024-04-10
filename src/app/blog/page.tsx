import { Metadata } from "next";
import BlogPostIndex, { PostInfo } from "../../../posts/PostIndex";
import Link from "next/link";
import { sortByDate } from "../utils";

export const metadata: Metadata = {
    title: 'Charles Goh: Blog',
    description: 'My Blog',
    icons: "/assets/favicon.ico"
}

export default function Blog() {

    const indexSorted: PostInfo[] = BlogPostIndex.sort(sortByDate);

    return (
        <main style={{ flex: "1", marginBottom: '3vh', paddingTop: '5vh' }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <article style={{ marginTop: "2%", width: "100%" }} className="min-h-screen flex justify-center">
                <div className="prose">
                    <h1 style={{ padding: "3vh", textAlign: "center" }}>Blog</h1>
                    {
                        indexSorted.map(element => {
                            return <div key={element.title} className="card w-96 bg-base-100 shadow-xl" style={{ marginBottom: "5vh", width: "100%" }}>
                                <div className="card-body">
                                    <h2 className="card-title">{element.title}</h2>
                                    <h3>{element.date}</h3>
                                    <p>{element.excerpt}</p>
                                    <div className="card-actions justify-end">
                                        <Link href={`/blog/${element.subPath}`}><button className="btn btn-primary btn-outline">Read More</button></Link>
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