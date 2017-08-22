import React, { Component } from 'react';


import Card from 'components/Card/Card';

class Icons extends Component {
    render() {
        const iconsArray = [
            "pe-7s-album",
            "pe-7s-arc",
            "pe-7s-back-2",
            "pe-7s-bandaid",
            "pe-7s-car",
            "pe-7s-diamond",
            "pe-7s-door-lock",
            "pe-7s-eyedropper",
            "pe-7s-female",
            "pe-7s-gym",
            "pe-7s-hammer",
            "pe-7s-headphones",
            "pe-7s-helm",
            "pe-7s-hourglass",
            "pe-7s-leaf",
            "pe-7s-magic-wand",
            "pe-7s-male",
            "pe-7s-map-2",
            "pe-7s-next-2",
            "pe-7s-paint-bucket",
            "pe-7s-pendrive",
            "pe-7s-photo",
            "pe-7s-piggy",
            "pe-7s-plugin",
            "pe-7s-refresh-2",
            "pe-7s-rocket",
            "pe-7s-settings",
            "pe-7s-shield",
            "pe-7s-smile",
            "pe-7s-usb",
            "pe-7s-vector",
            "pe-7s-wine",
            "pe-7s-cloud-upload",
            "pe-7s-cash",
            "pe-7s-close",
            "pe-7s-bluetooth",
            "pe-7s-cloud-download",
            "pe-7s-way",
            "pe-7s-close-circle",
            "pe-7s-id",
            "pe-7s-angle-up",
            "pe-7s-wristwatch",
            "pe-7s-angle-up-circle",
            "pe-7s-world",
            "pe-7s-angle-right",
            "pe-7s-volume",
            "pe-7s-angle-right-circle",
            "pe-7s-users",
            "pe-7s-angle-left",
            "pe-7s-user-female",
            "pe-7s-angle-left-circle",
            "pe-7s-up-arrow",
            "pe-7s-angle-down",
            "pe-7s-switch",
            "pe-7s-angle-down-circle",
            "pe-7s-scissors",
            "pe-7s-wallet",
            "pe-7s-safe",
            "pe-7s-volume2",
            "pe-7s-volume1",
            "pe-7s-voicemail",
            "pe-7s-video",
            "pe-7s-user",
            "pe-7s-upload",
            "pe-7s-unlock",
            "pe-7s-umbrella",
            "pe-7s-trash",
            "pe-7s-tools",
            "pe-7s-timer",
            "pe-7s-ticket",
            "pe-7s-target",
            "pe-7s-sun",
            "pe-7s-study",
            "pe-7s-stopwatch",
            "pe-7s-star",
            "pe-7s-speaker",
            "pe-7s-signal",
            "pe-7s-shuffle",
            "pe-7s-shopbag",
            "pe-7s-share",
            "pe-7s-server",
            "pe-7s-search",
            "pe-7s-film",
            "pe-7s-science",
            "pe-7s-disk",
            "pe-7s-ribbon",
            "pe-7s-repeat",
            "pe-7s-refresh",
            "pe-7s-add-user",
            "pe-7s-refresh-cloud",
            "pe-7s-paperclip",
            "pe-7s-radio",
            "pe-7s-note2",
            "pe-7s-print",
            "pe-7s-network",
            "pe-7s-prev",
            "pe-7s-mute",
            "pe-7s-power",
            "pe-7s-medal",
            "pe-7s-portfolio",
            "pe-7s-like2",
            "pe-7s-plus",
            "pe-7s-left-arrow",
            "pe-7s-play",
            "pe-7s-key",
            "pe-7s-plane",
            "pe-7s-joy",
            "pe-7s-photo-gallery",
            "pe-7s-pin",
            "pe-7s-phone",
            "pe-7s-plug",
            "pe-7s-pen",
            "pe-7s-right-arrow",
            "pe-7s-paper-plane",
            "pe-7s-delete-user",
            "pe-7s-paint",
            "pe-7s-bottom-arrow",
            "pe-7s-notebook",
            "pe-7s-note",
            "pe-7s-next",
            "pe-7s-news-paper",
            "pe-7s-musiclist",
            "pe-7s-music",
            "pe-7s-mouse",
            "pe-7s-more",
            "pe-7s-moon",
            "pe-7s-monitor",
            "pe-7s-micro",
            "pe-7s-menu",
            "pe-7s-map",
            "pe-7s-map-marker",
            "pe-7s-mail",
            "pe-7s-mail-open",
            "pe-7s-mail-open-file",
            "pe-7s-magnet",
            "pe-7s-loop",
            "pe-7s-look",
            "pe-7s-lock",
            "pe-7s-lintern",
            "pe-7s-link",
            "pe-7s-like",
            "pe-7s-light",
            "pe-7s-less",
            "pe-7s-keypad",
            "pe-7s-junk",
            "pe-7s-info",
            "pe-7s-home",
            "pe-7s-help2",
            "pe-7s-help1",
            "pe-7s-graph3",
            "pe-7s-graph2",
            "pe-7s-graph1",
            "pe-7s-graph",
            "pe-7s-global",
            "pe-7s-gleam",
            "pe-7s-glasses",
            "pe-7s-gift",
            "pe-7s-folder",
            "pe-7s-flag",
            "pe-7s-filter",
            "pe-7s-file",
            "pe-7s-expand1",
            "pe-7s-exapnd2",
            "pe-7s-edit",
            "pe-7s-drop",
            "pe-7s-drawer",
            "pe-7s-download",
            "pe-7s-display2",
            "pe-7s-display1",
            "pe-7s-diskette",
            "pe-7s-date",
            "pe-7s-cup",
            "pe-7s-culture",
            "pe-7s-crop",
            "pe-7s-credit",
            "pe-7s-copy-file",
            "pe-7s-config",
            "pe-7s-compass",
            "pe-7s-comment",
            "pe-7s-coffee",
            "pe-7s-cloud",
            "pe-7s-clock",
            "pe-7s-check",
            "pe-7s-chat",
            "pe-7s-cart",
            "pe-7s-camera",
            "pe-7s-call",
            "pe-7s-calculator",
            "pe-7s-browser",
            "pe-7s-box2",
            "pe-7s-box1",
            "pe-7s-bookmarks",
            "pe-7s-bicycle",
            "pe-7s-bell",
            "pe-7s-battery",
            "pe-7s-ball",
            "pe-7s-back",
            "pe-7s-attention",
            "pe-7s-anchor",
            "pe-7s-albums",
            "pe-7s-alarm",
            "pe-7s-airplay"
        ];

        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <Card
                                title="202 Awesome Stroke Icons"
                                contentClass="all-icons"
                                category={
                                    <span>
                                        Handcrafted by our friends from <a target="_blank" rel="noopener noreferrer" href="http://themes-pixeden.com/font-demos/7-stroke/index.html">Pixeden</a>
                                    </span>
                                }
                                content={
                                    <div className="row">
                                        {
                                            iconsArray.map((prop,key) => {
                                                return (
                                                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6" key={key}>
                                                        <div className="font-icon-detail">
                                                            <i className={prop}></i>
                                                            <input type="text" defaultValue={prop} />
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Icons;
