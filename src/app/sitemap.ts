import { wisp } from "@/lib/wisp";
import { MetadataRoute } from "next";

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    let posts = await wisp.getPosts({ limit: "all" });
    const blogPostSiteMapArray: MetadataRoute.Sitemap = posts.posts.map(details => {
        return {
            url: `https://charlesgohck.com/blog/${details.slug}`,
            lastModified: currentDateTime,
            changeFrequency: "monthly",
            priority: 0.5,
        }
    });
    let finalSiteMapArray: MetadataRoute.Sitemap = siteMapArray.concat(blogPostSiteMapArray);
    return finalSiteMapArray;
}