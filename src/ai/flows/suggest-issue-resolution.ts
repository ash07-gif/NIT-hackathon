'use server';

/**
 * @fileOverview A flow to suggest issue resolutions based on historical data.
 *
 * - suggestIssueResolution - A function that suggests a resolution for an issue.
 * - SuggestIssueResolutionInput - The input type for the suggestIssueResolution function.
 * - SuggestIssueResolutionOutput - The return type for the suggestIssueResolution function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestIssueResolutionInputSchema = z.object({
  issueCategory: z.string().describe('The category of the issue (e.g., Road, Water, Lighting).'),
  issueDescription: z.string().describe('A detailed description of the issue.'),
  locality: z.string().describe('The locality where the issue is reported.'),
});

export type SuggestIssueResolutionInput = z.infer<typeof SuggestIssueResolutionInputSchema>;

const SuggestIssueResolutionOutputSchema = z.object({
  suggestedResolution: z
    .string()
    .describe('A suggested resolution for the issue based on historical data.'),
});

export type SuggestIssueResolutionOutput = z.infer<typeof SuggestIssueResolutionOutputSchema>;

export async function suggestIssueResolution(input: SuggestIssueResolutionInput): Promise<SuggestIssueResolutionOutput> {
  return suggestIssueResolutionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestIssueResolutionPrompt',
  input: {schema: SuggestIssueResolutionInputSchema},
  output: {schema: SuggestIssueResolutionOutputSchema},
  prompt: `You are an expert municipal administrator. Based on historical data of similar issues in the same locality, suggest a resolution for the following issue:

Category: {{{issueCategory}}}
Description: {{{issueDescription}}}
Locality: {{{locality}}}

Provide a detailed and practical suggested resolution.`,
});

const suggestIssueResolutionFlow = ai.defineFlow(
  {
    name: 'suggestIssueResolutionFlow',
    inputSchema: SuggestIssueResolutionInputSchema,
    outputSchema: SuggestIssueResolutionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
