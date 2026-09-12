import {referenceFor} from './references.js';
// Human-editable stage catalog. Coordinates: 960 × 540, top-left origin.
// Stage numbers follow the Classic Edition screenshot gallery. Names are original.
// Entity “need” is expressed for ten cats, proportionally scaled to the current crew.
const floor=[20,500,920,20];
const stage=(id,name,hint,data={})=>({id,name,hint,reference:referenceFor(id),spawn:[360,472],door:[858,460],key:[130,425],platforms:[floor],entities:[],mode:'normal',...data});
export const stages=[
 stage(1,'A helping paw','Push the tall barriers together. Get the key on the left, then push right to the door.',{entities:[{type:'gate',x:220,y:20,w:55,h:480,need:3,pushable:true},{type:'gate',x:758,y:20,w:55,h:480,need:10,pushable:true}]}),
 stage(2,'Bridge the gap','Jump across to the switch to extend the bridge. Stack together for the key.',{spawn:[60,472],key:[868,380],platforms:[[20,500,480,20],[780,500,160,20]],entities:[{type:'button',x:800,y:492,target:'bridge'},{type:'extend',id:'bridge',x:620,y:500,w:160,h:20,toX:500}]}),
 stage(3,'Stand by me','Push the numbered blocks. A friend’s head makes a very good step.',{spawn:[245,472],key:[460,350],keyStack:true,entities:[{type:'crate',x:160,y:468,w:32,h:32,need:2},{type:'crate',x:680,y:416,w:68,h:84,need:5}]}),
 stage(4,'The long way up','Climb the moving platforms. Flags save your position; the pipe returns you home.',{spawn:[75,472],door:[350,106],key:[850,68],platforms:[[20,500,240,20],[320,500,440,20],[140,310,400,18],[650,310,120,18],[140,146,460,18],[665,146,275,18]],entities:[{type:'moving',x:68,y:420,w:80,h:10,axis:'y',travel:230,speed:0.55},{type:'moving',x:805,y:430,w:80,h:10,axis:'y',travel:150,speed:0.7},{type:'checkpoint',x:695,y:282},{type:'pipe',x:450,y:464,toX:340,toY:116},{type:'spikes',x:270,y:514,w:45,h:12}]}),
 stage(5,'Going up','Ride the numbered lifts together. The key is on the lower floor.',{spawn:[60,472],key:[75,402],door:[855,82],platforms:[floor,[20,300,400,18],[550,320,160,18],[270,122,670,18]],entities:[{type:'lift',x:75,y:288,w:130,h:12,toY:150,need:2,fixedNeed:true},{type:'lift',x:422,y:310,w:126,h:12,toY:400,need:7},{type:'moving',x:780,y:450,w:80,h:10,axis:'y',travel:135,speed:0.5},{type:'moving',x:270,y:140,w:8,h:160,axis:'x',travel:280,speed:0.4}]}),
 stage(6,'Nothing but net','Use S / ↓ beside the ball to pick it up, then use again to shoot toward the hoop.',{mode:'basket',key:null,spawn:[280,472],entities:[{type:'hoop',x:888,y:447,w:38,h:12}],ball:[795,473],goal:1}),
 stage(7,'Lucky sevens','Each cat owns a number. Use S / ↓ to cycle yours. Make every number seven.',{mode:'numbers',key:null,entities:[],target:7}),
 stage(8,'A balancing act','Stand on the side platforms to tilt the ramps. Roll the ball right, left, then right onto the switch.',{
  mode:'tilt',spawn:[380,472],door:[464,460],key:null,
  platforms:[floor,[145,20,22,328],[793,20,22,328],[145,328,670,20],
   [220,478,44,22],[220,456,22,22],[696,478,44,22],[718,456,22,22]],
  entities:[{type:'balance',side:'left',x:55,y:450,w:148,h:10},{type:'balance',side:'right',x:757,y:450,w:148,h:10}],
  course:{ramps:[[248,118,345],[363,188,345],[248,258,345]],ball:[300,64],button:[685,320,22,8],left:167,right:793,floor:328,maxTilt:0.13}
 }),
 stage(9,'Perfect timing','Stop every clock with S / ↓. Their combined time must be above 0 and below 0.80 seconds. Use again to restart.',{mode:'timers',key:null,spawn:[110,472],platforms:[floor,[95,320,735,16]],sumLimit:0.8}),
 stage(10,'Brick by brick','Move your cat under the ball. Clear the bricks together; jumping adds speed.',{mode:'breakout',key:null,spawn:[80,472],door:[470,460]}),
 stage(11,'Keep it up','Keep the ball off the ground. Bounce it from one cat to the next and into the key box.',{mode:'cannon',key:null,spawn:[360,472],door:[858,460],platforms:[floor,[842,386,98,16]],entities:[{type:'keybox',x:52,y:462,w:30,h:38},{type:'cannon',x:858,y:346,w:58,h:40}],cannon:{spawn:[836,350],targetX:82,speed:315,retry:0.8}}),
 stage(12,'Loose change','Collect every coin before time runs out. The spring floor keeps you bouncing.',{mode:'coins',key:null,timeLimit:70,spawn:[80,280],door:[470,460],platforms:[floor,[140,108,75,12],[240,108,75,12],[655,108,75,12],[755,108,75,12]],entities:[{type:'spring',x:20,y:490,w:920,h:10}]}),
 stage(13,'Around the bend','Stay connected: lower a friend to the key, then take the open right hatch around and into the corridor.',{
  mode:'tether',spawn:[155,162],door:[745,372],key:[65,250],
  platforms:[floor,[110,190,700,175],[110,365,25,135],[255,420,575,40]],
  entities:[{type:'gate',x:810,y:190,w:130,h:18,opensWithKey:true}],
  tether:{restLength:58,maxLength:112,stiffness:13,jumpBoost:180}
 }),
 stage(14,'Through the looking pipe','Look at the ghost to stop it and cycle its arrow. Everyone look away to send it in that direction. Guide its key into the roof pipe.',{mode:'ghost',spawn:[340,472],door:[464,460],key:null,
  platforms:[[170,500,620,20],[170,325,620,20],[170,345,22,155],[768,345,22,155],[170,172,620,22]],
  ghost:{spawn:[848,414],speed:72,cycle:.6},entities:[{type:'pipe',x:456,y:128,w:48,h:44,toX:469,toY:440,ghostOnly:true}]}),
 stage(15,'A rising tide','Gather on the team platform. Keep everyone aboard as it rises and crosses.',{mode:'tower',spawn:[65,462],door:[855,82],key:[810,70],platforms:[[20,500,180,20],[750,122,190,16]],entities:[{type:'lift',id:'tower',x:45,y:490,w:170,h:10,toY:130,need:10}]}),
 stage(16,'All aboard','Each lift needs the whole crew. Stack up, travel together, and leap to the next.',{spawn:[40,472],door:[855,134],key:[805,125],platforms:[[20,500,125,20],[820,174,120,16]],entities:[{type:'lift',x:175,y:488,w:135,h:12,toY:386,need:10},{type:'lift',x:360,y:380,w:135,h:12,toY:275,need:10},{type:'lift',x:550,y:272,w:135,h:12,toY:180,need:10}]}),
 stage(17,'A grand detour','Control one cat together: match directions and actions. P1: WASD + E; P2: arrows + Enter. Up jumps; Down or Use enters pipes and the exit.',{mode:'shared',spawn:[75,472],door:[35,460],key:[842,43],
  platforms:[[20,500,150,20],[220,478,24,22],[294,456,24,22],[394,456,24,22],
   [120,238,100,22],[270,260,148,22],[270,238,24,22],[394,238,24,22],
   [20,150,25,22],[45,172,25,22],[70,194,25,22],[95,216,25,22],
   [95,106,149,22],[294,106,124,22],[469,128,48,22],[594,194,99,22],
   [768,128,24,22],[792,128,24,22],[868,84,72,22]],
  entities:[{type:'moving',x:488,y:438,w:90,h:10,axis:'y',travel:132,speed:.6},{type:'moving',x:822,y:438,w:90,h:10,axis:'y',travel:220,speed:.6},
   {type:'checkpoint',x:158,y:210},{type:'checkpoint',x:902,y:56},{type:'pipe',x:469,y:84,w:48,h:44,toX:75,toY:472}]}),
 stage(18,'Against the breeze','Use the spring and tiny island to reach the key. The fan blows left; time the return jump.',{spawn:[80,472],door:[46,460],key:[730,367],platforms:[[20,500,420,20],[600,500,22,20]],entities:[{type:'spring',x:414,y:489,w:26,h:11},{type:'moving',id:'fan-deck',x:850,y:478,w:85,h:12,axis:'y',travel:205,speed:0.35},{type:'fan',attach:'fan-deck',direction:'left',x:878,y:428,w:35,h:50,reach:300,force:95}]}),
 stage(19,'A perfect fit','Move your falling blocks with left/right, rotate with S / ↓, and drop with jump. Clear ten shared rows.',{mode:'tetris',key:null,spawn:[260,472],door:[470,460],platforms:[floor,[20,392,920,20]],goal:10}),
 stage(20,'One last favor','Collect the key below. Push both blocks into useful positions. Freeze when the signal turns red.',{mode:'stop',spawn:[140,472],key:[65,412],door:[852,84],platforms:[floor,[20,320,785,18],[245,124,695,18],[820,450,100,18],[850,402,70,18],[880,355,40,18],[75,252,45,14],[145,192,45,14]],entities:[{type:'crate',x:572,y:257,w:65,h:63,need:10},{type:'crate',x:284,y:90,w:30,h:34,need:1},{type:'switch',x:485,y:115},{type:'spring',x:660,y:489,w:45,h:11}]})
];
