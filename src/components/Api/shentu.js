import React, { useContext } from "react";

import { useParams } from "react-router-dom"
import ProgressBar from 'react-bootstrap/ProgressBar';

import { AppContext } from '../../Mycontext/text'

let date = new Date().getTime() + 10000;

let urlApi = "https://api.mintscan.io/v1/shentu/proposals/";
let url = "https://www.mintscan.io/shentu/proposals/";

let Model;

class UserModel {
    constructor(
        id,
        title,
        description,
        date,
        yes,
        no,
        no_with_veto,
        abstain) {
        this.linkSite = url + id;
        this.title = title;
        this.description = description;
        this.date = date;

        this.yes = yes;
        this.no = no;
        this.no_with_veto = no_with_veto;
        this.abstain = abstain;

        this.all_votes = parseInt(yes)
            + parseInt(no)
            + parseInt(no_with_veto)
            + parseInt(abstain);
 
        this.yes_pers = Math.round(yes * 100 / this.all_votes);
        this.no_pers = Math.round(no * 100 / this.all_votes);
        this.no_with_veto_pers = Math.round(no_with_veto * 100 / this.all_votes);
        this.abstain_pers = Math.round(abstain * 100 / this.all_votes);
    }
}


export function GetPropolsalModel(id) {
    var urlToSend = urlApi + id;

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", urlToSend, false);
    xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlHttp.send(null);

    var obj = JSON.parse(xmlHttp.responseText);

    var id = obj.id;
    var title = obj.title;
    var description = obj.description;
    var endDate = new Date(obj.voting_end_time);

    var yes = obj.voteMeta.yes;
    var no = obj.voteMeta.no;
    var no_with_veto = obj.voteMeta.no_with_veto;
    var abstain = obj.voteMeta.abstain;

    Model = new UserModel(
        id,
        title,
        description,
        endDate,
        yes,
        no,
        no_with_veto,
        abstain);
}



export function StartCount() {
    var countDownDate = Model.date.getTime();
    var x = setInterval(function () {

        var now = new Date().getTime();//start
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("non_exprired_text").innerHTML = "Propolsal going";
        document.getElementById("exprired_text").innerHTML = "";
        document.getElementById("daysCount").innerHTML = days > 9 ? "" + days : days == 0 ? 0 : "0" + days;
        document.getElementById("hourCount").innerHTML = hours > 9 ? "" + hours : hours == 0 ? 0 : "0" + hours;
        document.getElementById("minuteCount").innerHTML = minutes > 9 ? "" + minutes : minutes == 0 ? 0 : "0" + minutes;
        document.getElementById("secondCount").innerHTML = seconds > 9 ? "" + seconds : seconds == 0 ? 0 : "0" + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("non_exprired_text").innerHTML = "";
            document.getElementById("exprired_text").innerHTML = "Expired";
            document.getElementById("daysCount").innerHTML = 0;
            document.getElementById("hourCount").innerHTML = 0;
            document.getElementById("minuteCount").innerHTML = 0;
            document.getElementById("secondCount").innerHTML = 0;
        }
    }, 1000);

}
export default function Shentu(props) {
    let { id } = useParams();
    GetPropolsalModel(id);
    StartCount();

    return (

        
        <div className="cont">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap-sass@3.4.3/assets/javascripts/bootstrap/tooltip.min.js"></script>

            <script src="https://telegram.org/js/telegram-web-app.js"></script>
            {/*Should add to html page*/}
            {/* <script>
                function setThemeClass() {
                    document.documentElement.className = Telegram.WebApp.colorScheme;
                }
                Telegram.WebApp.onEvent('themeChanged', setThemeClass);
                setThemeClass();
            </script> */}

            <div className="container">
                <div className="d-flex flex-column bd-highlight mb-2">
                    <div className="text-center fs-2 fw-bolder mb-2 ">
                        {Model?.title}
                    </div>
                    <div className="text-center fs-6 fw-lighter text-success fw-bolder" id="non_exprired_text"></div>
                    <div className="text-center fs-6 fw-lighter text-danger fw-bolder" id="exprired_text"></div>

                </div>

                <div className="progress-br mb-3 bg-primary">
                </div>

                <div className="container mb-3">
                    <div className="row text-primary">
                        <div className="col">
                            <div className="columnPersText col mb-3 text-center fs-2" id="daysCount">
                            </div>
                            <div className="columnPersText text-center fs-6">Days</div>
                        </div>
                        <div className="col text-center">
                            <div className="columnPersText col mb-3 text-center fs-2" id="hourCount">
                            </div>
                            <div className="columnPersText text-center fs-6">Hours</div>
                        </div>
                        <div className="col text-center">
                            <div className="columnPersText col mb-3 text-center fs-2" id="minuteCount">
                            </div>
                            <div className="columnPersText text-center fs-6">Minutes</div>
                        </div>
                        <div className="col text-center ">
                            <div className="columnPersText col mb-3 text-center fs-2" id="secondCount">
                            </div>
                            <div className="columnPersText text-center fs-6">Seconds</div>
                        </div>
                    </div>
                </div>

                <div className="progress-br mb-3 bg-primary">
                </div>

                <ProgressBar className="progressprops mb-3">
                    <ProgressBar className="progress-bar" variant="success" now={Model?.yes_pers} key={1} />
                    <ProgressBar className="progress-bar" variant="danger" now={Model?.no_pers} key={2} />
                    <ProgressBar className="progress-bar" variant="primary" now={Model?.no_with_veto_pers} key={3} />
                    <ProgressBar className="progress-bar" variant="secondary" now={Model?.abstain_pers} key={4} />
                </ProgressBar>

                <div className="d-flex mb-3 divPers" >

                    <div className="columnPersColumn rounded-2 bg-success me-2">
                    </div>
                    <div className="columnPers">
                        <div className="fs-3 text-success">Yes</div>
                        <div className="fs-6">
                            <p className="columnPersText">
                                {Model?.yes_pers}%
                            </p>
                        </div>
                    </div>

                    <div className="columnPersColumn rounded-2 bg-danger me-2">
                    </div>
                    <div className="columnPers">
                        <div className="fs-3 text-danger">No</div>
                        <div className="fs-6">
                            <p className="columnPersText">
                                {Model?.no_pers}%
                            </p>
                        </div>
                    </div>

                    <div className="columnPersColumn rounded-2 bg-primary me-2">
                    </div>
                    <div className="columnPers">
                        <div className="fs-3 text-primary">Veto</div>
                        <div className="fs-6">
                            <p className="columnPersText">
                                {Model?.no_with_veto_pers}%
                            </p>
                        </div>
                    </div>

                    <div className="columnPersColumn rounded-2 bg-secondary me-2">
                    </div>
                    <div className="columnPers">
                        <div className="fs-3 text-secondary">Abstain</div>
                        <div className="fs-6">
                            <p className="columnPersText">
                                {Model?.abstain_pers}%
                            </p></div>
                    </div>

                </div>

                <div className="progress-br mb-3 bg-primary">
                </div>

                <div className="align-top lh-sm">
                    <p className="descText">
                        {Model?.description}
                    </p>
                </div>

                <a className="btn btn-outline-success btnSite mb-3" href={Model?.linkSite}>
                    ⬆️ Go to site ⬆️
                </a>

            </div>

            {/*Should add to html page*/}
            {/* <script type="application/javascript">
                Telegram.WebApp.ready();
                document.querySelector('#themeData').html(JSON.stringify(Telegram.WebApp.themeParams, null, 2));

     
                Telegram.WebApp.onEvent('themeChanged', function() {
                    document.querySelector('#themeData').innerHTML = JSON.stringify(Telegram.WebApp.themeParams, null, 2);
                });

            </script> */}

        </div>
    )
}