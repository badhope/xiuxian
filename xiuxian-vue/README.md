# 🧧 太虚仙门 · 问道长生

> 修仙题材网页游戏 | Vue 3 + Vite + Pinia + Tailwind CSS

[![Build](https://img.shields.io/badge/Build-Passing-brightgreen)]()
[![Vue](https://img.shields.io/badge/Vue-3.4+-42b883)]()
[![License](https://img.shields.io/badge/License-MIT-yellow)]()

---

## 📖 项目简介

太虚仙门是一款修仙题材的网页游戏，玩家可以在游戏中体验完整的修仙历程，从初窥门径到飞升仙界。游戏包含丰富的修炼系统、功法体系、丹药炼制、境界突破、战斗系统等核心玩法。

## 🕹️ 游戏特色

### 核心玩法
- **🧘 境界修炼** - 从炼气到渡劫，体验完整的修仙境界体系
- **📜 功法系统** - 学习各种功法，提升修炼效率和战斗力
- **⚗️ 炼丹系统** - 炼制丹药，辅助修炼和战斗
- **⚔️ 战斗系统** - PVE战斗，挑战各种敌人
- **🎰 抽卡系统** - 抽取稀有灵根和法宝
- **📋 任务系统** - 每日/每周任务，获取奖励
- **🏆 成就系统** - 达成成就，解锁丰厚奖励
- **📚 修仙百科** - 详尽的世界观和系统说明

### 技术亮点
- 🎨 采用 Tailwind CSS 构建精美古风界面
- 📱 完善的响应式设计，支持移动端/平板/桌面
- 💾 localStorage 数据持久化
- 🎯 数学模型驱动的数值平衡系统

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | ^3.4.0 | 框架 |
| Vite | ^5.0.0 | 构建工具 |
| Pinia | ^2.1.0 | 状态管理 |
| Vue Router | ^4.2.0 | 路由 |
| Tailwind CSS | ^3.4.0 | 样式 |

## 🚀 快速开始

### 安装依赖

```bash
cd xiuxian-vue
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173

### 生产构建

```bash
npm run build
```

构建产物在 `docs/` 目录，可直接部署到 GitHub Pages。

## 📁 项目结构

```
xiuxian-vue/
├── docs/                    # 构建产物
├── public/                  # 静态资源
├── src/
│   ├── assets/              # 图片资源
│   ├── components/          # 公共组件
│   │   ├── AppLayout.vue    # 主布局
│   │   └── BackToTop.vue   # 返回顶部
│   ├── router/             # 路由配置
│   │   └── index.js
│   ├── stores/             # Pinia状态管理
│   │   └── user.js
│   ├── utils/              # 工具函数
│   │   ├── contentData.js  # 游戏数据
│   │   └── gameMath.js     # 数值计算
│   ├── views/              # 页面组件
│   │   ├── Home.vue        # 首页
│   │   ├── Lore.vue        # 修仙百科
│   │   ├── Realm.vue       # 境界系统
│   │   ├── Technique.vue   # 功法系统
│   │   ├── Alchemy.vue     # 炼丹系统
│   │   ├── Practice.vue   # 修炼系统
│   │   ├── Gacha.vue       # 抽卡系统
│   │   ├── Battle.vue      # 战斗系统
│   │   ├── Task.vue        # 任务系统
│   │   ├── Achievement.vue # 成就系统
│   │   ├── Health.vue      # 身体状态
│   │   └── News.vue        # 游戏资讯
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎮 游戏系统

### 境界体系
| 境界 | 寿元 | 战斗加成 |
|------|------|----------|
| 初窥门径 | 百年 | 1.0x |
| 登堂入室 | 百五十载 | 1.2x |
| 融会贯通 | 二百载 | 1.5x |
| 炉火纯青 | 三百载 | 2.0x |
| 登峰造极 | 五百载 | 2.5x |
| 出神入化 | 千载 | 3.0x |
| 返璞归真 | 三千载 | 4.0x |
| 天人合一 | 万载 | 5.0x |
| 传说境界 | 与天同寿 | 10.0x |

### 灵根系统
- 五行灵根：金、木、水、火、土
- 变异灵根：风、雷、冰、光、暗
- 灵根品质影响修炼效率

## 📊 数据统计

- ✅ 功法数量：28+
- ✅ 丹药数量：16+
- ✅ 境界数量：9
- ✅ 成就数量：20+
- ✅ 任务数量：15+

## 🌐 部署

项目已配置 GitHub Pages 部署，构建产物在 `docs/` 目录。

```bash
# 强制推送到 GitHub
git add .
git commit -m "feat: 更新内容"
git push -f origin main
```

## 📝 更新日志

### v1.1.0 (2024-03)
- 新增修仙百科页面
- 新增返回顶部组件
- 优化UI交互体验
- 完善内容数据

### v1.0.0 (2024-01)
- 初始版本发布
- 核心游戏系统
- 基础界面框架

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**修仙之路，道阻且长。愿诸君早日得道飞升！** 🧧
