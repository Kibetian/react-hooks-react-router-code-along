import React from "react";

function SignUp() {
    return (
        <div>
          <h1>SignUp</h1>
          <form>
            <div>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div>
              <input type="password" name="create password" placeholder="create Password" />
            </div>
            <div>
              <input type="password" name="cornfirm password" placeholder=" cornfirm Password" />
            </div>
            <div>
              <input type="text" name="text" placeholder="Create UserName" />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
}
export default SignUp;