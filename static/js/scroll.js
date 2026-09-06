// single-page scroll behaviour: reveal animations, scroll-spy, progress bar
document.documentElement.classList.add("scroll-js")

// reveal sections as they enter the viewport
const revealEls = document.querySelectorAll(".reveal")

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view")
        revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  revealEls.forEach((el) => revealObserver.observe(el))
} else {
  revealEls.forEach((el) => el.classList.add("in-view"))
}

// highlight the nav link matching the section in view
const spyLinks = Array.from(document.querySelectorAll(".links a[data-spy]"))
const spySections = spyLinks
  .map((link) => document.getElementById(link.dataset.spy))
  .filter(Boolean)

if ("IntersectionObserver" in window && spySections.length > 0) {
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      spyLinks.forEach((link) => {
        link.classList.toggle("active", link.dataset.spy === entry.target.id)
      })
    })
  }, { rootMargin: "-45% 0px -50% 0px" })

  spySections.forEach((section) => spyObserver.observe(section))
}

// gold reading-progress bar
const progress = document.querySelector(".scroll-progress span")

function updateProgress() {
  if (!progress) return
  const doc = document.documentElement
  const max = doc.scrollHeight - doc.clientHeight
  const ratio = max > 0 ? doc.scrollTop / max : 0
  progress.style.transform = "scaleX(" + ratio + ")"
}

document.addEventListener("scroll", updateProgress, { passive: true })
updateProgress()
