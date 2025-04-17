---
layout: post
title: "How does LMQL work and Why is it dead?"
date: 2025-04-16 00:00:01
categories: short
tags: [short,llm]
---

[LMQL](https://lmql.ai/) [(arxiv)](https://arxiv.org/abs/2212.06094) is a tool to steer language model generation. The language interface nicely stitches together a set of features such as:

1. String manipulation, filling holes and variables
2. String constraints for output tokens, switch on and off generation
3. Tool use

Here's how it works:

**1.** String manipulation: [WORDS] denotes a hole that needs language model to fill; {WORDS} denotes a variable that exists in the scope context. For instance:
  {% raw %}
  ```python
  Write a summary of {name}, the singer:
  {{
      "name": "[STRING_VALUE]",
      "age": [INT_VALUE],
      "top_songs": [[
          "[STRING_VALUE]",
          "[STRING_VALUE]"
      ]]
  }}
  ```
  {% endraw %}

  Given the context `{'name': 'Bruno Mars'}`, the variable name is replaced with `Bruno Mars` to get the initial prompt `Write a summary of {name}, the singer: \{\{ "name": "`, the generation spits out a few tokens, followed by a quote `"`, LMQL detects the quote and stops the generation, appends `", "age": `, and continues.

**2.**  String constraints using [masking](https://lmql.ai/docs/language/constraints.html#how-do-lmql-constraints-work): constraints, options all use the simple idea that we could limit the available tokens models can choose from. In openai API, this is done by setting the `logit_bias` parameter, with the format of `{"50256": -100, ...}`.

**3.**  Tool use: This is similiar to variable substitution, with the ability to call a function to get the variable's value. However it is different from the commonly used 'tool use' where models can choose among a set of tools. Although in theory, there's nothing that stops LMQL to switch to structured output to choose a tool and run it, and switch back to the previous generation context.

## Why it didn't take off?

I suspect there are two reasons: The real world use cases are largely satisfied by structured/json output; instruction following has improved a lot. Combining these two gives us a nice alternative to LMQL using simply string interpolation using context from json output.

## Other Options


- [pyctrl in aici](https://github.com/microsoft/aici/tree/main/controllers/pyctrl)
- [BAML](https://docs.boundaryml.com/home)
- [Instructor](https://python.useinstructor.com/start-here/)
- [TypeChat](https://microsoft.github.io/TypeChat/docs/typescript/basic-usage/)
- [Marvin](https://askmarvin.ai/functions/generate#structured-data)
- [lm-format-enforcer](https://github.com/noamgat/lm-format-enforcer)
- [outlines](https://github.com/dottxt-ai/outlines#structured-generation)
