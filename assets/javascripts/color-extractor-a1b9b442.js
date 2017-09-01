(function() {
  var Rgb2Hex, extractColor, extractType;

  Rgb2Hex = function(rgb) {
    var hex, hexDigits;
    hex = function(x) {
      if (isNaN(x)) {
        return "00";
      } else {
        return hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
      }
    };
    hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  };

  extractColor = function() {
    return $('.js-color-list .js-box').each(function() {
      var myClassName, myColor, myHexa;
      myColor = $(this).css('background-color');
      myHexa = Rgb2Hex(myColor);
      myClassName = this.className.replace('js-box color-list--box', '');
      $(this).html(myHexa);
      return $(this).append('<p class="m-extrator--content no-margin">' + myClassName + '</p>');
    });
  };

  extractType = function() {
    return $('.js-type').each(function() {
      var mySize, myType, myWeight;
      mySize = $(this).css('font-size');
      myType = $(this).css('font-family');
      myWeight = $(this).css('font-weight');
      $(this).append('<p class="m-extrator--content no-margin">' + myType + '</p>');
      return $(this).append('<p class="m-extrator--content">size: ' + mySize + ' - weight: ' + myWeight + '</p>');
    });
  };

  $(function() {
    extractColor();
    return extractType();
  });

}).call(this);
