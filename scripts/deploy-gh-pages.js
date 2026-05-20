/**
 * Despliegue a rama gh-pages (sin MP4 ni source maps).
 */
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const buildDir = path.join(root, 'build')
const remote = 'https://github.com/alejandro-llanganate/deluxe-travel.git'

require('./strip-build-videos')

if (!fs.existsSync(buildDir)) {
  console.error('No existe build/. Ejecuta: npm run build')
  process.exit(1)
}

const deployDir = path.join(root, 'node_modules', '.cache', 'deluxe-deploy')
fs.rmSync(deployDir, { recursive: true, force: true })
fs.cpSync(buildDir, deployDir, { recursive: true })

const gitEnv = {
  ...process.env,
  GIT_HTTP_MAX_REQUEST_BUFFER: '524288000',
}

execSync('git init', { cwd: deployDir, stdio: 'pipe', env: gitEnv })
execSync('git checkout --orphan gh-pages', { cwd: deployDir, stdio: 'pipe', env: gitEnv })
execSync('git add -A', { cwd: deployDir, stdio: 'pipe', env: gitEnv })
execSync('git commit -m "Deploy GitHub Pages"', {
  cwd: deployDir,
  stdio: 'inherit',
  env: gitEnv,
})
execSync(`git remote add origin ${remote}`, {
  cwd: deployDir,
  stdio: 'pipe',
  env: gitEnv,
})

const pushCmd =
  'git -c http.postBuffer=524288000 -c http.version=HTTP/1.1 push -f origin gh-pages'

try {
  execSync(pushCmd, { cwd: deployDir, stdio: 'inherit', env: gitEnv })
} catch (err) {
  console.error('\n--- Deploy local falló ---')
  console.error('Usa GitHub Actions (más fiable):')
  console.error('  1. GitHub → Settings → Pages → Source: GitHub Actions')
  console.error('  2. git push origin main')
  console.error('URL: https://alejandro-llanganate.github.io/deluxe-travel\n')
  process.exit(1)
}

console.log('\nPublicado: https://alejandro-llanganate.github.io/deluxe-travel')
console.log('GitHub → Settings → Pages → Branch: gh-pages → / (root)')
