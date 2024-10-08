const decodeTheRing = function(s, p) {
  const sLen = s.length, pLen = p.length;
  const dp = Array(sLen + 1).fill(null).map(() => Array(pLen + 1).fill(false));

  dp[0][0] = true;

  for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  for (let i = 1; i <= sLen; i++) {
      for (let j = 1; j <= pLen; j++) {
          const patternChar = p[j - 1], stringChar = s[i - 1];

          if (patternChar === '?' || patternChar === stringChar) {
              dp[i][j] = dp[i - 1][j - 1];
          } else if (patternChar === '*') {
              dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
          }
      }
  }

  return dp[sLen][pLen];
};

module.exports = decodeTheRing;