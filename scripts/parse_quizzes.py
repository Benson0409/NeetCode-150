import os
import glob
import json
import re

def parse_quiz_md(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract Problem Title/ID from filename (e.g. "01_contains_duplicate.md")
    filename = os.path.basename(filepath)
    prefix = filename.split('_')[0] # "01"
    
    # We need to map this prefix back to the real Problem ID (e.g. "217")
    # For now, let's just extract the number inside the parenthesis in the header if it exists
    header_match = re.search(r'# Quiz:.*\((\d+)\)', content)
    problem_id = header_match.group(1) if header_match else prefix

    questions = []
    # Split by "## Q" followed by digits
    raw_qs = re.split(r'## Q\d+', content)
    
    for raw_q in raw_qs[1:]: # Skip the part before the first Q
        lines = raw_q.strip().split('\n')
        q_data = {
            "id": f"{problem_id}_q{len(questions)+1}",
            "difficulty": "",
            "testPoint": "",
            "question": "",
            "options": [],
            "answer": -1,
            "explanation": ""
        }
        
        # Extract fields using regex
        diff_match = re.search(r'-\s*\*\*Difficulty\*\*:\s*(.*)', raw_q)
        tp_match = re.search(r'-\s*\*\*Test Point\*\*:\s*(.*)', raw_q)
        question_match = re.search(r'-\s*\*\*Question\*\*:\s*(.*)', raw_q)
        options_match = re.search(r'-\s*\*\*Options\*\*:\s*(.*)', raw_q)
        ans_match = re.search(r'-\s*\*\*Answer\*\*:\s*(.*)', raw_q)
        exp_match = re.search(r'-\s*\*\*Explanation\*\*:\s*(.*)', raw_q)
        
        if diff_match: q_data["difficulty"] = diff_match.group(1).strip()
        if tp_match: q_data["testPoint"] = tp_match.group(1).strip()
        if question_match: q_data["question"] = question_match.group(1).strip()
        if ans_match:
            ans_char = ans_match.group(1).strip().upper()
            # Map A, B, C, D to 0, 1, 2, 3
            q_data["answer"] = ord(ans_char) - ord('A')
        if exp_match: q_data["explanation"] = exp_match.group(1).strip()
        
        if options_match:
            opts_str = options_match.group(1).strip()
            # Try to split [A] ..., [B] ...
            opts = re.split(r'\[[A-D]\]', opts_str)
            q_data["options"] = [o.strip().rstrip(',') for o in opts if o.strip()]
            
        questions.append(q_data)
        
    return {
        "problemId": problem_id,
        "questions": questions
    }

def main():
    quiz_dir = '/Users/benson0409/NeetCode-150/algo-lingo-proto/src/data/quizzes'
    output_path = '/Users/benson0409/NeetCode-150/algo-lingo-proto/src/data/questions_pool.json'
    
    md_files = sorted(glob.glob(os.path.join(quiz_dir, '*.md')))
    pool = []

    for filepath in md_files:
        parsed = parse_quiz_md(filepath)
        pool.append(parsed)

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(pool, f, ensure_ascii=False, indent=2)
    
    print(f"Successfully parsed {len(pool)} quiz files into questions_pool.json")

if __name__ == '__main__':
    main()
