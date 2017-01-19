$(function () {
  if(document.contains(document.getElementById("#js-dropzone"))) {
    var _actionToDropZone = $("#js-dropzone").attr('action');

    Dropzone.autoDiscover = false;
    var myDropzone = new Dropzone("#js-dropzone", { url: _actionToDropZone });

    myDropzone.on("addedfile", function(file) {
      console.log('file added', myDropzone);
    });
  }
});
