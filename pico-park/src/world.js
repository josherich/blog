import {MarbleCourse} from './marble.js';
import {BlockWell} from './blocks.js';
import {actor,rect,overlap,near,stepActor,moveBody,validateStage,GRAVITY} from './physics.js';
export const COLORS=['#69cbb1','#eead55','#e793ad','#8b9ddd','#b5ce60','#af91d3','#e37e67','#72bed0','#b29c84','#a4aaa7'];
const defaults={balance:[148,10],gate:[32,90],crate:[38,38],lift:[100,12],moving:[90,12],button:[25,8],spring:[40,10],spikes:[40,12],checkpoint:[15,28],pipe:[36,36],number:[32,32],timer:[64,28],hoop:[42,12],cannon:[25,30],fan:[120,180],extend:[100,14],bridge:[100,14],switch:[18,9],tetris:[30,30]};
export class World{
 constructor(stage,count=2){
  validateStage(stage);stage={mode:'normal',...stage};this.stage=structuredClone(stage);this.count=count;this.time=0;this.won=false;this.failed=false;this.reason='';this.hasKey=false;this.events=[];this.score=0;this.particles=[];
  this.platforms=stage.platforms.map(r=>rect(...r));this.walls=[rect(0,-100,20,750),rect(940,-100,20,750),rect(0,-30,960,50)];
  this.entities=(stage.entities||[]).map((e,i)=>({...rect(e.x,e.y,...defaults[e.type]),...e,originX:e.x,originY:e.y,need:e.need?Math.max(1,e.fixedNeed?Math.min(count,e.need):Math.ceil(e.need*count/10)):0,active:false,open:false,id:e.id||'e'+i}));
  const spawnFloor=this.platforms.find(r=>r.x<=stage.spawn[0]&&r.x+r.w>=stage.spawn[0]+22&&r.y>=stage.spawn[1]+28&&r.y<=stage.spawn[1]+60);
  const columns=spawnFloor?Math.max(1,Math.min(count,Math.floor((spawnFloor.x+spawnFloor.w-stage.spawn[0])/25))):count;
  this.players=Array.from({length:count},(_,i)=>actor(stage.spawn[0]+(i%columns)*25,stage.spawn[1]-Math.floor(i/columns)*29,i));
  if(stage.id===15||stage.id===16){for(let i=0;i<count;i++){this.players[i].x=stage.spawn[0]+(i%4)*24;this.players[i].y=stage.spawn[1]-Math.floor(i/4)*29;}}
  this.door=rect(...stage.door,32,40);this.key=stage.key?rect(stage.key[0],stage.key[1]-(stage.keyStack?(count-2)*18:0),16,23):null;
  this.numbers=Array.from({length:count},(_,i)=>(i*3+4)%10);this.clocks=Array.from({length:count},()=>({value:0,stopped:false}));
  this.coins=[];if(stage.mode==='coins')for(let y=80;y<=440;y+=72)for(let x=68;x<=900;x+=90)this.coins.push(rect(x,y,10,15));
  this.bricks=[];if(stage.mode==='breakout')for(let y=80;y<150;y+=18)for(let x=65;x<900;x+=42)this.bricks.push(rect(x,y,39,15,{color:COLORS[Math.floor((y-80)/18)]}));
  if(stage.mode==='breakout'||stage.mode==='basket')this.ball={x:(stage.ball||[480,350])[0],y:(stage.ball||[480,350])[1],w:12,h:12,vx:stage.mode==='breakout'?150:0,vy:stage.mode==='breakout'?-230:0,held:-1};
  this.course=stage.mode==='tilt'?new MarbleCourse(stage.course):null;
  this.well=stage.mode==='tetris'?new BlockWell(count,{goal:stage.goal||10}):null;
 }
 emit(type,x=480,y=270){this.events.push(type);for(let i=0;i<10;i++)this.particles.push({x,y,vx:Math.sin(i*2.4)*70,vy:-40-Math.cos(i)*50,life:0.7,color:COLORS[i]});}
 solids(){return [...this.walls,...this.platforms,...this.entities.filter(e=>['gate','crate','lift','moving','bridge','extend','balance'].includes(e.type)&&!e.open)];}
 fail(reason){if(this.failed||this.won)return;this.failed=true;this.reason=reason;this.emit('fail');}
 grantKey(){if(!this.hasKey){this.hasKey=true;this.emit('key',this.door.x,this.door.y);}}
 update(dt,inputs=[]){
  if(this.won||this.failed)return;dt=Math.min(dt,1/30);this.time+=dt;
  for(const p of this.particles){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=250*dt;}this.particles=this.particles.filter(p=>p.life>0);
  const alive=this.players.filter(p=>!p.exited);
  const uses=this.players.map((p,i)=>{const use=!!inputs[i]?.use&&!p.wasUse;p.wasUse=!!inputs[i]?.use;return use;});
  if(this.course){
   const pads=this.entities.filter(e=>e.type==='balance');
   const weight=side=>{const pad=pads.find(e=>e.side===side);return alive.filter(p=>{let support=p.support;const seen=new Set();while(support&&this.players.includes(support)&&!seen.has(support)){seen.add(support);support=support.support;}return support===pad;}).length;};
   this.course.update(dt,weight('left'),weight('right'));
   if(this.course.solved&&!this.key&&!this.hasKey){this.key=rect(472,424,16,23);this.emit('switch',480,420);}
  }
  for(const e of this.entities){
   const ox=e.x,oy=e.y;
   if(e.type==='balance')e.y=e.originY+(e.side==='right'?1:-1)*(this.course?.angle||0)*270;
   if(e.type==='gate'&&!e.pushable&&!e.open){const gathered=alive.filter(p=>p.y+p.h>e.y&&p.y<e.y+e.h&&p.x+p.w>e.x-75&&p.x<e.x+e.w+75);if(gathered.length>=e.need){e.open=true;this.emit('switch',e.x,e.y+e.h/2);}}
   if(e.type==='button'&&alive.some(p=>overlap(rect(p.x,p.y, p.w,p.h+5),e))){e.active=true;for(const target of this.entities.filter(q=>q.id===e.target))target.active=true;}
   if(e.type==='lift'){
    const onboard=alive.filter(p=>p.x+p.w>e.x&&p.x<e.x+e.w&&p.y+p.h<=e.y+8&&p.y+p.h>=e.y-110);
    if(e.need>0&&onboard.length>=e.need)e.active=true;
    if(e.active){const target=e.toY??e.originY-170;e.y+=Math.sign(target-e.y)*Math.min(Math.abs(target-e.y),65*dt);}
    if(this.stage.mode==='tower'&&e.active&&e.y<=130)e.x=Math.min(735,e.x+75*dt);
   }
   if(e.type==='moving'){const offset=(Math.sin(this.time*(e.speed||0.6)*2- Math.PI/2)+1)/2*(e.travel||140);if(e.axis==='x')e.x=e.originX+offset;else e.y=e.originY-offset;}
   if(e.type==='crate'||(e.type==='gate'&&e.pushable)){
    const pushing=alive.filter(p=>p.y+p.h>e.y&&p.y<e.y+e.h&&((inputs[p.id]?.right&&Math.abs(p.x+p.w-e.x)<9)||(inputs[p.id]?.left&&Math.abs(p.x-e.x-e.w)<9)));
    const right=pushing.filter(p=>inputs[p.id]?.right),left=pushing.filter(p=>inputs[p.id]?.left);e.remaining=Math.max(0,e.need-Math.max(left.length,right.length));
    const dir=right.length>=e.need?1:left.length>=e.need?-1:0;
    if(dir){const old=e.x;moveBody(e,dir*(e.speed||95)*dt,0,this.solids().filter(q=>q!==e));for(const p of pushing.filter(p=>dir>0?inputs[p.id]?.right:inputs[p.id]?.left))p.x+=e.x-old;}
    if(e.type==='crate'){e.vy=(e.vy||0)+GRAVITY*dt;moveBody(e,0,e.vy*dt,this.solids().filter(q=>q!==e));}
   }
   if(e.type==='extend'&&e.active){const edge=e.x+e.w;e.x=Math.max(e.toX,e.x-110*dt);e.w=edge-e.x;}
   if(e.type==='bridge'){if(alive.some(p=>p.support===e))e.active=true;if(e.active){e.fall=(e.fall||0)+dt;if(e.fall>0.6){e.y+=140*dt;if(e.y>550)e.open=true;}}}
   if(e.x!==ox||e.y!==oy)for(const p of alive){
    if(p.support===e){p.x+=e.x-ox;p.y+=e.y-oy;}
    // Resolve a moving wall's side contact before actor gravity can treat it as a landing.
    else if(e.type==='moving'&&e.axis==='x'&&overlap(p,e)){
     if(e.x>ox)p.x=e.x+e.w;
     else if(e.x<ox)p.x=e.x-p.w;
    }
   }
  }
  const solids=this.solids();
  for(const p of [...alive].sort((a,b)=>b.y-a.y)){
   let input=inputs[p.id]||{};
   if(this.stage.mode==='stop'&&this.time%7>4.5){if(input.left||input.right||input.jump){this.fail('The light was red! Wait for green before moving.');return;}}
   const prevSupport=p.support;
   if(prevSupport&&this.players.includes(prevSupport))p.x+=prevSupport.vx*dt;
   stepActor(p,this.well&&!this.hasKey?{}:input,solids,this.players,dt);
   for(const e of this.entities){
    if(e.type==='spring'&&overlap(rect(p.x,p.y,p.w,p.h+5),e)&&p.vy>=0){p.vy=this.stage.mode==='coins'?-1050:-760;p.grounded=false;this.events.push('jump');}
    if(e.type==='fan'){const carrier=this.entities.find(q=>q.id===e.attach);if(carrier)e.y=carrier.y-e.h;if(e.direction==='left'){if(overlap(p,rect(e.x-(e.reach||320),e.y-30,e.reach||320,e.h+60)))moveBody(p,-(e.force||110)*dt,0,solids);}else if(overlap(p,rect(e.x,e.y-180,e.w,e.h+180))){p.vy=-360;p.y-=200*dt;}}
    if(e.type==='spikes'&&overlap(p,e))p.y=600;
    if(e.type==='checkpoint'&&near(p,e,45)){this.checkpoint=[e.x,e.y-5];e.active=true;}
    if(e.type==='pipe'&&uses[p.id]&&near(p,e,60)){p.x=e.toX;p.y=e.toY;p.vy=0;this.emit('switch',p.x,p.y);}
    if(e.type==='switch'&&uses[p.id]&&near(p,e,50))this.time=Math.floor(this.time/7)*7+4.55;
   }
   if(p.y>565){if([4,17].includes(this.stage.id)){[p.x,p.y]=this.checkpoint||this.stage.spawn;p.vy=0;this.emit('reset',p.x,p.y);}else{this.fail('A friend took a tumble. Everyone gets another try.');return;}}
   if(this.key&&overlap(p,this.key))this.grantKey();
   this.coins=this.coins.filter(c=>{if(overlap(p,c)){this.score++;this.events.push('coin');return false;}return true;});
   if(this.hasKey&&near(p,this.door,40)&&input.use){p.exited=true;this.emit('exit',p.x,p.y);}
  }
  this.updatePuzzle(dt,inputs,uses,solids);
  if(this.stage.timeLimit&&this.time>=this.stage.timeLimit&&!this.hasKey)this.fail('Time is up. Sweep the coins together and try again.');
  if(this.players.every(p=>p.exited)){this.won=true;this.emit('win');}
 }
 updatePuzzle(dt,inputs,uses,solids){
  const mode=this.stage.mode;
  if(mode==='numbers'){uses.forEach((u,i)=>{if(u)this.numbers[i]=(this.numbers[i]+1)%10;});if(this.numbers.every(n=>n===(this.stage.target||7)))this.grantKey();}
  if(mode==='timers'){
   this.clocks.forEach((c,i)=>{if(!c.stopped)c.value+=dt;if(uses[i]){if(c.stopped){c.value=0;c.stopped=false;}else c.stopped=true;}});
   const sum=this.clocks.reduce((n,c)=>n+c.value,0);
   if(this.clocks.every(c=>c.stopped)&&sum>0&&sum<(this.stage.sumLimit||.8))this.grantKey();
  }
  if(mode==='coins'&&this.coins.length===0)this.grantKey();
  if(this.well&&!this.hasKey){this.well.update(dt,inputs);this.score=this.well.lines;if(this.well.over)this.fail('The block well filled up. Leave room for every falling piece.');if(this.well.lines>=this.well.goal)this.grantKey();}
  if(!this.ball||this.hasKey)return;
  const b=this.ball;
  if(mode==='basket'){
   uses.forEach((u,i)=>{const p=this.players[i];if(!u)return;if(b.held===i){b.held=-1;b.x=p.x+8;b.y=p.y-8;const hoop=this.entities.find(e=>e.type==='hoop');const targetX=hoop.x+hoop.w/2;const flight=0.85;b.vx=(targetX-b.x)/flight;b.vy=(hoop.y-b.y-0.5*600*flight*flight)/flight;this.emit('jump',b.x,b.y);}else if(b.held<0&&near(p,b,55)){b.held=i;}});
   if(b.held>=0){const p=this.players[b.held];b.x=p.x+5;b.y=p.y-16;return;}
   b.vy+=600*dt;
  }
  const oldY=b.y;b.x+=b.vx*dt;b.y+=b.vy*dt;
  if(b.x<22||b.x>925){b.vx*=-1;b.x=Math.max(22,Math.min(925,b.x));}if(b.y<30){b.vy=Math.abs(b.vy);b.y=30;}
  if(mode==='breakout'){
   for(const p of this.players)if(!p.exited&&b.vy>0&&overlap(b,rect(p.x-15,p.y-5,p.w+30,12))){b.y=p.y-18;b.vy=-290;b.vx=((b.x-(p.x+p.w/2))/30)*210;this.events.push('jump');}
   this.bricks=this.bricks.filter(r=>{if(overlap(b,r)){b.vy*=-1;this.score++;this.emit('coin',r.x,r.y);return false;}return true;});
   if(b.y>510){b.x=480;b.y=350;b.vy=-250;b.vx=145;this.events.push('reset');}
   if(this.bricks.length===0)this.grantKey();
  }else{
   const hoop=this.entities.find(e=>e.type==='hoop');
   if(b.vy>0&&oldY+b.h<=hoop.y+6&&b.y+b.h>=hoop.y&&b.x+b.w>hoop.x&&b.x<hoop.x+hoop.w){this.score++;this.grantKey();}
   for(const r of solids)if(overlap(b,r)){if(oldY+b.h<=r.y+5){b.y=r.y-b.h;b.vy=-Math.abs(b.vy)*0.5;b.vx*=0.82;}else{b.vx*=-0.65;b.x+=b.vx*dt*2;}}
   if(b.y>540){b.x=(this.stage.ball||[795,473])[0];b.y=(this.stage.ball||[795,473])[1];b.vx=0;b.vy=0;}
  }
 }
}
