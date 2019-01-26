var getUser = (id, callback) => {
    var user = {
        id: id,
        name:'Vik'
    }
    setTimeout(() => {
        callback(user);
    },  3000);
    
};

getUser(55,(userObj) => {
    console.log(userObj);
});