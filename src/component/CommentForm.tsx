"use client";

import { useState } from "react";
import { MessageSquare, CheckCircle2 } from "lucide-react";

export default function CommentForm() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !name.trim() || !email.trim()) return;

    setSubmitted(true);
    setComment("");
    setName("");
    setEmail("");
  };

  return (
    <section className="border-t border-slate-200 pt-8 pb-10" aria-label="Comments section">
      <div className="flex items-center gap-2 mb-2">
        <MessageSquare className="w-5 h-5 text-[#041f4a]" />
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Leave a Comment</h2>
      </div>

      <p className="text-xs text-slate-500 mb-6">
        Your email address will not be published. Required fields are marked{" "}
        <span className="text-red-500 font-semibold">*</span>
      </p>

      {submitted ? (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3.5 text-emerald-900 text-sm shadow-2xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-900 text-sm">Thank you for sharing your perspective!</p>
            <p className="text-emerald-700 text-xs mt-1 leading-relaxed">
              We appreciate your valuable contribution to the conversation. Your comment has been received.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Comment textarea */}
          <div>
            <label htmlFor="comment" className="sr-only">
              Comment
            </label>
            <textarea
              id="comment"
              rows={5}
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment here..."
              className="w-full px-3.5 py-3 text-sm text-slate-800 bg-white border border-slate-300 rounded-md shadow-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#041f4a]/20 focus:border-[#041f4a] transition-all resize-y"
            />
          </div>

          {/* Name & Email inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="author-name" className="block text-xs font-medium text-slate-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="author-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-3 py-2 text-sm text-slate-800 bg-white border border-slate-300 rounded-md shadow-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#041f4a]/20 focus:border-[#041f4a] transition-all"
              />
            </div>

            <div>
              <label htmlFor="author-email" className="block text-xs font-medium text-slate-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="author-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2 text-sm text-slate-800 bg-white border border-slate-300 rounded-md shadow-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#041f4a]/20 focus:border-[#041f4a] transition-all"
              />
            </div>
          </div>

          {/* Save info checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              id="save-info"
              type="checkbox"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-[#041f4a] focus:ring-[#041f4a]"
            />
            <label htmlFor="save-info" className="text-xs text-slate-600 select-none cursor-pointer">
              Save my name and email in this browser for the next time I comment.
            </label>
          </div>

          {/* Submit button */}
          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#041f4a] hover:bg-[#0a3577] active:bg-[#021430] rounded-md transition-colors shadow-xs cursor-pointer"
            >
              Post Comment
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
