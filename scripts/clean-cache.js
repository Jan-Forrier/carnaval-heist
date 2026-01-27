#!/usr/bin/env node

/**
 * Script to clean Next.js cache and build files
 * Run with: node scripts/clean-cache.js
 */

const fs = require('fs')
const path = require('path')

const foldersToClean = [
  '.next',
  'node_modules/.cache',
  '.turbo',
]

const filesToClean = [
  '.next-env.d.ts',
]

console.log('🧹 Cleaning Next.js cache and build files...\n')

let totalSize = 0

function getSize(path) {
  try {
    const stats = fs.statSync(path)
    return stats.isDirectory() ? getDirSize(path) : stats.size
  } catch {
    return 0
  }
}

function getDirSize(dirPath) {
  let size = 0
  try {
    const files = fs.readdirSync(dirPath)
    for (const file of files) {
      const filePath = path.join(dirPath, file)
      try {
        const stats = fs.statSync(filePath)
        if (stats.isDirectory()) {
          size += getDirSize(filePath)
        } else {
          size += stats.size
        }
      } catch {
        // Skip files we can't access
      }
    }
  } catch {
    // Skip directories we can't access
  }
  return size
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

function removePath(itemPath) {
  try {
    const fullPath = path.resolve(process.cwd(), itemPath)
    if (!fs.existsSync(fullPath)) {
      return 0
    }

    const size = getSize(fullPath)
    const stats = fs.statSync(fullPath)
    
    if (stats.isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true })
      console.log(`✅ Removed folder: ${itemPath} (${formatBytes(size)})`)
    } else {
      fs.unlinkSync(fullPath)
      console.log(`✅ Removed file: ${itemPath} (${formatBytes(size)})`)
    }
    
    return size
  } catch (error) {
    console.log(`⚠️  Could not remove ${itemPath}: ${error.message}`)
    return 0
  }
}

// Clean folders
for (const folder of foldersToClean) {
  totalSize += removePath(folder)
}

// Clean files
for (const file of filesToClean) {
  totalSize += removePath(file)
}

console.log(`\n✨ Cleanup complete! Freed up approximately ${formatBytes(totalSize)}`)
console.log('\n💡 To reinstall dependencies, run: npm install')
console.log('💡 To rebuild, run: npm run build')
