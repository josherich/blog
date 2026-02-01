#!/usr/bin/env python3
"""
Transform podcast transcript from conversational to formal style.
More aggressive rewriting approach.
"""

import re

# Read the file
with open('_posts/podcast/2025-09-15-702-test-point-accupuncture.md', 'r') as f:
    content = f.read()

# Split into sections
lines = content.split('\n')

# Find front matter
front_matter_end = 0
if lines[0] == '---':
    for i, line in enumerate(lines[1:], 1):
        if line == '---':
            front_matter_end = i
            break

front_matter = '\n'.join(lines[:front_matter_end+1])

# Find JSON section
json_start = len(lines)
for i, line in enumerate(lines):
    if 'window.tocIndex' in line:
        json_start = i
        break

body_lines = lines[front_matter_end+1:json_start]
json_section = '\n'.join(lines[json_start:])

# Process body lines more thoroughly
processed_lines = []
i = 0
while i < len(body_lines):
    line = body_lines[i]
    
    # Skip standalone filler lines
    if line.strip() in ['', 'Okay.', 'Yeah.', 'Right.', 'Exactly.', 'Totally.', 'Yes.', 'No.', 'What?', 'Oh.', 'Oh, okay.', 'Got it.', 'Sure.', 'Yep.', 'Yep', 'Yeah', 'Okay', 'Right']:
        i += 1
        continue
    
    # Skip lines that are just "So," or "And," or "But,"
    if re.match(r'^(So|And|But|Well|Anyway),?\.?$', line.strip()):
        i += 1
        continue
        
    # Process the line content
    original = line
    
    # Remove conversational prefixes
    line = re.sub(r'^(So|And|But|Well|Anyway),?\s+', '', line)
    line = re.sub(r'^(Yeah|Yes|No|Right|Okay|Oh)\.?\s+', '', line)
    
    # Remove filler phrases
    fillers = [
        r',?\s+you know,?',
        r',?\s+like,',
        r'\s+like\s+',
        r',?\s+right\?',
        r'\s+Right\?',
        r',?\s+basically,?',
        r'\s+basically\s+',
        r',?\s+literally,?',
        r'\s+literally\s+',
        r',?\s+actually,?',
        r'\s+actually\s+',
        r',?\s+I mean,?',
        r',?\s+kind of,?',
        r'\s+kind of\s+',
        r',?\s+sort of,?',
        r'\s+sort of\s+',
        r',?\s+just\s+',
        r',?\s+anyway,?',
        r'^Anyway,\s*',
        r'\s+though\.$',
        r',?\s+you know$',
        r',?\s+right$',
        r',?\s+okay$',
    ]
    
    for pattern in fillers:
        line = re.sub(pattern, ' ', line)
    
    # Clean up
    line = re.sub(r'\s+', ' ', line)
    line = line.strip()
    
    # Remove if empty after processing
    if not line or line in ['.', ',', '-']:
        i += 1
        continue
    
    # Fix punctuation spacing
    line = re.sub(r'\s+([.,;!?])', r'\1', line)
    line = re.sub(r'([.,;!?])\s+', r'\1 ', line)
    
    # Remove duplicate punctuation
    line = re.sub(r'\.{2,}', '.', line)
    line = re.sub(r',{2,}', ',', line)
    
    processed_lines.append(line)
    i += 1

# Merge consecutive short lines that aren't section breaks or quotes
final_lines = []
i = 0
while i < len(processed_lines):
    line = processed_lines[i]
    
    # Keep blockquotes, headers, and empty lines as is
    if line.startswith('>') or line.startswith('#') or line.startswith('-') or line.startswith('*'):
        final_lines.append(line)
        i += 1
        continue
    
    # Try to merge with next line if both are short text
    if i + 1 < len(processed_lines):
        next_line = processed_lines[i + 1]
        if (not next_line.startswith('>') and not next_line.startswith('#') 
            and not next_line.startswith('-') and not next_line.startswith('*')
            and len(line) < 200 and len(next_line) < 200
            and not line.endswith('.')):
            # Check if it makes sense to merge
            merged = line + ' ' + next_line
            if len(merged) < 300:
                final_lines.append(merged)
                i += 2
                continue
    
    final_lines.append(line)
    i += 1

# Write back
with open('_posts/podcast/2025-09-15-702-test-point-accupuncture.md', 'w') as f:
    f.write(front_matter + '\n\n')
    f.write('\n'.join(final_lines) + '\n\n')
    f.write(json_section)

print("Transformation complete!")
print(f"Removed {len(body_lines) - len(processed_lines)} lines")
