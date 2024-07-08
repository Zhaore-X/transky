import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "药娘的天空",
  description: "一个 2000 年代的跨性别者的故事。",
  head: [
    ["link", { rel: "icon", href: "/progynova.png" }],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-5W4FMPMLT3",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-5W4FMPMLT3');",
    ],
  ],
  lang: "zh-CN",
  cleanUrls: true,
  srcDir: "./src",
  srcExclude: ["**/SUMMARY.md"],
  lastUpdated: true,
  sitemap: {
    hostname: "https://transky.mtf.wiki",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/progynova.png",
    nav: [
      { text: "正文", link: "/foreword" },
      { text: "关于", link: "/about" },
    ],
    sidebar: generateSidebar({
      documentRootPath: "/src",
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      manualSortFileNameByPriority: ["foreword.md", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "afterword.md", "illustrations.md"],
      collapsed: true,
      excludeFiles: ["about.md", "SUMMARY.md"],
    }),
    outline: false,
    socialLinks: [{ icon: "github", link: "https://github.com/transky-book/transky" }],
    footer: {
      message:
        '基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">CC BY-NC-SA 4.0</a> 许可发布',
      copyright:
        '版权所有 © 2016-2024 <a href="https://www.weibo.com/p/1005055513855401">乱世银娘</a>、<a href="https://github.com/transky-book/transky/graphs/contributors">Transky 全体贡献者</a>',
    },
    editLink: {
      pattern:
        "https://github.com/transky-book/transky/edit/main/src/:path",
      text: "在 GitHub 上编辑此页面",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索本书",
                buttonAriaLabel: "搜索本书",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    docFooter: {
      prev: "上一章",
      next: "下一章",
    },
    darkModeSwitchLabel: "深色模式",
    lightModeSwitchTitle: "切换至浅色模式",
    darkModeSwitchTitle: "切换至深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    externalLinkIcon: true,
  },
});
