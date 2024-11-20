General Styles

.Banner {
    position: relative;
    margin-top: -10px;
}

#vector {
    height: 600px;
    width: 600px;
    position: absolute;
    margin-top: -500px;
    margin-left: 700px;
    animation: vector 2s linear infinite;
}

@keyframes vector {
    0% {
        margin-left: 700px;
    }
    50% {
        margin-left: 715px;
    }
    100% {
        margin-left: 700px;
    }
}

.heading {
    width: 550px;
    height: 100px;
    font-size: 50px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    margin-top: 100px;
    margin-left: 100px;
}

.scroll-container {
    height: 50px;
    overflow: hidden;
    position: relative;
}

.scroll-up-down {
    font-weight: 600;
    color: #0263a3;
    position: absolute;
    width: 100%;
    animation: scrollUpDown 1.6s linear infinite;
    top: 100%;
}

@keyframes scrollUpDown {
    0% {
        top: -100%;
    }
    100% {
        top: 100%;
    }
}

h1 {
    font-size: 40px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#abhasys {
 margin-top: 2rem;
    font-weight: 600;
}

p {
    margin: 0;
    padding: 0;
    position: relative;
}

#b1 {
    margin-top: 70px;
    height: 40px;
    width: 150px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    background-color: black;
    color: white;
    border: 0;
    border-radius: 5px;
}

#banner-p{
    height: 200px;
    width: 550px;
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 450;
    margin-left: 110px;
    margin-top: 10rem;
}

#security, #collaboration, #website {
    height: 80px;
    width: 80px;
}

#website {
    height: 70px;
}

.p-under-p {
    width: 80px;
    position: absolute;
    font-size: 15px;
    margin-top: -60px;
    margin-left: 75px;
}

.small-boxes {
    display: inline-flex;
    margin-left: 100px;
    position: relative;
}

.box-1 {
    position: absolute;
    margin-top: 70px;
}

.box-2 {
    position: absolute;
    margin-top: 70px;
    margin-left: 200px;
}

.box-3 {
    position: absolute;
    margin-top: 80px;
    margin-left: 420px;
}

#b1:hover {
    background-color: #3eaaf1;
    color: black;
    border: 1px solid black;
    transition: all 0.2s;
    cursor: pointer;
}

#idea {
    color: #ffb619;
}

/* Media Queries for Different Laptop Screen Sizes */

/* For smaller laptops (up to 1366px wide) */
@media only screen and (max-width: 1366px) {
    .heading {
        width: 500px;
        font-size: 45px;
        margin-left: 80px;
    }

    #vector {
        height: 500px;
        width: 500px;
        margin-left: 600px;
        margin-top: -450px;
    }

    #banner-p {
        width: 500px;
        font-size: 18px;
        margin-left: 90px;
        margin-top: 80px;
    }

    #b1 {
        width: 140px;
        font-size: 18px;
    }

    #security, #collaboration, #website {
        height: 70px;
        width: 70px;
    }
}

/* For larger laptops (1367px to 1600px wide) */
@media only screen and (min-width: 1367px) and (max-width: 1600px) {
    .heading {
        width: 520px;
        font-size: 48px;
        margin-left: 90px;
    }

    #vector {
        height: 550px;
        width: 550px;
        margin-left: 650px;
        margin-top: -470px;
    }

    #banner-p {
        width: 520px;
        font-size: 19px;
        margin-left: 100px;
        margin-top: 85px;
    }

    #b1 {
        width: 145px;
        font-size: 19px;
    }

    #security, #collaboration, #website {
        height: 75px;
        width: 75px;
    }
}

/* For extra-large laptops (1601px and above) */
@media only screen and (min-width: 1601px) {
    .heading {
        width: 550px;
        font-size: 50px;
        margin-left: 100px;
    }

    #vector {
        height: 600px;
        width: 600px;
        margin-left: 700px;
        margin-top: -500px;
    }

    #banner-p {
        width: 550px;
        font-size: 20px;
        margin-left: 110px;
        margin-top: 8rem;
    }

    #b1 {
        width: 150px;
        font-size: 20px;
    }

    #security, #collaboration, #website {
        height: 80px;
        width: 80px;
    }
}

/* Mobile View Adjustments */
/* General Styles */
.Banner {
    position: relative;
    margin-top: -10px;
}

#vector {
    height: 600px;
    width: 600px;
    position: absolute;
    margin-top: -500px;
    margin-left: 700px;
    animation: vector 2s linear infinite;
}

@keyframes vector {
    0% {
        margin-left: 700px;
    }
    50% {
        margin-left: 715px;
    }
    100% {
        margin-left: 700px;
    }
}

.heading {
    width: 550px;
    height: 100px;
    font-size: 50px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    margin-top: 100px;
    margin-left: 100px;
}

.scroll-container {
    height: 50px;
    overflow: hidden;
    position: relative;
}

.scroll-up-down {
    font-weight: 600;
    color: #0263a3;
    position: absolute;
    width: 100%;
    animation: scrollUpDown 1.6s linear infinite;
    top: 100%;
}

@keyframes scrollUpDown {
    0% {
        top: -100%;
    }
    100% {
        top: 100%;
    }
}

h1 {
    font-size: 40px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#abhasys {
    font-weight: 600;
}

p {
    margin: 0;
    padding: 0;
    position: relative;
}

#b1 {
    margin-top: 70px;
    height: 40px;
    width: 150px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    background-color: black;
    color: white;
    border: 0;
    border-radius: 5px;
}

#banner-p {
    height: 200px;
    width: 550px;
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 450;
    margin-left: 110px;
    margin-top: 6rem;
}

#security, #collaboration, #website {
    height: 80px;
    width: 80px;
}

#website {
    height: 70px;
}

.p-under-p {
    width: 80px;
    position: absolute;
    font-size: 15px;
    margin-top: -60px;
    margin-left: 75px;
}

.small-boxes {
    display: inline-flex;
    margin-left: 100px;
    position: relative;
}

.box-1 {
    position: absolute;
    margin-top: 70px;
}

.box-2 {
    position: absolute;
    margin-top: 70px;
    margin-left: 200px;
}

.box-3 {
    position: absolute;
    margin-top: 80px;
    margin-left: 420px;
}

#b1:hover {
    background-color: #3eaaf1;
    color: black;
    border: 1px solid black;
    transition: all 0.2s;
    cursor: pointer;
}

#idea {
    color: #ffb619;
}

/* Media Queries for Mobile Devices */

/* For all mobile devices up to 768px wide */
@media only screen and (max-width: 768px) {
    .Banner {
        margin-top: 0;
    }

    #vector {
        height: 250px;
        width: 250px;
        top: 5rem;
        margin-left: 50%;
        /* transform: translateX(-50%); */
    }

    @keyframes vector {
        0% {
            margin-left: 50vw;
        }
        50% {
            margin-left: 52vw;
        }
        100% {
            margin-left: 50vw;
        }
    }


    .heading {
        width: 100%;
        font-size: 30px;
        text-align: center;
        margin-left: 0;
        margin-top: 20px;
    }

    #banner-p {
        width: 90%;
        font-size: 16px;
        text-align: center;
        margin: 20px auto;
        margin-top: 2rem;
    }

    .scroll-container {
        height: 40px;
    }

    .scroll-up-down {
        font-size: 14px;
    }

    #b1 {
        width: 100%;
        font-size: 18px;
        margin: 20px auto;
    }

    /* Align images in one line */
    .small-boxes {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        margin-left: 0;
    }

    #security, #collaboration, #website {
        height: 60px;
        width: 60px;
    }

    .p-under-p {
        font-size: 12px;
        text-align: center;
        margin-left: 0;
        margin-top: 10px;
    }

    /* Place the vector (globe) under the images */
    #vector {
        position: relative;
        margin-top: 30px;
        height: 200px;
        width: 200px;
        margin-left: 50%;
        transform: translateX(-50%);
    }

    h1 {
        font-size: 30px;
    }
}

/* For small mobile devices up to 480px wide */
@media only screen and (max-width: 480px) {
    .Banner {
        margin-top: 0;
    }

    #vector {
        /* margin-right: 500px; */
        /* position: absolute; */
        height: 200px;
        width: 200px;
        margin-top: 30px;
        /* left: -50%; */
        /* transform: translateX(-50%); */
    }
    @keyframes vector {
        0% {
            margin-left: 50vw;
        }
        50% {
            margin-left: 52vw;
        }
        100% {
            margin-left: 50vw;
        }
    }


    .heading {
        font-size: 24px;
        width: 100%;
        text-align: center;
    }

    #banner-p {
        font-size: 14px;
        width: 90%;
        margin: 15px auto;
    }

    #b1 {
        width: 90%;
        font-size: 16px;
        margin: 15px auto;
    }

    /* Align images in one line for smaller screens */
    .small-boxes {
        display: flex;
        /* justify-content: space-around; */
        /* margin-top: 10px; */
        /* margin-left: 0px; */
    }

    #security, #collaboration, #website {
        margin-left: 0px;
        height: 50px;
        width: 50px;
    }
    .box-1{
        margin-top: 10px;
    }
.box-2{
    margin-top: 10px;
    /* position: absolute; */
    margin-left: 35vw;
}
.box-3{
    margin-top: 10px;
    /* position: absolute; */
    margin-left: 70vw;
}
    .p-under-p {
        font-size: 10px;
    }

    h1 {
        font-size: 24px;
    }
}








