const Event = require('../../models/event');
const User = require('../../models/user');
const { dateToString} = require('../../helpers/date');

const events = eventIds =>{
    return Event.find({_id: {$in: eventIds}})
    .then(events =>{
        return events.map(event =>{
            return transformEvent(event)
        })
    })
    .catch(err =>{throw err})
};
const singleEvent = async eventId =>{
    try {
        const event = await Event.findById(eventId);
        return transformEvent(event);
        
    } catch (error) {
        throw error
    }
}
const user = userId =>{
    return User.findById(userId)
    .then(user => {
        return { 
            ...user._doc,
            _id: user.id,            
            createEvent: events.bind(this, user._doc.createdEvent)
         };
    })
    .catch(err => {
        throw err
    })
};

const transformEvent = event =>{
    return {...event._doc,
        _id: event.id,
        date: dateToString(event._doc.date),
        creator: user.bind(this, event.creator)
    };
};

const transformBooking = booking =>{
    return  {
        ...result._doc,
        id: result.id,
        user: user.bind(this, booking._doc.user),
        event: singleEvent.bind(this, booking._doc.event),
        createdAt: dateToString(result._doc.createdAt),
        updateddAt: dateToString(result._doc.updatedAt)
    };
};


 exports.transformEvent = transformEvent;
 exports.transformBooking = transformBooking;
// exports.singleEvent =singleEvent;