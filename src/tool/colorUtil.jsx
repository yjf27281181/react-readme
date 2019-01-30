import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import lightBlue from '@material-ui/core/colors/lightBlue';
import orange from '@material-ui/core/colors/orange';
import teal from '@material-ui/core/colors/teal';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import indigo from '@material-ui/core/colors/indigo';


export default function getColor(username) {
    var sum=0;
    for(var i=0; i<username.length; i++) {
        sum+=username.charCodeAt(i);
    }

    const colors = [deepOrange,deepPurple, lightBlue, orange, teal, pink, purple, indigo]
    return colors[sum%colors.length][400]
}