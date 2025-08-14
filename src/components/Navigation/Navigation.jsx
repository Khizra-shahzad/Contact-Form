import styles from './Navigation.module.css'

const Navigation = () => {
    
  return (
    <nav className={`${styles.Navigation} container`}>
        <div className='logo'>
            <img src='/images/customer.png'/>
        </div> 
        <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
        </ul>
    </nav>
  );
}
export default Navigation