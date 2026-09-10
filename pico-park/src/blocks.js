// Shared falling-block well. Integer cells keep collisions and line clears deterministic.
const SHAPES=[[[0,0],[1,0],[2,0]],[[0,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[2,0],[1,1]]];
export class BlockWell {
 constructor(count,{width=Math.max(16,count*4),height=16,goal=10}={}){this.width=width;this.height=height;this.goal=goal;this.lines=0;this.over=false;this.serial=0;this.grid=Array.from({length:height},()=>Array(width).fill(null));this.pieces=[];this.count=count;for(let i=0;i<count;i++)this.spawn(i);}
 spawn(id){const cells=SHAPES[this.serial++%SHAPES.length].map(c=>[...c]);const p={id,x:Math.min(this.width-3,Math.floor((id+.5)*this.width/this.count)-1),y:0,cells,timer:0,repeat:0,wasRotate:false,wasDrop:false};this.pieces[id]=p;if(!this.fits(p))this.over=true;}
 fits(p,ignore=p.id){return p.cells.every(([dx,dy])=>{const x=p.x+dx,y=p.y+dy;return x>=0&&x<this.width&&y>=0&&y<this.height&&this.grid[y][x]===null&&!this.pieces.some(q=>q&&q.id!==ignore&&q.cells.some(([qx,qy])=>q.x+qx===x&&q.y+qy===y));});}
 move(p,dx,dy){if(!this.fits({...p,x:p.x+dx,y:p.y+dy}))return false;p.x+=dx;p.y+=dy;return true;}
 rotate(p){const raw=p.cells.map(([x,y])=>[-y,x]);const minX=Math.min(...raw.map(c=>c[0])),minY=Math.min(...raw.map(c=>c[1]));const cells=raw.map(([x,y])=>[x-minX,y-minY]);for(const kick of [0,-1,1,-2,2])if(this.fits({...p,x:p.x+kick,cells})){p.x+=kick;p.cells=cells;return true;}return false;}
 clearRows(){const full=[];this.grid.forEach((r,y)=>{if(r.every(v=>v!==null))full.push(y);});if(!full.length)return 0;this.grid=this.grid.filter((_,y)=>!full.includes(y));while(this.grid.length<this.height)this.grid.unshift(Array(this.width).fill(null));for(const p of this.pieces.filter(Boolean))p.y+=full.filter(y=>y>p.y).length;this.lines+=full.length;return full.length;}
 lock(p){for(const [dx,dy]of p.cells)this.grid[p.y+dy][p.x+dx]=p.id;this.pieces[p.id]=null;this.clearRows();if(this.lines<this.goal)this.spawn(p.id);}
 update(dt,inputs){if(this.over||this.lines>=this.goal)return;for(const p of [...this.pieces].filter(Boolean)){const input=inputs[p.id]||{};p.repeat-=dt;if((input.left||input.right)&&p.repeat<=0){this.move(p,input.left?-1:1,0);p.repeat=.12;}if(!input.left&&!input.right)p.repeat=0;if(input.use&&!p.wasRotate)this.rotate(p);p.wasRotate=!!input.use;if(input.jump&&!p.wasDrop){while(this.move(p,0,1)){}this.lock(p);if(this.pieces[p.id])this.pieces[p.id].wasDrop=true;continue;}p.wasDrop=!!input.jump;p.timer+=dt;if(p.timer>.55){p.timer=0;if(!this.move(p,0,1)){
 // A falling teammate is temporary support; wait rather than locking into them.
 const settled=p.cells.some(([x,y])=>p.y+y+1>=this.height||this.grid[p.y+y+1]?.[p.x+x]!==null&&this.grid[p.y+y+1]?.[p.x+x]!==undefined);if(settled)this.lock(p);
 }}}}
}
