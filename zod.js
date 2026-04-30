import { z } from "zod";

const BookSchema = z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    author: z.string(),
    year: z.number().int().min(1).max(new Date().getFullYear()),
    tags: z.array(z.strings()),
    inStock: z.boolean()
});

// Throws a detailed error if invalid
const book = BookSchema.parse(incomingBook);

// Or get a result you can branch on
const result = BookSchema.safeParse(incomingBook);