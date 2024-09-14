## 歡迎來到 Streamlit 👋

**更快速地構建和分享資料應用程式。**

## 什麼是 Streamlit？

Streamlit 讓你在幾分鐘內將 Python 腳本轉換為互動式的網頁應用，而非數週的開發。無論是構建儀表板、生成報告還是建立聊天應用，你都能輕鬆上手。完成應用後，你可以使用我們的 [Community Cloud 平台](https://streamlit.io/cloud) 來部署、管理和分享你的應用程式。

### 為什麼選擇 Streamlit？

- **簡單且 Pythonic**：撰寫簡潔易讀的程式碼。
- **快速互動原型**：讓他人快速與你的資料互動並提供回饋。
- **即時編輯**：編輯腳本時，應用程式會即時更新。
- **開源且免費**：加入充滿活力的社群，並為 Streamlit 的未來貢獻力量。

## 安裝

打開終端並運行以下指令：

```bash
$ pip install streamlit
$ streamlit hello
```

如果這樣做能在你的瀏覽器中開啟我們的「_Streamlit Hello_」應用，那麼一切都設置完成了！如果沒有，請前往 [我們的文件](https://docs.streamlit.io/get-started) 獲取更多詳細的安裝指引。

這個應用展示了許多 Streamlit 能做到的例子。跳到 [快速開始](#quickstart) 章節來了解這一切是如何運作的。

<img src="https://user-images.githubusercontent.com/7164864/217936487-1017784e-68ec-4e0d-a7f6-6b97525ddf88.gif" alt="Streamlit Hello" width=500 href="none"></img>

## 快速開始

### 一個小例子

創建一個名為 `streamlit_app.py` 的新檔案，並將以下程式碼貼入其中：

```python
import streamlit as st
x = st.slider("選擇一個值")
st.write(x, "的平方是", x * x)
```

然後運行它來開啟應用程式！

```bash
$ streamlit run streamlit_app.py
```

<img src="https://user-images.githubusercontent.com/7164864/215172915-cf087c56-e7ae-449a-83a4-b5fa0328d954.gif" width=300 alt="Little example"></img>

### 我想要更多！

Streamlit 提供了 [大量強大的元件](https://docs.streamlit.io/develop/api-reference) 來讓你的資料應用更豐富多彩，吸引觀眾。這裡有一些例子：

<table border="0">
  <tr>
    <td>
      <a target="_blank" href="https://docs.streamlit.io/develop/api-reference/widgets">
        <img src="https://user-images.githubusercontent.com/7164864/217936099-12c16f8c-7fe4-44b1-889a-1ac9ee6a1b44.png" style="max-height:150px; width:auto; display:block;">
      </a>
    </td>
    <td>
      <a target="_blank" href="https://docs.streamlit.io/develop/api-reference/data/st.dataframe">
        <img src="https://user-images.githubusercontent.com/7164864/215110064-5eb4e294-8f30-4933-9563-0275230e52b5.gif" style="max-height:150px; width:auto; display:block;">
      </a>
    </td>
    <td>
      <a target="_blank" href="https://docs.streamlit.io/develop/api-reference/charts">
        <img src="https://user-images.githubusercontent.com/7164864/215174472-bca8a0d7-cf4b-4268-9c3b-8c03dad50bcd.gif" style="max-height:150px; width:auto; display:block;">
      </a>
    </td>
    <td>
      <a target="_blank" href="https://docs.streamlit.io/develop/api-reference/layout">
        <img src="https://user-images.githubusercontent.com/7164864/217936149-a35c35be-0d96-4c63-8c6a-1c4b52aa8f60.png" style="max-height:150px; width:auto; display:block;">
      </a>
    </td>
    <td>
      <a target="_blank" href="https://docs.streamlit.io/develop/concepts/multipage-apps">
        <img src="https://user-images.githubusercontent.com/7164864/215173883-eae0de69-7c1d-4d78-97d0-3bc1ab865e5b.gif" style="max-height:150px; width:auto; display:block;">
      </a>
    </td>
    <td>
      <a target="_blank" href="https://streamlit.io/gallery">
        <img src="https://user-images.githubusercontent.com/7164864/215109229-6ae9111f-e5c1-4f0b-b3a2-87a79268ccc9.gif" style="max-height:150px; width:auto; display:block;">
      </a>
    </td>
  </tr>
  <tr>
    <td>輸入元件</td>
    <td>資料框</td>
    <td>圖表</td>
    <td>佈局</td>
    <td>多頁應用</td>
    <td>趣味功能</td>
  </tr>
</table>

我們活躍的創作者社群也會使用 🧩 [Streamlit Components](https://streamlit.io/components) 來擴展 Streamlit 的功能。

## 獲取靈感

你可以使用 Streamlit 構建各種應用：

- 🤖  [LLMs & 聊天機器人應用](https://streamlit.io/gallery?category=llms)
- 🧬  [科學與技術應用](https://streamlit.io/gallery?category=science-technology)
- 💬  [自然語言處理與語言應用](https://streamlit.io/gallery?category=nlp-language)
- 🏦  [金融與商業應用](https://streamlit.io/gallery?category=finance-business)
- 🗺  [地理與社會應用](https://streamlit.io/gallery?category=geography-society)
- 以及更多！

**快來看看 [我們的展示廳！](https://streamlit.io/gallery)** 🎈

## 社群雲端平台

使用我們的 [Community Cloud](https://streamlit.io/cloud) 免費部署、管理和分享你的應用程式！在這裡 [註冊](https://share.streamlit.io/signup) 並開始吧。<br><br>
<img src="https://user-images.githubusercontent.com/7164864/214965336-64500db3-0d79-4a20-8052-2dda883902d2.gif" width="400"></img>

## 資源
- 探索我們的 [文件](https://docs.streamlit.io) 來學習 Streamlit 如何運作。
- 在我們的 [社群論壇](https://discuss.streamlit.io) 提問並尋求幫助。
- 閱讀我們的 [部落格](https://blog.streamlit.io) 以獲取開發者和創作者的技巧。
- 透過安裝或創建自己的 [Streamlit Components](https://streamlit.io/components) 來擴展 Streamlit 的功能。
- 幫助其他人找到並使用你的應用，透過在你的 GitHub 倉庫中加入 Streamlit 徽章：
```markdown
[![Streamlit App](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](URL_TO_YOUR_APP)
```
[![Streamlit App](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://share.streamlit.io/streamlit/roadmap)

## 授權

Streamlit 是完全免費和開源的，並根據 [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) 授權。
