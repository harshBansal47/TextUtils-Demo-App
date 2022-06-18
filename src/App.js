import Navbar from './Navbar';
import TextArea from './TextArea';
function App() {
  return(
    <>
      <Navbar title={getNavTitle()}/>
      <TextArea/>
    </>
  )
}
export default App;

// Navbar Title Decoration 
function getNavTitle(){
  return(
    <><span style={{fontWeight:"bold"}}>Text</span><span style={{color:"red",fontWeight:"bold"}}>Utils</span></>
  )
}