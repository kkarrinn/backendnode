# My notes

`.md` on markdown ehk siis notes for programming pm
*cat's meow* OMG SEE ROHELIONE!!

`npm init -y`

##lahe asi

cmnd prompt näitab ainult kataloogi, kus on ka vm21 vm kataloog ehk folder

~ ->linux, maci teema. 
tilde? 

ls- töötab ainult windowsil käsklus prindib ... välja

dusty-rohelisega on folderid
helerohelisega on failid
erkrohelisega(@) on link kuhugi mujale

eelneva käsu tagasi saamiseks saab vajutada nool ülesse klaviatuuril

igal käsklusel on tavaliselt vähemalt kaks osa: parameetrid/argumendid ehk mingi sugune väärtus ja flag'id- algavad tavaliselt ühe või kahe sidekriipsuga

ls --help aitab saada asjadest aru

suure ja väikse tähega võib/arvatavasti tuleb/tulla teistsugune tulemus

ls -a
. ja .. on erilised kataloogid, nad on kõikides kataloogides tavaliselt olemas
ls . kasutatakse programeerimises //viitab kataloogile kus sa hetkel asud
ls .. kasutades saab mingi muu kataloogi valida, alati näitab eelmist kataloogi/viitab eelmisele kataloogile

ls -l näitab rohkem detailset infot. total failide/bytede suurust(?) kogust. näitab ära millised õigused sul kataloogidele on, näitab kataloogide omanikku (u-39, kataloogi suurust byte'des, ja ka millal need viimati muudeti

kui tahta saada mitut asja siis saab panna need üksteise järgi, järjekorrast pole vahet, aga on olemas ka mõndade asjade jaoks eraldi shortcut'id. (-l -a, -a -l, -la, -al)

cd- change director, vahetab folderit
cd niisama viib su tagasi user kataloogi/folderisse
saab tänu sellele kergelt katalooge vahetama
kui ei anna sellele midagi peale ühe tähe siis kaks korda tab'i vajutades annab valiku/näitab milliste pärast see segaduses on
cd Dow *tab* ja siis autofillib
ex: cd downloads
cd niisama viib su tagasi user kataloogi

cd .. liigutab eelmisesse kataloogi

tilde märk + kaldjoon + folder = absoluutne asukoht
cd ~/Downloads/ 

mkdir- makedirectory, loob kausta

touch- loob faili, kui seda ei ole

rm- remove, ole SUPER ettevaatlik kui seda kasutad kuna see on hirmus. kustutab ainult faile mitte katalooge/foldereid, välja arvatud kui paned selle järgi ka -r , aga see ikkagi küsib kui seal on mitu faili
f (force)

ÄRGE ISEGI KIRJUTAGE MAHA!!!!!! 
linuxil, rm -rf / -kustutab kõik, kõik failid arvutis. 
windowsil, rm -rf /c -kustutab kõik, kuni süsteem ei suuda enam töötada ;) 
saadab tšau baka!!! 
EI TOHI !!!!!!!!!

pwd- EELDAB, et print working directing, kirjutab täis pika asukoha

ipconfig- annab info arvuti ja arvutivõrgu kohta, ip lokaalses võrgus. 
(IPv4 Address, reeglina kui olete samas võrgus, siis viimane number on erinev)

echo- võtab parameetriks mingi teksti, kui tahad kasutada tühikuid pead panema ümber ülakomad või jutumärgid

grep- kasutatakse teiste käsklustega koos

mv- move, liiguta, liigutab failid ühest kataloogist teise, mv test.txt test (move test.txt to test) 
saab ka liigutada samasse kataloogi aga uue nimega, mv test.txt hello.txt

cp- copy paste, hello txt .. (teeb failist koopia eelmisesse kataloogi)
saab ka vahetada nii, et teeks failist koopia aga vahetaks selle nime ära (sisu jääb samaks), hello.txt test.txt

clear- teeb ekraani tühjaks. liigutab kõik info ülesse, teeb tühja ruumi ja saad üles scrollides selle kätte

cat- kirjuta faili sisu ekraanile 

GREP

ls -la >  - 

echo "midagi midagi tekst!!" > hello.txt - teeb kiiresti sellise teksti faili, topib selle faili

-y -vastab kõigile küsimustele ise yes, siis ei  pea ise sellega tegelema

npm- node package manager
npm init- teeb sulle package.json faili(mis on kergelt nii inim loetav kui ka masin loetav)
npm i express- installib valmis asja

.md on markdown ehk siis notes for programmers pm

git init- git initialize, installiseerib uue repositary(?)
git config --global init.defaultBranch main- siis kui tuleb (master) siis muudab tulevikus selle main'iks
git branch -M main- muudab lõplikult (master)i (main)iks
git status- ütleb sulle, et mis hetkel toimub/listib mis seal sees
git add --all / git add . -lisa kõik
git config --global core.editor "code --wait" -
