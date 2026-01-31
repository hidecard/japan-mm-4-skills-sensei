import { JLPTLevel, SkillName, Lesson } from './types';

export const LEVELS: JLPTLevel[] = ['N5', 'N4', 'N3'];

export const SKILLS: { name: SkillName; icon: string; color: string }[] = [
  { name: 'Kana', icon: 'fa-font', color: 'bg-rose-500' },
  { name: 'Kanji', icon: 'fa-characters', color: 'bg-orange-500' },
  { name: 'Vocabulary', icon: 'fa-book', color: 'bg-amber-500' },
  { name: 'Grammar', icon: 'fa-code-branch', color: 'bg-emerald-500' },
  { name: 'Listening', icon: 'fa-headphones', color: 'bg-sky-500' },
  { name: 'Speaking', icon: 'fa-comment', color: 'bg-indigo-500' },
  { name: 'Reading', icon: 'fa-file-lines', color: 'bg-purple-500' },
  { name: 'Writing', icon: 'fa-pen-nib', color: 'bg-pink-500' },
];

// N5 Lessons - Beginner Level
export const INITIAL_N5_LESSONS: Lesson[] = [
  // KANA VOWELS
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-v-a', title: 'Hiragana: あ',
    content: {
      text: 'あ', furigana: 'あ', meaning: 'The vowel "a"',
      meaningMm: 'ဗျည်းသံ "အ"',
      explanation: 'Open your mouth wide to produce "ah" sound like in "father".',
      explanationMm: '"ဖားသား" (Father) ဟူသော စကားလုံးရှိ "အာ" အသံကဲ့သို့ ပါးစပ်ကို ကျယ်ကျယ်ဖွင့်ပြီး အသံထွက်ပါ။',
      exampleSentences: ['あいうえお', 'あさは']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-v-i', title: 'Hiragana: い',
    content: {
      text: 'い', furigana: 'い', meaning: 'The vowel "i"',
      meaningMm: 'ဗျည်းသံ "အိ"',
      explanation: 'Smile horizontally to say "ee" like in "eagle".',
      explanationMm: '"အီးဂဲလ်" (Eagle) ဟူသော စကားလုံးရှိ "အီး" အသံကဲ့သို့ ပါးစပ်ကို ဘေးတိုက်ပြုံးသကဲ့သို့ ဆန့်ထုတ်ပြီး အသံထွက်ပါ။',
      exampleSentences: ['あいうえお', 'いろは']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-v-u', title: 'Hiragana: う',
    content: {
      text: 'う', furigana: 'う', meaning: 'The vowel "u"',
      meaningMm: 'ဗျည်းသံ "အု"',
      explanation: 'A short "oo" sound like in "soup", with less lip rounding.',
      explanationMm: '"ဆွပ်" (Soup) ဟူသော စကားလုံးရှိ "အု" အသံကဲ့သို့ တိုတိုထွက်ပါ။ နှုတ်ခမ်းကို အင်္ဂလိပ်အသံထက် လျှော့ပြီး ဝိုင်းပါ။',
      exampleSentences: ['あいうえお', 'うみ']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-v-e', title: 'Hiragana: え',
    content: {
      text: 'え', furigana: 'え', meaning: 'The vowel "e"',
      meaningMm: 'ဗျည်းသံ "အဲ"',
      explanation: 'A short "eh" sound like the "e" in "egg".',
      explanationMm: '"အက်ဂ်" (Egg) ဟူသော စကားလုံးရှိ "အဲ" အသံကဲ့သို့ တိုတိုထွက်ပါ။',
      exampleSentences: ['あいうえお', 'えいが']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-v-o', title: 'Hiragana: お',
    content: {
      text: 'お', furigana: 'お', meaning: 'The vowel "o"',
      meaningMm: 'ဗျည်းသံ "အို"',
      explanation: 'A short "oh" sound like the first part of "boat".',
      explanationMm: '"ဘုတ်" (Boat) ဟူသော စကားလုံးရှိ "အို" အသံကဲ့သို့ တိုတိုထွက်ပါ။',
      exampleSentences: ['あいうえお', 'お寺']
    }
  },

  // KANA K GROUP
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-k-ka', title: 'Hiragana: か',
    content: {
      text: 'か', furigana: 'か', meaning: 'Consonant "k" + "a"',
      meaningMm: 'ဗျည်းသံ "က" + "အ"',
      explanation: 'Soft "k" sound produced at the back of the throat.',
      explanationMm: 'လည်ချောင်းနောက်ပိုင်းတွင် ထုတ်လုပ်သော ပျော့ပျောင်းသော "က" အသံ။',
      exampleSentences: ['かさ', 'かわ']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-k-ki', title: 'Hiragana: き',
    content: {
      text: 'き', furigana: 'き', meaning: 'Consonant "k" + "i"',
      meaningMm: 'ဗျည်းသံ "က" + "အိ"',
      explanation: 'Keep the tongue flat against the hard palate.',
      explanationMm: 'နှုတ်ခမ်းကို ပိတ်ပြီး ကျယ်ပြန့်စွာ ထားပါ။',
      exampleSentences: ['きた', 'きく']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-k-ku', title: 'Hiragana: く',
    content: {
      text: 'く', furigana: 'く', meaning: 'Consonant "k" + "u"',
      meaningMm: 'ဗျည်းသံ "က" + "အု"',
      explanation: 'Quick "k" followed by "u" without emphasis.',
      explanationMm: '"က" ကို မြန်စွာ ထွက်ပြီး "အု" နှင့် တွဲပါ။',
      exampleSentences: ['くち', 'くるま']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-k-ke', title: 'Hiragana: け',
    content: {
      text: 'け', furigana: 'け', meaning: 'Consonant "k" + "e"',
      meaningMm: 'ဗျည်းသံ "က" + "အဲ"',
      explanation: 'Similar to "ke" in "kettle".',
      explanationMm: '"ကက်တယ်" (Kettle) ဟူသော စကားလုံးရှိ "ကဲ" အသံနှင့် တူပါသည်။',
      exampleSentences: ['けしゴム', 'けっこん']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-k-ko', title: 'Hiragana: こ',
    content: {
      text: 'こ', furigana: 'こ', meaning: 'Consonant "k" + "o"',
      meaningMm: 'ဗျည်းသံ "က" + "အို"',
      explanation: 'Round lips slightly for the "o" sound.',
      explanationMm: 'နှုတ်ခမ်းကို အနည်းငယ်ဝိုင်းပြီး "အို" အသံထွက်ပါ။',
      exampleSentences: ['こ飯', 'ことし']
    }
  },

  // KANA GREETINGS
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-1', title: 'Basic Greetings',
    content: {
      text: 'おはよう。', furigana: 'おはよう。', meaning: 'Good morning.',
      meaningMm: 'မင်္ဂလာနံနက်ခင်းပါ။',
      explanation: 'Pronounce "u" at the end as a long "o" sound.',
      explanationMm: 'အဆုံးရှိ "u" ကို "အို" အသံ ရှည်ရှည်ဆွဲ၍ "အိုဟားယိုး" ဟု အသံထွက်ပါ။',
      exampleSentences: ['おはよう。', 'おはようございます。']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-2', title: 'Thank You',
    content: {
      text: 'ありがとう。', furigana: 'ありがとう。', meaning: 'Thank you.',
      meaningMm: 'ကျေးဇူးတင်ပါတယ်။',
      explanation: 'Common polite way to say thanks.',
      explanationMm: 'ကျေးဇူးတင်ကြောင်း ပြောဆိုရာတွင် အသုံးအများဆုံး စကားဖြစ်ပါသည်။',
      exampleSentences: ['ありがとうございます。', 'ありがとうございました。']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-3', title: 'Excuse Me',
    content: {
      text: 'すみません。', furigana: 'すみません。', meaning: 'Excuse me.',
      meaningMm: 'တစ်ဆိတ်လောက် (သို့မဟုတ်) တောင်းပန်ပါတယ်။',
      explanation: 'Used for apology or getting attention.',
      explanationMm: 'တစ်စုံတစ်ဦးကို ခေါ်လိုလျှင်သော်လည်းကောင်း၊ တောင်းပန်လိုလျှင်သော်လည်းကောင်း အသုံးပြုပါသည်။',
      exampleSentences: ['すみません。力を貸してください。', 'すみません、道に迷いました。']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-4', title: 'Good Evening',
    content: {
      text: 'こんばんは。', furigana: 'こんばんは。', meaning: 'Good evening.',
      meaningMm: 'မင်္ဂလာညနေခင်းပါ။',
      explanation: '"ha" is pronounced "wa" as a particle.',
      explanationMm: 'ဤနေရာတွင် "ha" အက္ခရာကို "ဝ" ဟု အသံထွက်ရပါမည်။',
      exampleSentences: ['こんばんは。今日は寒いですね。', 'こんばんは。お元気ですか。']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-5', title: 'Goodbye',
    content: {
      text: 'さようなら。', furigana: 'さようなら。', meaning: 'Goodbye.',
      meaningMm: 'နှုတ်ဆက်ပါတယ်။ / သွားတော့မယ်နော်။',
      explanation: 'Standard formal goodbye.',
      explanationMm: 'ယဉ်ကျေးစွာ နှုတ်ဆက်ရာတွင် အသုံးပြုပါသည်။',
      exampleSentences: ['さようなら。また明日。', 'さようなら。お元気で。']
    }
  },
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-6', title: 'Yes / No',
    content: {
      text: 'はい / いいえ', furigana: 'はい / いいえ', meaning: 'Yes / No',
      meaningMm: 'ဟုတ်ကဲ့ / မဟုတ်ပါ',
      explanation: '"hai" is affirmative, "iie" is negative.',
      explanationMm: '"ဟဲချိ" သည် သဘောတူခြင်းကို ဆိုလိုပြီး "အဲရဲချိ" သည် ငြင်းပယ်ခြင်းကို ဆိုလိုပါသည်။',
      exampleSentences: ['それはそうですか。はい、そうです。', 'しませんか。いいえ、やります。']
    }
  },

  // KANJI
  {
    level: 'N5', skill: 'Kanji', lessonId: 'n5-kanji-1', title: 'Numbers: One to Three',
    content: {
      text: '一、二、三', furigana: 'いち、に、さん', meaning: 'One, Two, Three',
      meaningMm: 'တစ်၊ နှစ်၊ သုံး',
      explanation: 'Simple horizontal stroke Kanji.',
      explanationMm: 'အလျားလိုက် မျဉ်းတိုလေးများဖြင့် ရေးသားရသော အရိုးရှင်းဆုံး ခန်ဂျီများ ဖြစ်ပါသည်။',
      exampleSentences: ['一つ', '二本', '三人']
    }
  },
  {
    level: 'N5', skill: 'Kanji', lessonId: 'n5-kanji-2', title: 'Day and Month',
    content: {
      text: '日月', furigana: 'にちげつ', meaning: 'Sun and Moon',
      meaningMm: 'နေနှင့် လ',
      explanation: '"Nichi" for Sun/Day, "Getsu" for Moon/Month.',
      explanationMm: '"နိချိဂဲဆွတ်" သည် နေ၊ လ၊ ရက်၊ လ တို့ကို ဆိုလိုပါသည်။',
      exampleSentences: ['日本', '一月', '二月']
    }
  },
  {
    level: 'N5', skill: 'Kanji', lessonId: 'n5-kanji-3', title: 'Person',
    content: {
      text: '日本人', furigana: 'にほんじん', meaning: 'Japanese person',
      meaningMm: 'ဂျပန်လူမျိုး',
      explanation: '"Jin" denotes nationality.',
      explanationMm: 'နိုင်ငံအမည်နောက်တွင် "ဂျင်း" ကို ထည့်ပါက ထိုနိုင်ငံသားကို ဆိုလိုပါသည်။',
      exampleSentences: ['私は日本人です。', '日本人の友達']
    }
  },
  {
    level: 'N5', skill: 'Kanji', lessonId: 'n5-kanji-4', title: 'Water and Fire',
    content: {
      text: '水、火', furigana: 'みず、ひ', meaning: 'Water, Fire',
      meaningMm: 'ရေ၊ မီး',
      explanation: 'Water has 3 strokes, fire has 4 strokes.',
      explanationMm: 'ရေ ခန်ဂျီသည် အလျားလိုက် ၃ မျဉ်းဖြင့် ရေးပြီး မီး ခန်ဂျီသည် ၄ မျဉ်းဖြင့် ရေးပါသည်။',
      exampleSentences: ['水','火']
    }
  },
  {
    level: 'N5', skill: 'Kanji', lessonId: 'n5-kanji-5', title: 'Mountain and Tree',
    content: {
      text: '山、木', furigana: 'やま、き', meaning: 'Mountain, Tree',
      meaningMm: 'တောင်၊ သစ်ပင်',
      explanation: 'Mountain looks like peaks, tree is simple vertical with branches.',
      explanationMm: 'တောင် ခန်းဂျီသည် ထိပ်ပေါင်လေးများကဲ့သို့ ပုံသဏ္ဍာန်ရှိပြီး သစ်ပင် ခန်းဂျီသည် ဒေါင်လျားနှင့် အကိုင်းလေးများဖြင့် ရေးပါသည်။',
      exampleSentences: ['山','木']
    }
  },

  // VOCABULARY
  {
    level: 'N5', skill: 'Vocabulary', lessonId: 'n5-vocab-1', title: 'Family Members',
    content: {
      text: '家族', furigana: 'かぞく', meaning: 'Family',
      meaningMm: 'မိသားစု',
      explanation: 'ka (home) + zo (gather) + ku (people).',
      explanationMm: 'အိမ် (か) + စုဝေး (ぞく) + လူ (く) ဟု ဆိုရင် အိမ်မှလူများကို စုဝေးထားသူ ဖြစ်ပါသည်။',
      exampleSentences: ['私の家族は五人です。', '家族と一緒に住んでいます。']
    }
  },
  {
    level: 'N5', skill: 'Vocabulary', lessonId: 'n5-vocab-2', title: 'Time / Hour',
    content: {
      text: '時間', furigana: 'じかん', meaning: 'Time / Duration',
      meaningMm: 'အချိန်',
      explanation: 'ji (time) + kan (interval).',
      explanationMm: 'အချိန် (じ) + ကြားချင်း (かん) ဟု ဆိုရင် ကာလကြာမြင့်ခြင်းကို ဆိုလိုပါသည်။',
      exampleSentences: ['何時間かかりますか。', '時間の無駄']
    }
  },
  {
    level: 'N5', skill: 'Vocabulary', lessonId: 'n5-vocab-3', title: 'Money / Currency',
    content: {
      text: 'お金', furigana: 'おかね', meaning: 'Money',
      meaningMm: 'ငွေကြေး',
      explanation: 'o (honorific) + Kane (metal/money).',
      explanationMm: 'ဂုဏ်ပြုစကားလုံး (お) + သတ္တု (かね) ကို ပေါင်းထားခြင်းဖြစ်ပြီး ယဉ်ကျေးစွာ ငွေကို ခေါ်ဆိုပါသည်။',
      exampleSentences: ['お金がありますか。', 'お金を払います。']
    }
  },
  {
    level: 'N5', skill: 'Vocabulary', lessonId: 'n5-vocab-4', title: 'Yesterday / Today / Tomorrow',
    content: {
      text: '昨日・今日・明日', furigana: 'きのう・きょう・あした', meaning: 'Yesterday・Today・Tomorrow',
      meaningMm: 'မနေ့က・ဒီနေ့・မနက်ဖြန်',
      explanation: 'Key dates vocabulary for daily conversation.',
      explanationMm: 'နေ့စဉ် စကားပြောဆိုမှုတွင် အရေးကြီးသော ရက်စွဲပုံစံ စကားလုံးများ ဖြစ်ပါသည်။',
      exampleSentences: ['昨日は雨でした。', '明日は友達と遊びます。']
    }
  },

  // GRAMMAR
  {
    level: 'N5', skill: 'Grammar', lessonId: 'n5-grammar-1', title: 'Topic Particle は',
    content: {
      text: '私は学生です。', furigana: 'わたしはがくせいです。', meaning: 'I am a student.',
      meaningMm: 'ကျွန်တော်/ကျွန်မသည် ကျောင်းသား ဖြစ်ပါသည်။',
      explanation: '"ha" (pronounced wa) marks the topic.',
      explanationMm: '"ဝ" (wa) သည် ဝါကျ၏ အဓိကအကြောင်းအရာကို ပြဆိုသော စကားလုံး ဖြစ်ပါသည်။',
      exampleSentences: ['私は田中です。', '今日は忙しいです。']
    }
  },
  {
    level: 'N5', skill: 'Grammar', lessonId: 'n5-grammar-2', title: 'Location Particle に',
    content: {
      text: '部屋の中にいます。', furigana: 'へやのなかにいます。', meaning: 'I am in the room.',
      meaningMm: 'အခန်းထဲတွင် ရှိပါသည်။',
      explanation: '"ni" indicates location or destination.',
      explanationMm: '"に" သည် တည်နေရာ သို့မဟုတ် သွားလိုသော နေရာကို ပြဆိုပါသည်။',
      exampleSentences: ['部屋にいます。', '東京に行きます。']
    }
  },
  {
    level: 'N5', skill: 'Grammar', lessonId: 'n5-grammar-3', title: 'Object Particle を',
    content: {
      text: '新聞を読みます。', furigana: 'しんぶんをよみます。', meaning: 'I read the newspaper.',
      meaningMm: 'သတင်းစာ ဖတ်ပါသည်။',
      explanation: '"o" marks the direct object of an action.',
      explanationMm: '"ဝိုင်း" သည် လုပ်ဆောင်ချက်၏ တိုက်ရိုက်အရာကို ပြဆိုပါသည်။',
      exampleSentences: ['本を読みます。', 'ご飯を食べます。']
    }
  },
  {
    level: 'N5', skill: 'Grammar', lessonId: 'n5-grammar-4', title: 'Conjunction そして',
    content: {
      text: '朝起きて、そして、会社に行きます。', furigana: 'あさおきて、そして、かいしゃにいきます。', meaning: 'I wake up in the morning, and then go to work.',
      meaningMm: 'နံနက်ခင်းတွင် နိုးပြီး ထို့နောက် ကုမ္ပဏီသို့ သွားပါသည်။',
      explanation: 'Connects two related actions or states.',
      explanationMm: 'ဆက်စပ်သော လုပ်ဆောင်ချက်နှစ်ခု သို့မဟုတ် အခြေအနေနှစ်ခုကို ဆက်သွယ်ပါသည်။',
      exampleSentences: ['朝ご飯を食べて、そして、学校に行きます。', '勉強して、そして、遊びます。']
    }
  },
  {
    level: 'N5', skill: 'Grammar', lessonId: 'n5-grammar-5', title: 'Question Particle か',
    content: {
      text: '学生ですか。', furigana: 'がくせいですか。', meaning: 'Are you a student?',
      meaningMm: 'ကျောင်းသား ဖြစ်ပါသလား။',
      explanation: '"ka" turns statements into questions.',
      explanationMm: '"か" သည် ဖော်ပြချက်များကို မေးခွန်းအဖြစ် ပြောင်းလဲပေးပါသည်။',
      exampleSentences: ['日本人ですか。', '学生ですか。']
    }
  },
  {
    level: 'N5', skill: 'Grammar', lessonId: 'n5-grammar-6', title: 'Negative Form ~ません',
    content: {
      text: '食べません。', furigana: 'たべません。', meaning: 'I don\'t eat.',
      meaningMm: 'စားမည် မဟုတ်ပါ။',
      explanation: 'Negative form of verbs ending in ~masen.',
      explanationMm: '~ません ဖြင့် အဆုံးသတ်သော ကြိယာများ၏ ငြင်းပယ်ပုံစံ ဖြစ်ပါသည်။',
      exampleSentences: ['食べません。', '飲みません。']
    }
  },
  {
    level: 'N5', skill: 'Grammar', lessonId: 'n5-grammar-7', title: 'Past Negative ~ませんでした',
    content: {
      text: '食べませんでした。', furigana: 'たべませんでした。', meaning: 'I didn\'t eat.',
      meaningMm: 'စားခဲ့ခြင်း မရှိပါ။',
      explanation: 'Past tense negative form.',
      explanationMm: 'အတိတ်ကြိယာ ငြင်းပယ်ပုံစံ ဖြစ်ပါသည်။',
      exampleSentences: ['食べませんでした。', '行きませんでした。']
    }
  },
  {
    level: 'N5', skill: 'Grammar', lessonId: 'n5-grammar-8', title: 'Time Expression に',
    content: {
      text: '九時に起きます。', furigana: 'くじにおきます。', meaning: 'I wake up at 9 o\'clock.',
      meaningMm: '၉ နာရီတွင် နိုးပါသည်။',
      explanation: 'Used with specific times.',
      explanationMm: 'တိကျသော အချိန်များနှင့် အသုံးပြုပါသည်။',
      exampleSentences: ['七時に寝ます。', '一時に食べます。']
    }
  },

  // LISTENING
  {
    level: 'N5', skill: 'Listening', lessonId: 'n5-listening-1', title: 'Numbers 1-10',
    content: {
      text: 'いち、に、さん、し、ご、ろく、しち、はち、きゅう、じゅう', furigana: 'いち、に、さん、し、ご、ろく、しち、はち、きゅう、じゅう', meaning: 'One, two, three, four, five, six, seven, eight, nine, ten',
      meaningMm: 'တစ်၊ နှစ်၊ သုံး၊ လေး၊ ငါး၊ ခြောက်၊ ခုနစ်၊ ရှစ်၊ ကိုး၊ ဆယ်',
      explanation: 'Practice listening to Japanese numbers.',
      explanationMm: 'ဂျပန်နံပါတ်များကို နားထောင်လေ့ကျင့်ပါ။',
      exampleSentences: ['いくつですか。', '二つあります。']
    }
  },
  {
    level: 'N5', skill: 'Listening', lessonId: 'n5-listening-2', title: 'Greetings Dialogue',
    content: {
      text: 'こんにちは。お元気ですか。', furigana: 'こんにちは。おげんきですか。', meaning: 'Hello. How are you?',
      meaningMm: 'မင်္ဂလာနေ့ခင်းပါ။ ကျန်းမာပါသလား။',
      explanation: 'Common greeting exchange.',
      explanationMm: 'အသုံးအများဆုံး နှုတ်ဆက်စကားပြောဆိုမှု။',
      exampleSentences: ['こんにちは。', 'はい、元気です。']
    }
  },
  {
    level: 'N5', skill: 'Listening', lessonId: 'n5-listening-3', title: 'Self Introduction',
    content: {
      text: '私は田中です。', furigana: 'わたしはたなかです。', meaning: 'I am Tanaka.',
      meaningMm: 'ကျွန်တော်သည် တာနာကာ ဖြစ်ပါသည်။',
      explanation: 'Basic self-introduction pattern.',
      explanationMm: 'အခြေခံ မိတ်ဆက်ပုံစံ။',
      exampleSentences: ['私は学生です。', 'よろしくお願いします。']
    }
  },

  // SPEAKING
  {
    level: 'N5', skill: 'Speaking', lessonId: 'n5-speaking-1', title: 'Introducing Yourself',
    content: {
      text: 'こんにちは。私は[名前]です。', furigana: 'こんにちは。わたしは[なまえ]です。', meaning: 'Hello. I am [Name].',
      meaningMm: 'မင်္ဂလာနေ့ခင်းပါ။ ကျွန်တော်သည် [အမည်] ဖြစ်ပါသည်။',
      explanation: 'Practice speaking your introduction.',
      explanationMm: 'မိတ်ဆက်စကားကို ပြောဆိုလေ့ကျင့်ပါ။',
      exampleSentences: ['こんにちは。私は山田です。', '初めまして。']
    }
  },
  {
    level: 'N5', skill: 'Speaking', lessonId: 'n5-speaking-2', title: 'Asking for Directions',
    content: {
      text: 'すみません。駅はどこですか。', furigana: 'すみません。えきはどこですか。', meaning: 'Excuse me. Where is the station?',
      meaningMm: 'တစ်ဆိတ်လောက်။ ဘူတာရုံသည် ဘယ်နေရာတွင် ရှိပါသနည်း။',
      explanation: 'Useful phrase for asking directions.',
      explanationMm: 'လမ်းညွှန်မေးရန် အသုံးဝင်သော စကားစု။',
      exampleSentences: ['トイレはどこですか。', '銀行はどこですか。']
    }
  },
  {
    level: 'N5', skill: 'Speaking', lessonId: 'n5-speaking-3', title: 'Ordering Food',
    content: {
      text: 'これをください。', furigana: 'これをください。', meaning: 'This one, please.',
      meaningMm: 'ဒီတစ်ခုကို ပေးပါ။',
      explanation: 'Basic ordering phrase.',
      explanationMm: 'အခြေခံ မှာယူစကားစု။',
      exampleSentences: ['水をください。', 'お茶をください。']
    }
  },

  // READING
  {
    level: 'N5', skill: 'Reading', lessonId: 'n5-reading-1', title: 'Simple Sentences',
    content: {
      text: '私は学生です。東京に住んでいます。', furigana: 'わたしはがくせいです。とうきょうにすんでいます。', meaning: 'I am a student. I live in Tokyo.',
      meaningMm: 'ကျွန်တော်သည် ကျောင်းသား ဖြစ်ပါသည်။ တိုကျိုတွင် နေထိုင်ပါသည်။',
      explanation: 'Practice reading basic sentences.',
      explanationMm: 'အခြေခံ ဝါကျများကို ဖတ်ရှုလေ့ကျင့်ပါ။',
      exampleSentences: ['私は会社員です。', '大阪に住んでいます。']
    }
  },
  {
    level: 'N5', skill: 'Reading', lessonId: 'n5-reading-2', title: 'Hiragana Text',
    content: {
      text: 'こんにちは。わたしはたなかです。', furigana: 'こんにちは。わたしはたなかです。', meaning: 'Hello. I am Tanaka.',
      meaningMm: 'မင်္ဂလာနေ့ခင်းပါ။ ကျွန်တော်သည် တာနာကာ ဖြစ်ပါသည်။',
      explanation: 'Reading practice with hiragana only.',
      explanationMm: 'ဟီရာဂါနာ သာဖြင့် ဖတ်ရှုလေ့ကျင့်ခြင်း။',
      exampleSentences: ['おはようございます。', 'ありがとうございます。']
    }
  },
  {
    level: 'N5', skill: 'Reading', lessonId: 'n5-reading-3', title: 'Mixed Kanji/Hiragana',
    content: {
      text: '私は学校に行きます。', furigana: 'わたしはがっこうにいきます。', meaning: 'I go to school.',
      meaningMm: 'ကျွန်တော်သည် ကျောင်းသို့ သွားပါသည်။',
      explanation: 'Reading with kanji and hiragana mixed.',
      explanationMm: 'ကန်ဂျီနှင့် ဟီရာဂါနာ ရောနှောဖတ်ရှုခြင်း။',
      exampleSentences: ['本を読みます。', '友達と話します。']
    }
  },

  // WRITING
  {
    level: 'N5', skill: 'Writing', lessonId: 'n5-writing-1', title: 'Hiragana Practice',
    content: {
      text: 'あいうえおかきくけこ', furigana: 'あいうえおかきくけこ', meaning: 'Practice writing these hiragana characters.',
      meaningMm: 'ဤဟီရာဂါနာ အက္ခရာများကို ရေးသားလေ့ကျင့်ပါ။',
      explanation: 'Write each character 5 times.',
      explanationMm: 'တစ်ခုချင်းစီကို ၅ ကြိမ် ရေးသားပါ။',
      exampleSentences: ['あ', 'い', 'う', 'え', 'お']
    }
  },
  {
    level: 'N5', skill: 'Writing', lessonId: 'n5-writing-2', title: 'Simple Sentences',
    content: {
      text: '私は学生です。', furigana: 'わたしはがくせいです。', meaning: 'Write: "I am a student."',
      meaningMm: '"ကျွန်တော်သည် ကျောင်းသား ဖြစ်ပါသည်။" ကို ရေးသားပါ။',
      explanation: 'Practice writing complete sentences.',
      explanationMm: 'ပြီးပြည့်စုံသော ဝါကျများကို ရေးသားလေ့ကျင့်ပါ။',
      exampleSentences: ['私は会社員です。', '東京に住んでいます。']
    }
  },
  {
    level: 'N5', skill: 'Writing', lessonId: 'n5-writing-3', title: 'Greetings',
    content: {
      text: 'こんにちは。お元気ですか。', furigana: 'こんにちは。おげんきですか。', meaning: 'Write: "Hello. How are you?"',
      meaningMm: '"မင်္ဂလာနေ့ခင်းပါ။ ကျန်းမာပါသလား။" ကို ရေးသားပါ။',
      explanation: 'Practice writing polite expressions.',
      explanationMm: 'ယဉ်ကျေးစွာ ဖော်ပြသော စကားစုများကို ရေးသားလေ့ကျင့်ပါ။',
      exampleSentences: ['おはようございます。', 'さようなら。']
    }
  },
  {
    level: 'N5', skill: 'Writing', lessonId: 'n5-writing-4', title: 'Katakana Practice',
    content: {
      text: 'アイウエオカキクケコ', furigana: 'アイウエオカキクケコ', meaning: 'Practice writing these katakana characters.',
      meaningMm: 'ဤကာတာကာနာ အက္ခရာများကို ရေးသားလေ့ကျင့်ပါ။',
      explanation: 'Katakana is used for foreign words.',
      explanationMm: 'ကာတာကာနာသည် နိုင်ငံခြားစကားလုံးများအတွက် အသုံးပြုပါသည်။',
      exampleSentences: ['ア', 'イ', 'ウ', 'エ', 'オ']
    }
  },
  {
    level: 'N5', skill: 'Writing', lessonId: 'n5-writing-5', title: 'Numbers and Dates',
    content: {
      text: '今日は2024年1月1日です。', furigana: 'きょうは2024ねん1がつ1にちです。', meaning: 'Today is January 1st, 2024.',
      meaningMm: 'ဒီနေ့သည် ၂၀၂၄ ခုနှစ် ဇန်နဝါရီလ ၁ ရက်ဖြစ်ပါသည်။',
      explanation: 'Practice writing dates and numbers.',
      explanationMm: 'ရက်စွဲနှင့် နံပါတ်များကို ရေးသားလေ့ကျင့်ပါ။',
      exampleSentences: ['2024年', '1月1日', '今日は']
    }
  },

  // ADDITIONAL VOCABULARY LESSONS
  {
    level: 'N5', skill: 'Vocabulary', lessonId: 'n5-vocab-5', title: 'Colors',
    content: {
      text: '色', furigana: 'いろ', meaning: 'Color',
      meaningMm: 'အရောင်',
      explanation: 'Basic color vocabulary.',
      explanationMm: 'အခြေခံ အရောင်စကားလုံးများ။',
      exampleSentences: ['赤い色', '青い色', '白い色']
    }
  },
  {
    level: 'N5', skill: 'Vocabulary', lessonId: 'n5-vocab-6', title: 'Food and Drink',
    content: {
      text: '食べ物と飲み物', furigana: 'たべものとのみもの', meaning: 'Food and Drink',
      meaningMm: 'စားစရာနှင့် သောက်စရာ',
      explanation: 'Essential food vocabulary.',
      explanationMm: 'အရေးကြီးသော အစားအသောက် စကားလုံးများ။',
      exampleSentences: ['ご飯', '水', 'お茶']
    }
  },
  {
    level: 'N5', skill: 'Vocabulary', lessonId: 'n5-vocab-7', title: 'Days of the Week',
    content: {
      text: '月曜日・火曜日・水曜日', furigana: 'げつようび・かようび・すいようび', meaning: 'Monday, Tuesday, Wednesday',
      meaningMm: 'တနင်္လာ၊ အင်္ဂါ၊ ဗုဒ္ဓဟူး',
      explanation: 'Learn the days of the week.',
      explanationMm: 'အပတ်ရှိ ရက်များကို လေ့လာပါ။',
      exampleSentences: ['月曜日', '火曜日', '水曜日']
    }
  },

  // ADDITIONAL KANJI LESSONS
  {
    level: 'N5', skill: 'Kanji', lessonId: 'n5-kanji-6', title: 'Time Kanji',
    content: {
      text: '時分秒', furigana: 'じふんびょう', meaning: 'Hour, Minute, Second',
      meaningMm: 'နာရီ၊ မိနစ်၊ စက္ကန့်',
      explanation: 'Time measurement kanji.',
      explanationMm: 'အချိန်တိုင်းတာခြင်း ခန်ဂျီများ။',
      exampleSentences: ['一時間', '五分', '三十秒']
    }
  },
  {
    level: 'N5', skill: 'Kanji', lessonId: 'n5-kanji-7', title: 'Direction Kanji',
    content: {
      text: '上下左右', furigana: 'じょうげさゆう', meaning: 'Up, Down, Left, Right',
      meaningMm: 'အပေါ်၊ အောက်၊ ဘယ်၊ ညာ',
      explanation: 'Directional kanji characters.',
      explanationMm: 'ဦးတည်ရာပြသော ခန်ဂျီအက္ခရာများ။',
      exampleSentences: ['上', '下', '左', '右']
    }
  },
  {
    level: 'N5', skill: 'Kanji', lessonId: 'n5-kanji-8', title: 'Family Kanji',
    content: {
      text: '父母兄弟姉妹', furigana: 'ちちははきょうだいしまい', meaning: 'Father, Mother, Siblings',
      meaningMm: 'အဖေ၊ အမေ၊ ညီအစ်ကိုများ',
      explanation: 'Family relationship kanji.',
      explanationMm: 'မိသားစုဆက်ဆံရေး ခန်ဂျီများ။',
      exampleSentences: ['お父さん', 'お母さん', '兄弟']
    }
  }
];

// N4 Lessons - Intermediate Level
export const INITIAL_N4_LESSONS: Lesson[] = [
  // KANA
  {
    level: 'N4', skill: 'Kana', lessonId: 'n4-kana-1', title: 'Hiragana: S Group',
    content: {
      text: 'さしすせそ', furigana: 'さしすせそ', meaning: 'Sa, Shi, Su, Se, So',
      meaningMm: 'စ၊ ရှိ၊ စု၊ စဲ၊ စို',
      explanation: 'S sounds with tongue close to teeth.',
      explanationMm: 'လျှာကို သွားများနှင့် နီးစပ်စွာ ထားပြီး ထုတ်လုပ်သော S အသံများ။',
      exampleSentences: ['さくら', 'すし', 'せんせい']
    }
  },
  {
    level: 'N4', skill: 'Kana', lessonId: 'n4-kana-2', title: 'Hiragana: T Group',
    content: {
      text: 'たちつてと', furigana: 'たちつてと', meaning: 'Ta, Chi, Tsu, Te, To',
      meaningMm: 'တ၊ ချိ၊ စု၊ တဲ၊ တို',
      explanation: 'T sounds with tongue against teeth.',
      explanationMm: 'လျှာကို သွားများနှင့် ထိစေပြီး ထုတ်လုပ်သော T အသံများ။',
      exampleSentences: ['たこ', 'ちず', 'つばめ']
    }
  },
  {
    level: 'N4', skill: 'Kana', lessonId: 'n4-kana-3', title: 'Hiragana: N Group',
    content: {
      text: 'なにぬねの', furigana: 'なにぬねの', meaning: 'Na, Ni, Nu, Ne, No',
      meaningMm: 'န၊ နိ၊ နု၊ နဲ၊ နို',
      explanation: 'N sounds with tongue tip against gums.',
      explanationMm: 'လျှာအစွန်းကို ဂမ်းနှင့် ထိစေပြီး ထုတ်လုပ်သော N အသံများ။',
      exampleSentences: ['なつ', 'にわ', 'ぬま']
    }
  },

  // KANJI
  {
    level: 'N4', skill: 'Kanji', lessonId: 'n4-kanji-1', title: 'Weather Kanji',
    content: {
      text: '雨雪風', furigana: 'あめゆきかぜ', meaning: 'Rain, Snow, Wind',
      meaningMm: 'မိုး၊ ဆီး၊ လေတိုက်',
      explanation: 'Weather-related kanji characters.',
      explanationMm: 'ရာသီဥတုနှင့် ဆက်စပ်သော ခန်ဂျီအက္ခရာများ။',
      exampleSentences: ['雨が降っています。', '雪が積もっています。']
    }
  },
  {
    level: 'N4', skill: 'Kanji', lessonId: 'n4-kanji-2', title: 'Nature Kanji',
    content: {
      text: '花鳥魚', furigana: 'はなとりさかな', meaning: 'Flower, Bird, Fish',
      meaningMm: 'ပန်း၊ ငှက်၊ ငါး',
      explanation: 'Nature and animal kanji.',
      explanationMm: 'သဘာဝနှင့် တိရစ္ဆာန် ခန်ဂျီများ။',
      exampleSentences: ['桜の花', '小鳥', '金魚']
    }
  },
  {
    level: 'N4', skill: 'Kanji', lessonId: 'n4-kanji-3', title: 'Building Kanji',
    content: {
      text: '部屋店駅', furigana: 'へやみせえき', meaning: 'Room, Shop, Station',
      meaningMm: 'အခန်း၊ ဆိုင်၊ ဘူတာရုံ',
      explanation: 'Building and location kanji.',
      explanationMm: 'အဆောက်အအုံနှင့် နေရာ ခန်ဂျီများ။',
      exampleSentences: ['私の部屋', '本屋さん', '駅前']
    }
  },

  // VOCABULARY
  {
    level: 'N4', skill: 'Vocabulary', lessonId: 'n4-vocab-1', title: 'Transportation',
    content: {
      text: '電車', furigana: 'でんしゃ', meaning: 'Train',
      meaningMm: 'ရထားကား',
      explanation: 'Electric train, common in Japan.',
      explanationMm: 'ဂျပန်နိုင်ငံတွင် အသုံးအများဆုံး ပို့ဆောင်ရေးနည်းလမ်း။',
      exampleSentences: ['電車に乗ります。', '電車が遅れています。']
    }
  },
  {
    level: 'N4', skill: 'Vocabulary', lessonId: 'n4-vocab-2', title: 'Weather Terms',
    content: {
      text: '晴れ・雨・雪', furigana: 'はれ・あめ・ゆき', meaning: 'Sunny, Rain, Snow',
      meaningMm: 'နေသာသော၊ မိုး၊ ဆီး',
      explanation: 'Common weather expressions.',
      explanationMm: 'အသုံးအများဆုံး ရာသီဥတု ဖော်ပြချက်များ။',
      exampleSentences: ['今日は晴れです。', '雨が降っています。']
    }
  },
  {
    level: 'N4', skill: 'Vocabulary', lessonId: 'n4-vocab-3', title: 'Hobbies',
    content: {
      text: '読書・音楽・スポーツ', furigana: 'どくしょ・おんがく・すぽーつ', meaning: 'Reading, Music, Sports',
      meaningMm: 'စာဖတ်ခြင်း၊ ဂီတ၊ အားကစား',
      explanation: 'Common hobby vocabulary.',
      explanationMm: 'အသုံးအများဆုံး အပန်းဖြေ စကားလုံးများ။',
      exampleSentences: ['本を読むのが好きです。', '音楽を聞きます。']
    }
  },

  // GRAMMAR
  {
    level: 'N4', skill: 'Grammar', lessonId: 'n4-grammar-1', title: 'Past Tense ~ました',
    content: {
      text: '食べました。', furigana: 'たべました。', meaning: 'I ate.',
      meaningMm: 'စားခဲ့ပါသည်။',
      explanation: 'Adds ~ました to verb stems to indicate past tense.',
      explanationMm: 'ကြိယာအမြစ်များသို့ ~ました ကို ထည့်ပြီး အတိတ်ကြိယာကို ပြဆိုပါသည်။',
      exampleSentences: ['昨日、映画を見ました。', '朝ご飯を食べました。']
    }
  },
  {
    level: 'N4', skill: 'Grammar', lessonId: 'n4-grammar-2', title: 'Volitional Form ~ましょう',
    content: {
      text: '行きましょう。', furigana: 'いきましょう。', meaning: 'Let\'s go.',
      meaningMm: 'သွားကြရအောင်။',
      explanation: 'Expresses suggestion or volition.',
      explanationMm: 'အကြံပြုခြင်း သို့မဟုတ် ဆန္ဒကို ဖော်ပြပါသည်။',
      exampleSentences: ['一緒に食べましょう。', '勉強しましょう。']
    }
  },
  {
    level: 'N4', skill: 'Grammar', lessonId: 'n4-grammar-3', title: 'Potential Form ~ことができます',
    content: {
      text: '泳ぐことができます。', furigana: 'およぐことができます。', meaning: 'I can swim.',
      meaningMm: 'ငါရေကူးတတ်ပါသည်။',
      explanation: 'Expresses ability or possibility.',
      explanationMm: 'စွမ်းရည် သို့မဟုတ် ဖြစ်နိုင်ခြေကို ဖော်ပြပါသည်။',
      exampleSentences: ['日本語を話すことができます。', '料理を作ることができます。']
    }
  },

  // LISTENING
  {
    level: 'N4', skill: 'Listening', lessonId: 'n4-listening-1', title: 'Weather Reports',
    content: {
      text: '今日は晴れです。', furigana: 'きょうははれです。', meaning: 'Today is sunny.',
      meaningMm: 'ဒီနေ့သည် နေသာသော ရက်ဖြစ်ပါသည်။',
      explanation: 'Practice listening to weather information.',
      explanationMm: 'ရာသီဥတု သတင်းများကို နားထောင်လေ့ကျင့်ပါ။',
      exampleSentences: ['明日は雨です。', '今日は暖かいです。']
    }
  },

  // SPEAKING
  {
    level: 'N4', skill: 'Speaking', lessonId: 'n4-speaking-1', title: 'Making Plans',
    content: {
      text: '明日、一緒に映画を見ませんか。', furigana: 'あした、いっしょにえいがをみませんか。', meaning: 'Would you like to watch a movie together tomorrow?',
      meaningMm: 'မနက်ဖြန် အတူတူ ရုပ်ရှင်ကြည့်မလား။',
      explanation: 'Practice making suggestions.',
      explanationMm: 'အကြံပြုခြင်းကို လေ့ကျင့်ပါ။',
      exampleSentences: ['一緒に食事しませんか。', '散歩しませんか。']
    }
  },

  // READING
  {
    level: 'N4', skill: 'Reading', lessonId: 'n4-reading-1', title: 'Short Stories',
    content: {
      text: '私は毎日、電車で会社に行きます。', furigana: 'わたしはまいにち、でんしゃでかいしゃにいきます。', meaning: 'I go to work by train every day.',
      meaningMm: 'ကျွန်တော်သည် နေ့စဉ် ရထားဖြင့် ကုမ္ပဏီသို့ သွားပါသည်။',
      explanation: 'Reading intermediate level sentences.',
      explanationMm: 'အလယ်အလတ်အဆင့် ဝါကျများကို ဖတ်ရှုပါ။',
      exampleSentences: ['友達と買い物に行きました。', '週末は家で休みます。']
    }
  },

  // WRITING
  {
    level: 'N4', skill: 'Writing', lessonId: 'n4-writing-1', title: 'Diary Entry',
    content: {
      text: '今日は学校でテストがありました。', furigana: 'きょうはがっこうでてすとがありました。', meaning: 'Today I had a test at school.',
      meaningMm: 'ဒီနေ့ ကျောင်းတွင် စာမေးပွဲ ရှိခဲ့ပါသည်။',
      explanation: 'Practice writing diary entries.',
      explanationMm: 'ရက်စဉ်မှတ်တမ်းရေးခြင်းကို လေ့ကျင့်ပါ။',
      exampleSentences: ['昨日は友達に会いました。', '明日から夏休みです。']
    }
  }
];

// N3 Lessons - Advanced Level
export const INITIAL_N3_LESSONS: Lesson[] = [
  // KANA
  {
    level: 'N3', skill: 'Kana', lessonId: 'n3-kana-1', title: 'Hiragana: T Group',
    content: {
      text: 'たちつてと', furigana: 'たちつてと', meaning: 'Ta, Chi, Tsu, Te, To',
      meaningMm: 'တ၊ ချိ၊ စု၊ တဲ၊ တို',
      explanation: 'T sounds with tongue against teeth.',
      explanationMm: 'လျှာကို သွားများနှင့် ထိစေပြီး ထုတ်လုပ်သော T အသံများ။',
      exampleSentences: ['たこ', 'ちず', 'つばめ']
    }
  },
  {
    level: 'N3', skill: 'Kana', lessonId: 'n3-kana-2', title: 'Hiragana: H Group',
    content: {
      text: 'はひふへほ', furigana: 'はひふへほ', meaning: 'Ha, Hi, Fu, He, Ho',
      meaningMm: 'ဟ၊ ဟိ၊ ဖု၊ ဟဲ၊ ဟို',
      explanation: 'H sounds with breath between lips.',
      explanationMm: 'နှုတ်ခမ်းများကြားတွင် လေထုတ်ပြီး ထုတ်လုပ်သော H အသံများ။',
      exampleSentences: ['はな', 'ひまわり', 'ふじさん']
    }
  },
  {
    level: 'N3', skill: 'Kana', lessonId: 'n3-kana-3', title: 'Hiragana: M Group',
    content: {
      text: 'まみむめも', furigana: 'まみむめも', meaning: 'Ma, Mi, Mu, Me, Mo',
      meaningMm: 'မ၊ မိ၊ မု၊ မဲ၊ မို',
      explanation: 'M sounds with lips closed.',
      explanationMm: 'နှုတ်ခမ်းများကို ပိတ်ပြီး ထုတ်လုပ်သော M အသံများ။',
      exampleSentences: ['まめ', 'みかん', 'むし']
    }
  },

  // KANJI
  {
    level: 'N3', skill: 'Kanji', lessonId: 'n3-kanji-1', title: 'Emotion Kanji',
    content: {
      text: '喜怒哀楽', furigana: 'きどあいらく', meaning: 'Joy, Anger, Sorrow, Pleasure',
      meaningMm: 'ပျော်ရွှင်ခြင်း၊ ဒေါသ၊ ဝမ်းနည်းခြင်း၊ ပျော်ရွှင်ခြင်း',
      explanation: 'Four basic human emotions.',
      explanationMm: 'လူ့ဘဝရှိ အခြေခံခံစားချက်လေးမျိုး။',
      exampleSentences: ['喜んでいます。', '怒っています。']
    }
  },
  {
    level: 'N3', skill: 'Kanji', lessonId: 'n3-kanji-2', title: 'Abstract Concepts',
    content: {
      text: '幸不幸運', furigana: 'こうふこううん', meaning: 'Happiness, Unhappiness, Fortune',
      meaningMm: 'ချမ်းသာခြင်း၊ ချမ်းသာမှု မရှိခြင်း၊ ကံကောင်းခြင်း',
      explanation: 'Abstract philosophical concepts.',
      explanationMm: 'စိတ်ကူးယဉ် ဒဿနိကဗေဒ အယူအဆများ။',
      exampleSentences: ['幸せです。', '不幸です。']
    }
  },
  {
    level: 'N3', skill: 'Kanji', lessonId: 'n3-kanji-3', title: 'Advanced Numbers',
    content: {
      text: '百万千万億', furigana: 'ひゃくまんせんまんおく', meaning: 'Million, Ten Million, Hundred Million',
      meaningMm: 'သန်း၊ ကိုးသန်း၊ ကုဋေ',
      explanation: 'Large number kanji.',
      explanationMm: 'ကြီးမားသော နံပါတ် ခန်ဂျီများ။',
      exampleSentences: ['100万', '1000万', '1億']
    }
  },

  // VOCABULARY
  {
    level: 'N3', skill: 'Vocabulary', lessonId: 'n3-vocab-1', title: 'Technology',
    content: {
      text: 'インターネット', furigana: 'いんたーねっと', meaning: 'Internet',
      meaningMm: 'အင်တာနက်',
      explanation: 'Modern technology term.',
      explanationMm: 'ခေတ်သစ်နည်းပညာဆိုင်ရာ စကားလုံး။',
      exampleSentences: ['インターネットを使います。', 'インターネットで調べます。']
    }
  },
  {
    level: 'N3', skill: 'Vocabulary', lessonId: 'n3-vocab-2', title: 'Business Terms',
    content: {
      text: '会議・報告・企画', furigana: 'かいぎ・ほうこく・きかく', meaning: 'Meeting, Report, Planning',
      meaningMm: 'အစည်းအဝေး၊ အစီရင်ခံစာ၊ စီစဉ်ခြင်း',
      explanation: 'Common business vocabulary.',
      explanationMm: 'အသုံးအများဆုံး စီးပွားရေးဆိုင်ရာ စကားလုံးများ။',
      exampleSentences: ['会議があります。', '報告書を書きます。']
    }
  },
  {
    level: 'N3', skill: 'Vocabulary', lessonId: 'n3-vocab-3', title: 'Academic Terms',
    content: {
      text: '研究・実験・分析', furigana: 'けんきゅう・じっけん・ぶんせき', meaning: 'Research, Experiment, Analysis',
      meaningMm: 'သုတေသန၊ စမ်းသပ်ခြင်း၊ ခွဲခြမ်းစိတ်ဖြာခြင်း',
      explanation: 'Academic and scientific vocabulary.',
      explanationMm: 'ပညာရပ်ဆိုင်ရာ နှင့် သိပ္ပံဆိုင်ရာ စကားလုံးများ။',
      exampleSentences: ['研究をしています。', '実験を行います。']
    }
  },

  // GRAMMAR
  {
    level: 'N3', skill: 'Grammar', lessonId: 'n3-grammar-1', title: 'Conditional ~たら',
    content: {
      text: '雨が降ったら、傘を持って行きます。', furigana: 'あめがふったら、かさをもっていきます。', meaning: 'If it rains, I will take an umbrella.',
      meaningMm: 'မိုးရွာရင် ထီးယူသွားမယ်။',
      explanation: 'Conditional form indicating "if" situations.',
      explanationMm: '"ရင်" ဟူသော အခြေအနေကို ပြဆိုသော ကြိယာပုံစံ။',
      exampleSentences: ['時間がなかったら、電話します。', 'お金があったら、旅行に行きます。']
    }
  },
  {
    level: 'N3', skill: 'Grammar', lessonId: 'n3-grammar-2', title: 'Passive Form ~られる',
    content: {
      text: '本が読まれます。', furigana: 'ほんがよまれます。', meaning: 'The book is read.',
      meaningMm: 'စာအုပ်ကို ဖတ်ရှုခြင်းကို ခံရသည်။',
      explanation: 'Expresses passive voice.',
      explanationMm: 'ခံယူပုံစံကို ဖော်ပြပါသည်။',
      exampleSentences: ['花が買われます。', '家が建てられます。']
    }
  },
  {
    level: 'N3', skill: 'Grammar', lessonId: 'n3-grammar-3', title: 'Causative Form ~させる',
    content: {
      text: '子供に勉強させます。', furigana: 'こどもにべんきょうさせます。', meaning: 'I make the child study.',
      meaningMm: 'ကလေးကို စာသင်ခိုင်းသည်။',
      explanation: 'Expresses causation or making someone do something.',
      explanationMm: 'တစ်စုံတစ်ဦးကို တစ်စုံတစ်ခု လုပ်ခိုင်းခြင်းကို ဖော်ပြပါသည်။',
      exampleSentences: ['生徒に歌を歌わせます。', '友達に手伝わせます。']
    }
  },

  // LISTENING
  {
    level: 'N3', skill: 'Listening', lessonId: 'n3-listening-1', title: 'News Reports',
    content: {
      text: '政府は新しい政策を発表しました。', furigana: 'せいふはあたらしいせいさくをはっぴょうしました。', meaning: 'The government announced a new policy.',
      meaningMm: 'အစိုးရသည် မူဝါဒအသစ်ကို ကြေညာခဲ့သည်။',
      explanation: 'Practice listening to news-style content.',
      explanationMm: 'သတင်းစဉ်ပုံစံ အကြောင်းအရာကို နားထောင်လေ့ကျင့်ပါ။',
      exampleSentences: ['経済が成長しています。', '環境問題が深刻です。']
    }
  },

  // SPEAKING
  {
    level: 'N3', skill: 'Speaking', lessonId: 'n3-speaking-1', title: 'Formal Presentations',
    content: {
      text: '皆様、こんにちは。本日はお時間をいただきありがとうございます。', furigana: 'みなさま、こんにちは。ほんじつはおじかんをいただきありがとうございます。', meaning: 'Everyone, hello. Thank you for taking your time today.',
      meaningMm: 'လူတိုင်း မင်္ဂလာနေ့ခင်းပါ။ ဒီနေ့ အချိန်ယူပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်။',
      explanation: 'Practice formal presentation language.',
      explanationMm: 'တင်ပြခြင်းဆိုင်ရာ ယဉ်ကျေးစွာ ပြောဆိုခြင်းကို လေ့ကျင့်ပါ။',
      exampleSentences: ['ご清聴ありがとうございました。', 'ご質問をお受けします。']
    }
  },

  // READING
  {
    level: 'N3', skill: 'Reading', lessonId: 'n3-reading-1', title: 'Literary Texts',
    content: {
      text: '古い時代、人々は自然と共に生きていた。', furigana: 'ふるいじだい、ひとびとはしぜんとともにいきていた。', meaning: 'In ancient times, people lived together with nature.',
      meaningMm: 'ရှေးဟောင်းသော ခေတ်က လူများသည် သဘာဝနှင့် အတူယှဉ်တွဲ နေထိုင်ခဲ့ကြသည်။',
      explanation: 'Reading advanced literary content.',
      explanationMm: 'အဆင့်မြင့် စာပေဆိုင်ရာ အကြောင်းအရာကို ဖတ်ရှုပါ။',
      exampleSentences: ['文化は時代と共に変化する。', '伝統を守り続けることが大切だ。']
    }
  },

  // WRITING
  {
    level: 'N3', skill: 'Writing', lessonId: 'n3-writing-1', title: 'Formal Letters',
    content: {
      text: '拝啓 時下ますますご清栄のこととお慶び申し上げます。', furigana: 'はいけい じかますますごせいえいのこととおいわいもうしあげます。', meaning: 'Dear Sir/Madam, I hope this letter finds you well.',
      meaningMm: 'လေးစားအပ်သော လူကြီးမင်းထံ၊ ဤစာကို ကျန်းမာစွာ ရရှိပါစေလို့ ဆုတောင်းပါသည်။',
      explanation: 'Practice writing formal business letters.',
      explanationMm: 'စီးပွားရေးဆိုင်ရာ ယဉ်ကျေးစွာ စာရေးခြင်းကို လေ့ကျင့်ပါ။',
      exampleSentences: ['敬具', '謹白', '拝呈']
    }
  }
];
