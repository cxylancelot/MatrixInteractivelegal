# Matrix Interactive Legal · 矩阵互动法律

聚焦 **Games / Platforms / Digital Worlds** 三个品类的精品法律团队官网（纯静态站点，GitHub Pages 部署）。

## 项目结构

| 文件 | 说明 |
|------|------|
| `index.html` | 单页官网：团队、业务、案例、联系方式与执业声明 |
| `styles.css` | 全站样式：VI 色板、响应式布局、滚动揭示动画 |
| `script.js` | 滚动揭示动画（IntersectionObserver） |
| `assets/logo.png` | 原始 logo（透明背景，取自 PSD 深色版；首页主视觉/页脚） |
| `assets/mark.png` | 原始 logo 的 M 字标（透明背景；导航栏图标） |
| `assets/team/` | 团队成员形象照（崔向一、顾子牧） |
| `assets/pixel-m-color.svg` | 名片卡右下角矩阵星点装饰（像素风格） |
| `assets/og-logo.png` | 分享预览图（1200×600） |
| `assets/favicon.png` / `apple-touch-icon.png` | 浏览器与移动端图标 |

## 品牌色（取自 `logo.psd` 品牌信息板）

- 深藏蓝 `#071230`
- 青色 `#05c0f8`
- 金色 `#f7b706`
- 浅灰 `#eff0f4`
- 深灰 `#2b343d`

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 部署

项目通过 GitHub Pages 部署：仓库 Settings → Pages → 分支 `main`，目录 `/`。推送到 `main` 后自动构建上线。

## 维护要点

- 占位内容：搜索“待补充”即可定位团队、客户、案例等占位符。
- 联系信息：修改 `index.html` 中 `#contact` 区块。
- 分享预览图：替换 `assets/og-logo.png` 后，同步更新 `index.html` 中的 `og:image` 标签（当前指向 `https://cxylancelot.github.io/MatrixInteractivelegal/assets/og-logo.png`）。
- 更换域名后，需同步更新 `og:url` 与 `og:image` 两个标签。
