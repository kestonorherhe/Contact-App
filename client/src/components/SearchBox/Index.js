import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return <div class="card-body chat-fixed-search">
            <fieldset class="form-group position-relative has-icon-left m-0">
                <input type="text" class="form-control" id="iconLeft" placeholder="Search user" />
                <div class="form-control-position">
                    <i class="ft-search"></i>
                </div>
            </fieldset>
        </div>
    }
}