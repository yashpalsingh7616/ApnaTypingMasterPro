/* ══════════════════════════════════════════════════════
   PASSAGES — Normal (free: 2, pro: all)
══════════════════════════════════════════════════════ */
const PASS = {
  english:[
    "Afterwards it became known by all and was reported to the king. He called the bad minister before him and said, I have investigated and found that you have done a criminal act. Word of it has spread and you have dishonoured yourself here in Benares. So it would be better for you to go and live somewhere else. You may take all your wealth and your family. Go wherever you like and live happily there. Learn from this lesson. Then the minister took his family and all his belongings to the city of Kosala. Since he was very clever indeed, he worked his way up and became a minister of the king of Kosala as well.",
    "Education is the most powerful weapon which you can use to change the world. It is through knowledge and learning that individuals gain the tools necessary to improve their lives and contribute meaningfully to society. A well-educated population forms the backbone of any thriving democracy and enables citizens to make informed decisions and participate in governance effectively.",
    "The sun was setting over the horizon painting the sky in brilliant shades of orange and crimson. A cool breeze swept across the vast expanse of the wheat fields making the golden stalks sway in graceful unison. The farmer stood at the edge of his land and gazed at the fruits of his labour with quiet satisfaction. It had been a long and difficult season but the harvest promised to be bountiful this year.",
    "Science and technology have transformed the world in ways that our ancestors could never have imagined. From the invention of the wheel to the development of artificial intelligence human ingenuity has continuously pushed the boundaries of what is possible. The digital revolution in particular has changed how we communicate work and learn.",
    "India is a land of incredible diversity where thousands of languages and hundreds of cultures coexist in relative harmony. This diversity has given India a unique character that is simultaneously ancient and modern. The Constitution of India recognizes and celebrates this diversity while also affirming the fundamental unity.",
    "The Indian judiciary plays a vital role in upholding the rule of law and protecting the fundamental rights of citizens. The Supreme Court of India acts as the guardian of the Constitution and has the power of judicial review over all legislative and executive actions.",
    "Railway transportation has been the backbone of India since its introduction in eighteen fifty three. Today Indian Railways is one of the largest railway networks in the world connecting thousands of cities towns and villages across the country.",
    "The right to information is a fundamental aspect of democratic governance. When citizens have access to information about how their government functions they are better equipped to hold public officials accountable.",
    "Environmental conservation has become one of the most pressing challenges of our time. The rapid industrialization and urbanization of recent decades have taken a heavy toll on natural ecosystems leading to deforestation pollution of air and water.",
    "The Preamble of the Indian Constitution begins with the words We the People of India thereby emphasizing that the ultimate source of authority in India is the people themselves."
  ],
  hindi:[
    "जिसकी मंजूरी बाईबल में दी गयी और जिस जिद से वे अपनी वापसी में फिलिस्तीन को चाहने लगे हैं। क्यों नही वे, पृथ्वी के दुसरे लोगों से प्रेम करते हैं, उस देश को अपना घर बनाते जहाँ पर उनका जन्म हुआ और जहाँ पर उन्होंने जीविकोपार्जन किया।",
    "भारत एक विविधताओं से भरा देश है जहाँ अनेक धर्म, भाषाएँ और संस्कृतियाँ एक साथ फलती-फूलती हैं। यहाँ के लोगों में एकता और भाईचारे की भावना सदियों से विद्यमान है। भारत की मिट्टी में वह शक्ति है जो हर बाधा को पार करके आगे बढ़ती रहती है।",
    "शिक्षा मनुष्य के जीवन में सबसे महत्वपूर्ण भूमिका निभाती है। यह न केवल ज्ञान प्रदान करती है बल्कि व्यक्ति को सोचने, समझने और सही निर्णय लेने की क्षमता भी देती है।",
    "भारत सरकार ने ग्रामीण क्षेत्रों में साक्षरता दर बढ़ाने के लिए अनेक महत्वपूर्ण कदम उठाए हैं। चौदह वर्ष से कम आयु के बच्चों को निःशुल्क शिक्षा प्रदान करने हेतु विशेष कार्यक्रम शुरू किए गए हैं।",
    "न्यायपालिका किसी भी लोकतांत्रिक देश का एक महत्वपूर्ण स्तंभ होती है। भारत में उच्चतम न्यायालय संविधान का संरक्षक है और नागरिकों के मूल अधिकारों की रक्षा करता है।",
    "भारतीय रेलवे देश की अर्थव्यवस्था की जीवन रेखा है। यह लाखों यात्रियों को प्रतिदिन उनके गंतव्य तक पहुँचाती है और करोड़ों टन माल का परिवहन करती है।"
  ],
  numbers:[
    "1234 5678 9012 3456 7890 1122 3344 5566 7788 9900 1357 2468 1020 3040 5060 7080 9010",
    "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
    "15 30 45 60 75 90 105 120 135 150 165 180 195 210 225 240 255 270 285 300"
  ]
};

/* ══════════════════════════════════════════════════════
   LIVE PASSAGES
══════════════════════════════════════════════════════ */
const LIVE_PASS = {
  english:[
    "The Uttar Pradesh Subordinate Services Selection Commission conducts recruitment examinations for various posts in the state government. Candidates appearing for these posts must demonstrate proficiency in both English and Hindi typing. The minimum speed required for English typing is thirty words per minute. Regular practice is essential to achieve this target. Candidates should focus on accuracy as much as speed to qualify in the typing skill test.",
    "The Uttar Pradesh Police department is one of the largest police forces in the country. It plays a crucial role in maintaining law and order across the state. Candidates selected for the post of Sub Inspector are required to undergo rigorous training at the police academy. During training they are taught various aspects of law investigation and administration. Physical fitness is equally important for police personnel as it helps them perform their duties effectively. The recruitment process includes a written examination physical test and a typing skill test. Candidates must prepare thoroughly for all stages of the selection process to secure their position in the UP Police department.",
    "Indian Railways is one of the largest employers in the world and conducts the NTPC examination to recruit candidates for various non technical positions. The posts include junior clerk cum typist accounts clerk cum typist junior time keeper and commercial cum ticket clerk among others. Typing speed is a mandatory requirement for most of these posts. Candidates must achieve a minimum typing speed of thirty words per minute in English or twenty five words per minute in Hindi. The examination is conducted in multiple stages including a computer based test and a typing skill test. Proper preparation and consistent practice are the keys to success in this examination.",
    "The Staff Selection Commission Combined Graduate Level examination is one of the most prestigious competitive examinations in India. It is conducted to recruit candidates for various Group B and Group C posts in different ministries departments and organisations of the Government of India. The typing test for SSC CGL requires candidates to achieve a minimum speed of thirty five words per minute in English. The test is conducted on a computer and candidates are not allowed to use spell check or copy paste functions. The backspace key can only be used to correct errors within the current word and not to go back to the previous word. Candidates should practice regularly on similar passages to improve their speed and accuracy before appearing for the actual examination."
  ],
  hindi:[
    "उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग राज्य सरकार के विभिन्न विभागों में भर्ती के लिए परीक्षाएँ आयोजित करता है। हिंदी टाइपिंग में न्यूनतम गति पच्चीस शब्द प्रति मिनट निर्धारित की गई है। उम्मीदवारों को मंगल यूनिकोड फ़ॉन्ट में टाइपिंग का अभ्यास करना चाहिए। सटीकता और गति दोनों पर ध्यान देना अत्यंत आवश्यक है।",
    "उत्तर प्रदेश की सरकारी नौकरियों में हिंदी टाइपिंग एक महत्वपूर्ण कौशल है। कृतिदेव फ़ॉन्ट में टाइपिंग का अभ्यास प्रतिदिन करना चाहिए। परीक्षा में बैकस्पेस का उपयोग सीमित मात्रा में ही किया जा सकता है। प्रत्येक शब्द को ध्यानपूर्वक पढ़कर टाइप करें। समय प्रबंधन भी टाइपिंग परीक्षा में सफलता की कुंजी है।",
    "उत्तर प्रदेश पुलिस विभाग में उप निरीक्षक के पद पर भर्ती के लिए लिखित परीक्षा शारीरिक परीक्षण और टाइपिंग कौशल परीक्षा आयोजित की जाती है। हिंदी टाइपिंग में न्यूनतम पच्चीस शब्द प्रति मिनट की गति आवश्यक है। उम्मीदवारों को मंगल यूनिकोड फ़ॉन्ट में अभ्यास करना चाहिए। पुलिस विभाग में कार्यरत अधिकारियों को कानून व्यवस्था बनाए रखने की जिम्मेदारी होती है। टाइपिंग परीक्षा में स्पेल चेक और कॉपी पेस्ट का उपयोग वर्जित है। नियमित अभ्यास से गति और सटीकता दोनों में सुधार होता है। अभ्यर्थियों को परीक्षा से पहले कम से कम एक घंटा प्रतिदिन टाइपिंग का अभ्यास अवश्य करना चाहिए।",
    "मध्य प्रदेश पुलिस विभाग में सहायक उप निरीक्षक के पद पर भर्ती एक सम्मानजनक अवसर है। इस पद के लिए हिंदी टाइपिंग की परीक्षा तीस मिनट की होती है। उम्मीदवारों को मंगल यूनिकोड फ़ॉन्ट में टाइपिंग करनी होती है। परीक्षा में बैकस्पेस का उपयोग पूरी तरह से अनुमत है परंतु स्पेल चेक वर्जित है। न्यूनतम पच्चीस शब्द प्रति मिनट की गति आवश्यक है। पुलिस विभाग में अनुशासन सबसे महत्वपूर्ण गुण है। कर्तव्यनिष्ठा और ईमानदारी के साथ कार्य करने वाले अधिकारी ही जनता का विश्वास अर्जित कर सकते हैं। टाइपिंग परीक्षा में सफलता के लिए नियमित अभ्यास आवश्यक है। अपनी गति को धीरे धीरे बढ़ाएं और सटीकता पर विशेष ध्यान दें। परीक्षा के दौरान शांत रहें और प्रत्येक शब्द को ध्यान से पढ़कर टाइप करें।"
  ]
};

const EXAM_PROFILES = {
  'SSC CGL':       { engWPM:35, hinWPM:30, time:10, backspace:'Word-by-Word', netFormula:'ssc',    highlight:'Mostly Disabled', spellCheck:false, copyPaste:false },
  'SSC CHSL':      { engWPM:35, hinWPM:30, time:10, backspace:'Word-by-Word', netFormula:'ssc',    highlight:'Mostly Disabled', spellCheck:false, copyPaste:false },
  'RRB NTPC':      { engWPM:30, hinWPM:25, time:10, backspace:'Limited',      netFormula:'rrb',    highlight:'Disabled',        spellCheck:false, copyPaste:false },
  'UP Police ASI/SI':{ engWPM:25,hinWPM:25,time:15, backspace:'Fully Allowed',netFormula:'upsssc', highlight:'Disabled',        spellCheck:false, copyPaste:false },
  'UPSSSC 2026':   { engWPM:30, hinWPM:25, time:5,  backspace:'Limited',      netFormula:'upsssc', highlight:'Disabled',        spellCheck:false, copyPaste:false },
  'MP Police ASI': { engWPM:30, hinWPM:25, time:30, backspace:'Fully Allowed',netFormula:'upsssc', highlight:'Disabled',        spellCheck:false, copyPaste:false },
  'Allahabad HC':  { engWPM:35, hinWPM:30, time:10, backspace:'Limited',      netFormula:'court',  highlight:'Disabled',        spellCheck:false, copyPaste:false },
};

let LIVE_SCHEDULE = [
  {id:1, exam:"UPSSSC 2026",     lang:"English",              timeSlot:"06:00 AM - 10:00 PM", free:true, duration:5,  backspace:"Limited Backspace", highlight:"Disabled", passKey:'english', passIdx:0},
  {id:2, exam:"UPSSSC 2026",     lang:"Hindi → Mangal Unicode",timeSlot:"06:00 AM - 10:00 PM",free:true, duration:5,  backspace:"Limited Backspace", highlight:"Disabled", passKey:'hindi',   passIdx:0},
  {id:3, exam:"UPSSSC 2026",     lang:"Hindi → Krutidev",     timeSlot:"06:00 AM - 10:00 PM", free:true, duration:5,  backspace:"Limited Backspace", highlight:"Disabled", passKey:'hindi',   passIdx:1},
  {id:4, exam:"UP Police ASI/SI",lang:"Hindi → Mangal Unicode",timeSlot:"06:00 AM - 11:00 PM",free:true, duration:15, backspace:"Fully Allowed",     highlight:"Disabled", passKey:'hindi',   passIdx:2},
  {id:5, exam:"UP Police ASI/SI",lang:"English",               timeSlot:"06:00 AM - 11:00 PM", free:true, duration:15, backspace:"Fully Allowed",    highlight:"Disabled", passKey:'english', passIdx:1},
  {id:6, exam:"RRB NTPC",        lang:"English",               timeSlot:"07:00 AM - 10:00 PM", free:true, duration:10, backspace:"Limited Backspace", highlight:"Disabled", passKey:'english', passIdx:2},
  {id:7, exam:"MP Police ASI",   lang:"Hindi → Mangal Unicode",timeSlot:"11:00 AM - 03:00 PM",free:true, duration:30, backspace:"Fully Allowed",     highlight:"Disabled", passKey:'hindi',   passIdx:3},
  {id:8, exam:"SSC CGL",         lang:"English",               timeSlot:"08:00 AM - 11:00 PM", free:true, duration:10, backspace:"Word-by-Word",      highlight:"Disabled", passKey:'english', passIdx:3}
];

const EXAM_RULES={
  ssc_eng:{name:'SSC CGL — English',time:10,lang:'english',backspace:'word',highlight:'none',minWPM:35,info:['⏱ 10 Min','🎯 35 WPM','⌫ Word-by-Word','📊 Net = Gross – Errors×10']},
  ssc_hindi:{name:'SSC CGL — Hindi',time:10,lang:'hindi',backspace:'word',highlight:'none',minWPM:30,info:['⏱ 10 Min','🎯 30 WPM','⌫ Word-by-Word']},
  chsl_eng:{name:'SSC CHSL — English',time:10,lang:'english',backspace:'word',highlight:'none',minWPM:35,info:['⏱ 10 Min','🎯 35 WPM']},
  chsl_hindi:{name:'SSC CHSL — Hindi',time:10,lang:'hindi',backspace:'word',highlight:'none',minWPM:30,info:['⏱ 10 Min','🎯 30 WPM']},
  rrb_eng:{name:'RRB NTPC — English',time:10,lang:'english',backspace:'full',highlight:'none',minWPM:30,info:['⏱ 10 Min','🎯 30 WPM']},
  rrb_hindi:{name:'RRB NTPC — Hindi',time:10,lang:'hindi',backspace:'full',highlight:'none',minWPM:25,info:['⏱ 10 Min','🎯 25 WPM']},
  upsssc_eng:{name:'UPSSSC — English',time:10,lang:'english',backspace:'word',highlight:'none',minWPM:30,info:['⏱ 5-10 Min','🎯 30 WPM']},
  upsssc_hindi:{name:'UPSSSC — Hindi',time:10,lang:'hindi',backspace:'word',highlight:'none',minWPM:25,info:['⏱ 5-10 Min','🎯 25 WPM']},
  ahc_hindi:{name:'Allahabad HC — Hindi',time:10,lang:'hindi',backspace:'word',highlight:'error',minWPM:30,info:['⏱ 10 Min','🎯 30 WPM']},
  ahc_eng:{name:'Allahabad HC — English',time:10,lang:'english',backspace:'word',highlight:'error',minWPM:35,info:['⏱ 10 Min','🎯 35 WPM']}
};

function calcNet(gross, errors, backspaceCount, formula){
  if(formula==='ssc')    return Math.max(0, gross - (errors * 10));
  if(formula==='rrb')    return Math.max(0, gross - (errors * 2));
  if(formula==='upsssc') return Math.max(0, gross - errors);
  if(formula==='court')  return Math.max(0, gross - (errors * 5));
  return Math.max(0, gross - errors);
}

const PLANS_DATA = {
  monthly:  {base:126.27,gst:22.73,total:149,label:'Pro Monthly',days:30},
  quarterly:{base:295.76,gst:53.24,total:349,label:'Pro 3-Monthly',days:90},
  yearly:   {base:847.46,gst:151.54,total:999,label:'Pro Yearly',days:365}
};

const KMAP={
  ' ':' ',
  'k':'ा','i':'ि','I':'ी','u':'ु','U':'ू','e':'े','E':'ै','o':'ो','O':'ौ','a':'अ','A':'आ',
  'M':'ं','%':'ः',']':'्','d':'क','D':'ख','g':'ग','G':'घ','p':'च','P':'छ','j':'ज','J':'झ',
  'q':'ट','Q':'ठ','n':'ड','N':'ढ','.':'ण','r':'त','R':'थ','w':'द','W':'ध','f':'न','c':'प',
  'C':'फ','b':'ब','B':'भ','m':'म',';':'य','y':'र','l':'ल','v':'व','s':'स','S':'श','"':'ष',
  'h':'ह','z':'ज्ञ','/':'श्र','x':'क्ष',
  '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',',':',','.':'.','!':'!','?':'?'
};

const LESSONS=[
  {t:"Day 1: Home Row — f j k l", c:"f j d l f j d l fj dk lk", u:"न ज क ल न ज क ल नज दक लक"},
  {t:"Day 2: Home Row Words", c:"dk fk jk lk gk hk mk sk bk", u:"का ना जा ला गा हा मा सा बा"},
  {t:"Day 3: Simple Words", c:"dkj fke jky vkj gky", u:"कार नाम जाल आर गाल"}
];
