// *****************************************************************************
// *                  Developed by Vanderson Rodrigues - 2026
// *****************************************************************************

export type Experience = {
  company: string; role: string; period: string; location: string;
  context: string; highlights: string[]; stack: string[];
};

export type Project = {
  title: string; eyebrow: string; problem: string; strategy: string;
  implementation: string[]; result: string; stack: string[]; featured?: boolean;
};
