import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import BlogPostIndex from '../../../../posts/PostIndex';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateStaticParams() {
    const index = BlogPostIndex;
    return index.map((post) => ({
        id: post.subPath,
        title: post.title,
        excerpt: post.excerpt,
        tags: post.tags
    }))
}

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const params = await props.params;

    const markdownFileInfo = fs.readFileSync(
        path.join('posts/', params.id + '.md'),
        'utf-8'
    );

    const { data: frontmatter, content } = matter(markdownFileInfo);

    return {
        title: `Charles Goh: ${frontmatter.title}`,
        description: `${frontmatter.exercpt} ${content}`,
        keywords: frontmatter.tags,
    }
}

export default async function BlogPost(props: { params: Promise<{ title: string, id: string, excerpt: string }> }) {
    const params = await props.params;

    const markdownFileInfo = fs.readFileSync(
        path.join('posts/', params.id + '.md'),
        'utf-8'
    );

    const { data: frontmatter, content } = matter(markdownFileInfo);

    return (
        <main style={{ flex: "1", marginBottom: '3vh', paddingTop: '5vh' }}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <article style={{ marginTop: "2%", width: "100%" }} className="min-h-screen flex justify-center">
                <div className="prose">
                    <h1 style={{ padding: "3vh", textAlign: "center" }}>{frontmatter.title}</h1>
                    <h3 style={{ textAlign: "center" }}>{frontmatter.date}</h3>
                    <ReactMarkdown className='reactmarkdowncomponent'>{content}</ReactMarkdown>
                    <Link href={`/blog`}><button className='btn btn-outline btn-primary'>Back</button></Link>
                </div>
            </article>
        </main>
    );
}