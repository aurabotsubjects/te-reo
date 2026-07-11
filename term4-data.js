
// ════════════════════════════════════════════════════════════════
// TERM 4 — KIA MĀRAMA (FLUENCY)
// Weeks 1–10 · All lesson data for Term 4
// ════════════════════════════════════════════════════════════════

const CURRICULUM_T4W1 = {
  Monday: {
    topic:'Tēnā koutou katoa — Formal greetings and register mastery',
    nzLink:'Te Aho Arataki Marau — AO 1.1: Greetings · AO 1.6: Politeness conventions · AO 1.2: Formal introductions',
    aos:[{code:'AO 1.1',label:'Formal greetings'},{code:'AO 1.6',label:'Register mastery'}],
    iDo:{
      title:'Tāua Kōrero — The full greeting system',
      instruction:'Welcome to Term 4 — Kia Mārama, the term of fluency. This term we bring everything together and reach for genuine spontaneous conversation. We begin where te reo Māori always begins — with greetings. But this term, we master the FULL system — every register, every occasion, every nuance.',
      example:`<b>CASUAL (hoa, tamariki):</b><br><b>Kia ora!</b> — Hello / Thank you<br><b>Kia ora kōrua/koutou!</b> — Hello you two / Hello everyone<br><br><b>FORMAL SINGULAR:</b><br><b>Tēnā koe.</b> — Greetings to you (one person)<br><br><b>FORMAL DUAL:</b><br><b>Tēnā kōrua.</b> — Greetings to you two<br><br><b>FORMAL PLURAL:</b><br><b>Tēnā koutou.</b> — Greetings to you all (3+)<br><b>Tēnā koutou katoa.</b> — Greetings to each and every one of you<br><br><b>FAREWELL SYSTEM:</b><br><b>Hei konā rā.</b> — Goodbye (speaker is leaving)<br><b>E noho rā.</b> — Goodbye (listener is staying)<br><b>Ā, ka kite anō.</b> — Until we meet again<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=M%C4%81+te+w%C4%81" target="_blank" rel="noopener">Mā te wā</a>.</b> — Until another time / Farewell (for a long parting)`,
      demo:`The greeting system is built on the pronoun system you know:\n\nkoe (you, 1) → Tēnā koe\nkōrua (you 2) → Tēnā kōrua\nkoutou (you 3+) → Tēnā koutou\n\nFor acknowledgement and gratitude:\n<b>Tēnā koe mō tāu āwhina.</b>\nThank you for your help.\n(Tēnā koe + mō + reason for thanks)\n\n<b>Tēnā koutou mō ā koutou mahi.</b>\nThank you all for your work.\n\nFor welcoming:\n<b>Nau mai, haere mai!</b> — Welcome! Come in!\n<b>Nau mai ki tō mātou kura.</b>\nWelcome to our school.\n\nNew word:\n<b>mō</b> — for / about / on account of (used for giving thanks)`,
      tip:'Tēnā koe mō [reason] = thank you for [reason]. This is the complete thank-you formula in formal te reo. Tēnā koe alone = greeting. Tēnā koe mō tāu mahi = thank you for your work.',
    },
    weDo:{
      title:'Kia Tūhono — Full greeting system practice',
      instruction:'Rapid fire — I describe the situation, you give the right greeting.',
      sentences:[
        'Greeting the whole class formally: <b>Tēnā koutou katoa.</b> Now greet two students: <b>Tēnā kōrua.</b>',
        'Thanking a teacher for help: <b>Tēnā koe mō tāu āwhina.</b> Thanking the whole class: <b>Tēnā koutou mō ā koutou mahi.</b>',
        'Saying goodbye as you leave: <b>Hei konā rā.</b> Staying while someone else leaves: <b>E noho rā.</b>',
        'Welcoming a visitor: <b>Nau mai, haere mai! Nau mai ki tō mātou kura.</b>',
      ],
      prompt:'E noho rā (you stay) vs Hei konā rā (farewell where I am). These two farewells tell you who is moving. Why does te reo Māori distinguish who is leaving and who is staying? What does this say about how Māori thinks about presence and movement?',
    },
    youDo:{
      title:'Māu Anō — Greeting mastery',
      instruction:'Use the full greeting system in real sentences.',
      tasks:[
        'Write the correct greeting for: your teacher, two classmates, the whole school assembly.',
        'Write a formal thank-you: Tēnā koe/koutou mō… (three different reasons for thanks).',
        'Write the correct farewell for: you are leaving, your friend is leaving, it is the end of term.',
        '✦ Bonus: Write a full formal welcome speech (8 sentences) for a visitor to your school — Nau mai, greeting by role, thank them for coming, introduce the school, close with Tēnā koutou ×3.',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā kupu hono hou — Advanced linking and cohesion',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · Grammar Level 1–2: Advanced cohesion, discourse markers',
    aos:[{code:'AO 2.3',label:'Advanced cohesion'},{code:'AO 2.5',label:'Discourse markers'}],
    iDo:{
      title:'Tāua Kōrero — Linking ideas like a fluent speaker',
      instruction:'Fluent speakers do not just string sentences together — they signal the relationship between ideas with precision. Today we learn the advanced linking toolkit — the words and phrases that mark transitions, summaries, contrasts, and conclusions in extended te reo Māori.',
      example:`<b>To add / expand:</b><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=waihoki" target="_blank" rel="noopener">waihoki</a></b> — moreover / and also<br><b>ā, ko tērā anō</b> — and there is also this<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C4%81ore+noa+iho" target="_blank" rel="noopener">kāore noa iho</a></b> — not only that<br><br><b>To contrast:</b><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=heoi+an%C5%8D" target="_blank" rel="noopener">heoi anō</a></b> — however<br><b>engari rā</b> — but actually / however (stronger) / however (stronger)<br><b>ahakoa ōna āhuatanga</b> — despite its qualities<br><br><b>To conclude:</b><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=n%C5%8D+reira" target="_blank" rel="noopener">nō reira</a></b> — therefore / so<br><b>ko te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mutunga" target="_blank" rel="noopener">mutunga</a></b> — in conclusion<br><b>hei <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whakakapi" target="_blank" rel="noopener">whakakapi</a></b> — to conclude / to summarise / to summarise<br><br><b>To illustrate:</b><br><b>hei <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tauira" target="_blank" rel="noopener">tauira</a></b> — for example<br><b>pēnei i te</b> — such as / like<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ar%C4%81" target="_blank" rel="noopener">arā</a></b> — that is / namely`,
      demo:`In use:\n\n<b>He taonga te reo Māori. Kāore noa iho — he taonga ā-ahurea hoki.</b>\nTe reo Māori is a treasure. Not only that — it is also a cultural treasure.\n\n<b>He nui ngā hua o te ako i te reo Māori. Heoi anō, he uaua hoki.</b>\nThere are many benefits of learning te reo. However, it is also difficult.\n\n<b>Ko te mutunga, me tiaki tātou i tēnei reo mō āpōpō ō ngā uri.</b>\nIn conclusion, we must protect this language for tomorrow's descendants.\n\n<b>Hei tauira, ko te haka tētahi mahi toi rongonui — arā, he tohu aroha me he tohu kaha.</b>\nFor example, haka is a famous art form — namely, a sign of love and a sign of strength.\n\nNew words:\n<b>ā-ahurea</b> — cultural (ā + ahurea = cultural/relating to culture)\n<b>hei whakakapi</b> — to summarise / in summary`,
      tip:'Hei tauira = for example. Arā = namely / that is. Use these when you want to illustrate a point with a specific case. They signal: "I am about to give you evidence for what I just said."',
    },
    weDo:{
      title:'Kia Tūhono — Advanced linking',
      instruction:'I give you two sentences — you choose the best advanced linking word and explain why.',
      sentences:[
        '"He pai te reo Māori." + "He tino rangatira hoki." → Expanding: <b>Kāore noa iho — he tino rangatira hoki te reo Māori.</b>',
        '"He nui ngā ākonga i tēnei kura." + "Ko tētahi āhuatanga pai tērā." → Concluding: <b>Ko te mutunga, he kura nui tēnei.</b>',
        '"I mahi kaha mātou." + "I toa mātou." → Giving an example: <b>Hei tauira — i toa mātou i te kaupeka hākinakina o tērā wiki.</b>',
        'Write your own: an argument about kaitiakitanga using waihoki, heoi anō, and nō reira.',
      ],
      prompt:'Ko te mutunga — in conclusion. Hei whakakapi — to summarise. These are the phrases that close an argument. In te ao Māori, how you close a kōrero is as important as how you open it. Why? What does a strong conclusion do that a weak one doesn\'t?',
    },
    youDo:{
      title:'Māu Anō — Advanced linking sentences',
      instruction:'Use advanced discourse markers in extended writing.',
      tasks:[
        'Write three sentences using waihoki, heoi anō, and hei tauira — one each.',
        'Write a Ko te mutunga or hei whakakapi conclusion sentence about something you believe.',
        'Use arā to clarify a point: state something general, then use arā to specify.',
        '✦ Bonus: Write an argument paragraph (8 sentences) about te reo Māori. Use at least five different linking markers: kāore noa iho, heoi anō, hei tauira, arā, and Ko te mutunga.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — All structures, full fluency',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · All grammar structures Terms 1–4',
    aos:[{code:'AO 2.3',label:'Full fluency writing'},{code:'AO 2.5',label:'Complete vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Writing with everything you have',
      instruction:'This is Term 4, Week 1. You have three terms of te reo Māori behind you. Today we write without guardrails — using everything you know, in whatever order serves what you want to say. This is what fluency looks like.',
      example:`<b>A Term 4 student's passage:</b><br><br>Ko au ko Hēmi. He ākonga au i tēnei kura, he kaitiaki hoki o tēnei taiao.<br>I tīmata au i tētahi kupu — "Kia ora" — ināianei, kua <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tipu" target="_blank" rel="noopener">tipu</a> tōku reo ki tētahi mea nui ake.<br>E ako tonu ana au — kāore anō kua oti — engari, ka taea e au te kōrero i ngā āhuatanga nui o tōku ao ināianei.<br>Hei tauira: ka taea e au te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mihi" target="_blank" rel="noopener">mihi</a>, ka taea e au te tuhituhi, ka taea e au te whakaaro i te reo Māori.<br>Ko te mutunga, ko tēnei reo tōku ara ki ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C4%ABpuna" target="_blank" rel="noopener">tīpuna</a>, ki ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=uri" target="_blank" rel="noopener">uri</a>, ā ki tōku ake ngākau.`,
      demo:`Notice every structure in that passage:\n\nKo (×2 — identity)\nHe (×2 — description)\nI tīmata au — past\nKua tipu — perfect aspect\nE ako tonu ana — E…ana progressive\nKāore anō kua oti — Kua negative\nKa taea e au te — ability (×3)\nHei tauira — for example\nKo te mutunga — in conclusion\nKo + Ko — identity statement chain\n\nNew phrase:\n<b>tōku ake ngākau</b> — my very own heart (ake = own/particular when after a possessive)\n<b>Tōku ake</b> = my very own (more emphatic than tōku alone)`,
      tip:'Tōku ake = my very own. Tāu ake = your very own. Ake after a possessive adds the sense of "own" — particular to you, belonging to no one else. Use it when you want to say something is truly, personally yours.',
    },
    weDo:{
      title:'Kia Tūhono — Free writing with everything',
      instruction:'I give you a topic — you write freely, using any structures that serve what you want to say.',
      sentences:[
        'Topic: what te reo Māori means to you. Write four sentences — no structure requirements, just truth.',
        'Topic: your biggest achievement this year. Write four sentences — past, present, future all welcome.',
        'Topic: someone who has influenced you. Write four sentences — any structures, show don\'t tell.',
        'Read your sentences aloud. Which one sounds most like YOUR voice in te reo? Why?',
      ],
      prompt:'Ko tēnei reo tōku ara ki ngā tīpuna, ki ngā uri, ā ki tōku ake ngākau. The language is a path to the ancestors, to the descendants, and to my very own heart. Three destinations. Which of the three feels most real to you right now?',
    },
    youDo:{
      title:'Māu Anō — Free writing',
      instruction:'Write freely in te reo Māori for ten minutes. No constraints. Just truth.',
      tasks:[
        'Write for 5 minutes without stopping — anything on your mind in te reo.',
        'Read back what you wrote. Underline the structures you used without thinking.',
        'Choose your best sentence from your free writing. Improve it once.',
        '✦ Bonus: Write a full free-writing piece (10 sentences) on any topic you choose. After writing, annotate every structure you used. Count them. This is evidence of your fluency.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He mihi whakamutunga — End of year farewell language',
    nzLink:'Te Aho Arataki Marau — AO 1.1: Greetings/farewells · AO 1.6: Politeness · AO 2.3: Extended formal communication',
    aos:[{code:'AO 1.1',label:'Farewell language'},{code:'AO 1.6',label:'Formal occasion language'}],
    iDo:{
      title:'Tāua Kōrero — Language for endings and new beginnings',
      instruction:'Term 4 is a time of endings and transitions — the end of the year, farewells to classmates, transitions to new classes. Today we learn the language of endings and new beginnings in te reo Māori.',
      example:`<b>Mā te wā.</b> — Until another time / Farewell (for a long parting)<br><b>Ā, ka kite anō.</b> — Until we meet again<br><b>Hei konā rā.</b> — Farewell (I am leaving)<br><b>E noho rā.</b> — Farewell (you stay, I go)<br><br><b>For a year's end:</b><br><b>I tēnei tau, kua tipu tātou katoa.</b><br>This year, we have all grown.<br><br><b>He tau tino pai tēnei mōku.</b><br>This has been a very good year for me.<br><br><b>Tēnā koutou katoa mō ā koutou mahi i tēnei tau.</b><br>Thank you all for your work this year.<br><br><b>Ka nui ōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mihi" target="_blank" rel="noopener">mihi</a> ki a koutou.</b><br>My greetings/gratitude to you all is great.`,
      demo:`Transition language:\n<b>Ā tērā tau</b> — next year\n<b>Ā tērā kura</b> — at the next school\n<b>Ka tipu tonu</b> — will keep growing\n<b>Ka huri ake</b> — will turn / transition\n<b>Me mōhio tātou</b> — we should know / let us remember\n<b>Ko tōku inoi</b> — my wish / prayer\n<b>Ka nui ōku mihi</b> — my greetings/thanks are great\n\nFarewell speech structure:\n1. Tēnā koutou katoa.\n2. I tēnei tau, kua…\n3. He tau [adjective] tēnei nō te mea…\n4. Tēnā koutou mō…\n5. Ko tōku inoi mō koutou: ka…\n6. Tēnā koutou, tēnā koutou, tēnā koutou katoa.\n\nNew phrase:\n<b>Ko tōku inoi mō koutou</b> — my wish/prayer for you all`,
      tip:'Ka nui ōku mihi ki a koutou — my greetings and thanks to you all are great. This phrase does double work — it both greets and thanks. In te ao Māori, mihi (greeting/tribute) and gratitude are the same action.',
    },
    weDo:{
      title:'Kia Tūhono — Farewell conversation',
      instruction:'Build a year-end farewell exchange.',
      sentences:[
        'Opening: <b>Tēnā koutou katoa. I tēnei tau, kua tipu tātou katoa.</b> What has grown? Add specifics.',
        'Thank: <b>Tēnā koutou mō ā koutou mahi i tēnei tau.</b> What specific things are you thanking them for?',
        'Wish: <b>Ko tōku inoi mō koutou: ka [hope for them next year].</b>',
        'Close: <b>Ka nui ōku mihi ki a koutou. Tēnā koutou ×3. Mā te wā.</b>',
      ],
      prompt:'Ko tōku inoi mō koutou — my wish/prayer for you. What IS your wish for your classmates for next year? In te reo Māori? Try to say it. Ka [verb] koutou — may you all [verb]. This is one of the most generous things you can say to someone.',
    },
    youDo:{
      title:'Māu Anō — End of year farewell speech',
      instruction:'Write a farewell speech for the end of the school year.',
      tasks:[
        'Open: Tēnā koutou katoa. I tēnei tau, kua… (what has happened/changed).',
        'Thank: Tēnā koutou mō ā koutou mahi — be specific about three things.',
        'Wish: Ko tōku inoi mō koutou: ka [three wishes].',
        '✦ Bonus: Write your full farewell speech (10 sentences) following the six-step structure. Deliver it to the class — without reading if possible.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T4W1 = [
  {day:'Monday',  q:'You are leaving a room and someone is staying. Which farewell do YOU say?',options:['E noho rā','Hei konā rā','Mā te wā','Ā ka kite anō'],correct:1},
  {day:'Monday',  q:'"Tēnā koe mō tāu āwhina." What is the speaker doing?',options:['Greeting someone formally','Asking for help','Thanking someone for their help','Saying goodbye'],correct:2},
  {day:'Tuesday', q:'Which linking word means "not only that" — used to expand on a point?',options:['heoi anō','nō reira','kāore noa iho','hei tauira'],correct:2},
  {day:'Tuesday', q:'"Hei tauira, ko te haka tētahi mahi toi rongonui." What is the function of hei tauira?',options:['To conclude an argument','To introduce an example / illustration','To contrast two ideas','To ask a question'],correct:1},
  {day:'Wednesday',q:'"Tōku ake ngākau." What does ake add after the possessive here?',options:['It changes the meaning to "my friends\' heart"','It adds emphasis — my VERY OWN heart, particularly mine','It makes it past tense','It is a filler word with no meaning'],correct:1},
  {day:'Wednesday',q:'Which statement best describes Term 4 fluency?',options:['Knowing all the grammar rules by name','Using structures automatically in service of what you want to say','Writing the longest sentences possible','Translating directly from English'],correct:1},
  {day:'Thursday', q:'"Ko tōku inoi mō koutou." What does inoi mean?',options:['challenge','farewell','wish / prayer','work'],correct:2},
  {day:'Thursday', q:'"Ka nui ōku mihi ki a koutou." What does this sentence express?',options:['I have many problems with you all','My greetings and gratitude to you all are great','We have much work to do together','I wish you would come back'],correct:1},
]

const CURRICULUM_T4W2 = {
  Monday: {
    topic:'He kōrero ā-waha — Oral storytelling techniques',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended oral communication · AO 2.5: Narrative vocabulary · Grammar Level 1–2: Oral storytelling structures',
    aos:[{code:'AO 2.3',label:'Oral storytelling'},{code:'AO 2.5',label:'Narrative vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Telling a story that grips the listener',
      instruction:'Oral storytelling — <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Drero+p%C5%ABr%C4%81kau" target="_blank" rel="noopener">kōrero pūrākau</a> — is one of the oldest and most important skills in te ao Māori. Knowledge was kept in memory and transmitted through story. Today we learn the techniques that make a story gripping when spoken aloud.',
      example:`<b>OPENING the story:</b><br><b>I tērā wā, i tērā wā…</b> — In that time, in that time… (traditional opening), in that time… (traditional opening)<br><b>Nō ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=r%C4%81" target="_blank" rel="noopener">rā</a> o mua…</b> — In the days of old…<br><b>He pō, he pō…</b> — One night, one night… (repetition for effect)<br><br><b>BUILDING tension:</b><br><b>Ā, ka huri noa te ao.</b> — And the world just spun (something changed)<br><b>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ohorere" target="_blank" rel="noopener">ohorere</a> rātou katoa.</b> — They were all startled / taken by surprise<br><b>Kāore he tangata i kite.</b> — No one saw.<br><br><b>CLOSING the story:</b><br><b>Nō reira, ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mutu" target="_blank" rel="noopener">mutu</a>.</b> — And so it ended.<br><b>Tērā ia te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Drero" target="_blank" rel="noopener">kōrero</a>.</b> — That is the story.<br><b>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=huri" target="_blank" rel="noopener">huri</a>.</b> — The telling turns. (traditional close). (traditional close)`,
      demo:`Storytelling techniques:\n\n1. <b>Repetition for emphasis</b>:\n"I tērā wā, i tērā wā…" — repeating sets a rhythm and signals story time\n"He pō, he pō…" — doubling creates atmosphere\n\n2. <b>Short sentences for drama</b>:\n"Ka tū ia. Ka titiro. Kāore he mea." — She stood. She looked. Nothing.\n\n3. <b>Personifying nature</b>:\n"Ka tangi te hau." — The wind cried. (from Term 1!)\n"Ka ngunguru ngā whatitiri." — The thunder growled.\n\n4. <b>Direct speech</b>:\n"Ka mea ia: \'Āe, ka haere au.\'" — She said: "Yes, I will go."\n\nNew words:\n<b>pūrākau</b> — traditional story / myth / legend\n<b>huri noa</b> — just spun/turned (unexpected change)\n<b>Ka huri.</b> — The telling turns. (traditional story ending)`,
      tip:'I tērā wā, i tērā wā… — say it twice. Repetition at the opening tells the listener: we are leaving ordinary time and entering story time. This is ancient technology.',
    },
    weDo:{
      title:'Kia Tūhono — Story techniques in action',
      instruction:'We build a short story together using each technique.',
      sentences:[
        'Open: <b>I tērā wā, i tērā wā, i noho tētahi kōtiro i te taha o te awa.</b> Set the scene — who, where.',
        'Build tension with short Ka sentences: <b>Ka rongo ia i tētahi oro. Ka tū ia. Ka titiro ia.</b>',
        'Use personification: <b>Ka ngunguru te ngahere. Ka tangi te hau i ngā rākau.</b>',
        'Close: <b>Nō reira, ka hoki ia ki tōna kāinga. Ka huri.</b>',
      ],
      prompt:'Ka huri — the telling turns. This traditional ending signals that the story is complete and the teller is returning control to the listeners. Why do oral cultures develop formal story openings and closings? What do they do for the listener that a written story opening and closing can\'t?',
    },
    youDo:{
      title:'Māu Anō — Tell your story',
      instruction:'Write a short pūrākau using the oral storytelling techniques.',
      tasks:[
        'Open with I tērā wā, i tērā wā or Nō ngā rā o mua — establish time, place, character.',
        'Build tension with three short Ka sentences — action, pause, action.',
        'Use at least one personification of nature: Ka [sound word] te [natural element].',
        '✦ Bonus: Write a full pūrākau (10 sentences) — traditional opening, scene-setting, rising action with tension, a moment of surprise (Ka ohorere…), resolution, and Ka huri close. Read it aloud to a partner in your best storytelling voice.',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā rerenga pakiaka — Complex subordinate sentences',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · Grammar Level 1–2: Complex subordination, relative clauses, purpose clauses',
    aos:[{code:'AO 2.3',label:'Complex sentence mastery'},{code:'AO 2.5',label:'Advanced structures'}],
    iDo:{
      title:'Tāua Kōrero — The most complex sentence structures in te reo',
      instruction:'You have ahakoa, mehemea, i te wā, nō te mea. Today we add the final complex structures — relative clauses (describing noun phrases) and purpose clauses (saying why you do something). These are the structures that make te reo truly sophisticated.',
      example:`<b>RELATIVE CLAUSE (ai):</b><br><b>Ko ia te tangata i <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%81whina" target="_blank" rel="noopener">āwhina</a> ai i a mātou.</b><br>She is the person who helped us. (ai marks the relative clause)<br><br><b>Ko tēnei te pukapuka e ako ana ngā ākonga.</b><br>This is the book the students are learning from.<br><br><b>PURPOSE CLAUSE (hei… / mō te…):</b><br><b>I haere au ki te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kura" target="_blank" rel="noopener">kura</a> hei ako i te reo Māori.</b><br>I went to school in order to learn te reo Māori.<br><br><b>I mahi kaha ia mō te toa i te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whakataetae" target="_blank" rel="noopener">whakataetae</a>.</b><br>She worked hard in order to win the competition.<br><br><b>REASON + PURPOSE together:</b><br><b>I ako au nō te mea kei te hiahia au ki te mōhio — hei āwhina i ōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=uri" target="_blank" rel="noopener">uri</a> āpōpō.</b><br>I learned because I want to know — in order to help my descendants tomorrow.`,
      demo:`The relative clause marker <b>ai</b>:\n\nAi appears at the END of a relative clause — it turns a sentence back to describe a noun:\n\n"Ko ia te tangata…" + "i āwhina ia i a mātou" → "Ko ia te tangata i āwhina <b>ai</b> i a mātou."\nShe is the person who helped us.\n\n"Ko tēnei te wā…" + "ka kōrero tātou i tēnei wā" → "Ko tēnei te wā ka kōrero <b>ai</b> tātou."\nThis is the time we speak.\n\nPurpose clause: <b>hei [verb]</b> = in order to [verb]\n"I haere au ki te kura <b>hei</b> ako i te reo Māori."\n\nNew phrase:\n<b>Ko tēnei te wā ka kōrero ai tātou.</b>\nThis is the time for us to speak.`,
      tip:'Ai at the end of a clause says: "look back — this clause is describing the noun I mentioned earlier." Think of it as an arrow pointing backward to the noun.',
    },
    weDo:{
      title:'Kia Tūhono — Complex structures',
      instruction:'Build relative clauses and purpose clauses.',
      sentences:[
        'Relative clause: "She is the person who taught us." → <b>Ko ia te tangata i ako ai i a mātou.</b>',
        'Purpose clause: "I am learning te reo in order to speak with my whānau." → <b>Kei te ako au i te reo Māori hei kōrero me tōku whānau.</b>',
        'Combine: "I worked hard because I want to succeed — in order to help my community." → <b>I mahi kaha au nō te mea kei te hiahia au ki te angitu — hei āwhina i tōku hapori.</b>',
        'Write your own: a relative clause about your teacher, and a purpose clause about why you are here.',
      ],
      prompt:'"Hei āwhina i ōku uri āpōpō" — in order to help my descendants tomorrow. You are a Year 5-6 student. Your descendants are decades away. But you are already thinking about them through this language. What does it mean to learn something NOW for people who do not yet exist?',
    },
    youDo:{
      title:'Māu Anō — Complex sentences',
      instruction:'Write relative clauses and purpose clauses.',
      tasks:[
        'Write two relative clauses using ai: Ko ia te tangata/wāhi/wā… [ai clause].',
        'Write two purpose clauses using hei: I/Kei te [action] au hei [purpose].',
        'Combine reason and purpose: I [action] nō te mea… hei…',
        '✦ Bonus: Write a paragraph (8 sentences) about your te reo learning journey using: a relative clause (ai), a purpose clause (hei), ahakoa, nō te mea, Kua, and Ko te mutunga. Make every structure serve something true.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Extended narrative writing',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended narrative · AO 2.5: Full vocabulary · Grammar Level 1–2: All narrative structures',
    aos:[{code:'AO 2.3',label:'Extended narrative'},{code:'AO 2.5',label:'Narrative vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — A full narrative in te reo Māori',
      instruction:'Today we write a complete narrative — beginning, middle, and end — using everything from four terms. This is the summit of te reo Māori writing for Year 5-6.',
      example:`<b>BEGINNING — set the scene:</b><br>I tērā wā, i tērā wā, i noho tētahi kōtiro, ko Hine, i roto i te ngahere nui o Aotearoa. He ngahere ātaahua, engari he ngahere mōhio hoki — i rongo ia i ngā mea katoa.<br><br><b>MIDDLE — build, tension, crisis:</b><br>I tētahi rā, ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rongo" target="_blank" rel="noopener">rongo</a> a Hine i tētahi <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tangi" target="_blank" rel="noopener">tangi</a> kino i roto i ngā rākau. Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ohorere" target="_blank" rel="noopener">ohorere</a> ia. Ka haere ia ki reira — ka kite ia i tētahi <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=manu" target="_blank" rel="noopener">manu</a> tino iti e mamae ana i tōna <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=parirau" target="_blank" rel="noopener">parirau</a>.<br><br><b>END — resolution, reflection:</b><br>Ka tango a Hine i te manu. Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tiaki" target="_blank" rel="noopener">tiaki</a> ia i a ia ā te wā i ora ai. I te wā i rere anō te manu, ka tangi a Hine — ehara i te pōuri, he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hari" target="_blank" rel="noopener">hari</a> kē. Ka huri.`,
      demo:`Narrative structure in te reo:\n\nBEGINNING: I tērā wā + scene + character introduction\nMIDDLE: Ka sequence + ohorere moment + crisis\nEND: Resolution + reflection + Ka huri\n\nNew words in this narrative:\n<b>parirau</b> — wing\n<b>i ora ai</b> — until it recovered (ora = well, ai = relative marker)\n<b>ehara i te pōuri</b> — it was not sadness\n<b>he hari kē</b> — it was actually joy (kē = on the contrary)\n\nNotice the final line:\n"Ehara i te pōuri, he hari kē."\nNot sadness — actually joy. Kē creates the surprise twist. The tears at the end are tears of happiness, not grief.`,
      tip:'Ehara i te [expected thing] — he [actual thing] kē. This is the te reo pattern for a plot twist or surprise revelation. "It was not what you expected — it was actually this." Master this and your stories will always have a satisfying ending.',
    },
    weDo:{
      title:'Kia Tūhono — Build a narrative',
      instruction:'Together we build a full narrative using the three-part structure.',
      sentences:[
        'BEGINNING: I tērā wā… + character + setting. Who? Where? What is the feeling?',
        'MIDDLE TENSION: Ka rongo ia i… + Ka ohorere ia. + Ka haere ia ki reira.',
        'CRISIS: Ka kite ia i… — describe what they found. Use body vocabulary and E…ana.',
        'END: Ka [resolution]. Ka [reflection]. Ehara i te [expected] — he [actual] kē. Ka huri.',
      ],
      prompt:'Ka tangi a Hine — ehara i te pōuri, he hari kē. The same action (crying) can mean opposite things. The kē creates the twist that reveals the true meaning. What does this teach us about the relationship between language and emotion? Can one word change everything?',
    },
    youDo:{
      title:'Māu Anō — Your pūrākau',
      instruction:'Write a complete original narrative in te reo Māori.',
      tasks:[
        'Write your BEGINNING (3 sentences): I tērā wā + character + setting.',
        'Write your MIDDLE (4 sentences): rising action + Ka ohorere moment + crisis.',
        'Write your END (3 sentences): resolution + reflection + Ka huri.',
        '✦ Bonus: Write your full pūrākau (12 sentences minimum). Use: oral storytelling techniques (repetition, short Ka sentences, personification), all tense markers appropriately, body vocabulary, at least one relative clause (ai), and a kē twist ending.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero pūrākau — Storytelling conversation',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Oral narrative · AO 2.5: Storytelling vocabulary · AO 1.1: Audience and formal register',
    aos:[{code:'AO 2.3',label:'Oral narrative'},{code:'AO 1.1',label:'Formal audience language'}],
    iDo:{
      title:'Tāua Kōrero — Stories as conversation',
      instruction:'In te ao Māori, stories are not just for entertainment — they teach, they connect, they heal. Today we tell stories to each other and talk ABOUT stories — discussing what they mean, what they teach, and what they connect us to.',
      example:`<b>A:</b> He aha tō kōrero pūrākau pai rawa atu?<br><b>B:</b> Ko tōku pūrākau pai rawa atu ko te kōrero mō Māui — ko ia tētahi rangatira o ngā pūrākau Māori.<br><b>A:</b> He aha tā tērā pūrākau e ako ana i a koe?<br><b>B:</b> Ko tā tērā pūrākau mōhio ko te māia o te tangata — ahakoa he pakiaka noa ia, i toa ia i ngā mea tino nui.<br><b>A:</b> Ka pai tāu whakaaro. He aha tō pūrākau ake?<br><b>B:</b> I ngā rā o mua, ko tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kuia" target="_blank" rel="noopener">kuia</a> te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kaip%C5%ABr%C4%81kau" target="_blank" rel="noopener">kaipūrākau</a> o tō mātou whānau. Ka noho mātou ā te pō, ka kōrero ia i ngā kōrero o ō mātou <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C4%ABpuna" target="_blank" rel="noopener">tīpuna</a>.<br><b>A:</b> He taonga tino nui tērā. Tēnā koe mō tāu kōrero.`,
      demo:`New storytelling conversation vocabulary:\n<b>kaipūrākau</b> — storyteller (kai- + pūrākau)\n<b>rangatira o ngā pūrākau</b> — a chief of stories / a hero of legend\n<b>pakiaka noa</b> — just an ordinary person / of humble origin\n<b>tā tērā pūrākau mōhio ko te…</b> — what that story teaches is…\n<b>ko tāu kōrero</b> — your words / your telling\n<b>He aha tā tērā pūrākau e ako ana i a koe?</b>\nWhat does that story teach you?\n<b>Ko tā tērā pūrākau mōhio ko te [lesson].</b>\nWhat that story teaches is [lesson].`,
      tip:'Ko tā tērā pūrākau mōhio ko te [lesson] — what that story teaches is [lesson]. This is the te reo pattern for discussing the moral or meaning of a story. Learn it and you can discuss any pūrākau.',
    },
    weDo:{
      title:'Kia Tūhono — Storytelling conversation',
      instruction:'Build a conversation about a story you know.',
      sentences:[
        'I ask: He aha tō kōrero pūrākau pai rawa atu? Name a story and say why: Ko tōku pūrākau pai rawa atu ko… nō te mea…',
        'I ask: He aha tā tērā pūrākau e ako ana i a koe? Answer: Ko tā tērā pūrākau mōhio ko te…',
        'I ask: He aha tō pūrākau ake? Do you have your own family story? Share a detail.',
        'I say: Tēnā koe mō tāu kōrero. You respond with Tēnā koe hoki.',
      ],
      prompt:'Ko tā tērā pūrākau mōhio ko te māia o te tangata — what that story teaches is the bravery of a person. Every great story teaches something through action, not through statement. What story from your own life — something that actually happened to you — would make a good pūrākau? What would it teach?',
    },
    youDo:{
      title:'Māu Anō — He kōrero pūrākau',
      instruction:'Tell and discuss stories in te reo Māori.',
      tasks:[
        'Name your favourite story (from any culture) and say why: Ko tōku pūrākau pai rawa atu ko… nō te mea…',
        'Write what it teaches: Ko tā tērā pūrākau mōhio ko te…',
        'Describe a kaipūrākau from your own life — someone who told you stories.',
        '✦ Bonus: Write a storytelling conversation (10 lines) with a partner — introduce a story, discuss what it teaches, share a memory of being told a story, and close with Tēnā koe mō tāu kōrero.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T4W2 = [
  {day:'Monday',  q:'"I tērā wā, i tērā wā…" What is the purpose of this opening phrase?',options:['It gives the exact date of the story','Repetition signals entry into story time — leaving ordinary time','It means "once upon a time" and nothing more','It is a formal greeting before a story'],correct:1},
  {day:'Monday',  q:'What is the traditional te reo Māori story ending?',options:['Nō reira ka mutu.','Tērā ia te kōrero.','Ka huri.','Ko te mutunga.'],correct:2},
  {day:'Tuesday', q:'"Ko ia te tangata i āwhina ai i a mātou." What does ai indicate?',options:['Past tense','The end of a relative clause — pointing back to describe "te tangata"','Future intention','A question marker'],correct:1},
  {day:'Tuesday', q:'"I haere au ki te kura hei ako i te reo Māori." What does hei indicate here?',options:['Past tense of going','A purpose clause — in order to learn','A negative','A question'],correct:1},
  {day:'Wednesday',q:'"Ehara i te pōuri, he hari kē." What does kē signal in this sentence?',options:['The feeling is past','The feeling is very strong','Contrary to expectation — it was actually joy, not sadness','The speaker is confused'],correct:2},
  {day:'Wednesday',q:'What are the three parts of a narrative structure in te reo?',options:['Introduction, body, conclusion','Beginning (scene), middle (tension/crisis), end (resolution/reflection)','Problem, solution, evaluation','Past, present, future'],correct:1},
  {day:'Thursday', q:'What is a "kaipūrākau"?',options:['a type of story','a storyteller (kai- + pūrākau)','a traditional opening phrase','a formal greeting'],correct:1},
  {day:'Thursday', q:'"Ko tā tērā pūrākau mōhio ko te māia o te tangata." What does this sentence discuss?',options:['The title of the story','The author of the story','What the story teaches — the bravery of a person','How long the story is'],correct:2},
]

const CURRICULUM_T4W3 = {
  Monday: {
    topic:'He kōrero māpuna — Figurative language and imagery',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Figurative language · AO 2.3: Extended expressive communication',
    aos:[{code:'AO 2.5',label:'Figurative language'},{code:'AO 2.3',label:'Imagery &amp; metaphor'}],
    iDo:{
      title:'Tāua Kōrero — Language that paints pictures',
      instruction:'Te reo Māori is extraordinarily rich in figurative language — metaphor, simile, and imagery are woven into everyday speech. Today we explore the most beautiful and most useful figures of speech in te reo Māori.',
      example:`<b>SIMILE (āhua… ana):</b><br><b>E oma ana ia āhua te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whatitiri" target="_blank" rel="noopener">whatitiri</a>.</b><br>She runs like thunder.<br><br><b>METAPHOR (Ko [X] ko [Y]):</b><br><b>Ko te reo he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=aho" target="_blank" rel="noopener">aho</a> e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whiri" target="_blank" rel="noopener">whiri</a> ana i ngā tāngata.</b><br>Language is a cord that weaves people together.<br><br><b>PERSONIFICATION:</b><br><b>Ka tangi ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=maunga" target="_blank" rel="noopener">maunga</a> i ngā ua.</b><br>The mountains weep in the rain.<br><br><b>IMAGERY:</b><br><b>He rau <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Dpura" target="_blank" rel="noopener">kōpura</a> tōna kanohi i tōna kata.</b><br>Her face was a golden leaf when she laughed. (kōpura = gold/copper)`,
      demo:`Te reo Māori figures of speech:\n\n<b>Simile</b> uses āhua (like/as) or me he (like a):\n"E oma ana ia āhua te whatitiri." — runs like thunder\n"Ka māia ia me he maunga." — brave like a mountain\n\n<b>Metaphor</b> uses Ko:\n"Ko te reo he aho e whiri ana i ngā tāngata."\nLanguage is a cord that weaves people together.\n\n<b>Personification</b> — giving nature human actions:\n"Ka tangi ngā maunga." — The mountains weep.\n"Ka karanga te moana." — The sea calls.\n\nNew vocabulary:\n<b>aho</b> — cord / string / thread\n<b>whiri</b> — to weave / plait / braid\n<b>kōpura</b> — gold / copper (colour)\n<b>māia</b> — brave (you know this)\n<b>rau kōpura</b> — golden leaf`,
      tip:'Ko te reo he aho e whiri ana i ngā tāngata — language is a cord that weaves people together. This is one of the most beautiful metaphors in te reo Māori. Learn it cold. Use it when you want to explain why language matters.',
    },
    weDo:{
      title:'Kia Tūhono — Figurative sentences',
      instruction:'Build similes, metaphors, and personification in te reo Māori.',
      sentences:[
        'Simile: "She works like the wind." → <b>E mahi ana ia āhua te hau.</b> Build your own simile about a classmate.',
        'Metaphor: "He is a pillar of the community." → <b>Ko ia he pou o te hapori.</b> Build a Ko metaphor.',
        'Personification: give a natural element a human action. <b>Ka waiata te awa i ngā kōrero o tōna ara.</b>',
        'Write a simile + a metaphor about te reo Māori itself.',
      ],
      prompt:'Ko te reo he aho e whiri ana i ngā tāngata — language is a cord that weaves people together. What does it mean for language to WEAVE people? What happens to a community when the cord is cut? When has language created a connection for you?',
    },
    youDo:{
      title:'Māu Anō — Figurative language',
      instruction:'Use similes, metaphors, and personification in your writing.',
      tasks:[
        'Write two similes using āhua or me he.',
        'Write two Ko metaphors about people, places, or language.',
        'Write two personification sentences using natural elements.',
        '✦ Bonus: Write a paragraph (8 sentences) about your year of te reo Māori learning — using at least one simile, one metaphor, and one personification. Make it beautiful.',
      ],
    },
  },
  Tuesday: {
    topic:'He kōrero whakaaro — Expressing opinions with sophistication',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended opinions · Grammar Level 1–2: Sophisticated opinion structures',
    aos:[{code:'AO 2.3',label:'Sophisticated opinions'},{code:'AO 2.5',label:'Evaluative language'}],
    iDo:{
      title:'Tāua Kōrero — Saying what you think, elegantly',
      instruction:'You have Ko tāku whakaaro (my thought), He pai ake (better), and debate language. Today we add the final layer of opinion expression — how to say what you think with nuance, qualification, and elegance.',
      example:`<b>STATING a strong opinion:</b><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=E+ai+ki" target="_blank" rel="noopener">E ai ki</a> āku whakaaro…</b> — According to my thinking…<br><b>Ko tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C5%AB%C4%81huatanga" target="_blank" rel="noopener">tūāhuatanga</a> ko te…</b> — My position is that…<br><br><b>QUALIFYING an opinion:</b><br><b>I ētahi wā…</b> — Sometimes…<br><b>Ka mutu, ko tōku whakaaro…</b> — All things considered, my view is…<br><b>Ahakoa ōna āhuatanga…</b> — Despite its qualities…<br><br><b>CONCEDING a point:</b><br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tika" target="_blank" rel="noopener">tika</a> tāu ki tērā āhuatanga.</b> — You are right about that point.<br><b>Āe, he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=pono" target="_blank" rel="noopener">pono</a> tērā — engari rā…</b> — Yes, that is true — however…<br><br><b>CLOSING a view:</b><br><b>Nō reira, ko tōku whakaaro <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C5%8Dtika" target="_blank" rel="noopener">mōtika</a> ko te…</b><br>Therefore, my considered view is…`,
      demo:`Sophisticated opinion structures:\n\n<b>E ai ki āku whakaaro</b> — more formal than Ko tāku whakaaro\n<b>Ka mutu</b> — all things considered / when it is done\n<b>mōtika</b> — correct / right / genuine\n<b>Ko tōku whakaaro mōtika</b> — my considered/genuine view\n<b>He pono tērā</b> — that is true\n<b>Āe, he pono tērā — engari rā…</b>\nYes, that is true — however…\n\nNew words:\n<b>mōtika</b> — correct / genuine / right\n<b>Ka mutu</b> — all things considered / when all is said\n<b>E ai ki</b> — according to\n<b>tūāhuatanga</b> — position / characteristic`,
      tip:'Āe, he pono tērā — engari rā. "Yes, that is true — however." This is the most graceful way to concede a point before making your counter-argument. It shows you have listened. In te ao Māori, showing you have heard someone before you respond is a mark of respect.',
    },
    weDo:{
      title:'Kia Tūhono — Sophisticated opinions',
      instruction:'Express opinions with nuance and elegance.',
      sentences:[
        'Strong position: E ai ki āku whakaaro, ko te reo Māori te taonga nui rawa atu o Aotearoa.',
        'Qualify: Ka mutu, ko tōku whakaaro… + your opinion on a topic with some nuance.',
        'Concede + counter: Āe, he pono tērā… engari rā… + your counter-argument.',
        'Close: Nō reira, ko tōku whakaaro mōtika ko te… + your final position.',
      ],
      prompt:'Āe, he pono tērā — engari rā. When you say "yes, that is true" before arguing your point, you show you have genuinely listened. This is the opposite of winning an argument — it is trying to reach understanding. What would happen if all debates worked this way?',
    },
    youDo:{
      title:'Māu Anō — Sophisticated opinion writing',
      instruction:'Write a sophisticated opinion piece in te reo Māori.',
      tasks:[
        'State position: E ai ki āku whakaaro, ko [topic] te [opinion].',
        'Qualify: Ka mutu, i ētahi wā… (acknowledge complexity).',
        'Concede and counter: Āe, he pono tērā — engari rā…',
        '✦ Bonus: Write a full opinion piece (8 sentences) about te reo Māori, kaitiakitanga, or education. Use: E ai ki āku whakaaro, Ka mutu, Āe he pono tērā engari rā, Ko tōku whakaaro mōtika, and Ko te mutunga.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Year-long structure review',
    nzLink:'Te Aho Arataki Marau — All AOs Terms 1–4 · All grammar structures consolidated',
    aos:[{code:'AO 2.3',label:'Full year review'},{code:'AO 2.5',label:'Complete vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — The complete four-term picture',
      instruction:'This is Term 4 Week 3. Today we put the entire year on the table — every structure, every domain, every AO — and see the full picture of what you have built.',
      example:`<b>EVERYTHING you can now do:</b><br><br>GREET & FAREWELL at every level of formality<br>INTRODUCE yourself with a full pepeha<br>DESCRIBE people, places, feelings, weather, nature, arts<br>RECOUNT past events with I and Ka<br>NARRATE stories with Ka and oral techniques<br>EXPRESS ongoing actions with E…ana and Kua<br>COMMIT to future actions with māku e and Ka taea<br>NEGATE in present and past with Kāore<br>ARGUE and persuade with taunakitanga and discourse markers<br>EXPLAIN meanings with Ko te tikanga o…<br>EVALUATE learning with ngāwari/uaua and Ka taea<br>DISCUSS culture, art, environment, science, rights<br>PERFORM a pepeha, a pōhiri, a whaikōrero`,
      demo:`The year in one sentence:\n\n<b>"Ko ahau ko [name] — he ākonga māia, he kaitiaki o tēnei reo rangatira; e ako tonu ana au, kua tipu tōku reo, ā ka kōrero māmā ake au i ia rā, i ia rā — nō reira, ko tōku moemoeā: ka toitū tēnei reo tapu mō ōku uri ā āpōpō."</b>\n\n→ Ko identity\n→ He description ×2\n→ E…ana progressive\n→ Kua perfect\n→ Ka narrative\n→ Nō reira conclusion\n→ Ko moemoeā dream\n→ Ka toitū endurance\n→ Relative: mō ōku uri ā āpōpō (for my future descendants)\n\nThat is one year of daily practice in one sentence.`,
      tip:'Read that sentence aloud. Slowly. Every word of it is yours. You built this. Ka tino pai tāu mahi.',
    },
    weDo:{
      title:'Kia Tūhono — Year-long blitz',
      instruction:'The fastest comprehensive review of the year.',
      sentences:[
        'PEPEHA: One student — full nine lines from memory. Class supports.',
        'STRUCTURES: Call out a structure — class gives an example sentence. Ko, He, Kei te, I, Ka, Kua, E…ana, Kāore, ahakoa, ai, hei…',
        'WHAKATAUKĪ: All four from Term 3 Week 8 — who can say them all?',
        'SHOWCASE: Each student says the single best te reo sentence they have ever produced.',
      ],
      prompt:'Ka tino pai tāu mahi — your work is genuinely, truly excellent. Not just good — tino good. You have earned this. What would your Week 1 Term 1 self think if they heard the sentence you just said?',
    },
    youDo:{
      title:'Māu Anō — Four-term audit',
      instruction:'Your final comprehensive vocabulary and structure audit.',
      tasks:[
        'Write every te reo word you know in 5 minutes. Count them. Compare to Week 1.',
        'Write one sentence using each of the 14 structures from the I Do.',
        'Write your best sentence of the year — and why it is your best.',
        '✦ Bonus: Write the year-summary sentence above in your own words — make every part true for you. Then write a second version that is even better.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero māmā — Spontaneous conversation',
    nzLink:'Te Aho Arataki Marau — All AOs · AO 2.3: Spontaneous extended conversation',
    aos:[{code:'AO 2.3',label:'Spontaneous conversation'},{code:'AO 2.5',label:'Full vocabulary in conversation'}],
    iDo:{
      title:'Tāua Kōrero — The spontaneous conversation',
      instruction:'The highest goal of language learning is spontaneous conversation — talking freely, without a script, responding to what the other person actually says. Today we practise this. No models, no sentence frames — just conversation.',
      example:`<b>CONVERSATION STARTERS you know:</b><br>He pēhea tōu wiki? · He aha ngā mea hou? · Ko ēhea āu hiahia?<br>He aha tō whakaaro mō…? · He aha tāu e tūmanako ana?<br>Ko wai tōu hoa pai rawa atu? · He aha tā tērā pūrākau e ako ana?<br><br><b>CONVERSATION EXTENDERS:</b><br><b>Ā nā?</b> — And then? / What happened next?<br><b>Pērā?</b> — Like that? / Really?<br><b>He aha tāu e kī ana?</b> — What do you mean?<br><b>Ka pai tāu kōrero — heoi anō…</b> — Good point — however…<br><b>Nā wai rā…</b> — Eventually… / As time went on…<br><b>Ā koia!</b> — Exactly! / That's it!`,
      demo:`Tools for keeping a conversation going:\n\n<b>Ā nā?</b> — the simplest conversation extender. "And then?" invites the other person to continue.\n\n<b>Pērā?</b> — "Like that?" shows you are surprised and engaged.\n\n<b>Ā koia!</b> — "Exactly!" shows enthusiastic agreement. Use it to confirm and encourage.\n\n<b>Nā wai rā…</b> — "Eventually / as time went on…" moves a story forward in time.\n\n<b>He aha tāu e kī ana?</b> — "What do you mean?" — asking for clarification. This is one of the most important phrases in any language.\n\nNew word:\n<b>Ā koia!</b> — Exactly! That\'s it! (an emphatic agreement)\n<b>Nā wai rā</b> — Eventually / Over time / As things progressed`,
      tip:'Ā nā? is the single most useful conversation extender in any language. "And then?" makes the other person feel listened to and invites them to continue. Use it constantly.',
    },
    weDo:{
      title:'Kia Tūhono — Spontaneous conversation practice',
      instruction:'Pairs. Teacher gives a starting topic — students talk freely. No scripts.',
      sentences:[
        'Topic 1: He pēhea tōu wiki? Start — extend with Ā nā? — agree with Ā koia! — disagree with Āe, he pono tērā engari rā…',
        'Topic 2: He aha tōu moemoeā mō te reo Māori? Start — ask He aha tāu e kī ana? for clarification.',
        'Topic 3: He aha te pūrākau pai rawa atu ki a koe? Start — extend with Nā wai rā…',
        'Topic 4: He aha tō whakaaro mō tō kura? Start — use Pērā? for surprise.',
      ],
      prompt:'He aha tāu e kī ana? — What do you mean? This question shows that you are genuinely trying to understand, not just waiting for your turn to speak. In te ao Māori, listening and understanding before responding is a value. How would conversations change if everyone used this question more?',
    },
    youDo:{
      title:'Māu Anō — Free conversation',
      instruction:'Have a fully spontaneous conversation with a partner in te reo Māori — 5 minutes, no script, any topic.',
      tasks:[
        'Choose your topic together — something you both genuinely care about.',
        'Use at least three conversation extenders: Ā nā, Pērā, Ā koia, He aha tāu e kī ana.',
        'Try to include at least one whakataukī or figurative expression naturally.',
        '✦ Bonus: Record your conversation (written transcript or voice note). After, count how many different structures and vocabulary domains you used naturally. This is evidence of your fluency.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T4W3 = [
  {day:'Monday',  q:'"E oma ana ia āhua te whatitiri." What figure of speech is this?',options:['metaphor','personification','simile','alliteration'],correct:2},
  {day:'Monday',  q:'"Ko te reo he aho e whiri ana i ngā tāngata." What does aho mean?',options:['river','cord / string / thread','mountain','ancestor'],correct:1},
  {day:'Tuesday', q:'"E ai ki āku whakaaro…" What does this phrase signal?',options:['A question is coming','A formal greeting','The speaker is about to state their opinion','A past event'],correct:2},
  {day:'Tuesday', q:'"Āe, he pono tērā — engari rā…" What is the speaker doing?',options:['Agreeing completely','Conceding a point graciously before making a counter-argument','Ending the discussion','Asking for clarification'],correct:1},
  {day:'Wednesday',q:'Which sentence correctly uses the relative clause marker ai?',options:['Ko ia te tangata ai āwhina i a mātou','Ko ia te tangata i āwhina ai i a mātou','Ko ia te tangata āwhina ai','I āwhina ai ia ko ia te tangata'],correct:1},
  {day:'Wednesday',q:'"Ka tino pai tāu mahi." What does tino add to this sentence?',options:['It makes the sentence past tense','It makes the praise genuinely / truly excellent — more emphatic','It makes it a question','It negates the sentence'],correct:1},
  {day:'Thursday', q:'"Ā koia!" What does this expression mean?',options:['And then?','What do you mean?','Exactly! / That\'s it!','Eventually'],correct:2},
  {day:'Thursday', q:'"He aha tāu e kī ana?" — What is the speaker doing?',options:['Agreeing','Asking for clarification — what do you mean?','Ending the conversation','Giving an opinion'],correct:1},
]

const CURRICULUM_T4W4 = {
  Monday: {
    topic:'He kōrero mō āpōpō — Future, plans, and aspirations',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 2.4: Future time · Grammar Level 1–2: Future tense mastery',
    aos:[{code:'AO 2.4',label:'Future &amp; aspirations'},{code:'AO 2.3',label:'Extended planning language'}],
    iDo:{
      title:'Tāua Kōrero — Talking about the future with confidence',
      instruction:'You have hiahia, māku e, Ka taea, and Ka for future narrative. Today we consolidate the full future toolkit and add the most aspirational language — talking about what you hope for, dream of, and intend to make happen.',
      example:`<b>IMMEDIATE FUTURE (Ka):</b><br><b>Ka haere au āpōpō.</b> — I will go tomorrow.<br><br><b>INTENTION (māku/māna e):</b><br><b>Māku e tiaki i tēnei reo.</b> — I will protect this language.<br><br><b>HOPE (tūmanako):</b><br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C5%ABmanako" target="_blank" rel="noopener">tūmanako</a> au ka [future hope].</b><br>I hope that [future hope] will happen.<br><br><b>DREAM (moemoeā):</b><br><b>Ko tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=moemoe%C4%81" target="_blank" rel="noopener">moemoeā</a>: ka [dream].</b><br>My dream is: that [dream] will happen.<br><br><b>ASPIRATION (wawata):</b><br><b>Ko tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=wawata" target="_blank" rel="noopener">wawata</a>: ka [aspiration].</b><br>My aspiration is: [aspiration].`,
      demo:`The future language spectrum:\n\nIMMEDIATE → Ka [verb] āpōpō (happening soon)\nINTENTION → Māku e [verb] (I commit to this)\nHOPE → Kei te tūmanako au ka… (I hope this happens)\nDREAM → Ko tōku moemoeā: ka… (deep personal dream)\nASPIRATION → Ko tōku wawata: ka… (highest aspiration)\n\n<b>wawata</b> — aspiration / deepest longing / what you reach for\n<b>wawata</b> is stronger than moemoeā — it is not just a dream but a deep reaching-toward\n\nNew word:\n<b>wawata</b> — deep aspiration / yearning\n<b>angitu</b> — success / achievement\n<b>Ka angitu koe.</b> — You will succeed.`,
      tip:'Moemoeā = dream (what you hope for in sleep and waking). Wawata = what you reach toward with your whole being — the deepest aspiration. Use moemoeā for personal dreams, wawata for the things that define your life direction.',
    },
    weDo:{
      title:'Kia Tūhono — Future language spectrum',
      instruction:'Express the same idea at different levels of future commitment.',
      sentences:[
        'Immediate Ka: <b>Ka ako au i te reo Māori āpōpō.</b> Now make it an intention: <b>Māku e ako i te reo Māori.</b>',
        'Hope: <b>Kei te tūmanako au ka [something you hope will happen to your class next year].</b>',
        'Dream: <b>Ko tōku moemoeā: ka kōrero tōku whānau katoa i te reo Māori.</b>',
        'Aspiration: <b>Ko tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=wawata" target="_blank" rel="noopener">wawata</a>: ka toitū tēnei reo tapu mō ōku uri ā āpōpō.</b>',
      ],
      prompt:'Ko tōku wawata — my deepest aspiration. The word wawata contains the idea of reaching outward and upward. In te ao Māori, a wawata is not just a personal desire — it often connects to the wellbeing of others. What is YOUR wawata? Does it only affect you — or does it reach further?',
    },
    youDo:{
      title:'Māu Anō — Future and aspiration language',
      instruction:'Write about your future using all five levels of the future language spectrum.',
      tasks:[
        'Write a Ka sentence about something happening soon.',
        'Write a māku e commitment about something you will do.',
        'Write a tūmanako hope about something you hope will happen.',
        '✦ Bonus: Write a full future statement (8 sentences) — immediate plans, intentions, hopes, a moemoeā, and a wawata. Make the wawata the most ambitious and true thing you say. Close with Ka angitu koe — You will succeed.',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā kupu hou whakamutunga — Final new vocabulary for the year',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Advanced vocabulary · AO 2.3: Extended communication · All AOs',
    aos:[{code:'AO 2.5',label:'Advanced vocabulary'},{code:'AO 2.3',label:'Full communication'}],
    iDo:{
      title:'Tāua Kōrero — The final vocabulary additions',
      instruction:'These are the last new vocabulary words of the year — carefully chosen to round out your te reo Māori and give you a few more powerful tools for the end-of-year assessment and beyond.',
      example:`<b>For describing growth and change:</b><br><b>tipu</b> — grow (you know this) · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=huri" target="_blank" rel="noopener">huri</a></b> — change / turn · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hou" target="_blank" rel="noopener">hou</a></b> — new<br><b>Ka hou tōku whakaaro.</b> — My thinking has become new / I think differently.<br><br><b>For describing connection:</b><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=honohono" target="_blank" rel="noopener">honohono</a></b> — to connect / link<br><b>Ka honohono tēnei reo i ngā tāngata.</b><br>This language connects people.<br><br><b>For describing achievement:</b><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=angitu" target="_blank" rel="noopener">angitu</a></b> — success · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=toa" target="_blank" rel="noopener">toa</a></b> — win/champion · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=eke" target="_blank" rel="noopener">eke</a></b> — rise/climb/score<br><b>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=angitu" target="_blank" rel="noopener">angitu</a> koe i āu mahi.</b> — You will succeed in your work.<br><br><b>For describing legacy:</b><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tuku+iho" target="_blank" rel="noopener">tuku iho</a></b> — passed down / handed down (generations) / handed down (generations)<br><b>taonga <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tuku+iho" target="_blank" rel="noopener">tuku iho</a></b> — a treasure handed down<br><b>He taonga tuku iho tēnei reo.</b> — This language is a treasure handed down.`,
      demo:`Final vocabulary — how each word connects to the year:\n\n<b>honohono</b> — connects back to aho (cord) and whiri (weave). Language connects.\n<b>angitu</b> — connects back to Ka taea (able) and toa (champion). You have succeeded.\n<b>tuku iho</b> — connects back to uri (descendants) and tīpuna (ancestors). The chain of generations.\n<b>Ka hou tōku whakaaro</b> — connects back to whakaaro (thought) and tipu (grow). Your thinking has grown new.\n\nThese are not random new words — each one closes a circle from earlier in the year.\n\nNew compound:\n<b>honohono</b> = hono (join) + hono (repeated for intensity) = to deeply connect`,
      tip:'He taonga tuku iho tēnei reo — this language is a treasure passed down. You have heard taonga throughout the year. You have heard tuku iho in Term 3. Now they come together in your final week. The phrase was always waiting for you at the end of the year.',
    },
    weDo:{
      title:'Kia Tūhono — Final vocabulary in action',
      instruction:'Use each new word in a sentence that connects it back to the year.',
      sentences:[
        'Honohono: <b>Ka honohono tēnei reo i ōku hoa, i ōku tīpuna, i ōku uri katoa.</b> Who does it connect?',
        'Angitu: <b>Ka angitu koe — kua tino pai tāu mahi i tēnei tau.</b> What has been your angitu?',
        'Tuku iho: <b>He taonga tuku iho tēnei reo — nā ōku tīpuna ki a au, ā māku ki ōku uri.</b>',
        'Hou: <b>Ka hou tōku whakaaro mō te reo Māori i tēnei tau.</b> How has your thinking changed?',
      ],
      prompt:'Nā ōku tīpuna ki a au, ā māku ki ōku uri — from my ancestors to me, and from me to my descendants. You are in the middle of this chain. What did your ancestors give you through language? What will you give your descendants?',
    },
    youDo:{
      title:'Māu Anō — Final vocabulary sentences',
      instruction:'Use the final year vocabulary in sentences that are true and meaningful.',
      tasks:[
        'Write a honohono sentence about what te reo Māori connects you to.',
        'Write an angitu sentence about something you have achieved this year.',
        'Write a taonga tuku iho sentence about the language.',
        '✦ Bonus: Write a four-sentence statement about your year of te reo Māori — using honohono, angitu, tuku iho, and Ka hou tōku whakaaro. Make every word count.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — The year in sentences',
    nzLink:'Te Aho Arataki Marau — All AOs · All sentence types · Full year synthesis',
    aos:[{code:'AO 2.3',label:'Year synthesis'},{code:'AO 2.5',label:'Full expression'}],
    iDo:{
      title:'Tāua Kōrero — Writing the year',
      instruction:'Today we do something special — we write about the whole year. Not as a summary, but as a piece of genuine te reo expression that captures what this year of language learning has been and meant.',
      example:`<b>A year in nine sentences — one structure per term/topic:</b><br><br>Ko ahau ko [name] — he ākonga, he kaitiaki, he tangata o tēnei ao. (Ko · He)<br>I <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C4%ABmata" target="_blank" rel="noopener">tīmata</a> au i tētahi kupu inanahi — ināianei, kua tipu tōku reo ki tētahi mea hou. (I · Kua)<br>E ako tonu ana au — e huri ana tōku whakaaro i ia rā, i ia rā. (E…ana ×2)<br>Ka taea e au te mihi, ka taea e au te tuhituhi, ka taea e au te whakaaro i te reo Māori. (Ka taea ×3)<br>Ko te reo he aho e whiri ana i a au ki ngā tīpuna, ki ngā uri, ki ngā hoa o tōku ao. (Ko metaphor · ai)<br>Ahakoa he uauatanga, i mahi tonu au — nō te mea ko tōku moemoeā tōku ara. (Ahakoa · Nō te mea · Ko)<br>He taonga <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tuku+iho" target="_blank" rel="noopener">tuku iho</a> tēnei reo — māku e tiaki, māku e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whakaahua" target="_blank" rel="noopener">whakaahua</a> ake. (He · māku e ×2)<br>Nō reira, ko tōku wawata: ka toitū tēnei reo rangatira mō āpōpō ō ngā uri. (Nō reira · Ko wawata · Ka)<br>Ka angitu koe. Ka angitu mātou katoa. Ka huri. (Ka ×3 · Ka huri)`,
      demo:`Count the structures in those nine sentences:\nKo (×5), He (×4), I (past), Kua (perfect), E…ana (×2), Ka taea (×3), ai (relative), Ahakoa, Nō te mea, māku e (×2), Ko wawata, Ka (×4), Ka huri\n\nThat is the whole year in nine sentences. You can write every one of them.\n\nNotice the final line:\n"Ka angitu koe. Ka angitu mātou katoa. Ka huri."\nYou will succeed. We will all succeed. The telling turns.\n\nEven the ending is a pūrākau technique — Ka huri closes the year the way it closes a story.`,
      tip:'Ka huri — the telling turns. This traditional story ending can also close a year. The year was a story. It had a beginning, a middle, and an end. Ka huri.',
    },
    weDo:{
      title:'Kia Tūhono — Write the year together',
      instruction:'Class writes one shared "year in sentences" — each student contributes one sentence.',
      sentences:[
        'Student 1: A Ko identity sentence about who we are as a class.',
        'Student 2: A Kua sentence about what has been completed this year.',
        'Student 3: An E…ana sentence about what is still ongoing in our learning.',
        'Continue until every student has contributed. Close together: Ka angitu tātou katoa. Ka huri.',
      ],
      prompt:'Ka angitu koe. Ka angitu mātou katoa. Ka huri. Success is named for you individually, then for all of us together, then the year turns. Why does the order matter — you first, then all of us? What does it say about how achievement in te ao Māori is understood?',
    },
    youDo:{
      title:'Māu Anō — The year in your sentences',
      instruction:'Write your own "year in sentences" — nine sentences, one per major structure.',
      tasks:[
        'Write sentences 1–3: Ko identity, Kua perfect, E…ana progressive.',
        'Write sentences 4–6: Ka taea ability, Ko metaphor with ai, Ahakoa + nō te mea.',
        'Write sentences 7–9: māku e commitment, Ko wawata, Ka huri.',
        '✦ Bonus: Refine all nine until each one is truly beautiful and true. Read the whole passage aloud. This is your year. Own it.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero whakaaro — A philosophical conversation',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended sophisticated conversation · All AOs',
    aos:[{code:'AO 2.3',label:'Philosophical conversation'},{code:'AO 2.5',label:'Sophisticated vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Talking about big ideas',
      instruction:'The most advanced thing you can do in a language is discuss abstract ideas — concepts like time, identity, belonging, language, and legacy. Today we have that conversation in te reo Māori.',
      example:`<b>A:</b> He aha te tikanga o te reo ki a koe ināianei, i tērā tau ake?<br><b>B:</b> I tērā tau, he mea ngaro noa iho te reo ki a au. Ināianei, ko ia tōku ara, tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hono" target="_blank" rel="noopener">hono</a> ki ngā tīpuna.<br><b>A:</b> Ka pai tērā. He aha tā tēnei reo i homai ai ki a koe?<br><b>B:</b> I homai mai e ia ki a au he ara ki te ao hou — arā, ki ngā kupu o ōku tīpuna, ki ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C5%8Dhiotanga" target="_blank" rel="noopener">mōhiotanga</a> hou, ki ōku hoa hou.<br><b>A:</b> E ai ki āku whakaaro, ko te reo he aho e whiri ana i ngā tāngata katoa. He tika tāu whakaaro?<br><b>B:</b> Āe, he tika — waihoki, ko te reo he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81ramatanga" target="_blank" rel="noopener">māramatanga</a> ki te ao mārama. Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=honohono" target="_blank" rel="noopener">honohono</a> ia i te ao o nāianei ki te ao o ōku tīpuna.<br><b>A:</b> Ā koia! Tēnā koe mō tāu kōrero tino <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=h%C5%8Dhonu" target="_blank" rel="noopener">hōhonu</a>.<br><b>B:</b> Tēnā koe hoki.`,
      demo:`New philosophical vocabulary:\n<b>he mea ngaro noa iho</b> — just an invisible/lost thing (ngaro = invisible/lost, noa iho = just/merely)\n<b>ara ki te ao hou</b> — a path to the new world\n<b>māramatanga ki te ao mārama</b> — enlightenment to the world of light\n<b>ao o nāianei</b> — the world of today (nāianei = nowadays)\n<b>tino hōhonu</b> — very deep / profound (hōhonu = deep)\n<b>Tēnā koe mō tāu kōrero tino hōhonu.</b>\nThank you for your very profound words.\n<b>he aho e whiri ana</b> — a cord that weaves (from Week 3!)`,
      tip:'Ko te reo he māramatanga ki te ao mārama — the language is an enlightenment to the world of light. This brings together māramatanga (understanding/enlightenment) and ao mārama (world of light — both the realm of the living and the realm of clarity). Language as light.',
    },
    weDo:{
      title:'Kia Tūhono — Philosophical conversation',
      instruction:'Have a conversation about language, identity, and meaning.',
      sentences:[
        'I ask: He aha te tikanga o te reo ki a koe ināianei? Answer with a metaphor or deep statement.',
        'I ask: He aha tā tēnei reo i homai ai ki a koe? Answer: I homai mai e ia ki a au he…',
        'I make a claim: Ko te reo he aho e whiri ana i ngā tāngata. You agree or add: Āe, waihoki…',
        'I close: Tēnā koe mō tāu kōrero tino hōhonu. You respond: Tēnā koe hoki.',
      ],
      prompt:'Ko te reo he māramatanga ki te ao mārama. Language as light, as enlightenment, as access to a brighter world. What does language actually give you access to that you would not have without it? Think specifically — what can you understand, feel, or know in te reo Māori that you cannot in English?',
    },
    youDo:{
      title:'Māu Anō — Philosophical writing',
      instruction:'Write your own philosophical reflection on language and identity.',
      tasks:[
        'Answer: He aha te tikanga o te reo ki a koe? (Not "te reo Māori is important" — something deeper.)',
        'Write a metaphor: Ko te reo he [metaphor] — with an e…ana relative clause.',
        'Write what language has given you: I homai mai e ia ki a au he…',
        '✦ Bonus: Write a full philosophical reflection (8 sentences) — what language means to you, what it has given you, a whakataukī, a metaphor, a wawata, and close with Ko te reo he māramatanga ki te ao mārama — ko tērā tōku whakapono.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T4W4 = [
  {day:'Monday',  q:'What is the difference between moemoeā and wawata?',options:['They mean exactly the same thing','Moemoeā is a dream; wawata is a deeper aspiration/yearning — what you reach toward with your whole being','Moemoeā is formal; wawata is casual','Wawata is about the past; moemoeā is about the future'],correct:1},
  {day:'Monday',  q:'"Ka angitu koe." What does angitu mean?',options:['you will leave','you will succeed / achieve','you will speak','you will learn'],correct:1},
  {day:'Tuesday', q:'"He taonga tuku iho tēnei reo." What does tuku iho mean?',options:['recently created','belonging to one person','passed down through generations','difficult to learn'],correct:2},
  {day:'Tuesday', q:'What does "honohono" mean?',options:['to weave clothing','to separate / divide','to deeply connect / link','to speak formally'],correct:2},
  {day:'Wednesday',q:'The passage ends with "Ka huri." In what other context is this phrase used?',options:['As a formal greeting','As a weather expression','As the traditional close of an oral story (pūrākau)','As a way to say goodbye'],correct:2},
  {day:'Wednesday',q:'"Ko ia tōku ara, tōku hono ki ngā tīpuna." What two things is the language being called?',options:['a path and a cord of connection','a treasure and a dream','a challenge and a reward','a light and a gift'],correct:0},
  {day:'Thursday', q:'"Ko te reo he māramatanga ki te ao mārama." What does māramatanga mean?',options:['darkness / confusion','difficulty / challenge','enlightenment / understanding / clarity','silence'],correct:2},
  {day:'Thursday', q:'"Tēnā koe mō tāu kōrero tino hōhonu." What does hōhonu mean?',options:['short','confusing','loud','deep / profound'],correct:3},
]

const CURRICULUM_T4W5 = {
  Monday: {
    topic:'He kōrero mō ōku ara ako — My learning pathways',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended reflection · All AOs consolidated · Whakaaro ako (metacognition)',
    aos:[{code:'AO 2.3',label:'Learning reflection'},{code:'AO 2.5',label:'Metacognitive vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Thinking about your thinking',
      instruction:'In this second-to-last week, we turn inward — thinking about HOW we have learned, what strategies worked, and what kind of learner we have become. This is metacognition — thinking about thinking — expressed in te reo Māori.',
      example:`<b>He aha tāu <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ara+ako" target="_blank" rel="noopener">ara ako</a>?</b> — What is your learning strategy/pathway?<br><br><b>Ko tōku ara ako ko te [strategy].</b><br>My learning strategy is [strategy].<br><br><b>Ko ngā ara ako pai ki a au ko ēnei:</b><br>he kōrero, he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whakarongo" target="_blank" rel="noopener">whakarongo</a>, he tuhituhi, he mahi tahi.<br>The learning strategies that work for me are: speaking, listening, writing, working together.<br><br><b>I tipu ōku ara ako i tēnei tau.</b><br>My learning strategies grew this year.<br><br><b>Ka pai ake tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ako" target="_blank" rel="noopener">ako</a> ina [condition].</b><br>I learn better when [condition].`,
      demo:`Metacognitive vocabulary:\n<b>ara ako</b> — learning pathway / learning strategy\n<b>whakaaro hōhonu</b> — deep thinking / reflection\n<b>Ka pai ake tōku ako ina kōrero ana au.</b>\nI learn better when I speak.\n\n<b>He mōhiotanga ōku e pā ana ki te reo Māori.</b>\nI have knowledge relating to te reo Māori.\n\n<b>Kua tino pai ake tōku mōhio i…</b>\nMy understanding of [X] has become much better.\n\n<b>I tipu ōku ara ako i tēnei tau nō te mea…</b>\nMy learning strategies grew this year because…\n\nNew words:\n<b>metacognition (whakaaro mō te whakaaro)</b>\n<b>mōhiotanga</b> — knowledge / understanding\n<b>e pā ana ki</b> — relating to / concerning`,
      tip:'Ka pai ake tōku ako ina [condition] ana au. "I learn better when I [do this]." This is one of the most useful self-knowledge sentences in any language. Knowing HOW you learn best is as important as what you learn.',
    },
    weDo:{
      title:'Kia Tūhono — Learning reflection',
      instruction:'Build sentences about how you learn best.',
      sentences:[
        'I ask: He aha tāu ara ako pai rawa atu? Answer: Ko tōku ara ako pai rawa atu ko te [strategy].',
        'I ask: Ka pai ake tōu ako ina aha? Answer: Ka pai ake tōku ako ina [condition].',
        'State growth: <b>Kua tino pai ake tōku mōhio i ngā hanganga o te reo Māori i tēnei tau.</b>',
        'State future strategy: <b>Māku e [strategy] i muri ake nei hei tiaki i tōku reo.</b>',
      ],
      prompt:'Ka pai ake tōku ako ina kōrero ana au — I learn better when I speak. Does this describe you? What IS your best learning strategy? If you could tell next year\'s te reo students one thing about how to learn it, what would you tell them?',
    },
    youDo:{
      title:'Māu Anō — Learning reflection writing',
      instruction:'Write a reflection on your learning strategies and growth.',
      tasks:[
        'Write your best learning strategy: Ko tōku ara ako pai rawa atu ko te…',
        'Write when you learn best: Ka pai ake tōku ako ina…',
        'Write your growth: Kua tino pai ake tōku mōhio i… i tēnei tau.',
        '✦ Bonus: Write a full learning reflection (8 sentences) — your strategies, your growth, what was hard, what worked, what you wish you had done differently, and your advice to a future learner.',
      ],
    },
  },
  Tuesday: {
    topic:'He hononga ki te ao — Connections to the world',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Connection to land and people · AO 2.1: Relationships · AO 2.3: Extended reflection',
    aos:[{code:'AO 1.4',label:'Connections to world'},{code:'AO 2.1',label:'Relationships &amp; community'}],
    iDo:{
      title:'Tāua Kōrero — What te reo Māori has connected you to',
      instruction:'Te reo Māori is not just a communication tool — it is a connector. Today we reflect on everything this language has connected you to across the year: people, places, ancestors, community, nature, and the future.',
      example:`<b>Ko ērā ngā hononga i hanga ai e tēnei reo:</b><br>These are the connections this language has made:<br><br><b>Ko ōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hoa" target="_blank" rel="noopener">hoa</a> hou</b> — my new friends<br><b>Ko ōku kaiako</b> — my teachers<br><b>Ko ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C4%ABpuna" target="_blank" rel="noopener">tīpuna</a> o Aotearoa</b> — the ancestors of New Zealand<br><b>Ko ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=uri" target="_blank" rel="noopener">uri</a> ō āpōpō</b> — the descendants of tomorrow<br><b>Ko te taiao o Aotearoa</b> — the natural world of New Zealand<br><b>Ko ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tikanga" target="_blank" rel="noopener">tikanga</a> o tōku ao</b> — the customs of my world<br><br><b>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=honohono" target="_blank" rel="noopener">honohono</a> tēnei reo i ōku whakaaro, i ōku ngākau, i ōku ara katoa.</b><br>This language connects my thoughts, my heart, and all my pathways.`,
      demo:`Reflecting on connections:\n\n<b>Ko ērā ngā hononga i hanga ai e tēnei reo:</b>\nThese are the connections built by this language:\n(hanga = build/make, ai = relative marker, e = by — passive)\n\n<b>I honohono tēnei reo i a au ki…</b>\nThis language connected me to…\n\n<b>Ka honohono tonu tēnei reo i a au ki ngā tāngata o tēnei ao.</b>\nThis language will continue to connect me to the people of this world.\n\nNew phrase:\n<b>i hanga ai</b> — that was/has been built (ai = relative past)\n<b>Ko ērā ngā [things] i hanga ai e tēnei reo.</b>\nThose are the [things] built by this language.`,
      tip:'Ko ērā ngā hononga i hanga ai e tēnei reo — those are the connections built by this language. The passive (i hanga ai e) puts the language as the agent — it is the one that builds the connections. Language does something to you; you do not just use it.',
    },
    weDo:{
      title:'Kia Tūhono — Connection reflection',
      instruction:'Reflect on what te reo Māori has connected you to.',
      sentences:[
        'Ko ērā ngā hononga i hanga ai e tēnei reo: + Ko ēnei list of three connections.',
        'I honohono tēnei reo i a au ki [specific connection] nō te mea…',
        'Ka honohono tonu tēnei reo i a au ki [who/what] ā tōna wā.',
        'Close: Ko tōku wawata: ka honohono tēnei reo i ngā tāngata katoa o Aotearoa.',
      ],
      prompt:'Ka honohono tēnei reo i ōku whakaaro, i ōku ngākau, i ōku ara katoa — this language connects my thoughts, my heart, and all my pathways. Thoughts, heart, and pathways — three dimensions of a person. What would it mean for a language to connect all three? Has te reo Māori done that for you?',
    },
    youDo:{
      title:'Māu Anō — Connection writing',
      instruction:'Write about the connections te reo Māori has made for you.',
      tasks:[
        'Write Ko ērā ngā hononga i hanga ai e tēnei reo + three specific connections.',
        'Write I honohono tēnei reo i a au ki [specific] nō te mea…',
        'Write what you hope it will connect you to in the future.',
        '✦ Bonus: Write a full connection reflection (8 sentences) — what te reo has connected you to (people, ancestors, nature, culture), how, why it matters, and your hope for those connections to grow.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — The end-of-year showcase',
    nzLink:'Te Aho Arataki Marau — All AOs · All sentence types · Full year showcase',
    aos:[{code:'AO 2.3',label:'Year showcase'},{code:'AO 2.5',label:'Full expression'}],
    iDo:{
      title:'Tāua Kōrero — Your finest te reo Māori of the year',
      instruction:'This is the penultimate Wednesday lesson of the year. Today is the showcase — not a review, not an audit. A celebration. You write your finest te reo Māori. Not the most complex, not the longest — the most true, the most beautiful, the most you.',
      example:`The finest te reo sentences of the year — from any of you:<br><br><b>"Ko tōku reo he ara māmā ki ngā tīpuna — ka huri noa tōku ao i ngā kupu o ōku mōrearea, ā ka mārama ake i ngā kupu o tōku reo."</b><br>(My language is a light path to the ancestors — my world just shifts in the words of my worries, and grows clearer in the words of my language.)<br><br><b>"He ākonga noa iho ahau — engari ko tōku ngākau e tipu ana i ōku kupu i ia rā, i ia rā."</b><br>(I am just a learner — but my heart grows in my words day by day.)<br><br><b>"Ka toitū te reo, ka toitū tōku whakapono, ka toitū hoki ahau."</b><br>(When the language endures, my belief endures, and I endure too.)`,
      demo:`What makes these sentences the finest:\n\n→ They use simple words in unexpected combinations\n→ They reveal something true about the person\n→ They use structures naturally, not as demonstrations\n→ They would lose something if translated to English\n\n"Ka toitū te reo, ka toitū tōku whakapono, ka toitū hoki ahau."\n\nThree Ka toitū. The language endures. My belief endures. And then — ka toitū hoki AHAU. I endure too. The speaker is not just an observer of endurance — they are part of it. The final line makes the abstract personal.\n\nThis is what fluency looks like.`,
      tip:'The finest sentence you can write is not the one that uses the most structures — it is the one that uses exactly the right words to say exactly what you mean. Less is often more. Ka toitū ahau. That is enough.',
    },
    weDo:{
      title:'Kia Tūhono — Showcase sentences',
      instruction:'Write and share your finest sentences. Class listens — no feedback, just appreciation.',
      sentences:[
        'Write in silence for 5 minutes — your finest sentence. No structure requirements.',
        'Write a second sentence that continues the first.',
        'Read both aloud to a partner. They listen. No comments — just presence.',
        'Class share: each person reads their best sentence. Everyone listens.',
      ],
      prompt:'Ka toitū te reo, ka toitū tōku whakapono, ka toitū hoki ahau. When the language endures, I endure. There is something radical about this claim — that YOUR survival is connected to the survival of te reo Māori. Do you believe it? In what sense might it be true?',
    },
    youDo:{
      title:'Māu Anō — The year showcase',
      instruction:'Write your finest te reo Māori of the year.',
      tasks:[
        'Write your finest SENTENCE — not the most complex, the most true.',
        'Write your finest PARAGRAPH — three to five sentences, beautifully connected.',
        'Write your YEAR CLOSER — one sentence that closes your year of te reo Māori.',
        '✦ Bonus: Write your complete "end of year te reo portfolio piece" — ten sentences that capture who you were, what you learned, what connected you, what you believe, and where you are going. Read it aloud to someone you trust.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero whakamutunga — The final conversation',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 · All six language modes · Full year assessed',
    aos:[{code:'AO 1.1',label:'Greetings'},{code:'AO 1.2',label:'Introductions'},{code:'AO 2.3',label:'Full sophisticated conversation'},{code:'AO 2.5',label:'Full vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — The full-year conversation',
      instruction:'This is the second-to-last lesson of the year. Today we see what a fully fluent Year 5-6 student can do in te reo Māori — the result of four terms of daily practice.',
      example:`<b>A:</b> Tēnā koe. Ko wai koe? He aha tō pepeha?<br><b>B:</b> [Full pepeha — all nine lines]<br><b>A:</b> Ka pai! He aha ngā pou o tōu ora?<br><b>B:</b> Ko ngā pou o tōku ora ko tōku whānau, ko tōku reo, ko tōku taiao — ko ērā ngā mea e mau ana i a au.<br><b>A:</b> He aha tā tēnei reo i homai ai ki a koe i tēnei tau?<br><b>B:</b> I homai mai e ia ki a au he ara ki ngā tīpuna, he hononga ki ngā uri, ā he māramatanga ki tōku ake ao.<br><b>A:</b> He aha tō wawata mō tō reo Māori?<br><b>B:</b> Ko tōku wawata: ka toitū tēnei reo tapu mō ōku uri — ā, ka honohono ia i ngā tāngata katoa o tēnei ao ātaahua.<br><b>A:</b> Ā koia! Tēnā koe mō tāu kōrero tino hōhonu.<br><b>B:</b> Tēnā koe hoki. Ka nui ōku mihi ki a koe.`,
      demo:`This conversation demonstrates every AO:\n✓ AO 1.1: Tēnā koe + Ka nui ōku mihi\n✓ AO 1.2: Full pepeha\n✓ AO 1.4: Identity through maunga, awa, iwi, kura\n✓ AO 2.1: Relationships (whānau, taiao)\n✓ AO 2.2: Connection to land\n✓ AO 2.3: Sophisticated extended kōrero\n✓ AO 2.5: Pou, hononga, māramatanga, wawata, uri\n✓ Grammar: Ko, He, E mau ana, I…ai (relative), māramatanga, Ka toitū, Ā koia\n\nThis is the standard. And you can do it.`,
      tip:'Ka nui ōku mihi ki a koe — my greetings and thanks to you are great. This closes the conversation the way it began — with acknowledgement of the other person. In te ao Māori, beginning and ending with the other person is the mark of true manaaki.',
    },
    weDo:{
      title:'Kia Tūhono — Final full practice',
      instruction:'Pairs — the complete full-year conversation. No script after the first line.',
      sentences:[
        'Open formally + full pepeha from memory.',
        'Ko ngā pou o tōu ora ko… + He aha tā tēnei reo i homai ai ki a koe?',
        'He aha tō wawata mō tō reo Māori? + state your wawata.',
        'Close: Tēnā koe mō tāu kōrero tino hōhonu. Ka nui ōku mihi ki a koe.',
      ],
      prompt:'Ka nui ōku mihi ki a koe — my greetings and thanks to you are great. You are saying this to your conversation partner after they have spoken. But this year, who else do your mihi go to? Who has been part of your te reo journey? How would you say your mihi to them?',
    },
    youDo:{
      title:'Māu Anō — The full-year conversation',
      instruction:'Have the full-year conversation with a partner — your finest te reo Māori.',
      tasks:[
        'Full pepeha — all nine lines from memory.',
        'Ko ngā pou o tōu ora + He aha tā tēnei reo i homai ai ki a koe.',
        'He aha tō wawata + close with Ka nui ōku mihi.',
        '✦ Bonus: Write the full conversation (14 lines minimum). Then annotate every structure and vocabulary domain you used. How many AOs can you find? How many grammar structures? This is your four-term record.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T4W5 = [
  {day:'Monday',  q:'"Ka pai ake tōku ako ina kōrero ana au." What does this sentence express?',options:['I speak better than I learn','I learn better when I speak','Speaking is the only way to learn','I prefer writing to speaking'],correct:1},
  {day:'Monday',  q:'What does "ara ako" mean?',options:['learning result','learning pathway / strategy','learning language','learning achievement'],correct:1},
  {day:'Tuesday', q:'"Ko ērā ngā hononga i hanga ai e tēnei reo." What does "i hanga ai e tēnei reo" mean?',options:['that I built through hard work','that this language built / made (passive)','that were destroyed by time','that are yet to be made'],correct:1},
  {day:'Tuesday', q:'What does "honohono" express in the context of language?',options:['to separate people by language','to deeply connect people through language','to translate between languages','to forget a language'],correct:1},
  {day:'Wednesday',q:'"Ka toitū te reo, ka toitū tōku whakapono, ka toitū hoki ahau." What makes the final clause powerful?',options:['It uses the most complex grammar','It makes the abstract personal — the speaker themselves endures','It is the longest clause','It uses a whakataukī'],correct:1},
  {day:'Wednesday',q:'What is the key difference between the finest sentence and the most complex sentence?',options:['The finest sentence is always the longest','The finest sentence uses the most vocabulary','The finest sentence says exactly what you mean — truth over complexity','The finest sentence always uses Kua'],correct:2},
  {day:'Thursday', q:'"Ka nui ōku mihi ki a koe." When is this phrase used?',options:['As an opening greeting only','To express great gratitude and acknowledgement — often at the close of a conversation','As a farewell when you are angry','Only in formal whaikōrero'],correct:1},
  {day:'Thursday', q:'A full-year te reo conversation at Term 4 Week 5 level should include which of these?',options:['Only greetings and farewells','Only past tense sentences','Full pepeha, sophisticated vocabulary, wawata, and at least six different grammar structures','Only simple present tense sentences'],correct:2},
]

const CURRICULUM_T4W6 = {
  Monday: {
    topic:'Arotake — Full year vocabulary review and celebration',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 · Complete year review',
    aos:[{code:'AO 1.1',label:'Full year greetings'},{code:'AO 2.5',label:'Full vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Everything you know: the full year celebration',
      instruction:'This is the final teaching week. Today we celebrate the full year — everything you have learned, everything you can do, and everything you carry forward. This is not a review drill. It is a celebration of mastery.',
      example:`Four terms. Here is the full picture:<br><br><b>TERM 1 (Tūāhuatanga):</b> Ko · He · Kei te · Numbers 1–10 · greetings · food · places · wants · basic conversation<br><br><b>TERM 2 (Kia Tipu):</b> I · Ka · Kāore · All 16 pronouns · Numbers 1–100 · dates/times · colours · comparatives · weather · seasons · emotions · character<br><br><b>TERM 3 (Kia Rea):</b> Body · E…ana · Kua · māku e · Ka taea · pepeha · marae · haka · whakataukī · kaitiakitanga · science · formal/informal · argument<br><br><b>TERM 4 (Kia Mārama):</b> Full greeting system · advanced cohesion · oral storytelling · relative clauses (ai) · purpose clauses (hei) · narrative structure · figurative language · philosophical conversation · wawata · Ka huri`,
      demo:`What you can do that most adults in New Zealand cannot:\n\n→ Deliver a full pepeha from memory\n→ Explain a whakataukī and its deeper meaning\n→ Have a philosophical conversation about language and identity in te reo\n→ Write a narrative with traditional storytelling techniques\n→ Argue a position with taunakitanga and discourse markers\n→ Move fluently between six tense markers\n→ Use all 16 personal pronouns correctly\n→ Discuss kaitiakitanga, arts, community, and the natural world\n\nYou did this in four terms of daily 20-minute warm-ups. That is approximately 800 minutes — just over 13 hours of instruction.\n\nKa tino pai tāu mahi.`,
      tip:'Ka tino pai tāu mahi — your work is genuinely, truly excellent. This is the right closing phrase for the year. Not just "ka pai" — tino pai. You have earned every word of it.',
    },
    weDo:{
      title:'Kia Tūhono — Full year celebration blitz',
      instruction:'One final blitz — the most joyful, celebratory version of everything you know.',
      sentences:[
        'PEPEHA challenge: Three students deliver their full pepeha from memory. Class gives Tēnā koe after each.',
        'WHAKATAUKĪ round: Class says all four whakataukī together. Then explain Ko tā tērā pūrākau mōhio ko te…',
        'FAVOURITE SENTENCE: Every student says their single favourite te reo sentence of the year. No repeats.',
        'CLOSE together: Ka toitū tēnei reo i a tātou katoa. Ka toitū tātou i tēnei reo. Ka huri.',
      ],
      prompt:'Ka toitū tēnei reo i a tātou katoa — this language endures through all of us. And: Ka toitū tātou i tēnei reo — we endure through this language. The relationship goes both ways. The language needs you as much as you need it. Does that feel true? What does it mean to say you are part of the survival of a language?',
    },
    youDo:{
      title:'Māu Anō — Final year audit',
      instruction:'Your last vocabulary and reflection exercise of the year.',
      tasks:[
        'Write every te reo word you know in 5 minutes. Count them.',
        'Write your five favourite sentences from the whole year.',
        'Write: Ko tāku koha ki tēnei reo: [what you give to the language — your commitment going forward].',
        '✦ Bonus: Write a "letter to the language" in te reo Māori — address te reo itself. Tell it what it has meant to you, what you will do to care for it, and what you hope for it. This is your final gift to your year.',
      ],
    },
  },
  Tuesday: {
    topic:'He whakaaro whakamutunga — Final reflections',
    nzLink:'Te Aho Arataki Marau — All AOs · Metacognitive reflection · Full year',
    aos:[{code:'AO 2.3',label:'Final reflection'},{code:'AO 2.5',label:'Full expression'}],
    iDo:{
      title:'Tāua Kōrero — Looking back, standing forward',
      instruction:'The last Tuesday of the year. Today we reflect on the journey — not to summarise, but to stand in this moment and feel the weight of what we have built. Then we turn to face forward.',
      example:`<b>Looking back:</b><br><b>I tēnei tau, i <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tipu" target="_blank" rel="noopener">tipu</a> tōku reo, i tipu hoki tōku ngākau.</b><br>This year, my language grew, and my heart grew too.<br><br><b>Ko ēnei ngā mea hou i ako ai au i tēnei tau:</b><br>he reo, he tikanga, he ao hou — ko tērā tōku taonga.<br>These are the new things I learned this year: a language, a culture, a new world — that is my treasure.<br><br><b>Standing forward:</b><br><b>Ka haere au ki tērā tau me tēnei <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=taonga" target="_blank" rel="noopener">taonga</a> i ōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ringaringa" target="_blank" rel="noopener">ringaringa</a>.</b><br>I go to next year with this treasure in my hands.<br><br><b>Māku e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tiaki" target="_blank" rel="noopener">tiaki</a>, māku e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whakaora" target="_blank" rel="noopener">whakaora</a>, māku e whakaatu i tēnei reo <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tapu" target="_blank" rel="noopener">tapu</a>.</b><br>I will protect it, I will nurture it, I will demonstrate this sacred language.`,
      demo:`Final reflection vocabulary:\n<b>i ōku ringaringa</b> — in my hands (ringaringa = hands)\n<b>whakaora</b> — to heal / revitalise / give life to\n<b>whakaatu</b> — to demonstrate / show / present\n<b>Ko tērā tōku taonga.</b> — That is my treasure.\n<b>Ko ēnei ngā mea hou i ako ai au:</b>\nThese are the new things I learned: (ai = relative clause marker)\n\nThree commitments:\n<b>Māku e tiaki</b> — I will protect it\n<b>Māku e whakaora</b> — I will nurture/revitalise it\n<b>Māku e whakaatu</b> — I will demonstrate it\n\nThree māku e sentences in a row — a commitment in three parts.`,
      tip:'Māku e tiaki, māku e whakaora, māku e whakaatu — three commitments. In te ao Māori, a commitment said three times is a commitment made truly. Saying māku e three times signals that you are serious.',
    },
    weDo:{
      title:'Kia Tūhono — Three-part commitment',
      instruction:'Build your three-part commitment to te reo Māori.',
      sentences:[
        'Look back: <b>I tēnei tau, i tipu tōku reo, i tipu hoki tōku [heart/mind/something specific].</b>',
        'Name what you carry: <b>Ka haere au ki tērā tau me [what you are taking with you].</b>',
        'Three commitments: <b>Māku e tiaki… Māku e whakaora… Māku e whakaatu…</b>',
        'Close together: <b>Ka nui ōku mihi ki a koutou katoa. Tēnā koutou, tēnā koutou, tēnā koutou katoa.</b>',
      ],
      prompt:'Māku e tiaki, māku e whakaora, māku e whakaatu. Three commitments to the language. Which of these three feels most natural for you? Which feels most challenging? And which — if you only kept one — would matter most?',
    },
    youDo:{
      title:'Māu Anō — Final reflection',
      instruction:'Write your final reflection on the year in te reo Māori.',
      tasks:[
        'I tēnei tau, i tipu tōku reo… describe three things that grew.',
        'Ka haere au ki tērā tau me [three things you are taking forward].',
        'Write your three māku e commitments.',
        '✦ Bonus: Write your final full reflection (10 sentences) — the year in three sentences, what you carry, your three commitments, a whakataukī that guides you, and close with Ka nui ōku mihi ki a koutou katoa.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — The year-end showcase and certificate',
    nzLink:'Te Aho Arataki Marau — All AOs · Whakaatu (presenting) · Year celebration',
    aos:[{code:'AO 2.3',label:'Year-end showcase'},{code:'AO 1.1',label:'Formal presentation'}],
    iDo:{
      title:'Tāua Kōrero — He whakaaturanga — Presenting your year',
      instruction:'The final Wednesday lesson. Today each student prepares a short whakaaturanga — a presentation — of their year in te reo Māori. This is the Whakaatu (presenting) language mode in full action.',
      example:`<b>Structure for a whakaaturanga:</b><br><br><b>1. Open:</b> Tēnā koutou katoa.<br><b>2. Identity:</b> Ko [name] tōku ingoa. [Two pepeha lines].<br><b>3. Journey:</b> I tīmata au i Wāhanga Tahi me tētahi kupu — "Kia ora." Ināianei, kua tipu tōku reo ki tētahi mea nui ake.<br><b>4. Best sentence:</b> Ko tōku rerenga pai rawa atu i tēnei tau ko tēnei: [your best sentence].<br><b>5. <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Whakataukī" target="_blank" rel="noopener">Whakataukī</a>:</b> Ko tōku whakataukī e tūāhuatia ana i a au ko tēnei: [whakataukī + explanation].<br><b>6. <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Wawata" target="_blank" rel="noopener">Wawata</a>:</b> Ko tōku wawata mō tōku reo: [your aspiration].<br><b>7. Close:</b> Tēnā koutou, tēnā koutou, tēnā koutou katoa.`,
      demo:`The seven elements of the whakaaturanga:\n\n1. <b>Formal greeting</b> — Tēnā koutou katoa\n2. <b>Identity</b> — Ko sentences, pepeha (abbreviated)\n3. <b>Journey</b> — where you started, where you are now (I, Kua)\n4. <b>Best sentence</b> — your finest te reo of the year\n5. <b>Whakataukī</b> — the proverb that represents you + Ko tā tērā mōhio ko te…\n6. <b>Wawata</b> — your deepest aspiration for your reo\n7. <b>Formal close</b> — Tēnā koutou ×3\n\nDuration: approximately 60–90 seconds per student. That is enough for a full life in te reo Māori.`,
      tip:'Ko tōku rerenga pai rawa atu — my best sentence. Own it. Stand behind it. You chose it because it is true. When you say your best sentence in front of the class, say it like you mean it — because you do.',
    },
    weDo:{
      title:'Kia Tūhono — Whakaaturanga preparation',
      instruction:'Students prepare their whakaaturanga — practise with a partner first.',
      sentences:[
        'Write the seven elements of your whakaaturanga — notes only, not a script.',
        'Practise with a partner: deliver it fully, they listen without interrupting.',
        'Partner gives one piece of feedback: "He pai tō [element]. Me [one suggestion]."',
        'Second run: incorporate the feedback. Aim for 60–90 seconds, from the heart.',
      ],
      prompt:'Ko tōku rerenga pai rawa atu i tēnei tau ko tēnei. Your best sentence of the year. What IS it? If you had to choose one sentence that captures something true about you in te reo Māori — what would it be? Choose it now. Write it down. It is yours.',
    },
    youDo:{
      title:'Māu Anō — Whakaaturanga',
      instruction:'Deliver your whakaaturanga to the class.',
      tasks:[
        'Deliver your full whakaaturanga — all seven elements — to the class.',
        'Listen to your classmates\' whakaaturanga — give a Tēnā koe after each one.',
        'Write your whakaaturanga as a final written record.',
        '✦ Bonus: After the class whakaaturanga, write a response: "Ko ngā rerenga i pā mai ki a au ko ēnei…" (The sentences that moved me were these…) — choose three sentences from classmates and write why each one moved you.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He whakamātautau — Final end-of-year assessment',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 · All six language modes · Full year assessed',
    aos:[{code:'AO 1.1',label:'Greetings'},{code:'AO 1.2',label:'Introductions'},{code:'AO 1.4',label:'Identity'},{code:'AO 2.3',label:'Full sophisticated conversation'},{code:'AO 2.5',label:'Full vocabulary'},{code:'AO 1.6',label:'Politeness'}],
    iDo:{
      title:'Tāua Kōrero — The final assessment',
      instruction:'This is the last lesson of the year. The end-of-year assessment is a full spontaneous conversation — no script, no model to follow. Just you and your reo. This is what you have been building toward since Week 1 of Term 1.',
      example:`What a full-year assessment conversation might sound like:<br><br><b>A:</b> Tēnā koe. Ko wai koe?<br><b>B:</b> [Full pepeha from memory]<br><b>A:</b> Ka pai! He aha ngā pou o tōu ora?<br><b>B:</b> Ko ngā pou o tōku ora ko tōku whānau, ko tōku reo, ko tōku taiao.<br><b>A:</b> He aha tā tēnei reo i homai ai ki a koe i tēnei tau?<br><b>B:</b> I homai mai e ia ki a au he ara ki ngā tīpuna, he hononga ki ōku hoa, ā he māramatanga ki tōku ake ao.<br><b>A:</b> He aha tō wawata?<br><b>B:</b> Ko tōku wawata: ka toitū tēnei reo tapu — ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=honohono" target="_blank" rel="noopener">honohono</a> ia i ngā tāngata katoa o Aotearoa.<br><b>A:</b> Ā koia! Tēnā koe mō tāu kōrero tino hōhonu.<br><b>B:</b> Ka nui ōku mihi ki a koe. Mā te wā.<br><b>A:</b> Mā te wā.`,
      demo:`Final assessment criteria — what you are showing:\n\n✓ Full pepeha (AO 1.2, 1.4)\n✓ Sophisticated vocabulary: pou, hononga, māramatanga, wawata (AO 2.5)\n✓ Complex structures: Ko ngā pou…, He aha…ai…, Ka toitū, Ka honohono (AO 2.3)\n✓ Correct greeting and farewell system (AO 1.1, 1.6)\n✓ Spontaneous extension beyond the question (AO 2.3)\n✓ Natural closing: Ka nui ōku mihi. Mā te wā. (AO 1.1)\n\nYou do not need to be perfect. You need to be present, genuine, and in te reo Māori.\n\nKa angitu koe. You will succeed.`,
      tip:'Mā te wā — until another time. This is the farewell for a long parting. At the end of the school year, Mā te wā is right. You are not saying goodbye forever — you are saying: I will carry this language with me, and we will meet again in it.',
    },
    weDo:{
      title:'Kia Tūhono — Final preparation',
      instruction:'One last practice — quietly, with a partner, in your own words.',
      sentences:[
        'Sit with your partner. Deliver your full assessment — no notes.',
        'They listen fully. Then they deliver theirs.',
        'After: Ko tāu rerenga pai rawa atu ko tēhea? Tell your partner their finest moment.',
        'Class together, final time: Ka toitū tēnei reo i a tātou. Ka huri.',
      ],
      prompt:'Mā te wā. Until another time. But in te reo, every time there is an "until another time" rather than a goodbye. The language is waiting for you. What do you say to it before you go?',
    },
    youDo:{
      title:'Māu Anō — He whakamātautau — End of year',
      instruction:'Your final end-of-year assessment.',
      tasks:[
        '<b>Task 1:</b> Full spontaneous conversation — at least 14 lines each. No script.',
        '<b>Task 2:</b> Self-assess against the criteria above. Be generous and honest.',
        '<b>Task 3:</b> Write your final sentence of the year: Ko tōku rerenga whakamutunga o tēnei tau ko tēnei: [sentence]. This is your seal on the year.',
        '✦ Final checklist: ☐ Pepeha (9 lines) · ☐ Ko ngā pou o tōu ora · ☐ He aha tā tēnei reo i homai ai ki a koe · ☐ Wawata statement · ☐ Ka nui ōku mihi · ☐ Mā te wā',
      ],
    },
  },
}

const FRIDAY_QUIZ_T4W6 = [
  {day:'Monday',  q:'"Ka tino pai tāu mahi." What makes this different from "Ka pai tāu mahi"?',options:['They mean exactly the same thing','Tino adds genuine emphasis — truly/genuinely excellent, not just good','Ka tino is a past tense marker','Tino makes it a question'],correct:1},
  {day:'Monday',  q:'"Ko tāku koha ki tēnei reo." What does koha mean?',options:['challenge','question','gift / contribution / offering','complaint'],correct:2},
  {day:'Tuesday', q:'"Māku e tiaki, māku e whakaora, māku e whakaatu." What is the significance of three māku e sentences?',options:['It is a grammar requirement for lists','Three statements signal a deep, complete commitment in te ao Māori','It makes the sentence easier to remember','The three verbs all start with wha-'],correct:1},
  {day:'Tuesday', q:'What does "whakaora" mean?',options:['to demonstrate','to protect','to heal / revitalise / give life to','to forget'],correct:2},
  {day:'Wednesday',q:'What are the seven elements of a whakaaturanga?',options:['greeting, weather, topic, questions, answers, debate, farewell','greeting, identity, journey, best sentence, whakataukī, wawata, close','pepeha, whakataukī, debate, story, song, dance, farewell','greeting, questions, answers, conclusions, thanks'],correct:1},
  {day:'Wednesday',q:'"Ko ngā rerenga i pā mai ki a au ko ēnei." What does "i pā mai ki a au" mean?',options:['that I wrote myself','that were too difficult for me','that moved/touched me','that I memorised'],correct:2},
  {day:'Thursday', q:'"Mā te wā." When is this farewell used rather than Hei konā rā?',options:['For a short parting like the end of a lesson','For a long parting — until another time (like the end of the year)','Only at funerals','Only between very formal people'],correct:1},
  {day:'Thursday', q:'What is the final criterion for the end-of-year assessment?',options:['Perfect grammar with no errors','The longest possible sentences','Being present, genuine, and in te reo Māori — with spontaneous extension','Reading from a prepared script'],correct:2},
]

// ── Term 4 data router ──────────────────────────────────────────────────────
const CURRICULUM_T4W7 = {
  Monday: {
    topic:'Arotake ā-reo — Spiral: Greetings, pepeha, and identity (Terms 1–4)',
    nzLink:'Te Aho Arataki Marau — AO 1.1: Greetings · AO 1.2: Introductions · AO 1.4: Personal information · AO 1.6: Politeness — full spiral review',
    aos:[{code:'AO 1.1',label:'Greetings — full spiral'},{code:'AO 1.2',label:'Introductions — full spiral'},{code:'AO 1.4',label:'Identity — full spiral'}],
    iDo:{
      title:'Tāua Kōrero — From Kia ora to Ko tōku wawata: the identity spiral',
      instruction:'Welcome to Week 7. These final four weeks are your spiral review — we revisit every major domain from the year, going deeper each time. Today we spiral back to where we began: greetings, introductions, and identity. But look how far these have grown since Term 1 Week 1.',
      example:`<b>TERM 1 WEEK 1 level:</b><br>Kia ora. Ko [name] tōku ingoa.<br><br><b>TERM 4 WEEK 7 level:</b><br>Tēnā koutou katoa.<br>Ko [maunga] tōku maunga, ko [awa] tōku awa.<br>Ko [waka] tōku waka, ko [iwi] tōku iwi.<br>Ko [hapū] tōku hapū, ko [marae] tōku marae.<br>Ko [kura] tōku kura, ko [name] tōku ingoa.<br>Nō [place] ahau. He uri ahau nō ōku tīpuna.<br>Ko ngā pou o tōku ora ko tōku whānau, ko tōku reo, ko tōku taiao.<br>Ko tōku wawata: ka toitū tēnei reo tapu mō ōku uri ā āpōpō.<br>Nō reira, tēnā koutou, tēnā koutou, tēnā koutou katoa.`,
      demo:`What has grown from Term 1 to now:\n\nTERM 1: Kia ora · Ko [name] tōku ingoa · Nō [place] ahau\nTERM 2: Tēnā koe/kōrua/koutou · Thank-you formulas\nTERM 3: Full 9-line pepeha · He uri ahau nō ōku tīpuna · Whaikōrero structure\nTERM 4: Ko ngā pou o tōku ora · Ko tōku wawata · Ka nui ōku mihi\n\nThe identity statement has grown from one line to a full whakaaturanga.\n\nNew spiral phrase:\n<b>Nō reira, ko ahau ko [name].</b>\nTherefore, I am [name]. (Nō reira closes the pepeha and plants the speaker firmly in their identity)`,
      tip:'Nō reira, ko ahau ko [name] — therefore, I am [name]. This closing line of a pepeha is the most powerful. After all the mountain, river, iwi, and hapū — you arrive at yourself. The land and people make the person.',
    },
    weDo:{
      title:'Kia Tūhono — Identity spiral drill',
      instruction:'Speed round through the full identity progression — each level building on the last.',
      sentences:[
        'Level 1 (T1): Kia ora. Ko [name] tōku ingoa. Nō [place] ahau. Say it fast and smooth.',
        'Level 2 (T2): Tēnā koe. Ko [name] tōku ingoa. Tēnā koe mō tāu āwhina. Add a thank-you.',
        'Level 3 (T3): Full pepeha — all 9 lines from memory. Ko [maunga]… through Nō reira, ko ahau ko [name].',
        'Level 4 (T4): Add Ko ngā pou o tōku ora + Ko tōku wawata. The complete identity statement.',
      ],
      prompt:'Nō reira, ko ahau ko [name]. After the mountain, the river, the iwi — you arrive at yourself. The land and the people define you before you define yourself. In your culture or family, how is identity shaped by place and people? Is there a Western equivalent of the pepeha?',
    },
    youDo:{
      title:'Māu Anō — Full identity spiral',
      instruction:'Write and say your complete identity statement — all four levels combined.',
      tasks:[
        'Write your full pepeha — all 9 lines — from memory. No looking.',
        'Add Ko ngā pou o tōku ora ko… (three pillars).',
        'Add Ko tōku wawata: ka… (your deepest aspiration).',
        '✦ Bonus: Write a full whakaaturanga incorporating all four levels — pepeha, pillars, wawata, best sentence of the year, whakataukī, and close with Ka nui ōku mihi. Practise delivering it in under 90 seconds.',
      ],
    },
  },
  Tuesday: {
    topic:'Arotake ā-reo — Spiral: Tense mastery (Terms 1–4)',
    nzLink:'Te Aho Arataki Marau — AO 2.4: Time · AO 2.3: Extended communication · Grammar Level 1–2: All tense markers consolidated',
    aos:[{code:'AO 2.4',label:'Tense mastery — full spiral'},{code:'AO 2.3',label:'Extended tense-controlled writing'}],
    iDo:{
      title:'Tāua Kōrero — All six tense markers: the complete picture',
      instruction:'You have learned six tense and aspect markers across four terms. Today we spiral back through all of them — not as a list to memorise, but as a living system to feel and use. Each marker answers a different question about time.',
      example:`<b>Kei te</b> haere ia. — She is going. (RIGHT NOW — present state)<br><b>E haere ana</b> ia. — She is going (and still going — ONGOING)<br><b>I</b> haere ia inanahi. — She went yesterday. (COMPLETED PAST — specific event)<br><b>Ka</b> haere ia. — She goes / went / and then she went. (NARRATIVE — story movement)<br><b>Kua</b> haere ia. — She has gone. (PERFECT — completed, result matters now)<br><b>Ka haere</b> ia āpōpō. — She will go tomorrow. (FUTURE — Ka also signals future events)<br><br><b>NEGATIVES:</b><br><b>Kāore</b> ia <b>e haere ana.</b> — She is not going. (present negative)<br><b>Kāore</b> ia <b>i haere.</b> — She did not go. (past negative)<br><b>Kāore anō kua</b> haere ia. — She has not yet gone. (perfect negative)`,
      demo:`The question each marker answers:\n\n<b>Kei te</b> — What is happening RIGHT NOW?\n<b>E…ana</b> — What is STILL HAPPENING, ongoing?\n<b>I</b> — What HAPPENED at a specific time in the past?\n<b>Ka</b> — What happened NEXT in the story / what WILL happen next?\n<b>Kua</b> — What has BEEN COMPLETED whose result matters NOW?\n<b>Ka [verb] āpōpō</b> — What WILL happen?\n\nRemember: in te reo Māori, the VERB never changes. Only the MARKER changes. This is the fundamental beauty of the language — one verb, six markers, six relationships to time.`,
      tip:'One verb, six markers. Haere is always haere — going. What changes is your relationship to that going: is it now, ongoing, past, narrative, perfect, or future? The marker answers that question.',
    },
    weDo:{
      title:'Kia Tūhono — Tense spiral drill',
      instruction:'I give you one verb — you use it with all six markers in sequence.',
      sentences:[
        'Verb: kai (eat). Six sentences: Kei te kai ia · E kai ana ia · I kai ia · Ka kai ia · Kua kai ia · Ka kai ia āpōpō.',
        'Verb: ako (learn). Your turn — six sentences with all six markers. Which feels most natural?',
        'Now add negatives: Kāore ia e kai ana · Kāore ia i kai · Kāore anō kua kai ia.',
        'Challenge: write one sentence that uses THREE different markers — different clauses, same paragraph.',
      ],
      prompt:'The verb never changes in te reo Māori — only the marker does. English changes the verb: "eat / ate / eaten / eating / will eat". If you were teaching a new learner of te reo Māori, how would you explain why the te reo system is actually EASIER than English? What is the hardest part to explain?',
    },
    youDo:{
      title:'Māu Anō — Tense spiral writing',
      instruction:'Use all six markers in a connected passage about your year.',
      tasks:[
        'Write Kei te and E…ana sentences about right now in class.',
        'Write I and Ka sentences about what you did this term.',
        'Write Kua and Ka [future] sentences about what has been achieved and what comes next.',
        '✦ Bonus: Write a "year in tenses" passage (10 sentences) — each sentence uses a different marker, tells a different moment of your year, and they connect to form one flowing account. Label each marker.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Spiral: Complex sentences from all terms',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · Grammar Level 1–2: All complex structures consolidated',
    aos:[{code:'AO 2.3',label:'Complex sentence spiral'},{code:'AO 2.5',label:'Full vocabulary in complex sentences'}],
    iDo:{
      title:'Tāua Kōrero — Every complex structure you know',
      instruction:'You have learned a full toolkit of complex sentence structures. Today we spiral back through all of them — the joining words, the subordinate clauses, the discourse markers — and practise moving between them fluently.',
      example:`<b>COORDINATING:</b> ā · engari · nō reira · me<br><b>SUBORDINATING:</b> nō te mea · ahakoa · mehemea · i te wā · ina…ana<br><b>RELATIVE CLAUSE:</b> [noun] + [clause] + ai<br><b>PURPOSE:</b> hei [verb]<br><b>DISCOURSE MARKERS:</b> waihoki · heoi anō · hei tauira · arā · Ko te mutunga · kāore noa iho<br><b>DEGREE:</b> tino · āhua · noa · tonu · anō · kē<br><br><b>ALL IN ONE PASSAGE:</b><br>I ako au i te reo Māori i tēnei tau — he mea uaua, <b>engari</b> he mea pai <b>hoki</b>. <b>Ahakoa</b> he uauatanga, i mahi tonu au <b>nō te mea</b> ko tōku moemoeā tōku ara. <b>Kāore noa iho</b> — ko tēnei reo tōku hononga ki ngā tīpuna, <b>arā</b>, ki ngā uri hoki. <b>Ko te mutunga</b>, ko tōku wawata: ka toitū tēnei reo <b>hei</b> oranga mō āpōpō ō ngā uri.`,
      demo:`Count the complex structures in that passage:\nengari (contrast)\nhoki (also)\nahakoa (concession)\nnō te mea (reason)\nkāore noa iho (not only that)\narā (namely)\nKo te mutunga (in conclusion)\nhei (purpose clause)\n\nEight complex structures in five sentences. Every one of them natural, every one of them in service of something true.\n\nNew spiral word:\n<b>oranga</b> — wellbeing / health / vitality\n<b>hei oranga</b> — for the wellbeing of\n<b>Ka toitū tēnei reo hei oranga mō ngā uri.</b>\nThis language will endure for the wellbeing of descendants.`,
      tip:'Every complex structure you know is a tool for precision. Without them, you can say what happened. With them, you can say why, when, although, because, in order to, and despite. They are the difference between reporting and understanding.',
    },
    weDo:{
      title:'Kia Tūhono — Complex sentence spiral',
      instruction:'I give you a plain sentence — you expand it using three different complex structures.',
      sentences:[
        'Plain: "I ako au i te reo Māori." → Add ahakoa, nō te mea, and hei. Three expansions.',
        'Plain: "He pai tēnei reo." → Add kāore noa iho, arā, and Ko te mutunga.',
        'Plain: "Ka haere mātou ki te kura." → Add i te wā, engari, and ā.',
        'Now write your own: one plain sentence about te reo Māori — expand it with five complex structures.',
      ],
      prompt:'Ko te mutunga, ko tōku wawata: ka toitū tēnei reo hei oranga mō āpōpō ō ngā uri. Count the structures: Ko te mutunga (discourse marker), Ko (identity), Ka toitū (future), hei oranga (purpose), mō āpōpō ō ngā uri (time + possession). Five structures in one sentence. And yet it sounds natural. Why?',
    },
    youDo:{
      title:'Māu Anō — Complex sentence showcase',
      instruction:'Write a paragraph using every complex structure type at least once.',
      tasks:[
        'Write a sentence with ahakoa + nō te mea in the same clause.',
        'Write a sentence with a relative clause (ai) + purpose clause (hei).',
        'Write a sentence using waihoki + arā + Ko te mutunga across three sentences.',
        '✦ Bonus: Write your finest complex te reo paragraph (8 sentences) — use all five categories: coordinating, subordinating, relative, purpose, and discourse markers. Make it a genuine statement about your year.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — Spiral: The full-year conversation challenge',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 · Full spontaneous conversation',
    aos:[{code:'AO 2.3',label:'Full conversation spiral'},{code:'AO 1.1',label:'Greetings spiral'},{code:'AO 2.5',label:'Full vocabulary spiral'}],
    iDo:{
      title:'Tāua Kōrero — The full-year conversation: every domain',
      instruction:'Today we have the most comprehensive conversation of the year — touching every major domain from Terms 1–4. This is the spiral in conversation form: identity, past events, feelings, weather, community, arts, environment, whakataukī, and wawata — all in one exchange.',
      example:`<b>A:</b> Tēnā koe. Ko wai koe? [Full pepeha from B]<br><b>B:</b> [9-line pepeha] Nō reira, tēnā koe.<br><b>A:</b> He pēhea ōu hararei? He aha ngā mea hou?<br><b>B:</b> I haere māua ko tōku māmā ki te ngahere. I ātaahua te rangi — ahakoa i ua i tētahi rā, i tākaro tonu mātou i waho. Ka ora tōku ngākau i te āhua o te taiao.<br><b>A:</b> He aha tō whakataukī e tūāhuatia ana i a koe i tēnei wā?<br><b>B:</b> "Ka toitū te reo, ka toitū te tangata, ka toitū hoki te taiao." Ko tā tērā mōhio ko te hononga o ngā mea katoa.<br><b>A:</b> He aha tō wawata mō āpōpō?<br><b>B:</b> Ko tōku wawata: ka honohono tēnei reo i ngā tāngata katoa o Aotearoa — ka toitū hoki ia hei oranga mō ōku uri.<br><b>A:</b> <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%80+koia" target="_blank" rel="noopener">Ā koia</a>! Ka nui ōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mihi" target="_blank" rel="noopener">mihi</a> ki a koe. Mā te wā.<br><b>B:</b> Mā te wā.`,
      demo:`Every domain in that conversation:\n\nIdentity (T1/T3): full pepeha\nPast events (T2): I haere māua · I ua i tētahi rā\nFeelings (T2): Ka ora tōku ngākau\nWeather (T2): i ātaahua te rangi · i ua\nNature (T2/T3): i te āhua o te taiao · i te ngahere\nConcession (T1): ahakoa i ua, i tākaro tonu\nWhakataukī (T3): stated and explained\nWawata (T4): Ko tōku wawata: ka honohono…\nPurpose (T4): hei oranga mō ōku uri\nFarewell (T4): Mā te wā`,
      tip:'Ka toitū te reo, ka toitū te tangata, ka toitū hoki te taiao. This whakataukī connects language, people, and the natural world. It is the perfect whakataukī for a conversation that has touched all three. Have it ready — it fits almost any deep te reo conversation.',
    },
    weDo:{
      title:'Kia Tūhono — Full-year conversation spiral',
      instruction:'Pairs. This conversation must touch every domain from the year. No scripts.',
      sentences:[
        'Open: formal greeting + full pepeha. (T1/T3 identity)',
        'Exchange: holidays/past events + weather + feeling. (T2 domains)',
        'Deepen: whakataukī + explanation + wawata. (T3/T4 domains)',
        'Close: Ka nui ōku mihi + Mā te wā. (T4 farewell)',
      ],
      prompt:'Ka toitū te reo, ka toitū te tangata, ka toitū hoki te taiao. Language, people, natural world — all endure together. This year you have learned a language. In doing so, what else have you learned? What does learning te reo teach you about Aotearoa, about people, about yourself?',
    },
    youDo:{
      title:'Māu Anō — Full-year spiral conversation',
      instruction:'Have the most complete te reo conversation of your life — every domain, fully spontaneous.',
      tasks:[
        'Full pepeha from memory — no hesitation.',
        'Past event + weather + feeling — at least four sentences.',
        'Whakataukī + explanation + wawata — your genuine answers.',
        '✦ Bonus: Write up the full conversation (16+ lines). Annotate every domain and structure you used. How many of the 12 AOs appear in your conversation? Aim for all of them.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T4W7 = [
  {day:'Monday',  q:'"Nō reira, ko ahau ko [name]." Where does this line appear in a pepeha and what does it do?',options:['It opens the pepeha as a greeting','It closes the pepeha — planting the speaker firmly in their identity after naming land and people','It is a farewell at the end of a speech','It introduces the mountain and river'],correct:1},
  {day:'Monday',  q:'What is the correct order of elements in a full pepeha?',options:['Name → mountain → river → iwi → school → origin','Mountain → river → waka → iwi → hapū → marae → school → name → origin (Nō reira ko ahau)','Origin → name → iwi → mountain → river','School → name → iwi → hapū → origin'],correct:1},
  {day:'Tuesday', q:'"Kua haere ia." What does Kua signal about this action?',options:['She is going right now','She was going in the past at a specific time','She has gone and the result is relevant now','She will go tomorrow'],correct:2},
  {day:'Tuesday', q:'Which tense marker signals an ONGOING action that is still continuing?',options:['Kei te','I','Ka','E…ana'],correct:3},
  {day:'Wednesday',q:'"Ka toitū tēnei reo hei oranga mō āpōpō ō ngā uri." What does "hei oranga" express?',options:['a past event','a purpose clause — for the wellbeing of','a negative','a comparison'],correct:1},
  {day:'Wednesday',q:'"Kāore noa iho — ko tēnei reo tōku hononga ki ngā tīpuna." What does kāore noa iho signal?',options:['It is not at all','Not only that — there is more','It is just nothing','It is almost nothing'],correct:1},
  {day:'Thursday', q:'"Ka toitū te reo, ka toitū te tangata, ka toitū hoki te taiao." What three things endure together?',options:['language, school, community','language, people, and the natural world','language, ancestors, descendants','language, culture, money'],correct:1},
  {day:'Thursday', q:'In the full-year conversation, which farewell is used for a long parting like the end of term?',options:['Hei konā rā','E noho rā','Ā ka kite anō','Mā te wā'],correct:3},
]

const CURRICULUM_T4W8 = {
  Monday: {
    topic:'Arotake ā-reo — Spiral: Descriptions, comparisons, and figurative language',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Descriptions · AO 2.3: Opinions · Grammar Level 1–2: He, comparatives, simile, metaphor — full spiral',
    aos:[{code:'AO 2.5',label:'Description spiral'},{code:'AO 2.3',label:'Comparison &amp; figurative language'}],
    iDo:{
      title:'Tāua Kōrero — From He nui to Ko te reo he aho: the description spiral',
      instruction:'In Term 1 you learned He nui (it is big). By Term 4 you are writing Ko te reo he aho e whiri ana i ngā tāngata (language is a cord that weaves people). Today we spiral through every layer of description — adjectives, comparatives, superlatives, degree words, simile, and metaphor.',
      example:`<b>TERM 1 level:</b><br>He nui tēnei whare. He pai tōku kura.<br><br><b>TERM 2 level:</b><br>He nui ake tērā whare i tēnei. He tino pai tōku kura — he pai rawa atu i ērā atu kura.<br><br><b>TERM 3 level:</b><br>He tino ātaahua tōku kura, he wāhi tiaki mōku — ka tipu ōku whakaaro i konei.<br><br><b>TERM 4 level (simile):</b><br>E tipu ana tōku ngākau āhua te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=r%C4%81kau" target="_blank" rel="noopener">rākau</a> i te tōanga o te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Danga" target="_blank" rel="noopener">koanga</a>.<br>My heart grows like a tree in the opening of spring.<br><br><b>TERM 4 level (metaphor):</b><br>Ko tōku kura he māramatanga ki te ao mārama — ko ia tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=aho" target="_blank" rel="noopener">aho</a> ki ngā tīpuna.`,
      demo:`The description spiral:\n\nHe [adjective] → basic description\nHe [adj] ake → comparative\nHe [adj] rawa atu → superlative\nHe tino [adj] → intensified\n[verb] āhua/me he [comparison] → simile\nKo [X] he [metaphor] → metaphor\n\nNew spiral phrase:\n<b>i te tōanga o te kōanga</b> — in the opening of spring\n<b>tō</b> — the opening / unfolding (of something)\n<b>E tipu ana tōku ngākau āhua te rākau i te tōanga o te kōanga.</b>\nMy heart grows like a tree in the opening of spring.`,
      tip:'From He nui to Ko te reo he aho e whiri ana i ngā tāngata — that journey took you one year. The first sentence describes a size. The second describes a relationship between people and language. That is what learning a language does to your thinking.',
    },
    weDo:{
      title:'Kia Tūhono — Description spiral drill',
      instruction:'Take one noun through every level of description.',
      sentences:[
        'Noun: te reo Māori. Level 1: He [adjective] te reo Māori.',
        'Level 2: He [adj] ake te reo Māori i [comparison].',
        'Level 3: He tino [adj] te reo Māori — he [adj] rawa atu.',
        'Level 4: Ko te reo Māori he [metaphor] — E [verb] ana ia āhua te [simile].',
      ],
      prompt:'E tipu ana tōku ngākau āhua te rākau i te tōanga o te kōanga. Heart. Tree. Spring. Three things connected through the word āhua (like). What is it about a tree opening in spring that captures how a heart grows? Why is this a better description than "my heart is growing"?',
    },
    youDo:{
      title:'Māu Anō — Full description spiral',
      instruction:'Write descriptions of your year at every level from basic to figurative.',
      tasks:[
        'Write He [adj] and He [adj] ake sentences about te reo Māori.',
        'Write a tino/rawa atu superlative about your best learning moment.',
        'Write a simile (āhua/me he) about something that grew in you this year.',
        '✦ Bonus: Write a Ko [X] he [metaphor] sentence about te reo Māori — something as beautiful as Ko te reo he aho e whiri ana i ngā tāngata. Then write a short paragraph continuing the metaphor.',
      ],
    },
  },
  Tuesday: {
    topic:'Arotake ā-reo — Spiral: Community, environment, and kaitiakitanga',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Connection to land · AO 2.1: Relationships · AO 2.4: Natural world — full spiral',
    aos:[{code:'AO 1.4',label:'Land &amp; community spiral'},{code:'AO 2.4',label:'Environment &amp; kaitiakitanga spiral'}],
    iDo:{
      title:'Tāua Kōrero — From Nō hea koe to Ka ora te taiao ka ora tātou: the community spiral',
      instruction:'From Term 1 Week 4 (places and ki) to Term 3 Week 7 (kaitiakitanga and toitū) — the community and environment strand runs through the whole year. Today we spiral it all together: where you come from, who your community is, and your responsibility to the natural world.',
      example:`<b>TERM 1 level:</b><br>Nō Ōtautahi ahau. Kei te haere au ki te toa.<br><br><b>TERM 2 level:</b><br>Nō Aotearoa ahau — he whenua ātaahua tēnei. Ko ēnei ngā āhuatanga pai o tōku tāone.<br><br><b>TERM 3 level:</b><br>Ko tātou ngā kaitiaki o tēnei taiao. Me tiaki tātou i te mauri o ngā awa, o ngā ngahere, o ngā maunga.<br><br><b>TERM 4 level:</b><br>Ka ora te taiao, ka ora tātou — he pono tēnei. Ko tōku wawata: ka toitū te taiao o Aotearoa hei oranga mō ōku uri. E ai ki āku whakaaro, he kawenga ōu mō tēnei whenua ātaahua.`,
      demo:`The community/environment spiral:\n\nT1: Location (nō hea, ki hea, kei hea)\nT2: Description of place (He ātaahua, Ko ēnei ngā āhuatanga pai)\nT3: Kaitiakitanga (me tiaki, mauri, toitū)\nT4: Philosophical connection (Ka ora te taiao, wawata, kawenga)\n\nFull statement:\n<b>Ko au he uri o tēnei whenua — he kawenga ōku ki te tiaki i tōna oranga mō āpōpō ō ngā uri.</b>\nI am a descendant of this land — I have a responsibility to protect its wellbeing for tomorrow's descendants.\n\nNew spiral phrase:\n<b>Ko au he uri o tēnei whenua.</b>\nI am a descendant of this land.\n<b>tōna oranga</b> — its wellbeing / its vitality`,
      tip:'Ko au he uri o tēnei whenua — I am a descendant of this land. This sentence connects pepeha (belonging to land) with kaitiakitanga (responsibility to land). You are not separate from the land — you come FROM it, and you are responsible TO it.',
    },
    weDo:{
      title:'Kia Tūhono — Community and environment spiral',
      instruction:'Spiral through every level of community and environment language.',
      sentences:[
        'T1/T2: Nō [place] ahau. He [adjective] tōku whenua/tāone. Ko ēnei ngā āhuatanga pai…',
        'T3: Ko tātou ngā kaitiaki o tēnei taiao. Me tiaki tātou i te mauri o… nō te mea…',
        'T4: Ka ora te taiao, ka ora tātou. Ko tōku wawata: ka toitū…',
        'Full: Ko au he uri o tēnei whenua — he kawenga ōku ki te tiaki i tōna oranga mō ōku uri.',
      ],
      prompt:'Ko au he uri o tēnei whenua. You are a descendant of the land. Not just of people — of the land itself. What would it mean to genuinely believe this? How would it change the way you live, eat, travel, and consume if you truly felt you were descended from the land and responsible to it?',
    },
    youDo:{
      title:'Māu Anō — Community and environment spiral',
      instruction:'Write your full community and environment statement — all four levels.',
      tasks:[
        'Write Nō [place] ahau + He [adj] tōku whenua + Ko ēnei ngā āhuatanga pai.',
        'Write Ko tātou ngā kaitiaki o tēnei taiao + Me tiaki tātou i… + reason.',
        'Write Ka ora te taiao, ka ora tātou + Ko tōku wawata mō te taiao.',
        '✦ Bonus: Write a full kaitiakitanga statement (10 sentences) — your origin, your community, what you love about your place, what threatens it, your responsibility, what you commit to, and your wawata for the natural world of Aotearoa.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Spiral: Argument, opinion, and persuasion',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended persuasive communication · Grammar Level 1–2: Full argument toolkit consolidated',
    aos:[{code:'AO 2.3',label:'Argument &amp; persuasion spiral'},{code:'AO 2.5',label:'Formal argument vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — From He pai ake to Tōku tūāhuatanga: the argument spiral',
      instruction:'You began arguing in Term 1 with He pai ake (better than). By Term 4 you are writing full structured arguments with taunakitanga, waihoki, and Ko te mutunga. Today we spiral the full argument toolkit — from simple comparison to philosophical persuasion.',
      example:`<b>TERM 1 level:</b><br>He pai ake te hākinakina i te noho ki te kāinga ki a au nō te mea he hauora ake.<br><br><b>TERM 2 level:</b><br>He pai ake te mahi tahi i te mahi kotahi — he nui ake ngā hua. Ka pai tāu whakaaro, engari rā…<br><br><b>TERM 3 level:</b><br>Tōku tūāhuatanga: he nui ake ngā hua o te kaitiakitanga i ngā uauatanga. Tāku taunakitanga tuatahi: Ka ora te taiao, ka ora tātou.<br><br><b>TERM 4 level:</b><br>E ai ki āku whakaaro, ko te reo Māori te taonga rangatira rawa atu o Aotearoa. Kāore noa iho — ko ia hoki te ara ki te ao o ōku tīpuna. Waihoki, ka honohono ia i ngā tāngata katoa. Ko te mutunga, me tiaki tātou i tēnei taonga mō āpōpō ō ngā uri.`,
      demo:`The argument spiral:\n\nT1: He pai ake + nō te mea (simple comparison + reason)\nT2: Whakaae/whakaaro exchanges, He tika tāu engari rā\nT3: Tūāhuatanga + taunakitanga tuatahi/tuarua\nT4: E ai ki āku whakaaro + kāore noa iho + waihoki + Ko te mutunga\n\nThe four-term argument:\nSimple → Dialogic → Structured → Philosophical\n\nNew spiral phrase:\n<b>taonga rangatira rawa atu</b> — the most precious / chiefly treasure\n<b>ko ia hoki te ara</b> — it is also the path`,
      tip:'Ko te mutunga — in conclusion. This is your power phrase. After all the evidence, all the concessions, all the comparisons — Ko te mutunga lands your final point with authority. Use it when you mean it.',
    },
    weDo:{
      title:'Kia Tūhono — Argument spiral drill',
      instruction:'Build the same argument at four different levels of sophistication.',
      sentences:[
        'T1 level: He pai ake te [X] i te [Y] ki a au nō te mea…',
        'T2 level: He tika tāu whakaaro — engari rā, ko tāku whakaaro he [counter-view].',
        'T3 level: Tōku tūāhuatanga: [position]. Tāku taunakitanga tuatahi: [evidence].',
        'T4 level: E ai ki āku whakaaro… Kāore noa iho… Waihoki… Ko te mutunga…',
      ],
      prompt:'Ko te mutunga, me tiaki tātou i tēnei taonga mō āpōpō ō ngā uri. A conclusion that points to future generations. The best arguments in te ao Māori often end by considering uri (descendants). Why? What does including future generations in an argument do to its moral weight?',
    },
    youDo:{
      title:'Māu Anō — Full argument spiral',
      instruction:'Write a four-level argument about te reo Māori — from simple to philosophical.',
      tasks:[
        'T1 level: He pai ake te ako i te reo Māori i [alternative] nō te mea…',
        'T3 level: Tōku tūāhuatanga + two taunakitanga (tuatahi/tuarua).',
        'T4 level: E ai ki āku whakaaro + kāore noa iho + waihoki + Ko te mutunga.',
        '✦ Bonus: Write your finest persuasive piece (10 sentences) about why te reo Māori matters — using the full argument toolkit from all four terms. This is your year-end statement of belief.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — Spiral: He kōrero ā-iwi — A community conversation',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Community · AO 2.1: Relationships · AO 2.3: Extended conversation — all community domains',
    aos:[{code:'AO 2.1',label:'Community relationships spiral'},{code:'AO 1.4',label:'Identity &amp; community spiral'}],
    iDo:{
      title:'Tāua Kōrero — Everything about community in one conversation',
      instruction:'Today we spiral all the community language from the year — whānau, hapū, iwi, marae, school, environment, kaitiakitanga, relationships — into one rich conversation.',
      example:`<b>A:</b> Tēnā koe. Nō hea koe ā ko wai ōu iwi?<br><b>B:</b> Nō Ōtautahi ahau. Ko Ngāi Tahu tōku iwi, ko Ngāti Māmoe tōku hapū.<br><b>A:</b> He aha ngā āhuatanga pai rawa atu o tō rohe ki a koe?<br><b>B:</b> Ko ēnei: he ātaahua te taiao, he māia ngā tāngata, ā he rangatira hoki te reo o tēnei whenua.<br><b>A:</b> He aha tō kawenga ki tōu hapori?<br><b>B:</b> He kawenga ōku ki te tiaki i te taiao, ki te kōrero i te reo Māori, ā ki te whakaaro nui mō ngā uri — nā ōku tīpuna ki a au, ā māku ki ōku uri.<br><b>A:</b> Ka wani kē! Ko tāu kōrero he māramatanga ki a au.<br><b>B:</b> Tēnā koe. Ka nui ōku mihi ki a koe mō tāu aro mai ki ōku kōrero.`,
      demo:`New spiral phrases:\n<b>tō rohe</b> — your region / area / territory\n<b>Ko ēnei: [list]</b> — These are: (using Ko ēnei for listing community assets)\n<b>nā ōku tīpuna ki a au</b> — from my ancestors to me\n<b>ā māku ki ōku uri</b> — and from me to my descendants\n<b>Ka wani kē!</b> — That is amazing! (from Term 3 Week 5!)\n<b>Ko tāu kōrero he māramatanga ki a au.</b>\nYour words are an enlightenment to me.\n<b>mō tāu aro mai ki ōku kōrero</b> — for turning toward my words / for listening to me\n<b>aro mai</b> — turn toward / face toward / attend to`,
      tip:'Nā ōku tīpuna ki a au, ā māku ki ōku uri — from my ancestors to me, and from me to my descendants. This sentence places you in the middle of a chain that stretches from the past to the future. You are not the beginning or the end — you are the bridge.',
    },
    weDo:{
      title:'Kia Tūhono — Community spiral conversation',
      instruction:'Build a community conversation touching every domain from the year.',
      sentences:[
        'Open with formal greeting + Nō hea koe + ko wai ōu iwi/hapū.',
        'Share Ko ēnei ngā āhuatanga pai rawa atu o tōku rohe: a Ko ēnei list.',
        'State your kawenga: He kawenga ōku ki te [three responsibilities].',
        'Close with nā ōku tīpuna ki a au, ā māku ki ōku uri + Ka nui ōku mihi.',
      ],
      prompt:'Ko tāu kōrero he māramatanga ki a au — your words are an enlightenment to me. This is the highest compliment in a te reo conversation — you have not just been understood, you have brought light. When has someone\'s words brought light to YOU this year? In te reo or in any language?',
    },
    youDo:{
      title:'Māu Anō — Community spiral conversation',
      instruction:'Have a full community conversation — every domain from Terms 1–4.',
      tasks:[
        'Exchange origins, iwi/hapū, and region descriptions.',
        'Share Ko ēnei ngā āhuatanga pai lists about your communities.',
        'State your kawenga and the nā ōku tīpuna ki a au chain.',
        '✦ Bonus: Write the full conversation (14+ lines). Annotate which term each piece of language comes from — T1, T2, T3, or T4. How evenly distributed is it? Which term contributed the most to this conversation?',
      ],
    },
  },
}

const FRIDAY_QUIZ_T4W8 = [
  {day:'Monday',  q:'"E tipu ana tōku ngākau āhua te rākau i te tōanga o te kōanga." What figure of speech is this?',options:['metaphor','personification','simile — the heart grows LIKE a tree in spring','alliteration'],correct:2},
  {day:'Monday',  q:'What is the difference between He nui (T1) and Ko te reo he aho e whiri ana i ngā tāngata (T4)?',options:['One is a description of size; the other is a metaphor about language connecting people','They mean the same thing','One is formal, one is casual','One uses past tense, one uses present'],correct:0},
  {day:'Tuesday', q:'"Ko au he uri o tēnei whenua." What does this sentence claim about the speaker\'s relationship to the land?',options:['The speaker owns the land','The speaker is a guardian employed to protect the land','The speaker is a descendant of the land — belonging to it','The speaker is a visitor from another land'],correct:2},
  {day:'Tuesday', q:'"Ka ora te taiao, ka ora tātou." What principle does this whakataukī-style sentence express?',options:['The environment is more important than people','Our wellbeing and the environment\'s wellbeing are inseparable','We must protect the environment because we are told to','The environment survives without people'],correct:1},
  {day:'Wednesday',q:'What is "tūāhuatanga" in an argument context?',options:['the conclusion','the evidence','your position / stance','the introduction'],correct:2},
  {day:'Wednesday',q:'"Ko te mutunga, me tiaki tātou i tēnei taonga mō āpōpō ō ngā uri." What does including "ngā uri" in a conclusion do?',options:['It weakens the argument by looking too far ahead','It adds moral weight by considering future generations','It is required by te reo grammar','It replaces the need for evidence'],correct:1},
  {day:'Thursday', q:'"Nā ōku tīpuna ki a au, ā māku ki ōku uri." What chain does this sentence describe?',options:['The chain of school learning','The chain of money and resources','The chain of responsibility from ancestors through the speaker to descendants','The chain of greetings in a pōhiri'],correct:2},
  {day:'Thursday', q:'"Ko tāu kōrero he māramatanga ki a au." What is the speaker expressing?',options:['The other person is talking too much','Your words have brought enlightenment / light to me','I do not understand what you said','Please speak more clearly'],correct:1},
]

const CURRICULUM_T4W9 = {
  Monday: {
    topic:'Arotake ā-reo — Spiral: Arts, culture, and whakataukī',
    nzLink:'Te Aho Arataki Marau — AO 1.4: Cultural identity · AO 2.5: Arts and figurative language · AO 2.3: Extended cultural communication',
    aos:[{code:'AO 1.4',label:'Arts &amp; culture spiral'},{code:'AO 2.5',label:'Whakataukī &amp; figurative spiral'}],
    iDo:{
      title:'Tāua Kōrero — From toi whakairo to Ko te reo he aho: the culture spiral',
      instruction:'Today we spiral the arts, culture, and wisdom strand — haka, waiata, whakairo, raranga, whakataukī, tikanga. These are the domains that connect language to living culture. By Term 4, you can not just name them — you can explain, analyse, and connect them to identity.',
      example:`<b>TERM 3 level (naming):</b><br>Ko te haka tētahi mahi toi rongonui o Aotearoa.<br>He tohu aroha te haka — he tohu kaha hoki.<br><br><b>TERM 4 level (explaining):</b><br>Ko te tikanga o te haka ko te whakamana i te tangata me tōna hapori.<br>Ko tā tēnei mahi toi mōhio ko te mana o te kaha me te aroha — ko ērā ngā mea e kore e wehewehea.<br><br><b>WHAKATAUKĪ spiral:</b><br>"He aha te mea nui o te ao? He tangata, he tangata, he tangata."<br>Ko tā tēnei whakataukī mōhio ko te pūtake o ngā mea katoa — ko ngā tāngata.`,
      demo:`The culture spiral levels:\n\nNaming: Ko te haka tētahi mahi toi.\nDescribing: He tohu aroha, he tohu kaha.\nExplaining: Ko te tikanga o te haka ko te…\nConnecting to identity: Ko tā tēnei mōhio ko te mana o te tangata.\nUsing as evidence: Hei tauira, ko te haka — arā, ko ia he tohu o ngā mea e kore e wehewehea.\n\nNew spiral phrase:\n<b>whakamana</b> — to empower / to honour / to give authority to\n<b>Ko te tikanga o te haka ko te whakamana i te tangata.</b>\nThe meaning of haka is to honour/empower the person.\n<b>e kore e wehewehea</b> — that cannot be separated`,
      tip:'E kore e wehewehea — cannot be separated. Love and strength in haka. Language and identity in te reo. Land and people in kaitiakitanga. The most important things in te ao Māori e kore e wehewehea — they cannot be separated from each other.',
    },
    weDo:{
      title:'Kia Tūhono — Arts and culture spiral',
      instruction:'Spiral through every level of arts and culture language.',
      sentences:[
        'Name three mahi toi: Ko ēnei ngā mahi toi ōku: he [X], he [Y], he [Z].',
        'Explain one: Ko te tikanga o te [art form] ko te [explanation].',
        'Give deeper meaning: Ko tā tēnei mahi toi mōhio ko te [deeper lesson].',
        'Use a whakataukī as evidence: Hei tauira, [whakataukī] — arā, [explanation].',
      ],
      prompt:'E kore e wehewehea — cannot be separated. What two things in YOUR life cannot be separated? Not just love and strength — something specific to you. And can you say it in te reo Māori?',
    },
    youDo:{
      title:'Māu Anō — Arts and culture spiral writing',
      instruction:'Write about art, culture, and wisdom at Term 4 level.',
      tasks:[
        'Name your favourite art form and explain its tikanga: Ko te tikanga o te [art] ko te…',
        'Give its deeper meaning: Ko tā tēnei mōhio ko te…',
        'Use a whakataukī as evidence with hei tauira and arā.',
        '✦ Bonus: Write a full cultural explanation (8 sentences) of one art form or cultural practice — naming, describing, explaining tikanga, deeper meaning, whakataukī evidence, connection to identity, and a personal wawata about that art form.',
      ],
    },
  },
  Tuesday: {
    topic:'Arotake ā-reo — Spiral: Full grammar — every structure in conversation',
    nzLink:'Te Aho Arataki Marau — All Grammar Level 1–2 · All AOs — final spiral',
    aos:[{code:'AO 2.3',label:'Full grammar spiral'},{code:'AO 2.4',label:'Tense &amp; structure mastery'}],
    iDo:{
      title:'Tāua Kōrero — Every structure, natural and fluent',
      instruction:'This is the penultimate grammar lesson of the year. Today we use every major structure from the full year in a single natural passage — not to show off, but to feel how effortlessly they can work together when you are not thinking about them individually.',
      example:`<b>A four-term grammar showcase passage:</b><br><br>Ko ahau ko [name] — he ākonga i tīmatahia noatia e tētahi kupu inanahi, ināianei, kua tipu ōku kupu ki tētahi ao hou.<br><br>E ako tonu ana au, kāore anō kua oti — engari, ahakoa he uauatanga i ōku ara, i mahi tonu au nō te mea ko tōku moemoeā tōku māramatanga.<br><br>Ka taea e au te mihi, ka taea e au te tuhituhi, ka taea e au te whakaaro i tēnei reo rangatira — ko ia te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=aho" target="_blank" rel="noopener">aho</a> e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whiri" target="_blank" rel="noopener">whiri</a> ana i a au ki ngā tīpuna.<br><br>Māku e tiaki. Māku e whakaora. Māku e whakaatu.<br><br>Ko te mutunga, ko tōku wawata: ka toitū tēnei reo tapu hei oranga mō ōku uri ā āpōpō. Ka huri.`,
      demo:`Every structure in that passage:\nKo (identity ×2)\nHe (description)\nI (past: i tīmatahia)\nKua (perfect: kua tipu, kua oti)\nE…ana (progressive: E ako tonu ana)\nKāore anō kua (perfect negative)\nAhakoa (concession)\nNō te mea (reason)\nKo + moemoeā (dream)\nKa taea (ability ×3)\nKo [metaphor] (Ko ia te aho…)\nai (relative: e whiri ana i a au)\nMāku e (commitment ×3)\nKo te mutunga (conclusion)\nKo + wawata (aspiration)\nHei oranga (purpose)\nKa huri (story close)\n\n17 different structures. One passage. And it sounds like real te reo.`,
      tip:'When you stop thinking about structures and start thinking about what you want to say, the structures take care of themselves. That is fluency. That is what this year has been building toward.',
    },
    weDo:{
      title:'Kia Tūhono — Final grammar spiral',
      instruction:'Read the showcase passage together aloud — then each student writes their own version.',
      sentences:[
        'Open: Ko ahau ko [name] — he ākonga i tīmatahia noatia e tētahi kupu inanahi, ināianei…',
        'Middle: E ako tonu ana au, kāore anō kua oti — ahakoa… nō te mea…',
        'Achievement: Ka taea e au te… ka taea e au te… ka taea e au te…',
        'Commitment + close: Māku e tiaki. Māku e whakaora. Ko tōku wawata: ka… Ka huri.',
      ],
      prompt:'Ko tōku moemoeā tōku māramatanga — my dream is my understanding/clarity. Not wealth, not fame, not even success — māramatanga. Clarity of thought and understanding. Is this your dream too? What does māramatanga mean to you — in te reo and in life?',
    },
    youDo:{
      title:'Māu Anō — Final grammar showcase',
      instruction:'Write YOUR version of the four-term grammar showcase passage.',
      tasks:[
        'Write Ko + He sentences about your identity and your character.',
        'Write I + Kua + E…ana about your learning journey.',
        'Write Ka taea sentences about what you can do + Ko metaphor.',
        '✦ Bonus: Write your full four-term grammar showcase (12 sentences) — every structure from the year, in service of something true about you and your te reo journey. End with Ka huri.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Spiral: He mihi ki a tātou — A tribute to each other',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 2.5: Full vocabulary · AO 1.1: Formal acknowledgement',
    aos:[{code:'AO 2.3',label:'Tribute writing'},{code:'AO 1.1',label:'Formal acknowledgement'}],
    iDo:{
      title:'Tāua Kōrero — Writing tributes to people who matter',
      instruction:'In Term 2 Week 8 you wrote tributes to people you admire using He tangata atawhai, He tangata pukumahi, and Ko ia te pou o tōku ao. Today we spiral back to that — but at Term 4 level, writing tributes that use the full year\'s vocabulary and express deep appreciation.',
      example:`<b>TERM 2 level:</b><br>Ko Hēmi tōku hoa pai rawa atu. He tangata atawhai, he tangata ngākaunui hoki ia.<br>Ka ora tōku ngākau i tōna āhua.<br><br><b>TERM 4 level:</b><br>Ko [name] tētahi o ngā tāngata nui rawa atu i tōku ao — ko ia he pou o tōku oranga.<br>I āwhina ia i a au i ngā wā katoa e uaua ana ōku ara — e kore e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=wareware" target="_blank" rel="noopener">wareware</a> ana i a au tōna <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=atawhai" target="_blank" rel="noopener">atawhai</a>.<br>Ko tā tōna āhua mōhio ki a au ko te tikanga o te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=toa+takitini" target="_blank" rel="noopener">toa takitini</a> — ka toa tātou i a ia.<br>Nō reira, tēnā koe [name] mō tāu āwhina, mō tāu aroha, mō tāu oranga ki a au.`,
      demo:`The tribute spiral:\n\nT2 level: He tangata [character] · Ko ia te pou · Ka ora tōku ngākau\nT4 level: Ko ia he pou o tōku oranga · e kore e wareware ana · ko tā tōna āhua mōhio · tēnā koe mō tāu [X, Y, Z]\n\nNew tribute vocabulary:\n<b>e kore e wareware ana i a au</b> — I will never forget (wareware = forget)\n<b>ko tā tōna āhua mōhio ki a au</b> — what their character teaches me\n<b>ka toa tātou i a ia</b> — we are victorious/strong through them\n<b>mō tāu aroha</b> — for your love/compassion\n<b>mō tāu oranga ki a au</b> — for your life force toward me`,
      tip:'Tēnā koe mō tāu āwhina, mō tāu aroha, mō tāu oranga ki a au. Three mō phrases — three things you are grateful for. When you say someone\'s contributions in three, you are honouring them in the way te ao Māori honours everything important — three times, three ways.',
    },
    weDo:{
      title:'Kia Tūhono — Tribute writing',
      instruction:'Write a tribute to someone in this class — your teacher, a classmate, or someone who helped you learn te reo this year.',
      sentences:[
        'Identity + character: Ko [name] tētahi o ngā tāngata nui rawa atu i tōku ao. He tangata [X], he tangata [Y] hoki ia.',
        'What they did: I āwhina ia i a au i [specific moment/way] — e kore e wareware ana i a au.',
        'What their character teaches: Ko tā tōna āhua mōhio ki a au ko te [lesson].',
        'Close: Nō reira, tēnā koe [name] mō tāu [X], mō tāu [Y], mō tāu [Z].',
      ],
      prompt:'Mō tāu oranga ki a au — for your life force toward me. Oranga (wellbeing/vitality) is something you can give to another person — through your presence, your manaakitanga, your care. Who has given their oranga to you this year in this classroom? How would you say it in te reo Māori?',
    },
    youDo:{
      title:'Māu Anō — He mihi ki tētahi',
      instruction:'Write a full tribute in te reo Māori to someone important to your learning journey this year.',
      tasks:[
        'Identity + Ko ia he pou o tōku [oranga/ako/ngākau].',
        'What they did: I āwhina ia i a au i [specific moment] + e kore e wareware.',
        'What they taught you: Ko tā tōna āhua mōhio ki a au ko te [lesson].',
        '✦ Bonus: Write a full tribute (8 sentences) — identity, character (2 traits shown not told), what they did, what they taught you, how they have changed you (Kua hou tōku whakaaro nō tōna āwhina), and close with Tēnā koe mō tāu [X, Y, Z]. Read it aloud to them if you can.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — Spiral: He kōrero ā-tau — A year in conversation',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 · Final comprehensive spiral conversation',
    aos:[{code:'AO 2.3',label:'Year spiral conversation'},{code:'AO 2.5',label:'Full year vocabulary'},{code:'AO 1.1',label:'Formal greetings'}],
    iDo:{
      title:'Tāua Kōrero — The year in one conversation',
      instruction:'This is the penultimate Thursday lesson. Today we have a conversation that spirals through every term — a conversation that could only happen at the end of Year 5-6 te reo Māori, because it requires everything you have learned.',
      example:`<b>A:</b> Tēnā koe. Ko wai koe, ā he aha tō pepeha?<br><b>B:</b> [Full 9-line pepeha + Nō reira ko ahau ko B]<br><b>A:</b> Ka pai! I tīmata koe i hea i tō ako i te reo Māori?<br><b>B:</b> I tīmata au i Wāhanga Tahi me tētahi kupu — "Kia ora." Ināianei, e ako tonu ana au, kua tipu tōku reo ki tētahi mea nui ake.<br><b>A:</b> He aha ngā mea i uaua rawa atu ki a koe?<br><b>B:</b> I uaua ki a au ngā hanganga o te tense — Ko Kua, Ko Ka. Engari, ahakoa i uaua, i mahi tonu au nō te mea ko tōku moemoeā tōku māramatanga.<br><b>A:</b> He aha tāu whakataukī e tūāhuatia ana i a koe?<br><b>B:</b> "Ehara tāku toa i te toa takitahi, he toa takitini." Ko tā tēnā mōhio ko te mana o tēnei akomanga — ko tā tātou mahi tahi i āwhina i a mātou katoa.<br><b>A:</b> Ā koia! Ko tāu kōrero he māramatanga ki a au. Mā te wā.<br><b>B:</b> Ka nui ōku mihi ki a koe. Mā te wā.`,
      demo:`This conversation touches every term:\nT1: "Kia ora" as the starting word\nT2: I tīmata au (past) · kua tipu (perfect) · e ako tonu ana (E…ana)\nT3: Whakataukī + ko tā tēnā mōhio · moemoeā\nT4: ko tā tātou mahi tahi (possession) · he māramatanga · Mā te wā\n\nNew phrase:\n<b>ko tā tātou mahi tahi</b> — our working together (ā-category possession of the group)\n<b>i āwhina i a mātou katoa</b> — helped all of us`,
      tip:'"Kia ora" was your first word. Mā te wā is how you close the year. Between those two phrases is everything. That is your year in te reo Māori.',
    },
    weDo:{
      title:'Kia Tūhono — Year spiral conversation',
      instruction:'The final group conversation practice — every term represented, no scripts.',
      sentences:[
        'T1: Tēnā koe + full pepeha from memory.',
        'T2: I tīmata au i… ināianei kua tipu tōku reo ki…',
        'T3: Whakataukī + Ko tā tēnā mōhio ko te…',
        'T4: Ko tāu kōrero he māramatanga ki a au + Mā te wā.',
      ],
      prompt:'"Kia ora" was your first word. What will your LAST word in te reo Māori be — not at the end of today, but someday, in your life? What do you hope to be saying in te reo Māori in five years? In twenty?',
    },
    youDo:{
      title:'Māu Anō — Year spiral conversation',
      instruction:'Have the full year spiral conversation with a partner — touch every term.',
      tasks:[
        'Full pepeha + Nō reira ko ahau ko [name].',
        'Learning journey: I tīmata + Kua tipu + E ako tonu ana.',
        'Whakataukī + explanation + moemoeā.',
        '✦ Bonus: Write the full conversation (16+ lines). After, write a reflection: He aha te mea i mihi ana koe ki a koe ake? (What did you appreciate about yourself?) Ka angitu koe.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T4W9 = [
  {day:'Monday',  q:'"Ko te tikanga o te haka ko te whakamana i te tangata." What does whakamana mean?',options:['to punish','to empower / honour / give authority to','to teach','to separate'],correct:1},
  {day:'Monday',  q:'"E kore e wehewehea" — in the context of haka and aroha/kaha, what does this phrase mean?',options:['it should be separated into parts','it cannot be separated — the two things are inseparable','it will never be performed again','it does not exist'],correct:1},
  {day:'Tuesday', q:'How many different grammar structures appear in the four-term showcase passage?',options:['5','9','17','23'],correct:2},
  {day:'Tuesday', q:'"Ko tōku moemoeā tōku māramatanga." What aspiration does this express?',options:['My dream is wealth and success','My dream is my understanding/clarity','My dream is to become a teacher','My dream is to travel'],correct:1},
  {day:'Wednesday',q:'"E kore e wareware ana i a au tōna atawhai." What does wareware mean?',options:['to forgive','to remember','to forget','to thank'],correct:2},
  {day:'Wednesday',q:'"Tēnā koe mō tāu āwhina, mō tāu aroha, mō tāu oranga ki a au." What is the significance of three mō phrases?',options:['It is required by grammar','Three phrases honour the person in the way te ao Māori honours important things — three times, three ways','It makes the sentence longer','Three is the number of people being thanked'],correct:1},
  {day:'Thursday', q:'"I tīmata au i Wāhanga Tahi me tētahi kupu — Kia ora." What does this sentence reflect on?',options:['The difficulty of te reo Māori','The start of the learning journey — from a single word','A complaint about Term 1','The importance of greeting properly'],correct:1},
  {day:'Thursday', q:'In the year spiral conversation, what two phrases mark the beginning and end of the whole year?',options:['"Tēnā koe" and "E noho rā"','"Kia ora" as the first word and "Mā te wā" as the year-end farewell','"Ko wai koe" and "Ka huri"','"He aha" and "Ka mutu"'],correct:1},
]

const CURRICULUM_T4W10 = {
  Monday: {
    topic:'He rā whakanui — Celebration and culmination day',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 · Whakaatu (presenting) · Full year celebrated',
    aos:[{code:'AO 1.1',label:'Formal celebration'},{code:'AO 2.3',label:'Full year expression'},{code:'AO 2.5',label:'Complete vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — He rā whakanui: a day of celebration',
      instruction:'Welcome to the final week. This week is a celebration of what you have built. Today is whakanui — honouring and making great. We do not review or test. We celebrate, perform, and share.',
      example:`<b>The whakanui structure for today:</b><br><br><b>1. Mihi whakatūwhera:</b> Teacher opens with Tēnā koutou katoa + acknowledgement of the year.<br><b>2. Pepeha pōhiri:</b> Each student delivers their pepeha — class responds with Tēnā koe after each.<br><b>3. Waiata tahi:</b> Class sings a waiata together — Ka mate, or another known waiata.<br><b>4. Kōrero pūrākau:</b> Two or three students share their pūrākau from Term 4 Week 2.<br><b>5. He whakaaro:</b> Each student shares their favourite sentence of the year.<br><b>6. Mihi whakamutunga:</b> Teacher closes with Ko tā tātou mahi tahi i hanga ai tēnei — Ka nui ōku mihi ki a koutou katoa.`,
      demo:`The language of celebration:\n\n<b>He rā whakanui tēnei.</b> — This is a day of celebration.\n<b>Ka whakanuitia ā tātou mahi.</b> — Our work is being honoured/celebrated.\n<b>Ko tā tātou mahi tahi i hanga ai tēnei.</b>\nThis is what our working together has built.\n\n<b>Mihi whakatūwhera:</b> opening tribute\n<b>Mihi whakamutunga:</b> closing tribute\n<b>whakanui</b> — to celebrate / to make great / to honour\n<b>Ka whakanuitia</b> — is being celebrated/honoured (passive)\n<b>He tino nui ōku mihi ki a koutou katoa.</b>\nMy tributes/thanks to you all are very great.`,
      tip:'Whakanui — to make great, to celebrate, to honour. When you celebrate someone\'s achievement, you are not just praising them — you are making them great in the eyes of everyone present. That is what whakanui does.',
    },
    weDo:{
      title:'Kia Tūhono — Whakanui preparation',
      instruction:'Prepare for the full class whakanui celebration.',
      sentences:[
        'Pepeha: Every student practises their full pepeha one final time. No looking — from the heart.',
        'Favourite sentence: Write your favourite te reo sentence of the year. Say it to yourself. Own it.',
        'Pūrākau: Two volunteers prepare to share their pūrākau from Term 4 Week 2.',
        'Waiata: Class practices the opening of Ka Mate or another class waiata together.',
      ],
      prompt:'Ko tā tātou mahi tahi i hanga ai tēnei — this is what our working together has built. What has the class built together? Not just language skills — but what kind of learning community? What has this class been to you?',
    },
    youDo:{
      title:'Māu Anō — Whakanui contribution',
      instruction:'Prepare your contribution to the class whakanui celebration.',
      tasks:[
        'Your pepeha: write it from memory, check it, practise until it is completely yours.',
        'Your favourite sentence: write it, say why it is your favourite.',
        'A whakaaro for the class: Ko tā tō tātou akomanga hanga ai ko… (What your class has built is…)',
        '✦ Bonus: Write a short mihi to the class (5 sentences) — acknowledge everyone, name three things the class has done together, and close with He tino nui ōku mihi ki a koutou katoa.',
      ],
    },
  },
  Tuesday: {
    topic:'He whakaaturanga — The end-of-year performance',
    nzLink:'Te Aho Arataki Marau — All AOs · Whakaatu (presenting) — final performance',
    aos:[{code:'AO 2.3',label:'Final performance'},{code:'AO 1.1',label:'Formal presentation'},{code:'AO 2.5',label:'Full vocabulary performance'}],
    iDo:{
      title:'Tāua Kōrero — Your whakaaturanga: the full performance',
      instruction:'Today is the end-of-year whakaaturanga — each student performs their full presentation to the class. This is the Whakaatu (presenting) language mode in its fullest expression. You have been preparing for this all year.',
      example:`<b>The complete whakaaturanga structure:</b><br><br><b>1.</b> Tēnā koutou katoa.<br><b>2.</b> Ko [maunga] tōku maunga… [full pepeha — all 9 lines]<br><b>3.</b> Nō reira ko ahau ko [name].<br><b>4.</b> I tīmata au i Wāhanga Tahi me tētahi kupu — "Kia ora." Ināianei, kua tipu tōku reo ki tētahi mea nui ake.<br><b>5.</b> Ko ngā pou o tōku ora ko tōku whānau, ko tōku reo, ko tōku taiao.<br><b>6.</b> Ko tōku rerenga pai rawa atu i tēnei tau ko tēnei: [your best sentence].<br><b>7.</b> Ko tōku whakataukī e tūāhuatia ana i a au ko tēnei: [whakataukī]. Ko tā tērā mōhio ko te [meaning].<br><b>8.</b> Ko tōku wawata: [your deepest aspiration for your reo].<br><b>9.</b> Tēnā koutou, tēnā koutou, tēnā koutou katoa.`,
      demo:`Nine elements, approximately 90 seconds:\n\n1. Formal opening (Tēnā koutou katoa)\n2. Pepeha (all 9 lines)\n3. Nō reira ko ahau (arrival at yourself)\n4. Learning journey (I tīmata + Kua tipu)\n5. Pillars of life (Ko ngā pou o tōku ora)\n6. Best sentence (Ko tōku rerenga pai rawa atu)\n7. Whakataukī + meaning (Ko tā tērā mōhio)\n8. Wawata (deepest aspiration)\n9. Formal close (Tēnā koutou ×3)\n\nThis is not a test. This is a gift — to yourself, to your class, and to te reo Māori.`,
      tip:'Ko tōku rerenga pai rawa atu i tēnei tau ko tēnei — my best sentence of this year is this. When you say it, say it slowly. Let everyone hear it. It is yours. You made it. And it will exist in this classroom forever.',
    },
    weDo:{
      title:'Kia Tūhono — Final preparation',
      instruction:'Last preparation round — then the performances begin.',
      sentences:[
        'Silent practice: 3 minutes. Eyes closed. Pepeha from memory, then the rest.',
        'Partner run-through: full whakaaturanga to your partner. They give one word of feedback.',
        'Class: who goes first? Volunteers? Or a karakia to open?',
        'Perform: each student delivers their whakaaturanga. Class responds with Tēnā koe after each.',
      ],
      prompt:'Ko tōku rerenga pai rawa atu i tēnei tau ko tēnei. Before you perform — what IS your best sentence? Not the most impressive one. The most true. Say it quietly to yourself right now. Feel it. Now you are ready.',
    },
    youDo:{
      title:'Māu Anō — He whakaaturanga',
      instruction:'Deliver your whakaaturanga to the class.',
      tasks:[
        'Deliver all nine elements — from Tēnā koutou katoa to Tēnā koutou ×3.',
        'After everyone has performed, write a mihi: Ko ngā rerenga i pā mai ki a au ko ēnei — [three classmates\' sentences that moved you].',
        'Write your own sentence about the class: Ko tā tō tātou akomanga hanga ai ko…',
        '✦ Bonus: Write a full reflection on delivering your whakaaturanga (6 sentences) — how it felt to say your pepeha in front of everyone, which part felt most true, what you want to remember about this moment.',
      ],
    },
  },
  Wednesday: {
    topic:'He koha ki te reo — A gift to the language',
    nzLink:'Te Aho Arataki Marau — All AOs · Creative expression · Final creative writing',
    aos:[{code:'AO 2.3',label:'Creative gift to the language'},{code:'AO 2.5',label:'Full year vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — What will you give back?',
      instruction:'You have received so much from te reo Māori this year. Today we think about what we give BACK — a koha (gift/contribution) to the language itself. This might be a poem, a statement, a whakaaro, a pūrākau, or a promise. Whatever form it takes, it is yours and it is real.',
      example:`<b>Examples of koha ki te reo:</b><br><br><b>A promise:</b><br>Ko tāku koha ki tēnei reo: māku e kōrero, māku e tiaki, māku e homai ki ōku tamariki āpōpō.<br>(My gift to this language: I will speak it, protect it, and give it to my children tomorrow.)<br><br><b>A poem:</b><br>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=reo" target="_blank" rel="noopener">reo</a> koe<br>He ara koe<br>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=aho" target="_blank" rel="noopener">aho</a> koe e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whiri" target="_blank" rel="noopener">whiri</a> ana i ngā ngākau<br>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81ramatanga" target="_blank" rel="noopener">māramatanga</a> koe ki te ao <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=pouri" target="_blank" rel="noopener">pouri</a><br>Ko koe ko ahau.<br>(You are a language / You are a path / You are a cord that weaves hearts / You are light in the dark world / You are me.)<br><br><b>A whakaaro:</b><br>Ka toitū koe i ōku kupu. Ka toitū au i āu kupu. Ko tāua ko tāua — e kore e wehewehea.`,
      demo:`Koha forms:\n\nPROMISE: Māku e [three commitments]. Ko tērā tāku koha ki a koe.\nPOEM: Use Ko/He/Ka sentences as lines. Let sound and image lead.\nWHAKAARO: A single profound statement — Ko te reo [metaphor].\nMIHI: Tēnā koe e te reo — ko tāku mihi ki a koe ko tēnei…\n\nNew creative phrase:\n<b>ao pouri</b> — dark world / world of difficulty\n<b>Ko koe ko ahau.</b> — You are me. (profound identification)\n<b>e kore e wehewehea</b> — cannot be separated (from Week 8!)\n<b>Ka toitū koe i ōku kupu.</b>\nYou endure through my words.`,
      tip:'Ko koe ko ahau — you are me. This is the most intimate thing you can say to a language. The language and the speaker have become one. Can you say this honestly about te reo Māori at the end of this year?',
    },
    weDo:{
      title:'Kia Tūhono — Create your koha',
      instruction:'Write your koha to the language — in whatever form feels right.',
      sentences:[
        'Choose your form: promise, poem, whakaaro, or mihi to the language.',
        'Draft: write freely for 5 minutes — no thinking about structures, just what you want to say.',
        'Refine: read it aloud. Change anything that doesn\'t sound true. Keep everything that does.',
        'Share: read your koha aloud to the class. They listen in silence.',
      ],
      prompt:'Ka toitū koe i ōku kupu. Ka toitū au i āu kupu. The language endures through your words. You endure through the language\'s words. A reciprocal endurance. What does it feel like to think that your words — in te reo Māori — will endure? That you will leave something in the language?',
    },
    youDo:{
      title:'Māu Anō — He koha ki te reo',
      instruction:'Write your final creative gift to te reo Māori.',
      tasks:[
        'Choose your form and write your koha — at least 5 sentences or lines.',
        'Write in te reo Māori — let the language carry your meaning.',
        'Read it aloud once more before you share. Make it yours completely.',
        '✦ Bonus: Write a bilingual version — your koha in te reo Māori alongside an English version. Then ask: which version feels more true? Which says it better? What does the language you chose reveal about what the words mean?',
      ],
    },
  },
  Thursday: {
    topic:'He whakamātautau whakamutunga — The final assessment of the year',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 · All six language modes · Final year assessment',
    aos:[{code:'AO 1.1',label:'Greetings'},{code:'AO 1.2',label:'Introductions'},{code:'AO 1.4',label:'Identity'},{code:'AO 2.3',label:'Full spontaneous conversation'},{code:'AO 2.5',label:'Full vocabulary'},{code:'AO 1.6',label:'Politeness'}],
    iDo:{
      title:'Tāua Kōrero — The end',
      instruction:'This is the last lesson of the year. There is no model conversation today. You know what to do. You have been preparing for this since Week 1 of Term 1. Go.',
      example:`What the final assessment asks of you:<br><br><b>Open formally.</b> Tēnā koe.<br><b>Give your full <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=pepeha" target="_blank" rel="noopener">pepeha</a>.</b> All 9 lines. From your heart, not your memory.<br><b>Talk about your year.</b> What happened. How you felt. What grew.<br><b>Share a <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Whakataukī" target="_blank" rel="noopener">whakataukī</a>.</b> The one that represents you. Explain its meaning.<br><b>State your <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=wawata" target="_blank" rel="noopener">wawata</a>.</b> Your deepest aspiration for your reo and your life.<br><b>Close.</b> Ka nui ōku mihi. Mā te wā.<br><br>That is the assessment. Not what structures you use — but whether you mean what you say.`,
      demo:`What the assessor is listening for:\n\n✓ Does this person MEAN what they are saying?\n✓ Is the language NATURAL — not performed but inhabited?\n✓ Do the structures SERVE the meaning, rather than the meaning serving the structures?\n✓ Is the pepeha delivered with confidence and pride?\n✓ Is the whakataukī CHOSEN, not recited?\n✓ Is the wawata GENUINE — something the speaker actually aspires to?\n✓ Is the farewell warm and complete?\n\nYou do not need to be perfect. You need to be present.\n\nKa angitu koe.`,
      tip:'Ka angitu koe. You will succeed. Not because you are ready — but because you have been ready since before you knew it. The year built you for this moment. Trust it.',
    },
    weDo:{
      title:'Kia Tūhono — He karakia whakamutunga',
      instruction:'Before the assessments begin, the class says a karakia together — an acknowledgement and closing of the year.',
      sentences:[
        'Together: <b>Unuhia, unuhia, unuhia ki uta!</b> (Lift it, lift it, lift it to the shore!)',
        'Together: <b>Kia wātea, kia māmā.</b> (Let it be free, let it be light.)',
        'Together: <b>Āe rā.</b> (Indeed.)',
        'Then: assessments begin. Each student takes their turn.',
      ],
      prompt:'Kia wātea, kia māmā — let it be free, let it be light. The karakia releases the class from the constraints of ordinary learning into the freedom of genuine expression. What does it mean to be "free and light" in a language? Have you felt that this year, even once?',
    },
    youDo:{
      title:'Māu Anō — He whakamātautau whakamutunga',
      instruction:'Your final assessment. Your last act in te reo Māori this year.',
      tasks:[
        '<b>Full spontaneous conversation</b> — no script. At least 16 lines. Every domain.',
        '<b>Self-assessment:</b> He aha tōku pai? He aha tōku uauatanga? He aha tāku ka ako tonu ai?',
        '<b>Final written record:</b> Ko tōku rerenga whakamutunga o tēnei tau ko tēnei: [your final sentence].',
        '✦ Final checklist: ☐ Pepeha (9 lines, from the heart) · ☐ Learning journey (I/Kua/E…ana) · ☐ Whakataukī + meaning · ☐ Wawata (genuine) · ☐ Ka nui ōku mihi · ☐ Mā te wā · ☐ The whole thing meant.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T4W10 = [
  {day:'Monday',  q:'"Ka whakanuitia ā tātou mahi." What does whakanui mean?',options:['to test and grade','to review and correct','to celebrate / honour / make great','to repeat and practise'],correct:2},
  {day:'Monday',  q:'"Ko tā tātou mahi tahi i hanga ai tēnei." What does this sentence reflect on?',options:['The teacher\'s individual work','What their working together has built as a class','A past event from Term 1','A future plan for next year'],correct:1},
  {day:'Tuesday', q:'How many elements does the final whakaaturanga have?',options:['5','7','9','12'],correct:2},
  {day:'Tuesday', q:'"Ko tōku rerenga pai rawa atu i tēnei tau ko tēnei." What is the speaker doing?',options:['Asking for the best sentence','Sharing their finest sentence of the year','Explaining a whakataukī','Describing their school'],correct:1},
  {day:'Wednesday',q:'"Ko koe ko ahau." In the context of language, what does this mean?',options:['You and I are different','You are my teacher','The language and the speaker have become one — a profound identification','I do not know you'],correct:2},
  {day:'Wednesday',q:'"Ka toitū koe i ōku kupu. Ka toitū au i āu kupu." What relationship does this describe?',options:['A competitive relationship between speaker and language','A reciprocal endurance — the language endures through your words, you endure through the language\'s words','A one-way gift from language to speaker','A past memory'],correct:1},
  {day:'Thursday', q:'The final assessment asks whether you MEAN what you say. What does this reveal about the purpose of language learning?',options:['Grammar accuracy is the only goal','Language learning is about performing for assessment','Genuine expression — inhabiting the language rather than just performing it — is the highest achievement','Vocabulary size determines success'],correct:2},
  {day:'Thursday', q:'"Kia wātea, kia māmā." What does this karakia invoke?',options:['Difficulty and challenge','Speed and accuracy','Freedom and lightness — releasing from constraint into genuine expression','Silence and stillness'],correct:2},
]

function getTerm4Data(week) {
  const curricula = {
    1: CURRICULUM_T4W1, 2: CURRICULUM_T4W2, 3: CURRICULUM_T4W3,
    4: CURRICULUM_T4W4, 5: CURRICULUM_T4W5, 6: CURRICULUM_T4W6,
    7: CURRICULUM_T4W7, 8: CURRICULUM_T4W8, 9: CURRICULUM_T4W9, 10: CURRICULUM_T4W10
  }
  const quizzes = {
    1: FRIDAY_QUIZ_T4W1, 2: FRIDAY_QUIZ_T4W2, 3: FRIDAY_QUIZ_T4W3,
    4: FRIDAY_QUIZ_T4W4, 5: FRIDAY_QUIZ_T4W5, 6: FRIDAY_QUIZ_T4W6,
    7: FRIDAY_QUIZ_T4W7, 8: FRIDAY_QUIZ_T4W8, 9: FRIDAY_QUIZ_T4W9, 10: FRIDAY_QUIZ_T4W10
  }
  return { curriculum: curricula[week] || null, quiz: quizzes[week] || null }
}

