export const handleLongText = (text = '', lengthOfHead = 0, lengthOfTag = 0) => {
  if (typeof text !== 'string') {
    text = JSON.stringify(text);
  }
  if (text.length > lengthOfHead + lengthOfTag) {
    return `${text.slice(0, lengthOfHead)}...${text.slice(0 - lengthOfTag)}`;
  } else {
    return text;
  }
};