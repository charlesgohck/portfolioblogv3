"use client";

import React, { useState, useEffect } from "react";

export type ToastVariant = "default" | "success" | "error" | "warning" | "info";

export interface ToastProps {
    id: number;
    title: string;
    description?: string;
    variant?: ToastVariant;
}

// Global function reference to add a new toast.
// It will be set when the Toast component mounts.
let addToastGlobal: ((toast: Omit<ToastProps, "id">) => void) | null = null;

// Called by the hook or any module to trigger a toast.
export function toast(toastProps: Omit<ToastProps, "id">) {
    if (addToastGlobal) {
        addToastGlobal(toastProps);
    } else {
        console.warn("Toast system is not initialized yet.");
    }
}

export default function Toast() {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    useEffect(() => {
        // Set the global toast function when the component mounts
        addToastGlobal = ({ title, description, variant = "default" }) => {
            const id = Date.now();
            setToasts((prev) => [...prev, { id, title, description, variant }]);
            // Auto dismiss after 5 seconds
            setTimeout(() => {
                setToasts((prev) => prev.filter((toast) => toast.id !== id));
            }, 5000);
        };

        // Clean up on unmount
        return () => {
            addToastGlobal = null;
        };
    }, []);

    return (
        <div className="toast toast-top toast-end">
            {toasts.map((t) => (
                <div key={t.id} className={`alert alert-${t.variant}`}>
                    <div>
                        <strong>{t.title}</strong>
                        {t.description && <div>{t.description}</div>}
                    </div>
                </div>
            ))}
        </div>
    );
}
