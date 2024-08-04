/*
@title: 8bit driving
@author: Luca
@tags: ['simulation','driving']
@addedOn: 2024-00-00
*/
const player = '8'

//different cars 

const Blank_car = 'w'
const Blue_Car = 'b'
const Green_Car = 'g'
const Red_Car = 'r'
const Purple_car = 'p'

//game objects
const Road_Lane ='l'
const Guard_rail = 's'
const Hole = 'h'
const Coin = 'c'
const Traffic_cone = 't'
const Grass = 'k'

//ui components
const Buy = 'v'
const Play = 'y'
const Shop = 'x'
const Pointer = 'j'
const MoneyCounter = '9'
const MenuBg = '7'
const Back = '6'
const SelCar = '5'
const GarageFloor = '4'
const CoinIcon = '3'

setLegend(
  [ player, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................` ],
  
  [ Blank_car, bitmap`
................
......L616L.....
.....L1LLL1L....
....01L111L10...
....0L11111L0...
....0L00000L0...
....L00L0L00L...
.....0000000....
.....1111111....
.....1LLLLL1....
.....1111111....
....01LLLLL10...
....01LLLLL10...
....011111110...
.....L3L.L3L....
................` ],
  [ Blue_Car, bitmap`
................
......55755.....
.....6F777F6....
....077777770...
....075555570...
....05L1LL150...
....7L1LL1LL7...
.....7755577....
.....051LL50....
.....05L1150....
.....0777770....
....077777770...
....057777750...
....05L1L1L50...
.....3C777C3....
................` ],
  [ Green_Car, bitmap`
................
......6F4F6.....
.....4444444....
....0D4DDD4D0...
....044444440...
....0DL0LL0D0...
....4L0LL0LL4...
.....D44444D....
.....04DDD40....
.....0444440....
.....D4DDD4D....
....0L44444L0...
....0L4DDD4L0...
....0D44444D0...
.....D3CDC3D....
................` ],
  [ Red_Car, bitmap`
................
......3CCC3.....
.....6F222F6....
....0C32223C0...
....03C222C30...
....0300L0030...
.....00L00L0....
.....0L00L00....
.....C32223C....
.....0300030....
.....0300030....
....0C32223C0...
....030222030...
....030000030...
.....C32223C....
................` ],
  [ Purple_car, bitmap`
................
......60806.....
.....F80808F....
....088080880...
....0H80808H0...
....0HL1LL1H0...
....8L1LL1LL8...
.....8808088....
.....080H080....
.....0H0H0H0....
.....0H0H0H0....
....088080880...
....08L1L1LH0...
....088080HH0...
.....3000003....
................` ],
  
  [ Road_Lane, bitmap`
2LLLLLLLLLLLLLL2
2LLLLLLLLLLLLLL2
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
2LLLLLLLLLLLLLL2
2LLLLLLLLLLLLLL2
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
2LLLLLLLLLLLLLL2
2LLLLLLLLLLLLLL2
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
2LLLLLLLLLLLLLL2
2LLLLLLLLLLLLLL2
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL` ],
  [ Guard_rail, bitmap`
4DCLLCCCCCCLLCDD
D4CL1LL11LL1LC4D
D4CL1LL11LL1LCC4
DCCLLCCCCCCLLC4D
DCCL1LL11LL1LCD4
D4CL1LL11LL1LC4D
44CLLCCCCCCLL44D
D4CL1LL11LL1LC44
DDCL1LL11LL1LC4D
44CLLCCCCCCLLC44
4CCL1LL11LL1LC4D
D4CL1LL11LL1LCCD
D4CLLCCCCCCLLC4D
DCCL1LL11LL1LC44
44CL1LL11LL1LC4D
D4CLLCCCCCCLLCCD` ],
  [ Hole, bitmap`
2LLLLLLLLLLLLLL2
2LLLLLLLLL11LLL2
LLLLLLLLLLLL1LLL
LLLLLLL00LLLLLLL
2LLLLL0CC0LLLLL2
2LLLLL0CCC0LLLL2
LLLLL0CCCC0LLLLL
LLLLL0CCCC0LLLLL
2LLLLL0CCC0LLLL2
2LLLLLL0C0LLLLL2
LL1LL1LL0LLLLLLL
LL11LLLLLLLLLLLL
2LLL1LLLLLL1LLL2
2LLLLLLLLLL1LLL2
LLLLLLLLL1LLLLLL
LLLLLLLLLLLLLLLL` ],
  [ Coin, bitmap`
................
................
....CCC9CCC9....
...C666666669...
..C66CC9622669..
..C6C666666269..
..969666666669..
..969662666669..
..C66666266669..
..C62666662969..
..C62666622C69..
..C6626699C669..
...9666666669...
....99CCCC99....
................
................` ],
  [ CoinIcon, bitmap`
................
....CCC9CCC9....
...C666666669...
..C66CC9622669..
..C6C666666269..
..969666666669..
..969662666669..
..C66666266669..
..C62666662969..
..C62666622C69..
..C6626699C669..
...9666666669...
....99CCCC99....
................
................
................` ],
  [ Traffic_cone, bitmap`
................
................
................
................
.......1L.......
.......L0.......
......19C0......
......L220......
.....129C10.....
.....L921C0.....
....129CCC10....
....L92111C0....
....09CCCCC0....
.....000000.....
................
................` ],
  [ Grass, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDD4DDDDDDD
DDDDDDDD4DDDDDDD
DD4DD3DDDDDDD4DD
DD4D36CDDDDD4DDD
DDDDDCDDD4DD4DDD
DDD4DDDDDD4DDDDD
DDD4DDDDDD4DDDDD
DDDDDDD4DDDDDD4D
DDDDDDD4DDDDDD4D
DD4DDDDDDDDDDDDD
DD4DD4DDDDDD7DDD
DDD8D4DD4DD765DD
DD86HDDDD4DD5DDD
DDDHDDDDD4DDDDD4
DDDDDDDDDDDDDDD4` ],
  [ MoneyCounter, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
LL000LL000LL000L
LLL0LLLL0LLLL0LL
LLLLLLLLLLLLLLLL` ],

  [ Buy, bitmap`
.....222222.....
..222333333222..
.23333C99C33332.
2333CL9269LC3332
23CCC196291CCC32
3CL111L99L111LC3
3L1LLLLLLLLLL1L3
211L00000000L112
21L0000000000L12
21L0004DDD000L12
21L0047575D00L12
21L0L45757DL0L12
21L0DDDDDDDD0L12
21L0F644446F0L12
21L0DDDLLDDD0L12
21L0LL0000LL0L12` ],
  [ Play, bitmap`
...2222222222...
..2DDDDDD44442..
.2DDDDD44444442.
2DDDD44444444442
2DDD020244424442
2DDDL02020204442
2DDD120202024442
2DDD102020204442
2DDD144402044442
2DDD144444444442
2DDDL44444444442
2DDD044444444442
2DDD0DD4444444D2
.2DDDDDDDD444D2.
..2DDDDDDDDDD2..
...2222222222...` ],
  [ Pointer, bitmap`
.......2........
......212.......
.....21112......
.....211L2......
....2LLLLL2.....
.....22222......
....2000002.....
...20LL1LL02....
..20L1L1L1L02...
..20LL1113C02...
..20111011102...
..20LL1113C02...
..20L1L1C1L02...
...20LL1LL02....
....2000002.....
.....22222......` ],
  [ MenuBg, bitmap`
LLLL0000LLLL0000
LLLL0000LLLL0000
LLLL0000LLLL0000
LLLL0000LLLL0000
0000LLLL0000LLLL
0000LLLL0000LLLL
0000LLLL0000LLLL
0000LLLL0000LLLL
LLLL0000LLLL0000
LLLL0000LLLL0000
LLLL0000LLLL0000
LLLL0000LLLL0000
0000LLLL0000LLLL
0000LLLL0000LLLL
0000LLLL0000LLLL
0000LLLL0000LLLL` ],
  [ Back, bitmap`
.....000........
....0230........
...023300000....
..023333399C0...
.02333333339C0..
..03333333399C0.
...0333000339C0.
....0330..039C0.
.....000..039C0.
........00399C0.
...00000339CC0..
...03333399CC0..
...0933999C00...
...0C99CC00.....
...000000.......
................` ],
  [ SelCar, bitmap`
................
................
................
................
................
................
2..............2
22............22
22............22
2..............2
................
................
................
................
................
................` ],
  [ GarageFloor, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LL0LLLLLLLLLLLLL
L000LLLLLLLLLLLL
L00LLLLLLLLLLLLL
L0LLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLL00L
LLLLLLLLLLLLL0LL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL` ],
)


const melody = tune`
133.33333333333334,
133.33333333333334: F4~133.33333333333334,
133.33333333333334: F4~133.33333333333334,
133.33333333333334: D4~133.33333333333334,
133.33333333333334: D4~133.33333333333334,
133.33333333333334: D4~133.33333333333334,
133.33333333333334,
133.33333333333334: D4~133.33333333333334,
133.33333333333334: D4~133.33333333333334,
133.33333333333334,
133.33333333333334: F4~133.33333333333334,
133.33333333333334: F4~133.33333333333334,
133.33333333333334: E4~133.33333333333334,
133.33333333333334,
133.33333333333334: F4~133.33333333333334,
133.33333333333334,
133.33333333333334: G4~133.33333333333334,
133.33333333333334,
133.33333333333334: G4~133.33333333333334,
133.33333333333334: A4~133.33333333333334,
133.33333333333334: A4~133.33333333333334,
133.33333333333334: G4~133.33333333333334,
133.33333333333334,
133.33333333333334: G4~133.33333333333334,
133.33333333333334: G4~133.33333333333334,
133.33333333333334: F4~133.33333333333334,
133.33333333333334: G4~133.33333333333334,
133.33333333333334: G4~133.33333333333334,
133.33333333333334: G4~133.33333333333334,
133.33333333333334,
133.33333333333334: A4~133.33333333333334,
133.33333333333334: A4~133.33333333333334`;
var playbackMelody = playTune(melody, Infinity);

const coinPicked = tune`
60,
60: G5/60,
60: A5-60,
1740`;
const conePicked = tune`
60: C4~60,
60: F4/60 + C4~60,
60: E4/60 + C4~60,
60: E4/60 + C4~60,
60: E4/60 + C4~60,
60: E4/60 + C4~60,
60: C4~60,
1500`;

var inMenu = true; 
var inGarage = false; 
var money = 0; 
var selected_car = 0; 
var carX = 3; 

var selecting = 0; 
var IsFirstTime = true;


let savedMoney = localStorage.getItem('money');
if (savedMoney) {
  money = parseInt(savedMoney, 10);
}

let savedSelectedCar = localStorage.getItem('selectedCar');
if (savedSelectedCar) {
  selected_car = parseInt(savedSelectedCar, 10);
}

var cars = [Blank_car,Blue_Car,Green_Car,Red_Car,Purple_car];

setSolids([Guard_rail,Hole,Traffic_cone]);

//the map is still but objects are updated and generated on screen.
let level = 2;
const levels = [
  map`
9999999
4w4b4g4
4j44444
4r4p464
.......`,
  map`
9999999
ks...sk
kst.tsk
ks...sk
ks...sk`,
  map`
7777777
77v7y77
87j7777`,
];

setMap(levels[level])

setPushables({
  [ player ]: []
})

onInput("a", () => {
  if(inMenu){
    selecting = 0; 
    updateIconMenu();
    return;
  }
  if(inGarage){
    updateGarage(-1);
    return;
  }
  if(carX-1 < 2) return; 
  carX-=1;
  updateCar(); 
})

onInput("l", () => {
  if(inMenu){
    selecting = 1; 
    updateIconMenu();
    return;
  }
  if(inGarage){
    updateGarage(1);
    return;
  }
  if(carX+1 > 4) return; 
  carX+=1;
  updateCar(); 
})

onInput("w", () => {
  if(inMenu){
    select();
    return;
  }

  if(inGarage){
    selectCar();
  }
})

var isPlaying = true; 
onInput("i", () => {
  if(isPlaying){
    playbackMelody.end();
    isPlaying = false;
    return;
  }

  playbackMelody = playTune(melody, Infinity);
  isPlaying = true;
})

onInput("s", () => {
  restartGame();
})


afterInput(() => {
  
})

function FirstGenGame(){
  addSprite(3,4,cars[selected_car]);
  clearText();
  addSprite(0,0,CoinIcon);
  addText(money.toString(), { x: 3, y: 2, color: color`6` });
  
}

function FirstGenGarage(){
  setMap(levels[level]);
  selecting = selected_car;
  updateGarage(0);
  setSelected();
  clearText();
  addText("Your Garage", { x: 5, y: 1, color: color`2` });
  selecting = selected_car;
}

/*
  function create ui components in the menu
*/
function FirstGenMenu(){
  if(!IsFirstTime) return; 
  selecting = 0;
  addText("8bit Driving", { x: 4, y: 1, color: color`2` });
  addText("use a w l to move", { x: 2, y: 2, color: color`L` });
  addText("i to stop music", { x: 3, y: 13, color: color`L` })
  setBackground(MenuBg);
  IsFirstTime = false; 
}

function handleChange(){
  if(level === 0){
    inGarage = true;
    inMenu = false;
  }
  else if(level === 1){
    inGarage = false;
    inMenu = false;
  }else{
    inGarage = false;
    inMenu = true;
    selecting = 0;
  }
  
  
  if(inMenu){
    setBackground(MenuBg);
    selecting = 0; 
    FirstGenMenu();
    return;
  }
  if(inGarage){
    FirstGenGarage();
    setBackground(GarageFloor);
    return;
  }
  FirstGenGame();
  setBackground(Road_Lane);
}

function setSelected(){
  switch(selected_car){
    case 0:
      addSprite(1,1,SelCar);
      break;
      
    case 1:
      addSprite(3,1,SelCar);
      break;

    case 2:
      addSprite(5,1,SelCar);
      break;

    case 3:
      addSprite(1,3,SelCar);
      break;

    case 4:
      addSprite(3,3,SelCar);
      break;

    default:
      level = 2; 
      setMap(levels[level]);
      handleChange();
      break;
  }
}

function selectCar(){
  if(selecting == 5){
      level = 2;
      setMap(levels[level]);
      handleChange();
      return;
  }
  selected_car = selecting;
  FirstGenGarage();
}

function updateGarage(direction){
  if(selecting+direction < 0 || selecting+direction>5 ) return; 

  var PointerPos = getAll(Pointer);
  clearTile(PointerPos[0].x, PointerPos[0].y);
  
  selecting +=direction; 
  switch(selecting){
    case 0:
      addSprite(1,2,Pointer);
      break;
      
    case 1:
      addSprite(3,2,Pointer);
      break;

    case 2:
      addSprite(5,2,Pointer);
      break;

    case 3:
      addSprite(1,4,Pointer);
      break;

    case 4:
      addSprite(3,4,Pointer);
      break;

    default:
      addSprite(5,4,Pointer);
      break;
  }
}
/*
  function to make the pointer snap in the two options
*/
function updateIconMenu(){
  var PointerPos = getAll(Pointer);
  clearTile(PointerPos[0].x, PointerPos[0].y);
  
  if(selecting === 0){
      addSprite(2,2,Pointer);
      return;
  }
  addSprite(4,2,Pointer);
}

function updateCar(){
  console.log("car x = " +carX);
  var prevPos = getFirst(cars[selected_car]);
  clearTile(prevPos.x,prevPos.y);
  addSprite(carX,4,cars[selected_car]);
}

function select(){
  IsFirstTime = true; 
  level = selecting;
  console.log(level);
  setMap(levels[level]);
  handleChange();
}

var canSpawn = true;
function spawnObstacle() {
  if(!canSpawn){
    canSpawn = true;
    return
  }
  let x = Math.floor(Math.random() * 3) + 2;;
  let y = 1; 
  addSprite(x, y, Traffic_cone);
  canSpawn = false;
}

function spawnCoins() {
  if(canSpawn){
    return;
  }
  
  let x = Math.floor(Math.random() * 3) + 2;;
  let y = 1; 
  addSprite(x, y, Coin);
}

function moveObstacles() {
  let obstacles = getAll(Traffic_cone);

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
  }
}

function moveCoins() {
  let coins = getAll(Coin);

  for (let i = 0; i < coins.length; i++) {
    coins[i].y += 1;
  }
}

function despawnObstacles() {
  let obstacles = getAll(Traffic_cone);

  for (let i = 0; i < obstacles.length; i++) {
   if (obstacles[i].y == 4) {
     obstacles[i].remove();
   }
  }
}

function despawnCoins() {
  let coins = getAll(Coin);

  for (let i = 0; i < coins.length; i++) {
   if (coins[i].y == 4) {
     coins[i].remove();
   }
  }
}

function checkHit() {
  let obstacles = getAll(Traffic_cone);
  let p = getFirst(cars[selected_car]);

  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x == p.x && obstacles[i].y == p.y) {
      return true;
    }
  }

  return false;
}

function checkHitCoin() {
  let coins = getAll(Coin);
  let p = getFirst(cars[selected_car]);

  for (let i = 0; i < coins.length; i++) {
    if (coins[i].x == p.x && coins[i].y == p.y) {
      return true;
    }
  }

  return false;
}

/*
  game loop
*/

var isGameOver = false;
var gameLoop = setInterval(() => {
  if(!(level == 1)){}
  else{
    if(!isGameOver){
      updateCar(); 
      despawnObstacles();
      despawnCoins();
      moveObstacles();
      moveCoins();
    
      spawnCoins();
      spawnObstacle();

      if(checkHitCoin()){
        money+=1;
        addText(money.toString(), { x: 3, y: 2, color: color`6` })
        playTune(coinPicked);
      }
    
      if (checkHit()) {
        isGameOver = true;
        addText("Game Over!", {
          x: 5,
          y: 6,
          color: color`3`
        });
        addText("press s to restart", {
          x: 1,
          y: 7,
          color: color`0`
        });
        playTune(conePicked);
         playbackMelody.end();
        localStorage.setItem('money', money.toString());
        localStorage.setItem('selectedCar', selected_car.toString());
      }
    }
  }
}, 500);

function restartGame() {
  localStorage.setItem('money', money.toString());
  localStorage.setItem('selectedCar', selected_car.toString());
  isGameOver = false;
  clearText();
  // Clear existing sprites
  clearTile(3, 4); // Clear the player sprite
  clearTile(0, 0); // Clear the CoinIcon

  carX = 3; // Reset the player's position

  // Reset game flags and level
  inMenu = true;
  inGarage = false;
  level = 2;

  // Reset the game elements
  setMap(levels[level]);
  handleChange();
}

dFirstGenMenu();
