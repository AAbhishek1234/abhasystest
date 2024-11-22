/* General Mobile Styles */
@media only screen and (max-width: 768px) {
    .Banner {
        margin-top: 0;
    }

    #vector {
        height: 250px;
        width: 250px;
        margin-top: 2rem;
        margin-left: 50%;
        transform: translateX(-50%);
        position: relative;
    }

    .heading {
        font-size: 30px;
        width: 100%;
        text-align: center;
        margin-left: 0;
        margin-top: 1.5rem;
    }

    #banner-p {
        font-size: 16px;
        width: 90%;
        margin: 1rem auto;
        text-align: center;
    }

    #b1 {
        width: 90%;
        font-size: 18px;
        margin: 1.5rem auto;
        display: block;
    }

    .small-boxes {
        display: flex;
        justify-content: space-between;
        margin: 2rem auto;
        width: 90%;
    }

    #security, #collaboration, #website {
        height: 60px;
        width: 60px;
    }

    .p-under-p {
        font-size: 12px;
        text-align: center;
    }
}

/* Specific Small Mobile Styles */
@media only screen and (max-width: 480px) {
    #vector {
        height: 200px;
        width: 200px;
    }

    .heading {
        font-size: 24px;
    }

    #banner-p {
        font-size: 14px;
    }

    .p-under-p {
        font-size: 10px;
    }

    .small-boxes {
        flex-direction: column;
        align-items: center;
    }

    .box-1, .box-2, .box-3 {
        margin-top: 1rem;
        margin-left: 0;
    }
}
