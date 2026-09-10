import test from 'node:test';
import assert from 'node:assert/strict';
import {MarbleCourse} from '../src/marble.js';
import {World} from '../src/world.js';
import {stages} from '../src/stages.js';
test('stage 8 can roll across all three ramps and hit the enclosed switch',()=>{const c=new MarbleCourse(stages[7].course),visited=new Set();let direction=1;for(let i=0;i<3600&&!c.solved;i++){const ramp=c.ramps.indexOf(c.ball.support);if(ramp>=0){visited.add(ramp);direction=ramp===1?-1:1;}c.update(1/60,direction<0?1:0,direction>0?1:0);}assert.deepEqual([...visited],[0,1,2]);assert.ok(c.solved);});
test('weight platforms control tilt; neutral weight leaves the ball unsolved',()=>{const w=new World(stages[7],2);for(let i=0;i<120;i++)w.update(1/60,[]);assert.equal(w.course.angle,0);assert.equal(w.course.solved,false);const right=w.entities.find(e=>e.side==='right'),p=w.players[0];p.x=right.x+20;p.y=right.y-p.h;p.support=right;p.grounded=true;for(let i=0;i<30;i++)w.update(1/60,[]);assert.ok(w.course.angle>0);assert.ok(right.y>450);assert.ok(w.entities.find(e=>e.side==='left').y<450);});
test('switch releases a collectible key outside the sealed chamber, not a basketball goal',()=>{const w=new World(stages[7],2);assert.equal(w.ball,undefined);assert.equal(w.key,null);assert.equal(w.entities.some(e=>e.type==='hoop'),false);w.course.solved=true;w.update(1/60,[]);assert.equal(w.key.y,424);assert.equal(w.hasKey,false);const p=w.players[0];p.x=w.key.x;p.y=w.key.y;w.update(1/60,[]);assert.equal(w.hasKey,true);});
