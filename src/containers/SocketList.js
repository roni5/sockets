import { connect } from 'react-redux'
import SocketListComponent from '../components/socketList'

export const SocketList = connect(state => ({
	url: state.url
}), {})(SocketListComponent)