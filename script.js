document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    document.addEventListener("DOMContentLoaded", () => {
      console.log('DOM is ready.');
      const menus = document.querySelectorAll('.dropdown .dropbtn');
      menus.forEach(
        menu => {
          // Touchstart event works for Mobile Safari as click event
          menu.addEventListener('touchstart', 
            (event) => {
              // hide all menus first
              menus.forEach( 
                m => {
                  const content = m.parentNode.querySelector('.dropdown-content');
                  if (content) {
                    content.style.display = 'none';
                  }
                }
              );
              // show the requested menu
              const content = event.target.parentNode.querySelector('.dropdown-content');
              if (content) {
                content.style.display = 'block';
              }
            }
          );
        }
      );
    });
  }
}

window.onscroll = function() {scrollFunction()};

function map(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function photos(){
  let which = Math.random();
  let num;
  if (which < 0.6){
    which = "rectangular";
    num = 3;
  }else {
    which = "square";
    num = 4;
  }
  console.log(num + " | " + which)
  let photo1;
  let photo2;
  let photo3;
  let photo4;
  if (num == 3){
    let photoNum1 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 8));
    let photoNum2 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 8));
    let photoNum3 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 8));
    while (photoNum1 == photoNum2 || photoNum1 == photoNum3 || photoNum2 == photoNum3){
      if (photoNum1 == photoNum2 || photoNum1 == photo3){photoNum1 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 8));}
      if (photoNum2 == photoNum3){photoNum2 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 8));}
    }
    photo1 = '<img src="../header/' + which + '-jpgs/' + photoNum1 + '.jpg" alt="A picture of us doing FLL" style="width:calc(100% / ' + num + ');">';
    photo2 = '<img src="../header/' + which + '-jpgs/' + photoNum2 + '.jpg" alt="A picture of us doing FLL" style="width:calc(100% / ' + num + ');">';
    photo3 = '<img src="../header/' + which + '-jpgs/' + photoNum3 + '.jpg" alt="A picture of us doing FLL" style="width:calc(100% / ' + num + ');border:0px none transparent;">';
    document.getElementById('photoHeader').innerHTML = photo1 + photo2 + photo3;
    // console.log(photo1);
    // console.log(photo2);
    // console.log(photo3);
  } else {
    let photoNum1 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 26));
    let photoNum2 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 26));
    let photoNum3 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 26));
    let photoNum4 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 26));
    while (photoNum1 == photoNum2 || photoNum1 == photoNum3 || photoNum1 == photoNum4 || photoNum2 == photoNum3 || photoNum2 == photoNum4 || photoNum3 == photoNum4 || photoNum1 == 30|| photoNum2 == 30|| photoNum3 == 30|| photoNum4 == 30){
      if (photoNum1 == photoNum2 || photoNum1 == photoNum3 || photoNum1 == photoNum4){photoNum1 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 26));}
      if (photoNum2 == photoNum3 || photoNum2 == photoNum4){photoNum2 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 26));}
      if (photoNum3 == photoNum4){photoNum2 = Math.floor(map((Math.random() * 10) + 1, 1, 10, 1, 26));}
    }
    photo1 = '<img src="../header/' + which + '-jpgs/' + photoNum1 + '.jpg" alt="A picture of us doing FLL" style="width:calc(100%/' + num + ');">';
    photo2 = '<img src="../header/' + which + '-jpgs/' + photoNum2 + '.jpg" alt="A picture of us doing FLL" style="width:calc(100%/' + num + ');">';
    photo3 = '<img src="../header/' + which + '-jpgs/' + photoNum3 + '.jpg" alt="A picture of us doing FLL" style="width:calc(100%/' + num + ');">';
    photo4 = '<img src="../header/' + which + '-jpgs/' + photoNum4 + '.jpg" alt="A picture of us doing FLL" style="width:calc(100%/' + num + ');border:0px none transparent;">';
    document.getElementById('photoHeader').innerHTML = photo1 + photo2 + photo3 + photo4;
    console.log(photo1);
    console.log(photo2);
    console.log(photo3);
    console.log(photo4);
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 74.5 || document.documentElement.scrollTop > 74.5) {
    // document.getElementById("text").style.display = "flex";
    document.getElementById("img").height = "60";
    document.getElementById("header").style.marginRight = "-21px";
    document.getElementById("header").style.marginLeft = "-21px";
    document.getElementById("header").style.boxShadow = "var(--accent-color) 0px 5px 4px 0px";
  } else {
    // document.getElementById("text").style.display = "block";
    document.getElementById("img").height = "100";
    document.getElementById("header").style.marginRight = "0px";
    document.getElementById("header").style.marginLeft = "0px";
    document.getElementById("header").style.boxShadow = "transparent 0px 5px 4px 0px";
  }
}
// photos()
