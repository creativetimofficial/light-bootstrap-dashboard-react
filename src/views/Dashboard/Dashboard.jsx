import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';


import {Card} from 'components/Card/Card.jsx';
import {Tasks} from 'components/Tasks/Tasks.jsx';
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from 'variables/Variables.jsx';

class Dashboard extends Component {
    createLegend(json){
        var legend = [];
        for(var i = 0; i < json["names"].length; i++){
            var type = "fa fa-circle text-"+json["types"][i];
            legend.push(
                <i className={type} key={i}></i>
            );
            legend.push(" ");
            legend.push(
                json["names"][i]
            );
        }
        return legend;
    }
    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <Card
                                statsIcon="fa fa-clock-o"
                                id="chartPreferences"
                                classes="ct-chart ct-perfect-fourth"
                                title="Email Statistics"
                                category="Last Campaign Performance"
                                stats="Campaign sent 2 days ago"
                                content={
                                    <ChartistGraph data={dataPie} type="Pie"/>
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendPie)}
                                    </div>
                                }
                            />
                        </div>

                        <div className="col-md-8">
                            <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                classes="ct-chart"
                                title="Users Behavior"
                                category="24 Hours performance"
                                stats="Updated 3 minutes ago"
                                content={
                                    <ChartistGraph
                                        data={dataSales}
                                        type="Line"
                                        options={optionsSales}
                                        responsiveOptions={responsiveSales}/>
                                    }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendSales)}
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Card
                                id="chartActivity"
                                classes="ct-chart"
                                title="2014 Sales"
                                category="All products including Taxes"
                                stats="Data information certified"
                                statsIcon="fa fa-check"
                                content={
                                    <ChartistGraph
                                        data={dataBar}
                                        type="Bar"
                                        options={optionsBar}
                                        responsiveOptions={responsiveBar}
                                    />
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendBar)}
                                    </div>
                                }
                            />
                        </div>

                        <div className="col-md-6">
                            <Card
                                classes="table-full-width"
                                title="Tasks"
                                category="Backend development"
                                stats="Updated 3 minutes ago"
                                statsIcon="fa fa-history"
                                content={
                                    <table className="table">
                                        <Tasks />
                                    </table>
                                }
                            />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Dashboard;
