# Quiz: Product of Array Except Self (238)

## Q1
- **Difficulty**: Easy
- **Test Point**: 題目定義
- **Question**: `Product of Array Except Self` 的目標是？
- **Options**: [A] 找出陣列所有數字的乘積, [B] 構造一個陣列，其中每個位置 `i` 是除了 `nums[i]` 以外所有數字的乘積, [C] 排除陣列中的 0 之後求積, [D] 找出最大的兩個數之積
- **Answer**: B
- **Explanation**: 每個位置都要避開自己。

## Q2
- **Difficulty**: Easy
- **Test Point**: 題目限制
- **Question**: 題目規定 **「不能使用」** 哪種數學運算？
- **Options**: [A] 加法, [B] 減法, [C] 除法, [D] 指數
- **Answer**: C
- **Explanation**: 若能用除法，直接 `總乘積 / 當前數字` 就太簡單了（且無法處理 0）。

## Q3
- **Difficulty**: Easy
- **Test Point**: 複雜度要求
- **Question**: 題目要求的時間複雜度是？
- **Options**: [A] `O(1)`, [B] `O(N)`, [C] `O(N log N)`, [D] `O(N^2)`
- **Answer**: B
- **Explanation**: 必須在線性時間內完成，不能用雙迴圈暴力法。

## Q4
- **Difficulty**: Medium
- **Test Point**: 解題思路
- **Question**: 我們可以將每個位置 `i` 的解答拆解為哪兩部分的乘積？
- **Options**: [A] 前綴積 (Prefix) 與 後綴積 (Postfix/Suffix), [B] 最大值與最小值, [C] 奇數項與偶數項, [D] 第一個與最後一個
- **Answer**: A
- **Explanation**: `i` 左邊所有數的積 乘以 `i` 右邊所有數的積。

## Q5
- **Difficulty**: Medium
- **Test Point**: 空間優化
- **Question**: 如果想達到進階要求的 `O(1)` 額外空間（不計輸出陣列），應如何實作？
- **Options**: [A] 只用一個變數儲存總積, [B] 將前綴積直接存在輸出陣列，後綴積則用變數邊算邊乘進去, [C] 使用遞迴, [D] 無法達成
- **Answer**: B
- **Explanation**: 利用輸出陣列作為暫存空間。

## Q6
- **Difficulty**: Medium
- **Test Point**: 前綴積邏輯
- **Question**: 遍歷 `nums` 構造前綴積陣列 `res` 時，第一個位置 `res[0]` 應該初始化為多少？
- **Options**: [A] 0, [B] 1, [C] `nums[0]`, [D] -1
- **Answer**: B
- **Explanation**: 乘法的單位元是 1，左邊沒有數字時積為 1。

## Q7
- **Difficulty**: Easy
- **Test Point**: 0 的處理
- **Question**: 如果陣列中有兩個 0，那麼結果陣列中會發生什麼？
- **Options**: [A] 所有位置都是 0, [B] 只有 0 的位置是非 0, [C] 程式崩潰, [D] 全部數字變成 1
- **Answer**: A
- **Explanation**: 任何位置排除自己後，剩下的部分一定還包含另一個 0。

## Q8
- **Difficulty**: Medium
- **Test Point**: 後綴積流程
- **Question**: 計算後綴積時，迴圈應該如何遍歷？
- **Options**: [A] 從頭到尾, [B] 從尾到頭, [C] 隨機遍歷, [D] 不需要遍歷
- **Answer**: B
- **Explanation**: 從後面往回走才能累計右側的乘積。

## Q9
- **Difficulty**: Hard
- **Test Point**: 程式碼邏輯
- **Question**: 補完程式碼（計算後綴）：`for i in range(len(nums)-1, -1, -1): res[i] *= postfix; postfix *= ______`
- **Options**: [A] `res[i]`, [B] `nums[i]`, [C] `postfix`, [D] `target`
- **Answer**: B
- **Explanation**: `postfix` 變數負責累積 `nums` 右側的元素乘積。

## Q10
- **Difficulty**: Medium
- **Test Point**: 時間複雜度
- **Question**: 即使遍歷了兩次（一次向右，一次向左），時間複雜度依然是 `O(N)` 嗎？
- **Options**: [A] 是，`O(2N) = O(N)`, [B] 否，是 `O(N^2)`, [C] 否，是 `O(2^N)`, [D] 只有一次才是 `O(N)`
- **Answer**: A
- **Explanation**: Big O 忽略常數係數。

## Q11
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 如果 `nums = [1, 2, 3, 4]`，`res` 陣列的前綴積部分（第一輪遍歷後）是？
- **Options**: [A] `[1, 1, 2, 6]`, [B] `[1, 2, 6, 24]`, [C] `[1, 2, 3, 4]`, [D] `[0, 1, 2, 6]`
- **Answer**: A
- **Explanation**: `res[0]=1`, `res[1]=1*1=1`, `res[2]=1*2=2`, `res[3]=2*3=6`。

## Q12
- **Difficulty**: Hard
- **Test Point**: 邊界分析
- **Question**: 為什麼「除法解法」在陣列包含一個 0 的情況下會出問題？
- **Options**: [A] 因為 0 不能當除數, [B] 因為 0 會導致溢出, [C] 因為 Python 不支援 0, [D] 以上皆非
- **Answer**: A
- **Explanation**: `ZeroDivisionError` 是這種解法的最大死穴。

## Q13
- **Difficulty**: Medium
- **Test Point**: 演算法設計
- **Question**: 本題是否可以使用 `Log` (對數) 轉換來避開乘法？
- **Options**: [A] 可以，`exp(log(a) + log(b))`, [B] 不可以, [C] 只有在數字皆為正數時可以, [D] 只有在數字很大時可以
- **Answer**: C
- **Explanation**: 負數和 0 的 Log 值在實數範圍內無定義。

## Q14
- **Difficulty**: Easy
- **Test Point**: 空間複雜度
- **Question**: 題目提到「輸出陣列不計入額外空間」，這是什麼意思？
- **Options**: [A] 輸出陣列不需要佔用記憶體, [B] 這是一種常見的面試約定，只計算「中間運算」產生的額外負擔, [C] 這是 Python 的 bug, [D] 意味著空間複雜度必為 O(1)
- **Answer**: B
- **Explanation**: 衡量演算法是否使用了與輸入規模成正比的額外輔助空間。

## Q15
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: `range(10, -1, -1)` 最後一個產生的數字是多少？
- **Options**: [A] -1, [B] 0, [C] 10, [D] 1
- **Answer**: B
- **Explanation**: `range` 的結束索引是不包含的 (exclusive)。

## Q16
- **Difficulty**: Hard
- **Test Point**: 精確度問題
- **Question**: 在處理浮點數陣列時，大批量的乘積可能會遇到什麼問題？
- **Options**: [A] 速度變慢, [B] 精度遺失 (Precision Loss), [C] 陣列崩潰, [D] Python 會自動處理沒問題
- **Answer**: B
- **Explanation**: 多次浮點運算會累積誤差。

## Q17
- **Difficulty**: Easy
- **Test Point**: 邏輯判斷
- **Question**: `nums = [4, 5]`，結果應為？
- **Options**: [A] `[5, 4]`, [B] `[4, 5]`, [C] `[20, 20]`, [D] `[1, 1]`
- **Answer**: A
- **Explanation**: 位置 0 是 5，位置 1 是 4。

## Q18
- **Difficulty**: Medium
- **Test Point**: 資料結構
- **Question**: 本題是否可以用 `Prefix Sum` (前綴和) 的邏輯來推導？
- **Options**: [A] 可以，把加法換成乘法即可, [B] 不可以，完全不同, [C] 只有在 target 為 0 時可以, [D] 視陣列長度而定
- **Answer**: A
- **Explanation**: 這是前綴/後綴思想在乘法上的應用。

## Q19
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 如何初始化一個長度為 `n` 且全為 1 的列表？
- **Options**: [A] `[1] * n`, [B] `list(1, n)`, [C] `range(n) * 1`, [D] `[1 for i in range(n)]`
- **Answer**: A
- **Explanation**: `[1] * n` 是最簡潔的 Python 寫法。

## Q20
- **Difficulty**: Hard
- **Test Point**: 全局思維
- **Question**: 如果要計算的是「除自己以外的所有數字之和」，還需要前綴後綴法嗎？
- **Options**: [A] 不需要，直接 `總和 - nums[i]` 即可, [B] 需要, [C] 無法計算, [D] 視正負數而定
- **Answer**: A
- **Explanation**: 減法沒有「除以零」的問題。

## Q21
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: `Prefix` 的中文意思通常是？
- **Options**: [A] 字尾, [B] 字首 (或前綴), [C] 中間, [D] 隨機
- **Answer**: B
- **Explanation**: 代表某個位置之前的內容。

## Q22
- **Difficulty**: Medium
- **Test Point**: 實作細節
- **Question**: 第一輪遍歷結束後，`res[i]` 存儲的是什麼？
- **Options**: [A] `nums[0]` 到 `nums[i]` 的積, [B] `nums[0]` 到 `nums[i-1]` 的積, [C] 全部的積, [D] `nums[i]`
- **Answer**: B
- **Explanation**: 不包含自己，所以是到 `i-1`。

## Q23
- **Difficulty**: Medium
- **Test Point**: 邊界分析
- **Question**: 遍歷結束後，最後一個元素 `res[n-1]` 在第二輪（向左遍歷）中會發生什麼？
- **Options**: [A] 與 1 相乘, [B] 被歸零, [C] 報錯, [D] 保持不變
- **Answer**: A
- **Explanation**: `res[n-1]` 右側沒有數字，所以後綴積變數 `postfix` 此時為 1。

## Q24
- **Difficulty**: Hard
- **Test Point**: 空間複雜度
- **Question**: 如果不使用輸出陣列作為暫存，直接用兩個額外陣列 `L` 和 `R` 來解，額外空間複雜度是？
- **Options**: [A] `O(1)`, [B] `O(N)`, [C] `O(2N)`, [D] `B 和 C 都是，Big O 記作 O(N)`
- **Answer**: D
- **Explanation**: 雖然用了兩個 N 長度陣列，但仍屬於線性空間。

## Q25
- **Difficulty**: Easy
- **Test Point**: 邏輯判斷
- **Question**: 若 `nums = [1, 2, 0, 4]`，結果中索引為 2 (數值為 0) 的位置結果應為？
- **Options**: [A] 0, [B] 8, [C] 1, [D] 4
- **Answer**: B
- **Explanation**: `1 * 2 * 4 = 8`。

## Q26
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: 在 Python 3 中，整數乘法會發生溢位 (Overflow) 嗎？
- **Options**: [A] 會，超過 64 位元會報錯, [B] 不會，Python 會自動轉換為大整數 (Arbitrary precision), [C] 視內存而定, [D] 只有在除法時會
- **Answer**: B
- **Explanation**: 這是 Python 處理大數據的一個便利特性，但在其他語言 (如 C++) 需注意溢位。

## Q27
- **Difficulty**: Medium
- **Test Point**: 演算法穩定性
- **Question**: 本題的前綴後綴法是否需要處理負數？
- **Options**: [A] 需要特別處理, [B] 不需要，乘法運算自動處理正負號, [C] 負數會導致結果錯誤, [D] 只能處理正數
- **Answer**: B
- **Explanation**: 正負號在連乘中會自然轉換。

## Q28
- **Difficulty**: Hard
- **Test Point**: 效率對比
- **Question**: 暴力解 `O(N^2)` 在處理 `N=100,000` 的數據時，大約需要多少次運算？
- **Options**: [A] 10 萬次, [B] 100 萬次, [C] 100 億次, [D] 10 兆次
- **Answer**: C
- **Explanation**: `10^5` 的平方是 `10^10` (100 億)，普通 CPU 處理此量級約需數十秒，會導致超時。

## Q29
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 題目保證輸入陣列長度 `n` 至少為多少？
- **Options**: [A] 0, [B] 1, [C] 2, [D] 10
- **Answer**: C
- **Explanation**: 至少有兩個數才有「排除自己」的意義。

## Q30
- **Difficulty**: Medium
- **Test Point**: 程式碼判讀
- **Question**: `prefix = 1; for i in range(n): res[i] = prefix; prefix *= nums[i]`。這段程式碼的目的是？
- **Options**: [A] 初始化, [B] 計算所有位置的前綴積, [C] 找最大值, [D] 統計 0 的個數
- **Answer**: B
- **Explanation**: 這是向右遍歷的核心邏輯。

## Q31
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 如果題目允許除法，最簡單的寫法是？
- **Options**: [A] `total_prod / nums[i]`, [B] `total_prod * nums[i]`, [C] `nums[i] - total_prod`, [D] `sum(nums) / i`
- **Answer**: A
- **Explanation**: 直接除掉自己。

## Q32
- **Difficulty**: Medium
- **Test Point**: 實作細節
- **Question**: 在第二輪向左遍歷中，為什麼要使用 `*=` 而不是 `=`？
- **Options**: [A] 因為要將後綴積「乘進去」已經存有前綴積的 `res[i]` 中, [B] 因為比較快, [C] 因為 Python 限定, [D] 因為 `=` 會報錯
- **Answer**: A
- **Explanation**: 最終答案是 `Prefix * Postfix`。

## Q33
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: 如何寫出從 `n-1` 到 `0` 的 `for` 迴圈？
- **Options**: [A] `for i in range(n-1, -1, -1)`, [B] `for i in range(n-1, 0, -1)`, [C] `for i in reversed(range(n))`, [D] A 和 C 都是
- **Answer**: D
- **Explanation**: 兩種寫法在 Python 中都很常見。

## Q34
- **Difficulty**: Hard
- **Test Point**: 演算法變體
- **Question**: 如果要計算的是「除自己以外所有數的最大值」，還能用類似邏輯嗎？
- **Options**: [A] 可以，前綴最大值與後綴最大值, [B] 不可以, [C] 只有正數可以, [D] 需要用堆積
- **Answer**: A
- **Explanation**: 這是「區間查詢」思想的擴展。

## Q35
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 1 乘以任何數等於？
- **Options**: [A] 0, [B] 1, [C] 該數本身, [D] 無法確定
- **Answer**: C
- **Explanation**: 這是本題初始化 `prefix/postfix` 為 1 的根本原因。

## Q36
- **Difficulty**: Medium
- **Test Point**: 資料結構
- **Question**: 為什麼說這題是 Array 章節的經典？
- **Options**: [A] 考察對陣列遍歷與邊界處理的理解, [B] 考察對除法的掌握, [C] 考察對排序的掌握, [D] 以上皆是
- **Answer**: A
- **Explanation**: 尤其是不使用除法且優化空間的要求，極具訓練價值。

## Q37
- **Difficulty**: Medium
- **Test Point**: 邏輯演練
- **Question**: `nums = [1, 2, 3]`。前綴積結果是 `[1, 1, 2]`，後綴積變量序列是？
- **Options**: [A] `1 -> 3 -> 6`, [B] `1 -> 2 -> 6`, [C] `3 -> 2 -> 1`, [D] `1 -> 1 -> 1`
- **Answer**: A
- **Explanation**: `1` (初始), `1*3=3`, `3*2=6`。

## Q38
- **Difficulty**: Hard
- **Test Point**: 效能分析
- **Question**: `O(N)` 空間解法在內存受限（如嵌入式設備）中相比 `O(1)` 優勢？
- **Options**: [A] 沒優勢, [B] `O(1)` 空間解法可以避免動態內存分配的風險與開銷, [C] 更慢, [D] 程式碼更長
- **Answer**: B
- **Explanation**: 在受限環境下，能少用一個陣列就是巨大的優勢。

## Q39
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 輸入 `[0, 0, 0]`，輸出是？
- **Options**: [A] `[0, 0, 0]`, [B] `[1, 1, 1]`, [C] `[0, 1, 0]`, [D] `[]`
- **Answer**: A
- **Explanation**: 每個位置排除自己後都還有兩個 0。

## Q40
- **Difficulty**: Hard
- **Test Point**: 全局視野
- **Question**: 解決這題後，你能學到的最重要思維是？
- **Options**: [A] 如何用 Python 做乘法, [B] 如何透過「預計算 (Pre-computation)」將重複運算拆解為前綴與後綴, [C] 0 很麻煩, [D] 不要用除法
- **Answer**: B
- **Explanation**: 這種「拆解區域」的思維是許多進階演算法（如 Segment Tree）的基石。
