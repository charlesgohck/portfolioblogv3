import { PostInfo } from "../../../posts/PostIndex";
import dotenv from 'dotenv';

dotenv.config();

// Utility Helper Functions
export const sortByDate = (a: PostInfo, b: PostInfo): number => {
    const aDate: Date = new Date(a.date);
    const bDate: Date = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
}
// Utility Helper Functions