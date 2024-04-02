function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    const original = string;
    const upperVersion = string.toUpperCase();
    const lowerVersion = string.toLowerCase();

    if (original === lowerVersion){
        return 'I can\'t hear you!';
    } else if (original === upperVersion){
        return 'YES INDEED!';
    } else if (original === 'Let\'s have dinner together!'){
        return 'I would love to!';
    }
}