import test from 'node:test';
import assert from 'node:assert/strict';
import {actor,rect,stepActor,overlap,validateStage} from '../src/physics.js';
import {World} from '../src/world.js';
import {stages} from '../src/stages.js';
const dt=1/60;
test('stage 5 moving barrier pushes cats sideways without teleporting them upward',()=>{
 for(const time of [1,7])for(const input of [{},{left:true},{right:true}]){
  const w=new World(stages[4],2),barrier=w.entities.find(e=>e.type==='moving'&&e.axis==='x');
  w.time=time;barrier.x=barrier.originX+(1-Math.cos(time*barrier.speed*2))/2*barrier.travel;
  const direction=Math.sign(Math.sin(time*barrier.speed*2)),p=w.players[0];
  p.x=direction>0?barrier.x+barrier.w:barrier.x-p.w;p.y=272;p.grounded=true;
  for(let i=0;i<20;i++){
   const x=p.x,barrierX=barrier.x;
   w.update(dt,[input]);
   assert.equal(p.y,272,'side contact must not land on the barrier top');
   assert.ok(Math.abs(p.x-x)<=190*dt+Math.abs(barrier.x-barrierX)+0.001,'movement remains bounded by input and barrier travel');
   if(!input.left&&!input.right)assert.equal(p.x,direction>0?barrier.x+barrier.w:barrier.x-p.w,'idle cat is pushed along the barrier face');
   assert.ok(!overlap(p,barrier),'barrier stays solid');
   assert.ok(direction>0?p.x>=barrier.x+barrier.w:p.x+p.w<=barrier.x,'cat stays on the contacted side');
  }
 }
});
test('gravity lands without tunneling, jump lands again, walls stop horizontal motion',()=>{const p=actor(40,100);const floor=rect(0,300,960,20),wall=rect(150,0,20,300);for(let i=0;i<120;i++)stepActor(p,{right:true},[floor,wall],[p],dt);assert.equal(p.y,272);assert.equal(p.x,128);assert.ok(p.grounded);stepActor(p,{jump:true},[floor,wall],[p],dt);assert.ok(p.vy<0);for(let i=0;i<120;i++)stepActor(p,{},[floor,wall],[p],dt);assert.equal(p.y,272);});
test('cats land on teammates and jump off their heads',()=>{const a=actor(40,100),b=actor(40,272);const floor=rect(0,300,960,20);for(let i=0;i<120;i++){stepActor(b,{},[floor],[a,b],dt);stepActor(a,{},[floor],[a,b],dt);}assert.equal(a.y,244);assert.equal(a.support,b);stepActor(a,{jump:true},[floor],[a,b],dt);assert.ok(a.vy<0);});
test('every stage validates and simulates for 2 and 10 players without nonfinite bodies',()=>{assert.equal(stages.length,20);for(const s of stages){validateStage(s);for(const count of [2,10]){const w=new World(s,count);for(let i=0;i<240;i++)w.update(dt,[]);for(const p of [...w.players,...w.entities])assert.ok(Number.isFinite(p.x)&&Number.isFinite(p.y),`${s.id}: finite positions`);}}});
test('push barriers stay solid, require matching direction and move with the crew',()=>{const w=new World(stages[0],2),g=w.entities[1];w.players.forEach((p,i)=>{p.x=g.x-p.w;p.y=472-i*28;});w.update(dt,[{right:true},{}]);assert.equal(g.x,758);w.update(dt,[{right:true},{right:true}]);assert.ok(g.x>758);assert.equal(g.open,false);assert.equal(g.remaining,0);});
test('key required; everyone must explicitly enter the door',()=>{const w=new World(stages[0],2);w.players.forEach(p=>{p.x=w.door.x;p.y=w.door.y;});w.update(dt,[{use:true},{use:true}]);assert.ok(!w.won);w.grantKey();w.update(dt,[{use:true},{}]);assert.equal(w.players[0].exited,true);assert.ok(!w.won);w.update(dt,[{},{use:true}]);assert.ok(w.won);});
test('bridge extends horizontally after the switch without becoming a lift',()=>{const w=new World(stages[1],2),bridge=w.entities[1];bridge.active=true;for(let i=0;i<120;i++)w.update(dt,[]);assert.equal(bridge.x,500);assert.equal(bridge.w,280);assert.equal(bridge.y,500);});
test('numbers, clocks, coins and tetris award a shared key on their actual objective',()=>{let w=new World(stages[6],2);w.numbers=[7,7];w.update(dt,[]);assert.ok(w.hasKey);w=new World(stages[8],2);w.clocks=[{value:.24,stopped:true},{value:.41,stopped:true}];w.update(dt,[]);assert.ok(w.hasKey);w=new World(stages[11],2);w.coins=[];w.update(dt,[]);assert.ok(w.hasKey);w=new World(stages[18],2);w.well.lines=10;w.update(dt,[]);assert.ok(w.hasKey);});
test('falling, timed failure and red-light movement are explicit failure states',()=>{let w=new World(stages[0],2);w.players[0].y=600;w.update(dt,[]);assert.ok(w.failed);w=new World(stages[11],2);w.time=71;w.update(dt,[]);assert.ok(w.failed);w=new World(stages[19],2);w.time=5;w.update(dt,[{right:true}]);assert.ok(w.failed);});
test('workshop rejects malformed stage data',()=>{assert.throws(()=>validateStage({name:'bad'}));assert.throws(()=>validateStage({...stages[0],entities:[{type:'unknown',x:2,y:3}]}));assert.throws(()=>validateStage({...stages[0],platforms:[[0,0,-1,3]]}));assert.ok(overlap(rect(0,0,10,10),rect(9,9,10,10)));});
test('complete stage 1 by pushing both solid barriers and carrying the key to the exit',()=>{const w=new World(stages[0],2);function tick(input,n){for(let i=0;i<n;i++)w.update(dt,input);}tick([{},{}],3);tick([{left:true},{left:true}],250);tick([{right:true},{right:true}],16);tick([{jump:true},{}],25);assert.ok(w.hasKey);tick([{},{}],50);tick([{right:true,use:true},{right:true,use:true}],600);assert.ok(w.won,JSON.stringify(w.players));});
test('basketball shooting crosses the hoop downward and grants a key',()=>{for(const index of [5,10]){const w=new World(stages[index],2),p=w.players[0];p.x=795;p.y=472;w.ball.x=800;w.ball.y=460;w.update(dt,[{use:true}]);assert.equal(w.ball.held,0);w.update(dt,[{}]);w.update(dt,[{use:true}]);for(let i=0;i<100;i++)w.update(dt,[]);assert.ok(w.hasKey,'basket stage '+w.stage.id);}});
test('minimal custom stages get the normal mode default',()=>{const w=new World({name:'Custom',spawn:[100,472],door:[110,460],key:[110,472],platforms:[[20,500,920,20]]});assert.equal(w.stage.mode,'normal');w.update(dt,[{use:true},{use:true}]);assert.ok(w.won);});
