// lib/types.ts

// Represents a single note the user inputs
export type NoteInput = {
  text: string;
};

// Represents a summarized note (result from Gemini)
export type SummaryResult = {
  summary: string;
};

// Represents a full note object (for future note history feature)
export type NoteHistoryItem = {
  id: string; // unique id (e.g., nanoid or timestamp)
  original: string; // original user input
  summary: string; // summarized version
  createdAt: string; // ISO timestamp
};
