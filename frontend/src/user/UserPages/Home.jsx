import React from 'react'
import AllQuestions from '../UserComponents/BugFixer/AllQuestions'
import Index from '../UserComponents/BugFixer/index'
import Main from '../UserComponents/BugFixer/Main'
import Sidebar from '../UserComponents/BugFixer/Sidebar'
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