"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/useToaster";
import axios from 'axios';
import { CreateCommentInput, CreateCommentResult } from "@wisp-cms/client";
import { Dispatch, SetStateAction, useState } from "react";
import { wisp } from "@/lib/wisp";

const formSchema = z.object({
    author: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    url: z
        .union([z.string().url("Please enter a valid URL"), z.string().max(0)])
        .optional(),
    content: z.string().min(1, "Comment cannot be empty"),
    allowEmailUsage: z.boolean(),
});

interface CommentFormProps {
    slug: string;
    config: {
        enabled: boolean;
        allowUrls: boolean;
        allowNested: boolean;
        signUpMessage: string | null;
    };
    parentId?: string;
    setIsSubmitting: Dispatch<SetStateAction<boolean>>
    onSuccess?: () => void;
}

export default function CommentForm({ slug, config, setIsSubmitting }: CommentFormProps) {
    const { toast } = useToast();
    const [data, setData] = useState<null|CreateCommentResult>()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            author: "",
            email: "",
            url: "",
            content: "",
            allowEmailUsage: false,
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log("Attempting to create new comment.");
            setIsSubmitting(true);
            const createCommentInput: CreateCommentInput = {
                ...values, slug
            }
            wisp.createComment(createCommentInput).then(
                data => {
                    setData(data);
                    if (data.success) {
                        console.log("Comment submitted successfully. Resetting form.");
                        toast({ title: "Success", description: "Thanks for commenting. Please verify via email.", variant: "success" })
                        form.reset();
                    } else {
                        console.log("Comment creation failed. Please retry.")
                        toast({ title: "Error", description: "Comment creation failed. Please retry.", variant: "error" })
                    }
                }
            ).catch(error => {
                console.log("Comment creation caught error.");
                toast({ title: "Error", description: `Comment creation failed.`, variant: "error" })
            }).finally(() => setIsSubmitting(false));
        } catch (e) {
            if (e instanceof Error) {
                toast({
                    title: "Error",
                    description: e.message,
                    variant: "error",
                });
            }
        }
    };

    if (data?.success) {
        return (
            <div role="alert" className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Pending email verification. Thanks for your comment! Please check your email to verify your
                        email and post your comment. If you don&apos;t see it in your inbox,
                        please check your spam folder.
                </span>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 items-start">
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Your name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="you@example.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {config.allowUrls && (
                    <FormField
                        control={form.control}
                        name="url"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Website (optional)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="url"
                                        placeholder="https://example.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}

                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Comment</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Share your thoughts..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {config.signUpMessage && (
                    <FormField
                        control={form.control}
                        name="allowEmailUsage"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-sm font-normal">
                                        {config.signUpMessage}
                                    </FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />
                )}

                <div className="flex items-center justify-between pt-2">
                    <button className="btn btn-primary" type="submit" disabled={form.formState.isSubmitting}>
                        Post Comment
                    </button>
                </div>
            </form>
        </Form>
    );
}