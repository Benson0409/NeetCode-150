# Quiz: Group Anagrams (49)

## Q1
- **Difficulty**: Easy
- **Test Point**: 題目定義
- **Question**: `Group Anagrams` 題目的目標是什麼？
- **Options**: [A] 找出字串中最長的 Anagram, [B] 將互為 Anagram 的字串分組放在一起回傳, [C] 計算總共有多少對 Anagram, [D] 將所有字串排序後連接
- **Answer**: B
- **Explanation**: 我們需要回傳一個「列表的列表」，每一組內都是 Anagram。

## Q2
- **Difficulty**: Medium
- **Test Point**: 鍵值設計 (Key Design)
- **Question**: 為了將 Anagram 分在同一組，我們通常使用什麼作為 `Hash Map` 的 `Key`？
- **Options**: [A] 字串的原始順序, [B] 字串長度, [C] 排序後的字串或字元頻率計數, [D] 字串的第一個字母
- **Answer**: C
- **Explanation**: 互為 Anagram 的字串在排序後會變得一模一樣，適合當 Key。

## Q3
- **Difficulty**: Medium
- **Test Point**: 複雜度分析
- **Question**: 若字串平均長度為 `K`，總共有 `N` 個字串，使用「排序法」當 Key 的時間複雜度是？
- **Options**: [A] `O(N * K)`, [B] `O(N * K log K)`, [C] `O(N^2 * K)`, [D] `O(N + K)`
- **Answer**: B
- **Explanation**: 每個字串都需要排序 (`K log K`)，總共執行 N 次。

## Q4
- **Difficulty**: Hard
- **Test Point**: 優化思路
- **Question**: 除了排序，還有一種 `O(N * K)` 的解法是用什麼當 Key？
- **Options**: [A] 字串的 Hash 值, [B] 長度為 26 的字元出現次數元組 (tuple), [C] 第一個字母與最後一個字母, [D] 字串中所有字元的 ASCII 總和
- **Answer**: B
- **Explanation**: 統計每個字串中 a-z 的出現次數，轉換為 tuple 作為 Key。

## Q5
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: 在 Python 中，為什麼不能直接用 `list` 當作字典的 `Key`？
- **Options**: [A] 速度太慢, [B] `list` 是 mutable (可變的)，不可雜湊 (unhashable), [C] 語法不支持, [D] 會佔用太多記憶體
- **Answer**: B
- **Explanation**: 字典的 Key 必須是不可變的 (Immutable)，例如 `tuple` 或 `str`。

## Q6
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: `defaultdict(list)` 的好處是？
- **Options**: [A] 自動幫 list 排序, [B] 當 Key 不存在時，自動初始化一個空 list, [C] 節省記憶體, [D] 加快查詢速度
- **Answer**: B
- **Explanation**: 這樣我們可以直接 `res[key].append(s)` 而不需檢查 Key 是否存在。

## Q7
- **Difficulty**: Medium
- **Test Point**: 空間複雜度
- **Question**: 本題的最優解空間複雜度是多少？
- **Options**: [A] `O(1)`, [B] `O(N * K)`, [C] `O(N)`, [D] `O(K)`
- **Answer**: B
- **Explanation**: 我們需要存儲所有字串的所有字元。

## Q8
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: `["eat", "tea", "tan", "ate", "nat", "bat"]` 中，`"eat"` 的分組應該包含？
- **Options**: [A] `["eat", "tea", "ate"]`, [B] `["eat", "tan"]`, [C] `["eat", "bat"]`, [D] `["eat", "ate", "nat"]`
- **Answer**: A
- **Explanation**: 這三個單字都是由 a, e, t 組成。

## Q9
- **Difficulty**: Hard
- **Test Point**: 實作細節
- **Question**: 使用「26 位元計數法」時，如何將計數陣列 `count = [0]*26` 轉為可用的 Key？
- **Options**: [A] `str(count)`, [B] `tuple(count)`, [C] `"".join(map(str, count))`, [D] 以上皆可，但 tuple 效能通常較好
- **Answer D**: 
- **Explanation**: tuple 是 immutable 且 hashable 的最直接選擇。

## Q10
- **Difficulty**: Medium
- **Test Point**: Python 技巧
- **Question**: 執行 `sorted("eat")` 會得到？
- **Options**: [A] `"aet"`, [B] `['a', 'e', 't']`, [C] `{'a', 'e', 't'}`, [D] `"eat"`
- **Answer**: B
- **Explanation**: `sorted()` 回傳 list，若要當 Key 通常還需 `"".join()` 轉回字串。

## Q11
- **Difficulty**: Easy
- **Test Point**: 複雜度定義
- **Question**: `N` 是字串數量，`K` 是字串最大長度。`O(NK)` 這種複雜度通常被稱為什麼？
- **Options**: [A] 對數時間, [B] 線性時間 (相對於總字元數), [C] 平方時間, [D] 常數時間
- **Answer**: B
- **Explanation**: 處理了所有字元的總量，效能極佳。

## Q12
- **Difficulty**: Hard
- **Test Point**: 邊界情況
- **Question**: 如果輸入包含空字串 `["", ""]`，程式碼是否會報錯？
- **Options**: [A] 會，無法排序空字串, [B] 不會，空字串會被分在同一組, [C] 會，索引會溢出, [D] 只有 Python 3.10 以上不會
- **Answer**: B
- **Explanation**: 空字串排序後仍是空，計數全為 0，邏輯依然成立。

## Q13
- **Difficulty**: Medium
- **Test Point**: 雜湊衝突
- **Question**: 在本題中，如果兩個非 Anagram 字串的 `hash(Key)` 相同，會發生什麼事？
- **Options**: [A] 錯誤分組, [B] 字典內部會透過 `==` 檢查 Key 是否真的相等，從而正確處理衝突, [C] 程式崩潰, [D] 隨機刪除一組
- **Answer**: B
- **Explanation**: 這是雜湊表的 Open Addressing 或 Chaining 機制確保的正確性。

## Q14
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 如何取得字典 `res` 中所有的「分組後的結果清單」？
- **Options**: [A] `res.keys()`, [B] `res.values()`, [C] `res.items()`, [D] `list(res)`
- **Answer**: B
- **Explanation**: `res.values()` 會回傳所有 list 的集合。

## Q15
- **Difficulty**: Medium
- **Test Point**: 演算法設計
- **Question**: 為什麼不能只用「ASCII 總和」作為分組 Key？
- **Options**: [A] 效能太差, [B] 不同的組合可能會有相同的總和（如 "ac" 和 "bb"）, [C] 語法不支持, [D] 記憶體不夠
- **Answer**: B
- **Explanation**: ASCII 總和不是唯一的識別標誌，會造成錯誤分組。

## Q16
- **Difficulty**: Hard
- **Test Point**: 實作優化
- **Question**: 在 Python 中，`"".join(sorted(s))` 和 `tuple(count)` 哪一個作為 Key 通常更省時間？
- **Options**: [A] 排序法，因為底層 C 實作極快, [B] 計數法，因為它是線性時間, [C] 視字串長度 K 而定, [D] 完全一樣
- **Answer**: C
- **Explanation**: 當 K 很小時，排序法的常數開銷可能更小；K 很大時，計數法的 `O(K)` 優勢明顯。

## Q17
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 互為 Anagram 的字串，其組成字元的「集合 (`set`)」是否一定相等？
- **Options**: [A] 是, [B] 否, [C] 視長度而定, [D] 只有長度為 1 是
- **Answer**: A
- **Explanation**: 但反過來不一定成立，因為 set 會忽略重複次數。

## Q18
- **Difficulty**: Medium
- **Test Point**: 記憶體開銷
- **Question**: 哈希表中的分組 list 是否包含原始字串的拷貝？
- **Options**: [A] 否，是引用 (Reference), [B] 是，是深拷貝, [C] 只有在字串長度大於 10 時是, [D] 隨機決定
- **Answer**: A
- **Explanation**: Python 列表中存儲的是對字串物件的引用。

## Q19
- **Difficulty**: Hard
- **Test Point**: Python 語言特性
- **Question**: 如果我們使用 `f-string` 將 count 陣列轉成字串 `"0#1#0...2#"` 當 Key，這種做法？
- **Options**: [A] 是錯誤的, [B] 是可行的，這也是一種常見的序列化 Key 方式, [C] 效能最高, [D] 會導致內存洩漏
- **Answer**: B
- **Explanation**: 只要確保產生的字串是唯一的且可雜湊即可。

## Q20
- **Difficulty**: Medium
- **Test Point**: 演算法思維
- **Question**: Group Anagrams 本質上是將問題轉化為？
- **Options**: [A] 搜尋問題, [B] 分類問題, [C] 最短路徑問題, [D] 遞迴問題
- **Answer**: B
- **Explanation**: 我們利用雜湊表作為容器進行分類。

## Q21
- **Difficulty**: Easy
- **Test Point**: 基礎語法
- **Question**: 如何建立一個以 `list` 為預設值的字典？
- **Options**: [A] `{}`, [B] `defaultdict(list)`, [C] `dict(list)`, [D] `list(dict)`
- **Answer**: B
- **Explanation**: 需要先 `from collections import defaultdict`。

## Q22
- **Difficulty**: Medium
- **Test Point**: 複雜度陷阱
- **Question**: 若計數法中每次都 `"".join(map(str, count))`，這部分的複雜度是？
- **Options**: [A] `O(1)`, [B] `O(26)`, [C] `O(K)`, [D] `O(N)`
- **Answer**: B
- **Explanation**: 因為陣列長度固定為 26，這部分是常數時間。

## Q23
- **Difficulty**: Easy
- **Test Point**: 邏輯判斷
- **Question**: 字串 `["abc", "bca", "cab"]` 最終會被分成幾組？
- **Options**: [A] 1 組, [B] 2 組, [C] 3 組, [D] 0 組
- **Answer**: A
- **Explanation**: 它們都是彼此的 Anagram。

## Q24
- **Difficulty**: Hard
- **Test Point**: 進階優化
- **Question**: 使用質數乘積法 (每個字母對應一個質數，相乘得 Key) 來解這題，優點與風險是？
- **Options**: [A] 速度最快但有整數溢出 (Integer Overflow) 風險, [B] 絕對安全, [C] 速度最慢, [D] 節省空間但邏輯複雜
- **Answer**: A
- **Explanation**: 這是數學上的唯一分解定理，但乘積會變得非常大。

## Q25
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: `ord('a')` 是 97，那麼 `ord('c') - ord('a')` 是？
- **Options**: [A] 1, [B] 2, [C] 3, [D] 0
- **Answer**: B
- **Explanation**: 索引位置為 0('a'), 1('b'), 2('c')。

## Q26
- **Difficulty**: Medium
- **Test Point**: 實作細節
- **Question**: 在計數法迴圈內：`for c in s: count[ord(c) - ord('a')] += 1`。這是在做什麼？
- **Options**: [A] 排序字串, [B] 統計字串中各字母出現次數, [C] 計算 ASCII 總和, [D] 刪除重複字元
- **Answer**: B
- **Explanation**: 這是建立頻率分佈表。

## Q27
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: 為什麼說 `tuple(count)` 是 Hashable 的？
- **Options**: [A] 因為它是括號括起來的, [B] 因為 Tuple 是不可變的 (Immutable), [C] 因為它包含數字, [D] 視內容而定
- **Answer**: B
- **Explanation**: 不可變物件才能保證其 Hash 值在生命週期內不變。

## Q28
- **Difficulty**: Hard
- **Test Point**: 效能對比
- **Question**: 在什麼情況下「排序法」會比「計數法」慢很多？
- **Options**: [A] 字串數量 N 很大時, [B] 單個字串長度 K 很大時, [C] 記憶體不足時, [D] 處理 Unicode 時
- **Answer**: B
- **Explanation**: `K log K` 會比 `K` 成長得快。

## Q29
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 題目要求回傳的組內順序有差嗎？
- **Options**: [A] 有，必須依字母排序, [B] 沒差，可以以任何順序回傳, [C] 必須依長度排序, [D] 必須與輸入順序一致
- **Answer**: B
- **Explanation**: 題目註明：`You can return the answer in any order.`。

## Q30
- **Difficulty**: Medium
- **Test Point**: 資料結構
- **Question**: 哈希表法在處理 10,000 個長度為 100 的字串時，大約需要處理多少次基本運算？
- **Options**: [A] 1 萬次, [B] 100 萬次 (N * K), [C] 1 億次, [D] 1 兆次
- **Answer**: B
- **Explanation**: 線性複雜度讓它處理百萬級運算依然快速。

## Q31
- **Difficulty**: Hard
- **Test Point**: 進階場景
- **Question**: 如果題目禁止使用雜湊表 (Hash Map)，你會如何分組？
- **Options**: [A] 排序所有字串並記錄索引，然後檢查相鄰項, [B] 使用位元運算, [C] 沒辦法做, [D] 用 Stack
- **Answer**: A
- **Explanation**: 排序整個輸入清單 (以排序後的字串為比較基準) 也能達成。

## Q32
- **Difficulty**: Easy
- **Test Point**: 基礎語法
- **Question**: Python 字典的 `get()` 方法第二個參數作用是？
- **Options**: [A] Key 的型態, [B] 找不到 Key 時的預設回傳值, [C] 限制最大長度, [D] 排序權重
- **Answer**: B
- **Explanation**: 常用於初始化或安全讀取。

## Q33
- **Difficulty**: Medium
- **Test Point**: 演算法優點
- **Question**: 計數法 (O(NK)) 的主要優勢在於？
- **Options**: [A] 程式碼最短, [B] 與字串內容無關，始終保持線性複雜度, [C] 空間最省, [D] 支持動態規劃
- **Answer**: B
- **Explanation**: 它穩定的效能表現使其成為面試加分項。

## Q34
- **Difficulty**: Easy
- **Test Point**: 題目細節
- **Question**: 輸入 `strs = ["a"]`，輸出應該是？
- **Options**: [A] `[["a"]]`, [B] `["a"]`, [C] `[]`, [D] `[[]]`
- **Answer**: A
- **Explanation**: 單一字串也是一組。

## Q35
- **Difficulty**: Medium
- **Test Point**: 程式碼判讀
- **Question**: `res = collections.defaultdict(list); ...; return list(res.values())`。最後的 `list()` 是做什麼？
- **Options**: [A] 轉換型態, [B] 排序結果, [C] 將 `dict_values` 迭代器轉為真正的列表物件, [D] 刪除重複
- **Answer**: C
- **Explanation**: `res.values()` 回傳的是視圖物件，通常轉為 list 進行後續操作。

## Q36
- **Difficulty**: Hard
- **Test Point**: 空間分析
- **Question**: 在計數法中，Key 的長度固定為 26，這對空間複雜度有影響嗎？
- **Options**: [A] 有，空間變為 O(26N), [B] 沒有，26 是常數，仍視為 O(NK), [C] 有，空間會變小, [D] 以上皆非
- **Answer**: B
- **Explanation**: 常數項在 Big O 分析中會被省略。

## Q37
- **Difficulty**: Easy
- **Test Point**: 邏輯判斷
- **Question**: 如果兩個單字長度不同，它們可能是 Anagram 嗎？
- **Options**: [A] 絕無可能, [B] 有可能, [C] 只有包含數字時可能, [D] 只有在加密時可能
- **Answer**: A
- **Explanation**: 這是 Anagram 的基本判定前提。

## Q38
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: `collections.Counter` 對象是否可以作為字典的 Key？
- **Options**: [A] 可以, [B] 不可以，因為它是可變的 (Mutable), [C] 只有在包含 hashable 元素時可以, [D] Python 3.8 以後可以
- **Answer**: B
- **Explanation**: Counter 對象是 mutable 的。

## Q39
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: `Anagram` 的中譯通常是什麼？
- **Options**: [A] 回文字串, [B] 易位構詞 (或字母易位詞), [C] 重複字串, [D] 雜湊字串
- **Answer**: B
- **Explanation**: 指相同字母重新排列。

## Q40
- **Difficulty**: Hard
- **Test Point**: 全局視野
- **Question**: Group Anagrams 在處理大規模數據時，最主要的瓶頸通常在哪？
- **Options**: [A] 哈希表擴張, [B] 字串頻率計算 (遍歷 N*K 次), [C] 排序字串, [D] 內存分配
- **Answer**: B
- **Explanation**: 雖然是線性，但如果 K 很大且 N 很大，總遍歷次數依然龐大。
