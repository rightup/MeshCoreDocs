import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MeshCore Docs",
  description: "Official MeshCore Documentation - Secure Off-Grid Messaging System",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    logo: '/images/logo.png',
    siteTitle: 'Docs',


    nav: [
      { text: 'Home', link: '/' },
      { text: 'Software & Utilities', link: '/utilities/' },
      { text: 'Official Website', link: 'https://meshcore.co.uk' }
    ],


    sidebar: [
      {
        text: 'Getting Started',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/getting-started/overview/' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Configuration', link: '/getting-started/configuration' },
          { text: 'Troubleshooting', link: '/getting-started/troubleshooting' }
        ]
      },
      {
        text: 'Firmware',
        collapsed: true,
        items: [
          {
            text: 'Companion Radio',
            link: '/firmware/companion-radio',
            collapsed: true,
            items: [
              { text: 'BLE Companion', link: '/firmware/companion-radio#ble-companion' },
              { text: 'USB Serial Companion', link: '/firmware/companion-radio#usb-serial-companion' }
            ]
          },
          { text: 'Repeater', link: '/firmware/repeater' },
          { text: 'Room Server', link: '/firmware/room-server' }
        ]
      },
      {
        text: 'Firmware Management',
        collapsed: true,
        items: [
          { text: 'Manual Updates', link: '/firmware/updating/manual' },
          { text: 'Over-the-Air Updates', link: '/firmware/updating/ota' },
          { text: 'Best Practices', link: '/firmware/updating/best-practices' }
        ]
      },
      {
        text: 'Hardware',
        collapsed: true,
        items: [
          {
            text: 'Heltec Boards',
            collapsed: true,
            items: [
              { text: 'Heltec V2', link: '/hardware/heltec/heltec-v2' },
              { text: 'Heltec V3', link: '/hardware/heltec/heltec-v3' },
              { text: 'Heltec T114', link: '/hardware/heltec/heltec-t114' }
            ]
          },
          {


            text: 'LilyGo Boards',
            collapsed: true,
            items: [
              { text: 'LilyGo T3S3', link: '/hardware/lilygo/lilygo-t3s3' },
              { text: 'TLora32 v1.6', link: '/hardware/lilygo/lilygo-tlora32-v1-6' },
              { text: 'T-Deck', link: '/hardware/lilygo/t-deck' }
            ]
          },



          {
            text: 'RAK Boards',
            collapsed: true,
            items: [
              { text: 'RAK4631', link: '/hardware/rak/rak4631' }
            ]
          },
          {
            text: 'Seeed Boards',
            collapsed: true,
            items: [
              { text: 'Station G2', link: '/hardware/seeds/station-g2' },
              { text: 'SenseCAP T1000e', link: '/hardware/seeds/sensecap-t1000e' }
            ]
          },

          {
            text: 'Xiao Boards',
            collapsed: true,
            items: [
              { text: 'Xiao S3 WIO', link: '/hardware/xiao/xiaos3-wio' },
              { text: 'Xiao C3 + SX126x', link: '/hardware/xiao/xiaoc3-sx126x' }
            ]
          },
          {
            text: 'Mobile Devices',
            collapsed: true,
            items: [
              { text: 'Android', link: '/hardware/mobile/android' },
              { text: 'iOS', link: '/hardware/mobile/ios' }
            ]
          }
        ]
      },
      {
        text: 'Third-Party Utilities',
        collapsed: true,
        items: [
          { text: 'meshcoremqtt', link: '/utilities/meshcoremqtt' },
          { text: 'MeshCore for Home Assistant', link: '/utilities/home-assistant' },
          { text: 'Python MeshCore', link: '/utilities/python-meshcore' },
          { text: 'meshcore-cli', link: '/utilities/meshcore-cli' },
          { text: 'meshcore.js', link: '/utilities/meshcore-js' },
          { text: 'MeshCore Map', link: '/utilities/meshcoremap' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/ripplebiz/MeshCore' }
    ],


    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-2025 MeshCore'
    },


    search: {
      provider: 'local'
    },


    outline: {
      level: [2, 3],
      label: 'On this page'
    },


    editLink: {
      pattern: 'https://github.com/rightup/MeshCoreDocs/dev/docs/:path',
      text: 'Edit this page on GitHub'
    },


    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },


    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },


    returnToTopLabel: 'Return to top',


    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Dark mode',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme'
  }
})