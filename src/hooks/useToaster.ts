import { toast as showToast } from "@/components/Toast";

export function useToast() {
  // Simply return the global toast function
  return { toast: showToast };
}
