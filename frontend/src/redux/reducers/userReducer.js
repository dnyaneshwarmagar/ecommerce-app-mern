const userInitialState = {
name:"John",
email:"john@exmaple.com",
addresses:[{
    first_name:"John",
    last_name:"Doe",
    address1:"123",
    address2:"New Street",
    state:"Maharashtra",
    country:"India",
    pincode:411055,
    phone:+91-2214512345
},
{
    first_name:"John",
    last_name:"Smith",
    address1:"234",
    address2:"Old Street",
    state:"Maharashtra",
    country:"India",
    pincode:411058,
    phone:+91-4392298722
}
],
orders:[],

}

const userReducer = (state= userInitialState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default userReducer;