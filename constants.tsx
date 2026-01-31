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
  }
];

// N4 Lessons - Intermediate Level
export const INITIAL_N4_LESSONS: Lesson[] = [
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
    level: 'N4', skill: 'Grammar', lessonId: 'n4-grammar-1', title: 'Past Tense ~ました',
    content: {
      text: '食べました。', furigana: 'たべました。', meaning: 'I ate.',
      meaningMm: 'စားခဲ့ပါသည်။',
      explanation: 'Adds ~ました to verb stems to indicate past tense.',
      explanationMm: 'ကြိယာအမြစ်များသို့ ~ました ကို ထည့်ပြီး အတိတ်ကြိယာကို ပြဆိုပါသည်။',
      exampleSentences: ['昨日、映画を見ました。', '朝ご飯を食べました。']
    }
  }
];

// N3 Lessons - Advanced Level
export const INITIAL_N3_LESSONS: Lesson[] = [
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
    level: 'N3', skill: 'Grammar', lessonId: 'n3-grammar-1', title: 'Conditional ~たら',
    content: {
      text: '雨が降ったら、傘を持って行きます。', furigana: 'あめがふったら、かさをもっていきます。', meaning: 'If it rains, I will take an umbrella.',
      meaningMm: 'မိုးရွာရင် ထီးယူသွားမယ်။',
      explanation: 'Conditional form indicating "if" situations.',
      explanationMm: '"ရင်" ဟူသော အခြေအနေကို ပြဆိုသော ကြိယာပုံစံ။',
      exampleSentences: ['時間がなかったら、電話します。', 'お金があったら、旅行に行きます。']
    }
  }
];
