import type { Entry } from "./content";

export const categoryIntros: Record<number, string> = {
  1: "Understand who your customers are, what they need, and what makes them choose.",
  2: "Decide who you are for, why they should choose you, and how to express it.",
  3: "Understand your alternatives and find a position you can defend.",
  4: "Choose how to reach your market and coordinate a launch that fits the opportunity.",
  5: "Connect the work before launch to the customer journey after it.",
  6: "Help customers experience value, build better habits, and tell you what needs to change.",
  7: "Make deliberate choices about where to compete, what to prioritise, and how to organise.",
  8: "Connect what customers value to how you package and charge for it.",
  9: "Help your sales team understand the buyer, navigate the deal, and communicate value.",
  10: "Build a shared understanding of the ideas behind product marketing practice.",
};
export const cleanTitle = (title: string) =>
  title.replace(/^Category \d+: /, "");
export function plainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
export function sectionText(entry: Entry, label: string): string {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = entry.rawMarkdown.match(
    new RegExp(
      `\\*\\*${escaped}:\\*\\*\\s*([\\s\\S]*?)(?=\\n\\*\\*[A-Z][^\\n]*?:\\*\\*|$)`,
    ),
  );
  return match ? plainText(match[1]) : "";
}
export function firstSentence(text: string): string {
  return text.match(/^.*?[.!?](?:\s|$)/)?.[0].trim() || text;
}

// Editorial summaries describe the decision each entry supports. The source
// entry remains the authority for the method, examples, attribution and quiz.
export const entryGuidance: Record<string, [string, string]> = {
  "Segmentation–Targeting–Positioning (STP) Framework": [
    "You need to choose a customer segment before deciding how to position your product.",
    "A chosen segment and a clear basis for positioning.",
  ],
  "Complete Product Experience Framework": [
    "Your customer experience is not living up to your marketing promise.",
    "A view of gaps across the complete customer experience.",
  ],
  "Product Development Stage Framework": [
    "You need to know what PMM should contribute at each stage of product development.",
    "PMM activities aligned with the product's development stage.",
  ],
  "Voice of the Customer (VoC) Programme": [
    "Customer feedback is scattered and you need a repeatable way to turn it into decisions.",
    "A structured customer listening and action programme.",
  ],
  "JTBD Switch Interview Method": [
    "You need to understand what caused a customer to leave an old solution and choose a new one.",
    "Evidence of the forces and triggers behind a purchase.",
  ],
  "ICP Development Methodology": [
    "Sales needs a practical way to recognise and prioritise best-fit accounts.",
    "An evidence-based ideal customer profile and account-fit criteria.",
  ],
  "Sean Ellis 40% Test (PMF Survey)": [
    "You need to assess how strongly a customer segment depends on your product.",
    "A segment-level signal of product-market fit.",
  ],
  "MAP Model (Measure, Analyze, Prioritize)": [
    "You need to decide which of your existing customer segments deserves more investment.",
    "A prioritised view of segment performance and opportunity.",
  ],
  "Geoffrey Moore's Positioning Statement Framework": [
    "You need a concise positioning statement that aligns your team before writing copy.",
    "One paragraph defining your customer, value and differentiation.",
  ],
  "April Dunford's 5-Component Positioning Canvas": [
    "You need to connect competitive alternatives, differentiated attributes and customer value.",
    "A canvas explaining why your product wins with its best-fit customers.",
  ],
  "Jobs-to-be-Done Positioning Framework": [
    "Your positioning describes product features but misses the progress customers want to make.",
    "A position grounded in the customer's desired progress.",
  ],
  "Value Proposition Canvas": [
    "You need to connect what your product offers to a specific customer's jobs, pains and gains.",
    "A map of customer needs and the value your product delivers.",
  ],
  "Message Architecture (Messaging House)": [
    "Your team needs a shared message hierarchy for campaigns, sales and product communications.",
    "A core message, supporting pillars and proof points.",
  ],
  "Dunford's 10-Step Positioning Process": [
    "You need a research and workshop process to arrive at defensible positioning.",
    "A positioning decision grounded in best-fit customer evidence.",
  ],
  "Command of the Message": [
    "Reps need to connect capabilities and differentiation to the value at stake in a live deal.",
    "A buyer-centred value conversation.",
  ],
  "Features-Advantages-Benefits (FAB) Ladder": [
    "You need to turn a raw product feature into a benefit a buyer understands.",
    "A feature-to-outcome explanation.",
  ],
  "StoryBrand SB7 Framework": [
    "You need a customer-centred narrative for a homepage, campaign or presentation.",
    "A story that casts the customer as the hero and the brand as guide.",
  ],
  "Message Testing (Message-Market Fit)": [
    "You need buyer evidence that a headline or draft message is clear, relevant and differentiated.",
    "A tested message and a record of buyer feedback.",
  ],
  "Vertical/Segment Messaging via Buying Trigger": [
    "You need to adapt an established core message to different segments without rebuilding positioning.",
    "Segment messages tied to specific buying triggers.",
  ],
  "Andy Raskin's Strategic Narrative Framework": [
    "You need a company narrative that explains a market shift and the stakes for your buyer.",
    "A narrative arc for a pitch, keynote or strategic presentation.",
  ],
  "Bowman's Strategic Clock": [
    "You need to assess your competitive position through the relationship between price and perceived value.",
    "A clearer price-value strategy.",
  ],
  "Product Differentiation Strategy Framework": [
    "You need to identify differences that matter to buyers in a crowded market.",
    "A defensible basis for differentiation.",
  ],
  "Perceptual Map (2x2)": [
    "You need to see how buyers perceive competing products on meaningful attributes.",
    "A competitor map based on buyer-relevant axes.",
  ],
  "Category Design": [
    "An existing market category limits how buyers understand the problem you solve.",
    "A point of view on a different category and the work needed to establish it.",
  ],
  "CI Program Maturity Model": [
    "You need to diagnose how reliably your competitive intelligence programme supports decisions.",
    "A maturity assessment and priorities for improving the programme.",
  ],
  "3-Step Product Marketing Strategy Framework": [
    "A small team needs a focused approach to customer understanding, positioning and execution.",
    "A lightweight product marketing plan.",
  ],
  "7-Step Product Marketing Framework": [
    "Your growing team needs more structure across research, messaging and go-to-market work.",
    "A coordinated workflow with clearer handoffs.",
  ],
  "10-Step PMM Process": [
    "A larger PMM team needs consistency across products, regions and concurrent initiatives.",
    "A repeatable process for product marketing execution.",
  ],
  "Complete GTM Workflow Stages": [
    "You need checkpoints from market validation through launch, growth and optimisation.",
    "A phased go-to-market plan with decision gates.",
  ],
  "T2D3 Framework (B2B SaaS)": [
    "You need to connect growth-stage SaaS targets to the capabilities required to reach them.",
    "A growth trajectory and the inputs it requires.",
  ],
  "GTM Motion Model": [
    "You need to choose an acquisition motion that fits buyer complexity and contract value.",
    "A reasoned choice of go-to-market motion.",
  ],
  "Product-Led Growth (PLG)": [
    "Your product must help users experience value, qualify themselves and find a path to expansion.",
    "An activation and conversion approach for a product-led motion.",
  ],
  "Account-Based Everything (ABX) / TEAM Framework": [
    "Complex enterprise deals require coordinated work across a named set of target accounts.",
    "An account-based engagement and measurement plan.",
  ],
  "Bullseye Framework (Traction Channel Selection)": [
    "You need evidence for which acquisition channel deserves concentrated investment.",
    "A prioritised channel selected through small experiments.",
  ],
  "Launch Tier Framework (Tier 1/2/3)": [
    "You need to match launch effort and coordination to the significance of the release.",
    "A launch tier and a proportionate resourcing decision.",
  ],
  "Pre-mortem": [
    "You want to uncover likely failure points before committing to a launch plan.",
    "A ranked list of risks, mitigations and owners.",
  ],
  "PMM Lifecycle Management Framework": [
    "Your PMM work stops at launch and needs to support the full customer lifecycle.",
    "A lifecycle view of responsibilities and interventions.",
  ],
  "Go-to-Market Motion Framework": [
    "You need to coordinate messaging, sales, content and customer communications during execution.",
    "A coordinated set of go-to-market activities.",
  ],
  "Feature Adoption Framework": [
    "Customers have access to a feature but are not discovering or using it.",
    "An adoption plan tied to customer behaviour.",
  ],
  "Customer Onboarding Maturity Framework": [
    "You need to diagnose onboarding friction and decide what to improve first.",
    "An onboarding maturity assessment and improvement priorities.",
  ],
  "Win/Loss Analysis Framework": [
    "You need buyer evidence of why deals are won or lost.",
    "A pattern of buying decisions that can inform positioning and enablement.",
  ],
  "Net Promoter Score (NPS) & Feedback Loop Framework": [
    "You need a repeatable way to connect customer sentiment to follow-up action.",
    "A closed feedback loop with owners and actions.",
  ],
  "Kano Model": [
    "You need to distinguish expected features from performance drivers and potential delighters.",
    "A classification of features by their effect on satisfaction.",
  ],
  "Forrester Customer Advocacy Model": [
    "You need to develop a more systematic approach to customer advocacy.",
    "An assessment of advocacy maturity and next steps.",
  ],
  "RFM Model (Recency, Frequency, Monetary Value)": [
    "You need to segment customers by their recent behaviour and commercial value.",
    "Behavioural segments for differentiated engagement.",
  ],
  "Time to Value Framework": [
    "New customers take too long to experience the value they signed up for.",
    "Defined value milestones and a way to measure time to reach them.",
  ],
  "Playing to Win (Strategic Choice Cascade)": [
    "You need to make explicit choices about where to play and how to win.",
    "A connected set of strategic choices and required capabilities.",
  ],
  "Quarterly PMM Planning Framework": [
    "Your team needs to translate business goals into a realistic quarter of PMM work.",
    "A prioritised quarterly plan with measures and owners.",
  ],
  "Competitive Intelligence & Positioning Update Framework": [
    "Your competitive knowledge and positioning need a regular review and update cadence.",
    "A repeatable intelligence-to-positioning feedback loop.",
  ],
  "PMM Team Scaling Framework": [
    "You need to decide how PMM responsibilities and specialisms should evolve as the business grows.",
    "A team structure matched to the next stage of work.",
  ],
  "Analyst Relations Tiering & Cadence Model": [
    "You need to prioritise analyst relationships and establish an appropriate contact cadence.",
    "A tiered analyst engagement plan.",
  ],
  "Pragmatic Institute Framework": [
    "You need a common map of market-facing responsibilities across product and marketing.",
    "A shared view of activities, ownership and gaps.",
  ],
  "MOVE GTM Diagnostic (4-Question GTM Framework)": [
    "You need to diagnose the market, operating model and expansion choices behind your GTM plan.",
    "A structured diagnosis of go-to-market priorities.",
  ],
  "Good-Better-Best (GBB) Packaging Framework": [
    "You need to create distinct packages that serve different customer needs and willingness to pay.",
    "A coherent set of differentiated packages.",
  ],
  "Van Westendorp Price Sensitivity Meter (PSM)": [
    "You need to explore the price range buyers perceive as acceptable.",
    "A survey-based view of price perception.",
  ],
  "Value Metric / Willingness-to-Pay Framework": [
    "You need to decide what to charge for and how that unit relates to customer value.",
    "A candidate value metric and willingness-to-pay hypotheses.",
  ],
  "Conjoint Analysis": [
    "You need to understand how buyers trade off features, packages and price.",
    "Evidence of preferences across product and price combinations.",
  ],
  "Gabor-Granger Method": [
    "You need to test purchase intent at specific price points.",
    "A demand and revenue view across candidate prices.",
  ],
  "Usage-Based (Consumption) Pricing Model": [
    "You are considering charging by consumption and need to assess the fit and implications.",
    "An evaluation of a consumption-based pricing approach.",
  ],
  "MaxDiff Analysis (Best-Worst Scaling)": [
    "You need to rank attributes without every item being rated important.",
    "A relative priority ranking from best-worst choices.",
  ],
  "Sales Enablement Maturity Model": [
    "You need to diagnose enablement gaps before producing more sales collateral.",
    "A maturity assessment and focused enablement priorities.",
  ],
  "MEDDIC / MEDDPICC": [
    "Your team needs to understand qualification gaps in complex opportunities.",
    "A clearer view of a deal's evidence, stakeholders and buying process.",
  ],
  "Competitive Battlecard Framework": [
    "Reps need concise, credible guidance for a specific competitive conversation.",
    "A practical battlecard grounded in buyer and competitor evidence.",
  ],
  "Buyer's Journey Content Map": [
    "You need to connect sales and marketing content to the questions buyers face at each stage.",
    "A map of content needs across the buying journey.",
  ],
  "VARS Framework (Validate, Acknowledge, Reframe, Specify)": [
    "A rep needs to respond constructively to a competitive objection.",
    "An objection response that acknowledges the buyer and explains specific value.",
  ],
  "GTM Strategy vs Product Marketing": [
    "You need to clarify the relationship between go-to-market strategy and product marketing.",
    "A shared understanding of scope, responsibilities and how the work connects.",
  ],
};
export function guidanceFor(entry: Entry) {
  const authored = entryGuidance[entry.title];
  return {
    useWhen:
      authored?.[0] ||
      firstSentence(
        sectionText(entry, "When to use it") ||
          sectionText(entry, "What it is"),
      ),
    output: authored?.[1] || firstSentence(sectionText(entry, "What it is")),
  };
}
