/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
   { text: 'Home', link: '/', icon: 'carbon:home' },
  { text: 'Blog', link: '/blog/', icon: 'carbon:blog' },
  { text: 'Notes', link: '/notes/', icon: 'carbon:notebook' },
  { text: 'Posts', link: '/posts/' },

  { text: 'Learning Map', 
    icon: 'gis:map-route', 
    items: [
      { text: 'Self-Learning Map', link: '/self-study/README.md', icon: 'mage:robot-wink' },
      { text: 'Big Picture', link: '/self-study/README.md', icon: 'mdi:book-open-page-variant-outline' },
    ]
  },
])
