---
layout: post
title: "Vibe Coding Vibe Coding Tools"
date: 2025-05-07 00:00:01
categories: short
tags: [short]
---

I want to show steps of how I create a [vibe coding tool](https://codie.mindynode.com/) using a [vibe coding tool](https://lovable.dev/)

1. initial prompt
```
build a chat-based agentic web app builder
- chat UI in the left panel, where people can ask the agent to make changes to the code base, left panel can be hidden or shown by clicking the button on the top
- the right panel can either be the preview or a code editor with a file explorer (switcher on the top right)
- top left menu shows credit used, settings and help
```

2. popup menu
```
clicking for show or hide a popup menu, items in the menu are:
- go to dashboard
- credit usage
- settings
- appearance
- help
```

3. connect supabase
```
Please connect my supabase project `TinyLove`
```

4. add login
```
Add login
```

5. add api key
```
Show me the secrets form
```

5. connect chat api
```
process user's request from the chat panel using openai, store the response in supabase and show the user-facing reply in the chat thread
- prepend a system prompt to the prompt sent to openai
- extract actions and user-facing reply from the response, and save both to supabase
```

6. strip
```
Let’s connect Stripe to my project. We will begin with secure payment processing.
```

answers to follow-up questions:
```
Are you looking to implement one-time payments or recurring subscriptions?
Do you want to track payment data in your Supabase database?
Will payments require user authentication, or should guests be able to make purchases too?
---
1. one-time payment for getting 100 credits at $10, tied to user id
2. yes
3. yes, guests not allowed
```

7. fix panel dragging
```
in index.tsx, make split between chat panel and main view draggable, make main view responsive
```

8. try to fix supabase RLS error
```
Supabase Error: {
  code: "42501",
  details: null,
  hint: null,
  message: 'new row violates row-level security policy for table "chat_messages"'
}
```
It didn't work out so I disabled it on Supabase for now.

9. code editor
```
implement the code editor using @monaco-editor/react
```

10. fetch file tree from api
```
connect filetree to api endpoint 'api.mindynode.com/agent/{project}/workspace' to fetch the filetree json, use mocking for the api
```

11. refactor suggestion (prompted by Lovable)
```
Refactor src/components/editor/CodeEditor.tsx into smaller files without breaking any functionality. Split it into at least a FileTree component and a Editor component, as it's currently over 220 lines long.
```

12. preview
```
implement the preview, it should show an iframe, use src='news.mindynode.com' for mocking the preview
```

13. credit logic
```
implement credit logic in supabase edge function 'chat', before calling LLM, check the user's credit, decrease credit by 1 if it's bigger than 0, otherwise skip calling LLM and return an error message 'not enough credit'
```

### Next Step

I'm working on the backend part, which basically connects openhand's execution loop and adds a layer of API to file system and git of its `/workspace`, so stay tuned
