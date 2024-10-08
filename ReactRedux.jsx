import { useDispatch, useSelector } from "react-redux";
import "./ReactRedux.css"
import { setUser } from "./redux/slice/UserSlice";
import { useState } from "react";

    const ReactRedux = ()=>{

    const dispatch = useDispatch();
    const users = useSelector((state)=>state.UserInfo.Users);

    const [userName,setUserName] = useState({
        name:"",
        age:"",
        email:"",
        phone:""
      });

    const [showUserName,setShowUserName] = useState(false);

    const handleChange = (event)=>{
        const {name,value} = event.target;

        setUserName((currInput)=>{
            return{
                ...currInput,
                [name] : value,
            };
        })
    }

    const SettingFun = (event)=>{
        event.preventDefault();
        dispatch(setUser(userName));
    }

    const GettingFun = ()=>{
        setShowUserName(!showUserName);
    }

        return(
            <div>
                <h2>** ENTER USER INFORMATION **</h2>
                <forms className="info">
                    <label>Enter your name    
                    <input name = "name" type="text" placeholder="enter full name " onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>Enter your age    
                    <input name = "age" type="number" placeholder="enter Age" onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>Enter your email    
                    <input name = "email" type="text" placeholder="eg.(xyz@gmail.com)" onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>Enter your phone    
                    <input name = "phone" type="phone" placeholder="enter mobile number" onChange={handleChange}/>
                    </label>
                </forms>
                <br/>
                <button onClick={SettingFun}>SUBMIT</button>

                <br/>
                <h2>** SHOW USER INFORMATION **</h2>

                {showUserName ? users?.map((user,index) =>
                (
                <div key={index}>
                    <h2>{user.name}</h2>
                    <h3>{user.age}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user.phone}</h3>
                </div>
                )
                ):null
                }

                <button onClick={GettingFun}>{showUserName? "HIDE" : "SHOW"}</button>

            </div>
        )
    }
    

 export default ReactRedux;