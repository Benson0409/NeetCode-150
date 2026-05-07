import os
import glob
import json
import re

def parse_markdown(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    filename = os.path.basename(filepath)
    if filename.lower() == 'readme.md':
        return None

    # Extract Title and ID
    title_match = re.search(r'^#\s*(.*?)$', content, re.MULTILINE)
    title = title_match.group(1) if title_match else filename
    problem_id = title.split('.')[0].strip() if '.' in title else filename.split('.')[0]

    # Extract Difficulty
    difficulty_match = re.search(r'^#.*?\n(Easy|Medium|Hard)', content, re.MULTILINE)
    difficulty = difficulty_match.group(1) if difficulty_match else "Unknown"

    # Extract the full raw description block first
    desc_match = re.search(r'(Easy|Medium|Hard)(.*?)(?=## 解題思路)', content, re.DOTALL)
    raw_desc = desc_match.group(2).strip() if desc_match else ""

    # Split raw description into description, examples, and constraints
    # Usually the format is: <text> ... Example 1: ... Constraints: ...
    # We will use regex to find these markers
    
    examples_match = re.search(r'(Example 1:.*?)(?=Constraints:|$)', raw_desc, re.DOTALL)
    examples = examples_match.group(1).strip() if examples_match else ""
    
    constraints_match = re.search(r'(Constraints:.*)', raw_desc, re.DOTALL)
    constraints = constraints_match.group(1).strip() if constraints_match else ""
    
    # Description is everything before Example 1 (or Constraints if no example)
    english_desc = raw_desc
    if examples_match:
        english_desc = raw_desc[:examples_match.start()].strip()
    elif constraints_match:
        english_desc = raw_desc[:constraints_match.start()].strip()

    # Extract Concept
    concept_match = re.search(r'## 解題思路(.*?)(?=```python)', content, re.DOTALL)
    concept = concept_match.group(1).strip() if concept_match else ""

    # Extract Code
    code_match = re.search(r'```python\n(.*?)```', content, re.DOTALL)
    raw_code = code_match.group(1) if code_match else ""

    # Process Code into blocks
    lines = raw_code.split('\n')
    blocks = []
    base_indent = -1
    
    for line in lines:
        if not line.strip():
            continue
        
        # Skip class and def definitions to focus on logic
        if line.strip().startswith('class Solution:') or line.strip().startswith('def '):
            continue

        # Calculate base indentation from the first logic line
        current_indent = len(line) - len(line.lstrip())
        if base_indent == -1:
            base_indent = current_indent
        
        # Normalize indentation
        normalized_indent = max(0, current_indent - base_indent)
        indent_level = normalized_indent // 4
        
        blocks.append({
            "id": f"{problem_id}_{len(blocks)}",
            "code": line.lstrip(),
            "originalIndent": indent_level
        })

    # The correct order is just the original order
    correct_order = [b["id"] for b in blocks]

    return {
        "id": problem_id,
        "title": title,
        "difficulty": difficulty,
        "description": english_desc,
        "examples": examples,
        "constraints": constraints,
        "concept": concept,
        "puzzle": {
            "blocks": blocks,
            "correctOrderIds": correct_order
        }
    }

def main():
    directory = '/Users/benson0409/NeetCode-150/01. Arrays & Hashing'
    output_dir = '/Users/benson0409/NeetCode-150/algo-lingo-proto/src/data'
    
    md_files = glob.glob(os.path.join(directory, '*.md'))
    problems = []

    for filepath in md_files:
        parsed = parse_markdown(filepath)
        if parsed and len(parsed["puzzle"]["blocks"]) > 0:
            problems.append(parsed)

    # Sort problems by ID
    problems.sort(key=lambda x: int(x["id"]) if x["id"].isdigit() else 999)

    with open(os.path.join(output_dir, 'chapter1.json'), 'w', encoding='utf-8') as f:
        json.dump(problems, f, ensure_ascii=False, indent=2)
    
    print(f"Successfully parsed {len(problems)} problems into chapter1.json")

if __name__ == '__main__':
    main()
