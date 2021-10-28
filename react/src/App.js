import {BrowserRouter, Switch, Route} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Articles from "./pages/Articles"
function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/articles" exact component={Articles} />
      </Switch>
    </BrowserRouter>
  )
}

export default App