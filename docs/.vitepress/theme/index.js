// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import HeroLayout from './HeroLayout.vue'
import './custom.css'


export default {
  extends: DefaultTheme,
  Layout: HeroLayout,

  enhanceApp({ app, router, siteData }) {

  },

  setup() {

    if (typeof window !== 'undefined') {
      let isUpdating = false
      let currentActiveSection = null

      const manageSidebarState = () => {

        const collapseAllExcept = (activeSection) => {
          if (isUpdating || currentActiveSection === activeSection) return

          isUpdating = true
          currentActiveSection = activeSection

          const allSections = document.querySelectorAll('.VPSidebarItem')

          allSections.forEach(section => {
            const sectionTitle = section.querySelector('.text')?.textContent?.trim()

            if (sectionTitle !== activeSection) {

              section.classList.add('collapsed')
              section.classList.remove('has-active')


              const subItems = section.querySelectorAll('.items')
              subItems.forEach(subItem => {
                subItem.style.display = 'none'
              })
            } else {

              section.classList.remove('collapsed')
              section.classList.add('has-active')


              if (activeSection === 'Hardware') {
                const currentPath = window.location.pathname


                const subItems = section.querySelectorAll('.items')
                subItems.forEach(subItem => {
                  subItem.style.display = 'block'
                })


                const hardwareSubSections = section.querySelectorAll('.VPSidebarItem')
                hardwareSubSections.forEach(subSection => {
                  const subSectionTitle = subSection.querySelector('.text')?.textContent?.trim()

                  const shouldOpen = (
                    (currentPath.includes('/hardware/heltec') && subSectionTitle === 'Heltec Boards') ||
                    (currentPath.includes('/hardware/lilygo') && subSectionTitle === 'LilyGo Boards') ||
                    (currentPath.includes('/hardware/rak') && subSectionTitle === 'RAK Boards') ||
                    (currentPath.includes('/hardware/seeed') && subSectionTitle === 'Seeed Boards') ||
                    (currentPath.includes('/hardware/xiao') && subSectionTitle === 'Xiao Boards') ||
                    (currentPath.includes('/hardware/mobile') && subSectionTitle === 'Mobile Devices')
                  )

                  if (shouldOpen) {
                    subSection.classList.remove('collapsed')
                    const subSubItems = subSection.querySelectorAll('.items')
                    subSubItems.forEach(item => item.style.display = 'block')
                  }
                })
              } else if (activeSection === 'Firmware') {
                const currentPath = window.location.pathname
                const subItems = section.querySelectorAll('.items')
                subItems.forEach(subItem => {
                  subItem.style.display = 'block'
                })


                if (currentPath.includes('/firmware/companion-radio')) {
                  const firmwareSubSections = section.querySelectorAll('.VPSidebarItem')
                  firmwareSubSections.forEach(subSection => {
                    const subSectionTitle = subSection.querySelector('.text')?.textContent?.trim()
                    if (subSectionTitle === 'Companion Radio') {
                      subSection.classList.remove('collapsed')
                      const subSubItems = subSection.querySelectorAll('.items')
                      subSubItems.forEach(item => item.style.display = 'block')
                    }
                  })
                }
              } else {

                const subItems = section.querySelectorAll('.items')
                subItems.forEach(subItem => {
                  subItem.style.display = 'block'
                })
              }
            }
          })


          setTimeout(() => {
            isUpdating = false
          }, 100)
        }


        const detectActiveSection = () => {
          const currentPath = window.location.pathname


          if (currentPath === '/' || currentPath === '') {
            return null
          }


          const pathToSection = {
            '/getting-started': 'Getting Started',
            '/firmware/updating': 'Firmware Management',
            '/firmware': 'Firmware',
            '/hardware': 'Hardware',
            '/utilities': 'Third-Party Utilities'
          }


          for (const [path, section] of Object.entries(pathToSection)) {
            if (currentPath.startsWith(path)) {
              return section
            }
          }

          return null
        }


        const activeSection = detectActiveSection()
        if (activeSection && !currentActiveSection) {
          collapseAllExcept(activeSection)
        }


        const handleNavigationClick = (event) => {
          const link = event.target.closest('a')
          if (!link) return

          const href = link.getAttribute('href')
          if (!href || href.startsWith('http') || href.startsWith('#')) return


          let targetSection = null

          if (href.startsWith('/getting-started') || href === '/getting-started') {
            targetSection = 'Getting Started'
          } else if (href.startsWith('/firmware/updating') || href === '/firmware/updating') {
            targetSection = 'Firmware Management'
          } else if (href.startsWith('/firmware') || href === '/firmware') {
            targetSection = 'Firmware'
          } else if (href.startsWith('/hardware') || href === '/hardware') {
            targetSection = 'Hardware'
          } else if (href.startsWith('/utilities') || href === '/utilities') {
            targetSection = 'Third-Party Utilities'
          }

          if (targetSection) {



            const isFromHomepage = window.location.pathname === '/' || window.location.pathname === ''
            if (isFromHomepage) {

              currentActiveSection = null
            }


            setTimeout(() => {
              collapseAllExcept(targetSection)
            }, 150)
          }
        }


        let lastUrl = window.location.href
        const checkUrlChange = () => {
          const currentUrl = window.location.href
          if (currentUrl !== lastUrl) {
            lastUrl = currentUrl


            const activeSection = detectActiveSection()


            if (window.location.pathname === '/' || window.location.pathname === '') {
              console.log('Back to homepage - clearing active section')
              currentActiveSection = null

              const allSections = document.querySelectorAll('.VPSidebarItem')
              allSections.forEach(section => {
                section.classList.add('collapsed')
                section.classList.remove('has-active')
                const subItems = section.querySelectorAll('.items')
                subItems.forEach(subItem => {
                  subItem.style.display = 'none'
                })
              })
            } else if (activeSection) {

              setTimeout(() => {
                if (activeSection !== currentActiveSection) {
                  currentActiveSection = null
                  collapseAllExcept(activeSection)
                }
              }, 100)
            }
          }
        }


        document.addEventListener('click', handleNavigationClick, true)


        window.addEventListener('popstate', () => {
          setTimeout(() => {

            const activeSection = detectActiveSection()


            if (window.location.pathname === '/' || window.location.pathname === '') {

              currentActiveSection = null

              const allSections = document.querySelectorAll('.VPSidebarItem')
              allSections.forEach(section => {
                section.classList.add('collapsed')
                section.classList.remove('has-active')
                const subItems = section.querySelectorAll('.items')
                subItems.forEach(subItem => {
                  subItem.style.display = 'none'
                })
              })
            } else if (activeSection) {
              currentActiveSection = null
              collapseAllExcept(activeSection)
            }
          }, 100)
        })

        setInterval(checkUrlChange, 150)
      }


      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', manageSidebarState)
      } else {

        setTimeout(manageSidebarState, 100)
      }


      const observeChanges = () => {
        const sidebarContainer = document.querySelector('.VPSidebar')
        if (sidebarContainer) {
          const observer = new MutationObserver((mutations) => {
            const hasStructuralChanges = mutations.some(mutation =>
              mutation.type === 'childList' && mutation.addedNodes.length > 0
            )

            if (hasStructuralChanges && !isUpdating) {
              requestAnimationFrame(() => {
                const activeSection = detectActiveSection()
                if (activeSection) {
                  currentActiveSection = null
                  collapseAllExcept(activeSection)
                }
              })
            }
          })

          observer.observe(sidebarContainer, {
            childList: true,
            subtree: true
          })
        }
      }

      setTimeout(observeChanges, 300)
    }
  }
}