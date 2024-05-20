'use client'
import styles from "@/app/page.module.css";
import React, { useState } from 'react';

export default function Login({ users, sellers, books }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [redirectTo, setRedirectTo] = useState('');
    const usersname = username;

    const clickLogin = () => {
    
        const user = users.find((user) => user.username === username && user.password === password);
        const seller = sellers.find((seller) => seller.username === username && seller.password === password);
        
    
        if (user) {
          const uindex = users.findIndex(u => u.username == username)
          const user = users[uindex]
          window.location.href = `http://localhost:3000/login/user/${user.id}`
            
          } else if (seller) {
            const uindex = sellers.findIndex(u => u.username == username)
            const seller = sellers[uindex]
            window.location.href = `http://localhost:3000/login/seller/${seller.id}`
          } else {
            setError('Invalid username or password');
          }
      }

      if (redirectTo) {
        window.location.href = redirectTo
      }
    

    return (
        <>
        <body id={styles.body}>
        <div className={styles.bodyDiv}>
        <div className={styles.container}>
          <input type="checkbox" id={styles.flip}/>
          <div className={styles.cover}>
            <div className={styles.front}>
              {/* <img src="./images/image1_0 (1).jpg" alt="" /> */}
              <div className={styles.text}>
                <span className={styles.text1}>Every book reading is a <br />new adventure</span>
                <span className={styles.text2}>Let's dive into</span>
              </div>
            </div>
            <div class="back">
            </div>
          </div>
          <div className={styles.forms}>
        <div class={styles.formcontent}><div className={styles.loginform}>
            <div className={styles.title}>Login</div>
            {/* <!-- <form  id="loginForm"> --> */}
              <div className={styles.inputboxes}>
                <div className={styles.inputbox}>
                  <i className={styles.faenvelope}></i>
                  <input type="text"  id="username" placeholder="Enter your username" required onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className={styles.inputbox}>
                  <i className={styles.falock}></i>
                  <input type="password" id="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={styles.text}><a href="#">Forgot password?</a></div>
                <br></br>
                <div id="message" className={styles.errormessage}></div>
                <div className={styles.inputbox}>
                  {/* <!-- <input type="submit" value="Login"/> --> */}
                  <button className={styles.input} onClick={clickLogin}>Login</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </body>
    </>
    )
}
