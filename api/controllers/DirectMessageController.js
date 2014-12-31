/**
 * DirectMessageController
 *
 * @description :: Server-side logic for managing Directmessages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    messagesBetween: function(req, res) {

        var intAttendeeOneID, intAttendeeTwoID;
        try { // Parse out the AttendeeID from request
            intAttendeeOneID = parseInt(req.param('attendeeOneID'));
            intAttendeeTwoID = parseInt(req.param('attendeeTwoID'));
        } catch(err) {
        	sails.log.error(err);
        	return res.badRequest(err);
        }

        sails.log('Looking for messages sent between AttendeeIDs: ' + intAttendeeOneID + ' and ' + intAttendeeTwoID);

        DirectMessage.find({
            or: [{
                senderID: intAttendeeOneID,
                recipientID: intAttendeeTwoID
            }, {
                recipientID: intAttendeeOneID,
                senderID: intAttendeeTwoID
            }]
        }).exec(function(err, messages) {

            if (err) {
                sails.log.error('Error: ' + err);
                return res.serverError(err);
            }

            sails.log('Found ' + messages.length + ' messages');
            return res.ok(messages);
        });
    }

};
