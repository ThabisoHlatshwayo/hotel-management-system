import React from "react";

function Greetings (){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize: 25,
        textAlign: "center"
    }

    if (hours < 12){
        timeOfDay = "morning";
        styles.color = "#04756F";
    }else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon";
        styles.color = "#04756F";
    }else{
        timeOfDay = "evening";
        styles.color = "#04756F";
    }
    return (
        <div>
            <h5 style={styles}>Good {timeOfDay}! May you please fill in the form, to make your bookings.</h5>
        </div>
    );
}

export default Greetings;