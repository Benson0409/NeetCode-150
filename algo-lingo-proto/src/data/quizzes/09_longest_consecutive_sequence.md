# Quiz: Longest Consecutive Sequence (128)

## Q1
- **Difficulty**: Easy
- **Test Point**: 題目定義
- **Question**: `Longest Consecutive Sequence` 要求的連續序列指的是？
- **Options**: [A] 數值連續 (如 1, 2, 3), [B] 索引連續, [C] 偶數序列, [D] 字串排序後的序列
- **Answer**: A
- **Explanation**: 序列中的數字必須能排成 `x, x+1, x+2...` 的形式。

## Q2
- **Difficulty**: Easy
- **Test Point**: 複雜度要求
- **Question**: 題目要求最優解的時間複雜度必須是？
- **Options**: [A] `O(N log N)`, [B] `O(N)`, [C] `O(N^2)`, [D] `O(1)`
- **Answer**: B
- **Explanation**: 這題的難點在於如何在「不排序」的情況下解決。

## Q3
- **Difficulty**: Medium
- **Test Point**: 資料結構
- **Question**: 為了達到 `O(N)` 時間，我們通常將陣列轉為什麼資料結構？
- **Options**: [A] `List`, [B] `Set` (集合), [C] `Stack`, [D] `Heap`
- **Answer**: B
- **Explanation**: `Set` 可以在 `O(1)` 時間內查找某個數字是否存在。

## Q4
- **Difficulty**: Hard
- **Test Point**: 優化核心
- **Question**: 遍歷 `nums` 時，如何判斷一個數字 `n` 是序列的「起點」？
- **Options**: [A] `if n - 1 not in numSet`, [B] `if n + 1 in numSet`, [C] `if n == 0`, [D] `if n < 10`
- **Answer**: A
- **Explanation**: 如果 `n-1` 不存在，說明 `n` 就是一段連續序列的開頭。

## Q5
- **Difficulty**: Medium
- **Test Point**: 演算法流程
- **Question**: 找到序列起點 `n` 後，接下來應該做什麼？
- **Options**: [A] 回傳答案, [B] 使用迴圈檢查 `n+1`, `n+2`... 是否都在集合中，並累計長度, [C] 刪除這個起點, [D] 尋找下一個起點
- **Answer**: B
- **Explanation**: 一口氣計算出該序列的長度。

## Q6
- **Difficulty**: Medium
- **Test Point**: 複雜度深究
- **Question**: 雖然有嵌套迴圈 (while)，為什麼總複雜度依然是 `O(N)`？
- **Options**: [A] 因為 N 很小, [B] 因為每個數字最多只會被「檢查是否為起點」以及「在序列中被計數」各一次, [C] 這是 Python 的自動優化, [D] 以上皆非
- **Answer**: B
- **Explanation**: 總共只會進入 `while` 迴圈 N 次（分布在不同的起點）。

## Q7
- **Difficulty**: Easy
- **Test Point**: 邊界情況
- **Question**: 輸入 `nums = []` 時，最長連續序列長度為？
- **Options**: [A] 0, [B] 1, [C] -1, [D] `Error`
- **Answer**: A
- **Explanation**: 沒有數字則沒有序列。

## Q8
- **Difficulty**: Medium
- **Test Point**: 空間複雜度
- **Question**: 使用 `Set` 解決此題，空間複雜度是？
- **Options**: [A] `O(1)`, [B] `O(N)`, [C] `O(log N)`, [D] `O(N^2)`
- **Answer**: B
- **Explanation**: 需將所有數字存入集合中。

## Q9
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 如何將列表快速轉為集合？
- **Options**: [A] `set(nums)`, [B] `list(set)`, [C] `nums.to_set()`, [D] `{nums}`
- **Answer**: A
- **Explanation**: 使用 `set()` 建構子。

## Q10
- **Difficulty**: Hard
- **Test Point**: 進階場景
- **Question**: 如果題目允許 `O(N log N)`，最簡單的寫法是？
- **Options**: [A] 雜湊表, [B] 先排序，再遍歷比較相鄰數字, [C] 使用廣度優先搜尋, [D] 以上皆非
- **Answer**: B
- **Explanation**: 排序後連續數字會排在一起，容易計算。

## Q11
- **Difficulty**: Medium
- **Test Point**: 邏輯判讀
- **Question**: 程式碼：`while (n + length) in numSet: length += 1`。這是在做什麼？
- **Options**: [A] 檢查序列是否中斷, [B] 計算從 `n` 開始的連續長度, [C] 刪除元素, [D] 加密
- **Answer**: B
- **Explanation**: 不斷往後找 `+1` 的數字直到找不著。

## Q12
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 題目要求回傳的是序列的「內容」還是「長度」？
- **Options**: [A] 內容, [B] 長度, [C] 總和, [D] 平均值
- **Answer**: B
- **Explanation**: 返回一個整數代表最大長度。

## Q13
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: 為什麼 `set` 的查詢是 `O(1)`，而 `list` 的查詢是 `O(N)`？
- **Options**: [A] `set` 使用雜湊表, [B] `list` 需要一個一個比對, [C] A 和 B 都是原因, [D] 因為 `set` 比較短
- **Answer**: C
- **Explanation**: 資料結構底層實作的差異。

## Q14
- **Difficulty**: Hard
- **Test Point**: 演算法變體
- **Question**: 此題是否可以使用 `Union Find` (並查集) 來解決？
- **Options**: [A] 可以, [B] 不可以, [C] 只有正數可以, [D] 視 target 而定
- **Answer**: A
- **Explanation**: 將每個數與 `n+1` 或 `n-1` 連接 (Union)，最後看最大的集合大小。

## Q15
- **Difficulty**: Easy
- **Test Point**: 邏輯演練
- **Question**: `nums = [100, 4, 200, 1, 3, 2]`。最長連續序列是？
- **Options**: [A] `[1, 2, 3, 4]`, [B] `[100, 200]`, [C] `[1, 2, 3]`, [D] `[4, 3, 2, 1]`
- **Answer**: A
- **Explanation**: 長度為 4。

## Q16
- **Difficulty**: Medium
- **Test Point**: 效能分析
- **Question**: 如果陣列中有大量重複數字，`O(N)` 解法會受影響嗎？
- **Options**: [A] 會變慢, [B] 不會，轉成 `set` 時會自動去重，反而可能變快, [C] 會報錯, [D] 邏輯會出錯
- **Answer**: B
- **Explanation**: 重複數字在序列檢查中不貢獻額外長度。

## Q17
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 如何在 Python 中更新最大值？
- **Options**: [A] `longest = max(longest, length)`, [B] `if length > longest: longest = length`, [C] A 和 B 都可以, [D] `longest.update(length)`
- **Answer**: C
- **Explanation**: `max()` 是最簡潔的方式。

## Q18
- **Difficulty**: Hard
- **Test Point**: 實作陷阱
- **Question**: 為什麼要先做 `numSet = set(nums)`？
- **Options**: [A] 為了去重, [B] 為了讓查詢時間變成 `O(1)`, [C] A 和 B 都是, [D] 只是為了語法
- **Answer**: C
- **Explanation**: 去重能減少不必要的起點判斷。

## Q19
- **Difficulty**: Medium
- **Test Point**: 負數處理
- **Question**: `nums = [-1, 0, 1]`。最長連續序列長度是？
- **Options**: [A] 1, [B] 2, [C] 3, [D] 0
- **Answer**: C
- **Explanation**: `-1 -> 0 -> 1` 是連續的。

## Q20
- **Difficulty**: Hard
- **Test Point**: 全局視野
- **Question**: 本題在資料庫索引優化中，類似的思維可以用於？
- **Options**: [A] 尋找分散式系統中的空洞索引 (Gaps), [B] 排序資料, [C] 加密密碼, [D] 統計 PV
- **Answer**: A
- **Explanation**: 檢查連續性是系統調度中的重要環節。

## Q21
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: `Consecutive` 的中文意思通常是？
- **Options**: [A] 連續的, [B] 斷斷續續的, [C] 遞增的, [D] 最大的
- **Answer**: A
- **Explanation**: 指緊接著下一個。

## Q22
- **Difficulty**: Medium
- **Test Point**: 實作細節
- **Question**: 如果沒有 `if n - 1 not in numSet` 這一行，程式碼會？
- **Options**: [A] 依然正確，但時間複雜度退化為 `O(N^2)`, [B] 報錯, [C] 陷入死迴圈, [D] 只有一半正確
- **Answer**: A
- **Explanation**: 每個數字都會嘗試當起點，導致大量重複掃描。

## Q23
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: `set` 的底層是如何實現的？
- **Options**: [A] 陣列, [B] 雜湊表, [C] 二元樹, [D] 跳躍表
- **Answer**: B
- **Explanation**: 跟 `dict` 的 Key 一樣使用雜湊技術。

## Q24
- **Difficulty**: Hard
- **Test Point**: 進階優化
- **Question**: 遍歷 `nums` 時，直接遍歷 `numSet` 而不是 `nums` 有什麼好處？
- **Options**: [A] 速度快 10 倍, [B] 可以自動跳過重複值，減少迴圈次數, [C] 沒有區別, [D] 語法比較進階
- **Answer**: B
- **Explanation**: `numSet` 已經去重，特別是在輸入有大量重複時很有感。

## Q25
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 序列 `[10, 11, 12]` 的長度是？
- **Options**: [A] 2, [B] 3, [C] 1, [D] 10
- **Answer**: B
- **Explanation**: 包含三個數字。

## Q26
- **Difficulty**: Medium
- **Test Point**: 演算法設計
- **Question**: 在排序法解法中，如何處理重複數字？
- **Options**: [A] 略過重複項, [B] 把重複項也算進長度, [C] 重新排序, [D] 停止程式
- **Answer**: A
- **Explanation**: 例如 `[1, 2, 2, 3]` 的連續長度是 3，不是 4。

## Q27
- **Difficulty**: Hard
- **Test Point**: 效能分析
- **Question**: `O(N)` 雜湊法在面試中被認為優於 `O(N log N)` 排序法，原因在於？
- **Options**: [A] 處理超大型數據時，常數係數的影響會變小, [B] 排序法需要修改輸入或產生拷貝, [C] A 和 B 都是, [D] 以上皆非
- **Answer**: C
- **Explanation**: 雜湊法在理論上限與實作彈性上都有優勢。

## Q28
- **Difficulty**: Easy
- **Test Point**: 題目細節
- **Question**: 本題對數字的大小範圍有限制嗎？
- **Options**: [A] 有，必須是 0-100, [B] 沒有，只要是整數即可, [C] 必須是正整數, [D] 必須小於 1000
- **Answer**: B
- **Explanation**: 題目支援廣泛的整數範圍。

## Q29
- **Difficulty**: Medium
- **Test Point**: 邊界檢查
- **Question**: 如果陣列只有一個數字，最長序列長度是？
- **Options**: [A] 0, [B] 1, [C] 2, [D] 隨機
- **Answer**: B
- **Explanation**: 單一數字自成一個長度為 1 的序列。

## Q30
- **Difficulty**: Hard
- **Test Point**: 進階理解
- **Question**: 為什麼說這題體現了「空間換取時間」的思想？
- **Options**: [A] 因為用了集合 `set` 增加了額外空間, [B] 因為排序了, [C] 因為用了遞迴, [D] 因為用了兩層迴圈
- **Answer**: A
- **Explanation**: 使用 `O(N)` 空間存集合，換取 `O(N)` 的速度。

## Q31
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 如何清空一個集合 `s`？
- **Options**: [A] `s.clear()`, [B] `s = set()`, [C] A 和 B 都可以, [D] `s.remove_all()`
- **Answer**: C
- **Explanation**: 兩者都能達到清空效果。

## Q32
- **Difficulty**: Medium
- **Test Point**: 程式碼填空
- **Question**: `while n + ______ in numSet: ...`
- **Options**: [A] `i`, [B] `length`, [C] `1`, [D] `target`
- **Answer**: B
- **Explanation**: 我們是根據目前長度去探測下一個數字。

## Q33
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 排序 (Sort) 的本質是？
- **Options**: [A] 減少重複, [B] 將資料按特定規則排列, [C] 增加長度, [D] 隨機打亂
- **Answer**: B
- **Explanation**: 最常見的是按大小升冪或降冪排列。

## Q34
- **Difficulty**: Hard
- **Test Point**: 時間複雜度
- **Question**: 如果輸入是 `[1, 2, 3, 4, 5]`。外層迴圈遍歷 5 次，但只有 `n=1` 時會進內層。內層會跑幾次？
- **Options**: [A] 1 次, [B] 5 次, [C] 25 次, [D] 0 次
- **Answer**: B
- **Explanation**: 內層會依序檢查 2, 3, 4, 5。

## Q35
- **Difficulty**: Medium
- **Test Point**: 實作選擇
- **Question**: 使用 `Union Find` 解法相比 `Set` 解法的優勢在於？
- **Options**: [A] 更快, [B] 更好寫, [C] 在處理動態數據（一邊加數字一邊問答案）時更強大, [D] 空間更省
- **Answer**: C
- **Explanation**: 並查集擅長動態連通性問題。

## Q36
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 本題在 LeetCode 屬於什麼等級？
- **Options**: [A] Easy, [B] Medium, [C] Hard, [D] 超級難
- **Answer**: B
- **Explanation**: 在 Arrays & Hashing 章節中算是稍微具備挑戰性的中等題。

## Q37
- **Difficulty**: Medium
- **Test Point**: 數據特徵
- **Question**: 如果數據是完全無序的，`set` 解法效能會受影響嗎？
- **Options**: [A] 會，會變慢, [B] 不會，雜湊表不依賴順序, [C] 會變快, [D] 以上皆非
- **Answer**: B
- **Explanation**: 這正是雜湊表的強項。

## Q38
- **Difficulty**: Hard
- **Test Point**: 複雜度深究
- **Question**: `set(nums)` 的過程本身時間複雜度是多少？
- **Options**: [A] `O(1)`, [B] `O(N)`, [C] `O(N^2)`, [D] `O(log N)`
- **Answer**: B
- **Explanation**: 遍歷一次陣列並插入雜湊表。

## Q39
- **Difficulty**: Easy
- **Test Point**: 基礎語法
- **Question**: `numSet = set([1, 1, 2, 2])`。`len(numSet)` 是？
- **Options**: [A] 2, [B] 4, [C] 1, [D] 0
- **Answer**: A
- **Explanation**: 去重後的結果。

## Q40
- **Difficulty**: Hard
- **Test Point**: 全局視野
- **Question**: 本題與「最大連續 1 的個數 (Max Consecutive Ones)」的區別在於？
- **Options**: [A] 沒區別, [B] 那題不要求數值連續，只要求 1 在陣列中連續, [C] 那題更難, [D] 這題更簡單
- **Answer**: B
- **Explanation**: 兩者雖然都有 Consecutive 字樣，但邏輯完全不同。
