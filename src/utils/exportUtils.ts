import { AgentCardData, AnalysisData } from '../types';
import { QUADRANTS } from '../constants/quadrants';

export function generateMarkdownReport(
  agentCard: AgentCardData,
  analysis: AnalysisData
): string {
  const activeQuadrant = QUADRANTS[analysis.quadrant];

  return `# MGMT6110 Problem Set 5: Agent Analysis & Two-by-Two Human-in-the-Loop Map

## Part 1: My Agent Card
**${agentCard.agentName || "[AGENT'S NAME]"}** | Finished: *${agentCard.finishedDateTime || '[DATE AND TIME]'}*

1. **The job:**
   ${agentCard.job || '[WHAT IT DOES, AND FOR WHOM, BY ROLE]'}

2. **The trigger:**
   ${agentCard.trigger || '[WHAT STARTS A RUN]'}

3. **The tools:**
\`\`\`
${agentCard.tools || '[EACH APP AND ACTION IT CAN USE]'}
\`\`\`

4. **It must never:**
   ${agentCard.mustNever || '[ONE THING, AND THE SETTING THAT STOPS IT]'}

5. **Where a person checks:**
   ${agentCard.humanCheck || '[WHO READS THE OUTPUT, AND WHEN]'}

---

## Part 2: Two-by-Two Map Positioning
- **Selected Quadrant:** **${activeQuadrant.title}**
- **Exact Map Label:** \`${activeQuadrant.positionLabel}\`
- **Question 1 Axis:** ${activeQuadrant.answerLabel}
- **Question 2 Axis:** ${activeQuadrant.collaborationLabel}
- **Core Principle:** ${activeQuadrant.subtitle}

---

## Part 3: Questions & Human-in-the-Loop Analysis

### (a) Your quadrant
${analysis.questionA || activeQuadrant.positionLabel}

### (b) The two questions
${analysis.questionB || '[Justify it with the map’s two questions, using evidence from your runs. Is the job work with a right answer or work with no single right answer? Is it work that people and AI must do together or work that either of them can do alone?]'}

### (c) The person in the loop
${analysis.questionC || '[Then say what this means for the human in the loop: where a person stays at the gate and what they check, what your agent may do alone, and what would move it to another quadrant.]'}

### (d) Your group’s view
${analysis.questionD || '[Last, do you agree with where your group placed its agents in class? Name any of the map’s two questions you would answer differently from your group, and why. About half a page is enough.]'}

### Collaboration Log
- **What I delegated:** ${analysis.delegated || '[What I delegated]'}
- **What I checked and how:** ${analysis.checkedAndHow || '[What I checked and how]'}
- **One AI error caught:** ${analysis.errorCaught || '[One AI error caught]'}

### Reflection
${analysis.reflection || '[Reflection on agent performance and human oversight]'}

---

## Part 4: Zapier Run Artifacts & Screenshots

### 1. The Zapier Flow (Verified)
- **Step 1:** Schedule by Zapier (\`Every Day\`)
- **Step 2:** Web Search by Zapier (\`Search the Web\`)
- **Step 3:** Web Search by Zapier (\`Research AI Business...\`)
- **Step 4:** AI by Zapier (\`Generate evidence-based...\`)
- **Step 5:** Zapier Tables (\`Create Item in Feed\`)
- **Step 6:** Gmail (\`Send Email\`)

### 2. The Tricky Case
- **Step 2:** Search the Web configuration (\`enterprise AI adoption business transformation case studies ROI productivity automation Singapore Asia global 2026\`).
- **Issue:** Previously, there were no controls on how recent the search should be. This led to news from June 2026 appearing in the results, which was outdated and irrelevant as we are in October 2026.

### 3. The Fix (2 Parts)
- **Part 1 (Adding Formatter by Zapier - Date / Time):**
  - Transform: \`Add/Subtract Time\`
  - Input: \`Current time\`
  - Expression: \`-7 days\`
  - Format: \`YYYY-MM-DD\`
- **Part 2 (Dynamic Search for Recent News - Last 7 Days):**
  - Appends \`after: {{2. Output: 2026-10-10}}\` to the Search Query.
  - Dynamically limits search results to fresh AI news and newly released GitHub tools from the preceding 7 days.

---
*Generated via Agent Analysis & 2x2 Map Tool for GitHub and Vercel.*
`;
}

export function downloadFile(content: string, filename: string, mimeType = 'text/markdown') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
