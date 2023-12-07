function replaceTextEmojis(text) {
    const emojiMap = {
        ":)": "🙂",
        ":(": "🙁",
        ";)": "😉",
        ":D": "😃",
        ";(": "😢",
        "<3": "❤",
        ":p": "😜",
        ":P": "😜",

        // Add more mappings as needed
    };

    return text.replace((/:\)|:\(|;\)|:D|;\(|<3|:p|:P/g), match => emojiMap[match] || match);
}

export default replaceTextEmojis