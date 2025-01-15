function wordPattern(pattern: string, s: string): boolean {
  const sArray: string[] = s.split(' ');

  if (pattern.length !== sArray.length) return false;

  const charToWord = new Map<string, string>(); // 
  const wordToChar = new Map<string, string>(); // 

  for (let i = 0; i < pattern.length; i++) { // 3

      const char: string = pattern[i]; // a
      if (!charToWord.has(char) && !wordToChar.has(sArray[i])) {// 
          charToWord.set(char, sArray[i]); 
          wordToChar.set(sArray[i], char); 
          continue;
      }
      if (charToWord.get(char) !== sArray[i] || wordToChar.get(sArray[i]) !== char) return false; //
  }

  return true;
};

const pattern = "abba", s = "dog cat cat dog";

console.log( 
  wordPattern(pattern, s) // true
)