return {
    // Set defaultToken to invalid to see what you do not tokenize yet
    // defaultToken: 'invalid',
  
    // /when key (\w+) is pressed/ 
    keywords: [
      /*Four Words*/
      'if on edge, bounce', 'when green flag clicked', 
      'when I start as a clone', 'when this sprite clicked',
      'when backdrop switches to',
      /*Three Words*/
      'clear sound effects', 'switch backdrop to',  
      'set rotation style', 'switch costume to',
      'point in direction', 'change volume by', 'set x to',
      'clear graphic effects', 'change x by', 'change y by',
      'set size to', 'change size by', 'stop all sounds',
      'create clone of', 'delete this clone', 'set y to',
      'when I receive',  'set volume to', 'set drag mode',
      /*Two Words*/
      'play sound', 'until done', 'start sound', 'secs to',
      'touching color', 'is touching', 'show variable',
      'length of', 'hide variable', 'mouse down?',
      'not draggable', 'reset timer', 'pick random',
      'point towards', 'effect to', 'repeat until',
      'next backdrop', 'next costume', 'effect by', 
      'key pressed', 'and wait', 'wait until:', 
      /*One Word*/  
      'broadcast', 'wait', 'repeat', 'forever', 'if', 'go',
      'move', 'steps', 'turn', 'clockwise', 'degrees', '?',
      'counter-clockwise', 'goto', 'x:', 'y:', 'glide', 
      'interface', 'say', 'seconds', 'think', 'for', 'ask', 
      'change', 'set', 'when', 'show', 'hide', 'layers',
      'then', 'else', 'stop', 'myself', 'touching', 'edge',
      'mouse-pointer', 'draggable','pressed?', 'key', 'to', 
      'color', 'and', 'or', 'not', 'join', 'change', 'by',       
      'letter', 'of', 'to', 'contains', 'mod', 'round',
    ],
  
    // typeKeywords: [
    //   'boolean', 'double', 'int', 'void'
    // ],
  
    // operators: [
    //   '+', '-', '*', '/',
    //   'pick random', 'to',
    //   '=', '>', '<',  
    //   'and', 'or', 'not',
    //   'join', 'letter', 'of', 'length of', 'contains',   '?', 'mod', 'round',
    //   'abs', 'floor', 'ceiling', 'sqrt', 'cos', 'tan',
    //   'asin', 'acos', 'atan', 'ln', 'log', 'e^', '10^',
    //   'of'
    // ],
  
    // we include these common regular expressions
    symbols:  /[=><!~?:&|+\-*\/\^%]+/,
  
    tokenizer: {
      root: [
        { include: '@whitespace' },
        { include: '@numbers' },
        { include: '@strings' },
  
        [/[,:;]/, 'delimiter'],
        [/[{}\[\]()]/, '@brackets'],
  
        [/@[a-zA-Z]\w*/, 'tag'],
        [/[a-zA-Z]\w*/, {
          cases: {
            '@keywords': 'keyword',
            '@default': 'identifier'
          }
        }]
      ],
  
      // Deal with white space, including single and multi-line comments
      whitespace: [
        [/\s+/, 'white'],
        [/(^#.*$)/, 'comment'],
        [/('''.*''')|(""".*""")/, 'string'],
        [/'''.*$/, 'string', '@endDocString'],
        [/""".*$/, 'string', '@endDblDocString']
      ],
      endDocString: [
        [/\\'/, 'string'],
        [/.*'''/, 'string', '@popall'],
        [/.*$/, 'string']
      ],
      endDblDocString: [
        [/\\"/, 'string'],
        [/.*"""/, 'string', '@popall'],
        [/.*$/, 'string']
      ],
  
      // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
      numbers: [
        [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
        [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
      ],
  
      // Recognize strings, including those broken across lines with \ (but not without)
      strings: [
        [/'$/, 'string.escape', '@popall'],
        [/'/, 'string.escape', '@stringBody'],
        [/"$/, 'string.escape', '@popall'],
        [/"/, 'string.escape', '@dblStringBody']
      ],
      stringBody: [
        [/[^\\']+$/, 'string', '@popall'],
        [/[^\\']+/, 'string'],
        [/\\./, 'string'],
        [/'/, 'string.escape', '@popall'],
        [/\\$/, 'string']
      ],
      dblStringBody: [
        [/[^\\"]+$/, 'string', '@popall'],
        [/[^\\"]+/, 'string'],
        [/\\./, 'string'],
        [/"/, 'string.escape', '@popall'],
        [/\\$/, 'string']
      ]
    }
  };
  