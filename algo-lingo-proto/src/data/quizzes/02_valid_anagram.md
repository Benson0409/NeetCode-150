# Quiz: Valid Anagram (242)

## Q1
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 所謂的 `Anagram` (易位構詞) 是指兩個字串具備什麼特性？
- **Options**: [A] 字串長度相同, [B] 字母組成與數量完全一致但順序可能不同, [C] 第一個字母相同, [D] 互為反轉字串
- **Answer**: B
- **Explanation**: 例如 `rat` 與 `car` 不是，但 `anagram` 與 `nagaram` 是。

## Q2
- **Difficulty**: Easy
- **Test Point**: 邊界檢查
- **Question**: 在演算法的一開始，哪種檢查可以最快判斷兩字串「絕對不可能是」Anagram？
- **Options**: [A] `if s[0] != t[0]`, [B] `if len(s) != len(t)`, [C] `if s == t`, [D] `if not s`
- **Answer**: B
- **Explanation**: 長度不同則字母數量絕對不可能完全一致。

## Q3
- **Difficulty**: Medium
- **Test Point**: 程式碼邏輯
- **Question**: 若使用大小為 26 的陣列 `count` 來計算頻率，字母 `c` 的索引應該如何計算？
- **Options**: [A] `ord(c)`, [B] `ord(c) - ord('a')`, [C] `index(c)`, [D] `hash(c) % 26`
- **Answer**: B
- **Explanation**: 這是處理英文字母映射到 0-25 索引的經典寫法。

## Q4
- **Difficulty**: Easy
- **Test Point**: Python 工具
- **Question**: Python 中哪個內建模組可以一行程式碼解決頻率統計？
- **Options**: [A] `math.Counter`, [B] `collections.Counter`, [C] `itertools.Counter`, [D] `string.Counter`
- **Answer**: B
- **Explanation**: `Counter(s) == Counter(t)` 是 Python 最優雅的寫法之一。

## Q5
- **Difficulty**: Medium
- **Test Point**: 複雜度分析
- **Question**: 如果對兩個字串進行排序 (Sorting) 後再比較，時間複雜度是多少？
- **Options**: [A] `O(N)`, [B] `O(N log N)`, [C] `O(N^2)`, [D] `O(1)`
- **Answer**: B
- **Explanation**: 排序字串需要 `O(N log N)` 時間。

## Q6
- **Difficulty**: Medium
- **Test Point**: 空間複雜度
- **Question**: 使用長度 26 的固定陣列法，其額外空間複雜度為？
- **Options**: [A] `O(N)`, [B] `O(26) = O(1)`, [C] `O(log N)`, [D] `O(N^2)`
- **Answer**: B
- **Explanation**: 空間不隨輸入字串長度增加，屬於常數空間。

## Q7
- **Difficulty**: Hard
- **Test Point**: 實作細節
- **Question**: 考慮到 Unicode 字元（如中文或 Emoji），原本的 26 位元陣列法應該改為什麼？
- **Options**: [A] 開大的陣列 (如 65536), [B] 使用 `Hash Map` (Python 中的 `dict`), [C] 將 Unicode 轉為 ASCII, [D] 無法解決
- **Answer**: B
- **Explanation**: 哈希表可以動態處理任意數量的唯一字元。

## Q8
- **Difficulty**: Medium
- **Test Point**: 程式碼填充
- **Question**: 補完程式碼：`for char in s: count[char] = 1 + count.______(char, 0)`
- **Options**: [A] `find`, [B] `get`, [C] `fetch`, [D] `lookup`
- **Answer**: B
- **Explanation**: `dict.get(key, default)` 可以避免 `KeyError`。

## Q9
- **Difficulty**: Easy
- **Test Point**: 基礎語法
- **Question**: 在 Python 中，`sorted("anagram")` 會回傳什麼型態？
- **Options**: [A] `String`, [B] `List`, [C] `Set`, [D] `Tuple`
- **Answer**: B
- **Explanation**: `sorted()` 總是回傳排序後的列表。

## Q10
- **Difficulty**: Medium
- **Test Point**: 邏輯判斷
- **Question**: 在遍歷第一個字串時對計數器 `+1`，遍歷第二個字串時應如何操作？
- **Options**: [A] 同樣 `+1`, [B] 對計數器 `-1`, [C] 檢查是否大於 0, [D] 重設計數器
- **Answer**: B
- **Explanation**: 若兩字串對等，最終計數器應歸零。

## Q11
- **Difficulty**: Medium
- **Test Point**: 效能對比
- **Question**: 為什麼 Hash Map 解法通常比 Sorting 解法快？
- **Options**: [A] 因為字典比較貴, [B] 因為 `O(N)` 優於 `O(N log N)`, [C] 因為排序會改變原字串, [D] 以上皆非
- **Answer**: B
- **Explanation**: 線性時間複雜度在高數據量下效能提升顯著。

## Q12
- **Difficulty**: Easy
- **Test Point**: 邊界情況
- **Question**: 兩個空字串 `""` 是否互為 Anagram？
- **Options**: [A] 是, [B] 否, [C] 視系統而定, [D] 無法比較
- **Answer**: A
- **Explanation**: 空字串的字母組成完全一致（皆為空）。

## Q13
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: `collections.Counter` 底層主要是基於哪種資料結構實作的？
- **Options**: [A] `List`, [B] `dict`, [C] `set`, [D] `heap`
- **Answer**: B
- **Explanation**: 它是一個繼承自 `dict` 的子類，專門用於計數。

## Q14
- **Difficulty**: Hard
- **Test Point**: 記憶體開銷
- **Question**: 當字串非常巨大時，為什麼「一次遍歷 + 抵消」比「兩次遍歷 + 最後檢查」更省內存？
- **Options**: [A] 其實沒有更省, [B] 減少了計數器中非零項的數量, [C] 它可以提早發現錯誤並 Return, [D] 它可以減少快取失效
- **Answer**: C
- **Explanation**: 若在抵消過程中某個值變成了負數，可以立即斷定不成立。

## Q15
- **Difficulty**: Easy
- **Test Point**: 基礎語法
- **Question**: `ord('b') - ord('a')` 的結果是？
- **Options**: [A] 0, [B] 1, [C] 2, [D] 98
- **Answer**: B
- **Explanation**: `b` 是英文字母表的第 2 個 (索引 1)。

## Q16
- **Difficulty**: Medium
- **Test Point**: 實作邏輯
- **Question**: 如果不使用 `get()`，要如何檢查 `char` 是否在字典 `count` 中？
- **Options**: [A] `if count.has(char)`, [B] `if char in count`, [C] `if count[char] != None`, [D] `if exists(count[char])`
- **Answer**: B
- **Explanation**: Python 慣用語法是 `in`。

## Q17
- **Difficulty**: Easy
- **Test Point**: 複雜度分析
- **Question**: 題目要求字元範圍是小寫英文字母，這對我們選用陣列解法有什麼幫助？
- **Options**: [A] 提升安全性, [B] 讓空間複雜度固定為 26, [C] 讓程式碼變短, [D] 沒有幫助
- **Answer**: B
- **Explanation**: 明確範圍讓固定大小陣列成為可能。

## Q18
- **Difficulty**: Hard
- **Test Point**: Python 面試題
- **Question**: 執行 `" ".join(sorted(s)) == " ".join(sorted(t))` 空間複雜度是？
- **Options**: [A] `O(1)`, [B] `O(N)`, [C] `O(N^2)`, [D] `O(log N)`
- **Answer**: B
- **Explanation**: `sorted()` 和 `join()` 都會產生新的列表或字串物件，需要 `O(N)` 空間。

## Q19
- **Difficulty**: Medium
- **Test Point**: 程式碼判讀
- **Question**: 下列何者能正確判斷 `s` 與 `t` 是否為 Anagram？
- **Options**: [A] `set(s) == set(t)`, [B] `sum(map(ord, s)) == sum(map(ord, t))`, [C] `sorted(s) == sorted(t)`, [D] `len(s) == len(t)`
- **Answer**: C
- **Explanation**: [A] 會遺失字母頻率；[B] 會發生碰撞（如 `ac` 與 `bb` 總和相同）。

## Q20
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 題目編號為 242，它在 NeetCode-150 的順序是？
- **Options**: [A] 第 1 題, [B] 第 2 題, [C] 第 3 題, [D] 第 4 題
- **Answer**: B
- **Explanation**: 它緊接在 `Contains Duplicate` 之後。

## Q21
- **Difficulty**: Medium
- **Test Point**: Python 效能
- **Question**: 為什麼 `s = s.lower()` 這種操作在處理 Anagram 時要小心？
- **Options**: [A] 效能很差, [B] 它會產生新字串並消耗 `O(N)` 記憶體, [C] 它會報錯, [D] 它會改變字母順序
- **Answer**: B
- **Explanation**: Python 字串是不可變的 (Immutable)。

## Q22
- **Difficulty**: Hard
- **Test Point**: 進階優化
- **Question**: 在處理極大字串時，若記憶體不足，應如何比較頻率？
- **Options**: [A] 使用 `External Sort`, [B] 使用 `Rolling Hash`, [C] 分塊讀取並累加頻率, [D] 無法解決
- **Answer**: C
- **Explanation**: 可以在流式 (Streaming) 讀取中更新雜湊表。

## Q23
- **Difficulty**: Easy
- **Test Point**: 邏輯判斷
- **Question**: `aacc` 與 `ccaa` 是否為 Anagram？
- **Options**: [A] 是, [B] 否, [C] 視排序而定, [D] 長度超過 3 不算
- **Answer**: A
- **Explanation**: 字母組成完全相同。

## Q24
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: `all(v == 0 for v in count.values())` 這行程式碼的作用是？
- **Options**: [A] 檢查字典是否為空, [B] 檢查所有字母頻率抵消後是否皆為 0, [C] 將所有值歸零, [D] 計算總和
- **Answer**: B
- **Explanation**: 這是最後驗證 Anagram 的邏輯。

## Q25
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 題目提到的 `rearranging the letters` 代表順序重要嗎？
- **Options**: [A] 很重要, [B] 完全不重要, [C] 只有第一個字母重要, [D] 只有最後一個字母重要
- **Answer**: B
- **Explanation**: 只要字母組成一樣，順序可以隨意變動。

## Q26
- **Difficulty**: Medium
- **Test Point**: 資料結構
- **Question**: 哪種解法最適合處理「包含多種語言符號」的 Anagram 檢查？
- **Options**: [A] 26 位元陣列, [B] 256 位元陣列, [C] `Hash Map` (dict), [D] `Bitmask`
- **Answer**: C
- **Explanation**: 只有 Hash Map 具備動態擴展性。

## Q27
- **Difficulty**: Hard
- **Test Point**: 效能分析
- **Question**: 在 Python 中 `Counter(s) == Counter(t)` 的底層複雜度是？
- **Options**: [A] `O(N)`, [B] `O(N^2)`, [C] `O(1)`, [D] `O(N log N)`
- **Answer**: A
- **Explanation**: 兩次掃描建立字典，一次掃描比較字典。

## Q28
- **Difficulty**: Easy
- **Test Point**: 程式碼讀取
- **Question**: 執行 `for i in range(len(s)): count[s[i]] += 1` 需要幾次遍歷？
- **Options**: [A] 1 次, [B] 2 次, [C] N 次, [D] 0 次
- **Answer**: A
- **Explanation**: 雖然迴圈執行 N 次，但這稱為「一次遍歷」。

## Q29
- **Difficulty**: Medium
- **Test Point**: 邊界檢查
- **Question**: 如果字串 `s` 包含空白，`t` 不包含，它們可能是 Anagram 嗎？
- **Options**: [A] 可能, [B] 不可能, [C] 除非 blank 是特殊字元, [D] 視編碼而定
- **Answer**: B
- **Explanation**: 空白也是一個字元，長度會不同或頻率不符。

## Q30
- **Difficulty**: Hard
- **Test Point**: 演算法設計
- **Question**: 如果空間限制極度嚴苛 (O(1))，但可以修改輸入陣列，你會選哪種方法？
- **Options**: [A] `Hash Map`, [B] `In-place Sort` (如 Heap Sort), [C] 雙層迴圈, [D] 遞迴
- **Answer**: B
- **Explanation**: 原地排序後再掃描一次，額外空間為 `O(1)`。

## Q31
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: `sorted("python")` 的結果是？
- **Options**: [A] `"hnopty"`, [B] `['h', 'n', 'o', 'p', 't', 'y']`, [C] `{'h', 'n', 'o', 'p', 't', 'y'}`, [D] `"python"`
- **Answer**: B
- **Explanation**: 字串會被拆解成字母列表後排序。

## Q32
- **Difficulty**: Medium
- **Test Point**: 程式碼理解
- **Question**: 程式碼：`count = collections.defaultdict(int)`。優點是什麼？
- **Options**: [A] 存取不存在的 key 時會自動設為 0, [B] 效能比普通 dict 高, [C] 它會自動排序, [D] 它不佔記憶體
- **Answer**: A
- **Explanation**: 可以直接寫 `count[char] += 1` 而不用檢查 key。

## Q33
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 下列哪對單字互為 Anagram？
- **Options**: [A] `apple` / `peple`, [B] `listen` / `silent`, [C] `hello` / `world`, [D] `java` / `python`
- **Answer**: B
- **Explanation**: 這是 Anagram 的經典範例。

## Q34
- **Difficulty**: Medium
- **Test Point**: 複雜度誤區
- **Question**: 如果兩字串長度分別為 M 和 N，Sorting 法的總複雜度更精確的寫法是？
- **Options**: [A] `O(M+N)`, [B] `O(M log M + N log N)`, [C] `O(M * N)`, [D] `O(max(M, N))`
- **Answer**: B
- **Explanation**: 分別對兩者排序。

## Q35
- **Difficulty**: Hard
- **Test Point**: 語言差異
- **Question**: 在 C++ 中使用 `std::map` 而非 `std::unordered_map` 解這題，複雜度會變成？
- **Options**: [A] `O(N)`, [B] `O(N log N)`, [C] `O(N log K)`, [D] `O(1)`
- **Answer**: C
- **Explanation**: `map` 底層是平衡樹，查詢為 `O(log K)`，K 為唯一字母數。

## Q36
- **Difficulty**: Easy
- **Test Point**: 題目細節
- **Question**: 題目是否保證只包含小寫字母？
- **Options**: [A] 是, [B] 否, [C] 只有範例是, [D] 視評測平台而定
- **Answer**: A
- **Explanation**: LeetCode 原題 Constraint 標註為 lowercase English letters。

## Q37
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: `"a" * 100` 是否與 `"".join(["a"] * 100)` 互為 Anagram？
- **Options**: [A] 是, [B] 否, [C] 字串太長無法判斷, [D] 它們長度不等
- **Answer**: A
- **Explanation**: 它們最終都是包含 100 個 `a` 的字串。

## Q38
- **Difficulty**: Easy
- **Test Point**: 基礎語法
- **Question**: 如何取得字元 `s[i]` 的整數編碼值？
- **Options**: [A] `int(s[i])`, [B] `ord(s[i])`, [C] `ascii(s[i])`, [D] `hex(s[i])`
- **Answer**: B
- **Explanation**: `ord()` 函式回傳字元的 Unicode 編碼。

## Q39
- **Difficulty**: Medium
- **Test Point**: 實作技巧
- **Question**: 若字串長度不同，卻不先檢查 `len(s) != len(t)`，會發生什麼事？
- **Options**: [A] 程式崩潰, [B] 邏輯依然正確（最後計數器不為 0）, [C] 無法編譯, [D] 速度變快
- **Answer**: B
- **Explanation**: 雖然結果正確，但效能較差。

## Q40
- **Difficulty**: Hard
- **Test Point**: 全局思維
- **Question**: 在處理 Anagram 問題時，「頻率統計」的本質其實是哪種數學概念？
- **Options**: [A] 排列組合, [B] 多重集 (Multiset) 的相等性, [C] 機率密度, [D] 幾何轉換
- **Answer**: B
- **Explanation**: Multiset 關注元素的內容與出現次數，不關注順序。
