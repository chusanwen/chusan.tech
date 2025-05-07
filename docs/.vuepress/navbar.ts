import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: 'Java', link: '/notes/Java/java.md' },
  { text: 'Spring', link: '/notes/Spring/' },
  { text: 'SpringBoot', link: '/notes/SpringBoot/' },
  { text: 'SpringCloud', link: '/notes/SpringCloud/' },
  {
    text: 'Sql',
    items: [{ text: 'Mysql', link: '/notes/Mysql/README.md' },
            { text: 'Pgsql', link: '/notes/Pgsql/README.md' }
    ]
  },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
  {
    text: '测试',
    items: [{ text: '测试', link: '/notes/test/test1.md' }]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
])

