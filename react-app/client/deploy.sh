echo "Switching to branch master"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* gburdell3@cpms.cc.gatech.edu:/var/www/130.207.114.64

echo "Done!"