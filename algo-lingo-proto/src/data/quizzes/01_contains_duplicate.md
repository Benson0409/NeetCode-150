# Quiz: Contains Duplicate (217)

## Q1
- **Difficulty**: Easy
- **Test Point**: 基礎資料結構
- **Question**: 在 Python 中，哪一種資料結構最適合用來快速檢查元素是否曾經出現過？
- **Options**: [A] `List`, [B] `Set`, [C] `Tuple`, [D] `Deque`
- **Answer**: B
- **Explanation**: `Set` (集合) 的底層是雜湊表，查詢時間複雜度為 `O(1)`。

## Q2
- **Difficulty**: Easy
- **Test Point**: 時間複雜度
- **Question**: 如果使用雙層 for 迴圈來檢查重複元素，時間複雜度會是多少？
- **Options**: [A] O(N), [B] O(N log N), [C] O(N^2), [D] O(1)
- **Answer**: C
- **Explanation**: 每一層迴圈遍歷 N 次，相乘為 N^2。

## Q3
- **Difficulty**: Easy
- **Test Point**: 時間複雜度
- **Question**: 若先對陣列進行排序 (Sort)，再檢查相鄰元素是否相同，時間複雜度為？
- **Options**: [A] O(N), [B] O(N log N), [C] O(N^2), [D] O(1)
- **Answer**: B
- **Explanation**: 排序的平均時間複雜度為 O(N log N)。

## Q4
- **Difficulty**: Medium
- **Test Point**: 空間複雜度
- **Question**: 使用 Hash Set (集合) 來解這題，最差情況下的空間複雜度是多少？
- **Options**: [A] O(1), [B] O(log N), [C] O(N), [D] O(N^2)
- **Answer**: C
- **Explanation**: 若所有元素都不重複，Set 需儲存所有 N 個元素。

## Q5
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 在 Python Set 中，用哪個方法來新增元素？
- **Options**: [A] append(), [B] push(), [C] add(), [D] insert()
- **Answer**: C
- **Explanation**: `add()` 是 Python Set 的方法，用於將元素加入集合中。而 `append()` 是 List 的方法。

## Q6
- **Difficulty**: Medium
- **Test Point**: 演算法優缺點
- **Question**: 相比於 `Hash Set`，使用「先排序再找鄰居」的方法有什麼優點？
- **Options**: [A] 速度更快, [B] 空間複雜度較低 (`O(1)` extra space), [C] 程式碼更短, [D] 支援更多資料型態
- **Answer**: B
- **Explanation**: 排序法只需要常數級別的額外空間，而 `Set` 需要 `O(N)`。

## Q7
- **Difficulty**: Easy
- **Test Point**: 邏輯判斷
- **Question**: 題目要求：若有任何數字出現「至少兩次」，應回傳什麼？
- **Options**: [A] True, [B] False, [C] 1, [D] None
- **Answer**: A
- **Explanation**: 題目定義：any value appears at least twice -> return true.

## Q8
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 如何在 Python 中快速將一個 List `nums` 轉成不含重複元素的集合？
- **Options**: [A] list(nums), [B] tuple(nums), [C] set(nums), [D] dict(nums)
- **Answer**: C
- **Explanation**: set() 建構子會自動過濾重複值。

## Q9
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: 若執行 `len(nums) != len(set(nums))`，這行程式碼的含意是？
- **Options**: [A] 檢查 nums 是否為空, [B] 檢查是否有重複元素, [C] 計算平均值, [D] 檢查是否已排序
- **Answer**: B
- **Explanation**: 若長度不同，代表轉成 set 時有重複元素被過濾掉了。

## Q10
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 哈希表 (Hash Table) 的平均查詢時間是多少？
- **Options**: [A] O(1), [B] O(log N), [C] O(N), [D] O(N log N)
- **Answer**: A
- **Explanation**: 雜湊表透過 Hash Function 直接定位，平均為常數時間。

## Q11
- **Difficulty**: Medium
- **Test Point**: 邊界情況
- **Question**: 如果輸入陣列 `nums` 是空的，containsDuplicate 應該回傳？
- **Options**: [A] True, [B] False, [C] Error, [D] 0
- **Answer**: B
- **Explanation**: 空陣列沒有任何重複元素，符合「所有元素都不同」的描述。

## Q12
- **Difficulty**: Easy
- **Test Point**: 資料型態
- **Question**: Python 的 `set` 是否能存儲可變物件（例如 List）？
- **Options**: [A] 可以, [B] 不可以, [C] 視情況而定, [D] 只有在 List 長度為 1 時可以
- **Answer**: B
- **Explanation**: Set 的元素必須是 Hashable (不可變的)，List 是 Mutable。

## Q13
- **Difficulty**: Hard
- **Test Point**: 進階複雜度
- **Question**: 在 Python 中，`set` 查詢的「最差」情況時間複雜度是多少？
- **Options**: [A] O(1), [B] O(N), [C] O(log N), [D] O(N log N)
- **Answer**: B
- **Explanation**: 若發生嚴重的哈希衝突 (Hash Collision)，查詢可能退化成 O(N)。

## Q14
- **Difficulty**: Easy
- **Test Point**: 邏輯判斷
- **Question**: 遍歷 `nums` 時，若 `num` 已在 `seen` 集合中，我們應該？
- **Options**: [A] 繼續下一個, [B] 刪除該數字, [C] 立即回傳 True, [D] 將其歸零
- **Answer**: C
- **Explanation**: 只要發現一次重複，任務就完成了。

## Q15
- **Difficulty**: Medium
- **Test Point**: 內存管理
- **Question**: 在 LeetCode 評測中，為什麼 O(N) 空間解法有時會被要求改進為 O(1) 空間？
- **Options**: [A] 為了省電, [B] 應對超大數據量的內存限制, [C] 為了增加題目難度, [D] 避免 Python 的垃圾回收
- **Answer**: B
- **Explanation**: 內存受限環境下，額外分配 O(N) 可能會導致 Memory Limit Exceeded。

## Q16
- **Difficulty**: Easy
- **Test Point**: 基礎資料結構
- **Question**: 字典 (Dictionary) 的 Key 是否具有唯一性？
- **Options**: [A] 是, [B] 否, [C] 只有數字 Key 是, [D] 只有字串 Key 是
- **Answer**: A
- **Explanation**: 字典的 Key 跟 Set 的元素一樣，在同一個容器內必須唯一。

## Q17
- **Difficulty**: Medium
- **Test Point**: Python 語法技巧
- **Question**: 使用 `any()` 結合產生器是否能寫出 Contains Duplicate？
- **Options**: [A] 不能, [B] 可以，但效率較低, [C] 可以，且非常優雅, [D] 只有 Python 2 可以
- **Answer**: C
- **Explanation**: 例如 `seen = set(); any(x in seen or seen.add(x) for x in nums)`。

## Q18
- **Difficulty**: Easy
- **Test Point**: 演算法流程
- **Question**: 在解決重複元素問題時，「早退 (Early Exit)」代表什麼？
- **Options**: [A] 程式出錯了, [B] 找到答案後立即停止迴圈回傳, [C] 在 main function 之前執行, [D] 程式運行太快了
- **Answer**: B
- **Explanation**: 找到第一個重複就 return，不需看完剩下幾萬個數字。

## Q19
- **Difficulty**: Medium
- **Test Point**: 雜湊衝突
- **Question**: 什麼因素會導致 Set 的效能下降？
- **Options**: [A] 元素太多, [B] 元素太少, [C] 大量的哈希衝突 (Hash Collisions), [D] 記憶體太大
- **Answer**: C
- **Explanation**: 衝突越多，處理碰撞的開銷越大。

## Q20
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 本題如果用 brute-force (暴力解)，需要用到幾層迴圈？
- **Options**: [A] 一層, [B] 二層, [C] 三層, [D] 不用迴圈
- **Answer**: B
- **Explanation**: 每個元素都要跟後面所有元素比對一次。

## Q21
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 題目題目是 `217. Contains Duplicate`，它是屬於哪種類別的題目？
- **Options**: [A] Linked List, [B] Graph, [C] Arrays & Hashing, [D] Dynamic Programming
- **Answer**: C
- **Explanation**: 這是陣列與哈希表的入門經典題。

## Q22
- **Difficulty**: Medium
- **Test Point**: 排序性質
- **Question**: 排序後的陣列中，重複的數字會在哪裡？
- **Options**: [A] 開頭跟結尾, [B] 隨機位置, [C] 彼此相鄰, [D] 消失不見
- **Answer**: C
- **Explanation**: 排序會將相同數值排在一起。

## Q23
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 如何判斷元素 `x` 是否在集合 `s` 中？
- **Options**: [A] s.has(x), [B] x in s, [C] s.contains(x), [D] x.is_member(s)
- **Answer**: B
- **Explanation**: Python 使用 `in` 關鍵字。

## Q24
- **Difficulty**: Medium
- **Test Point**: 負數處理
- **Question**: Hash Set 解法是否能處理包含負數的陣列？
- **Options**: [A] 不能, [B] 可以，且效能不受影響, [C] 只能處理正數, [D] 需要先轉成絕對值
- **Answer**: B
- **Explanation**: 雜湊表可以處理任何 Hashable 的整數，不分正負。

## Q25
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 如果一個陣列長度為 100，裡面有 100 個不同的數字，結果應回傳？
- **Options**: [A] True, [B] False, [C] 100, [D] 0
- **Answer**: B
- **Explanation**: 題目要求「有重複」才回傳 True。

## Q26
- **Difficulty**: Hard
- **Test Point**: 空間分析
- **Question**: 若使用 bit-manipulation (位元運算) 來記錄數字出現（假設數字範圍小），空間複雜度可以達到？
- **Options**: [A] O(N), [B] O(1) bitwise space, [C] O(N log N), [D] 無法達成
- **Answer**: B
- **Explanation**: 若數字範圍固定且小（如 0-63），可用一個 64-bit 整數當位圖。

## Q27
- **Difficulty**: Medium
- **Test Point**: Python 優化
- **Question**: 為什麼 `len(set(nums)) < len(nums)` 有時比 for 迴圈寫法快？
- **Options**: [A] 它是 C 實作的底層迴圈，減少了 Python bytecode 開銷, [B] 它不需要查詢, [C] 它會自動多執行緒, [D] 它不佔用記憶體
- **Answer**: A
- **Explanation**: `set()` 內部迴圈由 C 語言編寫，效率極高。

## Q28
- **Difficulty**: Easy
- **Test Point**: 複雜度定義
- **Question**: O(N) 中的 N 代表什麼？
- **Options**: [A] 記憶體大小, [B] 輸入陣列的長度, [C] 處理器速度, [D] 重複數字的個數
- **Answer**: B
- **Explanation**: 複雜度通常相對於輸入規模。

## Q29
- **Difficulty**: Easy
- **Test Point**: 邏輯判斷
- **Question**: 如果陣列中有兩個 0，Contains Duplicate 的結果是？
- **Options**: [A] True, [B] False, [C] 0, [D] None
- **Answer**: A
- **Explanation**: 0 也是合法的整數，重複就回傳 True。

## Q30
- **Difficulty**: Medium
- **Test Point**: 記憶體開銷
- **Question**: 為什麼說排序法 (O(1) space) 是以時間換取空間？
- **Options**: [A] 因為排序比較慢 (O(N log N) > O(N)), [B] 因為排序比較快, [C] 因為排序不花時間, [D] 以上皆非
- **Answer**: A
- **Explanation**: 用更長的處理時間來換取不使用額外記憶體。

## Q31
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 雜湊函數 (Hash Function) 的作用是？
- **Options**: [A] 排序數字, [B] 將任意大小的數據映射到固定大小的索引, [C] 加密密碼, [D] 刪除重複值
- **Answer**: B
- **Explanation**: 這是哈希表的核心原理。

## Q32
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: 執行 `hash(1.0) == hash(1)` 在 Python 中是否成立？
- **Options**: [A] 成立, [B] 不成立, [C] 隨機決定, [D] 只有在 64 位元系統成立
- **Answer**: A
- **Explanation**: Python 確保數值相等的物件其 Hash 值也相等。

## Q33
- **Difficulty**: Easy
- **Test Point**: 資料結構
- **Question**: 哪種結構不保證元素的順序，但查詢最快？
- **Options**: [A] List, [B] Set, [C] OrderedDict, [D] Stack
- **Answer**: B
- **Explanation**: 標準 Set 是無序的雜湊表。

## Q34
- **Difficulty**: Hard
- **Test Point**: 進階場景
- **Question**: 在分散式系統中檢查海量數據是否重複，通常使用哪種機率性資料結構？
- **Options**: [A] Hash Set, [B] Bloom Filter, [C] Binary Search Tree, [D] Skip List
- **Answer**: B
- **Explanation**: 布隆過濾器空間極省，但有極低誤判率 (False Positive)。

## Q35
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: Python 中建立空集合的正確語法是？
- **Options**: [A] {}, [B] set(), [C] [], [D] dict()
- **Answer**: B
- **Explanation**: `{}` 會建立一個空字典。

## Q36
- **Difficulty**: Medium
- **Test Point**: 演算法設計
- **Question**: 如果題目要求「不能使用任何額外空間」且「不能修改原陣列」，應該如何解決？
- **Options**: [A] 用 Set, [B] 用暴力雙迴圈, [C] 先排序, [D] 無法解決
- **Answer**: B
- **Explanation**: 只有暴力法不改原數據也不用額外空間。

## Q37
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 如果題目變更為「找出所有重複的數字」，原本的 `return True` 應該改為什麼？
- **Options**: [A] return False, [B] 將重複數字加入一個 List 最後回傳, [C] print 數字, [D] 無須修改
- **Answer**: B
- **Explanation**: 需要一個容器來收集所有重複項。

## Q38
- **Difficulty**: Medium
- **Test Point**: 效能分析
- **Question**: 在 Python 3.7+ 中，`dict` 是否保證插入順序？
- **Options**: [A] 是, [B] 否, [C] 只有 Key 是字串時是, [D] 只有 Key 是數字時是
- **Answer**: A
- **Explanation**: 這是 Python 3.7 以後的正式語言特性。

## Q39
- **Difficulty**: Easy
- **Test Point**: 資料結構
- **Question**: 陣列 (Array) 的索引從多少開始？
- **Options**: [A] 0, [B] 1, [C] -1, [D] 隨機
- **Answer**: A
- **Explanation**: 絕大多數程式語言包含 Python 都是 0-based。

## Q40
- **Difficulty**: Hard
- **Test Point**: 全局視野
- **Question**: Contains Duplicate 是 NeetCode-150 計畫中的第幾題？
- **Options**: [A] 第 1 題, [B] 第 10 題, [C] 最後一題, [D] 中間隨機一題
- **Answer**: A
- **Explanation**: 它是 Arrays & Hashing 章節的第一題，也是很多人的演算法起點。
