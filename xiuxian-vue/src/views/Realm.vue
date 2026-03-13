<script setup>
import { computed } from 'vue'
import { useUserStore } from '../stores/user'

const userStore = useUserStore()

const realms = computed(() => {
  const realmList = []
  const realmKeys = Object.keys(userStore.realmData)
  
  realmKeys.forEach(key => {
    const realm = userStore.realmData[key]
    const index = realmKeys.indexOf(key)
    const isUnlocked = index <= userStore.realmIndex
    const isCurrent = index === userStore.realmIndex
    
    realmList.push({
      key,
      ...realm,
      index,
      isUnlocked,
      isCurrent
    })
  })
  
  return realmList
})

const canBreakthrough = computed(() => {
  return userStore.userData.cultivation >= 1000
})

const getRealmColor = (color) => {
  const colors = {
    bronze: 'from-amber-700 to-amber-900 border-amber-600/50',
    jade: 'from-emerald-600 to-emerald-800 border-emerald-500/50',
    azure: 'from-blue-500 to-blue-700 border-blue-400/50',
    vermilion: 'from-red-600 to-red-800 border-red-500/50',
    gold: 'from-yellow-500 to-yellow-700 border-yellow-400/50',
    spirit: 'from-teal-400 to-teal-600 border-teal-300/50',
    paper: 'from-gray-300 to-gray-500 border-gray-400/50',
    darkgold: 'from-yellow-600 to-yellow-800 border-yellow-500/50',
    crimson: 'from-red-700 to-red-900 border-red-600/50',
  }
  return colors[color] || 'from-gray-500 to-gray-700 border-gray-400/50'
}

const attemptBreakthrough = () => {
  if (!canBreakthrough.value) return
  
  const result = userStore.checkBreakthrough()
  
  if (result && result.success) {
    alert(`🎉 恭喜突破成功！

恭喜你突破至【${userStore.realmData[result.newRealm]?.name}】
实力大增，继续努力修炼吧！`)
  } else {
    alert(`💀 突破失败...

损失修为：-${result?.penalty || 300}
当前修为：${userStore.userData.cultivation}/1000

不要气馁，继续修炼积累修为！`)
  }
}

const combatPower = computed(() => {
  const base = 100
  const realmBonus = (userStore.realmIndex + 1) * 50
  const cultivationBonus = Math.floor(userStore.userData.cultivation / 10)
  const rootBonus = userStore.userData.rootType ? 30 : 0
  return base + realmBonus + cultivationBonus + rootBonus
})
</script>

<template>
  <div class="realm-page max-w-5xl mx-auto px-3 md:px-4 py-6 md:py-8">
    <h1 class="text-3xl md:text-4xl font-bold text-center text-gold mb-1 md:mb-2">境界体系</h1>
    <p class="text-center text-paper/60 mb-5 md:mb-8 text-sm md:text-base">感悟天道，突破极限</p>

    <!-- 用户状态 -->
    <div class="glass-card rounded-2xl p-4 md:p-6 mb-5 md:mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div>
          <div class="text-xs md:text-sm text-paper/50 mb-1">当前境界</div>
          <div class="text-2xl md:text-3xl font-bold text-gold">{{ userStore.currentRealm?.name }}</div>
          <div class="text-xs md:text-sm text-paper/60 mt-1">{{ userStore.currentRealm?.desc }}</div>
        </div>
        <div class="text-left sm:text-right">
          <div class="text-xs md:text-sm text-paper/50 mb-1">战力评估</div>
          <div class="text-2xl md:text-3xl font-bold text-vermilion tabular-nums">{{ combatPower }}</div>
        </div>
      </div>

      <!-- 修为进度 -->
      <div class="mb-4">
        <div class="flex justify-between text-xs md:text-sm mb-1.5">
          <span class="text-paper/70">修为进度</span>
          <span class="text-azure font-medium tabular-nums">{{ userStore.userData.cultivation }} / 1000</span>
        </div>
        <div class="h-2.5 md:h-3 bg-mystic rounded-full overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-azure to-gold transition-all duration-500 ease-out"
            :style="{ width: userStore.realmProgress + '%' }"
          ></div>
        </div>
      </div>

      <!-- 突破按钮 -->
      <button
        @click="attemptBreakthrough"
        :disabled="!canBreakthrough"
        class="w-full py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
        :class="canBreakthrough 
          ? 'bg-gradient-to-r from-vermilion/30 to-vermilion/20 border border-vermilion/50 text-paper hover:from-vermilion/40 hover:to-vermilion/30' 
          : 'bg-white/5 text-paper/40 border border-white/5'"
      >
        🚀 {{ canBreakthrough ? '尝试突破境界' : '修为不足，无法突破' }}
      </button>

      <p class="text-center text-xs text-paper/50 mt-2">突破成功率：{{ (userStore.breakthroughRate * 100).toFixed(1) }}%</p>
    </div>

    <!-- 境界列表 -->
    <div class="grid gap-3 md:gap-4">
      <div
        v-for="realm in realms"
        :key="realm.key"
        :class="[
          'realm-card glass-card rounded-xl p-4 md:p-5 transition-all duration-200',
          realm.isCurrent ? 'ring-2 ring-gold' : '',
          realm.isUnlocked ? 'opacity-100' : 'opacity-40'
        ]"
      >
        <div class="flex items-center gap-3 md:gap-4">
          <!-- 图标 -->
          <div :class="[
            'w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0',
            getRealmColor(realm.color)
          ]">
            {{ realm.icon }}
          </div>
          
          <!-- 信息 -->
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-0.5">
              <h3 class="font-bold text-paper text-lg md:text-xl">{{ realm.name }}</h3>
              <span v-if="realm.isCurrent" class="text-xs px-2 py-0.5 bg-gold/20 text-gold rounded-full">当前</span>
              <span v-if="realm.isUnlocked && !realm.isCurrent" class="text-xs px-2 py-0.5 bg-jade/20 text-jade rounded-full">已突破</span>
            </div>
            <p class="text-xs md:text-sm text-paper/60">{{ realm.desc }}</p>
          </div>
          
          <!-- 寿元 -->
          <div class="text-right flex-shrink-0">
            <div class="text-xs text-paper/50">寿元</div>
            <div class="text-sm md:text-base font-bold text-jade">{{ realm.lifespan }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.realm-page {
  padding-bottom: 100px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 168, 83, 0.15);
}

.realm-card:hover {
  border-color: rgba(212, 168, 83, 0.3);
}
</style>
