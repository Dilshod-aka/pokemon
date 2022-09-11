let $ =  function(selector, node = document){
  return node.querySelector(selector);
};

let $a =  function(selector, node = document){
  return node.querySelectorAll(selector);
};


let createElement = function (tagName , classNameF , text){
  let element =  document.createElement(tagName);

  if (classNameF) {
    element.setAttribute("class", classNameF);
  }
  if (text) {
    element.textContent = text;
  }

  return(element);
}
