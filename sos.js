const sos = (str) => {
  let messages = str.split("").reduce((chunks, s, i) => {
    if (i % 3 === 0) {
      chunks.push([s]);
    } else {
      chunks[chunks.length - 1].push(s);
    };
    return chunks;
  }, []);

  let answer = messages.map((message) => {
    return message.reduce((count, char, i) => {
      if ("SOS"[i] != char) { 
        return count += 1;
      };
      return count;
    }, 0);
  });

  return answer.reduce((sum, n) => { return sum += n }, 0);
};


module.exports = sos;
