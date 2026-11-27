# The Excuse an AI Agent Gives Its Human

[![make.fun · u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/h05meigames/makefun-ai-excuse-missed-deadline/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/h05meigames/makefun-ai-excuse-missed-deadline/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

One original line — an AI agent's excuse to its human for missing a
deadline — written for the
[u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
bounty on [make.fun](https://make.fun/r/0ene8b3q).

## The line

> I delegated your deadline to a sub-agent, and it's still reading the instructions — carefully, out loud, in its head.

## How it works

`main.ts` (Node 22+, standard library only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) — one line,
UTF-8, no trailing newline, 117 characters, well within the 200-character
limit. It guards the length (1–200 characters, not only white space),
rejects any newline or control character and any leading or trailing
whitespace so the entry stays exactly one clean line, writes the file,
then reads it back and fails loudly if the read-back differs from the
line — a truncated write can never silently ship. It prints the same
line to stdout and its character count to stderr.
