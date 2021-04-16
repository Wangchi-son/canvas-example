import React, { useEffect } from 'react';
import './css/Button.css';

function Button() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    cursor.classList.add('cursor');

    const follow = document.getElementById('follow');
    follow.classList.add('follow');

    function move(obj, event) {
      obj.style = '';
      obj.style.top = event.clientY + 'px';
      obj.style.left = event.clientX + 'px';
    }

    if (cursor) {
      window.addEventListener('mousemove', function (event) {
        if (event.target.tagName == 'A') {
          cursor.style.background = 'transparent';

          follow.style.top = event.target.offsetTop + 'px';
          follow.style.left = event.target.offsetLeft + 'px';
          follow.style.width = event.target.clientWidth + 'px';
          follow.style.height = event.target.clientHeight + 'px';

          follow.classList.add('on-focus');
        } else {
          move(cursor, event);
          move(follow, event);
          follow.classList.remove('on-focus');
        }
      });
    }
  });
  return (
    <>
      <div id="cursor"></div>
      <div id="follow"></div>
    </>
  );
}

export default Button;
