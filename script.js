const button = document.getElementById('start-btn');
const paper = document.getElementById('paper');
const textContainer = document.getElementById('text');
const music = document.getElementById('bg-music');


const message = `I don't know if you're reading this, and it might be my last message to you. Yes, I'm too deeply submerged. I don't know why it's so hard for me to forget you; this feeling slowly grows larger.
A little story: Since entering MTS (Islamic Junior High School), I haven't cared about the world of romance in Indonesia, seeing so many Indonesian women dating carelessly and changing partners without concern for the dangers of dating, both religiously and worldly. I was pessimistic about finding the woman I wanted in Indonesia, and from then on, I was ambitious to work in Japan, where they say people are loyal, but it would be difficult due to religious differences. I was stubborn and convinced myself there was still a chance in Japan. Then, Allah broke my plans and showed me something so beautiful, as if Allah was saying, "Look around you, and feel."
I don't know if that gaze was directed at me or someone else; I didn't pay much attention, and my goal was still the same. But slowly, Allah instilled this feeling, and I realized it. It's true. I prayed to distance you from me because I knew my shortcomings were fatal for you. For months, the feeling didn't disappear; instead, it grew stronger, and slowly, this feeling became more painful. I performed Istikhara prayer, and three times the answer was always directed to you. This time, I won't deny it. I will strive to reach you, even if distance and time hinder us. Give me time to be worthy of standing beside you when the time comes, if indeed you are my destiny.

Don't let this message restrict you. You deserve the better, and I realize my many shortcomings. Later, if you find someone else who loves you mutually, and they are good in every aspect and have good intentions towards you, then stay in their heart. I will be sincere. I don't want to shackle you with this message, but if you want to wait for me, it might be a very long time. InshaAllah, I won't disappoint you.
I apologize if this message is excessive. I don't want any misunderstandings and just want to be transparent, even with boundaries. And also, I don't want to overstep the will of Allah, the Almighty. I know my journey won't be as smooth as I say, but I will continue to strive and pray gently but with a little insistence. Yes, my ego selfishly desires you, but the fact is I must let you go for each other's future. If we are destined to be together, see you at the end of the long wait. May Allah always protect you from toxic environments. Aameen.`


let typed = false;

button.addEventListener('click', () => {
  paper.classList.add('show');
  button.style.display = 'none';

  // Autoplay musik
  music.play();

  // Efek typewriter
  if (!typed) {
    let index = 0;
    function typeNextChar() {
      if (index < message.length) {
        textContainer.textContent += message[index];
        index++;
        setTimeout(typeNextChar, 50);
      } else {
        wrapParagraphs();
      }
    }

    setTimeout(typeNextChar, 1000); // jeda sebelum mulai
    typed = true;
  }
  let index = 0;
  function typeNextChar() {
    if (index < message.length) {
      textContainer.textContent += message[index];
      index++;
      setTimeout(typeNextChar, 50);
    }
  }

  setTimeout(typeNextChar, 1000); // jeda sebelum mulai
});