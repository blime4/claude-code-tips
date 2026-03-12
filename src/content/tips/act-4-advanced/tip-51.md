---
id: 51
title: "Use /insights command"
act: 4
category: "advanced"
difficulty: "intermediate"
tags: ["insights", "command", "analysis"]
timestamp: "42:00"
description: "Get intelligent insights about your codebase using the /insights command"
related: [50]
---

## Description

The `/insights` command provides intelligent analysis of your codebase, extracting patterns, identifying issues, and suggesting improvements.

## Usage

Run the insights command:

```bash
/insights
```

Claude will analyze your project and provide:

- **Code patterns**: Common structures, idioms, and anti-patterns
- **Architecture insights**: Design patterns, coupling analysis
- **Potential issues**: Bugs, security vulnerabilities, performance problems
- **Improvement suggestions**: Refactoring opportunities, best practices

## What It Analyzes

- File structure and organization
- Import dependencies and relationships
- Function and class patterns
- Code complexity metrics
- Test coverage gaps
- Security vulnerabilities
- Performance bottlenecks

## Best Practices

1. **Run after major changes**: Get fresh insights after significant code updates
2. **Review suggestions carefully**: Not all suggestions may apply to your context
3. **Combine with /init**: Use both commands for comprehensive project understanding
4. **Iterate**: Re-run periodically to track progress on identified issues

## Example Output

```bash
/insights

# Claude will respond with:
# - Project structure overview
# - Pattern analysis
# - Issues found (with file locations)
# - Improvement recommendations
```

## Tips

- Use `/insights` when starting work on an unfamiliar codebase
- Combine with specific questions about areas of concern
- Review the findings with your team for collective decision-making
- Track insights over time to measure code quality improvements

## See Also

- [/init - Initialize project](/tips/3)
- [/context - Check token usage](/tips/22)
- [Explore the plugin ecosystem](/tips/50)
