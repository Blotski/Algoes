function strStr(haystack: string, needle: string): number {

  for (let i = 0; i <= haystack.length - needle.length; i++) {
      // if (haystack[i] === needle[0]) {
          // if (haystack.slice(i, i + needle.length) === needle) {
          //     return i;
          // }
      // }
      
      let match: boolean = true;

      for (let j = 0; j < needle.length; j++) {
          if (needle[j] !== haystack[i + j]) {
              match = false;
              break;
          }
      }
      if (match) return i;
  }
  return -1;
};