import test from 'node:test';
import assert from 'node:assert/strict';
import {World} from '../src/world.js';
import {stages} from '../src/stages.js';
import {overlap,validateStage} from '../src/physics.js';
const dt=1/60;
test('one watcher freezes the ghost; stopped arrows cycle through all four directions',()=>{
 for(const count of [2,10]){
  const w=new World(stages[13],count),g=w.ghost;
  w.players.forEach(p=>p.facing=-1);w.players[count-1].facing=1;
  const seen=new Set(),start=[g.x,g.y];
  for(let i=0;i<150;i++){w.update(dt);seen.add(g.direction);assert.deepEqual([g.x,g.y],start);}
  assert.equal(seen.size,4);
  w.update(dt,Array.from({length:count},()=>({left:true})));
  const before=[g.x,g.y],direction=g.direction;
  for(let i=0;i<10;i++)w.update(dt);
  assert.equal(g.watched,false);assert.equal(g.direction,direction);assert.notDeepEqual([g.x,g.y],before);
  assert.ok(w.players.every(p=>p.facing===-1),'idle cats keep looking away');
  w.update(dt,[{right:true}]);const stopped=[g.x,g.y];w.update(dt);
  assert.equal(g.watched,true);assert.deepEqual([g.x,g.y],stopped);
 }
});
test('ghost can be steered around the roof and deliver a collectible key for a full clear',()=>{
 const w=new World(stages[13],2),g=w.ghost;
 const watch=()=>w.players.map(p=>(g.x+g.w/2>=p.x+p.w/2?{right:true}:{left:true}));
 const away=()=>w.players.map(p=>(g.x+g.w/2>=p.x+p.w/2?{left:true}:{right:true}));
 const steer=(direction,until)=>{
  for(let i=0;g.direction!==direction&&i<200;i++)w.update(dt,watch());
  assert.equal(g.direction,direction);
  for(let i=0;!until()&&i<600;i++)w.update(dt,away());
  assert.ok(until());
 };
 steer(3,()=>g.y<=100);steer(2,()=>g.delivered);
 assert.ok(w.key);assert.equal(w.hasKey,false,'pipe releases the key for pickup');
 assert.equal(g.delivered,true);
 for(let i=0;i<240&&!w.won;i++)w.update(dt,w.players.map(p=>({left:p.x>w.key.x,right:p.x<w.key.x-3,jump:i%50<30,use:true})));
 assert.equal(w.won,true);assert.equal(w.failed,false);
});
test('ghost cannot cross the room wall or roof and malformed ghost settings are rejected',()=>{
 const w=new World(stages[13],2),g=w.ghost;w.players.forEach(p=>p.facing=-1);
 for(let i=0;i<150;i++)w.update(dt);
 assert.equal(g.x,790);assert.ok(w.platforms.every(r=>!overlap(g,r)));
 for(const cycle of [0,-1,NaN])assert.throws(()=>validateStage({...stages[13],ghost:{...stages[13].ghost,cycle}}));
});
test('stage 17 gaps stay open, stepping stones support cats, and flags recover falls',()=>{
 const w=new World(stages[16],2),p=w.players[0];
 for(const [x,y] of [[222,450],[296,428],[396,428],[70,166],[771,100]]){
  p.x=x;p.y=y-10;p.vy=0;
  for(let i=0;i<30;i++)w.update(dt);
  assert.equal(p.y,y);assert.ok(p.grounded);
 }
 const flag=w.entities.find(e=>e.type==='checkpoint');p.x=flag.x;p.y=flag.y;w.update(dt);
 assert.ok(flag.active);p.x=600;p.y=600;w.update(dt);assert.deepEqual([p.x,p.y],w.checkpoint);
 const fresh=new World(stages[16],2);fresh.players[0].x=180;fresh.players[0].y=478;
 for(let i=0;i<40;i++)fresh.update(dt);
 assert.equal(fresh.players[0].x,stages[16].spawn[0],'bottom gap falls back to spawn');
 assert.equal(w.entities.filter(e=>e.type==='moving').length,2);
});
