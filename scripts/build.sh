cd $DEV_APP && npm install && npm run build $@ && cd ..
cp -r $DEV_APP/dist ./
cp dist/index.html dist/404.html

