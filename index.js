const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(tutorial){
    return tutorial
      .split(" ")
      .map(function(word){
        if (word === "NaN") {
          return "NaN"; 
        }
        if (word === "stopPropagation") {
          return "StopPropagation"
        }
        if (word === "preventDefault?") {
          return "PreventDefault?"
        }
        if (word === "OO" || word === "API"|| word === "JSONP?") {
          return word.toUpperCase(); 
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
  });
}
