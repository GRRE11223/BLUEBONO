const { execSync } = require('child_process');
const path = require('path');

console.log('🔍 Starting deployment checks...\n');

try {
  // 1. TypeScript type checking
  console.log('📝 Running type check...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ Type check passed\n');

  // 2. Linting
  console.log('🔍 Running linting...');
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ Linting passed\n');

  // 3. Production build
  console.log('🏗️ Running production build...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Production build successful\n');

  console.log('🎉 All deployment checks passed! Your code is ready for deployment.');
} catch (error) {
  console.error('\n❌ Deployment check failed:', error.message);
  process.exit(1);
} 