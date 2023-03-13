//*Code RPG de base (sans interface graphique) *//

document.addEventListener("DOMContentLoaded", function(){
  showStats();
});

//* Instantiation des joueurs dans un let, permettant de rentrer des stats de base 

let player = {
  stats : {
    "level" : 1,
    "experience" : 0,
    "maxHp" : 100,
    "currentHp" : 100,
    "maxEnergy" : 100,
    "currentEnergy" : 100,
    "maxMana" : 100,
    "currentMana" : 100,
    "gold" : 100,
    "diamonds" : 0,
  },
  skills : {
    fighting : {
      "lvl" : 1,
      "exp" : 0,
    },
    spell : {
      "lvl" : 1,
      "exp" : 0,
    },
    archery : {
      "lvl" : 1,
      "exp" : 0,
    },
    fishing : {
      "lvl" : 1,
      "exp" : 0,
    },
    mining : {
      "lvl" : 1,
      "exp" : 0,
    },
    crafting : {
      "lvl" : 1,
      "exp" : 0,
    },
  }
}

const effet_statut = {
    Para : Noattack,
    Sleep : Noaction,
    Burn : maxHp =-5,
    Freeze : Noaction, currentHp =-4,
    Poisonned : currentHp =-8,

}


function effet_statut



//*attaque avec effet paralysant (type élétrique)




//*attaque avec effet d'endormisment (type psy - ténébre)

//*attaque avec effet de brulure (type feu)

}

//* augmentation de grade et évolution de level 
const skillExp = {
  1 : 0,
  2 : 500,
  3 : 1100,
  4 : 2000,
  5 : 3500,
  6 : 5500,
  7 : 8500,
  8 : 13000,
  9 : 19000,
  10 : 27000,
  11 : 37000,
}

let minedGold = 0;
let info = "";

function main(){
  mine();
  showStats();
}

// Reinitialiser la vie du joueur 
function addEnergy(){
  player.stats.currentEnergy = 100;
  player.stats.gold -= 100;
  document.getElementById('info').innerHTML = "";
  showStats();
}

// Action du joueur / ses compétences en combat 
function mine(){
  if(player.stats.currentEnergy >= 10){
    info = "";
    minedGold = Math.floor((Math.random()*100)+(player.skills.mining.lvl * 2));
    player.stats.gold += minedGold;
    player.stats.currentEnergy -= 10;
    calculateExp(player.skills.mining, minedGold);
    mineInfo();
  }
  else info = "Vous n'avez pas l'energie requis pour ce skill !";
  mineInfo();
}

function  mine(){
    if(player.stats.currentEnergy >= 35){
        info = "Papy grenier va vous raconter une histoire, a 40% de chance de provoquer" .effetsommeil
        minedCurrentMana = Math.floor((Math.random()*70))+(player.skills.mining.lvl * 3);
        player.stats.currentEnergy -= 25;
    

    }
    else info = "Vous n'avez pas le Mana requis pour lancer cette compétence !";
    mineInfo();
}

// Si le joueur detecter un element = gold (argent possèder)
function mineInfo(){
  document.getElementById('current-gold').innerHTML = minedGold;
  document.getElementById('info').innerHTML = info;
}

// Ajouter de la valeur dans exp, et vérifier la fonction 
function calculateExp(skillName, expGained){
  skillName.exp += expGained;
  var a;
  for(a in skillExp){
   a = parseInt(a);
   if(skillExp[a] <= skillName.exp){
      skillName.lvl = a;
    }
  }
}

// Afficher les stats mis a jour sur le paneau du joueur (player)
function showStats(){
  document.getElementById('level').innerHTML = player.stats.level;
  document.getElementById('totalExp').innerHTML = player.stats.experience;
  document.getElementById('currentHp').innerHTML = player.stats.currentHp;
  document.getElementById('maxHp').innerHTML = player.stats.maxHp;
  document.getElementById('currentEnergy').innerHTML = player.stats.currentEnergy;
  document.getElementById('maxEnergy').innerHTML = player.stats.maxEnergy;
  document.getElementById('or').innerHTML = player.stats.gold;
  document.getElementById('diamant').innerHTML = player.stats.diamonds;
  document.getElementById('fighting').innerHTML = player.skills.fighting.lvl;
  document.getElementById('spelllist').innerHTML = player.skills.spellcasting.lvl;
  document.getElementById('archery').innerHTML = player.skills.archery.lvl;
  document.getElementById('fishing').innerHTML = player.skills.fishing.lvl;
  document.getElementById('mining').innerHTML = player.skills.mining.lvl;
  document.getElementById('crafting').innerHTML = player.skills.crafting.lvl;
}