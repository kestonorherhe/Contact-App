import React, { Component } from 'react';
import update from 'react-addons-update'
import Navbar from '../Navbar/Index';
import SearchBox from '../SearchBox/Index';

export default class Index extends Component {
    render() {
        return <div class="app-content content">
            <div class="content-wrapper">
                <div class="content-header row">
                    <div class="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                        <h3 class="content-header-title mb-0 d-inline-block">Contacts</h3>
                        <div class="row breadcrumbs-top d-inline-block">
                            <div class="breadcrumb-wrapper col-12">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index-2.html">Home</a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">Apps</a>
                                    </li>
                                    <li class="breadcrumb-item active">Contacts
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="content-header-right col-md-6 col-12">
                        <div class="btn-group float-md-right">
                            <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                            <div class="dropdown-menu arrow"><a class="dropdown-item" href="#"><i class="fa fa-calendar-check mr-1"></i> Calender</a><a class="dropdown-item" href="#"><i class="fa fa-cart-plus mr-1"></i> Cart</a><a class="dropdown-item" href="#"><i class="fa fa-life-ring mr-1"></i> Support</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="fa fa-cog mr-1"></i> Settings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-detached content-right">
                    <div class="content-body"><section class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="bug-list-search">
                                        <div class="bug-list-search-content">
                                            <form action="#">
                                                <div class="position-relative">
                                                    <input type="search" id="search-contacts" class="form-control" placeholder="Search contacts..."/>
                                                    <div class="form-control-position">
                                                        <i class="la la-search text-size-base text-muted la-rotate-270"></i>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                        <section class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-head">
                                        <div class="card-header">
                                            <h4 class="card-title">All Contacts</h4>
                                            <a class="heading-elements-toggle"><i class="la la-ellipsis-h font-medium-3"></i></a>
                                            <div class="heading-elements">
                                                <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#AddContactModal"><i class="ft-plus white"></i>
                                                    Add Contacts</button>
                                                <div class="modal fade" id="AddContactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1"
                                                    aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <section class="contact-form">
                                                                <form id="form-add-contact" class="contact-input">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel1">Add New Task</h5>
                                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="contact-name" class="contact-name form-control" placeholder="Name" />
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="contact-email" class="contact-email form-control" placeholder="Email" />
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="contact-phone" class="contact-phone form-control" placeholder="Phone Number" />
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="checkbox" id="favorite" class="contact-fav input-chk" /> Favorite
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="file" class="form-control-file" id="user-image" />
                                                                        </fieldset>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <fieldset class="form-group position-relative has-icon-left mb-0">
                                                                            <button type="button" id="add-contact-item" class="btn btn-info add-contact-item" data-dismiss="modal"><i
                                                                                                    class="la la-paper-plane-o d-lg-none"></i> <span class="d-none d-lg-block">Add New</span></button>
                                                                        </fieldset>
                                                                    </div>
                                                                </form>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal fade" id="EditContactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                                                        aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <section class="contact-form">
                                                                <form id="form-edit-contact" class="contact-input">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
                                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="name" class="name form-control" placeholder="Name" />
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="email" class="email form-control" placeholder="Email"/>
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="phone" class="phone form-control" placeholder="Phone Number"/>
                                                                        </fieldset>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <fieldset class="form-group position-relative has-icon-left mb-0">
                                                                            <button type="button" id="edit-contact-item" class="btn btn-info edit-contact-item" data-dismiss="modal"><i
                                                                                                                class="la la-paper-plane-o d-lg-none"></i> <span class="d-none d-lg-block">Edit</span></button>
                                                                        </fieldset>
                                                                    </div>
                                                                </form>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span class="dropdown">
                                                    <button id="btnSearchDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="btn btn-warning dropdown-toggle dropdown-menu-right btn-sm"><i
                                                                                        class="ft-download-cloud white"></i></button>
                                                    <span aria-labelledby="btnSearchDrop1" class="dropdown-menu mt-1 dropdown-menu-right">
                                                        <a href="#" class="dropdown-item"><i class="ft-upload"></i> Import</a>
                                                        <a href="#" class="dropdown-item"><i class="ft-download"></i> Export</a>
                                                        <a href="#" class="dropdown-item"><i class="ft-shuffle"></i> Find Duplicate</a>
                                                    </span>
                                                </span>
                                                <button class="btn btn-default btn-sm"><i class="ft-settings white"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-content">
                                        <div class="card-body">
                                            {/* <!-- Task List table --> */}
                                            {/* <button type="button" class="btn btn-danger delete-all">Delete All</button> */}
                                            <div class="table-responsive">
                                                <table id="users-contacts" class="table table-white-space table-bordered row-grouping display no-wrap icheck table-middle text-center">
                                                    <thead>
                                                        <tr>
                                                            <th><input type="checkbox" class="input-chk" id="check-all"/></th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Favorite</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check" /></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-2.png"
                                                                                                                alt="avatar" /><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Alice Collins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">alice@example.com</a>
                                                            </td>
                                                            <td class="phone">+658-254-256</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop2" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check" /></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-1.png"
                                                                                                                        alt="avatar" /><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Margaret Govan</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">margaret@example.com</a>
                                                            </td>
                                                            <td class="phone">+125-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right secondary"><i
                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop3" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/>></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-4.png"
                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Eugene Woods</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">eugene@example.com</a>
                                                            </td>
                                                            <td class="phone">+987-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop4" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-3.png"
                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Russell Bryant</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">russell@example.com</a>
                                                            </td>
                                                            <td class="phone">+235-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop5" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-6.png"
                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Cynthia Tucker</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">cynthia@example.com</a>
                                                            </td>
                                                            <td class="phone">+987-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop6" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check" />></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-busy rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-5.png"
                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Scott Marshall</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">scott@example.com</a>
                                                            </td>
                                                            <td class="phone">+954-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop7" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/>></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-away rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-8.png"
                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Catherine Smith</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">catherine@example.com</a>
                                                            </td>
                                                            <td class="phone">+254-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop8" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/>></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-off rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-7.png"
                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Eric Howard</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">eric@example.com</a>
                                                            </td>
                                                            <td class="phone">+545-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop9" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop9" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-9.png"
                                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Donald Watkins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">donald@example.com</a>
                                                            </td>
                                                            <td class="phone">+987-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop10" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-10.png"
                                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Brittany Barnes</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">brittany@example.com</a>
                                                            </td>
                                                            <td class="phone">+632-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop11" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-busy rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-5.png"
                                                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Scott Marshall</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">scott@example.com</a>
                                                            </td>
                                                            <td class="phone">+954-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop12" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-away rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-8.png"
                                                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Catherine Smith</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">catherine@example.com</a>
                                                            </td>
                                                            <td class="phone">+254-654-564</td>
                                                            <td class="text-center">
                                                                <div class="mb-1 favorite"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop13" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop13" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-off rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-7.png"
                                                                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Eric Howard</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">eric@example.com</a>
                                                            </td>
                                                            <td class="phone">+545-654-564</td>
                                                            <td class="text-center">
                                                                <div class="mb-1 favorite"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop14" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop14" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-9.png"
                                                                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Donald Watkins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">donald@example.com</a>
                                                            </td>
                                                            <td class="phone">+987-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop15" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop15" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-10.png"
                                                                                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Brittany Barnes</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">brittany@example.com</a>
                                                            </td>
                                                            <td class="phone">+632-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop16" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop16" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-2.png"
                                                                                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Alice Collins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">alice@example.com</a>
                                                            </td>
                                                            <td class="phone">+658-254-256</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop17" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop17" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-1.png"
                                                                                                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Margaret Govan</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">margaret@example.com</a>
                                                            </td>
                                                            <td class="phone">+125-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop18" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop18" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-4.png"
                                                                                                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Eugene Woods</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">eugene@example.com</a>
                                                            </td>
                                                            <td class="phone">+987-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop19" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop19" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-3.png"
                                                                                                                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Russell Bryant</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">russell@example.com</a>
                                                            </td>
                                                            <td class="phone">+235-654-564</td>
                                                            <td class="text-center">
                                                                <div class="mb-1 favorite"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop20" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop20" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-6.png"
                                                                                                                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Cynthia Tucker</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">cynthia@example.com</a>
                                                            </td>
                                                            <td class="phone">+987-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop21" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop21" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-4.png"
                                                                                                                                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Eugene Woods</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">eugene@example.com</a>
                                                            </td>
                                                            <td class="phone">+987-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop22" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop22" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-3.png"
                                                                                                                                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="name media-heading">Russell Bryant</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">russell@example.com</a>
                                                            </td>
                                                            <td class="phone">+235-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop23" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop23" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-6.png"
                                                                                                                                                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Cynthia Tucker</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">cynthia@example.com</a>
                                                            </td>
                                                            <td class="phone">+987-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop24" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop24" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-2.png"
                                                                                                                                                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Alice Collins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">alice@example.com</a>
                                                            </td>
                                                            <td class="phone">+658-254-256</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop25" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop25" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-1.png"
                                                                                                                                                                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Margaret Govan</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">margaret@example.com</a>
                                                            </td>
                                                            <td class="phone">+125-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop26" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop26" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-busy rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-5.png"
                                                                                                                                                                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Scott Marshall</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">scott@example.com</a>
                                                            </td>
                                                            <td class="phone">+954-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop27" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop27" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-away rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-8.png"
                                                                                                                                                                                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Catherine Smith</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">catherine@example.com</a>
                                                            </td>
                                                            <td class="phone">+254-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop28" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop28" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-off rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-7.png"
                                                                                                                                                                                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Eric Howard</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">eric@example.com</a>
                                                            </td>
                                                            <td class="phone">+545-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop29" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop29" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-9.png"
                                                                                                                                                                                                                                                                                                                                                alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Donald Watkins</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">donald@example.com</a>
                                                            </td>
                                                            <td class="phone">+987-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite active mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop30" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                                                                                                    class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop30" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                                                                                                        Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" class="input-chk check"/></td>
                                                            <td>
                                                                <div class="media">
                                                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-10.png"
                                                                                                                                                                                                                                                                                                                                                        alt="avatar"/><i></i></span></div>
                                                                    <div class="media-body media-middle">
                                                                        <a class="media-heading name">Brittany Barnes</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="text-center">
                                                                <a class="email" href="mailto:email@example.com">brittany@example.com</a>
                                                            </td>
                                                            <td class="phone">+632-654-564</td>
                                                            <td class="text-center">
                                                                <div class="favorite mb-1"></div>
                                                            </td>
                                                            <td>
                                                                <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                                                                <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                                                                <span class="dropdown">
                                                                    <a id="btnSearchDrop31" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                                                                                                                                                                                                                                                                                                                                            class="la la-ellipsis-v"></i></a>
                                                                    <span aria-labelledby="btnSearchDrop31" class="dropdown-menu mt-1 dropdown-menu-right">
                                                                        <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                                                                                                                                                                                                                                                                                                                                                Edit</a>
                                                                        <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                                                        <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                                                                    </span>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th></th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Favorite</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="sidebar-detached sidebar-left">
                    <div class="sidebar"><div class="bug-list-sidebar-content">
                        {/* <!-- Predefined Views --> */}
                        <div class="card">
                            <div class="card-head">
                                <div class="media p-1">
                                    <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-1.png" alt="avatar"/><i></i></span></div>
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
                </div>
            </div>
        </div>
    }
}