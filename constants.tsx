import { JLPTLevel, SkillName, Lesson } from './types';

const lesson = (level: Lesson['level'], skill: Lesson['skill'], lessonId: string, title: string, text: string, furigana: string, meaning: string, meaningMm: string, explanation: string, explanationMm: string, exampleSentences: string[]): Lesson => ({ level, skill, lessonId, title, content: { text, furigana, meaning, meaningMm, explanation, explanationMm, exampleSentences } });

export const LEVELS: JLPTLevel[] = ['N5', 'N4', 'N3'];

export const SKILLS: { name: SkillName; icon: string; color: string }[] = [
  { name: 'Kana', icon: 'fa-font', color: 'bg-red-500' },
  { name: 'Kanji', icon: 'fa-characters', color: 'bg-red-600' },
  { name: 'Vocabulary', icon: 'fa-book', color: 'bg-red-700' },
  { name: 'Grammar', icon: 'fa-code-branch', color: 'bg-red-800' },
  { name: 'Listening', icon: 'fa-headphones', color: 'bg-red-500' },
  { name: 'Speaking', icon: 'fa-comment', color: 'bg-red-600' },
  { name: 'Reading', icon: 'fa-file-lines', color: 'bg-red-700' },
  { name: 'Writing', icon: 'fa-pen-nib', color: 'bg-red-800' },
];

// Extra lessons (all levels, all skills)
const EXTRA_N5_LESSONS: Lesson[] = [
  lesson('N5', 'Kana', 'n5-kana-t-1', 'Hiragana: た', 'た', 'た', 'Ta', 'တ', 'T sound with tongue against teeth.', 'လျှာကို သွားနှင့် ထိပြီး T အသံ။', ['たこ', 'たべる']),
  lesson('N5', 'Kana', 'n5-kana-t-2', 'Hiragana: ち', 'ち', 'ち', 'Chi', 'ချိ', 'Chi like "cheese".', '"ချီး" ကဲ့သို့။', ['ちち', 'ちず']),
  lesson('N5', 'Kana', 'n5-kana-h-1', 'Hiragana: は', 'は', 'は', 'Ha (wa as particle)', 'ဟ', 'Ha; as particle pronounced wa.', 'ပစ္စည်းအဖြစ် wa ထွက်သည်။', ['はな', 'こんにちは']),
  lesson('N5', 'Kana', 'n5-kana-m-1', 'Hiragana: ま', 'ま', 'ま', 'Ma', 'မ', 'M sound with lips closed.', 'နှုတ်ခမ်းပိတ်ပြီး M အသံ။', ['まめ', 'みかん']),
  lesson('N5', 'Kanji', 'n5-kanji-10', 'Big and Small', '大小', 'だいしょう', 'Big, Small', 'ကြီး၊ ငယ်', 'Basic size kanji.', 'အရွယ်အစား ခန်ဂျီ။', ['大きい', '小さい']),
  lesson('N5', 'Kanji', 'n5-kanji-11', 'Before and After', '前後', 'ぜんご', 'Before, After', 'အရင်၊ နောက်', 'Direction/time kanji.', 'အချိန်/ဦးတည်ရာ ခန်ဂျီ။', ['前', '後']),
  lesson('N5', 'Kanji', 'n5-kanji-12', 'New and Old', '新古', 'しんこ', 'New, Old', 'အသစ်၊ ဟောင်း', 'New and old things.', 'အသစ်နှင့် ဟောင်း ခန်ဂျီ။', ['新しい', '古い']),
  lesson('N5', 'Kanji', 'n5-kanji-13', 'Name and Book', '名書', 'めいしょ', 'Name, Book', 'နာမည်၊ စာအုပ်', 'Common N5 kanji.', 'N5 အသုံးများ ခန်ဂျီ။', ['名前', '本']),
  lesson('N5', 'Vocabulary', 'n5-vocab-9', 'Verbs: Eat and Drink', '食べる・飲む', 'たべる・のむ', 'To eat, To drink', 'စား၊ သောက်', 'Essential verbs.', 'အခြေခံကြိယာများ။', ['ご飯を食べます。', '水を飲みます。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-10', 'Verbs: Go and Come', '行く・来る', 'いく・くる', 'To go, To come', 'သွား၊ လာ', 'Movement verbs.', 'သွားလာကြိယာများ။', ['学校に行きます。', '日本に来ました。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-11', 'Verbs: See and Hear', '見る・聞く', 'みる・きく', 'To see, To hear', 'ကြည့်၊ နားထောင်', 'Sensory verbs.', 'အာရုံခံကြိယာများ။', ['テレビを見ます。', '音楽を聞きます。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-12', 'Adjectives: Good and Bad', '良い・悪い', 'よい・わるい', 'Good, Bad', 'ကောင်း၊ ဆိုး', 'Basic adjectives.', 'အခြေခံနာမဝိသေသန။', ['いい天気', '悪い人']),
  lesson('N5', 'Vocabulary', 'n5-vocab-13', 'Adjectives: Hot and Cold', '暑い・寒い', 'あつい・さむい', 'Hot, Cold', 'ပူ၊ အေး', 'Weather adjectives.', 'ရာသီဥတု နာမဝိသေသန။', ['今日は暑いです。', '冬は寒いです。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-14', 'Adjectives: Big and Small', '大きい・小さい', 'おおきい・ちいさい', 'Big, Small', 'ကြီး၊ ငယ်', 'Size adjectives.', 'အရွယ်အစား နာမဝိသေသန။', ['大きい家', '小さい犬']),
  lesson('N5', 'Grammar', 'n5-grammar-10', 'Particle で (Means)', '電車で行きます。', 'でんしゃでいきます。', 'I go by train.', 'ရထားနှင့် သွားပါသည်။', 'で indicates means or tool.', 'で သည် နည်းလမ်း/ကိရိယာကို ပြသည်။', ['バスで来ました。', 'はしで食べます。']),
  lesson('N5', 'Grammar', 'n5-grammar-11', 'Particle と (With)', '友達と遊びます。', 'ともだちとあそびます。', 'I play with my friend.', 'သူငယ်ချင်းနှင့် ကစားပါသည်။', 'と means "with" (companion).', 'と သည် "နှင့်အတူ" ကို ပြသည်။', ['家族と食事します。', '先生と話します。']),
  lesson('N5', 'Grammar', 'n5-grammar-12', 'Adjective + です', 'この部屋は広いです。', 'このへやはひろいです。', 'This room is spacious.', 'ဒီအခန်းသည် ကျယ်ပါသည်။', 'い-adjectives end in い before です.', 'い နာမဝိသေသနများ です မတိုင်မီ い နှင့် အဆုံးသတ်သည်။', ['美味しいです。', '静かです。']),
  lesson('N5', 'Grammar', 'n5-grammar-13', 'Want ～たい', '日本に行きたいです。', 'にほんにいきたいです。', 'I want to go to Japan.', 'ဂျပန်သို့ သွားချင်ပါသည်။', 'Verb stem + たい = want to.', 'ကြိယာအမြစ် + たい = လိုချင်။', ['寿司を食べたいです。', '映画を見たいです。']),
  lesson('N5', 'Listening', 'n5-listening-5', 'Shopping Phrases', 'いくらですか。千円です。', 'いくらですか。せんえんです。', 'How much? 1000 yen.', 'ဘယ်လောက်လဲ။ ယန်တစ်ထောင်။', 'Listen to price questions.', 'ဈေးနှုန်းမေးချက်များ နားထောင်ပါ။', ['いくらですか。', '五百円です。']),
  lesson('N5', 'Listening', 'n5-listening-6', 'Daily Questions', '今日は何曜日ですか。', 'きょうはなんようびですか。', 'What day is today?', 'ဒီနေ့ ဘယ်နေ့လဲ။', 'Listen to day/date questions.', 'နေ့/ရက်မေးချက်များ နားထောင်ပါ။', ['月曜日です。', '何日ですか。']),
  lesson('N5', 'Listening', 'n5-listening-7', 'Location Questions', 'トイレはどこですか。', 'といれはどこですか。', 'Where is the toilet?', 'အိမ်သာက ဘယ်မှာလဲ။', 'Listen to location questions.', 'နေရာမေးချက်များ နားထောင်ပါ။', ['あそこです。', '右に曲がってください。']),
  lesson('N5', 'Listening', 'n5-listening-8', 'Simple Responses', 'はい、そうです。いいえ、ちがいます。', 'はい、そうです。いいえ、ちがいます。', 'Yes, that\'s right. No, that\'s wrong.', 'ဟုတ်ပါတယ်။ မဟုတ်ပါ။', 'Listen to yes/no responses.', 'ဟုတ်/မဟုတ် အဖြေများ နားထောင်ပါ။', ['そうです。', 'ちがいます。']),
  lesson('N5', 'Speaking', 'n5-speaking-5', 'Stating Your Name', '私の名前は[名前]です。', 'わたしのなまえは[なまえ]です。', 'My name is [Name].', 'ကျွန်တော့်နာမည်က [အမည်] ပါ။', 'Practice stating your name.', 'နာမည်ပြောခြင်း လေ့ကျင့်ပါ။', ['山田です。', 'よろしく。']),
  lesson('N5', 'Speaking', 'n5-speaking-6', 'Counting Objects', 'りんごを三つください。', 'りんごをみっつください。', 'Three apples, please.', 'ပန်းသီး သုံးလုံး ပေးပါ။', 'Practice counter phrases.', 'အရေအတွက်ပြောခြင်း လေ့ကျင့်ပါ။', ['二つ', '五つ']),
  lesson('N5', 'Speaking', 'n5-speaking-7', 'Asking Permission', '写真を撮ってもいいですか。', 'しゃしんをとってもいいですか。', 'May I take a photo?', 'ဓာတ်ပုံ ရိုက်လို့ ရမလား။', 'Practice asking permission.', 'ခွင့်တောင်းခြင်း လေ့ကျင့်ပါ။', ['いいですよ。', 'すみません、だめです。']),
  lesson('N5', 'Speaking', 'n5-speaking-8', 'Thanking and Apologizing', 'ありがとうございます。すみません。', 'ありがとうございます。すみません。', 'Thank you. I\'m sorry.', 'ကျေးဇူးတင်ပါတယ်။ တောင်းပန်ပါတယ်။', 'Practice thanks and apologies.', 'ကျေးဇူးနှင့် တောင်းပန်ခြင်း လေ့ကျင့်ပါ။', ['どういたしまして。', '大丈夫です。']),
  lesson('N5', 'Reading', 'n5-reading-5', 'Short Notices', '開館時間は九時から五時までです。', 'かいかんじかんはくじからごじまでです。', 'Opening hours are 9 to 5.', 'ဖွင့်ချိန်သည် ၉ မှ ၅ ထိ။', 'Read short notices.', 'ကြေညာချက်တိုများ ဖတ်ပါ။', ['休みは日曜日です。', '入場無料']),
  lesson('N5', 'Reading', 'n5-reading-6', 'Menu Items', 'ラーメン 六百円 お茶 百円', 'らーめん ろっぴゃくえん おちゃ ひゃくえん', 'Ramen 600 yen, Tea 100 yen.', 'ရာမဲင် ၆၀၀ ယန်၊ လက်ဖက် ၁၀၀ ယန်။', 'Read simple menu text.', 'စာတိုများ ဖတ်ပါ။', ['定食', '水']),
  lesson('N5', 'Reading', 'n5-reading-7', 'Schedule Text', '月曜日は日本語の授業があります。', 'げつようびはにほんごのじゅぎょうがあります。', 'Monday has Japanese class.', 'တနင်္လာနေ့တွင် ဂျပန်စာ သင်ခန်းစာရှိသည်။', 'Read schedule sentences.', 'အချိန်ဇယား ဖတ်ပါ။', ['火曜日は休みです。', '授業は八時からです。']),
  lesson('N5', 'Reading', 'n5-reading-8', 'Short Description', 'これは私の部屋です。机とベッドがあります。', 'これはわたしのへやです。つくえとべっどがあります。', 'This is my room. There is a desk and bed.', 'ဒါ ကျွန်တော့်အခန်းပါ။ စားပွဲနဲ့ အိပ်ရာရှိပါတယ်။', 'Read short descriptions.', 'ဖော်ပြချက်တိုများ ဖတ်ပါ။', ['窓が大きいです。', '静かです。']),
  lesson('N5', 'Writing', 'n5-writing-7', 'Numbers 1-100', '一、二、三…百', 'いち、に、さん…ひゃく', 'One, two, three… hundred.', 'တစ်၊ နှစ်၊ သုံး… ရာ။', 'Practice writing number kanji.', 'နံပါတ်ခန်ဂျီ ရေးလေ့ကျင့်ပါ။', ['十', '五十']),
  lesson('N5', 'Writing', 'n5-writing-8', 'Days of Week', '月曜日、火曜日、水曜日', 'げつようび、かようび、すいようび', 'Monday, Tuesday, Wednesday.', 'တနင်္လာ၊ အင်္ဂါ၊ ဗုဒ္ဓဟူး။', 'Write days of the week.', 'အပတ်ရက်များ ရေးပါ။', ['木曜日', '金曜日']),
  lesson('N5', 'Writing', 'n5-writing-9', 'Simple Questions', '何時ですか。どこですか。', 'なんじですか。どこですか。', 'What time? Where?', 'ဘယ်နာရီလဲ။ ဘယ်မှာလဲ။', 'Write question sentences.', 'မေးခွန်းဝါကျများ ရေးပါ။', ['誰ですか。', 'いくらですか。']),
  lesson('N5', 'Writing', 'n5-writing-10', 'Short Paragraph', '私の一日。朝六時に起きます。朝ご飯を食べて、学校に行きます。', 'わたしのいちにち。あさろくじにおきます。あさごはんをたべて、がっこうにいきます。', 'My day. I wake at 6, eat breakfast, go to school.', 'ကျွန်တော့်တစ်နေ့။ ၆ နာရီနိုး၊ နံနက်စာစား၊ ကျောင်းသွား။', 'Write a short paragraph.', 'စာပိုဒ်တိုရေးပါ။', ['晩ご飯を食べます。', '十時に寝ます。']),
  lesson('N5', 'Kana', 'n5-kana-n-1', 'Hiragana: ぬ', 'ぬ', 'ぬ', 'Nu', 'နု', 'N + u sound.', 'N + အု အသံ။', ['ぬま', 'いぬ']),
  lesson('N5', 'Kana', 'n5-kana-r-1', 'Hiragana: ら', 'ら', 'ら', 'Ra', 'ရ', 'Light R, between L and R.', 'R ပျော့ပျောင်း။', ['らーめん', 'とら']),
  lesson('N5', 'Kanji', 'n5-kanji-14', 'Vehicle and Road', '車道', 'しゃどう', 'Car, Road', 'ကား၊ လမ်း', 'Transport kanji.', 'သယ်ယူပို့ဆောင်ရေး ခန်ဂျီ။', ['車', '道']),
  lesson('N5', 'Kanji', 'n5-kanji-15', 'Country and City', '国市', 'こくし', 'Country, City', 'နိုင်ငံ၊ မြို့', 'Place kanji.', 'နေရာ ခန်ဂျီ။', ['日本国', '東京市']),
  // Additional Kanji lessons for N5
  lesson('N5', 'Kanji', 'n5-kanji-extra-1', 'Kanji: 春', '春', 'はる', 'Spring', 'နွေ', 'Spring season.', 'နွေရာသီ။', ['春', '春休み']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-2', 'Kanji: 夏', '夏', 'なつ', 'Summer', 'နွေ', 'Summer season.', 'နွေရာသီ။', ['夏', '夏休み']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-3', 'Kanji: 秋', '秋', 'あき', 'Autumn', 'ဆောင်း', 'Autumn season.', 'ဆောင်းရာသီ။', ['秋', '秋祭り']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-4', 'Kanji: 冬', '冬', 'ふゆ', 'Winter', 'ဆောင်း', 'Winter season.', 'ဆောင်းရာသီ။', ['冬', '冬休み']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-5', 'Kanji: 東', '東', 'ひがし', 'East', 'အရှေ့', 'East direction.', 'အရှေ့ဦးတည်ရာ။', ['東', '東京']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-6', 'Kanji: 西', '西', 'にし', 'West', 'အနောက်', 'West direction.', 'အနောက်ဦးတည်ရာ။', ['西', '西口']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-7', 'Kanji: 南', '南', 'みなみ', 'South', 'တောင်', 'South direction.', 'တောင်ဦးတည်ရာ။', ['南', '南口']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-8', 'Kanji: 北', '北', 'きた', 'North', 'မြောက်', 'North direction.', 'မြောက်ဦးတည်ရာ။', ['北', '北海道']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-9', 'Kanji: 赤', '赤', 'あか', 'Red', 'အနီ', 'Red color.', 'အနီရောင်။', ['赤', '赤い']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-10', 'Kanji: 青', '青', 'あお', 'Blue', 'အပြာ', 'Blue color.', 'အပြာရောင်။', ['青', '青い']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-11', 'Kanji: 白', '白', 'しろ', 'White', 'အဖြူ', 'White color.', 'အဖြူရောင်။', ['白', '白い']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-12', 'Kanji: 黒', '黒', 'くろ', 'Black', 'အမည်း', 'Black color.', 'အမည်းရောင်။', ['黒', '黒い']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-13', 'Kanji: 緑', '緑', 'みどり', 'Green', 'အစိမ်း', 'Green color.', 'အစိမ်းရောင်။', ['緑', '緑茶']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-14', 'Kanji: 黄', '黄', 'き', 'Yellow', 'အဝါ', 'Yellow color.', 'အဝါရောင်။', ['黄', '黄色']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-15', 'Kanji: 紫', '紫', 'むらさき', 'Purple', 'ခရမ်း', 'Purple color.', 'ခရမ်းရောင်။', ['紫', '紫色']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-16', 'Kanji: 朝', '朝', 'あさ', 'Morning', 'နံနက်', 'Morning time.', 'နံနက်အချိန်။', ['朝', '朝ご飯']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-17', 'Kanji: 昼', '昼', 'ひる', 'Daytime', 'နေ့', 'Daytime.', 'နေ့အချိန်။', ['昼', '昼ご飯']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-18', 'Kanji: 夜', '夜', 'よる', 'Night', 'ည', 'Night time.', 'ညအချိန်။', ['夜', '夜ご飯']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-19', 'Kanji: 食', '食', 'しょく', 'Eat', 'စား', 'To eat.', 'စားခြင်း။', ['食事', '食べる']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-20', 'Kanji: 飲', '飲', 'いん', 'Drink', 'သောက်', 'To drink.', 'သောက်ခြင်း။', ['飲み物', '飲む']),
  lesson('N5', 'Vocabulary', 'n5-vocab-15', 'Weather Words', '晴れ・曇り・雨', 'はれ・くもり・あめ', 'Sunny, Cloudy, Rain', 'နေသာ၊ မိုးတိမ်၊ မိုး', 'Weather vocabulary.', 'ရာသီဥတု စကားလုံးများ။', ['今日は晴れです。', '明日は雨かもしれません。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-16', 'Body Parts', '頭・手・足', 'あたま・て・あし', 'Head, Hand, Foot', 'ဦးခေါင်း၊ လက်၊ ခြေထောက်', 'Basic body vocabulary.', 'ခန္ဓာကိုယ် စကားလုံးများ။', ['頭が痛いです。', '手を洗います。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-extra-1', 'Animals', '犬・猫・鳥', 'いぬ・ねこ・とり', 'Dog, Cat, Bird', 'ခွေး၊ ကြောင်၊ ငှက်', 'Common animals.', 'အသုံးများသော တိရစ္ဆာန်များ။', ['犬が好きです。', '猫を飼っています。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-extra-2', 'Food Items', 'パン・米・肉', 'ぱん・こめ・にく', 'Bread, Rice, Meat', 'ပေါင်မုန့်၊ ဆန်၊ အသား', 'Basic food vocabulary.', 'အခြေခံ အစားအသောက် စကားလုံးများ။', ['パンを食べます。', '米を炊きます。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-extra-3', 'Colors Extended', '赤・青・緑・黄', 'あか・あお・みどり・き', 'Red, Blue, Green, Yellow', 'အနီ၊ အပြာ၊ အစိမ်း၊ အဝါ', 'More color words.', 'အရောင်စကားလုံးများ ထပ်မံ။', ['赤い車', '青い空']),
  lesson('N5', 'Vocabulary', 'n5-vocab-extra-4', 'Family Extended', '父・母・兄・姉', 'ちち・はは・あに・あね', 'Father, Mother, Brother, Sister', 'အဖေ၊ အမေ၊ အစ်ကို၊ အစ်မ', 'Extended family terms.', 'မိသားစု စကားလုံးများ ထပ်မံ။', ['父は会社員です。', '姉がいます。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-extra-5', 'Time Expressions', '今・昨日・明日', 'いま・きのう・あした', 'Now, Yesterday, Tomorrow', 'အခု၊ မနေ့က၊ မနက်ဖြန်', 'Time-related words.', 'အချိန်ဆိုင်ရာ စကားလုံးများ။', ['今勉強しています。', '昨日雨でした。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-extra-6', 'Places', '家・学校・会社', 'いえ・がっこう・かいしゃ', 'Home, School, Company', 'အိမ်၊ ကျောင်း၊ ကုမ္ပဏီ', 'Common places.', 'အသုံးများသော နေရာများ။', ['家にいます。', '学校に行きます。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-extra-7', 'Numbers', '一・二・三・四・五', 'いち・に・さん・し・ご', 'One, Two, Three, Four, Five', 'တစ်၊ နှစ်၊ သုံး၊ လေး၊ ငါး', 'Basic numbers.', 'အခြေခံ နံပါတ်များ။', ['一つあります。', '二人が来ました。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-extra-8', 'Adjectives', '大きい・小さい・新しい', 'おおきい・ちいさい・あたらしい', 'Big, Small, New', 'ကြီး၊ ငယ်၊ အသစ်', 'Common adjectives.', 'အသုံးများသော နာမဝိသေသန။', ['大きい家', '新しい車']),
  lesson('N5', 'Vocabulary', 'n5-vocab-extra-9', 'Verbs', '食べる・飲む・見る', 'たべる・のむ・みる', 'Eat, Drink, See', 'စား၊ သောက်၊ ကြည့်', 'Basic verbs.', 'အခြေခံ ကြိယာများ။', ['ご飯を食べます。', '水を飲みます。']),
  lesson('N5', 'Vocabulary', 'n5-vocab-extra-10', 'Greetings', 'こんにちは・ありがとう・すみません', 'こんにちは・ありがとう・すみません', 'Hello, Thank you, Excuse me', 'မင်္ဂလာနေ့ခင်းပါ၊ ကျေးဇူးတင်ပါတယ်၊ တစ်ဆိတ်လောက်', 'Essential greetings.', 'အရေးကြီးသော နှုတ်ဆက်စကားများ။', ['こんにちは。', 'ありがとうございます。']),
  lesson('N5', 'Grammar', 'n5-grammar-14', 'Particle も (Also)', '私も学生です。', 'わたしもがくせいです。', 'I am also a student.', 'ကျွန်တော်လည်း ကျောင်းသား ဖြစ်ပါသည်။', 'も = also, too.', 'も = လည်း၊ ပါ။', ['彼も日本人です。', '今日も忙しいです。']),
  lesson('N5', 'Grammar', 'n5-grammar-15', 'Particle から (From)', '九時から五時まで働きます。', 'くじからごじまではたらきます。', 'I work from 9 to 5.', '၉ မှ ၅ ထိ အလုပ်လုပ်ပါသည်။', 'から = from (start).', 'から = မှ (စတင်)।', ['月曜日から金曜日まで', '家から学校まで']),
  lesson('N5', 'Grammar', 'n5-grammar-extra-1', 'Particle で (At/With)', '学校で勉強します。', 'がっこうでべんきょうします。', 'I study at school.', 'ကျောင်းတွင် စာကျက်ပါသည်။', 'で indicates location of action.', 'で သည် လုပ်ဆောင်ချက်၏ နေရာကို ပြသည်။', ['電車で来ました。', 'ペンで書きます。']),
  lesson('N5', 'Grammar', 'n5-grammar-extra-2', 'Particle と (And)', '友達と遊びます。', 'ともだちとあそびます。', 'I play with friends.', 'သူငယ်ချင်းများနှင့် ကစားပါသည်။', 'と means "with" or "and".', 'と သည် "နှင့်" သို့မဟုတ် "နှင့်အတူ" ကို ဆိုလိုသည်။', ['パンと牛乳を買いました。', '母と買い物に行きます。']),
  lesson('N5', 'Grammar', 'n5-grammar-extra-3', 'Particle へ (To)', '学校へ行きます。', 'がっこうへいきます。', 'I go to school.', 'ကျောင်းသို့ သွားပါသည်။', 'へ indicates direction.', 'へ သည် ဦးတည်ရာကို ပြသည်။', ['東京へ行きます。', '家へ帰ります。']),
  lesson('N5', 'Grammar', 'n5-grammar-extra-4', 'Question Words', '何を食べますか。', 'なにをたべますか。', 'What do you eat?', 'ဘာစားပါသလား။', 'Practice question formation.', 'မေးခွန်းပုံစံ လေ့ကျင့်ပါ။', ['誰が来ますか。', 'どこに行きますか。']),
  lesson('N5', 'Grammar', 'n5-grammar-extra-5', 'Negative Form', '食べません。', 'たべません。', 'I don\'t eat.', 'စားမည် မဟုတ်ပါ။', 'Negative of verbs.', 'ကြိယာများ၏ ငြင်းပယ်ပုံစံ။', ['飲みません。', '行きません。']),
  lesson('N5', 'Grammar', 'n5-grammar-extra-6', 'Past Tense', '食べました。', 'たべました。', 'I ate.', 'စားခဲ့ပါသည်။', 'Past form of verbs.', 'ကြိယာများ၏ အတိတ်ပုံစံ။', ['飲みました。', '行きました。']),
  lesson('N5', 'Grammar', 'n5-grammar-extra-7', 'Adjective + です', '美味しいです。', 'おいしいです。', 'It\'s delicious.', 'အရသာရှိပါသည်။', 'い-adjectives with です.', 'い နာမဝိသေသနများနှင့် です။', ['大きいです。', '小さいです。']),
  lesson('N5', 'Grammar', 'n5-grammar-extra-8', 'な-adjectives', 'きれいです。', 'きれいです。', 'It\'s beautiful.', 'လှပါသည်။', 'な-adjectives usage.', 'な နာမဝိသေသနများ အသုံးပြုခြင်း။', ['静かです。', '好きです。']),
  lesson('N5', 'Grammar', 'n5-grammar-extra-9', 'Want to ~ たい', '食べたいです。', 'たべたいです。', 'I want to eat.', 'စားချင်ပါသည်။', 'Expressing desire.', 'ဆန္ဒကို ဖော်ပြခြင်း။', ['見たいです。', '行きたいです。']),
  lesson('N5', 'Grammar', 'n5-grammar-extra-10', 'Time Expressions', '毎日勉強します。', 'まいにちべんきょうします。', 'I study every day.', 'နေ့စဉ် စာကျက်ပါသည်။', 'Adverbs of time.', 'အချိန်ပြ ပြနာကြိယာများ။', ['今勉強しています。', '昨日雨でした。']),
  lesson('N5', 'Listening', 'n5-listening-9', 'Family Introduction', 'これは私の母です。', 'これはわたしのははです。', 'This is my mother.', 'ဒါ ကျွန်တော့်အမေ ပါ။', 'Listen to family introductions.', 'မိသားစုမိတ်ဆက်ချက်များ နားထောင်ပါ။', ['父は会社員です。', '兄弟は二人います。']),
  lesson('N5', 'Listening', 'n5-listening-10', 'Ordering at Cafe', 'コーヒーを二つお願いします。', 'こーひーをふたつおねがいします。', 'Two coffees, please.', 'ကော်ဖီ နှစ်ခွက် ပေးပါ။', 'Listen to cafe orders.', 'ကော်ဖီဆိုင်မှာယူချက်များ နားထောင်ပါ။', ['アイスとホット', 'お会計']),
  lesson('N5', 'Listening', 'n5-listening-extra-1', 'Greetings Dialogue', 'こんにちは。お元気ですか。', 'こんにちは。おげんきですか。', 'Hello. How are you?', 'မင်္ဂလာနေ့ခင်းပါ။ ကျန်းမာပါသလား။', 'Listen to basic greetings.', 'အခြေခံ နှုတ်ဆက်စကားများ နားထောင်ပါ။', ['こんにちは。', 'はい、元気です。']),
  lesson('N5', 'Listening', 'n5-listening-extra-2', 'Numbers Practice', '一、二、三、四、五', 'いち、に、さん、し、ご', 'One, two, three, four, five.', 'တစ်၊ နှစ်၊ သုံး၊ လေး၊ ငါး။', 'Listen to numbers.', 'နံပါတ်များ နားထောင်ပါ။', ['いくつですか。', '五つあります。']),
  lesson('N5', 'Listening', 'n5-listening-extra-3', 'Time Telling', '今何時ですか。', 'いまなんじですか。', 'What time is it now?', 'အခု ဘယ်နာရီလဲ။', 'Listen to time questions.', 'အချိန်မေးချက်များ နားထောင်ပါ။', ['三時です。', '四時半です。']),
  lesson('N5', 'Listening', 'n5-listening-extra-4', 'Directions', '駅はどこですか。', 'えきはどこですか。', 'Where is the station?', 'ဘူတာရုံ ဘယ်မှာလဲ။', 'Listen to location questions.', 'နေရာမေးချက်များ နားထောင်ပါ။', ['あそこです。', '右に曲がってください。']),
  lesson('N5', 'Listening', 'n5-listening-extra-5', 'Shopping', 'いくらですか。', 'いくらですか。', 'How much?', 'ဘယ်လောက်လဲ။', 'Listen to price inquiries.', 'ဈေးနှုန်းမေးချက်များ နားထောင်ပါ။', ['五百円です。', '千円です。']),
  lesson('N5', 'Listening', 'n5-listening-extra-6', 'Family Talk', '家族は何人ですか。', 'かぞくはなんにんですか。', 'How many people in your family?', 'မိသားစု ဘယ်နှစ်ယောက်လဲ။', 'Listen to family discussions.', 'မိသားစု ဆွေးနွေးချက်များ နားထောင်ပါ။', ['四人です。', '父と母と私です。']),
  lesson('N5', 'Listening', 'n5-listening-extra-7', 'Weather', '今日は晴れです。', 'きょうははれです。', 'Today is sunny.', 'ဒီနေ့ နေသာသော ရက်ဖြစ်ပါသည်။', 'Listen to weather reports.', 'ရာသီဥတု အစီရင်ခံစာများ နားထောင်ပါ။', ['明日も晴れです。', '雨が降っています。']),
  lesson('N5', 'Listening', 'n5-listening-extra-8', 'Hobbies', '趣味は何ですか。', 'しゅみはなんですか。', 'What is your hobby?', 'ဝါသနာ ဘာလဲ။', 'Listen to hobby discussions.', 'ဝါသနာ ဆွေးနွေးချက်များ နားထောင်ပါ။', ['音楽です。', 'スポーツです。']),
  lesson('N5', 'Listening', 'n5-listening-extra-9', 'Food Orders', '何を食べますか。', 'なにをたべますか。', 'What do you eat?', 'ဘာစားပါသလား။', 'Listen to food choices.', 'အစားအသောက် ရွေးချယ်မှုများ နားထောင်ပါ။', ['寿司を食べます。', 'ラーメンを食べます。']),
  lesson('N5', 'Listening', 'n5-listening-extra-10', 'Transportation', '電車で来ました。', 'でんしゃできてました。', 'I came by train.', 'ရထားနှင့် လာခဲ့ပါသည်။', 'Listen to transport methods.', 'သယ်ယူပို့ဆောင်ရေး နည်းလမ်းများ နားထောင်ပါ။', ['バスで来ました。', 'タクシーで来ました。']),
  lesson('N5', 'Speaking', 'n5-speaking-9', 'Stating Hobbies', '趣味は読書です。', 'しゅみはどくしょです。', 'My hobby is reading.', 'ကျွန်တော့်ဝါသနာက စာဖတ်ခြင်း ပါ။', 'Practice stating hobbies.', 'ဝါသနာပြောခြင်း လေ့ကျင့်ပါ။', ['音楽を聞くことです。', 'スポーツです。']),
  lesson('N5', 'Speaking', 'n5-speaking-10', 'Asking How Much', 'これはいくらですか。', 'これはいくらですか。', 'How much is this?', 'ဒါ ဘယ်လောက်လဲ။', 'Practice asking prices.', 'ဈေးနှုန်းမေးခြင်း လေ့ကျင့်ပါ။', ['千円です。', '高いですね。']),
  lesson('N5', 'Speaking', 'n5-speaking-extra-1', 'Self Introduction', '私は[名前]です。', 'わたしは[なまえ]です。', 'I am [Name].', 'ကျွန်တော်သည် [အမည်] ဖြစ်ပါသည်။', 'Practice introducing yourself.', 'မိတ်ဆက်ခြင်း လေ့ကျင့်ပါ။', ['よろしくお願いします。', '初めまして。']),
  lesson('N5', 'Speaking', 'n5-speaking-extra-2', 'Asking Directions', 'すみません、駅はどこですか。', 'すみません、えきはどこですか。', 'Excuse me, where is the station?', 'တစ်ဆိတ်လောက်၊ ဘူတာရုံ ဘယ်မှာလဲ။', 'Practice asking for directions.', 'လမ်းညွှန်မေးခြင်း လေ့ကျင့်ပါ။', ['あそこです。', '右に曲がってください。']),
  lesson('N5', 'Speaking', 'n5-speaking-extra-3', 'Ordering Food', 'これをください。', 'これをください。', 'This one, please.', 'ဒီတစ်ခုကို ပေးပါ။', 'Practice ordering items.', 'မှာယူခြင်း လေ့ကျင့်ပါ။', ['いくらですか。', 'ありがとうございます。']),
  lesson('N5', 'Speaking', 'n5-speaking-extra-4', 'Talking About Hobbies', '趣味はスポーツです。', 'しゅみはすぽーつです。', 'My hobby is sports.', 'ကျွန်တော့်ဝါသနာက အားကစား ပါ။', 'Practice talking about hobbies.', 'ဝါသနာ ပြောခြင်း လေ့ကျင့်ပါ။', ['何が好きですか。', '音楽が好きです。']),
  lesson('N5', 'Speaking', 'n5-speaking-extra-5', 'Describing Family', '家族は四人です。', 'かぞくはよにんです。', 'My family has four people.', 'မိသားစု လေးယောက်ရှိပါသည်။', 'Practice describing family.', 'မိသားစု ဖော်ပြခြင်း လေ့ကျင့်ပါ။', ['父と母と私です。', '兄弟がいます。']),
  lesson('N5', 'Speaking', 'n5-speaking-extra-6', 'Expressing Likes', '寿司が好きです。', 'すしがすきです。', 'I like sushi.', 'စူရှီကို ကြိုက်ပါသည်။', 'Practice expressing preferences.', 'ဦးစားပေးခြင်း ဖော်ပြခြင်း လေ့ကျင့်ပါ။', ['何が好きですか。', 'ラーメンが好きです。']),
  lesson('N5', 'Speaking', 'n5-speaking-extra-7', 'Talking About Weather', '今日は暑いです。', 'きょうはあついです。', 'Today is hot.', 'ဒီနေ့ ပူပါသည်။', 'Practice weather conversations.', 'ရာသီဥတု စကားပြောဆိုမှု လေ့ကျင့်ပါ။', ['明日は雨です。', '寒いです。']),
  lesson('N5', 'Speaking', 'n5-speaking-extra-8', 'Making Plans', '明日、映画を見ます。', 'あした、えいがをみます。', 'Tomorrow, I will watch a movie.', 'မနက်ဖြန် ရုပ်ရှင်ကြည့်မည်။', 'Practice talking about plans.', 'အစီအစဉ်များ ပြောခြင်း လေ့ကျင့်ပါ။', ['一緒にどうですか。', '何をしますか。']),
  lesson('N5', 'Speaking', 'n5-speaking-extra-9', 'Apologizing', 'すみません。', 'すみません。', 'I\'m sorry.', 'တောင်းပန်ပါတယ်။', 'Practice apologies.', 'တောင်းပန်ခြင်း လေ့ကျင့်ပါ။', ['ごめんなさい。', '申し訳ありません。']),
  lesson('N5', 'Speaking', 'n5-speaking-extra-10', 'Thanking', 'ありがとうございます。', 'ありがとうございます。', 'Thank you very much.', 'ကျေးဇူးတင်ပါတယ်။', 'Practice expressions of thanks.', 'ကျေးဇူးတင်ခြင်း ဖော်ပြခြင်း လေ့ကျင့်ပါ။', ['どういたしまして。', 'ありがとう。']),
  lesson('N5', 'Reading', 'n5-reading-9', 'Weather Report', '明日は曇りのち雨です。', 'あしたはくもりのちあめです。', 'Tomorrow cloudy then rain.', 'မနက်ဖြန် မိုးတိမ်ပြီး နောက်မိုး။', 'Read weather phrases.', 'ရာသီဥတုစာတိုများ ဖတ်ပါ။', ['気温は二十五度', '傘を持って行ってください']),
  lesson('N5', 'Reading', 'n5-reading-10', 'Simple Ads', '大売り出し！半額！', 'おおうりだし！はんがく！', 'Big sale! Half price!', 'အကြီးစား လျှော့ဈေး။ အခြမ်း။', 'Read simple advertisements.', 'ကြော်ငြာတိုများ ဖတ်ပါ။', ['本日のみ', 'お得']),
  lesson('N5', 'Reading', 'n5-reading-extra-1', 'Short Stories', '昔々、あるところに、おじいさんと、おばあさんが住んでいました。', 'むかしむかし、あるところに、おじいさんと、おばあさんがすんでいました。', 'Once upon a time, there lived an old man and an old woman.', 'ရှေးရှေး အချိန်က အဘိုးကြီးနှင့် အဘွားကြီး နေထိုင်ခဲ့ကြသည်။', 'Read short fairy tale beginnings.', 'ပုံပြင်တိုများ ဖတ်ပါ။', ['森の中で', '幸せに暮らしました']),
  lesson('N5', 'Reading', 'n5-reading-extra-2', 'News Headlines', '政府、新政策を発表。', 'せいふ、しんせいさくをはっぴょう。', 'Government announces new policy.', 'အစိုးရ မူဝါဒအသစ် ကြေညာသည်။', 'Read news headlines.', 'သတင်းခေါင်းစဉ်များ ဖတ်ပါ။', ['経済成長', '環境問題']),
  lesson('N5', 'Reading', 'n5-reading-extra-3', 'Instructions', '電源を入れて、スタートボタンを押してください。', 'でんげんをいれて、すたーとぼたんをおしてください。', 'Turn on the power and press the start button.', 'ပါဝါဖွင့်ပြီး စတင်ခလုတ်နှိပ်ပါ။', 'Read simple instructions.', 'ညွှန်ကြားချက်တိုများ ဖတ်ပါ။', ['注意してください', '安全第一']),
  lesson('N5', 'Reading', 'n5-reading-extra-4', 'Emails', 'こんにちは。明日の会議についてお知らせします。', 'こんにちは。あしたのかいぎについておしらせします。', 'Hello. I will inform you about tomorrow\'s meeting.', 'မင်္ဂလာနေ့ခင်းပါ။ မနက်ဖြန် အစည်းအဝေးအကြောင်း အသိပေးပါမည်။', 'Read short email content.', 'အီးမေးလ်တိုများ ဖတ်ပါ။', ['よろしくお願いします', 'お疲れ様です']),
  lesson('N5', 'Reading', 'n5-reading-extra-5', 'Recipes', '材料：米二合、水二合。作り方：米を洗って、水を入れて炊く。', 'ざいりょう：こめにごう、みずにごう。つくりかた：こめをあらって、みずをいれてたく。', 'Ingredients: 2 cups rice, 2 cups water. Method: Wash rice, add water, cook.', 'ပါဝင်ပစ္စည်း ဆန် ၂ ခွက်၊ ရေ ၂ ခွက်။ ပြုလုပ်နည်း ဆန်ဆေးပြီး ရေထည့်ပြီး ပြုတ်ပါ။', 'Read simple recipes.', 'ဟင်းချက်နည်းတိုများ ဖတ်ပါ။', ['塩を少々', '完成です']),
  lesson('N5', 'Reading', 'n5-reading-extra-6', 'Schedules', '月曜日：学校 火曜日：買い物 水曜日：休み', 'げつようび：がっこう かようび：かいもの すいようび：やすみ', 'Monday: School Tuesday: Shopping Wednesday: Rest', 'တနင်္လာ ကျောင်း အင်္ဂါ ဈေးဝယ် ဗုဒ္ဓဟူး နားရက်', 'Read weekly schedules.', 'အပတ်စဉ် ဇယားများ ဖတ်ပါ။', ['木曜日：映画', '金曜日：友達と']),
  lesson('N5', 'Reading', 'n5-reading-extra-7', 'Weather Reports', '明日は晴れ時々曇りです。', 'あしたははれときどきくもりです。', 'Tomorrow will be sunny with occasional clouds.', 'မနက်ဖြန် နေသာပြီး ခဏခဏ မိုးတိမ်ပါမည်။', 'Read weather forecasts.', 'ရာသီဥတု ခန့်မှန်းချက်များ ဖတ်ပါ။', ['気温は二十度', '傘を持って行ってください']),
  lesson('N5', 'Reading', 'n5-reading-extra-8', 'Product Reviews', 'この本はとても面白いです。', 'このほんはとてもおもしろいです。', 'This book is very interesting.', 'ဒီစာအုပ်သည် အလွန်စိတ်ဝင်စားဖွယ် ဖြစ်ပါသည်။', 'Read product reviews.', 'ထုတ်ကုန် သုံးသပ်ချက်များ ဖတ်ပါ။', ['おすすめです', '買ってよかったです']),
  lesson('N5', 'Reading', 'n5-reading-extra-9', 'Menus', 'ラーメン 800円 寿司 1200円', 'らーめん 800えん すし 1200えん', 'Ramen 800 yen, Sushi 1200 yen.', 'ရာမဲင် ၈၀၀ ယန် စူရှီ ၁၂၀၀ ယန်။', 'Read restaurant menus.', 'စားသောက်ဆိုင် စာတိုများ ဖတ်ပါ။', ['おすすめ', 'セットメニュー']),
  lesson('N5', 'Reading', 'n5-reading-extra-10', 'Travel Guides', '東京タワーは東京のシンボルです。', 'とうきょうたわーはとうきょうのしんぼるです。', 'Tokyo Tower is Tokyo\'s symbol.', 'တိုကျိုတိုးတာသည် တိုကျိုတိုး၏ သင်္ကေတ ဖြစ်ပါသည်။', 'Read travel information.', 'ခရီးသွား သတင်းအချက်အလက်များ ဖတ်ပါ။', ['観光スポット', 'アクセス方法']),
  lesson('N5', 'Writing', 'n5-writing-11', 'Family Words', '父、母、兄、姉、弟、妹', 'ちち、はは、あに、あね、おとうと、いもうと', 'Father, Mother, Brother, Sister, Younger brother, Younger sister.', 'အဖေ၊ အမေ၊ အစ်ကို၊ အစ်မ၊ ညီ၊ ညီမ။', 'Write family kanji/kana.', 'မိသားစုစကားလုံးများ ရေးပါ။', ['家族', '何人']),
  lesson('N5', 'Writing', 'n5-writing-12', 'Shopping List', '牛乳、パン、卵、野菜', 'ぎゅうにゅう、ぱん、たまご、やさい', 'Milk, Bread, Eggs, Vegetables.', 'နို့၊ ပေါင်မုန့်၊ ကြက်ဥ၊ ဟင်းသီးဟင်းရွက်။', 'Write a shopping list.', 'ဈေးဝယ်စာရင်း ရေးပါ။', ['果物', '肉']),
  lesson('N5', 'Writing', 'n5-writing-extra-1', 'Diary Entry', '今日は学校に行きました。友達に会いました。', 'きょうはがっこうにいきました。ともだちにあいました。', 'Today I went to school. I met my friend.', 'ဒီနေ့ ကျောင်းသွားခဲ့သည်။ သူငယ်ချင်းနှင့် တွေ့ခဲ့သည်။', 'Write a simple diary entry.', 'ရက်စဉ်မှတ်တမ်းတိုရေးပါ။', ['楽しかったです', '明日も']),
  lesson('N5', 'Writing', 'n5-writing-extra-2', 'Postcard', '東京からお土産を買いました。', 'とうきょうからおみやげをかいました。', 'I bought souvenirs from Tokyo.', 'တိုကျိုတိုးမှ လက်ဆောင်ဝယ်ခဲ့သည်။', 'Write a short postcard.', 'ကတ်ပြားတိုရေးပါ။', ['元気です', 'また来ます']),
  lesson('N5', 'Writing', 'n5-writing-extra-3', 'Thank-you Note', 'プレゼント、ありがとうございます。', 'ぷれぜんと、ありがとうございます。', 'Thank you for the present.', 'လက်ဆောင် ကျေးဇူးတင်ပါသည်။', 'Write a thank-you note.', 'ကျေးဇူးတင်စာရေးပါ။', ['とても嬉しいです', '大切にします']),
  lesson('N5', 'Writing', 'n5-writing-extra-4', 'Invitation', 'パーティーに来てください。', 'ぱーてぃーにきてください。', 'Please come to the party.', 'ပါတီသို့ လာပေးပါ။', 'Write a party invitation.', 'ဖိတ်စာရေးပါ။', ['日曜日です', '楽しみにしています']),
  lesson('N5', 'Writing', 'n5-writing-extra-5', 'Excuse Note', '今日は風邪で学校を休みます。', 'きょうはかぜでがっこうをやすみます。', 'Today I\'m absent from school due to a cold.', 'ဒီနေ့ ကျောင်းနားရက်ယူသည်။ နှာစေးကြောင့်။', 'Write an excuse note.', 'အကြောင်းပြစာရေးပါ။', ['すみません', '明日から行きます']),
  lesson('N5', 'Writing', 'n5-writing-extra-6', 'Recipe Note', '材料：卵二個、牛乳一杯。', 'ざいりょう：たまごにこ、ぎゅうにゅういっぱい。', 'Ingredients: Two eggs, one cup milk.', 'ပါဝင်ပစ္စည်း ကြက်ဥနှစ်လုံး၊ နို့တစ်ခွက်။', 'Write a recipe note.', 'ဟင်းချက်နည်းမှတ်စာရေးပါ။', ['混ぜて', '焼いてください']),
  lesson('N5', 'Writing', 'n5-writing-extra-7', 'Schedule', '朝七時に起きます。夜十時に寝ます。', 'あさしちじにおきます。よるじゅうじにねます。', 'I wake up at 7 a.m. I sleep at 10 p.m.', 'နံနက် ၇ နာရီ နိုးပါသည်။ ည ၁၀ နာရီ အိပ်ပါသည်။', 'Write a daily schedule.', 'နေ့စဉ်ဇယားရေးပါ။', ['学校に行きます', '勉強します']),
  lesson('N5', 'Writing', 'n5-writing-extra-8', 'Opinion', '日本料理が好きです。', 'にほんりょうりがすきです。', 'I like Japanese food.', 'ဂျပန်ဟင်းကို ကြိုက်ပါသည်။', 'Write your opinion.', 'အမြင်ရေးပါ။', ['美味しいです', 'おすすめです']),
  lesson('N5', 'Writing', 'n5-writing-extra-9', 'Description', '私の部屋は広いです。', 'わたしのへやはひろいです。', 'My room is spacious.', 'ကျွန်တော့်အခန်းသည် ကျယ်ပါသည်။', 'Write a description.', 'ဖော်ပြချက်ရေးပါ။', ['窓があります', 'きれいです']),
  lesson('N5', 'Writing', 'n5-writing-extra-10', 'Request', '手伝ってください。', 'てつだってください。', 'Please help me.', 'ကူညီပေးပါ။', 'Write a request.', 'တောင်းဆိုချက်ရေးပါ။', ['ありがとう', 'よろしくお願いします']),
  // Additional Kana lessons for N5
  lesson('N5', 'Kana', 'n5-kana-extra-1', 'Hiragana: さ', 'さ', 'さ', 'Sa', 'စ', 'S sound with tongue close to teeth.', 'လျှာကို သွားနှင့် နီးစပ်စွာ ထားပြီး S အသံ။', ['さくら', 'さけ']),
  lesson('N5', 'Kana', 'n5-kana-extra-2', 'Hiragana: し', 'し', 'し', 'Shi', 'ရှိ', 'Shi like "she".', '"ရှဲ" ကဲ့သို့။', ['しお', 'しんぶん']),
  lesson('N5', 'Kana', 'n5-kana-extra-3', 'Hiragana: す', 'す', 'す', 'Su', 'စု', 'Su sound.', 'စု အသံ။', ['すし', 'すいか']),
  lesson('N5', 'Kana', 'n5-kana-extra-4', 'Hiragana: せ', 'せ', 'せ', 'Se', 'စဲ', 'Se sound.', 'စဲ အသံ။', ['せんせい', 'せかい']),
  lesson('N5', 'Kana', 'n5-kana-extra-5', 'Hiragana: そ', 'そ', 'そ', 'So', 'စို', 'So sound.', 'စို အသံ။', ['そら', 'そば']),
  lesson('N5', 'Kana', 'n5-kana-extra-6', 'Hiragana: ざ', 'ざ', 'ざ', 'Za', 'ဇ', 'Z sound.', 'ဇ အသံ။', ['ざっか', 'ざんぎょう']),
  lesson('N5', 'Kana', 'n5-kana-extra-7', 'Hiragana: じ', 'じ', 'じ', 'Ji', 'ဂျိ', 'Ji sound.', 'ဂျိ အသံ။', ['じかん', 'じしょ']),
  lesson('N5', 'Kana', 'n5-kana-extra-8', 'Hiragana: ず', 'ず', 'ず', 'Zu', 'ဇု', 'Zu sound.', 'ဇု အသံ။', ['ずかん', 'ずぼん']),
  lesson('N5', 'Kana', 'n5-kana-extra-9', 'Hiragana: ぜ', 'ぜ', 'ぜ', 'Ze', 'ဇဲ', 'Ze sound.', 'ဇဲ အသံ။', ['ぜんぶ', 'ぜったい']),
  lesson('N5', 'Kana', 'n5-kana-extra-10', 'Hiragana: ぞ', 'ぞ', 'ぞ', 'Zo', 'ဇို', 'Zo sound.', 'ဇို အသံ။', ['ぞう', 'ぞんざい']),
  lesson('N5', 'Kana', 'n5-kana-extra-11', 'Hiragana: だ', 'だ', 'だ', 'Da', 'ဒ', 'D sound.', 'ဒ အသံ။', ['だいがく', 'だんご']),
  lesson('N5', 'Kana', 'n5-kana-extra-12', 'Hiragana: ぢ', 'ぢ', 'ぢ', 'Ji (di)', 'ဂျိ', 'Ji sound.', 'ဂျိ အသံ။', ['ぢかん', 'ぢしょ']),
  lesson('N5', 'Kana', 'n5-kana-extra-13', 'Hiragana: づ', 'づ', 'づ', 'Zu (du)', 'ဇု', 'Zu sound.', 'ဇု အသံ။', ['づかん', 'づぼん']),
  lesson('N5', 'Kana', 'n5-kana-extra-14', 'Hiragana: で', 'で', 'で', 'De', 'ဒဲ', 'De sound.', 'ဒဲ အသံ။', ['でんわ', 'でんしゃ']),
  lesson('N5', 'Kana', 'n5-kana-extra-15', 'Hiragana: ど', 'ど', 'ど', 'Do', 'ဒို', 'Do sound.', 'ဒို အသံ။', ['どうぶつ', 'どうぞ']),
  lesson('N5', 'Kana', 'n5-kana-extra-16', 'Hiragana: ば', 'ば', 'ば', 'Ba', 'ဘ', 'B sound.', 'ဘ အသံ။', ['ばんごはん', 'ばす']),
  lesson('N5', 'Kana', 'n5-kana-extra-17', 'Hiragana: び', 'び', 'び', 'Bi', 'ဘိ', 'Bi sound.', 'ဘိ အသံ။', ['びょういん', 'びん']),
  lesson('N5', 'Kana', 'n5-kana-extra-18', 'Hiragana: ぶ', 'ぶ', 'ぶ', 'Bu', 'ဘု', 'Bu sound.', 'ဘု အသံ။', ['ぶどう', 'ぶんか']),
  lesson('N5', 'Kana', 'n5-kana-extra-19', 'Hiragana: べ', 'べ', 'べ', 'Be', 'ဘဲ', 'Be sound.', 'ဘဲ အသံ။', ['べんきょう', 'べんとう']),
  lesson('N5', 'Kana', 'n5-kana-extra-20', 'Hiragana: ぼ', 'ぼ', 'ぼ', 'Bo', 'ဘို', 'Bo sound.', 'ဘို အသံ။', ['ぼうし', 'ぼく']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-22', 'Kanji: 見', '見', 'み', 'See', 'ကြည့်', 'To see or look.', 'ကြည့်ခြင်း သို့မဟုတ် မြင်ခြင်း။', ['見ます', '見えます']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-23', 'Kanji: 聞', '聞', 'き', 'Hear', 'ကြား', 'To hear or listen.', 'ကြားခြင်း သို့မဟုတ် နားထောင်ခြင်း။', ['聞きます', '聞こえます']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-24', 'Kanji: 話', '話', 'はな', 'Talk', 'ပြော', 'To speak or talk.', 'ပြောခြင်း သို့မဟုတ် စကားပြောခြင်း။', ['話します', '話せます']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-25', 'Kanji: 行', '行', 'い', 'Go', 'သွား', 'To go.', 'သွားခြင်း။', ['行きます', '行きません']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-26', 'Kanji: 来', '来', 'こ', 'Come', 'လာ', 'To come.', 'လာခြင်း။', ['来ます', '来ません']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-27', 'Kanji: 出', '出', 'で', 'Exit', 'ထွက်', 'To exit or go out.', 'ထွက်ခြင်း သို့မဟုတ် အပြင်ထွက်ခြင်း။', ['出ます', '出ません']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-28', 'Kanji: 入', '入', 'い', 'Enter', 'ဝင်', 'To enter.', 'ဝင်ခြင်း။', ['入ります', '入れます']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-29', 'Kanji: 買', '買', 'か', 'Buy', 'ဝယ်', 'To buy.', 'ဝယ်ခြင်း။', ['買います', '買いません']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-30', 'Kanji: 売', '売', 'う', 'Sell', 'ရောင်း', 'To sell.', 'ရောင်းခြင်း။', ['売ります', '売れます']),
  lesson('N5', 'Kanji', 'n5-kanji-extra-31', 'Kanji: 読', '読', 'よ', 'Read', 'ဖတ်', 'To read.', 'ဖတ်ခြင်း။', ['読みます', '読めます'])
];

const EXTRA_N4_LESSONS: Lesson[] = [
  lesson('N4', 'Kana', 'n4-kana-5', 'Hiragana: M Group', 'まみむめも', 'まみむめも', 'Ma, Mi, Mu, Me, Mo', 'မ၊ မိ၊ မု၊ မဲ၊ မို', 'M sounds with lips closed.', 'နှုတ်ခမ်းပိတ်ပြီး M အသံ။', ['まめ', 'みかん']),
  lesson('N4', 'Kana', 'n4-kana-6', 'Hiragana: Y Group', 'やゆよ', 'やゆよ', 'Ya, Yu, Yo', 'ယ၊ ယု၊ ယို', 'Y sounds, small ゃゅょ for compound.', 'Y အသံများ။', ['やま', 'ゆき']),
  lesson('N4', 'Kana', 'n4-kana-7', 'Hiragana: R Group', 'らりるれろ', 'らりるれろ', 'Ra, Ri, Ru, Re, Ro', 'ရ၊ ရိ၊ ရု၊ ရဲ၊ ရို', 'R is light, between L and R.', 'R သည် L နှင့် R ကြား။', ['りんご', 'れいぞうこ']),
  lesson('N4', 'Kana', 'n4-kana-8', 'Katakana: ア～オ', 'アイウエオ', 'アイウエオ', 'A, I, U, E, O (Katakana)', 'အ၊ အိ၊ အု၊ အဲ၊ အို', 'Katakana vowel row.', 'ကာတာကာနာ သရများ။', ['アメリカ', 'コーヒー']),
  lesson('N4', 'Kanji', 'n4-kanji-5', 'Verbs: Go and Come', '行来', 'こうらい', 'Go, Come', 'သွား၊ လာ', 'Action kanji for movement.', 'သွားလာ ကြိယာ ခန်ဂျီ။', ['行きます', '来ました']),
  lesson('N4', 'Kanji', 'n4-kanji-6', 'Verbs: See and Hear', '見聞', 'けんぶん', 'See, Hear', 'ကြည့်၊ ကြား', 'Sensory verb kanji.', 'အာရုံခံ ကြိယာ ခန်ဂျီ။', ['見ました', '聞きました']),
  lesson('N4', 'Kanji', 'n4-kanji-7', 'Food Kanji', '食飲', 'しょくいん', 'Eat, Drink', 'စား၊ သောက်', 'Food-related kanji.', 'အစားအသောက် ခန်ဂျီ။', ['食事', '飲み物']),
  lesson('N4', 'Kanji', 'n4-kanji-8', 'Study and Work', '学働', 'がくどう', 'Study, Work', 'သင်ယူ၊ အလုပ်', 'Study and work kanji.', 'သင်ယူခြင်း၊ အလုပ် ခန်ဂျီ။', ['学校', '仕事']),
  lesson('N4', 'Vocabulary', 'n4-vocab-5', 'Directions', '右・左・まっすぐ・曲がる', 'みぎ・ひだり・まっすぐ・まがる', 'Right, Left, Straight, Turn', 'ညာ၊ ဘယ်၊ ဖြောင့်၊ ကွေ့', 'Direction vocabulary.', 'ဦးတည်ရာ စကားလုံးများ။', ['右に曲がってください。', 'まっすぐ行ってください。']),
  lesson('N4', 'Vocabulary', 'n4-vocab-6', 'Feelings', '嬉しい・悲しい・怒る', 'うれしい・かなしい・おこる', 'Happy, Sad, Angry', 'ပျော်၊ ဝမ်းနည်း၊ ဒေါသ', 'Emotion vocabulary.', 'ခံစားချက် စကားလုံးများ။', ['嬉しいです。', '怒っています。']),
  lesson('N4', 'Vocabulary', 'n4-vocab-7', 'Frequency', 'いつも・時々・あまり・全然', 'いつも・ときどき・あまり・ぜんぜん', 'Always, Sometimes, Not much, Not at all', 'အမြဲ၊ ခဏခဏ၊ သိပ်မဟုတ်၊ လုံးဝမဟုတ်', 'Adverbs of frequency.', 'အကြိမ်အရေအတွက် ပြနာကြိယာများ။', ['いつも朝ご飯を食べます。', '全然分かりません。']),
  lesson('N4', 'Vocabulary', 'n4-vocab-8', 'Comparison', 'より・一番・同じ', 'より・いちばん・おなじ', 'Than, Most, Same', 'ထက်၊ အများဆုံး၊ တူသည်', 'Comparison vocabulary.', 'နှိုင်းယှဉ်ချက် စကားလုံးများ။', ['日本より暑いです。', '一番好きです。']),
  lesson('N4', 'Grammar', 'n4-grammar-5', 'While ～ながら', '音楽を聞きながら勉強します。', 'おんがくをききながらべんきょうします。', 'I study while listening to music.', 'ဂီတနားထောင်ရင်း စာကျက်ပါသည်။', 'ながら = while doing.', 'ながら = လုပ်နေစဉ်။', ['歩きながら話します。', '食べながら見ます。']),
  lesson('N4', 'Grammar', 'n4-grammar-6', 'Before ～前に', '寝る前に歯を磨きます。', 'ねるまえにはをみがきます。', 'I brush my teeth before sleeping.', 'အိပ်ခင် သွားတိုက်ပါသည်။', 'Verb dictionary + 前に = before.', 'ကြိယာ ရှေ့ + 前に = မတိုင်မီ။', ['行く前に電話します。', '食べる前に手を洗います。']),
  lesson('N4', 'Grammar', 'n4-grammar-7', 'After ～てから', '仕事が終わってから飲みに行きます。', 'しごとがおわってからのみにいきます。', 'After work ends, we go for drinks.', 'အလုပ်ပြီးပြီးချင်း သောက်သွားပါသည်။', 'Te-form + から = after.', 'Te ပုံစံ + から = ပြီးနောက်။', ['帰ってから休みます。', '食べてから出かけます。']),
  lesson('N4', 'Grammar', 'n4-grammar-8', 'Reason ～ので', '雨なので傘を持っていきます。', 'あめなのでかさをもっていきます。', 'Because it\'s rain, I\'ll take an umbrella.', 'မိုးရွာလို့ ထီးယူသွားမယ်။', 'ので = because (softer than から).', 'ので = ဖြစ်သောကြောင့်။', ['寒いので窓を閉めます。', '忙しいので行けません。']),
  lesson('N4', 'Grammar', 'n4-grammar-9', 'Try ～てみる', 'この料理を食べてみたいです。', 'このりょうりをたべてみたいです。', 'I want to try eating this dish.', 'ဒီဟင်းကို စားကြည့်ချင်ပါတယ်။', 'Te-form + みる = try doing.', 'Te ပုံစံ + みる = ကြိုးစားကြည့်သည်။', ['着てみます。', '読んでみます。']),
  lesson('N4', 'Listening', 'n4-listening-3', 'Train Announcements', '次の駅は新宿です。', 'つぎのえきはしんじゅくです。', 'The next station is Shinjuku.', 'နောက်ဘူတာသည် ရှင်းဂျုခု ဖြစ်ပါသည်။', 'Listen to train announcements.', 'ရထားကြေညာချက်များ နားထောင်ပါ။', ['ドアが閉まります。', 'お降りの方']),
  lesson('N4', 'Listening', 'n4-listening-4', 'Restaurant Dialogue', 'ご注文はお決まりでしょうか。', 'ごちゅうもんはおきまりでしょうか。', 'Have you decided your order?', 'မှာမယ့်ဟာ ဆုံးဖြတ်ပြီးပြီလား။', 'Listen to restaurant dialogue.', 'စားသောက်ဆိုင်စကားပြောဆိုမှု နားထောင်ပါ။', ['おすすめは何ですか。', 'お会計お願いします。']),
  lesson('N4', 'Listening', 'n4-listening-5', 'Phone Conversation', 'もしもし、田中です。', 'もしもし、たなかです。', 'Hello, this is Tanaka.', 'အမိန့်၊ တာနာကာ ပါ။', 'Listen to phone phrases.', 'ဖုန်းစကားပြောဆိုမှု နားထောင်ပါ။', ['少々お待ちください。', 'また後でかけます。']),
  lesson('N4', 'Listening', 'n4-listening-6', 'Instructions', 'このボタンを押してください。', 'このぼたんをおしてください。', 'Please press this button.', 'ဒီခလုတ်ကို နှိပ်ပါ။', 'Listen to simple instructions.', 'ညွှန်ကြားချက်များ နားထောင်ပါ။', ['ここに書いてください。', 'もう一度言ってください。']),
  lesson('N4', 'Speaking', 'n4-speaking-3', 'Explaining Reasons', '遅刻したので、すみません。', 'ちこくしたので、すみません。', 'I\'m sorry because I was late.', 'နောက်ကျသွားလို့ တောင်းပန်ပါတယ်။', 'Practice explaining reasons.', 'ပြချက် ရှင်းပြခြင်း လေ့ကျင့်ပါ။', ['電車が遅れました。', '体調が悪かったです。']),
  lesson('N4', 'Speaking', 'n4-speaking-4', 'Making Invitations', '今度の日曜日、一緒にどうですか。', 'こんどのにちようび、いっしょにどうですか。', 'How about together this Sunday?', 'ဒီတနင်္ဂနွေ အတူတူ ဘယ်လိုလဲ။', 'Practice inviting someone.', 'ဖိတ်ခေါ်ခြင်း လေ့ကျင့်ပါ။', ['いいですね。', '残念ですが、予定があります。']),
  lesson('N4', 'Speaking', 'n4-speaking-5', 'Asking for Help', '手伝っていただけませんか。', 'てつだっていただけませんか。', 'Could you help me?', 'ကူညီပေးလို့ ရမလား။', 'Practice asking for help.', 'အကူအညီတောင်းခြင်း လေ့ကျင့်ပါ။', ['もちろんです。', 'すみません、今忙しいです。']),
  lesson('N4', 'Speaking', 'n4-speaking-6', 'Giving Compliments', '日本語がお上手ですね。', 'にほんごがおじょうずですね。', 'Your Japanese is good!', 'ဂျပန်စာ ကောင်းပါတယ်နော်။', 'Practice giving compliments.', 'ချီးမွမ်းခြင်း လေ့ကျင့်ပါ။', ['ありがとうございます。', 'まだまだです。']),
  lesson('N4', 'Reading', 'n4-reading-3', 'Short Emails', '明日の会議は三時からに変更になりました。', 'あしたのかいぎはさんじからにへんこうになりました。', 'Tomorrow\'s meeting has been changed to 3 p.m.', 'မနက်ဖြန် အစည်းအဝေးကို ၃ နာရီသို့ ပြောင်းထားပါပြီ။', 'Read short email content.', 'အီးမေးလ်တိုများ ဖတ်ပါ။', ['よろしくお願いします。', 'お疲れ様です。']),
  lesson('N4', 'Reading', 'n4-reading-4', 'Recipe Steps', 'まず野菜を切ります。次に鍋に入れて煮ます。', 'まずやさいをきります。つぎになべにいれてにます。', 'First cut the vegetables. Next put in pot and boil.', 'ပထမ ဟင်းသီးဟင်းရွက်လှီးပါ။ နောက် အိုးထဲထည့်ပြီး ပြုတ်ပါ။', 'Read procedural text.', 'အဆင့်အလိုက် စာများ ဖတ်ပါ။', ['塩を入れます。', '完成です。']),
  lesson('N4', 'Reading', 'n4-reading-5', 'Event Posters', 'コンサートは来週土曜日、午後七時開演です。', 'こんさーとはらいしゅうどようび、ごごしちじかいえんです。', 'Concert is next Saturday, 7 p.m. start.', 'ဂီတပွဲသည် လာမည့် စနေနေ့ ညနေ ၇ နာရီ စပါမည်။', 'Read event information.', 'ပွဲကြေညာချက်များ ဖတ်ပါ။', ['入場料', 'チケット']),
  lesson('N4', 'Reading', 'n4-reading-6', 'Short Stories', '昨日、久しぶりに友達に会いました。一緒にコーヒーを飲んで、二時間話しました。', 'きのう、ひさしぶりにともだちに会いました。いっしょにこーひーをのんで、にじかんはなししました。', 'Yesterday I met my friend after a long time. We had coffee and talked for two hours.', 'မနေ့က ကြာမှ သူငယ်ချင်းနဲ့ တွေ့ပြီး ကော်ဖီသောက်ကာ နှစ်နာရီပြောခဲ့သည်။', 'Read short narrative.', 'ပုံပြင်တိုများ ဖတ်ပါ။', ['楽しかったです。', 'また会いましょう。']),
  lesson('N4', 'Writing', 'n4-writing-3', 'Postcard', '京都はとてもきれいでした。また来たいです。', 'きょうとはとてもきれいでした。またきたいです。', 'Kyoto was very beautiful. I want to come again.', 'ကျိုတိုသည် အလွန်လှပခဲ့သည်။ ထပ်လာချင်ပါသည်။', 'Write a short postcard.', 'ကတ်ပြားတိုရေးပါ။', ['写真を撮りました。', 'お土産を買いました。']),
  lesson('N4', 'Writing', 'n4-writing-4', 'Invitation', '来週のパーティーに来ませんか。', 'らいしゅうのぱーてぃーにきませんか。', 'Won\'t you come to next week\'s party?', 'လာမည့်အပတ် ပါတီပွဲကို လာမလား။', 'Write an invitation.', 'ဖိတ်စာရေးပါ။', ['場所はうちです。', '六時からです。']),
  lesson('N4', 'Writing', 'n4-writing-5', 'Thank-you Note', '先日はありがとうございました。おかげで楽しい一日でした。', 'せんじつはありがとうございました。おかげでたのしいいちにちでした。', 'Thank you for the other day. Thanks to you it was a fun day.', 'အရင်နေ့က ကျေးဇူးတင်ပါတယ်။ ကျေးဇူးကြောင့် ပျော်စရာတစ်နေ့ ဖြစ်ခဲ့ပါတယ်။', 'Write a thank-you note.', 'ကျေးဇူးတင်စာရေးပါ။', ['また誘ってください。', 'よろしくお願いします。']),
  lesson('N4', 'Writing', 'n4-writing-6', 'Schedule Note', '月曜：会議 火曜：出張 水曜：休み', 'げつよう：かいぎ かよう：しゅっちょう すいよう：やすみ', 'Mon: Meeting Tue: Business trip Wed: Off', 'တနင်္လာ အစည်းအဝေး အင်္ဂါ ခရီးထွက် ဗုဒ္ဓဟူး နားရက်။', 'Write a weekly schedule.', 'အပတ်စဉ် ဇယားရေးပါ။', ['木曜：打ち合わせ', '金曜：レポート']),
  lesson('N4', 'Kana', 'n4-kana-9', 'Hiragana: W Group', 'わをん', 'わをん', 'Wa, Wo, N', 'ဝ၊ ဝို၊ န်', 'W row and final N.', 'W အတန်းနှင့် အဆုံး N။', ['わたし', '日本']),
  lesson('N4', 'Kana', 'n4-kana-10', 'Katakana: サ～ソ', 'サシスセソ', 'サシスセソ', 'Sa, Shi, Su, Se, So', 'စ၊ ရှိ၊ စု၊ စဲ၊ စို', 'Katakana S row.', 'ကာတာကာနာ S အတန်း။', ['サラダ', 'スーパー']),
  lesson('N4', 'Kanji', 'n4-kanji-9', 'Money and Pay', '金払', 'きんばら', 'Money, Pay', 'ငွေ၊ ပေးချေ', 'Money-related kanji.', 'ငွေကြေးဆိုင်ရာ ခန်ဂျီ။', ['お金', '払います']),
  lesson('N4', 'Kanji', 'n4-kanji-10', 'Begin and End', '始終', 'ししゅう', 'Begin, End', 'စ၊ ပြီး', 'Start and end kanji.', 'စတင်ခြင်း၊ အဆုံး ခန်ဂျီ။', ['始めます', '終わります']),
  lesson('N4', 'Kanji', 'n4-kanji-extra-1', 'Kanji: 春', '春', 'はる', 'Spring', 'နွေ', 'Spring season.', 'နွေရာသီ။', ['春', '春休み']),
  lesson('N4', 'Kanji', 'n4-kanji-extra-2', 'Kanji: 夏', '夏', 'なつ', 'Summer', 'နွေ', 'Summer season.', 'နွေရာသီ။', ['夏', '夏休み']),
  lesson('N4', 'Kanji', 'n4-kanji-extra-3', 'Kanji: 秋', '秋', 'あき', 'Autumn', 'ဆောင်း', 'Autumn season.', 'ဆောင်းရာသီ။', ['秋', '秋祭り']),
  lesson('N4', 'Kanji', 'n4-kanji-extra-4', 'Kanji: 冬', '冬', 'ふゆ', 'Winter', 'ဆောင်း', 'Winter season.', 'ဆောင်းရာသီ။', ['冬', '冬休み']),
  lesson('N4', 'Kanji', 'n4-kanji-extra-5', 'Kanji: 東', '東', 'ひがし', 'East', 'အရှေ့', 'East direction.', 'အရှေ့ဦးတည်ရာ။', ['東', '東京']),
  lesson('N4', 'Kanji', 'n4-kanji-extra-6', 'Kanji: 西', '西', 'にし', 'West', 'အနောက်', 'West direction.', 'အနောက်ဦးတည်ရာ။', ['西', '西口']),
  lesson('N4', 'Kanji', 'n4-kanji-extra-7', 'Kanji: 南', '南', 'みなみ', 'South', 'တောင်', 'South direction.', 'တောင်ဦးတည်ရာ။', ['南', '南口']),
  lesson('N4', 'Kanji', 'n4-kanji-extra-8', 'Kanji: 北', '北', 'きた', 'North', 'မြောက်', 'North direction.', 'မြောက်ဦးတည်ရာ။', ['北', '北海道']),
  lesson('N4', 'Kanji', 'n4-kanji-extra-9', 'Kanji: 赤', '赤', 'あか', 'Red', 'အနီ', 'Red color.', 'အနီရောင်။', ['赤', '赤い']),
  lesson('N4', 'Kanji', 'n4-kanji-extra-10', 'Kanji: 青', '青', 'あお', 'Blue', 'အပြာ', 'Blue color.', 'အပြာရောင်။', ['青', '青い']),
  lesson('N4', 'Vocabulary', 'n4-vocab-9', 'Travel', '旅行・観光・切符', 'りょこう・かんこう・きっぷ', 'Trip, Sightseeing, Ticket', 'ခရီး၊ ခရီးသွား၊ လက်မှတ်', 'Travel vocabulary.', 'ခရီးသွား စကားလုံးများ။', ['旅行に行きます。', '切符を買いました。']),
  lesson('N4', 'Vocabulary', 'n4-vocab-10', 'Health', '元気・病気・病院', 'げんき・びょうき・びょういん', 'Healthy, Sick, Hospital', 'ကျန်းမာ၊ နေမကောင်း၊ ဆေးရုံ', 'Health vocabulary.', 'ကျန်းမာရေး စကားလုံးများ။', ['元気ですか。', '病院に行きました。']),
  lesson('N4', 'Grammar', 'n4-grammar-10', 'Must ～なければならない', '勉強しなければなりません。', 'べんきょうしなければなりません。', 'I must study.', 'စာကျက်ရမယ်။', 'なければならない = must.', 'なければならない = ရမည်။', ['行かなければなりません。', '早く寝なければなりません。']),
  lesson('N4', 'Grammar', 'n4-grammar-11', 'Too much ～すぎる', '食べすぎました。', 'たべすぎました。', 'I ate too much.', 'အများကြီး စားမိပါပြီ။', 'Verb stem + すぎる = too much.', 'ကြိယာအမြစ် + すぎる = များလွန်း။', ['飲みすぎました。', '遅すぎます。']),
  lesson('N4', 'Listening', 'n4-listening-7', 'Hotel Check-in', 'チェックインは午後三時からです。', 'ちぇっくいんはごごさんじからです。', 'Check-in is from 3 p.m.', 'ချိတ်အင်သည် ညနေ ၃ နာရီမှ စပါမည်။', 'Listen to hotel phrases.', 'ဟိုတယ်စကားများ နားထောင်ပါ။', ['チェックアウト', '朝食は七時から']),
  lesson('N4', 'Listening', 'n4-listening-8', 'Apology and Excuse', '申し訳ございません。遅れました。', 'もうしわけございません。おくれました。', 'I am very sorry. I was late.', 'တောင်းပန်ပါတယ်။ နောက်ကျသွားပါပြီ။', 'Listen to apologies.', 'တောင်းပန်စကားများ နားထောင်ပါ။', ['電車の遅延', '次は気をつけます']),
  lesson('N4', 'Speaking', 'n4-speaking-7', 'Expressing Preference', '紅茶よりコーヒーの方が好きです。', 'こうちゃよりこーひーのほうがすきです。', 'I prefer coffee to tea.', 'လက်ဖက်ထက် ကော်ဖီကို ပိုကြိုက်ပါတယ်။', 'Practice expressing preference.', 'ဦးစားပေးခြင်း ပြောဆိုလေ့ကျင့်ပါ။', ['どちらがいいですか。', 'こちらの方がいいです。']),
  lesson('N4', 'Speaking', 'n4-speaking-8', 'Declining Politely', '残念ですが、その日は都合が悪いです。', 'ざんねんですが、そのひはつごうがわるいです。', 'Unfortunately, that day is inconvenient.', 'ကံမကောင်းပါ၊ ဒီနေ့က အဆင်မပြေပါ။', 'Practice declining politely.', 'ယဉ်ကျေးစွာ ငြင်းပယ်ခြင်း လေ့ကျင့်ပါ။', ['また今度お願いします。', 'すみません']),
  lesson('N4', 'Reading', 'n4-reading-7', 'Product Description', 'この製品は軽くて便利です。', 'このせいひんはかるくてべんりです。', 'This product is light and convenient.', 'ဒီထုတ်ကုန်သည် ပေါ့ပြီး အသုံးလွယ်ပါသည်။', 'Read product descriptions.', 'ထုတ်ကုန်ဖော်ပြချက်များ ဖတ်ပါ။', ['サイズ', '色は三種類']),
  lesson('N4', 'Reading', 'n4-reading-8', 'Short News', '昨日、市内で祭りが行われました。', 'きのう、しないまつりがおこなわれました。', 'Yesterday a festival was held in the city.', 'မနေ့က မြို့တွင်ပွဲတော် ကျင်းပခဲ့သည်။', 'Read short news.', 'သတင်းတိုများ ဖတ်ပါ။', ['多くの人が参加', '来年も開催予定']),
  lesson('N4', 'Writing', 'n4-writing-7', 'Travel Memo', '八月に北海道へ行く。温泉と海が楽しみ。', 'はちがつにほっかいどうへいく。おんせんとうみがたのしみ。', 'Going to Hokkaido in August. Looking forward to hot springs and sea.', 'သြဂုတ်လတွင် ဟော့ကိုင်းဒိုးသို့ သွားမည်။ ရေပူစမ်းနှင့် ပင်လယ် စိတ်လှုပ်ရှားပါသည်။', 'Write a travel memo.', 'ခရီးမှတ်တမ်းရေးပါ။', ['新幹線で行く', '三泊四日']),
  lesson('N4', 'Writing', 'n4-writing-8', 'Recipe Note', '材料：四人分 玉ねぎ一個、肉二百グラム', 'ざいりょう：よにんぶん たまねぎいっこ、にくにひゃくぐらむ', 'Ingredients: For 4. One onion, 200g meat.', 'ပါဝင်ပစ္စည်း လေးယောက်စာ။ ကြက်သွန်တစ်လုံး၊ အသား ၂၀၀ ဂရမ်။', 'Write recipe notes.', 'ဟင်းချက်နည်း မှတ်စာရေးပါ။', ['塩少々', '十分煮る']),
  // Additional Kana lessons for N4
  lesson('N4', 'Kana', 'n4-kana-extra-1', 'Hiragana: ぱ', 'ぱ', 'ぱ', 'Pa', 'ပ', 'P sound.', 'ပ အသံ။', ['ぱん', 'ぱぱ']),
  lesson('N4', 'Kana', 'n4-kana-extra-2', 'Hiragana: ぴ', 'ぴ', 'ぴ', 'Pi', 'ပိ', 'Pi sound.', 'ပိ အသံ။', ['ぴざ', 'ぴんく']),
  lesson('N4', 'Kana', 'n4-kana-extra-3', 'Hiragana: ぷ', 'ぷ', 'ぷ', 'Pu', 'ပု', 'Pu sound.', 'ပု အသံ။', ['ぷーる', 'ぷりん']),
  lesson('N4', 'Kana', 'n4-kana-extra-4', 'Hiragana: ぺ', 'ぺ', 'ぺ', 'Pe', 'ပဲ', 'Pe sound.', 'ပဲ အသံ။', ['ぺん', 'ぺぺ']),
  lesson('N4', 'Kana', 'n4-kana-extra-5', 'Hiragana: ぽ', 'ぽ', 'ぽ', 'Po', 'ပို', 'Po sound.', 'ပို အသံ။', ['ぽけっと', 'ぽん']),
  lesson('N4', 'Kana', 'n4-kana-extra-6', 'Katakana: ガ', 'ガ', 'ガ', 'Ga', 'ဂ', 'G sound.', 'ဂ အသံ။', ['ゲーム', 'ガール']),
  lesson('N4', 'Kana', 'n4-kana-extra-7', 'Katakana: ギ', 'ギ', 'ギ', 'Gi', 'ဂိ', 'Gi sound.', 'ဂိ အသံ။', ['ギター', 'ギフト']),
  lesson('N4', 'Kana', 'n4-kana-extra-8', 'Katakana: グ', 'グ', 'グ', 'Gu', 'ဂု', 'Gu sound.', 'ဂု အသံ။', ['グループ', 'グリーン']),
  lesson('N4', 'Kana', 'n4-kana-extra-9', 'Katakana: ゲ', 'ゲ', 'ゲ', 'Ge', 'ဂဲ', 'Ge sound.', 'ဂဲ အသံ။', ['ゲーム', 'ゲスト']),
  lesson('N4', 'Kana', 'n4-kana-extra-10', 'Katakana: ゴ', 'ゴ', 'ゴ', 'Go', 'ဂို', 'Go sound.', 'ဂို အသံ။', ['ゴール', 'ゴールド']),
  lesson('N4', 'Kana', 'n4-kana-extra-11', 'Katakana: ザ', 'ザ', 'ザ', 'Za', 'ဇ', 'Z sound.', 'ဇ အသံ။', ['ザウルス', 'ザクロ']),
  lesson('N4', 'Kana', 'n4-kana-extra-12', 'Katakana: ジ', 'ジ', 'ジ', 'Ji', 'ဂျိ', 'Ji sound.', 'ဂျိ အသံ။', ['ジーンズ', 'ジム']),
  lesson('N4', 'Kana', 'n4-kana-extra-13', 'Katakana: ズ', 'ズ', 'ズ', 'Zu', 'ဇု', 'Zu sound.', 'ဇု အသံ။', ['ズボン', 'ズーム']),
  lesson('N4', 'Kana', 'n4-kana-extra-14', 'Katakana: ゼ', 'ゼ', 'ゼ', 'Ze', 'ဇဲ', 'Ze sound.', 'ဇဲ အသံ။', ['ゼリー', 'ゼロ']),
  lesson('N4', 'Kana', 'n4-kana-extra-15', 'Katakana: ゾ', 'ゾ', 'ゾ', 'Zo', 'ဇို', 'Zo sound.', 'ဇို အသံ။', ['ゾーン', 'ゾウ']),
];

const EXTRA_N3_LESSONS: Lesson[] = [
  lesson('N3', 'Kana', 'n3-kana-5', 'Katakana: カ～コ', 'カキクケコ', 'カキクケコ', 'Ka, Ki, Ku, Ke, Ko', 'က၊ ကီ၊ ကူ၊ ကဲ၊ ကို', 'Katakana K row.', 'ကာတာကာနာ K အတန်း။', ['カメラ', 'コーヒー']),
  lesson('N3', 'Kana', 'n3-kana-6', 'Katakana: サ～ソ', 'サシスセソ', 'サシスセソ', 'Sa, Shi, Su, Se, So', 'စ၊ ရှိ၊ စု၊ စဲ၊ စို', 'Katakana S row.', 'ကာတာကာနာ S အတန်း။', ['サラダ', 'スーパー']),
  lesson('N3', 'Kana', 'n3-kana-7', 'Katakana: ナ～ノ', 'ナニヌネノ', 'ナニヌネノ', 'Na, Ni, Nu, Ne, No', 'န၊ နိ၊ နု၊ နဲ၊ နို', 'Katakana N row.', 'ကာတာကာနာ N အတန်း။', ['ノート', 'ニュース']),
  lesson('N3', 'Kana', 'n3-kana-8', 'Katakana Long Vowels', 'メール・コート・スープ', 'めーる・こーと・すーぷ', 'Email, Coat, Soup', 'အီးမေးလ်၊ ကုတ်၊ ဆူပျ်', 'Long vowel in katakana (ー).', 'ကာတာကာနာတွင် သရရှည် ー။', ['テーブル', 'カード']),
  lesson('N3', 'Kanji', 'n3-kanji-5', 'Education', '教育・授業・試験', 'きょういく・じゅぎょう・しけん', 'Education, Class, Exam', 'ပညာရေး၊ သင်ခန်းစာ၊ စာမေးပွဲ', 'Education-related kanji.', 'ပညာရေးဆိုင်ရာ ခန်ဂျီများ။', ['教育を受ける', '試験に合格する']),
  lesson('N3', 'Kanji', 'n3-kanji-6', 'Health', '健康・病気・病院', 'けんこう・びょうき・びょういん', 'Health, Illness, Hospital', 'ကျန်းမာရေး၊ ရောဂါ၊ ဆေးရုံ', 'Health kanji.', 'ကျန်းမာရေး ခန်ဂျီများ။', ['健康が大切です。', '病院に行きます。']),
  lesson('N3', 'Kanji', 'n3-kanji-7', 'Communication', '連絡・伝達・報告', 'れんらく・でんたつ・ほうこく', 'Contact, Convey, Report', 'ဆက်သွယ်၊ ပို့ချက်၊ အစီရင်ခံ', 'Communication kanji.', 'ဆက်သွယ်ရေး ခန်ဂျီများ။', ['連絡してください。', '報告書']),
  lesson('N3', 'Kanji', 'n3-kanji-8', 'Decision', '決定・選択・判断', 'けってい・せんたく・はんだん', 'Decision, Choice, Judgment', 'ဆုံးဖြတ်၊ ရွေးချယ်၊ အကဲဖြတ်', 'Decision-related kanji.', 'ဆုံးဖြတ်ချက်ဆိုင်ရာ ခန်ဂျီများ။', ['決定する', '選択肢']),
  lesson('N3', 'Vocabulary', 'n3-vocab-5', 'Opinion Phrases', '～と思う・～に反対・賛成', '～とおもう・～にはんたい・さんせい', 'I think that, Against, Agree', 'ထင်သည်၊ ဆန့်ကျင်၊ သဘောတူ', 'Expressing opinions.', 'အမြင်ဖော်ပြခြင်း။', ['そう思います。', '賛成です。']),
  lesson('N3', 'Vocabulary', 'n3-vocab-6', 'Cause and Effect', 'そのため・したがって・つまり', 'そのため・したがって・つまり', 'Therefore, Accordingly, In other words', 'ထို့ကြောင့်၊ သို့ဖြစ်၍၊ တနည်းဆို', 'Logical connectors.', 'ဆက်စပ်စကားလုံးများ။', ['そのため遅れました。', 'つまり、無理です。']),
  lesson('N3', 'Vocabulary', 'n3-vocab-7', 'Degree', '非常に・かなり・やや', 'ひじょうに・かなり・やや', 'Very, Quite, Slightly', 'အလွန်၊ အတန်အသင့်၊ အနည်းငယ်', 'Adverbs of degree.', 'ပမာဏပြ ပြနာကြိယာများ။', ['非常に難しい', 'やや寒い']),
  lesson('N3', 'Vocabulary', 'n3-vocab-8', 'Formal Verbs', '申し上げる・いただく・存じる', 'もうしあげる・いただく・ぞんじる', 'Say (humble), Receive (humble), Know (humble)', 'ပြောသည် (ရိုကျိုး), ရသည်, သိသည် (ရိုကျိုး)', 'Humble verb forms.', 'ရိုကျိုးကြိယာများ။', ['申し訳ございません。', '存じております。']),
  lesson('N3', 'Grammar', 'n3-grammar-5', 'Despite ～のに', '雨なのに出かけました。', 'あめなのにでかけました。', 'Despite the rain I went out.', 'မိုးရွာနေပေမဲ့ ထွက်သွားခဲ့သည်။', 'のに = although, despite.', 'のに = ဖြစ်သော်လည်း။', ['忙しいのに手伝ってくれた。', '若いのにしっかりしている。']),
  lesson('N3', 'Grammar', 'n3-grammar-6', 'Seems ～そうだ', '雨が降りそうです。', 'あめがふりそうです。', 'It looks like it will rain.', 'မိုးရွာမယ်လို့ ထင်ရသည်။', 'Verb stem + そうだ = seems/looks like.', 'ကြိယာအမြစ် + そうだ = ထင်ရသည်။', ['美味しそうです。', '大丈夫そうです。']),
  lesson('N3', 'Grammar', 'n3-grammar-7', 'Hearsay ～そうだ', '明日は休みだそうです。', 'あしたはやすみだそうです。', 'I hear tomorrow is a day off.', 'မနက်ဖြန် နားရက်လို့ ကြားရသည်။', 'Plain form + そうだ = I hear that.', 'ပုံမှန်ပုံစံ + そうだ = ကြားရသည်။', ['彼は結婚したそうです。', 'あの店はおいしいそうです。']),
  lesson('N3', 'Grammar', 'n3-grammar-8', 'Instead of ～かわりに', '私が行くかわりに、彼が行きます。', 'わたしがいくかわりに、かれがいきます。', 'Instead of me going, he will go.', 'ကျွန်တော်သွားမယ့်အစား သူသွားမယ်။', 'かわりに = instead of.', 'かわりに = အစား။', ['彼女が話すかわりに', '電話するかわりにメールした']),
  lesson('N3', 'Listening', 'n3-listening-3', 'News Headlines', '政府、新制度を来月から実施へ。', 'せいふ、しんせいどをらいげつからじっしへ。', 'Government to implement new system from next month.', 'အစိုးရ လာမည့်လမှ စနစ်သစ် စတင်မည်။', 'Listen to news headlines.', 'သတင်းခေါင်းစဉ်များ နားထောင်ပါ။', ['経済', '社会']),
  lesson('N3', 'Listening', 'n3-listening-4', 'Interview Style', 'この仕事を選んだ理由は何ですか。', 'このしごとをえらんだりゆうはなんですか。', 'What is the reason you chose this job?', 'ဒီအလုပ်ကို ရွေးချယ်ရတဲ့ အကြောင်းက ဘာလဲ။', 'Listen to interview questions.', 'တွေ့ဆုံမေးချက်များ နားထောင်ပါ။', ['やりがいがあります。', '将来性を考えました。']),
  lesson('N3', 'Listening', 'n3-listening-5', 'Instructions (Formal)', 'お手数ですが、この書類にご記入ください。', 'おてすうですが、このしょるいをごきにゅうください。', 'Sorry to trouble you, but please fill in this form.', 'ဒီစာရွက်မှာ ဖြည့်ပေးပါရန်။', 'Listen to formal instructions.', 'ယဉ်ကျေးသော ညွှန်ကြားချက်များ နားထောင်ပါ။', ['ご確認ください。', 'ご署名をお願いします。']),
  lesson('N3', 'Listening', 'n3-listening-6', 'Discussion', 'では、この案で進めましょう。', 'では、このあんですすめましょう。', 'Then, let\'s proceed with this plan.', 'သို့ဖြစ်လျှင် ဒီအဆိုနဲ့ ဆက်လုပ်ကြပါမယ်။', 'Listen to meeting discussion.', 'ဆွေးနွေးမှုများ နားထောင်ပါ။', ['異議ありません。', '修正点があります。']),
  lesson('N3', 'Speaking', 'n3-speaking-3', 'Summarizing', '要するに、予算が足りないということですね。', 'ようするに、よさんがたりないということですね。', 'In short, you mean the budget isn\'t enough, right?', 'အတိုချုပ်ဆို ဘတ်ဂျက်မလုံလောက်ဘူးလို့ ဆိုတာပါနော်။', 'Practice summarizing.', 'အကျဉ်းချုပ် ပြောခြင်း လေ့ကျင့်ပါ။', ['その通りです。', 'もう少し詳しく説明します。']),
  lesson('N3', 'Speaking', 'n3-speaking-4', 'Disagreeing Politely', '申し訳ありませんが、少し意見が異なります。', 'もうしわけありませんが、すこしいけんがことなります。', 'I\'m sorry, but I have a slightly different opinion.', 'တောင်းပန်ပါတယ်၊ အနည်းငယ် ကွဲပြားတဲ့ အမြင်ရှိပါတယ်။', 'Practice disagreeing politely.', 'ယဉ်ကျေးစွာ မသဘောတူခြင်း လေ့ကျင့်ပါ။', ['おっしゃることは分かりますが', '別の角度から見ると']),
  lesson('N3', 'Speaking', 'n3-speaking-5', 'Clarifying', 'つまり、こういうことでしょうか。', 'つまり、こういうことでしょうか。', 'So, do you mean it\'s like this?', 'ဆိုလိုတာက ဒီလိုမျိုးလား။', 'Practice asking for clarification.', 'ရှင်းလင်းချက်တောင်းခြင်း လေ့ကျင့်ပါ။', ['はい、その理解で正しいです。', 'いえ、少し違います。']),
  lesson('N3', 'Speaking', 'n3-speaking-6', 'Closing a Meeting', '本日はありがとうございました。それでは、よろしくお願いいたします。', 'ほんじつはありがとうございました。それでは、よろしくおねがいいたします。', 'Thank you for today. Then, please treat us well.', 'ဒီနေ့ ကျေးဇူးတင်ပါတယ်။ ထို့နောက် ကျေးဇူးပြုပြီး ဆောင်ရွက်ပေးပါ။', 'Practice closing formally.', 'အပြီးသတ် နှုတ်ဆက်ခြင်း လေ့ကျင့်ပါ။', ['失礼いたします。', 'お疲れ様でした。']),
  lesson('N3', 'Reading', 'n3-reading-3', 'Editorial', '環境問題は、一人一人の意識改革が鍵となる。', 'かんきょうもんだいは、ひとりひとりのいしきかいかくがかぎとなる。', 'For environmental issues, each person\'s change of awareness is the key.', 'သဘာဝပတ်ဝန်းကျင် ပြဿနာတွင် တစ်ဦးချင်းစီ၏ သတိပြုမှု ပြောင်းလဲခြင်းက အချုပ်။', 'Read editorial style.', 'ဆောင်းပါးပုံစံ ဖတ်ပါ။', ['持続可能な社会', '未来のために']),
  lesson('N3', 'Reading', 'n3-reading-4', 'Instructions Manual', '使用前に取扱説明書をご確認ください。', 'しようまえにとりあつかいせつめいしょをごかくにんください。', 'Please check the manual before use.', 'အသုံးပြုမီ လက်စွဲကို စစ်ဆေးပါ။', 'Read manual style.', 'လက်စွဲစာများ ဖတ်ပါ။', ['注意事項', '保証について']),
  lesson('N3', 'Reading', 'n3-reading-5', 'Contract Excerpt', '本契約は、甲乙双方の合意に基づき締結する。', 'ほんけいやくは、こうおつそうほうのごういにもとづきていけつする。', 'This contract is concluded based on agreement of both parties.', 'ဤသဘောတူညီချက်ကို နှစ်ဖက်သဘောတူညီချက်အရ ချုပ်ဆိုသည်။', 'Read formal contract text.', 'စာချုပ်စာများ ဖတ်ပါ။', ['契約期間', '解約条項']),
  lesson('N3', 'Reading', 'n3-reading-6', 'Academic Abstract', '本研究では、新しい手法による効果を検証した。', 'ほんけんきゅうでは、あたらしいしゅほうによるこうかをけんしょうした。', 'This study verified the effect of a new method.', 'ဤသုတေသနတွင် နည်းလမ်းအသစ်၏ ထိရောက်မှုကို စစ်ဆေးခဲ့သည်။', 'Read academic abstract.', 'ပညာရပ်ဆိုင်ရာ အကျဉ်းချုပ် ဖတ်ပါ။', ['結果', '今後の課題']),
  lesson('N3', 'Reading', 'n3-reading-7', 'Opinion Column', '筆者は、働き方改革の必要性を強調している。', 'ひっしゃは、はたらきかたかいかくのひつようせいをきょうちょうしている。', 'The author emphasizes the need for work-style reform.', 'စာရေးသူသည် အလုပ်လုပ်ပုံ ပြုပြင်ရေး လိုအပ်ချက်ကို ထောက်ခံပါသည်။', 'Read opinion column.', 'အမြင်ဆောင်းပါး ဖတ်ပါ။', ['賛成・反対', '読者からの声']),
  lesson('N3', 'Writing', 'n3-writing-3', 'Proposal Summary', '本提案書では、コスト削減の三つの方法を述べる。', 'ほんていあんしょでは、こすとさくげんのみっつのほうほうをのべる。', 'This proposal describes three methods for cost reduction.', 'ဤအဆိုပြုစာတွင် ကုန်ကျစရိတ် လျှော့ချရန် နည်းလမ်းသုံးခုကို ဖော်ပြပါသည်။', 'Write proposal summary.', 'အဆိုပြုစာ အကျဉ်းချုပ် ရေးပါ။', ['第一に', '結論として']),
  lesson('N3', 'Writing', 'n3-writing-4', 'Meeting Minutes', '会議日時：十月十五日 出席者：五人 議題：新プロジェクトについて', 'かいぎにちじ：じゅうがつじゅうごにち しゅっせきしゃ：ごにん ぎだい：しんぷろじぇくとについて', 'Meeting: Oct 15. Attendees: 5. Topic: New project.', 'အစည်းအဝေး အောက်တိုဘာ ၁၅။ ပါဝင်သူ ၅ ဦး။ ဆွေးနွေးချက် ပရောဂျက်အသစ်။', 'Write meeting minutes.', 'အစည်းအဝေးမှတ်တမ်း ရေးပါ။', ['決定事項', '次回予定']),
  lesson('N3', 'Writing', 'n3-writing-5', 'Formal Request', 'つきましては、下記の書類のご提出をお願い申し上げます。', 'つきましては、かきのしょるいのごていしゅつをおねがいもうしあげます。', 'Accordingly, we request submission of the following documents.', 'ထို့ကြောင့် အောက်ပါ စာရွက်စာတမ်းများ တင်သွင်းပေးပါရန် တောင်းဆိုပါသည်။', 'Write formal request.', 'ယဉ်ကျေးသော တောင်းဆိုချက် ရေးပါ။', ['期限', 'ご不明な点']),
  lesson('N3', 'Writing', 'n3-writing-6', 'Conclusion Paragraph', '以上より、本プロジェクトの実施は妥当であると判断する。', 'いじょうより、ほんぷろじぇくとのじっしはだとうであるとはんだんする。', 'From the above, we judge that implementing this project is appropriate.', 'အထက်ပါအတိုင်း ဤပရောဂျက် အကောင်အထည်ဖော်ခြင်းသည် သင့်လျော်သည်ဟု အကဲဖြတ်ပါသည်။', 'Write conclusion paragraph.', 'နိဂုံးပိုဒ် ရေးပါ။', ['今後の展望', '謝辞']),
  lesson('N3', 'Kana', 'n3-kana-9', 'Katakana: タ～ト', 'タチツテト', 'タチツテト', 'Ta, Chi, Tsu, Te, To', 'တ၊ ချိ၊ စု၊ တဲ၊ တို', 'Katakana T row.', 'ကာတာကာနာ T အတန်း။', ['タクシー', 'テレビ']),
  lesson('N3', 'Kana', 'n3-kana-10', 'Katakana: ハ～ポ', 'ハヒフヘホ パピプペポ', 'ハヒフヘホ パピプペポ', 'Ha row and Pa row', 'ဟ အတန်းနှင့် ပ အတန်း', 'Voiced P row in katakana.', 'ကာတာကာနာ P အတန်း။', ['パン', 'ピザ']),
  lesson('N3', 'Kanji', 'n3-kanji-9', 'Law and Rule', '法律・規則・条項', 'ほうりつ・きそく・じょうこう', 'Law, Rule, Clause', 'ဥပဒေ၊ စည်းမျဉ်း၊ ပြဋ္ဌာန်းချက်', 'Legal kanji.', 'ဥပဒေဆိုင်ရာ ခန်ဂျီများ။', ['法律を守る', '規則に従う']),
  lesson('N3', 'Kanji', 'n3-kanji-10', 'Progress and Result', '進行・結果・達成', 'しんこう・けっか・たっせい', 'Progress, Result, Achievement', 'အခြေအနေ၊ ရလဒ်၊ အောင်မြင်မှု', 'Progress-related kanji.', 'တိုးတက်မှုဆိုင်ရာ ခန်ဂျီများ။', ['進行状況', '目標を達成する']),
  lesson('N3', 'Vocabulary', 'n3-vocab-9', 'Negotiation', '交渉・妥協・合意', 'こうしょう・だきょう・ごうい', 'Negotiation, Compromise, Agreement', 'ညှိနှိုင်းမှု၊ သဘောတူညီမှု', 'Negotiation vocabulary.', 'ညှိနှိုင်းမှု စကားလုံးများ။', ['交渉がまとまった', '合意に達する']),
  lesson('N3', 'Vocabulary', 'n3-vocab-10', 'Evaluation', '評価・批評・検討', 'ひょうか・ひひょう・けんとう', 'Evaluation, Criticism, Consideration', 'အကဲဖြတ်၊ ဝေဖန်၊ စဉ်းစား', 'Evaluation vocabulary.', 'အကဲဖြတ်ချက် စကားလုံးများ။', ['高い評価を受けた', '検討の余地がある']),
  lesson('N3', 'Grammar', 'n3-grammar-9', 'As if ～かのようだ', '彼は何も知らないかのようだ。', 'かれはなにもしらないかのようだ。', 'It seems as if he knows nothing.', 'သူ ဘာမှမသိဘူးလို့ ထင်ရသည်။', 'かのようだ = as if.', 'かのようだ = လိုပဲ။', ['夢を見ているかのよう', '本物かのような']),
  lesson('N3', 'Grammar', 'n3-grammar-10', 'Not only ～だけでなく', '英語だけでなく日本語も話せます。', 'えいごだけでなくにほんごもはなせます。', 'I can speak not only English but also Japanese.', 'အင်္ဂလိပ်စာသာမက ဂျပန်စာလည်း ပြောနိုင်ပါသည်။', 'だけでなく = not only... but also.', 'だけでなく = သာမက... လည်း။', ['読むだけでなく書くことも', '国内だけでなく海外も']),
  lesson('N3', 'Listening', 'n3-listening-7', 'Presentation Opening', '本日はお集まりいただきありがとうございます。', 'ほんじつはおあつまりいただきありがとうございます。', 'Thank you for gathering here today.', 'ဒီနေ့ စုဝေးပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်။', 'Listen to presentation openings.', 'တင်ပြချက် အစပိုင်း နားထောင်ပါ။', ['本題に入ります', 'ご清聴ください']),
  lesson('N3', 'Listening', 'n3-listening-8', 'Q&A Session', 'ご質問はございませんか。', 'ごしつもんはございませんか。', 'Are there any questions?', 'မေးခွန်းရှိပါသလား။', 'Listen to Q&A phrases.', 'မေးချက်/အဖြေ စကားများ နားထောင်ပါ။', ['はい、一つあります', '次の方どうぞ']),
  lesson('N3', 'Speaking', 'n3-speaking-7', 'Proposing a Solution', '一つの案として、こういう方法はいかがでしょうか。', 'ひとつのあんとして、こういうほうほうはいかがでしょうか。', 'As one idea, how about this method?', 'အကြံတစ်ခုအနေနဲ့ ဒီနည်းလမ်းက ဘယ်လိုလဲ။', 'Practice proposing solutions.', 'ဖြေရှင်းနည်း အကြံပြုခြင်း လေ့ကျင့်ပါ။', ['検討してみます', '良い案だと思います']),
  lesson('N3', 'Speaking', 'n3-speaking-8', 'Handling Objections', 'ご指摘の通りです。その点は修正いたします。', 'ごしてきのとおりです。そのてんはしゅうせいいたします。', 'You are right. I will correct that point.', 'ပြောသည့်အတိုင်းပါ။ ထိုအချက်ကို ပြင်ဆင်ပါမည်။', 'Practice handling objections.', 'ကန့်ကွက်ချက်များ ကိုင်တွယ်ခြင်း လေ့ကျင့်ပါ။', ['承知しました', 'ご確認ください']),
  lesson('N3', 'Reading', 'n3-reading-8', 'Policy Document', '本方針は、来年度より施行する。', 'ほんほうしんは、らいねんどよりしこうする。', 'This policy will be enforced from next fiscal year.', 'ဤမူဝါဒကို လာမည့်ဘဏ္ဍာနှစ်မှ စတင်အကောင်အထည်ဖော်မည်။', 'Read policy documents.', 'မူဝါဒစာများ ဖတ်ပါ။', ['対象者', '例外規定']),
  lesson('N3', 'Reading', 'n3-reading-9', 'Survey Report', 'アンケートの結果、七割が賛成であった。', 'あんけーとのけっか、ななわりがさんせいであった。', 'Survey results: 70% were in favor.', 'အကြိမ်အရေအတွက် ရလဒ်အရ ၇၀% က သဘောတူသည်။', 'Read survey reports.', 'ဆန်းစစ်မေးချက် အစီရင်ခံစာများ ဖတ်ပါ။', ['無回答', '今後の参考に']),
  lesson('N3', 'Writing', 'n3-writing-7', 'Executive Summary', '本資料は、第三四半期の業績をまとめたものである。', 'ほんしりょうは、だいさんしはんきのぎょうせきをまとめたものである。', 'This document summarizes Q3 performance.', 'ဤစာရွက်သည် တတိယ သုံးလပတ် ရလဒ်ကို အကျဉ်းချုပ်ပါသည်။', 'Write executive summary.', 'အချုပ်အချယ် ရေးပါ။', ['売上', '今期の目標']),
  lesson('N3', 'Writing', 'n3-writing-8', 'Formal Apology', 'この度はご迷惑をおかけし、誠に申し訳ございません。', 'このたびはごめいわくをおかけし、まことにもうしわけございません。', 'We sincerely apologize for the inconvenience caused.', 'ဤအကြိမ်တွင် ဒုက္ခပေးသည့်အတွက် စိတ်မကောင်းပါ။', 'Write formal apology.', 'ယဉ်ကျေးသော တောင်းပန်စာ ရေးပါ။', ['再発防止に努めます', '何卒ご理解ください']),
  // Additional Kana lessons for N3
  lesson('N3', 'Kana', 'n3-kana-extra-1', 'Hiragana: や', 'や', 'や', 'Ya', 'ယ', 'Ya sound.', 'ယ အသံ။', ['やま', 'やさい']),
  lesson('N3', 'Kana', 'n3-kana-extra-2', 'Hiragana: ゆ', 'ゆ', 'ゆ', 'Yu', 'ယု', 'Yu sound.', 'ယု အသံ။', ['ゆき', 'ゆめ']),
  lesson('N3', 'Kana', 'n3-kana-extra-3', 'Hiragana: よ', 'よ', 'よ', 'Yo', 'ယို', 'Yo sound.', 'ယို အသံ။', ['よる', 'よてい']),
  lesson('N3', 'Kana', 'n3-kana-extra-4', 'Hiragana: ら', 'ら', 'ら', 'Ra', 'ရ', 'Ra sound.', 'ရ အသံ။', ['らーめん', 'らいおん']),
  lesson('N3', 'Kana', 'n3-kana-extra-5', 'Hiragana: り', 'り', 'り', 'Ri', 'ရိ', 'Ri sound.', 'ရိ အသံ။', ['りんご', 'りす']),
  lesson('N3', 'Kana', 'n3-kana-extra-6', 'Hiragana: る', 'る', 'る', 'Ru', 'ရု', 'Ru sound.', 'ရု အသံ။', ['るす', 'るい']),
  lesson('N3', 'Kana', 'n3-kana-extra-7', 'Hiragana: れ', 'れ', 'れ', 'Re', 'ရဲ', 'Re sound.', 'ရဲ အသံ။', ['れい', 'れす']),
  lesson('N3', 'Kana', 'n3-kana-extra-8', 'Hiragana: ろ', 'ろ', 'ろ', 'Ro', 'ရို', 'Ro sound.', 'ရို အသံ။', ['ろく', 'ろう']),
  lesson('N3', 'Kana', 'n3-kana-extra-9', 'Hiragana: わ', 'わ', 'わ', 'Wa', 'ဝ', 'Wa sound.', 'ဝ အသံ။', ['わたし', 'わすれ']),
  lesson('N3', 'Kana', 'n3-kana-extra-10', 'Hiragana: を', 'を', 'を', 'Wo', 'ဝို', 'Wo sound.', 'ဝို အသံ။', ['を', 'を']),
  lesson('N3', 'Kana', 'n3-kana-extra-11', 'Hiragana: ん', 'ん', 'ん', 'N', 'န်', 'N sound.', 'န် အသံ။', ['にほん', 'さん']),
  lesson('N3', 'Kana', 'n3-kana-extra-12', 'Katakana: ダ', 'ダ', 'ダ', 'Da', 'ဒ', 'Da sound.', 'ဒ အသံ။', ['ダンス', 'ダーク']),
  lesson('N3', 'Kana', 'n3-kana-extra-13', 'Katakana: デ', 'デ', 'デ', 'De', 'ဒဲ', 'De sound.', 'ဒဲ အသံ။', ['デザート', 'デパート']),
  lesson('N3', 'Kana', 'n3-kana-extra-14', 'Katakana: ド', 'ド', 'ド', 'Do', 'ဒို', 'Do sound.', 'ဒို အသံ။', ['ドア', 'ドライブ']),
  lesson('N3', 'Kana', 'n3-kana-extra-15', 'Katakana: バ', 'バ', 'バ', 'Ba', 'ဘ', 'Ba sound.', 'ဘ အသံ။', ['バナナ', 'バス']),
  lesson('N3', 'Kana', 'n3-kana-extra-16', 'Katakana: ビ', 'ビ', 'ビ', 'Bi', 'ဘိ', 'Bi sound.', 'ဘိ အသံ။', ['ビール', 'ビル']),
  lesson('N3', 'Kana', 'n3-kana-extra-17', 'Katakana: ブ', 'ブ', 'ブ', 'Bu', 'ဘု', 'Bu sound.', 'ဘု အသံ။', ['ブック', 'ブルー']),
  lesson('N3', 'Kana', 'n3-kana-extra-18', 'Katakana: ベ', 'ベ', 'ベ', 'Be', 'ဘဲ', 'Be sound.', 'ဘဲ အသံ။', ['ベッド', 'ベスト']),
  lesson('N3', 'Kana', 'n3-kana-extra-19', 'Katakana: ボ', 'ボ', 'ボ', 'Bo', 'ဘို', 'Bo sound.', 'ဘို အသံ။', ['ボール', 'ボート']),
  lesson('N3', 'Kana', 'n3-kana-extra-20', 'Katakana: パ', 'パ', 'パ', 'Pa', 'ပ', 'Pa sound.', 'ပ အသံ။', ['パン', 'パーティー']),
  lesson('N3', 'Kana', 'n3-kana-extra-21', 'Katakana: ピ', 'ピ', 'ピ', 'Pi', 'ပိ', 'Pi sound.', 'ပိ အသံ။', ['ピザ', 'ピンク']),
  lesson('N3', 'Kana', 'n3-kana-extra-22', 'Katakana: プ', 'プ', 'プ', 'Pu', 'ပု', 'Pu sound.', 'ပု အသံ။', ['プール', 'プリン']),
  lesson('N3', 'Kana', 'n3-kana-extra-23', 'Katakana: ペ', 'ペ', 'ペ', 'Pe', 'ပဲ', 'Pe sound.', 'ပဲ အသံ။', ['ペン', 'ペット']),
  lesson('N3', 'Kana', 'n3-kana-extra-24', 'Katakana: ポ', 'ポ', 'ポ', 'Po', 'ပို', 'Po sound.', 'ပို အသံ။', ['ポケット', 'ポン']),
  lesson('N3', 'Kana', 'n3-kana-extra-25', 'Katakana: ャ', 'ャ', 'ャ', 'Small Ya', 'ယ', 'Small ya for compound.', 'ယ ငယ်သော အသံ။', ['キャ', 'ギャ']),
];

// N5 Lessons - Beginner Level
const N5_BASE_LESSONS: Lesson[] = [
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
  },

  // Extra N5 lessons per skill
  {
    level: 'N5', skill: 'Kana', lessonId: 'n5-kana-s-1', title: 'Hiragana: S Group',
    content: {
      text: 'さしすせそ', furigana: 'さしすせそ', meaning: 'Sa, Shi, Su, Se, So',
      meaningMm: 'စ၊ ရှိ၊ စု၊ စဲ၊ စို',
      explanation: 'S sounds with tongue close to teeth.',
      explanationMm: 'လျှာကို သွားများနှင့် နီးစပ်စွာ ထားပြီး ထုတ်လုပ်သော S အသံများ။',
      exampleSentences: ['さくら', 'すし', 'せんせい']
    }
  },
  {
    level: 'N5', skill: 'Kanji', lessonId: 'n5-kanji-9', title: 'Body Kanji',
    content: {
      text: '目耳口手', furigana: 'めみみくちて', meaning: 'Eye, Ear, Mouth, Hand',
      meaningMm: 'မျက်လုံး၊ နား၊ ပါးစပ်၊ လက်',
      explanation: 'Basic body part kanji.',
      explanationMm: 'အခြေခံ ခန္ဓာကိုယ်အစိတ်အပိုင်း ခန်ဂျီများ။',
      exampleSentences: ['目', '耳', '口', '手']
    }
  },
  {
    level: 'N5', skill: 'Vocabulary', lessonId: 'n5-vocab-8', title: 'Places and Locations',
    content: {
      text: '場所・駅・学校', furigana: 'ばしょ・えき・がっこう', meaning: 'Place, Station, School',
      meaningMm: 'နေရာ၊ ဘူတာရုံ၊ ကျောင်း',
      explanation: 'Common place vocabulary for N5.',
      explanationMm: 'N5 အတွက် အသုံးများသော နေရာစကားလုံးများ။',
      exampleSentences: ['駅はどこですか。', '学校に行きます。']
    }
  },
  {
    level: 'N5', skill: 'Grammar', lessonId: 'n5-grammar-9', title: 'Existence あります / います',
    content: {
      text: '机の上に本があります。', furigana: 'つくえのうえにほんがあります。', meaning: 'There is a book on the desk.',
      meaningMm: 'စာရေးစားပွဲပေါ်တွင် စာအုပ်ရှိပါသည်။',
      explanation: '"Arimasu" for inanimate things, "imasu" for animate.',
      explanationMm: 'သက်မဲ့ပစ္စည်းများအတွက် "အရိမာစု"၊ သက်ရှိများအတွက် "အီမာစု"။',
      exampleSentences: ['部屋に猫がいます。', '冷蔵庫に牛乳があります。']
    }
  },
  {
    level: 'N5', skill: 'Listening', lessonId: 'n5-listening-4', title: 'Time and Schedule',
    content: {
      text: '今何時ですか。九時です。', furigana: 'いまなんじですか。くじです。', meaning: 'What time is it now? It is nine o\'clock.',
      meaningMm: 'အခုဘယ်နာရီလဲ။ ကိုးနာရီပါ။',
      explanation: 'Practice listening to time expressions.',
      explanationMm: 'အချိန်ဖော်ပြချက်များကို နားထောင်လေ့ကျင့်ပါ။',
      exampleSentences: ['今何時ですか。', '八時に起きます。']
    }
  },
  {
    level: 'N5', skill: 'Speaking', lessonId: 'n5-speaking-4', title: 'Expressing Likes',
    content: {
      text: '私は音楽が好きです。', furigana: 'わたしはおんがくがすきです。', meaning: 'I like music.',
      meaningMm: 'ကျွန်တော် ဂီတကို ကြိုက်ပါသည်။',
      explanation: 'Use が with 好き to express what you like.',
      explanationMm: 'ကြိုက်သည့်အရာကို ပြောရန် 好き နှင့် が ကို အသုံးပြုပါ။',
      exampleSentences: ['本が好きです。', '日本料理が好きです。']
    }
  },
  {
    level: 'N5', skill: 'Reading', lessonId: 'n5-reading-4', title: 'Daily Routine',
    content: {
      text: '毎朝七時に起きます。朝ご飯を食べて、学校に行きます。', furigana: 'まいあさしちじにおきます。あさごはんをたべて、がっこうにいきます。', meaning: 'I wake up at seven every morning. I eat breakfast and go to school.',
      meaningMm: 'နေ့စဉ် နံနက် ၇ နာရီတွင် နိုးပါသည်။ နံနက်စာစားပြီး ကျောင်းသို့ သွားပါသည်။',
      explanation: 'Practice reading about daily routines.',
      explanationMm: 'နေ့စဉ်လုပ်ရိုးလုပ်စဉ်များကို ဖတ်ရှုလေ့ကျင့်ပါ။',
      exampleSentences: ['毎日勉強します。', '晩ご飯を食べます。']
    }
  },
  {
    level: 'N5', skill: 'Writing', lessonId: 'n5-writing-6', title: 'Self-Introduction',
    content: {
      text: '初めまして。私は[名前]です。よろしくお願いします。', furigana: 'はじめまして。わたしは[なまえ]です。よろしくおねがいします。', meaning: 'Nice to meet you. I am [Name]. Please treat me well.',
      meaningMm: 'တွေ့ရတာ ဝမ်းသာပါတယ်။ ကျွန်တော်သည် [အမည်] ဖြစ်ပါသည်။ ကျေးဇူးပြုပြီး ကူညီပေးပါ။',
      explanation: 'Practice writing a short self-introduction.',
      explanationMm: 'မိတ်ဆက်စာတိုကို ရေးသားလေ့ကျင့်ပါ။',
      exampleSentences: ['初めまして。', 'よろしくお願いします。']
    }
  }
];

export const INITIAL_N5_LESSONS: Lesson[] = [...N5_BASE_LESSONS, ...EXTRA_N5_LESSONS];

// N4 Lessons - Intermediate Level
const N4_BASE_LESSONS: Lesson[] = [
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
  },

  // Extra N4 lessons per skill
  {
    level: 'N4', skill: 'Kana', lessonId: 'n4-kana-4', title: 'Hiragana: H Group',
    content: {
      text: 'はひふへほ', furigana: 'はひふへほ', meaning: 'Ha, Hi, Fu, He, Ho',
      meaningMm: 'ဟ၊ ဟိ၊ ဖု၊ ဟဲ၊ ဟို',
      explanation: 'H sounds with breath between lips.',
      explanationMm: 'နှုတ်ခမ်းများကြားတွင် လေထုတ်ပြီး ထုတ်လုပ်သော H အသံများ။',
      exampleSentences: ['はな', 'ひまわり', 'ふじさん']
    }
  },
  {
    level: 'N4', skill: 'Kanji', lessonId: 'n4-kanji-4', title: 'Action Kanji',
    content: {
      text: '行来見聞', furigana: 'いき・く・み・き', meaning: 'Go, Come, See, Hear',
      meaningMm: 'သွား၊ လာ၊ ကြည့်၊ ကြား',
      explanation: 'Common action verbs in kanji.',
      explanationMm: 'အသုံးများသော ကြိယာ ခန်ဂျီများ။',
      exampleSentences: ['行きます', '来ました', '見ました', '聞きました']
    }
  },
  {
    level: 'N4', skill: 'Vocabulary', lessonId: 'n4-vocab-4', title: 'Shopping',
    content: {
      text: '買い物・値段・レジ', furigana: 'かいもの・ねだん・れじ', meaning: 'Shopping, Price, Register',
      meaningMm: 'ဈေးဝယ်ခြင်း၊ ဈေးနှုန်း၊ ငွေကောက်စက်',
      explanation: 'Essential shopping vocabulary for N4.',
      explanationMm: 'N4 အတွက် အရေးကြီးသော ဈေးဝယ်စကားလုံးများ။',
      exampleSentences: ['買い物に行きます。', '値段はいくらですか。']
    }
  },
  {
    level: 'N4', skill: 'Grammar', lessonId: 'n4-grammar-4', title: 'Te-form for Sequence て',
    content: {
      text: '朝起きて、顔を洗って、朝ご飯を食べます。', furigana: 'あさおきて、かおをあらって、あさごはんをたべます。', meaning: 'I wake up, wash my face, and eat breakfast.',
      meaningMm: 'နိုးပြီး မျက်နှာသစ်ပြီး နံနက်စာစားပါသည်။',
      explanation: 'Te-form connects sequential actions.',
      explanationMm: 'ကြိယာ て ပုံစံသည် လုပ်ဆောင်ချက်များကို ဆက်စ်ပြပါသည်။',
      exampleSentences: ['本を読んで、寝ます。', '電車に乗って、会社に行きます。']
    }
  },
  {
    level: 'N4', skill: 'Listening', lessonId: 'n4-listening-2', title: 'Directions and Places',
    content: {
      text: '駅はまっすぐ行って、右に曲がってください。', furigana: 'えきはまっすぐいって、みぎにまがってください。', meaning: 'Go straight and turn right for the station.',
      meaningMm: 'ဘူတာရုံသို့ ဖြောင့်သွားပြီး ညာဘက်ကွေ့ပါ။',
      explanation: 'Practice listening to directions.',
      explanationMm: 'လမ်းညွှန်ချက်များကို နားထောင်လေ့ကျင့်ပါ။',
      exampleSentences: ['左に曲がってください。', 'あの建物の隣です。']
    }
  },
  {
    level: 'N4', skill: 'Speaking', lessonId: 'n4-speaking-2', title: 'Giving Opinions',
    content: {
      text: '私はそう思います。', furigana: 'わたしはそうおもいます。', meaning: 'I think so.',
      meaningMm: 'ကျွန်တော် ထို့အတွေးပါပဲ။',
      explanation: 'Practice expressing opinions politely.',
      explanationMm: 'အမြင်များကို ယဉ်ကျေးစွာ ဖော်ပြခြင်းကို လေ့ကျင့်ပါ။',
      exampleSentences: ['いいと思います。', 'そうですね。']
    }
  },
  {
    level: 'N4', skill: 'Reading', lessonId: 'n4-reading-2', title: 'Notices and Signs',
    content: {
      text: '本日は休業いたします。明日は午前九時より営業いたします。', furigana: 'ほんじつはきゅうぎょういたします。あすはごぜんくじよりえいぎょういたします。', meaning: 'We are closed today. We will open tomorrow from 9 a.m.',
      meaningMm: 'ဒီနေ့ ပိတ်ပါသည်။ မနက်ဖြန် နံနက် ၉ နာရီမှ ဖွင့်ပါမည်။',
      explanation: 'Reading short notices and announcements.',
      explanationMm: 'ကြေညာချက်တိုများကို ဖတ်ရှုလေ့ကျင့်ပါ။',
      exampleSentences: ['営業時間', '休業日']
    }
  },
  {
    level: 'N4', skill: 'Writing', lessonId: 'n4-writing-2', title: 'Short Email',
    content: {
      text: 'お疲れ様です。明日の会議は三時からでお願いします。', furigana: 'おつかれさまです。あしたのかいぎはさんじからでおねがいします。', meaning: 'Hello. Please schedule tomorrow\'s meeting from 3 p.m.',
      meaningMm: 'နေကောင်းပါသလား။ မနက်ဖြန် အစည်းအဝေးကို ညနေ ၃ နာရီမှ စပါရန်။',
      explanation: 'Practice writing short work emails.',
      explanationMm: 'အလုပ်ဆိုင်ရာ မေးလ်တိုများ ရေးသားလေ့ကျင့်ပါ။',
      exampleSentences: ['よろしくお願いします。', 'お疲れ様でした。']
    }
  }
];

export const INITIAL_N4_LESSONS: Lesson[] = [...N4_BASE_LESSONS, ...EXTRA_N4_LESSONS];

// N3 Lessons - Advanced Level
const N3_BASE_LESSONS: Lesson[] = [
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
  },

  // Extra N3 lessons per skill
  {
    level: 'N3', skill: 'Kana', lessonId: 'n3-kana-4', title: 'Katakana: Loan Words',
    content: {
      text: 'コーヒー・テレビ・コンピューター', furigana: 'こーひー・てれび・こんぴゅーたー', meaning: 'Coffee, TV, Computer',
      meaningMm: 'ကော်ဖီ၊ တီဗီ၊ ကွန်ပျူတာ',
      explanation: 'Katakana is used for foreign loan words.',
      explanationMm: 'ကာတာကာနာသည် နိုင်ငံခြားစကားလုံးများအတွက် အသုံးပြုပါသည်။',
      exampleSentences: ['コーヒーを飲みます。', 'テレビを見ます。']
    }
  },
  {
    level: 'N3', skill: 'Kanji', lessonId: 'n3-kanji-4', title: 'Society and Politics',
    content: {
      text: '社会・政治・経済', furigana: 'しゃかい・せいじ・けいざい', meaning: 'Society, Politics, Economy',
      meaningMm: 'လူ့အဖွဲ့အစည်း၊ နိုင်ငံရေး၊ စီးပွားရေး',
      explanation: 'Kanji for social and political topics.',
      explanationMm: 'လူမှုရေးနှင့် နိုင်ငံရေးဆိုင်ရာ ခန်ဂျီများ။',
      exampleSentences: ['社会問題', '経済が成長しています。']
    }
  },
  {
    level: 'N3', skill: 'Vocabulary', lessonId: 'n3-vocab-4', title: 'Formal Expressions',
    content: {
      text: '承知・かしこまりました・失礼', furigana: 'しょうち・かしこまりました・しつれい', meaning: 'Understood, Certainly, Excuse me',
      meaningMm: 'နားလည်ပါပြီ၊ ကောင်းပါပြီ၊ တစ်ဆိတ်လောက်',
      explanation: 'Polite and formal vocabulary for N3.',
      explanationMm: 'N3 အတွက် ယဉ်ကျေးသော စကားလုံးများ။',
      exampleSentences: ['承知いたしました。', '失礼いたします。']
    }
  },
  {
    level: 'N3', skill: 'Grammar', lessonId: 'n3-grammar-4', title: 'Honorific Prefix お～/ご～',
    content: {
      text: 'お名前をお聞きしてもよろしいでしょうか。', furigana: 'おなまえをおききしてもよろしいでしょうか。', meaning: 'May I ask your name?',
      meaningMm: 'သင့်နာမည်ကို မေးလို့ ရမလား။',
      explanation: 'お for native words, ご for Sino-Japanese words.',
      explanationMm: 'ဂျပန်မူရင်းစကားတွင် お၊ တရုတ်မှဆင်းသက်သော စကားတွင် ご။',
      exampleSentences: ['お電話', 'ご連絡', 'お忙しいところ']
    }
  },
  {
    level: 'N3', skill: 'Listening', lessonId: 'n3-listening-2', title: 'Office Conversations',
    content: {
      text: '会議は午後二時からです。資料の準備をお願いします。', furigana: 'かいぎはごごにじからです。しりょうのじゅんびをおねがいします。', meaning: 'The meeting is from 2 p.m. Please prepare the materials.',
      meaningMm: 'အစည်းအဝေးသည် ညနေ ၂ နာရီမှ စပါမည်။ စာရွက်စာတမ်းများ ပြင်ဆင်ပေးပါ။',
      explanation: 'Practice listening to office dialogue.',
      explanationMm: 'ရုံးဆိုင်ရာ စကားပြောဆိုမှုကို နားထောင်လေ့ကျင့်ပါ။',
      exampleSentences: ['会議室は三階です。', '資料を配布しました。']
    }
  },
  {
    level: 'N3', skill: 'Speaking', lessonId: 'n3-speaking-2', title: 'Polite Requests',
    content: {
      text: '恐れ入りますが、もう一度おっしゃっていただけますか。', furigana: 'おそれいりますが、もういちどおっしゃっていただけますか。', meaning: 'I\'m sorry, but could you say that again?',
      meaningMm: 'တောင်းပန်ပါတယ်၊ နောက်တစ်ကြိမ် ပြောပြပေးနိုင်မလား။',
      explanation: 'Practice making polite requests.',
      explanationMm: 'ယဉ်ကျေးစွာ တောင်းဆိုခြင်းကို လေ့ကျင့်ပါ။',
      exampleSentences: ['よろしければ', 'お手数をおかけしますが']
    }
  },
  {
    level: 'N3', skill: 'Reading', lessonId: 'n3-reading-2', title: 'Editorials and Opinions',
    content: {
      text: '環境問題は、私たち一人一人が考えなければならない課題である。', furigana: 'かんきょうもんだいは、わたしたちひとりひとりがかんがえなければならないかだいである。', meaning: 'Environmental issues are challenges that each of us must think about.',
      meaningMm: 'သဘာဝပတ်ဝန်းကျင် ပြဿနာများသည် ကျွန်ုပ်တို့ တစ်ဦးချင်းစီ စဉ်းစားရမည့် စိန်ခေါ်မှုများ ဖြစ်ပါသည်။',
      explanation: 'Reading opinion and editorial style text.',
      explanationMm: 'အမြင်နှင့် ဆောင်းပါးပုံစံ စာများကို ဖတ်ရှုပါ။',
      exampleSentences: ['社会問題', '将来の課題']
    }
  },
  {
    level: 'N3', skill: 'Writing', lessonId: 'n3-writing-2', title: 'Report Summary',
    content: {
      text: '本報告書では、先月の売上実績と今後の見通しについて述べる。', furigana: 'ほんほうこくしょでは、せんげつのうりあげじっせきとこんごのみとおしについてのべる。', meaning: 'This report describes last month\'s sales results and future outlook.',
      meaningMm: 'ဤအစီရင်ခံစာတွင် ပြီးခဲ့သော လ၏ ရောင်းအားရလဒ်နှင့် အနာဂတ်မျှော်မှန်းချက်ကို ဖော်ပြပါသည်။',
      explanation: 'Practice writing report summaries.',
      explanationMm: 'အစီရင်ခံစာ အကျဉ်းချုပ်များ ရေးသားလေ့ကျင့်ပါ။',
      exampleSentences: ['結論として', '今後の課題']
    }
  }
];

export const INITIAL_N3_LESSONS: Lesson[] = [...N3_BASE_LESSONS, ...EXTRA_N3_LESSONS];
