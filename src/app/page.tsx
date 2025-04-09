"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-2xl space-y-4 p-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">📝 AI Note Summarizer</CardTitle>
          <ThemeToggle />
        </CardHeader>
        <CardContent>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter your note here..."
            className="min-h-[160px] text-base"
          />
          <Button
            disabled={loading}
            onClick={handleSummarize}
            className="w-full gap-2 my-6 cursor-pointer"
          >
            {loading && <Loader2 className="animate-spin h-4 w-4" />}
            {loading ? "Summarizing..." : "Summarize Note"}
          </Button>

          {summary && (
            <div className="rounded-lg bg-muted p-4 shadow-md transition-all duration-300 border">
              <h2 className="text-lg font-semibold mb-2">Summary:</h2>
              <p className="text-md leading-relaxed">{summary}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
