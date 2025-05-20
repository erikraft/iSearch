"use client"

export function setupAntiCopy() {
  if (typeof window === "undefined") return

  // Desabilitar atalhos de teclado
  document.addEventListener("keydown", (e) => {
    // Ctrl+S, Ctrl+U, Ctrl+P, F12, Ctrl+Shift+I
    if (
      (e.ctrlKey &&
        (e.key === "s" || e.key === "S" || e.key === "u" || e.key === "U" || e.key === "p" || e.key === "P")) ||
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && (e.key === "i" || e.key === "I"))
    ) {
      e.preventDefault()
      return false
    }
  })

  // Desabilitar menu de contexto
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    return false
  })

  // Desabilitar seleção de texto
  document.addEventListener("selectstart", (e) => {
    e.preventDefault()
    return false
  })

  // Desabilitar arrasto
  document.addEventListener("dragstart", (e) => {
    e.preventDefault()
    return false
  })

  // Desabilitar cópia
  document.addEventListener("copy", (e) => {
    e.preventDefault()
    return false
  })

  // Desabilitar corte
  document.addEventListener("cut", (e) => {
    e.preventDefault()
    return false
  })

  // Desabilitar print screen (limitado)
  document.addEventListener("keyup", (e) => {
    if (e.key === "PrintScreen") {
      navigator.clipboard.writeText("")
    }
  })

  // Desabilitar inspeção de elementos
  document.addEventListener("keydown", (e) => {
    if (
      e.ctrlKey &&
      e.shiftKey &&
      (e.key === "C" || e.key === "c" || e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j")
    ) {
      e.preventDefault()
    }
  })

  // Detectar DevTools (não é 100% confiável)
  function detectDevTools() {
    const widthThreshold = window.outerWidth - window.innerWidth > 160
    const heightThreshold = window.outerHeight - window.innerHeight > 160
    if (widthThreshold || heightThreshold) {
      document.body.innerHTML =
        '<div style="text-align:center;padding:50px;"><h1>DevTools detectado</h1><p>Por favor, feche as ferramentas de desenvolvedor para continuar.</p></div>'
    }
  }

  window.addEventListener("resize", detectDevTools)
  setInterval(detectDevTools, 1000)
}
