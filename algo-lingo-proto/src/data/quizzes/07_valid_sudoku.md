# Quiz: Valid Sudoku (36)

## Q1
- **Difficulty**: Easy
- **Test Point**: 題目定義
- **Question**: `Valid Sudoku` 題目的目標是判斷一個 9x9 的數獨棋盤是否「合法」，但不一定要「有解」，對嗎？
- **Options**: [A] 對, [B] 不對，必須保證有解, [C] 不對，是要填滿棋盤, [D] 不對，是要檢查所有格子是否都有數字
- **Answer**: A
- **Explanation**: 只要目前填入的數字符合規則即可，不考慮未來是否能填完。

## Q2
- **Difficulty**: Easy
- **Test Point**: 基礎規則
- **Question**: 數獨合法的三大規則不包括哪一項？
- **Options**: [A] 每列 (Column) 不能有重複數字 1-9, [B] 每行 (Row) 不能有重複數字 1-9, [C] 每個 3x3 九宮格不能有重複數字 1-9, [D] 所有數字的總和必須等於 405
- **Answer**: D
- **Explanation**: 規則只檢查重複性，不檢查總和。

## Q3
- **Difficulty**: Medium
- **Test Point**: 資料結構
- **Question**: 為了快速檢查重複，最適合使用的資料結構是？
- **Options**: [A] `List`, [B] `Set` (或 `Hash Map`), [C] `Stack`, [D] `Queue`
- **Answer**: B
- **Explanation**: `Set` 可以在 `O(1)` 時間內判斷元素是否重複。

## Q4
- **Difficulty**: Medium
- **Test Point**: 九宮格索引
- **Question**: 對於座標 `(r, c)`，如何計算它屬於哪一個九宮格（用 `0` 到 `8` 表示）？
- **Options**: [A] `r + c`, [B] `(r // 3) * 3 + (c // 3)`, [C] `(r % 3) * 3 + (c % 3)`, [D] `r * 9 + c`
- **Answer**: B
- **Explanation**: 透過整除 3 將座標分組。

## Q5
- **Difficulty**: Medium
- **Test Point**: 複雜度分析
- **Question**: 遍歷一個 9x9 棋盤的時間複雜度是多少？
- **Options**: [A] `O(N)`, [B] `O(N^2)`, [C] `O(81)`, [D] `O(1)` (因為規模固定為 9x9)
- **Answer**: D
- **Explanation**: 雖然寫作 `O(N^2)`，但因為 `N` 固定為 9，實務上可視為常數時間。

## Q6
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 如何在 Python 中建立一個包含 9 個空集合的字典，用於存儲每行的數字？
- **Options**: [A] `rows = collections.defaultdict(set)`, [B] `rows = [set() for i in range(9)]`, [C] `rows = {i: set() for i in range(9)}`, [D] 以上皆可
- **Answer**: D
- **Explanation**: Python 提供多種方式來初始化哈希結構。

## Q7
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 數獨棋盤中的空白格通常用什麼符號表示？
- **Options**: [A] `"0"`, [B] `"."`, [C] `" "`, [D] `null`
- **Answer**: B
- **Explanation**: LeetCode 題目的標準格式是點號 `.`。

## Q8
- **Difficulty**: Hard
- **Test Point**: 空間優化
- **Question**: 如果不使用額外 Set，可以用什麼方式節省空間來記錄 1-9 的出現？
- **Options**: [A] 使用位元運算 (Bitmask), [B] 使用遞迴, [C] 修改原棋盤, [D] 用字串連接
- **Answer**: A
- **Explanation**: 1-9 的出現可以用一個 16-bit 整數的各個位元來記錄。

## Q9
- **Difficulty**: Medium
- **Test Point**: 邏輯判斷
- **Question**: 在遍歷 `(r, c)` 位置時，如果 `board[r][c] == "."`，我們應該？
- **Options**: [A] 報錯, [B] 略過此格繼續下一格, [C] 填入一個數字, [D] 停止遍歷
- **Answer**: B
- **Explanation**: 點號代表空白，不需檢查重複性。

## Q10
- **Difficulty**: Medium
- **Test Point**: 實作細節
- **Question**: 為什麼九宮格的 Key 建議用 `(r // 3, c // 3)` 的元組 (tuple)？
- **Options**: [A] 因為 Tuple 是 Hashable 的, [B] 因為比較好看, [C] 因為省記憶體, [D] 因為這會自動排序
- **Answer**: A
- **Explanation**: 字典的 Key 必須是不可變的，tuple 正合適。

## Q11
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 一個合法的數獨棋盤總共有多少個小九宮格？
- **Options**: [A] 3 個, [B] 6 個, [C] 9 個, [D] 12 個
- **Answer**: C
- **Explanation**: 3x3 分佈，總共 9 個。

## Q12
- **Difficulty**: Medium
- **Test Point**: Python 效能
- **Question**: 在 9x9 的小數據量下，使用 `list` 取代 `set` 來檢查重複會變慢嗎？
- **Options**: [A] 顯著變慢, [B] 體感幾乎無差，但理論上 `O(N)` 高於 `O(1)`, [C] 會變快, [D] 會報錯
- **Answer**: B
- **Explanation**: N=9 太小，常數項開銷可能蓋過複雜度差異。

## Q13
- **Difficulty**: Hard
- **Test Point**: 實作挑戰
- **Question**: 如果只遍歷棋盤「一次 (One-pass)」，可以同時檢查行、列、九宮格嗎？
- **Options**: [A] 可以，在同一個雙層迴圈內使用三個字典, [B] 不可以，必須分開三次遍歷, [C] 只有 Python 可以, [D] 只有 9x9 棋盤可以
- **Answer**: A
- **Explanation**: 這是最優雅且高效的實作方式。

## Q14
- **Difficulty**: Medium
- **Test Point**: 邊界分析
- **Question**: 若 `(r, c) = (4, 7)`，它屬於哪個九宮格索引 `(r//3, c//3)`？
- **Options**: [A] `(1, 2)`, [B] `(1, 1)`, [C] `(2, 2)`, [D] `(0, 2)`
- **Answer**: A
- **Explanation**: `4 // 3 = 1`, `7 // 3 = 2`。

## Q15
- **Difficulty**: Easy
- **Test Point**: 基礎語法
- **Question**: `val = board[r][c]`。如何判斷 `val` 已經在對應行的集合 `rows[r]` 中？
- **Options**: [A] `rows[r].has(val)`, [B] `val in rows[r]`, [C] `rows[r].contains(val)`, [D] `val.exists(rows[r])`
- **Answer**: B
- **Explanation**: Python 標準 `in` 語法。

## Q16
- **Difficulty**: Medium
- **Test Point**: 題目細節
- **Question**: 棋盤中的數字範圍保證是？
- **Options**: [A] 0-9, [B] 1-9, [C] 任何整數, [D] A-Z
- **Answer**: B
- **Explanation**: 標準數獨只使用 1 到 9。

## Q17
- **Difficulty**: Hard
- **Test Point**: 進階場景
- **Question**: 如果棋盤變為 16x16，這套邏輯還適用嗎？
- **Options**: [A] 適用，只要調整整除的參數為 4, [B] 不適用，複雜度會爆炸, [C] 只能處理平方數大小的棋盤, [D] 只有 A 和 C 是對的
- **Answer**: D
- **Explanation**: 數獨邏輯可以推廣到任何 N^2 x N^2 的棋盤。

## Q18
- **Difficulty**: Easy
- **Test Point**: 邏輯判斷
- **Question**: 如果在遍歷過程中發現一個數字重複，應該回傳？
- **Options**: [A] `True`, [B] `False`, [C] `None`, [D] `0`
- **Answer**: B
- **Explanation**: 重複代表非法，立即回傳 `False`。

## Q19
- **Difficulty**: Medium
- **Test Point**: 資料結構
- **Question**: 為什麼說「判斷合法」比「求解數獨」簡單得多？
- **Options**: [A] 求解需要回溯法 (Backtracking)，時間複雜度是指數級別, [B] 合法判斷只需要遍歷一次, [C] 求解不一定有解, [D] 以上皆是
- **Answer**: D
- **Explanation**: 合法判斷是局部檢查，求解是全局搜尋。

## Q20
- **Difficulty**: Hard
- **Test Point**: 記憶體開銷
- **Question**: 使用三個 `9x9` 字典的空間複雜度精確來說是？
- **Options**: [A] `O(N^2)`, [B] `O(1)` (固定空間 81 * 3), [C] `O(N)`, [D] `O(log N)`
- **Answer**: B
- **Explanation**: 數據量不會隨輸入而變，是常數級空間。

## Q21
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 九宮格 (3x3 Sub-box) 又被稱作？
- **Options**: [A] Grid, [B] Block, [C] Box, [D] 以上皆可
- **Answer**: D
- **Explanation**: 不同教材有不同稱呼，邏輯是一樣的。

## Q22
- **Difficulty**: Medium
- **Test Point**: 程式碼填空
- **Question**: `cols = collections.defaultdict(____)`。填入什麼可以自動建立集合？
- **Options**: [A] `list`, [B] `set`, [C] `int`, [D] `dict`
- **Answer**: B
- **Explanation**: `defaultdict(set)` 是解這題的神兵利器。

## Q23
- **Difficulty**: Medium
- **Test Point**: 演算法設計
- **Question**: 如果不用三個字典，而是將每個檢查對象編碼為字串（如 `"row 0 val 5"`）存入一個大 Set，這種方法？
- **Options**: [A] 不可行, [B] 可行，但字串處理會稍慢一點, [C] 是最快的做法, [D] 只能在 Java 使用
- **Answer**: B
- **Explanation**: 這是一種將多個維度降為一維字串標記的技巧。

## Q24
- **Difficulty**: Easy
- **Test Point**: 數據型態
- **Question**: `board[r][c]` 讀取出來的值型態是？
- **Options**: [A] `int`, [B] `str` (字串), [C] `char` (字元), [D] `float`
- **Answer**: B
- **Explanation**: 數組通常以字串列表形式輸入，例如 `["5","3",".",...]`。

## Q25
- **Difficulty**: Medium
- **Test Point**: 邏輯演練
- **Question**: 如果棋盤第 0 行有兩個 "5"，程式會在何時回傳 False？
- **Options**: [A] 遍歷完整個棋盤後, [B] 遇到第一個 "5" 時, [C] 遇到第二個 "5" 並檢查到它已在 `rows[0]` 中時, [D] 程式開始前
- **Answer**: C
- **Explanation**: 這是雜湊檢查的標準流程。

## Q26
- **Difficulty**: Hard
- **Test Point**: 效能分析
- **Question**: 對於 1000 個數獨棋盤進行合法檢查，總耗時大約在什麼數量級？
- **Options**: [A] 微秒級 (Microseconds), [B] 毫秒級 (Milliseconds), [C] 秒級, [D] 分鐘級
- **Answer**: B
- **Explanation**: 每個棋盤僅 81 格，處理極快。

## Q27
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 棋盤的總格數是多少？
- **Options**: [A] 9, [B] 27, [C] 81, [D] 100
- **Answer**: C
- **Explanation**: 9x9 = 81。

## Q28
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: `set().add("5")` 的回傳值是？
- **Options**: [A] `"5"`, [B] `None`, [C] `True`, [D] `set(["5"])`
- **Answer**: B
- **Explanation**: `add()` 方法是 In-place 操作，不回傳任何東西。

## Q29
- **Difficulty**: Medium
- **Test Point**: 邊界檢查
- **Question**: 遍歷時，如何確保不超出棋盤範圍？
- **Options**: [A] `for r in range(9): for c in range(9):`, [B] 隨機生成座標, [C] 檢查索引是否大於 81, [D] 無法確保
- **Answer**: A
- **Explanation**: 固定範圍的迴圈最安全。

## Q30
- **Difficulty**: Hard
- **Test Point**: 進階理解
- **Question**: 在數獨規則中，為什麼九宮格的檢查比行列複雜？
- **Options**: [A] 規則不同, [B] 因為它跨越了多個行列，索引映射不直觀, [C] 它需要額外的空間, [D] 其實並不複雜
- **Answer**: B
- **Explanation**: 需要二維座標映射到一維區塊 ID。

## Q31
- **Difficulty**: Easy
- **Test Point**: 基礎語法
- **Question**: `board[r][c]` 中 `r` 代表？
- **Options**: [A] Row (行/橫向), [B] Column (列/縱向), [C] Random, [D] Radius
- **Answer**: A
- **Explanation**: 習慣上第一個索引是 Row。

## Q32
- **Difficulty**: Medium
- **Test Point**: 實作細節
- **Question**: 使用 `squares[(r // 3, c // 3)].add(board[r][c])` 時，如果該 Key 還沒建立，會？
- **Options**: [A] 自動報錯, [B] 如果用 `defaultdict(set)` 則會自動建立, [C] 程式崩潰, [D] 隨機指派
- **Answer**: B
- **Explanation**: 這就是為何推薦使用 `defaultdict`。

## Q33
- **Difficulty**: Easy
- **Test Point**: 題目細節
- **Question**: 本題是否涉及數學計算？
- **Options**: [A] 是，需計算加總, [B] 否，主要是邏輯與集合操作, [C] 只有 Hard 難度才要, [D] 視 target 而定
- **Answer**: B
- **Explanation**: 雖然跟數字有關，但本質是「集合成員檢查」。

## Q34
- **Difficulty**: Medium
- **Test Point**: Python 工具
- **Question**: 如何取得棋盤的轉置 (Transpose) 以便檢查列 (Column)？
- **Options**: [A] `zip(*board)`, [B] `board.transpose()`, [C] `board[::-1]`, [D] 無法轉置
- **Answer**: A
- **Explanation**: `zip(*board)` 是 Python 的矩陣轉置神技。

## Q35
- **Difficulty**: Hard
- **Test Point**: 效能誤區
- **Question**: 如果我們先檢查所有 Row，再檢查所有 Column，最後檢查所有 Squares，總時間複雜度會變慢嗎？
- **Options**: [A] 會，變慢三倍, [B] 依然是 `O(1)`，只是係數從 81 變成 243, [C] 會變快, [D] 會導致內存溢出
- **Answer**: B
- **Explanation**: 分開遍歷邏輯更清晰，對效能幾乎無實質影響。

## Q36
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 本題在 NeetCode-150 中是屬於哪個章節？
- **Options**: [A] Stack, [B] Sliding Window, [C] Arrays & Hashing, [D] Graphs
- **Answer**: C
- **Explanation**: 它是雜湊應用的大型練習題。

## Q37
- **Difficulty**: Medium
- **Test Point**: 邊界分析
- **Question**: 位置 `(8, 8)` 屬於哪個九宮格？
- **Options**: [A] `(2, 2)`, [B] `(3, 3)`, [C] `(8, 8)`, [D] `(0, 0)`
- **Answer**: A
- **Explanation**: `8 // 3 = 2`。這是最後一個九宮格。

## Q38
- **Difficulty**: Hard
- **Test Point**: 演算法設計
- **Question**: 如果棋盤非常大，大到無法全部載入內存，應如何檢查合法性？
- **Options**: [A] 使用分塊讀取與外部排序, [B] 放棄檢查, [C] 用分散式計算, [D] A 和 C 是可能的方案
- **Answer**: D
- **Explanation**: 這屬於大數據處理的範疇。

## Q39
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 什麼是「哈希衝突 (Hash Collision)」？
- **Options**: [A] 兩個數字相撞, [B] 不同的 Key 經過雜湊後得到相同的索引, [C] 字典被刪除, [D] 程式碼錯誤
- **Answer**: B
- **Explanation**: 這是雜湊表實作時必須解決的底層問題。

## Q40
- **Difficulty**: Hard
- **Test Point**: 全局視野
- **Question**: 本題的核心考點是？
- **Options**: [A] 對二維陣列的熟練操作, [B] 對雜湊映射 (Mapping) 的設計能力, [C] 對數獨遊戲的喜愛, [D] A 和 B 都是
- **Answer**: D
- **Explanation**: 這是一道檢驗程式基本功的好題目。
