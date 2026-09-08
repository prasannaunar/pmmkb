import { getAllEntries, type Entry } from "./content";
import type { QuizQuestion } from "./quiz";
export interface GuideStep {
  entry: string;
  why: string;
}
export interface Guide {
  slug: string;
  title: string;
  description: string;
  outcome: string;
  steps: GuideStep[];
}
const step = (entry: string, why: string): GuideStep => ({ entry, why });
export const challenges: Guide[] = [
  {
    slug: "messaging",
    title: "Our messaging sounds generic",
    description:
      "Work back from the message to the customer, competitive alternative and value it should express.",
    outcome: "A differentiated message supported by customer evidence.",
    steps: [
      step(
        "April Dunford's 5-Component Positioning Canvas",
        "Establish why best-fit customers choose you over the alternatives.",
      ),
      step(
        "Message Architecture (Messaging House)",
        "Turn that position into a core message, pillars and proof.",
      ),
      step(
        "Message Testing (Message-Market Fit)",
        "Test clarity, relevance and differentiation with buyers before shipping.",
      ),
    ],
  },
  {
    slug: "launch",
    title: "We're launching a product",
    description:
      "Make the key launch decisions in a deliberate order. Add specialist methods as your launch requires them.",
    outcome:
      "A proportionate launch plan built on a clear audience and acquisition motion.",
    steps: [
      step(
        "Launch Tier Framework (Tier 1/2/3)",
        "Decide the scale of the launch before committing resources.",
      ),
      step(
        "Segmentation–Targeting–Positioning (STP) Framework",
        "Define the audience the launch must reach.",
      ),
      step(
        "Geoffrey Moore's Positioning Statement Framework",
        "Agree the value and competitive difference you will communicate.",
      ),
      step(
        "GTM Motion Model",
        "Match the acquisition motion to the buyer and contract value.",
      ),
      step(
        "Complete GTM Workflow Stages",
        "Bring the work together with clear phases and decision gates.",
      ),
      step(
        "Pre-mortem",
        "Find failure risks while there is still time to act.",
      ),
    ],
  },
  {
    slug: "competition",
    title: "We keep losing to a competitor",
    description:
      "Find out what is happening in buyers' decisions, then turn the evidence into useful guidance.",
    outcome:
      "A response to the real causes of losses, with practical help for sales.",
    steps: [
      step(
        "Win/Loss Analysis Framework",
        "Hear why buyers made their decision before assuming the cause.",
      ),
      step(
        "Product Differentiation Strategy Framework",
        "Identify a defensible difference that matters to those buyers.",
      ),
      step(
        "Competitive Battlecard Framework",
        "Give reps evidence and guidance for the next competitive conversation.",
      ),
      step(
        "VARS Framework (Validate, Acknowledge, Reframe, Specify)",
        "Practise responding to objections without dismissing the buyer.",
      ),
    ],
  },
  {
    slug: "adoption",
    title: "Customers aren't finding value",
    description:
      "Trace where the customer promise breaks down, then focus on the behaviour that delivers value.",
    outcome:
      "A focused plan for helping customers reach and repeat a meaningful value moment.",
    steps: [
      step(
        "Complete Product Experience Framework",
        "Check where the promise and the experience diverge.",
      ),
      step(
        "Time to Value Framework",
        "Define the first meaningful value milestone and measure the delay.",
      ),
      step(
        "Customer Onboarding Maturity Framework",
        "Diagnose the onboarding experience that leads to that milestone.",
      ),
      step(
        "Feature Adoption Framework",
        "Help customers discover and repeat valuable behaviours.",
      ),
    ],
  },
  {
    slug: "pricing",
    title: "We need to rethink pricing",
    description:
      "Begin with the value customers receive, then choose the research method for the decision you need to make.",
    outcome: "A value-based pricing hypothesis and a research plan to test it.",
    steps: [
      step(
        "Value Metric / Willingness-to-Pay Framework",
        "Decide the unit of value before debating price points.",
      ),
      step(
        "Good-Better-Best (GBB) Packaging Framework",
        "Build packages around distinct customer needs.",
      ),
      step(
        "Conjoint Analysis",
        "Use this when the question involves trade-offs between features and price.",
      ),
      step(
        "Gabor-Granger Method",
        "Use this instead when the offer is fixed and you need to compare specific prices.",
      ),
    ],
  },
  {
    slug: "planning",
    title: "Too many priorities, too little time",
    description:
      "Make the strategic choices explicit, then translate them into work the team can realistically deliver.",
    outcome: "A quarter of focused PMM priorities with ownership and measures.",
    steps: [
      step(
        "Playing to Win (Strategic Choice Cascade)",
        "Agree where to play and how to win before building an activity list.",
      ),
      step(
        "Quarterly PMM Planning Framework",
        "Connect each priority to a business outcome and an owner.",
      ),
      step(
        "PMM Team Scaling Framework",
        "Check whether responsibilities and capacity fit the work.",
      ),
    ],
  },
  {
    slug: "new-market",
    title: "We're entering a new market",
    description:
      "Validate the audience and buying context before carrying your current positioning into a new segment.",
    outcome:
      "An evidence-based target segment and a positioning hypothesis to validate.",
    steps: [
      step(
        "Playing to Win (Strategic Choice Cascade)",
        "Frame why this market is an attractive strategic choice.",
      ),
      step(
        "Segmentation–Targeting–Positioning (STP) Framework",
        "Identify and prioritise the audience.",
      ),
      step(
        "ICP Development Methodology",
        "Translate the chosen segment into account-fit criteria.",
      ),
      step(
        "Value Proposition Canvas",
        "Check how your value matches the new segment's needs.",
      ),
    ],
  },
  {
    slug: "advocacy",
    title: "We want to build customer advocacy",
    description:
      "Start with the experience and the relationship before asking customers to recommend you.",
    outcome: "A more deliberate approach to customer feedback and advocacy.",
    steps: [
      step(
        "Net Promoter Score (NPS) & Feedback Loop Framework",
        "Listen to customer sentiment and close the loop on issues.",
      ),
      step(
        "Forrester Customer Advocacy Model",
        "Assess your advocacy approach and choose what to develop next.",
      ),
      step(
        "Voice of the Customer (VoC) Programme",
        "Keep customer input connected to decisions across the business.",
      ),
    ],
  },
  {
    slug: "enablement",
    title: "Sales needs more useful support",
    description:
      "Diagnose the gap between the material you produce and the help buyers and reps actually need.",
    outcome:
      "Enablement priorities grounded in sales needs and the buying journey.",
    steps: [
      step(
        "Sales Enablement Maturity Model",
        "Assess the system before commissioning more collateral.",
      ),
      step(
        "Buyer's Journey Content Map",
        "Identify the buyer questions your current content misses.",
      ),
      step(
        "Command of the Message",
        "Connect the material to a practical value conversation.",
      ),
    ],
  },
];
export const learningPaths: Guide[] = [
  {
    slug: "foundations",
    title: "Build your PMM foundations",
    description:
      "For new PMMs and collaborators who want to understand how market knowledge becomes positioning and communication.",
    outcome:
      "Explain how customer understanding, positioning and messaging build on one another.",
    steps: [
      step(
        "GTM Strategy vs Product Marketing",
        "Understand where PMM fits within the broader go-to-market effort.",
      ),
      step(
        "Segmentation–Targeting–Positioning (STP) Framework",
        "Choose the audience before deciding what to say.",
      ),
      step(
        "Geoffrey Moore's Positioning Statement Framework",
        "Express the customer, value and competitive difference clearly.",
      ),
      step(
        "Message Architecture (Messaging House)",
        "Connect that position to a message the whole team can use.",
      ),
    ],
  },
  {
    slug: "positioning-to-messaging",
    title: "Turn positioning into messaging",
    description:
      "For PMMs refreshing a message or creating a shared foundation for campaigns and sales.",
    outcome: "Move from a positioning decision to buyer-tested messaging.",
    steps: [
      step(
        "April Dunford's 5-Component Positioning Canvas",
        "Connect differentiated attributes to customer value.",
      ),
      step(
        "Message Architecture (Messaging House)",
        "Build the core message, pillars and proof.",
      ),
      step(
        "Features-Advantages-Benefits (FAB) Ladder",
        "Translate a feature into a buyer outcome.",
      ),
      step(
        "Message Testing (Message-Market Fit)",
        "Validate the message with your intended audience.",
      ),
    ],
  },
  {
    slug: "launch-with-confidence",
    title: "Plan a launch with confidence",
    description:
      "For PMMs who want to connect launch scope, audience, acquisition motion and execution.",
    outcome:
      "Explain the key launch decisions and recognise when to use each method.",
    steps: [
      step(
        "Launch Tier Framework (Tier 1/2/3)",
        "Scale the effort to the significance of the launch.",
      ),
      step(
        "Segmentation–Targeting–Positioning (STP) Framework",
        "Choose who the launch is for.",
      ),
      step(
        "GTM Motion Model",
        "Choose how the product will reach those buyers.",
      ),
      step(
        "Complete GTM Workflow Stages",
        "Sequence the work and define decision gates.",
      ),
      step("Pre-mortem", "Pressure-test the plan before it goes live."),
    ],
  },
];
export function resolveSteps(guide: Guide): (GuideStep & { item: Entry })[] {
  const entries = getAllEntries();
  return guide.steps.map((s) => {
    const item = entries.find((e) => e.title === s.entry);
    if (!item) throw new Error(`Missing guide entry: ${s.entry}`);
    return { ...s, item };
  });
}
export interface ReviewLink {
  href: string;
  label: string;
}
export function pathQuiz(guide: Guide): {
  questions: QuizQuestion[];
  reviews: ReviewLink[];
} {
  // A deliberate selection tests each step of the path. The entry/category
  // quizzes remain intact; these questions are additional cross-method cases.
  const scenarios: Record<
    string,
    [string, number, string, string, string, string][]
  > = {
    foundations: [
      [
        "A new PMM is asked to own every sales and product decision because they now own 'GTM'. What should happen first?",
        0,
        "Clarify PMM's contribution and the cross-functional ownership of the wider GTM strategy.",
        "Create a messaging house to assign every commercial decision to PMM.",
        "Choose an acquisition motion before discussing responsibilities.",
        "Adopt a launch checklist as the definition of the PMM role.",
      ],
      [
        "A team wants a single positioning statement for freelancers and regulated enterprises, but their needs conflict. What should it do first?",
        1,
        "Use STP to choose a specific target segment before drafting the statement.",
        "Keep both audiences and shorten the statement until it fits one paragraph.",
        "Write a messaging pillar for every feature so both groups are covered.",
        "Ask sales to pick whichever audience is easiest in each conversation.",
      ],
      [
        "The team has agreed its target segment but still describes itself as 'an innovative platform'. Which next step forces a clearer position?",
        2,
        "Use Moore's statement to name the need, category, benefit, alternative and differentiation.",
        "Broaden the target segment until more prospects recognise the message.",
        "Create separate campaign headlines before settling the competitive alternative.",
        "Set the launch tier to decide what the product should stand for.",
      ],
      [
        "Positioning is agreed, but every campaign makes a different claim. What should the PMM build next?",
        3,
        "A messaging house with a shared core message, pillars and supporting proof.",
        "A new target segment for every campaign so each claim has an audience.",
        "A new positioning statement for every channel to maximise variation.",
        "A launch plan that increases campaign volume before resolving the claims.",
      ],
      [
        "A polished messaging house fails because its audience was never validated. Where should the team return?",
        1,
        "Revisit segmentation and targeting before revising the downstream message.",
        "Add more proof points to the same pillars without checking the audience.",
        "Shorten every headline while keeping the same audience assumption.",
        "Produce a new sales deck to standardise the existing message.",
      ],
    ],
    "positioning-to-messaging": [
      [
        "A team starts debating homepage headlines but cannot explain why customers choose it over doing nothing. What should happen first?",
        0,
        "Use the positioning canvas to examine alternatives, attributes and customer value.",
        "Use FAB to rewrite every feature before discussing alternatives.",
        "Test headline punctuation with buyers before settling the value claim.",
        "Create more messaging pillars to accommodate every internal opinion.",
      ],
      [
        "The positioning canvas is agreed, but writers need a consistent hierarchy for different assets. What is the next step?",
        1,
        "Create a messaging house grounded in the validated position.",
        "Run the positioning workshop again for each asset.",
        "Use a different competitive alternative for each channel.",
        "Treat the most popular headline as the entire message hierarchy.",
      ],
      [
        "A pillar promises less manual work, but its proof only says 'automated enrichment'. Which method helps connect the feature to the buyer?",
        2,
        "Use FAB to explain the capability and the outcome it enables.",
        "Add another high-level pillar about innovation.",
        "Change the product category to make the feature sound unique.",
        "Remove the proof point and repeat the benefit without evidence.",
      ],
      [
        "Internal stakeholders love a draft, but nobody knows whether buyers understand it. What should the PMM do?",
        3,
        "Test clarity, relevance and differentiation with the intended buyer audience.",
        "Choose the draft with the most internal votes.",
        "Add more features to ensure every possible use case is represented.",
        "Ship the draft and judge its meaning from page views alone.",
      ],
      [
        "Buyer testing finds a clear headline but little reason to switch. What is the strongest response?",
        0,
        "Revisit the differentiated value and alternatives, then revise and test the message.",
        "Keep the claim and make the headline shorter.",
        "Add more brand adjectives to increase distinctiveness.",
        "Move the unchanged claim into a new page layout.",
      ],
    ],
    "launch-with-confidence": [
      [
        "A routine feature update receives the same launch plan as a new product. What should the PMM use first?",
        0,
        "The Launch Tier Framework to match effort to impact and coordination needs.",
        "The GTM Motion Model to choose the number of launch assets.",
        "STP to choose a larger audience and justify the existing effort.",
        "A pre-mortem to approve the existing resource commitment.",
      ],
      [
        "A launch has a tier and budget but no clear customer segment. Which decision is missing?",
        1,
        "Use STP to select and validate the audience before locking the message and motion.",
        "Choose the highest-reach channel before deciding who should buy.",
        "Write a positioning statement for everyone in the market.",
        "Add more launch phases to reduce uncertainty about the audience.",
      ],
      [
        "A high-value product requires a buying committee, but the plan assumes fully self-serve acquisition. What should be revisited?",
        2,
        "Use the GTM Motion Model to check the fit with buyer complexity and contract value.",
        "Raise the launch tier so self-serve receives more promotional budget.",
        "Keep the motion and add more messaging pillars.",
        "Run a pre-mortem only after the first launch results arrive.",
      ],
      [
        "The audience and motion are agreed, but teams lack shared milestones and go/no-go criteria. Which method fits?",
        3,
        "Use Complete GTM Workflow Stages to coordinate phases and decision gates.",
        "Use STP to write an activity list for every team.",
        "Use the launch tier as a substitute for the execution plan.",
        "Use the positioning statement to assign all operational deadlines.",
      ],
      [
        "A launch plan is ready, but the team has not surfaced reasons it could fail. What should happen before go-live?",
        4,
        "Run a pre-mortem and assign owners to the highest-priority mitigations.",
        "Wait for post-launch results before discussing failure scenarios.",
        "Change the target segment to avoid reviewing the existing plan.",
        "Increase promotion to compensate for unidentified execution risks.",
      ],
    ],
  };
  const steps = resolveSteps(guide);
  const rows = scenarios[guide.slug] || [];
  const reasons: Record<string, string[][]> = {
    foundations: [
      [
        "A messaging house structures claims and proof; it does not assign commercial ownership.",
        "An acquisition motion does not clarify responsibilities across teams.",
        "A launch checklist covers only part of product marketing's scope.",
      ],
      [
        "Shorter wording cannot reconcile audiences with conflicting needs.",
        "Listing more features avoids choosing whose needs matter most.",
        "Leaving targeting to each conversation prevents a shared positioning decision.",
      ],
      [
        "Broadening the audience makes the vague position less specific.",
        "Campaign headlines depend on the underlying competitive position.",
        "Launch tiering determines effort, not what the product stands for.",
      ],
      [
        "Creating a segment per campaign fragments the agreed audience.",
        "A new position per channel undermines the consistency the team needs.",
        "More campaigns multiply the inconsistent claims.",
      ],
      [
        "Proof points do not establish whether the chosen audience is right.",
        "Shorter headlines leave the audience assumption intact.",
        "A new deck standardises the same unsupported audience choice.",
      ],
    ],
    "positioning-to-messaging": [
      [
        "FAB translates a feature into an outcome; it cannot replace the positioning decision.",
        "Punctuation testing cannot establish why a buyer should switch.",
        "More pillars accommodate disagreement without resolving the position.",
      ],
      [
        "Reopening positioning per asset creates unnecessary strategic variation.",
        "Changing alternatives by channel breaks the shared positioning foundation.",
        "One headline is not a hierarchy of claims and supporting evidence.",
      ],
      [
        "Another abstract pillar moves away from the concrete buyer outcome.",
        "Renaming the category does not explain what the capability enables.",
        "Removing proof makes the benefit less credible.",
      ],
      [
        "Internal preferences do not show what buyers understand or value.",
        "More features increase complexity without testing comprehension.",
        "Page views measure visits, not whether the intended message was understood.",
      ],
      [
        "The headline is already clear; brevity does not create a reason to switch.",
        "Brand adjectives add assertion rather than differentiated value.",
        "A new layout leaves the weak value claim unresolved.",
      ],
    ],
    "launch-with-confidence": [
      [
        "The GTM Motion Model selects acquisition approaches, not launch effort.",
        "Targeting should reflect evidence, not justify a preselected budget.",
        "A pre-mortem identifies risks; tiering establishes proportionate scope.",
      ],
      [
        "Channel reach cannot substitute for deciding which buyers to serve.",
        "Positioning for everyone preserves the missing targeting decision.",
        "More phases organise work but do not validate an audience.",
      ],
      [
        "More promotion cannot fix a mismatch with the buying process.",
        "Messaging pillars do not remove the needs of a buying committee.",
        "Waiting for results misses the chance to correct the motion before investing.",
      ],
      [
        "STP defines the audience and position rather than operational workflow.",
        "A launch tier does not supply shared phases or decision gates.",
        "A positioning statement explains value rather than operational deadlines.",
      ],
      [
        "Waiting turns preventable risks into recovery work.",
        "Changing the segment without evidence sidesteps the existing plan.",
        "More promotion can magnify an execution problem.",
      ],
    ],
  };
  return {
    questions: rows.map(([stem, index, correct, ...wrong], i) => {
      const review = steps[index];
      const options = [
        {
          text: correct,
          correct: true,
          feedback: `This addresses the decision the scenario leaves unresolved. ${review.why}`,
        },
        ...wrong.map((text, optionIndex) => ({
          text,
          correct: false,
          feedback: `${reasons[guide.slug][i][optionIndex]} ${correct}`,
        })),
      ];
      const offset = (i + 1) % 4;
      return {
        number: i + 1,
        stem,
        options: [...options.slice(offset), ...options.slice(0, offset)],
      };
    }),
    reviews: rows.map(([, index]) => ({
      href: `/framework/${steps[index].item.slug}`,
      label: steps[index].item.title,
    })),
  };
}
