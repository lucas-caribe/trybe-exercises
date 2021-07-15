function getEncodedDecodedMessage(message, table) {
  let newMessage = '';

  for (let char of message) {
    if (table[char]) newMessage += table[char];
    else newMessage += char;
  }

  return newMessage;
}

function encode(message) {
  let encodeTable = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  return getEncodedDecodedMessage(message, encodeTable);
}

function decode(message) {
  let decodeTable = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return getEncodedDecodedMessage(message, decodeTable);
}

module.exports = { encode, decode };
