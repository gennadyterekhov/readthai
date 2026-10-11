echo 'building'
cd front
pnpm build
echo 'building done'


echo 'deploying'
cd ..
.venv/bin/python3 devops/deploy.py

echo 'deploying done'