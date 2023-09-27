import React from "react";
import Create from "./Create";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

const EditTask=(id)=>{
    axios.put("http://localhost:3001/update/"+id)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

const DeleteTask=(id)=>{
  console.log('Deleting task with ID:', id)
    axios.delete(`http://localhost:3001/delete/${id}`)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

  return (
    <div className="home">
      <h2>ToDo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div className="norecord">
          <h2>No Tasks</h2>
        </div>
      ) : (
        todos.map((todo) => (
          
          <div className="task" key={todo.id}>
            <p className= {todo.done? "line" :""}>{todo.task}</p>
            <div className="logos">
            <span><img 
            alt="edit"
            className="logo"
            
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD8/vz///+pqqk2NjYpKim1t7XP0M/LzcuMjYz3+feCg4Ll5+Xm6Oba3Nrx8/Gen54kJCSUlZQHCAeio6K/wb8bGxsvMC9naGfFx8UZGRnf4d90dXRhYmFXWFcQEBBBQUGPkI99fn1MTExwcXA9PT1ISUhTU1O4JYwSAAAJoklEQVR4nO2da3vqKhCFK1Zr463WWrXWy+71///DE7VWhZmwgCGBPmd97DY5vAcSJnPj5qYWbTs+mtQzuJvpetPuBWqsvLSsuOVdf7Nef4XjffSHnqO7UstP9vsOVm/bALxNO2R4tWg/vtGjH972sZU23K9KyN7OHfBhnAfeUeUj++7IV2Qyf78q59GB7zs3vIOUQp/HSTdHvr3U6BZcoE2P1FuqeAAA8+XbS9kQt8u8AUvEcSXgNKstgpYaTysAh/kDlohDHvEPzOBe/EL9I4A8YuVbVOD7QlI2xIEb4P6Wg25SsqFSm8a84PCKp4cd/3ZqUpvHFcdIWHC0JaOK1aKBoeNadFs0Y6H/krRFlVp9NzFsJ83b5Dyq7vXPvsgfDdKev5MWA3L01z6cHvEbNWpoxO5qU8O/Wqev1C/umxqvh+6JlXoFQOz1qt/YcH30aSKo4fmf77MHJD8aLhjMpzCrJXqUOU1n4818kap2k2P1VN/E2P38k2Gv0WZd8jI2jV/bzWRvdKD+4kCM2c1yje71ZpCsD383t8t5wyP1lu6j+Jkr489vDY/TX/okHl8oa2Nqs53C8gtJYyk+yz9udO6u9T7pSv9EUpvyjzP9j3l8UNBa6DCzG9OgyXWrOEqH2QekNMKsF6mxTA+Ey79M2Go930z+0ouGeNV0bjr/Eyagz9ld767dQX6aJeHt7OhxbwHRT3Pvy4Dw9tchqoYv9l/nR7i98Pgqu28FIUTWQo26XnZqZMlkQwihB7o2vevDs6SUIIRQwkZtIryAo6rsp+wISV988cRfkBsh5Yvfj3HF5tZmRrhlA6DjV+aSzAj51BCllvQleRH+q0wsGJLXZEX4XMHX4tzWWRGuLBkX5CzmRGhPIVSf5lUZEe6Y3JDLoRK++YwImRSLa5mX5UMIZYESbsFsCBcAX96EUBrowd2rKRdCLJdePZtXZkKo++YZQOqDPw/CF2yN3lHX5kFIZTgRhKQ/IwtCPdzHAP4jL86B8BaqaOGS7gzCSXqEd9AUFozPzSDcJEdo5v2QU8i5agzCdmqEnxjgirs+fULKuUYQsu795AkZ55oOyOcVJk+IAdIumoNSJyQTtk3CisBD4oREJi8FWJX7mjbh1O64aHH26ElpE2KVZbQ9elLShKDB7Rhda5vZJk0RzjFASxEIQfiRCiG2RgvL8AhCfW00RQg6Lmwx+HQJ1whf5V5/VLqE4F5vvU+yhOB71F7Ikyoh6LgAiukSJXwB1+jOfqtECbFeHFBzljQJQYO70h49KUnCDtjpAOpcliQh1k4FzLdLkRB0XLC+p2slSDhH+EqBHQYTJATXKNrkKj1CMJBW3TjoQukRYq9RKhZKKznCETaFXJ6eqdQIwSCFQze91AhB35PDHRMjxAJpyqXnY1qE4Bolckp4JUXIdTXS5dRjNilCvYCHmUK3ktaUCEHHhWMJT0KEG4SvNGbgvf6ohAhtGcA/o8H3+qPSIXyK8B7dKxnCb2GD+1epEG7BNfrhfOdUCCsrKc5DgXxP10qE0OiywhB63FqOcBHQW+IZNLg3HvcWItx2h0qNu76HM4CBNK9yXRnC/qGrpsI7hF8LNGasgTRSIoTn96AX4hdmcCu/FSJBeOl4YNJY4esrAD0LrgUIr3cy1FF71mOsvV6KUI+DuT4uem02R+jbySmY0FxijohgdqV318ZQQuoZcmrQh+31AZ1TAwlpa9JlFuWda6KEnLmMvxbAIMW6IUL+NY8uVDCQxpRpRyes2scwxDkY7A3pzBFAWJ0uAT2LoD3q6rgQIrRZIgAiGEgLa7zpTWh3T9sXKgZo9FKvhxCp87AhgkGKXTOE0CuietMwWmzS9/A8Qi2YEDQmq2YRy1JfhRyEF0CInpBUgQju9T6OCwlC7Ku8VfFGBQNp4Q2MI88hi/iCPcjOH5tihFOYkFmoWCCtFWCPBhKCb3oWUa8HYK6UaOXvSwh6OI83MBZqB3uPhhjcwYTgg8QgYvaorZIiMiG40H5ucb1QwQxgmdMYAr4tsEReApE8wsa8xCMKI0zohngRF4PeUqoINWYECJ0Qz195YCBN6sSQMD+ND6L+X2R+LLDXSxA6Ih4WqlS1T02E7rMIrlH3aHYsQkfEGVjt43JWcWxCR0Twu1IwsC4Qe3JCxACJ1nmShLp3wfo/VBpRtvm0SKWzLGKoc81O6FGtLoqoZE9YFKrHF0RkW+k0SyiHqAb2RvKNEIohhgTS4hIKIco38RfsiyGB6JkVVBOhBGKEg5dEe5sEI/rkG9VKGIoo5biISBiIWOzSJwxCDA6kYYRfgT2G/BEjnacs3xnSH9GxVMSXMLy7pydijPdoJEI/xAh7/VFROrT6IEY7gjBOD1p3xHhHnUbqsuuKKOlc0xSrj7AjYmjSTIWidUp2czLuhLEuFK8XtAOie8mdgyJ2u8YRZZ1rmmL280YR4x5dF7VjOdjuKY49elLcnuwQopoK8piK3HUeQBRJmqlQ7L76VkS5YC+j6CcH2BCjnx8Z/2yEakSxhARWNZz+UIUY0R49qY7zLSoQY5prP0IIg58UFlE4kEYKIQzP072n4/e1nDSMEAqM45XKZFRj39pvF9VESCZrRghSENIbbkQ7tXprIMZxABuq7+TxZ+3En5oAaz09/jJRx7c5gbsIQv08U7k33scpJ0qpQjqYzYog1KurBd/pnfZK7bVc1HeauU44folJWOr5pZTkDW3SCA92op6lHM0dXYt0mD2hsXKj+aNrkF7vf4gz6zmgUZ19sWVsh/vcXKN9YQ1fANFksBzK/fQTIzOeRD3p+qfww6hpEU1prVW6rfjzyW00VMl2Eo0v05Nnz7SS69uhJaUboK3fY63NZerb4adZmTN1Wowmu3Reay0ym02eu2mZRawZIhKA53QIojipDq+RqD7NQtXLHiJEdVKR1ywuzDN2r6ogqfZNWS1UquHrtYFNlZOrZZzELHk9Ux0btKQk8uA6NY4eZpDQ9J4sw9Y3dbIcWamxXN1cLL2PSAe0GUyny9GVKiKHNAPVLxgHu2m0sE12lFq+zW8PaoCA1nE487clW/9HfT3w7UfUSb27NNT7HRE7ZHLl2Tv+qVRkHSiT8IG1oM5AfLYA1jw1eVWl7PwJxOqcpD+wUG0JLdnPoj2rrA+WmKcpheRc9R2a7aQmNYYssC1vKaSt0vpCe8C86k7iLKSGLn1Bu63cGFXLMSw4aQPGUTIqx9r2yGV5GuYBWY5y6OtxuZ0NEDu3Qe2HN5gFfda9P/RGzX1DWDXqPbicO8dp3pms2+lpPekg3ff/A4+hmVgVvyGrAAAAAElFTkSuQmCC"
           // onClick={()=>EditTask(todo.id)}

            /></span>
            
            <span>< img
            alt="logo"
            className="logo delete"
           onClick={() => DeleteTask(todo.id)}
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD8/vz///+MjYzr7euTlJOPkI+pqqk2Nja0tbQwMTDMzswzMzOvsK8pKilub25lZmVMTUzBw8Hy9PKfoJ9bXFvj5ePV1tWEhYTc3twbGxv3+fcfIB8PDw90dXR6e3pDQ0O7vLsdHR08PTwlJSVgYGBOT07bo54kAAAE3klEQVR4nO2d61riMBRF01BuVq4Fuaqo6Ps/4hQHHckJw+khN+peP/3KZi9CMWkLVcorwxO2y0H3i9n6+89+K/hk3i80h4didJOW44eqfMah2m7TncfuW5dVxtT7Z9mJ3bkOs3p6R8nFLnZvLt2VwO+gWC7Wsbuz6EoG8OiYxy7PYDsV+x0UdSu2wCUey2sED47L2Ar/5zG/UrBSTHoUd/Jd8IfiS2yN86yvfYseFZMdxVc3ggkrvjgSrNjGdrHSc+aX6W5sGRvbzN0QZrodW8fC7Lzg2XXTecVNbB0L9roHj82gb2d63jPBQRxbilbtX54uPXBZ2Bz1IkTpWjzQmjpvvXEe+mybyupn341rMrIIrtiP7tteHo9tJdCONQSrYbQopnVc440WfKgVsKSvUFr/E99pwZr7EVmU6MJPVSFz0m9aM4F8Ftd8E/imIGPYuzpC3/loKsWsJxgAsifqiYeiUvZkLxRMSYhhSivhO9JuVj/EnDPovvuiYqihIGTQeENz0gDDoMCQRdKGey+GA+c9z9BuXaRNDJeXH2SwXJiGi8shnffr9VjnqS1rHwGyjGJ3jV/LxVF6z2hdPooFh5vY9VnIP5LuN+mP4CeSOeInlqMnibIRXq0iPB0fAf3ReMNd4w1l1+J83Ixg/aNCf5nAMB1gCMP0geEZdo01HB+hp4OSRRfzY2nWivj8sjZdvjuzrnC4JTMT3pnjmzYsG2/IOnF804asRQYMUwaGMEwfGMIwfWD4awwdndjzwcUmvCuV1rP2TzrmJbxlqx2Hi01GLD+KsdiPePVuy1MTX7n16cBQCAzDAUMpMAwHDKXAMBwwlALDcMBQCgzDEdGw0x/8pE+/fDg+3WJAT4PtjS369IcVIhoujMMl9EtZHWMLeiqzZx5zubeERDM0vp1nuS75crl781p9+v1DGEqBoYIhrxwMWSEyYKhgyCsHQ1aIDBgqGPLKwZAVIgOGCoa8cjBkhciAoYIhrxwMWSEyYKhgyCsHQ1aIDBgqGPLKwZAVIgOGCoa8cjBkhciAoYIhrxwMWSEyYKhgyCsHQ1aIDBgqGPLKwZAVIgOGCoa8cjBkhciAoYIhrxwMWSEyYKhgyCsHQ1aIDBgqGPLKwZAVIgOGCoa8cjBkhciAoYIhrxwMWSEyYKhgyCsHQ1aIDBgqGPLKwZAVIgOGCoa8cjBkhciAoYIhrxwMWSEyYKhgyCsHQ1aIDBgqGPLKwZAVIgOGqnGGlvtENssw009kk6YZ0lvy/AbDU2yGp9gMDZIynOYnlPSXnpfl6SYrssWdsUVJDQPdDclmGIhF4w3LxhvmMBQCw3DAUAoMwwFDKb/QkHXDVh8EM1w4Cq7L3CziytBYs1TJE0fJNVn5MjSXprEG0RzCTNMlmBDzNrxV9N5VNp+nzES/O8s2DTNdrl2FcxnQEs6G0Harbq2nw1447paFpQM9kiCGvE0/HcNiafDhznBsyY+O2887uhPEp3T6abePrUPRM5eCSvWTG0TtVpBMCaPjfvr/mpahy/8UX+xSUrTcftABdGYTDV8T41Eqii6na6c8bZJw9Lq0KWyzp8B+uuVRsFrvl5EVdT70KqjUtrTOggPpad327HfgbZpHcayeNKd34fVExzyrHYL85S2U34HhcLifDLqBaL1Wzyds+gfmgZRdLqqozgAAAABJRU5ErkJggg==" />
             
             </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
