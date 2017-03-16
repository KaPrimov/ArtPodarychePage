function classes() {
    let url = "https://baas.kinvey.com/appdata/kid_BJe588Szx/football-matches";
    let headers = {
        "Authorization": "Basic Z3Vlc3Q6Z3Vlc3Q=",
        "Content-Type": "application/json"
    };

    let myBets = [];

    class AppView extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                myBets: []
            }
        }
        render() {
            return (
                <div className="wrapper">
                    <TitleBar/>
                    <ButtonHolder
                        betsClicked={this.showBetsView.bind(this)}
                        matchesClicked={this.showMatchesView.bind(this)}
                    />
                    <div className="content-holder"></div>
                </div>
            )
        }
        showBetsView() {
            ReactDOM.render(
                <Bets/>,
                document.getElementsByClassName('content-holder')[0]
            )

        }
        showMatchesView() {
            (function loadMatches() {
                return $.ajax({
                    method: "GET",
                    url: url,
                    headers: headers
                });
            })().then(loadMatchesSuccess.bind(this));
            function loadMatchesSuccess(games) {
                ReactDOM.render(
                    <Matches games={games}/>,
                    document.getElementsByClassName('content-holder')[0]
                )
            }


        }
    }

    class TitleBar extends React.Component{
        render() {
            return (
                <header>
                    <div>Dollar Football</div>


                </header>
            )
        }
    }

    class ButtonHolder extends React.Component{

        render() {
            return (
                <div className="button-holder">
                    <button id="bets" className="button" onClick={this.props.betsClicked}>My Bets</button>
                    <button id="matches" className="button" onClick={this.props.matchesClicked}>Matches</button>
                </div>
            )
        }

    }

    class Bets extends React.Component{
        render() {
            let myPersonalBets = myBets.map((match, id) =>
                <tr>
                    <td key={id}> {match.homeTeam} </td>
                    <td> {match.awayTeam} </td>
                    <td> {match.start} </td>
                    <td> {match.betOn} </td>
                    <td> {match.ratio} </td>
                    <td> {match.value} </td>
                    <td> {Number(match.estimatedWinnings.toFixed(2))} </td>
                </tr>
            );
            return (
                <table>
                    <thead>
                    <tr>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Start</th>
                        <th>Bet On</th>
                        <th>Ratio</th>
                        <th>Value</th>
                        <th>Estimated Winnings</th>
                    </tr>
                    </thead>
                    <tbody>
                    {myPersonalBets}
                    </tbody>
                </table>

            )
        }
    }

    class Matches extends React.Component{
        render() {
            let games = this.props.games;
            games = games.sort(function (elem1, elem2) {
                let time1 = elem1.time.split(" ")[0];
                let format1 = elem1.time.split(" ")[1];

                let time2 = elem2.time.split(" ")[0];
                let format2 = elem2.time.split(" ")[1];

                let hour1 = Number(time1.split(":")[0]);
                let minutes1 = Number(time1.split(":")[1]);

                let hour2 = Number(time2.split(":")[0]);
                let minutes2 = Number(time2.split(":")[1]);

                let result = format1.localeCompare(format2);

                if (result == 0) {
                    result = hour1 - hour2;
                }

                if (result == 0) {
                    result = minutes1 - minutes2;
                }

                return result;
            });
            let matchesRows = this.props.games.map(game => {
                let id = game.id;
                let hasBet = false;
                let lastThreeColumns;
                myBets.forEach(function (myBet) {
                    if (myBet.id == game.id) {
                        hasBet = true;
                    }
                });
                if (!hasBet) {
                    return (
                        <tr>
                            <td id={'match-' + id}>{id}</td>
                            <td id={'"match-' + id + '-home"'}>{game.home}</td>
                            <td id={'"match-' + id + '-away"'}>{game.away}</td>
                            <td id={'"match-' + id + '-time"'}>{game.time}</td>
                            <td id={'"match-' + id + '-win"'}>{game.ratio['1']}</td>
                            <td id={'"match-' + id + '-draw"'}>{game.ratio['x']}</td>
                            <td id={'"match-' + id + '-lose"'}>{game.ratio['2']}</td>
                            <td id={'"match-' + id + '-bet"'}><input type="number" min="1" max="1000000"/></td>
                            <td id={'"match-' + id + '-bet-type"'}>
                                <select>
                                    <option>Win</option>
                                    <option>Draw</option>
                                    <option>Lose</option>
                                </select>
                            </td>
                            <td id={'"match-' + id + '-button"'}>
                                <button onClick={this.handleBet}>Bet</button>
                            </td>

                        </tr>

                    )
                } else {
                    return (
                        <tr>
                            <td id={'match-' + id}>{id}</td>
                            <td id={'match-' + id + '-home'}>{game.home}</td>
                            <td id={'match-' + id + '-away'}>{game.away}</td>
                            <td id={'match-' + id + '-time'}>{game.time}</td>
                            <td id={'match-' + id + '-win'}>{game.ratio['1']}</td>
                            <td id={'match-' + id + '-draw'}>{game.ratio['x']}</td>
                            <td id={'match-' + id + '-lose'}>{game.ratio['2']}</td>
                            <td id={'match-' + id + '-bet'}><input type="number" min="1" max="1000000" disabled/></td>
                            <td id={'match-' + id + '-bet-type'}><select disabled></select></td>
                            <td id={'match-' + id + '-button'}>
                                <button disabled>Bet</button>
                            </td>
                        </tr>
                    )
                }
            });
            return (
                <table id="matchesTable">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Start</th>
                        <th>Win</th>
                        <th>Draw</th>
                        <th>Loose</th>
                        <th>Bet</th>
                        <th>Bet On</th>
                        <th>Submit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {matchesRows}
                    </tbody>
                </table>
            )
        }
        handleBet(event) {
            let game = $(event.target).parent().parent();
            let id = Number($(game.find('td')[0]).text());
            let homeTeam = $(game.find('td')[1]).text();
            let awayTeam = $(game.find('td')[2]).text();
            let start = $(game.find('td')[3]).text();
            let betOn = $(game.find('td')[8]).find(':selected').val();
            let colRatio = 0;
            if(betOn === 'Win') {
                colRatio = 4;
                betOn = 'win'
            } else if (betOn === 'Draw') {
                colRatio = 5;
                betOn = 'draw'
            } else {
                colRatio = 6;
                betOn = 'lose'
            }
            let ratio = Number($(game.find('td')[colRatio]).text());
            let value = Number($(game.find('td')[7]).find('input').val());
            let estimatedWinnings = ratio * value;
            let myBet = {
                id: id,
                homeTeam: homeTeam,
                awayTeam: awayTeam,
                start: start,
                betOn: betOn,
                ratio: ratio,
                value: value,
                estimatedWinnings: estimatedWinnings
            };
            myBets.push(myBet);
            console.log(myBets);
            $(game.find('td')[7]).find('input').attr('disabled', 'disabled');
            $(game.find('td')[8]).find('select').attr('disabled', 'disabled');
            $(game.find('td')[8]).find('select').empty();
            $(game.find('td')[9]).find('button').attr('disabled', 'disabled');

        }
    }
    ReactDOM.render(
        <AppView />,
        document.getElementById('app')
    );

    return {
        AppView: AppView,
        TitleBar: TitleBar,
        ButtonHolder: ButtonHolder,
        Bets: Bets,
        Matches: Matches};

}
classes();