# Quiz: Encode and Decode Strings (659)

## Q1
- **Difficulty**: Easy
- **Test Point**: 題目定義
- **Question**: `Encode and Decode Strings` 的主要目標是什麼？
- **Options**: [A] 加密字串內容讓黑客看不懂, [B] 將字串列表轉換為單一字串，並能完美還原, [C] 壓縮字串以減少磁碟空間, [D] 統計字串中字元出現的頻率
- **Answer**: B
- **Explanation**: 這是一個設計通訊協定的過程。

## Q2
- **Difficulty**: Easy
- **Test Point**: 核心問題
- **Question**: 在進行編碼時，為什麼不能只用一個簡單的分隔符號（如 `:`）來連接字串？
- **Options**: [A] 因為 `:` 太醜了, [B] 因為原始字串內容可能也包含 `:`, 會導致解碼時發生歧義, [C] 因為 Python 不支援, [D] 因為速度慢
- **Answer**: B
- **Explanation**: 分隔符號衝突是編碼設計中最常見的 Bug。

## Q3
- **Difficulty**: Medium
- **Test Point**: 設計思路
- **Question**: 所謂的 `Length-Prefix` (長度前綴) 編碼是如何運作的？
- **Options**: [A] 在字串前面加上它的長度與一個分隔符號, [B] 在字串後面加上長度, [C] 將所有長度存在另外一個檔案, [D] 將長度轉為二進位
- **Answer**: A
- **Explanation**: 例如 `"neet"` -> `"4#neet"`，這樣解碼時先讀取長度 4，就知道後面接著 4 個字元。

## Q4
- **Difficulty**: Medium
- **Test Point**: 複雜度分析
- **Question**: 編碼與解碼的時間複雜度應該是多少才符合最優解？
- **Options**: [A] `O(1)`, [B] `O(N)` (N 為所有字元總數), [C] `O(N log N)`, [D] `O(N^2)`
- **Answer**: B
- **Explanation**: 只需要掃描字串一次即可完成處理。

## Q5
- **Difficulty**: Medium
- **Test Point**: 解碼邏輯
- **Question**: 在解碼 `4#neet` 時，如果直接用 `split("#")` 會發生什麼問題？
- **Options**: [A] 沒有問題, [B] 如果內容也包含 `#` (如 `2#1#`)，會導致過度切割, [C] 速度太慢, [D] 會報錯
- **Answer**: B
- **Explanation**: 不能依賴全局切割，必須精確讀取固定長度。

## Q6
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: 遍歷列表並連接字串，Python 最有效率的方法是？
- **Options**: [A] 用 `+` 號不斷累加, [B] 使用 `"".join()` 結合列表推導式, [C] 使用 `print`, [D] 使用 `while` 迴圈
- **Answer**: B
- **Explanation**: `join` 在處理大量字串連接時效能優於 `+`。

## Q7
- **Difficulty**: Hard
- **Test Point**: 實作細節
- **Question**: 如何從編碼字串中讀取「長度數字」？
- **Options**: [A] 只讀取第一個字元, [B] 讀取直到遇到分隔符號（如 `#`）為止，並將其轉為整數, [C] 假設長度固定為 2 位數, [D] 用隨機數
- **Answer**: B
- **Explanation**: 長度可能是 `100` 或 `1000`，所以必須讀取到分隔符號。

## Q8
- **Difficulty**: Medium
- **Test Point**: 空間複雜度
- **Question**: `Encode` 和 `Decode` 的額外空間複雜度（不計回傳值）是？
- **Options**: [A] `O(N)`, [B] `O(1)`, [C] `O(log N)`, [D] `O(N^2)`
- **Answer**: B
- **Explanation**: 我們只需要幾個變數與指標進行處理。

## Q9
- **Difficulty**: Easy
- **Test Point**: 邊界情況
- **Question**: 如果輸入列表是空的 `[]`，編碼後應該是什麼？
- **Options**: [A] `"[]"`, [B] 空字串 `""`, [C] `None`, [D] `"0"`
- **Answer**: B
- **Explanation**: 空列表編碼為空字串，解碼應回傳空列表。

## Q10
- **Difficulty**: Hard
- **Test Point**: 進階挑戰
- **Question**: 如果字串中包含非 ASCII 字元（如 Emoji），長度計算應該注意什麼？
- **Options**: [A] 不需要注意, [B] 應計算 Byte 長度而非字元個數, [C] 應將 Emoji 刪除, [D] Python 會自動處理
- **Answer**: B
- **Explanation**: 在網路傳輸中，長度通常以 Byte 為準，否則不同編碼會出錯。

## Q11
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: 編碼後的結果字串是否一定要具備可讀性？
- **Options**: [A] 是, [B] 否，只要能解碼還原即可, [C] 必須是英文, [D] 必須包含數字
- **Answer**: B
- **Explanation**: 許多二進位編碼格式（如 Protobuf）人類是看不懂的。

## Q12
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: 補完解碼程式碼：`j = i; while s[j] != "#": j += 1; length = int(s[i:____])`
- **Options**: [A] `j`, [B] `j + 1`, [C] `i + 1`, [D] `length`
- **Answer**: A
- **Explanation**: `j` 指向 `#`，所以切片到 `j` 正好取出數字部分。

## Q13
- **Difficulty**: Hard
- **Test Point**: 演算法變體
- **Question**: 除了長度前綴，還有一種「逸出 (Escaping)」法，它是如何處理分隔符號的？
- **Options**: [A] 禁止輸入分隔符號, [B] 當內容包含分隔符號時，在前面加一個特殊的 Escape 字元, [C] 將分隔符號換成空白, [D] 無法解決
- **Answer**: B
- **Explanation**: 類似於 `\"` 在字串中代表引號本身。

## Q14
- **Difficulty**: Easy
- **Test Point**: 邏輯演練
- **Question**: `"we", "say", "hello"` 使用長度前綴法編碼後的可能結果是？
- **Options**: [A] `2#we3#say5#hello`, [B] `we:say:hello`, [C] `2we3say5hello`, [D] `wesayhello`
- **Answer**: A
- **Explanation**: 這是本單元最標準的解法。

## Q15
- **Difficulty**: Medium
- **Test Point**: 效能分析
- **Question**: 為什麼說「逸出法」通常比「長度前綴法」稍慢？
- **Options**: [A] 逸出法需要逐字檢查並可能插入新字元, [B] 逸出法比較難寫, [C] 前綴法可以一次跳轉, [D] A 和 C 都是
- **Answer**: D
- **Explanation**: 前綴法利用已知長度直接進行記憶體拷貝，效能極高。

## Q16
- **Difficulty**: Easy
- **Test Point**: 資料結構
- **Question**: 解碼後回傳的資料型態應該是？
- **Options**: [A] `String`, [B] `List of Strings`, [C] `Set`, [D] `Dictionary`
- **Answer**: B
- **Explanation**: 必須還原成原始的字串陣列。

## Q17
- **Difficulty**: Hard
- **Test Point**: 面試加分題
- **Question**: 在實際開發中，本題涉及的知識最常用於哪裡？
- **Options**: [A] 網頁切版, [B] 資料序列化與通訊協定 (Serialization & Protocol), [C] 深度學習, [D] 資料庫查詢
- **Answer**: B
- **Explanation**: 這是底層資料傳輸的核心觀念。

## Q18
- **Difficulty**: Medium
- **Test Point**: 題目描述
- **Question**: 本題在 LeetCode 屬於什麼等級？
- **Options**: [A] Easy, [B] Medium, [C] Hard, [D] 超級難
- **Answer**: B
- **Explanation**: 它的概念簡單，但實作細節（尤其是邊界處理）需要細心。

## Q19
- **Difficulty**: Easy
- **Test Point**: Python 語法
- **Question**: `s[i:i+length]` 這行切片操作的作用是？
- **Options**: [A] 取出長度為 `length` 的字串內容, [B] 刪除字串, [C] 檢查字串是否相等, [D] 將字串反轉
- **Answer**: A
- **Explanation**: 根據之前讀取的長度精確提取資料。

## Q20
- **Difficulty**: Hard
- **Test Point**: 全局視野
- **Question**: 為什麼說設計一個穩健的 `Encode/Decode` 系統需要考慮「向下相容性」？
- **Options**: [A] 為了省電, [B] 確保舊版程式也能解碼新版產生的資料, [C] 為了增加安全性, [D] 避免 Python 更新
- **Answer**: B
- **Explanation**: 雖然本題不需要考慮，但這是現實設計中的重要考量。

## Q21
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: `Delimiter` 指的是什麼？
- **Options**: [A] 編碼器, [B] 分隔符號, [C] 解碼器, [D] 字串長度
- **Answer**: B
- **Explanation**: 用來區分不同資料塊的符號。

## Q22
- **Difficulty**: Medium
- **Test Point**: 實作細節
- **Question**: 在編碼迴圈中：`for s in strs: res += str(len(s)) + "#" + s`。這種做法在 Python 中？
- **Options**: [A] 正確但效能較差（宜用 join）, [B] 完全錯誤, [C] 是最快的做法, [D] 會導致死鎖
- **Answer**: A
- **Explanation**: 大量字串累積推薦使用列表收集後再一次 `join`。

## Q23
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: `int("123")` 會回傳什麼？
- **Options**: [A] `"123"`, [B] `123`, [C] `[1, 2, 3]`, [D] 報錯
- **Answer**: B
- **Explanation**: 將字串轉為整數。

## Q24
- **Difficulty**: Hard
- **Test Point**: 安全性
- **Question**: 長度前綴法是否能防止 SQL 注入或 XSS 攻擊？
- **Options**: [A] 能, [B] 不能，它只負責格式還原, [C] 只有在加密時能, [D] 視分隔符號而定
- **Answer**: B
- **Explanation**: 編碼不等於安全過濾。

## Q25
- **Difficulty**: Easy
- **Test Point**: 邏輯判斷
- **Question**: 如果列表只有一個元素 `["hello"]`，編碼後應該長什麼樣？
- **Options**: [A] `5#hello`, [B] `hello`, [C] `1#5#hello`, [D] `5hello`
- **Answer**: A
- **Explanation**: 符合「長度 + 分隔符 + 內容」的結構。

## Q26
- **Difficulty**: Medium
- **Test Point**: 實作錯誤
- **Question**: 如果解碼時忘記將 `i` 指標移動到下一段的開頭，會發生什麼？
- **Options**: [A] 程式會停止, [B] 會陷入死迴圈 (Infinite Loop), [C] 答案依然正確, [D] 記憶體會溢出
- **Answer**: B
- **Explanation**: 每次解碼一個字串後，必須更新 `i` 的位置。

## Q27
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: `i = j + 1 + length`。這行程式碼中 `+ 1` 的作用是？
- **Options**: [A] 跳過分隔符號 `#`, [B] 增加計數, [C] 預留空間, [D] 修補索引誤差
- **Answer**: A
- **Explanation**: `j` 指向 `#`，所以要從 `j+1` 開始讀取內容。

## Q28
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 本題在 LeetCode 是一道「付費題目 (Locked)」，所以通常我們在哪裡練習？
- **Options**: [A] LintCode, [B] 不練習, [C] 聽別人講, [D] 只有面試官會看
- **Answer**: A
- **Explanation**: LintCode 659 提供免費的相同練習題目。

## Q29
- **Difficulty**: Hard
- **Test Point**: 演算法變體
- **Question**: 有一種編碼法是 `Base64`，它的主要目的是？
- **Options**: [A] 壓縮資料, [B] 將二進位數據轉為可見字元進行傳輸, [C] 進行加密, [D] 排序字串
- **Answer**: B
- **Explanation**: 確保數據在僅支援文字的通道（如 Email）中傳輸不損壞。

## Q30
- **Difficulty**: Medium
- **Test Point**: 設計考量
- **Question**: 使用長度前綴法，是否需要限制原始字串中不能包含數字？
- **Options**: [A] 是, [B] 否，因為有分隔符號 `#` 區隔, [C] 是，否則會報錯, [D] 視長度而定
- **Answer**: B
- **Explanation**: 這是此設計最強大的地方，能處理任何字元內容。

## Q31
- **Difficulty**: Easy
- **Test Point**: 基礎概念
- **Question**: `Decode` 的中文意思通常是？
- **Options**: [A] 編碼, [B] 解碼, [C] 刪除, [D] 連接
- **Answer**: B
- **Explanation**: 將編碼後的資料還原。

## Q32
- **Difficulty**: Medium
- **Test Point**: Python 語法
- **Question**: `while i < len(s):` 作為解碼主迴圈，`i` 應該如何初始化？
- **Options**: [A] `i = 0`, [B] `i = 1`, [C] `i = -1`, [D] `i = None`
- **Answer**: A
- **Explanation**: 從字串開頭開始掃描。

## Q33
- **Difficulty**: Hard
- **Test Point**: 複雜度深究
- **Question**: 如果每次讀取長度都用 `s.find("#", i)`，總複雜度還是 `O(N)` 嗎？
- **Options**: [A] 是, [B] 否, [C] 取決於數字的大小, [D] 取決於 Python 版本
- **Answer**: A
- **Explanation**: 雖然 `find` 有開銷，但每個字元仍只會被掃描常數次。

## Q34
- **Difficulty**: Easy
- **Test Point**: 題目細節
- **Question**: 題目是否要求我們必須儲存編碼後的字串到文件？
- **Options**: [A] 否，這只是一個演算法練習, [B] 是，必須存為 .txt, [C] 只有在 Python 寫才要, [D] 視 target 而定
- **Answer**: A
- **Explanation**: 主要是測試編解碼的邏輯。

## Q35
- **Difficulty**: Medium
- **Test Point**: 資料結構
- **Question**: 編碼後的長度數字，最長可能佔幾個字元？
- **Options**: [A] 1 個, [B] 取決於字串長度, [C] 固定 4 個, [D] 無限大
- **Answer**: B
- **Explanation**: 如果字串長一萬，則長度數字 `10000` 佔 5 個字元。

## Q36
- **Difficulty**: Medium
- **Test Point**: 實作邏輯
- **Question**: 解碼後得到的結果列表 `res`，第一個被加入的應該是？
- **Options**: [A] 最後一個字串, [B] 第一個字串, [C] 全部字串, [D] 數字
- **Answer**: B
- **Explanation**: 解碼應保持原有的順序。

## Q37
- **Difficulty**: Hard
- **Test Point**: 精確度問題
- **Question**: 如果編碼後的字串 `100#...` 結尾處被意外切斷，解碼器應該如何處理？
- **Options**: [A] 當作沒看到, [B] 拋出異常或回傳錯誤標誌, [C] 隨機填充, [D] 以上皆非
- **Answer**: B
- **Explanation**: 穩健的系統應具備檢錯能力。

## Q38
- **Difficulty**: Easy
- **Test Point**: 題目描述
- **Question**: 本題在 NeetCode-150 是第幾題？
- **Options**: [A] 第 1 題, [B] 第 8 題, [C] 最後一題, [D] 只有進階班才有
- **Answer**: B
- **Explanation**: 它是 Arrays & Hashing 的經典收尾題之一。

## Q39
- **Difficulty**: Medium
- **Test Point**: Python 特性
- **Question**: 為什麼不直接用 `str(strs)` 當編碼？
- **Options**: [A] 因為解析起來極為複雜且不安全（eval 的風險）, [B] 因為比較慢, [C] 因為它不是字串, [D] 以上皆是
- **Answer**: A
- **Explanation**: 雖然可行，但不是正規的編解碼設計。

## Q40
- **Difficulty**: Hard
- **Test Point**: 全局視野
- **Question**: 本題最重要的核心啟示是？
- **Options**: [A] 要多用 # 符號, [B] 如何處理「邊界」與「內容」的衝突, [C] Python 很好用, [D] 網路傳輸很麻煩
- **Answer**: B
- **Explanation**: 區分 Metadata (長度) 與 Data (內容) 是電腦科學的根本。
