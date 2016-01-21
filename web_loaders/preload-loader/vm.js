module.exports = function(asset) {
  if (!document.querySelector('[src="' + asset + '"]')) {
    console.log('loaded by document', asset);
    var img = new Image();
    img.src = asset;
  }
};
