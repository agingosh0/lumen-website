export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string[]
  image: string
  keyFeatures: {
    icon: string
    title: string
    description: string
  }[]
  processSteps: {
    number: string
    title: string
    description: string
  }[]
}

export const allServices: Service[] = [
  {
    id: "financial-audit",
    slug: "financial-audit",
    title: "Financial Audit",
    shortDescription: "Independent audit services ensuring compliance with international standards and regulatory requirements.",
    fullDescription: [
      "Our financial audit services provide independent assurance on the accuracy, transparency, and reliability of your financial statements. We help organizations strengthen stakeholder confidence while identifying risks, control gaps, and opportunities for improvement.",
      "With extensive cross-industry experience and strong knowledge of international accounting standards, our audit professionals deliver thorough, objective, and compliant audit engagements aligned with statutory and regulatory expectations.",
      "Beyond compliance, our audits are designed to deliver practical insights that enhance governance, strengthen internal controls, and support informed decision-making.",
    ],
    image: "/img20.jpeg",
    keyFeatures: [
      {
        icon: "check",
        title: "Independent Assurance",
        description: "Objective evaluation of financial statements and internal control environments.",
      },
      {
        icon: "shield",
        title: "Regulatory Compliance",
        description: "Adherence to applicable accounting standards and regulatory frameworks.",
      },
      {
        icon: "chart",
        title: "Risk Assessment",
        description: "Identification and evaluation of financial and operational risks.",
      },
      {
        icon: "document",
        title: "Comprehensive Reporting",
        description: "Clear audit reports with actionable findings and recommendations.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Planning & Risk Assessment",
        description: "We begin by understanding your business, industry, and regulatory environment, identifying key risk areas and defining a tailored audit plan.",
      },
      {
        number: "02",
        title: "Audit Execution & Testing",
        description: "Our team performs detailed testing of financial records, controls, and compliance processes using established audit methodologies.",
      },
      {
        number: "03",
        title: "Reporting & Recommendations",
        description: "We deliver comprehensive audit reports highlighting key findings, insights, and recommendations to strengthen financial governance.",
      },
    ],
  },
  {
    id: "tax-zakat-advisory",
    slug: "tax-zakat-advisory",
    title: "Tax & Zakat Advisory",
    shortDescription: "Strategic tax planning and zakat advisory aligned with your business structure and growth objectives.",
    fullDescription: [
      "Our tax and zakat advisory services help businesses manage tax obligations efficiently while maintaining full compliance with Saudi regulations. We provide strategic planning, advisory, and compliance support across corporate tax, Zakat, and VAT.",
      "Our specialists stay continuously updated on regulatory developments, enabling us to proactively advise clients on minimizing exposure, optimizing tax positions, and meeting filing obligations accurately and on time.",
      "Whether supporting routine compliance or complex tax planning, we deliver practical, compliant, and commercially sound solutions.",
    ],
    image: "/img28.jpeg",
    keyFeatures: [
      {
        icon: "check",
        title: "Tax Planning",
        description: "Strategic planning to optimize tax outcomes while ensuring compliance.",
      },
      {
        icon: "shield",
        title: "Zakat Advisory",
        description: "Accurate Zakat calculations and regulatory compliance support.",
      },
      {
        icon: "chart",
        title: "VAT Advisory",
        description: "Registration, planning, filing, and compliance assistance.",
      },
      {
        icon: "document",
        title: "International Tax",
        description: "Advisory support for cross-border operations and transactions.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Tax Position Assessment",
        description: "We review your current tax and zakat position to identify risks, gaps, and optimization opportunities.",
      },
      {
        number: "02",
        title: "Strategy Development",
        description: "Our team designs customized tax strategies aligned with business objectives and regulatory requirements.",
      },
      {
        number: "03",
        title: "Implementation & Ongoing Support",
        description: "We support execution and provide continuous advisory to ensure sustained compliance and efficiency.",
      },
    ],
  },
  {
    id: "compliance-risk-advisory",
    slug: "compliance-risk-advisory",
    title: "Compliance & Risk Advisory",
    shortDescription: "Risk management and compliance solutions designed to protect organizations from regulatory exposure.",
    fullDescription: [
      "Our compliance and risk advisory services support organizations in identifying, managing, and mitigating financial, operational, and regulatory risks. We help businesses establish strong governance frameworks and maintain compliance in a complex regulatory environment.",
      "From compliance reviews to internal control assessments, our approach strengthens resilience while improving operational effectiveness.",
    ],
    image: "/img 24.jpeg",
    keyFeatures: [
      {
        icon: "check",
        title: "Risk Identification",
        description: "Assessment of financial, operational, and compliance risks.",
      },
      {
        icon: "shield",
        title: "Regulatory Compliance",
        description: "Alignment with applicable laws and industry standards.",
      },
      {
        icon: "chart",
        title: "Internal Controls",
        description: "Design and enhancement of effective control frameworks.",
      },
      {
        icon: "document",
        title: "Ongoing Monitoring",
        description: "Continuous compliance oversight and reporting.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Risk & Compliance Assessment",
        description: "We evaluate existing frameworks to identify gaps and exposure areas.",
      },
      {
        number: "02",
        title: "Framework Development",
        description: "Customized risk and compliance structures aligned with your business model.",
      },
      {
        number: "03",
        title: "Implementation & Monitoring",
        description: "Support execution and provide continuous monitoring to maintain compliance.",
      },
    ],
  },
  {
    id: "corporate-advisory",
    slug: "corporate-advisory",
    title: "Corporate Advisory & Strategy",
    shortDescription: "Strategic advisory support for mergers, acquisitions, and organizational transformation.",
    fullDescription: [
      "Our corporate advisory services support organizations through complex strategic decisions, transactions, and transformation initiatives. We provide structured guidance across mergers, acquisitions, restructuring, and strategic planning.",
      "With deep experience in corporate finance and strategy, we help clients evaluate opportunities, manage risks, and execute initiatives with confidence.",
    ],
    image: "/img 18.jpeg",
    keyFeatures: [
      {
        icon: "check",
        title: "M&A Advisory",
        description: "End-to-end support for mergers, acquisitions, and divestitures.",
      },
      {
        icon: "shield",
        title: "Strategic Planning",
        description: "Development of growth and transformation strategies.",
      },
      {
        icon: "chart",
        title: "Due Diligence",
        description: "Financial and operational due diligence services.",
      },
      {
        icon: "document",
        title: "Transaction Support",
        description: "Execution support across the transaction lifecycle.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Strategic Evaluation",
        description: "Assessment of objectives, opportunities, and transaction readiness.",
      },
      {
        number: "02",
        title: "Transaction Planning",
        description: "Structuring and planning aligned with strategic and financial goals.",
      },
      {
        number: "03",
        title: "Execution & Integration",
        description: "Support through execution and post-transaction integration.",
      },
    ],
  },
  {
    id: "business-valuation",
    slug: "business-valuation",
    title: "Business Valuation & Advisory",
    shortDescription: "Independent valuation services supporting transactions, reporting, and strategic decisions.",
    fullDescription: [
      "Our business valuation services provide accurate, defensible valuations for businesses, assets, and securities. We support transactions, financial reporting, tax planning, and strategic decision-making through robust valuation methodologies.",
      "Our valuation professionals combine technical expertise with market insight to deliver reliable analyses that stand up to regulatory and stakeholder scrutiny.",
    ],
    image: "/img16.jpeg",
    keyFeatures: [
      {
        icon: "check",
        title: "Business Valuation",
        description: "Valuation of businesses, assets, and securities.",
      },
      {
        icon: "shield",
        title: "Transaction Support",
        description: "Valuations for mergers, acquisitions, and disposals.",
      },
      {
        icon: "chart",
        title: "Financial Reporting",
        description: "Fair value measurements and reporting support.",
      },
      {
        icon: "document",
        title: "Strategic Advisory",
        description: "Valuation-driven insights for informed decisions.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Valuation Scoping",
        description: "Understanding purpose, scope, and regulatory requirements.",
      },
      {
        number: "02",
        title: "Analysis & Methodology",
        description: "Application of appropriate valuation techniques and assumptions.",
      },
      {
        number: "03",
        title: "Reporting & Advisory",
        description: "Delivery of detailed valuation reports with clear insights and guidance.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return allServices.map((service) => service.slug)
}



