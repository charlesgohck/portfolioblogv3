import { MetadataRoute } from "next";
import BlogPostIndex from './../../posts/PostIndex';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDateTime: Date = new Date();
    let siteMapArray: MetadataRoute.Sitemap = [
        {
            url: "https://charlesgohck.com",
            lastModified: currentDateTime,
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://charlesgohck.com/blog",
            lastModified: currentDateTime,
            changeFrequency: 'yearly',
            priority: 0.8,
        }
    ];
    const blogPostSiteMapArray: MetadataRoute.Sitemap = BlogPostIndex.map(details => {
        return {
            url: `https://charlesgohck.com/blog/${details.subPath}`,
            lastModified: currentDateTime,
            changeFrequency: "monthly",
            priority: 0.5,
        }
    });
    let finalSiteMapArray: MetadataRoute.Sitemap = siteMapArray.concat(blogPostSiteMapArray);
    return finalSiteMapArray;
}