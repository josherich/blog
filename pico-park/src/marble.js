// Stage 8's enclosed ball course. Cats operate the two exterior weight platforms.
export class MarbleCourse {
 constructor({ramps,ball,button,left=167,right=793,floor=328,maxTilt=.13}){this.ramps=ramps.map(([x,y,w])=>({x,y,w}));this.spawn=ball;this.button=button;this.left=left;this.right=right;this.floor=floor;this.maxTilt=maxTilt;this.angle=0;this.solved=false;this.resetBall();}
 resetBall(){this.ball={x:this.spawn[0],y:this.spawn[1],r:7,vx:0,vy:0,support:null};}
 surface(r,x){return r.y+(x-(r.x+r.w/2))*Math.tan(this.angle);}
 update(dt,leftWeight,rightWeight){
  const target=Math.sign(rightWeight-leftWeight)*this.maxTilt;
  this.angle+=Math.sign(target-this.angle)*Math.min(Math.abs(target-this.angle),dt*.45);
  if(this.solved)return;
  // Substeps prevent a fast marble from crossing a thin sloped surface in one frame.
  for(let n=0;n<4;n++)this.step(dt/4);
 }
 step(dt){
  const b=this.ball;if(this.solved)return;
  if(b.support){const r=b.support;b.vx+=Math.sin(this.angle)*720*dt;b.vx*=Math.exp(-.14*dt);b.vx=Math.max(-80,Math.min(80,b.vx));b.x+=b.vx*dt;b.y=this.surface(r,b.x)-b.r;
   if(b.x<r.x||b.x>r.x+r.w){b.support=null;b.vy=b.vx*Math.tan(this.angle);}
  }else{
   const oldX=b.x,oldY=b.y;b.vy+=600*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;
   for(const r of this.ramps){if(b.x<r.x||b.x>r.x+r.w)continue;const before=this.surface(r,oldX),after=this.surface(r,b.x);if(oldY+b.r<=before+1&&b.y+b.r>=after&&b.vy>=0){b.y=after-b.r;b.vy=0;b.support=r;break;}}
  }
  if(b.x<b.r+this.left){b.x=b.r+this.left;b.vx=Math.abs(b.vx)*.5;}
  if(b.x>this.right-b.r){b.x=this.right-b.r;b.vx=-Math.abs(b.vx)*.5;}
  const [x,y,w,h]=this.button;
  if(b.x+b.r>x&&b.x-b.r<x+w&&b.y+b.r>=y&&b.y-b.r<y+h){this.solved=true;return;}
  if(b.y+b.r>=this.floor){b.y=this.floor-b.r;b.vy=0;b.support=null;b.vx*=Math.exp(-.3*dt);this.floorTime=(this.floorTime||0)+dt;if(this.floorTime>5){this.floorTime=0;this.resetBall();}}
 }
}
