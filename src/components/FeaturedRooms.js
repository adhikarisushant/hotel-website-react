import React, { Component } from 'react'
import {RoomContext} from '../context'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
                return(
                    <div>
                        Heelo from featured rooms
                    </div>
                )
    }
}
