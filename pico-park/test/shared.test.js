import test from 'node:test';
import assert from 'node:assert/strict';
import {World} from '../src/world.js';
import {stages} from '../src/stages.js';
const dt=1/60;
test('stage 17 has one body and requires every controller to match, including combined inputs',()=>{
 for(const count of [2,10]){
  const w=new World(stages[16],count),p=w.players[0];assert.equal(w.players.length,1);w.update(dt);
  const x=p.x;
  w.update(dt,[{right:true}]);assert.equal(p.x,x);
  w.update(dt,[{right:true},{left:true}]);assert.equal(p.x,x);
  w.update(dt,Array.from({length:count},()=>({right:true})));assert.ok(p.x>x);assert.ok(w.sharedControl.input.right);
  const moved=p.x;w.update(dt,[{right:true,up:true},{right:true}]);assert.equal(p.x,moved);assert.equal(p.vy,0);
  w.update(dt,Array.from({length:count},()=>({up:true,right:true})));assert.ok(p.x>moved);assert.ok(p.vy<0);
 }
});
test('matching left moves left; a lone jump never triggers a jump',()=>{
 const w=new World(stages[16],2),p=w.players[0];w.update(dt);
 w.update(dt,[{up:true},{}]);assert.equal(p.vy,0);
 w.update(dt,[{left:true},{left:true}]);assert.ok(p.x<stages[16].spawn[0]);
});
test('down and use require matching actions to enter the pipe and finish with one shared cat',()=>{
 for(const action of ['down','use']){
  const w=new World(stages[16],2),p=w.players[0],pipe=w.entities.find(e=>e.type==='pipe');
  p.x=pipe.x;p.y=pipe.y-28;w.update(dt,[{[action]:true},{}]);assert.equal(p.x,pipe.x);
  w.update(dt,[{down:true},{use:true}]);assert.equal(p.x,pipe.x);
  w.update(dt,[{[action]:true},{[action]:true}]);assert.equal(p.x,pipe.toX);
  w.update(dt);w.grantKey();p.x=w.door.x;p.y=w.door.y;
  w.update(dt,[{[action]:true},{}]);assert.equal(w.won,false);
  w.update(dt,[{[action]:true},{[action]:true}]);assert.equal(w.won,true);
 }
});
test('other stages retain independent characters and input',()=>{
 const w=new World(stages[0],2),x=w.players[1].x;
 w.update(dt,[{right:true},{}]);assert.equal(w.players.length,2);assert.equal(w.players[1].x,x);assert.ok(w.players[0].vx>0);
});
