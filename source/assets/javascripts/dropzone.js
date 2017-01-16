$(function () {
  if(document.contains(document.getElementById("#js-dropzone"))) {
    var _actionToDropZone = $("#js-dropzone").attr('action');

    //je définis ma zone de drop grâce à l'ID de ma div citée plus haut.
    Dropzone.autoDiscover = false;
    var myDropzone = new Dropzone("#js-dropzone", { url: _actionToDropZone });

    myDropzone.on("addedfile", function(file) {
      console.log('file added', myDropzone);
    });
  }
});
