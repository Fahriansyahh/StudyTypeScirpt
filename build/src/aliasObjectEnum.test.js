export var dataEnum;
(function (dataEnum) {
    dataEnum[dataEnum["REGULAR"] = 0] = "REGULAR";
    dataEnum[dataEnum["GOLD"] = 1] = "GOLD";
    dataEnum[dataEnum["PLATINUM"] = 2] = "PLATINUM";
})(dataEnum || (dataEnum = {}));
export var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction["Down"] = "asdsa";
    Direction["Left"] = "as";
    Direction[Direction["Right"] = 2] = "Right";
})(Direction || (Direction = {}));
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
export var FileAccess;
(function (FileAccess) {
    //! ini juga bisa dikasih operator
    // +, -, *, /, %, <<, >>, >>>, &, |,
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 8] = "Read";
    FileAccess[FileAccess["Write"] = 0.5] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 8] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
