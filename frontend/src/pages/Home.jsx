import React from 'react'
import AllQuestions from '../components/BugFixer/AllQuestions'
import Index from '../components/BugFixer/index'
import Main from '../components/BugFixer/Main'
import Sidebar from '../components/BugFixer/Sidebar'
function Home() {
  return (
    <div>
        <AllQuestions/>
        <Index />
        <Main/>
        <Sidebar/>
    </div>
  )
}

export default Home