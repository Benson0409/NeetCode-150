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
    full_title = title_match.group(1) if title_match else filename
    
    # Try to extract numerical ID from title (e.g. "217. Title" or "659 · Title" or "1 Two Sum")
    id_match = re.search(r'^(\d+)', full_title)
    problem_id = id_match.group(1) if id_match else filename.split('.')[0]
    title = full_title

    # Extract Difficulty (Easy|Medium|Hard) anywhere before the concept section
    difficulty_match = re.search(r'\n(Easy|Medium|Hard)\s*\n', content, re.IGNORECASE)
    difficulty = difficulty_match.group(1).capitalize() if difficulty_match else "Unknown"

    # Extract the full raw description block (everything between Title and ## 解題思路)
    # Use re.escape on the title to avoid regex issues
    start_pos = title_match.end() if title_match else 0
    concept_pos = content.find('## 解題思路')
    if concept_pos == -1: concept_pos = len(content)
    
    raw_desc = content[start_pos:concept_pos].strip()
    
    # Remove the difficulty from raw_desc if it was found
    if difficulty_match:
        raw_desc = raw_desc.replace(difficulty_match.group(0).strip(), "").strip()

    # Split raw description into description, examples, and constraints
    # Match various Example formats: "Example 1:", "Example1", "Example 1"
    examples_match = re.search(r'(Example\s*\d+:?.*?)(?=Constraints:|$)', raw_desc, re.DOTALL | re.IGNORECASE)
    examples = examples_match.group(1).strip() if examples_match else ""
    
    constraints_match = re.search(r'(Constraints:.*)', raw_desc, re.DOTALL | re.IGNORECASE)
    constraints = constraints_match.group(1).strip() if constraints_match else ""
    
    # Description is everything before Example (or Constraints if no example)
    english_desc = raw_desc
    if examples_match:
        english_desc = raw_desc[:examples_match.start()].strip()
    elif constraints_match:
        english_desc = raw_desc[:constraints_match.start()].strip()
    
    # Clean up "Description" header if present at the start
    english_desc = re.sub(r'^Description\s*\n', '', english_desc, flags=re.IGNORECASE).strip()

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
    
    md_files = sorted(glob.glob(os.path.join(directory, '*.md')))
    problems = []

    for filepath in md_files:
        parsed = parse_markdown(filepath)
        if parsed and len(parsed["puzzle"]["blocks"]) > 0:
            problems.append(parsed)

    # Problems are already added in sorted order of filenames

    with open(os.path.join(output_dir, 'chapter1.json'), 'w', encoding='utf-8') as f:
        json.dump(problems, f, ensure_ascii=False, indent=2)
    
    print(f"Successfully parsed {len(problems)} problems into chapter1.json")

if __name__ == '__main__':
    main()
