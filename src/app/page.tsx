"use client";

import { useState } from "react";

export default function Home() {
  const [note, setNote] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!note.trim()) return;
    setLoading(true);
    setSummary("");

    const res = await fetch("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: note }),
    });

    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);
  };
  return (
    <main className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Ai Note Summarizer</h1>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter your note here..."
        className="w-full p-2 border rounded h-40 mb-4"
      />
      <button
        disabled={loading}
        onClick={handleSummarize}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 cursor-pointer"
      >
        {loading ? "Summarizing..." : "Summarize Note"}
      </button>

      {summary && (
        <div>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </main>
  );
}
