import React, { useState } from 'react';
import GlobalStyles from './styles/global'
import { Main, Section, Sticky } from './styles';
import FirstAndSecond from './components/FirstAndSecond';
import { motion } from 'framer-motion'
import { Refresh } from './components/Refresh';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Refresh fn={() => setCount(count + 1)} />
    <div className="container">
      <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="box"
        whileTap={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />    

        

      
      </div>

      <Main style={{ height: '1610vh '}}>
        <Section style={{height: '72.7%'}}>
          <FirstAndSecond />
          
        </Section>

        <Section style={{ height: '9.7% '}}>
          <Sticky className='third'/>
          
        </Section>

        <Section style={{ height: '10.1% '}}>
          <Sticky className='fourth'/>
          
        </Section>
      </Main>
    </>
  );
}

export default App;
