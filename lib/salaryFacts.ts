// Source-of-truth headline salary figures. Any page that quotes one of these
// statistics should use the value (and its label) from here so the same number
// appears everywhere on the site. Update quarterly alongside the "Last updated"
// dates on the salary guides.

export const SALARY_FACTS = {
  // Median base salary across M7 programs (HBS, Wharton, Booth, Kellogg,
  // Columbia, Sloan, Stanford GSB).
  m7MedianBase: {
    value: "$175,000",
    short: "$175K",
    label: "M7 median base salary",
    source: "School employment reports, Class of 2025",
  },
  // Base + median signing bonus + first-year performance bonus.
  m7FirstYearTotalComp: {
    value: "$185,000–$210,000",
    short: "$185K–$210K",
    label: "M7 median first-year total compensation",
    source: "CareerReturns estimate from school employment reports, Class of 2025",
  },
  avgSalaryIncrease: {
    value: "47–55%",
    short: "+47%",
    label: "Average pre- to post-MBA salary increase",
    source: "GMAC Corporate Recruiters & Prospective Students surveys, 2025",
  },
  preMbaMedian: {
    value: "$85,000",
    short: "$85K",
    label: "Median pre-MBA salary (M7 applicants)",
    source: "GMAC Prospective Students Survey, 2025",
  },
} as const
