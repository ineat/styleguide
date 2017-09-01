(function (global) {
  var speed = 40
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      speed = 200
  }
  var covColorFuc = function (dot, w, h) {
      return `rgba(${Math.floor(255 * (1 - dot.x / w))}, ${Math.floor(255 * (1 - dot.y / h))},${Math.floor(255 * (dot.speedArr[0]/ 100))}, 0.8)`
  }
  var lineColorFuc = function (dot, w, h) {
      return `rgba(${Math.floor(255 * (1 - dot.x / w))}, ${Math.floor(255 * (1 - dot.y / h))},${Math.floor(255 * (dot.speedArr[0]/ 100))}, 0.4)`
  }
  var covSpeedFuc = (speed) => {
      return  speed * (Math.random() * 2 - 1)
  }
  var options = {
      lineLink: {
          count: 2,
          show: true
      },
      color: {
          dotColorFuc: covColorFuc,
          lineColorFuc: lineColorFuc,
      },
      dot: {
          physical: true,
          speed: speed,
          vxFuc: covSpeedFuc,
          vyFuc: covSpeedFuc,
          count: 80,
          size: {
              random: true,
              max: 20,
              min: 0
          }
      }

  }

  var qarticles = new Qarticles(document.getElementById('js-skills-galaxy'), options)
})(window);
