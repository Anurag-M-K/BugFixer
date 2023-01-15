import React from 'react'
import Header from '../../components/UserComponents/Header/Header'
import AllQuestions from '../UserComponents/BugFixer/AllQuestions'
import Index from '../UserComponents/BugFixer/index'
import Main from '../UserComponents/BugFixer/Main'
import Sidebar from '../UserComponents/BugFixer/Sidebar'
function Home() {
  return (
    <div>
      <Header/>
        <AllQuestions/>
        <Index />
        <Main/>
        <Sidebar/>
    </div>
  )
}

export default Home