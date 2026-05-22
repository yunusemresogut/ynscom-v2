import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, "Başlık gerekli").max(200),
  slug: z
    .string()
    .min(1, "Slug gerekli")
    .max(200)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Geçersiz slug formatı"),
  excerpt: z.string().min(1, "Özet gerekli").max(500),
  content: z.string().min(1, "İçerik gerekli"),
  tags: z.string().optional(),
  published: z.boolean(),
  coverImageUrl: z.string().optional(),
});

export type PostFormData = z.infer<typeof postSchema>;
