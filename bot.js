const mineflayer = require("mineflayer");

var settings = {
    username: "AnimeKizi",
    host: "drgtemasmp.sdlf.fun",
};

const bot = mineflayer.createBot(settings);

bot.once("spawn", ()=>{
    bot.chat("Sa");
});

bot.on("move", ()=>{
    let friend = bot.nearestEntity();

    if (friend) {
        bot.lookAt(friend.position.offset(0, friend.height, 0));
    }
});

var walking = false;

bot.on("entityHurt", (entity)=>{
    if (entity != bot.entity) return;
    walking = !walking;
    bot.setControlState("forward", walking);

});
