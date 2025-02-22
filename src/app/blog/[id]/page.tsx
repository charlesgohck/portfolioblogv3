import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { Metadata, ResolvingMetadata } from 'next';
import { wisp } from '@/lib/wisp';

export async function generateStaticParams() {
    const index = await wisp.getPosts();
    return index.posts.map((post) => ({
        id: post.slug,
        title: post.title,
        excerpt: post.description,
        tags: post.tags
    }))
}

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const params = await props.params;

    const metadata = await wisp.getPost(params.id);

    return {
        title: `Charles Goh: ${metadata.post === null ? "Blog Post Not Found": metadata.post.title}`,
        description: metadata.post === null ? "Blog Post Not Found" : metadata.post.description,
        keywords: metadata.post === null ? "Blog Post Not Found" : metadata.post.tags.map(tag => tag.name).join(", "),
    }
}

export interface PageProps<T> { params: Promise<T>; }

export interface BlogPostParams { id: string }

export default async function BlogPost({ params }: PageProps<BlogPostParams>) {

    const id: string = (await params).id;

    const result = await wisp.getPost(id);

    if (!result.post) {
        return (
            <main style={{ flex: "1", marginBottom: '3vh', paddingTop: '5vh' }}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <article style={{ marginTop: "2%", width: "100%" }} className="min-h-screen flex justify-center">
                    <div className="prose">
                        <h1 style={{ padding: "3vh", textAlign: "center" }}>Blog Post Not Found.</h1>
                    </div>
                </article>
            </main>
        )
    }

    const { title, publishedAt, content, tags } = result.post;

    return (
        <main style={{ flex: "1", marginBottom: '3vh', paddingTop: '5vh' }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <article style={{ marginTop: "2%", width: "100%" }} className="min-h-screen flex justify-center">
                <div className="prose mt-5 mb-5">
                    <h1 className='text-center'>{title}</h1>
                    <h3 className='text-center'>{publishedAt ? new Date(publishedAt).toLocaleDateString() : "Invalid Date"}</h3>
                    <div className='text-center mb-5'>
                        {
                            tags.map(tag => <div className="badge badge-primary m-0.5" key={`${title.split(" ").join("-")}-${tag.name.split(" ").join("-")}`}>{tag.name}</div>)
                        }
                    </div>
                    <div
                        className='blog-content mx-auto'
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                    <Link href={`/blog`}><button className='btn btn-outline btn-primary'>Back</button></Link>
                </div>
            </article>
        </main>
    );
}