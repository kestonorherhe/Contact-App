import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return <div class="sidebar-detached sidebar-left" >
            <div class="sidebar"><div class="bug-list-sidebar-content">
                {/* <!-- Predefined Views --> */}
                <div class="card">
                    <div class="card-head">
                        <div class="media p-1">
                            <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar" /><i></i></span></div>
                            <div class="media-body media-middle">
                                <h5 class="media-heading">Margaret Govan</h5>
                            </div>
                        </div>
                    </div>

                    {/* <!-- contacts view --> */}
                    <div class="card-body border-top-blue-grey border-top-lighten-5">
                        <div class="list-group">
                            <a href="#" class="list-group-item active">All Contacts</a>
                            <a href="#" class="list-group-item list-group-item-action">Recently contacted</a>
                            <a href="#" class="list-group-item list-group-item-action">Favorite contacts</a>
                        </div>
                    </div>

                    {/* <!-- Groups--> */}
                    <div class="card-body">
                        <p class="lead">Groups</p>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="badge badge-primary badge-pill float-right">14</span> <a href="#"> Project</a>
                            </li>
                            <li class="list-group-item">
                                <span class="badge badge-info badge-pill float-right">22</span> <a href="#"> Team</a>
                            </li>
                            <li class="list-group-item">
                                <span class="badge badge-warning badge-pill float-right">10</span> <a href="#"> Clients</a>
                            </li>
                            <li class="list-group-item">
                                <span class="badge badge-success badge-pill float-right">5</span> <a href="#"> Friends</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!--/ Groups--> */}

                    {/* <!--More--> */}
                    <div class="card-body ">
                        <p class="lead">More</p>
                        <ul class="list-group">
                            <li><a href="#" class="list-group-item">Import</a></li>
                            <li><a href="#" class="list-group-item">Export</a></li>
                            <li><a href="#" class="list-group-item">Print</a></li>
                            <li><a href="#" class="list-group-item">Restore contacts</a></li>
                            <li><a href="#" class="list-group-item">Find duplicate</a></li>
                        </ul>
                    </div>
                    {/* <!--/More--> */}

                </div>
                {/* <!--/ Predefined Views --> */}

            </div>
            </div>
        </div >
    }
}