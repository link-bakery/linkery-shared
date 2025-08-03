import { z } from 'zod';

export const RedirectSchema = z.strictObject({
  id: z.number().min(1),
  path: z.string().min(1),
  redirectTo: z.string().min(1),
});

export type Redirect = z.infer<typeof RedirectSchema>;