import React from "react";
import ws from "../../util/ws";

export const authHOC = (ChildComponent) => {
    return class authHOC extends React.Component {
        authPassed = () => {
            let name = localStorage.getItem('username');

            if (!name) {
                name = prompt('Login with your name');
            
                if (!name) {
                    return false
                }

                localStorage.setItem('username', name);
            }
            ws.emit(name);
            return true;
        }

        tryAuthAgain() {
            <h1>Reloading</h1>
            window.location.reload();

        }

        render() {

            if (this.authPassed()) {
                return <ChildComponent/>
            } else {
                this.tryAuthAgain()
            }

        }
    }
}