import { useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-PP5NNXS0GN'

const GoogleAnalytics = () => {
  useEffect(() => {
    if (import.meta.env.MODE !== 'production') return

    // Load the GA script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    // Init GA
    const inlineScript = document.createElement('script')
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `
    document.head.appendChild(inlineScript)
  }, [])

  return null
}

export default GoogleAnalytics
