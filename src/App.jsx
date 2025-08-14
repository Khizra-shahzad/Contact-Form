import './App.css'
import Navigation from './components/Navigation/Navigation'
import Contact from './components/Contact/Contact'
import ContactForm from './components/ContactForm/ContactForm'
import Button from './components/Button/Button'

function App(){
  return <div>
    <Navigation/>
    <main className='main_container'>
    <Contact/>
    <ContactForm />
    
    
    </main>
  </div>
}
export default App
