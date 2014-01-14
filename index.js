
/**
 * Strip the supplied element from the dom, while
 * still maintaining it's contents.
 * 
 * @param  {Element} el 
 */

module.exports = function(el){
  var node = el.firstChild;
  var fragment = document.createDocumentFragment();
  var currentNode;

  while (node) {
    currentNode = node;
    node = node.nextSibling;
    fragment.appendChild(currentNode);
  }

  el.parentNode.replaceChild(fragment, el);
};