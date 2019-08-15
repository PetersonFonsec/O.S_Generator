# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# commit all files
git add -A
git commit -m 'deploy'

# deploying to https://petersonFonsec.github.io/O.S_Generator
git push -f git@github.com:petersonFonsec/O.S_Generator.git master:gh-pages