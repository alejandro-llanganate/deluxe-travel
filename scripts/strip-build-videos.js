/**
 * Quita archivos pesados del build antes de subir a gh-pages.
 */
const fs = require('fs')
const path = require('path')

const buildDir = path.join(__dirname, '..', 'build')

function walk(dir, onFile) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, onFile)
    else onFile(full)
  }
}

walk(path.join(buildDir, 'assets', 'video'), (file) => {
  if (file.endsWith('.mp4')) {
    fs.unlinkSync(file)
    console.log('[strip-build] Eliminado:', path.basename(file))
  }
})

walk(path.join(buildDir, 'static'), (file) => {
  if (file.endsWith('.map')) {
    fs.unlinkSync(file)
    console.log('[strip-build] Eliminado:', path.relative(buildDir, file))
  }
})
