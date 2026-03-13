// ========================================
// 基础数据（供游戏使用）
// ========================================

export const TECHNIQUE_CATEGORIES = {
  cultivation: { name: '修炼功法', icon: '📖', color: 'azure' },
  combat: { name: '战斗技法', icon: '⚔️', color: 'vermilion' },
  defense: { name: '防护秘术', icon: '🛡️', color: 'jade' },
  辅助: { name: '辅助秘法', icon: '✨', color: 'gold' },
  special: { name: '特殊功法', icon: '🔮', color: 'spirit' }
}

export const TECHNIQUES = {
  cultivation: [
    { id: 't01', name: '引气诀', grade: 'R', realm: 'chu kui', effect: { cultivation: 1.1 }, desc: '最基础的修炼法门', price: 0 },
    { id: 't02', name: '吐纳功', grade: 'R', realm: 'chu kui', effect: { cultivation: 1.15 }, desc: '吸收天地灵气', price: 0 },
    { id: 't03', name: '聚气术', grade: 'SR', realm: 'deng tang', effect: { cultivation: 1.25 }, desc: '聚集灵气加速修炼', price: 100 },
    { id: 't04', name: '炼气诀', grade: 'SR', realm: 'deng tang', effect: { cultivation: 1.3 }, desc: '提炼体内灵气', price: 150 },
    { id: 't05', name: '五行归元功', grade: 'SSR', realm: 'rong hui', effect: { cultivation: 1.5, element: 'all' }, desc: '融合五行之气', price: 500 },
    { id: 't06', name: '混沌天经', grade: 'SSR', realm: 'lu huo', effect: { cultivation: 1.8 }, desc: '混沌之力的修炼法门', price: 1000 }
  ],
  combat: [
    { id: 'c01', name: '基础剑诀', grade: 'R', realm: 'chu kui', effect: { attack: 1.1 }, desc: '剑修入门', price: 0 },
    { id: 'c02', name: '烈焰刀法', grade: 'SR', realm: 'deng tang', effect: { attack: 1.25, element: '火' }, desc: '火焰刀气', price: 120 },
    { id: 'c03', name: '寒冰掌', grade: 'SR', realm: 'rong hui', effect: { attack: 1.3, element: '水' }, desc: '寒气逼人', price: 180 },
    { id: 'c04', name: '天雷刀法', grade: 'SSR', realm: 'lu huo', effect: { attack: 1.5, element: '雷' }, desc: '引天雷之力', price: 800 },
    { id: 'c05', name: '太初剑意', grade: 'SSR', realm: 'deng feng', effect: { attack: 1.8 }, desc: '剑道至高境界', price: 1500 }
  ],
  defense: [
    { id: 'd01', name: '护体气功', grade: 'R', realm: 'chu kui', effect: { defense: 1.1 }, desc: '基础护体', price: 0 },
    { id: 'd02', name: '金钟罩', grade: 'SR', realm: 'deng tang', effect: { defense: 1.25 }, desc: '金刚不坏', price: 100 },
    { id: 'd03', name: '玄冰盾', grade: 'SR', realm: 'rong hui', effect: { defense: 1.3, element: '水' }, desc: '寒冰护盾', price: 150 },
    { id: 'd04', name: '戊土神光', grade: 'SSR', realm: 'chu shen', effect: { defense: 1.6, element: '土' }, desc: '厚土之力', price: 1200 }
  ],
  辅助: [
    { id: 'a01', name: '轻身术', grade: 'R', realm: 'chu kui', effect: { speed: 1.1 }, desc: '身轻如燕', price: 0 },
    { id: 'a02', name: '神识诀', grade: 'SR', realm: 'deng tang', effect: { spirit: 1.2 }, desc: '增强神识', price: 80 },
    { id: 'a03', name: '隐匿术', grade: 'SR', realm: 'rong hui', effect: { stealth: 1.3 }, desc: '隐藏气息', price: 120 },
    { id: 'a04', name: '天眼通', grade: 'SSR', realm: 'chu shen', effect: { insight: 1.5 }, desc: '看破虚妄', price: 1000 }
  ],
  special: [
    { id: 's01', name: '夺天造化功', grade: 'SSR', realm: 'fan pu', effect: { all: 1.5 }, desc: '夺取天地造化', price: 3000 },
    { id: 's02', name: '大道归一诀', grade: 'SSR', realm: 'tian ren', effect: { all: 2.0 }, desc: '万法归一', price: 5000 }
  ]
}

export const PILLS = {
  cultivation: [
    { id: 'p01', name: '聚气丹', grade: 'R', effect: { cultivation: 50 }, price: 10, desc: '增加修为' },
    { id: 'p02', name: '培元丹', grade: 'SR', effect: { cultivation: 200 }, price: 50, desc: '稳固根基' },
    { id: 'p03', name: '凝婴丹', grade: 'SSR', effect: { cultivation: 1000 }, price: 300, desc: '助结元婴' }
  ],
  breakthrough: [
    { id: 'b01', name: '破境丹', grade: 'R', effect: { breakthroughRate: 0.1 }, price: 100, desc: '提升突破概率' },
    { id: 'b02', name: '悟道丹', grade: 'SR', effect: { breakthroughRate: 0.25 }, price: 500, desc: '增加悟性' },
    { id: 'b03', name: '大道丹', grade: 'SSR', effect: { breakthroughRate: 0.5 }, price: 2000, desc: '大幅提升突破概率' }
  ],
  battle: [
    { id: 'bt01', name: '大力丸', grade: 'R', effect: { attack: 1.2 }, price: 30, desc: '临时提升攻击' },
    { id: 'bt02', name: '金刚丹', grade: 'SR', effect: { defense: 1.3 }, price: 80, desc: '临时提升防御' },
    { id: 'bt03', name: '九转还魂丹', grade: 'SSR', effect: { revive: true }, price: 500, desc: '战斗复活一次' }
  ],
  special: [
    { id: 'sp01', name: '洗髓丹', grade: 'SR', effect: { rootChange: true }, price: 1000, desc: '改变灵根属性' },
    { id: 'sp02', name: '寿元丹', grade: 'SSR', effect: { lifespan: 100 }, price: 3000, desc: '增加百年寿元' }
  ]
}

export const SECRET_LANDS = [
  {
    id: 'sl01',
    name: '灵气山谷',
    realm: 'chu kui',
    difficulty: 1,
    enemies: [
      { name: '野猪', attack: 8, defense: 3, hp: 30 },
      { name: '毒蛇', attack: 12, defense: 2, hp: 25 }
    ],
    rewards: [
      { type: 'lingqi', min: 20, max: 50 },
      { type: 'pill', pool: 'cultivation' }
    ],
    desc: '灵气浓郁的山谷，适合新手历练'
  },
  {
    id: 'sl02',
    name: '寒冰洞府',
    realm: 'deng tang',
    difficulty: 3,
    enemies: [
      { name: '冰魔', attack: 20, defense: 10, hp: 80 },
      { name: '雪怪', attack: 25, defense: 15, hp: 100 }
    ],
    rewards: [
      { type: 'lingqi', min: 100, max: 200 },
      { type: 'technique', pool: 'defense' }
    ],
    desc: '寒冷彻骨的洞府，内有冰系功法'
  },
  {
    id: 'sl03',
    name: '烈焰山谷',
    realm: 'rong hui',
    difficulty: 5,
    enemies: [
      { name: '火焰巨人', attack: 40, defense: 25, hp: 150 },
      { name: '炎魔', attack: 50, defense: 20, hp: 120 }
    ],
    rewards: [
      { type: 'lingqi', min: 300, max: 500 },
      { type: 'technique', pool: 'combat' },
      { type: 'artifact', rarity: 'SR' }
    ],
    desc: '火山深处的秘境，内有火系至宝'
  },
  {
    id: 'sl04',
    name: '上古遗迹',
    realm: 'lu huo',
    difficulty: 8,
    enemies: [
      { name: '守护傀儡', attack: 80, defense: 50, hp: 300 },
      { name: '古修残魂', attack: 100, defense: 40, hp: 250 }
    ],
    rewards: [
      { type: 'lingqi', min: 1000, max: 2000 },
      { type: 'technique', pool: 'special' },
      { type: 'artifact', rarity: 'SSR' }
    ],
    desc: '上古修士留下的遗迹，内藏大机缘'
  },
  {
    id: 'sl05',
    name: '混沌空间',
    realm: 'deng feng',
    difficulty: 12,
    enemies: [
      { name: '混沌巨兽', attack: 200, defense: 100, hp: 800 },
      { name: '天道意志', attack: 300, defense: 150, hp: 1000 }
    ],
    rewards: [
      { type: 'lingqi', min: 5000, max: 10000 },
      { type: 'technique', pool: 'special' },
      { type: 'artifact', rarity: 'SSR' },
      { type: 'pill', pool: 'special' }
    ],
    desc: '传说中的混沌空间，唯有化神可入'
  }
]

export const SECT_DATA = [
  {
    id: 'sect_1',
    name: '青云宗',
    type: '正派',
    desc: '正道领袖，门下弟子数万，底蕴深厚',
    requirement: { realm: 'chu kui', lingqi: 0 }
  }
]

// ========================================
// 修仙世界观与背景设定
// ========================================

export const WORLD_LORE = {
  开篇: {
    title: '太虚仙域',
    content: `天地未分，混沌一片。历经万万亿载，混沌始分，清气上升为天，浊气下沉为地。天地之间，有灵气流转，生生不息。

上古时期，先天生灵感悟天地之道，吸纳灵气于体内，逐步超凡入圣，是为修仙之始。经无数岁月传承演变修仙之道逐渐完善，形成如今的修炼体系。

修仙者以灵气为根，以悟性为门，以心性为阶，追寻那缥缈无形的"道"。修仙之路艰难险阻，唯有道心坚定、资质卓绝、机缘深厚者方能踏上巅峰，寻求那传说中的长生之道。

太虚仙域乃修仙界核心之地，灵气浓郁程度远超他处，此处门派林立、强者如云，无数修仙者在此追寻大道。本游戏便发生在这片充满机遇与挑战的神奇土地上。`
  },
  
  修炼体系: {
    title: '修炼体系概述',
    content: `修仙之路，始于灵气终于道。修炼体系共分为九大境界，每一境界都是对天地之道的更深领悟。

炼气期：吸纳天地灵气入体，在经脉中周天运转，凝聚灵气基础。此阶段修士体质逐渐改变，寿命可延长至百岁。

筑基期：将灵气凝聚成液态灵基，在丹田处形成灵气漩涡。此阶段修士可御器飞行，寿命可达两百岁。

金丹期：灵气在丹田凝聚成金色内丹，是为金丹。金丹修士可辟谷不食，寿命可达五百岁。

元婴期：金陵碎裂，元婴出窍。元婴可离体而战，滴血重生，寿命可达千年。

化神期：元婴化为神识，可沟通天地之力，引动天象变化，寿命可达三千年。

炼虚期：神识与肉体合一，可穿梭虚空，寿命可达五千年。

合体期：肉体与神识完美融合，可化身千万，寿命可达八千年。

大乘期：半仙之体，只差一步即可飞升仙界，寿命可达万年。

渡劫期：渡劫成功，飞升仙界，成为仙人，与天地同寿。`
  },

  灵气体系: {
    title: '灵气分类详解',
    content: `天地灵气分为多种属性，不同属性的灵气对修仙者有不同的影响。

【灵气属性】
金、木、水、火、土为五行灵气，是最基础的灵气形态。
风、雷、光、暗为变异灵气，威力更强但极为稀少。
混沌灵气只存在于传说中，据说可融合一切灵气。

【灵气品质】
灵气品质从低到高分为：凡灵、地灵、天灵、仙灵、混沌灵
品质越高的灵气，对修炼效率的加成越显著

【灵气分布】
灵山福地：灵气浓郁，适合修炼
荒郊野岭：灵气稀薄，修炼效率低
秘境遗迹：可能存在高品质灵气或特殊灵气

【灵气修炼】
不同灵根的修士对特定属性灵气有更好的亲和力
火灵根修士在火属性灵气浓郁处修炼效率倍增
通过特殊功法可提升对特定属性灵气的亲和力`
  },

  灵根体系: {
    title: '灵根与资质',
    content: `灵根乃修仙之根本，决定了修士对天地灵气的亲和力和修炼方向。

【灵根分类】
单灵根：只有一种属性灵根，修炼速度极快，但发展方向单一
双灵根：两种属性灵根，修炼速度较快，可兼修两系功法
三灵根：三种属性灵根，修炼速度一般，但根基扎实
四灵根/五灵根：杂灵根，修炼速度较慢，但可兼容多系功法

【灵根品质】
天灵根：修炼速度是普通灵根的三倍以上，有几率悟得大道
地灵根：修炼速度是普通灵根的两倍
凡灵根：普通资质，修炼速度一般

【灵根变异】
某些特殊情况下，灵根可能发生变异
变异灵根通常具有特殊能力
如变异雷灵根，攻击力远超普通雷灵根

【灵根获取】
先天灵根：出生即有，由父母遗传决定
后天灵根：通过天才地宝或特殊功法可获得/改变
洗髓丹可改变灵根属性，但有风险`
  },

  功法起源: {
    title: '功法起源与演变',
    content: `修仙功法乃先贤大能感悟天地大道所创，历经无数岁月演变优化而成。

【功法起源】
上古时期，先天神圣观察天地万物运转之理，结合自身修炼感悟，创造出最初的修炼法门。这些法门口口相传，后来被整理成册，形成最早的功法典籍。

【功法演变】
历经三个大时代：
荒古时代：功法简单粗糙，但威力巨大，修炼风险极高
上古时代：功法体系逐渐完善，形成完整的修炼路线
近古时代：功法趋向平和，修炼门槛降低，但威力也有所下降

【功法等级】
天阶功法：可修炼至渡劫期，极为稀少
地阶功法：可修炼至大乘期，各门派核心传承
玄阶功法：可修炼至合体期
黄阶功法：可修炼至炼虚期
凡阶功法：只能修炼至化神期以下

【功法契合度】
功法与修士灵根越契合，修炼效率越高
部分功法要求特定灵根方可修炼
强行修炼不契合的功法可能导致走火入魔`
  },

  炼丹之道: {
    title: '炼丹术概论',
    content: `炼丹术乃修仙界四大技艺之一，通过将天才地宝炼制成丹药，可大幅提升修炼效率或获得特殊能力。

【炼丹起源】
相传上古时期，神农氏尝百草，辨识药性，后经修士改良，将凡间药材与灵草结合，炼制成修仙界独有的丹药。

【炼丹原理】
以灵火为引，以灵气为媒，将天才地宝中的精华提取融合，去除杂质，凝结成丹。炼丹对火候、时机、配比的要求极为严格。

【丹药分类】
修炼类：提升修炼速度或直接增加修为
突破类：增加境界突破成功率
战斗类：临时提升战斗能力
特殊类：改变体质、延寿、解毒等

【丹药品质】
绝品（SSR）：药效极佳，附带特殊效果
精品（SR）：药效显著
普通（R）：基础药效
次品：药效微弱，可能有丹毒

【丹毒】
是药三分毒，长期服用丹药会在体内积累丹毒
丹毒会影响修炼效率，严重时可能导致修为倒退
可通过特定方式化解丹毒`
  },

  战斗体系: {
    title: '修仙界战斗法则',
    content: `修仙界以实力为尊，战斗是修仙者不可避免的宿命。

【战斗基础】
修仙者的战斗力由多个因素决定：
修为境界：最基础的实力体现
功法秘术：决定招式威力和特殊效果
法宝武器：可大幅提升战斗力
灵宠坐骑：战力加成和特殊辅助

【属性克制】
五行相克：金克木、木克土、土克水、水克火、火克金
变异属性通常克制普通属性
部分特殊体质可无视属性克制

【战斗方式】
法诀对决：释放法术对轰
法宝争斗：操控法宝作战
神识交锋：元婴以上修士可进行神识攻击
阵法困敌：布置阵法困杀敌人

【战斗策略】
境界压制：高境界对低境界有天然优势
属性针对：根据敌人属性选择相克功法
以弱胜强：利用地形、阵法、法宝等可越级挑战

【战斗后果】
胜利：获得资源、声誉提升
失败：可能身死道消，或被打落境界
平手：双方罢手，各有损耗`
  },

  门派势力: {
    title: '修仙门派格局',
    content: `修仙界门派林立，势力错综复杂，形成了独特的修仙格局。

【顶级势力】
道祖级势力：太虚道祖所创太虚仙门，独占鳌头
魔道魁首：万魔渊，势力庞大
佛门圣地：大雷音寺，超然物外
儒家正统：圣贤书院，文道传承

【一流门派】
各拥有一位以上大乘期修士
门下弟子数万，底蕴深厚
掌握稀有功法或资源产地

【二流门派】
拥有合体期修士坐镇
弟子数千，有一定影响力
需要依附大派或联盟自保

【三流门派】
门派中最强者为炼虚期
弟子数百到千人不等
多存在于灵气稀薄之地

【门派考核】
加入门派需通过入门考核
不同门派考核内容不同
通过考核后可获得内门弟子身份`
  },

  资源分布: {
    title: '修仙界资源志',
    content: `修仙界资源有限，各方势力为争夺资源常年争斗。

【灵石】
修仙界通用货币
分为下品、中品、上品、极品
灵脉是灵石的主要来源

【灵草】
年份越高，药效越强
灵草多生长于灵气浓郁之地
百年以上灵草已属稀有

【矿石】
用于炼制法宝
稀有矿石可炼制极品法宝
深地矿脉多由大门派把持

【妖兽材料】
妖丹、皮毛、骨血均可入药或炼器
高阶妖兽材料极为珍贵
猎杀妖兽是获取资源的重要途径

【天才地宝】
天地孕育的宝物
每一样都有神奇功效
常出现在秘境或遗迹中

【资源产地】
灵脉：产出灵石
药园：种植灵草
矿洞：开采矿石
秘境：产出各种天才地宝`
  },

  秘境遗迹: {
    title: '秘境探索指南',
    content: `秘境是上古或远古时期遗留的空间碎片，其中常藏有大机缘。

【秘境分类】
天然秘境：天地自然形成
人造秘境：大能开辟或炼制
古遗址：上古修士遗迹
遗迹空间：强者陨落后遗留

【进入条件】
有的秘境无门槛，有的需要特定条件
境界限制：某些秘境只允许特定境界进入
信物开启：需要特殊信物或钥匙
时限开放：只在特定时间开启

【秘境危险】
空间裂缝：突然出现，可瞬间抹杀修士
守护傀儡：上古留下的守护者
禁制阵法：防止入侵的杀阵
原住民：秘境内的原住生物

【秘境收获】
功法典籍：上古修炼法门
天才地宝：外界难寻的宝物
传承印记：获得大能传承
法宝材料：炼制法宝的顶级材料

【探险建议】
组队前往：人多力量大，风险共担
准备充分：带够丹药、法宝、灵石
了解情报：事先调查秘境详情
量力而行：切勿贪心冒进`
  }
}

// ========================================
// 详细的功法扩展数据
// ========================================

export const TECHNIQUE_EXTENDED = {
  cultivation: {
    categoryName: '修炼功法',
    description: '此类功法主修内气，提升吸纳和转化灵气的效率，是修仙的基础',
    difficulty: '入门简单，精进困难',
    tips: '选择与自身灵根契合的功法可事半功倍',
    techniques: [
      {
        id: 'tc01', name: '引气诀', grade: 'R', realm: 'chu kui', 
        effect: { cultivation: 1.1 }, price: 0,
        desc: '最基础的修炼法门，记载于各门派入门典籍中',
        details: '此功法历史可追溯至上古时期，是所有修炼功法的源头。经无数代先贤改良简化，成为最适合新人入门的法门。修炼此功法可将灵气转化为修为的效率提升10%。',
        cultivationMethod: '每日寅时盘坐，面向东方，吸纳第一缕紫气，配合特定呼吸节奏，将灵气引入体内经脉周天运转。',
        requirements: '无特殊要求，适合所有灵根类型',
        sideEffects: '修炼不当可能导致经脉胀痛，需循序渐进'
      },
      {
        id: 'tc02', name: '吐纳功', grade: 'R', realm: 'chu kui', 
        effect: { cultivation: 1.15 }, price: 0,
        desc: '吸收天地灵气，转化效率较引气诀更高',
        details: '吐纳功源自道家养生之法，经修仙者改良后成为修炼功法。此功法强调与自然呼吸同步，在吸纳灵气的同时排出体内浊气，转化效率比引气诀高15%。',
        cultivationMethod: '选择灵气充沛之地，静心凝神，以特定节奏进行吐纳。每日子时、卯时各修炼一个时辰效果最佳。',
        requirements: '适合所有灵根，水木灵根效果更佳',
        sideEffects: '需保持心境平和，情绪波动时修炼易出偏差'
      },
      {
        id: 'tc03', name: '聚气术', grade: 'SR', realm: 'deng tang', 
        effect: { cultivation: 1.25 }, price: 100,
        desc: '聚集灵气加速修炼，中级修炼功法',
        details: '聚气术是中阶修炼功法中较为出色的一部，修炼至深处可形成灵气漩涡，大幅提升吸纳灵气的速度。此功法在青云宗等大门派中有完整传承。',
        cultivationMethod: '需在体内凝聚灵气漩涡，以漩涡之力牵引周边灵气汇聚。修炼时需保持特定姿势，以特定穴位引导灵气流动。',
        requirements: '需炼气中期以上修为，对灵气有一定控制力',
        sideEffects: '凝聚灵气漩涡失败可能导致灵气暴走'
      },
      {
        id: 'tc04', name: '炼气诀', grade: 'SR', realm: 'deng tang', 
        effect: { cultivation: 1.3 }, price: 150,
        desc: '提炼体内灵气质量，夯实修炼根基',
        details: '炼气诀注重提纯而非数量，修炼此功法虽吸纳灵气的速度不如聚气术，但提炼出的灵气更加精纯。根基扎实的修士在后续突破时会有更大优势。',
        cultivationMethod: '将吸纳的灵气在经脉中反复提炼，如同炼金术士提炼金属杂质。每提炼一次，灵气精纯度提升一分。',
        requirements: '需有耐心，适合沉稳型修士',
        sideEffects: '修炼耗时较长，需有耐心'
      },
      {
        id: 'tc05', name: '五行归元功', grade: 'SSR', realm: 'rong hui', 
        effect: { cultivation: 1.5, element: 'all' }, price: 500,
        desc: '融合五行之气，顶级修炼功法',
        details: '五行归元功相传为某位五行灵根的大乘期修士所创，可同时吸纳转化五种属性的灵气。虽然单属性效率不如专精功法，但五属性齐修的综合效果极为惊人。',
        cultivationMethod: '需在体内构建五行灵气循环，让五种灵气相互转化、生生不息。此过程极为复杂，非大毅力者难以成功。',
        requirements: '需至少三属性灵根，且修为达到筑基期以上',
        sideEffects: '五行失衡可能导致体内灵气紊乱'
      },
      {
        id: 'tc06', name: '混沌天经', grade: 'SSR', realm: 'lu huo', 
        effect: { cultivation: 1.8 }, price: 1000,
        desc: '混沌之力的修炼法门，传说级功法',
        details: '混沌天经是修仙界最顶尖的修炼功法之一，据传只有太虚道祖的亲传弟子才有资格修炼。此功法可吸纳混沌灵气，其效率远超普通灵气。',
        cultivationMethod: '需在极特殊的混沌灵气聚集地修炼，吸纳混沌灵气入体后转化为自身修为。整个过程凶险异常，稍有不慎便会被混沌灵气同化。',
        requirements: '需拥有变异灵根或特殊体质，且有大能护法',
        sideEffects: '风险极高，非大机缘者不可修炼'
      },
      {
        id: 'tc07', name: '太乙金华经', grade: 'SR', realm: 'chu shen', 
        effect: { cultivation: 1.35 }, price: 200,
        desc: '太乙道统修炼法门',
        details: '太乙金华经源自太乙道宗，是道家正统修炼功法之一。此功法讲究阴阳调和，修炼出的灵气具有温和醇厚的特性。',
        cultivationMethod: '需在月圆之夜吸收月华之力，与自身灵气融合。修炼时需保持特定方位和姿势。',
        requirements: '适合阴属性或平衡型灵根',
        sideEffects: '阳气过盛可能导致火气攻心'
      },
      {
        id: 'tc08', name: '九转玄功', grade: 'SSR', realm: 'fan pu', 
        effect: { cultivation: 1.6 }, price: 800,
        desc: '九转轮回修炼法',
        details: '九转玄功分为九转，每一转都是一次对自身的脱胎换骨。修炼至第九转可成就无上道基。此功法极为珍贵，仅在各派藏经阁顶层有少量副本。',
        cultivationMethod: '每转需要经历一次灵气蜕变，过程痛苦异常。每突破一转，灵气品质提升一个台阶。',
        requirements: '需根基极为扎实，且拥有大毅力',
        sideEffects: '转生之痛非常人所能承受'
      }
    ]
  },
  
  combat: {
    categoryName: '战斗技法',
    description: '此类功法主战斗之法，修炼后可大幅提升攻击力',
    difficulty: '入门困难，精进较快',
    tips: '战斗功法需经常实战才能熟练掌握',
    techniques: [
      {
        id: 'tcc01', name: '基础剑诀', grade: 'R', realm: 'chu kui', 
        effect: { attack: 1.1 }, price: 0,
        desc: '剑修入门技法',
        details: '剑诀乃万法之宗，修炼剑诀是成为剑修的第一步。基础剑诀共有一十三式，涵盖了刺、劈、砍、削等基本剑术动作。',
        cultivationMethod: '以气御剑，以意领剑。每日挥剑三千次，感应剑气存在。',
        requirements: '需有一把剑型法宝或灵剑',
        sideEffects: '长时间练习可能导致手臂酸痛'
      },
      {
        id: 'tcc02', name: '烈焰刀法', grade: 'SR', realm: 'deng tang', 
        effect: { attack: 1.25, element: '火' }, price: 120,
        desc: '火焰刀气杀敌',
        details: '烈焰刀法融合了火属性灵气与刀法精髓，修炼至深处可发出刀气斩敌于百步之外。此功法在烈焰门被奉为镇派绝学。',
        cultivationMethod: '将火属性灵气凝聚于刀刃，以特定手法挥出。需在高温环境或火属性灵气浓郁处修炼。',
        requirements: '需拥有火属性灵根或火属性亲和',
        sideEffects: '火气过旺可能导致性格暴躁'
      },
      {
        id: 'tcc03', name: '寒冰掌', grade: 'SR', realm: 'rong hui', 
        effect: { attack: 1.3, element: '水' }, price: 180,
        desc: '寒气逼人，冻结万物',
        details: '寒冰掌至阴至寒，中掌者会被寒气侵入经脉，行动迟缓。修炼至深处可千里之外取人首级。',
        cultivationMethod: '需在极寒之地修炼，吸纳寒气入体后转化为自身攻击力。',
        requirements: '需拥有水属性灵根',
        sideEffects: '寒气入体可能导致体寒之症'
      },
      {
        id: 'tcc04', name: '天雷刀法', grade: 'SSR', realm: 'lu huo', 
        effect: { attack: 1.5, element: '雷' }, price: 800,
        desc: '引天雷之力',
        details: '天雷刀法可沟通天地之力，引天雷降世。此功法威力巨大，但修炼条件苛刻，需在雷雨天感应天雷。',
        cultivationMethod: '每逢雷雨天需外出引雷，以特殊功法将天雷之力转化为自身攻击。',
        requirements: '需拥有雷属性灵根或变异雷灵根',
        sideEffects: '引雷失败可能导致重伤'
      },
      {
        id: 'tcc05', name: '太初剑意', grade: 'SSR', realm: 'deng feng', 
        effect: { attack: 1.8 }, price: 1500,
        desc: '剑道至高境界',
        details: '太初剑意代表了剑道的最高境界，据传修炼至圆满可剑开天门。此剑意攻击凌厉无匹，无物不斩。',
        cultivationMethod: '需领悟剑道真意，非单纯的灵气修炼。需要在剑道传承之地悟道。',
        requirements: '需拥有剑心，且剑道感悟达到一定境界',
        sideEffects: '领悟失败可能导致剑心破碎'
      },
      {
        id: 'tcc06', name: '裂天拳', grade: 'SR', realm: 'chu shen', 
        effect: { attack: 1.35 }, price: 250,
        desc: '拳裂苍穹',
        details: '裂天拳刚猛无匹，每一拳都有开山裂地之威。修炼至深处可破碎虚空。',
        cultivationMethod: '需不断击打山石土地，感悟力量之道。',
        requirements: '需体质强健，最好有炼体功法配合',
        sideEffects: '修炼不当可能导致经脉受损'
      },
      {
        id: 'tcc07', name: '万毒噬心经', grade: 'SSR', realm: 'fan pu', 
        effect: { attack: 1.55, element: '毒' }, price: 1200,
        desc: '天下至毒功法',
        details: '万毒噬心经是魔道顶尖功法，修炼者可用毒于无形，中者无药可救。此功法虽威力巨大，但有伤天和。',
        cultivationMethod: '需以身试毒，在毒物环绕中修炼。',
        requirements: '需有特殊体质或解毒功法护身',
        sideEffects: '长期与毒为伍可能导致中毒'
      }
    ]
  },

  defense: {
    categoryName: '防护秘术',
    description: '此类功法主防御之道，可大幅提升生存能力',
    difficulty: '循序渐进，厚积薄发',
    tips: '高防御在秘境探索和战斗中至关重要',
    techniques: [
      {
        id: 'td01', name: '护体气功', grade: 'R', realm: 'chu kui', 
        effect: { defense: 1.1 }, price: 0,
        desc: '基础护体之术',
        details: '护体气功是最基础的防护功法，在身体表面形成一层灵气护盾，可抵消部分伤害。',
        cultivationMethod: '将灵气汇聚于皮肤表层，形成保护膜。',
        requirements: '无特殊要求',
        sideEffects: '灵气消耗较大，不宜长时间维持'
      },
      {
        id: 'td02', name: '金钟罩', grade: 'SR', realm: 'deng tang', 
        effect: { defense: 1.25 }, price: 100,
        desc: '金刚不坏之身',
        details: '金钟罩修炼至深处可成就金刚不坏之身，刀枪不入，水火不侵。此功法出自佛门，后传入修仙界。',
        cultivationMethod: '需承受外力击打，在打击中磨练护体灵气。',
        requirements: '需有一定炼体基础',
        sideEffects: '修炼过程痛苦异常'
      },
      {
        id: 'td03', name: '玄冰盾', grade: 'SR', realm: 'rong hui', 
        effect: { defense: 1.3, element: '水' }, price: 150,
        desc: '寒冰护盾',
        details: '以水属性灵气凝聚成冰盾，防御力极强且可反弹部分伤害。',
        cultivationMethod: '将水属性灵气凝聚成特定形状，形成护盾。',
        requirements: '需拥有水属性灵根',
        sideEffects: '在炎热环境效果减弱'
      },
      {
        id: 'td04', name: '戊土神光', grade: 'SSR', realm: 'chu shen', 
        effect: { defense: 1.6, element: '土' }, price: 1200,
        desc: '厚土之力',
        details: '戊土神光可引动大地之力，形成无比厚实的防护。此功法修炼至深处号称万法不侵。',
        cultivationMethod: '需感悟大地厚重之道，将大地之力引入体内。',
        requirements: '需拥有土属性灵根，且感悟土之大道',
        sideEffects: '移动速度会有所下降'
      },
      {
        id: 'td05', name: '不灭金身', grade: 'SSR', realm: 'fan pu', 
        effect: { defense: 1.8 }, price: 2000,
        desc: '不死之身',
        details: '不灭金身是佛门至高护体功法，修炼至圆满可滴血重生。',
        cultivationMethod: '需在佛门圣地修炼，接受金刚灌顶。',
        requirements: '需有佛缘，或加入佛门',
        sideEffects: '修炼进度极慢'
      }
    ]
  },

  auxiliary: {
    categoryName: '辅助秘法',
    description: '此类功法提升各项辅助能力，如速度、神识等',
    difficulty: '各有侧重，博而不精',
    tips: '辅助功法可在关键时刻发挥奇效',
    techniques: [
      {
        id: 'ta01', name: '轻身术', grade: 'R', realm: 'chu kui', 
        effect: { speed: 1.1 }, price: 0,
        desc: '身轻如燕',
        details: '最简单的身法类功法，可小幅提升移动速度和闪避能力。',
        cultivationMethod: '修炼特殊的呼吸和步伐配合。',
        requirements: '无特殊要求',
        sideEffects: '消耗灵气较快'
      },
      {
        id: 'ta02', name: '神识诀', grade: 'SR', realm: 'deng tang', 
        effect: { spirit: 1.2 }, price: 80,
        desc: '增强神识',
        details: '神识诀可增强修士的神识强度，提升感知范围和神识攻击防御能力。',
        cultivationMethod: '通过冥想和观想练习提升神识。',
        requirements: '需有一定修为基础',
        sideEffects: '神识消耗过度可能导致头痛'
      },
      {
        id: 'ta03', name: '隐匿术', grade: 'SR', realm: 'rong hui', 
        effect: { stealth: 1.3 }, price: 120,
        desc: '隐藏气息',
        details: '隐匿术可隐藏自身气息，用于潜入或逃跑。此功法是杀手和盗贼的最爱。',
        cultivationMethod: '收敛全身灵气波动，与环境融为一体。',
        requirements: '需心境平和，能够完全收敛气息',
        sideEffects: '使用时无法攻击'
      },
      {
        id: 'ta04', name: '天眼通', grade: 'SSR', realm: 'chu shen', 
        effect: { insight: 1.5 }, price: 1000,
        desc: '看破虚妄',
        details: '天眼通可看穿一切幻象和隐身术，洞察敌人弱点。',
        cultivationMethod: '需开启天眼穴位，以特殊方法修炼。',
        requirements: '需有特殊体质或功法配合',
        sideEffects: '过度使用可能导致眼睛受损'
      },
      {
        id: 'ta05', name: '缩地成寸', grade: 'SSR', realm: 'deng feng', 
        effect: { speed: 1.8 }, price: 1500,
        desc: '一步千里',
        details: '缩地成寸是极致的身法神通，一步迈出可达千里之外。',
        cultivationMethod: '需感悟空间之道，修炼难度极高。',
        requirements: '需有空间感悟或特殊灵根',
        sideEffects: '消耗极大，不可连续使用'
      }
    ]
  },

  special: {
    categoryName: '特殊功法',
    description: '此类功法极为稀有，功能特殊，效果强大',
    difficulty: '修炼困难，条件苛刻',
    tips: '特殊功法往往有逆转战局的奇效',
    techniques: [
      {
        id: 'ts01', name: '夺天造化功', grade: 'SSR', realm: 'fan pu', 
        effect: { all: 1.5 }, price: 3000,
        desc: '夺取天地造化',
        details: '夺天造化功可短暂借用天地之力，短时间内大幅提升全属性。此功法有伤天和，不到万不得已不应使用。',
        cultivationMethod: '需在天地之力浓郁之地修炼，感悟造化之道。',
        requirements: '需有大气运，或特定机缘',
        sideEffects: '使用后会有虚弱期'
      },
      {
        id: 'ts02', name: '大道归一诀', grade: 'SSR', realm: 'tian ren', 
        effect: { all: 2.0 }, price: 5000,
        desc: '万法归一',
        details: '大道归一诀是传说中仙级功法，修炼至圆满可万法归一，返璞归真。此功法已接近仙法层次。',
        cultivationMethod: '需贯通所有功法要义，融会贯通。',
        requirements: '需精通多门功法，且有极高悟性',
        sideEffects: '修炼过程凶险异常'
      },
      {
        id: 'ts03', name: '轮回转生术', grade: 'SSR', realm: 'tian ren', 
        effect: { special: 'rebirth' }, price: 8000,
        desc: '死后重生',
        details: '轮回转生术可在陨落后保留神识转世重生，保留部分前世修为。这是修仙界最逆天的功法之一。',
        cultivationMethod: '需在陨落前提前布置转生阵法。',
        requirements: '需提前准备，且有强大神识',
        sideEffects: '转生后修为大减'
      }
    ]
  }
}

// ========================================
// 详细的丹药扩展数据
// ========================================

export const PILLS_EXTENDED = {
  cultivation: {
    categoryName: '修炼丹药',
    description: '直接增加修为或提升修炼效率的丹药',
    tips: '长期服用需注意丹毒积累，定期化解',
    pills: [
      {
        id: 'pc01', name: '聚气丹', grade: 'R', effect: { cultivation: 50 }, price: 10,
        desc: '增加修为',
        details: '聚气丹是最基础的修炼丹药，由聚气草提炼而成，可直接增加少量修为。此丹虽然药效不强，但胜在价格便宜，适合新手使用。',
        ingredients: ['聚气草×3', '甘草×1'],
        difficulty: '简单，新手可炼',
        sideEffects: '可能积累少量丹毒'
      },
      {
        id: 'pc02', name: '培元丹', grade: 'SR', effect: { cultivation: 200 }, price: 50,
        desc: '稳固根基',
        details: '培元丹在增加修为的同时有稳固根基的功效，适合修为尚浅的修士使用。此丹可夯实经脉，为后续修炼打下良好基础。',
        ingredients: ['百年灵草×2', '朱果×1', '地灵乳×1'],
        difficulty: '中等，需要一定炼丹技术',
        sideEffects: '需搭配化毒丹使用'
      },
      {
        id: 'pc03', name: '凝婴丹', grade: 'SSR', effect: { cultivation: 1000 }, price: 300,
        desc: '助结元婴',
        details: '凝婴丹是专门为冲击元婴期炼制的丹药，可大幅提升凝结元婴的成功率。此丹极为珍贵，市面上极少流通。',
        ingredients: ['千年雪莲×1', '万年灵芝×1', '七彩神泥×1'],
        difficulty: '极难，需大师级炼丹师出手',
        sideEffects: '药力霸道，需谨慎使用'
      },
      {
        id: 'pc04', name: '悟道茶', grade: 'SR', effect: { cultivation: 1.2, wisdom: 50 }, price: 200,
        desc: '提升悟性',
        details: '悟道茶并非传统丹药，而是一种灵茶。饮用后可提升悟性，在修炼时有事半功倍之效。',
        ingredients: ['悟道茶叶×5', '灵泉之水×1'],
        difficulty: '需特殊茶具和手法',
        sideEffects: '不可过量饮用'
      },
      {
        id: 'pc05', name: '九转灵丹', grade: 'SSR', effect: { cultivation: 3000 }, price: 1000,
        desc: '九转灵丹',
        details: '九转灵丹需经过九次提炼，每一转都去掉一部分杂质，最终炼成。此丹药效惊人，可抵普通修士数年苦修。',
        ingredients: ['九叶灵芝×1', '麒麟血×1', '龙涎香×1', '各种百年灵草×10'],
        difficulty: '极难，需宗师级炼丹师',
        sideEffects: '可能有严重丹毒'
      }
    ]
  },

  breakthrough: {
    categoryName: '突破丹药',
    description: '提升境界突破成功率的丹药',
    tips: '突破前使用效果最佳',
    pills: [
      {
        id: 'pb01', name: '破境丹', grade: 'R', effect: { breakthroughRate: 0.1 }, price: 100,
        desc: '提升突破概率',
        details: '破境丹可提升10%的境界突破成功率，是最常用的突破辅助丹药。',
        ingredients: ['破境草×2', '灵石粉×1'],
        difficulty: '简单',
        sideEffects: '可能有些许丹毒'
      },
      {
        id: 'pb02', name: '悟道丹', grade: 'SR', effect: { breakthroughRate: 0.25 }, price: 500,
        desc: '增加悟性',
        details: '悟道丹不仅能提升突破成功率，还能临时提升悟性，增加突破时领悟大道的机会。',
        ingredients: ['悟道茶叶×3', '智慧果×1', '精神草×2'],
        difficulty: '较难',
        sideEffects: '使用后可能有短暂虚弱'
      },
      {
        id: 'pb03', name: '大道丹', grade: 'SSR', effect: { breakthroughRate: 0.5 }, price: 2000,
        desc: '大幅提升突破概率',
        details: '大道丹可提升50%的突破成功率，是冲击大境界时的首选丹药。一枚大道丹可价值连城。',
        ingredients: ['悟道茶叶×10', '大道之果×1', '天地灵乳×1'],
        difficulty: '极难，需宗师出手',
        sideEffects: '有丹毒风险'
      },
      {
        id: 'pb04', name: '天劫液', grade: 'SSR', effect: { breakthroughRate: 0.3,劫防: 0.5 }, price: 3000,
        desc: '渡劫专用',
        details: '天劫液是专门为渡劫期修士准备的丹药，可提升渡劫成功率和减轻天劫威力。',
        ingredients: ['渡劫草×1', '雷劫精华×1', '凤血×1'],
        difficulty: '极难',
        sideEffects: '使用后有一定虚弱期'
      }
    ]
  },

  battle: {
    categoryName: '战斗丹药',
    description: '战斗中临时提升各项属性的丹药',
    tips: '效果短暂，需在关键时刻使用',
    pills: [
      {
        id: 'pbt01', name: '大力丸', grade: 'R', effect: { attack: 1.2 }, price: 30,
        desc: '临时提升攻击',
        details: '服用后可在短时间内提升20%的攻击力，持续一个时辰。',
        ingredients: ['巨力草×2'],
        difficulty: '简单',
        sideEffects: '药效过后有短暂虚弱'
      },
      {
        id: 'pbt02', name: '金刚丹', grade: 'SR', effect: { defense: 1.3 }, price: 80,
        desc: '临时提升防御',
        details: '服用后可在短时间内提升30%的防御力，持续一个时辰。',
        ingredients: ['金刚石×1', '护体草×2'],
        difficulty: '中等',
        sideEffects: '移动速度略微下降'
      },
      {
        id: 'pbt03', name: '九转还魂丹', grade: 'SSR', effect: { revive: true }, price: 500,
        desc: '战斗复活一次',
        details: '服用后在战斗中死亡可原地复活一次，战斗力恢复到巅峰状态。此乃保命神器。',
        ingredients: ['还魂草×1', '生命之泉×1', '凤凰羽毛×1'],
        difficulty: '极难',
        sideEffects: '使用后需修养三天'
      },
      {
        id: 'pbt04', name: '疾风丹', grade: 'SR', effect: { speed: 1.5 }, price: 100,
        desc: '速度暴增',
        details: '服用后速度提升50%，用于逃跑或追击均有奇效。',
        ingredients: ['风灵草×3', '羽翼×1'],
        difficulty: '较难',
        sideEffects: '消耗极大，不可久用'
      }
    ]
  },

  special: {
    categoryName: '特殊丹药',
    description: '具有特殊功效的稀有丹药',
    tips: '效果特殊但价格昂贵',
    pills: [
      {
        id: 'ps01', name: '洗髓丹', grade: 'SR', effect: { rootChange: true }, price: 1000,
        desc: '改变灵根属性',
        details: '洗髓丹可洗筋伐髓，改变修士的灵根属性。但有一定风险，可能导致灵根退化。成功率约为70%。',
        ingredients: ['洗髓草×3', '易筋花×1', '血脉果×1'],
        difficulty: '极难，需大师级炼丹师',
        sideEffects: '有30%概率导致灵根退化'
      },
      {
        id: 'ps02', name: '寿元丹', grade: 'SSR', effect: { lifespan: 100 }, price: 3000,
        desc: '增加百年寿元',
        details: '寿元丹可增加百年寿元，是修仙界最受欢迎的丹药之一。但每人最多只能服用三颗，多则无效。',
        ingredients: ['延寿草×1', '蟠桃×1', '龙龟甲×1'],
        difficulty: '极难',
        sideEffects: '不可叠加使用'
      },
      {
        id: 'ps03', name: '塑仙丹', grade: 'SSR', effect: {体质: '仙灵之体' }, price: 10000,
        desc: '成就仙灵之体',
        details: '塑仙丹可重塑体质，成就仙灵之体。此乃逆天改命之丹，服用后修炼速度大幅提升，且对灵气亲和力达到极致。',
        ingredients: ['仙根草×1', '混沌之气×1', '大道之血×1'],
        difficulty: '仅在传说中存在',
        sideEffects: '服用过程极为痛苦'
      }
    ]
  }
}

// ========================================
// 详细的境界设定
// ========================================

export const REALM_EXTENDED = {
  'chu kui': {
    name: '初窥',
    icon: '🔰',
    color: 'bronze',
    lifespan: '100年',
    cultivationRequirement: '0-999',
    description: '初窥门径，正式踏入修仙之路',
    details: `【境界概述】
炼气期是修仙的起点，修士在此阶段开始吸纳天地灵气入体，在经脉中周天运转，逐步改变体质。

【修炼特点】
灵气稀薄：此时修士吸纳的灵气量较少，需不断积累
经脉脆弱：经脉尚未完全通畅，修炼需循序渐进
根基不稳：此阶段打下的根基将影响后续发展

【修炼要点】
1. 每日坚持吸纳灵气，不可懈怠
2. 注意打磨根基，根基越扎实后期越强
3. 尽量选择灵气浓郁之地修炼
4. 可服用聚气丹辅助修炼

【战斗力】
炼气期修士可轻松击败十余名普通壮汉
但尚无法御器飞行

【寿元】
炼气期修士寿元约百年
若百年内无法突破，将坐化身亡`,
    breakthroughDifficulty: '简单',
    tips: '炼气期是打基础的关键时期，不要急于求成',
    relatedPlaces: ['灵气山谷', '新手试炼场', '门派山脚'],
    enemies: ['野兽', '小妖', '盗匪']
  },
  
  'deng tang': {
    name: '登堂',
    icon: '🌟',
    color: 'jade',
    lifespan: '200年',
    cultivationRequirement: '1000-2999',
    description: '登堂入室，已入修仙门径',
    details: `【境界概述】
筑基期是修仙的第一个大关卡，修士在此阶段将灵气凝聚成液态灵基，在丹田处形成灵气漩涡。

【修炼特点】
灵基初成：灵气在丹凝聚成灵基，质量决定未来成就
灵气化液：灵气由气态化为液态，储存量大幅提升
御器飞行：可御使法宝飞行，行动范围大幅增加

【修炼要点】
1. 灵基的品质决定了金丹的品质，需认真对待
2. 可以开始学习战斗功法，提升战力
3. 灵气消耗增加，需准备更多灵石
4. 可尝试进入秘境探险

【战斗力】
筑基期修士可轻松击败上百名炼气期
可御器飞行，攻击力强大

【寿元】
筑基期修士寿元约两百年
可通过服用寿元丹延长`,
    breakthroughDifficulty: '中等',
    tips: '灵基品质决定了金丹品质，务必认真对待',
    relatedPlaces: ['寒冰洞府', '筑基试炼', '门派内门'],
    enemies: ['筑基妖修', '魔道修士', '古修残魂']
  },
  
  'rong hui': {
    name: '融汇',
    icon: '💫',
    color: 'azure',
    lifespan: '500年',
    cultivationRequirement: '3000-7999',
    description: '融会贯通，灵气化为金丹',
    details: `【境界概述】
金丹期是修仙的重要关口，灵气在丹田凝聚成金色内丹。金丹修士在修仙界已属高手行列。

【修炼特点】
金丹初成：灵气凝聚成金丹，是为道基
灵气化丹：灵气储存在金丹中，量质齐升
金丹异象：凝结金丹时会引发天地异象

【修炼要点】
1. 金丹品质分为九品，一品为最上
2. 可开始修炼高阶功法
3. 可收徒授业，组建自己的势力
4. 需要开始积累资源为元婴做准备

【战斗力】
金丹期修士可轻易毁灭一座小城
在门派中通常担任长老职位

【寿元】
金丹期修士寿元约五百年
可通过服用寿元丹延长至七八百年`,
    breakthroughDifficulty: '困难',
    tips: '金丹品质决定未来成就，一品金丹有望突破化神',
    relatedPlaces: ['烈焰山谷', '金丹大比', '名山大川'],
    enemies: ['金丹妖王', '魔道长老', '古遗址守护']
  },
  
  'yuan ying': {
    name: '元婴',
    icon: '👶',
    color: 'vermilion',
    lifespan: '1000年',
    cultivationRequirement: '8000-19999',
    description: '金丹碎裂，元婴出窍',
    details: `【境界概述】
元婴期是修仙的高阶境界，金丹碎裂化为元婴。元婴修士已可称为大能，在修仙界拥有极高地位。

【修炼特点】
元婴出窍：元婴可离体而战，滴血重生
神识化形：神识可外放千米之远
感悟天地：开始感悟天地大道

【修炼要点】
1. 元婴初生极为脆弱，需小心保护
2. 可修炼神识功法，增强战力
3. 开始感悟大道，为化神做准备
4. 需要建立自己的道统

【战斗力】
元婴期修士可毁天灭地
元婴离体战斗，相当于两个修士

【寿元】
元婴期修士寿元约千年
渡劫失败可夺舍重生`,
    breakthroughDifficulty: '极难',
    tips: '元婴期需要开始感悟大道，悟性决定成就',
    relatedPlaces: ['上古遗迹', '元婴交流会', '洞天福地'],
    enemies: ['元婴老怪', '天劫', '域外天魔']
  },
  
  'hua shen': {
    name: '化神',
    icon: '🧘',
    color: 'gold',
    lifespan: '3000年',
    cultivationRequirement: '2000-49999',
    description: '化神返虚，沟通天地',
    details: `【境界概述】
化神期是修仙的分水岭，化神修士可沟通天地之力，引动天象变化。此等人物已是修仙界顶尖强者。

【修炼特点】
神识化神：神识与天地合一，感知力大增
天地之力：可借用天地之力作战
法则雏形：开始领悟法则之力

【修炼要点】
1. 需领悟至少一条完整大道
2. 可炼制身外化身
3. 开始为渡劫做准备
4. 需要积累海量资源

【战斗力】
化神期修士可改天换地
一人可灭一门派

【寿元】
化神期修士寿元约三千年
可活过数次大劫`,
    breakthroughDifficulty: '极难',
    tips: '化神需悟道，无悟性者终身止步于此',
    relatedPlaces: ['混沌空间', '化神劫域', '仙界碎片'],
    enemies: ['同阶修士', '天地大劫', '天道意志']
  },
  
  'lian xu': {
    name: '炼虚',
    icon: '🌌',
    color: 'spirit',
    lifespan: '5000年',
    cultivationRequirement: '50000-99999',
    description: '炼虚合道，穿梭虚空',
    details: `【境界概述】
炼虚期修士肉体与神识完美融合，可穿梭虚空。此等人物已是半仙之体，在修仙界凤毛麟角。

【修炼特点】
虚空穿梭：可在虚空中穿行，来去自如
万法归一：所学功法开始融会贯通
法则掌控：初步掌控大道法则

【修炼要点】
1. 需贯通多条大道
2. 可开辟自己的小世界
3. 需要寻找成仙契机
4. 开始准备渡劫事宜

【战斗力】
炼虚期修士可破碎虚空
法则之力可压制低阶修士`,
    breakthroughDifficulty: '难如登天',
    tips: '炼虚期每一步都需要海量积累',
    relatedPlaces: ['虚空裂缝', '仙界入口', '混沌边缘'],
    enemies: ['同阶存在', '虚空巨兽', '天道法则']
  },
  
  'he ti': {
    name: '合体',
    icon: '👑',
    color: 'paper',
    lifespan: '8000年',
    cultivationRequirement: '100000-199999',
    description: '合体圆满，返璞归真',
    details: `【境界概述】
合体期修士肉体与神识完美融合，可化身千万。此等人物已是修仙界传说中的存在。

【修炼特点】
化身千万：一人可化万千分身
返璞归真：气息内敛，看不出修为
大道通明：对大道理解趋于圆满

【修炼要点】
1. 需将所有功法修炼至圆满
2. 开始凝练仙力
3. 需要准备渡仙劫
4. 需要寻找成仙之法

【战斗力】
合体期修士可创造一方小世界
一人可敌数名炼虚`,
    breakthroughDifficulty: '几乎不可能',
    tips: '合体期需要大机缘大气运',
    relatedPlaces: ['仙界通道', '远古遗迹', '神界碎片'],
    enemies: ['同阶大能', '仙界下凡者', '大道意志']
  },
  
  'da cheng': {
    name: '大乘',
    icon: '☀️',
    color: 'darkgold',
    lifespan: '10000年',
    cultivationRequirement: '200000-499999',
    description: '大乘期至，半仙之体',
    details: `【境界概述】
大乘期是修仙的巅峰境界，半只脚已踏入仙门。大乘修士寿元万年，在修仙界拥有至高地位。

【修炼特点】
半仙之体：肉体已开始向仙体转化
仙力初成：体内开始凝聚仙力
渡劫准备：万事俱备，只待渡劫

【修炼要点】
1. 需要积累足够功德
2. 需要寻找渡劫之法
3. 需要准备渡劫宝物
4. 需要选择渡劫时机

【战斗力】
大乘期修士可与仙人一战
在修仙界是无敌存在`,
    breakthroughDifficulty: '前无古人',
    tips: '大乘期每进一步都难如登天',
    relatedPlaces: ['渡劫台', '仙界边缘', '混沌深处'],
    enemies: ['天劫', '心魔', '天道考验']
  },
  
  'du jie': {
    name: '渡劫',
    icon: '⚡',
    color: 'crimson',
    lifespan: '永恒',
    cultivationRequirement: '500000+',
    description: '渡劫成功，飞升仙界',
    details: `【境界概述】
渡劫期是修仙的最后一步，渡过天劫即可飞升仙界，与天地同寿。

【修炼特点】
天劫降世：经历九重天劫考验
仙力转化：灵气完全转化为仙力
肉体成圣：肉体成就仙体

【修炼要点】
1. 需准备齐全渡劫宝物
2. 需寻找护法之人
3. 需选择渡劫之地
4. 需做好陨落准备

【战斗力】
渡劫期修士在修仙界已是无敌
但在天劫面前依然脆弱`,
    breakthroughDifficulty: '九死一生',
    tips: '渡劫成功率极低，需做好完全准备',
    relatedPlaces: ['渡劫台', '天劫之海', '升仙之门'],
    enemies: ['天劫', '心魔', '同阶修士']
  }
}

export default {
  WORLD_LORE,
  TECHNIQUE_EXTENDED,
  PILLS_EXTENDED,
  REALM_EXTENDED
}
