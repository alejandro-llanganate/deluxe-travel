/** Ruta a archivos en /public (compatible con GitHub Pages y subcarpeta). */
export function assetPath(relativePath) {
  const base = process.env.PUBLIC_URL || ''
  const path = relativePath.replace(/^\//, '')
  return `${base}/${path}`
}
