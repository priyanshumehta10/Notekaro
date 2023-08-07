import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ textToType, typingSpeed }) => {
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < textToType.length) {
      const typingTimeout = setTimeout(() => {
        setText((prevText) => prevText + textToType.charAt(charIndex));
        setCharIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
    }
  }, [charIndex, textToType, typingSpeed]);

  return <p className='text-center color1 h5'> {text}</p>;
};

export default TypewriterEffect;
