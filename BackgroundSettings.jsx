import React, {useEffect,useState} from 'react';
import './background-settings.css';
const KEY='nexus-background-color';
const DEFAULT='#242630';
export function getSavedBackground(){
  try { const v=localStorage.getItem(KEY);return /^#[0-9a-fA-F]{6}$/.test(v||'')?v:DEFAULT; }catch{return DEFAULT;}
}
export default function BackgroundSettings({onClose}){
  const [color,setColor]=useState(getSavedBackground);
  function update(next){setColor(next);document.documentElement.style.setProperty('--nexus-custom-background',next);try{localStorage.setItem(KEY,next)}catch{}}
  useEffect(()=>{function esc(e){if(e.key==='Escape')onClose()}window.addEventListener('keydown',esc);return()=>window.removeEventListener('keydown',esc)},[onClose]);
  const presets=['#242630','#18191f','#202b39','#1b3030','#2b2339','#30252a','#303030','#182b23'];
  return <div className="nx-bg-overlay" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}} role="presentation">
    <section className="nx-bg-dialog" role="dialog" aria-modal="true" aria-labelledby="nx-bg-title">
      <header><div><h2 id="nx-bg-title">Aparência</h2><p>Personalize a cor de fundo do seu Nexus Gamer.</p></div><button type="button" onClick={onClose} aria-label="Fechar">✕</button></header>
      <label htmlFor="nx-background-picker">Cor do background</label>
      <div className="nx-bg-input"><input id="nx-background-picker" type="color" value={color} onChange={e=>update(e.target.value)}/><output>{color.toUpperCase()}</output></div>
      <p className="nx-bg-subtitle">Cores sugeridas</p>
      <div className="nx-bg-presets">{presets.map(c=><button key={c} type="button" style={{background:c}} className={color===c?'active':''} aria-label={'Usar cor '+c} title={c} onClick={()=>update(c)}/>)}</div>
      <footer><button type="button" onClick={()=>update(DEFAULT)}>Restaurar padrão</button><button type="button" className="nx-bg-save" onClick={onClose}>Concluído</button></footer>
      <small>A preferência fica salva neste navegador e não altera as cores dos outros usuários.</small>
    </section>
  </div>
}
