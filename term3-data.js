
// ════════════════════════════════════════════════════════════════
// TERM 3 — KIA REA (DEEPENING)
// Weeks 1–10 · All lesson data for Term 3
// ════════════════════════════════════════════════════════════════

const CURRICULUM_T3W1 = {
  Monday: {
    topic:'Ngā wāhanga o te tinana — Parts of the body',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Physical characteristics · Grammar Level 1–2: Body vocabulary, E…ana progressive aspect',
    aos:[{code:'AO 2.5',label:'Body parts &amp; physical description'},{code:'AO 1.5',label:'Location on body'}],
    iDo:{
      title:'Tāua Kōrero — The body in te reo Māori',
      instruction:'This term we go deeper — more complex sentence structures, richer vocabulary, and longer conversations. We begin with the body, because body vocabulary connects everything: feelings (your heart, your stomach), action (your hands, your feet), and description (your face, your eyes). Listen and connect each word to what you feel.',
      example:`<b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81hunga" target="_blank" rel="noopener">māhunga</a></b> — head<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rae" target="_blank" rel="noopener">rae</a></b> — forehead<br><b>kanohi</b> — face<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whatu" target="_blank" rel="noopener">whatu</a></b> / <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=karu" target="_blank" rel="noopener">karu</a></b> — eye(s)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ihu" target="_blank" rel="noopener">ihu</a></b> — nose<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=waha" target="_blank" rel="noopener">waha</a></b> — mouth<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=taringa" target="_blank" rel="noopener">taringa</a></b> — ear<br><b>niho</b> — teeth<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kaki" target="_blank" rel="noopener">kaki</a></b> — neck / throat<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=pokohiwi" target="_blank" rel="noopener">pokohiwi</a></b> — shoulder<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ringa" target="_blank" rel="noopener">ringa</a></b> / <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ringaringa" target="_blank" rel="noopener">ringaringa</a></b> — hand / arm<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ng%C5%ABk%C5%AB" target="_blank" rel="noopener">ngūkū</a></b> — elbow<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=puku" target="_blank" rel="noopener">puku</a></b> — stomach / belly<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tuar%C4%81" target="_blank" rel="noopener">tuarā</a></b> — back<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=waewae" target="_blank" rel="noopener">waewae</a></b> — leg / foot<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=turi" target="_blank" rel="noopener">turi</a></b> — knee<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=waewae" target="_blank" rel="noopener">waewae</a> matua</b> — right foot<br><b>waewae <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C5%8Dng%C4%81" target="_blank" rel="noopener">tōngā</a></b> — left foot`,
      demo:`Body parts in a sentence:\n\n<b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mamae" target="_blank" rel="noopener">mamae</a> tōku māhunga.</b>\nMy head is sore. (<a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mamae" target="_blank" rel="noopener">mamae</a> = sore/pain)\n\n<b>He whero ōna karu.</b>\nHis/her eyes are red.\n\n<b>I horoi ia i ōna niho.</b>\nShe brushed her teeth. (horoi = clean/wash)\n\n<b>Kei te ngongo tōku kaki.</b>\nMy throat is sore/tight. (ngongo = tight/constricted)\n\nPossessives with body parts:\n→ Body parts are ō-category (they are part of you, senior to your control)\n→ Use tōku, tōu, tōna, ō mātou, ō rātou\n\n<b>tōku māhunga</b> — my head\n<b>tōna kanohi</b> — his/her face\n<b>ō mātou waewae</b> — our legs`,
      tip:'Body parts are ō-category — they are part of you, not things you control. So always tōku (not tāku) for body parts. Tōku māhunga, tōku ringa, tōku waewae.',
    },
    weDo:{
      title:'Kia Tūhono — Name and describe the body',
      instruction:'Point and name — I point to a body part, you name it in te reo. Then use it in a sentence.',
      sentences:[
        'I point to your ear: <b>taringa</b>. Use it: <b>Kei te aha tōu taringa?</b> — What is wrong with your ear?',
        'Describe using He: <b>He nui ōna karu.</b> She has big eyes. <b>He iti tōna ihu.</b> His nose is small.',
        'Use past tense: <b>I mamae tōku puku inanahi.</b> My stomach was sore yesterday.',
        'Connect body + feeling: <b>Ka hōhipū tōku ngākau.</b> My heart leaps/jumps. (hōhipū = leap/jump with excitement)',
      ],
      prompt:'In English we say "I have a sore head" — but in te reo: "Kei te mamae tōku māhunga" — literally "right now sore my head." The pain is the subject, not you. What does this tell us about how te reo Māori thinks about physical experience?',
    },
    youDo:{
      title:'Māu Anō — Body vocabulary',
      instruction:'Use body vocabulary in real sentences.',
      tasks:[
        'Write six body part sentences — three with Kei te and three with He.',
        'Write a past tense sentence about a time something hurt: I mamae tōku… nō te mea…',
        'Write a body sentence that connects to an emotion: Ka [emotion] tōku ngākau / puku / kanohi.',
        '✦ Bonus: Write a seven-sentence "body check" — from head to toe, describe the state of each body part right now. Are you tired? Sore? Alert? Express it through the body.',
      ],
    },
  },
  Tuesday: {
    topic:'E haere ana, e kai ana — The progressive aspect E…ana',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · Grammar Level 1–2: E…ana (present progressive — ongoing action)',
    aos:[{code:'AO 2.3',label:'Progressive aspect'},{code:'AO 2.4',label:'Ongoing action in time'}],
    iDo:{
      title:'Tāua Kōrero — The action is still happening',
      instruction:'You know Kei te for what is happening right now. Today we learn a related but different structure — E…ana. While Kei te states a present action, E…ana emphasises that the action is ONGOING — still in progress, continuing, not yet finished. It is a subtle but powerful distinction.',
      example:`<b>Kei te kai ia.</b> — She is eating. (present state)<br><b>E kai ana ia.</b> — She is eating (and still going — the eating is ongoing)<br><br><b>E mahi ana rātou i tēnei wā.</b><br>They are working right now (the work is ongoing).<br><br><b>E ako ana tātou i te reo Māori.</b><br>We are learning te reo Māori (an ongoing process — it continues).<br><br><b>I te wā e mahi ana ia, ka tae mai tōna hoa.</b><br>While she was working (ongoing), her friend arrived.<br><br><b>Kāore ia e haere ana ki te kura āpōpō.</b><br>She is not going to school tomorrow (ongoing plan that is not happening).`,
      demo:`When to use <b>E…ana</b> instead of <b>Kei te</b>:\n\n→ When the action is clearly ONGOING and UNFINISHED:\n"E hanga ana rātou i te whare." — They are building the house. (still under construction)\n\n→ In relative clauses — describing something while it is happening:\n"I te wā e ako ana mātou" — While we were learning\n\n→ In negative future:\n"Kāore ia e haere ana" — She is not going (as an ongoing fact)\n\n→ For slower, ongoing processes:\n"E tipu ana ngā rākau." — The trees are growing. (gradual ongoing process)\n\nKei te tends to be more immediate: Kei te kai au RIGHT NOW.\nE…ana tends to be more continuous: E tipu ana te whenua — the land is ever growing.`,
      tip:'E…ana = still happening, ongoing. Think of it as the -ing that is still in progress. Kei te = happening now. E…ana = happening now AND continuing. For processes, use E…ana.',
    },
    weDo:{
      title:'Kia Tūhono — Still going',
      instruction:'I give you a Kei te sentence — you decide if E…ana would work better and why.',
      sentences:[
        '"Kei te horoi ia i tōna kanohi." → Could this be E horoi ana ia? Yes — if the face-washing is ongoing, not just a moment.',
        '"E tipu ana te ngahere o Aotearoa." — The forests of NZ are growing. Why E…ana not Kei te? Because this is a long-term ongoing process.',
        '"I te wā e mahi ana ia, ka tangi tōna pēpi." — While she was working, her baby cried. Build a similar sentence with i te wā e…ana.',
        '"Kāore mātou e haere ana ki te marae āpōpō." — We are not going to the marae tomorrow. Why Kāore e…ana for a future negative plan?',
      ],
      prompt:'E ako ana tātou i te reo Māori — we are learning te reo Māori (and the learning is ongoing). This sentence describes what you are doing this whole year. How does adding the ongoing aspect change the feeling of the sentence compared to "Kei te ako tātou"?',
    },
    youDo:{
      title:'Māu Anō — The ongoing action',
      instruction:'Write sentences using E…ana for ongoing processes.',
      tasks:[
        'Write three E…ana sentences about ongoing things happening in your world right now.',
        'Write an i te wā e…ana clause: "While [something was ongoing], [something happened]."',
        'Write a Kāore e…ana negative about something you are not going to do.',
        '✦ Bonus: Write a paragraph (6 sentences) using E…ana for ongoing background actions, Kei te for immediate actions, and Ka for events that punctuate the ongoing scene. E.g. describe a busy classroom.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Body and progressive in stories',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Physical description · AO 2.3: Extended narrative · Grammar Level 1–2: Body + E…ana in descriptive narrative',
    aos:[{code:'AO 2.5',label:'Physical narrative'},{code:'AO 2.3',label:'Descriptive story writing'}],
    iDo:{
      title:'Tāua Kōrero — Describing action through the body',
      instruction:'Great storytelling uses the body — characters feel things in their stomach, see with wide eyes, and run with aching legs. Today we combine body vocabulary and E…ana to write vivid physical descriptions in te reo Māori.',
      example:`<b>E omaoma ana ia, e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mamae" target="_blank" rel="noopener">mamae</a> ana ōna waewae, engari kāore ia e tū ana.</b><br>She is running, her legs aching, but she is not stopping.<br><br><b>Ka tū ia. E hūhū ana tōna <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ng%C4%81kau" target="_blank" rel="noopener">ngākau</a>. Ka titiro ia ki runga ki ngā maunga.</b><br>She stood. Her heart was pounding. She looked up at the mountains.<br><br><b>I te wā e haere ana mātou ki te ngahere, ka kite mātou i tētahi manu nui — e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rere" target="_blank" rel="noopener">rere</a> ana ia i runga i ō mātou māhunga!</b><br>While we were walking to the forest, we saw a huge bird — it was flying above our heads!`,
      demo:`Techniques for physical storytelling:\n\n1. <b>Body + E…ana for ongoing physical state</b>:\n"E mamae ana ōna waewae" — her legs aching (still ongoing)\n"E hūhū ana tōna ngākau" — her heart pounding\n\n2. <b>Short Ka sentence to break the ongoing action</b>:\n"Ka tū ia." — She stopped. (Ka = sudden completed action breaking ongoing scene)\n\n3. <b>i te wā e…ana + Ka for simultaneous action</b>:\n"I te wā e haere ana mātou… ka kite mātou…" — While we were walking… we saw…\n\nNew words:\n<b>hūhū</b> — to buzz / pound / vibrate (sound word from Term 1!)\n<b>rere</b> — to fly / flow / move swiftly\n<b>i runga i</b> — above / over`,
      tip:'E…ana sets the ongoing background. Ka punches through it with a sudden event. "E omaoma ana ia… Ka tū ia." She was running… She stopped. The contrast creates drama.',
    },
    weDo:{
      title:'Kia Tūhono — Physical storytelling',
      instruction:'Build a scene using body vocabulary and E…ana together.',
      sentences:[
        'Set the ongoing scene: <b>E omaoma ana ngā tamariki i waho.</b> Now add a body detail: E mamae ana ō rātou…',
        'Break the scene with Ka: <b>Ka tū rātou katoa.</b> Why did they stop? Add a reason.',
        'Use i te wā e…ana: "While they were running, they saw…" → <b>I te wā e omaoma ana rātou, ka kite rātou i…</b>',
        'Close with a body reaction: heart, eyes, or legs responding to what happened.',
      ],
      prompt:'E hūhū ana tōna ngākau — her heart was pounding. The word hūhū is a sound word — it describes a buzzing, pulsing sound. Why might a language use a sound word to describe an emotional physical sensation like a pounding heart? What does it make you feel when you hear it?',
    },
    youDo:{
      title:'Māu Anō — Physical scene',
      instruction:'Write a short physical scene using body vocabulary and E…ana.',
      tasks:[
        'Write a three-sentence ongoing scene using E…ana for two different body states.',
        'Add a Ka sentence that breaks the scene suddenly.',
        'Add an i te wā e…ana sentence — something seen or heard while the scene was ongoing.',
        '✦ Bonus: Write an eight-sentence physical scene — a sports moment, a scary experience, or an exciting discovery. Use at least four body part words, E…ana for ongoing states, Ka for breaking events, and at least one sound word.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero mō te hauora — Health conversation',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Physical feelings · AO 1.6: Politeness · AO 2.3: Extended communication',
    aos:[{code:'AO 2.5',label:'Health &amp; wellbeing'},{code:'AO 1.6',label:'Politeness in health contexts'}],
    iDo:{
      title:'Tāua Kōrero — At the sick bay',
      instruction:'Today we use body vocabulary and feelings in a real scenario — visiting the school sick bay. This is practical, important language that combines body parts, E…ana, feelings, and politeness.',
      example:`<b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Kaimahi" target="_blank" rel="noopener">Kaimahi</a> <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hauora" target="_blank" rel="noopener">hauora</a>:</b> Tēnā koe. He aha tāu raruraru?<br><b>Ākonga:</b> Kei te mamae tōku māhunga, kei te ngongo hoki tōku kaki.<br><b>Kaimahi:</b> Ā, he tino kino tērā. E <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mamae" target="_blank" rel="noopener">mamae</a> ana tōu māhunga i ēhea wā?<br><b>Ākonga:</b> I tīmata i tēnei ata. Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=huri" target="_blank" rel="noopener">huri</a> noa tōku ao i ētahi wā.<br><b>Kaimahi:</b> Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81rama" target="_blank" rel="noopener">mārama</a>. Kei te māuiui koe — me <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=okioki" target="_blank" rel="noopener">okioki</a> koe. He aha āu i kai ai mō tō parakuihi?<br><b>Ākonga:</b> Kāore au i kai i tēnei ata — i ngenge noa au.<br><b>Kaimahi:</b> Āe, ko tērā pea te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=take" target="_blank" rel="noopener">take</a>. Me kai koe ināianei. Ka taea koe te hoki ki tōu <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=akomanga" target="_blank" rel="noopener">akomanga</a> ā te rua karaka.`,
      demo:`Health vocabulary:\n<b>kaimahi hauora</b> — health worker / school nurse (kai- + hauora)\n<b>raruraru</b> — problem / trouble\n<b>ngongo</b> — tight / sore (throat)\n<b>Ka huri noa tōku ao.</b> — My world just spins. (dizzy)\n<b>huri</b> — to turn / spin\n<b>ao</b> — world / cloud (here: the world around me)\n<b>i ēhea wā</b> — at what times\n<b>Ka mārama.</b> — I understand / I see. (literally: it is clear)\n<b>me okioki koe</b> — you should rest (me = should/must — a gentle instruction)\n<b>ko tērā pea te take</b> — that is perhaps the reason\n<b>Ka taea koe te hoki</b> — You are able to go back`,
      tip:'Me + verb = should / must do something. Me okioki koe = you should rest. Me kai koe = you should eat. Me is a gentle way to give advice or instruction — softer than a command.',
    },
    weDo:{
      title:'Kia Tūhono — Sick bay roleplay',
      instruction:'Roleplay the sick bay scene. One person is the kaimahi hauora, one is the ākonga.',
      sentences:[
        'Kaimahi asks: <b>He aha tāu raruraru?</b> Ākonga answers with two body complaints using Kei te mamae…',
        'Kaimahi asks: <b>E mamae ana tōu [body part] i ēhea wā?</b> Ākonga answers with a time: I tīmata i…',
        'Kaimahi uses me: <b>Me okioki koe / me kai koe / me inu wai koe.</b> (you should drink water)',
        'Kaimahi closes: <b>Ka taea koe te hoki ki tōu akomanga ā te [time] karaka.</b>',
      ],
      prompt:'Me okioki koe — you should rest. The word me here is much gentler than a command like "Okioki!" (Rest!). How does the choice of me versus a direct command change the relationship between the speaker and listener? When would you use me versus a direct instruction?',
    },
    youDo:{
      title:'Māu Anō — Sick bay dialogue',
      instruction:'Write a full sick bay dialogue with a partner.',
      tasks:[
        'Write the ākonga\'s part: three complaint sentences using Kei te mamae, E…ana, and a time.',
        'Write the kaimahi\'s part: two me sentences giving advice.',
        'Include Ka huri noa tōku ao or another vivid body expression.',
        '✦ Bonus: Write the full dialogue (10 lines). Include: He aha tāu raruraru, body vocabulary, E…ana, a time expression, me sentences, Ka mārama, and Ka taea koe te hoki ā te [time].',
      ],
    },
  },
}

const FRIDAY_QUIZ_T3W1 = [
  {day:'Monday',  q:'What possessive category are body parts in te reo Māori?',options:['ā-category — you control them','ō-category — they are part of you and senior to your control','Neither — they use a special category','It depends on the body part'],correct:1},
  {day:'Monday',  q:'"Kei te mamae tōku māhunga." What does mamae mean?',options:['tired','sore / in pain','spinning','swollen'],correct:1},
  {day:'Tuesday', q:'What is the main difference between "Kei te kai ia" and "E kai ana ia"?',options:['They mean exactly the same thing','E kai ana emphasises the eating is ongoing and continuing; Kei te is more immediate','Kei te is past tense; E…ana is present','E…ana is only used for future plans'],correct:1},
  {day:'Tuesday', q:'"I te wā e mahi ana ia, ka tae mai tōna hoa." What happened while she was working?',options:['She finished the work','Her friend arrived','She fell asleep','She started eating'],correct:1},
  {day:'Wednesday',q:'"E omaoma ana ia… Ka tū ia." What effect does the Ka sentence create?',options:['It shows the running is continuing','It creates drama by breaking the ongoing action with a sudden stop','It shows the running happened in the past','It describes where she ran'],correct:1},
  {day:'Wednesday',q:'What does "rere" mean?',options:['to fall','to fly / flow / move swiftly','to cry','to laugh'],correct:1},
  {day:'Thursday', q:'"Me okioki koe." What does me indicate here?',options:['A question','A past event','A gentle instruction / you should do this','A command as strong as E tū!'],correct:2},
  {day:'Thursday', q:'What does "Ka huri noa tōku ao" describe?',options:['The world is changing','A spinning / dizzy feeling','The clouds are moving','Time passing'],correct:1},
]

const CURRICULUM_T3W2 = {
  Monday: {
    topic:'Kua mutu — The perfect aspect: Kua',
    nzLink:'Te Aho Arataki Marau — AO 2.4: Time · AO 2.3: Extended communication · Grammar Level 1–2: Kua (perfect aspect — action completed with present relevance)',
    aos:[{code:'AO 2.4',label:'Perfect aspect — Kua'},{code:'AO 2.3',label:'Completed action with relevance'}],
    iDo:{
      title:'Tāua Kōrero — It is done: Kua',
      instruction:'You have I for past events, Ka for narrative, and E…ana for ongoing actions. Today we meet the final tense marker — Kua. Kua describes an action that has been completed and whose result is still relevant right now. It is the difference between "I went" and "I have gone (and I am still gone)."',
      example:`<b>Kua <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mutu" target="_blank" rel="noopener">mutu</a> te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=akoranga" target="_blank" rel="noopener">akoranga</a>.</b><br>The lesson has finished. (and we are now in the after-lesson state)<br><br><b>Kua <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tae" target="_blank" rel="noopener">tae</a> mai ia.</b><br>She has arrived. (she is now here as a result)<br><br><b>Kua <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=huri" target="_blank" rel="noopener">huri</a> te ao.</b><br>The world has changed. (and remains changed)<br><br><b>Kua <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81rama" target="_blank" rel="noopener">mārama</a> au.</b><br>I have understood / I understand now. (the understanding has arrived)<br><br><b>Kua <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=oti" target="_blank" rel="noopener">oti</a> i a au.</b><br>I have finished it. (<a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=oti" target="_blank" rel="noopener">oti</a> = be completed, i a au = by me)<br><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=K%C4%81ore+an%C5%8D" target="_blank" rel="noopener">Kāore anō</a> kia mutu.</b><br>It has not finished yet. (kāore anō = not yet, kia = subjunctive with anō)`,
      demo:`When to use <b>Kua</b>:\n\n→ Something has just happened and the result matters NOW:\n"Kua tae mai ia." — She has arrived. (so she is here now — that is why it matters)\n\n→ A state that has come about:\n"Kua mārama au." — I now understand. (the understanding has arrived)\n\n→ Official announcements of completion:\n"Kua mutu te hui." — The meeting has ended.\n\nCompare:\n<b>I mutu te akoranga.</b> — The lesson ended. (past fact, no connection to now)\n<b>Kua mutu te akoranga.</b> — The lesson has ended. (so what comes next? — the result matters)\n\nNegative: <b>Kāore anō kia mutu</b> — not yet finished\nQuestion: <b>Kua mutu?</b> — Is it done yet?`,
      tip:'Kua = "has [done] and the result is relevant now." Think of it as an announcement — something has changed state, and that new state is what matters. Kua tae mai = has arrived (and is now present).',
    },
    weDo:{
      title:'Kia Tūhono — Completed with relevance',
      instruction:'I describe a situation — you use Kua to express the completed state.',
      sentences:[
        'The class has just ended. → <b>Kua mutu te akoranga.</b> What happens next as a result?',
        'You have just understood something difficult. → <b>Kua mārama au!</b> Use it with an exclamation.',
        'The food has all been eaten. → <b>Kua kainga te kai katoa.</b> (kainga = been eaten — passive)',
        'Ask if someone has finished: <b>Kua oti i a koe?</b> Answer yes: <b>Āe, kua oti i a au.</b>',
      ],
      prompt:'"Kua huri te ao" — the world has changed. This phrase appears often in te reo Māori writing and speech, especially when reflecting on change over time. Why is Kua the right marker here rather than I or Ka? What does the choice of Kua add to the meaning of "the world has changed"?',
    },
    youDo:{
      title:'Māu Anō — Kua sentences',
      instruction:'Use Kua for completed actions whose results matter now.',
      tasks:[
        'Write three Kua sentences about things that have just happened in your classroom or school.',
        'Write a Kāore anō kia mutu sentence about something not finished yet.',
        'Write a Kua oti i a au sentence about something you have completed.',
        '✦ Bonus: Write a paragraph (6 sentences) using Kua, I, Ka, and Kei te all in the same passage — a moment-by-moment account of arriving at school today. Use each marker at least once and make sure each one is used correctly.',
      ],
    },
  },
  Tuesday: {
    topic:'He aha ōu hiahia? — Wants, needs, and future intention',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · Grammar Level 1–2: hiahia ki te, māku e, ka taea e au te',
    aos:[{code:'AO 2.3',label:'Expressing wants &amp; intentions'},{code:'AO 2.4',label:'Future intention'}],
    iDo:{
      title:'Tāua Kōrero — What do you want? What will you do?',
      instruction:'You can describe what is happening, what happened, and what has happened. Today we look forward — expressing what you want, what you intend to do, and what you are able to do. These are the structures of plans, goals, and dreams.',
      example:`<b>WANT TO:</b><br><b>Kei te hiahia au ki te ako i te reo Māori.</b><br>I want to learn te reo Māori.<br><br><b>WILL DO (first person):</b><br><b>Māku e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=horoi" target="_blank" rel="noopener">horoi</a> i ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rihi" target="_blank" rel="noopener">rihi</a>.</b><br>I will wash the dishes. (māku = for me to do, e + verb = the action)<br><br><b>WILL DO (third person):</b><br><b>Māna e hoko i te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=miraka" target="_blank" rel="noopener">miraka</a>.</b><br>She will buy the milk. (māna = for her to do)<br><br><b>ABLE TO:</b><br><b>Ka taea e au te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Drero" target="_blank" rel="noopener">kōrero</a> i te reo Māori.</b><br>I am able to speak te reo Māori.<br><br><b>CANNOT:</b><br><b>E kore e taea e au te haere āpōpō.</b><br>I will not be able to go tomorrow.`,
      demo:`Three structures for future intention:\n\n1. <b>Kei te hiahia au ki te [verb]</b> = I want to [verb]\n\n2. <b>Māku / Māna / Mā rātou e [verb]</b> = I/she/they will [verb]\n(mā + person + e + verb = that person is the one who will do it)\n\nMā- takes the person:\n<b>māku</b> = for me to do\n<b>māu</b> = for you to do\n<b>māna</b> = for him/her to do\n<b>mā mātou</b> = for us (excl.) to do\n\n3. <b>Ka taea e au te [verb]</b> = I am able to [verb]\n<b>E kore e taea e au te [verb]</b> = I am not able to [verb]\n\nNew word: <b>rihi</b> — dishes / plates`,
      tip:'Māku e [verb] = I will [verb] (I am the one who will do it). Māna e [verb] = she will [verb]. The mā- word tells you WHO is responsible for the action.',
    },
    weDo:{
      title:'Kia Tūhono — Plans and intentions',
      instruction:'Build sentences about what you want, will do, and can do.',
      sentences:[
        'What do you want to do after school? <b>Kei te hiahia au ki te [verb] i muri i te kura.</b>',
        'Assign a task: <b>Māu e horoi i ngā rihi.</b> You will wash the dishes. <b>Māku e tahu i te ahi.</b> I will light the fire.',
        'What can you do in te reo? <b>Ka taea e au te kōrero / pānui / tuhituhi i te reo Māori.</b>',
        'What can you NOT do yet? <b>E kore e taea e au te [verb] ināianei — engari āpōpō…</b>',
      ],
      prompt:'Māku e [verb] — I am the one who will do this. This structure makes the person responsible very clear. In te ao Māori, naming who will do something is an act of commitment. How does saying "māku e" feel different from just saying "I will"? What does making yourself the named agent add?',
    },
    youDo:{
      title:'Māu Anō — Wants, plans, abilities',
      instruction:'Write sentences expressing what you want, plan, and can do.',
      tasks:[
        'Write three hiahia sentences about things you want to do or learn this term.',
        'Write two māku e sentences — commit to two things you will do.',
        'Write two Ka taea e au te sentences about things you can now do in te reo.',
        '✦ Bonus: Write a "Term 3 goals" paragraph (7 sentences) — what you want to learn, what you commit to doing, what you can already do, and what you could not do yet but will be able to by end of term. Use hiahia, māku e, Ka taea, and E kore e taea.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — All tense markers together',
    nzLink:'Te Aho Arataki Marau — AO 2.4: Time mastery · AO 2.3: Extended communication · Grammar Level 1–2: Kei te, I, Ka, Kua, E…ana in one passage',
    aos:[{code:'AO 2.4',label:'Full tense mastery'},{code:'AO 2.3',label:'Extended tense-controlled writing'}],
    iDo:{
      title:'Tāua Kōrero — All six tense markers in one passage',
      instruction:'You now have the full tense toolkit: Kei te, I, Ka, Kua, E…ana, and the negatives Kāore e…ana and Kāore i. Today we use all of them in a single passage — showing how a skilled te reo speaker moves through time fluidly.',
      example:`<b>Kua tae mai au ki te kura i tēnei ata.</b> (Kua — arrival complete, I am now here)<br><b>I haere au i te Rāhina</b> — he roa tōku huarahi. (I — specific past fact)<br><b>E haere ana tēnā kura ki te hākinakina ā tērā wiki</b> — ka tū tō mātou ope hei whakamau. (E…ana — ongoing plan; Ka — narrative result)<br><b>Kei te whakarite mātou mō tērā kaupeka ināianei.</b> (Kei te — what is happening right now)<br><b>Kāore anō kua oti ā mātou whakarite</b> — engari ka oti āpōpō. (Kua negative — not yet; Ka — future narrative)`,
      demo:`Each marker's job in this passage:\n\n<b>Kua</b> — arrival complete (I am here NOW as a result)\n<b>I</b> — specific past fact with detail\n<b>E…ana</b> — ongoing future plan (still being planned)\n<b>Ka</b> — narrative move (what will happen as a result)\n<b>Kei te</b> — what is happening right now\n<b>Kāore anō kua</b> — not yet completed\n\nNew words:\n<b>huarahi</b> — journey / path / road\n<b>ope</b> — team / group / squad\n<b>hei whakamau</b> — to compete against / to challenge (hei = for the purpose of, whakamau = focus on/oppose)\n<b>whakarite</b> — to prepare / arrange`,
      tip:'Read any te reo passage and identify the tense marker of each sentence. Once you can identify them easily, you can use them accurately. The markers are the skeleton — everything else hangs on them.',
    },
    weDo:{
      title:'Kia Tūhono — All markers, one story',
      instruction:'Together we write a story that uses all six markers deliberately. I specify which marker each sentence needs.',
      sentences:[
        'Sentence 1 — Kua: Something has just been completed with present relevance.',
        'Sentence 2 — I: A specific past event with a time word.',
        'Sentence 3 — E…ana + Ka: An ongoing background action interrupted by something.',
        'Sentence 4 — Kei te: What is happening right now as a result.',
      ],
      prompt:'You have now learned six tense/aspect markers: Kei te, I, Ka, Kua, E…ana, and Kāore. English has twelve tenses. Te reo Māori has six markers that between them cover the same ground — but with a different underlying logic. What is the logic? What question does each marker answer?',
    },
    youDo:{
      title:'Māu Anō — All six markers',
      instruction:'Write a passage using all six markers at least once each.',
      tasks:[
        'Write a Kua sentence and a Kei te sentence — make sure the difference is clear.',
        'Write an E…ana sentence interrupted by a Ka sentence.',
        'Write an I sentence (specific past) and a Kāore anō kua sentence (not yet complete).',
        '✦ Bonus: Write a complete eight-sentence passage about a project or event at school — use every marker at least once. Label each sentence with the marker you used and why.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero mō ngā whāinga — Goals and plans conversation',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 2.4: Future intention · AO 1.7: School language',
    aos:[{code:'AO 2.3',label:'Goals &amp; planning conversation'},{code:'AO 2.4',label:'Future intention'}],
    iDo:{
      title:'Tāua Kōrero — Planning and goal-setting',
      instruction:'Today we use Kua, hiahia, māku e, and Ka taea in a conversation about goals and plans — the kind of conversation you might have with a teacher, a coach, or a friend about where you are headed.',
      example:`<b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Kaiwhakaako" target="_blank" rel="noopener">Kaiwhakaako</a>:</b> Tēnā koe. Kua mutu tō akoranga mō tēnei wāhanga — he pēhea tōu whakaaro?<br><b>Ākonga:</b> Kua mārama ake au ki ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hanganga" target="_blank" rel="noopener">hanganga</a> katoa. Ka taea e au te tuhituhi i ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rerenga" target="_blank" rel="noopener">rerenga</a> <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=pakiaka" target="_blank" rel="noopener">pakiaka</a> ināianei.<br><b>Kaiwhakaako:</b> Ka pai! He aha āu whainga mō tērā wāhanga?<br><b>Ākonga:</b> Kei te hiahia au ki te ako i ngā kupu hou o te taiao. Māku hoki e tuhituhi i ōku whakaaro i ngā rā katoa.<br><b>Kaiwhakaako:</b> He whainga pai ērā. Ka taea e koe te kōrero māmā ake āpōpō?<br><b>Ākonga:</b> Āe — e kore e taea e au te kōrero māmā ake ināianei, engari ā tērā wāhanga, ka taea!<br><b>Kaiwhakaako:</b> Ko tāu <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whakapono" target="_blank" rel="noopener">whakapono</a> tōu ara. Haere tonu!`,
      demo:`New phrases for goals and planning:\n<b>Kua mārama ake au ki…</b> — I now understand more about…\n<b>rerenga pakiaka</b> — simple sentences (rerenga = sentence, pakiaka = root/basic)\n<b>He whainga pai ērā.</b> — Those are good goals.\n<b>Ka taea e koe te…</b> — Are you able to… / You can…\n<b>Ko tāu whakapono tōu ara.</b> — Your belief is your path. (whakapono = belief/faith)\n<b>Haere tonu!</b> — Keep going! / Press on!\n<b>māmā ake</b> — more easily / more fluently (māmā = light/easy, ake = more)`,
      tip:'Haere tonu! — Keep going! Tonu means "still" or "continuously" — haere tonu = keep travelling. It is one of the most encouraging things you can say in te reo. Use it.',
    },
    weDo:{
      title:'Kia Tūhono — Goal-setting conversation',
      instruction:'Build a goals conversation with a partner — one plays kaiwhakaako, one plays ākonga.',
      sentences:[
        'Kaiwhakaako: <b>He pēhea tōu whakaaro mō tōu ako i tēnei wāhanga?</b> Ākonga answers with Kua mārama ake au ki…',
        'Kaiwhakaako: <b>He aha āu whainga mō tērā wāhanga?</b> Ākonga answers with hiahia and māku e.',
        'Kaiwhakaako: <b>Ka taea e koe te [skill] ināianei?</b> Ākonga answers honestly — Ka taea OR E kore e taea engari…',
        'Close: Kaiwhakaako says Ko tāu whakapono tōu ara. Haere tonu! Ākonga responds.',
      ],
      prompt:'Ko tāu whakapono tōu ara — your belief is your path. This connects to the Māori concept of whakapono (faith/belief) as something that shapes your direction. How does believing you can do something create the path toward doing it? Can you think of a time your belief opened a path for you?',
    },
    youDo:{
      title:'Māu Anō — He whāinga — Your goals',
      instruction:'Write and share your Term 3 goals.',
      tasks:[
        'Write three hiahia sentences about things you want to be able to do by end of Term 3.',
        'Write two māku e sentences — things you commit to doing regularly.',
        'Write what you can already do: Ka taea e au te… (three abilities).',
        '✦ Bonus: Write a full goals paragraph (8 sentences) — what you have achieved (Kua), what you can do (Ka taea), what you want (hiahia), what you commit to (māku e), what you cannot yet do (E kore e taea), and your path forward (Ko tāu whakapono tōu ara).',
      ],
    },
  },
}

const FRIDAY_QUIZ_T3W2 = [
  {day:'Monday',  q:'"Kua tae mai ia." What does this sentence tell us about her arrival?',options:['She arrived a long time ago','She arrived and as a result she is now here','She is going to arrive soon','She was arriving when something interrupted her'],correct:1},
  {day:'Monday',  q:'"Kāore anō kia mutu." What does this mean?',options:['It has just finished','It will never finish','It has not finished yet','It finished a long time ago'],correct:2},
  {day:'Tuesday', q:'"Māna e hoko i te miraka." Who will buy the milk?',options:['I will','You will','He/she will','They will'],correct:2},
  {day:'Tuesday', q:'"E kore e taea e au te haere āpōpō." What does this mean?',options:['I do not want to go tomorrow','I went yesterday instead','I will not be able to go tomorrow','I am going tomorrow reluctantly'],correct:2},
  {day:'Wednesday',q:'Which marker signals a completed action whose result is relevant right now?',options:['Kei te','Ka','I','Kua'],correct:3},
  {day:'Wednesday',q:'What does "whakarite" mean?',options:['to compete','to arrive','to prepare / arrange','to finish'],correct:2},
  {day:'Thursday', q:'"Ko tāu whakapono tōu ara." What does whakapono mean?',options:['hard work','belief / faith','goal','journey'],correct:1},
  {day:'Thursday', q:'"Haere tonu!" — What does this expression encourage?',options:['Go home!','Stop what you are doing!','Keep going! / Press on!','Go slowly!'],correct:2},
]

const CURRICULUM_T3W3 = {
  Monday: {
    topic:'Nō hea koe? — Origin, iwi, hapū, and identity',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Personal information — iwi, hapū, maunga, awa · AO 2.1: Relationships',
    aos:[{code:'AO 1.4',label:'Identity — iwi &amp; hapū'},{code:'AO 2.1',label:'Community relationships'}],
    iDo:{
      title:'Tāua Kōrero — Deeper identity: where you truly come from',
      instruction:'In Week 4 of Term 1 you learned the basic pepeha — Ko [mountain] tōku maunga, Ko [river] tōku awa, Ko [name] tōku ingoa. Today we go deeper. We explore what iwi and hapū really mean, why they matter, and how to talk about community identity in te reo Māori.',
      example:`<b>Ko Tūhoe tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=iwi" target="_blank" rel="noopener">iwi</a>.</b><br>Tūhoe is my tribe/people.<br><br><b>Ko Ngāti Awa tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hap%C5%AB" target="_blank" rel="noopener">hapū</a>.</b><br>Ngāti Awa is my sub-tribe.<br><br><b>Ko te Kāhui Ariki tōku whānau pani.</b><br>The royal family is my extended family of guardians.<br><br><b>Nō reira ko ahau ko [name], nō [place], nō [iwi].</b><br>Therefore I am [name], from [place], of [iwi].<br><br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=uri" target="_blank" rel="noopener">uri</a> ahau nō [ancestor].</b><br>I am a descendant of [ancestor].`,
      demo:`Identity vocabulary:\n<b>iwi</b> — tribe / people (literally: bones — the framework that holds a people together)\n<b>hapū</b> — sub-tribe / pregnant (the sub-group that gives birth to new community)\n<b>uri</b> — descendant / offspring\n<b>tīpuna / tupuna</b> — ancestor / grandparent\n<b>whakapapa</b> — genealogy / to layer (whaka = to make, papa = layer/foundation)\n<b>tangata whenua</b> — the people of the land (the indigenous people)\n<b>manuhiri</b> — visitor / guest\n<b>Nō reira</b> — therefore / and so (as a conclusion)\n\nThe full pepeha structure:\n1. Ko [maunga] tōku maunga.\n2. Ko [awa] tōku awa.\n3. Ko [waka] tōku waka.\n4. Ko [iwi] tōku iwi.\n5. Ko [hapū] tōku hapū.\n6. Ko [marae] tōku marae.\n7. Ko [school] tōku kura.\n8. Ko [name] tōku ingoa.\n9. Nō [place] ahau.`,
      tip:'Whakapapa literally means "to layer things" — it is the layering of generations, one on top of another, connecting you to your beginnings. When you say your whakapapa, you are saying where you come from — not just geographically, but in every sense.',
    },
    weDo:{
      title:'Kia Tūhono — The full pepeha',
      instruction:'Build your full pepeha together. Each student adds one line.',
      sentences:[
        'Start: Ko [your nearest mountain or landmark] tōku maunga. Ko [your nearest river] tōku awa.',
        'Add iwi/hapū if known: Ko [iwi] tōku iwi. Ko [hapū] tōku hapū. (If not known: Ko [school region] tōku whenua.)',
        'Add marae and school: Ko [marae] tōku marae. Ko [school name] tōku kura.',
        'Close: Ko [your name] tōku ingoa. Nō [your town] ahau. Nō reira ko ahau.',
      ],
      prompt:'Iwi means "bones" — the framework of a people. Hapū means "pregnant" — the sub-group that creates new life. Why do you think Māori used these body words for social structures? What does it tell us about how Māori thought about community?',
    },
    youDo:{
      title:'Māu Anō — Tōu pepeha',
      instruction:'Write and practise your full pepeha.',
      tasks:[
        'Write all nine lines of your pepeha. Research any lines you do not know.',
        'Practise saying it aloud until it flows without looking at the page.',
        'Say your pepeha to a partner. They listen and then say theirs.',
        '✦ Bonus: Write a paragraph (6 sentences) explaining what each line of your pepeha means to you personally. Why does it matter that your maunga is named? What does connecting to land in an introduction say about Māori values?',
      ],
    },
  },
  Tuesday: {
    topic:'Te marae — The marae and its protocol',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Community · AO 1.6: Politeness and protocol · AO 2.1: Relationships',
    aos:[{code:'AO 1.4',label:'Community &amp; marae'},{code:'AO 1.6',label:'Protocol &amp; tikanga'}],
    iDo:{
      title:'Tāua Kōrero — The marae: home of the people',
      instruction:'The marae is the heart of Māori community life. It is where people gather for pōhiri (formal welcomes), tangi (funerals), hui (meetings), and celebration. Today we learn the language of the marae — what the parts are called, what happens there, and how to talk about it respectfully.',
      example:`<b>Parts of the marae:</b><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=marae" target="_blank" rel="noopener">marae</a> <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%81tea" target="_blank" rel="noopener">ātea</a></b> — the open space in front of the wharenui (sacred space for formal encounter)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=wharenui" target="_blank" rel="noopener">wharenui</a></b> — the meeting house (the large house where people sleep and gather)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=wharekai" target="_blank" rel="noopener">wharekai</a></b> — dining room / food house<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=wharepaku" target="_blank" rel="noopener">wharepaku</a></b> — toilet facilities (paku = small, whare paku = small house)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=waharoa" target="_blank" rel="noopener">waharoa</a></b> — gateway / entrance<br><br><b>What happens at the marae:</b><br><b>Ka haere mātou ki te marae.</b> We are going to the marae.<br><b>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=p%C5%8Dhiritia" target="_blank" rel="noopener">pōhiritia</a> mātou e ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tangata+whenua" target="_blank" rel="noopener">tangata whenua</a>.</b> We were welcomed by the hosts.<br><b>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whaikōrero" target="_blank" rel="noopener">whaikōrero</a> ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rangatira" target="_blank" rel="noopener">rangatira</a>.</b> The leaders gave speeches.<br><b>Ka waiata tātou.</b> We all sang.`,
      demo:`Marae protocol vocabulary:\n<b>pōhiri</b> — formal welcome ceremony\n<b>karanga</b> — the calling (women's ceremonial call of welcome)\n<b>whaikōrero</b> — formal speech (whai = to pursue, kōrero = speech)\n<b>haka</b> — dance / challenge\n<b>hongi</b> — pressing of noses (sharing the breath of life)\n<b>tangata whenua</b> — hosts (the people of the land)\n<b>manuhiri</b> — guests / visitors\n<b>Ka pōhiritia mātou.</b> — We were welcomed. (passive)\n<b>Ka whaikōrero ngā rangatira.</b> — The leaders gave speeches.\n<b>me noho</b> — we should sit / must sit (protocol instruction)`,
      tip:'On the marae, women lead through karanga (calling) and men lead through whaikōrero (speech). Both are essential. Neither is less important. The marae is a place of equal and complementary roles.',
    },
    weDo:{
      title:'Kia Tūhono — Marae language',
      instruction:'Practise marae vocabulary in sentences.',
      sentences:[
        'Parts of marae: Point and name — wharenui, marae ātea, wharekai, waharoa.',
        'Describe an action: <b>Ka karanga ngā wāhine.</b> The women called. <b>Ka whaikōrero ngā tāne.</b> The men spoke.',
        'Passive: <b>Ka pōhiritia mātou e ngā tangata whenua.</b> We were welcomed by the hosts.',
        'Protocol instruction: <b>Me noho tātou ināianei.</b> We should all sit now.',
      ],
      prompt:'Ka pōhiritia mātou — we were welcomed. The passive voice here makes the welcome something that HAPPENED TO US — we received it. In te ao Māori, welcoming is a gift given by hosts to guests. How does the passive voice capture that relationship better than "the hosts welcomed us"?',
    },
    youDo:{
      title:'Māu Anō — Marae recount',
      instruction:'Write about a marae visit — real or imagined.',
      tasks:[
        'Write what happened using Ka sentences: Ka haere mātou… Ka pōhiritia mātou… Ka waiata tātou…',
        'Name three parts of the marae using Ko ēnei: Ko ēnei ngā wāhanga o te marae: he wharenui, he wharekai, he marae ātea.',
        'Write a me sentence about marae protocol: Me [action] tātou i te marae.',
        '✦ Bonus: Write a full marae visit recount (8 sentences) — where you went, how you were welcomed (passive), what happened (Ka sequence), what you saw (Ko ēnei list), and how you felt (emotion vocabulary).',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Community and identity in extended writing',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Personal information · AO 2.1: Community · AO 2.3: Extended writing',
    aos:[{code:'AO 1.4',label:'Identity writing'},{code:'AO 2.1',label:'Community in writing'}],
    iDo:{
      title:'Tāua Kōrero — Writing about who you are and where you belong',
      instruction:'Today we combine the pepeha, the marae, and community vocabulary into extended writing. This is the kind of te reo writing you might produce for a school presentation, a wall display, or an end-of-year portfolio.',
      example:`<b>Ko Aoraki tōku maunga, ko Waitaki tōku awa.</b><br><b>Ko Ngāi Tahu tōku iwi, ko Ngāti Māmoe tōku hapū.</b><br><b>Nō Ōtautahi ahau.</b><br><b>Ko au ko [name].</b><br><br>I tōku ao, he nui ngā āhuatanga pai — ko tōku whānau, ko ōku hoa, ko tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kura" target="_blank" rel="noopener">kura</a>.<br>Ko ēnei ngā mea e mau ana ki a au: he aroha o tōku whānau, he kaha o ōku hoa, he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81ramatanga" target="_blank" rel="noopener">māramatanga</a> o tōku kura.<br>He uri ahau nō ngā tīpuna nō reira he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kawenga" target="_blank" rel="noopener">kawenga</a> tōku — me tiaki au i tēnei reo, i tēnei <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tikanga" target="_blank" rel="noopener">tikanga</a>.`,
      demo:`New vocabulary for identity writing:\n<b>e mau ana ki a au</b> — that hold fast to me / that I hold dear\n<b>māramatanga</b> — understanding / enlightenment / clarity\n<b>kawenga</b> — responsibility / obligation / burden\n<b>tikanga</b> — correct practice / custom / culture\n<b>He uri ahau nō ngā tīpuna.</b> — I am a descendant of the ancestors.\n<b>nō reira he kawenga tōku</b> — therefore I have a responsibility\n<b>me tiaki au i tēnei reo</b> — I should/must care for this language\n\nStructure for identity writing:\n1. Pepeha (mountain, river, iwi, hapū, place, name)\n2. What matters to you (Ko ēnei ngā mea e mau ana ki a au)\n3. Your identity statement (He uri ahau nō…)\n4. Your responsibility (Nō reira he kawenga tōku — me [action])`,
      tip:'Me tiaki au i tēnei reo — I must care for this language. This is not just a sentence — it is a commitment. When you write it in your own pepeha, you are making te reo Māori part of your identity.',
    },
    weDo:{
      title:'Kia Tūhono — Extended identity writing',
      instruction:'We write an extended identity piece together, sentence by sentence.',
      sentences:[
        'Pepeha: Ko [maunga] tōku maunga. Ko [awa] tōku awa. Ko [name] tōku ingoa. Nō [place] ahau.',
        'What matters: Ko ēnei ngā mea e mau ana ki a au: he [noun], he [noun], he [noun].',
        'Identity statement: He uri ahau nō ōku tīpuna nō reira…',
        'Responsibility close: Me tiaki au i tēnei reo, i tēnei tikanga, i tēnei ao.',
      ],
      prompt:'Me tiaki au i tēnei reo, i tēnei tikanga, i tēnei ao — I must care for this language, this culture, this world. Three parallel i phrases. What is the effect of that repetition? Why does saying three things in parallel make a stronger statement than just saying one?',
    },
    youDo:{
      title:'Māu Anō — Identity writing',
      instruction:'Write your own extended identity piece in te reo Māori.',
      tasks:[
        'Write your full pepeha (all nine lines).',
        'Write Ko ēnei ngā mea e mau ana ki a au — three things you hold dear.',
        'Write your identity statement: He uri ahau nō…',
        '✦ Bonus: Write your full identity piece (10 sentences) — pepeha, what matters, identity statement, and responsibility. Use: Ko, He, Kua (what you have become), hiahia, and me tiaki.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He pōhiri — A welcome ceremony',
    nzLink:'Te Aho Arataki Marau — AO 1.1: Greetings · AO 1.4: Community · AO 1.6: Protocol · AO 2.1: Relationships',
    aos:[{code:'AO 1.1',label:'Formal greetings &amp; welcome'},{code:'AO 1.6',label:'Marae protocol'}],
    iDo:{
      title:'Tāua Kōrero — Experiencing a pōhiri',
      instruction:'Today we experience the language of a pōhiri — a formal welcome ceremony. You will learn the key phrases, the structure, and what each part means. This is among the most important cultural language in te ao Māori.',
      example:`<b>THE <A CLASS="TE-AKA-LINK" HREF="HTTPS://MAORIDICTIONARY.CO.NZ/SEARCH?KEYWORDS=KARANGA" TARGET="_BLANK" REL="NOOPENER">KARANGA</A> (call of welcome — women):</b><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Haere+mai" target="_blank" rel="noopener">Haere mai</a>, haere mai, haere mai!</b><br>Come, come, come! (Repeated three times — three is completion)<br><br><b>THE <B><A CLASS="TE-AKA-LINK" HREF="HTTPS://MAORIDICTIONARY.CO.NZ/SEARCH?KEYWORDS=WHAIKŌRERO" TARGET="_BLANK" REL="NOOPENER">WHAIKŌRERO</A></B> (formal speech — opens and closes with):</b><br><b>Tēnā koutou, tēnā koutou, tēnā koutou katoa.</b><br><b>Ko [mountain] tōku maunga…</b> (pepeha lines)<br><b>Nō reira, tēnā koutou, tēnā koutou, tēnā koutou katoa.</b><br><br><b>THE WAIATA (song following each speech):</b><br>After each whaikōrero, a waiata is sung by that person's group.<br><br><b>THE <B><A CLASS="TE-AKA-LINK" HREF="HTTPS://MAORIDICTIONARY.CO.NZ/SEARCH?KEYWORDS=HONGI" TARGET="_BLANK" REL="NOOPENER">HONGI</A></B> (greeting):</b><br><b>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hongi" target="_blank" rel="noopener">hongi</a> tātou.</b> — We will press noses.<br><b>Ko te hongi he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tohu" target="_blank" rel="noopener">tohu</a> o te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=aroha" target="_blank" rel="noopener">aroha</a>.</b> — The hongi is a sign of love/compassion.`,
      demo:`Pōhiri structure:\n1. <b>Karanga</b> — women call the guests onto the marae ātea\n2. <b>Whaikōrero</b> — formal speeches by hosts then guests (alternating)\n3. <b>Waiata</b> — song after each speech\n4. <b>Hongi</b> — pressing of noses to seal the welcome\n5. <b>Kai</b> — sharing of food (the division between sacred and everyday is lifted)\n\nAfter the hongi, manuhiri (guests) become tangata whenua (people of the place) — the distinction ends. This is profound: welcoming someone makes them part of you.\n\nKey phrase:\n<b>Nau mai, haere mai, tū mai, noho mai.</b>\nCome, come, stand here, sit here. (full welcome phrase)`,
      tip:'Haere mai × 3 — three repetitions. In te ao Māori, saying something three times is a sign of completion and sincerity. Tēnā koutou × 3 at the end of a speech. The hongi shared three times. Three is the number of fullness.',
    },
    weDo:{
      title:'Kia Tūhono — Pōhiri practice',
      instruction:'Class performs a mini pōhiri — one group as tangata whenua, one as manuhiri.',
      sentences:[
        'Tangata whenua: Karanga — Haere mai, haere mai, haere mai! (call three times)',
        'Tangata whenua whaikōrero: Tēnā koutou katoa. Ko [student pepeha lines]. Nō reira, tēnā koutou ×3.',
        'Manuhiri respond: Their whaikōrero — Ko [their pepeha]. Tēnā koutou ×3.',
        'Close: Ka hongi tātou. Ko te hongi he tohu o te aroha. Students share the hongi.',
      ],
      prompt:'After the hongi, manuhiri become tangata whenua — guests become people of the place. The distinction between "us" and "them" ends. What does this say about the Māori philosophy of welcome? How is this different from how welcome is understood in other contexts you know?',
    },
    youDo:{
      title:'Māu Anō — He whaikōrero',
      instruction:'Write your own short whaikōrero to deliver in a pōhiri.',
      tasks:[
        'Write your opening: Tēnā koutou katoa.',
        'Write your pepeha — all nine lines.',
        'Write two sentences about why you are here and what you bring: I haere mai ahau ki [reason]. Ka kawe mai ahau i [something you bring].',
        '✦ Bonus: Write and practise your full whaikōrero (10–12 sentences). Open with Tēnā koutou katoa, give your pepeha, say why you are here, what you bring, what you hope for, and close with Nō reira, tēnā koutou, tēnā koutou, tēnā koutou katoa.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T3W3 = [
  {day:'Monday',  q:'What does "uri" mean?',options:['ancestor','descendant / offspring','cousin','elder'],correct:1},
  {day:'Monday',  q:'"He uri ahau nō ngā tīpuna." What does tīpuna mean?',options:['children','cousins','ancestors / grandparents','tribe'],correct:2},
  {day:'Tuesday', q:'What is the marae ātea?',options:['The dining room','The gateway','The open space in front of the wharenui — sacred space for formal encounter','The sleeping area in the meeting house'],correct:2},
  {day:'Tuesday', q:'"Ka pōhiritia mātou e ngā tangata whenua." What grammatical feature makes this sentence notable?',options:['It uses Ka for future tense','It uses the passive — we received the welcome from the hosts','It uses an object marker i','It uses Kua for completed action'],correct:1},
  {day:'Wednesday',q:'What does "kawenga" mean?',options:['ancestor','mountain','responsibility / obligation','genealogy'],correct:2},
  {day:'Wednesday',q:'"Me tiaki au i tēnei reo, i tēnei tikanga, i tēnei ao." What literary technique uses the three parallel i phrases?',options:['Alliteration','Simile','Parallel structure / anaphora for emphasis','Personification'],correct:2},
  {day:'Thursday', q:'What happens after the hongi in a pōhiri?',options:['The guests leave the marae','The manuhiri become tangata whenua — the distinction between guests and hosts ends','The hosts perform a haka','The speeches begin'],correct:1},
  {day:'Thursday', q:'Why is something said or done three times in te ao Māori protocol?',options:['Because three people must always agree','Three repetitions signal completion and sincerity','It is just a tradition with no meaning','To allow everyone to hear clearly'],correct:1},
]

const CURRICULUM_T3W4 = {
  Monday: {
    topic:'Ngā kupu hou o te kura — School vocabulary',
    nzLink:'Te Aho Arataki Marau — AO 1.7: Classroom language · AO 2.3: Extended communication · Grammar Level 1–2: School context vocabulary',
    aos:[{code:'AO 1.7',label:'School &amp; classroom language'},{code:'AO 2.3',label:'School communication'}],
    iDo:{
      title:'Tāua Kōrero — School life in te reo Māori',
      instruction:'AO 1.7 asks us to use and respond to classroom language. Today we build a rich school vocabulary so that more and more of your school day can happen in te reo Māori. The goal is for te reo to move from the classroom into the corridor, the playground, and the staffroom.',
      example:`<b>SCHOOL PLACES:</b><br><b>akomanga</b> — classroom<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tari" target="_blank" rel="noopener">tari</a></b> — office<br><b>whare <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C4%81karo" target="_blank" rel="noopener">tākaro</a></b> — gymnasium / sports room<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=papa" target="_blank" rel="noopener">papa</a> tākaro</b> — playground<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=p%C4%81taka" target="_blank" rel="noopener">pātaka</a></b> — library / resource room (literally: storehouse)<br><b>kaukau</b> — swimming pool (also: to swim — same word)<br><br><b>SCHOOL ACTIVITIES:</b><br><b>Kei te ako mātou.</b> — We are learning.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=waihanga" target="_blank" rel="noopener">waihanga</a> mātou.</b> — We are creating/building.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rangahau" target="_blank" rel="noopener">rangahau</a> mātou.</b> — We are researching.<br><b>Kei te whakaaro mātou.</b> — We are thinking.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=taunakitia" target="_blank" rel="noopener">taunakitia</a> mātou.</b> — We are being assessed.`,
      demo:`School subject names:\n<b>pāngarau</b> — maths\n<b>pānui</b> — reading\n<b>tuhituhi</b> — writing\n<b>akoranga reo</b> — language lesson\n<b>akoranga pūtaiao</b> — science (pūtaiao = science/technology)\n<b>akoranga tikanga</b> — social studies / cultural studies\n<b>akoranga hākinakina</b> — PE / sports lesson\n<b>akoranga toi</b> — art (toi = art/creativity)\n<b>akoranga puoro</b> — music (puoro = music)\n\nClassroom commands (AO 1.7):\n<b>Tū mai!</b> — Stand up!\n<b>Noho mai!</b> — Sit down!\n<b>Titiro mai!</b> — Look this way!\n<b>Whakarongo mai!</b> — Listen!\n<b>Āta whakaaro!</b> — Think carefully!\n<b>Mahi tahi!</b> — Work together!`,
      tip:'Akoranga = lesson. Put any subject after it: akoranga pāngarau (maths lesson), akoranga toi (art lesson). You can create any school subject name with this word.',
    },
    weDo:{
      title:'Kia Tūhono — School day in te reo',
      instruction:'Describe your school day in te reo Māori — places, activities, subjects.',
      sentences:[
        'Where are you? <b>Kei te akomanga au.</b> Kei te pātaka ngā ākonga. Kei te papa tākaro rātou.',
        'What subject? <b>Kei te ako mātou i te pāngarau.</b> I te akoranga toi tātou.',
        'Command and response: Teacher calls <b>Whakarongo mai!</b> — class responds by listening. Teacher says <b>Mahi tahi!</b> — class works in pairs.',
        'Report: <b>I te Rāapa, i ako mātou i te akoranga pūtaiao — i ātaahua ngā hua o ā mātou rangahau.</b>',
      ],
      prompt:'If your school moved to using te reo Māori for all classroom commands — Tū mai, Noho mai, Whakarongo mai — how do you think that would change the feel of the classroom? What would students need to make that work? What would teachers need?',
    },
    youDo:{
      title:'Māu Anō — School day recount',
      instruction:'Write your school day in te reo Māori.',
      tasks:[
        'Write your timetable for today — each subject using akoranga [subject].',
        'Write where you are in each lesson: Kei te [place] mātou i te [subject].',
        'Write three things you did using past tense: I te [time], i [activity] mātou i te [subject].',
        '✦ Bonus: Write a full school day recount (8 sentences) — every lesson, where you were, what you did, and how you felt about each one. Use Kei te, I, Ka, and E…ana at least once each.',
      ],
    },
  },
  Tuesday: {
    topic:'He akoranga pai — What makes a good lesson',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended opinions · AO 1.7: School language · AO 2.5: Evaluative language',
    aos:[{code:'AO 2.3',label:'Opinion &amp; evaluation'},{code:'AO 1.7',label:'School context'}],
    iDo:{
      title:'Tāua Kōrero — Evaluating and giving opinions about learning',
      instruction:'Today we use evaluative language to talk about what makes learning good — what works, what doesn\'t, and what you prefer. This connects AO 2.3 (extended opinions) with AO 1.7 (school language).',
      example:`<b>He akoranga pai te akoranga Rāhina nō te mea…</b><br>Monday's lesson was a good lesson because…<br><br><b>He pai ake te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mahi+tahi" target="_blank" rel="noopener">mahi tahi</a> i te mahi <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kotahi" target="_blank" rel="noopener">kotahi</a> ki a au.</b><br>Working together is better than working alone in my opinion.<br><br><b>Ko tāku whakaaro, he nui ake ngā hua o te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Drero" target="_blank" rel="noopener">kōrero</a> i te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tuhi" target="_blank" rel="noopener">tuhi</a>.</b><br>My opinion is that speaking has more benefits than writing.<br><br><b>I uaua ki a au te [subject] nō te mea…engari kua mārama ake au.</b><br>I found [subject] difficult because… but I now understand better.`,
      demo:`Evaluative language in te reo:\n\n<b>He akoranga pai/kino tērā.</b> — That was a good/bad lesson.\n<b>Ko tāku whakaaro…</b> — In my opinion / My thought is…\n<b>I uaua ki a au…</b> — I found it difficult… (personal evaluation)\n<b>I ngāwari ki a au…</b> — I found it easy… (ngāwari = easy)\n<b>Ka taea e au te…</b> — I am able to… (showing learning)\n<b>He nui ake ngā hua o te X i te Y.</b> — X has more benefits than Y.\n<b>He pai ake te X i te Y ki a au.</b> — X is better than Y for me.\n\nNew words:\n<b>ngāwari</b> — easy / simple\n<b>hua</b> — benefit / result (you\'ve seen this before)\n<b>mahi tahi</b> — working together (collaborative work)\n<b>mahi kotahi</b> — working alone (kotahi = one/alone)`,
      tip:'Ko tāku whakaaro = my thought/opinion. Use this whenever you want to signal that what follows is your personal view. It is the te reo equivalent of "I think" or "in my opinion."',
    },
    weDo:{
      title:'Kia Tūhono — Evaluate your learning',
      instruction:'Use evaluative language to assess your own learning.',
      sentences:[
        'Pick a lesson from this week: <b>He akoranga pai tērā nō te mea…</b> Why was it good?',
        'Compare two ways of learning: <b>He pai ake te mahi tahi i te mahi kotahi ki a au nō te mea…</b>',
        'Self-evaluate: <b>I uaua ki a au te [skill/topic] engari kua mārama ake au nō te mea…</b>',
        'State what you can do now: <b>Ka taea e au te [skill] ināianei — kāore i taea e au i tērā wiki.</b>',
      ],
      prompt:'Ko tāku whakaaro, he nui ake ngā hua o te kōrero i te tuhi. Do you agree? Is speaking more valuable than writing for language learning? Or is it the opposite? Defend your view in te reo using He pai ake… nō te mea…',
    },
    youDo:{
      title:'Māu Anō — Learning evaluation',
      instruction:'Write an honest evaluation of your learning this term.',
      tasks:[
        'Write He akoranga pai/uaua tērā nō te mea about one lesson from this week.',
        'Write He pai ake te X i te Y ki a au about two ways of learning.',
        'Write I uaua ki a au te [topic] engari kua mārama ake au.',
        '✦ Bonus: Write a full learning evaluation paragraph (7 sentences) — what you have learned this term, what was hard, what was easy, what you prefer, what you can do now that you couldn\'t before, and what your next step is. Use evaluative language throughout.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — School, community, and identity together',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Identity · AO 1.7: School language · AO 2.1: Community · AO 2.3: Extended writing',
    aos:[{code:'AO 1.4',label:'Identity in school context'},{code:'AO 2.1',label:'School community'}],
    iDo:{
      title:'Tāua Kōrero — School as community: writing about your place',
      instruction:'Today we combine the school vocabulary, identity language, and community structures into extended writing about what your school means to you and your community. This is the kind of writing that goes on the wall, into a portfolio, or is shared with whānau.',
      example:`<b>Ko tōku kura ko [school name].</b><br>My school is [name].<br><br><b>He kura ātaahua tōku kura — kei reira ōku hoa, ōku kaiako, ōku mōhiotanga katoa.</b><br>My school is a beautiful school — my friends, my teachers, my entire knowledge are there.<br><br><b>I tōku kura, kei te ako mātou i ngā mea katoa — te reo Māori, te pāngarau, te toi, te hākinakina.</b><br>At my school, we learn everything — te reo Māori, maths, art, sport.<br><br><b>Ko tōku kura he wāhi <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tiaki" target="_blank" rel="noopener">tiaki</a> mōku — ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tipu" target="_blank" rel="noopener">tipu</a> ōku whakaaro, ka tipu hoki tōku ngākau.</b><br>My school is a place of nurturing for me — my thoughts grow, my heart grows too.`,
      demo:`New community and school vocabulary:\n<b>mōhiotanga</b> — knowledge / understanding (mōhio + tanga)\n<b>wāhi tiaki</b> — place of nurturing / safe place (wāhi = place, tiaki = guard/care)\n<b>ka tipu</b> — grows (Ka for narrative/ongoing)\n<b>i tōku kura</b> — at my school\n<b>kei reira</b> — there / there it is (referring back)\n<b>ko tōku kura he…</b> — my school is a… (He sentence about identity)\n\nStructure for extended school writing:\n1. Identity: Ko tōku kura ko [name].\n2. Description: He [adjective] tōku kura nō te mea…\n3. What happens there: I tōku kura, kei te ako mātou i…\n4. What it means: Ko tōku kura he wāhi… mōku.`,
      tip:'Ko tōku kura he wāhi tiaki mōku — my school is a place of nurturing for me. Wāhi tiaki is a beautiful phrase — a place that guards and cares. What words would you use to describe your school as a place?',
    },
    weDo:{
      title:'Kia Tūhono — School identity writing',
      instruction:'Build a school identity piece together.',
      sentences:[
        'Identity line: Ko tōku kura ko [school name]. Add a He description: He [adjective] tōku kura.',
        'Community line: Ko ēnei ngā tāngata o tōku kura: he kaiako [X], he ākonga [X]…',
        'What happens: I tōku kura kei te ako mātou i [list of subjects].',
        'Meaning line: Ko tōku kura he wāhi [word] mōku nō te mea…',
      ],
      prompt:'Ka tipu ōku whakaaro, ka tipu hoki tōku ngākau — my thoughts grow, my heart grows too. What does it mean for a school to grow both whakaaro (thoughts/intellect) and ngākau (heart/emotion)? What makes a school do both well?',
    },
    youDo:{
      title:'Māu Anō — School identity piece',
      instruction:'Write your own extended school identity piece.',
      tasks:[
        'Write your school identity opening: Ko tōku kura ko [name]. He [adjective] tōku kura.',
        'Write what happens there: Ko ēnei ngā mea pai o tōku kura… (Ko ēnei list).',
        'Write what your school means: Ko tōku kura he wāhi [word] mōku nō te mea…',
        '✦ Bonus: Write your full school identity piece (10 sentences) — identity, description, community, what happens, what you learn, what it means to you, and close with Ka tipu ōku whakaaro, ka tipu hoki tōku ngākau i tōku kura.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He taumahatanga — Challenges and resilience',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 2.5: Evaluative vocabulary · AO 1.6: Discussing challenges',
    aos:[{code:'AO 2.3',label:'Resilience &amp; challenge conversation'},{code:'AO 2.5',label:'Evaluative vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Talking about challenges and getting through them',
      instruction:'Every learner faces challenges. Today we learn how to talk about challenges, struggles, and resilience in te reo Māori — an important set of language skills for real conversation.',
      example:`<b>A:</b> He pēhea tōu ako i tēnei wāhanga?<br><b>B:</b> I uaua ki a au i te tīmatanga — kāore au e mārama ana ki ngā hanganga katoa.<br><b>A:</b> He aha te mea i uaua rawa atu ki a koe?<br><b>B:</b> Ko te Kua — e kore au e mōhio ana ko ēhea wā me whakamahi ai i tēnā.<br><b>A:</b> Āe, he uaua tēnā. He aha āu i mahi ai hei āwhina i a koe?<br><b>B:</b> I pātai au ki tōku kaiako — i āwhina ia i a au. Kua mārama ake au ināianei.<br><b>A:</b> Ka pai tōu māia! Ko tērā te ara o te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%81konga" target="_blank" rel="noopener">ākonga</a> pai — me <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=p%C4%81tai" target="_blank" rel="noopener">pātai</a>, me mahi, me āta whakaaro.<br><b>B:</b> Āe. Haere tonu!`,
      demo:`Resilience vocabulary:\n<b>taumahatanga</b> — challenge / burden (taumaha = heavy)\n<b>māia</b> — brave / bold / resilient\n<b>āwhina</b> — help / support\n<b>pātai</b> — to ask a question (also: question)\n<b>He aha āu i mahi ai hei āwhina i a koe?</b>\nWhat did you do to help yourself?\n<b>hei āwhina i a koe</b> — to help yourself (hei = for the purpose of)\n<b>Ko tērā te ara o te ākonga pai.</b>\nThat is the path of a good student.\n<b>me pātai, me mahi, me āta whakaaro</b>\nmust ask, must work, must think carefully\n<b>e kore au e mōhio ana ko ēhea wā me whakamahi ai</b>\nI don\'t know which times I should use it`,
      tip:'Me pātai, me mahi, me āta whakaaro — three me instructions for a good learner. Ask, work, think carefully. These three together describe almost everything it takes to learn well in any language.',
    },
    weDo:{
      title:'Kia Tūhono — Resilience conversation',
      instruction:'Build a conversation about a challenge you have faced and how you got through it.',
      sentences:[
        'I ask: <b>He aha te mea i uaua rawa atu ki a koe i tēnei wāhanga?</b> Answer honestly.',
        'I ask: <b>He aha āu i mahi ai hei āwhina i a koe?</b> Answer with what you did: I pātai au ki… / I mahi au… / I āta whakaaro au.',
        'I confirm your progress: <b>Kua mārama ake koe ināianei.</b> You agree or add more.',
        'Close with the ākonga pai formula: <b>Ko tērā te ara o te ākonga pai — me pātai, me mahi, me āta whakaaro.</b>',
      ],
      prompt:'Ko tērā te ara o te ākonga pai — me pātai, me mahi, me āta whakaaro. Three things: ask, work, think carefully. Is there anything missing from this list? What would YOU add as a fourth quality of a good learner? Can you say it in te reo?',
    },
    youDo:{
      title:'Māu Anō — Tōu taumahatanga',
      instruction:'Write about a challenge you faced and how you got through it.',
      tasks:[
        'Name the challenge: He [noun] tōku taumahatanga — I uaua ki a au te [topic/skill].',
        'Describe what you did: I pātai au ki… / I mahi au… / I āta whakaaro au.',
        'Show your progress: Kua mārama ake au ināianei nō te mea…',
        '✦ Bonus: Write a full resilience account (8 sentences) — name the challenge, when it started, how it felt (emotion vocabulary), what you did about it (three me instructions), who helped, what changed, and how you feel now. Close with Haere tonu!',
      ],
    },
  },
}

const FRIDAY_QUIZ_T3W4 = [
  {day:'Monday',  q:'What does "pātaka" mean in a school context?',options:['gymnasium','playground','library / resource room (storehouse)','office'],correct:2},
  {day:'Monday',  q:'"Kei te rangahau mātou." What activity are they doing?',options:['creating / building','thinking','researching','being assessed'],correct:2},
  {day:'Tuesday', q:'What does "ngāwari" mean?',options:['difficult','easy / simple','interesting','boring'],correct:1},
  {day:'Tuesday', q:'"He pai ake te mahi tahi i te mahi kotahi ki a au." What is being compared?',options:['Two different school subjects','Working together versus working alone','Two different teachers','Morning lessons versus afternoon lessons'],correct:1},
  {day:'Wednesday',q:'What does "wāhi tiaki" mean?',options:['a place to play','a place of learning','a place of nurturing / safe place','a place to eat'],correct:2},
  {day:'Wednesday',q:'"Ka tipu ōku whakaaro, ka tipu hoki tōku ngākau." What two things are growing?',options:['The student\'s height and their strength','Knowledge/thoughts and heart/emotion','The school and the community','Friends and teachers'],correct:1},
  {day:'Thursday', q:'What does "āwhina" mean?',options:['challenge','burden','ask a question','help / support'],correct:3},
  {day:'Thursday', q:'"Me pātai, me mahi, me āta whakaaro." What are the three qualities of a good learner?',options:['Listen, write, remember','Ask, work, think carefully','Read, speak, practise','Study, sleep, repeat'],correct:1},
]

const CURRICULUM_T3W5 = {
  Monday: {
    topic:'Ngā kupu āhua — Adverbs of degree and intensity',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Descriptive language · Grammar Level 1–2: Degree adverbs tino, āhua, noa, rawa atu, atu, mai',
    aos:[{code:'AO 2.5',label:'Degree adverbs &amp; intensity'},{code:'AO 2.3',label:'Expressive intensity'}],
    iDo:{
      title:'Tāua Kōrero — How much, how intense, how degree',
      instruction:'You know tino (very) and ake/rawa atu (more/most). Today we look at the full range of degree and intensity words in te reo Māori — the words that control how strong a statement feels.',
      example:`<b>tino</b> — very / truly<br><b>He tino pai tēnei.</b> — This is very good.<br><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%81hua" target="_blank" rel="noopener">āhua</a></b> — somewhat / quite / rather / quite / rather<br><b>He āhua uaua tēnei.</b> — This is quite difficult.<br><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=noa" target="_blank" rel="noopener">noa</a></b> — just / merely / freely (reduces intensity or shows unconstrained action) / freely (reduces intensity or shows unconstrained action)<br><b>Ka haere noa ia.</b> — She just went / she wandered freely.<br><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tonu" target="_blank" rel="noopener">tonu</a></b> — still / continuously / right (emphasises continuity) / right (emphasises continuity)<br><b>Kei te mahi tonu ia.</b> — She is still working.<br><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=an%C5%8D" target="_blank" rel="noopener">anō</a></b> — again / still / also (adds repetition or equivalence) / also (adds repetition or equivalence)<br><b>Ka haere anō mātou.</b> — We will go again.<br><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C4%93" target="_blank" rel="noopener">kē</a></b> — indeed / actually / on the contrary (emphasises or corrects) / on the contrary (emphasises or corrects)<br><b>He pai kē tēnei!</b> — This is actually really good! / This is even better!`,
      demo:`The degree adverb toolkit:\n\n<b>tino</b> [adjective/verb] = very [adj]\n<b>āhua</b> [adjective] = somewhat/quite [adj]\n<b>[verb] noa</b> = just [verb] / freely [verb]\n<b>[verb] tonu</b> = still [verb] / continuously [verb]\n<b>[verb] anō</b> = [verb] again\n<b>[adjective/verb] kē</b> = actually [adj] / on the contrary\n<b>[verb] atu / mai</b> = [verb] away from me / toward me\n\nExamples:\n<b>Ka kai noa ia.</b> — She just eats (freely, casually).\n<b>He pai tonu tēnei.</b> — This is still good / continuously good.\n<b>Ka hoki anō ia.</b> — She came back again.\n<b>He pai kē atu tēnei i tērā!</b> — This is even better than that!\n\nNew word:\n<b>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=wani" target="_blank" rel="noopener">wani</a> kē!</b> — That is amazing! (wani = excellent, kē = indeed)`,
      tip:'Kē adds a "contrary to expectations" feel — "He pai kē!" means "it is actually good!" (you might not have expected it). Ka wani kē! = That is amazing! (even more than expected). Use kē when something surprises you positively.',
    },
    weDo:{
      title:'Kia Tūhono — Degree challenge',
      instruction:'I give you a plain sentence — you add a degree adverb and say how the meaning changes.',
      sentences:[
        '"He pai tēnei." Add tino → <b>He tino pai tēnei.</b> Add āhua → <b>He āhua pai tēnei.</b> What changed?',
        '"Kei te mahi ia." Add tonu → <b>Kei te mahi tonu ia.</b> What does tonu add?',
        '"Ka haere ia." Add noa → <b>Ka haere noa ia.</b> Add anō → <b>Ka haere anō ia.</b> Different meanings?',
        'Express surprise: use kē — "This is actually really delicious!" → <b>He reka kē tēnei!</b> (reka = delicious)',
      ],
      prompt:'Ka haere noa ia (she just wanders freely) vs Ka haere tonu ia (she keeps going continuously). Both are about ongoing movement but with completely different feelings. What is the emotional difference? In what situation would you use each?',
    },
    youDo:{
      title:'Māu Anō — Degree sentences',
      instruction:'Use degree adverbs to add intensity and nuance to your sentences.',
      tasks:[
        'Write three sentences using tino, āhua, and noa — one each.',
        'Write two sentences using tonu and anō — show the difference.',
        'Write a kē sentence that expresses pleasant surprise: <b>He [adjective] kē tēnei!</b>',
        '✦ Bonus: Rewrite five plain sentences from your previous work by adding degree adverbs. Read the original and the new version aloud — notice how much more expressive the degree version sounds.',
      ],
    },
  },
  Tuesday: {
    topic:'He aha te tikanga? — Explaining meaning and custom',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended explanation · AO 1.4: Cultural connection · Grammar Level 1–2: Explaining meaning structures',
    aos:[{code:'AO 2.3',label:'Explanation &amp; meaning'},{code:'AO 1.4',label:'Cultural meaning'}],
    iDo:{
      title:'Tāua Kōrero — Explaining what things mean',
      instruction:'Being able to EXPLAIN things in te reo — what a word means, why a custom exists, what a phrase does — is a sign of true fluency. Today we learn the structures for giving explanations and definitions in te reo Māori.',
      example:`<b>He aha te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tikanga" target="_blank" rel="noopener">tikanga</a> o tēnei kupu?</b><br>What is the meaning of this word?<br><br><b>Ko te tikanga o "aroha" ko te…</b><br>The meaning of "aroha" is…<br><br><b>Ko te tikanga o te hongi ko te tiaki i te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=manawa" target="_blank" rel="noopener">manawa</a> ora.</b><br>The meaning of the hongi is the keeping of the breath of life.<br><br><b>Nā reira, ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C4%ABia" target="_blank" rel="noopener">kīia</a> ko "aroha" tērā.</b><br>Therefore, that is called "aroha".<br><br><b>He mea nui te [custom] nō te mea…</b><br>The [custom] is an important thing because…`,
      demo:`Explanation structures:\n\n1. <b>Ko te tikanga o [word/thing] ko te [explanation].</b>\nThe meaning of [word] is [explanation].\n\n2. <b>He mea nui/pai/tapu [custom] nō te mea…</b>\n[Custom] is important/good/sacred because…\n\n3. <b>Nā reira, ka kīia ko [name] tērā.</b>\nTherefore, that thing is called [name].\n\n4. <b>Ko tā [word] mahi ko te [function].</b>\nThe function of [word] is [function].\n\nNew words:\n<b>tikanga</b> — meaning / custom / correct practice\n<b>manawa ora</b> — breath of life (manawa = breath, ora = life/wellbeing)\n<b>tapu</b> — sacred / restricted / forbidden\n<b>noa</b> — free from tapu / ordinary / unrestricted (also: just/freely)\n<b>ka kīia</b> — is called / is named (passive)`,
      tip:'Ko te tikanga o [X] ko te [explanation]. This is the te reo pattern for defining something. Master this and you can explain any word or concept in te reo Māori.',
    },
    weDo:{
      title:'Kia Tūhono — Define and explain',
      instruction:'Use the explanation structures to define te reo words and cultural concepts.',
      sentences:[
        'Define a word: <b>Ko te tikanga o "whakapapa" ko te raupapa o ngā tīpuna.</b> (raupapa = sequence/ordering)',
        'Explain a custom: <b>He mea nui te karanga nō te mea ko ia te reo o ngā wāhine ki ngā manuhiri.</b>',
        'Use the kīia structure: <b>Ko te wāhi e noho ai ngā tāngata i ngā hui, ka kīia ko "wharenui" tērā.</b>',
        'Define a term from this lesson: <b>Ko te tikanga o "tapu" ko te mea kua whakanoa rānei — he mea whakamōhio e ai ki te tikanga Māori.</b>',
      ],
      prompt:'Ko te tikanga o "manawa ora" ko te tiaki i te mauri o te tangata — the meaning of "breath of life" is the preservation of a person\'s life force. The hongi shares this breath. What does this tell us about how Māori understood human connection and greeting? Is there anything like this in other cultures you know?',
    },
    youDo:{
      title:'Māu Anō — Explain and define',
      instruction:'Write explanations of te reo words and cultural practices.',
      tasks:[
        'Write Ko te tikanga o [word] ko te [explanation] for three te reo words you know.',
        'Write He mea nui [custom] nō te mea for one cultural practice.',
        'Write a ka kīia sentence: define something by what it is called.',
        '✦ Bonus: Write a "te reo glossary entry" for five terms from this term — each entry with Ko te tikanga o… ko te…, He mea nui/pai/tapu… nō te mea…, and one example sentence. This could go on a classroom wall.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Formal and informal register',
    nzLink:'Te Aho Arataki Marau — AO 1.6: Politeness conventions · AO 2.3: Register · Grammar Level 1–2: Formal vs informal language choices',
    aos:[{code:'AO 1.6',label:'Formal &amp; informal register'},{code:'AO 2.3',label:'Register-appropriate language'}],
    iDo:{
      title:'Tāua Kōrero — Knowing when to be formal and when to be casual',
      instruction:'Good language users know that how you speak changes depending on who you are with and where you are. The same idea can be said formally (at a pōhiri) or casually (with your friends). Today we practise both registers in te reo Māori.',
      example:`<b>CASUAL (with friends, in class):</b><br><b>Kia ora! He aha tōu ingoa?</b> — Hey! What\'s your name?<br><b>Ka pai tāu!</b> — Nice one! / Good on you!<br><b>E haere ana koe ki hea?</b> — Where are you going?<br><b>Āe noa <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=iho" target="_blank" rel="noopener">iho</a>!</b> — Sure, no worries!<br><br><b>FORMAL (pōhiri, meeting, addressing elders):</b><br><b>Tēnā koe / Tēnā koutou katoa.</b> — Greetings (formal).<br><b>Ko [name] tōku ingoa. Nō [place] ahau.</b> (full pepeha)<br><b>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rawe" target="_blank" rel="noopener">rawe</a> tāu i mahi ai.</b> — What you have done is excellent.<br><b>He nui tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mihi" target="_blank" rel="noopener">mihi</a> ki a koutou.</b> — My gratitude to you all is great.`,
      demo:`Register markers in te reo Māori:\n\nFORMAL signals:\n→ Use full pepeha rather than just your name\n→ Tēnā koe/kōrua/koutou rather than Kia ora\n→ He nui tōku mihi ki a koe (formal gratitude)\n→ Full sentence structures, no shortcuts\n→ Ka rawe, Ka tino pai (formal praise)\n\nCASUAL signals:\n→ Kia ora (friendly, warm)\n→ Ka pai! (casual praise)\n→ Shorter sentences\n→ Direct questions without elaborate framing\n→ Āe noa iho (sure, no problem)\n\nNew formal phrases:\n<b>He nui tōku mihi ki a koe.</b> — My gratitude to you is great.\n<b>Ka rawe tāu i mahi ai.</b> — What you have done is excellent.\n<b>Ka ārahina tātou e koe.</b> — You have led us. (passive)`,
      tip:'Register is about relationship and context, not about one being "better" than the other. Casual with friends shows warmth. Formal with elders shows respect. Knowing which to use is wisdom.',
    },
    weDo:{
      title:'Kia Tūhono — Switch the register',
      instruction:'I give you a casual sentence — you make it formal. Then I give you a formal one — you make it casual.',
      sentences:[
        'Casual: "Kia ora! He aha tōu ingoa?" → Formal: <b>Tēnā koe. Ko wai tō ingoa?</b>',
        'Formal: "He nui tōku mihi ki a koutou." → Casual: <b>Kia ora koutou — ka nui ōku whakaaro ki a koutou!</b>',
        'Casual: "Ka pai tāu!" → Formal: <b>Ka rawe tāu i mahi ai. He mea nui tērā.</b>',
        'Now write your own pair — one casual, one formal — about the same situation.',
      ],
      prompt:'Āe noa iho — sure, no worries. Noa here makes it casual and easy. He nui tōku mihi ki a koe — my gratitude is great. The formal version uses nui (big) to show depth. The same idea — I\'m thankful — expressed at completely different levels. What would happen if you used the formal phrase with a close friend? The casual one with an elder?',
    },
    youDo:{
      title:'Māu Anō — Register practice',
      instruction:'Write the same content in two different registers.',
      tasks:[
        'Write a casual greeting to a friend and a formal greeting to a visitor — different words, same warmth.',
        'Write a casual "well done" and a formal "well done" — different register, same meaning.',
        'Write one sentence from your life in casual te reo, then rewrite it formally.',
        '✦ Bonus: Write a short speech (6 sentences) as if you were welcoming a visitor to your school — formal register throughout. Then rewrite it as something you would say to a friend visiting — casual register. Read both aloud and notice how different they feel.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero ā-reo — A language conversation',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended conversation · AO 1.4: Cultural connection · AO 2.5: Language vocabulary',
    aos:[{code:'AO 2.3',label:'Language &amp; learning conversation'},{code:'AO 1.4',label:'Cultural identity through language'}],
    iDo:{
      title:'Tāua Kōrero — Talking about language itself',
      instruction:'Today we have a meta-conversation — we use te reo Māori to talk about te reo Māori. This is one of the highest-level language activities: using a language to reflect on itself, its beauty, its importance, and what it means to learn it.',
      example:`<b>A:</b> He aha tō whakaaro mō te ako i te reo Māori?<br><b>B:</b> Ko tāku whakaaro, he taonga nui rawa atu te reo Māori — he reo <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rangatira" target="_blank" rel="noopener">rangatira</a>, he reo ātaahua.<br><b>A:</b> He aha ngā uauatanga i pā mai ki a koe?<br><b>B:</b> I uaua ki a au ngā hanganga o te tense — Ko Kua, Ko Ka — engari kua mārama ake au.<br><b>A:</b> He aha te mea i āwhina i a koe?<br><b>B:</b> Ko tēnei akoranga — ko tā mātou mahi tahi i ōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%81whina" target="_blank" rel="noopener">āwhina</a>. Ka taea e au te kōrero māmā ake ināianei.<br><b>A:</b> He aha tāu e hiahia ana ki te ako āpōpō?<br><b>B:</b> Kei te hiahia au ki te kōrero māmā ake me tōku whānau — ko tērā tōku moemoeā.`,
      demo:`New vocabulary for language conversation:\n<b>ngā uauatanga</b> — the difficulties (plural of uauatanga)\n<b>i pā mai ki a koe</b> — that came to you / that you encountered (pā = touch/affect)\n<b>tā mātou mahi tahi</b> — our working together (tā mātou = our ā-category thing)\n<b>māmā ake</b> — more fluently / more easily\n<b>moemoeā</b> — dream / aspiration\n<b>He reo rangatira.</b> — It is a chiefly language.\n<b>ko tērā tōku moemoeā</b> — that is my dream/aspiration\n\nAsking about language learning:\n<b>He aha ngā uauatanga i pā mai ki a koe?</b>\nWhat difficulties did you encounter?\n<b>He aha te mea i āwhina i a koe?</b>\nWhat helped you?`,
      tip:'Ko tērā tōku moemoeā — that is my dream. Moemoeā means both "dream" (sleeping) and "aspiration" (waking dream). Using it for a learning goal connects your aspiration to something deep and important.',
    },
    weDo:{
      title:'Kia Tūhono — Language conversation',
      instruction:'Build a conversation about te reo Māori and what it means to learn it.',
      sentences:[
        'I ask: <b>He aha tō whakaaro mō te ako i te reo Māori?</b> Answer with Ko tāku whakaaro…',
        'I ask: <b>He aha ngā uauatanga i pā mai ki a koe?</b> Answer honestly with I uaua ki a au…',
        'I ask: <b>He aha te mea i āwhina i a koe?</b> Answer with what helped: Ko tēnei akoranga / ko tōku hoa / ko…',
        'I ask: <b>Ko ēhea āu moemoeā mō tō reo Māori?</b> Answer with Kei te hiahia au ki te… Ko tērā tōku moemoeā.',
      ],
      prompt:'Ko tōku moemoeā ko te kōrero māmā me tōku whānau — my dream is to speak fluently with my family. Why might speaking te reo with your family feel like the ultimate goal? What does it mean when a language lives at home, not just at school?',
    },
    youDo:{
      title:'Māu Anō — Tōu moemoeā',
      instruction:'Write about your te reo Māori journey and dream.',
      tasks:[
        'Write Ko tāku whakaaro mō te reo Māori: (your opinion about te reo).',
        'Write the difficulties you encountered: I uaua ki a au… engari…',
        'Write what helped: Ko [person/thing] i āwhina i a au.',
        '✦ Bonus: Write your full language reflection (8 sentences) — your opinion of te reo Māori, what you found hard, what helped, what you can do now (Ka taea e au te…), and your dream for your te reo (Ko tērā tōku moemoeā). Read it to a partner.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T3W5 = [
  {day:'Monday',  q:'"Ka haere noa ia." What does "noa" add to this sentence?',options:['She is going urgently','She just goes / wanders freely, casually','She is going again','She is still going'],correct:1},
  {day:'Monday',  q:'"He pai kē tēnei!" What does "kē" signal?',options:['This is somewhat good','This is not good','This is actually really good / even better than expected','This is the same as before'],correct:2},
  {day:'Tuesday', q:'"Ko te tikanga o te hongi ko te tiaki i te manawa ora." What does manawa ora mean?',options:['the meeting house','the breath of life','the welcome ceremony','the gathering of people'],correct:1},
  {day:'Tuesday', q:'What does "tapu" mean?',options:['ordinary / unrestricted','wrong / incorrect','sacred / restricted / forbidden','beautiful'],correct:2},
  {day:'Wednesday',q:'Which phrase signals a FORMAL register for expressing gratitude?',options:['Ka pai!','Āe noa iho!','He nui tōku mihi ki a koe.','Kia ora!'],correct:2},
  {day:'Wednesday',q:'What does "Āe noa iho!" express?',options:['I strongly agree','I disagree completely','Sure, no worries! (casual agreement)','That is very difficult'],correct:2},
  {day:'Thursday', q:'What does "moemoeā" mean?',options:['challenge / difficulty','the past','dream / aspiration','hard work'],correct:2},
  {day:'Thursday', q:'"He aha ngā uauatanga i pā mai ki a koe?" What is this question asking about?',options:['Where you went','What you like most','What difficulties you encountered','Who helped you'],correct:2},
]

const CURRICULUM_T3W6 = {
  Monday: {
    topic:'Ngā mahi toi — Art, music, and creativity',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Expressive vocabulary · AO 2.3: Creative expression · AO 1.4: Cultural arts',
    aos:[{code:'AO 2.5',label:'Arts &amp; creative vocabulary'},{code:'AO 1.4',label:'Cultural arts connection'}],
    iDo:{
      title:'Tāua Kōrero — The arts in te reo Māori',
      instruction:'Art, music, dance, and craft are central to te ao Māori — they are not extras but essentials. Today we build vocabulary for the arts and creative expression so you can talk about what you make, perform, and love in te reo Māori.',
      example:`<b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=toi" target="_blank" rel="noopener">toi</a></b> — art / creativity / expertise<br><b>toi <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whakairo" target="_blank" rel="noopener">whakairo</a></b> — carving (whakairo = to carve / engrave)<br><b>toi <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=raranga" target="_blank" rel="noopener">raranga</a></b> — weaving (raranga = to weave)<br><b>toi <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C4%81+moko" target="_blank" rel="noopener">tā moko</a></b> — tā moko / traditional tattoo<br><b>toi <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=puoro" target="_blank" rel="noopener">puoro</a></b> — music (puoro = music / musical instrument)<br><b>toi <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kori" target="_blank" rel="noopener">kori</a></b> — dance / movement arts (kori = movement)<br><b>toi <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ataata" target="_blank" rel="noopener">ataata</a></b> — film / visual arts (ataata = shadow / film)<br><b>haka</b> — haka (posture dance / ceremonial challenge)<br><b>waiata</b> — song (also: to sing)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=poi" target="_blank" rel="noopener">poi</a></b> — poi (ball on string, used in performance)`,
      demo:`Arts vocabulary in sentences:\n\n<b>Ka whakairo ia i ngā mahi toi.</b>\nShe carves artworks.\n\n<b>He tohunga raranga tōna māmā.</b>\nHer mother is an expert weaver. (tohunga = expert)\n\n<b>Kei te ako au i te haka.</b>\nI am learning haka.\n\n<b>Ko te waiata tōku mahi toi pai rawa atu.</b>\nSinging is my absolute favourite art form.\n\n<b>Ka kaoa e ia ngā poi.</b>\nShe swings the poi. (kaoa = swing / wave)\n\nNew words:\n<b>tohunga</b> — expert / skilled person / specialist\n<b>mahi toi</b> — artwork / creative work\n<b>ahua</b> — image / appearance / likeness\n<b>kaoa</b> — swing / wave / rotate`,
      tip:'Toi means both "art" and "expertise" in te reo Māori. Tohunga (expert) comes from the same root. In te ao Māori, art and skill are the same thing — to make something beautiful is to demonstrate mastery.',
    },
    weDo:{
      title:'Kia Tūhono — Arts vocabulary',
      instruction:'Use arts vocabulary in sentences about real creative activities.',
      sentences:[
        'Name your favourite art form: Ko tōku mahi toi pai rawa atu ko [art form] nō te mea…',
        'Describe a skill: He tohunga [art form] tōku [family member/friend].',
        'Past tense: what did you make or perform? I [verb] au i [art form/object].',
        'Future intention: Kei te hiahia au ki te ako i te [art form]. Māku e [action].',
      ],
      prompt:'Toi means both art AND expertise. In English, we separate these — "art" and "skill" feel like different things. In te ao Māori, they are the same word. What does this tell us about how Māori understood creative practice? Can you think of examples where art and skill really ARE inseparable?',
    },
    youDo:{
      title:'Māu Anō — Arts sentences',
      instruction:'Write about your creative life using arts vocabulary.',
      tasks:[
        'Write three sentences about arts activities using three different toi words.',
        'Write a He tohunga sentence about someone you know who is skilled in an art form.',
        'Write a past tense sentence about something you made or performed.',
        '✦ Bonus: Write a paragraph (7 sentences) about a creative project you have done or would like to do. Include: the art form, who it involved (pronouns), what you did (Ka sequence), how it felt (emotion vocabulary), and what it meant (He mea nui/taonga tēnei nō te mea…).',
      ],
    },
  },
  Tuesday: {
    topic:'He kōrero mō te haka — The language of haka',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Cultural identity · AO 2.5: Expressive vocabulary · AO 2.3: Extended cultural explanation',
    aos:[{code:'AO 1.4',label:'Haka &amp; cultural identity'},{code:'AO 2.5',label:'Haka vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Understanding and talking about haka',
      instruction:'Haka is one of the most recognised Māori art forms in the world — but it is often misunderstood. Today we learn how to TALK about haka in te reo Māori, what it means, and when it is used.',
      example:`<b>Ko te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=haka" target="_blank" rel="noopener">haka</a> he mahi toi nō te reo Māori.</b><br>Haka is an art form of te reo Māori.<br><br><b>He haka mō ngā wā katoa — mō te hari, mō te pōuri, mō te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whakataetae" target="_blank" rel="noopener">whakataetae</a>.</b><br>There is a haka for every occasion — for joy, for sadness, for competition.<br><br><b>Ko "Ka Mate" tētahi haka rongonui o Aotearoa.</b><br>"Ka Mate" is a famous haka of New Zealand.<br><br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tohu" target="_blank" rel="noopener">tohu</a> <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=aroha" target="_blank" rel="noopener">aroha</a> te haka — he tohu <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kaha" target="_blank" rel="noopener">kaha</a> hoki.</b><br>Haka is a sign of love — it is also a sign of strength.`,
      demo:`Haka vocabulary:\n<b>rongonui</b> — famous / well-known\n<b>whakataetae</b> — competition\n<b>tohu</b> — sign / symbol / marker\n<b>kaha</b> — strength / powerful (also: hard/strongly as adverb)\n<b>ngā wā katoa</b> — every occasion / all times\n<b>He haka mō te tangi.</b> — A haka for a funeral/mourning.\n<b>He haka mō te pōhiri.</b> — A haka for a welcome.\n<b>He haka mō te whakataetae.</b> — A haka for competition.\n\nParts of haka:\n<b>kūaha</b> — opening\n<b>whakakapi</b> — conclusion\n<b>reo</b> — voice / words\n<b>ātea</b> — space / arena\n<b>ngākau</b> — heart / spirit (must be in the performance)`,
      tip:'He tohu aroha te haka — haka is a sign of love. This surprises many people who see only the fierce exterior. But the fierce face and the deep love are not opposites in te ao Māori — they are two expressions of the same passion.',
    },
    weDo:{
      title:'Kia Tūhono — Haka conversation',
      instruction:'Discuss haka using today\'s vocabulary.',
      sentences:[
        'Define haka: Ko te tikanga o te haka ko te [explanation]. Use Ko te tikanga structure from last week.',
        'Give occasions: He haka mō te [occasion] — list three occasions when haka is performed.',
        'Express what haka means: He tohu [word] te haka. He tohu [word] hoki.',
        'Your experience: Kei te hiahia au ki te ako i te haka / I ako au i te haka i [time].',
      ],
      prompt:'He tohu aroha te haka — haka is a sign of love — he tohu kaha hoki — and a sign of strength. How can love and strength be expressed in the same action? Can you think of other examples in life where love and strength are not opposites but one and the same?',
    },
    youDo:{
      title:'Māu Anō — Haka explanation',
      instruction:'Write an explanation of haka in te reo Māori — for someone who does not know what it is.',
      tasks:[
        'Define haka: Ko te tikanga o te haka ko te…',
        'Give three occasions: He haka mō te [X], he haka mō te [Y], he haka mō te [Z].',
        'Explain the meaning: He tohu [noun] te haka nō te mea…',
        '✦ Bonus: Write a full explanation of haka (8 sentences) that could go in a school brochure or wall display. Cover: what it is, when it is done, what it means, why it matters to Māori culture, and what it means to you personally.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Creative and cultural writing',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Creative expression · AO 1.4: Cultural identity · AO 2.3: Extended creative writing',
    aos:[{code:'AO 2.5',label:'Creative writing'},{code:'AO 1.4',label:'Cultural expression'}],
    iDo:{
      title:'Tāua Kōrero — Writing that is alive with culture',
      instruction:'The most powerful te reo writing does two things at once — it says something in te reo AND it says something through te reo, using the language itself as a window into te ao Māori. Today we write with that double purpose.',
      example:`An example of culturally rich writing:<br><br><b>Ko te haka ko tōku reo — he reo ō-roto, he reo ō-waho.</b><br>Haka is my language — an inward language, an outward language.<br><br><b>Ka ara ōku ringa ki runga — ko tērā he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mihi" target="_blank" rel="noopener">mihi</a> ki ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C4%ABpuna" target="_blank" rel="noopener">tīpuna</a>.</b><br>My arms rise — that is a greeting to the ancestors.<br><br><b>Ka kōrero ōku waewae — ka tangi ōku karu.</b><br>My feet speak — my eyes cry.<br><br><b>Ko te haka tōku ara ki a rātou — ki ngā tīpuna, ki te ao <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81rama" target="_blank" rel="noopener">mārama</a>.</b><br>Haka is my path to them — to the ancestors, to the world of light.`,
      demo:`Techniques for culturally rich writing:\n\n1. <b>Use body + action to carry cultural meaning</b>:\n"Ka ara ōku ringa ki runga" — arms rising as a greeting\n\n2. <b>Personify natural/cultural elements</b>:\n"Ka kōrero ōku waewae" — feet speak\n\n3. <b>Connect personal action to ancestral meaning</b>:\nKo tērā he mihi ki ngā tīpuna — that is a greeting to the ancestors\n\n4. <b>Use Ko to make identity statements about art</b>:\n"Ko te haka tōku ara ki a rātou"\n\nNew phrases:\n<b>he reo ō-roto</b> — an inner language\n<b>he reo ō-waho</b> — an outer language\n<b>ao mārama</b> — world of light (the realm of the living or of enlightenment)`,
      tip:'Ko te haka tōku ara ki a rātou — ki ngā tīpuna. The art form is a pathway. What art form is YOUR pathway — to understanding, to connection, to something beyond words? Can you say that in te reo Māori?',
    },
    weDo:{
      title:'Kia Tūhono — Culturally rich writing',
      instruction:'Write a passage that uses an art form as a window into identity.',
      sentences:[
        'Start with a Ko statement about the art: Ko te [art form] ko tōku [what it is to you].',
        'Describe a physical action: Ka [body action] ōku [body part] — ko tērā he [meaning].',
        'Connect to the ancestors or community: Ko tērā tōku ara ki [who/where].',
        'Close with a He identity statement: He [quality] te [art form] — he [quality] hoki.',
      ],
      prompt:'Ko te haka ko tōku reo — haka is my language. What does it mean to say an art form IS your language? What can haka say that words cannot? Is there an art form that speaks for you when words fail?',
    },
    youDo:{
      title:'Māu Anō — Creative cultural writing',
      instruction:'Write a passage about an art form that matters to you.',
      tasks:[
        'Write a Ko identity statement: Ko te [art form] ko tōku [meaning to you].',
        'Write two body-action sentences that carry cultural meaning.',
        'Connect to something beyond yourself — ancestors, community, nature.',
        '✦ Bonus: Write a full piece (8 sentences) about an art form that matters to you. Use: Ko for identity, body vocabulary for action, emotional vocabulary, cultural connection, personification, and close with Ko tērā tōku ara ki…',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero mō ngā mahi toi — Arts conversation',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Arts vocabulary · AO 1.4: Cultural arts · AO 2.3: Extended conversation',
    aos:[{code:'AO 2.5',label:'Arts conversation'},{code:'AO 1.4',label:'Arts &amp; identity'}],
    iDo:{
      title:'Tāua Kōrero — A conversation about creative life',
      instruction:'Today we have a full conversation about art, music, and creativity — drawing on everything from this week and the whole term.',
      example:`<b>A:</b> Ko ēhea ngā mahi toi e hiahia ana koe ki te ako?<br><b>B:</b> Kei te hiahia au ki te ako i te haka me te waiata — he mahi toi ātaahua ērā ki a au.<br><b>A:</b> He aha tōu mahi toi ināianei?<br><b>B:</b> Kei te ako au i te raranga. He mea uaua engari he tino ātaahua ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hua" target="_blank" rel="noopener">hua</a>!<br><b>A:</b> He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tohunga" target="_blank" rel="noopener">tohunga</a> koe?<br><b>B:</b> Kāore anō — he ākonga noa iho au ināianei! Engari āpōpō, ka taea e au te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=raranga" target="_blank" rel="noopener">raranga</a> i ngā āhua rerekē.<br><b>A:</b> Ka pai tāu māia! Ko ēhea ngā āhuatanga pai rawa atu mōu mō tēnei mahi toi?<br><b>B:</b> Ko ēnei: he mārie te noho me te raranga, ka mārama hoki tōku ngākau i ngā āhua ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=puta" target="_blank" rel="noopener">puta</a> mai.`,
      demo:`New conversation vocabulary:\n<b>Ko ēhea ngā mahi toi…?</b> — Which art forms…?\n<b>he mahi toi ātaahua ērā ki a au</b> — those are beautiful art forms to me\n<b>ngā hua</b> — the results / the outcomes\n<b>he ākonga noa iho au</b> — I am just a learner (noa = just/merely, iho = downward particle, emphasising humility)\n<b>āhua rerekē</b> — different forms / various designs\n<b>āhuatanga pai rawa atu</b> — absolute best aspects / features\n<b>ka puta mai</b> — that emerge / that come forth (puta = emerge)\n<b>ka mārama tōku ngākau</b> — my heart becomes clear/enlightened`,
      tip:'He ākonga noa iho au — I am just a learner. The noa iho shows humility — making yourself small in a gracious way. In te ao Māori, calling yourself just a learner is not weakness — it is the correct relationship to knowledge.',
    },
    weDo:{
      title:'Kia Tūhono — Arts conversation',
      instruction:'Have a full conversation about your creative life in te reo Māori.',
      sentences:[
        'I ask: Ko ēhea ngā mahi toi e hiahia ana koe ki te ako? Answer with your arts interests.',
        'I ask: He aha tōu mahi toi ināianei? Answer with what you do now.',
        'I ask: He tohunga koe? Answer humbly — He ākonga noa iho au / Kāore anō.',
        'I ask: Ko ēhea ngā āhuatanga pai rawa atu mōu? Answer with Ko ēnei: a list of what you love about it.',
      ],
      prompt:'He ākonga noa iho au — I am just a learner. And ka mārama tōku ngākau i ngā āhua ka puta mai — my heart becomes clear at the forms that emerge. What does it mean for your heart to become clear through making something? Have you ever felt that? What were you doing?',
    },
    youDo:{
      title:'Māu Anō — Arts identity',
      instruction:'Write about your creative life and what it means to you.',
      tasks:[
        'Write which art forms you love: Ko ēnei ōku mahi toi: he [X], he [Y], he [Z].',
        'Write your current skill level: He ākonga noa iho au / He āhua tohunga au i te [art form].',
        'Write what you love about your favourite art form: Ko ēnei ngā āhuatanga pai rawa atu: he…',
        '✦ Bonus: Write a full arts identity paragraph (8 sentences). Include: which arts you love, your current level, what you love about it, one Ko statement about what the art means to you, a Ka taea sentence about what you can do, and a moemoeā about where you want to go.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T3W6 = [
  {day:'Monday',  q:'What does "tohunga" mean?',options:['student / learner','expert / skilled person','teacher','artist'],correct:1},
  {day:'Monday',  q:'"Ko tōku mahi toi pai rawa atu ko te waiata." What does waiata mean?',options:['carving','weaving','song / singing','poi'],correct:2},
  {day:'Tuesday', q:'What does "rongonui" mean?',options:['sacred','famous / well-known','powerful','ancient'],correct:1},
  {day:'Tuesday', q:'"He tohu aroha te haka — he tohu kaha hoki." What two things is haka a sign of?',options:['anger and power','sadness and strength','love and strength','tradition and sport'],correct:2},
  {day:'Wednesday',q:'"Ko te haka ko tōku reo." What does this Ko statement express?',options:['Haka and language are different things','Haka is the speaker\'s language — their way of expressing themselves','Te reo Māori is a form of haka','The speaker cannot speak te reo'],correct:1},
  {day:'Wednesday',q:'What is "ao mārama"?',options:['a dark night','the world of light / realm of enlightenment','the ocean','a rainy day'],correct:1},
  {day:'Thursday', q:'"He ākonga noa iho au." What does this expression convey?',options:['I am an expert','I am refusing to learn','I am just a learner — humble acknowledgement of learning status','I do not like learning'],correct:2},
  {day:'Thursday', q:'"Ka mārama tōku ngākau i ngā āhua ka puta mai." What does "ka puta mai" mean?',options:['that disappear','that are ancient','that emerge / that come forth','that are difficult'],correct:2},
]

const CURRICULUM_T3W7 = {
  Monday: {
    topic:'He kōrero mō te taiao — Environment and kaitiakitanga',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Connection to land · AO 2.4: Natural world · AO 2.3: Extended environmental language',
    aos:[{code:'AO 1.4',label:'Kaitiakitanga &amp; environment'},{code:'AO 2.4',label:'Environmental vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Guardianship of the natural world',
      instruction:'Kaitiakitanga — guardianship of the natural environment — is one of the most important concepts in te ao Māori and in modern New Zealand. Today we build the vocabulary to talk about the environment, what threatens it, and what guardianship means in practice.',
      example:`<b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kaitiakitanga" target="_blank" rel="noopener">kaitiakitanga</a></b> — environmental guardianship / stewardship / stewardship<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kaitiaki" target="_blank" rel="noopener">kaitiaki</a></b> — guardian / protector (kai- + tiaki) / protector (kai- + tiaki)<br><b>taiao</b> — natural world / environment<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=papat%C5%AB%C4%81nuku" target="_blank" rel="noopener">papatūānuku</a></b> — the earth / ground (Papa = earth mother) / ground (Papa = earth mother)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tangaroa" target="_blank" rel="noopener">tangaroa</a></b> — the sea / Tangaroa (atua of the sea) / Tangaroa (atua of the sea)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C4%81ne" target="_blank" rel="noopener">tāne</a></b> — the forest / Tāne (atua of the forest and birds) / Tāne (atua of the forest and birds)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=toit%C5%AB" target="_blank" rel="noopener">toitū</a></b> — sustainable / enduring / intact / enduring / intact<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=paru" target="_blank" rel="noopener">paru</a></b> — polluted / dirty / muddy / dirty / muddy<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mauri" target="_blank" rel="noopener">mauri</a></b> — life force / vitality / vitality<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ora" target="_blank" rel="noopener">ora</a></b> — well / alive / thriving / thriving`,
      demo:`Environmental language in sentences:\n\n<b>Ko tātou ngā kaitiaki o tēnei taiao.</b>\nWe are the guardians of this natural world.\n\n<b>Kāore e toitū ana te ao ināianei — he paru ngā awa, he ngaro ngā manu.</b>\nThe world is not sustainable right now — the rivers are polluted, the birds are disappearing.\n\n<b>Me tiaki tātou i te mauri o ngā awa, o ngā ngahere, o ngā maunga.</b>\nWe must protect the life force of the rivers, forests, and mountains.\n\n<b>Ka ora te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=taiao" target="_blank" rel="noopener">taiao</a>, ka ora tātou.</b>\nWhen the environment thrives, we thrive.\n\nNew words:\n<b>ngaro</b> — lost / disappeared / extinct\n<b>tiakina</b> — be protected (passive of tiaki)\n<b>toitū te taiao</b> — a sustainable/enduring environment`,
      tip:'Ka ora te taiao, ka ora tātou — when the environment is well, we are well. This sentence sums up kaitiakitanga perfectly. The earth\'s wellbeing and ours are not separate. Learn this sentence cold.',
    },
    weDo:{
      title:'Kia Tūhono — Environmental language',
      instruction:'Use environmental vocabulary in sentences about the real world.',
      sentences:[
        'State our responsibility: <b>Ko tātou ngā kaitiaki o tēnei taiao.</b> Add a reason: nō te mea…',
        'Name a problem: <b>Kāore e toitū ana te [environmental feature] ināianei nō te mea…</b>',
        'Use me for responsibility: <b>Me tiaki tātou i te mauri o [feature].</b>',
        'Close with the core principle: <b>Ka ora te taiao, ka ora tātou.</b> Discuss what this means.',
      ],
      prompt:'Ka ora te taiao, ka ora tātou — the wellbeing of the environment is the wellbeing of people. In English we often talk about "protecting the environment" as if it is separate from us. How does the te reo sentence change that framing? What does it say about the relationship between people and the natural world?',
    },
    youDo:{
      title:'Māu Anō — Kaitiakitanga writing',
      instruction:'Write about environmental guardianship in te reo Māori.',
      tasks:[
        'Write your responsibility statement: Ko au tētahi kaitiaki o te taiao nō te mea…',
        'Name one environmental issue using Kāore e toitū ana… nō te mea…',
        'Write what you will do: Māku e [action] hei tiaki i [environmental feature].',
        '✦ Bonus: Write a kaitiakitanga statement (8 sentences) — what kaitiakitanga means, what the problems are, what must be done (me sentences), what you personally commit to (māku e), and close with Ka ora te taiao, ka ora tātou.',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā kupu o te ture — Rights, rules, and responsibilities',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 1.6: Social conventions · Grammar Level 1–2: Me, kaua, tikanga in social contexts',
    aos:[{code:'AO 2.3',label:'Rights &amp; responsibilities'},{code:'AO 1.6',label:'Social conventions &amp; rules'}],
    iDo:{
      title:'Tāua Kōrero — Rights, rules, and what we must do',
      instruction:'Language for rights and responsibilities is important for full participation in society. Today we build the vocabulary for rules, what is allowed, what must be done, and what we have the right to.',
      example:`<b>he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tikanga" target="_blank" rel="noopener">tikanga</a></b> — a rule / a correct practice / a right<br><b>He tikanga tōku ki te kōrero.</b><br>It is my right to speak.<br><br><b>Me mahi tātou i tēnei.</b> — We must do this.<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Kaua" target="_blank" rel="noopener">Kaua</a> e mahi i tēnā.</b> — Do not do that. (kaua = do not — negative command)<br><b>E <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%81hei" target="_blank" rel="noopener">āhei</a> ana koe ki te…</b> — You are permitted/able to…<br><b>Kāore e āhei ana koe ki te…</b> — You are not permitted to…<br><br><b>He aha ngā tikanga o tō mātou kura?</b><br>What are the rules of our school?`,
      demo:`Rights and rules vocabulary:\n<b>āhei</b> — permitted / allowed / able to\n<b>kaua e [verb]</b> — do not [verb] (negative command)\n<b>kaua e tū ake</b> — do not stand up\n<b>kaua e kōrero kino</b> — do not speak badly\n<b>he tikanga</b> — a rule / custom / right\n<b>He tikanga tōku ki te [verb].</b> — It is my right to [verb].\n<b>He kawenga ōku ki te [verb].</b> — It is my responsibility to [verb].\n<b>tōpū</b> — group / together (tōpū mahi = working group)\n<b>whakaaro nui</b> — consideration / deep thought\n\nFor rules:\n<b>Me [verb] tātou</b> — We must [verb] (rule/obligation)\n<b>Kaua e [verb]</b> — Do not [verb] (prohibition)\n<b>E āhei ana koe ki te [verb]</b> — You are allowed to [verb]`,
      tip:'Kaua e [verb] = do not [verb]. This is the negative command form. More polite than a bare command but still clear. Kaua e waiho i tō para ki reira! — Don\'t leave your rubbish there!',
    },
    weDo:{
      title:'Kia Tūhono — School rules in te reo',
      instruction:'Express your school rules in te reo Māori using me, kaua, and āhei.',
      sentences:[
        'A school rule: <b>Me whakarongo mai ngā ākonga ki tō rātou kaiako.</b> (Students must listen to their teacher.)',
        'A prohibition: <b>Kaua e omaoma i roto i ngā whare katoa.</b> (Do not run inside the buildings.)',
        'A right: <b>He tikanga ō ngā ākonga katoa ki te pātai.</b> (All students have the right to ask questions.)',
        'A responsibility: <b>He kawenga ō ngā ākonga ki te tiaki i tō rātou kura.</b>',
      ],
      prompt:'He tikanga tōku ki te kōrero — it is my right to speak. This sentence connects to Article 13 of the UN Convention on the Rights of the Child. Te reo Māori has the vocabulary to talk about rights and justice. Why does a language need this vocabulary? What happens when a language cannot talk about rights?',
    },
    youDo:{
      title:'Māu Anō — Rights and rules',
      instruction:'Write your own school or community rules in te reo Māori.',
      tasks:[
        'Write three school rules using me [verb] structure.',
        'Write two prohibitions using kaua e [verb].',
        'Write one right and one responsibility using He tikanga/kawenga…',
        '✦ Bonus: Write a "Student Bill of Rights" in te reo (8 sentences) — three rights (He tikanga ōku ki te…), three responsibilities (He kawenga ōku ki te…), and two prohibitions (Kaua e…). This could go on a classroom wall.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Argument and persuasion extended',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended persuasive writing · Grammar Level 1–2: Full argument toolkit in te reo',
    aos:[{code:'AO 2.3',label:'Persuasive writing'},{code:'AO 2.5',label:'Formal argument vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Making a case in te reo Māori',
      instruction:'You have learned to argue, compare, and use linking words. Today we assemble the full argument toolkit into a persuasive piece — the kind of writing that could appear in a school speech, a debate, or a submission.',
      example:`<b>Tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C5%AB%C4%81huatanga" target="_blank" rel="noopener">tūāhuatanga</a>:</b> He nui ake ngā hua o te kaitiakitanga i ngā uauatanga.<br><i>My position: The benefits of environmental guardianship are greater than the difficulties.</i><br><br><b>Tāku taunakitanga tuatahi:</b> Ka ora te taiao, ka ora tātou — ko tēnā he tauira o te pono.<br><i>My first evidence: When the environment thrives, we thrive — that is an example of truth.</i><br><br><b>Waihoki:</b> He tikanga ōu mō āpōpō ō ngā uri — me <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tiaki" target="_blank" rel="noopener">tiaki</a> tātou ināianei.<br><i>Moreover: It is your descendants\' right for tomorrow — we must protect now.</i><br><br><b>Nō reira:</b> me mahi tātou katoa hei <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kaitiaki" target="_blank" rel="noopener">kaitiaki</a> o tēnei taiao.<br><i>Therefore: we must all work as guardians of this environment.</i>`,
      demo:`Full argument structure:\n\n1. <b>Tōku tūāhuatanga:</b> [position] — My position is…\n2. <b>Tāku taunakitanga tuatahi / tuarua:</b> [evidence] — My first/second evidence\n3. <b>Waihoki:</b> [additional point] — Moreover\n4. <b>Heoi anō:</b> [concession to other side]\n5. <b>Nō reira:</b> [conclusion] — Therefore\n\nNew words:\n<b>tūāhuatanga</b> — position / characteristic / quality\n<b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=taunakitanga" target="_blank" rel="noopener">taunakitanga</a></b> — evidence (from last week!) / support / argument\n<b>tuatahi / tuarua / tuatoru</b> — first / second / third\n<b>pono</b> — true / honest / truth\n<b>uri</b> — descendants (you know this word now!)`,
      tip:'Tāku taunakitanga tuatahi / tuarua — my first/second evidence. Taunakitanga is the key word for evidence or supporting argument. Learn it — it makes your argument sound like real persuasive writing.',
    },
    weDo:{
      title:'Kia Tūhono — Build the argument',
      instruction:'Together we build a persuasive argument about kaitiakitanga using the full structure.',
      sentences:[
        'State position: <b>Tōku tūāhuatanga: me tiaki tātou i te taiao o Aotearoa nō te mea…</b>',
        'First evidence: <b>Tāku taunakitanga tuatahi: Ka ora te taiao, ka ora tātou.</b>',
        'Second evidence with waihoki: <b>Waihoki, he tikanga ōu mō āpōpō ō ngā uri.</b>',
        'Conclusion with nō reira: <b>Nō reira, me mahi tātou katoa hei kaitiaki.</b>',
      ],
      prompt:'Tāku taunakitanga — my evidence. Good arguments don\'t just state opinions — they provide evidence. In te ao Māori, evidence often comes from proverbs (whakataukī), from the natural world, and from the actions of ancestors. What makes evidence convincing in te ao Māori? Is it different from what convinces in a Western argument?',
    },
    youDo:{
      title:'Māu Anō — Your argument',
      instruction:'Write a persuasive argument in te reo Māori about a topic you care about.',
      tasks:[
        'State your position: Tōku tūāhuatanga: [position].',
        'Give two pieces of evidence: Tāku taunakitanga tuatahi / tuarua.',
        'Add waihoki (moreover) and make a third point.',
        '✦ Bonus: Write a full persuasive piece (8 sentences) — position, three evidence points (tuatahi/tuarua/tuatoru), a waihoki point, a concession with heoi anō, and a nō reira conclusion. Choose a topic you care about.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero mō Aotearoa — Talking about New Zealand',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Connection to land · AO 2.4: Natural world · AO 2.3: Extended conversation',
    aos:[{code:'AO 1.4',label:'Aotearoa identity'},{code:'AO 2.4',label:'NZ environment conversation'}],
    iDo:{
      title:'Tāua Kōrero — What is Aotearoa?',
      instruction:'Today we have a conversation about Aotearoa — what it is, what it means, and what our relationship to it is. This is identity conversation at the national level — connecting language, land, and belonging.',
      example:`<b>A:</b> He aha tō whakaaro mō Aotearoa?<br><b>B:</b> Ko Aotearoa tōku kāinga — ko ia tōku wāhi tupu, tōku wāhi tiaki.<br><b>A:</b> He aha ngā āhuatanga pai rawa atu o Aotearoa ki a koe?<br><b>B:</b> Ko ēnei: he ātaahua te taiao, he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81ia" target="_blank" rel="noopener">māia</a> ngā tāngata, he rangatira hoki te reo Māori o tēnei <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whenua" target="_blank" rel="noopener">whenua</a>.<br><b>A:</b> He aha ōu mōrearea mō Aotearoa?<br><b>B:</b> Ko tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C5%8Drearea" target="_blank" rel="noopener">mōrearea</a>: ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ngaro" target="_blank" rel="noopener">ngaro</a> ngā manu o ēnei <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=motu" target="_blank" rel="noopener">motu</a>, ka ngaro hoki te reo — me tiaki tātou i ērā taonga.<br><b>A:</b> He aha tō kawenga ki tēnei whenua?<br><b>B:</b> He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kawenga" target="_blank" rel="noopener">kawenga</a> ōku ki te ako i te reo Māori, ki te tiaki i te taiao, ā ki te whakaaro nui mō ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=uri" target="_blank" rel="noopener">uri</a>.`,
      demo:`New Aotearoa vocabulary:\n<b>wāhi tupu</b> — place of growth / where you grew up\n<b>mōrearea</b> — concern / worry / risk\n<b>motu</b> — island / islands (Aotearoa is a motu)\n<b>taonga</b> — treasure (you know this well now)\n<b>He aha ōu mōrearea?</b> — What are your concerns?\n<b>he rangatira hoki te reo Māori</b> — te reo Māori is also a chiefly language\n<b>kawenga ki tēnei whenua</b> — responsibility to this land\n<b>uri</b> — descendants (used here for future generations)`,
      tip:'Ko Aotearoa tōku kāinga — ko ia tōku wāhi tupu, tōku wāhi tiaki. Three Ko statements in a row, connected by commas. This creates a feeling of layering — adding depth to what home means. Use layered Ko statements when you want to say something has many dimensions.',
    },
    weDo:{
      title:'Kia Tūhono — Aotearoa conversation',
      instruction:'Build a conversation about Aotearoa, its beauty, and your responsibilities to it.',
      sentences:[
        'I ask: He aha tō whakaaro mō Aotearoa? Answer with Ko Aotearoa tōku kāinga — ko ia…',
        'I ask: He aha ngā āhuatanga pai rawa atu o Aotearoa ki a koe? Answer with Ko ēnei list.',
        'I ask: He aha ōu mōrearea mō Aotearoa? Answer with Ko tōku mōrearea: ka ngaro…',
        'I ask: He aha tōu kawenga ki tēnei whenua? Answer with He kawenga ōku ki te…',
      ],
      prompt:'He kawenga ōku ki te ako i te reo Māori, ki te tiaki i te taiao, ā ki te whakaaro nui mō ngā uri. Three responsibilities in one sentence. Of these three — learning the language, protecting the environment, thinking deeply about future generations — which feels most urgent to you? Why?',
    },
    youDo:{
      title:'Māu Anō — Tōu whanaungatanga ki Aotearoa',
      instruction:'Write about your relationship with Aotearoa.',
      tasks:[
        'Write three Ko statements about what Aotearoa means to you.',
        'Write Ko ēnei list of the best things about Aotearoa: Ko ēnei ngā āhuatanga pai rawa atu.',
        'Write your mōrearea: Ko tōku mōrearea mō Aotearoa ko…',
        '✦ Bonus: Write a full statement about your relationship with Aotearoa (8 sentences) — what it is to you, its best features, your concerns, your responsibilities, and what you will do. Close with Ka ora te taiao, ka ora tātou.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T3W7 = [
  {day:'Monday',  q:'"Ka ora te taiao, ka ora tātou." What does this sentence mean?',options:['The environment belongs to all of us','We must protect the environment or we will suffer','When the environment thrives, we thrive — our wellbeing is linked','The natural world is beautiful'],correct:2},
  {day:'Monday',  q:'What does "toitū" mean in an environmental context?',options:['polluted / dirty','lost / extinct','sustainable / enduring / intact','sacred'],correct:2},
  {day:'Tuesday', q:'"Kaua e omaoma i roto i ngā whare." What type of sentence is this?',options:['A right','A past tense sentence','A negative command — do not do this','A question'],correct:2},
  {day:'Tuesday', q:'"E āhei ana koe ki te pātai." What does this sentence tell you?',options:['You must ask a question','You are not allowed to ask','You are permitted / able to ask','You asked a question'],correct:2},
  {day:'Wednesday',q:'What does "taunakitanga" mean?',options:['position / viewpoint','evidence / supporting argument','conclusion','topic'],correct:1},
  {day:'Wednesday',q:'"Tāku taunakitanga tuarua." What does tuarua indicate?',options:['first','third','second','fourth'],correct:1},
  {day:'Thursday', q:'What does "mōrearea" mean?',options:['responsibility','treasure','concern / worry / risk','beautiful feature'],correct:2},
  {day:'Thursday', q:'"Ko Aotearoa tōku kāinga — ko ia tōku wāhi tupu, tōku wāhi tiaki." What does "wāhi tupu" mean?',options:['place of rest','place of learning','place of growth / where you grew up','place of danger'],correct:2},
]

const CURRICULUM_T3W8 = {
  Monday: {
    topic:'Whakataukī — Proverbs and their wisdom',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Figurative language · AO 1.4: Cultural wisdom · AO 2.3: Extended explanation',
    aos:[{code:'AO 2.5',label:'Proverbs &amp; figurative language'},{code:'AO 1.4',label:'Cultural wisdom'}],
    iDo:{
      title:'Tāua Kōrero — The wisdom of whakataukī',
      instruction:'Whakataukī — proverbs — are one of the richest forms of te reo Māori. They carry generations of wisdom in a few words. Today we explore the most important whakataukī for your learning journey, understand their meaning, and learn to use them.',
      example:`<b>He aha te mea nui o te ao?</b><br><b>He tangata, he tangata, he tangata.</b><br>What is the most important thing in the world? It is people, it is people, it is people.<br><br><b>Hutia te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rito" target="_blank" rel="noopener">rito</a> o te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=harakeke" target="_blank" rel="noopener">harakeke</a>,</b><br><b>kei hea te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Dmako" target="_blank" rel="noopener">kōmako</a> e kō?</b><br>If you pull the heart of the flax bush, where will the bellbird sing?<br>(meaning: if you destroy the centre of the family/community, what happens to its members?)<br><br><b>Ehara tāku toa i te toa <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=takitahi" target="_blank" rel="noopener">takitahi</a>,</b><br><b>he toa <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=takitini" target="_blank" rel="noopener">takitini</a>.</b><br>My strength is not the strength of one, it is the strength of many.<br><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Wh%C4%81ia" target="_blank" rel="noopener">Whāia</a> te iti <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kahurangi" target="_blank" rel="noopener">kahurangi</a>;</b><br><b>ki te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C5%ABōhu" target="_blank" rel="noopener">tūohu</a> koe, me he maunga <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=teitei" target="_blank" rel="noopener">teitei</a>.</b><br>Pursue excellence; if you must bow your head, let it be to a high mountain.`,
      demo:`Understanding whakataukī:\n\nWhakataukī work on two levels:\n1. The LITERAL meaning — what the words say\n2. The DEEPER meaning — what they teach\n\n"Hutia te rito o te harakeke" — literally about a flax bush and a bellbird. Deeper: the flax bush is the family; the rito (heart shoot) is the child or the core; if you destroy the centre, the community falls apart.\n\n"Whāia te iti kahurangi" — pursue the small precious thing (excellence). If you must bow, bow only to something truly great (a high mountain). Meaning: only humble yourself before things truly worthy of respect.\n\nNew words:\n<b>harakeke</b> — flax plant (native NZ flax)\n<b>rito</b> — the heart shoot of the flax / the central child\n<b>kōmako</b> — bellbird\n<b>toa takitahi</b> — the strength of one alone\n<b>toa takitini</b> — the strength of many together`,
      tip:'To explain a whakataukī: first state the literal meaning, then say Ko tā tēnei whakataukī mōhio ko te [deeper meaning]. Always explain BOTH levels.',
    },
    weDo:{
      title:'Kia Tūhono — Whakataukī meanings',
      instruction:'For each whakataukī, we unpack the literal meaning and then the deeper meaning together.',
      sentences:[
        '"He aha te mea nui o te ao? He tangata, he tangata, he tangata." → Literal: what is the most important thing? People, people, people. → Deeper: people are at the centre of everything.',
        '"Ehara tāku toa i te toa takitahi, he toa takitini." → Literal: my strength is not from one, it is from many. → Deeper: collective strength is greater than individual strength.',
        '"Whāia te iti kahurangi." → Pursue excellence. When would you use this whakataukī? Who would you say it to?',
        'Choose one whakataukī and explain it: Ko tā tēnei whakataukī mōhio ko te…',
      ],
      prompt:'"Hutia te rito o te harakeke, kei hea te kōmako e kō?" The flax family: the outer leaves protect the inner leaves which protect the rito (heart shoot/child). The rito must be protected. This is the architecture of the family in te ao Māori. How does a plant become a model for how families should work?',
    },
    youDo:{
      title:'Māu Anō — Whakataukī',
      instruction:'Explore and explain whakataukī in te reo Māori.',
      tasks:[
        'Write the literal meaning of one whakataukī: Ko te tikanga ōpaki o tēnei whakataukī ko te…',
        'Write the deeper meaning: Ko tā tēnei whakataukī mōhio ko te…',
        'Write when you would use this whakataukī and who to.',
        '✦ Bonus: Choose your favourite whakataukī from today. Write a full explanation (8 sentences) — the words, the literal meaning, the deeper meaning, the context for using it, and why it speaks to you personally. End with how this whakataukī connects to your own life.',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā kupu hou o te pūtaiao — Science and discovery vocabulary',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Vocabulary development · AO 2.3: Extended explanation · Grammar Level 1–2: Science and inquiry vocabulary',
    aos:[{code:'AO 2.5',label:'Science vocabulary'},{code:'AO 2.3',label:'Inquiry &amp; explanation'}],
    iDo:{
      title:'Tāua Kōrero — Exploring and explaining the world',
      instruction:'Te reo Māori has its own words for scientific inquiry — observation, hypothesis, experiment, and discovery. Today we learn this vocabulary so that science learning can happen in te reo as naturally as in English.',
      example:`<b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=p%C5%ABtaiao" target="_blank" rel="noopener">pūtaiao</a></b> — science / nature study / nature study<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=matai" target="_blank" rel="noopener">matai</a></b> — to observe / examine / study / examine / study<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whakam%C4%81tau" target="_blank" rel="noopener">whakamātau</a></b> — experiment / to test / to test<br><b>rangahau</b> — research / to research<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kitenga" target="_blank" rel="noopener">kitenga</a></b> — discovery / finding (kite + nga) / finding (kite + nga)<br><b>pātai</b> — question / to ask (also: hypothesis)<br><b>whakaaro</b> — thought / theory / idea<br><b>taunakitanga</b> — evidence (from last week!)<br><b>hua</b> — result / outcome<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=h%C4%81ng%C5%AB" target="_blank" rel="noopener">hāngū</a></b> — accurate / precise`,
      demo:`Science process in te reo:\n\n1. <b>Ka pātai</b> mātou i tētahi pātai. — We asked a question.\n2. <b>Ka whakaaro</b> mātou mō tā mātou whakamātau. — We thought about our experiment.\n3. <b>Ka whakamātau</b> mātou. — We experimented.\n4. <b>Ka matai</b> mātou i ngā hua. — We observed the results.\n5. <b>Ka kitea</b> e mātou tētahi mea hou. — We discovered something new. (kitea = passive of kite)\n\nExplaining findings:\n<b>I kitea e mātou ko te [finding].</b>\nWe discovered that [finding].\n\n<b>He pono tō mātou whakaaro nō te mea…</b>\nOur theory is correct because…\n\n<b>He rereke ngā hua i ō mātou tūmanako.</b>\nThe results were different from our expectations. (tūmanako = expectations/hopes)`,
      tip:'Ka kitea e mātou — we discovered. Kitea is the passive of kite (see/find). The passive is used here because the discovery "came to us" rather than us actively finding it. This reflects a Māori way of seeing knowledge — it reveals itself to those who are ready.',
    },
    weDo:{
      title:'Kia Tūhono — Science inquiry sequence',
      instruction:'Build a science inquiry description using the Te Reo Māori process vocabulary.',
      sentences:[
        'Start with a question: Ka pātai mātou: <b>He aha te mea ka hanga ai te kapua?</b> (What makes a cloud?)',
        'State the experiment: Ka whakamātau mātou — i mahi mātou i tētahi whakamātau mō te wai.',
        'State findings: I kitea e mātou ko te [finding]. He [adjective] ngā hua.',
        'Evaluate: He pono/hē tō mātou whakaaro? (pono = true, hē = wrong/incorrect)',
      ],
      prompt:'Ka kitea e mātou — we discovered. The passive voice makes the discovery something that came to you, not something you grabbed. In te ao Māori, knowledge is often described as something that reveals itself to a prepared mind. How is this different from the Western idea of "finding" knowledge? Which feels more accurate to how discovery actually happens?',
    },
    youDo:{
      title:'Māu Anō — Science recount',
      instruction:'Write a science inquiry recount in te reo Māori.',
      tasks:[
        'Write your question: Ka pātai mātou:…',
        'Write your experiment: Ka whakamātau mātou — Ka matai mātou i…',
        'Write your findings: I kitea e mātou ko te…',
        '✦ Bonus: Write a full science inquiry recount (8 sentences) — the question, the experiment, the observation, the findings, whether your theory was correct, and what you will explore next. Use Ka for the sequence, I for specific facts, and Kua for completed states.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Research and explanation writing',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended informational writing · AO 2.5: Technical vocabulary · Grammar Level 1–2: Explanation text structures',
    aos:[{code:'AO 2.3',label:'Informational &amp; explanatory writing'},{code:'AO 2.5',label:'Technical writing'}],
    iDo:{
      title:'Tāua Kōrero — Writing to explain and inform',
      instruction:'Today we write in the explanation/information genre — the kind of writing that explains how something works, why something happens, or what something means. This is a different genre from narrative or argument, and it has its own vocabulary and structure.',
      example:`<b>Topic: He aha te āniwaniwa?</b><br><br><b>Ko te āniwaniwa he tohu ātaahua o te āhua o te rangi.</b><br>The rainbow is a beautiful sign of the weather.<br><br><b>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=puta" target="_blank" rel="noopener">puta</a> mai te āniwaniwa ina <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tutaki" target="_blank" rel="noopener">tutaki</a> ana te rā me te ua.</b><br>The rainbow appears when the sun and rain meet.<br><br><b>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=wehewehea" target="_blank" rel="noopener">wehewehea</a> e te rā ngā tae o te ua — ka puta mai ngā tae katoa.</b><br>The sun separates the colours of the rain — all the colours emerge.<br><br><b>He tohu aroha tēnei i te tikanga Māori — he tohu nō ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=atua" target="_blank" rel="noopener">atua</a>.</b><br>In Māori tradition, this is a sign of love — a sign from the gods.`,
      demo:`Explanation text structure:\n\n1. <b>Topic sentence</b> — Ko te [X] he [definition/description].\n2. <b>Process</b> — Ka [verb] ana i [X], ka [result].\n3. <b>Evidence/example</b> — He tauira: [example].\n4. <b>Cultural/additional meaning</b> — I te tikanga Māori, ko te tikanga o tēnei ko…\n\nNew explanatory vocabulary:\n<b>ina… ana</b> — when / whenever (conditional time clause)\n<b>tutaki</b> — meet / encounter\n<b>wehewehe</b> — separate / divide\n<b>ka puta mai</b> — emerge / come forth\n<b>he tohu nō ngā atua</b> — a sign from the gods/spiritual realm\n<b>atua</b> — god / spiritual being / ancestor deity`,
      tip:'Ina… ana = whenever / when (that happens). This is your explanation connector — Ka X ina Y ana = X happens when Y happens. It is the te reo equivalent of "when" or "whenever" in an explanation.',
    },
    weDo:{
      title:'Kia Tūhono — Write an explanation',
      instruction:'Together we write an explanation of a natural phenomenon in te reo Māori.',
      sentences:[
        'Topic sentence: Ko te [phenomenon] he [definition]. What natural phenomenon are we explaining?',
        'Process: Ka puta mai te [X] ina [Y] ana.',
        'Evidence: He tauira: [specific example].',
        'Cultural meaning: I te tikanga Māori, ko te tikanga o tēnei ko te…',
      ],
      prompt:'He tohu nō ngā atua — a sign from the gods. In te ao Māori, natural phenomena are not just physical events — they carry meaning. A rainbow is not just refracted light; it is a sign from the spiritual realm. How does science and spiritual meaning exist together in te ao Māori? Can both be true at the same time?',
    },
    youDo:{
      title:'Māu Anō — Explanation writing',
      instruction:'Write an explanation of a natural phenomenon or concept in te reo Māori.',
      tasks:[
        'Write a topic sentence: Ko te [phenomenon] he [definition].',
        'Write the process using ina… ana: Ka [result] ina [cause] ana.',
        'Write a cultural meaning: I te tikanga Māori, ko te tikanga o tēnei ko te…',
        '✦ Bonus: Write a full explanation (8 sentences) about a natural phenomenon, cultural practice, or concept from this term. Include: definition, process, example, cultural meaning, and your own reflection on what this means to you.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero hūnuku — A deep conversation',
    nzLink:'Te Aho Arataki Marau — All Term 3 AOs · AO 2.3: Extended sophisticated conversation',
    aos:[{code:'AO 2.3',label:'Extended sophisticated conversation'},{code:'AO 1.4',label:'Identity &amp; culture'},{code:'AO 2.5',label:'Sophisticated vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — A conversation about what matters',
      instruction:'This is the penultimate week of Term 3. Today we have the deepest conversation of the year — using whakataukī, environmental language, arts, identity, and sophisticated vocabulary to talk about what truly matters.',
      example:`<b>A:</b> He aha te mea nui rawa atu ki a koe i tō ao?<br><b>B:</b> Ko tōku whānau, ko tōku reo, ko tōku taiao — ko ērā ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=pou" target="_blank" rel="noopener">pou</a> o tōku ora.<br><b>A:</b> He aha tō moemoeā mō Aotearoa?<br><b>B:</b> Ko tōku moemoeā: ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=toit%C5%AB" target="_blank" rel="noopener">toitū</a> te reo Māori, ka toitū hoki te taiao — ka ora tātou katoa.<br><b>A:</b> He aha tō whakataukī pai rawa atu?<br><b>B:</b> "Ehara tāku toa i te toa takitahi, he toa takitini." Ko tā tēnei mōhio ko te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mana" target="_blank" rel="noopener">mana</a> o ngā tāngata katoa.<br><b>A:</b> Ka wani kē! He aha tāu e tūmanako ana mō ō uri?<br><b>B:</b> Kei te tūmanako au ka kōrero pai rātou i te reo Māori, ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tiaki" target="_blank" rel="noopener">tiaki</a> hoki rātou i tēnei whenua ātaahua.`,
      demo:`New sophisticated vocabulary:\n<b>ngā pou o tōku ora</b> — the pillars of my life (pou = pillar)\n<b>ka toitū</b> — will endure / remain sustainable\n<b>Ka toitū te reo, ka toitū te taiao.</b> — When the language endures, the environment endures.\n<b>mana o ngā tāngata katoa</b> — the dignity/authority of all people\n<b>tūmanako</b> — hope / expectation\n<b>He aha tāu e tūmanako ana mō ō uri?</b>\nWhat do you hope for your descendants?\n<b>Ka kōrero pai rātou</b> — they will speak well\n<b>tēnei whenua ātaahua</b> — this beautiful land`,
      tip:'Ko ērā ngā pou o tōku ora — those are the pillars of my life. Pou appears again — the pillar that supports everything. Whānau, reo, taiao — three pillars. What are the three pillars of YOUR life? Can you say them in te reo?',
    },
    weDo:{
      title:'Kia Tūhono — Deep conversation',
      instruction:'Build the deepest te reo conversation of the year — about what truly matters.',
      sentences:[
        'I ask: He aha te mea nui rawa atu ki a koe i tō ao? Answer with Ko [X], ko [Y], ko [Z] — ngā pou o tōku ora.',
        'I ask: He aha tō moemoeā mō Aotearoa? Answer with Ka toitū + what you hope will endure.',
        'I ask: He aha tō whakataukī pai rawa atu? Say the whakataukī and explain its meaning.',
        'I ask: He aha tāu e tūmanako ana mō ō uri? Answer with Kei te tūmanako au ka [hope].',
      ],
      prompt:'He aha tāu e tūmanako ana mō ō uri? What do you hope for your descendants? You are Year 5–6 students — your descendants are decades away. But you are also somebody\'s descendant right now. What do you think the people who came before you hoped for you? Have those hopes been realised?',
    },
    youDo:{
      title:'Māu Anō — Ngā pou o tōku ora',
      instruction:'Write about the pillars of your life and your hopes.',
      tasks:[
        'Write Ko [X], ko [Y], ko [Z] — ngā pou o tōku ora.',
        'Write your moemoeā for Aotearoa: Ko tōku moemoeā: ka toitū…',
        'Write your hope for your uri: Kei te tūmanako au ka [hope] ō mātou uri.',
        '✦ Bonus: Write a full reflection (8 sentences) on what matters most — your pillars, your dreams, a whakataukī that guides you, your hope for the future. This is your Term 3 statement of identity. Make it true.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T3W8 = [
  {day:'Monday',  q:'"Ehara tāku toa i te toa takitahi, he toa takitini." What does this whakataukī mean?',options:['Strength comes from working alone','My strength is not from one — it is the strength of many together','Competition makes us strong','The strongest person wins'],correct:1},
  {day:'Monday',  q:'What is the "rito" in the harakeke whakataukī?',options:['The outer leaves of the flax','The ground where the flax grows','The heart shoot of the flax — representing the child/core of the family','The bellbird'],correct:2},
  {day:'Tuesday', q:'What does "whakamātau" mean?',options:['to observe','to research','to discover','to experiment / to test'],correct:3},
  {day:'Tuesday', q:'"Ka kitea e mātou ko te [finding]." What grammatical feature is notable here?',options:['Ka for future tense','Passive voice — the discovery came to us','E…ana for ongoing action','Ko for identity'],correct:1},
  {day:'Wednesday',q:'"Ka puta mai te āniwaniwa ina tutaki ana te rā me te ua." What does ina…ana mean?',options:['because of','although','when / whenever (conditional)','if'],correct:2},
  {day:'Wednesday',q:'What does "wehewehe" mean?',options:['to meet / encounter','to emerge','to separate / divide','to observe'],correct:2},
  {day:'Thursday', q:'"Ko ērā ngā pou o tōku ora." What does this sentence mean?',options:['Those are the problems in my life','Those are the pillars of my life','Those are my children','Those are my dreams'],correct:1},
  {day:'Thursday', q:'What does "tūmanako" mean?',options:['fear / worry','challenge','hope / expectation','memory'],correct:2},
]

const CURRICULUM_T3W9 = {
  Monday: {
    topic:'Arotake — Term 3 vocabulary and structure review',
    nzLink:'Te Aho Arataki Marau — All Term 3 AOs consolidated · Grammar Levels 1–2 complete',
    aos:[{code:'AO 2.3',label:'Term 3 review'},{code:'AO 2.5',label:'All vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Three terms of te reo Māori',
      instruction:'This is the second-to-last week of Term 3 and of your formal learning year. Today we celebrate everything Term 3 has added to your te reo Māori world — and look at how far three terms of daily practice has taken you.',
      example:`Term 3 has added these domains to your toolkit:<br><br><b>BODY AND HEALTH:</b> māhunga, kanohi, ringa, waewae, mamae, kaimahi hauora, me okioki<br><b>TENSE MASTERY:</b> Kua (completed), E…ana (progressive), hiahia ki te, māku e, Ka taea e au te<br><b>IDENTITY AND COMMUNITY:</b> pepeha (full), marae, pōhiri, hongi, whaikōrero, uri, tīpuna<br><b>SCHOOL AND LEARNING:</b> akoranga subjects, evaluative language, taunakitanga<br><b>ARTS AND CULTURE:</b> toi whakairo, raranga, haka, waiata, tohunga<br><b>ENVIRONMENT:</b> kaitiakitanga, toitū, mauri, Ka ora te taiao ka ora tātou<br><b>WISDOM:</b> whakataukī, tikanga, tapu, noa, mana<br><b>SCIENCE:</b> whakamātau, rangahau, kitenga`,
      demo:`The growth across three terms:\n\nTerm 1: "Kei te haere au ki te kura."\nTerm 2: "I te Rāhina, i haere mātou tokowhā ki te kura…"\nTerm 3: "Ko au tētahi kaitiaki o tēnei taiao — e ako ana au i te reo Māori hei tiaki i tōku ao, hei mōhio ki ngā mōrearea, hei tupu tōku ngākau i ngā whakataukī o ōku tīpuna."\n\nTranslation: "I am a guardian of this natural world — I am learning te reo Māori to protect my world, to understand the challenges, to grow my heart through the proverbs of my ancestors."\n\nThat sentence uses: Ko identity, E…ana progressive, hei (purpose), ngā tīpuna (ancestors), whakataukī, ngākau (heart), and multiple subordinate connections. You can write this. You are writing this.`,
      tip:'Read that Term 3 sentence aloud. Slowly. Own every word of it. You earned it.',
    },
    weDo:{
      title:'Kia Tūhono — Term 3 blitz',
      instruction:'Category rapid fire — cover the whole term.',
      sentences:[
        'BODY: From māhunga to waewae — name ten body parts in order, head to toe.',
        'WHAKATAUKĪ: Who can say all four whakataukī from Week 8 from memory?',
        'ARTS: Name all the toi forms — toi whakairo, toi raranga, toi puoro… aim for 8.',
        'ENVIRONMENT: Ka ora te taiao, ka ora tātou — what does it mean and when would you use it?',
      ],
      prompt:'You have been learning te reo Māori for three terms — about 600 minutes of class time. In that time you have built a vocabulary of over 400 words and mastered 15+ grammar structures. What would you have thought at the start of Term 1 if someone told you this? What does it tell you about what daily practice can achieve?',
    },
    youDo:{
      title:'Māu Anō — Three-term audit',
      instruction:'A personal vocabulary and structure audit across all three terms.',
      tasks:[
        'Write down every te reo word you can remember in 5 minutes — all three terms.',
        'Write one sentence using each of the six tense markers: Kei te, I, Ka, Kua, E…ana, Kāore i.',
        'Write your favourite whakataukī and explain what it means to you.',
        '✦ Bonus: Write the most complex te reo sentence you have ever written. Draw on everything from all three terms. Make it say something true about who you are and what you value.',
      ],
    },
  },
  Tuesday: {
    topic:'Arotake — Grammar deep review',
    nzLink:'Te Aho Arataki Marau — All grammar structures Terms 1–3 consolidated',
    aos:[{code:'AO 2.4',label:'Tense mastery'},{code:'AO 2.3',label:'Grammar consolidation'}],
    iDo:{
      title:'Tāua Kōrero — The complete grammar picture',
      instruction:'Today we put the entire three-term grammar picture on the table. This is the complete toolkit — every structure you have learned, organised clearly so you can see how they connect.',
      example:`<b>IDENTITY: Ko</b> — Ko [name/thing] tōku [relationship].<br><b>DESCRIPTION: He</b> — He [adjective/noun] tēnei. He [adj] ake tērā.<br><b>PRESENT: Kei te</b> — Kei te [verb] [person] i [place].<br><b>ONGOING: E…ana</b> — E [verb] ana [person] i tēnei wā.<br><b>PAST: I</b> — I [verb] [person] i [time/place].<br><b>NARRATIVE: Ka</b> — Ka [verb] ia. Ka [verb] anō ia.<br><b>PERFECT: Kua</b> — Kua [verb] ia. Kua mutu.<br><b>NEGATIVES: Kāore</b> — Kāore [person] e [verb] ana. / Kāore [person] i [verb].<br><b>WANT: Hiahia</b> — Kei te hiahia [person] ki te [verb].<br><b>WILL: Māku e</b> — Māku/Māna e [verb].<br><b>ABLE: Ka taea</b> — Ka taea e [person] te [verb].<br><b>RULES: Me/Kaua</b> — Me [verb] tātou. Kaua e [verb].<br><b>COMPLEX: Ahakoa/Mehemea/I te wā/Nō te mea</b>`,
      demo:`The test of grammar mastery is not reciting rules — it is fluent use.\n\nA truly fluent sentence from a Term 3 student:\n\n"Ahakoa i uaua ki a au i te tīmatanga, kua mārama ake au ināianei — ka taea e au te kōrero i te reo Māori, ka taea e au te tuhituhi hoki, ā ko tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=moemoe%C4%81" target="_blank" rel="noopener">moemoeā</a>: ka kōrero tonu au i ēnei kupu tapu mō ōku uri."\n\nAlthough it was difficult for me at the beginning, I now understand better — I am able to speak te reo Māori, I am able to write too, and my dream is: I will continue to speak these sacred words for my descendants.\n\nAhakoa (complex), Kua (perfect), Ka taea (ability), Ko + moemoeā (dream), Ka tonu (future ongoing). Every structure in one sentence.`,
      tip:'Write the test sentence above in your own words. Change the details to make it true for YOU. That is grammar mastery — not knowing the names, but being able to SAY it.',
    },
    weDo:{
      title:'Kia Tūhono — Grammar challenge',
      instruction:'Build sentences matching each structure one by one.',
      sentences:[
        'Ko + He + Kei te in one passage — three sentences about yourself right now.',
        'I + Ka + Kua in sequence — three moments from this morning.',
        'Kāore e…ana + Kāore i + mehemea — three negative/conditional sentences.',
        'Ahakoa + nō te mea + nō reira — one complex sentence with all three.',
      ],
      prompt:'Look at that test sentence: ahakoa, kua, Ka taea, ko, moemoeā, ka tonu, uri. Seven different structures in one sentence. At the start of Term 1, how many of those words did you know? Now? What is the relationship between vocabulary and grammar — can you have one without the other?',
    },
    youDo:{
      title:'Māu Anō — Grammar self-test',
      instruction:'Test yourself on every major structure from three terms.',
      tasks:[
        'Write a sentence using each of: Ko, He, Kei te, E…ana, I, Ka, Kua.',
        'Write a sentence using: Kāore e…ana, Kāore i, hiahia ki te, māku e, Ka taea.',
        'Write a sentence using: ahakoa, nō te mea, mehemea, i te wā.',
        '✦ Bonus: Write a ten-sentence passage that uses at least fifteen different grammar structures correctly. This is your three-term grammar showcase.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Showcase sentences: three terms',
    nzLink:'Te Aho Arataki Marau — All AOs Terms 1–3 · Full sentence type showcase',
    aos:[{code:'AO 2.3',label:'Showcase'},{code:'AO 2.5',label:'Full vocabulary &amp; expression'}],
    iDo:{
      title:'Tāua Kōrero — Your best te reo ever',
      instruction:'Today you write the best sentences of your three-term te reo journey. There is no new content. Just you, your toolkit, and the task of producing your finest te reo Māori.',
      example:`Student showcase examples from across the year:<br><br><b>"Ko te reo Māori ko tōku ara ki ngā tīpuna — he ara māmā, he ara aroha."</b><br>(Te reo Māori is my path to the ancestors — a light path, a loving path.)<br><br><b>"I te wā e ako ana au i tēnei reo tapu, ka mārama aku karu ki tētahi ao hou — ko te ao Māori, ko te ao ātaahua."</b><br>(While I was learning this sacred language, my eyes opened to a new world — the Māori world, the beautiful world.)<br><br><b>"Ka toitū te reo, ka toitū te tangata, ka toitū hoki te taiao — ko tērā tōku whakapono, ko tērā hoki tōku moemoeā."</b><br>(When language endures, people endure, and the natural world endures — that is my belief, and that is also my dream.)`,
      demo:`What makes these sentences exceptional:\n\n→ They are PERSONAL — these could not have been written by anyone else\n→ They use MULTIPLE STRUCTURES seamlessly\n→ They say something the writer DEEPLY BELIEVES\n→ They use FIGURATIVE LANGUAGE (ara = path, literal AND metaphorical)\n→ They CONNECT three terms of learning (tīpuna, tapu, mauri, moemoeā, whakapono)\n\nYour showcase sentence should:\n→ Use at least three different structures\n→ Say something genuinely true about you\n→ Include at least one word or phrase from each term\n→ Feel like te reo Māori, not like an English sentence translated`,
      tip:'The best te reo sentence you can write today is the one that is most true. Not the most complex, not the longest — the most true. Write it in te reo Māori.',
    },
    weDo:{
      title:'Kia Tūhono — Best sentences together',
      instruction:'Class writes one final group showcase sentence — everyone contributes one element.',
      sentences:[
        'Opening: a Ko statement about what te reo Māori is to us.',
        'Process: what happens when we learn it — E…ana, Ka, Kua.',
        'Result: what it gives us — He [noun/quality] tēnei.',
        'Closing: our hope for the future — Ko tērā tōku/ō mātou moemoeā.',
      ],
      prompt:'Ka toitū te reo, ka toitū te tangata, ka toitū hoki te taiao. Three things endure together. If language endures, people endure. If people endure, the natural world is protected. Three things, one survival. Is this true? Is it possible for a language to disappear without its people also losing something essential?',
    },
    youDo:{
      title:'Māu Anō — Your showcase sentences',
      instruction:'Write your three finest te reo Māori sentences of the year.',
      tasks:[
        'Write your best SIMPLE sentence — true and precise.',
        'Write your best COMPLEX sentence — multiple structures, deep meaning.',
        'Write your SHOWCASE SENTENCE — the single finest te reo Māori sentence you have ever produced.',
        '✦ Bonus: Write your "three-term testament" — three sentences, one from each term\'s perspective: who you were (Term 1), who you are becoming (Term 2), and who you intend to be (Term 3). Each sentence should use at least three structures from that term.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — Preparing for the Term 3 assessment',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 · All six language modes',
    aos:[{code:'AO 1.1',label:'Greetings'},{code:'AO 1.2',label:'Introductions'},{code:'AO 2.3',label:'Full conversation'},{code:'AO 2.5',label:'Sophisticated vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — The Term 3 standard',
      instruction:'Next week is your end-of-term assessment. Today we see what the Term 3 standard looks like — a conversation that draws on all three terms, uses sophisticated vocabulary and structures, and sounds like genuine te reo Māori.',
      example:`<b>A:</b> Tēnā koe. Ko wai tōu ingoa? He aha tō pepeha?<br><b>B:</b> Ko [name] tōku ingoa. Ko [maunga] tōku maunga, ko [awa] tōku awa, nō [place] ahau.<br><b>A:</b> He aha ngā mea nui rawa atu ki a koe i tō ao?<br><b>B:</b> Ko ngā pou o tōku ora ko tōku whānau, ko tōku reo, ko tōku taiao. E ako ana au i te reo Māori hei tiaki i ēnei taonga.<br><b>A:</b> Kua tae ki a koe tēnei mōhiotanga?<br><b>B:</b> Āe, kua mārama ake au i ia wiki, i ia wiki. Ka taea e au te kōrero i ngā hanganga katoa ināianei.<br><b>A:</b> He aha tōu whakataukī e tūāhuatia ana i a koe?<br><b>B:</b> "Ehara tāku toa i te toa takitahi, he toa takitini." Ko tā tēnei mōhio ko te mana o te mahi ngātahi.<br><b>A:</b> Ka wani kē! Tēnā koe, tēnā koe, tēnā koe.<br><b>B:</b> Tēnā koe, tēnā koe, tēnā koe.`,
      demo:`What this conversation demonstrates:\n✓ AO 1.1: Tēnā koe + three-part close\n✓ AO 1.2: Full introduction with Ko + pepeha\n✓ AO 1.4: Pepeha (maunga, awa, origin)\n✓ AO 2.3: Extended sophisticated kōrero\n✓ AO 2.5: Pou, taonga, mōhiotanga, whakataukī\n✓ Grammar: Ko, E…ana, Kua, Ka taea, whakataukī explanation\n\nNew phrase:\n<b>He aha tōu whakataukī e tūāhuatia ana i a koe?</b>\nWhat proverb characterises / represents you?\n<b>e tūāhuatia ana</b> — that characterises / represents (passive E…ana)`,
      tip:'He aha tōu whakataukī e tūāhuatia ana i a koe? — What proverb represents you? This is a beautiful question. Before the assessment, choose YOUR whakataukī. The one that speaks to who you are. Be ready to say it and explain it.',
    },
    weDo:{
      title:'Kia Tūhono — Assessment preparation',
      instruction:'Full practice conversation — using the Term 3 standard as your guide.',
      sentences:[
        'Greet formally + full pepeha — all nine lines.',
        'He aha ngā mea nui rawa atu ki a koe i tō ao? Answer with Ko ngā pou o tōku ora ko…',
        'State your learning progress: Kua mārama ake au. Ka taea e au te…',
        'Share your whakataukī + explanation + three-part close.',
      ],
      prompt:'He aha tōu whakataukī e tūāhuatia ana i a koe? Which whakataukī represents you? "He toa takitini" (strength of many) — "Whāia te iti kahurangi" (pursue excellence) — "He tangata, he tangata, he tangata" (it is people). Before you answer, sit with it. The right whakataukī should feel like it has always been yours.',
    },
    youDo:{
      title:'Māu Anō — Assessment preparation',
      instruction:'Prepare for the Term 3 end-of-term assessment.',
      tasks:[
        'Write and memorise your full pepeha — all nine lines.',
        'Write Ko ngā pou o tōku ora ko… (three pillars of your life).',
        'Choose your whakataukī — write it and its explanation: Ko tā tēnei mōhio ko te…',
        '✦ Bonus: Write the full conversation you plan to have in the assessment (12 lines minimum). Practise it until you can say it without looking. Then say it to a family member tonight.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T3W9 = [
  {day:'Monday',  q:'Which of these is a Term 3 structure that was NOT taught in Terms 1 or 2?',options:['Kei te','Ko','Kua (perfect aspect)','Kāore'],correct:2},
  {day:'Monday',  q:'"Ka ora te taiao, ka ora tātou." In what context would you most naturally use this sentence?',options:['When describing the weather','When talking about kaitiakitanga and environmental responsibility','When explaining why you are late','When introducing yourself'],correct:1},
  {day:'Tuesday', q:'"Ahakoa i uaua ki a au i te tīmatanga, kua mārama ake au ināianei." What two structures are combined here?',options:['Ka and Kei te','Ahakoa (complex) and Kua (perfect aspect)','I and E…ana','Ko and He'],correct:1},
  {day:'Tuesday', q:'"Ka taea e au te kōrero i te reo Māori." What does this sentence express?',options:['I want to speak te reo Māori','I used to be able to speak te reo Māori','I am able to speak te reo Māori','I am learning to speak te reo Māori'],correct:2},
  {day:'Wednesday',q:'What makes a showcase sentence different from a grammar exercise sentence?',options:['It is always longer','It uses more vocabulary words','It says something the writer truly means and has a genuine voice','It always uses Kua'],correct:2},
  {day:'Wednesday',q:'"Ko te reo Māori ko tōku ara ki ngā tīpuna." What does ara mean here?',options:['language','path / way','ancestor','light'],correct:1},
  {day:'Thursday', q:'"He aha tōu whakataukī e tūāhuatia ana i a koe?" What does tūāhuatia mean here?',options:['that you have memorised','that characterises / represents you (passive)','that you wrote yourself','that is the most famous'],correct:1},
  {day:'Thursday', q:'What are the "ngā pou o tōku ora"?',options:['the rules of my school','the challenges of my life','the pillars of my life','the goals for next term'],correct:2},
]

const CURRICULUM_T3W10 = {
  Monday: {
    topic:'Arotake — End-of-term vocabulary celebration',
    nzLink:'Te Aho Arataki Marau — All AOs Terms 1–3 · Complete vocabulary review',
    aos:[{code:'AO 1.1',label:'Greetings'},{code:'AO 2.5',label:'All vocabulary'},{code:'AO 2.3',label:'All structures'}],
    iDo:{
      title:'Tāua Kōrero — Three terms: a vocabulary celebration',
      instruction:'Today we celebrate. In three terms of daily warm-up practice, you have built something remarkable. Let us count it, celebrate it, and prepare to show it.',
      example:`Three terms of te reo Māori. Here is your vocabulary toolkit:<br><br>TERM 1: Greetings · Ko · He · Kei te · Numbers 1–10 · food · places · wants · feelings · adjectives · conjunctions · adverbs · prepositions<br><br>TERM 2: I (past) · Ka (narrative) · Kua (perfect) · Kāore (negative) · All 16 pronouns · Numbers 1–100 · Dates/times/months · Colours · Comparatives · Weather · Seasons · Emotions · Character · Arts<br><br>TERM 3: Body · E…ana · Kua · hiahia · māku e · Ka taea · Pepeha (full) · Marae · Haka · Whakataukī · Kaitiakitanga · Science vocabulary · Formal/informal register · Argument and persuasion`,
      demo:`What you can now DO:\n\n✓ Have a sophisticated 10-minute conversation entirely in te reo Māori\n✓ Write a full pepeha and deliver it from memory\n✓ Explain a whakataukī and its deeper meaning\n✓ Write a persuasive argument using taunakitanga\n✓ Describe past, present, and future events fluently\n✓ Express emotions, opinions, goals, and dreams\n✓ Talk about the environment, the arts, the body, and the community\n✓ Switch between formal and casual registers\n✓ Use all 16 pronouns correctly\n✓ Count to 100, say the time, and give the date\n✓ Understand and produce complex sentences with subordinate clauses\n\nThis is real. You did this. Ka tino pai!`,
      tip:'Ka tino pai! — genuinely, truly excellent. Not just "good" — tino good. You have earned tino.',
    },
    weDo:{
      title:'Kia Tūhono — Three-term blitz',
      instruction:'The fastest, most comprehensive vocabulary review of the year.',
      sentences:[
        'PEPEHA: One student delivers their full pepeha from memory. Class listens and checks.',
        'WHAKATAUKĪ: Who can say all four from Term 3 Week 8? Class helps where needed.',
        'NUMBERS: Count from 1 to 100 as a class in te reo — everyone joins in.',
        'SHOWCASE: Each student says their best single te reo sentence of the year. No repeats.',
      ],
      prompt:'Your best single te reo sentence of the year. Not the longest. Not the most complicated. The most TRUE. What do you want to say, in te reo Māori, about your year of learning? Say it. Own it.',
    },
    youDo:{
      title:'Māu Anō — Final vocabulary audit',
      instruction:'Your last vocabulary audit of the year.',
      tasks:[
        'Write every te reo word you know in 5 minutes. Count them.',
        'Write what you know today that you did not know at the start of Term 1.',
        'Write your three best te reo sentences of the year.',
        '✦ Bonus: Write a letter to your next-year self in te reo Māori — what you have learned, what you struggled with, what you are proud of, and what you hope they will continue. At least ten sentences. This letter is evidence of your year.',
      ],
    },
  },
  Tuesday: {
    topic:'Arotake — Grammar final review',
    nzLink:'Te Aho Arataki Marau — All grammar structures Terms 1–3',
    aos:[{code:'AO 2.4',label:'Tense mastery'},{code:'AO 2.3',label:'Grammar review'}],
    iDo:{
      title:'Tāua Kōrero — Every structure, one final time',
      instruction:'Today we review every grammar structure from three terms — one final time. This is not about memorising rules. It is about confirming what you already know.',
      example:`Every structure in one passage:<br><br><b>Ko ahau ko [name]. He ākonga au i tēnei kura.</b> (Ko · He)<br><b>Kei te ako tonu au i te reo Māori — e tipu ana tōku māramatanga i ia rā, i ia rā.</b> (Kei te · E…ana)<br><b>I tīmata au i tērā tau — kāore au i mōhio ki ētahi kupu.</b> (I · Kāore i)<br><b>Ka haere au ki te kura. Ka ako au. Ka hari tōku ngākau.</b> (Ka sequence)<br><b>Kua mārama ake au — kua tipu tōku reo.</b> (Kua)<br><b>Ka taea e au te kōrero i te reo Māori, ka taea e au te tuhituhi hoki.</b> (Ka taea)<br><b>Ahakoa i uaua, i mahi tonu au nō te mea ko tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=moemoe%C4%81" target="_blank" rel="noopener">moemoeā</a>: ka kōrero tōku whānau i te reo Māori.</b> (Ahakoa · Nō te mea · Ko)`,
      demo:`Count the structures in that passage:\n1. Ko (identity)\n2. He (description)\n3. Kei te (present)\n4. E…ana (progressive)\n5. I (past)\n6. Kāore i (past negative)\n7. Ka (narrative × 3)\n8. Kua (perfect × 2)\n9. Ka taea (ability × 2)\n10. Ahakoa (complex concession)\n11. Nō te mea (reason)\n12. Ko + moemoeā (dream statement)\n\nTwelve structures in seven sentences. You know all of them.`,
      tip:'You know all of these. You have used them all. Today\'s review is not about learning — it is about confidence. Read the passage aloud. Feel how natural it sounds. That is YOUR voice in te reo Māori.',
    },
    weDo:{
      title:'Kia Tūhono — Structure identification',
      instruction:'Read the I Do passage aloud together. Identify every structure as a class.',
      sentences:[
        'Identify: Ko, He, Kei te, E…ana — point to each one as you read.',
        'Identify: I, Kāore i, Ka (three times), Kua (twice).',
        'Identify: Ka taea (twice), Ahakoa, Nō te mea, Ko + moemoeā.',
        'Now write your own passage — same structures, your own words and story.',
      ],
      prompt:'Read your own three-term passage aloud. This is the grammar of your story — your Ko, your He, your Kua, your Ka taea. Every structure you know is in service of what YOU want to say. Grammar is not the goal — it is the tool. What story do you want to tell with these tools?',
    },
    youDo:{
      title:'Māu Anō — Grammar showcase',
      instruction:'Write a passage that uses every major structure from three terms.',
      tasks:[
        'Write three sentences using Ko, He, and Kei te.',
        'Write three sentences using I, Ka, and Kua.',
        'Write three sentences using Ka taea, ahakoa, and nō te mea.',
        '✦ Bonus: Combine all nine sentences into one flowing passage. Add connective words to make it flow. This is your three-term grammar showcase.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Three-term portfolio sentence',
    nzLink:'Te Aho Arataki Marau — All AOs · All sentence types Terms 1–3',
    aos:[{code:'AO 2.3',label:'Portfolio showcase'},{code:'AO 2.5',label:'Full expression'}],
    iDo:{
      title:'Tāua Kōrero — Your portfolio sentence',
      instruction:'Today you write THE sentence — your single finest piece of te reo Māori from three terms of learning. This sentence will go in your portfolio, on the wall, and in your memory. It should say who you are, what matters to you, and what you carry into the future.',
      example:`Portfolio sentences from imagined students across the year:<br><br><b>"Ka toitū te reo o ōku tīpuna i roto i āku kupu, i roto i āku mahi, i roto i āku moemoeā."</b><br>(The language of my ancestors endures within my words, within my actions, within my dreams.)<br><br><b>"He ākonga noa iho ahau — engari, ko tōku ngākau e hiahia ana ki te tiaki i tēnei <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=taonga" target="_blank" rel="noopener">taonga</a> ātaahua, ko te reo Māori."</b><br>(I am just a learner — but my heart desires to protect this beautiful treasure, te reo Māori.)<br><br><b>"I tīmata au i tētahi kupu — ināianei, kua tipu ōku rerenga ki tētahi ao hou, ko te ao Māori."</b><br>(I started with one word — now, my sentences have grown into a new world, the Māori world.)`,
      demo:`What makes a portfolio sentence:\n\n→ It is PERSONAL — only you could have written it\n→ It is TRUE — you believe every word\n→ It CONNECTS to something bigger than yourself (reo, taiao, tīpuna, uri)\n→ It uses MULTIPLE STRUCTURES seamlessly\n→ It SOUNDS BEAUTIFUL — read it aloud and feel it\n\nThe three examples above each use:\n"Ka toitū" — enduring / the perfect aspect\n"Ko tōku ngākau e hiahia ana" — heart progressive want\n"Kua tipu" — has grown (perfect) into a new world\n\nYour portfolio sentence is not a homework task. It is a declaration.`,
      tip:'He ākonga noa iho ahau — I am just a learner. And yet — ko tōku ngākau e hiahia ana ki te tiaki i tēnei taonga. The heart wants to protect it. Humility + passion = the perfect learner of te reo Māori.',
    },
    weDo:{
      title:'Kia Tūhono — Draft together',
      instruction:'Class writes one group portfolio sentence — and each student writes their own.',
      sentences:[
        'Class sentence: Ko mātou ngā ākonga o tēnei akomanga — ka tipu tō mātou reo i ia rā, i ia rā.',
        'Now each student writes their own first draft — alone, in silence, in te reo.',
        'Share with a partner — read aloud, give feedback, improve.',
        'Final version: write it clearly, read it to the class.',
      ],
      prompt:'I tīmata au i tētahi kupu — I started with one word. What was your first word in te reo Māori? Kia ora? Āe? Your name in Ko? How many words do you know now? What does that journey — from one word to hundreds — feel like to look back on?',
    },
    youDo:{
      title:'Māu Anō — Portfolio sentence',
      instruction:'Write your portfolio sentence.',
      tasks:[
        'Draft: write three possible portfolio sentences — different approaches, different feelings.',
        'Choose: which one is most true? Which one sounds most like you in te reo?',
        'Final: write your chosen sentence carefully. This is your keepsake.',
        '✦ Bonus: Write a portfolio paragraph (5 sentences) — your portfolio sentence as the opening, followed by four sentences that expand on it. What does this sentence say about who you are, what you have learned, and where you are going?',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He whakamātautau — End of Term 3 assessment',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 · All six language modes assessed',
    aos:[{code:'AO 1.1',label:'Greetings'},{code:'AO 1.2',label:'Introductions'},{code:'AO 1.4',label:'Personal information'},{code:'AO 2.3',label:'Full sophisticated conversation'},{code:'AO 2.5',label:'Sophisticated vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — The Term 3 standard conversation',
      instruction:'This is your final spoken assessment for Term 3. It is also the most sophisticated conversation you will have had in te reo Māori. Here is what the full Term 3 standard looks like:',
      example:`<b>A:</b> Tēnā koe. Ko wai koe? He aha tō pepeha?<br><b>B:</b> [Full nine-line pepeha from memory]<br><b>A:</b> Ka pai tō pepeha! He aha ngā pou o tōu ora?<br><b>B:</b> Ko ngā pou o tōku ora ko tōku whānau, ko tōku reo, ko tōku taiao — ko ērā ngā mea e tiaki ana i a au.<br><b>A:</b> He aha tō whakataukī e tūāhuatia ana i a koe?<br><b>B:</b> "Ehara tāku toa i te toa takitahi, he toa takitini." Ko tā tēnei mōhio ko te mana o te mahi ngātahi — ko tērā tōku whakapono.<br><b>A:</b> He aha tōu moemoeā mō tō reo Māori?<br><b>B:</b> Ko tōku moemoeā: ka kōrero tōku whānau i te reo Māori, ka toitū hoki tēnei reo <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tapu" target="_blank" rel="noopener">tapu</a> mō ōku uri.<br><b>A:</b> Ka wani kē tāu kōrero! Tēnā koe, tēnā koe, tēnā koe.<br><b>B:</b> Tēnā koe, tēnā koe, tēnā koe.`,
      demo:`Assessment checklist:\n✓ AO 1.1: Tēnā koe + Tēnā koe ×3 close\n✓ AO 1.2: Full pepeha with Ko sentences\n✓ AO 1.4: Maunga, awa, iwi, hapū, marae, kura, ingoa, origin\n✓ AO 2.3: Extended sophisticated conversation\n✓ AO 2.5: Pou, moemoeā, whakataukī, whakapono, uri, toitū\n✓ Grammar: Ko ×9 (pepeha), E…ana, Ka, Kua, ahakoa (embedded)`,
      tip:'Deliver your pepeha with pride. It carries your mountain, your river, your people, and your name. There is no more important thing you can say in te reo Māori.',
    },
    weDo:{
      title:'Kia Tūhono — Final practice',
      instruction:'One complete practice run with a partner before the assessment.',
      sentences:[
        'Full pepeha — partner listens and checks all nine lines.',
        'Ko ngā pou o tōu ora ko… — three pillars, stated with confidence.',
        'Whakataukī + explanation — say it, explain both levels of meaning.',
        'Moemoeā + three-part close — Tēnā koe, tēnā koe, tēnā koe.',
      ],
      prompt:'Ko tōku moemoeā: ka kōrero tōku whānau i te reo Māori. Is this your dream too? Or is it something else? Before your assessment, sit quietly for one minute and answer: what do YOU hope for your te reo Māori — not for the assessment, not for the teacher, but for yourself, for your life?',
    },
    youDo:{
      title:'Māu Anō — He whakamātautau — Term 3 assessment',
      instruction:'Your end-of-term spoken assessment.',
      tasks:[
        '<b>Task 1:</b> Full pepeha from memory — all nine lines.',
        '<b>Task 2:</b> Ko ngā pou o tōu ora + whakataukī + moemoeā — at least 6 sentences.',
        '<b>Task 3:</b> Full conversation with a partner — at least 12 lines each.',
        '✦ Assessment checklist: ☐ Pepeha (9 lines) · ☐ Ko ngā pou o tōu ora · ☐ Whakataukī + explanation · ☐ Moemoeā statement · ☐ Ka taea sentence · ☐ Tēnā koe ×3 close',
      ],
    },
  },
}

const FRIDAY_QUIZ_T3W10 = [
  {day:'Monday',  q:'Which Term 3 structure expresses a completed action whose result is relevant now?',options:['Kei te','Ka','I','Kua'],correct:3},
  {day:'Monday',  q:'"Ko ngā pou o tōku ora ko tōku whānau, ko tōku reo, ko tōku taiao." What are the three pou?',options:['school, friends, sport','family, language, natural world','food, shelter, water','work, rest, play'],correct:1},
  {day:'Tuesday', q:'Identify the structure: "E tipu ana tōku māramatanga i ia rā, i ia rā."',options:['Kei te present','Ka narrative','E…ana progressive — ongoing growth','I past'],correct:2},
  {day:'Tuesday', q:'"Ahakoa i uaua, i mahi tonu au." What does ahakoa signal?',options:['a result — because it was hard I worked','a time — when it was hard I worked','a concession — DESPITE it being hard, I kept working','a condition — if it is hard I will work'],correct:2},
  {day:'Wednesday',q:'What is a "portfolio sentence"?',options:['The longest sentence you can write','A sentence for grammar practice only','Your finest, most personal, most true te reo sentence — a declaration of who you are','A sentence that uses every vocabulary word'],correct:2},
  {day:'Wednesday',q:'"I tīmata au i tētahi kupu — ināianei, kua tipu ōku rerenga ki tētahi ao hou." What does "ao hou" mean?',options:['a new day','a new world / new realm','a new language','a new friend'],correct:1},
  {day:'Thursday', q:'What is the correct order for a full pepeha?',options:['Name → mountain → river → iwi → school → origin','Mountain → river → waka → iwi → hapū → marae → school → name → origin','Origin → name → iwi → mountain → river','School → name → iwi → hapū → origin'],correct:1},
  {day:'Thursday', q:'"Ko tōku moemoeā: ka kōrero tōku whānau i te reo Māori." What does this dream express?',options:['That the speaker will learn English','That the speaker\'s family will speak te reo Māori','That te reo Māori will be taught in all schools','That the speaker will win a competition'],correct:1},
]

// ── Term 3 data router ──────────────────────────────────────────────────────
function getTerm3Data(week) {
  const curricula = {
    1: CURRICULUM_T3W1, 2: CURRICULUM_T3W2, 3: CURRICULUM_T3W3,
    4: CURRICULUM_T3W4, 5: CURRICULUM_T3W5, 6: CURRICULUM_T3W6,
    7: CURRICULUM_T3W7, 8: CURRICULUM_T3W8, 9: CURRICULUM_T3W9, 10: CURRICULUM_T3W10
  }
  const quizzes = {
    1: FRIDAY_QUIZ_T3W1, 2: FRIDAY_QUIZ_T3W2, 3: FRIDAY_QUIZ_T3W3,
    4: FRIDAY_QUIZ_T3W4, 5: FRIDAY_QUIZ_T3W5, 6: FRIDAY_QUIZ_T3W6,
    7: FRIDAY_QUIZ_T3W7, 8: FRIDAY_QUIZ_T3W8, 9: FRIDAY_QUIZ_T3W9, 10: FRIDAY_QUIZ_T3W10
  }
  return { curriculum: curricula[week] || null, quiz: quizzes[week] || null }
}

