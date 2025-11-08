'use server';

/**
 * @fileOverview Summarizes the hotspots of issues displayed on the map.
 *
 * - summarizeMapHotspots - A function that summarizes the map hotspots.
 * - SummarizeMapHotspotsInput - The input type for the summarizeMapHotspots function.
 * - SummarizeMapHotspotsOutput - The return type for the summarizeMapHotspots function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeMapHotspotsInputSchema = z.object({
  issueSummaries: z.array(
    z.object({
      category: z.string(),
      location: z.string().describe('The ward or locality of the issue.'),
      count: z.number().describe('The number of issues in that ward.'),
    })
  ).describe('A list of issue summaries for each category and location.'),
});
export type SummarizeMapHotspotsInput = z.infer<typeof SummarizeMapHotspotsInputSchema>;

const SummarizeMapHotspotsOutputSchema = z.object({
  summary: z.string().describe('A summary of the issue hotspots on the map.'),
});
export type SummarizeMapHotspotsOutput = z.infer<typeof SummarizeMapHotspotsOutputSchema>;

export async function summarizeMapHotspots(input: SummarizeMapHotspotsInput): Promise<SummarizeMapHotspotsOutput> {
  return summarizeMapHotspotsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeMapHotspotsPrompt',
  input: {schema: SummarizeMapHotspotsInputSchema},
  output: {schema: SummarizeMapHotspotsOutputSchema},
  prompt: `You are a city planning assistant. Summarize the following issue summaries to identify the main problems in the area.

Issue Summaries:
{{#each issueSummaries}}
- Category: {{this.category}}, Location: {{this.location}}, Count: {{this.count}}
{{/each}}

A concise summary of the main problems in the area:
`,
});

const summarizeMapHotspotsFlow = ai.defineFlow(
  {
    name: 'summarizeMapHotspotsFlow',
    inputSchema: SummarizeMapHotspotsInputSchema,
    outputSchema: SummarizeMapHotspotsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
