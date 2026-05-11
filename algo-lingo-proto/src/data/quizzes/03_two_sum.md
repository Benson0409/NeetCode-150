# Quiz: Two Sum (1)

## Q1
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: `Two Sum` 題目的核心目標是尋找陣列中哪兩個數字？
- **Options**: [A] 相加等於零的兩個數, [B] 相加等於給定 `target` 的兩個數的索引, [C] 相乘等於 `target` 的兩個數, [D] 數值最大的兩個數
- **Answer**: B
- **Explanation**: 題目要求回傳的是「索引 (Indices)」，而非數字本身。

## Q2
- **Difficulty**: Easy
- **Test Point**: 暴力解分析
- **Question**: 使用兩層 `for` 迴圈遍歷所有組合的暴力法，時間複雜度是多少？
- **Options**: [A] `O(N)`, [B] `O(N log N)`, [C] `O(N^2)`, [D] `O(1)`
- **Answer**: C
- **Explanation**: 每個元素都要跟其他 N-1 個元素比對，總共約 `N^2 / 2` 次。

## Q3
- **Difficulty**: Medium
- **Test Point**: 雜湊表原理
- **Question**: 使用 `Hash Map` 優化後，時間複雜度可以降到多少？
- **Options**: [A] `O(N)`, [B] `O(log N)`, [C] `O(N log N)`, [D] `O(1)`
- **Answer**: A
- **Explanation**: 遍歷一次陣列，每次查詢 `Map` 僅需 `O(1)`。

## Q4
- **Difficulty**: Easy
- **Test Point**: 補數概念
- **Question**: 在遍歷數字 `x` 時，我們在雜湊表中要找的對象（補數）是什麼？
- **Options**: [A] `x - target`, [B] `target + x`, [C] `target - x`, [D] `x / target`
- **Answer**: C
- **Explanation**: `x + complement = target` => `complement = target - x`。

## Q5
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: 遍歷 `nums` 時同時取得索引和數值，應使用哪個函式？
- **Options**: [A] `range()`, [B] `zip()`, [C] `enumerate()`, [D] `items()`
- **Answer**: C
- **Explanation**: `for i, num in enumerate(nums):` 可以同時取得下標與值。

## Q6
- **Difficulty**: Easy
- **Test Point**: 雜湊表內容
- **Question**: 在解法中，`Hash Map` 的 `Key` 應該存什麼？
- **Options**: [A] 索引 (Index), [B] 數字本身 (Value), [C] 補數, [D] 數字出現次數
- **Answer**: B
- **Explanation**: 我們是透過「數值」來查找它在哪裡（索引）。

## Q7
- **Difficulty**: Medium
- **Test Point**: 空間複雜度
- **Question**: 哈希表解法的一大缺點是？
- **Options**: [A] 速度慢, [B] 額外消耗 `O(N)` 空間來存儲 Map, [C] 只能處理正數, [D] 邏輯太複雜
- **Answer**: B
- **Explanation**: 這是典型的「空間換取時間」策略。

## Q8
- **Difficulty**: Hard
- **Test Point**: 實作陷阱
- **Question**: 如果陣列中有重複數字（如 `nums = [3, 3], target = 6`），為什麼不能先把所有數字都放進 Map 再開始找？
- **Options**: [A] 會發生 Hash Collision, [B] 同一個數字會蓋掉原本的索引, [C] Python 不支援, [D] 浪費記憶體
- **Answer**: B
- **Explanation**: 後面的 `3` 會蓋掉前面 `3` 的索引。正確做法是「邊找邊存」。

## Q9
- **Difficulty**: Easy
- **Test Point**: 題目規則
- **Question**: 題目是否允許「同一個元素使用兩次」？（例如 `target=6, nums=[3]` 回傳 `[0,0]`）
- **Options**: [A] 允許, [B] 不允許, [C] 視情況而定, [D] 只有在數字是 0 時允許
- **Answer**: B
- **Explanation**: 題目規定：`you may not use the same element twice`。

## Q10
- **Difficulty**: Medium
- **Test Point**: 邊界情況
- **Question**: 如果 `target` 是負數，哈希表解法是否仍適用？
- **Options**: [A] 不適用，需先取絕對值, [B] 適用，邏輯完全不變, [C] 只能處理一個負數, [D] 效能會變差
- **Answer**: B
- **Explanation**: 減法運算與雜湊查詢對負數同樣有效。

## Q11
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 如何檢查補數 `diff` 是否在字典 `prevMap` 中？
- **Options**: [A] `prevMap.exists(diff)`, [B] `diff in prevMap`, [C] `prevMap.has_key(diff)`, [D] `diff.is_in(prevMap)`
- **Answer**: B
- **Explanation**: `in` 是 Python 檢查鍵值是否存在的最快方式。

## Q12
- **Difficulty**: Medium
- **Test Point**: 二分搜尋誤區
- **Question**: 為什麼不能直接對陣列使用「雙指針 (Two Pointers)」解這題？
- **Options**: [A] 因為雙指針比較慢, [B] 因為排序會打亂原本的索引位置, [C] 因為空間不足, [D] 因為雙指針只適用於字串
- **Answer**: B
- **Explanation**: 題目要求回傳「原始索引」。若先排序，原本的索引就遺失了（除非額外記錄）。

## Q13
- **Difficulty**: Hard
- **Test Point**: 進階優化
- **Question**: 若題目改為 `167. Two Sum II - Input Array Is Sorted`，最優解的時間與空間複雜度分別是？
- **Options**: [A] `O(N)` / `O(N)`, [B] `O(N)` / `O(1)`, [C] `O(N log N)` / `O(1)`, [D] `O(1)` / `O(1)`
- **Answer**: B
- **Explanation**: 已排序陣列可使用雙指針，不需額外 Map。

## Q14
- **Difficulty**: Medium
- **Test Point**: 程式碼邏輯
- **Question**: 在 `prevMap[n] = i` 這行中，`i` 代表什麼？
- **Options**: [A] 目標值, [B] 當前數字的索引, [C] 補數的索引, [D] 陣列長度
- **Answer**: B
- **Explanation**: 我們將數值映射到它對應的索引。

## Q15
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 哈希表解法通常只需要遍歷陣列幾次？
- **Options**: [A] 一次 (One-pass), [B] 二次, [C] N 次, [D] log N 次
- **Answer**: A
- **Explanation**: 邊遍歷邊檢查邊存入，一次搞定。

## Q16
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: 如果找不到答案，通常在 LeetCode 中會回傳什麼？（雖然本題保證有解）
- **Options**: [A] `[]`, [B] `None`, [C] `raise Error`, [D] `[0,0]`
- **Answer**: A
- **Explanation**: 回傳空列表表示無解。

## Q17
- **Difficulty**: Easy
- **Test Point**: 數據範圍
- **Question**: 哈希表解法在處理數字範圍很大（如 `10^9`）時，空間消耗會受影響嗎？
- **Options**: [A] 會，範圍越大佔位越多, [B] 不會，只跟陣列元素個數 N 有關, [C] 會，會導致崩潰, [D] 只有負數會受影響
- **Answer**: B
- **Explanation**: 雜湊表只存實際出現的 N 個數，不看數值範圍。

## Q18
- **Difficulty**: Medium
- **Test Point**: 演算法設計
- **Question**: 為何「先找補數再存入」可以避免「同一個元素用兩次」的問題？
- **Options**: [A] 因為 Python 特性, [B] 因為當前元素還沒進 Map，補數只能從先前的元素找, [C] 因為 Map 會自動過濾, [D] 以上皆非
- **Answer**: B
- **Explanation**: 檢查時，自己還沒在 Map 裡，所以不會匹配到自己。

## Q19
- **Difficulty**: Easy
- **Test Point**: 記憶體開銷
- **Question**: 一個包含 1000 個整數的 Python 字典，大約佔用多少記憶體？
- **Options**: [A] 幾十 KB, [B] 幾百 MB, [C] 1 GB, [D] 幾乎不佔
- **Answer**: A
- **Explanation**: 對於現代電腦，O(N) 的字典是非常輕量的。

## Q20
- **Difficulty**: Hard
- **Test Point**: 進階場景
- **Question**: 如果內存極小，無法存儲 Map，且不能修改陣列，我們只能使用？
- **Options**: [A] 暴力解 (O(N^2)), [B] 遞迴, [C] 位元運算, [D] 無法解決
- **Answer**: A
- **Explanation**: 這是在極端空間限制下的唯一妥協。

## Q21
- **Difficulty**: Easy
- **Test Point**: 資料結構
- **Question**: 在 Python 中，`dict` 就是實現什麼資料結構的物件？
- **Options**: [A] Linked List, [B] Hash Table, [C] Stack, [D] Tree
- **Answer**: B
- **Explanation**: 字典底層就是雜湊表。

## Q22
- **Difficulty**: Medium
- **Test Point**: 實作細節
- **Question**: 下列哪行是計算補數的正確程式碼？
- **Options**: [A] `diff = target + n`, [B] `diff = target - n`, [C] `diff = n - target`, [D] `diff = target / n`
- **Answer**: B
- **Explanation**: 數理邏輯：`x + y = target` 則 `y = target - x`。

## Q23
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: 如果 `prevMap` 中已經有相同的 Key，執行 `prevMap[n] = i` 會發生什麼？
- **Options**: [A] 拋出錯誤, [B] 覆蓋舊的值, [C] 產生兩個相同的 Key, [D] 自動忽略
- **Answer**: B
- **Explanation**: 字典中 Key 是唯一的，後者覆蓋前者。

## Q24
- **Difficulty**: Hard
- **Test Point**: 進階複雜度
- **Question**: 在 C++ 中使用 `std::map` 解決 Two Sum，時間複雜度會變成？
- **Options**: [A] `O(N)`, [B] `O(N log N)`, [C] `O(N^2)`, [D] `O(1)`
- **Answer**: B
- **Explanation**: `std::map` 是紅黑樹實作，查詢為 `O(log N)`。

## Q25
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: `target = 10, nums = [2, 8]`，正確答案是？
- **Options**: [A] `[0, 1]`, [B] `[2, 8]`, [C] `[1, 0]`, [D] `[10]`
- **Answer**: A
- **Explanation**: 回傳索引 0 和 1。

## Q26
- **Difficulty**: Medium
- **Test Point**: 效能分析
- **Question**: 為什麼 Two Sum 通常不建議先排序？
- **Options**: [A] 排序太慢, [B] 需要額外空間存索引拷貝，且複雜度 `O(N log N)` 高於 `O(N)`, [C] 排序不支援負數, [D] 排序會報錯
- **Answer**: B
- **Explanation**: 雜湊表法在時間與空間上通常更均衡。

## Q27
- **Difficulty**: Medium
- **Test Point**: 程式碼判讀
- **Question**: `if diff in prevMap: return [prevMap[diff], i]`。這行中 `prevMap[diff]` 回傳的是？
- **Options**: [A] 補數的值, [B] 補數出現的次數, [C] 補數之前存進去的索引, [D] 整個字典
- **Answer**: C
- **Explanation**: 我們存的是 `{值: 索引}`。

## Q28
- **Difficulty**: Easy
- **Test Point**: 題目限制
- **Question**: 題目保證「剛好只有一個解 (Exactly one solution)」對開發者有什麼好處？
- **Options**: [A] 程式碼變短, [B] 找到答案後不需考慮其他可能，直接 return, [C] 不需要處理空輸入, [D] 減少記憶體
- **Answer**: B
- **Explanation**: 簡化了邏輯判斷。

## Q29
- **Difficulty**: Hard
- **Test Point**: 記憶體優化
- **Question**: 對於大量數據，`dict` 的負載因子 (Load Factor) 過高會導致什麼？
- **Options**: [A] 速度變快, [B] 重新雜湊 (Rehashing)，產生短暫停頓與空間翻倍, [C] 字典消失, [D] 索引錯誤
- **Answer**: B
- **Explanation**: 當空間快滿時，字典會申請更大的記憶體並重新排列。

## Q30
- **Difficulty**: Easy
- **Test Point**: 邏輯流程
- **Question**: 解決 Two Sum 的第一步通常是什麼？
- **Options**: [A] 建立空雜湊表, [B] 將所有數加起來, [C] 對陣列排序, [D] 檢查 target 是否為正
- **Answer**: A
- **Explanation**: 初始化 `prevMap = {}`。

## Q31
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: 如何取得字典 `prevMap` 中所有的 Key？
- **Options**: [A] `prevMap.values()`, [B] `prevMap.keys()`, [C] `prevMap.items()`, [D] `prevMap.all()`
- **Answer**: B
- **Explanation**: `keys()` 回傳所有的鍵，`values()` 回傳所有的值。

## Q32
- **Difficulty**: Hard
- **Test Point**: 演算法變體
- **Question**: 如果題目變為 `3Sum`，雜湊表法還能降到 `O(N)` 嗎？
- **Options**: [A] 可以, [B] 不可以，最低通常是 `O(N^2)`, [C] 可以，但需要兩張 Map, [D] 視 target 而定
- **Answer**: B
- **Explanation**: `3Sum` 的複雜度通常是 `O(N^2)`。

## Q33
- **Difficulty**: Easy
- **Test Point**: 資料結構
- **Question**: 哈希表的核心組件是？
- **Options**: [A] 指標, [B] 雜湊函數 (Hash Function), [C] 遞迴, [D] 鏈表
- **Answer**: B
- **Explanation**: 用來將資料轉為索引。

## Q34
- **Difficulty**: Medium
- **Test Point**: Python 效能
- **Question**: 在 Python 字典中，查詢時間是？
- **Options**: [A] 隨元素增加而線性成長, [B] 常數時間 `O(1)`, [C] 對數時間 `O(log N)`, [D] 隨機
- **Answer**: B
- **Explanation**: 雜湊表提供了極速的查詢效能。

## Q35
- **Difficulty**: Easy
- **Test Point**: 實作邏輯
- **Question**: 在迴圈中，我們是「先檢查 diff 是否在 map」還是「先將當前 n 存入 map」？
- **Options**: [A] 先檢查, [B] 先存入, [C] 同時進行, [D] 順序不影響
- **Answer**: A
- **Explanation**: 先檢查可以避免自己匹配到自己。

## Q36
- **Difficulty**: Medium
- **Test Point**: 程式碼填空
- **Question**: `prevMap = {}`。`____` i, n in enumerate(nums):
- **Options**: [A] `while`, [B] `if`, [C] `for`, [D] `def`
- **Answer**: C
- **Explanation**: 使用 `for` 迴圈遍歷。

## Q37
- **Difficulty**: Medium
- **Test Point**: 哈希衝突
- **Question**: 雖然雜湊查詢平均是 `O(1)`，但「最差情況」是？
- **Options**: [A] `O(1)`, [B] `O(N)`, [C] `O(log N)`, [D] `O(N^2)`
- **Answer**: B
- **Explanation**: 當所有 Key 都發生衝突時，會退化成線性搜尋。

## Q38
- **Difficulty**: Hard
- **Test Point**: 進階理解
- **Question**: 本題是否可以透過 `XOR` 運算來解決？
- **Options**: [A] 可以, [B] 不可以，XOR 只適用於尋找單一出現數字, [C] 只有 target 為 0 可以, [D] 視進位而定
- **Answer**: B
- **Explanation**: `XOR` 的性質不適用於求和問題。

## Q39
- **Difficulty**: Medium
- **Test Point**: 邏輯演練
- **Question**: `nums = [1, 5, 8], target = 13`。當遍歷到 `8` 時，`diff` 是多少？
- **Options**: [A] 13, [B] 5, [C] 1, [D] 21
- **Answer**: B
- **Explanation**: `13 - 8 = 5`。

## Q40
- **Difficulty**: Hard
- **Test Point**: 全局視野
- **Question**: `Two Sum` 的哈希表解法，其空間複雜度與時間複雜度的權衡 (Trade-off) 是？
- **Options**: [A] 犧牲時間換空間, [B] 犧牲空間換時間, [C] 兩者都優化, [D] 兩者都變差
- **Answer**: B
- **Explanation**: 用額外 `O(N)` 空間存字典，換取 `O(N)` 的極速時間。
