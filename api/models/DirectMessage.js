/**
 * DirectMessage.js
 *
 * @description :: A message sent directly between 2 Attendees
 */

module.exports = {

    attributes: {
    	senderID : {
    		type: 'integer',
    		required: true
    	},
   		recipientID : {
   			type: 'integer',
   			required: true
   		},
   		message : {
   			type: 'string',
   			required: true
   		}
    }
};
