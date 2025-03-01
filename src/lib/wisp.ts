import {
    buildWispClient,
    GetPostsResult,
    GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
    blogId: process.env.BLOG_ID || "",
});

export type { GetPostsResult, GetPostResult };
