<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user'
import { TECHNIQUES, TECHNIQUE_CATEGORIES } from '../utils/contentData'

const userStore = useUserStore()

const activeCategory = ref('cultivation')

const categories = Object.entries(TECHNIQUE_CATEGORIES).map(([key, val]) => ({
  id: key,
  ...val
}))

const techniqueList = computed(() => {
  return TECHNIQUES[activeCategory.value] || []
})

const canLearn = (tech) => {
  const realmIndex = Object.keys(userStore.realmData).indexOf(tech.realm)
  return userStore.realmIndex >= realmIndex
}

const learnTechnique = (tech) => {
  if (!canLearn(tech)) {
    alert(`需要达到【${userStore.realmData[tech.realm]?.name}】境界才能学习此功法`)
    return
  }
  
  if (tech.price > 0 && userStore.userData.lingqi < tech.price) {
    alert('灵石不足！')
    return
  }
  
  if (tech.price > 0) {
    userStore.consumeLingqi(tech.price)
  }
  
  userStore.userData.techniques = userStore.userData.techniques || []
  if (!userStore.userData.techniques.find(t => t.id === tech.id)) {
    userStore.userData.techniques.push(tech)
    userStore.saveUserData()
    alert(`恭喜学会【${tech.name}】！`)
  } else {
    alert('你已学会此功法')
  }
}

const isLearned = (techId) => {
  return userStore.userData.techniques?.some(t => t.id === techId)
}

const getGradeColor = (grade) => {
  const colors = {
    'SSR': 'text-gold border-gold bg-gold/10',
    'SR': 'text-azure border-azure bg-azure/10',
    'R': 'text-jade border-jade bg-jade/10'
  }
  return colors[grade] || 'text-paper border-paper'
}

const getGradeLabel = (grade) => {
  const labels = { 'SSR': '绝品', 'SR': '精品', 'R': '普通' }
  return labels[grade] || grade
}

const getEffectLabel = (key) => {
  const labels = {
    'cultivation': '修炼效率',
    'attack': '攻击',
    'defense': '防御',
    'spirit': '神识',
    'speed': '速度',
    'all': '全属性'
  }
  return labels[key] || key
}
</script>

<template>
  <div class="technique-page max-w-6xl mx-auto px-3 md:px-4 py-6 md:py-8">
    <h1 class="text-3xl md:text-4xl font-bold text-center text-gold mb-1 md:mb-2">功法秘籍</h1>
    <p class="text-center text-paper/60 mb-5 md:mb-8 text-sm md:text-base">修炼无止境，功法通大道</p>

    <!-- 拥有的功法 -->
    <div v-if="userStore.userData.techniques?.length" class="mb-5 md:mb-8">
      <h3 class="text-gold font-bold mb-2 md:mb-3 text-sm md:text-base">📚 已学功法</h3>
      <div class="flex flex-wrap gap-1.5 md:gap-2">
        <span 
          v-for="tech in userStore.userData.techniques" 
          :key="tech.id"
          class="px-2.5 md:px-3 py-1 bg-gold/20 text-gold text-xs md:text-sm rounded-full"
        >
          {{ tech.name }}
        </span>
      </div>
    </div>

    <!-- 分类标签 -->
    <div class="flex justify-center gap-1.5 md:gap-2 mb-5 md:mb-8 overflow-x-auto pb-2">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="activeCategory = cat.id"
        :class="[
          'px-4 md:px-6 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 md:gap-2 text-sm md:text-base whitespace-nowrap active:scale-95',
          activeCategory === cat.id
            ? 'bg-gold text-ink font-bold'
            : 'bg-white/5 text-paper/70 hover:bg-white/10'
        ]"
      >
        <span>{{ cat.icon }}</span>
        <span>{{ cat.name }}</span>
      </button>
    </div>

    <!-- 功法列表 -->
    <div class="grid sm:grid-cols-2 gap-3 md:gap-4">
      <div
        v-for="tech in techniqueList"
        :key="tech.id"
        :class="[
          'technique-card glass-card rounded-xl p-3 md:p-5 border-l-4 transition-all duration-200 active:scale-[0.99]',
          getGradeColor(tech.grade)
        ]"
      >
        <div class="flex items-start justify-between mb-2 md:mb-3 gap-2">
          <div class="min-w-0">
            <h3 class="text-lg md:text-xl font-bold text-paper truncate">{{ tech.name }}</h3>
            <span :class="['text-xs px-2 py-0.5 md:py-1 rounded mt-1 inline-block', getGradeColor(tech.grade)]">
              {{ getGradeLabel(tech.grade) }}
            </span>
          </div>
          <div class="text-right flex-shrink-0">
            <span v-if="tech.price === 0" class="text-jade text-sm">免费</span>
            <span v-else class="text-gold text-sm">💎 {{ tech.price }}</span>
          </div>
        </div>
        
        <p class="text-xs md:text-sm text-paper/60 mb-2 md:mb-3 line-clamp-2">{{ tech.desc }}</p>
        
        <!-- 功法效果 -->
        <div class="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
          <span 
            v-for="(value, key) in tech.effect" 
            :key="key"
            class="text-[10px] md:text-xs px-2 py-0.5 md:py-1 bg-white/5 rounded"
          >
            {{ getEffectLabel(key) }} +{{ Math.round((value - 1) * 100) }}%
          </span>
        </div>
        
        <!-- 学习要求 -->
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs text-paper/50 truncate">
            境界: {{ userStore.realmData[tech.realm]?.name }}
          </span>
          
          <button
            v-if="isLearned(tech.id)"
            class="px-3 md:px-4 py-1.5 md:py-1 bg-jade/20 text-jade text-xs md:text-sm rounded-lg"
            disabled
          >
            已学会
          </button>
          <button
            v-else
            @click="learnTechnique(tech)"
            :disabled="!canLearn(tech)"
            :class="[
              'px-3 md:px-4 py-1.5 md:py-1 text-xs md:text-sm rounded-lg transition-all duration-200 active:scale-95',
              canLearn(tech) 
                ? 'bg-gold/20 text-gold hover:bg-gold/30' 
                : 'bg-white/5 text-paper/50 cursor-not-allowed'
            ]"
          >
            {{ canLearn(tech) ? '学习' : '境界不足' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.technique-page {
  padding-bottom: 100px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 168, 83, 0.15);
}

.technique-card:hover {
  border-color: rgba(212, 168, 83, 0.3);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
