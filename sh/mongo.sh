dbPath=~/mongodb/data/db
logPath=~/mongodb/log/mongo.log
root=~/

cd $root

if [ ! -d ./mongodb ]; then
  mkdir mongodb
  mkdir mongodb/data
  mkdir mongodb/data/db
  mkdir mongodb/log
  touch mongodb/log/mongo.log
fi

mongod --dbpath $dbPath --logpath $logPath