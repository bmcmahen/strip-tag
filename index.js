
/**
 * Strip the supplied element from the dom, while
 * still maintaining it's contents.
 * 
 * @param  {Element} el 
 */

module.exports = function(el){
  var node = el.firstChild;
  var fragment = document.createDocumentFragment();
  while (node) {
    fragment.appendChild(node.cloneNode());
    node = node.nextSibling;
  }
  el.parentNode.replaceChild(fragment, el);
};