
/**
 * Strip the supplied element from the dom, while
 * still maintaining it's contents.
 * 
 * @param  {Element} el 
 */

module.exports = function(el){
  var children = el.childNodes;
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < children.length; i++){
    fragment.appendChild(children[i]);
  }
  el.parentNode.replaceChild(fragment, el);
};