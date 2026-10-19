import { AgentCardData, AnalysisData, QuadrantMeta } from '../types';

export const QUADRANTS: Record<string, QuadrantMeta> = {
  'top-left': {
    id: 'top-left',
    title: 'A person leads, AI inside',
    subtitle: 'The person leads and AI works inside.',
    positionLabel: 'A person leads, AI inside (top left)',
    answerType: 'right-answer',
    answerLabel: 'Work with a right answer',
    collaborationType: 'together',
    collaborationLabel: 'Work that people and AI must do together',
    cardBgClass: 'bg-[#FCF9FD] dark:bg-[#201928]/60',
    borderClass: 'border-[#EADEF0] dark:border-[#4B3B5E]',
    activeBorderClass: 'ring-2 ring-[#6B3B8B] border-[#6B3B8B] dark:ring-[#B388FF]',
    summaryGuidance:
      'The human initiates, steers, and shapes the process; AI executes discrete, verifiable sub-tasks with deterministic accuracy.',
  },
  'top-right': {
    id: 'top-right',
    title: 'Agents run it, a person judges',
    subtitle: 'Agents run the process and a person judges inside it.',
    positionLabel: 'Agents run it, a person judges (top right)',
    answerType: 'no-single-right-answer',
    answerLabel: 'Work with no single right answer',
    collaborationType: 'together',
    collaborationLabel: 'Work that people and AI must do together',
    cardBgClass: 'bg-[#F4F9FB] dark:bg-[#142630]/60',
    borderClass: 'border-[#D4E8EE] dark:border-[#284957]',
    activeBorderClass: 'ring-2 ring-[#02848A] border-[#02848A] dark:ring-[#38D9D6]',
    summaryGuidance:
      'The agent drives discovery, aggregation, and synthesis across subjective spaces, while a person provides judgment, editorial gatekeeping, and final approval.',
  },
  'bottom-left': {
    id: 'bottom-left',
    title: 'AI alone, with checks',
    subtitle: 'AI does it, with spot checks.',
    positionLabel: 'AI alone, with checks (bottom left)',
    answerType: 'right-answer',
    answerLabel: 'Work with a right answer',
    collaborationType: 'alone',
    collaborationLabel: 'Work that either of them can do alone',
    cardBgClass: 'bg-[#F4F9FB] dark:bg-[#142630]/60',
    borderClass: 'border-[#D4E8EE] dark:border-[#284957]',
    activeBorderClass: 'ring-2 ring-[#02848A] border-[#02848A] dark:ring-[#38D9D6]',
    summaryGuidance:
      'Automated end-to-end execution where objective correctness exists; humans only perform periodic spot checks and telemetry audits.',
  },
  'bottom-right': {
    id: 'bottom-right',
    title: 'A person decides, AI alongside',
    subtitle: 'A person decides with AI alongside.',
    positionLabel: 'A person decides, AI alongside (bottom right)',
    answerType: 'no-single-right-answer',
    answerLabel: 'Work with no single right answer',
    collaborationType: 'alone',
    collaborationLabel: 'Work that either of them can do alone',
    cardBgClass: 'bg-[#FCF9FD] dark:bg-[#201928]/60',
    borderClass: 'border-[#EADEF0] dark:border-[#4B3B5E]',
    activeBorderClass: 'ring-2 ring-[#6B3B8B] border-[#6B3B8B] dark:ring-[#B388FF]',
    summaryGuidance:
      'The human makes subjective decisions independently, with AI available in parallel as a secondary sounding board or brainstorming companion.',
  },
};

export const INITIAL_AGENT_CARD_DATA: AgentCardData = {
  agentName: 'AI Business & Productivity Intelligence',
  finishedDateTime: '17 October 2026, 7:35 PM SGT',
  job: 'Acts as an AI Business Transformation and GitHub Productivity Intelligence Scout for the workflow owner. Researches AI business developments and practical GitHub tools, evaluates their impact, and produces a briefing with recommendations.',
  trigger: 'Runs automatically every day at 10:00 AM Singapore Time, including weekends, using Schedule by Zapier.',
  tools: `- Schedule by Zapier: Triggers daily runs.
- Web Search: Searches AI business news and GitHub repositories.
- AI by Zapier: Analyses, ranks and summarises findings.
- Zapier Tables: Creates a record of the briefing.
- Gmail: Sends the formatted briefing to the owner's email address.`,
  mustNever: "Automatically distribute briefings to external recipients. The Gmail action's recipient is fixed to the owner's email address, with group sending disabled.",
  humanCheck: 'The workflow owner reviews the emailed briefing after each run, verifying sources and recommendations before sharing findings or acting on them.',
};

export const EMPTY_PLACEHOLDER_AGENT_CARD_DATA: AgentCardData = {
  agentName: '[AGENT\'S NAME]',
  finishedDateTime: '[DATE AND TIME]',
  job: '[WHAT IT DOES, AND FOR WHOM, BY ROLE]',
  trigger: '[WHAT STARTS A RUN]',
  tools: '[EACH APP AND ACTION IT CAN USE]',
  mustNever: '[ONE THING, AND THE SETTING THAT STOPS IT]',
  humanCheck: '[WHO READS THE OUTPUT, AND WHEN]',
};

export const INITIAL_ANALYSIS_DATA: AnalysisData = {
  quadrant: 'top-right',
  questionA:
    'My agent sits in the top-right quadrant: "Agents run it, a person judges." It independently researches AI business news and GitHub productivity tools, evaluates findings, and generates daily briefings. Human judgment remains necessary to assess the recommendations before acting on them.',
  questionB:
    'Work with no single right answer: Selecting relevant news and recommending productivity tools involves subjective judgments about business impact and reliability. Different recommendations could also be valid.\n\nWork that people and AI must do together: AI handles repetitive research, analysis, and reporting, while I verify the evidence and evaluate whether recommendations suit my needs. Both contribute to producing actionable insights.',
  questionC:
    'The agent can independently search, analyse, rank, and email briefings. My human review gate comes after receiving the briefing, where I check source credibility and relevance before sharing findings or adopting tools. The current workflow has no approval gate before emailing me.\n\nIf the task became routine factual reporting with objectively verifiable answers, it could move to "AI alone, with checks." Alternatively, if I personally directed the research and made the selections while AI only assisted, it would move toward "A person decides, AI alongside."',
  questionD:
    `The group initially placed:
• Finance: Analyst Research → "AI alone, with checks"
• Operations: Escalations of Disputes → "Agents run it, a person judges"

This might change depending on the details of the workflow: are we getting AI to decide/propose, or are we getting AI to compile data for us to make a judgement?

For Finance: Analyst Research
• This could go to "A person decides, AI alongside"
• AI does the research and surfaces the data, while a human decides.
• This prevents AI from only showing us what the model deemed as important, which will already filter out information unknowingly.

For Operations: Escalations of Disputes
• This could go to "Agents run it, a person judges"
• Because this would be more efficient if the volume of cases is large.
• Also, it helps maintain a standard resolution framework (e.g. prevents a different outcome from same scenarios).
• The risk is humans might tend to approve what is shown, hence there needs to be an audit process to ensure consistency.`,
  delegated:
    'I delegated daily AI business news research, GitHub tool discovery, evaluation, ranking, and briefing generation to my Zapier agent.',
  checkedAndHow:
    'I reviewed the generated briefing, checked article publication dates against the reporting date, and tested the Zapier Formatter\'s date calculation to improve search accuracy.',
  errorCaught:
    'The agent included a June 2026 article in its 17 October 2026 briefing, despite instructions to prioritise recent news. To address this, I tested a dynamic seven-day date filter using Zapier Formatter, which can be applied to future searches.',
  reflection:
    'My agent fitted the job well by automating repetitive research, evaluating sources, and producing structured daily briefings with minimal intervention.\n\nHowever, it occasionally prioritised older news, reducing the relevance of a daily briefing.\n\nI would introduce stricter publication-date filters, improve source verification, and add a human approval step before sharing recommendations externally.',
};

export const EMPTY_PLACEHOLDER_ANALYSIS_DATA: AnalysisData = {
  quadrant: 'top-right',
  questionA: 'Agents run it, a person judges (top right)',
  questionB: '[Justify it with the map’s two questions, using evidence from your runs. Is the job work with a right answer or work with no single right answer? Is it work that people and AI must do together or work that either of them can do alone?]',
  questionC: '[Then say what this means for the human in the loop: where a person stays at the gate and what they check, what your agent may do alone, and what would move it to another quadrant.]',
  questionD: '[Last, do you agree with where your group placed its agents in class? Name any of the map’s two questions you would answer differently from your group, and why. About half a page is enough.]',
  delegated: '[What tasks did you delegate to the agent?]',
  checkedAndHow: '[What outputs did you check and through what method?]',
  errorCaught: '[What specific AI error did you encounter and how did you resolve it?]',
  reflection: '[Reflect on agent job-fit, limitations observed, and future governance improvements.]',
};
