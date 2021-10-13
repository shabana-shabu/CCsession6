import './Form.css'
const Form = () => {
function userName(user)
{
var uname=user.target.value;
console.log(uname);
}
function phone(phone)
{
  var Phno=phone.target.value;
  console.log(Phno)

}
function email(email)
{
  var  Id=email.target.value;
  console.log(Id)

}

  return (
      <form className="userform" >
              <label > Name: 
              <input onChange={userName}  minLength="4" size="max" maxLength="7" pattern="[A-Z][A-Za-z0-9]*"
              title="Any one letter should be upper case minimum of 4 letters maximum 7 letters only letters and numbers are allowed,punctuations are not allowed" 
              required type="text"placeholder="USERNAME"></input>
              </label> 
              <br/>
              <label>Phone:      
                    <input onChange={phone}  type="phone" required pattern="+[0-9]{10}" 
                    title="enter valid phone number" placeholder="PHONE NO"></input>

              </label>
              <br/>
              <label>
              <label> Email:      
              <input onChange={email} type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
              placeholder="E-MAIL" title="enter the valid email"></input>
              </label>
              <br/>
              <button type="submit" className="submit" >submit</button>
              </label>
              <br/>
          </form>
  )
}
export default Form;