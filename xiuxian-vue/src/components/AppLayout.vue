<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../stores/user'
import BackToTop from './BackToTop.vue'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { name: '首页', path: '/', icon: '🏠' },
  { name: '百科', path: '/lore', icon: '📚' },
  { name: '境界', path: '/realm', icon: '🧘' },
  { name: '功法', path: '/technique', icon: '📜' },
  { name: '丹药', path: '/alchemy', icon: '⚗️' },
  { name: '修炼', path: '/practice', icon: '⚡' },
  { name: '抽奖', path: '/gacha', icon: '🎰' },
  { name: '战斗', path: '/battle', icon: '⚔️' },
  { name: '任务', path: '/task', icon: '📋' },
  { name: '成就', path: '/achievement', icon: '🏆' },
  { name: '资讯', path: '/news', icon: '📰' },
]

const isActive = (path) => {
  return route.path === path
}

const navigateTo = (path) => {
  router.push(path)
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  userStore.initUserData()
  const loginResult = userStore.checkDailyLogin()
  if (loginResult) {
    console.log(`签到成功！连续${loginResult.consecutiveDays}天，获得${loginResult.reward}灵石`)
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="app-layout min-h-screen bg-ink">
    <!-- 顶部导航 -->
    <header 
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-header-scrolled shadow-lg' : 'glass-header'
      ]"
      role="banner"
    >
      <div class="max-w-7xl mx-auto px-3 md:px-4">
        <div class="flex items-center justify-between h-14 md:h-16">
          <!-- Logo -->
          <button 
            @click="navigateTo('/')"
            class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="返回首页"
          >
            <span class="text-2xl md:text-3xl" aria-hidden="true">⛩️</span>
            <span class="font-bold text-gold text-lg md:text-xl hidden xs:block">太虚仙门</span>
          </button>

          <!-- 桌面导航 -->
          <nav 
            class="hidden lg:flex items-center gap-1" 
            role="navigation" 
            aria-label="主导航"
          >
            <button
              v-for="item in navItems"
              :key="item.path"
              @click="navigateTo(item.path)"
              :class="[
                'nav-item px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                isActive(item.path)
                  ? 'bg-gold/20 text-gold'
                  : 'text-paper/70 hover:text-paper hover:bg-white/5 active:scale-95'
              ]"
              :aria-current="isActive(item.path) ? 'page' : undefined"
            >
              <span class="mr-1" aria-hidden="true">{{ item.icon }}</span>
              {{ item.name }}
            </button>
          </nav>

          <!-- 平板导航 -->
          <nav 
            class="hidden md:flex lg:hidden items-center gap-1" 
            role="navigation"
          >
            <button
              v-for="item in navItems.slice(0, 6)"
              :key="item.path"
              @click="navigateTo(item.path)"
              :class="[
                'nav-item px-2 py-2 rounded-lg text-sm transition-all duration-200',
                isActive(item.path)
                  ? 'bg-gold/20 text-gold'
                  : 'text-paper/70 hover:text-paper hover:bg-white/5 active:scale-95'
              ]"
              :aria-current="isActive(item.path) ? 'page' : undefined"
            >
              <span aria-hidden="true">{{ item.icon }}</span>
            </button>
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="p-2 text-paper/70 hover:text-paper transition-colors"
              aria-label="展开更多菜单"
              :aria-expanded="isMobileMenuOpen"
            >
              <span class="text-lg">⋯</span>
            </button>
          </nav>

          <!-- 用户信息 -->
          <div class="flex items-center gap-2 md:gap-3">
            <div 
              class="flex items-center gap-1.5 md:gap-2 bg-gold/10 px-2.5 md:px-3 py-1 rounded-full"
              role="status"
              aria-label="灵石数量"
            >
              <span class="text-gold text-sm md:text-base" aria-hidden="true">💎</span>
              <span class="text-gold text-sm md:text-base font-bold tabular-nums">
                {{ userStore.userData.lingqi }}
              </span>
            </div>

            <!-- 移动端菜单按钮 -->
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="md:hidden p-2 text-paper/70 hover:text-paper transition-colors rounded-lg active:bg-white/10"
              :aria-label="isMobileMenuOpen ? '关闭菜单' : '打开菜单'"
              :aria-expanded="isMobileMenuOpen"
            >
              <span class="text-xl w-6 h-6 flex items-center justify-center" aria-hidden="true">
                {{ isMobileMenuOpen ? '✕' : '☰' }}
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <transition name="slide">
        <div 
          v-if="isMobileMenuOpen" 
          class="md:hidden glass-header border-t border-gold/20"
          role="navigation"
          aria-label="移动导航"
        >
          <nav class="flex flex-col p-2 max-h-[70vh] overflow-y-auto">
            <button
              v-for="item in navItems"
              :key="item.path"
              @click="navigateTo(item.path)"
              :class="[
                'nav-item px-4 py-3.5 rounded-lg text-left text-base transition-all duration-200 active:scale-95',
                isActive(item.path)
                  ? 'bg-gold/20 text-gold'
                  : 'text-paper/70 hover:text-paper hover:bg-white/5'
              ]"
              :aria-current="isActive(item.path) ? 'page' : undefined"
            >
              <span class="mr-3 text-lg" aria-hidden="true">{{ item.icon }}</span>
              {{ item.name }}
            </button>
          </nav>
        </div>
      </transition>
    </header>

    <!-- 点击遮罩关闭移动端菜单 -->
    <transition name="fade">
      <div 
        v-if="isMobileMenuOpen" 
        class="fixed inset-0 z-40 bg-black/50 md:hidden"
        @click="closeMobileMenu"
        aria-hidden="true"
      ></div>
    </transition>

    <!-- 主内容区 -->
    <main 
      class="pt-14 md:pt-16 min-h-screen"
      role="main"
      tabindex="-1"
    >
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 状态栏 -->
    <footer 
      class="fixed bottom-0 left-0 right-0 glass-footer md:hidden z-40"
      role="contentinfo"
    >
      <nav 
        class="flex items-center justify-around py-2"
        role="navigation"
        aria-label="底部快捷导航"
      >
        <button
          v-for="item in navItems.slice(0, 5)"
          :key="item.path"
          @click="navigateTo(item.path)"
          :class="[
            'flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-all duration-200 active:scale-90 min-w-[60px]',
            isActive(item.path)
              ? 'text-gold'
              : 'text-paper/50 hover:text-paper/80'
          ]"
          :aria-current="isActive(item.path) ? 'page' : undefined"
          :aria-label="item.name"
        >
          <span class="text-lg" aria-hidden="true">{{ item.icon }}</span>
          <span class="text-xs">{{ item.name }}</span>
        </button>
      </nav>
    </footer>
    <BackToTop />
  </div>
</template>

<style scoped>
.glass-header {
  background: rgba(10, 14, 20, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(212, 168, 83, 0.1);
}

.glass-header-scrolled {
  background: rgba(10, 14, 20, 0.95);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(212, 168, 83, 0.2);
}

.glass-footer {
  background: rgba(10, 14, 20, 0.92);
  backdrop-filter: blur(16px);
  border-top: 1px solid rgba(212, 168, 83, 0.15);
}

.nav-item {
  font-weight: 500;
  min-height: 44px;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 380px) {
  .xs\:block {
    display: none;
  }
}
</style>
