# Node.js-basis
  
  node.js 本身是一個 JS 的運行環境，類似瀏覽器一樣 可以解析和執行 JS 代碼。
  
  在 node.js 中沒有 DOM、BOM 對象，他的 JS 是最基礎的 ECMAScript 再加上其他 API


### node.js 最基本的使用方式為：
    
   - A. 編寫一個 JS 文件
   - B. 打開終端機 定位到此文件的目錄 輸入 "node 空格 + 文件名"
     
     * 這裏要注意 文件名稱如果是 node.js 則無法使用，且文件名稱最好也不要是中文。


### node.js 文件操作: 
   
   瀏覽器中的 JS 是沒有文件操作能力的，但在 node.js 中 具有文件操作能力。
      
   - 讀取文件方式為：
     
       - A. 使用 require 方法加載文件系統模塊 > `var fs = require('fs')`
       - B. 使用 `fs.readFile()` 方法 其參數1為文件地址 參數2為回調函數

          * 回調函數中有兩個參數 其參數1為error 錯誤對象 參數2為data 文件內容
          * 且data內容為二進制數據 必須在 JS 文件中把 data.toString()

   - 寫入文件方式為：

      - A. 使用 require 方法加載文件系統模塊 > `var fs = require('fs')`
      - B. 使用 `fs.writeFile()` 方法 其參數1為文件寫入地址+文件名稱 參數2為要寫入文件的內容 參數3為回調函數
       
          * 回調函數中只有一個參數 其參數1為error 錯誤對象

  
  ### 創建服務器: 
   
   在 node.js 中提供了一個核心模塊叫 http 是專門用來創建編寫服務器的。
  
   - 服務器使用方法為：
      
      - A. 使用 require 方法加載 http 核心模塊
      - B. 創建一個變量 server 為 `http.createServer()`
      - C. 使用 `server.on()` 方法 參數1為 request 參數2為回調函數
    
        * 回調函數中有兩參數 參數1為 request 參數2為 response
        * 在回調函數中 需使用 response.write('XXX') 方法傳入響應內容
        * 響應內容只能傳入二進制數字與字符串 其他一律報錯
        * 傳完以後需寫上 response.end() 結束響應 否則瀏覽器會一直等待
        * response.write('XXX') 也可以改成直接寫 response.end('XXX') 讓結束響應的同時寫入響應內容
        * 這裏要注意 如果你響應的內容中有中文字 而你沒有設置響應頭
        * 那你就會發現在瀏覽器頁面中響應的中文內容變成亂碼
        * 解決方式為設置一個響應頭：`res.setHeader('Content-Type','text/html; charset=utf-8')`
        * 我們也可以在回調函數中獲取請求地址 request.url > 獲取結果為網址端口號後面的所有內容
   
      - D. 使用 `server.listen()` 方法創建端口號 參數1為你指定的端口號 參數2為回調函數
        * 你指定的端口號不能被其他人所使用 否則無法訪問
        * 回調函數可以傳入一個 console.log 告知服務器已連結完成

  
  ### Node.js 中的模塊系統
    
   - 模塊又分為核心模塊與自定義模塊：
     
     - A.核心模塊為 fs 或 http
     - B.自定義的文件模塊為 js 文件

 
 ### require vs exports
 
   - require 是用來加載並執行模塊的方法
    
     - 通過 require 方法引入後 即可在 node 中一次使用多個文件
     
        * 比如你想在打開文件1時也執行文件2的代碼 只需要在要執行的地方加上一句 require(文件2) 即可
        * 且在 require 方法中可省略後綴名 因為後綴名默認就是 .js

   - exports 是用來導出文件中特定對象的方式
        
        * 在 Node.js 中沒有全局作用域 只有模塊作用域
        * 意思是每個文件之間的 變量 與 函數 不會互相影響
        * 只能在文件本身內部做使用 就算被引入也無法調用別人定義的 變量 與 函數
   
   - exports 本身默認是一個空對象 我們可以通過把 變量 或 函數 放進此對象裡來使用它們
      
      * 比如我們有兩個文件 文件1想獲取文件2中的變量 `var name = 'ZC'`
      * 這時候我們可以在文件2的最後加上一行 `exports.name = name`
      * 然後到文件1 `var file2 = require(文件2)` 使用 `file2.name` 就能獲取到 name了
      * 就類似我們使用核心模塊時的方式一樣
      * 通過把模塊定義為一個變量 並使用變量.模塊方法名 就能調用到模塊中的函數了

  
  ### http 結合 fs 打開不同類型網頁
    
   - 利用讀取文件的方式 把文件內容寫入響應中，讓頁面根據網址不同而呈現不同網頁內容(需根據文件類型設置響應頭)。
   
      * 響應頭 content-type 設置的參考連結: http://tool.oschina.net/commons
