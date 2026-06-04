---
title: "Grounded AI is the only kind worth trusting with your notes"
description: "When an agent cites the exact paragraph it read, you can verify. When it proposes an edit, you stay in control. That's the difference between a tool and a liability."
pubDate: "Jun 04 2026"
heroImage: "/blog/grounded-ai-hero.jpg"
---

Most "AI for notes" products today are sophisticated ways to exfiltrate your thinking.

You type into their app. Your notes leave your machine. They are indexed on someone else's servers, often used to improve the provider's models, and subject to the provider's continued existence and business decisions. If the service changes pricing, shuts down, or gets acquired, your second brain becomes a migration problem or, worse, disappears.

Lumynn was built on the opposite premise.

The retrieval layer only ever queries vectors and chunks you chose to index, stored in your own data directory. The Copilot agent can only reference notes you explicitly attach with @ or that the hybrid retriever surfaces from your library. When it wants to change something, it does not edit in secret. It shows you a precise diff against the real file on disk, and the change only happens if you accept it.

You stay the author. The model is a very well-read, occasionally insightful intern that never gets to publish without your signature.

This changes the relationship.

Because the AI is grounded in retrieval over your actual files, the answers tend to be more specific and less hallucinatory. You can click the citations and verify the source in context. When the agent proposes a rewrite or a new section, you see exactly what would change and where.

Because everything stays on hardware you control, you decide which models are allowed to touch your notes. Local models via Ollama or vLLM, frontier models through a provider you trust, or a mix. You can change your mind later without exporting anything.

Because the source files remain plain Markdown, any future tool you adopt can read them. The intelligence layer is an enhancement, not a replacement for the underlying asset.

This is what "grounded" means in practice: the model is not inventing a corporate knowledge base and hoping it applies to you. It is reading the actual work you have already done, in the format you chose to keep it, and offering help while leaving the final authority where it belongs — with the person whose name is on the files.
