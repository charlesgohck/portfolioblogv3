export interface PostInfo {
    title: string,
    date: string,
    excerpt: string,
    coverImage: string,
    subPath: string,
    tags: string
}

const BlogPostIndex: PostInfo[] = [
    {
        title: 'Software Engineering Career: 4 Year Mark',
        date: 'August 24 2024',
        excerpt: 'My thoughts after crossing the 4 year mark as a Software Engineer.',
        coverImage: '/assets/images/posts/Career/SoftwareEngineeringCareerHelloWorld.png',
        subPath: 'career4yearmark',
        tags: 'reviews,career'
    },
    {
        title: 'OMSCS: Spring 2023',
        date: 'May 12 2024',
        excerpt: 'For the Spring 2023 semester, I took CS8803-015 Special Topics: Computer Law and CS8803-019 Special Topics: Security Incident Response. This is my review for these courses.',
        coverImage: 'N/A',
        subPath: 'cs8803cs8803',
        tags: 'reviews,omscs,gatech'
    },
    {
        title: 'OMSCS: Fall 2023',
        date: 'January 13 2024',
        excerpt: 'For the Fall 2023 semester, I took CS6601 Artificial Intelligence. Here is my review for this course.',
        coverImage: 'N/A',
        subPath: 'omscs6601',
        tags: 'reviews,omscs,gatech'
    },
    {
        title: 'Software Engineering Career: 2 Year Mark',
        date: 'December 30 2022',
        excerpt: 'My thoughts after crossing the 2 year mark as a Software Engineer.',
        coverImage: '/assets/images/posts/Career/SoftwareEngineeringCareerHelloWorld.png',
        subPath: 'career2yearmark',
        tags: 'reviews,career'
    },
    {
        title: 'OMSCS: Summer 2022',
        date: 'December 22 2022',
        excerpt: 'CS6675 Advanced Internet Systems and Applications is a great introduction into how various modern internet applications were built.',
        coverImage: '/assets/images/posts/OMSCS/CS6675Poster.jpg',
        subPath: 'omscs6675',
        tags: 'reviews,omscs,gatech'
    },
    {
        title: 'OMSCS: Summer 2023',
        date: 'August 9 2023',
        excerpt: 'For the Summer 2023 semester, I took CS6795 Intro to Cognitive Science. Here is my review for this course.',
        coverImage: '/assets/images/posts/OMSCS/CS6675Poster.jpg',
        subPath: 'omscs6795',
        tags: 'reviews,omscs,gatech'
    },
    {
        title: 'OMSCS: Spring 2023',
        date: 'August 9 2023',
        excerpt: 'For the Spring 2023 semester, I took CS7637 Knowledge-Based Artificial Intelligence. Here is my review for this course.',
        coverImage: '/assets/images/posts/OMSCS/CS7637Poster.jpg',
        tags: 'reviews,omscs,gatech',
        subPath: 'omscs7637'
    },
    {
        title: 'OMSCS: Fall 2022',
        date: 'December 18 2022',
        excerpt: 'For the Fall 2022 semester, I took CS6250 Computer Networks and CS6300 Software Development Process. Here is my review of these courses.',
        coverImage: '/assets/images/posts/OMSCS/CS6300CS6250Poster.jpg',
        tags: 'reviews,omscs,gatech',
        subPath: 'omscs63106750'
    },
    {
        title: 'OMSCS: Spring 2022',
        date: 'December 22 2022',
        excerpt: 'For the Spring 2022 semester, I took CS6310 Software Architecture and Design and CS6750 Human Computer Interaction. Here is my review of these courses.',
        coverImage: '/assets/images/posts/OMSCS/CS6310CS6750Poster.jpg',
        tags: 'reviews,omscs,gatech',
        subPath: 'omscs62506300'
    },
]

export default BlogPostIndex;
