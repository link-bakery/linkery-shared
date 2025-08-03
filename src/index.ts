import { z } from 'zod';

export const RedirectSchema = z.strictObject({
  id: z.number().optional(),
  path: z.string().min(1),
  redirectTo: z.string().min(1),
});

export type Redirect = z.infer<typeof RedirectSchema>;