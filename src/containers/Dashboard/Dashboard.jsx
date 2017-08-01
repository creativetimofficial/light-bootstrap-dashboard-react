import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

import {Card} from 'components/Card/Card.jsx';
import {Tasks} from 'components/Tasks/Tasks.jsx';

class Dashboard extends Component {
    render() {
        // Data for Pie Chart
        var dataPie = {
            labels: ['62%','32%','6%'],
            series: [62, 32, 6]
        };

        // Data for Line Chart
        var dataSales = {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
             [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
            [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
            [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
          ]
        };
        var optionsSales = {
          lineSmooth: false,
          low: 0,
          high: 800,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: false,
          showPoint: false,
        };
        var responsiveSales = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        // Data for Bar Chart
        var dataBar = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
          ]
        };
        var optionsBar = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };
        var responsiveBar = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <Card statsIcon="fa fa-clock-o" id="chartPreferences" classes="ct-chart ct-perfect-fourth" title="Email Statistics" category="Last Campaign Performance" stats="Campaign sent 2 days ago">
                                <ChartistGraph data={dataPie} type="Pie"/>
                                <div className="legend">
                                    <i className="fa fa-circle text-info"></i> Open
                                    <i className="fa fa-circle text-danger"></i> Bounce
                                    <i className="fa fa-circle text-warning"></i> Unsubscribe
                                </div>
                            </Card>
                        </div>

                        <div className="col-md-8">
                            <Card statsIcon="fa fa-history" id="chartHours" classes="ct-chart" title="Users Behavior" category="24 Hours performance" stats="Updated 3 minutes ago">
                                <ChartistGraph data={dataSales} type="Line" options={optionsSales} responsive-options={responsiveSales}/>
                                <div className="legend">
                                    <i className="fa fa-circle text-info"></i> Open
                                    <i className="fa fa-circle text-danger"></i> Click
                                    <i className="fa fa-circle text-warning"></i> Click Second Time
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Card id="chartActivity" classes="ct-chart" title="2014 Sales" category="All products including Taxes" stats="Data information certified"  statsIcon="fa fa-check">
                                <ChartistGraph data={dataBar} type="Bar" options={optionsBar} responsive-options={responsiveBar}/>
                                <div className="legend">
                                    <div className="legend">
                                        <i className="fa fa-circle text-info"></i> Tesla Model S
                                        <i className="fa fa-circle text-danger"></i> BMW 5 Series
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="col-md-6">
                            <Card id="" classes="table-full-width" title="Tasks" category="Backend development" stats="Updated 3 minutes ago" statsIcon="fa fa-history">
                                <table className="table">
                                    <Tasks />
                                </table>
                                <div></div>
                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
