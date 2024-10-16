const irregularVerbs = [
  { base: 'abide', past: 'abode/abided', pastParticiple: 'abode/abided' },
  { base: 'arise', past: 'arose', pastParticiple: 'arisen' },
  { base: 'awake', past: 'awoke', pastParticiple: 'awoken' },
  { base: 'be', past: 'was/were', pastParticiple: 'been' },
  { base: 'bear', past: 'bore', pastParticiple: 'borne/born' },
  { base: 'beat', past: 'beat', pastParticiple: 'beaten' },
  { base: 'become', past: 'became', pastParticiple: 'become' },
  { base: 'beget', past: 'begot', pastParticiple: 'begotten' },
  { base: 'begin', past: 'began', pastParticiple: 'begun' },
  { base: 'bend', past: 'bent', pastParticiple: 'bent' },
  { base: 'bet', past: 'bet', pastParticiple: 'bet' },
  { base: 'bid', past: 'bid', pastParticiple: 'bid' },
  { base: 'bind', past: 'bound', pastParticiple: 'bound' },
  { base: 'bleed', past: 'bled', pastParticiple: 'bled' },
  { base: 'blow', past: 'blew', pastParticiple: 'blown' },
  { base: 'break', past: 'broke', pastParticiple: 'broken' },
  { base: 'breed', past: 'bred', pastParticiple: 'bred' },
  { base: 'bring', past: 'brought', pastParticiple: 'brought' },
  { base: 'broadcast', past: 'broadcast', pastParticiple: 'broadcast' },
  { base: 'build', past: 'built', pastParticiple: 'built' },
  { base: 'burn', past: 'burnt/burned', pastParticiple: 'burnt/burned' },
  { base: 'burst', past: 'burst', pastParticiple: 'burst' },
  { base: 'buy', past: 'bought', pastParticiple: 'bought' },
  { base: 'catch', past: 'caught', pastParticiple: 'caught' },
  { base: 'choose', past: 'chose', pastParticiple: 'chosen' },
  { base: 'cling', past: 'clung', pastParticiple: 'clung' },
  { base: 'come', past: 'came', pastParticiple: 'come' },
  { base: 'cost', past: 'cost', pastParticiple: 'cost' },
  { base: 'creep', past: 'crept', pastParticiple: 'crept' },
  { base: 'cut', past: 'cut', pastParticiple: 'cut' },
  { base: 'deal', past: 'dealt', pastParticiple: 'dealt' },
  { base: 'dig', past: 'dug', pastParticiple: 'dug' },
  { base: 'dive', past: 'dove/dived', pastParticiple: 'dived' },
  { base: 'do', past: 'did', pastParticiple: 'done' },
  { base: 'draw', past: 'drew', pastParticiple: 'drawn' },
  { base: 'drink', past: 'drank', pastParticiple: 'drunk' },
  { base: 'drive', past: 'drove', pastParticiple: 'driven' },
  { base: 'dwell', past: 'dwelt/dwelled', pastParticiple: 'dwelt/dwelled' },
  { base: 'eat', past: 'ate', pastParticiple: 'eaten' },
  { base: 'fall', past: 'fell', pastParticiple: 'fallen' },
  { base: 'feed', past: 'fed', pastParticiple: 'fed' },
  { base: 'feel', past: 'felt', pastParticiple: 'felt' },
  { base: 'fight', past: 'fought', pastParticiple: 'fought' },
  { base: 'find', past: 'found', pastParticiple: 'found' },
  { base: 'flee', past: 'fled', pastParticiple: 'fled' },
  { base: 'fling', past: 'flung', pastParticiple: 'flung' },
  { base: 'fly', past: 'flew', pastParticiple: 'flown' },
  { base: 'forbid', past: 'forbade', pastParticiple: 'forbidden' },
  { base: 'foresee', past: 'foresaw', pastParticiple: 'foreseen' },
  { base: 'foretell', past: 'foretold', pastParticiple: 'foretold' },
  { base: 'forget', past: 'forgot', pastParticiple: 'forgotten' },
  { base: 'forgive', past: 'forgave', pastParticiple: 'forgiven' },
  { base: 'forsake', past: 'forsook', pastParticiple: 'forsaken' },
  { base: 'freeze', past: 'froze', pastParticiple: 'frozen' },
  { base: 'get', past: 'got', pastParticiple: 'gotten' },
  { base: 'give', past: 'gave', pastParticiple: 'given' },
  { base: 'go', past: 'went', pastParticiple: 'gone' },
  { base: 'grind', past: 'ground', pastParticiple: 'ground' },
  { base: 'grow', past: 'grew', pastParticiple: 'grown' },
  { base: 'hang', past: 'hung', pastParticiple: 'hung' },
  { base: 'have', past: 'had', pastParticiple: 'had' },
  { base: 'hear', past: 'heard', pastParticiple: 'heard' },
  { base: 'hide', past: 'hid', pastParticiple: 'hidden' },
  { base: 'hit', past: 'hit', pastParticiple: 'hit' },
  { base: 'hold', past: 'held', pastParticiple: 'held' },
  { base: 'hurt', past: 'hurt', pastParticiple: 'hurt' },
  { base: 'keep', past: 'kept', pastParticiple: 'kept' },
  { base: 'kneel', past: 'knelt/kneeled', pastParticiple: 'knelt/kneeled' },
  { base: 'knit', past: 'knit/knitted', pastParticiple: 'knit/knitted' },
  { base: 'know', past: 'knew', pastParticiple: 'known' },
  { base: 'lay', past: 'laid', pastParticiple: 'laid' },
  { base: 'lead', past: 'led', pastParticiple: 'led' },
  { base: 'lean', past: 'leant/leaned', pastParticiple: 'leant/leaned' },
  { base: 'leap', past: 'leapt/leaped', pastParticiple: 'leapt/leaped' },
  { base: 'leave', past: 'left', pastParticiple: 'left' },
  { base: 'lend', past: 'lent', pastParticiple: 'lent' },
  { base: 'let', past: 'let', pastParticiple: 'let' },
  { base: 'light', past: 'lit/lighted', pastParticiple: 'lit/lighted' },
  { base: 'lose', past: 'lost', pastParticiple: 'lost' },
  { base: 'make', past: 'made', pastParticiple: 'made' },
  { base: 'mean', past: 'meant', pastParticiple: 'meant' },
  { base: 'meet', past: 'met', pastParticiple: 'met' },
  { base: 'mislead', past: 'misled', pastParticiple: 'misled' },
  { base: 'misunderstand', past: 'misunderstood', pastParticiple: 'misunderstood' },
  { base: 'mow', past: 'mowed', pastParticiple: 'mown/mowed' },
  { base: 'pay', past: 'paid', pastParticiple: 'paid' },
  { base: 'plead', past: 'pled/pleaded', pastParticiple: 'pled/pleaded' },
  { base: 'prove', past: 'proved', pastParticiple: 'proven/proved' },
  { base: 'put', past: 'put', pastParticiple: 'put' },
  { base: 'quit', past: 'quit', pastParticiple: 'quit' },
  { base: 'read', past: 'read', pastParticiple: 'read' },
  { base: 'rid', past: 'rid', pastParticiple: 'rid' },
  { base: 'ride', past: 'rode', pastParticiple: 'ridden' },
  { base: 'ring', past: 'rang', pastParticiple: 'rung' },
  { base: 'run', past: 'ran', pastParticiple: 'run' },
  { base: 'saw', past: 'sawed', pastParticiple: 'sawn/sawed' },
  { base: 'say', past: 'said', pastParticiple: 'said' },
  { base: 'see', past: 'saw', pastParticiple: 'seen' },
  { base: 'seek', past: 'sought', pastParticiple: 'sought' },
  { base: 'sell', past: 'sold', pastParticiple: 'sold' },
  { base: 'send', past: 'sent', pastParticiple: 'sent' },
  { base: 'set', past: 'set', pastParticiple: 'set' },
  { base: 'sew', past: 'sewed', pastParticiple: 'sewn/sewed' },
  { base: 'shake', past: 'shook', pastParticiple: 'shaken' },
  { base: 'shear', past: 'sheared', pastParticiple: 'shorn/sheared' },
  { base: 'shed', past: 'shed', pastParticiple: 'shed' },
  { base: 'shine', past: 'shone', pastParticiple: 'shone' },
  { base: 'shoe', past: 'shod', pastParticiple: 'shod' },
  { base: 'show', past: 'showed', pastParticiple: 'shown' },
  { base: 'shrink', past: 'shrank', pastParticiple: 'shrunk' },
  { base: 'shut', past: 'shut', pastParticiple: 'shut' },
  { base: 'sing', past: 'sang', pastParticiple: 'sung' },
  { base: 'sink', past: 'sank', pastParticiple: 'sunk' },
  { base: 'sit', past: 'sat', pastParticiple: 'sat' },
  { base: 'slay', past: 'slew', pastParticiple: 'slain' },
  { base: 'sleep', past: 'slept', pastParticiple: 'slept' },
  { base: 'slide', past: 'slid', pastParticiple: 'slid' },
  { base: 'sling', past: 'slung', pastParticiple: 'slung' },
  { base: 'slink', past: 'slunk', pastParticiple: 'slunk' },
  { base: 'smell', past: 'smelt/smelled', pastParticiple: 'smelt/smelled' },
  { base: 'sow', past: 'sowed', pastParticiple: 'sown/sowed' },
  { base: 'speak', past: 'spoke', pastParticiple: 'spoken' },
  { base: 'speed', past: 'sped/speeded', pastParticiple: 'sped/speeded' },
  { base: 'spell', past: 'spelt/spelled', pastParticiple: 'spelt/spelled' },
  { base: 'spend', past: 'spent', pastParticiple: 'spent' },
  { base: 'spill', past: 'spilt/spilled', pastParticiple: 'spilt/spilled' },
  { base: 'spin', past: 'spun', pastParticiple: 'spun' },
  { base: 'spit', past: 'spat', pastParticiple: 'spat' },
  { base: 'split', past: 'split', pastParticiple: 'split' },
  { base: 'spoil', past: 'spoilt/spoiled', pastParticiple: 'spoilt/spoiled' },
  { base: 'spread', past: 'spread', pastParticiple: 'spread' },
  { base: 'spring', past: 'sprang', pastParticiple: 'sprung' },
  { base: 'stand', past: 'stood', pastParticiple: 'stood' },
  { base: 'steal', past: 'stole', pastParticiple: 'stolen' },
  { base: 'stick', past: 'stuck', pastParticiple: 'stuck' },
  { base: 'sting', past: 'stung', pastParticiple: 'stung' },
  { base: 'stink', past: 'stank', pastParticiple: 'stunk' },
  { base: 'strike', past: 'struck', pastParticiple: 'struck' },
  { base: 'string', past: 'strung', pastParticiple: 'strung' },
  { base: 'strive', past: 'strove', pastParticiple: 'striven' },
  { base: 'swear', past: 'swore', pastParticiple: 'sworn' },
  { base: 'sweep', past: 'swept', pastParticiple: 'swept' },
  { base: 'swell', past: 'swelled', pastParticiple: 'swollen/swelled' },
  { base: 'swim', past: 'swam', pastParticiple: 'swum' },
  { base: 'swing', past: 'swung', pastParticiple: 'swung' },
  { base: 'take', past: 'took', pastParticiple: 'taken' },
  { base: 'teach', past: 'taught', pastParticiple: 'taught' },
  { base: 'tear', past: 'tore', pastParticiple: 'torn' },
  { base: 'tell', past: 'told', pastParticiple: 'told' },
  { base: 'think', past: 'thought', pastParticiple: 'thought' },
  { base: 'throw', past: 'threw', pastParticiple: 'thrown' },
  { base: 'thrust', past: 'thrust', pastParticiple: 'thrust' },
  { base: 'tread', past: 'trod', pastParticiple: 'trodden/trod' },
  { base: 'understand', past: 'understood', pastParticiple: 'understood' },
  { base: 'upset', past: 'upset', pastParticiple: 'upset' },
  { base: 'wake', past: 'woke', pastParticiple: 'woken' },
  { base: 'wear', past: 'wore', pastParticiple: 'worn' },
  { base: 'weave', past: 'wove', pastParticiple: 'woven' },
  { base: 'weep', past: 'wept', pastParticiple: 'wept' },
  { base: 'wet', past: 'wet/wetted', pastParticiple: 'wet/wetted' },
  { base: 'win', past: 'won', pastParticiple: 'won' },
  { base: 'wind', past: 'wound', pastParticiple: 'wound' },
  { base: 'wring', past: 'wrung', pastParticiple: 'wrung' },
  { base: 'write', past: 'wrote', pastParticiple: 'written' }
];

module.exports = irregularVerbs;