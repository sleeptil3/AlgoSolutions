/*
PROMPT:
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all unique characters. (you can assume that the characters are all lowercase)

Must solve with time complexity of O(N)

EXAMPLES and their RETURNS:
  findLongestSubstring("") // 0
  findLongestSubstring("rithmschool") // 7
  findLongestSubstring("thisisawesome") // 6
  findLongestSubstring("thecatinthehat") // 7
  findLongestSubstring("bbbbbb") // 1
  findLongestSubstring("longestsubstring") // 8
  findLongestSubstring("thisishowwedoit") // 6
*/

// PROBLEM SOLVING TACTIC USED: Sliding Window

// SOLUTION WITHOUT COMMENTS

function findLongestSubstring(str){
  if (str.length === 0) return 0
    
  const lastSeen = {}
  let winStart = 0
  let max = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (lastSeen.hasOwnProperty(char)) {
      if (lastSeen[char] >= winStart) {
        max = Math.max(max, i - winStart)
        winStart = lastSeen[char] + 1
      }
    }
    lastSeen[char] = i
  }

  max = Math.max(max, str.length - winStart)
  return max
}


// SOLUTION WITH COMMENTS

function findLongestSubstring(str){
  // short circuit for empty string
  if (str.length === 0) return 0
  // create obj to hold last time char was seen
  // create vars for current window start, and max substring length
  const lastSeen = {}
  let winStart = 0
  let max = 0
  
  // iterate over string
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    // if char has been seen before
    if (lastSeen.hasOwnProperty(char)) {
      // if lastSeen is inside the current window (seen is >= winStart)
      if (lastSeen[char] >= winStart) {
        // save length to max from winStart to i, if its > the current max
        max = Math.max(max, i - winStart)
        // set new winStart to 1 beyond the previous time char was seen
        winStart = lastSeen[char] + 1
      }
    }
    // set lastSeen for this char to i
    lastSeen[char] = i
  }
  // final window max check after loop finishes to check if the end of the string was the max substring 
  max = Math.max(max, str.length - winStart)
  return max
}

