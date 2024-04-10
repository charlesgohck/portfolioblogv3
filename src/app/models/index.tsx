export interface BlogPageProps {
    frontmatter: FrontMatterProps,
    id: string,
    content: string
}

export interface FrontMatterProps {
    title: string,
    date: string,
    excerpt: string,
    tags: string,
    cover_image: string
}