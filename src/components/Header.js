function Header(props) {
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
           <img width={40} height={40} src="/img/logo.png"/>
           <div>
             <h3 className="text-uppercase">Online Shop</h3>
             <p>Everything you need</p>
           </div>
        </div>
     {/*right side of header  */}
         <ul className="d-flex ">
           <li onClick={props.onClickCart} className="mr-20 cu-p">
     {/* picture "shopping cart" */}
             <svg className="mr-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M21 6L21.75 3.5M14.008 11H12.008M10.008 11H12.008M12.008 11V9M12.008 11V13M13 19.5C13 19.8978 13.158 20.2794 13.4393 20.5607C13.7206 20.842 14.1022 21 14.5 21C14.8978 21 15.2794 20.842 15.5607 20.5607C15.842 20.2794 16 19.8978 16 19.5M7 19.5C7 19.8978 7.15804 20.2794 7.43934 20.5607C7.72065 20.842 8.10218 21 8.5 21C8.89782 21 9.27936 20.842 9.56066 20.5607C9.84196 20.2794 10 19.8978 10 19.5M21 6H2L5 16H18L21 6Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
             <span>0 eur.</span>
           </li>
           <li className="mr-10">
      {/* picture "user profile" */}       
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M19.729 18.346C19.729 18.346 17.5 15.5 12 15.5C6.5 15.5 4.27 18.346 4.27 18.346M12 12C11.2044 12 10.4413 11.6839 9.87868 11.1213C9.31607 10.5587 9 9.79565 9 9C9 8.20435 9.31607 7.44129 9.87868 6.87868C10.4413 6.31607 11.2044 6 12 6C12.7957 6 13.5587 6.31607 14.1213 6.87868C14.6839 7.44129 15 8.20435 15 9C15 9.79565 14.6839 10.5587 14.1213 11.1213C13.5587 11.6839 12.7957 12 12 12V12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
           </li>
         </ul>
       </header>
    )
}
export default Header;