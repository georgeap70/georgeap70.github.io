# The Cursor Wrapper Era  

**March 3, 2025**  

Over the last few days, I’ve been experimenting with Cursor, and I have to say—it works pretty well for what I need.  

As a thought experiment, I decided to throw a complex set of processing steps at it. These steps checked my code for various issues, ranging from simple linter problems to potential security vulnerabilities. Of course, plenty of existing tools already do this, but I was curious to see how well Cursor could handle it.  

I placed all my lengthy and intricate processing steps into a single `.mdc` file, dropped it into `./cursor/rules`, and then asked Cursor to run it against one of my commits. And you know what? It worked surprisingly well. The Cursor agent is quite capable of following complex prompts, and its seamless integration with my code made all the difference.  

This means I was able to perform sophisticated code analysis—something that would typically require purchasing and integrating a third-party product—just by crafting the right prompt.  

### Are AI-powered tools replacing traditional products?  

Maybe not yet. There are still many well-established (pre-AI) security and development tools with deeply integrated workflows. Meanwhile, a wave of new AI-driven startups is trying to achieve the same functionality through agentic workflows powered by prompts. But when you break it down, many of these so-called “AI-powered” solutions are just **Cursor wrappers**—essentially repackaged workflows driven by prompts.  

With the right approach, I can replicate (and often exceed) what these tools do simply by prompting Cursor directly. Unlike those rigid solutions, Cursor allows me to refine my results dynamically—asking follow-up questions in the Agent chat, jumping directly to suspicious code sections, and improving my **developer** and **AppSec** experience in real-time.  

### What's missing?  

There are still gaps, of course. Security teams are used to working with lists of alerts, creating PRs for developers, and integrating deeply into existing workflows. But how hard would it be to build a **VSCode plugin** to bridge that gap?  

Maybe it’s time to fire off a deep research query to ChatGPT, explore the VSCode plugin system, and start building.  
