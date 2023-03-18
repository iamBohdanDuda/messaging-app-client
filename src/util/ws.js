import { addNewUser, addNewMessage, removeOnlineStatus } from "../actions";
import store from '../index';


export default ((wsUrlr) => {
    let ws = new WebSocket(wsUrlr);
    ws.onopen = () => {
        console.log('ws open');
    }

    ws.onmessage = (e) => {
        const mess = JSON.parse(e.data);
        
        switch (mess.type) {
            case 'new_user_connected':
                if (mess.userId) {
                    store.dispatch(addNewUser(mess.username, mess.userId));
                }
                break;
            case 'user_disconnected':
                store.dispatch(removeOnlineStatus(mess.userId))
                break;
            case 'get_users_list':
                store.dispatch(addNewUser(mess.username, mess.userId));
                break;
            case 'new_message':
                store.dispatch(addNewMessage(mess.senderId, mess.receiverId, mess.text, mess.date))
                break;
            default:
                break;
        }
    }


    const sendMessage = (text, receiverId, date) => {
        const mess = JSON.stringify({ type: 'new_message', text, receiverId, date })
        ws.send(mess)
    }

    let reconectingCount = 0;
    const emit = (username) => {
        const mess = JSON.stringify({ type: 'new_user_connected', username })
        if (reconectingCount < 5) {
            if (ws.readyState === ws.CONNECTING) {
                setTimeout(() => {
                    emit(username);
                    reconectingCount++;
                }, 500);
                return;
            }
        }
        
        ws.send(mess);

    }


    return { ws, emit, sendMessage }
})('ws://messaging-app-server.vercel.app:5000')