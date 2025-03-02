"use client";

import CommentForm from "./BlogCommentForm";
import CommentList from "./BlogCommentList";
import { GetCommentsResult } from "@wisp-cms/client";

interface CommentSectionProps {
    slug: string;
    comments: GetCommentsResult
}

export default function CommentSection({ slug, comments }: CommentSectionProps) {

    const isLoading: boolean = comments.comments === null || comments.comments === undefined;

    if (isLoading) {
        <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    }

    return (
        <div>
            <h2 className="mb-8 text-2xl font-bold tracking-tight">Add Comments</h2>
            <CommentForm slug={slug} config={comments.config} />
            <h2 className="mb-8 mt-16 text-2xl font-bold tracking-tight">Comments</h2>
            <CommentList
                comments={comments.comments}
                pagination={comments.pagination}
                config={comments.config}
                isLoading={isLoading}
            />
        </div>
    );
}