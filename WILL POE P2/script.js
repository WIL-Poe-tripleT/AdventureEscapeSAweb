// Activity data (prices match the app)
const A={
 hiking:{t:'Mountain Hiking',i:'\u25B2',p:500,c:250,d:'3\u20134 hours',l:'Moderate',x:'Explore scenic mountain trails, enjoy beautiful landscapes and experience the outdoors. This adventure is ideal for people who enjoy walking, nature and fresh air.'},
 water:{t:'Water Adventures',i:'\uD83C\uDF0A',p:650,c:325,d:'2\u20133 hours',l:'Easy',x:'Discover exciting water-based experiences and enjoy the natural beauty of the surrounding environment. Remember to follow the activity safety instructions.'},
 outdoor:{t:'Outdoor Exploration',i:'\uD83C\uDF3F',p:450,c:225,d:'Flexible',l:'Easy',x:'Enjoy the outdoors, discover natural surroundings and spend time exploring with friends, family or a group.'}
};
const $=id=>document.getElementById(id), R=n=>'R'+n.toFixed(2);

// Overview: cards + filter buttons
if($('cards')){
 const show=f=>$('cards').innerHTML=Object.entries(A).filter(([k])=>f==='all'||k===f).map(([k,a])=>
  `<div class="card"><div class="thumb">${a.i}</div><h3>${a.t}</h3><p>${a.x}</p><p class="price">From ${R(a.p)} per adult</p><a class="btn green" href="activity.html?a=${k}">View Adventure</a></div>`).join('');
 document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');show(b.dataset.f);});
 show('all');
}

// Individual activity page: ?a=hiking | water | outdoor
if($('act')){
 const a=A[new URLSearchParams(location.search).get('a')]||A.hiking;
 document.title=a.t+' | Adventure Escape SA';
 $('act').innerHTML=`<div class="thumb" style="height:180px">${a.i}</div><h1 style="margin-top:16px">${a.t}</h1><p class="orange">${R(a.p)} per adult</p>
 <div class="tiles"><div class="tile"><small>Duration</small><br><b>${a.d}</b></div><div class="tile"><small>Difficulty</small><br><b>${a.l}</b></div></div>
 <h2>About This Adventure</h2><p style="max-width:70ch">${a.x}</p>
 <h2>Adventure Highlights</h2><div class="grid"><div class="card"><h3>Outdoor Experience</h3><p>Enjoy an activity designed to help you explore the outdoors.</p></div><div class="card"><h3>Suitable Planning</h3><p>Review the activity details and estimate your group's fees before booking.</p></div></div>
 <p style="margin-top:24px"><a class="btn" href="fees.html">Book This Activity</a></p>`;
}

// Calculate fees
if($('feeForm')){
 $('list').innerHTML=Object.entries(A).map(([k,a])=>`<label class="check"><input type="checkbox" name="act" value="${k}"><span><b style="color:var(--g)">${a.t}</b><br>Adult: ${R(a.p)}<br>Child: ${R(a.c)}</span></label>`).join('');
 $('list').onchange=e=>e.target.closest('.check').classList.toggle('sel',e.target.checked);
 $('feeForm').onsubmit=e=>{
  e.preventDefault();
  const picks=[...document.querySelectorAll('[name=act]:checked')].map(i=>A[i.value]);
  const ad=+$('adults').value||0, ch=+$('kids').value||0;
  if(!picks.length||ad+ch<1){$('out').innerHTML='<div class="result">Select at least one adventure and one participant.</div>';return;}
  const rows=picks.map(a=>[a.t,ad*a.p+ch*a.c]), sub=rows.reduce((s,r)=>s+r[1],0);
  const disc=ad+ch>=10?sub*0.1:0;
  $('out').innerHTML=`<div class="result"><h3>Estimated quote for ${$('cname').value}</h3>${rows.map(r=>`<p><span>${r[0]}</span><span>${R(r[1])}</span></p>`).join('')}
  <p><span>Subtotal</span><span>${R(sub)}</span></p><p><span>Group discount (10%)</span><span>-${R(disc)}</span></p><p class="total"><span>Total</span><span>${R(sub-disc)}</span></p></div>`;
 };
}

// Contact enquiry (demo only, nothing is sent)
if($('enqForm')){
 $('enqForm').onsubmit=e=>{e.preventDefault();
  $('msg').textContent=`Thank you, ${$('n').value}. Your enquiry has been prepared. This demonstration form does not send messages.`;};
}
