# adding new lines to hosts file 

# host file location
# for Win
hostFileLocation=/cygdrive/c/Windows/System32/drivers/etc/hosts
# for MacOS

# adres IP dla danej domeny
IP=192.168.100.10
# nazwa domenowa
dName=fideslogistik.pl.symfony.dev
# alias www
dAliasName=www.fideslogistik.pl.symfony.dev

d=$(date +%Y-%m-%d-%s)
cp $hostFileLocation $hostFileLocation.bak.$d

echo "
# added automatically by hosts.sh scritp from dedicated folder
"$IP" "$dName"
"$IP" "$dAliasName >> $hostFileLocation
