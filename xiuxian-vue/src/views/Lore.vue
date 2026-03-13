<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user'
import { WORLD_LORE, TECHNIQUE_EXTENDED, PILLS_EXTENDED, REALM_EXTENDED } from '../utils/contentData'

const userStore = useUserStore()

const activeSection = ref('intro')
const expandedItems = ref({})

const sections = [
  { id: 'intro', name: '世界观', icon: '🌟' },
  { id: 'technique', name: '功法详解', icon: '📖' },
  { id: 'pills', name: '丹药详解', icon: '💊' },
  { id: 'realm', name: '境界详解', icon: '🧘' }
]

const loreContent = computed(() => {
  return WORLD_LORE[activeSection.value] || WORLD_LORE['开篇']
})

const techniqueContent = computed(() => {
  const categories = Object.entries(TECHNIQUE_EXTENDED)
  return categories.map(([key, val]) => ({
    id: key,
    ...val,
    techniques: val.techniques || []
  }))
})

const pillContent = computed(() => {
  const categories = Object.entries(PILLS_EXTENDED)
  return categories.map(([key, val]) => ({
    id: key,
    ...val,
    pills: val.pills || []
  }))
})

const realmContent = computed(() => {
  return Object.entries(REALM_EXTENDED).map(([key, val]) => ({
    id: key,
    ...val
  }))
})

const toggleExpand = (id) => {
  expandedItems.value[id] = !expandedItems.value[id]
}

const isExpanded = (id) => {
  return expandedItems.value[id] === true
}

const getRealmColor = (color) => {
  const colors = {
    bronze: 'from-amber-700 to-amber-900',
    jade: 'from-emerald-500 to-emerald-700',
    azure: 'from-blue-400 to-blue-600',
    vermilion: 'from-red-500 to-red-700',
    gold: 'from-yellow-400 to-yellow-600',
    spirit: 'from-purple-400 to-purple-600',
    paper: 'from-gray-300 to-gray-500',
    darkgold: 'from-yellow-600 to-yellow-800',
    crimson: 'from-red-600 to-red-800'
  }
  return colors[color] || 'from-gray-500 to-gray-700'
}
</script>

<template>
  <div class="lore-page max-w-6xl mx-auto px-3 md:px-4 py-6 md:py-8">
    <h1 class="text-3xl md:text-4xl font-bold text-center text-gold mb-1 md:mb-2">修仙百科</h1>
    <p class="text-center text-paper/60 mb-4 md:mb-6 text-sm md:text-base">修仙之道，博大精深</p>

    <!-- 导航标签 -->
    <div class="flex justify-center gap-1.5 md:gap-2 mb-5 md:mb-8 overflow-x-auto pb-2">
      <button
        v-for="section in sections"
        :key="section.id"
        @click="activeSection = section.id"
        :class="[
          'px-3 md:px-5 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 md:gap-2 text-sm md:text-base whitespace-nowrap active:scale-95',
          activeSection === section.id
            ? 'bg-gold text-ink font-bold'
            : 'bg-white/5 text-paper/70 hover:bg-white/10'
        ]"
      >
        <span>{{ section.icon }}</span>
        <span>{{ section.name }}</span>
      </button>
    </div>

    <!-- 世界观内容 -->
    <div v-if="activeSection === 'intro'" class="space-y-4">
      <div
        v-for="(item, key) in WORLD_LORE"
        :key="key"
        class="glass-card rounded-xl p-4 md:p-6"
      >
        <h2 class="text-xl md:text-2xl font-bold text-gold mb-3">{{ item.title }}</h2>
        <div class="text-sm md:text-base text-paper/80 whitespace-pre-line leading-relaxed">{{ item.content }}</div>
      </div>
    </div>

    <!-- 功法详解 -->
    <div v-else-if="activeSection === 'technique'" class="space-y-4">
      <div
        v-for="category in techniqueContent"
        :key="category.id"
        class="glass-card rounded-xl p-4 md:p-6"
      >
        <div class="flex items-center justify-between mb-3">
          <div>
            <h2 class="text-xl md:text-2xl font-bold text-gold">{{ category.categoryName }}</h2>
            <p class="text-xs md:text-sm text-paper/60 mt-1">{{ category.description }}</p>
          </div>
        </div>
        
        <p class="text-xs md:text-sm text-azure mb-4">{{ category.tips }}</p>
        
        <div class="space-y-2">
          <div
            v-for="tech in category.techniques"
            :key="tech.id"
            class="bg-white/5 rounded-lg overflow-hidden"
          >
            <button
              @click="toggleExpand(tech.id)"
              class="w-full flex items-center justify-between p-3 text-left hover:bg-white/5 transition-colors"
            >
              <div class="flex items-center gap-3">
                <span :class="[
                  'px-2 py-0.5 rounded text-xs font-bold',
                  tech.grade === 'SSR' ? 'bg-gold/20 text-gold' :
                  tech.grade === 'SR' ? 'bg-azure/20 text-azure' :
                  'bg-jade/20 text-jade'
                ]">{{ tech.grade }}</span>
                <span class="text-paper font-bold">{{ tech.name }}</span>
              </div>
              <span class="text-paper/50 text-lg transition-transform" :class="isExpanded(tech.id) ? 'rotate-180' : ''">▼</span>
            </button>
            
            <div v-if="isExpanded(tech.id)" class="px-3 pb-3 text-xs md:text-sm text-paper/70 space-y-2 border-t border-white/10 pt-3">
              <p>{{ tech.details }}</p>
              <div class="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <span class="text-azure">修炼方法：</span>
                  <span>{{ tech.cultivationMethod }}</span>
                </div>
                <div>
                  <span class="text-azure">修炼要求：</span>
                  <span>{{ tech.requirements }}</span>
                </div>
                <div class="col-span-2">
                  <span class="text-vermilion">注意事项：</span>
                  <span>{{ tech.sideEffects }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 丹药详解 -->
    <div v-else-if="activeSection === 'pills'" class="space-y-4">
      <div
        v-for="category in pillContent"
        :key="category.id"
        class="glass-card rounded-xl p-4 md:p-6"
      >
        <h2 class="text-xl md:text-2xl font-bold text-gold mb-2">{{ category.categoryName }}</h2>
        <p class="text-xs md:text-sm text-azure mb-4">{{ category.tips }}</p>
        
        <div class="space-y-2">
          <div
            v-for="pill in category.pills"
            :key="pill.id"
            class="bg-white/5 rounded-lg overflow-hidden"
          >
            <button
              @click="toggleExpand(pill.id)"
              class="w-full flex items-center justify-between p-3 text-left hover:bg-white/5 transition-colors"
            >
              <div class="flex items-center gap-3">
                <span :class="[
                  'px-2 py-0.5 rounded text-xs font-bold',
                  pill.grade === 'SSR' ? 'bg-gold/20 text-gold' :
                  pill.grade === 'SR' ? 'bg-azure/20 text-azure' :
                  'bg-jade/20 text-jade'
                ]">{{ pill.grade }}</span>
                <span class="text-paper font-bold">{{ pill.name }}</span>
              </div>
              <span class="text-paper/50 text-lg transition-transform" :class="isExpanded(pill.id) ? 'rotate-180' : ''">▼</span>
            </button>
            
            <div v-if="isExpanded(pill.id)" class="px-3 pb-3 text-xs md:text-sm text-paper/70 space-y-2 border-t border-white/10 pt-3">
              <p>{{ pill.details }}</p>
              <div class="grid grid-cols-2 gap-2 mt-2">
                <div class="col-span-2">
                  <span class="text-azure">炼制药材：</span>
                  <span>{{ pill.ingredients?.join('、') }}</span>
                </div>
                <div>
                  <span class="text-azure">炼制难度：</span>
                  <span>{{ pill.difficulty }}</span>
                </div>
                <div>
                  <span class="text-vermilion">副作用：</span>
                  <span>{{ pill.sideEffects }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 境界详解 -->
    <div v-else-if="activeSection === 'realm'" class="space-y-4">
      <div
        v-for="realm in realmContent"
        :key="realm.id"
        class="glass-card rounded-xl overflow-hidden"
      >
        <button
          @click="toggleExpand(realm.id)"
          class="w-full flex items-center gap-4 p-4 text-left hover:bg-white/5 transition-colors"
        >
          <div :class="['w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center text-white font-bold', getRealmColor(realm.color)]">
            {{ realm.icon }}
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-paper">{{ realm.name }}</h3>
            <p class="text-xs text-paper/60">{{ realm.description }}</p>
          </div>
          <div class="text-right">
            <div class="text-xs text-gold">寿元: {{ realm.lifespan }}</div>
            <div class="text-paper/50 text-lg transition-transform" :class="isExpanded(realm.id) ? 'rotate-180' : ''">▼</div>
          </div>
        </button>
        
        <div v-if="isExpanded(realm.id)" class="px-4 pb-4 text-xs md:text-sm text-paper/70 border-t border-white/10">
          <div class="pt-3 space-y-3 whitespace-pre-line">{{ realm.details }}</div>
          
          <div class="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-white/10">
            <div>
              <span class="text-azure font-bold">突破难度：</span>
              <span>{{ realm.breakthroughDifficulty }}</span>
            </div>
            <div>
              <span class="text-gold font-bold">修炼建议：</span>
              <span>{{ realm.tips }}</span>
            </div>
            <div>
              <span class="text-vermilion font-bold">相关地点：</span>
              <span>{{ realm.relatedPlaces?.join('、') }}</span>
            </div>
            <div>
              <span class="text-paper/50 font-bold">常见敌人：</span>
              <span>{{ realm.enemies?.join('、') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lore-page {
  padding-bottom: 100px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 168, 83, 0.15);
}
</style>
