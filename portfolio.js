(()=>{
  const page=(document.title+location.pathname).toLowerCase();
  const theme=[['chevron','chevron'],['myclimb','myclimb'],['tech4med','tech4med'],['incomio','incomio'],['mytale','mytale'],['space hero','space'],['tank hero','space'],['tiktok','tiktok'],['design system','design']].find(([term])=>page.includes(term));
  if(theme)document.body.classList.add(`theme-${theme[1]}`);
  if(document.title.includes('Tech4Med')){
    const title=document.querySelector('.page-title');
    if(title){
      title.classList.add('tech4med-title');
      title.innerHTML='<span class="tech4med-title-line">Tech4Med – UI Design</span><span class="tech4med-title-line">for Real-Time</span><span class="tech4med-title-line">Pharma Logistics</span>';
    }
    const hero=document.querySelector('.page-body figure.image img');
    if(hero){
      hero.src='../../assets/tech4med-hero-devices.png';
      hero.alt='Tech4Med devices';
      hero.closest('figure')?.classList.add('tech4med-hero');
    }
    [...document.querySelectorAll('.page-body p')]
      .find(paragraph=>paragraph.textContent.trim()==='Shipment Overview & Graphs')
      ?.classList.add('shipment-overview-title');
    [...document.querySelectorAll('.page-body p')]
      .find(paragraph=>paragraph.textContent.trim()==='List the core interface problems you tackled. These could include:')
      ?.remove();
    document.querySelectorAll('.page-body p').forEach(paragraph=>{
      const strong=paragraph.firstElementChild;
      if(strong?.tagName==='STRONG'&&paragraph.children.length===1&&paragraph.textContent.trim()===strong.textContent.trim()){
        paragraph.classList.add('tech4med-section-label');
      }
    });
    ['Existing version','Improved version'].forEach(label=>{
      const heading=[...document.querySelectorAll('.page-body p')].find(paragraph=>paragraph.textContent.trim()===label);
      const screen=heading?.nextElementSibling;
      if(!heading||!screen?.matches('figure.image'))return;
      const section=document.createElement('section');
      section.className='tech4med-solution-block';
      heading.before(section);
      section.append(heading,screen);
      heading.classList.add('tech4med-solution-title');
    });
  }
  if(page.includes('brain games'))document.body.classList.add('page-brain-games');
  if(page.includes('subscription feature'))document.body.classList.add('page-subscription');
  if(page.includes('advanced analytics')||page.includes('log a climb redesign'))document.body.classList.add('page-myclimb-detail');
  if(page.includes('log a climb redesign'))document.body.classList.add('page-log-a-climb');
  if(document.title.includes('MyClimb')){
    const icon=document.querySelector('.page-header-icon .icon');
    if(icon){
      icon.removeAttribute('data-emoji');
      icon.textContent='🧗‍♀️';
      icon.classList.add('myclimb-header-icon');
    }
    [...document.querySelectorAll('.page-body h3')]
      .find(heading=>heading.textContent.trim()==='Project Intro')
      ?.remove();
  }
  if(document.title.includes('Chevron')){
    [...document.querySelectorAll('.page-body p')]
      .find(paragraph=>paragraph.textContent.trim()==='Enhancing Engagement in Chevron’s Loyalty App')
      ?.remove();
  }
  document.querySelectorAll('.page-body > p').forEach(paragraph=>{
    if(!paragraph.textContent.trim()&&!paragraph.children.length)paragraph.remove();
  });
  document.querySelectorAll('.source a[href]').forEach(a=>{
    const href=a.getAttribute('href');
    if(!/\.(mp4|mov)(?:$|[?#])/i.test(href))return;
    const video=document.createElement('video');
    video.src=href;video.controls=video.autoplay=video.muted=video.loop=video.playsInline=true;
    const wrap=document.createElement('div');wrap.className='video-wrap';wrap.append(video);a.closest('figure')?.replaceWith(wrap);
  });
  const backLink=document.querySelector('.site-nav a');
  if(backLink&&page.includes('chevron')&&!document.title.includes('Chevron')){
    backLink.href='../Chevron – UX for a Loyalty App in the Fueling Indu 1900cd2d980680aa974dd2f7d985b70f.html';
    backLink.textContent='← Chevron case';
  }
  if(backLink&&page.includes('myclimb')&&!document.title.includes('MyClimb')){
    backLink.href='../MyClimb – UI UX Design for a Goal-Oriented Climbin 750b65eea5a14d06bdee5d7507353a69.html';
    backLink.textContent='← MyClimb case';
  }
  const cardConfig=[
    {key:'chevron',title:'Chevron',entries:[
      {match:'brain games',title:'Brain Games',label:'Gamified loyalty',image:'../../assets/chevron-games.png'},
      {match:'subscription feature',title:'Subscription',label:'Loyalty feature',image:'../../assets/chevron-subscription.png'}
    ]},
    {key:'myclimb',title:'MyClimb',entries:[
      {match:'log a climb redesign',title:'Log a Climb',label:'Core experience',image:'../../assets/myclimb-log.png'},
      {match:'advanced analytics',title:'Analytics',label:'Progress insights',image:'../../assets/myclimb-analytics-grey.png'}
    ]}
  ].find(config=>document.title.includes(config.title));
  if(!cardConfig)return;
  document.body.classList.add('case-overview');
  const {entries}=cardConfig;
  const sourceCards=entries.map(entry=>{
    const link=[...document.querySelectorAll('.link-to-page a')].find(a=>a.textContent.trim().toLowerCase().includes(entry.match));
    return link&&{...entry,href:link.getAttribute('href'),figure:link.closest('figure')};
  }).filter(Boolean);
  if(sourceCards.length!==2)return;
  const grid=document.createElement('section');grid.className=`case-study-cards ${cardConfig.key}`;
  grid.innerHTML=sourceCards.map(card=>`<a class="case-study-card" href="${card.href}"><img src="${card.image}" alt="${card.title} screen"><span><small>${card.label}</small><strong>${card.title}</strong></span></a>`).join('');
  sourceCards[0].figure.before(grid);sourceCards.forEach(card=>card.figure.remove());
  const style=document.createElement('style');style.textContent=`
    .case-study-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin:2.25rem 0 3rem}.case-study-card{--case-bg:#d9ecf8;position:relative;display:block;min-height:440px;overflow:hidden;border-radius:20px;background:var(--case-bg);text-decoration:none!important;color:#17181b!important}.case-study-card:nth-child(2){--case-bg:#e7f0fa}.case-study-cards.myclimb .case-study-card{--case-bg:#dcefdc}.case-study-cards.myclimb .case-study-card:nth-child(2){--case-bg:#d2ead4}.case-study-card img{position:absolute;width:100%;height:100%;object-fit:contain;padding:20px;box-shadow:none!important;border-radius:0;transition:transform .55s cubic-bezier(.2,.7,.2,1)}.case-study-card span{position:absolute;inset:auto 0 0;z-index:1;display:flex;flex-direction:column;padding:118px 24px 24px;background:linear-gradient(to top,var(--case-bg) 46%,color-mix(in srgb,var(--case-bg) 84%,transparent) 72%,transparent 100%)}.case-study-card small{font:500 11px/1 'DM Mono',monospace;letter-spacing:.05em;text-transform:uppercase;margin-bottom:7px}.case-study-card strong{font:700 clamp(1.5rem,3vw,2.4rem)/1 Manrope,Arial,sans-serif;letter-spacing:-.06em}.case-study-card:hover img{transform:translateY(-10px) scale(1.035)}@media(max-width:700px){.case-study-cards{grid-template-columns:1fr}.case-study-card{min-height:430px}.case-study-card span{padding:108px 22px 22px}}
  `;style.textContent+=`.case-study-cards.myclimb .case-study-card:first-child img{border-radius:28px;clip-path:inset(0 round 28px)}@media(max-width:700px){.case-study-cards{justify-items:center}.case-study-cards .case-study-card{width:min(100%,330px);min-height:410px}}`;document.head.append(style);
})();
