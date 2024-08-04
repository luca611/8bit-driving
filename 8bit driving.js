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
0000000000000000
0000000000000000
0000000000000000` ],

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
)

var inMenu = true; 
var money = 0; 
var selected_car = 0; 

var selecting = 0; 
var IsFirstTime = true;

var cars = [Blank_car,Blue_Car,Green_Car,Red_Car,Purple_car];
var objects = []; //this is ehre all moving object will be placed 

setSolids([Guard_rail,Hole,Traffic_cone]);

//the map is still but objects are updated and generated on screen.
let level = 2;
const levels = [
  map`
8777777
7w7b7g7
7j77777
7r7p767
7777777`,
  map`
9999999
kslllsk
ksthlsk
kslllsk
kslllsk`,
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
    updateIcon();
  }
})

onInput("d", () => {
  if(inMenu){
    selecting = 1; 
    updateIcon();
  }
})

onInput("w", () => {
  if(inMenu){
    select();
  }
})


afterInput(() => {
  
})

function FirstGenGame(){
  
}

function FirstGenGarage(){
  
}

/*
  function create ui components in the menu
*/
function FirstGenMenu(){
  if(!IsFirstTime) return; 

  addText("8bit Driving", { x: 4, y: 1, color: color`2` })
  setBackground(MenuBg);
  IsFirstTime = false; 
}

/*
  function to make the pointer snap in the two options
*/
function updateIcon(){
  var PointerPos = getAll(Pointer);
  clearTile(PointerPos[0].x, PointerPos[0].y);
  
  if(selecting === 0){
      addSprite(2,2,Pointer);
      return;
  }
  addSprite(4,2,Pointer);
}


function select(){
  IsFirstTime = true; 
  level = selecting;
  setMap(levels[level]);
}
/*
  game loop
*/

if(!inMenu){
    
}else{
  FirstGenMenu();
}
