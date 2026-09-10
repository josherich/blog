// Browser-independent deterministic platform physics; units are pixels and seconds.
export const GRAVITY=1100, SPEED=190, JUMP=460;
export const overlap=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
export const near=(a,b,r=65)=>Math.hypot(a.x+a.w/2-b.x-b.w/2,a.y+a.h/2-b.y-b.h/2)<r;
export const rect=(x,y,w,h,extra={})=>({x,y,w,h,...extra});
export function actor(x,y,id=0){return {x,y,w:22,h:28,vx:0,vy:0,id,grounded:false,coyote:0,jumpBuffer:0,wasJump:false,wasUse:false,exited:false,support:null};}
export function moveBody(b,dx,dy,solids){
 b.x+=dx;
 for(const s of solids){if(s===b||s.open||!overlap(b,s))continue;if(dx>0)b.x=s.x-b.w;else if(dx<0)b.x=s.x+s.w;}
 b.y+=dy;b.grounded=false;b.support=null;
 for(const s of solids){if(s===b||s.open||!overlap(b,s))continue;if(dy>=0){b.y=s.y-b.h;b.vy=0;b.grounded=true;b.support=s;}else{b.y=s.y+s.h;b.vy=0;}}
}
export function stepActor(p,input,solids,players,dt){
 if(p.exited)return;
 p.coyote=p.grounded?0.10:Math.max(0,p.coyote-dt);
 p.jumpBuffer=input.jump&&!p.wasJump?0.12:Math.max(0,p.jumpBuffer-dt);p.wasJump=!!input.jump;
 p.vx=(input.right?SPEED:0)-(input.left?SPEED:0);
 if(p.jumpBuffer>0&&p.coyote>0){p.vy=-JUMP;p.jumpBuffer=0;p.coyote=0;p.grounded=false;}
 if(!input.jump&&p.vy< -210)p.vy+=GRAVITY*dt*0.65;
 const oldY=p.y;p.vy=Math.min(p.vy+GRAVITY*dt,660);
 moveBody(p,p.vx*dt,0,solids);
 // Players are one-way platforms: teammates can walk past each other, but stack vertically.
 const heads=players.filter(q=>q!==p&&!q.exited&&oldY+p.h<=q.y+4&&p.vy>=0);
 moveBody(p,0,p.vy*dt,[...solids,...heads]);
 p.x=Math.max(20,Math.min(918,p.x));
}
export function validateStage(s){
 if(!s||typeof s!=='object'||Array.isArray(s))throw Error('Stage must be an object.');
 if(typeof s.name!=='string'||!s.name.trim())throw Error('Stage needs a name.');
 const point=(p,label)=>{if(!Array.isArray(p)||p.length!==2||!p.every(Number.isFinite))throw Error(label+' must be [x, y].');};
 point(s.spawn,'spawn');point(s.door,'door');if(s.key)point(s.key,'key');
 if(!Array.isArray(s.platforms))throw Error('platforms must be an array.');
 for(const [i,r] of s.platforms.entries()){if(!Array.isArray(r)||r.length!==4||!r.every(Number.isFinite)||r[2]<=0||r[3]<=0)throw Error('Invalid platform '+i);}
 const types=['gate','crate','lift','moving','button','spring','spikes','checkpoint','pipe','hoop','cannon','fan','bridge','extend','switch'];
 if(s.entities&&!Array.isArray(s.entities))throw Error('entities must be an array.');
 for(const e of s.entities||[]){if(!types.includes(e.type))throw Error('Unknown entity type: '+e.type);if(!Number.isFinite(e.x)||!Number.isFinite(e.y))throw Error('Entities need numeric x and y.');for(const k of ['w','h','travel','speed','need','toX','toY'])if(e[k]!==undefined&&!Number.isFinite(e[k]))throw Error(k+' must be numeric.');if(e.w!==undefined&&e.w<=0||e.h!==undefined&&e.h<=0)throw Error('Entity dimensions must be positive.');}
 if(s.mode!==undefined&&!['normal','numbers','timers','breakout','basket','coins','tower','tetris','stop'].includes(s.mode))throw Error('Unknown mode.');
 return s;
}
