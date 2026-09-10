import {COLORS} from './world.js';
export function cat(ctx,p,t=0,selected=false,scale=1){
 ctx.save();ctx.translate(Math.round(p.x),Math.round(p.y));ctx.scale(scale,scale);const c=COLORS[p.id%10];
 if(selected){ctx.fillStyle='#536e5d';ctx.beginPath();ctx.moveTo(7,-13);ctx.lineTo(15,-13);ctx.lineTo(11,-8);ctx.fill();}
 ctx.fillStyle='#375247';ctx.fillRect(0,0,7,9);ctx.fillRect(15,0,7,9);ctx.fillRect(0,5,22,18);ctx.fillRect(3,20,6,8);ctx.fillRect(13,20,6,8);
 ctx.fillStyle=c;ctx.fillRect(2,2,3,7);ctx.fillRect(17,2,3,7);ctx.fillRect(2,7,18,14);ctx.fillRect(5,20,3,6);ctx.fillRect(14,20,3,6);
 ctx.fillStyle='#ffffff66';ctx.fillRect(3,8,15,2);ctx.fillStyle='#2d443b';const look=p.vx>0?1:p.vx<0?-1:0;ctx.fillRect(6+look,12,3,4);ctx.fillRect(14+look,12,3,4);ctx.fillRect(10,18,3,1);
 if(Math.abs(p.vx)>0&&p.grounded){ctx.fillStyle='#eaf0e1';ctx.fillRect(Math.sin(t*20)>0?3:13,26,7,3);}
 ctx.restore();
}
function text(c,s,x,y,size=12,color='#637b64',align='center'){c.fillStyle=color;c.font=`600 ${size}px ui-monospace, SFMono-Regular, monospace`;c.textAlign=align;c.fillText(s,x,y);}
function block(c,r,color='#b3c8a0'){c.fillStyle='#557452';c.fillRect(r.x,r.y,r.w,r.h);c.fillStyle=color;c.fillRect(r.x+1,r.y+1,r.w-2,r.h-2);c.fillStyle='#e6eecf';c.fillRect(r.x+1,r.y+1,r.w-2,3);}
function key(c,x,y,t){c.save();c.translate(x,y+Math.sin(t*3)*2);c.fillStyle='#b4903e';c.fillRect(1,1,14,12);c.fillRect(6,11,6,12);c.fillRect(10,16,6,4);c.fillStyle='#f4d578';c.fillRect(3,3,10,8);c.fillRect(8,9,2,12);c.fillRect(10,17,4,2);c.fillStyle='#e8eedf';c.fillRect(6,5,4,4);c.restore();}
export function render(c,w,selected){
 c.clearRect(0,0,960,540);c.fillStyle='#e8eedf';c.fillRect(0,0,960,540);
 // Soft graph-paper sky, seed-like flecks and an inset arcade frame.
 c.fillStyle='#dce5d2';for(let y=36;y<510;y+=24)for(let x=36;x<940;x+=24)c.fillRect(x,y,1,1);
 c.fillStyle='#cedec0';c.fillRect(0,0,960,20);c.fillRect(0,20,20,520);c.fillRect(940,20,20,520);c.fillRect(0,520,960,20);
 c.strokeStyle='#b7c9aa';c.lineWidth=1;c.strokeRect(19.5,19.5,921,501);
 text(c,String(w.stage.id||'CUSTOM').padStart(2,'0'),48,57,15,'#a8b99d','left');text(c,w.stage.mode==='normal'?'A LITTLE TEAMWORK':w.stage.mode.toUpperCase(),914,54,9,'#99ad8e','right');
 for(const p of w.platforms){block(c,p);for(let x=p.x+12;x<p.x+p.w-5;x+=23){c.fillStyle='#9ab88a66';c.fillRect(x,p.y+8,7,2);}}
 const d=w.door;c.fillStyle=w.hasKey?'#73967a':'#9ea78e';c.beginPath();c.moveTo(d.x,d.y+d.h);c.lineTo(d.x,d.y+8);c.lineTo(d.x+7,d.y);c.lineTo(d.x+d.w-7,d.y);c.lineTo(d.x+d.w,d.y+8);c.lineTo(d.x+d.w,d.y+d.h);c.closePath();c.fill();c.strokeStyle='#52684d';c.stroke();c.fillStyle=w.hasKey?'#405e48':'#d8ddc6';c.fillRect(d.x+5,d.y+9,22,29);c.fillStyle='#485d43';c.fillRect(d.x+9,d.y+22,4,4);text(c,w.hasKey?'↓ ENTER':'EXIT',d.x+16,d.y-12,8);
 for(const e of w.entities){
  if(e.open)continue;
  if(e.type==='gate'){c.fillStyle='#f2f6e7bb';c.fillRect(e.x,e.y,e.w,e.h);c.strokeStyle='#91ad9d';c.strokeRect(e.x+.5,e.y+.5,e.w-1,e.h-1);c.fillStyle='#c2d5c5';c.fillRect(e.x+4,e.y+4,3,e.h-8);text(c,String(e.remaining??e.need),e.x+e.w/2,e.y+e.h*0.66,16,'#6b8876');}
  if(e.type==='crate'){block(c,e,'#cbbb95');c.strokeStyle='#a48f6c';c.strokeRect(e.x+5,e.y+5,e.w-10,e.h-10);text(c,e.remaining??e.need,e.x+e.w/2,e.y+e.h/2+5,13,'#837450');}
  if(['lift','moving','bridge','extend','balance'].includes(e.type)){block(c,e,e.type==='bridge'?'#cbbb95':'#b7abd0');if(e.type==='lift'&&e.need){c.fillStyle='#fff9e6';c.fillRect(e.x+e.w/2-16,e.y-29,32,18);text(c,e.need,e.x+e.w/2,e.y-16,11);c.fillStyle='#80926f';c.fillRect(e.x+e.w/2-1,e.y-11,2,11);}if(e.active){c.fillStyle='#7ba585';c.fillRect(e.x+4,e.y+4,e.w-8,3);}}
  if(e.type==='button'||e.type==='switch'){block(c,e,e.active?'#8fc8a0':'#d88e99');if(e.type==='switch')text(c,'DON’T PUSH',e.x+8,e.y-10,8);}
  if(e.type==='checkpoint'){c.fillStyle='#6e8971';c.fillRect(e.x,e.y,2,28);c.fillStyle=e.active?'#e6b75b':'#8bbfbd';c.beginPath();c.moveTo(e.x+2,e.y);c.lineTo(e.x+20,e.y+7);c.lineTo(e.x+2,e.y+14);c.fill();}
  if(e.type==='pipe'){block(c,e,'#70b894');block(c,{x:e.x-4,y:e.y,w:e.w+8,h:10},'#8ccba8');text(c,'↓',e.x+e.w/2,e.y-9,15);}
  if(e.type==='spring'){c.strokeStyle='#7b87a0';c.beginPath();for(let x=e.x;x<e.x+e.w;x+=10){c.moveTo(x,e.y+e.h);c.lineTo(x+8,e.y);c.lineTo(x,e.y);}c.stroke();c.fillStyle='#899caf';c.fillRect(e.x,e.y,e.w,3);}
  if(e.type==='spikes'){c.fillStyle='#c07d72';for(let x=e.x;x<e.x+e.w;x+=12){c.beginPath();c.moveTo(x,e.y+e.h);c.lineTo(x+6,e.y);c.lineTo(x+12,e.y+e.h);c.fill();}}
  if(e.type==='hoop'){c.strokeStyle='#ab7964';c.lineWidth=3;c.beginPath();c.moveTo(e.x+e.w,e.y-27);c.lineTo(e.x+e.w,e.y+20);c.moveTo(e.x,e.y);c.lineTo(e.x+e.w,e.y);c.stroke();c.lineWidth=1;c.strokeStyle='#a6ad92';for(let i=0;i<5;i++){c.beginPath();c.moveTo(e.x+i*e.w/4,e.y+2);c.lineTo(e.x+7+i*(e.w-14)/4,e.y+22);c.stroke();}}
  if(e.type==='cannon'){block(c,e,'#bf9b84');}
  if(e.type==='fan'){
   if(e.direction==='left'){c.fillStyle='#b4d1c122';c.fillRect(e.x-(e.reach||320),e.y-30,e.reach||320,e.h+60);text(c,'←  ←  ←',e.x-100-(w.time*40)%55,e.y+25,18,'#91b7a8');c.strokeStyle='#729083';c.beginPath();c.ellipse(e.x+e.w/2,e.y+e.h/2,15,22,0,0,Math.PI*2);c.stroke();text(c,'✣',e.x+e.w/2,e.y+e.h/2+8,30,'#729083');}else{c.fillStyle='#badad166';c.fillRect(e.x,e.y-170,e.w,e.h+170);text(c,'↑  ↑  ↑',e.x+e.w/2,e.y+40-(w.time*40)%60,20,'#91b7a8');block(c,{x:e.x,y:e.y+e.h-12,w:e.w,h:12},'#a4b9c0');}
  }
 }
 if(w.course){
  const course=w.course;
  for(const r of course.ramps){c.save();c.translate(r.x+r.w/2,r.y);c.rotate(course.angle);block(c,{x:-r.w/2,y:0,w:r.w,h:11},'#b7abd0');c.restore();}
  const [bx,by,bw,bh]=course.button;block(c,{x:bx,y:by,w:bw,h:bh},course.solved?'#8fc8a0':'#d88e99');
  block(c,{x:course.spawn[0]-14,y:20,w:28,h:29},'#cbbb95');
  if(!course.solved){const b=course.ball;c.fillStyle='#f9f8ec';c.strokeStyle='#71816a';c.beginPath();c.arc(b.x,b.y,b.r,0,Math.PI*2);c.fill();c.stroke();}
 }
 if(w.key&&!w.hasKey)key(c,w.key.x,w.key.y,w.time);
 for(const coin of w.coins){c.fillStyle='#eac968';c.fillRect(coin.x,coin.y,coin.w,coin.h);c.fillStyle='#b59d4a';c.fillRect(coin.x+4,coin.y+3,2,9);}
 for(const b of w.bricks)block(c,b,b.color);
 if(w.ball&&!w.hasKey){c.fillStyle='#b18861';c.beginPath();c.arc(w.ball.x+6,w.ball.y+6,6,0,Math.PI*2);c.fill();c.strokeStyle='#665948';c.stroke();c.beginPath();c.moveTo(w.ball.x,w.ball.y+6);c.lineTo(w.ball.x+12,w.ball.y+6);c.stroke();}
 if(['numbers','timers'].includes(w.stage.mode)){
  text(c,w.stage.mode==='numbers'?'ALL 7':`0.00 < ${w.clocks.reduce((n,t)=>n+t.value,0).toFixed(2)} < ${(w.stage.sumLimit||.8).toFixed(2)}`,480,137,20,'#64775c');
  w.players.forEach((p,i)=>{const x=80+(i+.5)*800/w.count;const value=w.stage.mode==='numbers'?w.numbers[i]:w.clocks[i].value.toFixed(2);block(c,{x:x-29,y:220,w:58,h:44},'#f6f4dd');text(c,String(value),x,248,17,COLORS[i]);text(c,'P'+(i+1),x,286,10);if(w.stage.mode==='timers'&&w.clocks[i].stopped)text(c,w.clocks[i].value<(w.stage.sumLimit||.8)/w.count?'STOPPED':'RETRY',x,307,10);});
 }
 if(w.well){
  const well=w.well,cell=Math.min(18,800/well.width),left=480-well.width*cell/2,top=75;
  text(c,`${Math.max(0,well.goal-well.lines)} ROWS LEFT`,480,54,15);
  c.fillStyle='#faf8ed';c.fillRect(left-2,top-2,well.width*cell+4,well.height*cell+4);c.strokeStyle='#9aaa8e';c.strokeRect(left-2,top-2,well.width*cell+4,well.height*cell+4);
  const tile=(x,y,id,alpha=1)=>{c.globalAlpha=alpha;block(c,{x:left+x*cell,y:top+y*cell,w:cell-1,h:cell-1},COLORS[id]);c.globalAlpha=1;};
  well.grid.forEach((row,y)=>row.forEach((id,x)=>{if(id!==null)tile(x,y,id);}));
  for(const p of well.pieces.filter(Boolean)){for(const [dx,dy]of p.cells)tile(p.x+dx,p.y+dy,p.id);text(c,'P'+(p.id+1),left+(p.x+1)*cell,top+p.y*cell-6,8,COLORS[p.id]);}
  text(c,'← → MOVE · USE ROTATES · JUMP DROPS',480,top+well.height*cell+19,9);
 }
 if(w.stage.mode==='stop'){const red=w.time%7>4.5;c.fillStyle=red?'#d5786e':'#72a889';c.beginPath();c.arc(480,63,10,0,7);c.fill();text(c,red?'FREEZE':'GO TOGETHER',480,87,10);}
 for(const p of w.players){if(p.exited)continue;cat(c,p,w.time,p.id===selected);text(c,String(p.id+1),p.x+11,p.y-18,8,COLORS[p.id]);}
 if(w.stage.id===1&&w.time<12){text(c,'← FIND THE KEY',120,360,10,'#8c9e7d');text(c,'PUSH TOGETHER →',590,360,10,'#8c9e7d');}
 for(const p of w.particles){c.globalAlpha=p.life/.7;c.fillStyle=p.color;c.fillRect(p.x,p.y,4,4);}c.globalAlpha=1;
 if(w.hasKey)text(c,`${w.players.filter(p=>p.exited).length} / ${w.count} HOME`,480,38,10,'#659071');
 if(w.stage.mode==='coins')text(c,`${w.coins.length} COINS LEFT`,480,48,13);
}
