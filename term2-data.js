
// ════════════════════════════════════════════════════════════════
// TERM 2 — KIA TIPU (GROWING)
// Weeks 1–10 · All lesson data for Term 2
// ════════════════════════════════════════════════════════════════

const CURRICULUM_T2W1 = {
  Monday: {
    topic:'I haere au — The past tense unlocked',
    nzLink:'Te Aho Arataki Marau — AO 2.4: Time · AO 2.3: Extended communication · Grammar Level 1–2: I (past tense marker), action verbs in past',
    aos:[{code:'AO 2.4',label:'Past tense &amp; time'},{code:'AO 2.3',label:'Retelling events'}],
    iDo:{
      title:'Tāua Kōrero — Welcome back: from now to then',
      instruction:'Nau mai, hoki mai — welcome back. Last term you mastered Kei te for right now. This term we begin by going back in time. You already met the past tense briefly in Term 1 — today we make it solid. Watch how simple the switch is.',
      example:`<b>Kei te</b> haere au. — I am going. (RIGHT NOW)<br><b>I</b> haere au. — I went. (PAST)<br><br><b>Kei te</b> kai ia. — She is eating.<br><b>I</b> kai ia. — She ate.<br><br><b>Kei te</b> ako ngā tamariki. — The children are learning.<br><b>I</b> ako ngā tamariki. — The children learned.<br><br><b>Kei te</b> tākaro rātou i waho. — They are playing outside.<br><b>I</b> tākaro rātou i waho inanahi. — They played outside yesterday.`,
      demo:`The switch from present to past in te reo Māori is the simplest thing you will ever do:\n\nReplace <b>Kei te</b> with <b>I</b>.\n\nThat is it. The verb does not change. The person does not change. The word order does not change. Only the tense marker changes.\n\n<b>Kei te</b> → RIGHT NOW\n<b>I</b> → PAST (it happened, it is done)\n\nIn English, you must change the verb: "go → went", "eat → ate", "run → ran" — and you must memorise dozens of irregular forms. Te reo Māori never does this. The verb is ALWAYS the same. Only the marker changes.\n\nTime words that go with I:\n<b>inanahi</b> — yesterday\n<b>i tērā wiki</b> — last week\n<b>i tērā tau</b> — last year\n<b>i mua</b> — before / previously\n<b>i tēnei ata</b> — this morning`,
      tip:'Kei te = now. I = then. Swap the marker, keep everything else exactly the same. That is the whole rule.',
    },
    weDo:{
      title:'Kia Tūhono — Switch the tense',
      instruction:'I give you a present tense sentence — you switch it to past. Then we add a time word.',
      sentences:[
        'Present: <b>Kei te haere au ki te kura.</b> → Past: <b>I haere au ki te kura inanahi.</b>',
        'Present: <b>Kei te kai rātou i te tina.</b> → Past: <b>I kai rātou i te tina i tērā wiki.</b>',
        'Present: <b>Kei te mahi kaha ngā ākonga.</b> → Past: <b>I mahi kaha ngā ākonga i tēnei ata.</b>',
        'Now you give ME a present tense sentence — I will switch it to past. Then swap roles.',
      ],
      prompt:'In English, switching to past tense means changing the verb — "play → played", "go → went", "eat → ate". Te reo Māori never changes the verb. Only the marker changes. Which system feels more logical to you? Which is easier to learn?',
    },
    youDo:{
      title:'Māu Anō — Tell me what happened',
      instruction:'Write past tense sentences about real things that happened.',
      tasks:[
        'Write three past tense sentences about what you did inanahi (yesterday).',
        'Write two past tense sentences about what happened i tērā wiki (last week).',
        'Take this sentence and make it past: <b>Kei te omaoma kaha ia i waho.</b>',
        '✦ Bonus: Write a six-sentence recount of something that happened in the holidays. Use I for every sentence, and include at least two time words.',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā kupumahi o mua — More past tense action verbs',
    nzLink:'Te Aho Arataki Marau — AO 1.5: Location · AO 2.3: Retelling · Grammar Level 1–2: Past tense with action verbs, object marker i',
    aos:[{code:'AO 2.3',label:'Retelling past events'},{code:'AO 1.5',label:'Past location'}],
    iDo:{
      title:'Tāua Kōrero — Actions in the past with objects',
      instruction:'Yesterday we switched tense markers. Today we add objects — the THINGS that actions happen to. In te reo Māori, when a verb has a direct object, you mark it with the small word i (different from the past tense I — notice the capital). Watch how they work together.',
      example:`<b>I hoko au</b> i te āporo.<br>I bought an apple. (hoko = buy, i te āporo = the apple)<br><br><b>I pānui ia</b> i tāna pukapuka.<br>She read her book.<br><br><b>I tuhituhi ngā tamariki</b> i ā rātou reta.<br>The children wrote their letters. (<a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=reta" target="_blank" rel="noopener">reta</a> = letter)<br><br><b>I kite au</b> i tōku hoa.<br>I saw my friend. (kite = see/find)<br><br><b>I <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rongo" target="_blank" rel="noopener">rongo</a> ia</b> i te tangi o te manu.<br>She heard the cry of the bird. (<a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rongo" target="_blank" rel="noopener">rongo</a> = hear/feel, <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tangi" target="_blank" rel="noopener">tangi</a> = cry/sound, <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=manu" target="_blank" rel="noopener">manu</a> = bird)`,
      demo:`The structure with an object:\n\n<b>I</b> + [verb] + [person] + <b>i</b> + [object]\n\nThe small <b>i</b> before the object is the OBJECT MARKER — it signals "and here is the thing the action happened to."\n\nDo not confuse:\n→ <b>I</b> (capital, start of sentence) = PAST tense marker\n→ <b>i</b> (lowercase, before object) = OBJECT marker\n\nBoth are in this sentence:\n<b>I</b> hoko au <b>i</b> te āporo.\nPAST + buy + I + OBJECT + the apple.\n\nNew verbs:\n<b>kite</b> — see / find / discover\n<b>rongo</b> — hear / feel / sense\n<b>hoatu</b> — give (away from speaker)\n<b>homai</b> — give (toward speaker)\n<b>tango</b> — take / pick up\n<b>reta</b> — letter`,
      tip:'Capital I at the start = past tense. Lowercase i before an object = object marker. Same sound, completely different job. Context and position always make it clear.',
    },
    weDo:{
      title:'Kia Tūhono — Past tense with objects',
      instruction:'Build past tense sentences that include an object. I give you the verb and object — you build the sentence.',
      sentences:[
        'Verb: kite (see), Object: tōku hoa (my friend) → <b>I kite au i tōku hoa.</b>',
        'Verb: hoko (buy), Object: he panana (a banana) → <b>I hoko ia i he panana.</b>',
        'Verb: homai (give to me), Object: tāna pukapuka (her book) → <b>I homai ia i tāna pukapuka ki a au.</b>',
        'Now make your own: something you saw, heard, or found yesterday. Use I + verb + au + i + object.',
      ],
      prompt:'The object marker i does the same job as "the" in "I bought THE apple" — it points at a specific thing. Why do you think te reo Māori needs a separate marker for this? What would happen to the sentence without it?',
    },
    youDo:{
      title:'Māu Anō — What did you do?',
      instruction:'Write past tense sentences that include direct objects.',
      tasks:[
        'Write three sentences using different verbs: kite, rongo, hoko. Include an object in each.',
        'Write a sentence using homai: something someone gave you.',
        'Write a sentence using tango: something you picked up or took.',
        '✦ Bonus: Write a paragraph (5 sentences) about a trip to a shop or market. Use I for every sentence. Include at least three different objects using the object marker i.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Building past tense stories',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 2.4: Time · Grammar Level 1–2: Sequencing past events with time words and conjunctions',
    aos:[{code:'AO 2.3',label:'Story sequencing'},{code:'AO 2.4',label:'Time &amp; sequence'}],
    iDo:{
      title:'Tāua Kōrero — Chaining past events into a story',
      instruction:'You can write individual past tense sentences. Today we chain them into a flowing story — connecting events in sequence using time words and conjunctions you already know. Watch how a story builds from simple parts.',
      example:`<b>I <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ara" target="_blank" rel="noopener">ara</a> au i te ata.</b><br>I woke up in the morning.<br><br><b>I kai au i tōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=parakuihi" target="_blank" rel="noopener">parakuihi</a>, ā i inu au i tōku tī.</b><br>I ate my breakfast and I drank my tea.<br><br><b>I te wā i mutu tōku parakuihi, i <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=horoi" target="_blank" rel="noopener">horoi</a> au i ōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=niho" target="_blank" rel="noopener">niho</a>.</b><br>When my breakfast was finished, I brushed my teeth.<br><br><b>I haere au ki te kura — i tere haere au nō te mea i tata ahau ki te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C5%ABreiti" target="_blank" rel="noopener">tūreiti</a>!</b><br>I went to school — I went quickly because I was nearly late!<br><br><b>Ahakoa i <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=oma" target="_blank" rel="noopener">oma</a> au, i <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tae" target="_blank" rel="noopener">tae</a> tonu ahau i muri i te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=pirangi" target="_blank" rel="noopener">pirangi</a>.</b><br>Although I ran, I still arrived after the bell.`,
      demo:`New words in this story:\n<b>ara</b> — wake up / rise\n<b>parakuihi</b> — breakfast\n<b>horoi niho</b> — brush teeth (horoi = wash/clean, niho = teeth)\n<b>tūreiti</b> — late\n<b>tae</b> — arrive / reach\n<b>pirangi</b> — bell\n<b>i muri i</b> — after\n<b>tata</b> — nearly / close to\n\nNotice the conjunctions doing their jobs:\n→ <b>ā</b> joining two actions in sequence\n→ <b>i te wā</b> setting a time clause\n→ <b>nō te mea</b> giving a reason\n→ <b>ahakoa</b> showing a surprise\n\nAll from Term 1 — now used in a past tense story.`,
      tip:'A good past tense story has a beginning (scene-set), a middle (sequence of events), and an end (result or reflection). Use your conjunctions to connect the parts — they are the glue.',
    },
    weDo:{
      title:'Kia Tūhono — Build the morning story',
      instruction:'We build a class morning story together. I give the first sentence — you add the next one, and we keep going.',
      sentences:[
        'Opening: <b>I ara au i te ata tino mutunga.</b> (I woke up very late.) What happened next? Add a sentence with ā.',
        'Add a when-clause: <b>I te wā i…, i…</b> — something that happened when something else did.',
        'Add a reason using nō te mea — why did something happen the way it did?',
        'Close with ahakoa — something surprising happened despite the situation.',
      ],
      prompt:'Notice how the conjunctions create tension and surprise in the story. "Ahakoa i oma au, i tae tonu ahau i muri i te pirangi" — the ahakoa sets up an expectation, then the main clause breaks it. How does that feel different from just saying "I ran. I was late."?',
    },
    youDo:{
      title:'Māu Anō — Tell your morning story',
      instruction:'Write a past tense story about your morning today — from waking up to arriving at school.',
      tasks:[
        'Write four I sentences about the sequence of what you did this morning.',
        'Add at least one i te wā clause and one nō te mea reason.',
        'Add one ahakoa sentence — something surprising or unexpected.',
        '✦ Bonus: Write the full story in eight sentences. Include: a fronted time phrase, an object marker, a conjunction, and one vivid sound word from Term 1 Week 9.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero mō ngā hararei — Talking about the holidays',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 2.4: Time · AO 2.5: Expressive vocabulary',
    aos:[{code:'AO 2.3',label:'Holiday recount'},{code:'AO 2.4',label:'Past time expressions'}],
    iDo:{
      title:'Tāua Kōrero — What did you do in the holidays?',
      instruction:'The most natural first conversation after a holiday is "what did you do?" Today we have that conversation entirely in te reo Māori. Listen to how the past tense flows naturally in real back-and-forth dialogue.',
      example:`<b>A:</b> Tēnā koe! He pēhea ōu hararei?<br><b>B:</b> He tino pai! I haere au ki Ōtautahi me tōku whānau.<br><b>A:</b> Ka pai! He aha ngā mea i mahia e koutou?<br><b>B:</b> I haere mātou ki te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=taiao" target="_blank" rel="noopener">taiao</a>, ā i kite mātou i ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=manu" target="_blank" rel="noopener">manu</a> ātaahua o reira.<br><b>A:</b> I ngenge koutou?<br><b>B:</b> Āe, i ngenge mātou — engari i hari hoki mātou! Ko tērā tōku hararei pai rawa atu.<br><b>A:</b> He pēhea te āhua o te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rangi" target="_blank" rel="noopener">rangi</a>?<br><b>B:</b> I <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=makariri" target="_blank" rel="noopener">makariri</a> engari i ātaahua hoki. I ua i tētahi rā — ahakoa i tākaro tonu mātou i waho!`,
      demo:`New words for holiday talk:\n<b>hararei</b> — holiday/holidays\n<b>whānau</b> — family\n<b>taiao</b> — nature / the natural world / outdoors\n<b>manu</b> — bird\n<b>reira</b> — there / that place (referring back to somewhere mentioned)\n<b>He aha ngā mea i mahia e koutou?</b> — What things did you (all) do?\n<b>i mahia</b> — was done (passive — the doing happened to the things)\n<b>e koutou</b> — by you all (agent marker)\n<b>He pēhea te āhua o te rangi?</b> — What was the weather like?\n<b>āhua</b> — appearance / nature / what something is like\n<b>Ko tērā tōku hararei pai rawa atu.</b> — That was my best holiday ever.`,
      tip:'He pēhea ōu hararei? — How were your holidays? Learn this cold. It is the first question of every new term for the rest of your school life.',
    },
    weDo:{
      title:'Kia Tūhono — Holiday conversation',
      instruction:'Build the holiday conversation together. I ask — you answer. Then swap.',
      sentences:[
        'I ask: <b>He pēhea ōu <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hararei" target="_blank" rel="noopener">hararei</a>?</b> You answer with at least two sentences — where you went and one thing you did.',
        'I ask: <b>He aha ngā mea i mahia e koe?</b> List three things using Ko ēnei or just sequencing with ā.',
        'I ask: <b>He pēhea te āhua o te rangi?</b> Describe the weather using He + adjective.',
        'I ask: <b>Ko ēhea ngā mea pai rawa atu?</b> (What were the best things?) Use Ko tērā or He pai rawa atu…',
      ],
      prompt:'Ko tērā tōku hararei pai rawa atu. — That was my best holiday ever. What makes this sentence work so well as a closing line? How does it use Ko, possession, and a superlative all in one? Could you write an equally strong closing line about something else?',
    },
    youDo:{
      title:'Māu Anō — Tōu kōrero hararei',
      instruction:'With a partner, have a full holiday conversation in te reo Māori.',
      tasks:[
        'Ask and answer: <b>He pēhea ōu hararei?</b> Both partners respond in at least three sentences.',
        'Each person shares the best thing about their holidays: <b>Ko tērā tōku mea pai rawa atu…</b>',
        'Describe the weather during your holiday using past tense: <b>I… te rangi.</b>',
        '✦ Bonus: Write up your holiday recount as a paragraph (7 sentences). Use: past tense throughout, at least two conjunctions, a Ko ēnei list, and one fronted time phrase.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T2W1 = [
  {day:'Monday',  q:'How do you change "Kei te haere au" (I am going) to past tense?',options:['Change "haere" to "haerea"','Replace "Kei te" with "I" — I haere au','Add "inanahi" to the end only','Change "au" to "ahau"'],correct:1},
  {day:'Monday',  q:'Which time expression means "last week"?',options:['i tērā wiki','i tērā tau','inanahi','i tēnei ata'],correct:0},
  {day:'Tuesday', q:'"I hoko au i te āporo." What is the role of the lowercase "i" before "te āporo"?',options:['It is the past tense marker','It marks the object — the thing the action happened to','It means "at"','It is part of the verb'],correct:1},
  {day:'Tuesday', q:'What does "kite" mean?',options:['hear / feel','give (toward speaker)','see / find / discover','take / pick up'],correct:2},
  {day:'Wednesday',q:'"I ara au i te ata." What does "ara" mean?',options:['eat breakfast','brush teeth','wake up / rise','arrive'],correct:2},
  {day:'Wednesday',q:'You want to say "When breakfast was finished, I brushed my teeth." Which conjunction do you use?',options:['ahakoa','ā','i te wā','nō reira'],correct:2},
  {day:'Thursday', q:'How do you ask "How were your holidays?" in te reo Māori?',options:['He aha ōu hararei?','He pēhea ōu hararei?','Kei te pēhea ōu hararei?','Ko wai ōu hararei?'],correct:1},
  {day:'Thursday', q:'What does "whānau" mean?',options:['holiday','nature / outdoors','bird','family'],correct:3},
]

const CURRICULUM_T2W2 = {
  Monday: {
    topic:'Ka haere ia — The Ka narrative tense',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 2.4: Time · Grammar Level 1–2: Ka (sequential/narrative tense marker)',
    aos:[{code:'AO 2.3',label:'Narrative &amp; storytelling'},{code:'AO 2.4',label:'Sequential time'}],
    iDo:{
      title:'Tāua Kōrero — Ka: the storytelling tense',
      instruction:'You know Kei te (now) and I (past). Today we meet the third tense marker — Ka. Ka is the storyteller\'s tense. It moves a story forward, event by event, like a chain. Listen to how it feels different from I.',
      example:`Using <b>I</b> — reporting what happened:<br><b>I haere ia ki te toa. I hoko ia i te āporo. I hoki ia ki te kāinga.</b><br>She went to the shop. She bought an apple. She returned home.<br><br>Using <b>Ka</b> — telling it as a story:<br><b>Ka haere ia ki te toa. Ka hoko ia i te āporo. Ka hoki ia ki te kāinga.</b><br>She went to the shop. She bought an apple. She went back home.<br><br>Combined — I for context, Ka for story movement:<br><b>I te ahiahi o inanahi, ka haere ia ki te toa. Ka hoko ia i te āporo whero nui. Ka hoki ia ki te kāinga, ā ka kai ia i tāna āporo i te pō.</b>`,
      demo:`When to use <b>Ka</b>:\n→ When telling a story and moving it forward step by step\n→ When describing what happened in sequence (like "and then… and then…")\n→ When the action follows on naturally from what came before\n→ In instructions: Ka tū koe, ka titiro, ka whakarongo (You stand, you look, you listen)\n\nWhen to use <b>I</b>:\n→ When reporting a single completed past event\n→ When giving a specific past time reference (I haere au inanahi)\n→ When negating: Kāore au i haere\n\nThe feel: <b>I</b> = "it happened." <b>Ka</b> = "and then this happened, and then this…"\n\nNew word: <b>i te pō</b> — at night / in the evening`,
      tip:'Ka is the "and then" of te reo Māori. Once a story is underway, Ka keeps it moving. Think of it as a chain: Ka… Ka… Ka… each link connected to the last.',
    },
    weDo:{
      title:'Kia Tūhono — Tell it as a story',
      instruction:'I give you a sequence of events — you tell them as a Ka story.',
      sentences:[
        'Events: wake up → eat breakfast → go to school → learn te reo → come home. Tell it: <b>Ka ara ia. Ka kai ia i tōna parakuihi. Ka haere ia ki te kura…</b>',
        'Now combine I and Ka: set the scene with I (past context), then use Ka for the story: <b>I te Mane ka haere ia ki te toa. Ka hoko ia…</b>',
        'Try instructions with Ka: tell a partner how to make a cup of tea step by step. <b>Ka tango koe i te tī. Ka ringihia e koe te wai…</b> (ringihia = pour)',
        'Now swap I and Ka in one of your sentences — how does the meaning or feel change?',
      ],
      prompt:'Ka is used in traditional Māori storytelling — kōrero pūrākau — to move the narrative forward. Why do you think storytellers prefer Ka over I? What does Ka add to the feeling of a story that I does not?',
    },
    youDo:{
      title:'Māu Anō — Tell a Ka story',
      instruction:'Use Ka to tell a story with at least five steps.',
      tasks:[
        'Write a five-step Ka story about a character going on a journey. Each sentence starts with Ka.',
        'Combine I and Ka: open with I te [time], then continue with Ka sentences.',
        'Write a Ka instruction sequence: how to do something (make a snack, pack a bag, play a game).',
        '✦ Bonus: Write a full eight-sentence story using I for the opening scene-set and Ka for the body. Include an object marker, a conjunction, and a fronted phrase.',
      ],
    },
  },
  Tuesday: {
    topic:'Kāore — Negation in present and past',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · Grammar Level 1–2: Kāore e…ana (present negative), Kāore i (past negative)',
    aos:[{code:'AO 2.3',label:'Negation'},{code:'AO 2.4',label:'Negative tense forms'}],
    iDo:{
      title:'Tāua Kōrero — Saying what is NOT happening',
      instruction:'You can say what IS happening. Now we learn how to say what is NOT. Negation in te reo Māori is completely regular — one word, Kāore, does all the work. Watch how the structure changes between present and past.',
      example:`<b>PRESENT NEGATIVE — Kāore… e… ana:</b><br><b>Kāore</b> au <b>e</b> haere <b>ana</b>. — I am not going.<br><b>Kāore</b> ia <b>e</b> kai <b>ana</b>. — She is not eating.<br><b>Kāore</b> ngā tamariki <b>e</b> tākaro <b>ana</b>. — The children are not playing.<br><br><b>PAST NEGATIVE — Kāore… i:</b><br><b>Kāore</b> au <b>i</b> haere. — I did not go.<br><b>Kāore</b> ia <b>i</b> kai. — She did not eat.<br><b>Kāore</b> ngā tamariki <b>i</b> tākaro. — The children did not play.`,
      demo:`The pattern:\n\nPRESENT: <b>Kāore</b> + [person] + <b>e</b> + [verb] + <b>ana</b>\nPAST: <b>Kāore</b> + [person] + <b>i</b> + [verb]\n\nKey differences from the positive:\n→ The person comes AFTER Kāore (not after the verb)\n→ Present adds e…ana around the verb\n→ Past uses i (same as positive past, but person comes first)\n\nCompare:\nPositive present: Kei te haere <b>au</b> → person at end\nNegative present: Kāore <b>au</b> e haere ana → person right after Kāore\n\nPositive past: I haere <b>au</b> → person at end\nNegative past: Kāore <b>au</b> i haere → person right after Kāore\n\nThe person always moves to right after Kāore in negatives.`,
      tip:'Kāore pushes the person forward — right after itself. Present negative wraps the verb in e…ana. Past negative uses bare i + verb. Two patterns, one rule about person position.',
    },
    weDo:{
      title:'Kia Tūhono — Make it negative',
      instruction:'I give you a positive sentence — you make it negative. Both present and past.',
      sentences:[
        'Positive present: <b>Kei te haere au ki te kura.</b> → Negative: <b>Kāore au e haere ana ki te kura.</b>',
        'Positive past: <b>I kai ia i te tina.</b> → Negative: <b>Kāore ia i kai i te tina.</b>',
        'Positive: <b>Kei te mōhio ngā tamariki.</b> (The children know.) → Negative: <b>Kāore ngā tamariki e mōhio ana.</b>',
        'Now make your own — say something true that you did NOT do yesterday using Kāore au i…',
      ],
      prompt:'Kāore is one word that handles all negation in te reo Māori. English uses "not", "didn\'t", "isn\'t", "wasn\'t", "haven\'t", "can\'t" and more. How does having one negation word make te reo Māori simpler? Can you think of any disadvantages?',
    },
    youDo:{
      title:'Māu Anō — The honest negative',
      instruction:'Practise both forms of negation — present and past.',
      tasks:[
        'Write three present negative sentences using Kāore… e… ana.',
        'Write three past negative sentences using Kāore… i…',
        'Write a pair: one positive and one negative about the same event (e.g. I went / I did not go).',
        '✦ Bonus: Write a paragraph (5 sentences) where someone explains what they did NOT do and why. Use Kāore for at least three sentences, and include a reason using nō te mea.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — I, Ka, Kāore in one passage',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · Grammar Level 1–2: Fluent use of multiple tense markers in connected text',
    aos:[{code:'AO 2.3',label:'Fluent extended writing'},{code:'AO 2.4',label:'Tense control'}],
    iDo:{
      title:'Tāua Kōrero — Three markers, one story',
      instruction:'You now have I, Ka, and Kāore. Today we use all three in a single connected passage — controlling tense and negation deliberately, the way a confident te reo speaker does. Watch how the three markers each do a different job.',
      example:`<b>I tēnei ata</b>, ka ara au i te tino ata. Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=horoi" target="_blank" rel="noopener">horoi</a> au i ōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kanohi" target="_blank" rel="noopener">kanohi</a> ā ka kai au i tōku parakuihi.<br><i>This morning, I got up very early. I washed my face and I ate my breakfast.</i><br><br>Ka haere au ki te kura — <b>kāore</b> au i tūreiti i tēnei rā!<br><i>I went to school — I was not late today!</i><br><br><b>I</b> kite au i tōku hoa Mere i te ara. <b>Kāore</b> ia e haere ana ki te kura i tēnei rā nō te mea <b>i</b> māuiui ia.<br><i>I saw my friend Mere on the path. She is not going to school today because she was sick.</i><br><br>Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=p%C5%8Duri" target="_blank" rel="noopener">pōuri</a> au mōna — he hoa pai rawa atu ia.<br><i>I felt sad for her — she is the very best friend.</i>`,
      demo:`See how the three markers divide the work:\n\n<b>Ka</b> — tells the story, moves it forward step by step (ka ara, ka horoi, ka kai, ka haere, ka pōuri)\n\n<b>I</b> — reports specific completed events (i kite au, i <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81uiui" target="_blank" rel="noopener">māuiui</a> ia)\n\n<b>Kāore i</b> — says something did NOT happen in the past (kāore au i tūreiti)\n<b>Kāore e…ana</b> — says something is NOT happening now (kāore ia e haere ana)\n\nNew words:\n<b>kanohi</b> — face\n<b>ara</b> — path / road (also: wake up — same word, different context)\n<b>māuiui</b> — sick / unwell\n<b>pōuri</b> — sad / dark\n<b>mōna</b> — for her/him (mō = for/about, na = him/her)`,
      tip:'Let Ka carry the story forward. Use I to anchor specific facts. Use Kāore to correct, deny, or show what did NOT happen. These three together give you full control of any narrative.',
    },
    weDo:{
      title:'Kia Tūhono — Control the tense',
      instruction:'I give you a story prompt — we build it together, choosing the right marker for each sentence.',
      sentences:[
        'Story: a student wakes up late, rushes to school, but still makes it on time. Which markers? Ka for the rush, Kāore i for "did not miss the bell".',
        'Story: you were going to visit a friend but they were sick. Use I for the plan, Kāore i for what didn\'t happen, Kāore e…ana for what is currently not happening.',
        'Add a pōuri (sadness) sentence using Ka: <b>Ka pōuri au nō te mea…</b>',
        'End the story with a positive Ka sentence — something that happened instead.',
      ],
      prompt:'Look at the model passage. Count how many times each marker appears: Ka, I, Kāore. Which one appears most? Why do you think Ka dominates in storytelling? What would the passage feel like if you replaced every Ka with I?',
    },
    youDo:{
      title:'Māu Anō — Three-marker story',
      instruction:'Write a passage that uses all three markers deliberately.',
      tasks:[
        'Write a Ka chain of at least four events — a morning sequence.',
        'Add two I sentences — specific facts or things you saw/heard.',
        'Add one Kāore i sentence and one Kāore e…ana sentence.',
        '✦ Bonus: Write a complete eight-sentence story that uses Ka for movement, I for facts, and Kāore for at least two negatives. Tell the story of a day where something went differently than expected.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero kōrero — A flowing conversation',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 1.1: Greetings · AO 2.4: Past and present',
    aos:[{code:'AO 2.3',label:'Fluent conversation'},{code:'AO 1.1',label:'Greetings &amp; social language'}],
    iDo:{
      title:'Tāua Kōrero — A real conversation using all three tenses',
      instruction:'Today we put Term 2 Week 2 together in conversation. A natural conversation moves between past and present — what happened, what is happening now, what you think. Watch how Ka, I, and Kāore all appear naturally.',
      example:`<b>A:</b> Tēnā koe! I haere koe ki hea i tērā rā?<br><b>B:</b> I haere au ki te hākinakina. Ka tākaro mātou ā te ahiahi katoa!<br><b>A:</b> Ka pai! I toa koutou?<br><b>B:</b> Kāore mātou i toa — i <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=toa" target="_blank" rel="noopener">toa</a> ērā atu. Engari i tino pai tā mātou tākaro.<br><b>A:</b> He pēhea koe ināianei?<br><b>B:</b> Kāore au e ngenge ana — kei te hari tonu au! Ka haere anō mātou ā tērā wiki.<br><b>A:</b> Mā wai koutou e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%81rahi" target="_blank" rel="noopener">ārahi</a>?<br><b>B:</b> Mā tō mātou kaiako e <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%81rahi" target="_blank" rel="noopener">ārahi</a>. He pai rawa atu ia!`,
      demo:`New phrases from this conversation:\n<b>I toa koutou?</b> — Did you (all) win?\n<b>i toa</b> — won (toa = win/victorious)\n<b>ērā atu</b> — those others / the others\n<b>tā mātou tākaro</b> — our (exclusive) playing / our game\n<b>Ka haere anō mātou</b> — We will go again\n<b>Mā wai koutou e ārahi?</b> — Who will lead/coach you?\n<b>Mā… e ārahi</b> — [Person] will lead (mā = by/through for future agent)\n<b>ārahi</b> — to lead / guide / coach`,
      tip:'Mā wai e…? = Who will do [something]? Mā [person] e… = [Person] will do it. This is how you talk about who does future actions — very useful for classroom and sports contexts.',
    },
    weDo:{
      title:'Kia Tūhono — Sports or activity conversation',
      instruction:'Build a conversation about a sport or activity you enjoy. Use all three tense markers.',
      sentences:[
        'Opening: greet and ask where they went: <b>I haere koe ki hea i tērā rā?</b> Answer with a past event.',
        'Ask about the result: <b>I toa koutou?</b> Answer honestly — win OR use Kāore mātou i toa.',
        'Ask about now: <b>He pēhea koe ināianei?</b> Answer using Kāore e…ana or Kei te.',
        'Ask who leads/coaches using Mā wai e ārahi? Answer with Mā [name/role] e ārahi.',
      ],
      prompt:'Kāore mātou i toa — we did not win. But then: i tino pai tā mātou tākaro — our game was very good. This is gracious losing in te reo Māori. How does te ao Māori think about winning and losing? What values does this kind of language reflect?',
    },
    youDo:{
      title:'Māu Anō — Your activity conversation',
      instruction:'Have a full conversation about a sport or activity with a partner.',
      tasks:[
        'Ask and answer about a past sports or activity event — use I and Ka.',
        'Ask about the result — use Kāore i toa or i toa.',
        'Ask how they feel now — use Kei te pēhea koe and Kāore e…ana or Kei te.',
        '✦ Bonus: Write up the full conversation (8 lines minimum). Use every tense marker at least once. Include Mā wai e ārahi and end with a Ka haere anō sentence.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T2W2 = [
  {day:'Monday',  q:'"Ka haere ia ki te toa. Ka hoko ia i te āporo." What does Ka signal here?',options:['These are future events that have not happened yet','Ka marks the past tense like I does','Ka moves the story forward — and then this happened, and then this','Ka is used only for commands'],correct:2},
  {day:'Monday',  q:'When would you use I rather than Ka for a past event?',options:['When the event is part of a flowing story','When reporting a specific completed event or giving a time reference','Ka and I mean exactly the same thing','I is only used with time words like inanahi'],correct:1},
  {day:'Tuesday', q:'"Kāore au e haere ana." What is the structure of this present negative?',options:['Kāore + verb + person + ana','Kāore + person + e + verb + ana','Kāore + e + person + verb + ana','Person + Kāore + verb + e + ana'],correct:1},
  {day:'Tuesday', q:'"Kāore ia i kai i te tina." What does this sentence mean?',options:['She is not eating lunch right now','She did not eat lunch','She will not eat lunch','She never eats lunch'],correct:1},
  {day:'Wednesday',q:'What does "māuiui" mean?',options:['sad','tired','sick / unwell','angry'],correct:2},
  {day:'Wednesday',q:'"Ka pōuri au mōna." What does mōna mean?',options:['for me','for you','for him/her','for them'],correct:2},
  {day:'Thursday', q:'"Mā wai koutou e ārahi?" — What is this question asking?',options:['Where are you all going?','Who will lead/coach you all?','What will you all do?','How will you all get there?'],correct:1},
  {day:'Thursday', q:'What does "toa" mean in the context of a game or competition?',options:['team','player','win / victorious','score'],correct:2},
]

const CURRICULUM_T2W3 = {
  Monday: {
    topic:'Ngā tae — Colours and detailed description',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Physical characteristics · Grammar Level 1–2: Colour words, He structure with multiple adjectives',
    aos:[{code:'AO 2.5',label:'Colours &amp; descriptions'},{code:'AO 1.6',label:'Descriptive communication'}],
    iDo:{
      title:'Tāua Kōrero — Painting pictures with colour',
      instruction:'You already know a few colours. Today we learn the full colour palette in te reo Māori — and something fascinating about how Māori colour words often come from nature. Listen carefully to the connections.',
      example:`<b>whero</b> — red (from the redness of the tōtara tree heartwood)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C4%81k%C4%81riki" target="_blank" rel="noopener">kākāriki</a></b> — green (from the kākāriki parrot — bright green bird) (from the kākāriki parrot — bright green bird)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Dwhai" target="_blank" rel="noopener">kōwhai</a></b> — yellow (from the kōwhai flower) (from the kōwhai flower)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kikorangi" target="_blank" rel="noopener">kikorangi</a></b> — blue (kiko = flesh/colour + rangi = sky) (kiko = flesh/colour + rangi = sky)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81whero" target="_blank" rel="noopener">māwhero</a></b> — pink (mā = white + whero = red) (mā = white + whero = red)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=karaka" target="_blank" rel="noopener">karaka</a></b> — orange (from the karaka tree berry) (from the karaka tree berry)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=parauri" target="_blank" rel="noopener">parauri</a></b> — brown (para = residue/sediment + uri = dark) (para = residue/sediment + uri = dark)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81" target="_blank" rel="noopener">mā</a></b> — white<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mangu" target="_blank" rel="noopener">mangu</a></b> — black<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hina" target="_blank" rel="noopener">hina</a></b> — grey / silver<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Dura" target="_blank" rel="noopener">kōura</a></b> — gold / golden (from the kōura/crayfish shell) (from the kōura/crayfish shell)`,
      demo:`Notice the pattern — almost every colour word connects to something in the natural world:\n→ kākāriki (green) = the parrot\n→ kōwhai (yellow) = the flower\n→ kikorangi (blue) = sky-flesh (sky colour)\n→ karaka (orange) = the tree\n\nThis is te ao Māori — the Māori world view sees language growing from the land and its creatures.\n\nIn a sentence, colours follow the noun as always:\n<b>He pōtae kākāriki tāku.</b> — I have a green hat. (pōtae = hat)\n<b>He pukapuka kikorangi tēnā.</b> — That is a blue book.\n<b>He kuri parauri tō rātou.</b> — They have a brown dog. (kuri = dog)\n\nAnd you can stack them:\n<b>He pōtae kākāriki māmā tēnei.</b> — This is a light green hat.`,
      tip:'Colour names in te reo come from nature — a parrot, a flower, the sky. Knowing the source helps you remember the colour. kākāriki = the bright green parrot = bright green.',
    },
    weDo:{
      title:'Kia Tūhono — Colour the room',
      instruction:'Look around the room. I point to objects — you describe them using He + noun + colour.',
      sentences:[
        'Your pencil case: <b>He kete pene [tae] tāku.</b> What colour is it? Fill in the colour.',
        'The door: <b>He whatitoka [tae] tērā.</b> What colour? Add a size adjective too.',
        'Something outside: <b>He [noun] [tae] [tae2] tērā.</b> Can you stack two colour/description words?',
        'Ask a partner: <b>He aha te tae o tōu [object]?</b> (What colour is your [object]?) They answer with He…',
      ],
      prompt:'Almost all te reo Māori colour words come from plants, birds, or natural phenomena. English colour words come from many different places — "orange" from the fruit, "purple" from a sea snail dye, "blue" from Old French. What does it tell us about a culture when its colour words come from nature?',
    },
    youDo:{
      title:'Māu Anō — Colour descriptions',
      instruction:'Use colour words to describe things in detail.',
      tasks:[
        'Write five He sentences describing objects around you — each with a different colour word.',
        'Write a description of your school bag using at least three descriptive words including a colour.',
        'Write a He sentence using māwhero (pink) and one using kōura (gold).',
        '✦ Bonus: Write a description of your favourite place using colours from nature — trees, sky, water, birds. Use at least four colour words and make your description feel like a painting.',
      ],
    },
  },
  Tuesday: {
    topic:'He pai ake, he pai rawa atu — Comparatives in new contexts',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Descriptions · AO 2.3: Opinions · Grammar Level 1–2: Comparative ake, superlative rawa atu in persuasion context',
    aos:[{code:'AO 2.5',label:'Comparative descriptions'},{code:'AO 2.3',label:'Opinions &amp; argument'}],
    iDo:{
      title:'Tāua Kōrero — Comparing things to argue a point',
      instruction:'Last term you learned ake (more) and rawa atu (most/best). Today we use those same tools in a new context — argument and persuasion. When you want to convince someone of something, you compare. Watch how comparison becomes opinion.',
      example:`<b>He pai ake te hākinakina i te karo i.</b><br>Sport is better than avoiding it.<br><br><b>He ātaahua ake ngā manu o Aotearoa i ngā manu o ērā atu <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whenua" target="_blank" rel="noopener">whenua</a>.</b><br>The birds of New Zealand are more beautiful than those of other countries.<br><br><b>He nui ake ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hua" target="_blank" rel="noopener">hua</a> o te ako i te reo Māori i ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=uauatanga" target="_blank" rel="noopener">uauatanga</a>.</b><br>The benefits of learning te reo Māori are greater than the difficulties.<br><br><b>Ko te reo Māori te reo tino ātaahua rawa atu o te ao.</b><br>Te reo Māori is the most beautiful language in the world.`,
      demo:`The comparison structure:\n<b>He [adjective] ake te X i te Y.</b>\n[X] is more [adjective] than [Y].\n\nThe i before Y means "than" in this comparison context — a new use of i you haven't seen before!\n\nNew words:\n<b>hākinakina</b> — sport / physical activity\n<b>whenua</b> — land / country\n<b>hua</b> — fruit / benefit / result\n<b>uauatanga</b> — difficulty / the state of being hard\n<b>te ao</b> — the world / the realm (literally: the daylight world)\n<b>ērā atu whenua</b> — other countries (ērā atu = those others)\n\nAnd for superlatives in comparison:\n<b>Ko te X te [adjective] rawa atu o [group].</b>\nX is the most [adjective] of [group].`,
      tip:'He [adj] ake te X i te Y = X is more [adj] than Y. The i here means "than" — a third job for little i (past tense, object marker, and now "than" in comparisons).',
    },
    weDo:{
      title:'Kia Tūhono — Make your argument',
      instruction:'I give you two things to compare — you build a comparative sentence and defend your position.',
      sentences:[
        'Compare: te reo Māori (te reo Māori) vs pāngarau (maths) for fun. → <b>He ngāwari ake te reo Māori i te pāngarau ki a au.</b>',
        'Compare: ināianei vs inanahi for weather. → Build a He ātaahua ake / He makariri ake sentence.',
        'Use a superlative: <b>Ko [something] te [adj] rawa atu o…</b> Make a bold claim about something you love.',
        'Now defend your superlative — can you add nō te mea + a reason to justify it?',
      ],
      prompt:'Ko te reo Māori te reo tino ātaahua rawa atu o te ao. Do you agree? How would you argue against this? In what ways is comparison a form of argument? Can comparison ever be unfair?',
    },
    youDo:{
      title:'Māu Anō — Your comparisons',
      instruction:'Use ake and rawa atu to express and defend opinions.',
      tasks:[
        'Write three He [adj] ake te X i te Y sentences — compare things you genuinely have opinions about.',
        'Write one Ko te X te [adj] rawa atu o… sentence — a bold superlative claim.',
        'Add a nō te mea reason to your superlative sentence.',
        '✦ Bonus: Write a five-sentence "argument" paragraph in te reo — make a claim, support it with two comparatives, add a superlative, and close with nō reira. Persuade your reader.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — SVA and tricky agreement',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Accurate communication · Grammar Level 1–2: Subject-verb-object alignment, plural markers ngā and rātou/mātou/tātou',
    aos:[{code:'AO 2.3',label:'Grammatical accuracy'},{code:'AO 2.5',label:'Plural agreement'}],
    iDo:{
      title:'Tāua Kōrero — Making singular and plural agree',
      instruction:'In te reo Māori, making sure your nouns and pronouns agree is important for clarity. The key words are the articles — te (the, singular) and ngā (the, plural) — and the pronouns — ia (he/she, one person) vs rātou (they, three or more). Today we make sure these always line up.',
      example:`<b>SINGULAR — te and ia:</b><br><b>Kei te haere te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tamaiti" target="_blank" rel="noopener">tamaiti</a>.</b> — The child is going.<br><b>Kei te haere ia.</b> — He/she is going.<br><br><b>PLURAL — ngā and rātou:</b><br><b>Kei te haere ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tamariki" target="_blank" rel="noopener">tamariki</a>.</b> — The children are going.<br><b>Kei te haere rātou.</b> — They (3+) are going.<br><br><b>WATCH:</b><br><b>I kai te kaiako i tāna kai.</b> — The teacher ate his/her food.<br><b>I kai ngā kaiako i ā rātou kai.</b> — The teachers ate their food.<br><br>Notice: tāna (his/her, singular ā) → ā rātou (their, plural ā)`,
      demo:`The agreement chain:\n\nSINGULAR noun → te → ia → tāna/tōna\nPLURAL noun → ngā → rātou/mātou/tātou → ā rātou/ō rātou\n\nPossessives also go plural:\n<b>tāna</b> (his/her, ā) → <b>ā rātou</b> (their, ā) — the ā stays, rātou replaces na\n<b>tōna</b> (his/her, ō) → <b>ō rātou</b> (their, ō) — the ō stays, rātou replaces na\n\nCommon mistakes to avoid:\n✗ Kei te haere <b>ngā tamariki</b>. Kei te noho <b>ia</b>. (mixing plural noun with singular pronoun)\n✓ Kei te haere <b>ngā tamariki</b>. Kei te noho <b>rātou</b>.\n\nNew words:\n<b>kaiako</b> — teacher (you built this with kai- in Term 1 Week 6!)\n<b>ā rātou</b> — their (ā-category)\n<b>ō rātou</b> — their (ō-category)`,
      tip:'Ngā needs rātou. Te needs ia. Never mix them. Check every pronoun — does it match the noun it refers back to? Singular or plural?',
    },
    weDo:{
      title:'Kia Tūhono — Spot and fix',
      instruction:'I give you sentences — some correct, some with agreement errors. You find the error and fix it.',
      sentences:[
        '"Kei te ako ngā ākonga. Kei te mōhio ia." — Error? → ia should be rātou: <b>Kei te mōhio rātou.</b>',
        '"I kai te kaiako i ō rātou kai." — Error? → One teacher (te) should have tōna: <b>I kai te kaiako i tōna kai.</b>',
        '"Kei te haere mātou. I hoko tāna kai." — Error? → mātou is plural, tāna is singular: <b>I hoko ā mātou kai.</b>',
        'Now write two correct pairs yourself — one singular, one plural — showing perfect agreement.',
      ],
      prompt:'Why does agreement matter? If you say "ngā tamariki… ia" (the children… he/she), your listener gets confused — who are we talking about now? Agreement is the glue that keeps a listener following the right thread through your sentences.',
    },
    youDo:{
      title:'Māu Anō — Agreement practice',
      instruction:'Write sentences that demonstrate correct singular and plural agreement.',
      tasks:[
        'Write three pairs: one sentence with te/ia, one with ngā/rātou — same verb, matching articles and pronouns.',
        'Write a sentence about your teacher (singular) using tōna/tāna correctly.',
        'Write a sentence about your classmates (plural, 3+) using ō rātou or ā rātou correctly.',
        '✦ Bonus: Write a paragraph (6 sentences) about your class — mix singular and plural freely, but make sure every pronoun matches its noun. Check each sentence before moving to the next.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He taupatupatu — A class debate',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · AO 2.5: Formal vocabulary · AO 1.6: Politeness in disagreement',
    aos:[{code:'AO 2.3',label:'Debate &amp; persuasion'},{code:'AO 1.6',label:'Polite disagreement'}],
    iDo:{
      title:'Tāua Kōrero — Debating in te reo Māori',
      instruction:'This week you have learned colours, comparatives, and agreement. Today we put them all to work in a debate. Using comparatives to argue, politeness phrases to disagree, and accurate grammar to be credible — this is real te reo in action.',
      example:`<b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Kaiwhakahaere" target="_blank" rel="noopener">Kaiwhakahaere</a>:</b> Ko tā tātou <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kaupeka" target="_blank" rel="noopener">kaupeka</a>: He pai ake te hākinakina i te karo i.<br><b>Taha 1:</b> Āe, he tika tērā. He nui ake ngā hua o te hākinakina — he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hauora" target="_blank" rel="noopener">hauora</a>, he kaha, he hoa hou hoki.<br><b>Taha 2:</b> Kāo, kāore au e whakaae ana. He pai ake te noho ki te kāinga me ōu hoa tata nō te mea he mārie ake tērā.<br><b>Taha 1:</b> Ka pai tāu whakaaro, engari ko ngā hua hauora o te hākinakina he nui ake i ngā hua o te noho.<br><b>Taha 2:</b> He rerekē ā tātou whakaaro — engari he pai tērā! Ko tēnei te akoranga o tēnei kōrero.`,
      demo:`New debate vocabulary:\n<b>Kaiwhakahaere</b> — chairperson / facilitator (whaka + haere = one who makes things go)\n<b>kaupeka</b> — topic / branch / proposition\n<b>Taha 1 / Taha 2</b> — Side 1 / Side 2 (taha = side)\n<b>whakaae</b> — agree / consent\n<b>Kāore au e whakaae ana.</b> — I do not agree.\n<b>he hauora</b> — health / wellbeing\n<b>he hoa hou</b> — new friends\n<b>ko ngā hua hauora</b> — the health benefits\n<b>Ko tēnei te akoranga o tēnei kōrero.</b> — This is the lesson of this discussion.\n\nDebate structure in te reo:\n1. State position (Ko tā tātou kaupeka…)\n2. Support with comparatives (He nui ake ngā hua…)\n3. Respond politely (Ka pai tāu whakaaro, engari…)\n4. Close graciously (He rerekē ā tātou whakaaro — he pai tērā!)`,
      tip:'He rerekē ā tātou whakaaro — our opinions are different. This is the gracious way to end a debate in te ao Māori. Disagreement is acknowledged — but the relationship is preserved.',
    },
    weDo:{
      title:'Kia Tūhono — Mini debate',
      instruction:'Class splits into two sides. Teacher (kaiwhakahaere) introduces the topic. Each side argues in te reo.',
      sentences:[
        'Kaupeka: <b>He pai ake te reo Māori i te pāngarau.</b> Side 1 agrees — argue why using He nui ake ngā hua…',
        'Side 2 disagrees: <b>Kāore mātou e whakaae ana. He pai ake te pāngarau nō te mea…</b>',
        'Side 1 responds: <b>Ka pai tā koutou whakaaro, engari…</b> Add a comparative to counter.',
        'Close: everyone together: <b>He rerekē ā tātou whakaaro — he pai tērā!</b>',
      ],
      prompt:'Ko tēnei te akoranga o tēnei kōrero — this is the lesson of this discussion. What IS the lesson? Not who won — but what did the discussion teach you? In te ao Māori, a debate is not about defeating the other side. What is it about?',
    },
    youDo:{
      title:'Māu Anō — Your debate argument',
      instruction:'Write your side of a debate argument in te reo Māori.',
      tasks:[
        'Choose a side on: "He pai ake te ako i te kāinga i te ako i te kura." Write your position statement.',
        'Write two supporting comparatives using He [adj] ake…',
        'Write a polite response to the other side: Ka pai tā koutou whakaaro, engari…',
        '✦ Bonus: Write a full six-sentence debate contribution — position, two supports, a response to opposition, a superlative claim, and a gracious close with He rerekē ā tātou whakaaro.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T2W3 = [
  {day:'Monday',  q:'Which te reo Māori colour word comes from a New Zealand bird?',options:['kikorangi','kōwhai','kākāriki','karaka'],correct:2},
  {day:'Monday',  q:'"He pōtae kikorangi tāku." What colour is the hat?',options:['green','yellow','blue','red'],correct:2},
  {day:'Tuesday', q:'"He pai ake te reo Māori i te pāngarau." What does the "i" before "te pāngarau" mean here?',options:['at','than','past tense marker','object marker'],correct:1},
  {day:'Tuesday', q:'How do you say "Te reo Māori is the most beautiful language in the world" using a superlative?',options:['He ātaahua rawa atu te reo Māori i ērā atu reo','Ko te reo Māori te reo tino ātaahua rawa atu o te ao','Te reo Māori he ātaahua ake i ngā reo katoa','He reo ātaahua rawa atu te reo Māori'],correct:1},
  {day:'Wednesday',q:'"Kei te ako ngā ākonga. Kei te mōhio ia." What is wrong with this passage?',options:['The verb is incorrect','ia (singular he/she) does not match ngā ākonga (plural) — should be rātou','The tense marker is wrong','There is no object marker'],correct:1},
  {day:'Wednesday',q:'What is the plural ā-category possessive for "their" (three or more people)?',options:['tā rātou','ā rātou','ō rātou','tō rātou'],correct:1},
  {day:'Thursday', q:'What does "whakaae" mean?',options:['disagree','argue','agree / consent','debate'],correct:2},
  {day:'Thursday', q:'"He rerekē ā tātou whakaaro — he pai tērā!" How is this phrase used in a debate?',options:['To declare a winner','To insult the other side','To graciously acknowledge different views and preserve the relationship','To ask for more time'],correct:2},
]

const CURRICULUM_T2W4 = {
  Monday: {
    topic:'Māua, tāua — Dual pronouns: we two',
    nzLink:'Te Aho Arataki Marau — AO 2.1: Relationships between people · Grammar Level 1–2: Dual pronouns māua/tāua, kōrua, rāua',
    aos:[{code:'AO 2.1',label:'Relationships — dual pronouns'},{code:'AO 1.6',label:'Inclusive &amp; exclusive we'}],
    iDo:{
      title:'Tāua Kōrero — We two (and why it matters which "we")',
      instruction:'English has one word for "we" — it covers two people, ten people, and everyone in between, and it doesn\'t tell you if the person you\'re talking to is included. Te reo Māori has a separate word for every combination. Today we learn the "we two" set — and discover something beautiful about how te reo Māori thinks about relationships.',
      example:`<b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81ua" target="_blank" rel="noopener">māua</a></b> — we two (me and someone else — NOT including you) — NOT including you)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C4%81ua" target="_blank" rel="noopener">tāua</a></b> — we two (me and you — INCLUDING you) — INCLUDING you)<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Drua" target="_blank" rel="noopener">kōrua</a></b> — you two<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=r%C4%81ua" target="_blank" rel="noopener">rāua</a></b> — they two / those two / those two<br><br><b>Ka haere māua ki te toa.</b><br>We two (not you) are going to the shop.<br><br><b>Ka haere tāua ki te toa.</b><br>We two (you and I) are going to the shop.<br><br><b>Kei te kōrero rāua.</b><br>Those two are talking.<br><br><b>He aha ā kōrua mahi?</b><br>What are you two doing?`,
      demo:`The inclusive/exclusive distinction:\n\n<b>tāua</b> = WE TWO INCLUDING YOU → "come with me"\n<b>māua</b> = WE TWO EXCLUDING YOU → "just us, not you"\n\nThis distinction exists because in te ao Māori, being included or excluded from a group matters deeply — it affects relationships, responsibilities, and mana.\n\nThink of it this way:\n→ "Ka haere tāua" = an invitation (we're doing this TOGETHER)\n→ "Ka haere māua" = an announcement (we're going — you're not part of this)\n\nThe dual pronouns at a glance:\n<b>tāua</b> — we two (inclusive)\n<b>māua</b> — we two (exclusive)\n<b>kōrua</b> — you two\n<b>rāua</b> — they two`,
      tip:'Tāua includes the person you\'re talking to — it\'s an invitation. Māua excludes them — it\'s just you and a third person. When in doubt: would you invite them along? Tāua. Would you not? Māua.',
    },
    weDo:{
      title:'Kia Tūhono — Choose the right we',
      instruction:'I describe a situation — you choose tāua or māua and explain why.',
      sentences:[
        'You and your best friend are planning a trip. You\'re talking to your friend about it. → <b>tāua</b> — they ARE included: "Ka haere tāua ki te moana."',
        'You and your mum went to the shop. You\'re telling your friend about it now. → <b>māua</b> — friend was NOT there: "I haere māua ko tōku māmā ki te toa."',
        'You\'re looking at two students across the room: → <b>rāua</b>: "Kei te kōrero rāua."',
        'You\'re asking two students directly what they\'re doing: → <b>kōrua</b>: "He aha ā kōrua mahi?"',
      ],
      prompt:'English speakers often find the inclusive/exclusive distinction the hardest thing about te reo Māori pronouns — because English doesn\'t have it at all. But many languages do — Japanese, Fijian, and many others. What does having this distinction tell us about what te ao Māori values in human relationships?',
    },
    youDo:{
      title:'Māu Anō — We two in action',
      instruction:'Use dual pronouns in real situations.',
      tasks:[
        'Write two sentences using tāua — invite someone to do something with you.',
        'Write two sentences using māua — report something you and a third person did (excluding the listener).',
        'Write one sentence about two others using rāua, and one question to two people using kōrua.',
        '✦ Bonus: Write a short dialogue (6 lines) between two students planning something together. Use tāua at least three times. Make the "inclusive we" feel warm and inviting.',
      ],
    },
  },
  Tuesday: {
    topic:'Mātou, tātou — Plural pronouns: three or more',
    nzLink:'Te Aho Arataki Marau — AO 2.1: Relationships · Grammar Level 1–2: Plural pronouns mātou/tātou, koutou, rātou',
    aos:[{code:'AO 2.1',label:'Group relationships'},{code:'AO 1.6',label:'Inclusive &amp; exclusive plurality'}],
    iDo:{
      title:'Tāua Kōrero — We many (and the same choice)',
      instruction:'Yesterday you learned māua/tāua (we two). The same inclusive/exclusive choice applies when there are THREE OR MORE people. Meet the group pronouns.',
      example:`<b>mātou</b> — we (3+ people, NOT including you)<br><b>tātou</b> — we (3+ people, INCLUDING you)<br><b>koutou</b> — you all (3+ people)<br><b>rātou</b> — they (3+ people)<br><br><b>Ka haere mātou ki te kura.</b><br>We (our group, not you) are going to school.<br><br><b>Ka haere tātou ki te kura.</b><br>We all (including you) are going to school.<br><br><b>Kei te ako koutou i te reo Māori.</b><br>You all are learning te reo Māori.<br><br><b>I tākaro rātou i waho inanahi.</b><br>They (all those people) played outside yesterday.`,
      demo:`The full pronoun set — now complete:\n\nSINGULAR:\n→ au/ahau (I) · koe (you) · ia (he/she)\n\nDUAL:\n→ tāua (we 2, incl.) · māua (we 2, excl.) · kōrua (you 2) · rāua (they 2)\n\nPLURAL:\n→ tātou (we 3+, incl.) · mātou (we 3+, excl.) · koutou (you 3+) · rātou (they 3+)\n\nThe pattern:\n→ tā- = inclusive we\n→ mā- = exclusive we\n→ kou-/kō- = you (plural)\n→ rā- = they/those\n\nEvery pronoun you will ever need — all sixteen.`,
      tip:'tā- always means "including you" (tāua, tātou). mā- always means "not including you" (māua, mātou). The prefix tells you the relationship.',
    },
    weDo:{
      title:'Kia Tūhono — All the pronouns',
      instruction:'Rapid fire — I describe who is involved, you give the right pronoun.',
      sentences:[
        'The whole class, including the teacher, and you are all in the discussion. → <b>tātou</b>',
        'Your team of five played a game. You\'re telling someone who wasn\'t there. → <b>mātou</b>',
        'You\'re talking to the whole class (everyone there, 3+). → <b>koutou</b>',
        'Three students across the room are working together. → <b>rātou</b>',
      ],
      prompt:'Tātou is one of the most beautiful words in te reo Māori — it means "all of us, including you." It is an act of inclusion. How might saying tātou change the feeling of a meeting, a classroom, or a family gathering? When a rangatira says "tātou katoa" (all of us together) — what is the effect?',
    },
    youDo:{
      title:'Māu Anō — All sixteen pronouns',
      instruction:'Use the full range of pronouns in your writing today.',
      tasks:[
        'Write a sentence using each of: mātou, tātou, koutou, rātou.',
        'Write a pair: one with mātou (excluding listener) and one with tātou (including listener) about the same event.',
        'Write a question to the whole class using koutou.',
        '✦ Bonus: Write a paragraph (6 sentences) about a class event or group activity. Use at least four different pronouns from the full set — singular, dual, and plural.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Pronouns in complex sentences',
    nzLink:'Te Aho Arataki Marau — AO 2.1: Relationships · AO 2.3: Extended communication · Grammar Level 1–2: Pronoun consistency and reference across sentences',
    aos:[{code:'AO 2.1',label:'Pronoun reference'},{code:'AO 2.3',label:'Cohesive pronoun use'}],
    iDo:{
      title:'Tāua Kōrero — Keeping track of who is who',
      instruction:'Now that you have all sixteen pronouns, the challenge is keeping track of them in longer passages. When you shift from talking about rāua (two people) to rātou (a group), or from tāua (we two) to tātou (all of us), the reader needs to follow. Today we practise pronoun clarity.',
      example:`UNCLEAR — who is "rātou" here?<br><b>Ka haere māua ko Hana ki te kura. I kite māua i ō māua hoa. Ka tākaro rātou.</b><br>We two (Hana and I) went to school. We saw our friends. They played.<br>(Who played? Just the friends? Or us too?)<br><br>CLEAR — pronoun signals the group precisely:<br><b>Ka haere māua ko Hana ki te kura. I kite māua i ō māua hoa tokowhitu. Ka tākaro rātou katoa — ko māua ko rātou.</b><br>Hana and I went to school. We saw our seven friends. They all played — us two and them.`,
      demo:`Tools for pronoun clarity:\n\n1. <b>State the group first</b>, then use the pronoun:\n"I kite māua i ō māua hoa. Ka tākaro <b>rātou</b>." — ✗ unclear\n"Ko māua ko rātou — ka tākaro <b>tātou</b> katoa." — ✓ clear (now = all of us)\n\n2. <b>Use katoa (all) to be explicit:</b>\n<b>Ka tākaro rātou katoa.</b> — They all played.\n<b>Ka tākaro tātou katoa.</b> — We all played.\n\n3. <b>Name the people when switching:</b>\n"Ko māua ko rātou" = "the two of us and them"\n\nNew words:\n<b>tokowhitu</b> — seven (people) (toko- + whitu = counting people)\n<b>katoa</b> — all / everyone (you've seen this before in Tēnā koutou katoa)\n<b>Ko māua ko rātou</b> — us two and them`,
      tip:'When you change who you\'re talking about, signal it clearly — name the group, use katoa, or restate with Ko [person] ko [person]. Never leave your listener guessing who "rātou" is.',
    },
    weDo:{
      title:'Kia Tūhono — Clarify the pronouns',
      instruction:'I give you an unclear passage — we improve the pronoun clarity together.',
      sentences:[
        'Unclear: "Ka haere rātou. Ka noho ia." → Who is ia? → Make it clear: state the person or repeat the noun.',
        'Unclear: "I kite māua i rātou. Ka tākaro mātou." → Who is in mātou now? → Add "Ko māua ko rātou" to clarify.',
        'Practice: write two sentences where you clearly shift from tāua (we two) to tātou (all of us).',
        'Challenge: write a four-sentence story that uses four different pronouns — and make every one crystal clear.',
      ],
      prompt:'Pronoun clarity is an act of respect for your listener. When you are vague about who you mean, your listener has to guess — and guessing takes energy and creates confusion. How does clear pronoun use connect to the value of manaaki (caring for others)?',
    },
    youDo:{
      title:'Māu Anō — Pronoun precision',
      instruction:'Write passages with deliberate, clear pronoun use.',
      tasks:[
        'Write a four-sentence passage about a group event — use three different pronouns clearly.',
        'Write a pair of sentences that shift from māua to tātou — make the shift clear.',
        'Write a sentence using Ko māua ko rātou to clarify a group.',
        '✦ Bonus: Write a paragraph (6 sentences) about your class doing an activity together. Use singular, dual, and plural pronouns — make sure every pronoun is crystal clear. Read it aloud and ask a partner if they always knew who you meant.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He hui ā-kāinga — A family gathering',
    nzLink:'Te Aho Arataki Marau — AO 2.1: Relationships · AO 1.4: Personal information · AO 2.3: Extended communication',
    aos:[{code:'AO 2.1',label:'Family &amp; relationships'},{code:'AO 1.4',label:'Personal &amp; family information'}],
    iDo:{
      title:'Tāua Kōrero — Talking about family',
      instruction:'This week\'s pronouns are really about relationships — who is in your group and whether you are included. Today we use them to talk about the most important group of all — whānau. Listen to how the pronouns naturally reflect the warmth and structure of a family gathering.',
      example:`<b>A:</b> He pēhea tō <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=wh%C4%81nau" target="_blank" rel="noopener">whānau</a>?<br><b>B:</b> He pai rātou katoa — he nui hoki ō mātou whānau!<br><b>A:</b> Tokohia koutou i roto i tō whānau?<br><b>B:</b> Tokowhitu mātou — ko ōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81tua" target="_blank" rel="noopener">mātua</a>, ko ōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tu%C4%81kana" target="_blank" rel="noopener">tuākana</a> tokorua, ko ōku <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C4%93ina" target="_blank" rel="noopener">tēina</a> tokotoru, ko au.<br><b>A:</b> Ka haere koutou ki hea i ngā hararei?<br><b>B:</b> Ka haere tātou katoa ki tō mātou <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=marae" target="_blank" rel="noopener">marae</a> i ngā hararei. He tino pai — ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hui" target="_blank" rel="noopener">hui</a> mātou, ka kai tātou, ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=waiata" target="_blank" rel="noopener">waiata</a> tātou!<br><b>A:</b> He ātaahua tērā! Ko wai te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kai%C4%81rahi" target="_blank" rel="noopener">kaiārahi</a> o tō koutou whānau?<br><b>B:</b> Ko tōku kuia — ko ia te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=pou" target="_blank" rel="noopener">pou</a> o tō mātou whānau.`,
      demo:`New family and relationship vocabulary:\n<b>mātua</b> — parents (plural of mātua/matua)\n<b>tuākana</b> — older sibling of the same gender\n<b>tēina</b> — younger sibling of the same gender\n<b>tokorua / tokotoru / tokowha…</b> — two / three / four (people) (toko- prefix for counting people)\n<b>marae</b> — marae (the communal gathering place)\n<b>hui</b> — gather / meeting\n<b>waiata</b> — sing / song\n<b>kaiārahi</b> — leader / guide (kai- + ārahi = person who leads)\n<b>kuia</b> — elder woman / grandmother\n<b>pou</b> — pillar / post / foundation\n<b>Ko ia te pou o tō mātou whānau.</b> — She is the pillar of our family.`,
      tip:'Toko- is the prefix for counting PEOPLE: tokorua (2), tokotoru (3), tokowha (4), torima (5), tokoono (6), tokowhitu (7), tokowaru (8), tokoriwa (9), tekau (10). Use it whenever you count people specifically.',
    },
    weDo:{
      title:'Kia Tūhono — Describe your whānau',
      instruction:'Build a whānau conversation using this week\'s pronouns and new family vocabulary.',
      sentences:[
        'I ask: <b>Tokohia koutou i roto i tō whānau?</b> You answer using tokorua/tokotoru etc. + list who is in your family.',
        'I ask: <b>Ka haere koutou ki hea i ngā hararei?</b> Answer using Ka haere tātou/mātou and a place.',
        'I ask: <b>Ko wai te pou o tō koutou whānau?</b> Answer: Ko [name/role] — ia te pou o tō mātou whānau.',
        'Ask ME a question about my family using Tokohia or He pēhea.',
      ],
      prompt:'Ko ia te pou o tō mātou whānau — she is the pillar of our family. The word pou (pillar/post) comes from the central pillar of a wharenui (meeting house). What does calling someone the pou of the family say about their role? What makes someone a pou in your whānau?',
    },
    youDo:{
      title:'Māu Anō — Tōu whānau',
      instruction:'Describe your family using this week\'s pronouns and vocabulary.',
      tasks:[
        'Write who is in your family using Tokohia and Ko [name] tōku [relationship].',
        'Write what your family does together: Ka [verb] tātou/mātou…',
        'Write who the pou of your family is: Ko [name] te pou o tō mātou whānau nō te mea…',
        '✦ Bonus: Write a six-sentence paragraph about your whānau. Use: tokohia, tātou/mātou (and explain the choice), a Ka sequence of what you do together, and close with a Ko sentence about who your family\'s pou is.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T2W4 = [
  {day:'Monday',  q:'"Ka haere tāua ki te moana." Who is going to the beach?',options:['The speaker and a third person (not the listener)','The speaker and the listener — both of them together','The speaker alone','Three or more people'],correct:1},
  {day:'Monday',  q:'You went to town with your mum. You\'re telling your friend (who wasn\'t there). Which pronoun?',options:['tāua','tātou','māua','mātou'],correct:2},
  {day:'Tuesday', q:'What does "tātou" mean?',options:['we (3+, not including you)','you all (3+)','we (3+, including you)','they (3+)'],correct:2},
  {day:'Tuesday', q:'Which prefix is always associated with an inclusive "we"?',options:['mā-','kou-','rā-','tā-'],correct:3},
  {day:'Wednesday',q:'"I kite māua i ō māua hoa. Ka tākaro rātou." Why is this unclear?',options:['The tense is wrong','Rātou is unclear — it is not certain whether māua is included in rātou or not','Māua is the wrong pronoun','There is no object marker'],correct:1},
  {day:'Wednesday',q:'What does "katoa" mean?',options:['some','none','all / everyone','a few'],correct:2},
  {day:'Thursday', q:'What is the toko- prefix used for?',options:['Counting things','Counting places','Counting people','Counting time'],correct:2},
  {day:'Thursday', q:'"Ko ia te pou o tō mātou whānau." What does pou mean here?',options:['the youngest member','the leader who travels most','the pillar / foundation of the family','the cook'],correct:2},
]

const CURRICULUM_T2W5 = {
  Monday: {
    topic:'Tekau mā tahi — Numbers 11–20',
    nzLink:'Te Aho Arataki Marau — AO 1.3: Number · Grammar Level 1–2: Numbers 11–20, tekau mā pattern',
    aos:[{code:'AO 1.3',label:'Numbers 11–20'}],
    iDo:{
      title:'Tāua Kōrero — Ten and one more: the tekau mā pattern',
      instruction:'In Term 1 you learned tahi through tekau (1–10). Today we discover how te reo Māori builds numbers above ten — and it is beautifully logical. Once you know the pattern, you never need to memorise another number combination. Watch.',
      example:`<b>tekau mā tahi</b> — 11 (ten and one)<br><b>tekau mā rua</b> — 12 (ten and two)<br><b>tekau mā toru</b> — 13<br><b>tekau mā whā</b> — 14<br><b>tekau mā rima</b> — 15<br><b>tekau mā ono</b> — 16<br><b>tekau mā whitu</b> — 17<br><b>tekau mā waru</b> — 18<br><b>tekau mā iwa</b> — 19<br><b>rua tekau</b> — 20 (two tens)`,
      demo:`The pattern:\n<b>tekau mā</b> + [ones digit] = 11 through 19\n\n<b>tekau</b> = 10\n<b>mā</b> = and (joining tens and ones)\n<b>tahi</b> = 1 → tekau mā tahi = 11\n<b>rua</b> = 2 → tekau mā rua = 12\n…and so on up to 19.\n\nFor twenty: <b>rua tekau</b> (two tens) — the tens digit comes FIRST.\n\nUsed in real contexts:\n<b>E tekau mā rima ngā ākonga i tēnei akomanga.</b>\nThere are 15 students in this classroom.\n\n<b>Tokorua tekau mā tahi ō mātou whānau.</b>\nThere are 21 people in our family.\n\n<b>Kei te hoko mātou i te miraka — e tekau mā rua tāra te utu.</b>\nWe are buying milk — it costs $12.`,
      tip:'Tekau mā = "ten and". Just add the ones digit after it. For twenty onward: [tens digit] + tekau. Rua tekau = 20. Toru tekau = 30. It could not be more logical.',
    },
    weDo:{
      title:'Kia Tūhono — Count together',
      instruction:'Call and response — I say a number in English, you say it in te reo. Then we use numbers in sentences.',
      sentences:[
        'Numbers 11–19: rapid fire. Teacher says "thirteen" — students say <b>tekau mā toru.</b> Keep going to 19.',
        'In a sentence: "There are 14 students going." → <b>Tokorua tekau mā whā ngā ākonga e haere ana.</b> Wait — how many? Count who is actually going.',
        'Price: "The book costs $16." → <b>E tekau mā ono tāra te pukapuka.</b>',
        'Age: "I am 11 years old." → <b>Tekau mā tahi ōku tau.</b> (tau = years/age)',
      ],
      prompt:'The te reo Māori number system is completely regular — no "eleven" or "twelve" (irregular English words from old Germanic). Every number above ten follows the same pattern. How does a regular system help language learners? Are there any disadvantages to regular systems?',
    },
    youDo:{
      title:'Māu Anō — Numbers in context',
      instruction:'Use numbers 11–20 in real sentences.',
      tasks:[
        'Write your age in te reo using tekau mā [number] ōku tau.',
        'Write how many students are in your class: E [number] ngā ākonga i tēnei akomanga.',
        'Write three prices using E [number] tāra te [item].',
        '✦ Bonus: Write five sentences using numbers 11–20 in different contexts — age, price, quantity, distance, time. Use E hia? to ask how many, and answer each one.',
      ],
    },
  },
  Tuesday: {
    topic:'Rua tekau, toru tekau — Numbers 20–100',
    nzLink:'Te Aho Arataki Marau — AO 1.3: Number · Grammar Level 1–2: Tens and compound numbers to 100',
    aos:[{code:'AO 1.3',label:'Numbers 20–100'}],
    iDo:{
      title:'Tāua Kōrero — All the way to one hundred',
      instruction:'Yesterday you learned 11–20. The same logic takes you all the way to 100. Te reo Māori numbers are completely regular — once you know 1–10 and the pattern, you know every number.',
      example:`<b>rua tekau</b> — 20<br><b>rua tekau mā tahi</b> — 21<br><b>rua tekau mā rima</b> — 25<br><b>toru tekau</b> — 30<br><b>toru tekau mā whā</b> — 34<br><b>whā tekau</b> — 40<br><b>rima tekau</b> — 50<br><b>ono tekau</b> — 60<br><b>whitu tekau</b> — 70<br><b>waru tekau</b> — 80<br><b>iwa tekau</b> — 90<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kotahi" target="_blank" rel="noopener">kotahi</a> <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rau" target="_blank" rel="noopener">rau</a></b> — 100 (one hundred) (one hundred)`,
      demo:`The full pattern:\n[tens digit] + tekau = the tens number\n[tens digit] + tekau + mā + [ones digit] = the in-between number\n\nExamples:\n<b>whā tekau</b> = 40\n<b>whā tekau mā rua</b> = 42\n<b>iwa tekau mā iwa</b> = 99\n<b>kotahi rau</b> = 100\n\nUsed in context:\n<b>E iwa tekau mā rua ngā tau o tōku tīpuna.</b>\nMy ancestor is 92 years old. (tīpuna = ancestor/grandparent)\n\n<b>E rima tekau tāra te utu o tērā kākahu.</b>\nThat piece of clothing costs $50. (kākahu = clothing)\n\n<b>E toru tekau mā whā ngā ākonga i tō mātou kura.</b>\nThere are 34 students in our school.`,
      tip:'The pattern never breaks: [tens] tekau (mā [ones]). Memorise the tens (rua tekau, toru tekau… iwa tekau) and you can say any number to 99. Add kotahi rau for 100.',
    },
    weDo:{
      title:'Kia Tūhono — Numbers in real life',
      instruction:'Use numbers 20–100 in sentences about real things.',
      sentences:[
        'How many days in a year? → <b>E toru rau ono tekau mā rima ngā rā i tētahi tau.</b> Wait — that\'s 365. Break it into hundreds: toru rau + ono tekau mā rima.',
        'Your school: how many students? → <b>E [number] ngā ākonga i tō mātou kura.</b>',
        'A price: something that costs between $20 and $99. → <b>E [number] tāra te [item].</b>',
        'An age: how old is someone in your whānau? → <b>E [number] ōna tau.</b>',
      ],
      prompt:'Three hundred and sixty-five in te reo: toru rau ono tekau mā rima. Every single digit stated in order — no shortcuts. Compare to English: "three hundred and sixty-five" — same structure! What does this tell you about how number systems often work across languages?',
    },
    youDo:{
      title:'Māu Anō — Number sentences',
      instruction:'Use numbers 20–100 across a range of real contexts.',
      tasks:[
        'Write how old three people in your whānau are using E [number] ōna/ōna tau.',
        'Write three prices for things you know using E [number] tāra te [item].',
        'Write how many students are in your year group and school.',
        '✦ Bonus: Write a "number story" — seven sentences, each using a different number between 20 and 100 in a different context (age, price, distance, quantity, score, year, temperature).',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Numbers in extended sentences',
    nzLink:'Te Aho Arataki Marau — AO 1.3: Number · AO 2.3: Extended communication · Grammar Level 1–2: Numbers in complex sentence contexts',
    aos:[{code:'AO 1.3',label:'Numbers in context'},{code:'AO 2.3',label:'Extended number sentences'}],
    iDo:{
      title:'Tāua Kōrero — Using numbers to tell stories',
      instruction:'Numbers become powerful when they appear inside rich sentences. Today we practise embedding numbers into the complex sentence structures you have built this term and last — past tense, comparatives, fronted phrases, and lists.',
      example:`With past tense:<br><b>I haere mātou tokowhitu ki te hākinakina inanahi.</b><br>Seven of us went to sport yesterday.<br><br>With comparison:<br><b>He nui ake ngā ākonga i tēnei akomanga i tērā — e toru tekau mā rua ki e rua tekau mā whā.</b><br>There are more students in this class than that one — 32 versus 24.<br><br>With Ko ēnei:<br><b>Ko ēnei ngā utu: e whā tekau tāra mō te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=p%C5%8Dtae" target="_blank" rel="noopener">pōtae</a>, e rua tekau mā rima tāra mō ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C5%AB" target="_blank" rel="noopener">tū</a>.</b><br>These are the prices: $40 for the hat, $25 for the shoes. (tū = shoes/footwear)<br><br>With a fronted phrase:<br><b>I te Hātarei o tērā wiki, e toru tekau mā rua ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C4%81ngata" target="_blank" rel="noopener">tāngata</a> i haere mai ki tō mātou hui.</b><br>Last Saturday, 32 people came to our meeting.`,
      demo:`Numbers in different positions:\n\nAs SUBJECT count: <b>E [number] ngā [noun]</b> — there are [number] [things]\nAs PEOPLE count: <b>Toko[number] mātou</b> — there are [number] of us\nIn COMPARISON: <b>e [number] ki e [number]</b> — [number] versus [number]\nIn a LIST: <b>e [number] tāra mō te [item]</b> — [number] dollars for the [item]\n\nNew words:\n<b>Hātarei</b> — Saturday\n<b>hui</b> — meeting / gathering\n<b>tū</b> — shoes / footwear\n<b>haere mai</b> — come (toward the speaker)`,
      tip:'Put the number as close to the noun it counts as possible. E rua tekau ngā ākonga — 20 students. The number and the noun stay together like a pair.',
    },
    weDo:{
      title:'Kia Tūhono — Numbers in context',
      instruction:'Build sentences that embed numbers naturally in complex structures.',
      sentences:[
        'Past + people count: "14 of us played sport yesterday." → <b>I tākaro mātou tokorua tekau mā whā i te hākinakina inanahi.</b>',
        'Comparison with numbers: "This class has more students than that one — 28 vs 21." → <b>He nui ake ngā ākonga i tēnei akomanga — e rua tekau mā waru ki e rua tekau mā tahi.</b>',
        'Fronted phrase + number: "Last Friday, 45 people came to the school concert." → Build it step by step.',
        'Ko ēnei list with prices: List three items and their prices using Ko ēnei ngā utu…',
      ],
      prompt:'Numbers make claims precise. "Many people came" is vague. "E whā tekau mā rima ngā tāngata i haere mai" is exact. When does precision matter? Can being too precise ever be inappropriate in te ao Māori contexts?',
    },
    youDo:{
      title:'Māu Anō — Rich number sentences',
      instruction:'Write sentences that use numbers inside complex structures.',
      tasks:[
        'Write a past tense sentence with a people count using toko[number].',
        'Write a comparison sentence using two numbers and "ki" (versus).',
        'Write a Ko ēnei list with prices for three items.',
        '✦ Bonus: Write a paragraph (6 sentences) about an event — a sports day, a school fair, or a family gathering. Include at least four numbers in different positions: as a count, as a price, in a comparison, and in a fronted phrase.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He toa hākinakina — Sports day',
    nzLink:'Te Aho Arataki Marau — AO 1.3: Number · AO 2.3: Extended communication · AO 2.1: Relationships',
    aos:[{code:'AO 1.3',label:'Numbers in sports context'},{code:'AO 2.3',label:'Sports event conversation'}],
    iDo:{
      title:'Tāua Kōrero — Talking about sports day',
      instruction:'Today we use numbers, pronouns, tenses, and comparatives in a sports day conversation. Sports is one of the richest contexts for te reo — scores, people, comparisons, and feelings all come together.',
      example:`<b>A:</b> He pēhea tā koutou toa hākinakina inanahi?<br><b>B:</b> He tino pai! I toa mātou — e whā tekau mā rima ki e rua tekau mā toru ngā ira!<br><b>A:</b> Tokohia koutou i tākaro?<br><b>B:</b> Tokorua tekau mā rua mātou. I mahi kaha tātou katoa!<br><b>A:</b> Ko wai te kaitākaro pai rawa atu?<br><b>B:</b> Ko tōku hoa ko Rangi — i eke ia i ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ira" target="_blank" rel="noopener">ira</a> e tekau mā whā!<br><b>A:</b> Ka rawe! He pai ake tēnei hua i tērā tau?<br><b>B:</b> Āe — he nui ake ngā ira i tēnei tau! He tino <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=harikoa" target="_blank" rel="noopener">harikoa</a> mātou katoa.`,
      demo:`New sports and achievement vocabulary:\n<b>toa hākinakina</b> — sports competition / tournament (toa = victorious/champion)\n<b>ira</b> — points / score\n<b>eke</b> — to score / reach / mount\n<b>kaitākaro</b> — player (kai- + tākaro)\n<b>harikoa</b> — joyful / elated / very happy\n<b>i <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=eke" target="_blank" rel="noopener">eke</a> ia i ngā ira e tekau mā whā</b> — she scored 14 points (eke = scored/reached)\n<b>hua</b> — result / outcome (also: benefit, from Term 2 Week 3)\n<b>i tērā tau</b> — last year\n\nNotice the score format:\n<b>e [score1] ki e [score2] ngā ira</b> — [score1] to [score2] points`,
      tip:'E [number] ki e [number] ngā ira = [number] to [number] the score. This is how you report any score in te reo Māori. Learn it cold — you will use it constantly in sports contexts.',
    },
    weDo:{
      title:'Kia Tūhono — Sports day conversation',
      instruction:'Build a sports day conversation using numbers, pronouns, and tenses.',
      sentences:[
        'I ask: <b>He pēhea tā koutou toa hākinakina?</b> Answer with a result — did you win? Use I toa or Kāore mātou i toa.',
        'I ask: <b>Tokohia koutou i tākaro?</b> Answer using toko[number].',
        'I ask: <b>He aha te ira mutunga?</b> (What was the final score?) Answer: E [number] ki e [number] ngā ira.',
        'I ask: <b>Ko wai te kaitākaro pai rawa atu?</b> Name someone and say what they did: i eke ia i ngā ira e [number].',
      ],
      prompt:'I eke ia i ngā ira e tekau mā whā — she scored 14 points. The word "eke" also means "to mount" or "to ride" — as in riding a wave or climbing a hill. Why might te reo Māori use the same word for scoring points as for riding a wave? What does that connection suggest about achievement?',
    },
    youDo:{
      title:'Māu Anō — Your sports day report',
      instruction:'Write a sports day report in te reo Māori.',
      tasks:[
        'Write the result: I toa/Kāore i toa + E [score] ki e [score] ngā ira.',
        'Write how many players: Toko[number] mātou i tākaro.',
        'Write who the best player was: Ko [name] te kaitākaro pai rawa atu — i eke ia i ngā ira e [number].',
        '✦ Bonus: Write a full sports report (7 sentences) — result, score, player count, best player, atmosphere (harikoa/pōuri), and a comparison with last year. Use at least five different numbers.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T2W5 = [
  {day:'Monday',  q:'How do you say "17" in te reo Māori?',options:['tekau mā ono','tekau mā whitu','tekau whitu','whitu tekau'],correct:1},
  {day:'Monday',  q:'"Tekau mā rima ōku tau." What does this sentence tell us?',options:['There are 15 things','I am 15 years old','The price is $15','There are 15 people'],correct:1},
  {day:'Tuesday', q:'How do you say "43" in te reo Māori?',options:['toru tekau mā whā','whā tekau mā toru','toru whā tekau','whā tekau toru'],correct:1},
  {day:'Tuesday', q:'What is "kotahi rau" in English?',options:['ten','fifty','one hundred','one thousand'],correct:2},
  {day:'Wednesday',q:'"E rua tekau mā waru ki e rua tekau mā tahi ngā ira." What does this describe?',options:['A comparison of prices','A score of 28 to 21','The number of students in two classes','Ages of two people'],correct:1},
  {day:'Wednesday',q:'"Tokorua tekau mā rua mātou i tākaro." What does toko- before a number indicate?',options:['The number refers to things','The number refers to people','The number is approximate','The number is a price'],correct:1},
  {day:'Thursday', q:'"I eke ia i ngā ira e tekau mā whā." What happened?',options:['She missed 14 points','She scored 14 points','She played for 14 minutes','She won by 14 points'],correct:1},
  {day:'Thursday', q:'What does "harikoa" mean?',options:['tired after sport','sad about losing','joyful / elated / very happy','competitive'],correct:2},
]

const CURRICULUM_T2W6 = {
  Monday: {
    topic:'Wā, rā, marama, tau — Days, months, and years',
    nzLink:'Te Aho Arataki Marau — AO 1.3: Days, months, dates · AO 2.4: Time · Grammar Level 1–2: Days of the week, months of the year, date expressions',
    aos:[{code:'AO 1.3',label:'Days, months &amp; dates'},{code:'AO 2.4',label:'Time expressions'}],
    iDo:{
      title:'Tāua Kōrero — When? The days, months, and years',
      instruction:'AO 1.3 asks us to communicate about number, days, months, and dates. Today we complete that picture — you already have numbers to 100. Now we add the days of the week, months of the year, and how to say a date.',
      example:`<b>DAYS OF THE WEEK:</b><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=R%C4%81hina" target="_blank" rel="noopener">Rāhina</a></b> — Monday<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=R%C4%81t%C5%AB" target="_blank" rel="noopener">Rātū</a></b> — Tuesday<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=R%C4%81apa" target="_blank" rel="noopener">Rāapa</a></b> — Wednesday<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=R%C4%81pare" target="_blank" rel="noopener">Rāpare</a></b> — Thursday<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=R%C4%81mere" target="_blank" rel="noopener">Rāmere</a></b> — Friday<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=R%C4%81horoi" target="_blank" rel="noopener">Rāhoroi</a></b> — Saturday<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=R%C4%81tapu" target="_blank" rel="noopener">Rātapu</a></b> — Sunday<br><br><b>MONTHS:</b><br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Kohit%C4%81tea" target="_blank" rel="noopener">Kohitātea</a></b> — January · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Huitanguru" target="_blank" rel="noopener">Huitanguru</a></b> — February · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Pout%C5%ABterangi" target="_blank" rel="noopener">Poutūterangi</a></b> — March<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Paengawh%C4%81wh%C4%81" target="_blank" rel="noopener">Paengawhāwhā</a></b> — April · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Haratua" target="_blank" rel="noopener">Haratua</a></b> — May · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Pipiri" target="_blank" rel="noopener">Pipiri</a></b> — June<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=H%C5%8Dngongoi" target="_blank" rel="noopener">Hōngongoi</a></b> — July · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Hereturik%C5%8Dk%C4%81" target="_blank" rel="noopener">Hereturikōkā</a></b> — August · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Mahuru" target="_blank" rel="noopener">Mahuru</a></b> — September<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Whiringa-%C4%81-nuku" target="_blank" rel="noopener">Whiringa-ā-nuku</a></b> — October · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Whiringa-%C4%81-rangi" target="_blank" rel="noopener">Whiringa-ā-rangi</a></b> — November · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=Hakihea" target="_blank" rel="noopener">Hakihea</a></b> — December`,
      demo:`How to say a date:\n<b>I te [number] o [month], [year]</b>\n\nE.g. "On the 14th of March, 2024":\n<b>I te tekau mā whā o Poutūterangi, rua mano rua tekau mā whā.</b>\n\nSimpler date questions:\n<b>Ko tēhea rā tēnei?</b> — What day is today?\n<b>Ko Rāhina tēnei.</b> — Today is Monday.\n<b>Ko tēhea marama tēnei?</b> — What month is this?\n<b>Ko Pipiri tēnei.</b> — This is June.\n<b>Ko tēhea tau tēnei?</b> — What year is this?\n\nDays of the week come from:\nRā- (sun/day) + the number of the day (Rāhina = Moon-day, Rātū = Tuesday…)`,
      tip:'Ko tēhea rā/marama/tau tēnei? = What day/month/year is this? Ko [answer] tēnei. = This is [answer]. These two sentences handle almost every date question you will ever need.',
    },
    weDo:{
      title:'Kia Tūhono — Days, months, dates',
      instruction:'Answer date questions and use them in sentences.',
      sentences:[
        'I ask: <b>Ko tēhea rā tēnei?</b> Answer with today\'s day.',
        'I ask: <b>Ko tēhea marama tēnei?</b> Answer with this month.',
        'Use a day in a sentence: "Last Monday I went to…" → <b>I te Rāhina o tērā wiki, i haere au ki…</b>',
        'Say today\'s full date: <b>Ko te [number] o [month] tēnei rā.</b>',
      ],
      prompt:'The Māori month names are not translations of English months — they come from the traditional Māori lunar calendar and describe natural events: Pipiri (June) = the fetal position of animals huddling for warmth; Mahuru (September) = the earth becomes warm. What does this tell you about how Māori understood time and nature?',
    },
    youDo:{
      title:'Māu Anō — Dates in context',
      instruction:'Use days, months, and dates in real sentences.',
      tasks:[
        'Write today\'s full date: Ko te [number] o [month], [year] tēnei rā.',
        'Write what day your birthday falls on this year.',
        'Write three sentences using different days of the week in past tense: I te Rāhina, i te Rātū…',
        '✦ Bonus: Write a weekly diary — one sentence for each day of the school week (Rāhina to Rāmere) about what happened or what will happen. Use past tense for days gone, Ka for future days.',
      ],
    },
  },
  Tuesday: {
    topic:'He aha te wā? — Telling the time',
    nzLink:'Te Aho Arataki Marau — AO 1.3: Time · AO 2.4: Time expressions · Grammar Level 1–2: Clock time, He aha te wā?',
    aos:[{code:'AO 1.3',label:'Clock time'},{code:'AO 2.4',label:'Daily time expressions'}],
    iDo:{
      title:'Tāua Kōrero — What time is it?',
      instruction:'You know how to say dates. Now let\'s tell the time. Te reo Māori time-telling uses a simple structure that relies on your numbers — another reason why knowing your numbers to 60 is so useful.',
      example:`<b>He aha te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=w%C4%81" target="_blank" rel="noopener">wā</a>?</b> — What time is it?<br><br><b>Ko te [hour] <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=karaka" target="_blank" rel="noopener">karaka</a>.</b> — It is [hour] o\'clock.<br><b>Ko te toru karaka.</b> — It is 3 o\'clock.<br><br><b>Ko te whā karaka mā rua tekau.</b> — It is 4:20.<br>(hour + karaka + mā + minutes)<br><br><b>Ko te iwa karaka māwhā tekau mā rima.</b> — It is 9:45.<br><br><b>Ā te [hour] karaka.</b> — At [hour] o\'clock. (for scheduling)<br><b>Ā te rima karaka ka tīmata te hākinakina.</b><br>At 5 o\'clock sport starts.`,
      demo:`The structure:\n<b>Ko te [hour] karaka</b> = It is [hour] o\'clock\n<b>Ko te [hour] karaka mā [minutes]</b> = It is [hour]:[minutes]\n\n<b>karaka</b> = clock (from English "clock" → karaka)\n<b>mā</b> = and (joining hours and minutes — same mā as in tekau mā tahi)\n\nTime of day expressions:\n<b>i te ata</b> — in the morning / AM\n<b>i te ahiahi</b> — in the afternoon / evening\n<b>i te pō</b> — at night\n\nFull time with AM/PM:\n<b>Ko te tekau karaka i te ata.</b> — It is 10 AM.\n<b>Ko te rua karaka i te ahiahi.</b> — It is 2 PM.`,
      tip:'Ko te [hour] karaka mā [minutes]. Just put the hour, say karaka (clock), add mā (and), then the minutes. Exactly like tekau mā tahi — but for time.',
    },
    weDo:{
      title:'Kia Tūhono — What time is it?',
      instruction:'I show you a time — you say it in te reo. Then use it in a sentence.',
      sentences:[
        '3:00 PM → <b>Ko te toru karaka i te ahiahi.</b>',
        '8:30 AM → <b>Ko te waru karaka mā toru tekau i te ata.</b>',
        'Scheduling: "School starts at 9 AM." → <b>Ā te iwa karaka i te ata ka tīmata te kura.</b>',
        'Ask and answer: <b>He aha te wā?</b> → <b>Ko te [current time] karaka.</b> What time is it right now?',
      ],
      prompt:'Te reo Māori uses "karaka" (from English "clock") for time-telling. This is a loanword — a word borrowed from another language. Why do languages borrow words? Can you think of other loanwords in te reo Māori? In English?',
    },
    youDo:{
      title:'Māu Anō — Your daily timetable',
      instruction:'Write your school day timetable in te reo Māori.',
      tasks:[
        'Write what time school starts and finishes: Ā te [time] karaka ka tīmata/mutu te kura.',
        'Write three things you do at specific times today using Ā te [time] karaka ka…',
        'Ask a partner: He aha te wā i tīmata ai tō kura? (What time did your school start?) They answer.',
        '✦ Bonus: Write your full school day as a timetable — every lesson with its start time, using Ā te [time] karaka ka [subject/activity]. At least six time entries.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Dates, times, and events in full sentences',
    nzLink:'Te Aho Arataki Marau — AO 1.3: Number/date/time · AO 2.4: Time · AO 2.3: Extended communication',
    aos:[{code:'AO 1.3',label:'Dates &amp; times in context'},{code:'AO 2.3',label:'Scheduling &amp; events'}],
    iDo:{
      title:'Tāua Kōrero — Invitations, events, and schedules',
      instruction:'Dates and times become truly useful when you can use them to make plans, describe events, and write schedules. Today we combine everything from this week — days, months, times, numbers — into the kinds of sentences you would use for a real school event.',
      example:`<b>He hui tēnei ā te Rāpare, ko te tekau mā rima o Hōngongoi, ā te whitu karaka i te ahiahi.</b><br>There is a meeting this Thursday, the 15th of July, at 7 PM.<br><br><b>Ka tīmata te hākinakina ā te Rāhoroi i te iwa karaka i te ata.</b><br>Sport starts on Saturday at 9 AM.<br><br><b>I haere mātou ki te hui ā te Rāhina. Tokowhitu mātou. Ka tīmata ā te rua tekau mā rua karaka, ā ka mutu ā te toru karaka i te ahiahi.</b><br>We went to the meeting on Monday. There were seven of us. It started at 12:22 and finished at 3 PM.`,
      demo:`Building event sentences:\n\n[WHAT] + [WHEN: day] + [WHEN: time] + [WHEN: date]\n\nKey connectors for scheduling:\n<b>ā te [day]</b> — on [day] (upcoming)\n<b>i te [day]</b> — on [day] (past)\n<b>ā te [time] karaka</b> — at [time] o\'clock\n<b>ka tīmata</b> — starts / will start\n<b>ka mutu</b> — finishes / will end\n<b>mō te [duration]</b> — for [duration]\n\nNew words:\n<b>hui</b> — meeting / gathering (you\'ve seen this)\n<b>duration: mō ngā haora e [number]</b> — for [number] hours (haora = hour, from English)`,
      tip:'Build event sentences in layers: what → what day → what time → how many people → what happened. Each layer adds precision. The listener always knows exactly what, when, and who.',
    },
    weDo:{
      title:'Kia Tūhono — Plan an event',
      instruction:'Together we plan and describe a school event in te reo Māori.',
      sentences:[
        'Name the event and day: <b>He [event] ā te [day].</b> What is happening this week at school?',
        'Add the date and time: <b>Ko te [number] o [month]. Ka tīmata ā te [time] karaka.</b>',
        'Add how many people: <b>Toko[number] mātou/tātou.</b>',
        'Describe what will happen: Use Ka sentences to sequence the events of the evening.',
      ],
      prompt:'I te iwa karaka i te ata ka tīmata te kura. Does your school really start at 9? What time does it start in te reo? The act of putting your real life into te reo Māori — your actual school time, your actual class size — makes the language genuinely yours. Why does that matter?',
    },
    youDo:{
      title:'Māu Anō — Design your event',
      instruction:'Plan and write about a real or imagined school event.',
      tasks:[
        'Write what the event is and what day it is: He [event] ā te [day], ko te [date] o [month].',
        'Write when it starts and finishes: Ka tīmata ā te [time] karaka, ka mutu ā te [time] karaka.',
        'Write how many people will be there and what will happen: Ka [verb] tātou…',
        '✦ Bonus: Write a full event invitation (7 sentences) for a real school event — include the event name, day, full date, start and end time, how many people, what will happen, and who will lead (Mā wai e ārahi).',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He pānui — Reading and giving announcements',
    nzLink:'Te Aho Arataki Marau — AO 1.3: Date/time · AO 1.7: Classroom language · AO 2.3: Extended communication',
    aos:[{code:'AO 1.3',label:'Announcements with dates/times'},{code:'AO 1.7',label:'Classroom &amp; school language'}],
    iDo:{
      title:'Tāua Kōrero — Making and understanding announcements',
      instruction:'Today we use dates, times, and events in the most practical way possible — making real school announcements. This is AO 1.7 (classroom language) meeting AO 1.3 (dates and numbers) in real action.',
      example:`<b>Tēnā koutou katoa.</b><br>Greetings to you all.<br><br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=p%C4%81nui" target="_blank" rel="noopener">pānui</a> āku mōu katoa.</b><br>I have an announcement for you all. (pānui = announcement/notice/reading)<br><br><b>Ā te Rāpare, ko te rua tekau o Pipiri, ka tū he <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hui" target="_blank" rel="noopener">hui</a> mō ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81tua" target="_blank" rel="noopener">mātua</a> i te kura.</b><br>On Thursday the 20th of June, there will be a parent meeting at school.<br><br><b>Ka tīmata ā te whitu karaka i te ahiahi, ka mutu ā te iwa karaka.</b><br>It starts at 7 PM and finishes at 9 PM.<br><br><b>E tū ana i te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whare" target="_blank" rel="noopener">whare</a> hui. Haere mai ngā mātua katoa!</b><br>It is being held in the meeting room. All parents come!<br><br><b>Tēnā koutou, tēnā koutou, tēnā koutou katoa.</b>`,
      demo:`Announcement vocabulary:\n<b>pānui</b> — announcement / notice (also: to read — same word!)\n<b>He pānui āku mōu.</b> — I have an announcement for you.\n<b>ka tū</b> — will be held / will stand (tū = stand)\n<b>E tū ana</b> — is being held (ongoing location)\n<b>whare hui</b> — meeting room / hall\n<b>Haere mai!</b> — Come! (invitation toward the speaker)\n\nThe announcement structure:\n1. Greet: Tēnā koutou katoa\n2. Signal: He pānui āku\n3. Event + day + date\n4. Time (start and end)\n5. Location\n6. Call to action: Haere mai!\n7. Close: Tēnā koutou (×3)`,
      tip:'He pānui āku mōu katoa — I have an announcement for you all. This is your attention-getting phrase. Say it with confidence and the class will listen.',
    },
    weDo:{
      title:'Kia Tūhono — Make an announcement',
      instruction:'Together we write and perform a class announcement for a real upcoming school event.',
      sentences:[
        'Opening: Everyone together — <b>Tēnā koutou katoa.</b> Signal: <b>He pānui āku.</b>',
        'Name the event and when: <b>Ā te [day], ko te [date] o [month], ka tū he [event].</b>',
        'Time: <b>Ka tīmata ā te [time] karaka, ka mutu ā te [time] karaka.</b>',
        'Location + call: <b>E tū ana i te [place]. Haere mai [who]!</b> Then close with Tēnā koutou ×3.',
      ],
      prompt:'Making an announcement in te reo Māori to your class — even a simple one — is a real act of language use. How does it feel different from just writing sentences in an exercise? What does it add to do something with language that has a real purpose and audience?',
    },
    youDo:{
      title:'Māu Anō — Your announcement',
      instruction:'Write and perform your own school announcement in te reo Māori.',
      tasks:[
        'Choose a real upcoming school event (or invent one).',
        'Write the full announcement following the seven-step structure.',
        'Practise delivering it — aim to say it without looking at the page.',
        '✦ Bonus: Deliver your announcement to the class. The class listens and, without looking at a text, writes down the key details: event, day, date, time, location. Check for accuracy.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T2W6 = [
  {day:'Monday',  q:'What is Wednesday in te reo Māori?',options:['Rāhina','Rāapa','Rātū','Rāmere'],correct:1},
  {day:'Monday',  q:'Which month is "Pipiri"?',options:['March','April','June','July'],correct:2},
  {day:'Tuesday', q:'"Ko te whā karaka mā rua tekau." What time is this?',options:['4:02','4:12','4:20','24:00'],correct:2},
  {day:'Tuesday', q:'"Ā te rima karaka ka tīmata te hākinakina." What does this sentence tell us?',options:['Sport finished at 5 o\'clock','Sport starts at 5 o\'clock','There are 5 players','The game lasted 5 hours'],correct:1},
  {day:'Wednesday',q:'"Ka tīmata ā te rua tekau mā rua karaka, ka mutu ā te toru karaka." When does the event end?',options:['At 2:22','At 3:00','At 22:03','At 12:22'],correct:1},
  {day:'Wednesday',q:'What is "haora" a loanword for?',options:['minute','second','hour','day'],correct:2},
  {day:'Thursday', q:'"He pānui āku mōu katoa." What is the speaker doing?',options:['Asking a question','Saying goodbye','Giving an announcement','Introducing themselves'],correct:2},
  {day:'Thursday', q:'What does "Haere mai!" mean?',options:['Go away!','Come here! (invitation toward speaker)','Be quiet!','Sit down!'],correct:1},
]

const CURRICULUM_T2W7 = {
  Monday: {
    topic:'He pēhea te āhua o te rangi? — Weather and seasons',
    nzLink:'Te Aho Arataki Marau — AO 2.4: Time, weather and seasons · Grammar Level 1–2: Weather expressions, Ka for weather narrative',
    aos:[{code:'AO 2.4',label:'Weather &amp; seasons'},{code:'AO 1.5',label:'Environmental description'}],
    iDo:{
      title:'Tāua Kōrero — Talking about the weather',
      instruction:'Weather is one of the most universal conversation topics. In te reo Māori, weather expressions are beautifully descriptive and often poetic — reflecting the deep connection between Māori culture and the natural environment. Today we build a full weather vocabulary.',
      example:`<b>WEATHER CONDITIONS:</b><br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ua" target="_blank" rel="noopener">ua</a>.</b> — It is raining. (ua = rain)<br><b>He hau.</b> — It is windy. (hau = wind)<br><b>He rā pai.</b> — It is a fine day.<br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kapua" target="_blank" rel="noopener">kapua</a>.</b> — It is cloudy. (kapua = cloud)<br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hukarere" target="_blank" rel="noopener">hukarere</a>.</b> — It is snowing. (hukarere = snow)<br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%81niwaniwa" target="_blank" rel="noopener">āniwaniwa</a>.</b> — There is a rainbow. (āniwaniwa = rainbow)<br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=uira" target="_blank" rel="noopener">uira</a>.</b> — There is lightning.<br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whatitiri" target="_blank" rel="noopener">whatitiri</a>.</b> — There is thunder.<br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kohu" target="_blank" rel="noopener">kohu</a>.</b> — There is fog/mist.<br><br><b>TEMPERATURE:</b><br><b>He makariri.</b> — It is cold.<br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mahana" target="_blank" rel="noopener">mahana</a>.</b> — It is warm.<br><b>He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=wera" target="_blank" rel="noopener">wera</a>.</b> — It is hot.`,
      demo:`Asking about weather:\n<b>He pēhea te āhua o te rangi?</b> — What is the weather like?\n<b>He pēhea te rangi?</b> — How is the weather? (shorter form)\n\nWeather in the past:\n<b>I pēhea te āhua o te rangi inanahi?</b>\nWhat was the weather like yesterday?\n\nWeather with Ka (forecasting or narrative):\n<b>Ka ua āpōpō.</b> — It will rain tomorrow.\n<b>Ka mahana te rangi ā tērā wiki.</b> — The weather will be warm next week.\n\nSeasons:\n<b>kōanga</b> — spring\n<b>raumati</b> — summer\n<b>hōtoke</b> — winter\n<b>kārearea</b> — NOT a season — it is a falcon! The season is...\n<b>kōanga, raumati, ngahuru, hōtoke</b> — spring, summer, autumn, winter`,
      tip:'He [weather word] for right now. I [weather word] te rangi for past. Ka [weather word] te rangi for future. Same pattern as any other tense — just weather vocabulary.',
    },
    weDo:{
      title:'Kia Tūhono — Weather report',
      instruction:'Together we create a week-long weather report for an imaginary or real location.',
      sentences:[
        'Today\'s weather: <b>He pēhea te āhua o te rangi ināianei?</b> → <b>He [weather] te rangi.</b>',
        'Yesterday\'s weather: <b>I pēhea te āhua o te rangi inanahi?</b> → <b>I [weather] te rangi.</b>',
        'Tomorrow\'s forecast: <b>Ka pēhea te āhua o te rangi āpōpō?</b> → <b>Ka [weather] te rangi āpōpō.</b>',
        'Compare two days: <b>He [adj] ake te rangi o tēnei rā i tērā rā.</b>',
      ],
      prompt:'The word āniwaniwa (rainbow) contains the word rangi (sky). Hukarere (snow) contains huka (foam/froth) + rere (to flow/fall). Many Māori weather words describe what is happening visually and physically. How does this way of naming things differ from English weather words like "fog" or "snow"?',
    },
    youDo:{
      title:'Māu Anō — Weather sentences',
      instruction:'Use weather vocabulary across past, present, and future.',
      tasks:[
        'Write today\'s weather report: He pēhea te āhua o te rangi ināianei? Answer with three details.',
        'Write yesterday\'s weather using past tense: I pēhea…? Use at least two weather words.',
        'Write a three-day forecast using Ka: Ka [weather] te rangi ā te [day].',
        '✦ Bonus: Write a weather comparison paragraph — compare this week\'s weather to last week\'s using He [adj] ake and fronted time phrases. Include at least five different weather words.',
      ],
    },
  },
  Tuesday: {
    topic:'Ngā āhuatanga o te taiao — Seasons and the natural world',
    nzLink:'Te Aho Arataki Marau — AO 2.4: Seasons · AO 2.5: Natural world vocabulary · AO 1.4: Connection to land',
    aos:[{code:'AO 2.4',label:'Seasons &amp; nature'},{code:'AO 2.5',label:'Natural world vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — The seasons and what they bring',
      instruction:'In te ao Māori, the seasons are not just weather patterns — they mark the rhythms of planting, harvest, fishing, and ceremony. Today we learn how to describe each season and what happens in it.',
      example:`<b>Ko <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Danga" target="_blank" rel="noopener">kōanga</a> te wā o te tipu.</b><br>Spring is the time of growth. (<a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tipu" target="_blank" rel="noopener">tipu</a> = grow/growth)<br><br><b>Ko <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=raumati" target="_blank" rel="noopener">raumati</a> te wā o te wera me te tākaro.</b><br>Summer is the time of heat and play.<br><br><b>Ko <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ngahuru" target="_blank" rel="noopener">ngahuru</a> te wā o te hauhake.</b><br>Autumn is the time of harvest. (<a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hauhake" target="_blank" rel="noopener">hauhake</a> = harvest)<br><br><b>Ko <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=h%C5%8Dtoke" target="_blank" rel="noopener">hōtoke</a> te wā o te makariri me te okioki.</b><br>Winter is the time of cold and rest.`,
      demo:`Season vocabulary:\n<b>kōanga</b> — spring\n<b>raumati</b> — summer\n<b>ngahuru</b> — autumn\n<b>hōtoke</b> — winter\n\n<b>Ko [season] te wā o te [noun/activity].</b>\n[Season] is the time of [noun/activity].\n\nNature vocabulary:\n<b>tipu</b> — grow / plant / growth\n<b>hauhake</b> — harvest\n<b>okioki</b> — rest\n<b>hua rākau</b> — fruit (hua = fruit/benefit, rākau = tree)\n<b>puāwai</b> — blossom / flower / bloom\n<b>rau</b> — leaf / leaves\n<b>repo</b> — mud / swamp\n<b>huka</b> — frost / foam\n<b>ngahere</b> — forest / bush\n<b>moana</b> — sea / ocean / large lake`,
      tip:'Ko [season] te wā o te [activity]. This sentence works for ANY season and ANY activity — learn the frame, swap in the vocabulary.',
    },
    weDo:{
      title:'Kia Tūhono — Seasons and activities',
      instruction:'We build descriptions of each season and what people do in them.',
      sentences:[
        'Describe kōanga: <b>Ko kōanga te wā o te tipu. Ka puāwai ngā gete, ka hāpai te ngahere i ōna rau.</b>',
        'Describe raumati: <b>Ko raumati te wā o te wera. Ka kaukau ngā tamariki i te moana.</b>',
        'Describe hōtoke: <b>Ko hōtoke te wā o te makariri. Ka huka te whenua i te ata.</b>',
        'Which season is your favourite? <b>Ko tōku wā pai rawa atu ko [season] nō te mea…</b>',
      ],
      prompt:'Ko hōtoke te wā o te okioki — winter is the time of rest. In te ao Māori, rest and conservation are values, not just necessities. How does framing winter as "the time of rest" change how you think about that season? What value does it give to rest?',
    },
    youDo:{
      title:'Māu Anō — Season descriptions',
      instruction:'Write about the seasons using Ko [season] te wā o te… and nature vocabulary.',
      tasks:[
        'Write a Ko [season] te wā o te… sentence for all four seasons.',
        'Write what you do in each season: Ko raumati tōku wā pai rawa atu. Ka [activity] au.',
        'Write a sentence about nature in two seasons using rau (leaves), puāwai (blossom), huka (frost).',
        '✦ Bonus: Write a poem or descriptive paragraph about your favourite season. Use at least six nature words, Ko [season] te wā o te… as your opening line, and at least one comparative (He [adj] ake te [season] i…).',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Weather in stories and recounts',
    nzLink:'Te Aho Arataki Marau — AO 2.4: Weather/seasons · AO 2.3: Extended communication · Grammar Level 1–2: Weather as narrative context-setter',
    aos:[{code:'AO 2.4',label:'Weather as scene-setting'},{code:'AO 2.3',label:'Weather in recounts'}],
    iDo:{
      title:'Tāua Kōrero — Weather as the opening of a story',
      instruction:'Great writers use weather to set the scene — the opening line of a story often describes the weather because it tells us the mood before anything happens. Today we learn how to use weather as a powerful scene-setter in te reo Māori.',
      example:`WEATHER OPENING — sets the mood immediately:<br><b>He pō makariri, he pō <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=k%C5%8Dpeka" target="_blank" rel="noopener">kōpeka</a>.</b><br>It was a cold night, a dark night.<br><br><b>I te ata o Rāhina, ka ua kaha — ka tangi hoki te hau i ngā <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=r%C4%81kau" target="_blank" rel="noopener">rākau</a>.</b><br>On Monday morning, it rained hard — and the wind cried through the trees.<br><br><b>He rā pai, he rā ātaahua — ko te raumati tonu.</b><br>It was a fine day, a beautiful day — it was truly summer.<br><br><b>I <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ngaro" target="_blank" rel="noopener">ngaro</a> te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=r%C4%81" target="_blank" rel="noopener">rā</a> i roto i ngā kapua makariri.</b><br>The sun disappeared into the cold clouds.`,
      demo:`Weather as scene-setting techniques:\n\n1. <b>Double description</b> (two weather words for emphasis):\n"He pō makariri, he pō kōpeka." (cold night, dark night)\n\n2. <b>Weather + effect on nature</b>:\n"Ka ua kaha — ka tangi hoki te hau i ngā rākau."\n(It rained hard — and the wind cried through the trees)\n\n3. <b>Weather + contrast</b>:\n"Ahakoa he ua, he ātaahua tonu te rangi."\n(Although it rained, the sky was still beautiful)\n\nNew words:\n<b>kōpeka</b> — dark / gloomy\n<b>i ngaro</b> — disappeared / was lost\n<b>ka tangi te hau</b> — the wind cried/wailed (personification!)\n<b>ngahere</b> — forest / bush`,
      tip:'Open your story with weather to set the mood before a single character appears. Warm weather = possibility. Cold dark weather = difficulty ahead. Your reader will feel it before they know it.',
    },
    weDo:{
      title:'Kia Tūhono — Weather openings',
      instruction:'I give you a story mood — you write a weather opening that creates that mood.',
      sentences:[
        'Mood: excitement and adventure → <b>He rā pai, he rā ātaahua — ko te raumati tonu. Ka whiti te rā i ngā maunga.</b>',
        'Mood: sadness or difficulty → <b>He pō makariri, he pō kōpeka. I ngaro te marama i roto i ngā kapua.</b>',
        'Mood: warmth and safety → Use mahana, ātaahua, and whiti (shine) to create the feeling.',
        'Now write your own weather opening for a story about something that happened to you.',
      ],
      prompt:'Ka tangi te hau i ngā rākau — the wind cried in the trees. This is personification — giving the wind a human emotion. Te reo Māori naturally personifies nature. How does this connect to the Māori understanding of the natural world as a living, feeling entity rather than a backdrop?',
    },
    youDo:{
      title:'Māu Anō — Story openings',
      instruction:'Write three different story openings — each one starting with weather.',
      tasks:[
        'Write a weather opening for a story about a storm using pakū, hau, ua, and kapua.',
        'Write a weather opening for a summer adventure using mahana, whiti, ātaahua, and moana.',
        'Write a weather opening for a sad or difficult story using makariri, kōpeka, and i ngaro.',
        '✦ Bonus: Take your best weather opening and write the next two sentences — what happens after you set the scene? Include a character, a Ka action sentence, and at least one conjunction.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero mō te taiao — Nature conversation',
    nzLink:'Te Aho Arataki Marau — AO 2.4: Weather/seasons · AO 1.4: Connection to land · AO 2.5: Natural world vocabulary',
    aos:[{code:'AO 2.4',label:'Nature &amp; seasons'},{code:'AO 1.4',label:'Connection to land &amp; environment'}],
    iDo:{
      title:'Tāua Kōrero — Talking about the natural world',
      instruction:'This week has been about weather, seasons, and nature. Today we bring it all together in a conversation about the natural world around us — connecting to the land in the way te ao Māori teaches us to.',
      example:`<b>A:</b> He pēhea te āhua o te rangi i tēnei wiki?<br><b>B:</b> He makariri, he ua hoki — he hōtoke tonu tēnei!<br><b>A:</b> He aha āu i pai ai mō tēnei wā o te tau?<br><b>B:</b> He pai ki a au te hōtoke nō te mea ka okioki au, ka noho au i roto me tōku whānau.<br><b>A:</b> Kei hea koe i noho ai i ngā hararei?<br><b>B:</b> I noho mātou i te taha o te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=moana" target="_blank" rel="noopener">moana</a> — i ātaahua te rangi, ahakoa i makariri.<br><b>A:</b> He ātaahua! He pēhea te āhua o te moana i ērā rā?<br><b>B:</b> I nui, i parauri, i <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ng%C4%81oro" target="_blank" rel="noopener">ngāoro</a> hoki — ka pōuri au i te hoki ki te kāinga!`,
      demo:`New conversational phrases about nature:\n<b>He aha āu i pai ai mō tēnei wā o te tau?</b>\nWhat do you like about this time of year?\n<b>i pai ai</b> — that you like (pai + ai = relative clause "that is good/liked")\n<b>wā o te tau</b> — time of year\n<b>te taha o te moana</b> — the side of the ocean / by the sea\n<b>i ērā rā</b> — in those days / during that time\n<b>parauri</b> — brown (you learned this in Week 3!) — used for ocean colour\n<b>i ngāoro</b> — roared (sound word from Term 1 Week 9!)\n<b>Ka pōuri au i te hoki ki te kāinga.</b>\nI felt sad about going home.`,
      tip:'He aha āu i pai ai mō tēnei wā o te tau? — What do you like about this time of year? This question is a beautiful invitation to talk about nature and seasons. Learn it and ask it often.',
    },
    weDo:{
      title:'Kia Tūhono — Nature conversation',
      instruction:'Build a conversation about the natural world and seasons.',
      sentences:[
        'I ask: <b>He pēhea te āhua o te rangi i tēnei wiki?</b> Answer with this week\'s actual weather.',
        'I ask: <b>He aha āu i pai ai mō tēnei wā o te tau?</b> Answer with your favourite season and why.',
        'I ask: <b>He aha te wāhi āhua rawa atu i Aotearoa ki a koe?</b> (What is the most beautiful place in NZ for you?) Answer using Ko and description.',
        'Close: <b>He taonga te taiao o Aotearoa.</b> (The natural environment of NZ is a treasure.) Do you agree? Why?',
      ],
      prompt:'He taonga te taiao o Aotearoa — the natural environment of New Zealand is a treasure. What responsibilities come with living in a taonga? In te ao Māori, kaitiakitanga (guardianship) means caring for the natural world as a duty. What does kaitiaki mean for you personally?',
    },
    youDo:{
      title:'Māu Anō — Tōu wāhi āhua',
      instruction:'Write about your favourite place in nature.',
      tasks:[
        'Name your favourite natural place and say why: Ko tōku wāhi āhua rawa atu ko [place] nō te mea…',
        'Describe the weather there using at least three weather words.',
        'Write what you do there using Ka sentences.',
        '✦ Bonus: Write a full description of your favourite natural place (7 sentences) — name it, describe the weather and seasons there, what you do there, why you love it. Include a Ko ēnei list of its best features and close with He taonga tēnei nō te mea…',
      ],
    },
  },
}

const FRIDAY_QUIZ_T2W7 = [
  {day:'Monday',  q:'"He pēhea te āhua o te rangi?" — What is this question asking?',options:['What time is it?','What is the weather like?','What season is it?','How cold is it?'],correct:1},
  {day:'Monday',  q:'What does "hukarere" mean?',options:['fog / mist','lightning','snow','cloud'],correct:2},
  {day:'Tuesday', q:'"Ko ngahuru te wā o te hauhake." What does hauhake mean?',options:['growth','rest','harvest','rain'],correct:2},
  {day:'Tuesday', q:'What are the four seasons in te reo Māori in order from spring?',options:['hōtoke, kōanga, raumati, ngahuru','kōanga, raumati, ngahuru, hōtoke','raumati, ngahuru, hōtoke, kōanga','ngahuru, hōtoke, kōanga, raumati'],correct:1},
  {day:'Wednesday',q:'"Ka tangi te hau i ngā rākau." What literary device is being used?',options:['simile — comparing wind to something','metaphor — replacing one word with another','personification — giving the wind a human emotion','alliteration — repeated sounds'],correct:2},
  {day:'Wednesday',q:'What does "kōpeka" mean?',options:['cloudy','windy','rainy','dark / gloomy'],correct:3},
  {day:'Thursday', q:'"He taonga te taiao o Aotearoa." What does taonga mean in this context?',options:['problem','weather','treasure / something precious','danger'],correct:2},
  {day:'Thursday', q:'"Ka pōuri au i te hoki ki te kāinga." What does pōuri mean here?',options:['happy','excited','tired','sad / heavy-hearted'],correct:3},
]

const CURRICULUM_T2W8 = {
  Monday: {
    topic:'Ngā tūāhua o te hinengaro — Feelings and emotions',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Physical characteristics, personality and feelings · Grammar Level 1–2: Kei te/He for emotions, feeling vocabulary',
    aos:[{code:'AO 2.5',label:'Feelings &amp; emotions'},{code:'AO 2.3',label:'Expressing inner states'}],
    iDo:{
      title:'Tāua Kōrero — Saying how you feel inside',
      instruction:'You already know a few feeling words — pai, ngenge, hari, pōuri. Today we build a full emotional vocabulary. Being able to express how you feel in te reo Māori is one of the most intimate and important things you can do in a language.',
      example:`<b>Kei te hari au.</b> — I am happy / joyful.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=p%C5%8Duri" target="_blank" rel="noopener">pōuri</a> au.</b> — I am sad.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mataku" target="_blank" rel="noopener">mataku</a> au.</b> — I am scared / frightened.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81ia" target="_blank" rel="noopener">māia</a> au.</b> — I am brave / bold.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=whakam%C4%81" target="_blank" rel="noopener">whakamā</a> au.</b> — I am embarrassed / shy.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=h%C4%ABh%C4%AB" target="_blank" rel="noopener">hīhī</a> au.</b> — I am excited / eager.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=riri" target="_blank" rel="noopener">riri</a> au.</b> — I am angry.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81harahara" target="_blank" rel="noopener">māharahara</a> au.</b> — I am worried / anxious.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ohorere" target="_blank" rel="noopener">ohorere</a> au.</b> — I am surprised / startled.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=h%C5%8Dh%C4%81" target="_blank" rel="noopener">hōhā</a> au.</b> — I am bored / fed up.<br><b>Kei te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=aroha" target="_blank" rel="noopener">aroha</a> au.</b> — I am feeling love / compassion.`,
      demo:`Emotion structure:\n<b>Kei te [emotion] au.</b> — I am feeling [emotion].\n\nWith a reason:\n<b>Kei te pōuri au nō te mea…</b> — I am sad because…\n<b>Kei te hari au nā te mea…</b> — I am happy because…\n\nAsking about feelings:\n<b>Kei te pēhea tōu ngākau?</b> — How is your heart/feeling?\n<b>He aha tōu rongo?</b> — What do you feel? (rongo = feeling/sense)\n\nNew concept: <b>ngākau</b> = heart (as the seat of emotion, not the physical heart which is manawa)\n\nDeep emotion phrase:\n<b>Ka aroha au ki a koe.</b> — I feel love/compassion toward you.\n<b>Aroha</b> — love, compassion, empathy (one of the most important words in te reo Māori)`,
      tip:'Kei te [emotion] au = I am feeling [emotion]. Add nō te mea + reason to explain why. The emotion word goes right after Kei te — just like any other verb.',
    },
    weDo:{
      title:'Kia Tūhono — Express the feeling',
      instruction:'I describe a situation — you say how you would feel using Kei te [emotion] au.',
      sentences:[
        'You just found out you won a prize. → <b>Kei te hari au! Kei te ohorere hoki au!</b>',
        'You have a big test tomorrow. → <b>Kei te māharahara au mō āpōpō.</b>',
        'Someone said something unkind to you. → <b>Kei te pōuri au. Kei te riri hoki au.</b>',
        'You are speaking te reo Māori in front of the class for the first time. → How do you feel? Be honest — use two emotion words.',
      ],
      prompt:'Kei te aroha au ki a koe — I feel love/compassion toward you. The word aroha appears everywhere in te ao Māori — in greetings, farewells, and daily life. How is aroha different from just "love" in English? What does it include that "love" sometimes doesn\'t?',
    },
    youDo:{
      title:'Māu Anō — Feelings',
      instruction:'Express real emotions in te reo Māori.',
      tasks:[
        'Write how you feel right now using Kei te [emotion] au and give a reason.',
        'Write how you felt inanahi — use past tense: I [emotion] au nō te mea…',
        'Write three different emotions you have felt this week using three different emotion words.',
        '✦ Bonus: Write a "feelings journal entry" for today (6 sentences). Describe two emotions you have felt, why, how they changed during the day, and how you feel now. Use Kei te, I, and nō te mea.',
      ],
    },
  },
  Tuesday: {
    topic:'Ahua tangata — Personality and character',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Personality · Grammar Level 1–2: He for character description, ko ia te tangata…',
    aos:[{code:'AO 2.5',label:'Character &amp; personality'},{code:'AO 2.1',label:'Describing relationships'}],
    iDo:{
      title:'Tāua Kōrero — Describing who someone is',
      instruction:'Last term you learned He + noun + adjective for describing things. Today we use that same structure to describe people\'s character — who they are as people, not just what they look like.',
      example:`<b>He tangata āpōpō ia.</b> — She is a generous person. (āpōpō here = generous? No...)<br><br>Let's build the vocabulary first:<br><b>He tangata <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=atawhai" target="_blank" rel="noopener">atawhai</a> ia.</b> — He is a kind/caring person./caring person. (atawhai = kind)<br><b>He tangata <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81ia" target="_blank" rel="noopener">māia</a> ia.</b> — She is a brave person.<br><b>He tangata <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C5%8Dhio" target="_blank" rel="noopener">mōhio</a> ia.</b> — He is a knowledgeable/clever person.<br><b>He tangata <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=h%C5%ABm%C4%81rie" target="_blank" rel="noopener">hūmārie</a> ia.</b> — She is a gentle/humble person.<br><b>He tangata <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81ngere" target="_blank" rel="noopener">māngere</a> ia.</b> — He is a lazy person.<br><b>He tangata urupā ia.</b> — She is a hardworking person. (urupā? No — that's a cemetery!)<br><br>Let me give you the right words:<br><b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=urup%C4%81" target="_blank" rel="noopener">urupā</a></b> = cemetery · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ng%C4%81kaunui" target="_blank" rel="noopener">ngākaunui</a></b> = enthusiastic/passionate · <b><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=pukumahi" target="_blank" rel="noopener">pukumahi</a></b> = hardworking`,
      demo:`Character vocabulary:\n<b>atawhai</b> — kind / caring / generous\n<b>māia</b> — brave / bold\n<b>mōhio</b> — knowledgeable / clever / aware\n<b>hūmārie</b> — gentle / humble / peaceful\n<b>māngere</b> — lazy\n<b>pukumahi</b> — hardworking\n<b>ngākaunui</b> — enthusiastic / passionate (ngākau = heart, nui = big)\n<b>aroha nui</b> — loving / full of aroha\n<b>māia</b> — brave\n<b>tūmataiti</b> — shy / reserved\n\nUsed in a sentence:\n<b>He tangata pukumahi, he tangata atawhai hoki ia.</b>\nShe is a hardworking and kind person.\n\n<b>Ko ia te tangata ngākaunui rawa atu o tō mātou akomanga.</b>\nShe is the most enthusiastic person in our classroom.`,
      tip:'He tangata [character word] ia — He/She is a [character] person. Stack two character words with "he tangata X, he tangata Y hoki ia" — or use the superlative: Ko ia te tangata [X] rawa atu o…',
    },
    weDo:{
      title:'Kia Tūhono — Describe someone\'s character',
      instruction:'Think of someone you admire. We will describe their character together using this week\'s vocabulary.',
      sentences:[
        'Who is your person? State: <b>Ko [name] tōku [relationship].</b> Then: <b>He tangata [character] ia.</b>',
        'Add a second character trait: <b>He tangata [X] hoki ia.</b> Stack two traits.',
        'Give evidence using nō te mea: <b>He tangata atawhai ia nō te mea ka [action] ia i ngā wā katoa.</b>',
        'Use a superlative: <b>Ko ia te tangata [character] rawa atu o tōku ao.</b> (ao = world/life)',
      ],
      prompt:'Ko ia te tangata ngākaunui rawa atu o tōku ao — she is the most enthusiastic person in my world. What makes this sentence beautiful? What does "tōku ao" (my world) add that "tōku akomanga" (my classroom) doesn\'t? When would you use each?',
    },
    youDo:{
      title:'Māu Anō — Character descriptions',
      instruction:'Write character descriptions of real people in your life.',
      tasks:[
        'Write a He tangata [character] ia sentence about someone you admire.',
        'Write two or three stacked character traits for that person.',
        'Write a Ko ia te tangata [X] rawa atu o… superlative about them.',
        '✦ Bonus: Write a "tribute paragraph" (6 sentences) about someone important to you — Ko [name] tōku [relationship]. Describe their character (3 traits), give evidence for one trait, and close with a superlative.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Feelings and character in stories',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Feelings/personality · AO 2.3: Extended communication · Grammar Level 1–2: Emotion and character in narrative context',
    aos:[{code:'AO 2.5',label:'Emotion in narrative'},{code:'AO 2.3',label:'Character in stories'}],
    iDo:{
      title:'Tāua Kōrero — Show, don\'t tell — emotions in stories',
      instruction:'There is a saying in writing: "show, don\'t tell." Instead of writing "she was happy", you show the happiness — what she did, how she moved, what she said. Today we practise this in te reo Māori — describing feelings and character through action rather than just naming them.',
      example:`TELLING (weak):<br><b>Kei te hari ia.</b> She is happy.<br><br>SHOWING (strong):<br><b>Ka omaoma ia ki te kāinga. Ka karanga ia i tōna māmā. Ka oma hoki tōna māmā ki a ia, ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=awhi" target="_blank" rel="noopener">awhi</a> rāua.</b><br>She ran home. She called out to her mum. Her mum ran to her too, and they hugged.<br><br>TELLING (weak):<br><b>He tangata atawhai ia.</b> He is a kind person.<br><br>SHOWING (strong):<br><b>I kite ia i te kurī i <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=mauiui" target="_blank" rel="noopener">mauiui</a> ana. Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=tango" target="_blank" rel="noopener">tango</a> ia i tōna <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=koti" target="_blank" rel="noopener">koti</a> ā ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hipoki" target="_blank" rel="noopener">hipoki</a> ia i te kurī. Ka noho ia ki reira ā te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=taenga" target="_blank" rel="noopener">taenga</a> mai o tōna <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=rangatira" target="_blank" rel="noopener">rangatira</a>.</b><br>He saw the sick dog. He took off his coat and covered the dog. He stayed there until its owner arrived.`,
      demo:`Show-don\'t-tell techniques:\n\n1. <b>Replace the emotion word with an action</b>:\nTelling: Kei te hari au.\nShowing: Ka oma au, ka waiata au, ka kata au! (run, sing, laugh)\n\n2. <b>Replace the character word with evidence</b>:\nTelling: He tangata atawhai ia.\nShowing: Ka tūāhu ia ki te tangata māuiui. Ka homai ia i āna kai.\n\nNew words:\n<b>karanga</b> — to call out / summon\n<b>awhi</b> — to embrace / hug\n<b>hipoki</b> — to cover\n<b>taenga mai</b> — the arrival (tae = arrive, -nga = nominaliser)\n<b>rangatira</b> — chief / leader / owner (of an animal in this context)\n<b>kata</b> — to laugh\n<b>tūāhu</b> — to tend to / look after (person in need)`,
      tip:'To show an emotion — ask yourself: what does someone DO when they feel this? Then write the action, not the feeling word. Ka <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=kata" target="_blank" rel="noopener">kata</a>, ka waiata, ka omaoma — these show happiness better than "Kei te hari".',
    },
    weDo:{
      title:'Kia Tūhono — Show, don\'t tell',
      instruction:'I give you a telling sentence — you turn it into a showing sentence using actions.',
      sentences:[
        'Telling: <b>I pōuri ia.</b> → Showing: What did she DO when she was sad? <b>Ka noho ia i tōna rūma. Kāore ia i kōrero. Ka tangi ia i te pō.</b>',
        'Telling: <b>He tangata māia ia.</b> → Showing: What did he DO to show bravery? <b>Ka tū ia i mua i te whakamā. Ka kōrero ia ahakoa i ohorere ia.</b>',
        'Telling: <b>I harikoa ngā tamariki.</b> → Showing: Three actions that show their joy.',
        'Now you write one: tell me an emotion — then show it through three actions in te reo.',
      ],
      prompt:'Ka kata, ka waiata, ka omaoma — a laughing, singing, running person. You have not said "hari" (happy) once. But the reader FEELS it. Why is showing more powerful than telling? When might telling be the right choice?',
    },
    youDo:{
      title:'Māu Anō — Show it',
      instruction:'Rewrite telling sentences as showing sentences in te reo Māori.',
      tasks:[
        'Telling: "Kei te mataku ia." — Show the fear through three actions.',
        'Telling: "He tangata pukumahi ia." — Show the hard work through evidence.',
        'Telling: "I hari mātou katoa." — Show the group\'s joy through action.',
        '✦ Bonus: Write a scene (8 sentences) where a character experiences a strong emotion — but NEVER NAME the emotion. Only use actions, dialogue, and description. Read it to a partner — can they identify the emotion?',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero mō ngā tāngata — Talking about people',
    nzLink:'Te Aho Arataki Marau — AO 2.5: Character/feelings · AO 2.1: Relationships · AO 1.2: Introducing others',
    aos:[{code:'AO 2.5',label:'Character &amp; feelings'},{code:'AO 1.2',label:'Introducing others'}],
    iDo:{
      title:'Tāua Kōrero — Introducing and describing people',
      instruction:'This week you have learned feelings and character. Today we use them to introduce and describe real people — friends, whānau, teachers — in a natural, warm conversation.',
      example:`<b>A:</b> Ko wai tōu hoa pai rawa atu?<br><b>B:</b> Ko Hēni tōku hoa pai rawa atu. He tangata atawhai, he tangata ngākaunui hoki ia.<br><b>A:</b> He pēhea tōna āhua?<br><b>B:</b> He tangata <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=m%C4%81horahora" target="_blank" rel="noopener">māhorahora</a> ia — ka kata ia i ngā wā katoa. Ka ora tōku ngākau i tōna āhua!<br><b>A:</b> Ka aroha! He aha āu e pai ai mō tōna āhua?<br><b>B:</b> Ka pai ki a au tōna māia — ka tū tonu ia ahakoa he uaua te āhua o ngā mea. He <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=t%C5%AB%C4%81huatanga" target="_blank" rel="noopener">tūāhuatanga</a> tino nui tērā.<br><b>A:</b> E ai ki tōu kōrero, ko ia te hoa tino pai rawa atu o tō tātou ao!<br><b>B:</b> Āe! Ko ia te pou o tōku ao.`,
      demo:`New conversational phrases about people:\n<b>He pēhea tōna āhua?</b> — What is he/she like? (personality/appearance)\n<b>He tangata māhorahora ia.</b> — He/she is a joyful/light-hearted person.\n<b>Ka ora tōku ngākau i tōna āhua.</b> — My heart comes alive at her presence.\n<b>He aha āu e pai ai mō tōna āhua?</b> — What do you like about their personality?\n<b>Ka tū tonu ia ahakoa…</b> — He/she stands firm even though…\n<b>tūāhuatanga</b> — quality / characteristic (tūāhua + tanga)\n<b>E ai ki tōu kōrero</b> — According to what you say\n<b>Ko ia te pou o tōku ao.</b> — She is the pillar of my world.`,
      tip:'He pēhea tōna āhua? = What is their personality/character like? This is different from He pēhea ia? (How is he/she?). Āhua focuses on their nature — who they are as a person.',
    },
    weDo:{
      title:'Kia Tūhono — Introduce your favourite person',
      instruction:'Build a conversation introducing someone you admire.',
      sentences:[
        'I ask: <b>Ko wai tōu hoa pai rawa atu?</b> Introduce them: Ko [name] tōku [relationship].',
        'I ask: <b>He pēhea tōna āhua?</b> Give two character traits using He tangata [X] ia.',
        'I ask: <b>He aha āu e pai ai mō tōna āhua?</b> Show one quality through action (show don\'t tell).',
        'Close: <b>Ko ia te pou o tōku ao.</b> Why is she/he your pou? Add nō te mea.',
      ],
      prompt:'Ko ia te pou o tōku ao — she is the pillar of my world. Last week you heard "Ko ia te pou o tō mātou whānau." Now it\'s "tōku ao" (my world) rather than "tō mātou whānau" (our family). What is the difference in feeling between these two? When would you use each?',
    },
    youDo:{
      title:'Māu Anō — He mihi ki tōu hoa',
      instruction:'Write a tribute to someone important in your life.',
      tasks:[
        'Introduce them: Ko [name] tōku [relationship]. He tangata [character] ia.',
        'Show their best quality through an action (show don\'t tell — no emotion words).',
        'Write what they mean to you: Ka ora tōku ngākau i tōna āhua nō te mea…',
        '✦ Bonus: Write a full tribute (8 sentences) about your most important person. Introduce them, describe two character traits, show one quality through evidence, say what they mean to you, and close with Ko ia te pou o tōku ao.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T2W8 = [
  {day:'Monday',  q:'"Kei te māharahara au." How is this person feeling?',options:['excited and eager','angry','worried / anxious','surprised'],correct:2},
  {day:'Monday',  q:'"Kei te pēhea tōu ngākau?" What does ngākau mean in this context?',options:['your body','your stomach','your heart (as the seat of emotions)','your head'],correct:2},
  {day:'Tuesday', q:'What does "pukumahi" mean?',options:['lazy','shy','passionate','hardworking'],correct:3},
  {day:'Tuesday', q:'"Ko ia te tangata ngākaunui rawa atu o tō mātou akomanga." What does ngākaunui mean?',options:['the most intelligent','the most hard-working','the most enthusiastic / passionate (big-hearted)','the most kind'],correct:2},
  {day:'Wednesday',q:'Which of these is an example of "showing" rather than "telling" an emotion?',options:['Kei te hari ia.','I pōuri ia nō te mea he uaua tāna mahi.','Ka omaoma ia, ka kata ia, ka waiata ia!','He tangata māia ia.'],correct:2},
  {day:'Wednesday',q:'What does "awhi" mean?',options:['to call out','to cover','to embrace / hug','to laugh'],correct:2},
  {day:'Thursday', q:'"Ka ora tōku ngākau i tōna āhua." What does this sentence express?',options:['Her face is beautiful','My heart comes alive at her presence / personality','She is the most important person','I feel sad when I see her'],correct:1},
  {day:'Thursday', q:'"He pēhea tōna āhua?" — What is this question asking about?',options:['Their physical height','Their age','Their health today','Their character / personality / nature'],correct:3},
]

const CURRICULUM_T2W9 = {
  Monday: {
    topic:'He kōrero mō te aho — Linking ideas: cohesion review',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · Grammar Level 1–2: Connective vocabulary, paragraph cohesion across all text types',
    aos:[{code:'AO 2.3',label:'Cohesion &amp; linking'},{code:'AO 2.5',label:'Connective vocabulary review'}],
    iDo:{
      title:'Tāua Kōrero — All the linking tools, together',
      instruction:'This term you have learned many ways to link ideas — conjunctions, pronouns, connective words. Today we gather all the linking tools in one place and practise choosing between them deliberately. A well-connected passage is what separates good te reo from great te reo.',
      example:`<b>COORDINATING CONJUNCTIONS (equal ideas):</b><br>ā · engari · nō reira · me<br><br><b>SUBORDINATING CONJUNCTIONS (one idea depends on the other):</b><br>nō te mea · nā te mea · ahakoa · mehemea · i te wā<br><br><b>CONNECTIVE ADVERBS (linking sentences):</b><br><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=heoi+an%C5%8D" target="_blank" rel="noopener">heoi anō</a> — however / but anyway<br><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%81+muri+ake+nei" target="_blank" rel="noopener">ā muri ake nei</a> — furthermore / going forward<br>hei tā tēnei — according to this / as a result<br>nō reira — therefore (can work as both conjunction and connective)<br><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=waihoki" target="_blank" rel="noopener">waihoki</a> — moreover / and also<br>engari rā — however (more formal than engari alone)<br><br><b>TIME CONNECTIVES (for sequence):</b><br><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=i+mua+ake" target="_blank" rel="noopener">i mua ake</a> — beforehand / previously<br><a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=%C4%81+muri+iho" target="_blank" rel="noopener">ā muri iho</a> — afterwards<br>i te wā hōhonu — in the long run`,
      demo:`Using connective adverbs (sentence starters):\n\n<b>I mahi kaha ngā ākonga. Heoi anō, i ngenge rātou ā te mutunga o te rā.</b>\nThe students worked hard. However, they were tired by the end of the day.\n\n<b>Ko te reo Māori he reo rangatira. Waihoki, he reo o te ngahere, o te moana, o ngā maunga.</b>\nTe reo Māori is a chiefly language. Moreover, it is a language of the forest, the sea, and the mountains.\n\n<b>I mahi kaha mātou. Ā muri iho, ka ora ai tā mātou mahi.</b>\nWe worked hard. Afterwards, our work flourished.\n\nNew words:\n<b>rangatira</b> — chiefly / of high status\n<b>ora</b> — alive / well / flourishing\n<b>heoi anō</b> — however / but anyway\n<b>waihoki</b> — moreover / and also`,
      tip:'Connective adverbs (heoi anō, waihoki, ā muri iho) go at the START of a sentence and signal the relationship to what came before. They are stronger than conjunctions because they create a full pause — a new sentence — before the connection.',
    },
    weDo:{
      title:'Kia Tūhono — Connect the ideas',
      instruction:'I give you two sentences — you connect them using the most appropriate linking word from today\'s list.',
      sentences:[
        '"The team won." "They were still humble." → The contrast needs: <b>heoi anō</b> → <b>I toa rātou. Heoi anō, i hūmārie tonu rātou.</b>',
        '"She studied hard." "She passed the test." → Result: <b>nō reira / ā muri iho</b> → <b>I ako kaha ia. Nō reira, i paahi ia i te whakamātautau.</b>',
        '"Te reo Māori is beautiful." "It connects us to our ancestors." → Adding more: <b>waihoki</b>.',
        'Write your own: two sentences about your school, connected with heoi anō OR waihoki.',
      ],
      prompt:'Heoi anō and engari both mean "however/but". Heoi anō starts a NEW sentence. Engari stays INSIDE a sentence. When would you choose heoi anō over engari? What does starting a new sentence add to the contrast?',
    },
    youDo:{
      title:'Māu Anō — Connected writing',
      instruction:'Write a passage where every sentence connects to the next.',
      tasks:[
        'Write four sentences — connect each to the next with a different linking word.',
        'Use heoi anō at the start of one sentence to create a contrast.',
        'Use waihoki to add more information to a point.',
        '✦ Bonus: Write a persuasive paragraph (7 sentences) about something you care about — your favourite sport, your school, te reo Māori. Use at least four different linking words from today\'s list. Underline each one.',
      ],
    },
  },
  Tuesday: {
    topic:'Arotake — Term 2 vocabulary and structures',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 · Full Term 2 review · Grammar Levels 1–2 all structures',
    aos:[{code:'AO 2.3',label:'Term 2 review'},{code:'AO 2.5',label:'Vocabulary consolidation'}],
    iDo:{
      title:'Tāua Kōrero — Everything Term 2 has added',
      instruction:'Term 1 gave you the foundations. Term 2 has been building on them. Today we celebrate everything new that you have added — and see how much bigger your te reo Māori world has become.',
      example:`<b>TENSES you now control:</b><br>Kei te (now) · I (past event) · Ka (story/sequence) · Kāore e…ana (not now) · Kāore i (didn't happen)<br><br><b>PRONOUNS you now have:</b><br>All 16: au, koe, ia / tāua, māua, kōrua, rāua / tātou, mātou, koutou, rātou<br><br><b>NUMBERS you now know:</b><br>1–100, dates, times, people counts (toko-)<br><br><b>NEW VOCABULARY DOMAINS:</b><br>Colours (12+) · Feelings (12+) · Character (8+) · Weather (10+) · Seasons (4) · Days/months (19) · Family vocabulary · Sports · Announcements`,
      demo:`The growth from Term 1 to Term 2:\n\nTerm 1: <b>Kei te haere au ki te kura.</b>\nTerm 2: <b>Ā te Rāhina, i te iwa karaka i te ata, ka haere mātou tokowhitu ki te kura — ahakoa he ua tino nui, i tino pai tā mātou rā.</b>\n\nSame basic idea — going to school. But now:\n→ day of week (Rāhina)\n→ time (iwa karaka i te ata)\n→ Ka narrative\n→ people count (tokowhitu)\n→ ahakoa (despite)\n→ past tense (i tino pai)\n→ possessive (tā mātou rā)\n\nThat is what a term of daily practice gives you.`,
      tip:'Read that Term 2 sentence aloud. You could not have written it in Week 1 of this term. That is your progress. Say it again and own it.',
    },
    weDo:{
      title:'Kia Tūhono — Term 2 blitz',
      instruction:'Speed review — category by category. Teacher calls a category, students generate examples.',
      sentences:[
        'FEELINGS: How many emotion words can we list? Go — hari, pōuri, mataku… aim for 10+.',
        'PRONOUNS: Say all 16 — starting with singular, then dual, then plural. Together.',
        'NUMBERS: Count from 11 to 20 together. Then say these: 34, 57, 82, 99.',
        'WEATHER: Give a full three-day forecast in te reo — today, tomorrow, next week.',
      ],
      prompt:'Look back at Week 1 of this term — the holiday conversation. Could you have had that conversation at the start of Term 1? No. Could you have it now? Easily. What does it feel like to look back and see how far you have come?',
    },
    youDo:{
      title:'Māu Anō — Term 2 self-audit',
      instruction:'Test your own Term 2 knowledge.',
      tasks:[
        'Write all 16 pronouns from memory — organised by singular, dual, plural.',
        'Write one sentence using Ka, one using I, one using Kāore i, one using Kāore e…ana.',
        'Write today\'s date and time fully in te reo Māori.',
        '✦ Bonus: Write a "Term 2 showcase sentence" — one sentence that uses as many Term 2 structures as possible: past tense, a time/date, a number, a colour, a feeling, and a conjunction. Make it a real sentence, not just a list.',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Term 2 sentence type showcase',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · All sentence types from Terms 1 and 2',
    aos:[{code:'AO 2.3',label:'Sentence type review'},{code:'AO 2.5',label:'Rich vocabulary in sentences'}],
    iDo:{
      title:'Tāua Kōrero — The full sentence toolkit, Terms 1 and 2',
      instruction:'Across two terms you have built an enormous range of sentence types. Today we display them all — see the full range you now control, and choose which ones to use deliberately.',
      example:`<b>IDENTITY:</b> Ko Tāmara tōku ingoa. Nō Tāmaki Makaurau ahau.<br><b>DESCRIPTION:</b> He tangata pukumahi, he tangata atawhai hoki ia.<br><b>PRESENT:</b> Kei te ako kaha rātou i te reo Māori i tēnei wā.<br><b>PAST:</b> I te Rāhina o tērā wiki, i haere mātou tokowhitu ki te hākinakina.<br><b>NARRATIVE:</b> Ka ara ia i te ata, ka kai ia i tōna parakuihi, ka haere ia ki te kura.<br><b>NEGATIVE:</b> Kāore ia i tae i tēnei rā nō te mea i māuiui ia.<br><b>COMPLEX:</b> Ahakoa i ngenge mātou, i mahi tonu mātou nō te mea he mahi nui tō mātou.<br><b>COMPARATIVE:</b> He nui ake ngā ākonga i tēnei akomanga i tērā — e rua tekau mā waru ki e rua tekau mā tahi.<br><b>FRONTED:</b> I te ahiahi o Rāpare, i roto i te whare hui, ka kōrero tō mātou kaiako mō ngā whainga o tērā tau.<br><b>LISTED:</b> Ko ēnei ngā mea hou i ako ai mātou i tēnei wāhanga: ngā tae, ngā tau, ngā tūāhua, me ngā kupu hono.`,
      demo:`Ten sentence types. Two terms. You can write all of them.\n\nThe key to fluency is not knowing all the types — it is choosing the RIGHT type for what you want to say:\n\n→ Want to identify? Ko\n→ Want to describe? He\n→ Want to say now? Kei te\n→ Want to tell a story? Ka\n→ Want to report a fact? I\n→ Want to deny? Kāore\n→ Want to connect? Conjunction\n→ Want to compare? He [adj] ake\n→ Want to set the scene? Fronted phrase\n→ Want to list? Ko ēnei\n\nYou now have all ten. Use them.`,
      tip:'The best writers don\'t use all ten types in every paragraph — they choose deliberately. Read your writing aloud and ask: does every sentence sound different from the last? If not, vary the type.',
    },
    weDo:{
      title:'Kia Tūhono — One prompt, ten types',
      instruction:'I give you one topic — together we write one sentence of EACH type about it.',
      sentences:[
        'Topic: your school. Write a Ko identity sentence and a He description sentence.',
        'Write a Kei te sentence (now), an I sentence (past), and a Ka sentence (narrative).',
        'Write a Kāore sentence and a complex ahakoa sentence.',
        'Write a comparative, a fronted phrase, and a Ko ēnei list. Ten sentence types, one topic.',
      ],
      prompt:'Look at the ten sentences about your school. Pick the three that feel most alive — most like real te reo, not just an exercise. Why do those three feel stronger? What do they have that the others don\'t?',
    },
    youDo:{
      title:'Māu Anō — Sentence type showcase',
      instruction:'Choose a topic you care about and write all ten sentence types.',
      tasks:[
        'Choose your topic: sport, whānau, nature, music, food, or another.',
        'Write sentences in types 1–5: Ko, He, Kei te, I, Ka.',
        'Write sentences in types 6–10: Kāore, ahakoa/complex, comparative, fronted, Ko ēnei.',
        '✦ Bonus: Take your ten sentences and weave them into a genuine paragraph — reorder them, add connectives, cut anything that doesn\'t flow. Aim for a paragraph that reads like real te reo, not a list of exercise sentences.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He kōrero hou — A spiralled conversation',
    nzLink:'Te Aho Arataki Marau — All Term 1 and 2 AOs · Full conversation practice',
    aos:[{code:'AO 1.1',label:'Greetings'},{code:'AO 1.2',label:'Introductions'},{code:'AO 2.3',label:'Full conversation'},{code:'AO 2.5',label:'Expressive vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — A full Term 2 conversation',
      instruction:'The best test of language learning is conversation. Today we have the most complex conversation of the year so far — drawing on everything from both terms. Listen to how naturally the structures flow when you stop thinking about them individually.',
      example:`<b>A:</b> Tēnā koe! He pēhea ōu hararei?<br><b>B:</b> He tino pai! I haere mātou ki te <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=ngahere" target="_blank" rel="noopener">ngahere</a> ko tōku whānau. Ko ēnei ngā mea tino pai: he ātaahua ngā rākau, i ngāoro te awa, ā i kaukau mātou tokowhitu i te roto māhana!<br><b>A:</b> Ka rawe! He pēhea te āhua o te rangi i ērā rā?<br><b>B:</b> I makariri i te ata engari ka mahana i te ahiahi. Ahakoa he ua i tētahi rā, i haere tonu mātou ki waho.<br><b>A:</b> He aha tō āhua i ērā rā?<br><b>B:</b> I hari tino nui au! Ka ora tōku ngākau i te āhua o te taiao. Ko tōku māmā te tangata i ārahi i a mātou — he tangata mōhio, he tangata atawhai hoki ia.<br><b>A:</b> He ātaahua tērā. He aha tāu whainga mō tēnei wāhanga?<br><b>B:</b> Ko tāku whainga: ka ako māmā ake au i te reo Māori — ka kōrero au me tōku whānau i te kāinga!`,
      demo:`This conversation uses:\n✓ Past tense (I haere, i ngāoro, i makariri, i hari)\n✓ Ka narrative (ka mahana, ka kaukau, ka ora)\n✓ Plural pronouns (mātou, tokowhitu)\n✓ Weather (makariri, mahana, ua)\n✓ Feelings (i hari, Ka ora tōku ngākau)\n✓ Character description (He tangata mōhio, he tangata atawhai)\n✓ Ko ēnei list (Ko ēnei ngā mea tino pai…)\n✓ Comparative (ako māmā ake)\n✓ Complex (ahakoa he ua, i haere tonu mātou)\n✓ Goal statement (Ko tāku whainga…)\n\nThat is the whole of Terms 1 and 2 in one natural conversation.`,
      tip:'Ko tāku whainga: ka kōrero au me tōku whānau i te kāinga. This is the goal — not just to speak te reo in class, but to take it home. What would you need to practise to have this conversation with your own whānau?',
    },
    weDo:{
      title:'Kia Tūhono — Full conversation practice',
      instruction:'Pairs. Use the model conversation as a guide — but make it your own. Your holidays, your family, your feelings.',
      sentences:[
        'Open with greetings and ask about holidays: Tēnā koe! He pēhea ōu hararei?',
        'Report what happened: past tense + people count + Ko ēnei list.',
        'Describe the weather: past + weather + ahakoa + kept going anyway.',
        'Share a feeling + describe a person + state your goal for this term.',
      ],
      prompt:'Ko tāku whainga: ka kōrero au me tōku whānau i te kāinga. Is this a realistic goal for you? What would your first te reo conversation with your whānau look like? What three sentences would you teach them to make it possible?',
    },
    youDo:{
      title:'Māu Anō — Tōu kōrero hou',
      instruction:'Have your own full Term 2 conversation and write it up.',
      tasks:[
        'Have a full conversation with a partner — at least 10 lines each — about your holidays.',
        'Use: past tense, Ka narrative, a plural pronoun, a weather sentence, a feeling, and a goal.',
        'Write up the conversation as a dialogue.',
        '✦ Bonus: After writing your dialogue, annotate it — label every structure you used. How many different structures can you find? Aim for at least eight.',
      ],
    },
  },
}

const FRIDAY_QUIZ_T2W9 = [
  {day:'Monday',  q:'"I mahi kaha ngā ākonga. Heoi anō, i ngenge rātou." What does heoi anō signal?',options:['Therefore — they worked hard as a result of being tired','Moreover — they were also hard workers','However — despite working hard, they were tired','Because — tiredness caused them to work hard'],correct:2},
  {day:'Monday',  q:'What does "waihoki" mean?',options:['however / but','therefore','moreover / and also','because'],correct:2},
  {day:'Tuesday', q:'Which of these correctly uses Ka for a narrative sequence?',options:['Ka ara ia. Ka kai ia. Ka haere ia ki te kura.','I ara ia. Ka kai ia. Kei te haere ia ki te kura.','Ka ara ia. I kai ia inanahi. Ka haere ia.','Ka ara, kai, haere ia ki te kura.'],correct:0},
  {day:'Tuesday', q:'"I toa rātou. Heoi anō, i hūmārie tonu rātou." What does hūmārie mean?',options:['exhausted','angry','humble / gentle / peaceful','excited'],correct:2},
  {day:'Wednesday',q:'Which sentence type uses "Ko ēnei" to introduce a list?',options:['Identity sentence','Narrative sentence','Listed sentence','Comparative sentence'],correct:2},
  {day:'Wednesday',q:'"He nui ake ngā ākonga i tēnei akomanga i tērā." What sentence type is this?',options:['Ko identity','Kāore negative','He comparative','Ka narrative'],correct:2},
  {day:'Thursday', q:'"Ko tāku whainga: ka kōrero au me tōku whānau i te kāinga." What does whainga mean?',options:['problem','memory','goal / aim','holiday'],correct:2},
  {day:'Thursday', q:'"Ka ora tōku ngākau i te āhua o te taiao." What does this express?',options:['The weather made me tired','My heart comes alive in the presence of nature','The natural world is dangerous','I am going outside to rest'],correct:1},
]

const CURRICULUM_T2W10 = {
  Monday: {
    topic:'Arotake — Term 2 full vocabulary and structure review',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 consolidated · All grammar structures Terms 1 and 2',
    aos:[{code:'AO 1.1',label:'Greetings review'},{code:'AO 2.3',label:'All structures'},{code:'AO 2.5',label:'Vocabulary mastery'}],
    iDo:{
      title:'Tāua Kōrero — The full two-term vocabulary celebration',
      instruction:'This is the last week of Term 2. Today we count everything you now know and celebrate it. By the end of today\'s lesson you will have a complete picture of your two-term te reo Māori journey.',
      example:`Two terms of learning. Here is what you can now do:<br><br><b>COMMUNICATE ABOUT:</b><br>Yourself, your family, your school, your home, your feelings, your character, the weather, the seasons, numbers 1–100, dates, times, sporting events, holiday recounts, announcements<br><br><b>STRUCTURES YOU CONTROL:</b><br>Ko · He · Kei te · I · Ka · Kāore e…ana · Kāore i · E hia / Tokohia · tōku/tāku/tōu/tāu · All 16 pronouns · Ahakoa · Mehemea · I te wā · Comparatives · Fronted phrases · Ko ēnei lists · Conjunctions (7+) · Connective adverbs (heoi anō, waihoki)`,
      demo:`The Term 2 additions to your Term 1 base:\n\n<b>TERM 1 base sentence:</b>\n"Kei te haere au ki te kura."\n\n<b>TERM 2 full sentence:</b>\n"I te Rāpare, ko te tekau mā ono o Pipiri, i haere mātou tokotoru ki te kura i te iwa karaka i te ata — ahakoa i ua tino nui, i tino hari mātou nō te mea he kaupeka hākinakina ā te ahiahi!"\n\nTranslation: On Thursday the 16th of June, three of us went to school at 9 in the morning — although it rained heavily, we were very happy because there was a sports competition in the afternoon!\n\nCount the structures: date, day, people count, time, ahakoa, feeling, nō te mea, Ka… You can do all of this now.`,
      tip:'Say that last sentence aloud. Slowly. "I te Rāpare, ko te tekau mā ono o Pipiri, i haere mātou tokotoru ki te kura…" You are speaking te reo Māori. Real, complex, beautiful te reo Māori.',
    },
    weDo:{
      title:'Kia Tūhono — Two-term vocabulary blitz',
      instruction:'Category blitz — fastest hands/voices win.',
      sentences:[
        'ALL EMOTIONS: How many can we list in 60 seconds? hari, pōuri, mataku, māia… aim for 12.',
        'ALL WEATHER: Every weather word. ua, hau, hukarere, āniwaniwa… aim for 10.',
        'ALL 16 PRONOUNS: Together, in order — singular, dual, plural.',
        'WILD CARD: Make one sentence that includes a colour, a feeling, a number, and a conjunction. Go.',
      ],
      prompt:'You have now been learning te reo Māori for two terms — roughly 20 weeks, 400 minutes of class time. That is less than seven hours of instruction. In seven hours, you have built a communication toolkit of over 200 words and 15+ grammar structures. What does this tell you about what is possible with daily practice?',
    },
    youDo:{
      title:'Māu Anō — Two-term audit',
      instruction:'A personal vocabulary and structure audit.',
      tasks:[
        'Write down every te reo Māori word you can remember in 5 minutes. Count them.',
        'Write the six tense/negative structures: Kei te, I, Ka, Kāore e…ana, Kāore i, E…ana.',
        'Write your favourite sentence from all of Term 2 — and say why it is your favourite.',
        '✦ Bonus: Write your "two-term milestone" — a paragraph describing what you can now do in te reo that you could not do 20 weeks ago. Use as many structures as possible. This is your record of growth.',
      ],
    },
  },
  Tuesday: {
    topic:'Arotake — Grammar and structure deep review',
    nzLink:'Te Aho Arataki Marau — All grammar structures Terms 1–2 consolidated and tested',
    aos:[{code:'AO 2.3',label:'Grammar consolidation'},{code:'AO 2.4',label:'Tense mastery'}],
    iDo:{
      title:'Tāua Kōrero — Grammar in the wild',
      instruction:'Today we review grammar not through rules but through real sentences — seeing structures at work in natural te reo. You will identify the structure in each sentence, and then build your own.',
      example:`Identify the structure in each sentence:<br><b>1. Ko Mere tōku tuakana.</b> → ___<br><b>2. Kei te mahi kaha rātou i waho i tēnei wā.</b> → ___<br><b>3. I haere māua ki te tāone i te Hātarei.</b> → ___<br><b>4. Ka ara ia, ka horoi ia i tōna kanohi, ka haere ia ki te kura.</b> → ___<br><b>5. Kāore mātou i toa i tērā kēmu — he kino tō mātou raru.</b> → ___<br><b>6. Ahakoa i ua kaha, i tākaro tonu mātou i te hākinakina.</b> → ___<br><b>7. He nui ake ngā ira o tō mātou kapa i ā rātou ira — e rua tekau mā whā ki e tekau mā toru.</b> → ___<br><b>8. I te ahiahi o Rāpare, i roto i te whare hui, ka kōrero tō mātou kaiako.</b> → ___`,
      demo:`Answers:\n1. Ko → Identity\n2. Kei te + plural pronoun + adverb → Present\n3. I + dual pronoun + past location → Past with people\n4. Ka… Ka… Ka → Narrative sequence\n5. Kāore i → Past negative + He description\n6. Ahakoa → Complex sentence (concession)\n7. He [adj] ake + numbers → Comparative with score\n8. Fronted time + fronted place + Ka narrative\n\nEvery one of these you can write. Every one.`,
      tip:'When you see an unfamiliar te reo sentence, break it into parts: What is the tense marker? Who is the person? What is the action? What else is there? This analysis skill is what makes you independent — you can work out new sentences for yourself.',
    },
    weDo:{
      title:'Kia Tūhono — Grammar challenge',
      instruction:'Build sentences matching the structure I specify.',
      sentences:[
        'Build a Ka narrative — five steps. Something that happened yesterday.',
        'Build a Kāore i sentence AND a Kāore e…ana sentence — both about the same topic.',
        'Build a He [adj] ake sentence with two numbers (a score or comparison).',
        'Build a fronted time + fronted place + I sentence — three layers, one sentence.',
      ],
      prompt:'Look at sentence 8 from the I Do: "I te ahiahi o Rāpare, i roto i te whare hui, ka kōrero tō mātou kaiako." Three fronted phrases before the main action. In English this would be unusual. In te reo Māori it is natural and elegant. Why does front-loading information feel different in te reo than in English?',
    },
    youDo:{
      title:'Māu Anō — Grammar self-test',
      instruction:'Test yourself on every structure.',
      tasks:[
        'Write one sentence using each of the eight structures from I Do.',
        'Write a passage (5 sentences) that uses all of: Ko, I, Ka, Kāore i, ahakoa.',
        'Write the most complex sentence you can — use at least five different structures in one sentence.',
        '✦ Bonus: Take a sentence you wrote in Week 1 of this term. Rewrite it now with everything you have learned. How different is it? What does the difference tell you?',
      ],
    },
  },
  Wednesday: {
    topic:'Hanga rerenga — Showcase sentences: Terms 1 and 2',
    nzLink:'Te Aho Arataki Marau — AO 2.3: Extended communication · All sentence types Terms 1 and 2',
    aos:[{code:'AO 2.3',label:'Showcase &amp; celebration'},{code:'AO 2.5',label:'Full vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — Your best te reo sentences of the year',
      instruction:'This is a celebration. Today you write the best te reo sentences of your life so far — drawing on everything from two terms. There is no new content today. Just you, your full toolkit, and the task of producing something beautiful.',
      example:`Here are examples of student showcase sentences:<br><br><b>"I te ahiahi o Rāhoroi, ko tōku whānau me ōku hoa pukumahi i haere mātou tokotoru tekau ki te tākaro hākinakina — i toa mātou e rua tekau mā ono ki e tekau mā whā!"</b><br>(On Saturday afternoon, my family and my hardworking friends, thirty of us went to play sport — we won 26 to 14!)<br><br><b>"Ko te taiao o Aotearoa tōku wāhi okioki — ā, ko ia hoki tōku ara ora."</b><br>(The natural environment of New Zealand is my place of rest — and it is also my pathway to life.)<br><br><b>"Ka ora tōku ngākau i ngā kupu o tēnei reo, nō te mea ko te reo Māori te reo o ōku tīpuna — he taonga tuku iho tēnei."</b><br>(My heart comes alive at the words of this language, because te reo Māori is the language of my ancestors — it is a treasure passed down.)`,
      demo:`What makes these sentences great:\n\n→ They use REAL information (not just exercises)\n→ They COMBINE multiple structures naturally\n→ They say something the writer MEANS\n→ They have a voice — you can hear a person behind the words\n\nNotice:\n"ko ia hoki tōku ara ora" — and it is also my pathway to life (ara ora — a beautiful new compound: ara + ora = path + life)\n"he taonga tuku iho" — a treasure passed down (tuku iho = handed down through generations)\n\nThese are not just grammar exercises. They are statements about identity.`,
      tip:'The best sentence you can write today is not the longest or the most complex — it is the most true. Say something you mean. In te reo Māori.',
    },
    weDo:{
      title:'Kia Tūhono — Write together',
      instruction:'Class writes one showcase sentence together on the board. Everyone contributes one element.',
      sentences:[
        'Start: who and when? Ko + person + time/date.',
        'What happened? I or Ka + action + place.',
        'Add detail: number + weather or feeling.',
        'Add meaning: ahakoa or nō te mea + result or reflection.',
      ],
      prompt:'He taonga tuku iho — a treasure passed down through generations. The phrase tuku iho means "handed down" — from ancestors to descendants. Te reo Māori is a taonga tuku iho. What does it mean to receive something that was passed down across generations? What responsibility does that bring?',
    },
    youDo:{
      title:'Māu Anō — Your showcase sentences',
      instruction:'Write the best te reo Māori sentences you have ever written.',
      tasks:[
        'Write your best SIMPLE sentence — punchy and true.',
        'Write your best COMPLEX sentence — with a subordinate clause and real meaning.',
        'Write your best DESCRIPTIVE sentence — rich with vocabulary.',
        '✦ Bonus: Write your SHOWCASE SENTENCE — the single best te reo Māori sentence you can produce. Make it say something true about you, your world, or te reo Māori itself. Read it to the class.',
      ],
    },
  },
  Thursday: {
    topic:'Kōrero — He whakamātautau — End of Term 2 assessment',
    nzLink:'Te Aho Arataki Marau — All AOs 1.1–2.5 · All six language modes: Whakarongo, Kōrero, Pānui, Tuhituhi, Mātakitaki, Whakaatu',
    aos:[{code:'AO 1.1',label:'Greetings'},{code:'AO 1.2',label:'Introductions'},{code:'AO 2.3',label:'Full conversation'},{code:'AO 2.5',label:'All vocabulary'}],
    iDo:{
      title:'Tāua Kōrero — The Term 2 standard',
      instruction:'Today is your end-of-term assessment. Before we begin, let\'s see what a full Term 2 level conversation looks like. This is the standard — it uses structures from both terms in a natural, warm exchange.',
      example:`<b>A:</b> Tēnā koe! Ko wai tōu ingoa? Nō hea koe?<br><b>B:</b> Ko Rangi tōku ingoa. Nō Ōtautahi ahau — he tāone ātaahua, he tāone māhana hoki i te raumati.<br><b>A:</b> He pēhea ōu hararei?<br><b>B:</b> He tino pai! I haere mātou tokowhā ki te ngahere. I ātaahua te rangi — ahakoa i <a class="te-aka-link" href="https://maoridictionary.co.nz/search?keywords=hau" target="_blank" rel="noopener">hau</a> kaha i tētahi rā.<br><b>A:</b> He pēhea tōu āhua ināianei?<br><b>B:</b> Kei te hari au, kei te hīhī hoki — e pai ana ki a au te kura hou!<br><b>A:</b> He aha āu whainga mō tēnei wāhanga?<br><b>B:</b> Ko ōku whainga: ka ako ake au i ngā tae, ka mōhio ake au ki ngā tau, ā ka kōrero māmā ake au i te reo Māori.<br><b>A:</b> Ka rawe! Tēnā koe, tēnā koe, tēnā koe.<br><b>B:</b> Tēnā koe, tēnā koe, tēnā koe.`,
      demo:`Assessment criteria — what this conversation shows:\n✓ AO 1.1: Tēnā koe · correct greeting and closing\n✓ AO 1.2: Ko [name] tōku ingoa · Nō [place] ahau\n✓ AO 1.4: Origin and personal information\n✓ AO 2.3: Extended kōrero with feelings, reasons, goals\n✓ AO 2.4: Past events · Weather · Seasonal reference\n✓ AO 2.5: Adjectives · Emotions · Character · Numbers\n✓ Grammar: I, Ka, Kei te, ahakoa, Ko ēnei (implied), comparative (ake)`,
      tip:'Kei te hari au, kei te hīhī hoki — I am happy, I am also excited. Two feelings in one sentence. That is confident te reo. When you feel something strongly — name it twice.',
    },
    weDo:{
      title:'Kia Tūhono — Final practice round',
      instruction:'One full practice conversation with a partner before the assessment.',
      sentences:[
        'Greet, introduce, say where you\'re from with one description of your town.',
        'Describe your holidays: past tense + people count + weather + ahakoa.',
        'Say how you feel now: two emotions + a reason.',
        'State three goals for Term 3 using Ko ōku whainga: ka… ka… ā ka…',
      ],
      prompt:'Ko ōku whainga — my goals. What are your real goals for Term 3? Not just te reo goals — learning goals, relationship goals, personal goals. Can you say any of them in te reo Māori right now? What one goal would you most like to be able to say in te reo by the end of Term 3?',
    },
    youDo:{
      title:'Māu Anō — He whakamātautau — End of Term 2',
      instruction:'Your end-of-term spoken assessment.',
      tasks:[
        '<b>Task 1:</b> Full conversation — at least 10 lines each. Cover greeting, introduction, holidays, feelings, goals.',
        '<b>Task 2:</b> Self-assess honestly against the checklist.',
        '<b>Task 3:</b> Write your Term 3 goal in te reo: Ko tāku whainga mō Wāhanga Toru:',
        '✦ Checklist: ☐ Greeted correctly (Tēnā koe) · ☐ Introduced self (Ko/Nō) · ☐ Used past tense (I) · ☐ Used Ka narrative · ☐ Expressed a feeling (Kei te [emotion]) · ☐ Used a number or date · ☐ Used a conjunction · ☐ Closed with Tēnā koe ×3',
      ],
    },
  },
}

const FRIDAY_QUIZ_T2W10 = [
  {day:'Monday',  q:'Which sentence correctly uses Ka for a narrative sequence?',options:['Ka ara ia, ka kai, ka haere ia ki te kura.','I ara ia, ka kai ia, kei te haere ia.','Ka ara ia inanahi, ka kai ia āpōpō.','Ka ara. Kai. Haere ki te kura.'],correct:0},
  {day:'Monday',  q:'"Ko te reo Māori he taonga tuku iho." What does tuku iho mean?',options:['passed down through generations','difficult to learn','belonging to one person only','recently created'],correct:0},
  {day:'Tuesday', q:'"Ahakoa i ua kaha, i tākaro tonu mātou." What structure is this?',options:['Past negative','Ka narrative','Complex concession with ahakoa','Ko identity sentence'],correct:2},
  {day:'Tuesday', q:'"He nui ake ngā ira o tō mātou kapa i ā rātou ira." What does this compare?',options:['The size of two teams','The scores of two teams','The number of players','The colours of two teams'],correct:1},
  {day:'Wednesday',q:'"Ko ia hoki tōku ara ora." What does ara ora mean?',options:['learning journey','favourite song','pathway to life','daily routine'],correct:2},
  {day:'Wednesday',q:'What makes a "showcase sentence" different from an exercise sentence?',options:['It is longer','It uses more vocabulary','It says something the writer truly means and has a real voice','It always uses Ka'],correct:2},
  {day:'Thursday', q:'"Kei te hari au, kei te hīhī hoki." What does hīhī mean here?',options:['tired','sad','excited / eager','surprised'],correct:2},
  {day:'Thursday', q:'"Ko ōku whainga: ka ako ake au…" — What does ako ake mean?',options:['to stop learning','to learn less','to learn more / further','to learn backwards'],correct:2},
]

// ── Term 2 data router ──────────────────────────────────────────────────────
function getTerm2Data(week) {
  const curricula = {
    1: CURRICULUM_T2W1, 2: CURRICULUM_T2W2, 3: CURRICULUM_T2W3,
    4: CURRICULUM_T2W4, 5: CURRICULUM_T2W5, 6: CURRICULUM_T2W6,
    7: CURRICULUM_T2W7, 8: CURRICULUM_T2W8, 9: CURRICULUM_T2W9, 10: CURRICULUM_T2W10
  }
  const quizzes = {
    1: FRIDAY_QUIZ_T2W1, 2: FRIDAY_QUIZ_T2W2, 3: FRIDAY_QUIZ_T2W3,
    4: FRIDAY_QUIZ_T2W4, 5: FRIDAY_QUIZ_T2W5, 6: FRIDAY_QUIZ_T2W6,
    7: FRIDAY_QUIZ_T2W7, 8: FRIDAY_QUIZ_T2W8, 9: FRIDAY_QUIZ_T2W9, 10: FRIDAY_QUIZ_T2W10
  }
  return { curriculum: curricula[week] || null, quiz: quizzes[week] || null }
}

