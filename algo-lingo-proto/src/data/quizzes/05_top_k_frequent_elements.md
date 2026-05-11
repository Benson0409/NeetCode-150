# Quiz: Top K Frequent Elements (347)

## Q1
- **Difficulty**: Easy
- **Test Point**: 題目定義
- **Question**: `Top K Frequent Elements` 的目標是找出陣列中出現次數最多的前 `k` 個元素，對嗎？
- **Options**: [A] 對, [B] 不對，是找出最小的 k 個數, [C] 不對，是找出剛好出現 k 次的數, [D] 不對，是找出大於 k 的數
- **Answer**: A
- **Explanation**: 核心在於「頻率統計」與「前 k 名」。

## Q2
- **Difficulty**: Easy
- **Test Point**: 基礎工具
- **Question**: 在 Python 中，最快計算陣列元素頻率的方法是？
- **Options**: [A] 使用 `set`, [B] 使用 `collections.Counter`, [C] 手動寫 `for` 迴圈, [D] 使用 `sorted()`
- **Answer**: B
- **Explanation**: `Counter(nums)` 會返回一個 `{元素: 次數}` 的字典。

## Q3
- **Difficulty**: Medium
- **Test Point**: 複雜度分析
- **Question**: 若使用 `Counter(nums).most_common(k)`，底層通常使用什麼資料結構來優化查詢？
- **Options**: [A] `Linked List`, [B] `Heap` (堆積), [C] `Red-Black Tree`, [D] `Stack`
- **Answer**: B
- **Explanation**: 堆積 (Heap) 可以在 `O(N log k)` 時間內找到前 k 個最大元素。

## Q4
- **Difficulty**: Hard
- **Test Point**: 進階解法
- **Question**: 使用 `Bucket Sort` (桶子排序) 概念解決此題，時間複雜度可以優化到？
- **Options**: [A] `O(N log N)`, [B] `O(N log k)`, [C] `O(N)`, [D] `O(k)`
- **Answer**: C
- **Explanation**: 桶子索引代表「出現頻率」，內容存「對應數字」，遍歷一次即可。

## Q5
- **Difficulty**: Medium
- **Test Point**: 桶子排序細節
- **Question**: 在桶子排序解法中，桶子陣列 `freq` 的長度應該設為多少？
- **Options**: [A] `k + 1`, [B] `len(nums) + 1`, [C] `26`, [D] `100`
- **Answer**: B
- **Explanation**: 某個元素最高可能出現 `len(nums)` 次。

## Q6
- **Difficulty**: Medium
- **Test Point**: 空間複雜度
- **Question**: 桶子排序解法的主要空間消耗在哪裡？
- **Options**: [A] 雜湊表, [B] 桶子陣列, [C] 遞迴堆疊, [D] A 和 B 都是，空間複雜度為 `O(N)`
- **Answer**: D
- **Explanation**: 需要額外空間存頻率字典與頻率桶。

## Q7
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: `counts = {1: 3, 2: 2, 3: 1}`。執行 `for n, c in counts.items()`，`n` 代表？
- **Options**: [A] 出現次數, [B] 數字本身, [C] 索引, [D] 隨機數
- **Answer**: B
- **Explanation**: `items()` 回傳 `(key, value)`，在此 key 為數字本身。

## Q8
- **Difficulty**: Hard
- **Test Point**: 複雜度權衡
- **Question**: 為什麼 `O(N)` 的桶子排序法有時比 `O(N log k)` 的堆積解法更好？
- **Options**: [A] 沒這回事, [B] 當 k 很大 (接近 N) 時，線性時間明顯更快, [C] 它不需要額外空間, [D] 它程式碼更短
- **Answer**: B
- **Explanation**: 若 `k` 很大，`log k` 的開銷就會顯現。

## Q9
- **Difficulty**: Easy
- **Test Point**: 邊界情況
- **Question**: 若輸入 `nums = [1], k = 1`，輸出應為？
- **Options**: [A] `[1]`, [B] `[]`, [C] `1`, [D] `Error`
- **Answer**: A
- **Explanation**: 唯一出現的元素就是 Top 1。

## Q10
- **Difficulty**: Medium
- **Test Point**: 實作細節
- **Question**: 在桶子排序法中，我們應該從桶子的哪一端開始收集答案？
- **Options**: [A] 開頭 (索引 0), [B] 末尾 (索引 len(nums)), [C] 隨機, [D] 中間
- **Answer**: B
- **Explanation**: 高頻率的數字在索引較大的桶子裡。

## Q11
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: 在 Python 中，`heapq.nlargest(k, counts.keys(), key=counts.get)` 的時間複雜度是？
- **Options**: [A] `O(N)`, [B] `O(N log k)`, [C] `O(k)`, [D] `O(N log N)`
- **Answer**: B
- **Explanation**: 這是堆積法的標準庫實作。

## Q12
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 桶子排序法 (Bucket Sort) 是否依賴於元素本身的數值大小？
- **Options**: [A] 是, [B] 否，在此題僅依賴於「出現頻率」, [C] 視 k 而定, [D] 視陣列是否排序而定
- **Answer**: B
- **Explanation**: 桶子的 index 是頻率，不是數值。

## Q13
- **Difficulty**: Hard
- **Test Point**: 進階場景
- **Question**: 如果題目要求在處理數據流 (Streaming Data) 時即時回傳 Top K，哪種解法更合適？
- **Options**: [A] 桶子排序, [B] 最小堆積 (Min-Heap) 維持大小為 k, [C] 暴力排序, [D] 快速選擇
- **Answer**: B
- **Explanation**: 堆積法動態維護前 k 名非常高效。

## Q14
- **Difficulty**: Medium
- **Test Point**: 程式碼邏輯
- **Question**: 在桶子排序法中，`freq = [[] for i in range(len(nums) + 1)]` 這行程式碼建立了什麼？
- **Options**: [A] 一個全為 0 的列表, [B] 一個包含多個空列表的列表, [C] 一個二維矩陣, [D] 一個字典
- **Answer**: B
- **Explanation**: 每個索引（頻率）都可以存放多個數字。

## Q15
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 如何在 Python 中把一個列表 `res` 的內容反轉？
- **Options**: [A] `res.reverse()`, [B] `res[::-1]`, [C] `reversed(res)`, [D] 以上皆可
- **Answer**: D
- **Explanation**: Python 提供多種靈活的反轉方式。

## Q16
- **Difficulty**: Medium
- **Test Point**: 演算法穩定性
- **Question**: 如果有兩個數字出現頻率相同，題目有規定優先回傳哪一個嗎？
- **Options**: [A] 有，數值小的優先, [B] 沒有，題目保證答案唯一或可回傳任意順序, [C] 有，先出現的優先, [D] 必須回傳較大的那個
- **Answer**: B
- **Explanation**: LeetCode 題目通常不要求頻率相同時的順序。

## Q17
- **Difficulty**: Hard
- **Test Point**: 面試加分題
- **Question**: 除了堆積和桶子排序，還有一種 `O(N)` 平均時間複雜度的解法叫什麼？
- **Options**: [A] `Quick Select` (快速選擇), [B] `Merge Sort`, [C] `Binary Search`, [D] `BFS`
- **Answer**: A
- **Explanation**: 快速選擇演算法可用於尋找第 K 大元素。

## Q18
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 本題保證 `k` 的範圍在哪裡？
- **Options**: [A] `1 <= k <= N`, [B] `k` 恆等於 1, [C] `k` 可能大於 N, [D] `k` 永遠是偶數
- **Answer**: A
- **Explanation**: `k` 不會超過陣列長度。

## Q19
- **Difficulty**: Medium
- **Test Point**: Python 工具
- **Question**: `collections.Counter([1,1,2,2,3]).most_common(2)` 的回傳結果是？
- **Options**: [A] `[1, 2]`, [B] `[(1, 2), (2, 2)]`, [C] `{1:2, 2:2}`, [D] `[2, 2]`
- **Answer**: B
- **Explanation**: 回傳 `(元素, 次數)` 的 tuple 列表。

## Q20
- **Difficulty**: Hard
- **Test Point**: 內存分析
- **Question**: 對於 `N = 1,000,000` 且只有一個重複元素，桶子排序法會浪費空間嗎？
- **Options**: [A] 會，桶子陣列長度達一百萬但大部分是空的, [B] 不會, [C] 只浪費 1 KB, [D] 它是動態配置的
- **Answer**: A
- **Explanation**: 這是桶子排序法的典型空間浪費，即便大部分桶子為空，陣列仍需分配。

## Q21
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 哈希表 (Hash Table) 在本題的作用是？
- **Options**: [A] 排序數字, [B] 統計數字出現的次數, [C] 儲存最終結果, [D] 尋找最大值
- **Answer**: B
- **Explanation**: 先計數，再找 Top K。

## Q22
- **Difficulty**: Medium
- **Test Point**: 程式碼填空
- **Question**: `for i in range(len(freq) - 1, 0, -1):` 這行迴圈在做什麼？
- **Options**: [A] 正向遍歷, [B] 反向從高頻率遍歷到低頻率, [C] 只遍歷索引為 0 的桶子, [D] 刪除元素
- **Answer**: B
- **Explanation**: 這是桶子排序法收集答案的關鍵步驟。

## Q23
- **Difficulty**: Easy
- **Test Point**: 複雜度理解
- **Question**: 什麼是線性時間複雜度？
- **Options**: [A] `O(1)`, [B] `O(N)`, [C] `O(N^2)`, [D] `O(log N)`
- **Answer**: B
- **Explanation**: 運行時間與輸入數據量成正比。

## Q24
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: `counts.get` 當作 `key` 傳給排序函數時，它的作用是？
- **Options**: [A] 取得字典所有的 Key, [B] 指定以字典中的「值 (Value)」作為排序依據, [C] 清空字典, [D] 加密數據
- **Answer**: B
- **Explanation**: `key` 參數決定了比較的準則。

## Q25
- **Difficulty**: Medium
- **Test Point**: 演算法差異
- **Question**: 桶子排序法是透過什麼來避免排序帶來的 `O(log N)` 係數？
- **Options**: [A] 遞迴, [B] 利用陣列索引的天然順序, [C] 多執行緒, [D] 隨機化
- **Answer**: B
- **Explanation**: 陣列索引 0, 1, 2... 本身就是有序的。

## Q26
- **Difficulty**: Hard
- **Test Point**: 效能陷阱
- **Question**: 使用 `O(N log N)` 解法在 LeetCode 上會通過嗎？
- **Options**: [A] 不會，超時, [B] 會，但排名較後, [C] 會，且排名最前, [D] 視語言而定
- **Answer**: B
- **Explanation**: `N log N` 對於普通數據量通常能過，但非最優。

## Q27
- **Difficulty**: Easy
- **Test Point**: 數據型態
- **Question**: 桶子陣列 `freq` 中存放的元素型態應為？
- **Options**: [A] 整數, [B] 列表 (List), [C] 集合, [D] 浮點數
- **Answer**: B
- **Explanation**: 同一個頻率可能對應多個不同數字。

## Q28
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: 執行 `res.extend(freq[i])` 的作用是？
- **Options**: [A] 新增一個元素, [B] 將整個列表的內容合併到 `res` 中, [C] 刪除 `freq[i]`, [D] 複製 `res`
- **Answer**: B
- **Explanation**: `extend` 用於合併兩個列表。

## Q29
- **Difficulty**: Easy
- **Test Point**: 邏輯判斷
- **Question**: `nums = [1,1,1,2,2,3], k = 2`。Top 2 是？
- **Options**: [A] `[1, 2]`, [B] `[1, 3]`, [C] `[2, 3]`, [D] `[1]`
- **Answer**: A
- **Explanation**: 1 出現三次，2 出現兩次。

## Q30
- **Difficulty**: Hard
- **Test Point**: 進階理解
- **Question**: 若數據中頻率的分佈極度不均勻（如 Zipf 分佈），哪種解法更節省空間？
- **Options**: [A] 桶子排序, [B] 堆積解法, [C] 兩者一樣, [D] 暴力解
- **Answer**: B
- **Explanation**: 堆積法只跟 k 有關，不產生大量空桶子。

## Q31
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 什麼是優先隊列 (Priority Queue)？
- **Options**: [A] 按照進入順序排隊, [B] 按照優先權 (通常是大小) 決定出隊順序, [C] 只允許在中間插入, [D] 先進後出
- **Answer**: B
- **Explanation**: 堆積就是優先隊列的一種常見實現方式。

## Q32
- **Difficulty**: Medium
- **Test Point**: 程式碼填充
- **Question**: 在收集完答案後，應在何時停止迴圈？
- **Options**: [A] `if len(res) == k: return res`, [B] 遍歷完整個陣列, [C] 隨機停止, [D] 當 res 為空時
- **Answer**: A
- **Explanation**: 拿到前 k 個就該「早退」。

## Q33
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: `counts = collections.Counter(nums)`。如何取得出現次數最多的前 3 個元素？
- **Options**: [A] `counts[:3]`, [B] `counts.most_common(3)`, [C] `counts.top(3)`, [D] `sorted(counts)[:3]`
- **Answer**: B
- **Explanation**: 這是 Pythonic 的標準寫法。

## Q34
- **Difficulty**: Hard
- **Test Point**: 時間複雜度
- **Question**: 堆積法中，建立一個大小為 N 的哈希表花費 `O(N)`，維護大小為 k 的堆積花費 `O(N log k)`。總時間是？
- **Options**: [A] `O(N)`, [B] `O(N log k)`, [C] `O(N + k)`, [D] `O(N^2)`
- **Answer**: B
- **Explanation**: Big O 捨棄低階項 `O(N)`，保留高階項 `O(N log k)`。

## Q35
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 本題是否可以解出正確答案？
- **Options**: [A] 是, [B] 否, [C] 取決於 k 的值, [D] 取決於數字的大小
- **Answer**: A
- **Explanation**: 這是一道定義明確的演算法經典題。

## Q36
- **Difficulty**: Medium
- **Test Point**: 實作細節
- **Question**: `freq = [[] for _ in range(len(nums) + 1)]`。這裡的 `_` 是什麼意思？
- **Options**: [A] 一個變數名稱, [B] 慣用語法，代表我們在迴圈中不需要用到這個索引值, [C] 語法錯誤, [D] 強制歸零
- **Answer**: B
- **Explanation**: Python 常用底線代表不使用的丟棄變數。

## Q37
- **Difficulty**: Medium
- **Test Point**: 邏輯判斷
- **Question**: 如果所有數字都只出現一次，桶子排序法會如何運作？
- **Options**: [A] 崩潰, [B] 所有數字都會放在索引為 1 的桶子裡, [C] 遍歷超時, [D] 返回空值
- **Answer**: B
- **Explanation**: 出現一次頻率就是 1。

## Q38
- **Difficulty**: Hard
- **Test Point**: 實作選擇
- **Question**: 如果 N = 10,000,000, k = 10，你會選哪種解法？
- **Options**: [A] 桶子排序 (需要大量內存), [B] 堆積法 (只需要極小額外空間), [C] 暴力排序, [D] 遞迴
- **Answer**: B
- **Explanation**: 當 k 遠小於 N 時，堆積法空間優勢巨大。

## Q39
- **Difficulty**: Easy
- **Test Point**: 數據型態
- **Question**: Python `dict` 的 Key 可以是 `None` 嗎？
- **Options**: [A] 可以, [B] 不可以, [C] 只有 Python 2 可以, [D] 視內容而定
- **Answer**: A
- **Explanation**: None 是不可變物件且可雜湊，可以當 Key，但在此題不適用。

## Q40
- **Difficulty**: Hard
- **Test Point**: 全局視野
- **Question**: 本題在資料科學或搜尋引擎中的實際應用可能是？
- **Options**: [A] 計算總和, [B] 統計熱搜關鍵字前幾名, [C] 預測股價, [D] 加密檔案
- **Answer**: B
- **Explanation**: 這是處理「熱門程度」排序的最基礎模型。
