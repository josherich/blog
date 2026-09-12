import {stages} from './stages.js';
import {World} from './world.js';
import {render} from './render.js';
import {validateStage} from './physics.js';
const $=id=>document.getElementById(id);
const {canvas,context}=kontra.init('game');context.imageSmoothingEnabled=false;
const keys=new Set(),pressed=new Set(),bindings=[['KeyA','KeyD','KeyW','KeyS'],['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'],['KeyJ','KeyL','KeyI','KeyK'],['KeyF','KeyH','KeyT','KeyG']];
const sharedBindings=[['KeyW','KeyS','KeyA','KeyD','KeyE'],['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Enter'],['KeyI','KeyK','KeyJ','KeyL','KeyO'],['KeyT','KeyG','KeyF','KeyH','KeyY']];
let count=2,index=0,selected=0,world,paused=false,overlayMode='',custom=null,sound=false,audio;
let saved={};try{saved=JSON.parse(localStorage.getItem('pico-park-v1')||'{}');if(!saved||typeof saved!=='object'||Array.isArray(saved))saved={};}catch{}
const timeString=t=>`${String(Math.floor(t/60)).padStart(2,'0')}:${String(Math.floor(t%60)).padStart(2,'0')}`;
function stageButtons(){
 $('stages').replaceChildren();stages.forEach((s,i)=>{const b=document.createElement('button');b.className='stage'+(i===index&&!custom?' active':'')+(saved[s.id]?' cleared':'');b.textContent=String(s.id).padStart(2,'0');b.title=s.name+(saved[s.id]?' · Best '+timeString(saved[s.id]):'');b.setAttribute('aria-label',`Stage ${s.id}: ${s.name}`);b.setAttribute('aria-pressed',String(i===index&&!custom));b.onclick=()=>{custom=null;start(i);};$('stages').append(b);});
 $('progress').innerHTML=String(stages.filter(s=>saved[s.id]).length).padStart(2,'0')+` <span>/ ${stages.length}</span>`;
}
function start(i=index){index=i;selected=0;world=new World(custom||stages[index],count);paused=false;overlayMode='';keys.clear();pressed.clear();$('overlay').classList.add('hidden');$('pause').innerHTML='Ⅱ <span>Pause</span>';$('stage-label').textContent=`${custom?'CUSTOM':String(index+1).padStart(2,'0')} · ${world.stage.name}`;$('hint').textContent=world.stage.hint||'Find the key and bring everyone home.';stageButtons();const ref=$('walkthrough');ref.hidden=!!custom||!world.stage.reference;if(world.stage.reference)ref.href=world.stage.reference;canvas.focus({preventScroll:true});}
function overlay(mode,title,description,button,kicker){overlayMode=mode;paused=true;$('overlay').classList.remove('hidden');$('overlay-title').textContent=title;$('overlay-text').textContent=description;$('resume').textContent=button;$('overlay-kicker').textContent=kicker;$('resume').focus({preventScroll:true});keys.clear();pressed.clear();}
function togglePause(){if(world.won||world.failed)return;if(paused){paused=false;overlayMode='';$('overlay').classList.add('hidden');$('pause').innerHTML='Ⅱ <span>Pause</span>';canvas.focus();}else{overlay('pause','Paused.','Your crew will be right here.','Keep playing →','TAKE A BREATHER');$('pause').innerHTML='▶ <span>Resume</span>';}}
function tone(type){if(!sound)return;audio||=new AudioContext();if(audio.state==='suspended')audio.resume();const o=audio.createOscillator(),g=audio.createGain();o.type='sine';o.frequency.setValueAtTime(({coin:780,key:980,exit:620,win:1050,fail:130,jump:370,switch:490,reset:200})[type]||300,audio.currentTime);g.gain.setValueAtTime(.035,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.16);o.connect(g);g.connect(audio.destination);o.start();o.stop(audio.currentTime+.17);}
function readInputs(){
 const inputs=Array.from({length:count},()=>({}));bindings.forEach((binding,i)=>{const dest=i===0&&!world.sharedControl?selected:i;if(dest>=count)return;const a=inputs[dest];const codes=world.sharedControl?sharedBindings[i]:binding; (world.sharedControl?['up','down','left','right','use']:['left','right','jump','use']).forEach((v,k)=>a[v]=a[v]||(keys.has(codes[k])||(!world.sharedControl&&pressed.has(codes[k]))));});
 const pads=navigator.getGamepads?.()||[];let slot=0;for(const pad of pads){if(!pad)continue;const dest=((count>4?4:0)+slot++)%count;const a=inputs[dest];a.left||=pad.axes[0]<-.25||pad.buttons[14]?.pressed;a.right||=pad.axes[0]>.25||pad.buttons[15]?.pressed;if(world.sharedControl){a.up||=pad.axes[1]<-.25||pad.buttons[12]?.pressed||pad.buttons[0]?.pressed;a.down||=pad.axes[1]>.25||pad.buttons[13]?.pressed;a.use||=pad.buttons[1]?.pressed;}else{a.jump||=pad.buttons[0]?.pressed;a.use||=pad.buttons[1]?.pressed;}}
 return inputs;
}
function update(dt){
 if(paused)return;world.update(dt,readInputs());pressed.clear();for(const event of world.events.splice(0))tone(event);
 $('timer').textContent=world.stage.timeLimit&&!world.hasKey?timeString(Math.max(0,world.stage.timeLimit-world.time)):timeString(world.time);
 $('key-status').textContent=world.hasKey?'◆ KEY FOUND':'◇ KEY MISSING';$('key-status').style.color=world.hasKey?'#619574':'';
 if(world.failed)overlay('retry','One more try?',world.reason,'Try again ↻','NO CAT LEFT BEHIND');
 if(world.won){if(!custom){const prev=Number(saved[world.stage.id]);saved[world.stage.id]=prev?Math.min(prev,world.time):world.time;try{localStorage.setItem('pico-park-v1',JSON.stringify(saved));}catch{}stageButtons();}const last=index===stages.length-1;overlay('won',last&&!custom?'Home, together.':'Teamwork looks good.',`${world.sharedControl?'Your shared cat made it home':'All '+count+' cats made it home'} in ${timeString(world.time)}.${last&&!custom?' You finished the final Classic stage.':''}`,custom?'Play again ↻':last?'Back to stage 01 →':'Next adventure →','STAGE CLEAR');}
}
window.addEventListener('keydown',e=>{if(['TEXTAREA','INPUT','SELECT'].includes(e.target.tagName))return;if(e.target.tagName==='BUTTON'&&['Space','Enter'].includes(e.code))return;if(e.code==='Tab'&&e.target!==canvas)return;if([...bindings.flat(),...(world.sharedControl?sharedBindings.flat():[]),'Tab','Space','Escape'].includes(e.code))e.preventDefault();if(e.code==='Tab'&&!paused&&!world.sharedControl){selected=(selected+(e.shiftKey?count-1:1))%count;keys.clear();pressed.clear();}else if(e.code==='KeyR'&&!e.repeat)start();else if(e.code==='Escape'&&!e.repeat)togglePause();else {keys.add(e.code);if(!e.repeat)pressed.add(e.code);}});
window.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',()=>{keys.clear();pressed.clear();if(!paused)togglePause();});document.addEventListener('visibilitychange',()=>{if(document.hidden){keys.clear();pressed.clear();if(!paused)togglePause();}});
$('restart').onclick=()=>start();$('pause').onclick=togglePause;$('resume').onclick=()=>{if(overlayMode==='pause')togglePause();else if(overlayMode==='won'&&!custom)start((index+1)%stages.length);else start();};
$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.querySelector('.game-shell').requestFullscreen();}catch{$('hint').textContent='Fullscreen is unavailable in this browser.';}};
$('sound').onclick=()=>{sound=!sound;$('sound').textContent=sound?'Sound on':'Sound off';$('sound').setAttribute('aria-pressed',String(sound));if(sound)tone('key');};
for(let n=2;n<=10;n++){const option=document.createElement('option');option.value=n;option.textContent=n;$('players').append(option);}$('players').value=count;$('players').onchange=()=>{count=Number($('players').value);start();};
$('load-json').onclick=()=>{$('stage-json').value=JSON.stringify(custom||stages[index],null,2);$('editor-status').textContent='Ready to edit.';};
$('play-json').onclick=()=>{try{const parsed=validateStage(JSON.parse($('stage-json').value));custom=structuredClone(parsed);start();$('editor-status').textContent='Custom stage loaded. Official progress is unchanged.';}catch(e){$('editor-status').textContent=e.message;}};
$('export-json').onclick=()=>{try{const parsed=validateStage(JSON.parse($('stage-json').value));const a=document.createElement('a'),url=URL.createObjectURL(new Blob([JSON.stringify(parsed,null,2)],{type:'application/json'}));a.href=url;a.download='pico-stage.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}catch(e){$('editor-status').textContent=e.message;}};
$('stage-json').value=JSON.stringify(stages[0],null,2);start();kontra.GameLoop({fps:60,update,render:()=>render(context,world,selected)}).start();
