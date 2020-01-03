import Pusher from 'pusher-js/react-native';
import Config from 'src/config.js';
import { Helper } from 'common';
export default {
  pusher: null,
  channel: null,
  listen (callback) {
    this.pusher = new Pusher(Config.PUSHER.key, Config.PUSHER);
    this.channel = this.pusher.subscribe(Helper.pusher.channel);
    this.channel.bind(Helper.pusher.notifications, response => {
      console.log('response', response);
      callback({type: Helper.pusher.notifications, data: response})
      // add notification here
    })
    this.channel.bind(Helper.pusher.messages, response => {
      console.log('response', response);
      callback({type: Helper.pusher.messages, data: response})
      // add messages here
    })
    this.channel.bind(Helper.pusher.validation, response => {
      console.log('response', response);
      callback({type: Helper.pusher.validation, data: response})
      // add validation here
    })
  }
}