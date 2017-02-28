# adding new lines to hosts file 

# host file location
# for Win
# hostFileLocation=/cygdrive/c/Windows/System32/drivers/etc/hosts
# for MacOS
hostFileLocation=/private/etc/hosts


# adres IP dla danej domeny
IP=192.168.100.10
# nazwa domenowa
dName=fideslogistik.pl.symfony.dev
# alias www
dAliasName=www.fideslogistik.pl.symfony.dev

d=$(date +%Y-%m-%d-%s)
cp $hostFileLocation ./hosts.bak.$d
cp $hostFileLocation ./hosts

echo "
# added automatically by hosts.sh scritp from dedicated folder
"$IP" "$dName"
"$IP" "$dAliasName >> ./hosts

cp ./hosts $hostFileLocation 
	