import { Article, Brand, Cta, Feature, Navbar } from './components/index'
import { Footer, Blog, Features, Header, WhatGPT3, Possibility } from './containers/index'

import './App.scss'

function App() {
  return (
    <div className="App">

      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta /> 
      <Blog />
      <Footer />
      
    </div>
  );
}

export default App;
