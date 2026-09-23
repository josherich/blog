import test from 'node:test';
import assert from 'node:assert/strict';
import {corners,center,rotate,dimensions,setQuad,translate,alignLayers,distributeLayers,project,validQuad,resizeQuad,hitQuad} from '../src/core/geometry.js';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-8, `${a} != ${b}`);
const rect=(x=0,y=0,w=100,h=50)=>({x,y,w,h});
test('rotation and resize preserve center and source dimensions',()=>{
 const l=rect(); const q=rotate(corners(l),30); setQuad(l,q);
 near(dimensions(q).w,100); near(dimensions(q).rotation,30);
 const resized=resizeQuad(q,200,100); near(dimensions(resized).w,200); near(dimensions(resized).h,100);
 near(center(resized).x,center(q).x); near(center(resized).y,center(q).y); setQuad(l,resized); translate(l,10,20);
 assert.equal(l.sourceWidth,100); assert.equal(l.sourceHeight,50); near(center(l.quad).x,60);
});
test('projective mapping preserves corners and rejects crossed geometry',()=>{
 const q=[{x:10,y:20},{x:200,y:0},{x:150,y:160},{x:40,y:100}];
 assert.ok(validQuad(q)); [[0,0],[1,0],[1,1],[0,1]].forEach(([u,v],i)=>{const p=project(q,u,v); near(p.x,q[i].x);near(p.y,q[i].y)});
 assert.ok(hitQuad(q,project(q,.5,.5))); assert.equal(hitQuad(q,{x:-100,y:-100}),false);
 assert.equal(validQuad([q[0],q[2],q[1],q[3]]),false);
});
test('alignment uses transformed bounds and spacing accounts for unequal sizes',()=>{
 const layers=[rect(0,0,10,20),rect(20,40,30,20),rect(100,80,20,20)];
 setQuad(layers[1],rotate(corners(layers[1]),90)); alignLayers(layers,{x:0,y:0,w:200,h:200},'right');
 layers.forEach(l=>near(l.x+l.w,200));
 const items=[rect(0,0,10,10),rect(20,0,30,10),rect(100,0,20,10)]; distributeLayers(items,'horizontal',true);
 near(items[1].x-(items[0].x+items[0].w),items[2].x-(items[1].x+items[1].w)); near(items[0].x,0);near(items[2].x,100);
 distributeLayers(items,'center'); near(items[1].x+15,57.5);
});
