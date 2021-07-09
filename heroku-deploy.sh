git add .
echo "Your commit message: "
read var1 var2
git commit -m "$var1 $var2"
export $(xargs < .deploy-env) 
echo "\n=========================================================\nPushing to Github...\n=========================================================\n"
git push -u origin master || { echo NOT_OK; exit 1; }
echo "\n=========================================================\nPushed to Github.\n=========================================================\n"
echo "\n=========================================================\nPushing to Heroku...\n=========================================================\n"
git push https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_APP_NAME.git master -f || { echo NOT_OK; exit 1; }
echo "\n=========================================================\nPushed to Heroku.\n=========================================================\n"
echo "\n\n=========================================================\nDeployment Done.\n=========================================================\n"